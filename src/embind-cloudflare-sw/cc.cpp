#include <fstream>
#include <string>
//https://www.tutorialspoint.com/c_standard_library/index.htm
//https://www.cplusplus.com/reference/clibrary/
/*Each header file has the same name as the C language version but 
with a "c" prefix - and no '.h' extension.
Library:
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
  c --stdlib.header (C Standard General Utilities Library)
  c --string.header (C Strings)
  c --tgmath.header (Type generic math)
  c --time.header (C Time Library)
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
  *priority_queue - Priority queue (class template)

Associative containers:
  set - Set (class template)
  *multiset - Multiple-key set (class template)
  map - Map (class template)
  *multimap - Multiple-key map (class template)

Unordered associative containers:
  unordered_set - Unordered Set (class template)
  *unordered_multiset - Unordered Multiset (class template)
  unordered_map - Unordered Map (class template)
  *unordered_multimap - Unordered Multimap (class template)
*/
/*
iostream (char instantitation) library:
Classes:
  ios_base (Base class for streams)
  ios (Base class for streams, type-dependent components)
  istream (Input stream)
  ostream (Output Stream)
  iostream (Input/output stream
  ifstream (Input file stream)
  ofstream (Output file stream)
  fstream (Input/output file stream)
  istringstream (Input string stream)
  ostringstream (Output string stream)
  stringstream (Input/output string stream)
  streambuf (Base buffer class for streams)
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

Manipulators:
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
  if ( dependency.is_open() ) { // always check whether the file is open
    while ( dependency.good() ) {
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