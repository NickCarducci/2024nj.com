import Library from "../command";

/**
 * Sets the default baseUrl for requirejs to be directory of top level
 * script.
 */
function setBaseUrl(fileName) {
  //Use the file name's directory as the baseUrl if available.
  dir = fileName.replace(/\\/g, "/");
  if (dir.indexOf("/") !== -1) {
    dir = dir.split("/");
    dir.pop();
    dir = dir.join("/");
    //Make sure dir is JS-escaped, since it will be part of a JS string.
    exec("require({baseUrl: '" + dir.replace(/[\\"']/g, "\\$&") + "'});");
  }
}

function createRjsApi() {
  //Create a method that will run the optimzer given an object
  //config.
  requirejs.optimize = Optimize;

  requirejs.tools = {
    useLib: function (contextName, callback) {
      if (!callback) {
        callback = contextName;
        contextName = "uselib";
      }

      if (!useLibLoaded[contextName]) {
        Library();
        useLibLoaded[contextName] = true;
      }

      var req = requirejs({
        context: contextName
      });

      req(["build"], function () {
        callback(req);
      });
    }
  };

  requirejs.define = define;
}
export default function Package(env) {
  //If in Node, and included via a require('requirejs'), just export and
  //THROW IT ON THE GROUND!
  if (env === "node" && reqMain !== module) {
    setBaseUrl(path.resolve(reqMain ? reqMain.filename : "."));

    createRjsApi();

    module.exports = requirejs;
    return;
  } else if (env === "browser") {
    //Only option is to use the API.
    setBaseUrl(location.href);
    createRjsApi();
    return;
  } else if (
    (env === "rhino" || env === "xpconnect") &&
    //User sets up requirejsAsLib variable to indicate it is loaded
    //via load() to be used as a library.
    typeof requirejsAsLib !== "undefined" &&
    requirejsAsLib
  ) {
    //This script is loaded via rhino's load() method, expose the
    //API and get out.
    setBaseUrl(fileName);
    createRjsApi();
    return;
  }
}
function Optimize(config, callback, errback) {
  if (!loadedOptimizedLib) {
    Library();
    loadedOptimizedLib = true;
  }

  //Create the function that will be called once build modules
  //have been loaded.
  var runBuild = function (build, logger, quit) {
    //Make sure config has a log level, and if not,
    //make it "silent" by default.
    config.logLevel = config.hasOwnProperty("logLevel")
      ? config.logLevel
      : logger.SILENT;

    //Reset build internals first in case this is part
    //of a long-running server process that could have
    //exceptioned out in a bad state. It is only defined
    //after the first call though.
    if (requirejs._buildReset) {
      requirejs._buildReset();
      requirejs._cacheReset();
    }

    function done(result) {
      //And clean up, in case something else triggers
      //a build in another pathway.
      if (requirejs._buildReset) {
        requirejs._buildReset();
        requirejs._cacheReset();
      }

      // Ensure errors get propagated to the errback
      if (result instanceof Error) {
        throw result;
      }

      return result;
    }

    errback =
      errback ||
      function (err) {
        // Using console here since logger may have
        // turned off error logging. Since quit is
        // called want to be sure a message is printed.
        console.log(err);
        quit(1);
      };

    build(config).then(done, done).then(callback, errback);
  };

  requirejs(
    {
      context: "build"
    },
    ["build", "logger", "env!env/quit"],
    runBuild
  );
}
