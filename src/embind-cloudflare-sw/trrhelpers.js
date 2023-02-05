function updateTableMap(offset, count) {
  for (var i = offset; i < offset + count; i++) {
    var item = getWasmTableEntry(i);
    if (item) {
      functionsInTableMap.set(item, i);
    }
  }
}
function uleb128Encode(n) {
  if (n < 128) {
    return [n];
  }
  return [n % 128 | 128, n >> 7];
}
function sigToWasmTypes(sig) {
  var typeNames = { i: "i32", j: "i64", f: "f32", d: "f64", p: "i32" };
  var type = {
    parameters: [],
    results: sig[0] === "v" ? [] : [typeNames[sig[0]]]
  };
  for (var i = 1; i < sig.length; ++i) {
    type.parameters.push(typeNames[sig[i]]);
  }
  return type;
}
function convertJsFunctionToWasm(func, sig) {
  if (typeof WebAssembly.Function === "function") {
    return new WebAssembly.Function(sigToWasmTypes(sig), func);
  }
  var typeSection = [1, 96];
  var sigRet = sig.slice(0, 1);
  var sigParam = sig.slice(1);
  var typeCodes = { i: 127, p: 127, j: 126, f: 125, d: 124 };
  typeSection = typeSection.concat(uleb128Encode(sigParam.length));
  for (var i = 0; i < sigParam.length; ++i) {
    typeSection.push(typeCodes[sigParam[i]]);
  }
  if (sigRet === "v") {
    typeSection.push(0);
  } else {
    typeSection = typeSection.concat([1, typeCodes[sigRet]]);
  }
  typeSection = [1].concat(uleb128Encode(typeSection.length), typeSection);
  var byt = [2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0],
    bytes = new Uint8Array(
      [0, 97, 115, 109, 1, 0, 0, 0].concat(typeSection, byt)
    );
  var module = new WebAssembly.Module(bytes);
  var instance = new WebAssembly.Instance(module, { e: { f: func } });
  var wrappedFunc = instance.exports["f"];
  return wrappedFunc;
}
