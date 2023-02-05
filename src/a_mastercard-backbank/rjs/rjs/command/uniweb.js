export default function UniWeb(root, factory) {
  /* istanbul ignore next */
  if (typeof define === "function" && define.amd)
    define("esprima", [], factory);
  else if (typeof exports === "object" && typeof module === "object")
    module.exports = factory();
  /* istanbul ignore next */ else if (typeof exports === "object")
    exports["esprima"] = factory();
  else root["esprima"] = factory();
} //webpackUniversalModuleDefinition
export function UniWeb2(root, factory) {
  var exports, module;
  if (typeof exports === "object" && typeof module === "object")
    module.exports = factory();
  else if (typeof define === "function" && define.amd)
    define("source-map", [], factory);
  else if (typeof exports === "object") exports["sourceMap"] = factory();
  else root["sourceMap"] = factory();
}
