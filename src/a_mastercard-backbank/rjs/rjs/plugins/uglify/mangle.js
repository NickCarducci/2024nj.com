export function Mangle(ast, options) {
  //mangle_properties
  options = defaults(options, {
    cache: null,
    debug: false,
    ignore_quoted: false,
    only_cache: false,
    regex: null,
    reserved: null
  });

  var reserved = options.reserved;
  if (reserved == null) reserved = find_builtins();

  var cache = options.cache;
  if (cache == null) {
    cache = {
      cname: -1,
      props: new Dictionary()
    };
  }

  var regex = options.regex;
  var ignore_quoted = options.ignore_quoted;

  // note debug is either false (disabled), or a string of the debug suffix to use (enabled).
  // note debug may be enabled as an empty string, which is falsey. Also treat passing 'true'
  // the same as passing an empty string.
  var debug = options.debug !== false;
  var debug_name_suffix;
  if (debug) {
    debug_name_suffix = options.debug === true ? "" : options.debug;
  }

  var names_to_mangle = [];
  var unmangleable = [];
  var ignored = {};

  // step 1: find candidates to mangle
  ast.walk(
    new TreeWalker(function (node) {
      if (node instanceof AST_ObjectKeyVal) {
        add(node.key, ignore_quoted && node.quote);
      } else if (node instanceof AST_ObjectProperty) {
        // setter or getter, since KeyVal is handled above
        add(node.key.name);
      } else if (node instanceof AST_Dot) {
        add(node.property);
      } else if (node instanceof AST_Sub) {
        addStrings(node.property, ignore_quoted);
      }
    })
  );

  // step 2: transform the tree, renaming properties
  return ast.transform(
    new TreeTransformer(function (node) {
      if (node instanceof AST_ObjectKeyVal) {
        if (!(ignore_quoted && node.quote)) node.key = mangle(node.key);
      } else if (node instanceof AST_ObjectProperty) {
        // setter or getter
        node.key.name = mangle(node.key.name);
      } else if (node instanceof AST_Dot) {
        node.property = mangle(node.property);
      } else if (node instanceof AST_Sub) {
        if (!ignore_quoted) node.property = mangleStrings(node.property);
      }
      // else if (node instanceof AST_String) {
      //     if (should_mangle(node.value)) {
      //         AST_Node.warn(
      //             "Found \"{prop}\" property candidate for mangling in an arbitrary string [{file}:{line},{col}]", {
      //                 file : node.start.file,
      //                 line : node.start.line,
      //                 col  : node.start.col,
      //                 prop : node.value
      //             }
      //         );
      //     }
      // }
    })
  );

  // only function declarations after this line

  function can_mangle(name) {
    if (unmangleable.indexOf(name) >= 0) return false;
    if (reserved.indexOf(name) >= 0) return false;
    if (options.only_cache) {
      return cache.props.has(name);
    }
    if (/^-?[0-9]+(\.[0-9]+)?(e[+-][0-9]+)?$/.test(name)) return false;
    return true;
  }

  function should_mangle(name) {
    if (ignore_quoted && name in ignored) return false;
    if (regex && !regex.test(name)) return false;
    if (reserved.indexOf(name) >= 0) return false;
    return cache.props.has(name) || names_to_mangle.indexOf(name) >= 0;
  }

  function add(name, ignore) {
    if (ignore) {
      ignored[name] = true;
      return;
    }

    if (can_mangle(name)) push_uniq(names_to_mangle, name);

    if (!should_mangle(name)) {
      push_uniq(unmangleable, name);
    }
  }

  function mangle(name) {
    if (!should_mangle(name)) {
      return name;
    }

    var mangled = cache.props.get(name);
    if (!mangled) {
      if (debug) {
        // debug mode: use a prefix and suffix to preserve readability, e.g. o.foo -> o._$foo$NNN_.
        var debug_mangled = "_$" + name + "$" + debug_name_suffix + "_";

        if (
          can_mangle(debug_mangled) &&
          !(ignore_quoted && debug_mangled in ignored)
        ) {
          mangled = debug_mangled;
        }
      }

      // either debug mode is off, or it is on and we could not use the mangled name
      if (!mangled) {
        // note can_mangle() does not check if the name collides with the 'ignored' set
        // (filled with quoted properties when ignore_quoted set). Make sure we add this
        // check so we don't collide with a quoted name.
        do {
          mangled = base54(++cache.cname);
        } while (!can_mangle(mangled) || (ignore_quoted && mangled in ignored));
      }

      cache.props.set(name, mangled);
    }
    return mangled;
  }

  function addStrings(node, ignore) {
    var out = {};
    try {
      (function walk(node) {
        node.walk(
          new TreeWalker(function (node) {
            if (node instanceof AST_Seq) {
              walk(node.cdr);
              return true;
            }
            if (node instanceof AST_String) {
              add(node.value, ignore);
              return true;
            }
            if (node instanceof AST_Conditional) {
              walk(node.consequent);
              walk(node.alternative);
              return true;
            }
            throw out;
          })
        );
      })(node);
    } catch (ex) {
      if (ex !== out) throw ex;
    }
  }

  function mangleStrings(node) {
    return node.transform(
      new TreeTransformer(function (node) {
        if (node instanceof AST_Seq) {
          node.cdr = mangleStrings(node.cdr);
        } else if (node instanceof AST_String) {
          node.value = mangle(node.value);
        } else if (node instanceof AST_Conditional) {
          node.consequent = mangleStrings(node.consequent);
          node.alternative = mangleStrings(node.alternative);
        }
        return node;
      })
    );
  }
}
