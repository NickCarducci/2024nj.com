//("use strict");
var EXPECT_DIRECTIVE = /^$|[;{][\s\n]*$/;

function is_some_comments(comment) {
  // multiline comment
  return (
    comment.type === "comment2" &&
    /@preserve|@license|@cc_on/i.test(comment.value)
  );
}

export default function OutputStream(options) {
  options = defaults(
    options,
    {
      ascii_only: false,
      beautify: false,
      bracketize: false,
      comments: false,
      indent_level: 4,
      indent_start: 0,
      inline_script: true,
      keep_quoted_props: false,
      max_line_len: false,
      preamble: null,
      preserve_line: false,
      quote_keys: false,
      quote_style: 0,
      screw_ie8: true,
      semicolons: true,
      shebang: true,
      source_map: null,
      space_colon: true,
      unescape_regexps: false,
      width: 80,
      wrap_iife: false
    },
    true
  );

  // Convert comment option to RegExp if neccessary and set up comments filter
  var comment_filter = return_false; // Default case, throw all comments away
  if (options.comments) {
    var comments = options.comments;
    if (
      typeof options.comments === "string" &&
      /^\/.*\/[a-zA-Z]*$/.test(options.comments)
    ) {
      var regex_pos = options.comments.lastIndexOf("/");
      comments = new RegExp(
        options.comments.substr(1, regex_pos - 1),
        options.comments.substr(regex_pos + 1)
      );
    }
    if (comments instanceof RegExp) {
      comment_filter = function (comment) {
        return comment.type !== "comment5" && comments.test(comment.value);
      };
    } else if (typeof comments === "function") {
      comment_filter = function (comment) {
        return comment.type !== "comment5" && comments(this, comment);
      };
    } else if (comments === "some") {
      comment_filter = is_some_comments;
    } else {
      // NOTE includes "all" option
      comment_filter = return_true;
    }
  }

  var indentation = 0;
  var current_col = 0;
  var current_line = 1;
  var current_pos = 0;
  var OUTPUT = "";

  function to_ascii(str, identifier) {
    return str.replace(/[\u0000-\u001f\u007f-\uffff]/g, function (ch) {
      var code = ch.charCodeAt(0).toString(16);
      if (code.length <= 2 && !identifier) {
        while (code.length < 2) code = "0" + code;
        return "\\x" + code;
      } else {
        while (code.length < 4) code = "0" + code;
        return "\\u" + code;
      }
    });
  }

  function make_string(str, quote) {
    var dq = 0,
      sq = 0;
    str = str.replace(
      /[\\\b\f\n\r\v\t\x22\x27\u2028\u2029\0\ufeff]/g,
      function (s, i) {
        switch (s) {
          case '"':
            ++dq;
            return '"';
          case "'":
            ++sq;
            return "'";
          case "\\":
            return "\\\\";
          case "\n":
            return "\\n";
          case "\r":
            return "\\r";
          case "\t":
            return "\\t";
          case "\b":
            return "\\b";
          case "\f":
            return "\\f";
          case "\x0B":
            return options.screw_ie8 ? "\\v" : "\\x0B";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          case "\ufeff":
            return "\\ufeff";
          case "\0":
            return /[0-7]/.test(str.charAt(i + 1)) ? "\\x00" : "\\0";
        }
        return s;
      }
    );
    function quote_single() {
      return "'" + str.replace(/\x27/g, "\\'") + "'";
    }
    function quote_double() {
      return '"' + str.replace(/\x22/g, '\\"') + '"';
    }
    if (options.ascii_only) str = to_ascii(str);
    switch (options.quote_style) {
      case 1:
        return quote_single();
      case 2:
        return quote_double();
      case 3:
        return quote === "'" ? quote_single() : quote_double();
      default:
        return dq > sq ? quote_single() : quote_double();
    }
  }

  function encode_string(str, quote) {
    var ret = make_string(str, quote);
    if (options.inline_script) {
      ret = ret.replace(/<\x2fscript([>\/\t\n\f\r ])/gi, "<\\/script$1");
      ret = ret.replace(/\x3c!--/g, "\\x3c!--");
      ret = ret.replace(/--\x3e/g, "--\\x3e");
    }
    return ret;
  }

  function make_name(name) {
    name = name.toString();
    if (options.ascii_only) name = to_ascii(name, true);
    return name;
  }

  function make_indent(back) {
    return repeat_string(
      " ",
      options.indent_start + indentation - back * options.indent_level
    );
  }

  /* -----[ beautification/minification ]----- */

  var might_need_space = false;
  var might_need_semicolon = false;
  var might_add_newline = 0;
  var last = "";

  var ensure_line_len = options.max_line_len
    ? function () {
        if (current_col > options.max_line_len) {
          if (might_add_newline) {
            var left = OUTPUT.slice(0, might_add_newline);
            var right = OUTPUT.slice(might_add_newline);
            OUTPUT = left + "\n" + right;
            current_line++;
            current_pos++;
            current_col = right.length;
          }
          if (current_col > options.max_line_len) {
            AST_Node.warn("Output exceeds {max_line_len} characters", options);
          }
        }
        might_add_newline = 0;
      }
    : noop;

  var requireSemicolonChars = makePredicate("( [ + * / - , .");

  function print(str) {
    str = String(str);
    var ch = str.charAt(0);
    var prev = last.charAt(last.length - 1);
    if (might_need_semicolon) {
      might_need_semicolon = false;

      if (
        (prev === ":" && ch === "}") ||
        ((!ch || ";}".indexOf(ch) < 0) && prev !== ";")
      ) {
        if (options.semicolons || requireSemicolonChars(ch)) {
          OUTPUT += ";";
          current_col++;
          current_pos++;
        } else {
          ensure_line_len();
          OUTPUT += "\n";
          current_pos++;
          current_line++;
          current_col = 0;

          if (/^\s+$/.test(str)) {
            // reset the semicolon flag, since we didn't print one
            // now and might still have to later
            might_need_semicolon = true;
          }
        }

        if (!options.beautify) might_need_space = false;
      }
    }

    if (!options.beautify && options.preserve_line && stack[stack.length - 1]) {
      var target_line = stack[stack.length - 1].start.line;
      while (current_line < target_line) {
        ensure_line_len();
        OUTPUT += "\n";
        current_pos++;
        current_line++;
        current_col = 0;
        might_need_space = false;
      }
    }

    if (might_need_space) {
      if (
        (is_identifier_char(prev) && (is_identifier_char(ch) || ch === "\\")) ||
        (ch === "/" && ch === prev) ||
        ((ch === "+" || ch === "-") && ch === last)
      ) {
        OUTPUT += " ";
        current_col++;
        current_pos++;
      }
      might_need_space = false;
    }
    OUTPUT += str;
    current_pos += str.length;
    var a = str.split(/\r?\n/),
      n = a.length - 1;
    current_line += n;
    current_col += a[0].length;
    if (n > 0) {
      ensure_line_len();
      current_col = a[n].length;
    }
    last = str;
  }

  var space = options.beautify
    ? function () {
        print(" ");
      }
    : function () {
        might_need_space = true;
      };

  var indent = options.beautify
    ? function (half) {
        if (options.beautify) {
          print(make_indent(half ? 0.5 : 0));
        }
      }
    : noop;

  var with_indent = options.beautify
    ? function (col, cont) {
        if (col === true) col = next_indent();
        var save_indentation = indentation;
        indentation = col;
        var ret = cont();
        indentation = save_indentation;
        return ret;
      }
    : function (col, cont) {
        return cont();
      };

  var newline = options.beautify
    ? function () {
        print("\n");
      }
    : options.max_line_len
    ? function () {
        ensure_line_len();
        might_add_newline = OUTPUT.length;
      }
    : noop;

  var semicolon = options.beautify
    ? function () {
        print(";");
      }
    : function () {
        might_need_semicolon = true;
      };

  function force_semicolon() {
    might_need_semicolon = false;
    print(";");
  }

  function next_indent() {
    return indentation + options.indent_level;
  }

  function with_block(cont) {
    var ret;
    print("{");
    newline();
    with_indent(next_indent(), function () {
      ret = cont();
    });
    indent();
    print("}");
    return ret;
  }

  function with_parens(cont) {
    print("(");
    //XXX: still nice to have that for argument lists
    //var ret = with_indent(current_col, cont);
    var ret = cont();
    print(")");
    return ret;
  }

  function with_square(cont) {
    print("[");
    //var ret = with_indent(current_col, cont);
    var ret = cont();
    print("]");
    return ret;
  }

  function comma() {
    print(",");
    space();
  }

  function colon() {
    print(":");
    if (options.space_colon) space();
  }

  var add_mapping = options.source_map
    ? function (token, name) {
        try {
          if (token)
            options.source_map.add(
              token.file || "?",
              current_line,
              current_col,
              token.line,
              token.col,
              !name && token.type === "name" ? token.value : name
            );
        } catch (ex) {
          AST_Node.warn(
            "Couldn't figure out mapping for {file}:{line},{col} → {cline},{ccol} [{name}]",
            {
              file: token.file,
              line: token.line,
              col: token.col,
              cline: current_line,
              ccol: current_col,
              name: name || ""
            }
          );
        }
      }
    : noop;

  function get() {
    if (might_add_newline) {
      ensure_line_len();
    }
    return OUTPUT;
  }

  var stack = [];
  return {
    get: get,
    toString: get,
    indent: indent,
    indentation: function () {
      return indentation;
    },
    current_width: function () {
      return current_col - indentation;
    },
    should_break: function () {
      return options.width && this.current_width() >= options.width;
    },
    newline: newline,
    print: print,
    space: space,
    comma: comma,
    colon: colon,
    last: function () {
      return last;
    },
    semicolon: semicolon,
    force_semicolon: force_semicolon,
    to_ascii: to_ascii,
    print_name: function (name) {
      print(make_name(name));
    },
    print_string: function (str, quote, escape_directive) {
      var encoded = encode_string(str, quote);
      if (escape_directive === true && encoded.indexOf("\\") === -1) {
        // Insert semicolons to break directive prologue
        if (!EXPECT_DIRECTIVE.test(OUTPUT)) {
          force_semicolon();
        }
        force_semicolon();
      }
      print(encoded);
    },
    encode_string: encode_string,
    next_indent: next_indent,
    with_indent: with_indent,
    with_block: with_block,
    with_parens: with_parens,
    with_square: with_square,
    add_mapping: add_mapping,
    option: function (opt) {
      return options[opt];
    },
    comment_filter: comment_filter,
    line: function () {
      return current_line;
    },
    col: function () {
      return current_col;
    },
    pos: function () {
      return current_pos;
    },
    push_node: function (node) {
      stack.push(node);
    },
    pop_node: function () {
      return stack.pop();
    },
    parent: function (n) {
      return stack[stack.length - 2 - (n || 0)];
    }
  };
}
