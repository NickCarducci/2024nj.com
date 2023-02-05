export default function ccall(ident, returnType, argTypes, args, opts) {
  var stackSave = (Module["stackSave"] = function () {
    return (stackSave = Module["stackSave"] = Module["asm"]["stackSave"]).apply(
      null,
      arguments
    );
  });
  var stackRestore = (Module["stackRestore"] = function () {
    return (stackRestore = Module["stackRestore"] =
      Module["asm"]["stackRestore"]).apply(null, arguments);
  });
  var stackAlloc = (Module["stackAlloc"] = function () {
    return (stackAlloc = Module["stackAlloc"] =
      Module["asm"]["stackAlloc"]).apply(null, arguments);
  }); //const assert = (condition, text) => !condition && Module.abort(text);
  function getCFunc(ident) {
    var func = Module["_" + ident];
    return func;
  } //var ALLOC_STACK = 1;
  var UTF8Decoder =
    typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;

  /*
    var POINTER_SIZE = 4;
  function warnOnce(text) {
    if (!warnOnce.shown) warnOnce.shown = {};
    if (!warnOnce.shown[text]) {
      warnOnce.shown[text] = 1;
      err(text);
    }
  }
  
  var tempRet0 = 0;
  var wasmBinary;
  if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
  */
  //var runtimeInitialized = false;
  //var thisProgram = "./this.program";
  /*
  function lengthBytesUTF8(str) {
    var len = 0;
    for (var i = 0; i < str.length; ++i) {
      var u = str.charCodeAt(i);
      if (u >= 55296 && u <= 57343)
        u = (65536 + ((u & 1023) << 10)) | (str.charCodeAt(++i) & 1023);
      if (u <= 127) ++len;
      else if (u <= 2047) len += 2;
      else if (u <= 65535) len += 3;
      else len += 4;
    }
    return len;
  }
  var UTF16Decoder =
    typeof TextDecoder !== "undefined"
      ? new TextDecoder("utf-16le")
      : undefined;*/
  const writeArrayToMemory = (array, buffer) => HEAP8.set(array, buffer);

  /*function writeAsciiToMemory(str, buffer, dontAddNull) {
    for (var i = 0; i < str.length; ++i) {
      HEAP8[buffer++ >> 0] = str.charCodeAt(i);
    }
    if (!dontAddNull) HEAP8[buffer >> 0] = 0;
  }
  var wasmMemory;*/

  var HEAP8,
    HEAPU8; /*, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
    function updateGlobalBufferAndViews(buf) {
    buffer = buf;
    Module["HEAP8"] = HEAP8 = new Int8Array(buf);
    Module["HEAP16"] = HEAP16 = new Int16Array(buf);
    Module["HEAP32"] = HEAP32 = new Int32Array(buf);
    Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
    Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
    Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
    Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
    Module["HEAPF64"] = HEAPF64 = new Float64Array(buf);
  }*/
  var INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 16777216;
  var toC = {
    string: function (str) {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) {
        var len = (str.length << 2) + 1;
        ret = stackAlloc(len);
        (function stringToUTF8(str, outPtr, maxBytesToWrite) {
          return (function stringToUTF8Array(
            str,
            heap,
            outIdx,
            maxBytesToWrite
          ) {
            if (!(maxBytesToWrite > 0)) return 0;
            var startIdx = outIdx;
            var endIdx = outIdx + maxBytesToWrite - 1;
            for (var i = 0; i < str.length; ++i) {
              var u = str.charCodeAt(i);
              if (u >= 55296 && u <= 57343) {
                var u1 = str.charCodeAt(++i);
                u = (65536 + ((u & 1023) << 10)) | (u1 & 1023);
              }
              if (u <= 127) {
                if (outIdx >= endIdx) break;
                heap[outIdx++] = u;
              } else if (u <= 2047) {
                if (outIdx + 1 >= endIdx) break;
                heap[outIdx++] = 192 | (u >> 6);
                heap[outIdx++] = 128 | (u & 63);
              } else if (u <= 65535) {
                if (outIdx + 2 >= endIdx) break;
                heap[outIdx++] = 224 | (u >> 12);
                heap[outIdx++] = 128 | ((u >> 6) & 63);
                heap[outIdx++] = 128 | (u & 63);
              } else {
                if (outIdx + 3 >= endIdx) break;
                heap[outIdx++] = 240 | (u >> 18);
                heap[outIdx++] = 128 | ((u >> 12) & 63);
                heap[outIdx++] = 128 | ((u >> 6) & 63);
                heap[outIdx++] = 128 | (u & 63);
              }
            }
            heap[outIdx] = 0;
            return outIdx - startIdx;
          })(str, HEAPU8, outPtr, maxBytesToWrite);
        })(str, ret, len);
      }
      return ret;
    },
    array: function (arr) {
      var ret = stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    }
  };
  function convertReturnValue(ret) {
    if (returnType === "string") {
      return (function UTF8ToString(ptr, maxBytesToRead) {
        return ptr
          ? (function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead) {
              var endIdx = idx + maxBytesToRead;
              var endPtr = idx;
              while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
              if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
                return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
              } else {
                var str = "";
                while (idx < endPtr) {
                  var u0 = heapOrArray[idx++];
                  if (!(u0 & 128)) {
                    str += String.fromCharCode(u0);
                    continue;
                  }
                  var u1 = heapOrArray[idx++] & 63;
                  if ((u0 & 224) == 192) {
                    str += String.fromCharCode(((u0 & 31) << 6) | u1);
                    continue;
                  }
                  var u2 = heapOrArray[idx++] & 63;
                  if ((u0 & 240) == 224) {
                    u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
                  } else {
                    u0 =
                      ((u0 & 7) << 18) |
                      (u1 << 12) |
                      (u2 << 6) |
                      (heapOrArray[idx++] & 63);
                  }
                  if (u0 < 65536) {
                    str += String.fromCharCode(u0);
                  } else {
                    var ch = u0 - 65536;
                    str += String.fromCharCode(
                      55296 | (ch >> 10),
                      56320 | (ch & 1023)
                    );
                  }
                }
              }
              return str;
            })(HEAPU8, ptr, maxBytesToRead)
          : "";
      })(ret);
    }
    if (returnType === "boolean") return Boolean(ret);
    return ret;
  }
  var func = getCFunc(ident);
  var cArgs = [];
  var stack = 0;
  if (args) {
    for (var i = 0; i < args.length; i++) {
      var converter = toC[argTypes[i]];
      if (converter) {
        if (stack === 0) stack = stackSave();
        cArgs[i] = converter(args[i]);
      } else {
        cArgs[i] = args[i];
      }
    }
  }
  var ret = func.apply(null, cArgs);
  function onDone(ret) {
    if (stack !== 0) stackRestore(stack);
    return convertReturnValue(ret);
  }
  ret = onDone(ret);
  return ret;
}
