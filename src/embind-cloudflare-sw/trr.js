import { runDependencies } from "./trrasm";
import Prepare from "./trrprepare";
import { ExitStatus } from "./trrnode";
import runtime from "./trrruntime";

//output emitted of ./source/emsdk
export var thisProgram = "./this.program",
  quit_ = (status, toThrow) => {
    throw toThrow;
  },
  ABORT = false,
  EXITSTATUS,
  //var out = Module["print"] || console.log.bind(console);
  keepRuntimeAlive = module.noExitRuntime || true;
quit_ = (status, toThrow) => {
  if (keepRuntimeAlive) {
    process.exitCode = status;
    throw toThrow; //keepRuntimeAlive
  }
  /*(function logExceptionOnExit(e) {
    if (e instanceof ExitStatus) return;
    let toLog = e;
    err("exiting due to exception: " + toLog);
  })(toThrow);
  process.exit = status;*/
};

var module = {},
  arguments_ = [],
  __ATPRERUN__ = [],
  moduleOverrides = Object.assign({}, module),
  ENVIRONMENT_IS_WEB = typeof window === "object",
  ENVIRONMENT_IS_WORKER = false, //typeof importScripts == "function";
  ENVIRONMENT_IS_NODE =
    typeof process === "object" &&
    typeof process.versions === "object" &&
    typeof process.versions.node === "string";
module = Prepare(typeof module === "undefined" ? module : {});

export var wasmTable;

var freeTableIndexes = [];

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
