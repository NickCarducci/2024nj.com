/* -----[ code generators ]----- */
//iife basically, not just a declaration, 'this'- or return-only, -accessible, -global-return
export default function CodeGenerators() {
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
        self.value == "use asm" &&
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

        if (output.pos() == 0) {
          if (
            comments.length > 0 &&
            output.option("shebang") &&
            comments[0].type == "comment5"
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
          } else if (c.type == "comment2") {
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
        p instanceof AST_VarDef || // var a = (1, 2), b = a + a; ==> b == 4
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
        if (pp > sp || (pp == sp && this === p.right)) {
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
          if (!(i == last && is_toplevel)) {
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
              if (node instanceof AST_Binary && node.operator == "in")
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
        op[0] == ">" /* ">>" ">>>" ">" ">=" */ &&
        self.left instanceof AST_UnaryPostfix &&
        self.left.operator == "--"
      ) {
        // space is mandatory to avoid outputting -->
        output.print(" ");
      } else {
        // the space is optional depending on "beautify"
        output.space();
      }
      output.print(op);
      if (
        (op == "<" || op == "<<") &&
        self.right instanceof AST_UnaryPrefix &&
        self.right.operator == "!" &&
        self.right.expression instanceof AST_UnaryPrefix &&
        self.right.expression.operator == "--"
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
        (typeof key == "number" ||
          (!output.option("beautify") && +key + "" == key)) &&
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
