/***********************************************************************

  A JavaScript tokenizer / parser / beautifier / compressor.
  https://github.com/mishoo/UglifyJS2

  -------------------------------- (C) ---------------------------------

                           Author: Mihai Bazon
                         <mihai.bazon@gmail.com>
                       http://mihai.bazon.net/blog

  Distributed under the BSD license:

    Copyright 2012 (c) Mihai Bazon <mihai.bazon@gmail.com>

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions
    are met:

        * Redistributions of source code must retain the above
          copyright notice, this list of conditions and the following
          disclaimer.

        * Redistributions in binary form must reproduce the above
          copyright notice, this list of conditions and the following
          disclaimer in the documentation and/or other materials
          provided with the distribution.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDER “AS IS” AND ANY
    EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
    PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER BE
    LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY,
    OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
    PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
    PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
    THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR
    TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
    THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
    SUCH DAMAGE.

 ***********************************************************************/

/**
 * @license r.js 2.3.6 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/r.js/LICENSE
 */
const { default: Requirejs } = require("./requirejs");
const { default: Which } = require("./Which");
const { default: Handle } = require("./Handle");
const { default: Command } = require("./Command");
const { default: Package } = require("./Package");

/*
 * This is a bootstrap script to allow running RequireJS in the command line
 * in either a Java/Rhino or Node environment. It is modified by the top-level
 * dist.js file to inject other files to completely enable this file. It is
 * the shell of the r.js file.
 */

/*jslint evil: true, nomen: true, sloppy: true */
/*global readFile: true, process: false, Packages: false, print: false,
console: false, java: false, module: false, requirejsVars, navigator,
document, importScripts, self, location, Components, FileUtils */

var requirejs,
  require,
  define,
  xpcUtil,
  argss = [
    typeof console !== "undefined" ? console : undefined,
    typeof Packages !== "undefined" ||
    (typeof window === "undefined" &&
      typeof Components !== "undefined" &&
      Components.interfaces)
      ? Array.prototype.slice.call(arguments, 0)
      : [],
    typeof readFile !== "undefined" ? readFile : undefined
  ];
//function (console, args, readFileFunc) {
var fileName,
  env,
  fs,
  vm,
  path,
  exec,
  rhinoContext,
  dir,
  nodeRequire,
  nodeDefine,
  exists,
  reqMain,
  loadedOptimizedLib,
  existsForNode,
  Cc,
  Ci,
  version = "2.3.6",
  jsSuffixRegExp = /\.js$/,
  commandOption = "",
  useLibLoaded = {},
  //Used by jslib/rhino/args.js
  rhinoArgs = argss,
  //Used by jslib/xpconnect/args.js
  xpconnectArgs = argss,
  readFile = typeof readFileFunc !== "undefined" ? readFileFunc : null;

function showHelp() {
  console.log("See https://github.com/requirejs/r.js for usage.");
}

Which();

/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.3.6 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, https://github.com/requirejs/requirejs/blob/master/LICENSE
 */
//Not using strict: uneven strict support in browsers, #392, and causes
//problems with requirejs.exec()/transpiler plugins that may not be strict.
/*jslint regexp: true, nomen: true, sloppy: true */
//*global window, navigator, document, importScripts, setTimeout, opera */

Requirejs(this, typeof setTimeout === "undefined" ? undefined : setTimeout);

this.requirejsVars = {
  require: require,
  requirejs: require,
  define: define
};

Handle(env);
//Support a default file name to execute. Useful for hosted envs
//like Joyent where it defaults to a server.js as the only executed
//script. But only do it if this is not an optimization run.
if (commandOption !== "o" && (!fileName || !jsSuffixRegExp.test(fileName))) {
  fileName = "main.js";
}

Package(env);

Command();
