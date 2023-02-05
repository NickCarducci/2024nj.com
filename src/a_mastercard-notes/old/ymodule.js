class newRequireable {
  constructor() {
    const NAME = arguments[0];

    ["dependencies", "enRgtry", "unDE", "defined", "urlFchd", "bdlMap"].forEach(
      (k) => (this[k] = {})
    ); //abnormalCount - normalize() will run faster if there is no default //BR "bindingsRequire"

    checkLoaded(this);
    STATE = {
      NAME,
      defQueue,
      defQueueMap: {},
      makeModuleMap,
      nextTick: build.nextTick,
      Module,
      load: (id, url) => build.load(STATE, id, url),
      execCb: (name, cb, args, exports) => cb.apply(exports, args),
      onError,
      CONFIG: STATE.CONFIG,
      unDe: this.unDE ? this.unDE : {},
      enRgtry: this.enRgtry ? this.enRgtry : {},
      urlFchd: this.urlFchd ? this.urlFchd : {}, //this able's
      defined: this.defined ? this.defined : {},
      dependencies: this.dependencies ? this.dependencies : {},
      configure,
      makeShimExports: (value) =>
        function () {
          return (
            (value[_i] && value[_i].apply(dependency, arguments)) ||
            (value[_x] && getGlobal(value[_x]))
          );
        }, //Shadowing of global property 'arguments'. (no-shadow-restricted-names)eslint
      /* makeShimExports: (value) =>
            function () {
              return (
                (value[_i] && value[_i].apply(dependency, arguments)) ||
                (value[_x] && getGlobal(value[_x]))
              );
            }, //Shadowing of global property 'arguments'. (no-shadow-restricted-names)eslint*/
      makeRequire: (relMap, options) => makeRequire(relMap, options, NAME),
      require: STATE.makeRequire(),
      enable: (depMap) =>
        e_(STATE.dependencies).yes(depMap.id) &&
        STATE.dependencies[depMap.id] &&
        getModule(depMap).enable(),
      //if "m" this is in STATE.dependencies, parent's STATE when overridden in "optimizer" (Not shown).
      completeLoad: (tkn) => {
        var found, args; //method used "internally" by environment adapters script-load or a synchronous load call.
        tkeGblQue();
        while (defQueue.length) {
          args = defQueue.shift();
          if (args[0] === null) {
            args[0] = tkn;
            if (found) break;
            found = true; //anonymous this bound to name already  this is another anon this waiting for its completeLoad to fire.
          } else if (args[0] === tkn) found = true;
          callGetModule(args);
        } //matched a define call in this script
        STATE.defQueueMap = {};
        var m = e_(STATE.dependencies).yes(tkn) && STATE.dependencies[tkn]; // in case-/init-calls change the STATE.dependencies
        if (!found && !e_(STATE.defined).yes(tkn) && m && !m.inited) {
          var shim = e_(STATE.CONFIG.shim).yes(tkn)
            ? STATE.CONFIG.shim[tkn]
            : {};
          if (STATE.CONFIG.enforceDefine && (!shim[_x] || !getGlobal(shim[_x])))
            return (
              !WINDOW.hasPathFallback(tkn, STATE.CONFIG.paths) &&
              onError(
                WINDOW.mk([
                  "nodefine",
                  "No define call for " + tkn,
                  null,
                  [tkn]
                ])
              )
            ); //type, msg, err, requireModules
          callGetModule([tkn, shim.ds || [], shim.exportsFn]); //does not call define(), but simulated
        }
        checkLoaded(); //tkn = moduleName
      }
    };

    _K(STATE).forEach((key) => (this[key] = STATE[key]));
  }
}
export function makeModuleMap(
  n = arguments[0],
  sourcemap = arguments[1],
  isNormed = arguments[2],
  applyMap = arguments[3]
) {
  //n, sourcemap, isNormed, applyMap
  var ptName = sourcemap ? sourcemap.name : null,
    gvnName = n,
    yesdef = true; //'applyMap' for dependency ID, 'isNormed' define() this ID, '[sourcemap]' to resolve relative names (&& require.normalize()), 'name' the most relative
  if (!n) yesdef = false;
  n = n ? n : "_@r" + (rqrCnt += 1); //internally-name a 'require' call, given no name

  const configGets = [
      STATE.CONFIG.nodeIdCompat,
      STATE.CONFIG.map,
      STATE.CONFIG.pkgs
    ],
    splitPrefix = (i = (n) => n.indexOf("!")) =>
      i > -1 ? [n.substring(0, i), n.substring(i + 1, n.length)] : [n, ""];
  //[plugin=undefined, resource={}] if the name without a plugin prefix.
  var names = splitPrefix(n),
    p = names[0],
    pM,
    url,
    normed = "",
    id,
    suffix = p && !pM && !isNormed ? "_unnormalized" + (abnCnt += 1) : ""; //If it may be a plugin id that doesn't normalization, stamp it with a unique ID

  n = names[1];
  if (n)
    p
      ? iifeapp(this)(
          ["normed", "id"],
          isNormed
            ? n
            : pM && pM.normalize
            ? //prettier-ignore
              pM.normalize(n, (n) => WINDOW.normalize(n, ptName, applyMap, ...configGets))
            : n.indexOf("!") === -1
            ? WINDOW.normalize(n, ptName, applyMap, ...configGets)
            : n,
          p + "!" + normed + suffix
        )
      : iifeapp(this)(
          ["normed", "names", "p", "normed", "isNormed", "url", "id"],
          WINDOW.normalize(n, ptName, applyMap, ...configGets),
          splitPrefix(normed),
          names[0],
          names[1],
          true,
          nameToUrl(normed),
          normed + suffix
        );

  //do not normalize if nested plugin references; albeit this deprecates resourceIds,
  //normalize after plugins are loaded and such normalizations allow for async loading of a loader plugin (#1131)
  //ok base name, relative path?.normalize's 'map STATE.CONFIG application' might make normalized 'name' a plugin ID.'map STATE.CONFIG values' are already normalized at this point.

  return {
    prefix: p,
    name: normed,
    parentMap: sourcemap,
    unnormalized: !!suffix,
    url,
    gvnName,
    yesdef,
    id
  };
} //polyfills

var _n = "undefined",
  _m = "module",
  T = (x) => typeof x,
  version = "2.3.6.carducci",
  _r = "require",
  _K = Object.keys,
  _x = "exports",
  _t = "string",
  _P = "prototype",
  _H = "hasOwnProperty",
  _S = Object.prototype.toString,
  isBrowser = !!(T(window !== _n) && T(navigator !== _n) && window.document),
  createElement = (ns) =>
    document[`createElementNS${ns ? "NS" : ""}`](
      ns ? ("http://www.w3.org/1999/xhtml", "html:script") : "script"
    ),
  Ar = "[object Array]",
  pf = {
    ga: "getAttribute",
    /**
    ctx.require.undef(id);
    ctx.makeRequire(null, { skipMap: true })([id]);
    ctx = ctx ? ctx : (ctxs[NAME] = new build.start.newRequireable(NAME)); //dependency
    cfg && ctx.configure(cfg);
    return ctx.require(ds, cb, eb);
  */
    _p: "packages",
    _b: "bundles",
    _s: "shim",
    _l: "location",
    _u: "baseUrl",
    _a: "urlArgs",
    _xf: "exportsFn",
    _o: "onError",
    _dd: "defined",
    _dg: "defining",
    _ed: "enabled",
    _e: "error",
    _em: "emit",
    _ev: "events",
    _i: "init",
    sign: { version, isBrowser },
    Fn: "[object Function]",
    _SA: "setAttribute",
    _AE: "attachEvent",
    _AEL: "addEventListener",
    ctxReqProps: ["toUrl", "undef", "defined", "specified"],
    WINDOW: {
      mixin: (tgt, s, frc, dSM) =>
        _K(s).reduce(e_([s, tgt, frc, dSM]).reducer(), tgt),
      mk: (err) =>
        err.constructor === Object
          ? err
          : {
              //prettier-ignore
              ...new Error(`${err[1]}\nhttps://REQUIREJS.org/docs/errors.html#${err[0]}`),
              requireType: err[0],
              ids: err[3],
              originalError: err[2]
            }, //t, m, e, ids
      dr: (m) => `data-require${m ? _m : "context"}`,
      concat: (
        { ds, cb } = (ds, cb) => {
          return {
            cb: cb
              .toString()
              .replace(
                /\/\*[\s\S]*?\*\/|([^:"'=]|^)\/\/.*$/gm /*comment */,
                (match, singlePrefix) => singlePrefix || ""
              )
              .replace(
                /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g /*requires */,
                (match, dep) => ds.push(dep)
              ),
            ds
          };
        } /*like ')//comment'; keep prefix*/
      ) => (cb.length === 1 ? [_r] : [_r, _x, _m]).concat(ds), //Potential-CommonJS use-case of exports and this, without 'require.';
      rmvScrpt: (name, NAME) => {
        const ga = "getAttribute",
          e = (m) => (m ? name : NAME); //scriptNode
        return (
          isBrowser &&
          e_()
            .tag()
            .forEach(
              (sN) =>
                sN[ga](WINDOW.dr(true)) === e(true) &&
                sN[ga](WINDOW.dr()) === e() &&
                sN.parentNode.removeChild(sN)
            )
        );
      },
      hasPathFallback: (id, cP) => {
        var pC = e_(cP).yes(id) && cP[id]; //pathConfig,configPaths
        if (pC && e_(pC).string() === Ar && pC.length > 1) {
          pC.shift(); //config is live? but 'id' is variable as args.. [for the?] next try
          ctx.require.undef(id);
          ctx.makeRequire(null, { skipMap: true })([id]);
          return true;
        }
      },
      //'applyMap' for dependency ID, 'baseName' relative to 'name,' the most relative
      normalize: (nm, bn, applyMap, conId, map, configPkgs) => {
        const tool = () => {
            return {
              parseName: (nm, roots, conId) =>
                nm &&
                ((nm) => {
                  //prettier-ignore
                  const l = nm.length - 1,isjs = /\.js$/,suffjs = conId && isjs.test(nm[l]);
                  nm[l] = suffjs ? nm[l].replace(isjs, "") : nm[l];

                  nm =
                    nm[0].charAt(0) === "." && roots
                      ? roots.slice(0, roots.length - 1).concat(nm)
                      : nm; //Adjust any relative paths. node allows either .js or non .js, yet not in nameToUrl;baseName.push(nm), but new instead of length report
                  for (let i = 0; i < nm.length; i++) {
                    const solid = nm[i] === "." && nm.splice(i, 1); //:part === "..":null
                    i = solid ? i - 1 : i;
                    if (solid) continue;
                    const more =
                      i === 0 ||
                      (i === 1 && nm[2] === "..") ||
                      nm[i - 1] === "..";
                    if (!more && i > 0 && nm.splice(i - 1, 2)) i -= 2;
                  }
                  return nm.join("/");
                })((nm = nm.split("/"))), //just enabled, but unactivated, modules
              convertName: (nm, mp, applyMap, ph) => {
                if (!applyMap || !mp || (!ph && !mp["*"])) return nm;
                var n,
                  i,
                  map,
                  starMap,
                  nms = nm.split("/"),
                  mpcf = mp && mp["*"]; //continue search ___ map STATE.CONFIG, bigloop:
                for (let g = nms.length; g > 0; g -= 1) {
                  var name = nms.slice(0, g).join("/"); //favor a "star map" unless shorter matching STATE.CONFIG
                  // prettier-ignore
                  !starMap && mpcf && e_(mpcf).yes(name)&& (() => {starMap = mpcf[name];n = g;})();
                  ph &&
                    (() => {
                      for (let f = ph.length; f > 0; f--) {
                        const fP = ph.slice(0, f).join("/"),
                          mV = e_(mp).yes(fP) && mp[fP];
                        if (!mV) continue;
                        const s = e_(mV).yes(name) && mV[name];
                        i = s ? g : i;
                        if (s) break;
                      }
                    })();
                } // bigloop; //Match, update name to the new value.
                if (map) return (nm = nms.splice(0, i, map).join("/"));
                if (starMap) {
                  map = starMap;
                  i = n;
                }
                return nm;
              }
            };
          },
          rs = bn && bn.split("/");
        nm = tool().parseName(nm, rs, conId);
        nm = tool().convertName(nm, map, applyMap, rs);
        return e_(configPkgs).yes(nm) ? configPkgs[nm] : nm;
      }
    }
    //uses 'this' as 'z', but when called () the function is returned,
  }; //obj.prototype["hasOwnProperty"][name]; const method =string?"toString":"hasOwnProperty"
var e_ = (obj /*,string*/) => {
    const n = (NS) => NS.constructor === "String" && NS.toUpperCase() === "NS";
    const yes = (name) => obj[_P][_H](name),
      string = () => _S(obj),
      tag = (ind) => document.getElementsByTagName(obj ? obj : "script")[ind];
    return {
      yes,
      reducer: (prop, nextProp) =>
        !obj[0]
          ? obj[1]
          : (obj[2] || !e_(obj[1]).yes(prop)) &&
            ((
              v,
              //prettier-ignore
              go = obj[3] && T( v === "object") && v && !e_(v).a() && !e_(v).string() === Fn &&  !(v instanceof RegExp)
            ) => {
              obj[1][prop] = !go ? v : obj[1][prop] ? obj[1][prop] : {};
              mixin(obj[1][prop], v, obj[2], obj[3]);
              return obj[1];
            })(obj[0][prop]), //s,tgt,frc,dSM
      create: (ns = n) => createElement(ns),
      string,
      a: (x) => x.string() === Ar,
      tag,
      interA: (x) => x.readyState === "interactive"
    };
  },
  mixin = (tgt, s, frc, dSM) =>
    _K(s).reduce(e_([s, tgt, frc, dSM]).reducer(), tgt),
  iifeapp = class iifeapp {
    constructor() {
      const z = arguments[0]; //allows mutable context, 'new' instantiatable 'iifeapp' for the "enclosing 'this'," else App() function
      return function (construction = arguments[0], keys = arguments[1]) {
        const buff = construction.constructor === Array ? 0 : 1;
        construction =
          construction.constructor === Array ? () => {} : construction;
        keys = keys.constructor === Array ? keys : construction;
        construction.constructor === Function && construction();
        keys.constructor === Array &&
          keys.forEach((x, i) =>
            x.includes(".")
              ? (z[x.split(".")[0]][x.split(".")[1]] = arguments[i + buff])
              : (z[x] = arguments[i + buff])
          );
      };
    }
  }; //this(and arguments) should relate to wherever function runs (fat has no 'this', iife can to append this[key])
//const iifefunc = (construction, keys) => new iifeapp(construction, keys); //you can tell this is a [proper-]function[-invocation] with thiscontext here for iifeapp
/**
        * 
              iifefunc(
                ((z) => {
                  if (z.interscrpt && e_(z.interscrpt).interA())
                    return this.interscrpt;
                  // prettier-ignore
                  e_().tag().sort((a, b) => b - a)
                .map((script) => e_(script).interA() && (z.interscrpt = script));
                  return z.interscrpt;
                })(this),
                ["interscript"]
              );
        * 
        */
