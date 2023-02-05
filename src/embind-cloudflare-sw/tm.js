var fs = require("fs");
export default function () {
  var lines = fs.readFileSync(arguments[0] /*infile */, "utf8").split("\n");

  const product = lines
    .map((line, i) => {
      return line
        .replace(/^const \{ TextDecoder \} = .*/, "")
        .replace(/^const \{ TextDecoder, TextEncoder \} = .*/, "")
        .replace(/^const path = .*/, "")
        .replace(/^const bytes = .*/, "")
        .replace(/^const wasmModule = .*/, "")
        .replace(/^const wasmInstance = .*/, "")
        .replace(
          /^wasm = .*/,
          `module.exports.__setWasmModule = function (wasmModule) {
            const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
            wasm = wasmInstance.exports;
            module.exports.__wasm = wasm;
          }`
            .trim()
            .replace(/^      /gm, "")
        )
        .replace(/^module\.exports\.__wasm = .*/, "");
    })
    .filter((line) => line.length > 0)
    .join("\n");

  arguments[1](product); //outfile
}
//https://github.com/peermaps/eyros/blob/e6fdc31539a53c1c8bac9e740959df8e41ed8ed1/pkg/bin/fix.js
//https://github.com/rustwasm/wasm-bindgen/issues/2564
