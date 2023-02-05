import { XPCUtil } from "../XPC/util";
import Package from "./package";

export default function Which() {
  if (
    typeof process !== "undefined" &&
    process.versions &&
    !!process.versions.node
  ) {
    env = "node";

    //Get the fs module via Node's require before it
    //gets replaced. Used in require/node.js
    fs = require("fs");
    vm = require("vm");
    path = require("path");
    //In Node 0.7+ existsSync is on fs.
    existsForNode = fs.existsSync || path.existsSync;

    nodeRequire = require;
    nodeDefine = define;
    reqMain = require.main;

    //Temporarily hide require and define to allow require.js to define
    //them.
    require = undefined;
    define = undefined;

    readFile = function (path) {
      return fs.readFileSync(path, "utf8");
    };

    exec = function (string, name) {
      return vm.runInThisContext(
        this.requirejsVars.require.makeNodeWrapper(string),
        name ? fs.realpathSync(name) : ""
      );
    };

    exists = function (fileName) {
      return existsForNode(fileName);
    };

    fileName = process.argv[2];

    if (fileName && fileName.indexOf("-") === 0) {
      commandOption = fileName.substring(1);
      fileName = process.argv[3];
    }
  } else if (typeof Packages !== "undefined") {
    env = "rhino";

    fileName = args[0];

    if (fileName && fileName.indexOf("-") === 0) {
      commandOption = fileName.substring(1);
      fileName = args[1];
    }

    //Exec/readFile differs between Rhino and Nashorn. Rhino has an
    //importPackage where Nashorn does not, so branch on that. This is a
    //coarser check -- detecting readFile existence might also be enough for
    //this spot. However, sticking with importPackage to keep it the same
    //as other Rhino/Nashorn detection branches.
    if (typeof importPackage !== "undefined") {
      rhinoContext = Package.org.mozilla.javascript.ContextFactory.getGlobal().enterContext();

      exec = function (string, name) {
        return rhinoContext.evaluateString(this, string, name, 0, null);
      };
    } else {
      exec = function (string, name) {
        load({ script: string, name: name });
      };
      readFile = readFully;
    }

    exists = function (fileName) {
      return new java.io.File(fileName).exists();
    };

    //Define a console.log for easier logging. Don't
    //get fancy though.
    if (typeof console === "undefined") {
      console = {
        log: function () {
          print.apply(undefined, arguments);
        }
      };
    }
  } else if (
    (typeof navigator !== "undefined" && typeof document !== "undefined") ||
    (typeof importScripts !== "undefined" && typeof self !== "undefined")
  ) {
    env = "browser";

    readFile = function (path) {
      return fs.readFileSync(path, "utf8");
    };

    exec = function (string) {
      return eval(string);
    };

    exists = function () {
      console.log("x.js exists not applicable in browser env");
      return false;
    };
  } else if (
    typeof Components !== "undefined" &&
    Components.classes &&
    Components.interfaces
  ) {
    env = "xpconnect";

    Components.utils["import"]("resource://gre/modules/FileUtils.jsm");
    Cc = Components.classes;
    Ci = Components.interfaces;

    fileName = args[0];

    if (fileName && fileName.indexOf("-") === 0) {
      commandOption = fileName.substring(1);
      fileName = args[1];
    }

    xpcUtil = XPCUtil;

    readFile = xpcUtil.readFile;

    exec = function (string) {
      return eval(string);
    };

    exists = function (fileName) {
      return xpcUtil.xpfile(fileName).exists();
    };

    //Define a console.log for easier logging. Don't
    //get fancy though.
    if (typeof console === "undefined") {
      console = {
        log: function () {
          print.apply(undefined, arguments);
        }
      };
    }
  }
}
