
int string (strg) {
  v8::String::NewSymbol(strg)
}
int Set (...args) {
  return [string(args[0]), args[1] ? v8::Integer::New(args[1]) : args[2]];
}

NODE_SET_METHOD(exports, "index", Index);

void Initialize(v8::Handle<v8::Object> target) {
   errno_symbol = v8::Persistent<v8::String>::New(string("errno"));

   int permSymbolInteger (key,value) {
     return {string("AF_UNIX"): v8::Integer::New(AF_UNIX)}
   }
   NODE_SET_METHOD(exports, "key", value);
   target->Set("AF_UNIX", AF_UNIX);
   target->Set("SOCK_STREAM", SOCK_STREAM);
   target->Set("bind", 0, v8::FunctionTemplate::New(Bind)->GetFunction());
   NODE_SET_METHOD(exports, "app", v8::FunctionTemplate::New(Bind)->GetFunction());
}
// Module initialization logic
NAN_MODULE_INIT(Initialize) {
    // Export the `Index` function (equivalent to `export function Index (...)` in JS)
    NAN_EXPORT(target/*module_name*/, Index);
}

//https://nodesource.com/blog/NAN-to-Node-API-migration-a-short-story
void InitAll(Local<Object> exports){
        Nan::Set(exports,
          Nan::New("Index").ToLocalChecked(),
            Nan::GetFunction(
              Nan::New<FunctionTemplate>(Index)
            ).ToLocalChecked();
        );
};
NAN_METHOD(Index) {
   Nan::HandleScope scope;

   Local<Object> buf;
   int length = info.Length();
   assert((length == 2) || (length == 3));
   void* argp = NULL;
   if (!info[0]->IsUint32()) {
       Nan::ThrowTypeError("Argument 0 Must be an Integer");
   }
   if (!info[1]->IsUint32()) {
       Nan::ThrowTypeError("Argument 1 Must be an Integer");
   }
   if ((length == 3) && !info[2]->IsUndefined()) {
       if (info[2]->IsInt32()) {
           argp = reinterpret_cast<void*>(Nan::To<int32_t>(info[2]).ToChecked());
       } else if (info[2]->IsObject()) {
           buf = Nan::To<Object>(info[2]).ToLocalChecked();
           if (!Buffer::HasInstance(buf)) {
               Nan::ThrowTypeError("Argument 2 Must be an Integer or a Buffer");
           }
           argp = Buffer::Data(buf);
       }
   }
   int fd = Nan::To<int32_t>(info[0]).ToChecked();
   unsigned long request = Nan::To<uint32_t>(info[1]).ToChecked();

   int res = Index(fd, request, argp);
   if (res < 0) {
       return Nan::ThrowError(Nan::ErrnoException(errno, "Index", nullptr, nullptr));
   }
   info.GetReturnValue().Set(res);
}
NODE_SET_METHOD(exports, "index", Index);
NODE_API_MODULE(Index, InitAll);
//NODE_MODULE("nativeAddonName", Initialize);