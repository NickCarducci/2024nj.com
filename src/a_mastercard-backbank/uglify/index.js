import OutputStream from "./outputstream";
import Mihai2 from "./mihai2";
import Mihai from "./mihai";
/* -----[ code generators ]----- */
//iife basically, not just a declaration, 'this'- or return-only, -accessible, -global-return
function CodeGenerators() {
  return (function () {
    /* -----[ utils ]----- */

    function DEFPRINT(nodetype, generator) {
      nodetype.DEFMETHOD("_codegen", generator);
    }

    var use_asm = false;
    var in_directive = false;

    AST_Node.DEFMETHOD("print", function (stream, force_parens) {
      var self = this,
        generator = self._codegen,
        prev_use_asm = use_asm;
      if (
        self instanceof AST_Directive &&
        self.value === "use asm" &&
        stream.parent() instanceof AST_Scope
      ) {
        use_asm = true;
      }
      function doit() {
        self.add_comments(stream);
        self.add_source_map(stream);
        generator(self, stream);
      }
      stream.push_node(self);
      if (force_parens || self.needs_parens(stream)) {
        stream.with_parens(doit);
      } else {
        doit();
      }
      stream.pop_node();
      if (self instanceof AST_Scope) {
        use_asm = prev_use_asm;
      }
    });

    AST_Node.DEFMETHOD("print_to_string", function (options) {
      var s = OutputStream(options);
      if (!options) s._readonly = true;
      this.print(s);
      return s.get();
    });

    /* -----[ comments ]----- */

    AST_Node.DEFMETHOD("add_comments", function (output) {
      if (output._readonly) return;
      var self = this;
      var start = self.start;
      if (start && !start._comments_dumped) {
        start._comments_dumped = true;
        var comments = start.comments_before || [];

        // XXX: ugly fix for https://github.com/mishoo/UglifyJS2/issues/112
        //               and https://github.com/mishoo/UglifyJS2/issues/372
        if (self instanceof AST_Exit && self.value) {
          self.value.walk(
            new TreeWalker(function (node) {
              if (node.start && node.start.comments_before) {
                comments = comments.concat(node.start.comments_before);
                node.start.comments_before = [];
              }
              if (
                node instanceof AST_Function ||
                node instanceof AST_Array ||
                node instanceof AST_Object
              ) {
                return true; // don't go inside.
              }
            })
          );
        }

        if (output.pos() === 0) {
          if (
            comments.length > 0 &&
            output.option("shebang") &&
            comments[0].type === "comment5"
          ) {
            output.print("#!" + comments.shift().value + "\n");
            output.indent();
          }
          var preamble = output.option("preamble");
          if (preamble) {
            output.print(
              preamble.replace(/\r\n?|[\n\u2028\u2029]|\s*$/g, "\n")
            );
          }
        }

        comments = comments.filter(output.comment_filter, self);

        // Keep single line comments after nlb, after nlb
        if (
          !output.option("beautify") &&
          comments.length > 0 &&
          /comment[134]/.test(comments[0].type) &&
          output.col() !== 0 &&
          comments[0].nlb
        ) {
          output.print("\n");
        }

        comments.forEach(function (c) {
          if (/comment[134]/.test(c.type)) {
            output.print("//" + c.value + "\n");
            output.indent();
          } else if (c.type === "comment2") {
            output.print("/*" + c.value + "*/");
            if (start.nlb) {
              output.print("\n");
              output.indent();
            } else {
              output.space();
            }
          }
        });
      }
    });

    /* -----[ PARENTHESES ]----- */

    function PARENS(nodetype, func) {
      if (Array.isArray(nodetype)) {
        nodetype.forEach(function (nodetype) {
          PARENS(nodetype, func);
        });
      } else {
        nodetype.DEFMETHOD("needs_parens", func);
      }
    }

    PARENS(AST_Node, function () {
      return false;
    });

    // a function expression needs parens around it when it's provably
    // the first token to appear in a statement.
    PARENS(AST_Function, function (output) {
      if (first_in_statement(output)) {
        return true;
      }

      if (output.option("wrap_iife")) {
        var p = output.parent();
        return p instanceof AST_Call && p.expression === this;
      }

      return false;
    });

    // same goes for an object literal, because otherwise it would be
    // interpreted as a block of code.
    PARENS(AST_Object, function (output) {
      return first_in_statement(output);
    });

    PARENS(AST_Unary, function (output) {
      var p = output.parent();
      return (
        (p instanceof AST_PropAccess && p.expression === this) ||
        (p instanceof AST_Call && p.expression === this)
      );
    });

    PARENS(AST_Seq, function (output) {
      var p = output.parent();
      return (
        p instanceof AST_Call || // (foo, bar)() or foo(1, (2, 3), 4)
        p instanceof AST_Unary || // !(foo, bar, baz)
        p instanceof AST_Binary || // 1 + (2, 3) + 4 ==> 8
        p instanceof AST_VarDef || // var a = (1, 2), b = a + a; ==> b === 4
        p instanceof AST_PropAccess || // (1, {foo:2}).foo or (1, {foo:2})["foo"] ==> 2
        p instanceof AST_Array || // [ 1, (2, 3), 4 ] ==> [ 1, 3, 4 ]
        p instanceof AST_ObjectProperty || // { foo: (1, 2) }.foo ==> 2
        p instanceof AST_Conditional
        /* (false, true) ? (a = 10, b = 20) : (c = 30)
         * ==> 20 (side effect, set a := 10 and b := 20) */
      );
    });

    PARENS(AST_Binary, function (output) {
      var p = output.parent();
      // (foo && bar)()
      if (p instanceof AST_Call && p.expression === this) return true;
      // typeof (foo && bar)
      if (p instanceof AST_Unary) return true;
      // (foo && bar)["prop"], (foo && bar).prop
      if (p instanceof AST_PropAccess && p.expression === this) return true;
      // this deals with precedence: 3 * (2 + 1)
      if (p instanceof AST_Binary) {
        var po = p.operator,
          pp = PRECEDENCE[po];
        var so = this.operator,
          sp = PRECEDENCE[so];
        if (pp > sp || (pp === sp && this === p.right)) {
          return true;
        }
      }
    });

    PARENS(AST_PropAccess, function (output) {
      var p = output.parent();
      if (p instanceof AST_New && p.expression === this) {
        // i.e. new (foo.bar().baz)
        //
        // if there's one call into this subtree, then we need
        // parens around it too, otherwise the call will be
        // interpreted as passing the arguments to the upper New
        // expression.
        try {
          this.walk(
            new TreeWalker(function (node) {
              if (node instanceof AST_Call) throw p;
            })
          );
        } catch (ex) {
          if (ex !== p) throw ex;
          return true;
        }
      }
    });

    PARENS(AST_Call, function (output) {
      var p = output.parent(),
        p1;
      if (p instanceof AST_New && p.expression === this) return true;

      // workaround for Safari bug.
      // https://bugs.webkit.org/show_bug.cgi?id=123506
      return (
        this.expression instanceof AST_Function &&
        p instanceof AST_PropAccess &&
        p.expression === this &&
        (p1 = output.parent(1)) instanceof AST_Assign &&
        p1.left === p
      );
    });

    PARENS(AST_New, function (output) {
      var p = output.parent();
      if (
        !need_constructor_parens(this, output) &&
        (p instanceof AST_PropAccess || // (new Date).getTime(), (new Date)["getTime"]()
          (p instanceof AST_Call && p.expression === this))
      )
        // (new foo)(bar)
        return true;
    });

    PARENS(AST_Number, function (output) {
      var p = output.parent();
      if (p instanceof AST_PropAccess && p.expression === this) {
        var value = this.getValue();
        if (value < 0 || /^0/.test(make_num(value))) {
          return true;
        }
      }
    });

    PARENS([AST_Assign, AST_Conditional], function (output) {
      var p = output.parent();
      // !(a = false) → true
      if (p instanceof AST_Unary) return true;
      // 1 + (a = 2) + 3 → 6, side effect setting a = 2
      if (p instanceof AST_Binary && !(p instanceof AST_Assign)) return true;
      // (a = func)() —or— new (a = Object)()
      if (p instanceof AST_Call && p.expression === this) return true;
      // (a = foo) ? bar : baz
      if (p instanceof AST_Conditional && p.condition === this) return true;
      // (a = foo)["prop"] —or— (a = foo).prop
      if (p instanceof AST_PropAccess && p.expression === this) return true;
    });

    /* -----[ PRINTERS ]----- */

    DEFPRINT(AST_Directive, function (self, output) {
      output.print_string(self.value, self.quote);
      output.semicolon();
    });
    DEFPRINT(AST_Debugger, function (self, output) {
      output.print("debugger");
      output.semicolon();
    });

    /* -----[ statements ]----- */

    function display_body(body, is_toplevel, output, allow_directives) {
      var last = body.length - 1;
      in_directive = allow_directives;
      body.forEach(function (stmt, i) {
        if (
          in_directive === true &&
          !(
            stmt instanceof AST_Directive ||
            stmt instanceof AST_EmptyStatement ||
            (stmt instanceof AST_SimpleStatement &&
              stmt.body instanceof AST_String)
          )
        ) {
          in_directive = false;
        }
        if (!(stmt instanceof AST_EmptyStatement)) {
          output.indent();
          stmt.print(output);
          if (!(i === last && is_toplevel)) {
            output.newline();
            if (is_toplevel) output.newline();
          }
        }
        if (
          in_directive === true &&
          stmt instanceof AST_SimpleStatement &&
          stmt.body instanceof AST_String
        ) {
          in_directive = false;
        }
      });
      in_directive = false;
    }

    AST_StatementWithBody.DEFMETHOD("_do_print_body", function (output) {
      force_statement(this.body, output);
    });

    DEFPRINT(AST_Statement, function (self, output) {
      self.body.print(output);
      output.semicolon();
    });
    DEFPRINT(AST_Toplevel, function (self, output) {
      display_body(self.body, true, output, true);
      output.print("");
    });
    DEFPRINT(AST_LabeledStatement, function (self, output) {
      self.label.print(output);
      output.colon();
      self.body.print(output);
    });
    DEFPRINT(AST_SimpleStatement, function (self, output) {
      self.body.print(output);
      output.semicolon();
    });
    function print_bracketed(body, output, allow_directives) {
      if (body.length > 0)
        output.with_block(function () {
          display_body(body, false, output, allow_directives);
        });
      else output.print("{}");
    }
    DEFPRINT(AST_BlockStatement, function (self, output) {
      print_bracketed(self.body, output);
    });
    DEFPRINT(AST_EmptyStatement, function (self, output) {
      output.semicolon();
    });
    DEFPRINT(AST_Do, function (self, output) {
      output.print("do");
      output.space();
      make_block(self.body, output);
      output.space();
      output.print("while");
      output.space();
      output.with_parens(function () {
        self.condition.print(output);
      });
      output.semicolon();
    });
    DEFPRINT(AST_While, function (self, output) {
      output.print("while");
      output.space();
      output.with_parens(function () {
        self.condition.print(output);
      });
      output.space();
      self._do_print_body(output);
    });
    DEFPRINT(AST_For, function (self, output) {
      output.print("for");
      output.space();
      output.with_parens(function () {
        if (self.init) {
          if (self.init instanceof AST_Definitions) {
            self.init.print(output);
          } else {
            parenthesize_for_noin(self.init, output, true);
          }
          output.print(";");
          output.space();
        } else {
          output.print(";");
        }
        if (self.condition) {
          self.condition.print(output);
          output.print(";");
          output.space();
        } else {
          output.print(";");
        }
        if (self.step) {
          self.step.print(output);
        }
      });
      output.space();
      self._do_print_body(output);
    });
    DEFPRINT(AST_ForIn, function (self, output) {
      output.print("for");
      output.space();
      output.with_parens(function () {
        self.init.print(output);
        output.space();
        output.print("in");
        output.space();
        self.object.print(output);
      });
      output.space();
      self._do_print_body(output);
    });
    DEFPRINT(AST_With, function (self, output) {
      output.print("with");
      output.space();
      output.with_parens(function () {
        self.expression.print(output);
      });
      output.space();
      self._do_print_body(output);
    });

    /* -----[ functions ]----- */
    AST_Lambda.DEFMETHOD("_do_print", function (output, nokeyword) {
      var self = this;
      if (!nokeyword) {
        output.print("function");
      }
      if (self.name) {
        output.space();
        self.name.print(output);
      }
      output.with_parens(function () {
        self.argnames.forEach(function (arg, i) {
          if (i) output.comma();
          arg.print(output);
        });
      });
      output.space();
      print_bracketed(self.body, output, true);
    });
    DEFPRINT(AST_Lambda, function (self, output) {
      self._do_print(output);
    });

    /* -----[ exits ]----- */
    AST_Exit.DEFMETHOD("_do_print", function (output, kind) {
      output.print(kind);
      if (this.value) {
        output.space();
        this.value.print(output);
      }
      output.semicolon();
    });
    DEFPRINT(AST_Return, function (self, output) {
      self._do_print(output, "return");
    });
    DEFPRINT(AST_Throw, function (self, output) {
      self._do_print(output, "throw");
    });

    /* -----[ loop control ]----- */
    AST_LoopControl.DEFMETHOD("_do_print", function (output, kind) {
      output.print(kind);
      if (this.label) {
        output.space();
        this.label.print(output);
      }
      output.semicolon();
    });
    DEFPRINT(AST_Break, function (self, output) {
      self._do_print(output, "break");
    });
    DEFPRINT(AST_Continue, function (self, output) {
      self._do_print(output, "continue");
    });

    /* -----[ if ]----- */
    function make_then(self, output) {
      var b = self.body;
      if (
        output.option("bracketize") ||
        (!output.option("screw_ie8") && b instanceof AST_Do)
      )
        return make_block(b, output);
      // The squeezer replaces "block"-s that contain only a single
      // statement with the statement itself; technically, the AST
      // is correct, but this can create problems when we output an
      // IF having an ELSE clause where the THEN clause ends in an
      // IF *without* an ELSE block (then the outer ELSE would refer
      // to the inner IF).  This function checks for this case and
      // adds the block brackets if needed.
      if (!b) return output.force_semicolon();
      while (true) {
        if (b instanceof AST_If) {
          if (!b.alternative) {
            make_block(self.body, output);
            return;
          }
          b = b.alternative;
        } else if (b instanceof AST_StatementWithBody) {
          b = b.body;
        } else break;
      }
      force_statement(self.body, output);
    }
    DEFPRINT(AST_If, function (self, output) {
      output.print("if");
      output.space();
      output.with_parens(function () {
        self.condition.print(output);
      });
      output.space();
      if (self.alternative) {
        make_then(self, output);
        output.space();
        output.print("else");
        output.space();
        if (self.alternative instanceof AST_If) self.alternative.print(output);
        else force_statement(self.alternative, output);
      } else {
        self._do_print_body(output);
      }
    });

    /* -----[ switch ]----- */
    DEFPRINT(AST_Switch, function (self, output) {
      output.print("switch");
      output.space();
      output.with_parens(function () {
        self.expression.print(output);
      });
      output.space();
      var last = self.body.length - 1;
      if (last < 0) output.print("{}");
      else
        output.with_block(function () {
          self.body.forEach(function (branch, i) {
            output.indent(true);
            branch.print(output);
            if (i < last && branch.body.length > 0) output.newline();
          });
        });
    });
    AST_SwitchBranch.DEFMETHOD("_do_print_body", function (output) {
      output.newline();
      this.body.forEach(function (stmt) {
        output.indent();
        stmt.print(output);
        output.newline();
      });
    });
    DEFPRINT(AST_Default, function (self, output) {
      output.print("default:");
      self._do_print_body(output);
    });
    DEFPRINT(AST_Case, function (self, output) {
      output.print("case");
      output.space();
      self.expression.print(output);
      output.print(":");
      self._do_print_body(output);
    });

    /* -----[ exceptions ]----- */
    DEFPRINT(AST_Try, function (self, output) {
      output.print("try");
      output.space();
      print_bracketed(self.body, output);
      if (self.bcatch) {
        output.space();
        self.bcatch.print(output);
      }
      if (self.bfinally) {
        output.space();
        self.bfinally.print(output);
      }
    });
    DEFPRINT(AST_Catch, function (self, output) {
      output.print("catch");
      output.space();
      output.with_parens(function () {
        self.argname.print(output);
      });
      output.space();
      print_bracketed(self.body, output);
    });
    DEFPRINT(AST_Finally, function (self, output) {
      output.print("finally");
      output.space();
      print_bracketed(self.body, output);
    });

    /* -----[ var/const ]----- */
    AST_Definitions.DEFMETHOD("_do_print", function (output, kind) {
      output.print(kind);
      output.space();
      this.definitions.forEach(function (def, i) {
        if (i) output.comma();
        def.print(output);
      });
      var p = output.parent();
      var in_for = p instanceof AST_For || p instanceof AST_ForIn;
      var avoid_semicolon = in_for && p.init === this;
      if (!avoid_semicolon) output.semicolon();
    });
    DEFPRINT(AST_Var, function (self, output) {
      self._do_print(output, "var");
    });
    DEFPRINT(AST_Const, function (self, output) {
      self._do_print(output, "const");
    });

    function parenthesize_for_noin(node, output, noin) {
      if (!noin) node.print(output);
      else
        try {
          // need to take some precautions here:
          //    https://github.com/mishoo/UglifyJS2/issues/60
          node.walk(
            new TreeWalker(function (node) {
              if (node instanceof AST_Binary && node.operator === "in")
                throw output;
            })
          );
          node.print(output);
        } catch (ex) {
          if (ex !== output) throw ex;
          node.print(output, true);
        }
    }

    DEFPRINT(AST_VarDef, function (self, output) {
      self.name.print(output);
      if (self.value) {
        output.space();
        output.print("=");
        output.space();
        var p = output.parent(1);
        var noin = p instanceof AST_For || p instanceof AST_ForIn;
        parenthesize_for_noin(self.value, output, noin);
      }
    });

    /* -----[ other expressions ]----- */
    DEFPRINT(AST_Call, function (self, output) {
      self.expression.print(output);
      if (self instanceof AST_New && !need_constructor_parens(self, output))
        return;
      output.with_parens(function () {
        self.args.forEach(function (expr, i) {
          if (i) output.comma();
          expr.print(output);
        });
      });
    });
    DEFPRINT(AST_New, function (self, output) {
      output.print("new");
      output.space();
      AST_Call.prototype._codegen(self, output);
    });

    AST_Seq.DEFMETHOD("_do_print", function (output) {
      this.car.print(output);
      if (this.cdr) {
        output.comma();
        if (output.should_break()) {
          output.newline();
          output.indent();
        }
        this.cdr.print(output);
      }
    });
    DEFPRINT(AST_Seq, function (self, output) {
      self._do_print(output);
      // var p = output.parent();
      // if (p instanceof AST_Statement) {
      //     output.with_indent(output.next_indent(), function(){
      //         self._do_print(output);
      //     });
      // } else {
      //     self._do_print(output);
      // }
    });
    DEFPRINT(AST_Dot, function (self, output) {
      var expr = self.expression;
      expr.print(output);
      if (expr instanceof AST_Number && expr.getValue() >= 0) {
        if (!/[xa-f.)]/i.test(output.last())) {
          output.print(".");
        }
      }
      output.print(".");
      // the name after dot would be mapped about here.
      output.add_mapping(self.end);
      output.print_name(self.property);
    });
    DEFPRINT(AST_Sub, function (self, output) {
      self.expression.print(output);
      output.print("[");
      self.property.print(output);
      output.print("]");
    });
    DEFPRINT(AST_UnaryPrefix, function (self, output) {
      var op = self.operator;
      output.print(op);
      if (
        /^[a-z]/i.test(op) ||
        (/[+-]$/.test(op) &&
          self.expression instanceof AST_UnaryPrefix &&
          /^[+-]/.test(self.expression.operator))
      ) {
        output.space();
      }
      self.expression.print(output);
    });
    DEFPRINT(AST_UnaryPostfix, function (self, output) {
      self.expression.print(output);
      output.print(self.operator);
    });
    DEFPRINT(AST_Binary, function (self, output) {
      var op = self.operator;
      self.left.print(output);
      if (
        op[0] === ">" /* ">>" ">>>" ">" ">=" */ &&
        self.left instanceof AST_UnaryPostfix &&
        self.left.operator === "--"
      ) {
        // space is mandatory to avoid outputting -->
        output.print(" ");
      } else {
        // the space is optional depending on "beautify"
        output.space();
      }
      output.print(op);
      if (
        (op === "<" || op === "<<") &&
        self.right instanceof AST_UnaryPrefix &&
        self.right.operator === "!" &&
        self.right.expression instanceof AST_UnaryPrefix &&
        self.right.expression.operator === "--"
      ) {
        // space is mandatory to avoid outputting <!--
        output.print(" ");
      } else {
        // the space is optional depending on "beautify"
        output.space();
      }
      self.right.print(output);
    });
    DEFPRINT(AST_Conditional, function (self, output) {
      self.condition.print(output);
      output.space();
      output.print("?");
      output.space();
      self.consequent.print(output);
      output.space();
      output.colon();
      self.alternative.print(output);
    });

    /* -----[ literals ]----- */
    DEFPRINT(AST_Array, function (self, output) {
      output.with_square(function () {
        var a = self.elements,
          len = a.length;
        if (len > 0) output.space();
        a.forEach(function (exp, i) {
          if (i) output.comma();
          exp.print(output);
          // If the final element is a hole, we need to make sure it
          // doesn't look like a trailing comma, by inserting an actual
          // trailing comma.
          if (i === len - 1 && exp instanceof AST_Hole) output.comma();
        });
        if (len > 0) output.space();
      });
    });
    DEFPRINT(AST_Object, function (self, output) {
      if (self.properties.length > 0)
        output.with_block(function () {
          self.properties.forEach(function (prop, i) {
            if (i) {
              output.print(",");
              output.newline();
            }
            output.indent();
            prop.print(output);
          });
          output.newline();
        });
      else output.print("{}");
    });

    function print_property_name(key, quote, output) {
      if (output.option("quote_keys")) {
        output.print_string(key + "");
      } else if (
        (typeof key === "number" ||
          (!output.option("beautify") && +key + "" === key)) &&
        parseFloat(key) >= 0
      ) {
        output.print(make_num(key));
      } else if (
        RESERVED_WORDS(key)
          ? output.option("screw_ie8")
          : is_identifier_string(key)
      ) {
        if (quote && output.option("keep_quoted_props")) {
          output.print_string(key, quote);
        } else {
          output.print_name(key);
        }
      } else {
        output.print_string(key, quote);
      }
    }

    DEFPRINT(AST_ObjectKeyVal, function (self, output) {
      print_property_name(self.key, self.quote, output);
      output.colon();
      self.value.print(output);
    });
    AST_ObjectProperty.DEFMETHOD("_print_getter_setter", function (
      type,
      output
    ) {
      output.print(type);
      output.space();
      print_property_name(this.key.name, this.quote, output);
      this.value._do_print(output, true);
    });
    DEFPRINT(AST_ObjectSetter, function (self, output) {
      self._print_getter_setter("set", output);
    });
    DEFPRINT(AST_ObjectGetter, function (self, output) {
      self._print_getter_setter("get", output);
    });
    DEFPRINT(AST_Symbol, function (self, output) {
      var def = self.definition();
      output.print_name(def ? def.mangled_name || def.name : self.name);
    });
    DEFPRINT(AST_Hole, noop);
    DEFPRINT(AST_This, function (self, output) {
      output.print("this");
    });
    DEFPRINT(AST_Constant, function (self, output) {
      output.print(self.getValue());
    });
    DEFPRINT(AST_String, function (self, output) {
      output.print_string(self.getValue(), self.quote, in_directive);
    });
    DEFPRINT(AST_Number, function (self, output) {
      if (use_asm && self.start && self.start.raw != null) {
        output.print(self.start.raw);
      } else {
        output.print(make_num(self.getValue()));
      }
    });

    function regexp_safe_literal(code) {
      return (
        [
          0x5c, // \
          0x2f, // /
          0x2e, // .
          0x2b, // +
          0x2a, // *
          0x3f, // ?
          0x28, // (
          0x29, // )
          0x5b, // [
          0x5d, // ]
          0x7b, // {
          0x7d, // }
          0x24, // $
          0x5e, // ^
          0x3a, // :
          0x7c, // |
          0x21, // !
          0x0a, // \n
          0x0d, // \r
          0x00, // \0
          0xfeff, // Unicode BOM
          0x2028, // unicode "line separator"
          0x2029 // unicode "paragraph separator"
        ].indexOf(code) < 0
      );
    }

    DEFPRINT(AST_RegExp, function (self, output) {
      var str = self.getValue().toString();
      if (output.option("ascii_only")) {
        str = output.to_ascii(str);
      } else if (output.option("unescape_regexps")) {
        str = str
          .split("\\\\")
          .map(function (str) {
            return str.replace(
              /\\u[0-9a-fA-F]{4}|\\x[0-9a-fA-F]{2}/g,
              function (s) {
                var code = parseInt(s.substr(2), 16);
                return regexp_safe_literal(code)
                  ? String.fromCharCode(code)
                  : s;
              }
            );
          })
          .join("\\\\");
      }
      output.print(str);
      var p = output.parent();
      if (p instanceof AST_Binary && /^in/.test(p.operator) && p.left === self)
        output.print(" ");
    });

    function force_statement(stat, output) {
      if (output.option("bracketize")) {
        make_block(stat, output);
      } else {
        if (!stat || stat instanceof AST_EmptyStatement)
          output.force_semicolon();
        else stat.print(output);
      }
    }

    // self should be AST_New.  decide if we want to show parens or not.
    function need_constructor_parens(self, output) {
      // Always print parentheses with arguments
      if (self.args.length > 0) return true;

      return output.option("beautify");
    }

    function best_of(a) {
      var best = a[0],
        len = best.length;
      for (var i = 1; i < a.length; ++i) {
        if (a[i].length < len) {
          best = a[i];
          len = best.length;
        }
      }
      return best;
    }

    function make_num(num) {
      var str = num.toString(10),
        a = [str.replace(/^0\./, ".").replace("e+", "e")],
        m;
      if (Math.floor(num) === num) {
        if (num >= 0) {
          a.push(
            "0x" + num.toString(16).toLowerCase(), // probably pointless
            "0" + num.toString(8)
          ); // same.
        } else {
          a.push(
            "-0x" + (-num).toString(16).toLowerCase(), // probably pointless
            "-0" + (-num).toString(8)
          ); // same.
        }
        if ((m = /^(.*?)(0+)$/.exec(num))) {
          a.push(m[1] + "e" + m[2].length);
        }
      } else if ((m = /^0?\.(0+)(.*)$/.exec(num))) {
        a.push(
          m[2] + "e-" + (m[1].length + m[2].length),
          str.substr(str.indexOf("."))
        );
      }
      return best_of(a);
    }

    function make_block(stmt, output) {
      if (!stmt || stmt instanceof AST_EmptyStatement) output.print("{}");
      else if (stmt instanceof AST_BlockStatement) stmt.print(output);
      else
        output.with_block(function () {
          output.indent();
          stmt.print(output);
          output.newline();
        });
    }

    /* -----[ source map generators ]----- */

    function DEFMAP(nodetype, generator) {
      nodetype.DEFMETHOD("add_source_map", function (stream) {
        generator(this, stream);
      });
    }

    // We could easily add info for ALL nodes, but it seems to me that
    // would be quite wasteful, hence this noop in the base class.
    DEFMAP(AST_Node, noop);

    function basic_sourcemap_gen(self, output) {
      output.add_mapping(self.start);
    }

    // XXX: I'm not exactly sure if we need it for all of these nodes,
    // or if we should add even more.

    DEFMAP(AST_Directive, basic_sourcemap_gen);
    DEFMAP(AST_Debugger, basic_sourcemap_gen);
    DEFMAP(AST_Symbol, basic_sourcemap_gen);
    DEFMAP(AST_Jump, basic_sourcemap_gen);
    DEFMAP(AST_StatementWithBody, basic_sourcemap_gen);
    DEFMAP(AST_LabeledStatement, noop); // since the label symbol will mark it
    DEFMAP(AST_Lambda, basic_sourcemap_gen);
    DEFMAP(AST_Switch, basic_sourcemap_gen);
    DEFMAP(AST_SwitchBranch, basic_sourcemap_gen);
    DEFMAP(AST_BlockStatement, basic_sourcemap_gen);
    DEFMAP(AST_Toplevel, noop);
    DEFMAP(AST_New, basic_sourcemap_gen);
    DEFMAP(AST_Try, basic_sourcemap_gen);
    DEFMAP(AST_Catch, basic_sourcemap_gen);
    DEFMAP(AST_Finally, basic_sourcemap_gen);
    DEFMAP(AST_Definitions, basic_sourcemap_gen);
    DEFMAP(AST_Constant, basic_sourcemap_gen);
    DEFMAP(AST_ObjectSetter, function (self, output) {
      output.add_mapping(self.start, self.key.name);
    });
    DEFMAP(AST_ObjectGetter, function (self, output) {
      output.add_mapping(self.start, self.key.name);
    });
    DEFMAP(AST_ObjectProperty, function (self, output) {
      output.add_mapping(self.start, self.key);
    });
  })();
}

export default function Uglify(exports, MOZ_SourceMap, logger, rjsFile) {
  function array_to_hash(a) {
    var ret = Object.create(null);
    for (var i = 0; i < a.length; ++i) ret[a[i]] = true;
    return ret;
  }

  function slice(a, start) {
    return Array.prototype.slice.call(a, start || 0);
  }

  function characters(str) {
    return str.split("");
  }

  function member(name, array) {
    return array.indexOf(name) >= 0;
  }

  function find_if(func, array) {
    for (var i = 0, n = array.length; i < n; ++i) {
      if (func(array[i])) return array[i];
    }
  }

  function repeat_string(str, i) {
    if (i <= 0) return "";
    if (i === 1) return str;
    var d = repeat_string(str, i >> 1);
    d += d;
    if (i & 1) d += str;
    return d;
  }

  function configure_error_stack(fn) {
    Object.defineProperty(fn.prototype, "stack", {
      get: function () {
        var err = new Error(this.message);
        err.name = this.name;
        try {
          throw err;
        } catch (e) {
          return e.stack;
        }
      }
    });
  }

  function DefaultsError(msg, defs) {
    this.message = msg;
    this.defs = defs;
  }
  DefaultsError.prototype = Object.create(Error.prototype);
  DefaultsError.prototype.constructor = DefaultsError;
  DefaultsError.prototype.name = "DefaultsError";
  configure_error_stack(DefaultsError);

  DefaultsError.croak = function (msg, defs) {
    throw new DefaultsError(msg, defs);
  };

  function defaults(args, defs, croak) {
    if (args === true) args = {};
    var ret = args || {};
    if (croak)
      for (var i in ret)
        if (HOP(ret, i) && !HOP(defs, i))
          DefaultsError.croak("`" + i + "` is not a supported option", defs);
    for (var i in defs)
      if (HOP(defs, i)) {
        ret[i] = args && HOP(args, i) ? args[i] : defs[i];
      }
    return ret;
  }

  function merge(obj, ext) {
    var count = 0;
    for (var i in ext)
      if (HOP(ext, i)) {
        obj[i] = ext[i];
        count++;
      }
    return count;
  }

  function noop() {}
  function return_false() {
    return false;
  }
  function return_true() {
    return true;
  }
  function return_this() {
    return this;
  }
  function return_null() {
    return null;
  }

  var MAP = (function () {
    function MAP(a, f, backwards) {
      var ret = [],
        top = [],
        i;
      function doit() {
        var val = f(a[i], i);
        var is_last = val instanceof Last;
        if (is_last) val = val.v;
        if (val instanceof AtTop) {
          val = val.v;
          if (val instanceof Splice) {
            top.push.apply(top, backwards ? val.v.slice().reverse() : val.v);
          } else {
            top.push(val);
          }
        } else if (val !== skip) {
          if (val instanceof Splice) {
            ret.push.apply(ret, backwards ? val.v.slice().reverse() : val.v);
          } else {
            ret.push(val);
          }
        }
        return is_last;
      }
      if (a instanceof Array) {
        if (backwards) {
          for (i = a.length; --i >= 0; ) if (doit()) break;
          ret.reverse();
          top.reverse();
        } else {
          for (i = 0; i < a.length; ++i) if (doit()) break;
        }
      } else {
        for (i in a) if (HOP(a, i)) if (doit()) break;
      }
      return top.concat(ret);
    }
    MAP.at_top = function (val) {
      return new AtTop(val);
    };
    MAP.splice = function (val) {
      return new Splice(val);
    };
    MAP.last = function (val) {
      return new Last(val);
    };
    var skip = (MAP.skip = {});
    function AtTop(val) {
      this.v = val;
    }
    function Splice(val) {
      this.v = val;
    }
    function Last(val) {
      this.v = val;
    }
    return MAP;
  })();

  function push_uniq(array, el) {
    if (array.indexOf(el) < 0) array.push(el);
  }

  function string_template(text, props) {
    return text.replace(/\{(.+?)\}/g, function (str, p) {
      return props && props[p];
    });
  }

  function remove(array, el) {
    for (var i = array.length; --i >= 0; ) {
      if (array[i] === el) array.splice(i, 1);
    }
  }

  function mergeSort(array, cmp) {
    if (array.length < 2) return array.slice();
    function merge(a, b) {
      var r = [],
        ai = 0,
        bi = 0,
        i = 0;
      while (ai < a.length && bi < b.length) {
        cmp(a[ai], b[bi]) <= 0 ? (r[i++] = a[ai++]) : (r[i++] = b[bi++]);
      }
      if (ai < a.length) r.push.apply(r, a.slice(ai));
      if (bi < b.length) r.push.apply(r, b.slice(bi));
      return r;
    }
    function _ms(a) {
      if (a.length <= 1) return a;
      var m = Math.floor(a.length / 2),
        left = a.slice(0, m),
        right = a.slice(m);
      left = _ms(left);
      right = _ms(right);
      return merge(left, right);
    }
    return _ms(array);
  }

  function set_difference(a, b) {
    return a.filter(function (el) {
      return b.indexOf(el) < 0;
    });
  }

  function set_intersection(a, b) {
    return a.filter(function (el) {
      return b.indexOf(el) >= 0;
    });
  }

  // this function is taken from Acorn [1], written by Marijn Haverbeke
  // [1] https://github.com/marijnh/acorn
  function makePredicate(words) {
    if (!(words instanceof Array)) words = words.split(" ");
    var f = "",
      cats = [];
    out: for (var i = 0; i < words.length; ++i) {
      for (var j = 0; j < cats.length; ++j)
        if (cats[j][0].length === words[i].length) {
          cats[j].push(words[i]);
          continue out;
        }
      cats.push([words[i]]);
    }
    function quote(word) {
      return JSON.stringify(word).replace(/[\u2028\u2029]/g, function (s) {
        switch (s) {
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
        }
        return s;
      });
    }
    function compareTo(arr) {
      if (arr.length === 1)
        return (f += "return str === " + quote(arr[0]) + ";");
      f += "switch(str){";
      for (var i = 0; i < arr.length; ++i) f += "case " + quote(arr[i]) + ":";
      f += "return true}return false;";
    }
    // When there are more than three length categories, an outer
    // switch first dispatches on the lengths, to save on comparisons.
    if (cats.length > 3) {
      cats.sort(function (a, b) {
        return b.length - a.length;
      });
      f += "switch(str.length){";
      for (var i = 0; i < cats.length; ++i) {
        var cat = cats[i];
        f += "case " + cat[0].length + ":";
        compareTo(cat);
      }
      f += "}";
      // Otherwise, simply generate a flat `switch` statement.
    } else {
      compareTo(words);
    }
    return new Function("str", f);
  }

  function all(array, predicate) {
    for (var i = array.length; --i >= 0; )
      if (!predicate(array[i])) return false;
    return true;
  }

  function Dictionary() {
    this._values = Object.create(null);
    this._size = 0;
  }
  Dictionary.prototype = {
    set: function (key, val) {
      if (!this.has(key)) ++this._size;
      this._values["$" + key] = val;
      return this;
    },
    add: function (key, val) {
      if (this.has(key)) {
        this.get(key).push(val);
      } else {
        this.set(key, [val]);
      }
      return this;
    },
    get: function (key) {
      return this._values["$" + key];
    },
    del: function (key) {
      if (this.has(key)) {
        --this._size;
        delete this._values["$" + key];
      }
      return this;
    },
    has: function (key) {
      return "$" + key in this._values;
    },
    each: function (f) {
      for (var i in this._values) f(this._values[i], i.substr(1));
    },
    size: function () {
      return this._size;
    },
    map: function (f) {
      var ret = [];
      for (var i in this._values) ret.push(f(this._values[i], i.substr(1)));
      return ret;
    },
    toObject: function () {
      return this._values;
    }
  };
  Dictionary.fromObject = function (obj) {
    var dict = new Dictionary();
    dict._size = merge(dict._values, obj);
    return dict;
  };

  function HOP(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }

  // return true if the node at the top of the stack (that means the
  // innermost node in the current output) is lexically the first in
  // a statement.
  function first_in_statement(stack) {
    var node = stack.parent(-1);
    for (var i = 0, p; (p = stack.parent(i)); i++) {
      if (p instanceof AST_Statement && p.body === node) return true;
      if (
        (p instanceof AST_Seq && p.car === node) ||
        (p instanceof AST_Call &&
          p.expression === node &&
          !(p instanceof AST_New)) ||
        (p instanceof AST_Dot && p.expression === node) ||
        (p instanceof AST_Sub && p.expression === node) ||
        (p instanceof AST_Conditional && p.condition === node) ||
        (p instanceof AST_Binary && p.left === node) ||
        (p instanceof AST_UnaryPostfix && p.expression === node)
      ) {
        node = p;
      } else {
        return false;
      }
    }
  }

  function DEFNODE(type, props, methods, base) {
    if (arguments.length < 4) base = AST_Node;
    if (!props) props = [];
    else props = props.split(/\s+/);
    var self_props = props;
    if (base && base.PROPS) props = props.concat(base.PROPS);
    var code = "return function AST_" + type + "(props){ if (props) { ";
    for (var i = props.length; --i >= 0; ) {
      code += "this." + props[i] + " = props." + props[i] + ";";
    }
    var proto = base && new base();
    if ((proto && proto.initialize) || (methods && methods.initialize))
      code += "this.initialize();";
    code += "}}";
    //constructor
    var cnstor = new Function(code)();
    if (proto) {
      cnstor.prototype = proto;
      cnstor.BASE = base;
    }
    if (base) base.SUBCLASSES.push(cnstor);
    cnstor.prototype.CTOR = cnstor;
    cnstor.PROPS = props || null;
    cnstor.SELF_PROPS = self_props;
    cnstor.SUBCLASSES = [];
    if (type) {
      cnstor.prototype.TYPE = cnstor.TYPE = type;
    }
    if (methods)
      for (i in methods)
        if (HOP(methods, i)) {
          if (/^\$/.test(i)) {
            cnstor[i.substr(1)] = methods[i];
          } else {
            cnstor.prototype[i] = methods[i];
          }
        }
    //a function that returns an object with [name]:method
    cnstor.DEFMETHOD = function (name, method) {
      this.prototype[name] = method;
    };
    if (typeof exports !== "undefined") exports[`AST_${type}`] = cnstor;

    return cnstor;
  }

  var AST_Token = DEFNODE(
    "Token",
    "type value line col pos endline endcol endpos nlb comments_before file raw",
    {},
    null
  );

  var AST_Node = DEFNODE(
    "Node",
    "start end",
    {
      _clone: function (deep) {
        if (deep) {
          var self = this.clone();
          return self.transform(
            new TreeTransformer(function (node) {
              if (node !== self) {
                return node.clone(true);
              }
            })
          );
        }
        return new this.CTOR(this);
      },
      clone: function (deep) {
        return this._clone(deep);
      },
      $documentation: "Base class of all AST nodes",
      $propdoc: {
        start: "[AST_Token] The first token of this node",
        end: "[AST_Token] The last token of this node"
      },
      _walk: function (visitor) {
        return visitor._visit(this);
      },
      walk: function (visitor) {
        return this._walk(visitor); // not sure the indirection will be any help
      }
    },
    null
  );

  AST_Node.warn_function = null;
  AST_Node.warn = function (txt, props) {
    if (AST_Node.warn_function)
      AST_Node.warn_function(string_template(txt, props));
  };

  /* -----[ statements ]----- */

  var AST_Statement = DEFNODE("Statement", null, {
    $documentation: "Base class of all statements"
  });

  var AST_Debugger = DEFNODE(
    "Debugger",
    null,
    {
      $documentation: "Represents a debugger statement"
    },
    AST_Statement
  );

  var AST_Directive = DEFNODE(
    "Directive",
    "value scope quote",
    {
      $documentation: 'Represents a directive, like "use strict";',
      $propdoc: {
        value:
          "[string] The value of this directive as a plain string (it's not an AST_String!)",
        scope: "[AST_Scope/S] The scope that this directive affects",
        quote: "[string] the original quote character"
      }
    },
    AST_Statement
  );

  var AST_SimpleStatement = DEFNODE(
    "SimpleStatement",
    "body",
    {
      $documentation: "A statement consisting of an expression, i.e. a = 1 + 2",
      $propdoc: {
        body:
          "[AST_Node] an expression node (should not be instanceof AST_Statement)"
      },
      _walk: function (visitor) {
        return visitor._visit(this, function () {
          this.body._walk(visitor);
        });
      }
    },
    AST_Statement
  );

  function walk_body(node, visitor) {
    var body = node.body;
    if (body instanceof AST_Statement) {
      body._walk(visitor);
    } else
      for (var i = 0, len = body.length; i < len; i++) {
        body[i]._walk(visitor);
      }
  }

  var AST_Block = DEFNODE(
    "Block",
    "body",
    {
      $documentation: "A body of statements (usually bracketed)",
      $propdoc: {
        body: "[AST_Statement*] an array of statements"
      },
      _walk: function (visitor) {
        return visitor._visit(this, function () {
          walk_body(this, visitor);
        });
      }
    },
    AST_Statement
  );

  var AST_BlockStatement = DEFNODE(
    "BlockStatement",
    null,
    {
      $documentation: "A block statement"
    },
    AST_Block
  );

  var AST_EmptyStatement = DEFNODE(
    "EmptyStatement",
    null,
    {
      $documentation: "The empty statement (empty block or simply a semicolon)",
      _walk: function (visitor) {
        return visitor._visit(this);
      }
    },
    AST_Statement
  );

  var AST_StatementWithBody = DEFNODE(
    "StatementWithBody",
    "body",
    {
      $documentation:
        "Base class for all statements that contain one nested body: `For`, `ForIn`, `Do`, `While`, `With`",
      $propdoc: {
        body:
          "[AST_Statement] the body; this should always be present, even if it's an AST_EmptyStatement"
      },
      _walk: function (visitor) {
        return visitor._visit(this, function () {
          this.body._walk(visitor);
        });
      }
    },
    AST_Statement
  );

  var AST_LabeledStatement = DEFNODE(
    "LabeledStatement",
    "label",
    {
      $documentation: "Statement with a label",
      $propdoc: {
        label: "[AST_Label] a label definition"
      },
      _walk: function (visitor) {
        return visitor._visit(this, function () {
          this.label._walk(visitor);
          this.body._walk(visitor);
        });
      },
      clone: function (deep) {
        var node = this._clone(deep);
        if (deep) {
          var label = node.label;
          var def = this.label;
          node.walk(
            new TreeWalker(function (node) {
              if (
                node instanceof AST_LoopControl &&
                node.label &&
                node.label.thedef === def
              ) {
                node.label.thedef = label;
                label.references.push(node);
              }
            })
          );
        }
        return node;
      }
    },
    AST_StatementWithBody
  );

  var AST_IterationStatement = DEFNODE(
    "IterationStatement",
    null,
    {
      $documentation: "Internal class.  All loops inherit from it."
    },
    AST_StatementWithBody
  );

  var AST_DWLoop = DEFNODE(
    "DWLoop",
    "condition",
    {
      $documentation: "Base class for do/while statements",
      $propdoc: {
        condition:
          "[AST_Node] the loop condition.  Should not be instanceof AST_Statement"
      }
    },
    AST_IterationStatement
  );

  var AST_Do = DEFNODE(
    "Do",
    null,
    {
      $documentation: "A `do` statement",
      _walk: function (visitor) {
        return visitor._visit(this, function () {
          this.body._walk(visitor);
          this.condition._walk(visitor);
        });
      }
    },
    AST_DWLoop
  );

  var AST_While = DEFNODE(
    "While",
    null,
    {
      $documentation: "A `while` statement",
      _walk: function (visitor) {
        return visitor._visit(this, function () {
          this.condition._walk(visitor);
          this.body._walk(visitor);
        });
      }
    },
    AST_DWLoop
  );

  var AST_For = DEFNODE(
    "For",
    "init condition step",
    {
      $documentation: "A `for` statement",
      $propdoc: {
        init: "[AST_Node?] the `for` initialization code, or null if empty",
        condition: "[AST_Node?] the `for` termination clause, or null if empty",
        step: "[AST_Node?] the `for` update clause, or null if empty"
      },
      _walk: function (visitor) {
        return visitor._visit(this, function () {
          if (this.init) this.init._walk(visitor);
          if (this.condition) this.condition._walk(visitor);
          if (this.step) this.step._walk(visitor);
          this.body._walk(visitor);
        });
      }
    },
    AST_IterationStatement
  );

  var AST_ForIn = DEFNODE(
    "ForIn",
    "init name object",
    {
      $documentation: "A `for ... in` statement",
      $propdoc: {
        init: "[AST_Node] the `for/in` initialization code",
        name: "[AST_SymbolRef?] the loop variable, only if `init` is AST_Var",
        object: "[AST_Node] the object that we're looping through"
      },
      _walk: function (visitor) {
        return visitor._visit(this, function () {
          this.init._walk(visitor);
          this.object._walk(visitor);
          this.body._walk(visitor);
        });
      }
    },
    AST_IterationStatement
  );

  var AST_With = DEFNODE(
    "With",
    "expression",
    {
      $documentation: "A `with` statement",
      $propdoc: {
        expression: "[AST_Node] the `with` expression"
      },
      _walk: function (visitor) {
        return visitor._visit(this, function () {
          this.expression._walk(visitor);
          this.body._walk(visitor);
        });
      }
    },
    AST_StatementWithBody
  );

  /* -----[ scope and functions ]----- */

  var AST_Scope = DEFNODE(
    "Scope",
    "directives variables functions uses_with uses_eval parent_scope enclosed cname",
    {
      $documentation:
        "Base class for all statements introducing a lexical scope",
      $propdoc: {
        directives: "[string*/S] an array of directives declared in this scope",
        variables:
          "[Object/S] a map of name -> SymbolDef for all variables/functions defined in this scope",
        functions:
          "[Object/S] like `variables`, but only lists function declarations",
        uses_with:
          "[boolean/S] tells whether this scope uses the `with` statement",
        uses_eval:
          "[boolean/S] tells whether this scope contains a direct call to the global `eval`",
        parent_scope: "[AST_Scope?/S] link to the parent scope",
        enclosed:
          "[SymbolDef*/S] a list of all symbol definitions that are accessed from this scope or any subscopes",
        cname:
          "[integer/S] current index for mangling variables (used internally by the mangler)"
      }
    },
    AST_Block
  );

  var AST_Toplevel = DEFNODE(
    "Toplevel",
    "globals",
    {
      $documentation: "The toplevel scope",
      $propdoc: {
        globals:
          "[Object/S] a map of name -> SymbolDef for all undeclared names"
      },
      wrap_enclose: function (arg_parameter_pairs) {
        var self = this;
        var args = [];
        var parameters = [];

        arg_parameter_pairs.forEach(function (pair) {
          var splitAt = pair.lastIndexOf(":");

          args.push(pair.substr(0, splitAt));
          parameters.push(pair.substr(splitAt + 1));
        });

        var wrapped_tl =
          "(function(" +
          parameters.join(",") +
          "){ '$ORIG'; })(" +
          args.join(",") +
          ")";
        wrapped_tl = parse(wrapped_tl);
        wrapped_tl = wrapped_tl.transform(
          new TreeTransformer(function before(node) {
            if (node instanceof AST_Directive && node.value === "$ORIG") {
              return MAP.splice(self.body);
            }
          })
        );
        return wrapped_tl;
      },
      wrap_commonjs: function (name, export_all) {
        var self = this;
        var to_export = [];
        if (export_all) {
          self.figure_out_scope();
          self.walk(
            new TreeWalker(function (node) {
              if (
                node instanceof AST_SymbolDeclaration &&
                node.definition().global
              ) {
                if (
                  !find_if(function (n) {
                    return n.name === node.name;
                  }, to_export)
                )
                  to_export.push(node);
              }
            })
          );
        }
        var wrapped_tl =
          "(function(exports, global){ '$ORIG'; '$EXPORTS'; global['" +
          name +
          "'] = exports; }({}, (function(){return this}())))";
        wrapped_tl = parse(wrapped_tl);
        wrapped_tl = wrapped_tl.transform(
          new TreeTransformer(function before(node) {
            if (node instanceof AST_Directive) {
              switch (node.value) {
                case "$ORIG":
                  return MAP.splice(self.body);
                case "$EXPORTS":
                  var body = [];
                  to_export.forEach(function (sym) {
                    body.push(
                      new AST_SimpleStatement({
                        body: new AST_Assign({
                          left: new AST_Sub({
                            expression: new AST_SymbolRef({
                              name: "exports"
                            }),
                            property: new AST_String({ value: sym.name })
                          }),
                          operator: "=",
                          right: new AST_SymbolRef(sym)
                        })
                      })
                    );
                  });
                  return MAP.splice(body);
              }
            }
          })
        );
        return wrapped_tl;
      }
    },
    AST_Scope
  );

  var AST_Lambda = DEFNODE(
    "Lambda",
    "name argnames uses_arguments",
    {
      $documentation: "Base class for functions",
      $propdoc: {
        name: "[AST_SymbolDeclaration?] the name of this function",
        argnames: "[AST_SymbolFunarg*] array of function arguments",
        uses_arguments:
          "[boolean/S] tells whether this function accesses the arguments array"
      },
      _walk: function (visitor) {
        return visitor._visit(this, function () {
          if (this.name) this.name._walk(visitor);
          var argnames = this.argnames;
          for (var i = 0, len = argnames.length; i < len; i++) {
            argnames[i]._walk(visitor);
          }
          walk_body(this, visitor);
        });
      }
    },
    AST_Scope
  );

  var AST_Accessor = DEFNODE(
    "Accessor",
    null,
    {
      $documentation:
        "A setter/getter function.  The `name` property is always null."
    },
    AST_Lambda
  );

  var AST_Function = DEFNODE(
    "Function",
    null,
    {
      $documentation: "A function expression"
    },
    AST_Lambda
  );

  var AST_Defun = DEFNODE(
    "Defun",
    null,
    {
      $documentation: "A function definition"
    },
    AST_Lambda
  );

  /* -----[ JUMPS ]----- */

  var AST_Jump = DEFNODE(
    "Jump",
    null,
    {
      $documentation:
        "Base class for “jumps” (for now that's `return`, `throw`, `break` and `continue`)"
    },
    AST_Statement
  );

  var AST_Exit = DEFNODE(
    "Exit",
    "value",
    {
      $documentation: "Base class for “exits” (`return` and `throw`)",
      $propdoc: {
        value:
          "[AST_Node?] the value returned or thrown by this statement; could be null for AST_Return"
      },
      _walk: function (visitor) {
        return visitor._visit(
          this,
          this.value &&
            function () {
              this.value._walk(visitor);
            }
        );
      }
    },
    AST_Jump
  );

  var AST_Return = DEFNODE(
    "Return",
    null,
    {
      $documentation: "A `return` statement"
    },
    AST_Exit
  );

  var AST_Throw = DEFNODE(
    "Throw",
    null,
    {
      $documentation: "A `throw` statement"
    },
    AST_Exit
  );

  var AST_LoopControl = DEFNODE(
    "LoopControl",
    "label",
    {
      $documentation:
        "Base class for loop control statements (`break` and `continue`)",
      $propdoc: {
        label: "[AST_LabelRef?] the label, or null if none"
      },
      _walk: function (visitor) {
        return visitor._visit(
          this,
          this.label &&
            function () {
              this.label._walk(visitor);
            }
        );
      }
    },
    AST_Jump
  );

  var AST_Break = DEFNODE(
    "Break",
    null,
    {
      $documentation: "A `break` statement"
    },
    AST_LoopControl
  );

  var AST_Continue = DEFNODE(
    "Continue",
    null,
    {
      $documentation: "A `continue` statement"
    },
    AST_LoopControl
  );

  /* -----[ IF ]----- */

  var AST_If = DEFNODE(
    "If",
    "condition alternative",
    {
      $documentation: "A `if` statement",
      $propdoc: {
        condition: "[AST_Node] the `if` condition",
        alternative: "[AST_Statement?] the `else` part, or null if not present"
      },
      _walk: function (visitor) {
        return visitor._visit(this, function () {
          this.condition._walk(visitor);
          this.body._walk(visitor);
          if (this.alternative) this.alternative._walk(visitor);
        });
      }
    },
    AST_StatementWithBody
  );

  /* -----[ SWITCH ]----- */

  var AST_Switch = DEFNODE(
    "Switch",
    "expression",
    {
      $documentation: "A `switch` statement",
      $propdoc: {
        expression: "[AST_Node] the `switch` “discriminant”"
      },
      _walk: function (visitor) {
        return visitor._visit(this, function () {
          this.expression._walk(visitor);
          walk_body(this, visitor);
        });
      }
    },
    AST_Block
  );

  var AST_SwitchBranch = DEFNODE(
    "SwitchBranch",
    null,
    {
      $documentation: "Base class for `switch` branches"
    },
    AST_Block
  );

  var AST_Default = DEFNODE(
    "Default",
    null,
    {
      $documentation: "A `default` switch branch"
    },
    AST_SwitchBranch
  );

  var AST_Case = DEFNODE(
    "Case",
    "expression",
    {
      $documentation: "A `case` switch branch",
      $propdoc: {
        expression: "[AST_Node] the `case` expression"
      },
      _walk: function (visitor) {
        return visitor._visit(this, function () {
          this.expression._walk(visitor);
          walk_body(this, visitor);
        });
      }
    },
    AST_SwitchBranch
  );

  /* -----[ EXCEPTIONS ]----- */

  var AST_Try = DEFNODE(
    "Try",
    "bcatch bfinally",
    {
      $documentation: "A `try` statement",
      $propdoc: {
        bcatch: "[AST_Catch?] the catch block, or null if not present",
        bfinally: "[AST_Finally?] the finally block, or null if not present"
      },
      _walk: function (visitor) {
        return visitor._visit(this, function () {
          walk_body(this, visitor);
          if (this.bcatch) this.bcatch._walk(visitor);
          if (this.bfinally) this.bfinally._walk(visitor);
        });
      }
    },
    AST_Block
  );

  var AST_Catch = DEFNODE(
    "Catch",
    "argname",
    {
      $documentation:
        "A `catch` node; only makes sense as part of a `try` statement",
      $propdoc: {
        argname: "[AST_SymbolCatch] symbol for the exception"
      },
      _walk: function (visitor) {
        return visitor._visit(this, function () {
          this.argname._walk(visitor);
          walk_body(this, visitor);
        });
      }
    },
    AST_Block
  );

  var AST_Finally = DEFNODE(
    "Finally",
    null,
    {
      $documentation:
        "A `finally` node; only makes sense as part of a `try` statement"
    },
    AST_Block
  );

  /* -----[ VAR/CONST ]----- */

  var AST_Definitions = DEFNODE(
    "Definitions",
    "definitions",
    {
      $documentation:
        "Base class for `var` or `const` nodes (variable declarations/initializations)",
      $propdoc: {
        definitions: "[AST_VarDef*] array of variable definitions"
      },
      _walk: function (visitor) {
        return visitor._visit(this, function () {
          var definitions = this.definitions;
          for (var i = 0, len = definitions.length; i < len; i++) {
            definitions[i]._walk(visitor);
          }
        });
      }
    },
    AST_Statement
  );

  var AST_Var = DEFNODE(
    "Var",
    null,
    {
      $documentation: "A `var` statement"
    },
    AST_Definitions
  );

  var AST_Const = DEFNODE(
    "Const",
    null,
    {
      $documentation: "A `const` statement"
    },
    AST_Definitions
  );

  var AST_VarDef = DEFNODE("VarDef", "name value", {
    $documentation:
      "A variable declaration; only appears in a AST_Definitions node",
    $propdoc: {
      name: "[AST_SymbolVar|AST_SymbolConst] name of the variable",
      value: "[AST_Node?] initializer, or null of there's no initializer"
    },
    _walk: function (visitor) {
      return visitor._visit(this, function () {
        this.name._walk(visitor);
        if (this.value) this.value._walk(visitor);
      });
    }
  });

  /* -----[ OTHER ]----- */

  var AST_Call = DEFNODE("Call", "expression args", {
    $documentation: "A function call expression",
    $propdoc: {
      expression: "[AST_Node] expression to invoke as function",
      args: "[AST_Node*] array of arguments"
    },
    _walk: function (visitor) {
      return visitor._visit(this, function () {
        this.expression._walk(visitor);
        var args = this.args;
        for (var i = 0, len = args.length; i < len; i++) {
          args[i]._walk(visitor);
        }
      });
    }
  });

  var AST_New = DEFNODE(
    "New",
    null,
    {
      $documentation:
        "An object instantiation.  Derives from a function call since it has exactly the same properties"
    },
    AST_Call
  );

  var AST_Seq = DEFNODE("Seq", "car cdr", {
    $documentation: "A sequence expression (two comma-separated expressions)",
    $propdoc: {
      car: "[AST_Node] first element in sequence",
      cdr: "[AST_Node] second element in sequence"
    },
    $cons: function (x, y) {
      var seq = new AST_Seq(x);
      seq.car = x;
      seq.cdr = y;
      return seq;
    },
    $from_array: function (array) {
      if (array.length === 0) return null;
      if (array.length === 1) return array[0].clone();
      var list = null;
      for (var i = array.length; --i >= 0; ) {
        list = AST_Seq.cons(array[i], list);
      }
      var p = list;
      while (p) {
        if (p.cdr && !p.cdr.cdr) {
          p.cdr = p.cdr.car;
          break;
        }
        p = p.cdr;
      }
      return list;
    },
    to_array: function () {
      var p = this,
        a = [];
      while (p) {
        a.push(p.car);
        if (p.cdr && !(p.cdr instanceof AST_Seq)) {
          a.push(p.cdr);
          break;
        }
        p = p.cdr;
      }
      return a;
    },
    add: function (node) {
      var p = this;
      while (p) {
        if (!(p.cdr instanceof AST_Seq)) {
          var cell = AST_Seq.cons(p.cdr, node);
          return (p.cdr = cell);
        }
        p = p.cdr;
      }
    },
    len: function () {
      if (this.cdr instanceof AST_Seq) {
        return this.cdr.len() + 1;
      } else {
        return 2;
      }
    },
    _walk: function (visitor) {
      return visitor._visit(this, function () {
        this.car._walk(visitor);
        if (this.cdr) this.cdr._walk(visitor);
      });
    }
  });

  var AST_PropAccess = DEFNODE("PropAccess", "expression property", {
    $documentation:
      'Base class for property access expressions, i.e. `a.foo` or `a["foo"]`',
    $propdoc: {
      expression: "[AST_Node] the “container” expression",
      property:
        "[AST_Node|string] the property to access.  For AST_Dot this is always a plain string, while for AST_Sub it's an arbitrary AST_Node"
    }
  });

  var AST_Dot = DEFNODE(
    "Dot",
    null,
    {
      $documentation: "A dotted property access expression",
      _walk: function (visitor) {
        return visitor._visit(this, function () {
          this.expression._walk(visitor);
        });
      }
    },
    AST_PropAccess
  );

  var AST_Sub = DEFNODE(
    "Sub",
    null,
    {
      $documentation: 'Index-style property access, i.e. `a["foo"]`',
      _walk: function (visitor) {
        return visitor._visit(this, function () {
          this.expression._walk(visitor);
          this.property._walk(visitor);
        });
      }
    },
    AST_PropAccess
  );

  var AST_Unary = DEFNODE("Unary", "operator expression", {
    $documentation: "Base class for unary expressions",
    $propdoc: {
      operator: "[string] the operator",
      expression: "[AST_Node] expression that this unary operator applies to"
    },
    _walk: function (visitor) {
      return visitor._visit(this, function () {
        this.expression._walk(visitor);
      });
    }
  });

  var AST_UnaryPrefix = DEFNODE(
    "UnaryPrefix",
    null,
    {
      $documentation: "Unary prefix expression, i.e. `typeof i` or `++i`"
    },
    AST_Unary
  );

  var AST_UnaryPostfix = DEFNODE(
    "UnaryPostfix",
    null,
    {
      $documentation: "Unary postfix expression, i.e. `i++`"
    },
    AST_Unary
  );

  var AST_Binary = DEFNODE("Binary", "left operator right", {
    $documentation: "Binary expression, i.e. `a + b`",
    $propdoc: {
      left: "[AST_Node] left-hand side expression",
      operator: "[string] the operator",
      right: "[AST_Node] right-hand side expression"
    },
    _walk: function (visitor) {
      return visitor._visit(this, function () {
        this.left._walk(visitor);
        this.right._walk(visitor);
      });
    }
  });

  var AST_Conditional = DEFNODE(
    "Conditional",
    "condition consequent alternative",
    {
      $documentation:
        "Conditional expression using the ternary operator, i.e. `a ? b : c`",
      $propdoc: {
        condition: "[AST_Node]",
        consequent: "[AST_Node]",
        alternative: "[AST_Node]"
      },
      _walk: function (visitor) {
        return visitor._visit(this, function () {
          this.condition._walk(visitor);
          this.consequent._walk(visitor);
          this.alternative._walk(visitor);
        });
      }
    }
  );

  var AST_Assign = DEFNODE(
    "Assign",
    null,
    {
      $documentation: "An assignment expression — `a = b + 5`"
    },
    AST_Binary
  );

  /* -----[ LITERALS ]----- */

  var AST_Array = DEFNODE("Array", "elements", {
    $documentation: "An array literal",
    $propdoc: {
      elements: "[AST_Node*] array of elements"
    },
    _walk: function (visitor) {
      return visitor._visit(this, function () {
        var elements = this.elements;
        for (var i = 0, len = elements.length; i < len; i++) {
          elements[i]._walk(visitor);
        }
      });
    }
  });

  var AST_Object = DEFNODE("Object", "properties", {
    $documentation: "An object literal",
    $propdoc: {
      properties: "[AST_ObjectProperty*] array of properties"
    },
    _walk: function (visitor) {
      return visitor._visit(this, function () {
        var properties = this.properties;
        for (var i = 0, len = properties.length; i < len; i++) {
          properties[i]._walk(visitor);
        }
      });
    }
  });

  var AST_ObjectProperty = DEFNODE("ObjectProperty", "key value", {
    $documentation: "Base class for literal object properties",
    $propdoc: {
      key:
        "[string] the property name converted to a string for ObjectKeyVal.  For setters and getters this is an AST_SymbolAccessor.",
      value:
        "[AST_Node] property value.  For setters and getters this is an AST_Accessor."
    },
    _walk: function (visitor) {
      return visitor._visit(this, function () {
        this.value._walk(visitor);
      });
    }
  });

  var AST_ObjectKeyVal = DEFNODE(
    "ObjectKeyVal",
    "quote",
    {
      $documentation: "A key: value object property",
      $propdoc: {
        quote: "[string] the original quote character"
      }
    },
    AST_ObjectProperty
  );

  var AST_ObjectSetter = DEFNODE(
    "ObjectSetter",
    null,
    {
      $documentation: "An object setter property"
    },
    AST_ObjectProperty
  );

  var AST_ObjectGetter = DEFNODE(
    "ObjectGetter",
    null,
    {
      $documentation: "An object getter property"
    },
    AST_ObjectProperty
  );

  var AST_Symbol = DEFNODE("Symbol", "scope name thedef", {
    $propdoc: {
      name: "[string] name of this symbol",
      scope:
        "[AST_Scope/S] the current scope (not necessarily the definition scope)",
      thedef: "[SymbolDef/S] the definition of this symbol"
    },
    $documentation: "Base class for all symbols"
  });

  var AST_SymbolAccessor = DEFNODE(
    "SymbolAccessor",
    null,
    {
      $documentation: "The name of a property accessor (setter/getter function)"
    },
    AST_Symbol
  );

  var AST_SymbolDeclaration = DEFNODE(
    "SymbolDeclaration",
    "init",
    {
      $documentation:
        "A declaration symbol (symbol in var/const, function name or argument, symbol in catch)"
    },
    AST_Symbol
  );

  var AST_SymbolVar = DEFNODE(
    "SymbolVar",
    null,
    {
      $documentation: "Symbol defining a variable"
    },
    AST_SymbolDeclaration
  );

  var AST_SymbolConst = DEFNODE(
    "SymbolConst",
    null,
    {
      $documentation: "A constant declaration"
    },
    AST_SymbolDeclaration
  );

  var AST_SymbolFunarg = DEFNODE(
    "SymbolFunarg",
    null,
    {
      $documentation: "Symbol naming a function argument"
    },
    AST_SymbolVar
  );

  var AST_SymbolDefun = DEFNODE(
    "SymbolDefun",
    null,
    {
      $documentation: "Symbol defining a function"
    },
    AST_SymbolDeclaration
  );

  var AST_SymbolLambda = DEFNODE(
    "SymbolLambda",
    null,
    {
      $documentation: "Symbol naming a function expression"
    },
    AST_SymbolDeclaration
  );

  var AST_SymbolCatch = DEFNODE(
    "SymbolCatch",
    null,
    {
      $documentation: "Symbol naming the exception in catch"
    },
    AST_SymbolDeclaration
  );

  var AST_Label = DEFNODE(
    "Label",
    "references",
    {
      $documentation: "Symbol naming a label (declaration)",
      $propdoc: {
        references: "[AST_LoopControl*] a list of nodes referring to this label"
      },
      initialize: function () {
        this.references = [];
        this.thedef = this;
      }
    },
    AST_Symbol
  );

  var AST_SymbolRef = DEFNODE(
    "SymbolRef",
    null,
    {
      $documentation: "Reference to some symbol (not definition/declaration)"
    },
    AST_Symbol
  );

  var AST_LabelRef = DEFNODE(
    "LabelRef",
    null,
    {
      $documentation: "Reference to a label symbol"
    },
    AST_Symbol
  );

  var AST_This = DEFNODE(
    "This",
    null,
    {
      $documentation: "The `this` symbol"
    },
    AST_Symbol
  );

  var AST_Constant = DEFNODE("Constant", null, {
    $documentation: "Base class for all constants",
    getValue: function () {
      return this.value;
    }
  });

  var AST_String = DEFNODE(
    "String",
    "value quote",
    {
      $documentation: "A string literal",
      $propdoc: {
        value: "[string] the contents of this string",
        quote: "[string] the original quote character"
      }
    },
    AST_Constant
  );

  var AST_Number = DEFNODE(
    "Number",
    "value literal",
    {
      $documentation: "A number literal",
      $propdoc: {
        value: "[number] the numeric value",
        literal: "[string] numeric value as string (optional)"
      }
    },
    AST_Constant
  );

  var AST_RegExp = DEFNODE(
    "RegExp",
    "value",
    {
      $documentation: "A regexp literal",
      $propdoc: {
        value: "[RegExp] the actual regexp"
      }
    },
    AST_Constant
  );

  var AST_Atom = DEFNODE(
    "Atom",
    null,
    {
      $documentation: "Base class for atoms"
    },
    AST_Constant
  );

  var AST_Null = DEFNODE(
    "Null",
    null,
    {
      $documentation: "The `null` atom",
      value: null
    },
    AST_Atom
  );

  var AST_NaN = DEFNODE(
    "NaN",
    null,
    {
      $documentation: "The impossible value",
      value: 0 / 0
    },
    AST_Atom
  );

  var AST_Undefined = DEFNODE(
    "Undefined",
    null,
    {
      $documentation: "The `undefined` value",
      value: (function () {})()
    },
    AST_Atom
  );

  var AST_Hole = DEFNODE(
    "Hole",
    null,
    {
      $documentation: "A hole in an array",
      value: (function () {})()
    },
    AST_Atom
  );

  var AST_Infinity = DEFNODE(
    "Infinity",
    null,
    {
      $documentation: "The `Infinity` value",
      value: 1 / 0
    },
    AST_Atom
  );

  var AST_Boolean = DEFNODE(
    "Boolean",
    null,
    {
      $documentation: "Base class for booleans"
    },
    AST_Atom
  );

  var AST_False = DEFNODE(
    "False",
    null,
    {
      $documentation: "The `false` atom",
      value: false
    },
    AST_Boolean
  );

  var AST_True = DEFNODE(
    "True",
    null,
    {
      $documentation: "The `true` atom",
      value: true
    },
    AST_Boolean
  );

  /* -----[ TreeWalker ]----- */

  function TreeWalker(callback) {
    this.visit = callback;
    this.stack = [];
    this.directives = Object.create(null);
  }
  TreeWalker.prototype = {
    _visit: function (node, descend) {
      this.push(node);
      var ret = this.visit(
        node,
        descend
          ? function () {
              descend.call(node);
            }
          : noop
      );
      if (!ret && descend) {
        descend.call(node);
      }
      this.pop(node);
      return ret;
    },
    parent: function (n) {
      return this.stack[this.stack.length - 2 - (n || 0)];
    },
    push: function (node) {
      if (node instanceof AST_Lambda) {
        this.directives = Object.create(this.directives);
      } else if (
        node instanceof AST_Directive &&
        !this.directives[node.value]
      ) {
        this.directives[node.value] = node;
      }
      this.stack.push(node);
    },
    pop: function (node) {
      this.stack.pop();
      if (node instanceof AST_Lambda) {
        this.directives = Object.getPrototypeOf(this.directives);
      }
    },
    self: function () {
      return this.stack[this.stack.length - 1];
    },
    find_parent: function (type) {
      var stack = this.stack;
      for (var i = stack.length; --i >= 0; ) {
        var x = stack[i];
        if (x instanceof type) return x;
      }
    },
    has_directive: function (type) {
      var dir = this.directives[type];
      if (dir) return dir;
      var node = this.stack[this.stack.length - 1];
      if (node instanceof AST_Scope) {
        for (var i = 0; i < node.body.length; ++i) {
          var st = node.body[i];
          if (!(st instanceof AST_Directive)) break;
          if (st.value === type) return st;
        }
      }
    },
    in_boolean_context: function () {
      var stack = this.stack;
      var i = stack.length,
        self = stack[--i];
      while (i > 0) {
        var p = stack[--i];
        if (
          (p instanceof AST_If && p.condition === self) ||
          (p instanceof AST_Conditional && p.condition === self) ||
          (p instanceof AST_DWLoop && p.condition === self) ||
          (p instanceof AST_For && p.condition === self) ||
          (p instanceof AST_UnaryPrefix &&
            p.operator === "!" &&
            p.expression === self)
        ) {
          return true;
        }
        if (
          !(
            p instanceof AST_Binary &&
            (p.operator === "&&" || p.operator === "||")
          )
        )
          return false;
        self = p;
      }
    },
    loopcontrol_target: function (node) {
      var stack = this.stack;
      if (node.label)
        for (var i = stack.length; --i >= 0; ) {
          var x = stack[i];
          if (
            x instanceof AST_LabeledStatement &&
            x.label.name === node.label.name
          )
            return x.body;
        }
      else
        for (var i = stack.length; --i >= 0; ) {
          var x = stack[i];
          if (
            x instanceof AST_IterationStatement ||
            (node instanceof AST_Break && x instanceof AST_Switch)
          )
            return x;
        }
    }
  };

  var KEYWORDS =
    "break case catch const continue debugger default delete do else finally for function if in instanceof new return switch throw try typeof var void while with";
  var KEYWORDS_ATOM = "false null true";
  var RESERVED_WORDS =
    "abstract boolean byte char class double enum export extends final float goto implements import int interface let long native package private protected public short static super synchronized this throws transient volatile yield" +
    " " +
    KEYWORDS_ATOM +
    " " +
    KEYWORDS;
  var KEYWORDS_BEFORE_EXPRESSION = "return new delete throw else case";

  KEYWORDS = makePredicate(KEYWORDS);
  RESERVED_WORDS = makePredicate(RESERVED_WORDS);
  KEYWORDS_BEFORE_EXPRESSION = makePredicate(KEYWORDS_BEFORE_EXPRESSION);
  KEYWORDS_ATOM = makePredicate(KEYWORDS_ATOM);

  var OPERATOR_CHARS = makePredicate(characters("+-*&%=<>!?|~^"));

  var RE_HEX_NUMBER = /^0x[0-9a-f]+$/i;
  var RE_OCT_NUMBER = /^0[0-7]+$/;

  var OPERATORS = makePredicate([
    "in",
    "instanceof",
    "typeof",
    "new",
    "void",
    "delete",
    "++",
    "--",
    "+",
    "-",
    "!",
    "~",
    "&",
    "|",
    "^",
    "*",
    "/",
    "%",
    ">>",
    "<<",
    ">>>",
    "<",
    ">",
    "<=",
    ">=",
    "==",
    "===",
    "!=",
    "!==",
    "?",
    "=",
    "+=",
    "-=",
    "/=",
    "*=",
    "%=",
    ">>=",
    "<<=",
    ">>>=",
    "|=",
    "^=",
    "&=",
    "&&",
    "||"
  ]);

  var WHITESPACE_CHARS = makePredicate(
    characters(
      " \u00a0\n\r\t\f\u000b\u200b\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000\uFEFF"
    )
  );

  var NEWLINE_CHARS = makePredicate(characters("\n\r\u2028\u2029"));

  var PUNC_BEFORE_EXPRESSION = makePredicate(characters("[{(,;:"));

  var PUNC_CHARS = makePredicate(characters("[]{}(),;:"));

  var REGEXP_MODIFIERS = makePredicate(characters("gmsiy"));

  /* -----[ Tokenizer ]----- */

  // regexps adapted from http://xregexp.com/plugins/#unicode
  var UNICODE = {
    letter: new RegExp(
      "[\\u0041-\\u005A\\u0061-\\u007A\\u00AA\\u00B5\\u00BA\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0370-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0620-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0800-\\u0815\\u081A\\u0824\\u0828\\u0840-\\u0858\\u08A0-\\u08B2\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971-\\u0980\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D\\u0C58\\u0C59\\u0C60\\u0C61\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDE\\u0CE0\\u0CE1\\u0CF1\\u0CF2\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D60\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32\\u0E33\\u0E40-\\u0E46\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB0\\u0EB2\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EDC-\\u0EDF\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u170C\\u170E-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17D7\\u17DC\\u1820-\\u1877\\u1880-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19C1-\\u19C7\\u1A00-\\u1A16\\u1A20-\\u1A54\\u1AA7\\u1B05-\\u1B33\\u1B45-\\u1B4B\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1BBA-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1CE9-\\u1CEC\\u1CEE-\\u1CF1\\u1CF5\\u1CF6\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2071\\u207F\\u2090-\\u209C\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CEE\\u2CF2\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FCC\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA640-\\uA66E\\uA67F-\\uA69D\\uA6A0-\\uA6EF\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA78E\\uA790-\\uA7AD\\uA7B0\\uA7B1\\uA7F7-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uA9CF\\uA9E0-\\uA9E4\\uA9E6-\\uA9EF\\uA9FA-\\uA9FE\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAA60-\\uAA76\\uAA7A\\uAA7E-\\uAAAF\\uAAB1\\uAAB5\\uAAB6\\uAAB9-\\uAABD\\uAAC0\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEA\\uAAF2-\\uAAF4\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB5F\\uAB64\\uAB65\\uABC0-\\uABE2\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]"
    ),
    digit: new RegExp(
      "[\\u0030-\\u0039\\u0660-\\u0669\\u06F0-\\u06F9\\u07C0-\\u07C9\\u0966-\\u096F\\u09E6-\\u09EF\\u0A66-\\u0A6F\\u0AE6-\\u0AEF\\u0B66-\\u0B6F\\u0BE6-\\u0BEF\\u0C66-\\u0C6F\\u0CE6-\\u0CEF\\u0D66-\\u0D6F\\u0DE6-\\u0DEF\\u0E50-\\u0E59\\u0ED0-\\u0ED9\\u0F20-\\u0F29\\u1040-\\u1049\\u1090-\\u1099\\u17E0-\\u17E9\\u1810-\\u1819\\u1946-\\u194F\\u19D0-\\u19D9\\u1A80-\\u1A89\\u1A90-\\u1A99\\u1B50-\\u1B59\\u1BB0-\\u1BB9\\u1C40-\\u1C49\\u1C50-\\u1C59\\uA620-\\uA629\\uA8D0-\\uA8D9\\uA900-\\uA909\\uA9D0-\\uA9D9\\uA9F0-\\uA9F9\\uAA50-\\uAA59\\uABF0-\\uABF9\\uFF10-\\uFF19]"
    ),
    non_spacing_mark: new RegExp(
      "[\\u0300-\\u036F\\u0483-\\u0487\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u064B-\\u065E\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0900-\\u0902\\u093C\\u0941-\\u0948\\u094D\\u0951-\\u0955\\u0962\\u0963\\u0981\\u09BC\\u09C1-\\u09C4\\u09CD\\u09E2\\u09E3\\u0A01\\u0A02\\u0A3C\\u0A41\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81\\u0A82\\u0ABC\\u0AC1-\\u0AC5\\u0AC7\\u0AC8\\u0ACD\\u0AE2\\u0AE3\\u0B01\\u0B3C\\u0B3F\\u0B41-\\u0B44\\u0B4D\\u0B56\\u0B62\\u0B63\\u0B82\\u0BC0\\u0BCD\\u0C3E-\\u0C40\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0CBC\\u0CBF\\u0CC6\\u0CCC\\u0CCD\\u0CE2\\u0CE3\\u0D41-\\u0D44\\u0D4D\\u0D62\\u0D63\\u0DCA\\u0DD2-\\u0DD4\\u0DD6\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EB9\\u0EBB\\u0EBC\\u0EC8-\\u0ECD\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F71-\\u0F7E\\u0F80-\\u0F84\\u0F86\\u0F87\\u0F90-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102D-\\u1030\\u1032-\\u1037\\u1039\\u103A\\u103D\\u103E\\u1058\\u1059\\u105E-\\u1060\\u1071-\\u1074\\u1082\\u1085\\u1086\\u108D\\u109D\\u135F\\u1712-\\u1714\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B7-\\u17BD\\u17C6\\u17C9-\\u17D3\\u17DD\\u180B-\\u180D\\u18A9\\u1920-\\u1922\\u1927\\u1928\\u1932\\u1939-\\u193B\\u1A17\\u1A18\\u1A56\\u1A58-\\u1A5E\\u1A60\\u1A62\\u1A65-\\u1A6C\\u1A73-\\u1A7C\\u1A7F\\u1B00-\\u1B03\\u1B34\\u1B36-\\u1B3A\\u1B3C\\u1B42\\u1B6B-\\u1B73\\u1B80\\u1B81\\u1BA2-\\u1BA5\\u1BA8\\u1BA9\\u1C2C-\\u1C33\\u1C36\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE0\\u1CE2-\\u1CE8\\u1CED\\u1DC0-\\u1DE6\\u1DFD-\\u1DFF\\u20D0-\\u20DC\\u20E1\\u20E5-\\u20F0\\u2CEF-\\u2CF1\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F\\uA67C\\uA67D\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA825\\uA826\\uA8C4\\uA8E0-\\uA8F1\\uA926-\\uA92D\\uA947-\\uA951\\uA980-\\uA982\\uA9B3\\uA9B6-\\uA9B9\\uA9BC\\uAA29-\\uAA2E\\uAA31\\uAA32\\uAA35\\uAA36\\uAA43\\uAA4C\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uABE5\\uABE8\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE26]"
    ),
    space_combining_mark: new RegExp(
      "[\\u0903\\u093E-\\u0940\\u0949-\\u094C\\u094E\\u0982\\u0983\\u09BE-\\u09C0\\u09C7\\u09C8\\u09CB\\u09CC\\u09D7\\u0A03\\u0A3E-\\u0A40\\u0A83\\u0ABE-\\u0AC0\\u0AC9\\u0ACB\\u0ACC\\u0B02\\u0B03\\u0B3E\\u0B40\\u0B47\\u0B48\\u0B4B\\u0B4C\\u0B57\\u0BBE\\u0BBF\\u0BC1\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCC\\u0BD7\\u0C01-\\u0C03\\u0C41-\\u0C44\\u0C82\\u0C83\\u0CBE\\u0CC0-\\u0CC4\\u0CC7\\u0CC8\\u0CCA\\u0CCB\\u0CD5\\u0CD6\\u0D02\\u0D03\\u0D3E-\\u0D40\\u0D46-\\u0D48\\u0D4A-\\u0D4C\\u0D57\\u0D82\\u0D83\\u0DCF-\\u0DD1\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0F3E\\u0F3F\\u0F7F\\u102B\\u102C\\u1031\\u1038\\u103B\\u103C\\u1056\\u1057\\u1062-\\u1064\\u1067-\\u106D\\u1083\\u1084\\u1087-\\u108C\\u108F\\u109A-\\u109C\\u17B6\\u17BE-\\u17C5\\u17C7\\u17C8\\u1923-\\u1926\\u1929-\\u192B\\u1930\\u1931\\u1933-\\u1938\\u19B0-\\u19C0\\u19C8\\u19C9\\u1A19-\\u1A1B\\u1A55\\u1A57\\u1A61\\u1A63\\u1A64\\u1A6D-\\u1A72\\u1B04\\u1B35\\u1B3B\\u1B3D-\\u1B41\\u1B43\\u1B44\\u1B82\\u1BA1\\u1BA6\\u1BA7\\u1BAA\\u1C24-\\u1C2B\\u1C34\\u1C35\\u1CE1\\u1CF2\\uA823\\uA824\\uA827\\uA880\\uA881\\uA8B4-\\uA8C3\\uA952\\uA953\\uA983\\uA9B4\\uA9B5\\uA9BA\\uA9BB\\uA9BD-\\uA9C0\\uAA2F\\uAA30\\uAA33\\uAA34\\uAA4D\\uAA7B\\uABE3\\uABE4\\uABE6\\uABE7\\uABE9\\uABEA\\uABEC]"
    ),
    connector_punctuation: new RegExp(
      "[\\u005F\\u203F\\u2040\\u2054\\uFE33\\uFE34\\uFE4D-\\uFE4F\\uFF3F]"
    )
  };

  function is_letter(code) {
    return (
      (code >= 97 && code <= 122) ||
      (code >= 65 && code <= 90) ||
      (code >= 0xaa && UNICODE.letter.test(String.fromCharCode(code)))
    );
  }

  function is_digit(code) {
    return code >= 48 && code <= 57;
  }

  function is_alphanumeric_char(code) {
    return is_digit(code) || is_letter(code);
  }

  function is_unicode_digit(code) {
    return UNICODE.digit.test(String.fromCharCode(code));
  }

  function is_unicode_combining_mark(ch) {
    return (
      UNICODE.non_spacing_mark.test(ch) || UNICODE.space_combining_mark.test(ch)
    );
  }

  function is_unicode_connector_punctuation(ch) {
    return UNICODE.connector_punctuation.test(ch);
  }

  function is_identifier(name) {
    return !RESERVED_WORDS(name) && /^[a-z_$][a-z0-9_$]*$/i.test(name);
  }

  function is_identifier_start(code) {
    return code === 36 || code === 95 || is_letter(code);
  }

  function is_identifier_char(ch) {
    var code = ch.charCodeAt(0);
    return (
      is_identifier_start(code) ||
      is_digit(code) ||
      code === 8204 || // \u200c: zero-width non-joiner <ZWNJ>
      code === 8205 || // \u200d: zero-width joiner <ZWJ> (in my ECMA-262 PDF, this is also 200c)
      is_unicode_combining_mark(ch) ||
      is_unicode_connector_punctuation(ch) ||
      is_unicode_digit(code)
    );
  }

  function is_identifier_string(str) {
    return /^[a-z_$][a-z0-9_$]*$/i.test(str);
  }

  function parse_js_number(num) {
    if (RE_HEX_NUMBER.test(num)) {
      return parseInt(num.substr(2), 16);
    } else if (RE_OCT_NUMBER.test(num)) {
      return parseInt(num.substr(1), 8);
    } else {
      var val = parseFloat(num);
      if (val === num) return val;
    }
  }

  function JS_Parse_Error(message, filename, line, col, pos) {
    this.message = message;
    this.filename = filename;
    this.line = line;
    this.col = col;
    this.pos = pos;
  }
  JS_Parse_Error.prototype = Object.create(Error.prototype);
  JS_Parse_Error.prototype.constructor = JS_Parse_Error;
  JS_Parse_Error.prototype.name = "SyntaxError";
  configure_error_stack(JS_Parse_Error);

  function js_error(message, filename, line, col, pos) {
    throw new JS_Parse_Error(message, filename, line, col, pos);
  }

  function is_token(token, type, val) {
    return token.type === type && (val === null || token.value === val);
  }

  var EX_EOF = {};

  function tokenizer($TEXT, filename, html5_comments, shebang) {
    var S = {
      text: $TEXT,
      filename: filename,
      pos: 0,
      tokpos: 0,
      line: 1,
      tokline: 0,
      col: 0,
      tokcol: 0,
      newline_before: false,
      regex_allowed: false,
      comments_before: [],
      directives: {},
      directive_stack: []
    };

    function peek() {
      return S.text.charAt(S.pos);
    }

    function next(signal_eof, in_string) {
      var ch = S.text.charAt(S.pos++);
      if (signal_eof && !ch) throw EX_EOF;
      if (NEWLINE_CHARS(ch)) {
        S.newline_before = S.newline_before || !in_string;
        ++S.line;
        S.col = 0;
        if (!in_string && ch === "\r" && peek() === "\n") {
          // treat a \r\n sequence as a single \n
          ++S.pos;
          ch = "\n";
        }
      } else {
        ++S.col;
      }
      return ch;
    }

    function forward(i) {
      while (i-- > 0) next();
    }

    function looking_at(str) {
      return S.text.substr(S.pos, str.length) === str;
    }

    function find_eol() {
      var text = S.text;
      for (var i = S.pos, n = S.text.length; i < n; ++i) {
        var ch = text[i];
        if (NEWLINE_CHARS(ch)) return i;
      }
      return -1;
    }

    function find(what, signal_eof) {
      var pos = S.text.indexOf(what, S.pos);
      if (signal_eof && pos === -1) throw EX_EOF;
      return pos;
    }

    function start_token() {
      S.tokline = S.line;
      S.tokcol = S.col;
      S.tokpos = S.pos;
    }

    var prev_was_dot = false;
    function token(type, value, is_comment) {
      S.regex_allowed =
        (type === "operator" && !UNARY_POSTFIX(value)) ||
        (type === "keyword" && KEYWORDS_BEFORE_EXPRESSION(value)) ||
        (type === "punc" && PUNC_BEFORE_EXPRESSION(value));
      if (type === "punc" && value === ".") {
        prev_was_dot = true;
      } else if (!is_comment) {
        prev_was_dot = false;
      }
      var ret = {
        type: type,
        value: value,
        line: S.tokline,
        col: S.tokcol,
        pos: S.tokpos,
        endline: S.line,
        endcol: S.col,
        endpos: S.pos,
        nlb: S.newline_before,
        file: filename
      };
      if (/^(?:num|string|regexp)$/i.test(type)) {
        ret.raw = $TEXT.substring(ret.pos, ret.endpos);
      }
      if (!is_comment) {
        ret.comments_before = S.comments_before;
        S.comments_before = [];
        // make note of any newlines in the comments that came before
        for (var i = 0, len = ret.comments_before.length; i < len; i++) {
          ret.nlb = ret.nlb || ret.comments_before[i].nlb;
        }
      }
      S.newline_before = false;
      return new AST_Token(ret);
    }

    function skip_whitespace() {
      while (WHITESPACE_CHARS(peek())) next();
    }

    function read_while(pred) {
      var ret = "",
        ch,
        i = 0;
      while ((ch = peek()) && pred(ch, i++)) ret += next();
      return ret;
    }

    function parse_error(err) {
      js_error(err, filename, S.tokline, S.tokcol, S.tokpos);
    }

    function read_num(prefix) {
      var has_e = false,
        after_e = false,
        has_x = false,
        has_dot = prefix === ".";
      var num = read_while(function (ch, i) {
        var code = ch.charCodeAt(0);
        switch (code) {
          case 120:
          case 88: // xX
            return has_x ? false : (has_x = true);
          case 101:
          case 69: // eE
            return has_x ? true : has_e ? false : (has_e = after_e = true);
          case 45: // -
            return after_e || (i === 0 && !prefix);
          case 43: // +
            return after_e;
          case ((after_e = false), 46): // .
            return !has_dot && !has_x && !has_e ? (has_dot = true) : false;
        }
        return is_alphanumeric_char(code);
      });
      if (prefix) num = prefix + num;
      if (RE_OCT_NUMBER.test(num) && next_token.has_directive("use strict")) {
        parse_error("Legacy octal literals are not allowed in strict mode");
      }
      var valid = parse_js_number(num);
      if (!isNaN(valid)) {
        return token("num", valid);
      } else {
        parse_error("Invalid syntax: " + num);
      }
    }

    function read_escaped_char(in_string) {
      var ch = next(true, in_string);
      switch (ch.charCodeAt(0)) {
        case 110:
          return "\n";
        case 114:
          return "\r";
        case 116:
          return "\t";
        case 98:
          return "\b";
        case 118:
          return "\u000b"; // \v
        case 102:
          return "\f";
        case 120:
          return String.fromCharCode(hex_bytes(2)); // \x
        case 117:
          return String.fromCharCode(hex_bytes(4)); // \u
        case 10:
          return ""; // newline
        case 13: // \r
          if (peek() === "\n") {
            // DOS newline
            next(true, in_string);
            return "";
          }
      }
      if (ch >= "0" && ch <= "7") return read_octal_escape_sequence(ch);
      return ch;
    }

    function read_octal_escape_sequence(ch) {
      // Read
      var p = peek();
      if (p >= "0" && p <= "7") {
        ch += next(true);
        if (ch[0] <= "3" && (p = peek()) >= "0" && p <= "7") ch += next(true);
      }

      // Parse
      if (ch === "0") return "\0";
      if (ch.length > 0 && next_token.has_directive("use strict"))
        parse_error(
          "Legacy octal escape sequences are not allowed in strict mode"
        );
      return String.fromCharCode(parseInt(ch, 8));
    }

    function hex_bytes(n) {
      var num = 0;
      for (; n > 0; --n) {
        var digit = parseInt(next(true), 16);
        if (isNaN(digit))
          parse_error("Invalid hex-character pattern in string");
        num = (num << 4) | digit;
      }
      return num;
    }

    var read_string = with_eof_error("Unterminated string constant", function (
      quote_char
    ) {
      var quote = next(),
        ret = "";
      for (;;) {
        var ch = next(true, true);
        if (ch === "\\") ch = read_escaped_char(true);
        else if (NEWLINE_CHARS(ch)) parse_error("Unterminated string constant");
        else if (ch === quote) break;
        ret += ch;
      }
      var tok = token("string", ret);
      tok.quote = quote_char;
      return tok;
    });

    function skip_line_comment(type) {
      var regex_allowed = S.regex_allowed;
      var i = find_eol(),
        ret;
      if (i === -1) {
        ret = S.text.substr(S.pos);
        S.pos = S.text.length;
      } else {
        ret = S.text.substring(S.pos, i);
        S.pos = i;
      }
      S.col = S.tokcol + (S.pos - S.tokpos);
      S.comments_before.push(token(type, ret, true));
      S.regex_allowed = regex_allowed;
      return next_token;
    }

    var skip_multiline_comment = with_eof_error(
      "Unterminated multiline comment",
      function () {
        var regex_allowed = S.regex_allowed;
        var i = find("*/", true);
        var text = S.text
          .substring(S.pos, i)
          .replace(/\r\n|\r|\u2028|\u2029/g, "\n");
        // update stream position
        forward(
          text.length /* doesn't count \r\n as 2 char while S.pos - i does */ +
            2
        );
        S.comments_before.push(token("comment2", text, true));
        S.regex_allowed = regex_allowed;
        return next_token;
      }
    );

    function read_name() {
      var backslash = false,
        name = "",
        ch,
        escaped = false,
        hex;
      while ((ch = peek()) != null) {
        if (!backslash) {
          if (ch === "\\") (escaped = backslash = true), next();
          else if (is_identifier_char(ch)) name += next();
          else break;
        } else {
          if (ch != "u")
            parse_error("Expecting UnicodeEscapeSequence -- uXXXX");
          ch = read_escaped_char();
          if (!is_identifier_char(ch))
            parse_error(
              "Unicode char: " +
                ch.charCodeAt(0) +
                " is not valid in identifier"
            );
          name += ch;
          backslash = false;
        }
      }
      if (KEYWORDS(name) && escaped) {
        hex = name.charCodeAt(0).toString(16).toUpperCase();
        name = "\\u" + "0000".substr(hex.length) + hex + name.slice(1);
      }
      return name;
    }

    var read_regexp = with_eof_error(
      "Unterminated regular expression",
      function (regexp) {
        var prev_backslash = false,
          ch,
          in_class = false;
        while ((ch = next(true)))
          if (NEWLINE_CHARS(ch)) {
            parse_error("Unexpected line terminator");
          } else if (prev_backslash) {
            regexp += "\\" + ch;
            prev_backslash = false;
          } else if (ch === "[") {
            in_class = true;
            regexp += ch;
          } else if (ch === "]" && in_class) {
            in_class = false;
            regexp += ch;
          } else if (ch === "/" && !in_class) {
            break;
          } else if (ch === "\\") {
            prev_backslash = true;
          } else {
            regexp += ch;
          }
        var mods = read_name();
        try {
          return token("regexp", new RegExp(regexp, mods));
        } catch (e) {
          parse_error(e.message);
        }
      }
    );

    function read_operator(prefix) {
      function grow(op) {
        if (!peek()) return op;
        var bigger = op + peek();
        if (OPERATORS(bigger)) {
          next();
          return grow(bigger);
        } else {
          return op;
        }
      }
      return token("operator", grow(prefix || next()));
    }

    function handle_slash() {
      next();
      switch (peek()) {
        case "/":
          next();
          return skip_line_comment("comment1");
        case "*":
          next();
          return skip_multiline_comment();
      }
      return S.regex_allowed ? read_regexp("") : read_operator("/");
    }

    function handle_dot() {
      next();
      return is_digit(peek().charCodeAt(0))
        ? read_num(".")
        : token("punc", ".");
    }

    function read_word() {
      var word = read_name();
      if (prev_was_dot) return token("name", word);
      return KEYWORDS_ATOM(word)
        ? token("atom", word)
        : !KEYWORDS(word)
        ? token("name", word)
        : OPERATORS(word)
        ? token("operator", word)
        : token("keyword", word);
    }

    function with_eof_error(eof_error, cont) {
      return function (x) {
        try {
          return cont(x);
        } catch (ex) {
          if (ex === EX_EOF) parse_error(eof_error);
          else throw ex;
        }
      };
    }

    function next_token(force_regexp) {
      if (force_regexp != null) return read_regexp(force_regexp);
      if (shebang && S.pos === 0 && looking_at("#!")) {
        start_token();
        forward(2);
        skip_line_comment("comment5");
      }
      for (;;) {
        skip_whitespace();
        start_token();
        if (html5_comments) {
          if (looking_at("<!--")) {
            forward(4);
            skip_line_comment("comment3");
            continue;
          }
          if (looking_at("-->") && S.newline_before) {
            forward(3);
            skip_line_comment("comment4");
            continue;
          }
        }
        var ch = peek();
        if (!ch) return token("eof");
        var code = ch.charCodeAt(0);
        switch (code) {
          case 34:
          case 39:
            return read_string(ch);
          case 46:
            return handle_dot();
          case 47: {
            var tok = handle_slash();
            if (tok === next_token) continue;
            return tok;
          }
        }
        if (is_digit(code)) return read_num();
        if (PUNC_CHARS(ch)) return token("punc", next());
        if (OPERATOR_CHARS(ch)) return read_operator();
        if (code === 92 || is_identifier_start(code)) return read_word();
        break;
      }
      parse_error("Unexpected character '" + ch + "'");
    }

    next_token.context = function (nc) {
      if (nc) S = nc;
      return S;
    };

    next_token.add_directive = function (directive) {
      S.directive_stack[S.directive_stack.length - 1].push(directive);

      if (S.directives[directive] === undefined) {
        S.directives[directive] = 1;
      } else {
        S.directives[directive]++;
      }
    };

    next_token.push_directives_stack = function () {
      S.directive_stack.push([]);
    };

    next_token.pop_directives_stack = function () {
      var directives = S.directive_stack[S.directive_stack.length - 1];

      for (var i = 0; i < directives.length; i++) {
        S.directives[directives[i]]--;
      }

      S.directive_stack.pop();
    };

    next_token.has_directive = function (directive) {
      return (
        S.directives[directive] !== undefined && S.directives[directive] > 0
      );
    };

    return next_token;
  }

  /* -----[ Parser (constants) ]----- */

  var UNARY_PREFIX = makePredicate([
    "typeof",
    "void",
    "delete",
    "--",
    "++",
    "!",
    "~",
    "-",
    "+"
  ]);

  var UNARY_POSTFIX = makePredicate(["--", "++"]);

  var ASSIGNMENT = makePredicate([
    "=",
    "+=",
    "-=",
    "/=",
    "*=",
    "%=",
    ">>=",
    "<<=",
    ">>>=",
    "|=",
    "^=",
    "&="
  ]);

  var PRECEDENCE = (function (a, ret) {
    for (var i = 0; i < a.length; ++i) {
      var b = a[i];
      for (var j = 0; j < b.length; ++j) {
        ret[b[j]] = i + 1;
      }
    }
    return ret;
  })(
    [
      ["||"],
      ["&&"],
      ["|"],
      ["^"],
      ["&"],
      ["==", "===", "!=", "!=="],
      ["<", ">", "<=", ">=", "in", "instanceof"],
      [">>", "<<", ">>>"],
      ["+", "-"],
      ["*", "/", "%"]
    ],
    {}
  );

  var STATEMENTS_WITH_LABELS = array_to_hash(["for", "do", "while", "switch"]);

  var ATOMIC_START_TOKEN = array_to_hash([
    "atom",
    "num",
    "string",
    "regexp",
    "name"
  ]);

  /* -----[ Parser ]----- */

  function parse($TEXT, options) {
    options = defaults(options, {
      bare_returns: false,
      cli: false,
      expression: false,
      filename: null,
      html5_comments: true,
      shebang: true,
      strict: false,
      toplevel: null
    });

    var S = {
      input:
        typeof $TEXT === "string"
          ? tokenizer(
              $TEXT,
              options.filename,
              options.html5_comments,
              options.shebang
            )
          : $TEXT,
      token: null,
      prev: null,
      peeked: null,
      in_function: 0,
      in_directives: true,
      in_loop: 0,
      labels: []
    };

    S.token = next();

    function is(type, value) {
      return is_token(S.token, type, value);
    }

    function peek() {
      return S.peeked || (S.peeked = S.input());
    }

    function next() {
      S.prev = S.token;
      if (S.peeked) {
        S.token = S.peeked;
        S.peeked = null;
      } else {
        S.token = S.input();
      }
      S.in_directives =
        S.in_directives && (S.token.type === "string" || is("punc", ";"));
      return S.token;
    }

    function prev() {
      return S.prev;
    }

    function croak(msg, line, col, pos) {
      var ctx = S.input.context();
      js_error(
        msg,
        ctx.filename,
        line != null ? line : ctx.tokline,
        col != null ? col : ctx.tokcol,
        pos != null ? pos : ctx.tokpos
      );
    }

    function token_error(token, msg) {
      croak(msg, token.line, token.col);
    }

    function unexpected(token) {
      if (token === null) token = S.token;
      token_error(
        token,
        "Unexpected token: " + token.type + " (" + token.value + ")"
      );
    }

    function expect_token(type, val) {
      if (is(type, val)) {
        return next();
      }
      token_error(
        S.token,
        "Unexpected token " +
          S.token.type +
          " «" +
          S.token.value +
          "»" +
          ", expected " +
          type +
          " «" +
          val +
          "»"
      );
    }

    function expect(punc) {
      return expect_token("punc", punc);
    }

    function can_insert_semicolon() {
      return !options.strict && (S.token.nlb || is("eof") || is("punc", "}"));
    }

    function semicolon(optional) {
      if (is("punc", ";")) next();
      else if (!optional && !can_insert_semicolon()) unexpected();
    }

    function parenthesised() {
      expect("(");
      var exp = expression(true);
      expect(")");
      return exp;
    }

    function embed_tokens(parser) {
      return function () {
        var start = S.token;
        var expr = parser();
        var end = prev();
        expr.start = start;
        expr.end = end;
        return expr;
      };
    }

    function handle_regexp() {
      if (is("operator", "/") || is("operator", "/=")) {
        S.peeked = null;
        S.token = S.input(S.token.value.substr(1)); // force regexp
      }
    }

    var statement = embed_tokens(function () {
      handle_regexp();
      switch (S.token.type) {
        case "string":
          if (S.in_directives) {
            var token = peek();
            if (
              S.token.raw.indexOf("\\") === -1 &&
              (token.nlb ||
                is_token(token, "eof") ||
                is_token(token, "punc", ";") ||
                is_token(token, "punc", "}"))
            ) {
              S.input.add_directive(S.token.value);
            } else {
              S.in_directives = false;
            }
          }
          var dir = S.in_directives,
            stat = simple_statement();
          return dir ? new AST_Directive(stat.body) : stat;
        case "num":
        case "regexp":
        case "operator":
        case "atom":
          return simple_statement();

        case "name":
          return is_token(peek(), "punc", ":")
            ? labeled_statement()
            : simple_statement();

        case "punc":
          switch (S.token.value) {
            case "{":
              return new AST_BlockStatement({
                start: S.token,
                body: block_(),
                end: prev()
              });
            case "[":
            case "(":
              return simple_statement();
            case ";":
              S.in_directives = false;
              next();
              return new AST_EmptyStatement();
            default:
              unexpected();
          }

        case "keyword":
          switch (S.token.value) {
            case "break":
              next();
              return break_cont(AST_Break);

            case "continue":
              next();
              return break_cont(AST_Continue);

            case "debugger":
              next();
              semicolon();
              return new AST_Debugger();

            case "do":
              next();
              var body = in_loop(statement);
              expect_token("keyword", "while");
              var condition = parenthesised();
              semicolon(true);
              return new AST_Do({
                body: body,
                condition: condition
              });

            case "while":
              next();
              return new AST_While({
                condition: parenthesised(),
                body: in_loop(statement)
              });

            case "for":
              next();
              return for_();

            case "function":
              next();
              return function_(AST_Defun);

            case "if":
              next();
              return if_();

            case "return":
              if (S.in_function === 0 && !options.bare_returns)
                croak("'return' outside of function");
              next();
              var value = null;
              if (is("punc", ";")) {
                next();
              } else if (!can_insert_semicolon()) {
                value = expression(true);
                semicolon();
              }
              return new AST_Return({
                value: value
              });

            case "switch":
              next();
              return new AST_Switch({
                expression: parenthesised(),
                body: in_loop(switch_body_)
              });

            case "throw":
              next();
              if (S.token.nlb) croak("Illegal newline after 'throw'");
              var value = expression(true);
              semicolon();
              return new AST_Throw({
                value: value
              });

            case "try":
              next();
              return try_();

            case "var":
              next();
              var node = var_();
              semicolon();
              return node;

            case "const":
              next();
              var node = const_();
              semicolon();
              return node;

            case "with":
              if (S.input.has_directive("use strict")) {
                croak("Strict mode may not include a with statement");
              }
              next();
              return new AST_With({
                expression: parenthesised(),
                body: statement()
              });
          }
      }
      unexpected();
    });

    function labeled_statement() {
      var label = as_symbol(AST_Label);
      if (
        find_if(function (l) {
          return l.name === label.name;
        }, S.labels)
      ) {
        // ECMA-262, 12.12: An ECMAScript program is considered
        // syntactically incorrect if it contains a
        // LabelledStatement that is enclosed by a
        // LabelledStatement with the same Identifier as label.
        croak("Label " + label.name + " defined twice");
      }
      expect(":");
      S.labels.push(label);
      var stat = statement();
      S.labels.pop();
      if (!(stat instanceof AST_IterationStatement)) {
        // check for `continue` that refers to this label.
        // those should be reported as syntax errors.
        // https://github.com/mishoo/UglifyJS2/issues/287
        label.references.forEach(function (ref) {
          if (ref instanceof AST_Continue) {
            ref = ref.label.start;
            croak(
              "Continue label `" +
                label.name +
                "` refers to non-IterationStatement.",
              ref.line,
              ref.col,
              ref.pos
            );
          }
        });
      }
      return new AST_LabeledStatement({ body: stat, label: label });
    }

    function simple_statement(tmp) {
      return new AST_SimpleStatement({
        body: ((tmp = expression(true)), semicolon(), tmp)
      });
    }

    function break_cont(type) {
      var label = null,
        ldef;
      if (!can_insert_semicolon()) {
        label = as_symbol(AST_LabelRef, true);
      }
      if (label != null) {
        ldef = find_if(function (l) {
          return l.name === label.name;
        }, S.labels);
        if (!ldef) croak("Undefined label " + label.name);
        label.thedef = ldef;
      } else if (S.in_loop === 0)
        croak(type.TYPE + " not inside a loop or switch");
      semicolon();
      var stat = new type({ label: label });
      if (ldef) ldef.references.push(stat);
      return stat;
    }

    function for_() {
      expect("(");
      var init = null;
      if (!is("punc", ";")) {
        init = is("keyword", "var")
          ? (next(), var_(true))
          : expression(true, true);
        if (is("operator", "in")) {
          if (init instanceof AST_Var && init.definitions.length > 1)
            croak("Only one variable declaration allowed in for..in loop");
          next();
          return for_in(init);
        }
      }
      return regular_for(init);
    }

    function regular_for(init) {
      expect(";");
      var test = is("punc", ";") ? null : expression(true);
      expect(";");
      var step = is("punc", ")") ? null : expression(true);
      expect(")");
      return new AST_For({
        init: init,
        condition: test,
        step: step,
        body: in_loop(statement)
      });
    }

    function for_in(init) {
      var lhs = init instanceof AST_Var ? init.definitions[0].name : null;
      var obj = expression(true);
      expect(")");
      return new AST_ForIn({
        init: init,
        name: lhs,
        object: obj,
        body: in_loop(statement)
      });
    }

    var function_ = function (cnstor) {
      var in_statement = cnstor === AST_Defun;
      var name = is("name")
        ? as_symbol(in_statement ? AST_SymbolDefun : AST_SymbolLambda)
        : null;
      if (in_statement && !name) unexpected();
      expect("(");
      return new cnstor({
        name: name,
        argnames: (function (first, a) {
          while (!is("punc", ")")) {
            if (first) first = false;
            else expect(",");
            a.push(as_symbol(AST_SymbolFunarg));
          }
          next();
          return a;
        })(true, []),
        body: (function (loop, labels) {
          ++S.in_function;
          S.in_directives = true;
          S.input.push_directives_stack();
          S.in_loop = 0;
          S.labels = [];
          var a = block_();
          S.input.pop_directives_stack();
          --S.in_function;
          S.in_loop = loop;
          S.labels = labels;
          return a;
        })(S.in_loop, S.labels)
      });
    };

    function if_() {
      var cond = parenthesised(),
        body = statement(),
        belse = null;
      if (is("keyword", "else")) {
        next();
        belse = statement();
      }
      return new AST_If({
        condition: cond,
        body: body,
        alternative: belse
      });
    }

    function block_() {
      expect("{");
      var a = [];
      while (!is("punc", "}")) {
        if (is("eof")) unexpected();
        a.push(statement());
      }
      next();
      return a;
    }

    function switch_body_() {
      expect("{");
      var a = [],
        cur = null,
        branch = null,
        tmp;
      while (!is("punc", "}")) {
        if (is("eof")) unexpected();
        if (is("keyword", "case")) {
          if (branch) branch.end = prev();
          cur = [];
          branch = new AST_Case({
            start: ((tmp = S.token), next(), tmp),
            expression: expression(true),
            body: cur
          });
          a.push(branch);
          expect(":");
        } else if (is("keyword", "default")) {
          if (branch) branch.end = prev();
          cur = [];
          branch = new AST_Default({
            start: ((tmp = S.token), next(), expect(":"), tmp),
            body: cur
          });
          a.push(branch);
        } else {
          if (!cur) unexpected();
          cur.push(statement());
        }
      }
      if (branch) branch.end = prev();
      next();
      return a;
    }

    function try_() {
      var body = block_(),
        bcatch = null,
        bfinally = null;
      if (is("keyword", "catch")) {
        var start = S.token;
        next();
        expect("(");
        var name = as_symbol(AST_SymbolCatch);
        expect(")");
        bcatch = new AST_Catch({
          start: start,
          argname: name,
          body: block_(),
          end: prev()
        });
      }
      if (is("keyword", "finally")) {
        var start = S.token;
        next();
        bfinally = new AST_Finally({
          start: start,
          body: block_(),
          end: prev()
        });
      }
      if (!bcatch && !bfinally) croak("Missing catch/finally blocks");
      return new AST_Try({
        body: body,
        bcatch: bcatch,
        bfinally: bfinally
      });
    }

    function vardefs(no_in, in_const) {
      var a = [];
      for (;;) {
        a.push(
          new AST_VarDef({
            start: S.token,
            name: as_symbol(in_const ? AST_SymbolConst : AST_SymbolVar),
            value: is("operator", "=")
              ? (next(), expression(false, no_in))
              : null,
            end: prev()
          })
        );
        if (!is("punc", ",")) break;
        next();
      }
      return a;
    }

    var var_ = function (no_in) {
      return new AST_Var({
        start: prev(),
        definitions: vardefs(no_in, false),
        end: prev()
      });
    };

    var const_ = function () {
      return new AST_Const({
        start: prev(),
        definitions: vardefs(false, true),
        end: prev()
      });
    };

    var new_ = function (allow_calls) {
      var start = S.token;
      expect_token("operator", "new");
      var newexp = expr_atom(false),
        args;
      if (is("punc", "(")) {
        next();
        args = expr_list(")");
      } else {
        args = [];
      }
      return subscripts(
        new AST_New({
          start: start,
          expression: newexp,
          args: args,
          end: prev()
        }),
        allow_calls
      );
    };

    function as_atom_node() {
      var tok = S.token,
        ret;
      switch (tok.type) {
        case "name":
        case "keyword":
          ret = _make_symbol(AST_SymbolRef);
          break;
        case "num":
          ret = new AST_Number({ start: tok, end: tok, value: tok.value });
          break;
        case "string":
          ret = new AST_String({
            start: tok,
            end: tok,
            value: tok.value,
            quote: tok.quote
          });
          break;
        case "regexp":
          ret = new AST_RegExp({ start: tok, end: tok, value: tok.value });
          break;
        case "atom":
          switch (tok.value) {
            case "false":
              ret = new AST_False({ start: tok, end: tok });
              break;
            case "true":
              ret = new AST_True({ start: tok, end: tok });
              break;
            case "null":
              ret = new AST_Null({ start: tok, end: tok });
              break;
          }
          break;
        case "operator":
          if (!is_identifier_string(tok.value)) {
            croak(
              "Invalid getter/setter name: " + tok.value,
              tok.line,
              tok.col,
              tok.pos
            );
          }
          ret = _make_symbol(AST_SymbolRef);
          break;
      }
      next();
      return ret;
    }

    var expr_atom = function (allow_calls) {
      if (is("operator", "new")) {
        return new_(allow_calls);
      }
      var start = S.token;
      if (is("punc")) {
        switch (start.value) {
          case "(":
            next();
            var ex = expression(true);
            ex.start = start;
            ex.end = S.token;
            expect(")");
            return subscripts(ex, allow_calls);
          case "[":
            return subscripts(array_(), allow_calls);
          case "{":
            return subscripts(object_(), allow_calls);
        }
        unexpected();
      }
      if (is("keyword", "function")) {
        next();
        var func = function_(AST_Function);
        func.start = start;
        func.end = prev();
        return subscripts(func, allow_calls);
      }
      if (ATOMIC_START_TOKEN[S.token.type]) {
        return subscripts(as_atom_node(), allow_calls);
      }
      unexpected();
    };

    function expr_list(closing, allow_trailing_comma, allow_empty) {
      var first = true,
        a = [];
      while (!is("punc", closing)) {
        if (first) first = false;
        else expect(",");
        if (allow_trailing_comma && is("punc", closing)) break;
        if (is("punc", ",") && allow_empty) {
          a.push(new AST_Hole({ start: S.token, end: S.token }));
        } else {
          a.push(expression(false));
        }
      }
      next();
      return a;
    }

    var array_ = embed_tokens(function () {
      expect("[");
      return new AST_Array({
        elements: expr_list("]", !options.strict, true)
      });
    });

    var create_accessor = embed_tokens(function () {
      return function_(AST_Accessor);
    });

    var object_ = embed_tokens(function () {
      expect("{");
      var first = true,
        a = [];
      while (!is("punc", "}")) {
        if (first) first = false;
        else expect(",");
        if (!options.strict && is("punc", "}"))
          // allow trailing comma
          break;
        var start = S.token;
        var type = start.type;
        var name = as_property_name();
        if (type === "name" && !is("punc", ":")) {
          var key = new AST_SymbolAccessor({
            start: S.token,
            name: as_property_name(),
            end: prev()
          });
          if (name === "get") {
            a.push(
              new AST_ObjectGetter({
                start: start,
                key: key,
                value: create_accessor(),
                end: prev()
              })
            );
            continue;
          }
          if (name === "set") {
            a.push(
              new AST_ObjectSetter({
                start: start,
                key: key,
                value: create_accessor(),
                end: prev()
              })
            );
            continue;
          }
        }
        expect(":");
        a.push(
          new AST_ObjectKeyVal({
            start: start,
            quote: start.quote,
            key: name,
            value: expression(false),
            end: prev()
          })
        );
      }
      next();
      return new AST_Object({ properties: a });
    });

    function as_property_name() {
      var tmp = S.token;
      switch (tmp.type) {
        case "operator":
          if (!KEYWORDS(tmp.value)) unexpected();
        case "num":
        case "string":
        case "name":
        case "keyword":
        case "atom":
          next();
          return tmp.value;
        default:
          unexpected();
      }
    }

    function as_name() {
      var tmp = S.token;
      if (tmp.type != "name") unexpected();
      next();
      return tmp.value;
    }

    function _make_symbol(type) {
      var name = S.token.value;
      return new (name === "this" ? AST_This : type)({
        name: String(name),
        start: S.token,
        end: S.token
      });
    }

    function as_symbol(type, noerror) {
      if (!is("name")) {
        if (!noerror) croak("Name expected");
        return null;
      }
      var sym = _make_symbol(type);
      next();
      return sym;
    }

    var subscripts = function (expr, allow_calls) {
      var start = expr.start;
      if (is("punc", ".")) {
        next();
        return subscripts(
          new AST_Dot({
            start: start,
            expression: expr,
            property: as_name(),
            end: prev()
          }),
          allow_calls
        );
      }
      if (is("punc", "[")) {
        next();
        var prop = expression(true);
        expect("]");
        return subscripts(
          new AST_Sub({
            start: start,
            expression: expr,
            property: prop,
            end: prev()
          }),
          allow_calls
        );
      }
      if (allow_calls && is("punc", "(")) {
        next();
        return subscripts(
          new AST_Call({
            start: start,
            expression: expr,
            args: expr_list(")"),
            end: prev()
          }),
          true
        );
      }
      return expr;
    };

    var maybe_unary = function (allow_calls) {
      var start = S.token;
      if (is("operator") && UNARY_PREFIX(start.value)) {
        next();
        handle_regexp();
        var ex = make_unary(AST_UnaryPrefix, start, maybe_unary(allow_calls));
        ex.start = start;
        ex.end = prev();
        return ex;
      }
      var val = expr_atom(allow_calls);
      while (is("operator") && UNARY_POSTFIX(S.token.value) && !S.token.nlb) {
        val = make_unary(AST_UnaryPostfix, S.token, val);
        val.start = start;
        val.end = S.token;
        next();
      }
      return val;
    };

    function make_unary(cnstor, token, expr) {
      var op = token.value;
      if ((op === "++" || op === "--") && !is_assignable(expr))
        croak(
          "Invalid use of " + op + " operator",
          token.line,
          token.col,
          token.pos
        );
      return new cnstor({ operator: op, expression: expr });
    }

    var expr_op = function (left, min_prec, no_in) {
      var op = is("operator") ? S.token.value : null;
      if (op === "in" && no_in) op = null;
      var prec = op != null ? PRECEDENCE[op] : null;
      if (prec != null && prec > min_prec) {
        next();
        var right = expr_op(maybe_unary(true), prec, no_in);
        return expr_op(
          new AST_Binary({
            start: left.start,
            left: left,
            operator: op,
            right: right,
            end: right.end
          }),
          min_prec,
          no_in
        );
      }
      return left;
    };

    function expr_ops(no_in) {
      return expr_op(maybe_unary(true), 0, no_in);
    }

    var maybe_conditional = function (no_in) {
      var start = S.token;
      var expr = expr_ops(no_in);
      if (is("operator", "?")) {
        next();
        var yes = expression(false);
        expect(":");
        return new AST_Conditional({
          start: start,
          condition: expr,
          consequent: yes,
          alternative: expression(false, no_in),
          end: prev()
        });
      }
      return expr;
    };

    function is_assignable(expr) {
      if (options.cli) return true;
      return expr instanceof AST_PropAccess || expr instanceof AST_SymbolRef;
    }

    var maybe_assign = function (no_in) {
      var start = S.token;
      var left = maybe_conditional(no_in),
        val = S.token.value;
      if (is("operator") && ASSIGNMENT(val)) {
        if (is_assignable(left)) {
          next();
          return new AST_Assign({
            start: start,
            left: left,
            operator: val,
            right: maybe_assign(no_in),
            end: prev()
          });
        }
        croak("Invalid assignment");
      }
      return left;
    };

    var expression = function (commas, no_in) {
      var start = S.token;
      var expr = maybe_assign(no_in);
      if (commas && is("punc", ",")) {
        next();
        return new AST_Seq({
          start: start,
          car: expr,
          cdr: expression(true, no_in),
          end: peek()
        });
      }
      return expr;
    };

    function in_loop(cont) {
      ++S.in_loop;
      var ret = cont();
      --S.in_loop;
      return ret;
    }

    if (options.expression) {
      return expression(true);
    }

    return (function () {
      var start = S.token;
      var body = [];
      S.input.push_directives_stack();
      while (!is("eof")) body.push(statement());
      S.input.pop_directives_stack();
      var end = prev();
      var toplevel = options.toplevel;
      if (toplevel) {
        toplevel.body = toplevel.body.concat(body);
        toplevel.end = end;
      } else {
        toplevel = new AST_Toplevel({ start: start, body: body, end: end });
      }
      return toplevel;
    })();
  }

  /***********************************************************************

    A JavaScript tokenizer / parser / beautifier / compressor.
    https://github.com/mishoo/UglifyJS2

    -------------------------------- (C) ---------------------------------

                            Author: Mihai Bazon
                          <mihai.bazon@gmail.com>
                        http://mihai.bazon.net/blog

    Distributed under the BSD license:

      Copyright 2012 (c) Mihai Bazon <mihai.bazon@gmail.com>

      Redistribution and use in source and binary forms, with or without
      modification, are permitted provided that the following conditions
      are met:

          * Redistributions of source code must retain the above
            copyright notice, this list of conditions and the following
            disclaimer.

          * Redistributions in binary form must reproduce the above
            copyright notice, this list of conditions and the following
            disclaimer in the documentation and/or other materials
            provided with the distribution.

      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDER “AS IS” AND ANY
      EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
      IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
      PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER BE
      LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY,
      OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
      PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
      PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
      THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR
      TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
      THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
      SUCH DAMAGE.

  ***********************************************************************/

  ("use strict");

  // Tree transformer helpers.

  function TreeTransformer(before, after) {
    TreeWalker.call(this);
    this.before = before;
    this.after = after;
  }
  TreeTransformer.prototype = new TreeWalker();

  (function (undefined) {
    function _(node, descend) {
      node.DEFMETHOD("transform", function (tw, in_list) {
        var x, y;
        tw.push(this);
        if (tw.before) x = tw.before(this, descend, in_list);
        if (x === undefined) {
          if (!tw.after) {
            x = this;
            descend(x, tw);
          } else {
            tw.stack[tw.stack.length - 1] = x = this;
            descend(x, tw);
            y = tw.after(x, in_list);
            if (y !== undefined) x = y;
          }
        }
        tw.pop(this);
        return x;
      });
    }

    function do_list(list, tw) {
      return MAP(list, function (node) {
        return node.transform(tw, true);
      });
    }

    _(AST_Node, noop);

    _(AST_LabeledStatement, function (self, tw) {
      self.label = self.label.transform(tw);
      self.body = self.body.transform(tw);
    });

    _(AST_SimpleStatement, function (self, tw) {
      self.body = self.body.transform(tw);
    });

    _(AST_Block, function (self, tw) {
      self.body = do_list(self.body, tw);
    });

    _(AST_DWLoop, function (self, tw) {
      self.condition = self.condition.transform(tw);
      self.body = self.body.transform(tw);
    });

    _(AST_For, function (self, tw) {
      if (self.init) self.init = self.init.transform(tw);
      if (self.condition) self.condition = self.condition.transform(tw);
      if (self.step) self.step = self.step.transform(tw);
      self.body = self.body.transform(tw);
    });

    _(AST_ForIn, function (self, tw) {
      self.init = self.init.transform(tw);
      self.object = self.object.transform(tw);
      self.body = self.body.transform(tw);
    });

    _(AST_With, function (self, tw) {
      self.expression = self.expression.transform(tw);
      self.body = self.body.transform(tw);
    });

    _(AST_Exit, function (self, tw) {
      if (self.value) self.value = self.value.transform(tw);
    });

    _(AST_LoopControl, function (self, tw) {
      if (self.label) self.label = self.label.transform(tw);
    });

    _(AST_If, function (self, tw) {
      self.condition = self.condition.transform(tw);
      self.body = self.body.transform(tw);
      if (self.alternative) self.alternative = self.alternative.transform(tw);
    });

    _(AST_Switch, function (self, tw) {
      self.expression = self.expression.transform(tw);
      self.body = do_list(self.body, tw);
    });

    _(AST_Case, function (self, tw) {
      self.expression = self.expression.transform(tw);
      self.body = do_list(self.body, tw);
    });

    _(AST_Try, function (self, tw) {
      self.body = do_list(self.body, tw);
      if (self.bcatch) self.bcatch = self.bcatch.transform(tw);
      if (self.bfinally) self.bfinally = self.bfinally.transform(tw);
    });

    _(AST_Catch, function (self, tw) {
      self.argname = self.argname.transform(tw);
      self.body = do_list(self.body, tw);
    });

    _(AST_Definitions, function (self, tw) {
      self.definitions = do_list(self.definitions, tw);
    });

    _(AST_VarDef, function (self, tw) {
      self.name = self.name.transform(tw);
      if (self.value) self.value = self.value.transform(tw);
    });

    _(AST_Lambda, function (self, tw) {
      if (self.name) self.name = self.name.transform(tw);
      self.argnames = do_list(self.argnames, tw);
      self.body = do_list(self.body, tw);
    });

    _(AST_Call, function (self, tw) {
      self.expression = self.expression.transform(tw);
      self.args = do_list(self.args, tw);
    });

    _(AST_Seq, function (self, tw) {
      self.car = self.car.transform(tw);
      self.cdr = self.cdr.transform(tw);
    });

    _(AST_Dot, function (self, tw) {
      self.expression = self.expression.transform(tw);
    });

    _(AST_Sub, function (self, tw) {
      self.expression = self.expression.transform(tw);
      self.property = self.property.transform(tw);
    });

    _(AST_Unary, function (self, tw) {
      self.expression = self.expression.transform(tw);
    });

    _(AST_Binary, function (self, tw) {
      self.left = self.left.transform(tw);
      self.right = self.right.transform(tw);
    });

    _(AST_Conditional, function (self, tw) {
      self.condition = self.condition.transform(tw);
      self.consequent = self.consequent.transform(tw);
      self.alternative = self.alternative.transform(tw);
    });

    _(AST_Array, function (self, tw) {
      self.elements = do_list(self.elements, tw);
    });

    _(AST_Object, function (self, tw) {
      self.properties = do_list(self.properties, tw);
    });

    _(AST_ObjectProperty, function (self, tw) {
      self.value = self.value.transform(tw);
    });
  })();

  function SymbolDef(scope, index, orig) {
    this.name = orig.name;
    this.orig = [orig];
    this.scope = scope;
    this.references = [];
    this.global = false;
    this.mangled_name = null;
    this.undeclared = false;
    this.index = index;
    this.id = SymbolDef.next_id++;
  }

  SymbolDef.next_id = 1;

  SymbolDef.prototype = {
    unmangleable: function (options) {
      if (!options) options = {};

      return (
        (this.global && !options.toplevel) ||
        this.undeclared ||
        (!options.eval && (this.scope.uses_eval || this.scope.uses_with)) ||
        (options.keep_fnames &&
          (this.orig[0] instanceof AST_SymbolLambda ||
            this.orig[0] instanceof AST_SymbolDefun))
      );
    },
    mangle: function (options) {
      var cache = options.cache && options.cache.props;
      if (this.global && cache && cache.has(this.name)) {
        this.mangled_name = cache.get(this.name);
      } else if (!this.mangled_name && !this.unmangleable(options)) {
        var s = this.scope;
        var sym = this.orig[0];
        if (!options.screw_ie8 && sym instanceof AST_SymbolLambda)
          s = s.parent_scope;
        var def;
        if (this.defun && (def = this.defun.variables.get(this.name))) {
          this.mangled_name = def.mangled_name || def.name;
        } else this.mangled_name = s.next_mangled(options, this);
        if (this.global && cache) {
          cache.set(this.name, this.mangled_name);
        }
      }
    }
  };

  AST_Toplevel.DEFMETHOD("figure_out_scope", function (options) {
    options = defaults(options, {
      cache: null,
      screw_ie8: true
    });

    // pass 1: setup scope chaining and handle definitions
    var self = this;
    var scope = (self.parent_scope = null);
    var labels = new Dictionary();
    var defun = null;
    var tw = new TreeWalker(function (node, descend) {
      if (node instanceof AST_Catch) {
        var save_scope = scope;
        scope = new AST_Scope(node);
        scope.init_scope_vars(save_scope);
        descend();
        scope = save_scope;
        return true;
      }
      if (node instanceof AST_Scope) {
        node.init_scope_vars(scope);
        var save_scope = scope;
        var save_defun = defun;
        var save_labels = labels;
        defun = scope = node;
        labels = new Dictionary();
        descend();
        scope = save_scope;
        defun = save_defun;
        labels = save_labels;
        return true; // don't descend again in TreeWalker
      }
      if (node instanceof AST_LabeledStatement) {
        var l = node.label;
        if (labels.has(l.name)) {
          throw new Error(string_template("Label {name} defined twice", l));
        }
        labels.set(l.name, l);
        descend();
        labels.del(l.name);
        return true; // no descend again
      }
      if (node instanceof AST_With) {
        for (var s = scope; s; s = s.parent_scope) s.uses_with = true;
        return;
      }
      if (node instanceof AST_Symbol) {
        node.scope = scope;
      }
      if (node instanceof AST_Label) {
        node.thedef = node;
        node.references = [];
      }
      if (node instanceof AST_SymbolLambda) {
        defun.def_function(node);
      } else if (node instanceof AST_SymbolDefun) {
        // Careful here, the scope where this should be defined is
        // the parent scope.  The reason is that we enter a new
        // scope when we encounter the AST_Defun node (which is
        // instanceof AST_Scope) but we get to the symbol a bit
        // later.
        (node.scope = defun.parent_scope).def_function(node);
      } else if (
        node instanceof AST_SymbolVar ||
        node instanceof AST_SymbolConst
      ) {
        defun.def_variable(node);
        if (defun !== scope) {
          node.mark_enclosed(options);
          var def = scope.find_variable(node);
          if (node.thedef !== def) {
            node.thedef = def;
            node.reference(options);
          }
        }
      } else if (node instanceof AST_SymbolCatch) {
        scope.def_variable(node).defun = defun;
      } else if (node instanceof AST_LabelRef) {
        var sym = labels.get(node.name);
        if (!sym)
          throw new Error(
            string_template("Undefined label {name} [{line},{col}]", {
              name: node.name,
              line: node.start.line,
              col: node.start.col
            })
          );
        node.thedef = sym;
      }
    });
    self.walk(tw);

    // pass 2: find back references and eval
    var func = null;
    var globals = (self.globals = new Dictionary());
    var tw = new TreeWalker(function (node, descend) {
      if (node instanceof AST_Lambda) {
        var prev_func = func;
        func = node;
        descend();
        func = prev_func;
        return true;
      }
      if (node instanceof AST_LoopControl && node.label) {
        node.label.thedef.references.push(node);
        return true;
      }
      if (node instanceof AST_SymbolRef) {
        var name = node.name;
        if (name === "eval" && tw.parent() instanceof AST_Call) {
          for (var s = node.scope; s && !s.uses_eval; s = s.parent_scope) {
            s.uses_eval = true;
          }
        }
        var sym = node.scope.find_variable(name);
        if (node.scope instanceof AST_Lambda && name === "arguments") {
          node.scope.uses_arguments = true;
        }
        if (!sym) {
          sym = self.def_global(node);
        }
        node.thedef = sym;
        node.reference(options);
        return true;
      }
    });
    self.walk(tw);

    // pass 3: fix up any scoping issue with IE8
    if (!options.screw_ie8) {
      self.walk(
        new TreeWalker(function (node, descend) {
          if (node instanceof AST_SymbolCatch) {
            var name = node.name;
            var refs = node.thedef.references;
            var scope = node.thedef.defun;
            var def =
              scope.find_variable(name) ||
              self.globals.get(name) ||
              scope.def_variable(node);
            refs.forEach(function (ref) {
              ref.thedef = def;
              ref.reference(options);
            });
            node.thedef = def;
            return true;
          }
        })
      );
    }

    if (options.cache) {
      this.cname = options.cache.cname;
    }
  });

  AST_Toplevel.DEFMETHOD("def_global", function (node) {
    var globals = this.globals,
      name = node.name;
    if (globals.has(name)) {
      return globals.get(name);
    } else {
      var g = new SymbolDef(this, globals.size(), node);
      g.undeclared = true;
      g.global = true;
      globals.set(name, g);
      return g;
    }
  });

  AST_Scope.DEFMETHOD("init_scope_vars", function (parent_scope) {
    this.variables = new Dictionary(); // map name to AST_SymbolVar (variables defined in this scope; includes functions)
    this.functions = new Dictionary(); // map name to AST_SymbolDefun (functions defined in this scope)
    this.uses_with = false; // will be set to true if this or some nested scope uses the `with` statement
    this.uses_eval = false; // will be set to true if this or nested scope uses the global `eval`
    this.parent_scope = parent_scope; // the parent scope
    this.enclosed = []; // a list of variables from this or outer scope(s) that are referenced from this or inner scopes
    this.cname = -1; // the current index for mangling functions/variables
  });

  AST_Lambda.DEFMETHOD("init_scope_vars", function () {
    AST_Scope.prototype.init_scope_vars.apply(this, arguments);
    this.uses_arguments = false;
    this.def_variable(
      new AST_SymbolVar({
        name: "arguments",
        start: this.start,
        end: this.end
      })
    );
  });

  AST_Symbol.DEFMETHOD("mark_enclosed", function (options) {
    var def = this.definition();
    var s = this.scope;
    while (s) {
      push_uniq(s.enclosed, def);
      if (options.keep_fnames) {
        s.functions.each(function (d) {
          push_uniq(def.scope.enclosed, d);
        });
      }
      if (s === def.scope) break;
      s = s.parent_scope;
    }
  });

  AST_Symbol.DEFMETHOD("reference", function (options) {
    this.definition().references.push(this);
    this.mark_enclosed(options);
  });

  AST_Scope.DEFMETHOD("find_variable", function (name) {
    if (name instanceof AST_Symbol) name = name.name;
    return (
      this.variables.get(name) ||
      (this.parent_scope && this.parent_scope.find_variable(name))
    );
  });

  AST_Scope.DEFMETHOD("def_function", function (symbol) {
    this.functions.set(symbol.name, this.def_variable(symbol));
  });

  AST_Scope.DEFMETHOD("def_variable", function (symbol) {
    var def;
    if (!this.variables.has(symbol.name)) {
      def = new SymbolDef(this, this.variables.size(), symbol);
      this.variables.set(symbol.name, def);
      def.global = !this.parent_scope;
    } else {
      def = this.variables.get(symbol.name);
      def.orig.push(symbol);
    }
    return (symbol.thedef = def);
  });

  AST_Scope.DEFMETHOD("next_mangled", function (options) {
    var ext = this.enclosed;
    out: while (true) {
      var m = base54(++this.cname);
      if (!is_identifier(m)) continue; // skip over "do"

      // https://github.com/mishoo/UglifyJS2/issues/242 -- do not
      // shadow a name excepted from mangling.
      if (options.except.indexOf(m) >= 0) continue;

      // we must ensure that the mangled name does not shadow a name
      // from some parent scope that is referenced in this or in
      // inner scopes.
      for (var i = ext.length; --i >= 0; ) {
        var sym = ext[i];
        var name = sym.mangled_name || (sym.unmangleable(options) && sym.name);
        if (m === name) continue out;
      }
      return m;
    }
  });

  AST_Function.DEFMETHOD("next_mangled", function (options, def) {
    // #179, #326
    // in Safari strict mode, something like (function x(x){...}) is a syntax error;
    // a function expression's argument cannot shadow the function expression's name

    var tricky_def =
      def.orig[0] instanceof AST_SymbolFunarg &&
      this.name &&
      this.name.definition();

    // the function's mangled_name is null when keep_fnames is true
    var tricky_name = tricky_def
      ? tricky_def.mangled_name || tricky_def.name
      : null;

    while (true) {
      var name = AST_Lambda.prototype.next_mangled.call(this, options, def);
      if (!tricky_name || tricky_name != name) return name;
    }
  });

  AST_Symbol.DEFMETHOD("unmangleable", function (options) {
    return this.definition().unmangleable(options);
  });

  // labels are always mangleable
  AST_Label.DEFMETHOD("unmangleable", function () {
    return false;
  });

  AST_Symbol.DEFMETHOD("unreferenced", function () {
    return (
      this.definition().references.length === 0 &&
      !(this.scope.uses_eval || this.scope.uses_with)
    );
  });

  AST_Symbol.DEFMETHOD("undeclared", function () {
    return this.definition().undeclared;
  });

  AST_LabelRef.DEFMETHOD("undeclared", function () {
    return false;
  });

  AST_Label.DEFMETHOD("undeclared", function () {
    return false;
  });

  AST_Symbol.DEFMETHOD("definition", function () {
    return this.thedef;
  });

  AST_Symbol.DEFMETHOD("global", function () {
    return this.definition().global;
  });

  AST_Toplevel.DEFMETHOD("_default_mangler_options", function (options) {
    return defaults(options, {
      eval: false,
      except: [],
      keep_fnames: false,
      screw_ie8: true,
      sort: false, // Ignored. Flag retained for backwards compatibility.
      toplevel: false
    });
  });

  AST_Toplevel.DEFMETHOD("mangle_names", function (options) {
    options = this._default_mangler_options(options);

    // Never mangle arguments
    options.except.push("arguments");

    // We only need to mangle declaration nodes.  Special logic wired
    // into the code generator will display the mangled name if it's
    // present (and for AST_SymbolRef-s it'll use the mangled name of
    // the AST_SymbolDeclaration that it points to).
    var lname = -1;
    var to_mangle = [];

    if (options.cache) {
      this.globals.each(function (symbol) {
        if (options.except.indexOf(symbol.name) < 0) {
          to_mangle.push(symbol);
        }
      });
    }

    var tw = new TreeWalker(function (node, descend) {
      if (node instanceof AST_LabeledStatement) {
        // lname is incremented when we get to the AST_Label
        var save_nesting = lname;
        descend();
        lname = save_nesting;
        return true; // don't descend again in TreeWalker
      }
      if (node instanceof AST_Scope) {
        var p = tw.parent(),
          a = [];
        node.variables.each(function (symbol) {
          if (options.except.indexOf(symbol.name) < 0) {
            a.push(symbol);
          }
        });
        to_mangle.push.apply(to_mangle, a);
        return;
      }
      if (node instanceof AST_Label) {
        var name;
        do name = base54(++lname);
        while (!is_identifier(name));
        node.mangled_name = name;
        return true;
      }
      if (options.screw_ie8 && node instanceof AST_SymbolCatch) {
        to_mangle.push(node.definition());
        return;
      }
    });
    this.walk(tw);
    to_mangle.forEach(function (def) {
      def.mangle(options);
    });

    if (options.cache) {
      options.cache.cname = this.cname;
    }
  });

  AST_Toplevel.DEFMETHOD("compute_char_frequency", function (options) {
    options = this._default_mangler_options(options);
    var tw = new TreeWalker(function (node) {
      if (node instanceof AST_Constant) base54.consider(node.print_to_string());
      else if (node instanceof AST_Return) base54.consider("return");
      else if (node instanceof AST_Throw) base54.consider("throw");
      else if (node instanceof AST_Continue) base54.consider("continue");
      else if (node instanceof AST_Break) base54.consider("break");
      else if (node instanceof AST_Debugger) base54.consider("debugger");
      else if (node instanceof AST_Directive) base54.consider(node.value);
      else if (node instanceof AST_While) base54.consider("while");
      else if (node instanceof AST_Do) base54.consider("do while");
      else if (node instanceof AST_If) {
        base54.consider("if");
        if (node.alternative) base54.consider("else");
      } else if (node instanceof AST_Var) base54.consider("var");
      else if (node instanceof AST_Const) base54.consider("const");
      else if (node instanceof AST_Lambda) base54.consider("function");
      else if (node instanceof AST_For) base54.consider("for");
      else if (node instanceof AST_ForIn) base54.consider("for in");
      else if (node instanceof AST_Switch) base54.consider("switch");
      else if (node instanceof AST_Case) base54.consider("case");
      else if (node instanceof AST_Default) base54.consider("default");
      else if (node instanceof AST_With) base54.consider("with");
      else if (node instanceof AST_ObjectSetter)
        base54.consider("set" + node.key);
      else if (node instanceof AST_ObjectGetter)
        base54.consider("get" + node.key);
      else if (node instanceof AST_ObjectKeyVal) base54.consider(node.key);
      else if (node instanceof AST_New) base54.consider("new");
      else if (node instanceof AST_This) base54.consider("this");
      else if (node instanceof AST_Try) base54.consider("try");
      else if (node instanceof AST_Catch) base54.consider("catch");
      else if (node instanceof AST_Finally) base54.consider("finally");
      else if (node instanceof AST_Symbol && node.unmangleable(options))
        base54.consider(node.name);
      else if (node instanceof AST_Unary || node instanceof AST_Binary)
        base54.consider(node.operator);
      else if (node instanceof AST_Dot) base54.consider(node.property);
    });
    this.walk(tw);
    base54.sort();
  });

  var base54 = (function () {
    var string =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_0123456789";
    var chars, frequency;
    function reset() {
      frequency = Object.create(null);
      chars = string.split("").map(function (ch) {
        return ch.charCodeAt(0);
      });
      chars.forEach(function (ch) {
        frequency[ch] = 0;
      });
    }
    base54.consider = function (str) {
      for (var i = str.length; --i >= 0; ) {
        var code = str.charCodeAt(i);
        if (code in frequency) ++frequency[code];
      }
    };
    base54.sort = function () {
      chars = mergeSort(chars, function (a, b) {
        if (is_digit(a) && !is_digit(b)) return 1;
        if (is_digit(b) && !is_digit(a)) return -1;
        return frequency[b] - frequency[a];
      });
    };
    base54.reset = reset;
    reset();
    base54.get = function () {
      return chars;
    };
    base54.freq = function () {
      return frequency;
    };
    function base54(num) {
      var ret = "",
        base = 54;
      num++;
      do {
        num--;
        ret += String.fromCharCode(chars[num % base]);
        num = Math.floor(num / base);
        base = 64;
      } while (num > 0);
      return ret;
    }
    return base54;
  })();

  AST_Toplevel.DEFMETHOD("scope_warnings", function (options) {
    options = defaults(options, {
      assign_to_global: true,
      eval: true,
      func_arguments: true,
      nested_defuns: true,
      undeclared: false, // this makes a lot of noise
      unreferenced: true
    });
    var tw = new TreeWalker(function (node) {
      if (
        options.undeclared &&
        node instanceof AST_SymbolRef &&
        node.undeclared()
      ) {
        // XXX: this also warns about JS standard names,
        // i.e. Object, Array, parseInt etc.  Should add a list of
        // exceptions.
        AST_Node.warn("Undeclared symbol: {name} [{file}:{line},{col}]", {
          name: node.name,
          file: node.start.file,
          line: node.start.line,
          col: node.start.col
        });
      }
      if (options.assign_to_global) {
        var sym = null;
        if (node instanceof AST_Assign && node.left instanceof AST_SymbolRef)
          sym = node.left;
        else if (
          node instanceof AST_ForIn &&
          node.init instanceof AST_SymbolRef
        )
          sym = node.init;
        if (
          sym &&
          (sym.undeclared() ||
            (sym.global() && sym.scope !== sym.definition().scope))
        ) {
          AST_Node.warn("{msg}: {name} [{file}:{line},{col}]", {
            msg: sym.undeclared()
              ? "Accidental global?"
              : "Assignment to global",
            name: sym.name,
            file: sym.start.file,
            line: sym.start.line,
            col: sym.start.col
          });
        }
      }
      if (
        options.eval &&
        node instanceof AST_SymbolRef &&
        node.undeclared() &&
        node.name === "eval"
      ) {
        AST_Node.warn("Eval is used [{file}:{line},{col}]", node.start);
      }
      if (
        options.unreferenced &&
        (node instanceof AST_SymbolDeclaration || node instanceof AST_Label) &&
        !(node instanceof AST_SymbolCatch) &&
        node.unreferenced()
      ) {
        AST_Node.warn(
          "{type} {name} is declared but not referenced [{file}:{line},{col}]",
          {
            type: node instanceof AST_Label ? "Label" : "Symbol",
            name: node.name,
            file: node.start.file,
            line: node.start.line,
            col: node.start.col
          }
        );
      }
      if (
        options.func_arguments &&
        node instanceof AST_Lambda &&
        node.uses_arguments
      ) {
        AST_Node.warn(
          "arguments used in function {name} [{file}:{line},{col}]",
          {
            name: node.name ? node.name.name : "anonymous",
            file: node.start.file,
            line: node.start.line,
            col: node.start.col
          }
        );
      }
      if (
        options.nested_defuns &&
        node instanceof AST_Defun &&
        !(tw.parent() instanceof AST_Scope)
      ) {
        AST_Node.warn(
          'Function {name} declared in nested statement "{type}" [{file}:{line},{col}]',
          {
            name: node.name.name,
            type: tw.parent().TYPE,
            file: node.start.file,
            line: node.start.line,
            col: node.start.col
          }
        );
      }
    });
    this.walk(tw);
  });
  OutputStream();
  CodeGenerators();
  Compressor();
  Compressor.prototype = new TreeTransformer();
  merge(Compressor.prototype, {
    option: function (key) {
      return this.options[key];
    },
    compress: function (node) {
      if (this.option("expression")) {
        node = node.process_expression(true);
      }
      var passes = +this.options.passes || 1;
      for (var pass = 0; pass < passes && pass < 3; ++pass) {
        if (pass > 0 || this.option("reduce_vars"))
          node.reset_opt_flags(this, true);
        node = node.transform(this);
      }
      if (this.option("expression")) {
        node = node.process_expression(false);
      }
      return node;
    },
    info: function () {
      if (this.options.warnings === "verbose") {
        AST_Node.warn.apply(AST_Node, arguments);
      }
    },
    warn: function (text, props) {
      if (this.options.warnings) {
        // only emit unique warnings
        var message = string_template(text, props);
        if (!(message in this.warnings_produced)) {
          this.warnings_produced[message] = true;
          AST_Node.warn.apply(AST_Node, arguments);
        }
      }
    },
    clear_warnings: function () {
      this.warnings_produced = {};
    },
    before: function (node, descend, in_list) {
      if (node._squeezed) return node;
      var was_scope = false;
      if (node instanceof AST_Scope) {
        node = node.hoist_declarations(this);
        was_scope = true;
      }
      // Before https://github.com/mishoo/UglifyJS2/pull/1602 AST_Node.optimize()
      // would call AST_Node.transform() if a different instance of AST_Node is
      // produced after OPT().
      // This corrupts TreeWalker.stack, which cause AST look-ups to malfunction.
      // Migrate and defer all children's AST_Node.transform() to below, which
      // will now happen after this parent AST_Node has been properly substituted
      // thus gives a consistent AST snapshot.
      descend(node, this);
      // Existing code relies on how AST_Node.optimize() worked, and omitting the
      // following replacement call would result in degraded efficiency of both
      // output and performance.
      descend(node, this);
      var opt = node.optimize(this);
      if (was_scope && opt instanceof AST_Scope) {
        opt.drop_unused(this);
        descend(opt, this);
      }
      if (opt === node) opt._squeezed = true;
      return opt;
    }
  });

  Mihai();
  // a small wrapper around fitzgen's source-map library
  function SourceMap(options) {
    options = defaults(options, {
      file: null,
      root: null,
      orig: null,

      orig_line_diff: 0,
      dest_line_diff: 0
    });
    var generator = new MOZ_SourceMap.SourceMapGenerator({
      file: options.file,
      sourceRoot: options.root
    });
    var orig_map =
      options.orig && new MOZ_SourceMap.SourceMapConsumer(options.orig);

    if (orig_map && Array.isArray(options.orig.sources)) {
      orig_map._sources.toArray().forEach(function (source) {
        var sourceContent = orig_map.sourceContentFor(source, true);
        if (sourceContent) {
          generator.setSourceContent(source, sourceContent);
        }
      });
    }

    function add(source, gen_line, gen_col, orig_line, orig_col, name) {
      if (orig_map) {
        var info = orig_map.originalPositionFor({
          line: orig_line,
          column: orig_col
        });
        if (info.source === null) {
          return;
        }
        source = info.source;
        orig_line = info.line;
        orig_col = info.column;
        name = info.name || name;
      }
      generator.addMapping({
        generated: {
          line: gen_line + options.dest_line_diff,
          column: gen_col
        },
        original: {
          line: orig_line + options.orig_line_diff,
          column: orig_col
        },
        source: source,
        name: name
      });
    }
    return {
      add: add,
      get: function () {
        return generator;
      },
      toString: function () {
        return JSON.stringify(generator.toJSON());
      }
    };
  }

  Mihai2()(
    /***********************************************************************

    A JavaScript tokenizer / parser / beautifier / compressor.
    https://github.com/mishoo/UglifyJS2

    -------------------------------- (C) ---------------------------------

                            Author: Mihai Bazon
                          <mihai.bazon@gmail.com>
                        http://mihai.bazon.net/blog

    Distributed under the BSD license:

      Copyright 2012 (c) Mihai Bazon <mihai.bazon@gmail.com>

      Redistribution and use in source and binary forms, with or without
      modification, are permitted provided that the following conditions
      are met:

          * Redistributions of source code must retain the above
            copyright notice, this list of conditions and the following
            disclaimer.

          * Redistributions in binary form must reproduce the above
            copyright notice, this list of conditions and the following
            disclaimer in the documentation and/or other materials
            provided with the distribution.

      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDER “AS IS” AND ANY
      EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
      IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
      PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER BE
      LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY,
      OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
      PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
      PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
      THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR
      TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
      THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
      SUCH DAMAGE.

  ***********************************************************************/

    "use strict"
  );

  function find_builtins() {
    // NaN will be included due to Number.NaN
    var a = ["null", "true", "false", "Infinity", "-Infinity", "undefined"];
    [
      Object,
      Array,
      Function,
      Number,
      String,
      Boolean,
      Error,
      Math,
      Date,
      RegExp
    ].forEach(function (cnstor) {
      Object.getOwnPropertyNames(cnstor).map(add);
      if (cnstor.prototype) {
        Object.getOwnPropertyNames(cnstor.prototype).map(add);
      }
    });
    function add(name) {
      push_uniq(a, name);
    }
    return a;
  }

  Mangle();
  exports.Compressor = Compressor;
  exports.DefaultsError = DefaultsError;
  exports.Dictionary = Dictionary;
  exports.JS_Parse_Error = JS_Parse_Error;
  exports.MAP = MAP;
  exports.OutputStream = OutputStream;
  exports.SourceMap = SourceMap;
  exports.TreeTransformer = TreeTransformer;
  exports.TreeWalker = TreeWalker;
  exports.base54 = base54;
  exports.defaults = defaults;
  exports.mangle_properties = mangle_properties;
  exports.merge = merge;
  exports.parse = parse;
  exports.push_uniq = push_uniq;
  exports.string_template = string_template;
  exports.tokenizer = tokenizer;
  exports.is_identifier = is_identifier;
  exports.SymbolDef = SymbolDef;

  AST_Node.warn_function = function (txt) {
    logger.error("uglifyjs WARN: " + txt);
  };

  exports.AST_Node.warn_function = function (txt) {
    console.error("WARN: %s", txt);
  };

  function read_source_map(code) {
    var match = /\n\/\/# sourceMappingURL=data:application\/json(;.*?)?;base64,(.*)/.exec(
      code
    );
    if (!match) {
      exports.AST_Node.warn("inline source map not found");
      return null;
    }
    return JSON.parse(new Buffer(match[2], "base64"));
  }

  exports.minify = Minify;

  // exports.describe_ast = function() {
  //     function doitem(cnstor) {
  //         var sub = {};
  //         cnstor.SUBCLASSES.forEach(function(cnstor){
  //             sub[cnstor.TYPE] = doitem(cnstor);
  //         });
  //         var ret = {};
  //         if (cnstor.SELF_PROPS.length > 0) ret.props = cnstor.SELF_PROPS;
  //         if (cnstor.SUBCLASSES.length > 0) ret.sub = sub;
  //         return ret;
  //     }
  //     return doitem(exports.AST_Node).sub;
  // }

  exports.describe_ast = function () {
    var out = exports.OutputStream({ beautify: true });
    function doitem(cnstor) {
      out.print("AST_" + cnstor.TYPE);
      var props = cnstor.SELF_PROPS.filter(function (prop) {
        return !/^\$/.test(prop);
      });
      if (props.length > 0) {
        out.space();
        out.with_parens(function () {
          props.forEach(function (prop, i) {
            if (i) out.space();
            out.print(prop);
          });
        });
      }
      if (cnstor.documentation) {
        out.space();
        out.print_string(cnstor.documentation);
      }
      if (cnstor.SUBCLASSES.length > 0) {
        out.space();
        out.with_block(function () {
          cnstor.SUBCLASSES.forEach(function (cnstor, i) {
            out.indent();
            doitem(cnstor);
            out.newline();
          });
        });
      }
    }
    doitem(exports.AST_Node);
    return out + "";
  };

  function readReservedFile(filename, reserved) {
    if (!reserved) {
      reserved = { vars: [], props: [] };
    }
    var data = rjsFile.readFile(filename, "utf8");
    data = JSON.parse(data);
    if (data.vars) {
      data.vars.forEach(function (name) {
        exports.push_uniq(reserved.vars, name);
      });
    }
    if (data.props) {
      data.props.forEach(function (name) {
        exports.push_uniq(reserved.props, name);
      });
    }
    return reserved;
  }

  exports.readReservedFile = readReservedFile;

  exports.readDefaultReservedFile = function (reserved) {
    return readReservedFile(require.resolve("./domprops.json"), reserved);
  };

  exports.readNameCache = function (filename, key) {
    var cache = null;
    if (filename) {
      try {
        var cache = rjsFile.readFile(filename, "utf8");
        cache = JSON.parse(cache)[key];
        if (!cache) throw "init";
        cache.props = exports.Dictionary.fromObject(cache.props);
      } catch (ex) {
        cache = {
          cname: -1,
          props: new exports.Dictionary()
        };
      }
    }
    return cache;
  };

  exports.writeNameCache = function (filename, key, cache) {
    if (filename) {
      var data;
      try {
        data = rjsFile.readFile(filename, "utf8");
        data = JSON.parse(data);
      } catch (ex) {
        data = {};
      }
      data[key] = {
        cname: cache.cname,
        props: cache.props.toObject()
      };
      rjsFile.writeFile(filename, JSON.stringify(data, null, 2), "utf8");
    }
  };

  // A file glob function that only supports "*" and "?" wildcards in the basename.
  // Example: "foo/bar/*baz??.*.js"
  // Argument `glob` may be a string or an array of strings.
  // Returns an array of strings. Garbage in, garbage out.
  exports.simple_glob = function simple_glob(glob) {
    if (Array.isArray(glob)) {
      return [].concat.apply([], glob.map(simple_glob));
    }
    if (glob.match(/\*|\?/)) {
      var dir = path.dirname(glob);
      try {
        var entries = fs.readdirSync(dir);
      } catch (ex) {}
      if (entries) {
        var pattern =
          "^" +
          path
            .basename(glob)
            .replace(/[.+^$[\]\\(){}]/g, "\\$&")
            .replace(/\*/g, "[^/\\\\]*")
            .replace(/\?/g, "[^/\\\\]") +
          "$";
        var mod = process.platform === "win32" ? "i" : "";
        var rx = new RegExp(pattern, mod);
        var results = entries
          .filter(function (name) {
            return rx.test(name);
          })
          .map(function (name) {
            return path.join(dir, name);
          });
        if (results.length) return results;
      }
    }
    return [glob];
  };
}
function Minify(files, options, name) {
  options = exports.defaults(options, {
    compress: {},
    fromString: false,
    inSourceMap: null,
    mangle: {},
    mangleProperties: false,
    nameCache: null,
    outFileName: null,
    output: null,
    outSourceMap: null,
    parse: {},
    sourceMapInline: false,
    sourceMapUrl: null,
    sourceRoot: null,
    spidermonkey: false,
    warnings: false
  });
  exports.base54.reset();

  var inMap = options.inSourceMap;
  if (typeof inMap === "string" && inMap !== "inline") {
    inMap = JSON.parse(rjsFile.readFile(inMap, "utf8"));
  }

  // 1. parse
  var toplevel = null,
    sourcesContent = {};

  if (options.spidermonkey) {
    if (inMap === "inline") {
      throw new Error("inline source map only works with built-in parser");
    }
    toplevel = exports.AST_Node.from_mozilla_ast(files);
  } else {
    var addFile = function (file, fileUrl) {
      var code = options.fromString ? file : rjsFile.readFile(file, "utf8");
      if (inMap === "inline") {
        inMap = read_source_map(code);
      }
      sourcesContent[fileUrl] = code;
      toplevel = exports.parse(code, {
        filename: fileUrl,
        toplevel: toplevel,
        bare_returns: options.parse ? options.parse.bare_returns : undefined
      });
    };
    if (!options.fromString) {
      files = exports.simple_glob(files);
      if (inMap === "inline" && files.length > 1) {
        throw new Error("inline source map only works with singular input");
      }
    }
    [].concat(files).forEach(function (files, i) {
      if (typeof files === "string") {
        addFile(files, options.fromString ? i : files);
      } else {
        for (var fileUrl in files) {
          addFile(files[fileUrl], fileUrl);
        }
      }
    });
  }
  if (options.wrap) {
    toplevel = toplevel.wrap_commonjs(options.wrap, options.exportAll);
  }

  // 2. compress
  if (options.compress) {
    var compress = { warnings: options.warnings };
    exports.merge(compress, options.compress);
    toplevel.figure_out_scope(options.mangle);
    var sq = exports.Compressor(compress);
    toplevel = sq.compress(toplevel);
  }

  // 3. mangle properties
  if (options.mangleProperties || options.nameCache) {
    options.mangleProperties.cache = exports.readNameCache(
      options.nameCache,
      "props"
    );
    toplevel = exports.mangle_properties(toplevel, options.mangleProperties);
    exports.writeNameCache(
      options.nameCache,
      "props",
      options.mangleProperties.cache
    );
  }

  // 4. mangle
  if (options.mangle) {
    toplevel.figure_out_scope(options.mangle);
    toplevel.compute_char_frequency(options.mangle);
    toplevel.mangle_names(options.mangle);
  }

  // 5. output
  var output = { max_line_len: 32000 };
  if (options.outSourceMap || options.sourceMapInline) {
    output.source_map = exports.SourceMap({
      // prefer outFileName, otherwise use outSourceMap without .map suffix
      file:
        options.outFileName ||
        (typeof options.outSourceMap === "string"
          ? options.outSourceMap.replace(/\.map$/i, "")
          : null),
      orig: inMap,
      root: options.sourceRoot
    });
    if (options.sourceMapIncludeSources) {
      for (var file in sourcesContent) {
        if (sourcesContent.hasOwnProperty(file)) {
          output.source_map.get().setSourceContent(file, sourcesContent[file]);
        }
      }
    }
  }
  if (options.output) {
    exports.merge(output, options.output);
  }
  var stream = exports.OutputStream(output);
  toplevel.print(stream);

  var source_map = output.source_map;
  if (source_map) {
    source_map = source_map + "";
  }

  var mappingUrlPrefix = "\n//# sourceMappingURL=";
  if (options.sourceMapInline) {
    stream +=
      mappingUrlPrefix +
      "data:application/json;charset=utf-8;base64," +
      new Buffer(source_map).toString("base64");
  } else if (
    options.outSourceMap &&
    typeof options.outSourceMap === "string" &&
    options.sourceMapUrl !== false
  ) {
    stream +=
      mappingUrlPrefix +
      (typeof options.sourceMapUrl === "string"
        ? options.sourceMapUrl
        : options.outSourceMap);
  }

  return {
    code: stream + "",
    map: source_map
  };
}
function Mangle(ast, options) {
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
  if (reserved === null) reserved = find_builtins();

  var cache = options.cache;
  if (cache === null) {
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
