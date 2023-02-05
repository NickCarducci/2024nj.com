
#ifndef _VERSION_
#define _VERSION_
#endif _VERSION_

//https://www.ibm.com/docs/en/zos/2.4.0?topic=functions-uname-display-current-operating-system-name

#ifndef _PENGUIN_
#define _PENGUIN_
  #include <sys/utsname.h>
  return uname(&uts);//struct utsname *name
  //uts.sysname, .nodename, .release, .version, .machine
#endif _PENGUIN_

#ifndef _WINDOWS_
#define _WINDOWS_
  //https://docs.microsoft.com/en-us/windows-hardware/drivers/ddi/wdm/nf-wdm-rtlgetversion
  //RtlGetVersion()
  //GetVersionExW()
  #include <windows.h>
  #include <stdio.h>

  NTSYSAPI NTSTATUS RtlGetVersion(
    [out] PRTL_OSVERSIONINFOW lpVersionInformation
  )

  if(lpVersionInformation) return lpVersionInformation;
 
  OSVERSIONINFO osvi;
  BOOL bIsWindowsXPorLater;

  ZeroMemory(&osvi, sizeof(OSVERSIONINFO));
  osvi.dwOSVersionInfoSize = sizeof(OSVERSIONINFO);

  GetVersionEx(&osvi);

  bIsWindowsXPorLater = 
    ( (osvi.dwMajorVersion > 5) ||
    ( (osvi.dwMajorVersion == 5) && (osvi.dwMinorVersion >= 1) ));
  //[[if(bIsWindowsXPorLater)
      printf("The system meets the requirements.\n");
  else printf("The system does not meet the requirements.\n");]]//
  return bIsWindowsXPorLater
#endif _WINDOWS_

#ifndef _INDEX_
#define _INDEX_
  inline Index (){
    //#ifdef,#elif,#elif,#endif 
    if(__linux__){
      return _PENGUIN_()
    }else if( defined(unix) || defined(__unix__) || defined(__unix)){
      return _PENGUIN_()
    }else if( defined(__APPLE__) && defined(__MACH__)){
      return _PENGUIN_()
    }else( defined _WIN32 || defined(__CYGWIN__)){
      return _WINDOWS_()
    }
  }
#endif _INDEX_
