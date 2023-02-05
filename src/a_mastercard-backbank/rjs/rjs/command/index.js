import Library from "./library";

export default function Command() {
  if (commandOption === "o") {
    //Do the optimizer work.
    Library();

    /*
     * Create a build.js file that has the build options you want and pass that
     * build file to this file to do the build. See example.build.js for more information.
     */

    /*jslint strict: false, nomen: false */
    /*global require: false */

    require({
      baseUrl: require.s.contexts._.config.baseUrl,
      //Use a separate context than the default context so that the
      //build can use the default context.
      context: "build",
      catchError: {
        define: true
      }
    }, ["env!env/args", "env!env/quit", "logger", "build"], function (
      args,
      quit,
      logger,
      build
    ) {
      build(args).then(
        function () {},
        function (err) {
          logger.error(err);
          quit(1);
        }
      );
    });
  } else if (commandOption === "v") {
    console.log(
      "r.js: " +
        version +
        ", RequireJS: " +
        this.requirejsVars.require.version +
        ", UglifyJS: 2.8.29"
    );
  } else if (commandOption === "convert") {
    Library();

    this.requirejsVars.require(
      ["env!env/args", "commonJs", "env!env/print"],
      function (args, commonJs, print) {
        var srcDir, outDir;
        srcDir = args[0];
        outDir = args[1];

        if (!srcDir || !outDir) {
          print("Usage: path/to/commonjs/modules output/dir");
          return;
        }

        commonJs.convertDir(args[0], args[1]);
      }
    );
  } else {
    //Just run an app

    //Load the bundled libraries for use in the app.
    if (commandOption === "lib") {
      Library();
    }

    setBaseUrl(fileName);

    if (exists(fileName)) {
      exec(readFile(fileName), fileName);
    } else {
      showHelp();
    }
  }
}
