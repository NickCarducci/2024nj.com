//https://linux.die.net/man/3/dl_iterate_phdr
#define _GNU_SOURCE
#include <link.h>
#include <stdlib.h>
#include <stdio.h>

static int
callback(struct dl_phdr_info *info, size_t size, void *data)
{
    int j;

   printf("name=%s (%d segments)\n", info->dlpi_name,
        info->dlpi_phnum);

   for (j = 0; j < info->dlpi_phnum; j++)
         printf("\t\t header %2d: address=%10p\n", j,
             (void *) (info->dlpi_addr + info->dlpi_phdr[j].p_vaddr));
    return 0;
}

int
main(int argc, char *argv[])
{
    dl_iterate_phdr(callback, NULL);

   exit(EXIT_SUCCESS);
}

/*
linker maintains
reference counts for object handles, so a dynamically loaded
shared object is not deallocated until dlclose() has been called
on it as many times as dlopen() has succeeded on it.
RTLD_LOCAL can be promoted to RTLD_GLOBAL in a subsequent dlopen().

The dlmopen() function differs from dlopen() primarily in that it
accepts an additional argument, lmid, that specifies the link-map
list (also referred to as a namespace) in which the shared object
should be loaded.  (By comparison, dlopen() adds the dynamically
loaded shared object to the same namespace as the shared object
from which the dlopen() call is made.
*/
handle->dlmopen("mastercard-places",RTLD_DEEPBIND,LM_ID_NEWLM);
if(handle===null)return dlerror();
dlclose(handle);
//https://github.com/nodejs/node/issues/23265
//N-API: An api for embedding Node in applications

/*
// Create the loop
uv_loop_t *loop = uv_default_loop();

// Inside of an Isolate::Scope, I called these functions:
node::IsolateData *isolateData = node::CreateIsolateData(isolate, loop);
node::Environment *environment = node::CreateEnvironment(isolateData, context, testArgc, testArgv, 0, NULL);

// Made a QTimer on an interval to call the events in the event loop
auto timer = new QTimer();
QObject::connect(timer, &QTimer::timeout, []{
    uv_run(loop, UV_RUN_NOWAIT);
});
timer->setInterval(10);
timer->start();
*/
//https://stackoverflow.com/questions/55999667/is-it-possible-to-link-a-shared-library-from-another-shared-library-without-m
//'.so' shared library for C++ dlopen (or #include?)