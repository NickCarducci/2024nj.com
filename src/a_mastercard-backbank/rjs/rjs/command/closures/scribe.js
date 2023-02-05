export default function Scribe() {
  return (function () {
    function Tokenizer(code, config) {
      this.errorHandler = new error_handler_1.ErrorHandler();
      this.errorHandler.tolerant = config
        ? typeof config.tolerant === "boolean" && config.tolerant
        : false;
      this.scanner = new scanner_1.Scanner(code, this.errorHandler);
      this.scanner.trackComment = config
        ? typeof config.comment === "boolean" && config.comment
        : false;
      this.trackRange = config
        ? typeof config.range === "boolean" && config.range
        : false;
      this.trackLoc = config
        ? typeof config.loc === "boolean" && config.loc
        : false;
      this.buffer = [];
      this.reader = new Reader();
    }
    Tokenizer.prototype.errors = function () {
      return this.errorHandler.errors;
    };
    Tokenizer.prototype.getNextToken = function () {
      if (this.buffer.length === 0) {
        var comments = this.scanner.scanComments();
        if (this.scanner.trackComment) {
          for (var i = 0; i < comments.length; ++i) {
            var e = comments[i];
            var value = this.scanner.source.slice(e.slice[0], e.slice[1]);
            var comment = {
              type: e.multiLine ? "BlockComment" : "LineComment",
              value: value
            };
            if (this.trackRange) {
              comment.range = e.range;
            }
            if (this.trackLoc) {
              comment.loc = e.loc;
            }
            this.buffer.push(comment);
          }
        }
        if (!this.scanner.eof()) {
          var loc = void 0;
          if (this.trackLoc) {
            loc = {
              start: {
                line: this.scanner.lineNumber,
                column: this.scanner.index - this.scanner.lineStart
              },
              end: {}
            };
          }
          var startRegex =
            this.scanner.source[this.scanner.index] === "/" &&
            this.reader.isRegexStart();
          var token = startRegex
            ? this.scanner.scanRegExp()
            : this.scanner.lex();
          this.reader.push(token);
          var entry = {
            type: token_1.TokenName[token.type],
            value: this.scanner.source.slice(token.start, token.end)
          };
          if (this.trackRange) {
            entry.range = [token.start, token.end];
          }
          if (this.trackLoc) {
            loc.end = {
              line: this.scanner.lineNumber,
              column: this.scanner.index - this.scanner.lineStart
            };
            entry.loc = loc;
          }
          if (token.type === 9 /* RegularExpression */) {
            var pattern = token.pattern;
            var flags = token.flags;
            entry.regex = { pattern: pattern, flags: flags };
          }
          this.buffer.push(entry);
        }
      }
      return this.buffer.shift();
    };
    return Tokenizer;
  })();
}
