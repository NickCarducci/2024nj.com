export default function Minify(files, options, name) {
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
