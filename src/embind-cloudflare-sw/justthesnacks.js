import wabt from "wabt";

const wam = `(module
  (type $t0 (func (result i32)))
  (type $t1 (func))
  (type $t2 (func (param i32 i32) (result i32)))
  (type $t3 (func (param i32)))
  (type $t4 (func (param i32) (result i32)))
  (import "env" "__asyncjs__openXML" (func $env.__asyncjs__openXML (type $t0)))
  (func $__wasm_call_ctors (type $t1)
    nop)
  (func $main (type $t2) (param $p0 i32) (param $p1 i32) (result i32)
    call $env.__asyncjs__openXML
    drop
    i32.const 0)
  (func $stackSave (type $t0) (result i32)
    global.get $g0)
  (func $stackRestore (type $t3) (param $p0 i32)
    local.get $p0
    global.set $g0)
  (func $stackAlloc (type $t4) (param $p0 i32) (result i32)
    global.get $g0
    local.get $p0
    i32.sub
    i32.const -16
    i32.and
    local.tee $p0
    global.set $g0
    local.get $p0)
  (func $__errno_location (type $t0) (result i32)
    i32.const 1120)
  (table $__indirect_function_table 1 1 funcref)
  (memory $memory 256 256)
  (global $g0 (mut i32) (i32.const 5244016))
  (export "memory" (memory 0))
  (export "__wasm_call_ctors" (func $__wasm_call_ctors))
  (export "main" (func $main))
  (export "__indirect_function_table" (table 0))
  (export "__errno_location" (func $__errno_location))
  (export "stackSave" (func $stackSave))
  (export "stackRestore" (func $stackRestore))
  (export "stackAlloc" (func $stackAlloc)))`;

const wasmModule = wabt.parseWat("", wam);
const { buffer } = wasmModule.toBinary({});

var runDependencies = 0,
  runDependencyWatcher = null,
  dependenciesFulfilled = null;
dependenciesFulfilled = function runCaller() {
  if (!calledRun) Run();
  if (!calledRun) dependenciesFulfilled = runCaller; //reset
};
function removeRunDependency(id) {
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
}
var _main = (Module._main = function () {
  return Module.asm.main.apply(null, arguments);
});
//prettier-ignore

function callMain(args) {
  var entryFunction = Module["_main"];
  var argc = 0;
  var argv = 0;
  try {
    var ret = entryFunction(argc, argv);
    exit(ret, true);
    return ret;
  } catch (e) {
    return handleException(e);
  } finally {
    calledMain = true;
  }
}
function run(args) {
  args = args || arguments_;
  if (runDependencies > 0) {
    return;
  }
  preRun();
  if (runDependencies > 0) {
    return;
  }
  function doRun() {
    if (calledRun) return;
    calledRun = true;
    Module["calledRun"] = true;
    if (ABORT) return;
    initRuntime();
    preMain();
    if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
    if (shouldRunNow) callMain(args);
    postRun();
  }
  if (Module["setStatus"]) {
    Module["setStatus"]("Running...");
    setTimeout(function () {
      setTimeout(function () {
        Module["setStatus"]("");
      }, 1);
      doRun();
    }, 1);
  } else {
    doRun();
  }
}
module.run = function run(args) {
  function getEmptyTableSlot() {
    if (freeTableIndexes.length) {
      return freeTableIndexes.pop();
    }
    try {
      wasmTable.grow(1);
    } catch (err) {
      if (!(err instanceof RangeError)) {
        throw err;
      }
      throw Object.assign(
        {},
        {
          message: "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH."
        }
      );
    }
    return wasmTable.length - 1;
  }
  args = args || arguments_;
  if (runDependencies > 0) return null;

  var Module = runtime();

  return Module;
};
export default function Run() {
  return module.run.apply(module, arguments);
}

const receive = (instance, module) => {
  var exports = instance.exports;
  Module.asm = exports;
  wasmMemory = Module.asm.memory;
  updateGlobalBufferAndViews(wasmMemory.buffer);
  wasmTable = Module.asm.__indirect_function_table;

  (function addOnInit(cb) {
    __ATINIT__.unshift(cb);
  })(Module.asm.__wasm_call_ctors);

  removeRunDependency("wasm-instantiate");
}; //receiveInstantiationResult

function getBinaryPromise() {
  return fetch(wasmBinaryFile, { credentials: "same-origin" })
    .then((r) => r.arrayBuffer())
    .catch(() => getBinary(wasmBinaryFile));
}
async function FSA(options = (o = [{}]) => (!Array.isArray(o) ? [o] : o)) {
  return await Promise.all(
    await this.showOpenFilePicker({
      skipDirectory: (entry) => entry.name[0] === "./ignore",
      id: options[0].id,
      startIn: options[0].startIn,
      types: options.map((option, i) => {
        var turn = { description: option.description || "", accept: {} };
        if (!option.mimeTypes)
          return (turn.accept["*/*"] = option.extensions || []);
        option.mimeTypes.forEach(
          (mimeType) => (turn.accept[mimeType] = option.extensions || [])
        );
        return turn;
      }),
      multiple: options[0].multiple || false,
      excludeAcceptAllOption: options[0].excludeAcceptAllOption || false
    }).then((handleOrHandles) =>
      handleOrHandles.map(async function getFileWithHandle(handle) {
        const file = await handle.getFile();
        file.handle = handle;
        return file;
      })
    )
  ).then((files) => (options[0].multiple ? files : files[0]));
}
var asmArg = { __asyncjs__openXML: () => FSA({ startIn: "./backbank.php" }) };
const info = { env: asmArg, wasi_snapshot_preview1: asmArg }; //asmLibraryArg
WebAssembly.instantiateStreaming(new Buffer(buffer), info).then(
  (result) => receive(result["instance"]),
  (reason) => {
    console.log("wasm streaming compile failed: " + reason) &&
      console.log("falling back to ArrayBuffer instantiation");
    return getBinaryPromise()
      .then((binary) => WebAssembly.instantiate(binary, info))
      .then(receive, (reason) => {
        console.log("failed to asynchronously prepare wasm: " + reason) &&
          //abort
          console.log(reason);
      }); //instantiateArrayBuffer
  }
);
//prejudice is a
