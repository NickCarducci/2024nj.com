export default function Prepare(Module) {
  var scriptDirectory = "";

  //var read_, readAsync, readBinary, setWindowTitle;
  if (ENVIRONMENT_IS_NODE) {
    //trrnode.js
  } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
    if (ENVIRONMENT_IS_WORKER) {
      scriptDirectory = ""; //self.location.href;
    } else if (typeof document !== "undefined" && document.currentScript)
      scriptDirectory = document.currentScript.src;

    if (scriptDirectory.indexOf("blob:") !== 0) {
      scriptDirectory = scriptDirectory.substr(
        0,
        scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1
      );
    } else scriptDirectory = "";

    /*read_ = (url) => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, false);
      xhr.send(null);
      return xhr.responseText;
    };
    if (ENVIRONMENT_IS_WORKER) {
      readBinary = (url) => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, false);
        xhr.responseType = "arraybuffer";
        xhr.send(null);
        return new Uint8Array(xhr.response);
      };
    }
    readAsync = (url, onload, onerror) => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.responseType = "arraybuffer";
      xhr.onload = () => {
        if (xhr.status === 200 || (xhr.status === 0 && xhr.response)) {
          onload(xhr.response);
          return;
        }
        onerror();
      };
      xhr.onerror = onerror;
      xhr.send(null);
    };*/

    //setWindowTitle = (title) => (document.title = title);
  }
  var err = Module.printErr || console.warn.bind(console);
  Object.assign(Module, moduleOverrides);
  moduleOverrides = null;
  if (Module.arguments) arguments_ = Module.arguments;
  if (Module.thisProgram) thisProgram = Module.thisProgram;
  if (Module.quit) quit_ = Module.quit;

  if (typeof WebAssembly !== "object")
    (function abort(what) {
      if (Module.onAbort) {
        Module.onAbort(what);
      }

      what = "Aborted(" + what + ")";
      err(what);
      ABORT = true;
      EXITSTATUS = 1;
      what += ". Build with -sASSERTIONS for more info.";
      var e = new WebAssembly.RuntimeError(what);
      throw e;
    })("no native wasm support detected");

  var dataURIPrefix = "data:application/octet-stream;base64,";
  const isDataURI = (filename) => filename.startsWith(dataURIPrefix);

  var wasmBinaryFile;
  wasmBinaryFile = "a.out.wasm";
  if (!isDataURI(wasmBinaryFile)) {
    wasmBinaryFile = (function locateFile(path) {
      if (Module["locateFile"]) {
        return Module["locateFile"](path, scriptDirectory);
      }
      return scriptDirectory + path;
    })(wasmBinaryFile);
  }
  //var calledMain = false;
  //function callMain(args) {}
  //Module["run"] = run;

  if (Module.preInit) {
    if (typeof Module.preInit === "function") Module.preInit = [Module.preInit];
    while (Module.preInit.length > 0) {
      Module.preInit.pop()();
    }
  }
  //--- prerun
  if (Module.preRun) {
    if (typeof Module.preRun === "function") Module.preRun = [Module.preRun];
    while (Module.preRun.length)
      (function addOnPreRun(cb) {
        __ATPRERUN__.unshift(cb);
      })(Module.preRun.shift());
  }
  //run();
}
