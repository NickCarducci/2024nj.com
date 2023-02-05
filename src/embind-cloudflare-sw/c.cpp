/*
Is it possible to make a C++ addon just to add a default object 
for node.js named exports or am I Y’ing up the wrong X
*/

//https://stackoverflow.com/questions/72249380/can-asynchronous-module-definitions-be-used-with-abstract-syntax-trees-on-v8-eng/72266883#72266883
//Nan abstraction or otherwise nativeAddonName with V8 

//Global() global proxy object prototype v8, globalReceiver
//scope is document, global is proxy receiver, this

//https://medium.com/@marcinbaraniecki/extending-node-js-with-native-c-modules-63294a91ce4
#include <nan.h>
//native abstractions for node.js
// NAN_METHOD is a Nan macro enabling convenient way of creating native node functions.
// It takes a method's name as a param. By C++ convention, I used the Capital cased name.
NAN_METHOD(Index) {
    // Create an instance of V8's String type
    auto message = Nan::New("Index from C++!").ToLocalChecked();
    // 'info' is a macro's "implicit" parameter - it's a bridge object between C++ and JavaScript runtimes
    // You would use info to both extract the parameters passed to a function as well as set the return value.
    info.GetReturnValue().Set(message);
}

//node-addon-API module for new C++ code (or N-API for C code).
//https://stackoverflow.com/a/59440434/11711280
//NativeAbstractionsforNode ("NAN" <node.js 0.8) vs N-API (^v8.0.0, https://nodejs.org/docs/latest-v10.x/api/addons.html#addons_n_api)?
Napi::Object Initialize(Napi::Env env, Napi::Object exports) {
  //https://github.com/wadey/node-microtime/blob/master/src/microtime.cc
  exports.Set(Napi::String::New(env, "now"), Napi::Function::New(env, Now));
  exports.Set(Napi::String::New(env, "nowDouble"),
              Napi::Function::New(env, NowDouble));
  exports.Set(Napi::String::New(env, "nowStruct"),
              Napi::Function::New(env, NowStruct));
#if defined(_MSC_VER)
  getSystemTime = (WinGetSystemTime)GetProcAddress(
      GetModuleHandle(TEXT("kernel32.dll")), "GetSystemTimePreciseAsFileTime");
  if (getSystemTime == NULL) {
    getSystemTime = &GetSystemTimeAsFileTime;
  }
#endif
  return exports;
}

/*https://medium.com/the-guild/nodejs-advanced-how-to-create-a-native-add-on-using-c-588b4f2248cc
[NAN_METHOD, NODE_MODULE, NAN_MODULE_INIT, NODE_SET_METHOD]
Module Registration and Method Definition macros 
help us register/declare and define new NodeJS modules:methods. 
*/
void Initialize(v8::Local<v8::Object> exports) {
  NODE_SET_METHOD(exports, "whoami", WhoAmI);
  NODE_SET_METHOD(exports, "increment", Increment);
}
int string (strg) {
  v8::String::NewSymbol(strg)
}
int Set (...args) {
  return [string(args[0]), args[1] ? v8::Integer::New(args[1]) : args[2]];
}
void Initialize(v8::Handle<v8::Object> target) {
   errno_symbol = v8::Persistent<v8::String>::New(string("errno"));

   int permSymbolInteger (key,value) {
     return {string("AF_UNIX"): v8::Integer::New(AF_UNIX)}
   }
   /*
   "Back in the old Node.js days the only way to implement a Node.js native nativeAddonName 
   was by using v8, Node.js and libuv libraries. For example, looking at part of 
   the code from on of my oldest native addons which worked for
   the v0.8.x Node.js versions:"
   */
   NODE_SET_METHOD(exports, "key", value);
   target->Set("AF_UNIX", AF_UNIX);
   target->Set("SOCK_STREAM", SOCK_STREAM);
   target->Set("bind", 0, v8::FunctionTemplate::New(Bind)->GetFunction());
   NODE_SET_METHOD(exports, "app", v8::FunctionTemplate::New(Bind)->GetFunction());
}

NODE_SET_METHOD(exports, "index", Index);

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
NODE_API_MODULE(Index, InitAll)
  // NODE_MODULE to NODE_API_MODULE
  //https://github.com/nodejs/node-addon-api/blob/f3124ae0ed117f2fae59dc36c8a7c18fb490666b/tools/conversion.js#L231
//https://medium.com/the-guild/nodejs-advanced-how-to-create-a-native-add-on-using-c-588b4f2248cc
// Create the module called "nativeAddonName" and initialize it with `Initialize` function (created with NAN_MODULE_INIT macro)
NODE_MODULE("nativeAddonName", Initialize);
using Nan::To;
using v8::Local;
using v8::Object;
// void Fn(FunctionCallbackInfo<Value>& info)
NAN_METHOD(Fn) {
  double a = To<double>(info[0]).FromJust();
  double b = To<double>(info[1]).FromJust();
  info.GetReturnValue().Set(a + b);
}
// void Initialize(Local<Object> target)
NAN_MODULE_INIT(Initialize) {
  NODE_SET_METHOD(target, Fn);
}
// First argument would be the entry file's name
NODE_MODULE("nativeAddonName", Initialize);

/*
https://stackoverflow.com/questions/22877875/getting-a-localized-global-scope-for-a-v8-function
  HandleScope scope;
  Handle<Object> contextObject = Context::GetCurrent()->Global();
  contextObject->Set(String::NewSymbol("myGlobalProperty"), Object::New());

  // turn function into string
  String::Utf8Value funcStr(functionToExecute->ToString());
  string funcToExe(*funcStr);
  funcToExe.insert(0, "(");
  funcToExe.append(")()");

  // compile and run the function
  // this will execute within the currently entered and configured context
  Handle<Script> functionScript = Script::New(String::New(funcToExe.c_str()));
  functionScript->Run();
*/
//https://github.com/danbev/learning-v8/blob/master/README.md
/*
//https://vector-of-bool.github.io/2019/03/31/modules-2.html
Namespace/'V8::' scope resolution on 'Global' can't export a namespace.
  https://v8docs.nodesource.com/node-10.15/d5/d40/classv8_1_1_global.html
  //https://chromium.googlesource.com/v8/v8/+/refs/heads/main
//https://en.cppreference.com/w/cpp/language
//https://www.cplusplus.com/reference/clibrary/
Translation-Unit = "linkable"-'.s' files after preprocessing
Definitions(complete-bound-type) declare(potentially-incomplete-type) 'exports' of 
  non-anonymous-and-named-spaces and their internally-linked exports.
  1. "You cannot 'export' entities with internal-linkage," that is, 
  "variable- or function-static and -classes, in an anonymous (declared, not defined) 'namespace'."
  2. A file must start with export and the 'int' (or v8::Local<T>?, return from void) is variable
//https://stackoverflow.com/a/58180924/11711280
  3. template <export typename T> "plz stop"
     export class my_container {};
  4. 'using' can 'export class' a 'namespace::' 'class' and 'int' declarations, 
     not 'static' nor 'class', instead of a global::class (why not int class)
  5. the 'export' block uses the namespace class automatically
*/
//https://en.cppreference.com/w/cpp/language
//https://www.cplusplus.com/reference/clibrary/
//C++ preprocessor'#'
//Objective-C extern and C++ export is EQUIVALENT//https://stackoverflow.com/a/5448272/11711280
/*http://www.cplusplus.com/forum/beginner/242392/

// 86' decorations & name wrangling on function labels
extern "C" int f () Objective;//namespace
//main() entry/exit (programattic-start/-termination)
//The environment block passed to main and wmain is a "frozen" copy of the current environment.
extern "C++" {
  int app=f::App();//Objective-C app
  //c++ app stuff
}
//A namespace cannot be created as an object - a class can.
//"" can add stuff across translation units - "" cannot.
namespace Objective{
  class SomeClass { 
    friend void State()
    void m();
  };
  void Objective::State(){ extern void h(); }
  void Objective::SomeClass::m(){  }
  int App (){}
}
typedef Dummy1<int> DummyInt;
using DummyInt = Dummy1<int>;

`nm -g <the-file>.o | grep myfuncion`
//https://stackoverflow.com/a/45872757/11711280
int | char | std:string

Objective::SomeClass:h
declared definition, namespace Q::V C++17 alt
*/

/*
https://vector-of-bool.github.io/2019/10/07/modules-3.html
  module;
  preprocessing directives
  "the module-delcaration"
  directive #include to declare/define in the fragment

https://www.incredibuild.com/blog/what-you-need-to-do-to-move-on-to-c-20-the-complete-list
  modules are compiled once rather than every time they are included
  not susceptible to issues such as #include file order.

  export module index;
  export class Index {
    public:
      const char* app() {              
        return "done!";
      }
  };
  import index;
  import <iostream>;

  int main() {
    std::cout << Index().app() << '\n';
  }

// Initialize this nativeAddonName to be context-aware.
NODE_MODULE_INIT(/* exports, module, context *) {
  Isolate* isolate = context->GetIsolate();

  // Create a new instance of `AddonData` for this instance of the nativeAddonName and
  // tie its life cycle to that of the Node.js environment.
  AddonData* data = new AddonData(isolate);

  // Wrap the data in a `v8::External` so we can pass it to the method we
  // expose.
  Local<External> external = External::New(isolate, data);

  // Expose the method `Method` to JavaScript, and make sure it receives the
  // per-nativeAddonName-instance data we created above by passing `external` as the
  // third parameter to the `FunctionTemplate` constructor.
  exports->Set(context,
               String::NewFromUtf8(isolate, "method").ToLocalChecked(),
               FunctionTemplate::New(isolate, Method, external)
                  ->GetFunction(context).ToLocalChecked()).FromJust();

//https://medium.com/the-guild/nodejs-advanced-how-to-create-a-native-add-on-using-c-588b4f2248cc
  "Scope Isolate (v8::Isolate), variable Local (v8::Local<T>). 
  Pointers to v8 objects are accessed using locals, the v8 garbage collector necessitates.
  An isolate can be thought of as a container for any number of locals. 
  When you've finished with your locals, simply delete their scope."

  JS--
    let obj = {foo: 'bar'};
  C++--
    Local<Object> obj = New<Object>();
    obj->Set(New<String>("foo").ToLocalChecked(), New<String>("bar").ToLocalChecked());
  
  int pl = null;
  int name = &pl;
    or
  int name * NULL
    or
  void *name = NULL;

  int KeyValue () {
    if(!name)
      Local<Object> name = New<Object>()
    name->Set(New<String>("foo").ToLocalChecked(), New<String>("bar").ToLocalChecked());

  }
}

//ScriptCompiler::ExternalSourceStream
//ScriptCompiler::StreamedSource
//https://stackoverflow.com/a/57681661/11711280
  Local<Function> foo_func = ...;//external

  Local<Module> module = Module::CreateSyntheticModule(
      isolate, name,
      {String::NewFromUtf8(isolate, "foo")},
      [](Local<Context> context, Local<Module> module) {
        module->SetSyntheticModuleExport(String::NewFromUtf8(isolate, "foo"), foo_func);
      });

  link `module` just like a normal source-text module.
*/
//'void' address-type/"declaration" to run 'extern' functions from anywhere (linked f2f) yet only one level up
//the "definition" can return anything, like a context object to global, to which 'void' cancels.

/*http://www.cplusplus.com/forum/beginner/242392/
//namespace Q::V C++17 alt
//extern int f () {return null;};//declare define
namespace Q{//define
    namespace V  {  // Q::V 
      class C { 
        friend void f()
        void m();
      };
      void f();
    }
    void V::f(){ extern void h(); }//::Q::V::h
    void V::C::m()  {}
}
*/
/*
"For a class X, the type of this pointer is ‘X* ‘."
dereference 'this' pointer;//https://www.geeksforgeeks.org/this-pointer-in-c/
  "The compiler supplies an implicit pointer along with the names of the functions"
    delete this; "program can guarantee the instantiated class object,
    declaring/returning every pointer to the deallocated object invalid,
    including the 'this' pointer itself."//https://en.cppreference.com/w/cpp/language/this
*/
/*
int * name=null;(pointer vs address): "A pointer is a variable that stores a memory address."
//https://www.embedded.com/combining-cs-volatile-and-const-keywords/
  "Because the pointer to the hardware register is declared volatile,
  the compiler must always perform each individual write."
//http://www.cs.fsu.edu/~myers/cgs4406/notes/pointers.html
  "When the & is used in declarations it creates a new reference variable
  and when in regular-statementsthe operator means 'address of'"
    int* p; //pointer to an integer, pointing to a valid target,
      just some random value from memory initialized. 
    int n; //integer defined as null when declaring,
    p = &n; //point p at n by using the & operator.
      assigns the "address of n" to the pointer p 
    cout << p; //address store in p 
    cout << *p; //dereference the data being pointed to to get to the target
//"Pass-by-references (&)[ and Pass-by-address, still] is more efficient than
pass-by-value, because IT DOES NOT COPY THE ARGS."
*/
#include <fstream>
#include <string>
#include <chrono>


int getCurrentTime () {
    using namespace std::chrono;
    auto start = high_resolution_clock::now();
    auto finish = high_resolution_clock::now();
    duration<double> elapsed = finish - start; // elapsed time in seconds
    return elapsed.count();
}

int getCurrentTime () {
    using namespace std::chrono;
    int timeout = 1000;
    milliseconds mil(timeout);//define instance milliseconds setTimeout(f(){},timeout)
    return mil
}
int getCurrentTime () {//https://stackoverflow.com/a/42866908/11711280
    using namespace std;
    chrono::time_point<std::chrono::system_clock> start, end;
    start = chrono::system_clock::now();
    end = chrono::system_clock::now();
    chrono::duration<double> elapsed_seconds = end - start;
    auto x = chrono::duration_cast<chrono::microseconds>(elapsed_seconds);
    return x
}
/*
//CLI processor
  http://faculty.cs.niu.edu/~mcmahon/CS241/Notes/build.html
  -Wall (verbose - print warning messages)
  g++ -Wall -Werror -std=c++11 * _ _.cpp
  * -o open process - '_.cpp' preprocess
  * -E end preprocessor - ('temp'<<stdout)
  * -S stop compilation - '_.s' assembler
  * -c cancel assembly - '_.o'

  g++ -c _.cpp ...
  g++ -o main.exe _.cpp ...
  linker (library-archivist)
  1. '_.o' (object) for each source file,
  2. '_.a.out' (standard disk directories) -> extern functionProto/classDefs, 
  * executable
*/
/*
definitions:
  i"input", o"output", io"inputOutput"
  'atom', (ἄτομος, Greek; atomos):"uncuttable; as in process, not divisible anymore"
  atomic, synchronous:"unable to be broken down;un-break/cutt/interrupt-able CPU operation-step"
  non-atomic, async:"the processor does more work, (https://en.wikipedia.org/wiki/Micro-operation)"
  header: "external variable declarations, macro definitions, type definitions, and function declarations."
  https://www.internalpointers.com/post/lock-free-multithreading-atomic-operations
*/
/*"
  'Atomicity', property of multithreaded operations: since they are indivisible, 
  there is no way for a thread can read another thread's modification half-completions ("data races"). 

...Store and load atomic instructions
  CPU bytes from memory MOV instruction -> x86 architecture
"*/

/*Each header file has the same name as the C language version but 
with a "c" prefix - and no '.h' extension.
  c --assert.header (C Diagnostics Library)
  c --ctype.header (Character handling functions)
  c --errno.header (C Errors)
  c --fenv.header (Floating point[er?] environment rounding)
  c --float.header (Characteristics of floating-point types)
  c --iso646.header (ISO 646 Alternative operator spellings)
  c --limits.header (Sizes of integral types)
  c --locale.header (C localization library)
  c --math.header (C numerics library)
  c --setjmp.header (Non local jumps)
  c --signal.header (C library to handle signals)
  c --stdarg.header (Variable arguments handling)
  c --stddef.header (C Standard definitions)
  c --stdint.header (C Standard integerTypes)
  c --stdio.header (C library to perform Input/Output operations)
*/
#include <stdio.h>
int closeFile () {
  FILE * pFile;
  pFile = fopen ("myfile.txt","wt");
  fprintf (pFile, "fclose example");
  fclose (pFile);
  return 0;
}

char mybuffer[80];
int pointerFlushing() {
   FILE * pFile;
   pFile = fopen ("example.txt","r+");
   if (pFile == NULL) perror ("Error opening file");
   else {
     fputs ("test",pFile);
     fflush (pFile);    // flushing or repositioning required
     fgets (mybuffer,80,pFile);
     puts (mybuffer);
     fclose (pFile);
     return 0;
  }
}
/*
  c --stdlib.header (C Standard General Utilities Library)
  c --string.header (C Strings)
  c --time.header (C Time Library)
  c --tgmath.header (Type generic math)
  c --uchar.header (ASCII Unicode)
  c --wchar.header (ASCII Widechar)
  c --wctype.header (ASCII WidecharType)
*/
/*
'Containers: [
  Sequence: "array","deque","forward_list","list","vector",
  Container-adaptors: "queue","stack",
  Associative: "map","set",
  Unordered-Associative: "unordered_map","unordered_set"
]'
Sequence containers:
  array - Array class (class template)
  vector - Vector (class template)
  deque - Double ended queue (class template)
  forward_list - Forward list (class template)
  list - List (class template)
Container adaptors:
  stack - LIFO stack (class template)
  queue - FIFO queue (class template)
  ?priority_queue - Priority queue (class template)
Associative containers:
  set - Set (class template)
  ?multiset - Multiple-key set (class template)
  map - Map (class template)
  ?multimap - Multiple-key map (class template)
Unordered associative containers:
  unordered_set - Unordered Set (class template)
  ?unordered_multiset - Unordered Multiset (class template)
  unordered_map - Unordered Map (class template)
  ?unordered_multimap - Unordered Multimap (class template)
*/

/*
iostream (char instantitation) library:[
  "fstream",?"iomanip","ios",?"iosfwd","iostream","istream",
  "ostream",?"sstream","streambuf"
]
Definitions:
  i==="input" (writeFile)
  o==="output" (readFile)
  io==="inputOutput" (readOrWriteFile, updateFile)
  *mentioned
Classes - all either are 'wide' prefixes for wchar_t (a C++ inno) or not:
  ios_base (Base class for streams)
    --includes ["wios"]
  *ios (Base class for streams, type-dependent components)
  *istream (Input stream, "standard input and combined input/output stream classes")
    --includes: ["wistream"]
  *ostream (Output Stream, "standard output stream class")
  *iostream (Input/output stream, "standard input/output stream objects")
    --includes: ["ios","streambuf","istream","ostream","iosfwd"].
  ifstream (Input file stream)
  ofstream (Output file stream)
    --includes ["wofstream"]
  *fstream (Input/output file stream)
  istringstream (Input string stream)
  ostringstream (Output string stream)
  stringstream (Input/output string stream, "string stream classes")
  *streambuf (Base buffer class for streams, "streambuf buffer class, to be used in combination with input/output streams")
  filebuf (File stream buffer)
  stringbuf (String stream buffer)
Objects:
  cin (Standard input stream)
  cout (Standard output stream)
  cerr (Standard output stream for errors)
  clog (Standard output stream for logging)
Types:
  fpos (Stream position, class template)
  streamoff (Stream offset, type)
  streampos (Stream position, type)
  streamsize (Stream size, type)
(Parametric) Manipulators:
  boolalpha (Alphanumerical bool values)
  dec (Use decimal base)
  endl (Insert newline and flush)
  ends (Insert null character)
  fixed (Use fixed floating-point notation)
  flush (Flush stream buffer)
  hex (Use hexadecimal base)
  internal (Adjust field by inserting characters at an internal position)
  left (Adjust output to the left)
  noboolalpha (No alphanumerical bool values)
  noshowbase (Do not show numerical base prefixes)
  noshowpoint (Do not show decimal point)
  noshowpos (Do not show positive signs)
  noskipws (Do not skip whitespaces)
  nounitbuf (Do not force flushes after insertions)
  nouppercase (Do not generate upper case letters)
  oct (Use octal base)
  resetiosflags (Reset format flags)
  right (Adjust output to the right)
  scientific (Use scientific floating-point notation)
  setbase (Set basefield flag)
  setfill (Set fill character)
  setiosflags (Set format flags)
  setprecision (Set decimal precision)
  setw (Set field width)
  showbase (Show numerical base prefixes)
  showpoint (Show decimal point)
  showpos (Show positive signs)
  skipws (Skip whitespaces)
  unitbuf (Flush buffer after insertions)
  uppercase (Generate upper-case letters)
  ws (Extract whitespaces)
*/
//"wchar_t, char16_t, char32_t and bool are fundamental types in C++ and 
//therefore are not defined in the corresponding header where they appear in C.
//The same applies to several macros in the header <iso646.h>, which are keywords in C++."
//"the C language header file <stdlib.h> is <cstdlib>"
//https://www.cplusplus.com/reference

//Apply the close() function on the object to close the file.
//End of the body of the else statement.
//The program must return value if it completes successfully.
//End of the main() function body.
//write - guru99
#include <iostream>
#include <fstream>
using namespace std;
int writeFile() {
	fstream my_file;
	my_file.open("my_file.txt", ios::out);
	if (!my_file) {
		cout << "File not created!";
	}
	else {
		cout << "File created successfully!";
		my_file << "Guru99";
		my_file.close();
	}
	return 0;
}

//
int main () {
  std::ifstream dependency("mastercard-places.js")
  std::string output;
  if ( dependency.is_open() ) { // always check whether the file is open
    while ( dependency.good() ) {
      dependency >> output; // pipe file's content into stream
      std::cout << output; // pipe stream's content to standard output
    }
  }
}

int main () {
  std::ifstream dependency("mastercard-places.js")
  std::string output;
  if ( dependency.is_open()) { // always check whether the file is open
    while ( dependency.good()) {
      //output = dependency.get()
      std::getline (dependency, output);
      //console = cout
      std::cout << output << ": " << dependency.tellg() << '\n';; // pipe stream's content to standard output
    }
  }
  dependency.open("mastercard-places.js");
  dependency.clear();
}
//* and -> pointer is copy, or latter run method
//not reference &
int main () {
  v8::Global<v8::Object> ref;
  v8::Isolate* iso
  v8::HandleScope handle_scope(isolate);
  HandleScope handle_scope(env->isolate());
  v8::Local<v8::Object> obj
  void StoreReference(iso, obj) {
    // Create a 'strong' ref to `obj`.
    ref.Reset(iso, obj);//GlobalContext (GC) roots
  }
  // Must be called with a HandleScope around it.
  //Local or Global 'handles', define and call at the same time
  v8::Local<v8::Object> LoadReference(iso) {
    return ref.Get(isolate);
  }
}
//Whenever a Local handle is created, a v8::HandleScope
//or v8::EscapableHandleScope object must exist on the stack.
//v8::Local<v8::Uint8Array> as_uint8 = array.As<v8::IsUint8Array>();
function getFoo(obj) {
  return obj.foo;
}
//getFoo.call(context,obj)
v8::Local<v8::Value> GetFoo(v8::Local<v8::Context> context,
                            v8::Local<v8::Object> obj) {
  //JSobject-'heap' engine-instance
  v8::Isolate* iso = context->GetIsolate();
  v8::HandleScope handle_scope(iso);
  HandleScope handle_scope(env->isolate());
  //v8::EscapableHandleScope handle_scope(isolate);

  // The 'foo_string' handle cannot be returned from this function because
  // it is not “escaped” with `.Escape()`.
  v8::Local<v8::String> foo_string =
      v8::String::NewFromUtf8(iso, "foo").ToLocalChecked();

  v8::Local<v8::Value> return_value;
  if (obj->Get(context, foo_string).ToLocal(&return_value)) {
    return handle_scope.Escape(return_value);
  } else {
    // There was a JS exception! Handle it somehow.
    return v8::Local<v8::Value>();
  }
}

void DefaultPlatform::SetTimeFunctionForTesting(
    DefaultPlatform::TimeFunction time_function) {
  base::MutexGuard guard(&lock_);
  time_function_for_testing_ = time_function;
  // The time function has to be right after the construction of the platform.
  DCHECK(foreground_task_runner_map_.empty());
}
//"The current event loop can be accessed using env->event_loop() given an Environment instance."
//event-loop | https://stackoverflow.com/a/50121471/11711280

//Environment::GetCurrent(context) | main or vm.Context
//"" | Environment::GetCurrent(iso)
//v8::Platform

//libuv uv_handle_t: network sockets or file watchers

int clear () {
  void *hint
  env->AddCleanupHook(callback, hint);
  env->RemoveCleanupHook(callback, hint);
  //HandleWrap
  env->CloseHandle()//tracks concurrent close processes/(uv_close()
  //ReqWrap
  env->IncreaseWaitingRequestCounter();
  env->DecreaseWaitingRequestCounter())
  //js calls on threads->null
}
//traverse constructor properties of native library's metadata
//hidden class for each property stacked-heap, -deoptimized
//Capitalized designates a node.js implementation
//AsyncWrap::HandleWrap//https://stackoverflow.com/a/31507885/11711280
CallbackScope.MakeCallback("before");
//set current async IDs
CallbackScope.MakeCallback("after");
process.nextTick()
//auto "adopts" type (e.g. int) and void (null-type)
int clearByScope (const FunctionCallbackInfo<Value>& args) {
  v8::Isolate* iso = args.GetIsolate();
  Environment* env = Environment::GetCurrent(args);
  uv_passwd_t pwd;//http://docs.libuv.org/en/latest/misc.html?highlight=passwd#c.uv_passwd_t
  const int err = uv_os_get_passwd(&pwd);
  if (err) return;
  auto free_passwd = OnScopeLeave([&]() { uv_os_free_passwd(&pwd); });
}

//https://www.cplusplus.com/reference/vector/vector/
std::vector<chunk_t> read_chunks_std(const std::filesystem::path &p) {
	std::vector<chunk_t> chunks;

	std::ifstream fin(p, std::ios::binary);

	// reserve space
	/*fin.seekg(0, std::ios::end);
	chunks.reserve(1 + fin.tellg() / bytes_per_chunk);
	fin.seekg(0, std::ios::beg);*/

	while (!fin.eof()) {
		auto &chk = chunks.emplace_back();
		chk.resize(bytes_per_chunk);
		fin.read(reinterpret_cast<char*>(chk.data()), bytes_per_chunk);
	}
	if (auto tail = static_cast<size_t>(fin.gcount()); tail > 0) {
		chunks.back().resize(tail);
	} else {
		chunks.pop_back();
	}
	return chunks;
}

//Cloudflare Workers implementation of v8 isolates and their instance-handles
//https://developers.cloudflare.com/workers/learning/how-workers-works/

#include <iostream>
#include <fstream>
//std::filesystem::path path("small_binary_file");
//ReadFile() vs. std::ifstream
//https://www.reddit.com/r/cpp/comments/aob5tx/readfile_turns_out_to_be_slower_than_stdifstream/

//https://github.com/lvandeve/lodepng/blob/master/examples/example_bmp2png.cpp'
using namespace std;
//https://www.guru99.com/cpp-file-read-write-open.html
int readFile() {
	fstream my_file;
	my_file.open("my_file.txt", ios::in);
	if (!my_file) {
		cout << "No such file";
	}
	else {
		char ch;

		while (1) {
			my_file >> ch;
			if (my_file.eof())
				break;

			cout << ch;
		}

	}
	my_file.close();
	return 0;
}

//https://stackoverflow.com/a/18520606/11711280
//"A C++11 thread is an observant-, sorted-, chain of events
//yet memory load-stores-to any addresses.
//https://stackoverflow.com/a/31978762/11711280
//std::atomic<long> value(0);
//value++; //This is an atomic op
//value += 5; //And so is this
//https://stackoverflow.com/a/6319356/11711280
//"there is no standard way to write multi-threaded code for C++98/C++03."
//https://www.tutorialspoint.com/c_standard_library/index.htm