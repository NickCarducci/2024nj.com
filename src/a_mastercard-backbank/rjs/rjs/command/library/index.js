import Commonly from "./";
import Logger from "./logger";
import UniWeb from "./uniweb";
import Closures from "./closures";
import Buildy from "./buildy";
import Browser from "./browser";
import RFile from "./rfile";
import XPConnect from "./XPConnect";
import Rhino from "./rhino";
import Node from "./node";
/**
 * Loads the library files that can be used for the optimizer, or for other
 * tasks.
 */
export default function Library() {
  /*jslint strict: false */
  /*global Packages: false, process: false, window: false, navigator: false,
  document: false, define: false */

  /**
   * A plugin that modifies any /env/ path to be the right path based on
   * the host environment. Right now only works for Node, Rhino and browser.
   */
  (function () {
    var pathRegExp = /(\/|^)env\/|\{env\}/,
      env = "unknown";

    if (
      typeof process !== "undefined" &&
      process.versions &&
      !!process.versions.node
    ) {
      env = "node";
    } else if (typeof Packages !== "undefined") {
      env = "rhino";
    } else if (
      (typeof navigator !== "undefined" && typeof document !== "undefined") ||
      (typeof importScripts !== "undefined" && typeof self !== "undefined")
    ) {
      env = "browser";
    } else if (
      typeof Components !== "undefined" &&
      Components.classes &&
      Components.interfaces
    ) {
      env = "xpconnect";
    }

    define("env", {
      get: function () {
        return env;
      },

      load: function (name, req, load, config) {
        //Allow override in the config.
        if (config.env) {
          env = config.env;
        }

        name = name.replace(pathRegExp, function (match, prefix) {
          if (match.indexOf("{") === -1) {
            return prefix + env + "/";
          } else {
            return env;
          }
        });

        req([name], function (mod) {
          load(mod);
        });
      }
    });
  })();
  /*jslint plusplus: true */
  /*global define, java */

  define("lang", function () {
    "use strict";

    var lang,
      isJavaObj,
      hasOwn = Object.prototype.hasOwnProperty;

    function hasProp(obj, prop) {
      return hasOwn.call(obj, prop);
    }

    isJavaObj = function () {
      return false;
    };

    //Rhino, but not Nashorn (detected by importPackage not existing)
    //Can have some strange foreign objects.
    if (
      typeof java !== "undefined" &&
      java.lang &&
      java.lang.Object &&
      typeof importPackage !== "undefined"
    ) {
      isJavaObj = function (obj) {
        return obj instanceof java.lang.Object;
      };
    }

    lang = {
      backSlashRegExp: /\\/g,
      ostring: Object.prototype.toString,

      isArray:
        Array.isArray ||
        function (it) {
          return lang.ostring.call(it) === "[object Array]";
        },

      isFunction: function (it) {
        return lang.ostring.call(it) === "[object Function]";
      },

      isRegExp: function (it) {
        return it && it instanceof RegExp;
      },

      hasProp: hasProp,

      //returns true if the object does not have an own property prop,
      //or if it does, it is a falsy value.
      falseProp: function (obj, prop) {
        return !hasProp(obj, prop) || !obj[prop];
      },

      //gets own property value for given prop on object
      getOwn: function (obj, prop) {
        return hasProp(obj, prop) && obj[prop];
      },

      _mixin: function (dest, source, override) {
        var name;
        for (name in source) {
          if (
            source.hasOwnProperty(name) &&
            (override || !dest.hasOwnProperty(name))
          ) {
            dest[name] = source[name];
          }
        }

        return dest; // Object
      },

      /**
       * mixin({}, obj1, obj2) is allowed. If the last argument is a boolean,
       * then the source objects properties are force copied over to dest.
       */
      mixin: function (dest) {
        var parameters = Array.prototype.slice.call(arguments),
          override,
          i,
          l;

        if (!dest) {
          dest = {};
        }

        if (
          parameters.length > 2 &&
          typeof arguments[parameters.length - 1] === "boolean"
        ) {
          override = parameters.pop();
        }

        for (i = 1, l = parameters.length; i < l; i++) {
          lang._mixin(dest, parameters[i], override);
        }
        return dest; // Object
      },

      /**
       * Does a deep mix of source into dest, where source values override
       * dest values if a winner is needed.
       * @param  {Object} dest destination object that receives the mixed
       * values.
       * @param  {Object} source source object contributing properties to mix
       * in.
       * @return {[Object]} returns dest object with the modification.
       */
      deepMix: function (dest, source) {
        lang.eachProp(source, function (value, prop) {
          if (
            typeof value === "object" &&
            value &&
            !lang.isArray(value) &&
            !lang.isFunction(value) &&
            !(value instanceof RegExp)
          ) {
            if (!dest[prop]) {
              dest[prop] = {};
            }
            lang.deepMix(dest[prop], value);
          } else {
            dest[prop] = value;
          }
        });
        return dest;
      },

      /**
       * Does a type of deep copy. Do not give it anything fancy, best
       * for basic object copies of objects that also work well as
       * JSON-serialized things, or has properties pointing to functions.
       * For non-array/object values, just returns the same object.
       * @param  {Object} obj      copy properties from this object
       * @param  {Object} [ignoredProps] optional object whose own properties
       * are keys that should be ignored.
       * @return {Object}
       */
      deeplikeCopy: function (obj, ignoredProps) {
        var type, result;

        if (lang.isArray(obj)) {
          result = [];
          obj.forEach(function (value) {
            result.push(lang.deeplikeCopy(value, ignoredProps));
          });
          return result;
        }

        type = typeof obj;
        if (
          obj === null ||
          obj === undefined ||
          type === "boolean" ||
          type === "string" ||
          type === "number" ||
          lang.isFunction(obj) ||
          lang.isRegExp(obj) ||
          isJavaObj(obj)
        ) {
          return obj;
        }

        //Anything else is an object, hopefully.
        result = {};
        lang.eachProp(obj, function (value, key) {
          if (!ignoredProps || !hasProp(ignoredProps, key)) {
            result[key] = lang.deeplikeCopy(value, ignoredProps);
          }
        });
        return result;
      },

      delegate: (function () {
        // boodman/crockford delegation w/ cornford optimization
        function TMP() {}
        return function (obj, props) {
          TMP.prototype = obj;
          var tmp = new TMP();
          TMP.prototype = null;
          if (props) {
            lang.mixin(tmp, props);
          }
          return tmp; // Object
        };
      })(),

      /**
       * Helper function for iterating over an array. If the func returns
       * a true value, it will break out of the loop.
       */
      each: function each(ary, func) {
        if (ary) {
          var i;
          for (i = 0; i < ary.length; i += 1) {
            if (func(ary[i], i, ary)) {
              break;
            }
          }
        }
      },

      /**
       * Cycles over properties in an object and calls a function for each
       * property value. If the function returns a truthy value, then the
       * iteration is stopped.
       */
      eachProp: function eachProp(obj, func) {
        var prop;
        for (prop in obj) {
          if (hasProp(obj, prop)) {
            if (func(obj[prop], prop)) {
              break;
            }
          }
        }
      },

      //Similar to Function.prototype.bind, but the "this" object is specified
      //first, since it is easier to read/figure out what "this" will be.
      bind: function bind(obj, fn) {
        return function () {
          return fn.apply(obj, arguments);
        };
      },

      //Escapes a content string to be be a string that has characters escaped
      //for inclusion as part of a JS string.
      jsEscape: function (content) {
        return content
          .replace(/(["'\\])/g, "\\$1")
          .replace(/[\f]/g, "\\f")
          .replace(/[\b]/g, "\\b")
          .replace(/[\n]/g, "\\n")
          .replace(/[\t]/g, "\\t")
          .replace(/[\r]/g, "\\r");
      }
    };
    return lang;
  });
  /**
   * prim 0.0.1 Copyright (c) 2012-2014, The Dojo Foundation All Rights Reserved.
   * Available via the MIT or new BSD license.
   * see: http://github.com/requirejs/prim for details
   */

  /*global setImmediate, process, setTimeout, define, module */

  //Set prime.hideResolutionConflict = true to allow "resolution-races"
  //in promise-tests to pass.
  //Since the goal of prim is to be a small impl for trusted code, it is
  //more important to normally throw in this case so that we can find
  //logic errors quicker.

  var prim;
  (function () {
    "use strict";
    var op = Object.prototype,
      hasOwn = op.hasOwnProperty;

    function hasProp(obj, prop) {
      return hasOwn.call(obj, prop);
    }

    /**
     * Helper function for iterating over an array. If the func returns
     * a true value, it will break out of the loop.
     */
    function each(ary, func) {
      if (ary) {
        var i;
        for (i = 0; i < ary.length; i += 1) {
          if (ary[i]) {
            func(ary[i], i, ary);
          }
        }
      }
    }

    function check(p) {
      if (hasProp(p, "e") || hasProp(p, "v")) {
        if (!prim.hideResolutionConflict) {
          throw new Error(
            "Prim promise already resolved: " + JSON.stringify(p)
          );
        }
        return false;
      }
      return true;
    }

    function notify(ary, value) {
      prim.nextTick(function () {
        each(ary, function (item) {
          item(value);
        });
      });
    }

    prim = function prim() {
      var p,
        ok = [],
        fail = [];

      return (p = {
        callback: function (yes, no) {
          if (no) {
            p.errback(no);
          }

          if (hasProp(p, "v")) {
            prim.nextTick(function () {
              yes(p.v);
            });
          } else {
            ok.push(yes);
          }
        },

        errback: function (no) {
          if (hasProp(p, "e")) {
            prim.nextTick(function () {
              no(p.e);
            });
          } else {
            fail.push(no);
          }
        },

        finished: function () {
          return hasProp(p, "e") || hasProp(p, "v");
        },

        rejected: function () {
          return hasProp(p, "e");
        },

        resolve: function (v) {
          if (check(p)) {
            p.v = v;
            notify(ok, v);
          }
          return p;
        },
        reject: function (e) {
          if (check(p)) {
            p.e = e;
            notify(fail, e);
          }
          return p;
        },

        start: function (fn) {
          p.resolve();
          return p.promise.then(fn);
        },

        promise: {
          then: function (yes, no) {
            var next = prim();

            p.callback(
              function (v) {
                try {
                  if (yes && typeof yes === "function") {
                    v = yes(v);
                  }

                  if (v && v.then) {
                    v.then(next.resolve, next.reject);
                  } else {
                    next.resolve(v);
                  }
                } catch (e) {
                  next.reject(e);
                }
              },
              function (e) {
                var err;

                try {
                  if (!no || typeof no !== "function") {
                    next.reject(e);
                  } else {
                    err = no(e);

                    if (err && err.then) {
                      err.then(next.resolve, next.reject);
                    } else {
                      next.resolve(err);
                    }
                  }
                } catch (e2) {
                  next.reject(e2);
                }
              }
            );

            return next.promise;
          },

          fail: function (no) {
            return p.promise.then(null, no);
          },

          end: function () {
            p.errback(function (e) {
              throw e;
            });
          }
        }
      });
    };

    prim.serial = function (ary) {
      var result = prim().resolve().promise;
      each(ary, function (item) {
        result = result.then(function () {
          return item();
        });
      });
      return result;
    };

    prim.nextTick =
      typeof setImmediate === "function"
        ? setImmediate
        : typeof process !== "undefined" && process.nextTick
        ? process.nextTick
        : typeof setTimeout !== "undefined"
        ? function (fn) {
            setTimeout(fn, 0);
          }
        : function (fn) {
            fn();
          };

    if (typeof define === "function" && define.amd) {
      define("prim", function () {
        return prim;
      });
    } else if (typeof module !== "undefined" && module.exports) {
      module.exports = prim;
    }
  })();
  if (env === "browser") {
    /*jslint strict: false */
    /*global define: false, load: false */

    //Just a stub for use with uglify's consolidator.js
    define("browser/assert", function () {
      return {};
    });
  }

  if (env === "node") {
    /*jslint strict: false */
    /*global define: false, load: false */

    //Needed so that rhino/assert can return a stub for uglify's consolidator.js
    define("node/assert", ["assert"], function (assert) {
      return assert;
    });
  }

  if (env === "rhino") {
    /*jslint strict: false */
    /*global define: false, load: false */

    //Just a stub for use with uglify's consolidator.js
    define("rhino/assert", function () {
      return {};
    });
  }

  if (env === "xpconnect") {
    /*jslint strict: false */
    /*global define: false, load: false */

    //Just a stub for use with uglify's consolidator.js
    define("xpconnect/assert", function () {
      return {};
    });
  }

  if (env === "browser") {
    /*jslint strict: false */
    /*global define: false, process: false */

    define("browser/args", function () {
      //Always expect config via an API call
      return [];
    });
  }

  if (env === "node") {
    /*jslint strict: false */
    /*global define: false, process: false */

    define("node/args", function () {
      //Do not return the "node" or "r.js" arguments
      var args = process.argv.slice(2);

      //Ignore any command option used for main x.js branching
      if (args[0] && args[0].indexOf("-") === 0) {
        args = args.slice(1);
      }

      return args;
    });
  }

  if (env === "rhino") {
    /*jslint strict: false */
    /*global define: false, process: false */

    var jsLibRhinoArgs =
      (typeof rhinoArgs !== "undefined" && rhinoArgs) ||
      [].concat(Array.prototype.slice.call(arguments, 0));

    define("rhino/args", function () {
      var args = jsLibRhinoArgs;

      //Ignore any command option used for main x.js branching
      if (args[0] && args[0].indexOf("-") === 0) {
        args = args.slice(1);
      }

      return args;
    });
  }

  if (env === "xpconnect") {
    /*jslint strict: false */
    /*global define, xpconnectArgs */

    var jsLibXpConnectArgs =
      (typeof xpconnectArgs !== "undefined" && xpconnectArgs) ||
      [].concat(Array.prototype.slice.call(arguments, 0));

    define("xpconnect/args", function () {
      var args = jsLibXpConnectArgs;

      //Ignore any command option used for main x.js branching
      if (args[0] && args[0].indexOf("-") === 0) {
        args = args.slice(1);
      }

      return args;
    });
  }

  if (env === "browser") {
    /*jslint strict: false */
    /*global define: false, console: false */

    define("browser/load", ["./file"], function (file) {
      function load(fileName) {
        eval(file.readFile(fileName));
      }

      return load;
    });
  }

  if (env === "node") {
    /*jslint strict: false */
    /*global define: false, console: false */

    define("node/load", ["fs"], function (fs) {
      function load(fileName) {
        var contents = fs.readFileSync(fileName, "utf8");
        process.compile(contents, fileName);
      }

      return load;
    });
  }

  if (env === "rhino") {
    /*jslint strict: false */
    /*global define: false, load: false */

    define("rhino/load", function () {
      return load;
    });
  }

  if (env === "xpconnect") {
    /*jslint strict: false */
    /*global define: false, load: false */

    define("xpconnect/load", function () {
      return load;
    });
  }

  if (env === "browser") {
    /*jslint sloppy: true, nomen: true */
    /*global require, define, console, XMLHttpRequest, requirejs, location */

    define("browser/file", ["prim"], Browser);
  }

  if (env === "node") {
    /*jslint plusplus: false, octal:false, strict: false */
    /*global define: false, process: false */

    define("node/file", ["fs", "path", "prim"], Node);
  }

  if (env === "rhino") {
    //Helper functions to deal with file I/O.

    /*jslint plusplus: false */
    /*global java: false, define: false */

    define("rhino/file", ["prim"], RFile);
  }

  if (env === "xpconnect") {
    //Helper functions to deal with file I/O.

    /*jslint plusplus: false */
    /*global define, Components, xpcUtil */

    define("xpconnect/file", ["prim"], XPConnect);
  }

  if (env === "browser") {
    /*global process */
    define("browser/quit", function () {
      "use strict";
      return function (code) {};
    });
  }

  if (env === "node") {
    /*global process */
    define("node/quit", function () {
      "use strict";
      return function (code) {
        var draining = 0;
        var exit = function () {
          if (draining === 0) {
            process.exit(code);
          } else {
            draining -= 1;
          }
        };
        if (process.stdout.bufferSize) {
          draining += 1;
          process.stdout.once("drain", exit);
        }
        if (process.stderr.bufferSize) {
          draining += 1;
          process.stderr.once("drain", exit);
        }
        exit();
      };
    });
  }

  if (env === "rhino") {
    /*global quit */
    define("rhino/quit", function () {
      "use strict";
      return function (code) {
        return quit(code);
      };
    });
  }

  if (env === "xpconnect") {
    /*global quit */
    define("xpconnect/quit", function () {
      "use strict";
      return function (code) {
        return quit(code);
      };
    });
  }

  if (env === "browser") {
    /*jslint strict: false */
    /*global define: false, console: false */

    define("browser/print", function () {
      function print(msg) {
        console.log(msg);
      }

      return print;
    });
  }

  if (env === "node") {
    /*jslint strict: false */
    /*global define: false, console: false */

    define("node/print", function () {
      function print(msg) {
        console.log(msg);
      }

      return print;
    });
  }

  if (env === "rhino") {
    /*jslint strict: false */
    /*global define: false, print: false */

    define("rhino/print", function () {
      return print;
    });
  }

  if (env === "xpconnect") {
    /*jslint strict: false */
    /*global define: false, print: false */

    define("xpconnect/print", function () {
      return print;
    });
  }
  /*jslint nomen: false, strict: false */
  /*global define: false */

  define("logger", ["env!env/print"], Logger);
  //Just a blank file to use when building the optimizer with the optimizer,
  //so that the build does not attempt to inline some env modules,
  //like Node's fs and path.
  //webpackUniversalModuleDefinition
  UniWeb(this, Closures);
  /*global define, Reflect */

  /*
   * xpcshell has a smaller stack on linux and windows (1MB vs 9MB on mac),
   * and the recursive nature of esprima can cause it to overflow pretty
   * quickly. So favor it built in Reflect parser:
   * https://developer.mozilla.org/en-US/docs/SpiderMonkey/Parser_API
   */
  define("esprimaAdapter", ["./esprima", "env"], function (esprima, env) {
    if (env.get() === "xpconnect" && typeof Reflect !== "undefined") {
      return Reflect;
    } else {
      return esprima;
    }
  });
  UniWeb2(this, function () {
    return /******/ (function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/ var installedModules = {}; // The require function

      /******/ /******/ function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/ if (installedModules[moduleId])
          /******/ return installedModules[moduleId].exports; // Create a new module (and put it into the cache)

        /******/ /******/ var module = (installedModules[moduleId] = {
          /******/ exports: {},
          /******/ id: moduleId,
          /******/ loaded: false
          /******/
        }); // Execute the module function

        /******/ /******/ modules[moduleId].call(
          module.exports,
          module,
          module.exports,
          __webpack_require__
        ); // Flag the module as loaded

        /******/ /******/ module.loaded = true; // Return the exports of the module

        /******/ /******/ return module.exports;
        /******/
      } // expose the modules object (__webpack_modules__)

      /******/ /******/ __webpack_require__.m = modules; // expose the module cache

      /******/ /******/ __webpack_require__.c = installedModules; // __webpack_public_path__

      /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports

      /******/ /******/ return __webpack_require__(0);
      /******/
    })(Ports);
  }); //Distributed under the BSD license:
  //Copyright 2012 (c) Mihai Bazon <mihai.bazon@gmail.com>
  define("uglifyjs", [
    "exports",
    "source-map",
    "logger",
    "env!env/file"
  ], Uglify);
  /*jslint plusplus: true */
  /*global define: false */

  define("parse", ["./esprimaAdapter", "lang"], Parse);
  /*global define */

  define("transform", [
    "./esprimaAdapter",
    "./parse",
    "logger",
    "lang"
  ], Esprima);
  /*jslint regexp: true, plusplus: true  */
  /*global define: false */

  define("pragma", ["parse", "logger"], Pragma);

  if (env === "browser") {
    /*jslint strict: false */
    /*global define: false */

    define("browser/optimize", {});
  }

  if (env === "node") {
    /*jslint strict: false */
    /*global define: false */

    define("node/optimize", {});
  }

  if (env === "rhino") {
    /*jslint sloppy: true, plusplus: true */
    /*global define, java, Packages, com */

    define("rhino/optimize", ["logger", "env!env/file"], Rhino);
  }

  if (env === "xpconnect") {
    define("xpconnect/optimize", {});
  }
  /*jslint plusplus: true, nomen: true, regexp: true */
  /*global define: false */

  define("optimize", [
    "lang",
    "logger",
    "env!env/optimize",
    "env!env/file",
    "parse",
    "pragma",
    "uglifyjs",
    "source-map"
  ], Positive);
  /*
   * This file patches require.js to communicate with the build system.
   */

  //Using sloppy since this uses eval for some code like plugins,
  //which may not be strict mode compliant. So if use strict is used
  //below they will have strict rules applied and may cause an error.
  /*jslint sloppy: true, nomen: true, plusplus: true, regexp: true */
  /*global require, define: true */

  //NOT asking for require as a dependency since the goal is to modify the
  //global require below
  define("requirePatch", [
    "env!env/file",
    "pragma",
    "parse",
    "lang",
    "logger",
    "commonJs",
    "prim"
  ], function (file, pragma, parse, lang, logger, commonJs, prim) {
    var allowRun = true,
      hasProp = lang.hasProp,
      falseProp = lang.falseProp,
      getOwn = lang.getOwn,
      // Used to strip out use strict from toString()'d functions for the
      // shim config since they will explicitly want to not be bound by strict,
      // but some envs, explicitly xpcshell, adds a use strict.
      useStrictRegExp = /['"]use strict['"];/g,
      //Absolute path if starts with /, \, or x:
      absoluteUrlRegExp = /^[\/\\]|^\w:/;

    //Turn off throwing on resolution conflict, that was just an older prim
    //idea about finding errors early, but does not comply with how promises
    //should operate.
    prim.hideResolutionConflict = true;

    //This method should be called when the patches to require should take hold.
    return Patch;
  });
  /*jslint */
  /*global define: false, console: false */

  define("commonJs", ["env!env/file", "parse"], Commonly);
  /*jslint plusplus: true, nomen: true, regexp: true  */
  /*global define, requirejs, java, process, console */

  define("build", Buildy);
}
