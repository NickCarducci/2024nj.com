import { ABORT, exit, EXITSTATUS, quit_, wasmTable } from "./trr";
import { runDependencies } from "./trrasm";
import { ExitStatus } from "./trrnode";

export default function runtime() {
  var shouldRunNow = true,
    exit = (status, implicit) => {
      EXITSTATUS = status;
      (function procExit(code) {
        EXITSTATUS = code;
        if (!keepRuntimeAlive) {
          if (Module.onExit) Module.onExit(code);
          ABORT = true;
        }
        quit_(code, new ExitStatus(code));
      })(status);
    };
  if (Module.noInitialRun) shouldRunNow = false;

  var wasmTableMirror = [],
    //functionsInTableMap,
    __ATINIT__ = [],
    __ATMAIN__ = [],
    __ATPOSTRUN__ = [],
    runtimeInitialized = false;
  function callRuntimeCallbacks(callbacks) {
    while (callbacks.length > 0) {
      var callback = callbacks.shift();
      if (typeof callback === "function") {
        callback(Module);
        continue;
      }
      var func = callback.func;
      if (typeof func === "number") {
        (function getWasmTableEntry(funcPtr) {
          var callable = wasmTableMirror[funcPtr];
          if (!callable) {
            if (funcPtr >= wasmTableMirror.length)
              wasmTableMirror.length = funcPtr + 1;
            wasmTableMirror[funcPtr] = callable = wasmTable.get(funcPtr);
          }
          return callable;
        })(func)(callback.arg !== undefined && callback.arg);
      } else {
        func(callback.arg === undefined ? null : callback.arg);
      }
    }
  }
  callRuntimeCallbacks(__ATPRERUN__);
  //---
  if (runDependencies > 0) {
    return;
  }
  var calledRun;
  function doRun() {
    if (calledRun) return;
    calledRun = true;
    Module.calledRun = true;
    if (ABORT) return;
    //---initRuntime();
    runtimeInitialized = true;
    callRuntimeCallbacks(__ATINIT__);
    //--preMain();
    callRuntimeCallbacks(__ATMAIN__);
    if (Module.onRuntimeInitialized) Module.onRuntimeInitialized();
    if (shouldRunNow)
      (function callMain(args) {
        var entryFunction = Module._main;
        var argc = 0;
        var argv = 0;
        try {
          var ret = entryFunction(argc, argv);
          exit(ret, true);
          return ret;
        } catch (e) {
          return (function handleException(e) {
            if (e instanceof ExitStatus || e === "unwind") {
              return EXITSTATUS;
            }
            quit_(1, e);
          })(e);
        } finally {
          console.log("calledMain ok"); // = true;
        }
      })();
    if (Module.postRun) {
      if (typeof Module.postRun === "function")
        Module.postRun = [Module.postRun];
      while (Module.postRun.length) {
        function addOnPostRun(cb) {
          __ATPOSTRUN__.unshift(cb);
        }
        addOnPostRun(Module.postRun.shift());
      }
    }
    callRuntimeCallbacks(__ATPOSTRUN__);
  }
  if (Module.setStatus) {
    Module.setStatus("Running...");
    setTimeout(() => {
      setTimeout(() => Module.setStatus(""), 1);
      doRun();
    }, 1);
  } else {
    doRun();
  }
  return Module;
}
