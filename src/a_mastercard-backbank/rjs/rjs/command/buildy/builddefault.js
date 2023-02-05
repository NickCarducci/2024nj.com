export default function BuildDefault(args) {
  var buildFile,
    cmdConfig,
    errorMsg,
    errorStack,
    stackMatch,
    errorTree,
    i,
    j,
    errorMod,
    stackRegExp = /( {4}at[^\n]+)\n/,
    standardIndent = "  ";

  return prim()
    .start(function () {
      if (!args || lang.isArray(args)) {
        if (!args || args.length < 1) {
          logger.error(
            "build.js buildProfile.js\n" +
              "where buildProfile.js is the name of the build file (see example.build.js for hints on how to make a build file)."
          );
          return undefined;
        }

        //Next args can include a build file path as well as other build args.
        //build file path comes first. If it does not contain an = then it is
        //a build file path. Otherwise, just all build args.
        if (args[0].indexOf("=") === -1) {
          buildFile = args[0];
          args.splice(0, 1);
        }

        //Remaining args are options to the build
        cmdConfig = build.convertArrayToObject(args);
        cmdConfig.buildFile = buildFile;
      } else {
        cmdConfig = args;
      }

      return build._run(cmdConfig);
    })
    .then(null, function (e) {
      var err;

      errorMsg = e.toString();
      errorTree = e.moduleTree;
      stackMatch = stackRegExp.exec(errorMsg);

      if (stackMatch) {
        errorMsg += errorMsg.substring(
          0,
          stackMatch.index + stackMatch[0].length + 1
        );
      }

      //If a module tree that shows what module triggered the error,
      //print it out.
      if (errorTree && errorTree.length > 0) {
        errorMsg += "\nIn module tree:\n";

        for (i = errorTree.length - 1; i > -1; i--) {
          errorMod = errorTree[i];
          if (errorMod) {
            for (j = errorTree.length - i; j > -1; j--) {
              errorMsg += standardIndent;
            }
            errorMsg += errorMod + "\n";
          }
        }

        logger.error(errorMsg);
      }

      errorStack = e.stack;

      if (typeof args === "string" && args.indexOf("stacktrace=true") !== -1) {
        errorMsg += "\n" + errorStack;
      } else {
        if (!stackMatch && errorStack) {
          //Just trim out the first "at" in the stack.
          stackMatch = stackRegExp.exec(errorStack);
          if (stackMatch) {
            errorMsg += "\n" + stackMatch[0] || "";
          }
        }
      }

      err = new Error(errorMsg);
      err.originalError = e;
      throw err;
    });
}
