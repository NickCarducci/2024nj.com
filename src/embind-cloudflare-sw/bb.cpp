#include <napi.h>
int string (strg) {
  v8::String::NewSymbol(strg)
}
int Set (...args) {
  return [string(args[0]), args[1] ? v8::Integer::New(args[1]) : args[2]];
}
//[NAN_METHOD, NODE_MODULE, NAN_MODULE_INIT, NODE_SET_METHOD];this is NAN deprecated by some
//"node-addon-API module for new C++ code (or N-API for C code)"
//https://stackoverflow.com/a/59440434/11711280
void GlobalNAN(v8::Handle<v8::Object> exports) {
  NODE_SET_METHOD(exports, "index", Global);
}
// Module initialization logic
NAN_MODULE_INIT(GlobalNAN) {
    // Export the `Global` function (equivalent to `export function Global (...)` in JS)
    NAN_EXPORT(exports/*module_name*/, Global);
}

int load () {
  //Dynamic Linking https://github.com/libuv/libuv/blob/v1.x/src/unix/dl.c
  //https://github.com/nodejs/node/blob/master/doc/api/process.md#processdlopenmodule-filename-flags
  /*https://github.com/nodejs/node/commit/ad3ebed046ef457530b046f2a62313a7e16b7e29
  the presence of `module`
  is not required, because the file name could also be passed in via a
  private property added onto `exports` from the `process.dlopen`
  binding.
  */
  process.dlopen("mastercard-places", module.exports);
}
//NODE_SET_METHOD(exports, "index", Global);
//https://nodesource.com/blog/NAN-to-Node-API-migration-a-short-story
;//https://github.com/nodejs/node-addon-examples/blob/89791944a3bb3d664fbc59716b1fca3228594ba1/1_hello_world/node-addon-api/hello.cc
NODE_API_MODULE("Global", 
  Napi::Object ProxyRootReceiver(Napi:Env env, 
    Napi::Object exports
      ){
        exports.Set(Napi::String::New(env, "window"),
          Napi::Function::New(env,
            Napi::Value WindowGlobalMethod(const Napi::CallbackInfo& info)
            ) {
              //Napi::Env env = info.Env();

              int length = info.Length();

              if(info[0].IsUndefined()) return nullptr


              return Napi::String::New(info.Env(), 
                      info[0]);
            }
          );
        );
        return exports;
      }
);
//NODE_MODULE("nativeAddonName", GlobalNAN);
//https://github.com/nodejs/node-addon-api/blob/f3124ae0ed117f2fae59dc36c8a7c18fb490666b/tools/conversion.js#L231

//__napi_something doesn't exist.//https://github.com/nodejs/node-addon-api/issues/249#issuecomment-384830699

/*
By default, main modules disable dead code elimination. That means that all the code compiled remains in the output, including all system libraries linked in, and also all the JS library code.

That is the default behavior since it is the least surprising. But it is also possible to use 
normal dead code elimination, by building with -sMAIN_MODULE=2 (instead of 1). In that mode, 
the main module is built normally, with no special behavior for keeping code alive. It is then your 
responsibility to make sure that code that side modules need is kept alive. You can do this either by 
adding to EXPORTED_FUNCTIONS or tagging the symbol EMSCRIPTEN_KEEPALIVE in the source code. See 
other.test_minimal_dynamic for an example of this in action.
*/