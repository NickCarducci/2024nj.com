import Shuttle from "./shuttle";

export default function Esprima(esprima, parse, logger, lang) {
  //"use strict";
  var transform,
    baseIndentRegExp = /^([ \t]+)/,
    indentRegExp = /\{[\r\n]+([ \t]+)/,
    keyRegExp = /^[_A-Za-z]([A-Za-z\d_]*)$/,
    bulkIndentRegExps = {
      "\n": /\n/g,
      "\r\n": /\r\n/g
    };

  function applyIndent(str, indent, lineReturn) {
    var regExp = bulkIndentRegExps[lineReturn];
    return str.replace(regExp, "$&" + indent);
  }

  transform = {
    toTransport: Shuttle,

    /**
     * Modify the contents of a require.config/requirejs.config call. This
     * call will LOSE any existing comments that are in the config string.
     *
     * @param  {String} fileContents String that may contain a config call
     * @param  {Function} onConfig Function called when the first config
     * call is found. It will be passed an Object which is the current
     * config, and the onConfig function should return an Object to use
     * as the config.
     * @return {String} the fileContents with the config changes applied.
     */
    modifyConfig: function (fileContents, onConfig) {
      var details = parse.findConfig(fileContents),
        config = details.config;

      if (config) {
        config = onConfig(config);
        if (config) {
          return transform.serializeConfig(
            config,
            fileContents,
            details.range[0],
            details.range[1],
            {
              quote: details.quote
            }
          );
        }
      }

      return fileContents;
    },

    serializeConfig: function (config, fileContents, start, end, options) {
      //Calculate base level of indent
      var indent,
        match,
        configString,
        outDentRegExp,
        baseIndent = "",
        startString = fileContents.substring(0, start),
        existingConfigString = fileContents.substring(start, end),
        lineReturn = existingConfigString.indexOf("\r") === -1 ? "\n" : "\r\n",
        lastReturnIndex = startString.lastIndexOf("\n");

      //Get the basic amount of indent for the require config call.
      if (lastReturnIndex === -1) {
        lastReturnIndex = 0;
      }

      match = baseIndentRegExp.exec(
        startString.substring(lastReturnIndex + 1, start)
      );
      if (match && match[1]) {
        baseIndent = match[1];
      }

      //Calculate internal indentation for config
      match = indentRegExp.exec(existingConfigString);
      if (match && match[1]) {
        indent = match[1];
      }

      if (!indent || indent.length < baseIndent) {
        indent = "  ";
      } else {
        indent = indent.substring(baseIndent.length);
      }

      outDentRegExp = new RegExp("(" + lineReturn + ")" + indent, "g");

      configString = transform.objectToString(config, {
        indent: indent,
        lineReturn: lineReturn,
        outDentRegExp: outDentRegExp,
        quote: options && options.quote
      });

      //Add in the base indenting level.
      configString = applyIndent(configString, baseIndent, lineReturn);

      return startString + configString + fileContents.substring(end);
    },

    /**
     * Tries converting a JS object to a string. This will likely suck, and
     * is tailored to the type of config expected in a loader config call.
     * So, hasOwnProperty fields, strings, numbers, arrays and functions,
     * no weird recursively referenced stuff.
     * @param  {Object} obj        the object to convert
     * @param  {Object} options    options object with the following values:
     *         {String} indent     the indentation to use for each level
     *         {String} lineReturn the type of line return to use
     *         {outDentRegExp} outDentRegExp the regexp to use to outdent functions
     *         {String} quote      the quote type to use, ' or ". Optional. Default is "
     * @param  {String} totalIndent the total indent to print for this level
     * @return {String}            a string representation of the object.
     */
    objectToString: function (obj, options, totalIndent) {
      var startBrace,
        endBrace,
        nextIndent,
        first = true,
        value = "",
        lineReturn = options.lineReturn,
        indent = options.indent,
        outDentRegExp = options.outDentRegExp,
        quote = options.quote || '"';

      totalIndent = totalIndent || "";
      nextIndent = totalIndent + indent;

      if (obj === null) {
        value = "null";
      } else if (obj === undefined) {
        value = "undefined";
      } else if (typeof obj === "number" || typeof obj === "boolean") {
        value = obj;
      } else if (typeof obj === "string") {
        //Use double quotes in case the config may also work as JSON.
        value = quote + lang.jsEscape(obj) + quote;
      } else if (lang.isArray(obj)) {
        lang.each(obj, function (item, i) {
          value +=
            (i !== 0 ? "," + lineReturn : "") +
            nextIndent +
            transform.objectToString(item, options, nextIndent);
        });

        startBrace = "[";
        endBrace = "]";
      } else if (lang.isFunction(obj) || lang.isRegExp(obj)) {
        //The outdent regexp just helps pretty up the conversion
        //just in node. Rhino strips comments and does a different
        //indent scheme for Function toString, so not really helpful
        //there.
        value = obj.toString().replace(outDentRegExp, "$1");
      } else {
        //An object
        lang.eachProp(obj, function (v, prop) {
          value +=
            (first ? "" : "," + lineReturn) +
            nextIndent +
            (keyRegExp.test(prop)
              ? prop
              : quote + lang.jsEscape(prop) + quote) +
            ": " +
            transform.objectToString(v, options, nextIndent);
          first = false;
        });
        startBrace = "{";
        endBrace = "}";
      }

      if (startBrace) {
        value =
          startBrace + lineReturn + value + lineReturn + totalIndent + endBrace;
      }

      return value;
    }
  };

  return transform;
}
