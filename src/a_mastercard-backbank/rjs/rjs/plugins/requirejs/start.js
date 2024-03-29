import ModuleProto from "./moduleproto";

export default function Start(contextName) {
  var inCheckLoaded,
    Module,
    context,
    handlers,
    checkLoadedTimeoutId,
    config = {
      //Defaults. Do not set a default for map
      //config to speed up normalize(), which
      //will run faster if there is no default.
      waitSeconds: 7,
      baseUrl: "./",
      paths: {},
      bundles: {},
      pkgs: {},
      shim: {},
      config: {}
    },
    registry = {},
    //registry of just enabled modules, to speed
    //cycle breaking code when lots of modules
    //are registered, but not activated.
    enabledRegistry = {},
    undefEvents = {},
    defQueue = [],
    defined = {},
    urlFetched = {},
    bundlesMap = {},
    requireCounter = 1,
    unnormalizedCounter = 1;

  /**
   * Trims the . and .. from an array of path segments.
   * It will keep a leading path segment if a .. will become
   * the first path segment, to help with module name lookups,
   * which act like paths, but can be remapped. But the end result,
   * all paths that use this function should look normalized.
   * NOTE: this method MODIFIES the input array.
   * @param {Array} ary the array of path segments.
   */
  function trimDots(ary) {
    var i, part;
    for (i = 0; i < ary.length; i++) {
      part = ary[i];
      if (part === ".") {
        ary.splice(i, 1);
        i -= 1;
      } else if (part === "..") {
        // If at the start, or previous value is still ..,
        // keep them so that when converted to a path it may
        // still work when converted to a path, even though
        // as an ID it is less than ideal. In larger point
        // releases, may be better to just kick out an error.
        if (i === 0 || (i === 1 && ary[2] === "..") || ary[i - 1] === "..") {
          continue;
        } else if (i > 0) {
          ary.splice(i - 1, 2);
          i -= 2;
        }
      }
    }
  }

  /**
   * Given a relative module name, like ./something, normalize it to
   * a real name that can be mapped to a path.
   * @param {String} name the relative name
   * @param {String} baseName a real name that the name arg is relative
   * to.
   * @param {Boolean} applyMap apply the map config to the value. Should
   * only be done if this normalization is for a dependency ID.
   * @returns {String} normalized name
   */
  function normalize(name, baseName, applyMap) {
    var pkgMain,
      mapValue,
      nameParts,
      i,
      j,
      nameSegment,
      lastIndex,
      foundMap,
      foundI,
      foundStarMap,
      starI,
      normalizedBaseParts,
      baseParts = baseName && baseName.split("/"),
      map = config.map,
      starMap = map && map["*"];

    //Adjust any relative paths.
    if (name) {
      name = name.split("/");
      lastIndex = name.length - 1;

      // If wanting node ID compatibility, strip .js from end
      // of IDs. Have to do this here, and not in nameToUrl
      // because node allows either .js or non .js to map
      // to same file.
      if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
        name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, "");
      }

      // Starts with a '.' so need the baseName
      if (name[0].charAt(0) === "." && baseParts) {
        //Convert baseName to array, and lop off the last part,
        //so that . matches that 'directory' and not name of the baseName's
        //module. For instance, baseName of 'one/two/three', maps to
        //'one/two/three.js', but we want the directory, 'one/two' for
        //this normalization.
        normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
        name = normalizedBaseParts.concat(name);
      }

      trimDots(name);
      name = name.join("/");
    }

    //Apply map config if available.
    if (applyMap && map && (baseParts || starMap)) {
      nameParts = name.split("/");

      outerLoop: for (i = nameParts.length; i > 0; i -= 1) {
        nameSegment = nameParts.slice(0, i).join("/");

        if (baseParts) {
          //Find the longest baseName segment match in the config.
          //So, do joins on the biggest to smallest lengths of baseParts.
          for (j = baseParts.length; j > 0; j -= 1) {
            mapValue = getOwn(map, baseParts.slice(0, j).join("/"));

            //baseName segment has config, find if it has one for
            //this name.
            if (mapValue) {
              mapValue = getOwn(mapValue, nameSegment);
              if (mapValue) {
                //Match, update name to the new value.
                foundMap = mapValue;
                foundI = i;
                break outerLoop;
              }
            }
          }
        }

        //Check for a star map match, but just hold on to it,
        //if there is a shorter segment match later in a matching
        //config, then favor over this star map.
        if (!foundStarMap && starMap && getOwn(starMap, nameSegment)) {
          foundStarMap = getOwn(starMap, nameSegment);
          starI = i;
        }
      }

      if (!foundMap && foundStarMap) {
        foundMap = foundStarMap;
        foundI = starI;
      }

      if (foundMap) {
        nameParts.splice(0, foundI, foundMap);
        name = nameParts.join("/");
      }
    }

    // If the name points to a package's name, use
    // the package main instead.
    pkgMain = getOwn(config.pkgs, name);

    return pkgMain ? pkgMain : name;
  }

  function removeScript(name) {
    if (isBrowser) {
      each(scripts(), function (scriptNode) {
        if (
          scriptNode.getAttribute("data-requiremodule") === name &&
          scriptNode.getAttribute("data-requirecontext") === context.contextName
        ) {
          scriptNode.parentNode.removeChild(scriptNode);
          return true;
        }
      });
    }
  }

  function hasPathFallback(id) {
    var pathConfig = getOwn(config.paths, id);
    if (pathConfig && isArray(pathConfig) && pathConfig.length > 1) {
      //Pop off the first array value, since it failed, and
      //retry
      pathConfig.shift();
      context.require.undef(id);

      //Custom require that does not do map translation, since
      //ID is "absolute", already mapped/resolved.
      context.makeRequire(null, {
        skipMap: true
      })([id]);

      return true;
    }
  }

  //Turns a plugin!resource to [plugin, resource]
  //with the plugin being undefined if the name
  //did not have a plugin prefix.
  function splitPrefix(name) {
    var prefix,
      index = name ? name.indexOf("!") : -1;
    if (index > -1) {
      prefix = name.substring(0, index);
      name = name.substring(index + 1, name.length);
    }
    return [prefix, name];
  }

  /**
   * Creates a module mapping that includes plugin prefix, module
   * name, and path. If parentModuleMap is provided it will
   * also normalize the name via require.normalize()
   *
   * @param {String} name the module name
   * @param {String} [parentModuleMap] parent module map
   * for the module name, used to resolve relative names.
   * @param {Boolean} isNormalized: is the ID already normalized.
   * This is true if this call is done for a define() module ID.
   * @param {Boolean} applyMap: apply the map config to the ID.
   * Should only be true if this map is for a dependency.
   *
   * @returns {Object}
   */
  function makeModuleMap(name, parentModuleMap, isNormalized, applyMap) {
    var url,
      pluginModule,
      suffix,
      nameParts,
      prefix = null,
      parentName = parentModuleMap ? parentModuleMap.name : null,
      originalName = name,
      isDefine = true,
      normalizedName = "";

    //If no name, then it means it is a require call, generate an
    //internal name.
    if (!name) {
      isDefine = false;
      name = "_@r" + (requireCounter += 1);
    }

    nameParts = splitPrefix(name);
    prefix = nameParts[0];
    name = nameParts[1];

    if (prefix) {
      prefix = normalize(prefix, parentName, applyMap);
      pluginModule = getOwn(defined, prefix);
    }

    //Account for relative paths if there is a base name.
    if (name) {
      if (prefix) {
        if (isNormalized) {
          normalizedName = name;
        } else if (pluginModule && pluginModule.normalize) {
          //Plugin is loaded, use its normalize method.
          normalizedName = pluginModule.normalize(name, function (name) {
            return normalize(name, parentName, applyMap);
          });
        } else {
          // If nested plugin references, then do not try to
          // normalize, as it will not normalize correctly. This
          // places a restriction on resourceIds, and the longer
          // term solution is not to normalize until plugins are
          // loaded and all normalizations to allow for async
          // loading of a loader plugin. But for now, fixes the
          // common uses. Details in #1131
          normalizedName =
            name.indexOf("!") === -1
              ? normalize(name, parentName, applyMap)
              : name;
        }
      } else {
        //A regular module.
        normalizedName = normalize(name, parentName, applyMap);

        //Normalized name may be a plugin ID due to map config
        //application in normalize. The map config values must
        //already be normalized, so do not need to redo that part.
        nameParts = splitPrefix(normalizedName);
        prefix = nameParts[0];
        normalizedName = nameParts[1];
        isNormalized = true;

        url = context.nameToUrl(normalizedName);
      }
    }

    //If the id is a plugin id that cannot be determined if it needs
    //normalization, stamp it with a unique ID so two matching relative
    //ids that may conflict can be separate.
    suffix =
      prefix && !pluginModule && !isNormalized
        ? "_unnormalized" + (unnormalizedCounter += 1)
        : "";

    return {
      prefix: prefix,
      name: normalizedName,
      parentMap: parentModuleMap,
      unnormalized: !!suffix,
      url: url,
      originalName: originalName,
      isDefine: isDefine,
      id: (prefix ? prefix + "!" + normalizedName : normalizedName) + suffix
    };
  }

  function getModule(depMap) {
    var id = depMap.id,
      mod = getOwn(registry, id);

    if (!mod) {
      mod = registry[id] = new context.Module(depMap);
    }

    return mod;
  }

  function on(depMap, name, fn) {
    var id = depMap.id,
      mod = getOwn(registry, id);

    if (hasProp(defined, id) && (!mod || mod.defineEmitComplete)) {
      if (name === "defined") {
        fn(defined[id]);
      }
    } else {
      mod = getModule(depMap);
      if (mod.error && name === "error") {
        fn(mod.error);
      } else {
        mod.on(name, fn);
      }
    }
  }

  function onError(err, errback) {
    var ids = err.requireModules,
      notified = false;

    if (errback) {
      errback(err);
    } else {
      each(ids, function (id) {
        var mod = getOwn(registry, id);
        if (mod) {
          //Set error on module, so it skips timeout checks.
          mod.error = err;
          if (mod.events.error) {
            notified = true;
            mod.emit("error", err);
          }
        }
      });

      if (!notified) {
        req.onError(err);
      }
    }
  }

  /**
   * Internal method to transfer globalQueue items to this context's
   * defQueue.
   */
  function takeGlobalQueue() {
    //Push all the globalDefQueue items into the context's defQueue
    if (globalDefQueue.length) {
      each(globalDefQueue, function (queueItem) {
        var id = queueItem[0];
        if (typeof id === "string") {
          context.defQueueMap[id] = true;
        }
        defQueue.push(queueItem);
      });
      globalDefQueue = [];
    }
  }

  handlers = {
    require: function (mod) {
      if (mod.require) {
        return mod.require;
      } else {
        return (mod.require = context.makeRequire(mod.map));
      }
    },
    exports: function (mod) {
      mod.usingExports = true;
      if (mod.map.isDefine) {
        if (mod.exports) {
          return (defined[mod.map.id] = mod.exports);
        } else {
          return (mod.exports = defined[mod.map.id] = {});
        }
      }
    },
    module: function (mod) {
      if (mod.module) {
        return mod.module;
      } else {
        return (mod.module = {
          id: mod.map.id,
          uri: mod.map.url,
          config: function () {
            return getOwn(config.config, mod.map.id) || {};
          },
          exports: mod.exports || (mod.exports = {})
        });
      }
    }
  };

  function cleanRegistry(id) {
    //Clean up machinery used for waiting modules.
    delete registry[id];
    delete enabledRegistry[id];
  }

  function breakCycle(mod, traced, processed) {
    var id = mod.map.id;

    if (mod.error) {
      mod.emit("error", mod.error);
    } else {
      traced[id] = true;
      each(mod.depMaps, function (depMap, i) {
        var depId = depMap.id,
          dep = getOwn(registry, depId);

        //Only force things that have not completed
        //being defined, so still in the registry,
        //and only if it has not been matched up
        //in the module already.
        if (dep && !mod.depMatched[i] && !processed[depId]) {
          if (getOwn(traced, depId)) {
            mod.defineDep(i, defined[depId]);
            mod.check(); //pass false?
          } else {
            breakCycle(dep, traced, processed);
          }
        }
      });
      processed[id] = true;
    }
  }

  function checkLoaded() {
    var err,
      usingPathFallback,
      waitInterval = config.waitSeconds * 1000,
      //It is possible to disable the wait interval by using waitSeconds of 0.
      expired =
        waitInterval && context.startTime + waitInterval < new Date().getTime(),
      noLoads = [],
      reqCalls = [],
      stillLoading = false,
      needCycleCheck = true;

    //Do not bother if this call was a result of a cycle break.
    if (inCheckLoaded) {
      return;
    }

    inCheckLoaded = true;

    //Figure out the state of all the modules.
    eachProp(enabledRegistry, function (mod) {
      var map = mod.map,
        modId = map.id;

      //Skip things that are not enabled or in error state.
      if (!mod.enabled) {
        return;
      }

      if (!map.isDefine) {
        reqCalls.push(mod);
      }

      if (!mod.error) {
        //If the module should be executed, and it has not
        //been inited and time is up, remember it.
        if (!mod.inited && expired) {
          if (hasPathFallback(modId)) {
            usingPathFallback = true;
            stillLoading = true;
          } else {
            noLoads.push(modId);
            removeScript(modId);
          }
        } else if (!mod.inited && mod.fetched && map.isDefine) {
          stillLoading = true;
          if (!map.prefix) {
            //No reason to keep looking for unfinished
            //loading. If the only stillLoading is a
            //plugin resource though, keep going,
            //because it may be that a plugin resource
            //is waiting on a non-plugin cycle.
            return (needCycleCheck = false);
          }
        }
      }
    });

    if (expired && noLoads.length) {
      //If wait time expired, throw error of unloaded modules.
      err = makeError(
        "timeout",
        "Load timeout for modules: " + noLoads,
        null,
        noLoads
      );
      err.contextName = context.contextName;
      return onError(err);
    }

    //Not expired, check for a cycle.
    if (needCycleCheck) {
      each(reqCalls, function (mod) {
        breakCycle(mod, {}, {});
      });
    }

    //If still waiting on loads, and the waiting load is something
    //other than a plugin resource, or there are still outstanding
    //scripts, then just try back later.
    if ((!expired || usingPathFallback) && stillLoading) {
      //Something is still waiting to load. Wait for it, but only
      //if a timeout is not already in effect.
      if ((isBrowser || isWebWorker) && !checkLoadedTimeoutId) {
        checkLoadedTimeoutId = setTimeout(function () {
          checkLoadedTimeoutId = 0;
          checkLoaded();
        }, 50);
      }
    }

    inCheckLoaded = false;
  }

  Module = function (map) {
    this.events = getOwn(undefEvents, map.id) || {};
    this.map = map;
    this.shim = getOwn(config.shim, map.id);
    this.depExports = [];
    this.depMaps = [];
    this.depMatched = [];
    this.pluginMaps = {};
    this.depCount = 0;

    /* this.exports this.factory
               this.depMaps = [],
               this.enabled, this.fetched
            */
  };

  Module.prototype = ModuleProto;

  function callGetModule(args) {
    //Skip modules already defined.
    if (!hasProp(defined, args[0])) {
      getModule(makeModuleMap(args[0], null, true)).init(args[1], args[2]);
    }
  }

  function removeListener(node, func, name, ieName) {
    //Favor detachEvent because of IE9
    //issue, see attachEvent/addEventListener comment elsewhere
    //in this file.
    if (node.detachEvent && !isOpera) {
      //Probably IE. If not it will throw an error, which will be
      //useful to know.
      if (ieName) {
        node.detachEvent(ieName, func);
      }
    } else {
      node.removeEventListener(name, func, false);
    }
  }

  /**
   * Given an event from a script node, get the requirejs info from it,
   * and then removes the event listeners on the node.
   * @param {Event} evt
   * @returns {Object}
   */
  function getScriptData(evt) {
    //Using currentTarget instead of target for Firefox 2.0's sake. Not
    //all old browsers will be supported, but this one was easy enough
    //to support and still makes sense.
    var node = evt.currentTarget || evt.srcElement;

    //Remove the listeners once here.
    removeListener(node, context.onScriptLoad, "load", "onreadystatechange");
    removeListener(node, context.onScriptError, "error");

    return {
      node: node,
      id: node && node.getAttribute("data-requiremodule")
    };
  }

  function intakeDefines() {
    var args;

    //Any defined modules in the global queue, intake them now.
    takeGlobalQueue();

    //Make sure any remaining defQueue items get properly processed.
    while (defQueue.length) {
      args = defQueue.shift();
      if (args[0] === null) {
        return onError(
          makeError(
            "mismatch",
            "Mismatched anonymous define() module: " + args[args.length - 1]
          )
        );
      } else {
        //args are id, deps, factory. Should be normalized by the
        //define() function.
        callGetModule(args);
      }
    }
    context.defQueueMap = {};
  }

  context = {
    config: config,
    contextName: contextName,
    registry: registry,
    defined: defined,
    urlFetched: urlFetched,
    defQueue: defQueue,
    defQueueMap: {},
    Module: Module,
    makeModuleMap: makeModuleMap,
    nextTick: req.nextTick,
    onError: onError,

    /**
     * Set a configuration for the context.
     * @param {Object} cfg config object to integrate.
     */
    configure: function (cfg) {
      //Make sure the baseUrl ends in a slash.
      if (cfg.baseUrl) {
        if (cfg.baseUrl.charAt(cfg.baseUrl.length - 1) !== "/") {
          cfg.baseUrl += "/";
        }
      }

      // Convert old style urlArgs string to a function.
      if (typeof cfg.urlArgs === "string") {
        var urlArgs = cfg.urlArgs;
        cfg.urlArgs = function (id, url) {
          return (url.indexOf("?") === -1 ? "?" : "&") + urlArgs;
        };
      }

      //Save off the paths since they require special processing,
      //they are additive.
      var shim = config.shim,
        objs = {
          paths: true,
          bundles: true,
          config: true,
          map: true
        };

      eachProp(cfg, function (value, prop) {
        if (objs[prop]) {
          if (!config[prop]) {
            config[prop] = {};
          }
          mixin(config[prop], value, true, true);
        } else {
          config[prop] = value;
        }
      });

      //Reverse map the bundles
      if (cfg.bundles) {
        eachProp(cfg.bundles, function (value, prop) {
          each(value, function (v) {
            if (v !== prop) {
              bundlesMap[v] = prop;
            }
          });
        });
      }

      //Merge shim
      if (cfg.shim) {
        eachProp(cfg.shim, function (value, id) {
          //Normalize the structure
          if (isArray(value)) {
            value = {
              deps: value
            };
          }
          if ((value.exports || value.init) && !value.exportsFn) {
            value.exportsFn = context.makeShimExports(value);
          }
          shim[id] = value;
        });
        config.shim = shim;
      }

      //Adjust packages if necessary.
      if (cfg.packages) {
        each(cfg.packages, function (pkgObj) {
          var location, name;

          pkgObj = typeof pkgObj === "string" ? { name: pkgObj } : pkgObj;

          name = pkgObj.name;
          location = pkgObj.location;
          if (location) {
            config.paths[name] = pkgObj.location;
          }

          //Save pointer to main module ID for pkg name.
          //Remove leading dot in main, so main paths are normalized,
          //and remove any trailing .js, since different package
          //envs have different conventions: some use a module name,
          //some use a file name.
          config.pkgs[name] =
            pkgObj.name +
            "/" +
            (pkgObj.main || "main")
              .replace(currDirRegExp, "")
              .replace(jsSuffixRegExp, "");
        });
      }

      //If there are any "waiting to execute" modules in the registry,
      //update the maps for them, since their info, like URLs to load,
      //may have changed.
      eachProp(registry, function (mod, id) {
        //If module already has init called, since it is too
        //late to modify them, and ignore unnormalized ones
        //since they are transient.
        if (!mod.inited && !mod.map.unnormalized) {
          mod.map = makeModuleMap(id, null, true);
        }
      });

      //If a deps array or a config callback is specified, then call
      //require with those args. This is useful when require is defined as a
      //config object before require.js is loaded.
      if (cfg.deps || cfg.callback) {
        context.require(cfg.deps || [], cfg.callback);
      }
    },

    makeShimExports: function (value) {
      function fn() {
        var ret;
        if (value.init) {
          ret = value.init.apply(global, arguments);
        }
        return ret || (value.exports && getGlobal(value.exports));
      }
      return fn;
    },

    makeRequire: function (relMap, options) {
      options = options || {};

      function localRequire(deps, callback, errback) {
        var id, map, requireMod;

        if (options.enableBuildCallback && callback && isFunction(callback)) {
          callback.__requireJsBuild = true;
        }

        if (typeof deps === "string") {
          if (isFunction(callback)) {
            //Invalid call
            return onError(
              makeError("requireargs", "Invalid require call"),
              errback
            );
          }

          //If require|exports|module are requested, get the
          //value for them from the special handlers. Caveat:
          //this only works while module is being defined.
          if (relMap && hasProp(handlers, deps)) {
            return handlers[deps](registry[relMap.id]);
          }

          //Synchronous access to one module. If require.get is
          //available (as in the Node adapter), prefer that.
          if (req.get) {
            return req.get(context, deps, relMap, localRequire);
          }

          //Normalize module name, if it contains . or ..
          map = makeModuleMap(deps, relMap, false, true);
          id = map.id;

          if (!hasProp(defined, id)) {
            return onError(
              makeError(
                "notloaded",
                'Module name "' +
                  id +
                  '" has not been loaded yet for context: ' +
                  contextName +
                  (relMap ? "" : ". Use require([])")
              )
            );
          }
          return defined[id];
        }

        //Grab defines waiting in the global queue.
        intakeDefines();

        //Mark all the dependencies as needing to be loaded.
        context.nextTick(function () {
          //Some defines could have been added since the
          //require call, collect them.
          intakeDefines();

          requireMod = getModule(makeModuleMap(null, relMap));

          //Store if map config should be applied to this require
          //call for dependencies.
          requireMod.skipMap = options.skipMap;

          requireMod.init(deps, callback, errback, {
            enabled: true
          });

          checkLoaded();
        });

        return localRequire;
      }

      mixin(localRequire, {
        isBrowser: isBrowser,

        /**
         * Converts a module name + .extension into an URL path.
         * *Requires* the use of a module name. It does not support using
         * plain URLs like nameToUrl.
         */
        toUrl: function (moduleNamePlusExt) {
          var ext,
            index = moduleNamePlusExt.lastIndexOf("."),
            segment = moduleNamePlusExt.split("/")[0],
            isRelative = segment === "." || segment === "..";

          //Have a file extension alias, and it is not the
          //dots from a relative path.
          if (index !== -1 && (!isRelative || index > 1)) {
            ext = moduleNamePlusExt.substring(index, moduleNamePlusExt.length);
            moduleNamePlusExt = moduleNamePlusExt.substring(0, index);
          }

          return context.nameToUrl(
            normalize(moduleNamePlusExt, relMap && relMap.id, true),
            ext,
            true
          );
        },

        defined: function (id) {
          return hasProp(defined, makeModuleMap(id, relMap, false, true).id);
        },

        specified: function (id) {
          id = makeModuleMap(id, relMap, false, true).id;
          return hasProp(defined, id) || hasProp(registry, id);
        }
      });

      //Only allow undef on top level require calls
      if (!relMap) {
        localRequire.undef = function (id) {
          //Bind any waiting define() calls to this context,
          //fix for #408
          takeGlobalQueue();

          var map = makeModuleMap(id, relMap, true),
            mod = getOwn(registry, id);

          mod.undefed = true;
          removeScript(id);

          delete defined[id];
          delete urlFetched[map.url];
          delete undefEvents[id];

          //Clean queued defines too. Go backwards
          //in array so that the splices do not
          //mess up the iteration.
          eachReverse(defQueue, function (args, i) {
            if (args[0] === id) {
              defQueue.splice(i, 1);
            }
          });
          delete context.defQueueMap[id];

          if (mod) {
            //Hold on to listeners in case the
            //module will be attempted to be reloaded
            //using a different config.
            if (mod.events.defined) {
              undefEvents[id] = mod.events;
            }

            cleanRegistry(id);
          }
        };
      }

      return localRequire;
    },

    /**
     * Called to enable a module if it is still in the registry
     * awaiting enablement. A second arg, parent, the parent module,
     * is passed in for context, when this method is overridden by
     * the optimizer. Not shown here to keep code compact.
     */
    enable: function (depMap) {
      var mod = getOwn(registry, depMap.id);
      if (mod) {
        getModule(depMap).enable();
      }
    },

    /**
     * Internal method used by environment adapters to complete a load event.
     * A load event could be a script load or just a load pass from a synchronous
     * load call.
     * @param {String} moduleName the name of the module to potentially complete.
     */
    completeLoad: function (moduleName) {
      var found,
        args,
        mod,
        shim = getOwn(config.shim, moduleName) || {},
        shExports = shim.exports;

      takeGlobalQueue();

      while (defQueue.length) {
        args = defQueue.shift();
        if (args[0] === null) {
          args[0] = moduleName;
          //If already found an anonymous module and bound it
          //to this name, then this is some other anon module
          //waiting for its completeLoad to fire.
          if (found) {
            break;
          }
          found = true;
        } else if (args[0] === moduleName) {
          //Found matching define call for this script!
          found = true;
        }

        callGetModule(args);
      }
      context.defQueueMap = {};

      //Do this after the cycle of callGetModule in case the result
      //of those calls/init calls changes the registry.
      mod = getOwn(registry, moduleName);

      if (!found && !hasProp(defined, moduleName) && mod && !mod.inited) {
        if (config.enforceDefine && (!shExports || !getGlobal(shExports))) {
          if (hasPathFallback(moduleName)) {
            return;
          } else {
            return onError(
              makeError("nodefine", "No define call for " + moduleName, null, [
                moduleName
              ])
            );
          }
        } else {
          //A script that does not call define(), so just simulate
          //the call for it.
          callGetModule([moduleName, shim.deps || [], shim.exportsFn]);
        }
      }

      checkLoaded();
    },

    /**
     * Converts a module name to a file path. Supports cases where
     * moduleName may actually be just an URL.
     * Note that it **does not** call normalize on the moduleName,
     * it is assumed to have already been normalized. This is an
     * internal API, not a public one. Use toUrl for the public API.
     */
    nameToUrl: function (moduleName, ext, skipExt) {
      var paths,
        syms,
        i,
        parentModule,
        url,
        parentPath,
        bundleId,
        pkgMain = getOwn(config.pkgs, moduleName);

      if (pkgMain) {
        moduleName = pkgMain;
      }

      bundleId = getOwn(bundlesMap, moduleName);

      if (bundleId) {
        return context.nameToUrl(bundleId, ext, skipExt);
      }

      //If a colon is in the URL, it indicates a protocol is used and it is just
      //an URL to a file, or if it starts with a slash, contains a query arg (i.e. ?)
      //or ends with .js, then assume the user meant to use an url and not a module id.
      //The slash is important for protocol-less URLs as well as full paths.
      if (req.jsExtRegExp.test(moduleName)) {
        //Just a plain path, not module name lookup, so just return it.
        //Add extension if it is included. This is a bit wonky, only non-.js things pass
        //an extension, this method probably needs to be reworked.
        url = moduleName + (ext || "");
      } else {
        //A module that needs to be converted to a path.
        paths = config.paths;

        syms = moduleName.split("/");
        //For each module name segment, see if there is a path
        //registered for it. Start with most specific name
        //and work up from it.
        for (i = syms.length; i > 0; i -= 1) {
          parentModule = syms.slice(0, i).join("/");

          parentPath = getOwn(paths, parentModule);
          if (parentPath) {
            //If an array, it means there are a few choices,
            //Choose the one that is desired
            if (isArray(parentPath)) {
              parentPath = parentPath[0];
            }
            syms.splice(0, i, parentPath);
            break;
          }
        }

        //Join the path parts together, then figure out if baseUrl is needed.
        url = syms.join("/");
        url += ext || (/^data\:|^blob\:|\?/.test(url) || skipExt ? "" : ".js");
        url =
          (url.charAt(0) === "/" || url.match(/^[\w\+\.\-]+:/)
            ? ""
            : config.baseUrl) + url;
      }

      return config.urlArgs && !/^blob\:/.test(url)
        ? url + config.urlArgs(moduleName, url)
        : url;
    },

    //Delegates to req.load. Broken out as a separate function to
    //allow overriding in the optimizer.
    load: function (id, url) {
      req.load(context, id, url);
    },

    /**
     * Executes a module callback function. Broken out as a separate function
     * solely to allow the build system to sequence the files in the built
     * layer in the right sequence.
     *
     * @private
     */
    execCb: function (name, callback, args, exports) {
      return callback.apply(exports, args);
    },

    /**
     * callback for script loads, used to check status of loading.
     *
     * @param {Event} evt the event from the browser for the script
     * that was loaded.
     */
    onScriptLoad: function (evt) {
      //Using currentTarget instead of target for Firefox 2.0's sake. Not
      //all old browsers will be supported, but this one was easy enough
      //to support and still makes sense.
      if (
        evt.type === "load" ||
        readyRegExp.test((evt.currentTarget || evt.srcElement).readyState)
      ) {
        //Reset interactive script so a script node is not held onto for
        //to long.
        interactiveScript = null;

        //Pull out the name of the module and the context.
        var data = getScriptData(evt);
        context.completeLoad(data.id);
      }
    },

    /**
     * Callback for script errors.
     */
    onScriptError: function (evt) {
      var data = getScriptData(evt);
      if (!hasPathFallback(data.id)) {
        var parents = [];
        eachProp(registry, function (value, key) {
          if (key.indexOf("_@r") !== 0) {
            each(value.depMaps, function (depMap) {
              if (depMap.id === data.id) {
                parents.push(key);
                return true;
              }
            });
          }
        });
        return onError(
          makeError(
            "scripterror",
            'Script error for "' +
              data.id +
              (parents.length ? '", needed by: ' + parents.join(", ") : '"'),
            evt,
            [data.id]
          )
        );
      }
    }
  };

  context.require = context.makeRequire();
  return context;
}
