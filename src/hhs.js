/*- isFunction = (it) => ostring.call(it) === "[object Function]";
  - isArray = (it) => ostring.call(it) === "[object Array]";
  - each =
  - eachReverse = 
  - hasProp = (obj, prop) => hasOwn.call(obj, prop);
  - getOwn = (obj, prop) => hasProp(obj, prop) && obj[prop];
  - eachProp = 
  - mixin = 
  - bind =
  - scripts = () => document.getElementsByTagName("script");
  - makeError = 
  - defaultOnError = (err) => makeError(err.message);
  
  require = ((dependency, setTimeout) => {
   
    - getGlobal = 
    define = (name, deps, callback) => 
    define.amd = 
    - trimDots = 
    - convertName = 
    - removeScript = 
    - hasPathFallback =
    - splitPrefix = 
    - normalize = 
    - Module = 
    - req = (REQUIREJS = (deps, callback, errback, optional) => 
    req.CONFIG = (confi) => req(confi); // globally agreed names for other potential AMD loaders
    req.nextTick =
    if (!require) require = req; //Exportable require
    req.version = version;
    req.isBrowser = isBrowser;
    - newContext = (contextName) => 
      - CONTEXT = {
        CONFIG: {
          waitSeconds: 7,
          baseUrl: "./",
          paths: {},
          bundles: {},
          pkgs: {},
          shim: {},
          config: {}
        }
      };
      - makeModuleMap = 
      - getModule =
      - on =
      - onError = 
      - takeGlobalQueue = 
      - handlers = {
        require: 
        exports:
        module: 
      };
      - cleanRegistry =
      - breakCycle = 
      - checkLoaded = 
      - init = 
      - fetcher = 
      - bindExports =
      
      - defineModule =
      
      - normalizeMod = 
      
      - loadFinish =
        - localRequire = 
        - localreq =
      
      - callPlugin = 
      - enable = 
      
      Module.prototype = {
        init,
        defineDep:
        fetch: fetcher,
        load:
        check: 
        callPlugin,
        enable,
        on: 
        emit:
      };
      - callGetModule = 
      - getScriptData =
      - makeRequire =
          - intakeDefines = 
      - configure = 
  
      CONTEXT = {
        CONFIG,
        contextName,
        registry,
        defined,
        urlFetched,
        defQueue,
        defQueueMap: {},
        Module,
        makeModuleMap,
        nextTick: req.nextTick,
        onError,
        configure,
        makeShimExports: 
        makeRequire,
        enable: 
        completeLoad:
        nameToUrl:
  
        load: 
        execCb: 
        onScriptError: 
        
      };
      CONTEXT.require = CONTEXT.makeRequire();
      return CONTEXT;
    };
    - s = (req.s = 
    req.onError =
    req.createNode =
    req.load = 
    - getInteractiveScript = 
    req.exec = 
  )(require, timeout);
  
  - Required = () => {
    return { require, define };
  };
  export { Required as default };*/
