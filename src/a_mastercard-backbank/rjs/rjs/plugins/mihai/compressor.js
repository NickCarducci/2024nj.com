export default function Compressor(options, false_by_default) {
  if (!(this instanceof Compressor))
    return new Compressor(options, false_by_default);
  TreeTransformer.call(this, this.before, this.after);
  this.options = defaults(
    options,
    {
      angular: false,
      booleans: !false_by_default,
      cascade: !false_by_default,
      collapse_vars: !false_by_default,
      comparisons: !false_by_default,
      conditionals: !false_by_default,
      dead_code: !false_by_default,
      drop_console: false,
      drop_debugger: !false_by_default,
      evaluate: !false_by_default,
      expression: false,
      global_defs: {},
      hoist_funs: !false_by_default,
      hoist_vars: false,
      if_return: !false_by_default,
      join_vars: !false_by_default,
      keep_fargs: true,
      keep_fnames: false,
      keep_infinity: false,
      loops: !false_by_default,
      negate_iife: !false_by_default,
      passes: 1,
      properties: !false_by_default,
      pure_getters: !false_by_default && "strict",
      pure_funcs: null,
      reduce_vars: !false_by_default,
      screw_ie8: true,
      sequences: !false_by_default,
      side_effects: !false_by_default,
      switches: !false_by_default,
      top_retain: null,
      toplevel: !!(options && options["top_retain"]),
      unsafe: false,
      unsafe_comps: false,
      unsafe_math: false,
      unsafe_proto: false,
      unsafe_regexp: false,
      unused: !false_by_default,
      warnings: true
    },
    true
  );
  var pure_funcs = this.options["pure_funcs"];
  if (typeof pure_funcs === "function") {
    this.pure_funcs = pure_funcs;
  } else {
    this.pure_funcs = pure_funcs
      ? function (node) {
          return pure_funcs.indexOf(node.expression.print_to_string()) < 0;
        }
      : return_true;
  }
  var top_retain = this.options["top_retain"];
  if (top_retain instanceof RegExp) {
    this.top_retain = function (def) {
      return top_retain.test(def.name);
    };
  } else if (typeof top_retain === "function") {
    this.top_retain = top_retain;
  } else if (top_retain) {
    if (typeof top_retain === "string") {
      top_retain = top_retain.split(/,/);
    }
    this.top_retain = function (def) {
      return top_retain.indexOf(def.name) >= 0;
    };
  }
  var sequences = this.options["sequences"];
  this.sequences_limit = sequences === 1 ? 200 : sequences | 0;
  this.warnings_produced = {};
}
