import Literate from "./literate";
import Looker from "./looker";
import { Messages } from "./messages";
import Scribe from "./scribe";
import Sift from "./sift";
import { XHTMLEntities } from "./XHTMLEntities";

const modules =
  /************************************************************************/
  /******/ [
    /* 0 */
    /***/ function (module, exports, __webpack_require__) {
      // "use strict";
      /*
  Copyright JS Foundation and other contributors, https://js.foundation/

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
      Object.defineProperty(exports, "__esModule", { value: true });
      var comment_handler_1 = __webpack_require__(1);
      var jsx_parser_1 = __webpack_require__(3);
      var parser_1 = __webpack_require__(8);
      var tokenizer_1 = __webpack_require__(15);
      function parse(code, options, delegate) {
        var commentHandler = null;
        var proxyDelegate = function (node, metadata) {
          if (delegate) {
            delegate(node, metadata);
          }
          if (commentHandler) {
            commentHandler.visit(node, metadata);
          }
        };
        var parserDelegate =
          typeof delegate === "function" ? proxyDelegate : null;
        var collectComment = false;
        if (options) {
          collectComment =
            typeof options.comment === "boolean" && options.comment;
          var attachComment =
            typeof options.attachComment === "boolean" && options.attachComment;
          if (collectComment || attachComment) {
            commentHandler = new comment_handler_1.CommentHandler();
            commentHandler.attach = attachComment;
            options.comment = true;
            parserDelegate = proxyDelegate;
          }
        }
        var isModule = false;
        if (options && typeof options.sourceType === "string") {
          isModule = options.sourceType === "module";
        }
        var parser;
        if (options && typeof options.jsx === "boolean" && options.jsx) {
          parser = new jsx_parser_1.JSXParser(code, options, parserDelegate);
        } else {
          parser = new parser_1.Parser(code, options, parserDelegate);
        }
        var program = isModule ? parser.parseModule() : parser.parseScript();
        var ast = program;
        if (collectComment && commentHandler) {
          ast.comments = commentHandler.comments;
        }
        if (parser.config.tokens) {
          ast.tokens = parser.tokens;
        }
        if (parser.config.tolerant) {
          ast.errors = parser.errorHandler.errors;
        }
        return ast;
      }
      exports.parse = parse;
      function parseModule(code, options, delegate) {
        var parsingOptions = options || {};
        parsingOptions.sourceType = "module";
        return parse(code, parsingOptions, delegate);
      }
      exports.parseModule = parseModule;
      function parseScript(code, options, delegate) {
        var parsingOptions = options || {};
        parsingOptions.sourceType = "script";
        return parse(code, parsingOptions, delegate);
      }
      exports.parseScript = parseScript;
      function tokenize(code, options, delegate) {
        var tokenizer = new tokenizer_1.Tokenizer(code, options);
        var tokens;
        tokens = [];
        try {
          while (true) {
            var token = tokenizer.getNextToken();
            if (!token) {
              break;
            }
            if (delegate) {
              token = delegate(token);
            }
            tokens.push(token);
          }
        } catch (e) {
          tokenizer.errorHandler.tolerate(e);
        }
        if (tokenizer.errorHandler.tolerant) {
          tokens.errors = tokenizer.errors();
        }
        return tokens;
      }
      exports.tokenize = tokenize;
      var syntax_1 = __webpack_require__(2);
      exports.Syntax = syntax_1.Syntax;
      // Sync with *.json manifests.
      exports.version = "4.0.1";

      /***/
    },
    /* 1 */
    /***/ function (module, exports, __webpack_require__) {
      //"use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var syntax_1 = __webpack_require__(2);
      var CommentHandler = (function () {
        function CommentHandler() {
          this.attach = false;
          this.comments = [];
          this.stack = [];
          this.leading = [];
          this.trailing = [];
        }
        CommentHandler.prototype.insertInnerComments = function (
          node,
          metadata
        ) {
          //  innnerComments for properties empty block
          //  `function a() {/** comments **\/}`
          if (
            node.type === syntax_1.Syntax.BlockStatement &&
            node.body.length === 0
          ) {
            var innerComments = [];
            for (var i = this.leading.length - 1; i >= 0; --i) {
              var entry = this.leading[i];
              if (metadata.end.offset >= entry.start) {
                innerComments.unshift(entry.comment);
                this.leading.splice(i, 1);
                this.trailing.splice(i, 1);
              }
            }
            if (innerComments.length) {
              node.innerComments = innerComments;
            }
          }
        };
        CommentHandler.prototype.findTrailingComments = function (metadata) {
          var trailingComments = [];
          if (this.trailing.length > 0) {
            for (var i = this.trailing.length - 1; i >= 0; --i) {
              var entry_1 = this.trailing[i];
              if (entry_1.start >= metadata.end.offset) {
                trailingComments.unshift(entry_1.comment);
              }
            }
            this.trailing.length = 0;
            return trailingComments;
          }
          var entry = this.stack[this.stack.length - 1];
          if (entry && entry.node.trailingComments) {
            var firstComment = entry.node.trailingComments[0];
            if (firstComment && firstComment.range[0] >= metadata.end.offset) {
              trailingComments = entry.node.trailingComments;
              delete entry.node.trailingComments;
            }
          }
          return trailingComments;
        };
        CommentHandler.prototype.findLeadingComments = function (metadata) {
          var leadingComments = [];
          var target;
          while (this.stack.length > 0) {
            var entry = this.stack[this.stack.length - 1];
            if (entry && entry.start >= metadata.start.offset) {
              target = entry.node;
              this.stack.pop();
            } else {
              break;
            }
          }
          if (target) {
            var count = target.leadingComments
              ? target.leadingComments.length
              : 0;
            for (var i = count - 1; i >= 0; --i) {
              var comment = target.leadingComments[i];
              if (comment.range[1] <= metadata.start.offset) {
                leadingComments.unshift(comment);
                target.leadingComments.splice(i, 1);
              }
            }
            if (target.leadingComments && target.leadingComments.length === 0) {
              delete target.leadingComments;
            }
            return leadingComments;
          }
          for (var i = this.leading.length - 1; i >= 0; --i) {
            var entry = this.leading[i];
            if (entry.start <= metadata.start.offset) {
              leadingComments.unshift(entry.comment);
              this.leading.splice(i, 1);
            }
          }
          return leadingComments;
        };
        CommentHandler.prototype.visitNode = function (node, metadata) {
          if (node.type === syntax_1.Syntax.Program && node.body.length > 0) {
            return;
          }
          this.insertInnerComments(node, metadata);
          var trailingComments = this.findTrailingComments(metadata);
          var leadingComments = this.findLeadingComments(metadata);
          if (leadingComments.length > 0) {
            node.leadingComments = leadingComments;
          }
          if (trailingComments.length > 0) {
            node.trailingComments = trailingComments;
          }
          this.stack.push({
            node: node,
            start: metadata.start.offset
          });
        };
        CommentHandler.prototype.visitComment = function (node, metadata) {
          var type = node.type[0] === "L" ? "Line" : "Block";
          var comment = {
            type: type,
            value: node.value
          };
          if (node.range) {
            comment.range = node.range;
          }
          if (node.loc) {
            comment.loc = node.loc;
          }
          this.comments.push(comment);
          if (this.attach) {
            var entry = {
              comment: {
                type: type,
                value: node.value,
                range: [metadata.start.offset, metadata.end.offset]
              },
              start: metadata.start.offset
            };
            if (node.loc) {
              entry.comment.loc = node.loc;
            }
            node.type = type;
            this.leading.push(entry);
            this.trailing.push(entry);
          }
        };
        CommentHandler.prototype.visit = function (node, metadata) {
          if (node.type === "LineComment") {
            this.visitComment(node, metadata);
          } else if (node.type === "BlockComment") {
            this.visitComment(node, metadata);
          } else if (this.attach) {
            this.visitNode(node, metadata);
          }
        };
        return CommentHandler;
      })();
      exports.CommentHandler = CommentHandler;

      /***/
    },
    /* 2 */
    /***/ function (module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Syntax = {
        AssignmentExpression: "AssignmentExpression",
        AssignmentPattern: "AssignmentPattern",
        ArrayExpression: "ArrayExpression",
        ArrayPattern: "ArrayPattern",
        ArrowFunctionExpression: "ArrowFunctionExpression",
        AwaitExpression: "AwaitExpression",
        BlockStatement: "BlockStatement",
        BinaryExpression: "BinaryExpression",
        BreakStatement: "BreakStatement",
        CallExpression: "CallExpression",
        CatchClause: "CatchClause",
        ClassBody: "ClassBody",
        ClassDeclaration: "ClassDeclaration",
        ClassExpression: "ClassExpression",
        ConditionalExpression: "ConditionalExpression",
        ContinueStatement: "ContinueStatement",
        DoWhileStatement: "DoWhileStatement",
        DebuggerStatement: "DebuggerStatement",
        EmptyStatement: "EmptyStatement",
        ExportAllDeclaration: "ExportAllDeclaration",
        ExportDefaultDeclaration: "ExportDefaultDeclaration",
        ExportNamedDeclaration: "ExportNamedDeclaration",
        ExportSpecifier: "ExportSpecifier",
        ExpressionStatement: "ExpressionStatement",
        ForStatement: "ForStatement",
        ForOfStatement: "ForOfStatement",
        ForInStatement: "ForInStatement",
        FunctionDeclaration: "FunctionDeclaration",
        FunctionExpression: "FunctionExpression",
        Identifier: "Identifier",
        IfStatement: "IfStatement",
        ImportDeclaration: "ImportDeclaration",
        ImportDefaultSpecifier: "ImportDefaultSpecifier",
        ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
        ImportSpecifier: "ImportSpecifier",
        Literal: "Literal",
        LabeledStatement: "LabeledStatement",
        LogicalExpression: "LogicalExpression",
        MemberExpression: "MemberExpression",
        MetaProperty: "MetaProperty",
        MethodDefinition: "MethodDefinition",
        NewExpression: "NewExpression",
        ObjectExpression: "ObjectExpression",
        ObjectPattern: "ObjectPattern",
        Program: "Program",
        Property: "Property",
        RestElement: "RestElement",
        ReturnStatement: "ReturnStatement",
        SequenceExpression: "SequenceExpression",
        SpreadElement: "SpreadElement",
        Super: "Super",
        SwitchCase: "SwitchCase",
        SwitchStatement: "SwitchStatement",
        TaggedTemplateExpression: "TaggedTemplateExpression",
        TemplateElement: "TemplateElement",
        TemplateLiteral: "TemplateLiteral",
        ThisExpression: "ThisExpression",
        ThrowStatement: "ThrowStatement",
        TryStatement: "TryStatement",
        UnaryExpression: "UnaryExpression",
        UpdateExpression: "UpdateExpression",
        VariableDeclaration: "VariableDeclaration",
        VariableDeclarator: "VariableDeclarator",
        WhileStatement: "WhileStatement",
        WithStatement: "WithStatement",
        YieldExpression: "YieldExpression"
      };

      /***/
    },
    /* 3 */
    /***/ function (module, exports, __webpack_require__) {
      "use strict";
      /* istanbul ignore next */
      var __extends =
        (this && this.__extends) ||
        (function () {
          var extendStatics =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (d, b) {
                d.__proto__ = b;
              }) ||
            function (d, b) {
              for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
            };
          return function (d, b) {
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype =
              b === null
                ? Object.create(b)
                : ((__.prototype = b.prototype), new __());
          };
        })();
      Object.defineProperty(exports, "__esModule", { value: true });
      var character_1 = __webpack_require__(4);
      var JSXNode = __webpack_require__(5);
      var jsx_syntax_1 = __webpack_require__(6);
      var Node = __webpack_require__(7);
      var parser_1 = __webpack_require__(8);
      var token_1 = __webpack_require__(13);
      var xhtml_entities_1 = __webpack_require__(14);
      token_1.TokenName[100 /* Identifier */] = "JSXIdentifier";
      token_1.TokenName[101 /* Text */] = "JSXText";
      // Fully qualified element name, e.g. <svg:path> returns "svg:path"
      function getQualifiedElementName(elementName) {
        var qualifiedName;
        switch (elementName.type) {
          case jsx_syntax_1.JSXSyntax.JSXIdentifier:
            var id = elementName;
            qualifiedName = id.name;
            break;
          case jsx_syntax_1.JSXSyntax.JSXNamespacedName:
            var ns = elementName;
            qualifiedName =
              getQualifiedElementName(ns.namespace) +
              ":" +
              getQualifiedElementName(ns.name);
            break;
          case jsx_syntax_1.JSXSyntax.JSXMemberExpression:
            var expr = elementName;
            qualifiedName =
              getQualifiedElementName(expr.object) +
              "." +
              getQualifiedElementName(expr.property);
            break;
          /* istanbul ignore next */
          default:
            break;
        }
        return qualifiedName;
      }
      var JSXParser = (function (_super) {
        __extends(JSXParser, _super);
        function JSXParser(code, options, delegate) {
          return _super.call(this, code, options, delegate) || this;
        }
        JSXParser.prototype.parsePrimaryExpression = function () {
          return this.match("<")
            ? this.parseJSXRoot()
            : _super.prototype.parsePrimaryExpression.call(this);
        };
        JSXParser.prototype.startJSX = function () {
          // Unwind the scanner before the lookahead token.
          this.scanner.index = this.startMarker.index;
          this.scanner.lineNumber = this.startMarker.line;
          this.scanner.lineStart =
            this.startMarker.index - this.startMarker.column;
        };
        JSXParser.prototype.finishJSX = function () {
          // Prime the next lookahead.
          this.nextToken();
        };
        JSXParser.prototype.reenterJSX = function () {
          this.startJSX();
          this.expectJSX("}");
          // Pop the closing '}' added from the lookahead.
          if (this.config.tokens) {
            this.tokens.pop();
          }
        };
        JSXParser.prototype.createJSXNode = function () {
          this.collectComments();
          return {
            index: this.scanner.index,
            line: this.scanner.lineNumber,
            column: this.scanner.index - this.scanner.lineStart
          };
        };
        JSXParser.prototype.createJSXChildNode = function () {
          return {
            index: this.scanner.index,
            line: this.scanner.lineNumber,
            column: this.scanner.index - this.scanner.lineStart
          };
        };
        JSXParser.prototype.scanXHTMLEntity = function (quote) {
          var result = "&";
          var valid = true;
          var terminated = false;
          var numeric = false;
          var hex = false;
          while (!this.scanner.eof() && valid && !terminated) {
            var ch = this.scanner.source[this.scanner.index];
            if (ch === quote) {
              break;
            }
            terminated = ch === ";";
            result += ch;
            ++this.scanner.index;
            if (!terminated) {
              switch (result.length) {
                case 2:
                  // e.g. '&#123;'
                  numeric = ch === "#";
                  break;
                case 3:
                  if (numeric) {
                    // e.g. '&#x41;'
                    hex = ch === "x";
                    valid =
                      hex ||
                      character_1.Character.isDecimalDigit(ch.charCodeAt(0));
                    numeric = numeric && !hex;
                  }
                  break;
                default:
                  valid =
                    valid &&
                    !(
                      numeric &&
                      !character_1.Character.isDecimalDigit(ch.charCodeAt(0))
                    );
                  valid =
                    valid &&
                    !(
                      hex && !character_1.Character.isHexDigit(ch.charCodeAt(0))
                    );
                  break;
              }
            }
          }
          if (valid && terminated && result.length > 2) {
            // e.g. '&#x41;' becomes just '#x41'
            var str = result.substr(1, result.length - 2);
            if (numeric && str.length > 1) {
              result = String.fromCharCode(parseInt(str.substr(1), 10));
            } else if (hex && str.length > 2) {
              result = String.fromCharCode(parseInt("0" + str.substr(1), 16));
            } else if (
              !numeric &&
              !hex &&
              xhtml_entities_1.XHTMLEntities[str]
            ) {
              result = xhtml_entities_1.XHTMLEntities[str];
            }
          }
          return result;
        };
        // Scan the next JSX token. This replaces Scanner#lex when in JSX mode.
        JSXParser.prototype.lexJSX = function () {
          var cp = this.scanner.source.charCodeAt(this.scanner.index);
          // < > / : = { }
          if (
            cp === 60 ||
            cp === 62 ||
            cp === 47 ||
            cp === 58 ||
            cp === 61 ||
            cp === 123 ||
            cp === 125
          ) {
            var value = this.scanner.source[this.scanner.index++];
            return {
              type: 7 /* Punctuator */,
              value: value,
              lineNumber: this.scanner.lineNumber,
              lineStart: this.scanner.lineStart,
              start: this.scanner.index - 1,
              end: this.scanner.index
            };
          }
          // " '
          if (cp === 34 || cp === 39) {
            var start = this.scanner.index;
            var quote = this.scanner.source[this.scanner.index++];
            var str = "";
            while (!this.scanner.eof()) {
              var ch = this.scanner.source[this.scanner.index++];
              if (ch === quote) {
                break;
              } else if (ch === "&") {
                str += this.scanXHTMLEntity(quote);
              } else {
                str += ch;
              }
            }
            return {
              type: 8 /* StringLiteral */,
              value: str,
              lineNumber: this.scanner.lineNumber,
              lineStart: this.scanner.lineStart,
              start: start,
              end: this.scanner.index
            };
          }
          // ... or .
          if (cp === 46) {
            var n1 = this.scanner.source.charCodeAt(this.scanner.index + 1);
            var n2 = this.scanner.source.charCodeAt(this.scanner.index + 2);
            var value = n1 === 46 && n2 === 46 ? "..." : ".";
            var start = this.scanner.index;
            this.scanner.index += value.length;
            return {
              type: 7 /* Punctuator */,
              value: value,
              lineNumber: this.scanner.lineNumber,
              lineStart: this.scanner.lineStart,
              start: start,
              end: this.scanner.index
            };
          }
          // `
          if (cp === 96) {
            // Only placeholder, since it will be rescanned as a real assignment expression.
            return {
              type: 10 /* Template */,
              value: "",
              lineNumber: this.scanner.lineNumber,
              lineStart: this.scanner.lineStart,
              start: this.scanner.index,
              end: this.scanner.index
            };
          }
          // Identifer can not contain backslash (char code 92).
          if (character_1.Character.isIdentifierStart(cp) && cp !== 92) {
            var start = this.scanner.index;
            ++this.scanner.index;
            while (!this.scanner.eof()) {
              var ch = this.scanner.source.charCodeAt(this.scanner.index);
              if (character_1.Character.isIdentifierPart(ch) && ch !== 92) {
                ++this.scanner.index;
              } else if (ch === 45) {
                // Hyphen (char code 45) can be part of an identifier.
                ++this.scanner.index;
              } else {
                break;
              }
            }
            var id = this.scanner.source.slice(start, this.scanner.index);
            return {
              type: 100 /* Identifier */,
              value: id,
              lineNumber: this.scanner.lineNumber,
              lineStart: this.scanner.lineStart,
              start: start,
              end: this.scanner.index
            };
          }
          return this.scanner.lex();
        };
        JSXParser.prototype.nextJSXToken = function () {
          this.collectComments();
          this.startMarker.index = this.scanner.index;
          this.startMarker.line = this.scanner.lineNumber;
          this.startMarker.column = this.scanner.index - this.scanner.lineStart;
          var token = this.lexJSX();
          this.lastMarker.index = this.scanner.index;
          this.lastMarker.line = this.scanner.lineNumber;
          this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
          if (this.config.tokens) {
            this.tokens.push(this.convertToken(token));
          }
          return token;
        };
        JSXParser.prototype.nextJSXText = function () {
          this.startMarker.index = this.scanner.index;
          this.startMarker.line = this.scanner.lineNumber;
          this.startMarker.column = this.scanner.index - this.scanner.lineStart;
          var start = this.scanner.index;
          var text = "";
          while (!this.scanner.eof()) {
            var ch = this.scanner.source[this.scanner.index];
            if (ch === "{" || ch === "<") {
              break;
            }
            ++this.scanner.index;
            text += ch;
            if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
              ++this.scanner.lineNumber;
              if (
                ch === "\r" &&
                this.scanner.source[this.scanner.index] === "\n"
              ) {
                ++this.scanner.index;
              }
              this.scanner.lineStart = this.scanner.index;
            }
          }
          this.lastMarker.index = this.scanner.index;
          this.lastMarker.line = this.scanner.lineNumber;
          this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
          var token = {
            type: 101 /* Text */,
            value: text,
            lineNumber: this.scanner.lineNumber,
            lineStart: this.scanner.lineStart,
            start: start,
            end: this.scanner.index
          };
          if (text.length > 0 && this.config.tokens) {
            this.tokens.push(this.convertToken(token));
          }
          return token;
        };
        JSXParser.prototype.peekJSXToken = function () {
          var state = this.scanner.saveState();
          this.scanner.scanComments();
          var next = this.lexJSX();
          this.scanner.restoreState(state);
          return next;
        };
        // Expect the next JSX token to match the specified punctuator.
        // If not, an exception will be thrown.
        JSXParser.prototype.expectJSX = function (value) {
          var token = this.nextJSXToken();
          if (token.type !== 7 /* Punctuator */ || token.value !== value) {
            this.throwUnexpectedToken(token);
          }
        };
        // Return true if the next JSX token matches the specified punctuator.
        JSXParser.prototype.matchJSX = function (value) {
          var next = this.peekJSXToken();
          return next.type === 7 /* Punctuator */ && next.value === value;
        };
        JSXParser.prototype.parseJSXIdentifier = function () {
          var node = this.createJSXNode();
          var token = this.nextJSXToken();
          if (token.type !== 100 /* Identifier */) {
            this.throwUnexpectedToken(token);
          }
          return this.finalize(node, new JSXNode.JSXIdentifier(token.value));
        };
        JSXParser.prototype.parseJSXElementName = function () {
          var node = this.createJSXNode();
          var elementName = this.parseJSXIdentifier();
          if (this.matchJSX(":")) {
            var namespace = elementName;
            this.expectJSX(":");
            var name_1 = this.parseJSXIdentifier();
            elementName = this.finalize(
              node,
              new JSXNode.JSXNamespacedName(namespace, name_1)
            );
          } else if (this.matchJSX(".")) {
            while (this.matchJSX(".")) {
              var object = elementName;
              this.expectJSX(".");
              var property = this.parseJSXIdentifier();
              elementName = this.finalize(
                node,
                new JSXNode.JSXMemberExpression(object, property)
              );
            }
          }
          return elementName;
        };
        JSXParser.prototype.parseJSXAttributeName = function () {
          var node = this.createJSXNode();
          var attributeName;
          var identifier = this.parseJSXIdentifier();
          if (this.matchJSX(":")) {
            var namespace = identifier;
            this.expectJSX(":");
            var name_2 = this.parseJSXIdentifier();
            attributeName = this.finalize(
              node,
              new JSXNode.JSXNamespacedName(namespace, name_2)
            );
          } else {
            attributeName = identifier;
          }
          return attributeName;
        };
        JSXParser.prototype.parseJSXStringLiteralAttribute = function () {
          var node = this.createJSXNode();
          var token = this.nextJSXToken();
          if (token.type !== 8 /* StringLiteral */) {
            this.throwUnexpectedToken(token);
          }
          var raw = this.getTokenRaw(token);
          return this.finalize(node, new Node.Literal(token.value, raw));
        };
        JSXParser.prototype.parseJSXExpressionAttribute = function () {
          var node = this.createJSXNode();
          this.expectJSX("{");
          this.finishJSX();
          if (this.match("}")) {
            this.tolerateError(
              "JSX attributes must only be assigned a non-empty expression"
            );
          }
          var expression = this.parseAssignmentExpression();
          this.reenterJSX();
          return this.finalize(
            node,
            new JSXNode.JSXExpressionContainer(expression)
          );
        };
        JSXParser.prototype.parseJSXAttributeValue = function () {
          return this.matchJSX("{")
            ? this.parseJSXExpressionAttribute()
            : this.matchJSX("<")
            ? this.parseJSXElement()
            : this.parseJSXStringLiteralAttribute();
        };
        JSXParser.prototype.parseJSXNameValueAttribute = function () {
          var node = this.createJSXNode();
          var name = this.parseJSXAttributeName();
          var value = null;
          if (this.matchJSX("=")) {
            this.expectJSX("=");
            value = this.parseJSXAttributeValue();
          }
          return this.finalize(node, new JSXNode.JSXAttribute(name, value));
        };
        JSXParser.prototype.parseJSXSpreadAttribute = function () {
          var node = this.createJSXNode();
          this.expectJSX("{");
          this.expectJSX("...");
          this.finishJSX();
          var argument = this.parseAssignmentExpression();
          this.reenterJSX();
          return this.finalize(node, new JSXNode.JSXSpreadAttribute(argument));
        };
        JSXParser.prototype.parseJSXAttributes = function () {
          var attributes = [];
          while (!this.matchJSX("/") && !this.matchJSX(">")) {
            var attribute = this.matchJSX("{")
              ? this.parseJSXSpreadAttribute()
              : this.parseJSXNameValueAttribute();
            attributes.push(attribute);
          }
          return attributes;
        };
        JSXParser.prototype.parseJSXOpeningElement = function () {
          var node = this.createJSXNode();
          this.expectJSX("<");
          var name = this.parseJSXElementName();
          var attributes = this.parseJSXAttributes();
          var selfClosing = this.matchJSX("/");
          if (selfClosing) {
            this.expectJSX("/");
          }
          this.expectJSX(">");
          return this.finalize(
            node,
            new JSXNode.JSXOpeningElement(name, selfClosing, attributes)
          );
        };
        JSXParser.prototype.parseJSXBoundaryElement = function () {
          var node = this.createJSXNode();
          this.expectJSX("<");
          if (this.matchJSX("/")) {
            this.expectJSX("/");
            var name_3 = this.parseJSXElementName();
            this.expectJSX(">");
            return this.finalize(node, new JSXNode.JSXClosingElement(name_3));
          }
          var name = this.parseJSXElementName();
          var attributes = this.parseJSXAttributes();
          var selfClosing = this.matchJSX("/");
          if (selfClosing) {
            this.expectJSX("/");
          }
          this.expectJSX(">");
          return this.finalize(
            node,
            new JSXNode.JSXOpeningElement(name, selfClosing, attributes)
          );
        };
        JSXParser.prototype.parseJSXEmptyExpression = function () {
          var node = this.createJSXChildNode();
          this.collectComments();
          this.lastMarker.index = this.scanner.index;
          this.lastMarker.line = this.scanner.lineNumber;
          this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
          return this.finalize(node, new JSXNode.JSXEmptyExpression());
        };
        JSXParser.prototype.parseJSXExpressionContainer = function () {
          var node = this.createJSXNode();
          this.expectJSX("{");
          var expression;
          if (this.matchJSX("}")) {
            expression = this.parseJSXEmptyExpression();
            this.expectJSX("}");
          } else {
            this.finishJSX();
            expression = this.parseAssignmentExpression();
            this.reenterJSX();
          }
          return this.finalize(
            node,
            new JSXNode.JSXExpressionContainer(expression)
          );
        };
        JSXParser.prototype.parseJSXChildren = function () {
          var children = [];
          while (!this.scanner.eof()) {
            var node = this.createJSXChildNode();
            var token = this.nextJSXText();
            if (token.start < token.end) {
              var raw = this.getTokenRaw(token);
              var child = this.finalize(
                node,
                new JSXNode.JSXText(token.value, raw)
              );
              children.push(child);
            }
            if (this.scanner.source[this.scanner.index] === "{") {
              var container = this.parseJSXExpressionContainer();
              children.push(container);
            } else {
              break;
            }
          }
          return children;
        };
        JSXParser.prototype.parseComplexJSXElement = function (el) {
          var stack = [];
          while (!this.scanner.eof()) {
            el.children = el.children.concat(this.parseJSXChildren());
            var node = this.createJSXChildNode();
            var element = this.parseJSXBoundaryElement();
            if (element.type === jsx_syntax_1.JSXSyntax.JSXOpeningElement) {
              var opening = element;
              if (opening.selfClosing) {
                var child = this.finalize(
                  node,
                  new JSXNode.JSXElement(opening, [], null)
                );
                el.children.push(child);
              } else {
                stack.push(el);
                el = {
                  node: node,
                  opening: opening,
                  closing: null,
                  children: []
                };
              }
            }
            if (element.type === jsx_syntax_1.JSXSyntax.JSXClosingElement) {
              el.closing = element;
              var open_1 = getQualifiedElementName(el.opening.name);
              var close_1 = getQualifiedElementName(el.closing.name);
              if (open_1 !== close_1) {
                this.tolerateError(
                  "Expected corresponding JSX closing tag for %0",
                  open_1
                );
              }
              if (stack.length > 0) {
                var child = this.finalize(
                  el.node,
                  new JSXNode.JSXElement(el.opening, el.children, el.closing)
                );
                el = stack[stack.length - 1];
                el.children.push(child);
                stack.pop();
              } else {
                break;
              }
            }
          }
          return el;
        };
        JSXParser.prototype.parseJSXElement = function () {
          var node = this.createJSXNode();
          var opening = this.parseJSXOpeningElement();
          var children = [];
          var closing = null;
          if (!opening.selfClosing) {
            var el = this.parseComplexJSXElement({
              node: node,
              opening: opening,
              closing: closing,
              children: children
            });
            children = el.children;
            closing = el.closing;
          }
          return this.finalize(
            node,
            new JSXNode.JSXElement(opening, children, closing)
          );
        };
        JSXParser.prototype.parseJSXRoot = function () {
          // Pop the opening '<' added from the lookahead.
          if (this.config.tokens) {
            this.tokens.pop();
          }
          this.startJSX();
          var element = this.parseJSXElement();
          this.finishJSX();
          return element;
        };
        JSXParser.prototype.isStartOfExpression = function () {
          return (
            _super.prototype.isStartOfExpression.call(this) || this.match("<")
          );
        };
        return JSXParser;
      })(parser_1.Parser);
      exports.JSXParser = JSXParser;

      /***/
    },
    /* 4 */
    /***/ function (module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      // See also tools/generate-unicode-regex.js.
      var Regex = {
        // Unicode v8.0.0 NonAsciiIdentifierStart:
        NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
        // Unicode v8.0.0 NonAsciiIdentifierPart:
        NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
      };
      exports.Character = {
        /* tslint:disable:no-bitwise */
        fromCodePoint: function (cp) {
          return cp < 0x10000
            ? String.fromCharCode(cp)
            : String.fromCharCode(0xd800 + ((cp - 0x10000) >> 10)) +
                String.fromCharCode(0xdc00 + ((cp - 0x10000) & 1023));
        },
        // https://tc39.github.io/ecma262/#sec-white-space
        isWhiteSpace: function (cp) {
          return (
            cp === 0x20 ||
            cp === 0x09 ||
            cp === 0x0b ||
            cp === 0x0c ||
            cp === 0xa0 ||
            (cp >= 0x1680 &&
              [
                0x1680,
                0x2000,
                0x2001,
                0x2002,
                0x2003,
                0x2004,
                0x2005,
                0x2006,
                0x2007,
                0x2008,
                0x2009,
                0x200a,
                0x202f,
                0x205f,
                0x3000,
                0xfeff
              ].indexOf(cp) >= 0)
          );
        },
        // https://tc39.github.io/ecma262/#sec-line-terminators
        isLineTerminator: function (cp) {
          return cp === 0x0a || cp === 0x0d || cp === 0x2028 || cp === 0x2029;
        },
        // https://tc39.github.io/ecma262/#sec-names-and-keywords
        isIdentifierStart: function (cp) {
          return (
            cp === 0x24 ||
            cp === 0x5f ||
            (cp >= 0x41 && cp <= 0x5a) ||
            (cp >= 0x61 && cp <= 0x7a) ||
            cp === 0x5c ||
            (cp >= 0x80 &&
              Regex.NonAsciiIdentifierStart.test(
                exports.Character.fromCodePoint(cp)
              ))
          );
        },
        isIdentifierPart: function (cp) {
          return (
            cp === 0x24 ||
            cp === 0x5f ||
            (cp >= 0x41 && cp <= 0x5a) ||
            (cp >= 0x61 && cp <= 0x7a) ||
            (cp >= 0x30 && cp <= 0x39) ||
            cp === 0x5c ||
            (cp >= 0x80 &&
              Regex.NonAsciiIdentifierPart.test(
                exports.Character.fromCodePoint(cp)
              ))
          );
        },
        // https://tc39.github.io/ecma262/#sec-literals-numeric-literals
        isDecimalDigit: function (cp) {
          return cp >= 0x30 && cp <= 0x39; // 0..9
        },
        isHexDigit: function (cp) {
          return (
            (cp >= 0x30 && cp <= 0x39) ||
            (cp >= 0x41 && cp <= 0x46) ||
            (cp >= 0x61 && cp <= 0x66)
          ); // a..f
        },
        isOctalDigit: function (cp) {
          return cp >= 0x30 && cp <= 0x37; // 0..7
        }
      };

      /***/
    },
    /* 5 */
    /***/ function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var jsx_syntax_1 = __webpack_require__(6);
      /* tslint:disable:max-classes-per-file */
      var JSXClosingElement = (function () {
        function JSXClosingElement(name) {
          this.type = jsx_syntax_1.JSXSyntax.JSXClosingElement;
          this.name = name;
        }
        return JSXClosingElement;
      })();
      exports.JSXClosingElement = JSXClosingElement;
      var JSXElement = (function () {
        function JSXElement(openingElement, children, closingElement) {
          this.type = jsx_syntax_1.JSXSyntax.JSXElement;
          this.openingElement = openingElement;
          this.children = children;
          this.closingElement = closingElement;
        }
        return JSXElement;
      })();
      exports.JSXElement = JSXElement;
      var JSXEmptyExpression = (function () {
        function JSXEmptyExpression() {
          this.type = jsx_syntax_1.JSXSyntax.JSXEmptyExpression;
        }
        return JSXEmptyExpression;
      })();
      exports.JSXEmptyExpression = JSXEmptyExpression;
      var JSXExpressionContainer = (function () {
        function JSXExpressionContainer(expression) {
          this.type = jsx_syntax_1.JSXSyntax.JSXExpressionContainer;
          this.expression = expression;
        }
        return JSXExpressionContainer;
      })();
      exports.JSXExpressionContainer = JSXExpressionContainer;
      var JSXIdentifier = (function () {
        function JSXIdentifier(name) {
          this.type = jsx_syntax_1.JSXSyntax.JSXIdentifier;
          this.name = name;
        }
        return JSXIdentifier;
      })();
      exports.JSXIdentifier = JSXIdentifier;
      var JSXMemberExpression = (function () {
        function JSXMemberExpression(object, property) {
          this.type = jsx_syntax_1.JSXSyntax.JSXMemberExpression;
          this.object = object;
          this.property = property;
        }
        return JSXMemberExpression;
      })();
      exports.JSXMemberExpression = JSXMemberExpression;
      var JSXAttribute = (function () {
        function JSXAttribute(name, value) {
          this.type = jsx_syntax_1.JSXSyntax.JSXAttribute;
          this.name = name;
          this.value = value;
        }
        return JSXAttribute;
      })();
      exports.JSXAttribute = JSXAttribute;
      var JSXNamespacedName = (function () {
        function JSXNamespacedName(namespace, name) {
          this.type = jsx_syntax_1.JSXSyntax.JSXNamespacedName;
          this.namespace = namespace;
          this.name = name;
        }
        return JSXNamespacedName;
      })();
      exports.JSXNamespacedName = JSXNamespacedName;
      var JSXOpeningElement = (function () {
        function JSXOpeningElement(name, selfClosing, attributes) {
          this.type = jsx_syntax_1.JSXSyntax.JSXOpeningElement;
          this.name = name;
          this.selfClosing = selfClosing;
          this.attributes = attributes;
        }
        return JSXOpeningElement;
      })();
      exports.JSXOpeningElement = JSXOpeningElement;
      var JSXSpreadAttribute = (function () {
        function JSXSpreadAttribute(argument) {
          this.type = jsx_syntax_1.JSXSyntax.JSXSpreadAttribute;
          this.argument = argument;
        }
        return JSXSpreadAttribute;
      })();
      exports.JSXSpreadAttribute = JSXSpreadAttribute;
      var JSXText = (function () {
        function JSXText(value, raw) {
          this.type = jsx_syntax_1.JSXSyntax.JSXText;
          this.value = value;
          this.raw = raw;
        }
        return JSXText;
      })();
      exports.JSXText = JSXText;

      /***/
    },
    /* 6 */
    /***/ function (module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.JSXSyntax = {
        JSXAttribute: "JSXAttribute",
        JSXClosingElement: "JSXClosingElement",
        JSXElement: "JSXElement",
        JSXEmptyExpression: "JSXEmptyExpression",
        JSXExpressionContainer: "JSXExpressionContainer",
        JSXIdentifier: "JSXIdentifier",
        JSXMemberExpression: "JSXMemberExpression",
        JSXNamespacedName: "JSXNamespacedName",
        JSXOpeningElement: "JSXOpeningElement",
        JSXSpreadAttribute: "JSXSpreadAttribute",
        JSXText: "JSXText"
      };

      /***/
    },
    /* 7 */
    /***/ function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var syntax_1 = __webpack_require__(2);
      /* tslint:disable:max-classes-per-file */
      var ArrayExpression = (function () {
        function ArrayExpression(elements) {
          this.type = syntax_1.Syntax.ArrayExpression;
          this.elements = elements;
        }
        return ArrayExpression;
      })();
      exports.ArrayExpression = ArrayExpression;
      var ArrayPattern = (function () {
        function ArrayPattern(elements) {
          this.type = syntax_1.Syntax.ArrayPattern;
          this.elements = elements;
        }
        return ArrayPattern;
      })();
      exports.ArrayPattern = ArrayPattern;
      var ArrowFunctionExpression = (function () {
        function ArrowFunctionExpression(params, body, expression) {
          this.type = syntax_1.Syntax.ArrowFunctionExpression;
          this.id = null;
          this.params = params;
          this.body = body;
          this.generator = false;
          this.expression = expression;
          this.async = false;
        }
        return ArrowFunctionExpression;
      })();
      exports.ArrowFunctionExpression = ArrowFunctionExpression;
      var AssignmentExpression = (function () {
        function AssignmentExpression(operator, left, right) {
          this.type = syntax_1.Syntax.AssignmentExpression;
          this.operator = operator;
          this.left = left;
          this.right = right;
        }
        return AssignmentExpression;
      })();
      exports.AssignmentExpression = AssignmentExpression;
      var AssignmentPattern = (function () {
        function AssignmentPattern(left, right) {
          this.type = syntax_1.Syntax.AssignmentPattern;
          this.left = left;
          this.right = right;
        }
        return AssignmentPattern;
      })();
      exports.AssignmentPattern = AssignmentPattern;
      var AsyncArrowFunctionExpression = (function () {
        function AsyncArrowFunctionExpression(params, body, expression) {
          this.type = syntax_1.Syntax.ArrowFunctionExpression;
          this.id = null;
          this.params = params;
          this.body = body;
          this.generator = false;
          this.expression = expression;
          this.async = true;
        }
        return AsyncArrowFunctionExpression;
      })();
      exports.AsyncArrowFunctionExpression = AsyncArrowFunctionExpression;
      var AsyncFunctionDeclaration = (function () {
        function AsyncFunctionDeclaration(id, params, body) {
          this.type = syntax_1.Syntax.FunctionDeclaration;
          this.id = id;
          this.params = params;
          this.body = body;
          this.generator = false;
          this.expression = false;
          this.async = true;
        }
        return AsyncFunctionDeclaration;
      })();
      exports.AsyncFunctionDeclaration = AsyncFunctionDeclaration;
      var AsyncFunctionExpression = (function () {
        function AsyncFunctionExpression(id, params, body) {
          this.type = syntax_1.Syntax.FunctionExpression;
          this.id = id;
          this.params = params;
          this.body = body;
          this.generator = false;
          this.expression = false;
          this.async = true;
        }
        return AsyncFunctionExpression;
      })();
      exports.AsyncFunctionExpression = AsyncFunctionExpression;
      var AwaitExpression = (function () {
        function AwaitExpression(argument) {
          this.type = syntax_1.Syntax.AwaitExpression;
          this.argument = argument;
        }
        return AwaitExpression;
      })();
      exports.AwaitExpression = AwaitExpression;
      var BinaryExpression = (function () {
        function BinaryExpression(operator, left, right) {
          var logical = operator === "||" || operator === "&&";
          this.type = logical
            ? syntax_1.Syntax.LogicalExpression
            : syntax_1.Syntax.BinaryExpression;
          this.operator = operator;
          this.left = left;
          this.right = right;
        }
        return BinaryExpression;
      })();
      exports.BinaryExpression = BinaryExpression;
      var BlockStatement = (function () {
        function BlockStatement(body) {
          this.type = syntax_1.Syntax.BlockStatement;
          this.body = body;
        }
        return BlockStatement;
      })();
      exports.BlockStatement = BlockStatement;
      var BreakStatement = (function () {
        function BreakStatement(label) {
          this.type = syntax_1.Syntax.BreakStatement;
          this.label = label;
        }
        return BreakStatement;
      })();
      exports.BreakStatement = BreakStatement;
      var CallExpression = (function () {
        function CallExpression(callee, args) {
          this.type = syntax_1.Syntax.CallExpression;
          this.callee = callee;
          this.arguments = args;
        }
        return CallExpression;
      })();
      exports.CallExpression = CallExpression;
      var CatchClause = (function () {
        function CatchClause(param, body) {
          this.type = syntax_1.Syntax.CatchClause;
          this.param = param;
          this.body = body;
        }
        return CatchClause;
      })();
      exports.CatchClause = CatchClause;
      var ClassBody = (function () {
        function ClassBody(body) {
          this.type = syntax_1.Syntax.ClassBody;
          this.body = body;
        }
        return ClassBody;
      })();
      exports.ClassBody = ClassBody;
      var ClassDeclaration = (function () {
        function ClassDeclaration(id, superClass, body) {
          this.type = syntax_1.Syntax.ClassDeclaration;
          this.id = id;
          this.superClass = superClass;
          this.body = body;
        }
        return ClassDeclaration;
      })();
      exports.ClassDeclaration = ClassDeclaration;
      var ClassExpression = (function () {
        function ClassExpression(id, superClass, body) {
          this.type = syntax_1.Syntax.ClassExpression;
          this.id = id;
          this.superClass = superClass;
          this.body = body;
        }
        return ClassExpression;
      })();
      exports.ClassExpression = ClassExpression;
      var ComputedMemberExpression = (function () {
        function ComputedMemberExpression(object, property) {
          this.type = syntax_1.Syntax.MemberExpression;
          this.computed = true;
          this.object = object;
          this.property = property;
        }
        return ComputedMemberExpression;
      })();
      exports.ComputedMemberExpression = ComputedMemberExpression;
      var ConditionalExpression = (function () {
        function ConditionalExpression(test, consequent, alternate) {
          this.type = syntax_1.Syntax.ConditionalExpression;
          this.test = test;
          this.consequent = consequent;
          this.alternate = alternate;
        }
        return ConditionalExpression;
      })();
      exports.ConditionalExpression = ConditionalExpression;
      var ContinueStatement = (function () {
        function ContinueStatement(label) {
          this.type = syntax_1.Syntax.ContinueStatement;
          this.label = label;
        }
        return ContinueStatement;
      })();
      exports.ContinueStatement = ContinueStatement;
      var DebuggerStatement = (function () {
        function DebuggerStatement() {
          this.type = syntax_1.Syntax.DebuggerStatement;
        }
        return DebuggerStatement;
      })();
      exports.DebuggerStatement = DebuggerStatement;
      var Directive = (function () {
        function Directive(expression, directive) {
          this.type = syntax_1.Syntax.ExpressionStatement;
          this.expression = expression;
          this.directive = directive;
        }
        return Directive;
      })();
      exports.Directive = Directive;
      var DoWhileStatement = (function () {
        function DoWhileStatement(body, test) {
          this.type = syntax_1.Syntax.DoWhileStatement;
          this.body = body;
          this.test = test;
        }
        return DoWhileStatement;
      })();
      exports.DoWhileStatement = DoWhileStatement;
      var EmptyStatement = (function () {
        function EmptyStatement() {
          this.type = syntax_1.Syntax.EmptyStatement;
        }
        return EmptyStatement;
      })();
      exports.EmptyStatement = EmptyStatement;
      var ExportAllDeclaration = (function () {
        function ExportAllDeclaration(source) {
          this.type = syntax_1.Syntax.ExportAllDeclaration;
          this.source = source;
        }
        return ExportAllDeclaration;
      })();
      exports.ExportAllDeclaration = ExportAllDeclaration;
      var ExportDefaultDeclaration = (function () {
        function ExportDefaultDeclaration(declaration) {
          this.type = syntax_1.Syntax.ExportDefaultDeclaration;
          this.declaration = declaration;
        }
        return ExportDefaultDeclaration;
      })();
      exports.ExportDefaultDeclaration = ExportDefaultDeclaration;
      var ExportNamedDeclaration = (function () {
        function ExportNamedDeclaration(declaration, specifiers, source) {
          this.type = syntax_1.Syntax.ExportNamedDeclaration;
          this.declaration = declaration;
          this.specifiers = specifiers;
          this.source = source;
        }
        return ExportNamedDeclaration;
      })();
      exports.ExportNamedDeclaration = ExportNamedDeclaration;
      var ExportSpecifier = (function () {
        function ExportSpecifier(local, exported) {
          this.type = syntax_1.Syntax.ExportSpecifier;
          this.exported = exported;
          this.local = local;
        }
        return ExportSpecifier;
      })();
      exports.ExportSpecifier = ExportSpecifier;
      var ExpressionStatement = (function () {
        function ExpressionStatement(expression) {
          this.type = syntax_1.Syntax.ExpressionStatement;
          this.expression = expression;
        }
        return ExpressionStatement;
      })();
      exports.ExpressionStatement = ExpressionStatement;
      var ForInStatement = (function () {
        function ForInStatement(left, right, body) {
          this.type = syntax_1.Syntax.ForInStatement;
          this.left = left;
          this.right = right;
          this.body = body;
          this.each = false;
        }
        return ForInStatement;
      })();
      exports.ForInStatement = ForInStatement;
      var ForOfStatement = (function () {
        function ForOfStatement(left, right, body) {
          this.type = syntax_1.Syntax.ForOfStatement;
          this.left = left;
          this.right = right;
          this.body = body;
        }
        return ForOfStatement;
      })();
      exports.ForOfStatement = ForOfStatement;
      var ForStatement = (function () {
        function ForStatement(init, test, update, body) {
          this.type = syntax_1.Syntax.ForStatement;
          this.init = init;
          this.test = test;
          this.update = update;
          this.body = body;
        }
        return ForStatement;
      })();
      exports.ForStatement = ForStatement;
      var FunctionDeclaration = (function () {
        function FunctionDeclaration(id, params, body, generator) {
          this.type = syntax_1.Syntax.FunctionDeclaration;
          this.id = id;
          this.params = params;
          this.body = body;
          this.generator = generator;
          this.expression = false;
          this.async = false;
        }
        return FunctionDeclaration;
      })();
      exports.FunctionDeclaration = FunctionDeclaration;
      var FunctionExpression = (function () {
        function FunctionExpression(id, params, body, generator) {
          this.type = syntax_1.Syntax.FunctionExpression;
          this.id = id;
          this.params = params;
          this.body = body;
          this.generator = generator;
          this.expression = false;
          this.async = false;
        }
        return FunctionExpression;
      })();
      exports.FunctionExpression = FunctionExpression;
      var Identifier = (function () {
        function Identifier(name) {
          this.type = syntax_1.Syntax.Identifier;
          this.name = name;
        }
        return Identifier;
      })();
      exports.Identifier = Identifier;
      var IfStatement = (function () {
        function IfStatement(test, consequent, alternate) {
          this.type = syntax_1.Syntax.IfStatement;
          this.test = test;
          this.consequent = consequent;
          this.alternate = alternate;
        }
        return IfStatement;
      })();
      exports.IfStatement = IfStatement;
      var ImportDeclaration = (function () {
        function ImportDeclaration(specifiers, source) {
          this.type = syntax_1.Syntax.ImportDeclaration;
          this.specifiers = specifiers;
          this.source = source;
        }
        return ImportDeclaration;
      })();
      exports.ImportDeclaration = ImportDeclaration;
      var ImportDefaultSpecifier = (function () {
        function ImportDefaultSpecifier(local) {
          this.type = syntax_1.Syntax.ImportDefaultSpecifier;
          this.local = local;
        }
        return ImportDefaultSpecifier;
      })();
      exports.ImportDefaultSpecifier = ImportDefaultSpecifier;
      var ImportNamespaceSpecifier = (function () {
        function ImportNamespaceSpecifier(local) {
          this.type = syntax_1.Syntax.ImportNamespaceSpecifier;
          this.local = local;
        }
        return ImportNamespaceSpecifier;
      })();
      exports.ImportNamespaceSpecifier = ImportNamespaceSpecifier;
      var ImportSpecifier = (function () {
        function ImportSpecifier(local, imported) {
          this.type = syntax_1.Syntax.ImportSpecifier;
          this.local = local;
          this.imported = imported;
        }
        return ImportSpecifier;
      })();
      exports.ImportSpecifier = ImportSpecifier;
      var LabeledStatement = (function () {
        function LabeledStatement(label, body) {
          this.type = syntax_1.Syntax.LabeledStatement;
          this.label = label;
          this.body = body;
        }
        return LabeledStatement;
      })();
      exports.LabeledStatement = LabeledStatement;
      var Literal = (function () {
        function Literal(value, raw) {
          this.type = syntax_1.Syntax.Literal;
          this.value = value;
          this.raw = raw;
        }
        return Literal;
      })();
      exports.Literal = Literal;
      var MetaProperty = (function () {
        function MetaProperty(meta, property) {
          this.type = syntax_1.Syntax.MetaProperty;
          this.meta = meta;
          this.property = property;
        }
        return MetaProperty;
      })();
      exports.MetaProperty = MetaProperty;
      var MethodDefinition = (function () {
        function MethodDefinition(key, computed, value, kind, isStatic) {
          this.type = syntax_1.Syntax.MethodDefinition;
          this.key = key;
          this.computed = computed;
          this.value = value;
          this.kind = kind;
          this.static = isStatic;
        }
        return MethodDefinition;
      })();
      exports.MethodDefinition = MethodDefinition;
      var Module = (function () {
        function Module(body) {
          this.type = syntax_1.Syntax.Program;
          this.body = body;
          this.sourceType = "module";
        }
        return Module;
      })();
      exports.Module = Module;
      var NewExpression = (function () {
        function NewExpression(callee, args) {
          this.type = syntax_1.Syntax.NewExpression;
          this.callee = callee;
          this.arguments = args;
        }
        return NewExpression;
      })();
      exports.NewExpression = NewExpression;
      var ObjectExpression = (function () {
        function ObjectExpression(properties) {
          this.type = syntax_1.Syntax.ObjectExpression;
          this.properties = properties;
        }
        return ObjectExpression;
      })();
      exports.ObjectExpression = ObjectExpression;
      var ObjectPattern = (function () {
        function ObjectPattern(properties) {
          this.type = syntax_1.Syntax.ObjectPattern;
          this.properties = properties;
        }
        return ObjectPattern;
      })();
      exports.ObjectPattern = ObjectPattern;
      var Property = (function () {
        function Property(kind, key, computed, value, method, shorthand) {
          this.type = syntax_1.Syntax.Property;
          this.key = key;
          this.computed = computed;
          this.value = value;
          this.kind = kind;
          this.method = method;
          this.shorthand = shorthand;
        }
        return Property;
      })();
      exports.Property = Property;
      var RegexLiteral = (function () {
        function RegexLiteral(value, raw, pattern, flags) {
          this.type = syntax_1.Syntax.Literal;
          this.value = value;
          this.raw = raw;
          this.regex = { pattern: pattern, flags: flags };
        }
        return RegexLiteral;
      })();
      exports.RegexLiteral = RegexLiteral;
      var RestElement = (function () {
        function RestElement(argument) {
          this.type = syntax_1.Syntax.RestElement;
          this.argument = argument;
        }
        return RestElement;
      })();
      exports.RestElement = RestElement;
      var ReturnStatement = (function () {
        function ReturnStatement(argument) {
          this.type = syntax_1.Syntax.ReturnStatement;
          this.argument = argument;
        }
        return ReturnStatement;
      })();
      exports.ReturnStatement = ReturnStatement;
      var Script = (function () {
        function Script(body) {
          this.type = syntax_1.Syntax.Program;
          this.body = body;
          this.sourceType = "script";
        }
        return Script;
      })();
      exports.Script = Script;
      var SequenceExpression = (function () {
        function SequenceExpression(expressions) {
          this.type = syntax_1.Syntax.SequenceExpression;
          this.expressions = expressions;
        }
        return SequenceExpression;
      })();
      exports.SequenceExpression = SequenceExpression;
      var SpreadElement = (function () {
        function SpreadElement(argument) {
          this.type = syntax_1.Syntax.SpreadElement;
          this.argument = argument;
        }
        return SpreadElement;
      })();
      exports.SpreadElement = SpreadElement;
      var StaticMemberExpression = (function () {
        function StaticMemberExpression(object, property) {
          this.type = syntax_1.Syntax.MemberExpression;
          this.computed = false;
          this.object = object;
          this.property = property;
        }
        return StaticMemberExpression;
      })();
      exports.StaticMemberExpression = StaticMemberExpression;
      var Super = (function () {
        function Super() {
          this.type = syntax_1.Syntax.Super;
        }
        return Super;
      })();
      exports.Super = Super;
      var SwitchCase = (function () {
        function SwitchCase(test, consequent) {
          this.type = syntax_1.Syntax.SwitchCase;
          this.test = test;
          this.consequent = consequent;
        }
        return SwitchCase;
      })();
      exports.SwitchCase = SwitchCase;
      var SwitchStatement = (function () {
        function SwitchStatement(discriminant, cases) {
          this.type = syntax_1.Syntax.SwitchStatement;
          this.discriminant = discriminant;
          this.cases = cases;
        }
        return SwitchStatement;
      })();
      exports.SwitchStatement = SwitchStatement;
      var TaggedTemplateExpression = (function () {
        function TaggedTemplateExpression(tag, quasi) {
          this.type = syntax_1.Syntax.TaggedTemplateExpression;
          this.tag = tag;
          this.quasi = quasi;
        }
        return TaggedTemplateExpression;
      })();
      exports.TaggedTemplateExpression = TaggedTemplateExpression;
      var TemplateElement = (function () {
        function TemplateElement(value, tail) {
          this.type = syntax_1.Syntax.TemplateElement;
          this.value = value;
          this.tail = tail;
        }
        return TemplateElement;
      })();
      exports.TemplateElement = TemplateElement;
      var TemplateLiteral = (function () {
        function TemplateLiteral(quasis, expressions) {
          this.type = syntax_1.Syntax.TemplateLiteral;
          this.quasis = quasis;
          this.expressions = expressions;
        }
        return TemplateLiteral;
      })();
      exports.TemplateLiteral = TemplateLiteral;
      var ThisExpression = (function () {
        function ThisExpression() {
          this.type = syntax_1.Syntax.ThisExpression;
        }
        return ThisExpression;
      })();
      exports.ThisExpression = ThisExpression;
      var ThrowStatement = (function () {
        function ThrowStatement(argument) {
          this.type = syntax_1.Syntax.ThrowStatement;
          this.argument = argument;
        }
        return ThrowStatement;
      })();
      exports.ThrowStatement = ThrowStatement;
      var TryStatement = (function () {
        function TryStatement(block, handler, finalizer) {
          this.type = syntax_1.Syntax.TryStatement;
          this.block = block;
          this.handler = handler;
          this.finalizer = finalizer;
        }
        return TryStatement;
      })();
      exports.TryStatement = TryStatement;
      var UnaryExpression = (function () {
        function UnaryExpression(operator, argument) {
          this.type = syntax_1.Syntax.UnaryExpression;
          this.operator = operator;
          this.argument = argument;
          this.prefix = true;
        }
        return UnaryExpression;
      })();
      exports.UnaryExpression = UnaryExpression;
      var UpdateExpression = (function () {
        function UpdateExpression(operator, argument, prefix) {
          this.type = syntax_1.Syntax.UpdateExpression;
          this.operator = operator;
          this.argument = argument;
          this.prefix = prefix;
        }
        return UpdateExpression;
      })();
      exports.UpdateExpression = UpdateExpression;
      var VariableDeclaration = (function () {
        function VariableDeclaration(declarations, kind) {
          this.type = syntax_1.Syntax.VariableDeclaration;
          this.declarations = declarations;
          this.kind = kind;
        }
        return VariableDeclaration;
      })();
      exports.VariableDeclaration = VariableDeclaration;
      var VariableDeclarator = (function () {
        function VariableDeclarator(id, init) {
          this.type = syntax_1.Syntax.VariableDeclarator;
          this.id = id;
          this.init = init;
        }
        return VariableDeclarator;
      })();
      exports.VariableDeclarator = VariableDeclarator;
      var WhileStatement = (function () {
        function WhileStatement(test, body) {
          this.type = syntax_1.Syntax.WhileStatement;
          this.test = test;
          this.body = body;
        }
        return WhileStatement;
      })();
      exports.WhileStatement = WhileStatement;
      var WithStatement = (function () {
        function WithStatement(object, body) {
          this.type = syntax_1.Syntax.WithStatement;
          this.object = object;
          this.body = body;
        }
        return WithStatement;
      })();
      exports.WithStatement = WithStatement;
      var YieldExpression = (function () {
        function YieldExpression(argument, delegate) {
          this.type = syntax_1.Syntax.YieldExpression;
          this.argument = argument;
          this.delegate = delegate;
        }
        return YieldExpression;
      })();
      exports.YieldExpression = YieldExpression;

      /***/
    },
    /* 8 */
    /***/ function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var assert_1 = __webpack_require__(9);
      var error_handler_1 = __webpack_require__(10);
      var messages_1 = __webpack_require__(11);
      var Node = __webpack_require__(7);
      var scanner_1 = __webpack_require__(12);
      var syntax_1 = __webpack_require__(2);
      var token_1 = __webpack_require__(13);
      var ArrowParameterPlaceHolder = "ArrowParameterPlaceHolder";
      var Parser = Sift;
      exports.Parser = Parser;

      /***/
    },
    /* 9 */
    /***/ function (module, exports) {
      "use strict";
      // Ensure the condition is true, otherwise throw an error.
      // This is only to have a better contract semantic, i.e. another safety net
      // to catch a logic error. The condition shall be fulfilled in normal case.
      // Do NOT use this to enforce a certain condition on any user input.
      Object.defineProperty(exports, "__esModule", { value: true });
      function assert(condition, message) {
        /* istanbul ignore if */
        if (!condition) {
          throw new Error("ASSERT: " + message);
        }
      }
      exports.assert = assert;

      /***/
    },
    /* 10 */
    /***/ function (module, exports) {
      "use strict";
      /* tslint:disable:max-classes-per-file */
      Object.defineProperty(exports, "__esModule", { value: true });
      var ErrorHandler = (function () {
        function ErrorHandler() {
          this.errors = [];
          this.tolerant = false;
        }
        ErrorHandler.prototype.recordError = function (error) {
          this.errors.push(error);
        };
        ErrorHandler.prototype.tolerate = function (error) {
          if (this.tolerant) {
            this.recordError(error);
          } else {
            throw error;
          }
        };
        ErrorHandler.prototype.constructError = function (msg, column) {
          var error = new Error(msg);
          try {
            throw error;
          } catch (base) {
            /* istanbul ignore else */
            if (Object.create && Object.defineProperty) {
              error = Object.create(base);
              Object.defineProperty(error, "column", { value: column });
            }
          }
          /* istanbul ignore next */
          return error;
        };
        ErrorHandler.prototype.createError = function (
          index,
          line,
          col,
          description
        ) {
          var msg = "Line " + line + ": " + description;
          var error = this.constructError(msg, col);
          error.index = index;
          error.lineNumber = line;
          error.description = description;
          return error;
        };
        ErrorHandler.prototype.throwError = function (
          index,
          line,
          col,
          description
        ) {
          throw this.createError(index, line, col, description);
        };
        ErrorHandler.prototype.tolerateError = function (
          index,
          line,
          col,
          description
        ) {
          var error = this.createError(index, line, col, description);
          if (this.tolerant) {
            this.recordError(error);
          } else {
            throw error;
          }
        };
        return ErrorHandler;
      })();
      exports.ErrorHandler = ErrorHandler;

      /***/
    },
    /* 11 */
    /***/ function (module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      // Error messages should be identical to V8.
      exports.Messages = Messages;

      /***/
    },
    /* 12 */
    /***/ function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var assert_1 = __webpack_require__(9);
      var character_1 = __webpack_require__(4);
      var messages_1 = __webpack_require__(11);
      function hexValue(ch) {
        return "0123456789abcdef".indexOf(ch.toLowerCase());
      }
      function octalValue(ch) {
        return "01234567".indexOf(ch);
      }
      var Scanner = Looker;
      exports.Scanner = Scanner;

      /***/
    },
    /* 13 */
    /***/ function (module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TokenName = {};
      exports.TokenName[1 /* BooleanLiteral */] = "Boolean";
      exports.TokenName[2 /* EOF */] = "<end>";
      exports.TokenName[3 /* Identifier */] = "Identifier";
      exports.TokenName[4 /* Keyword */] = "Keyword";
      exports.TokenName[5 /* NullLiteral */] = "Null";
      exports.TokenName[6 /* NumericLiteral */] = "Numeric";
      exports.TokenName[7 /* Punctuator */] = "Punctuator";
      exports.TokenName[8 /* StringLiteral */] = "String";
      exports.TokenName[9 /* RegularExpression */] = "RegularExpression";
      exports.TokenName[10 /* Template */] = "Template";

      /***/
    },
    /* 14 */
    /***/ function (module, exports) {
      "use strict";
      // Generated by generate-xhtml-entities.js. DO NOT MODIFY!
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.XHTMLEntities = XHTMLEntities;

      /***/
    },
    /* 15 */
    /***/ function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var error_handler_1 = __webpack_require__(10);
      var scanner_1 = __webpack_require__(12);
      var token_1 = __webpack_require__(13);
      var Reader = Literate;
      var Tokenizer = Scribe;
      exports.Tokenizer = Tokenizer;

      /***/
    }
    /******/
  ];
export default function Closures() {
  return (() => {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {}; // The require function

    /******/ /******/ function __webpack_require__(moduleId) {
      /******/ // Check if module is in cache
      /* istanbul ignore if */
      /******/ if (installedModules[moduleId])
        /******/ return installedModules[moduleId].exports; // Create a new module (and put it into the cache)

      /******/ /******/ var module = (installedModules[moduleId] = {
        /******/ exports: {},
        /******/ id: moduleId,
        /******/ loaded: false
        /******/
      }); // Execute the module function

      /******/ /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      ); // Flag the module as loaded

      /******/ /******/ module.loaded = true; // Return the exports of the module

      /******/ /******/ return module.exports;
      /******/
    } // expose the modules object (__webpack_modules__)

    /******/ /******/ __webpack_require__.m = modules; // expose the module cache

    /******/ /******/ __webpack_require__.c = installedModules; // __webpack_public_path__

    /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports

    /******/ /******/ return __webpack_require__(0);
    /******/
  })();
}
