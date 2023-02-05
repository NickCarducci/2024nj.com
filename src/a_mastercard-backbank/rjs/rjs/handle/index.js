import Eval from "./eval";

export default function Handle(env) {
  if (env === "browser") {
    //sloppy since eval enclosed with use strict causes problems if the source
    //text is not strict-compliant.
    /*jslint sloppy: true, evil: true */
    /*global require, XMLHttpRequest */

    (function () {
      // Separate function to avoid eval pollution, same with arguments use.
      function exec() {
        eval(arguments[0]);
      }

      require.load = function (context, moduleName, url) {
        var xhr = new XMLHttpRequest();

        xhr.open("GET", url, true);
        xhr.send();

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            exec(xhr.responseText);

            //Support anonymous modules.
            context.completeLoad(moduleName);
          }
        };
      };
    })();
  } else if (env === "rhino") {
    /*global require: false, java: false, load: false */

    (function () {
      require.load = function (context, moduleName, url) {
        load(url);

        //Support anonymous modules.
        context.completeLoad(moduleName);
      };
    })();
  } else if (env === "node") {
    this.requirejsVars.nodeRequire = nodeRequire;
    require.nodeRequire = nodeRequire;

    Eval();
  } else if (env === "xpconnect") {
    /*jslint */
    /*global require, load */

    (function () {
      require.load = function (context, moduleName, url) {
        load(url);

        //Support anonymous modules.
        context.completeLoad(moduleName);
      };
    })();
  }
}
