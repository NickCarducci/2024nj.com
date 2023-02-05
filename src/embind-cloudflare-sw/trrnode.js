export function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
}
var fs;
var nodePath;
var requireNodeFS;
if (ENVIRONMENT_IS_WORKER) {
  scriptDirectory = require("path").dirname(scriptDirectory) + "/";
} else {
  scriptDirectory = __dirname + "/";
}
requireNodeFS = () => {
  if (!nodePath) {
    fs = require("fs");
    nodePath = require("path");
  }
};
read_ = function shell_read(filename, binary) {
  requireNodeFS();
  filename = nodePath["normalize"](filename);
  return fs.readFileSync(filename, binary ? undefined : "utf8");
};
/*readBinary = (filename) => {
  var ret = read_(filename, true);
  if (!ret.buffer) {
    ret = new Uint8Array(ret);
  }
  return ret;
};
readAsync = (filename, onload, onerror) => {
  requireNodeFS();
  filename = nodePath["normalize"](filename);
  fs.readFile(filename, function (err, data) {
    if (err) onerror(err);
    else onload(data.buffer);
  });
};*/
if (process["argv"].length > 1)
  thisProgram = process["argv"][1].replace(/\\/g, "/");

arguments_ = process["argv"].slice(2);
if (typeof module !== "undefined") module["exports"] = Module;

process["on"]("uncaughtException", function (ex) {
  if (!(ex instanceof ExitStatus)) {
    throw ex;
  }
});
process["on"]("unhandledRejection", function (reason) {
  throw reason;
});
Module["inspect"] = function () {
  return "[Emscripten Module object]";
};
