import Run, { abort } from "./trr";

/*function getBinary(file) {}
function getBinaryPromise() {}
var tempDouble;
var tempI64;

function demangleAll(text) {
  function demangle(func) {
    return func;
  }
  var regex = /\b_Z[\w\d_]+/g;
  return text.replace(regex, function (x) {
    var y = demangle(x);
    return x === y ? x : y + " [" + x + "]";
  });
}
//var wasmTableMirror = [];
//function getWasmTableEntry(funcPtr) {}
function handleException(e) {}
function jsStackTrace() {
  var error = new Error();
  if (!error.stack) {
    try {
      throw new Error();
    } catch (e) {
      error = e;
    }
    if (!error.stack) {
      return "(no stack trace available)";
    }
  }
  return error.stack.toString();
}
function setWasmTableEntry(idx, func) {
  wasmTable.set(idx, func);
  wasmTableMirror[idx] = wasmTable.get(idx);
}
var ASSERTIONS = false;

var ___wasm_call_ctors = (Module["___wasm_call_ctors"] = function () {
  return (___wasm_call_ctors = Module["___wasm_call_ctors"] =
    Module["asm"]["__wasm_call_ctors"]).apply(null, arguments);
});
var _main = (Module["_main"] = function () {
  return (_main = Module["_main"] = Module["asm"]["main"]).apply(
    null,
    arguments
  );
});
var ___errno_location = (Module["___errno_location"] = function () {
  return (___errno_location = Module["___errno_location"] =
    Module["asm"]["__errno_location"]).apply(null, arguments);
});

function preRun() {}
function initRuntime() {}
function preMain() {}
function postRun() {}
function addOnPreRun(cb) {}
function addOnInit(cb) {}
function addOnPostRun(cb) {}
//var dependenciesFulfilled = null;
function addRunDependency(id) {}
function removeRunDependency(id) {}
*/
export var runDependencies = 0;
var runDependencyWatcher = null;
function isFileURI(filename) {
  return filename.startsWith("file://");
}
export default function createWasm() {
  var dependenciesFulfilled = null;
  dependenciesFulfilled = function runCaller() {
    if (!calledRun) Run();
    if (!calledRun) dependenciesFulfilled = runCaller; //reset
  };
  var asmLibraryArg = {
    __asyncjs__openXML: function __asyncjs__openXML() {
      return Asyncify.handleAsync(async () => {
        return fopen("./backbank.php", "r");
      });
    }
  };
  var info = { env: asmLibraryArg, wasi_snapshot_preview1: asmLibraryArg };
  function receiveInstance(instance, module) {
    var exports = instance.exports;
    Module.asm = exports;
    wasmMemory = Module.asm.memory;
    updateGlobalBufferAndViews(wasmMemory.buffer);
    wasmTable = Module.asm.__indirect_function_table;
    (function addOnInit(cb) {
      __ATINIT__.unshift(cb);
    })(Module.asm.__wasm_call_ctors);
    (function removeRunDependency(id) {
      runDependencies--;
      if (Module.monitorRunDependencies) {
        Module.monitorRunDependencies(runDependencies);
      }
      if (runDependencies === 0) {
        if (runDependencyWatcher !== null) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
        }
        if (dependenciesFulfilled) {
          var callback = dependenciesFulfilled;
          dependenciesFulfilled = null;
          callback();
        }
      }
    })("wasm-instantiate");
  }
  (function addRunDependency(id) {
    runDependencies++;
    if (Module.monitorRunDependencies) {
      Module.monitorRunDependencies(runDependencies);
    }
  })("wasm-instantiate");
  function receiveInstantiationResult(result) {
    receiveInstance(result["instance"]);
  }
  function instantiateArrayBuffer(receiver) {
    function getBinaryPromise() {
      function getBinary(file) {
        try {
          if (file === wasmBinaryFile && wasmBinary) {
            return new Uint8Array(wasmBinary);
          }
          if (readBinary) {
            return readBinary(file);
          } else
            console.log({
              message: "both async and sync fetching of the wasm failed"
            });
        } catch (err) {
          abort(err);
        }
      }
      if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
        if (typeof fetch === "function" && !isFileURI(wasmBinaryFile)) {
          return fetch(wasmBinaryFile, { credentials: "same-origin" })
            .then((response) => {
              if (!response["ok"]) {
                console.log({
                  message: `failed to load wasm binary file at ${wasmBinaryFile}`
                });
              }
              return response["arrayBuffer"]();
            })
            .catch(function () {
              return getBinary(wasmBinaryFile);
            });
        } else {
          if (readAsync) {
            return new Promise((resolve, reject) => {
              readAsync(
                wasmBinaryFile,
                function (response) {
                  resolve(new Uint8Array(response));
                },
                reject
              );
            });
          }
        }
      }
      return Promise.resolve().then(function () {
        return getBinary(wasmBinaryFile);
      });
    }
    return getBinaryPromise()
      .then(function (binary) {
        return WebAssembly.instantiate(binary, info);
      })
      .then(function (instance) {
        return instance;
      })
      .then(receiver, function (reason) {
        err("failed to asynchronously prepare wasm: " + reason);
        abort(reason);
      });
  }
  function instantiateAsync() {
    if (
      !wasmBinary &&
      typeof WebAssembly.instantiateStreaming === "function" &&
      !isDataURI(wasmBinaryFile) &&
      !isFileURI(wasmBinaryFile) &&
      !ENVIRONMENT_IS_NODE &&
      typeof fetch === "function"
    ) {
      return fetch(wasmBinaryFile, { credentials: "same-origin" }).then(
        function (response) {
          var result = WebAssembly.instantiateStreaming(response, info);
          return result.then(receiveInstantiationResult, function (reason) {
            err("wasm streaming compile failed: " + reason);
            err("falling back to ArrayBuffer instantiation");
            return instantiateArrayBuffer(receiveInstantiationResult);
          });
        }
      );
    } else {
      return instantiateArrayBuffer(receiveInstantiationResult);
    }
  }
  if (Module["instantiateWasm"]) {
    try {
      var exports = Module["instantiateWasm"](info, receiveInstance);
      return exports;
    } catch (e) {
      err("Module.instantiateWasm callback failed with error: " + e);
      return false;
    }
  }
  instantiateAsync();
  return {};
} //createWasm();
