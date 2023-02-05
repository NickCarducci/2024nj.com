--https://github.com/nucular/tcclua/blob/master/examples/get_symbol.lua
--- Demonstrates getting and calling a symbol from a compilation context.
--- `luajit examples/call_symbol.lua`

--ctypes python
local ffi = require("ffi")
local tcc = require("tcc").load()

local state = tcc.new()
assert(state:set_output_type(tcc.OUTPUT.MEMORY))

assert(state:compile_string([[
  double test(double a, double b)
  {
    return a + b;
  }
]]))

assert(state:relocate(tcc.RELOCATE.AUTO))
local test_sym = assert(state:get_symbol("test"))
local test = ffi.cast("double (*)(double, double)", test_sym)
assert(test(1, 2) == 3)

--https://github.com/alexcrichton/rust-ffi-examples/blob/master/c-to-rust/src/lib.rs

--"If it is an interpreted language, however, then you'll need to dynamically load the
--library. How you do this is platform-specific: for instance, on unix-type systems, 
--this can be achieved via the dlopen function." https://stackoverflow.com/a/29449895/11711280
--https://github.com/libuv/libuv/tree/v1.x/src /unix | /win -dl.c http://docs.libuv.org/en/v1.x/api.html
--#include "uv.h" (libuv node.js https://youtu.be/nGn60vDSxQ4?t=1020 BERT)

--https://pubs.opengroup.org/onlinepubs/9699919799/
--......<dlfcn.h>dynamic linking

--dlopen (w_LoadLibrary) - gain access to an executable object file
--dlsym (w_GetProcAddress)
--dlclose (w_FreeLibrary) - close a dlopen() object
--dlerror - get diagnostic information

handle->dlopen("mastercard-backbank",RTLD_LOCAL);--empty will return "global object, RTLD_GLOBAL"
if(handle===null)return dlerror();
responder->dlsym(handle, "namedexport"); -- obtain the address of a symbol from a dlopen() object
dlclose(handle);

handle->dlopen("mastercard-backbank",RTLD_GLOBAL);
if(handle===null)return dlerror();
dlclose(handle);

--https://nodejs.org/api/os.html#dlopen-constants
--https://man7.org/linux/man-pages/man3/dlopen.3.html
--"...'GLOB_DAT' from 'libdep.so', not the exposed 'a.out' linkking-data."
handle->dlopen("mastercard-backbank",RTLD_DEEPBIND);
if(handle===null)return dlerror();
dlclose(handle);

--bba.cpp
handle->dlmopen("mastercard-backbank",RTLD_DEEPBIND,LM_ID_BASE);--LM_ID_NEWLM
if(handle===null)return dlerror();
dlclose(handle);
