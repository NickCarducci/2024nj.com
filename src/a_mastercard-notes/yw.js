var e = "error",
  t = "defined",
  n = "enabled",
  r = "prototype",
  i = "require",
  s = "[object Function]";
const a = (e, t, n) => (t && n && (t[n] = e), !0),
  d = (e) => (e && e.constructor === Object ? Object.keys(e) : []),
  o = (e) => typeof e;
function c() {
  var l = arguments[0],
    u = arguments[1],
    p = arguments[2],
    h = arguments[3],
    f = arguments[4],
    m = arguments[5],
    g = arguments[6],
    y = arguments[7],
    E = arguments[8],
    b = arguments[9],
    v = b.shim,
    M = b.config,
    N = arguments[10],
    C = arguments[11],
    O = arguments[12],
    I = arguments[13],
    x = arguments[14],
    F = arguments[15],
    R = arguments[16],
    k = arguments[17],
    A = arguments[18],
    S = arguments[19],
    G = arguments[20],
    T = arguments[21],
    q = arguments[22],
    $ = arguments[23],
    j = arguments[24],
    w = arguments[25],
    D = arguments[26];
  const U = () => l.id,
    L = () => {
      var e = l.id,
        n = u(l.prefix);
      K.push(n) &&
        Z(n, t, (t) => {
          if (l.unnormalized) return c[r].normalizeMod(t, l);
          var n = h(O).yes(l.id) && O[l.id];
          if (n)
            return (
              (l.url = m(n).prototype = { CONFIG: b, bdlMap: O }) &&
              this.load() &&
              null
            );
          const i = (e) => ue([], () => e, null, { enabled: !0 });
          i.error = (t) => {
            (oe = !0) &&
              (z = t) &&
              (t.requireModules = [e]) &&
              a(
                d(N).forEach(
                  (t, n) =>
                    0 === N[t].map.id.indexOf(e + "_unnormalized") &&
                    f(N[t].map.id)
                )
              ) &&
              y(t);
          };
          const s = C(l.parentMap, { enableBuildCallback: !0 });
          (i.fromText = (t, n) => {
            var r = l.name,
              d = u(r),
              o = p;
            return (
              (!n || (t = n)) && (!o || a((p = !1))) && g(d) && S(e, r),
              w(t, e),
              (!o || (p = !0)) && K.push(d) && I(r) && s([r], i)
            );
          }) && t.load(l.name, s, i, b);
        }) &&
        x(n, this) &&
        (W[n.id] = n);
    },
    P = () =>
      te
        ? null
        : ((te = !0) && T(),
          ce
            ? void C(l, { enableBuildCallback: !0 })(
                ce.REM || [],
                l.prefix ? L() : this.load()
              )
            : l.prefix
            ? L()
            : this.load()),
    Q = (e, t) => {
      var n = null;
      try {
        J.exports = e(...t);
      } catch (e) {
        n = e;
      }
      return n;
    };
  var _,
    B,
    J = {},
    z = {},
    V = {},
    Y = [],
    K = [],
    W = {},
    X = [],
    H = (h(E).yes(l.id) && E[l.id]) || {};
  const Z = ({ m: n, dm: r } = D, i, s) => {
      if (!h(R).yes(r.id) || (n && !n.defineEmitComplete))
        return i === t && s(R[r.id]);
      return ((t = (e) => g(e)) =>
        t.error && i === e ? s(t.error) : t.addEventListene(i, s))(r);
    },
    ee = (t, n) => a(H[t].forEach((e) => e(n))) && a(t === e && delete H[t]);
  var te,
    ne,
    re,
    ie,
    se,
    ae,
    de,
    oe,
    ce = h(v).yes(l.id) && v[l.id],
    le = 0;
  const ue = oe
      ? () => null
      : (
          t,
          r = (e) => (V = e),
          i = (t) =>
            t
              ? this.addEventListene(e, t)
              : H.error
              ? (t = (t) => ee(e, t))
              : null,
          s = (e) => (B = e || {})
        ) => {
          if ((a(t && t.slice(0)) && a((re = i)) && (oe = !0), s[n] || de))
            return (
              q(this) &&
              (de = !0) &&
              (ne = !0) &&
              a(
                t.forEach((r, i) => {
                  if (o("string" === r)) {
                    const n = l.yesdef ? l : l.parentMap;
                    (r = u(r, n, !1, !this.skipMap)) && (t[i] = r);
                    var s = h(me).yes(r.id) && me[r.id];
                    if (s) return (X[i] = s(this, M, C, R));
                    const d = () =>
                      a((le += 1)) &&
                      Z(r, "defined", (e) => {
                        a(this.defineDep(i, e)) && pe();
                      }) &&
                      (re
                        ? Z(r, e, re)
                        : H.error
                        ? Z(r, e, (t) => ee(e, t))
                        : null);
                    d();
                  }
                  var d = r.id,
                    c = N[d];
                  !h(me).yes(d) && c && !c[n] && x(r, this);
                })
              ) &&
              a(
                d(W).forEach(
                  (e = (e) => W[e], t) =>
                    h(N).yes(e.id) && N[e.id] && !N[e.id][n] && x(e, this)
                )
              ) &&
              a((ne = !1)) &&
              pe()
            );
          pe();
        },
    pe = () =>
      !de || ne || oe
        ? ae
          ? z && ee(e, z)
          : (ae = !0) &&
            le < 1 &&
            !R &&
            l.yesdef &&
            (J.exports =
              h(V).string() !== s
                ? () => V
                : () => {
                    var e = X,
                      t = l.yesdef && void 0 === J.exports && J;
                    const n = Q(F, [U, V, e, J.exports]);
                    return (
                      n &&
                        (j ||
                          ((n.requireType = l.yesdef ? "define" : i) !== i &&
                            H.error)) &&
                        (n.requireMap = l) &&
                        a((n.requireModules = l.yesdef && [l.id])) &&
                        y((z = n)),
                      t
                        ? t
                          ? t.exports
                          : this.usingExports
                          ? J.exports
                          : null
                        : J.exports
                    );
                  }) &&
            A(l, B, U, K) &&
            f(U) &&
            (se = !0) &&
            a(null, this, "defining") &&
            se &&
            !_ &&
            (_ = !0) &&
            ee(t, J.exports)
        : !h(k).yes(U) && P();
  var he = {
    inited: oe,
    undefed: ie,
    defined: se,
    error: z,
    enabled: de,
    enable: x,
    map: l,
    shim: ce,
    load: G,
    normalizeMod: (n, r) => {
      const { nodeIdCompat: i, map: s, bundle: a } = b,
        d = (e) => [e, s.parentMap ? s.parentMap.name : null, !0, i, s, a],
        o = n.normalize ? n.normalize(s.name, (e = d) => $(e)) : s.name;
      var c, l;
      Z(
        (c = u(r.prefix + "!" + o, s.parentMap, !0)),
        t,
        (e) =>
          (s.normalizedMap =
            c && ue([], () => e, null, { enabled: !0, ignore: !0 }))
      ),
        ((l = h(N).yes(c.id) && N[c.id]),
        (!l || K.push(c)) &&
        H.error &&
        l.addEventListene(e, (t) => ee(e, t)) &&
        l
          ? { enable: x }
          : { enable: () => {} }).enable();
    },
    addEventListene: (e, t) => (H[e] ? H[e] : (H[e] = [])).push(t),
    defineDep: (e, t) => !Y[e] && (Y[e] = !0) && a((le -= 1)) && (t[e] = t)
  };
  (this.fetched = te), d(he).forEach((e) => (this[e] = he[e]));
}
const l = (e, t, n) => {
  var r = {};
  return Object.keys(n).forEach((t) => e.includes(t) && (r[t] = n[t])), r;
};
function u() {
  const { CONFIG: e, bdlMap: t } = this;
  var n = arguments[1],
    r = arguments[2],
    i = se(e.bundle).yes(arguments[0]) && e.bundle[arguments[0]],
    s = i || arguments[0],
    a = se(t).yes(s) && t[s];
  a && u(a, n, r);
  const d = (t = "") => {
      if (/^[/:?.]|(.js)$/.test(s)) return s + (n || "");
      var i = e.paths,
        a = s.split("/");
      for (let e = a.length; e > 0; e -= 1) {
        var d = a.slice(0, e).join("/"),
          o = se(i).yes(d) && i[d];
        if ((o && (o = se(o).a() ? o[0] : o) && a.splice(0, e, o), o)) break;
      }
      return (
        (t = a.join("/")) &&
          (t += n || (/^data:|^blob:|\?/.test(t) || r ? "" : ".js")),
        ("/" === t.charAt(0) || t.match(/^[\w+.-]+:/) ? "" : e.baseUrl) + t
      );
    },
    o = d;
  return `${e.urlArgs && !/^blob:/.test(o) ? o + e.urlArgs(s, o) : o}`;
}
const p = (e, t, n) => (t && n && (t[n] = e), !0),
  h = (e, t, n, r, i) => {
    const s = (e) =>
        K(`dependencies.${e}`, null, "delete") &&
        K(`enabledRegistry.${e}`, null, "delete"),
      a = (n) => ({
        dm: n,
        m: e(t.dependencies).yes(n.id) && t.dependencies[n.id]
      });
    return {
      getModule: ({ m: d, dm: o } = a) => {
        const { CONFIG: c = (e) => e.config, urlFchd: p, load: f } = t,
          { makeModuleMap: m, useInteractive: g, _e: y } = r;
        return (
          d ||
          K(
            `dependencies.${o.id}`,
            new t.Module(
              o,
              m,
              g,
              y,
              s,
              u,
              h(e, t, n, r, i).getModule,
              Z,
              ...l(
                [
                  "unDE",
                  "CONFIG",
                  "dependencies",
                  "makeRequire",
                  "bdlMap",
                  "completeLoad",
                  "enable",
                  "execCb",
                  "defined",
                  "defQueueMap"
                ],
                0,
                t
              ),
              (e, r, i, s) =>
                !(e.yesdef && !r) ||
                new Promise((e) =>
                  K(`defined.${i}`, module.exports && e(""))
                ).then(
                  () =>
                    n.onResourceLoad &&
                    n.onResourceLoad(
                      t,
                      e,
                      s.map((e) => e.normalizedMap || e)
                    )
                ),
              (t, n) => !e(c).yes(t) || K(`CONFIG.config.${n}`, c[t]),
              () =>
                p[o.url]
                  ? console.log(
                      `redundant STATE.load(${o.id}, ${o.url}) call (?), STATE.urlFchd[${o.url}] === true`
                    )
                  : K(`urlFchd.${o.url}`, !0) && f(o.id, o.url),
              K("startTime", new Date().getTime()),
              K(`enabledRegistry.${o.id}`, i),
              ie,
              n.onError !== ((e) => e),
              (e, t) => {
                const r = H(n.exec, [e]);
                if (r)
                  return Z(
                    ee([
                      "fromtexteval",
                      `fromText eval for ${t} failed: ${r}`,
                      r,
                      [t]
                    ])
                  );
              },
              a
            )
          )
        );
      }
    };
  },
  f = "string",
  m = "[object Function]",
  g = (e) => typeof e;
function y(
  e = arguments[0],
  t = arguments[1],
  n = arguments[2],
  r = arguments[3],
  i = arguments[4]
) {
  const {
      STATE: s,
      BUILD: a,
      makeModuleMap: d,
      e_: o,
      checkProto: c,
      moduleProto: y,
      Dependency: E
    } = this,
    { getModule: b, clrRegstr: v } = h(
      o,
      l(["CONFIG", "urlFchd", "load"], 0, s),
      l(["onResourceLoad", "exec", "onError"], 0, a),
      y,
      E
    ),
    O = (e) => !o(s.defined).yes(e[0]) && b(d(e[0], null, !0)).init(e[1], e[2]);
  return {
    STATE: s,
    BUILD: a,
    makeModuleMap: d,
    callGetModule: O,
    getGlobal: (t) => (t ? t.split(".").reduce((t, n) => e[t], {}) : t),
    makeRequire: (e, l = (e) => e || {}, h) => {
      const y = (e, t, l) => ({
          errr: (
            n,
            r = (e) =>
              p(
                t.enableBuildCallback &&
                  e &&
                  o(e).string() === m &&
                  (e.__requireJsBuild = !0)
              ) && e,
            i
          ) =>
            g(n !== f)
              ? null
              : o(r).string() === m
              ? Z(
                  ee([
                    "requireargs",
                    "Invalid ([object Function], -class?) require callback"
                  ]),
                  i
                )
              : e && o(me).yes(n)
              ? me[n](
                  s.dependencies[e.id],
                  s.CONFIG.config,
                  s.makeRequire,
                  s.defined
                )
              : a.get
              ? a.get(s, n, e, y.parser)
              : () => {
                  var t, r;
                  return (
                    (r = d(n, e, !1, !0)) &&
                    (t = r.id) &&
                    (o(s.defined).yes(t)
                      ? s.defined[t]
                      : Z(
                          ee([
                            "notloaded",
                            `Module name ${t} has not been loaded yet for commonjs Dependencies' build : ` +
                              l +
                              !e && "; (No modMap) Use require([])"
                          ])
                        ))
                  );
                },
          parser: (...a) => {
            if (y.errr(...a)) return null;
            const o = a[0],
              l = a[1],
              u = a[2];
            var p;
            const h = () => {
              for (i(); r.length; ) {
                const e = n[0];
                if (null === e)
                  return Z(
                    ee([
                      "mismatch",
                      `Mismatched anonymous define() thi: ${e[e.length - 1]}`
                    ])
                  );
                O(e);
              }
              return (s.defQueueMap = {}) && !0;
            };
            return (
              h(),
              s.nextTick(
                () =>
                  h() &&
                  (p = b(d(null, e))) &&
                  (p.skipMap = t.skipMap) &&
                  p.init(o, l, u, { enabled: !0 }) &&
                  C.bind(c)
              ),
              y.parser
            );
          }
        }),
        E = {
          isBrowser: W,
          defined: (t) => o(s.defined).yes(d(t, e, !1, !0).id),
          specified: (t = (t) => d(t, e, !1, !0).id) =>
            o(s.defined).yes(t) || o(s.dependencies).yes(t),
          toUrl: (
            { i: t, isAlias: n, mNPE: r } = (e) => {
              const n = e.split("/")[0];
              return {
                i: e.lastIndexOf("."),
                isAlias: -1 !== t && (![".", ".."].includes(n) || t > 1),
                mNPE: e
              };
            }
          ) => {
            const i = n ? r.substring(t, r.length) : null;
            r = n ? r.substring(0, t) : r;
            const { nodeIdCompat: a, system: d, bundle: o } = s.CONFIG,
              c = [r, e && e.id, !0, a, d, o];
            return u(ie(c), i, !0);
          }
        };
      return (
        M(y(e, l, h).parser, E) &&
        p(
          !e &&
            ((n) => {
              i();
              var r = d(n, e, !0),
                a = o(s.dependencies).yes(n) && s.dependencies[n];
              return (
                (a.undefed = !0) &&
                N(n, s.NAME) &&
                K(`defined.${n}`, null, "delete") &&
                K(`urlFchd.${r.url}`, null, "delete") &&
                K(`unDE.${n}`, null, "undefined") &&
                t(n) &&
                K(`defQueueMap.${n}`, null, "delete") &&
                K(`unDE.${n}`, a && a.events.defined ? a.events : s.unDE[n]) &&
                a &&
                v(n)
              );
            })
        ) &&
        y(e, l, h).parser
      );
    }
  };
}
var E,
  b,
  v = (e) => (e && e.constructor === Object ? Object.keys(e) : []),
  M = (e, t, n, r) => v(t).reduce(se([t, e, n, r]).reducer(), e),
  N = (e, t) => {
    const n = "getAttribute",
      r = (n) => (n ? e : t);
    return (
      W &&
      p(
        se()
          .tag()
          .forEach(
            (e) =>
              e[n](ne(!0)) === r(!0) &&
              e[n](ne()) === r() &&
              e.parentNode.removeChild(e)
          )
      )
    );
  };
function C() {
  console.log("checkLoaded: ", this);
  const {
    CONFIG: e,
    startTime: t,
    dependencies: n,
    defined: r,
    enabledRegistry: i,
    NAME: s
  } = this;
  var a,
    d = [],
    o = [],
    c = 1e3 * e.waitSeconds,
    l = c && t + c < new Date().getTime();
  if (b) return !0;
  var u = W || (!W && !1);
  b = !0;
  const h = "error";
  if (
    (console.log("In Checkloaded", "STATE reduced for purpose: ", this),
    v(
      i
    ).forEach(
      (
        { id: t, noCyc: n } = (e = (e) => i[e]) =>
          ((
            {
              yesdef: t,
              fetched: n,
              prefix: r,
              error: i,
              enabled: s,
              inited: a
            } = (e) => e
          ) =>
            s
              ? (t || o.push(e),
                (e.noCyc = n && t && !r),
                a || !s || i ? {} : e)
              : null)(e.map)
      ) =>
        t && l && !re(t, e.paths)
          ? N(t, s) && d.push(t)
          : t && te(this)(["fb", "wait", "another"], l && !0, !0, !(!l && n))
    ),
    l && d.length)
  )
    return (
      ((a = ee([
        "setTimeout",
        "Load setTimeout for modules: " + d,
        null,
        d
      ])).NAME = s),
      Z(a)
    );
  (b = !1),
    (E =
      !!l &&
      undefined &&
      u &&
      !E &&
      setTimeout(() => C.bind(this) && null, 50));
  var f,
    m = (
      { m: e, depMaps: t, id: i, tt: s, p: a } = (e) =>
        (i = e.map.id) && {
          m: e,
          depMaps: e.depMaps,
          id: i,
          tt: { id: i },
          p: {}
        }
    ) =>
      p(
        t
          .map((e) => e.id)
          .forEach(
            (t, i) =>
              (f = se(n).yes(t) && n[t]) &&
              !e.depMatched[i] &&
              !a[t] &&
              (se(s).yes(t) && s[t]
                ? p(e.defineDep(i, r[t])) && e.check()
                : m(f))
          )
      ) && (a[i] = !0);
  return o.forEach((e) => (e.error ? e.emit(h, e.error) : m(e)));
}
const O = "packages",
  I = "location",
  x = "baseUrl",
  F = "urlArgs",
  R = (
    e = (e) => {
      const t = g(e[F] === f)
        ? (t, n) => (-1 === n.indexOf("?") ? "?" : "&") + e[F]
        : e[F];
      return "/" === e[x].charAt(e[x].length - 1)
        ? { ...e, [F]: t }
        : { ...e, [x]: `${e[x]}/`, [F]: t };
    },
    t,
    n,
    r,
    i,
    s
  ) => {
    v(e).forEach((n = (n) => {
      const i = ["paths", "bundles", "config", "map"];
      return p(i.includes(n) ? i.forEach((e) =>
                t(`CONFIG.${e}`, r.CONFIG[e] ? r.CONFIG[e] : {})
              ) : t(`CONFIG.${n}`, e[n])) && n;
    }, s) => i(r.CONFIG[n], e[n], !0, !0));
    const { shims: a, shim: d } = ((e, n) => {
      var i = r.CONFIG.shim;
      return (
        e &&
          v(e).forEach((n, i) =>
            e[n].forEach((e) => t(`bdlMap.${e}`, e !== n ? n : r.bdlMap[e]))
          ),
        p(
          n &&
            v(n).forEach((e, t) => {
              var a = n[e];
              return (
                p("[object Array]" === s(a).string() && (a = { REM: a })) &&
                p(
                  (a.exports || a.init) &&
                    !a.exportsFn &&
                    (a.exportsFn = r.makeShimExports(a))
                ) &&
                (i[e] = a)
              );
            })
        ),
        { shim: i, shims: n }
      );
    })(e.bundles, e.shim);
    return (
      p(t(`CONFIG.${d}`, a ? d : r.CONFIG.shim)) &&
      p(
        (e[O] ? e[O] : []).forEach((e) => {
          var n = (e = g(e === f) ? { name: e } : e).name;
          (!e[I] || t(`CONFIG.paths.${n}`, e[I])) &&
            t(
              `CONFIG.bundle.${n}`,
              `${e.name}/${(e.main || "main")
                .replace(/^\.\//, "")
                .replace(/\.js$/, "")}`
            );
        })
      ) &&
      ((o = r.dependencies),
      p(
        v(o).forEach(
          (e = (e) => !o[e].inited && !o[e].map.unnormalized && e) =>
            (o[e].map = n(e, null, !0))
        )
      )) &&
      (e.REM || e.cb) &&
      r.require(e.REM || [], e.cb)
    );
    var o;
  };
var k = [];
const A = (e) => (k = e),
  S = "init",
  G = (e, t, n) => (t && n && (t[n] = e), !0),
  T = (e) => typeof e,
  q = (e) => (e && e.constructor === Object ? Object.keys(e) : []);
function $() {
  var e,
    t = [];
  const n = (e) =>
      t.sort((e, t) => t - e).map((n, r) => n[0] === e && t.splice(r, 1)),
    { STATE: r, BUILD: i, makeModuleMap: s } = y.bind(
      this,
      e,
      n,
      () => t.shift(),
      t
    ),
    a = () =>
      (!k.length ||
        G(
          k.forEach((e) => {
            var n = e[0];
            (!T("string" === n) || (r.defQueueMap[n] = !0)) && t.push(e);
          })
        )) &&
      A([]),
    { makeRequire: d, callGetModule: o, getGlobal: u } = y.bind(
      this,
      e,
      n,
      () => t.shift(),
      t,
      a
    ),
    { getModule: p } = h(
      se,
      l(["CONFIG", "urlFchd", "load"], 0, r),
      l(["onResourceLoad", "exec", "onError"], 0, i),
      this.moduleProto,
      this
    ),
    f = arguments[0],
    m = {
      bdlMap: {},
      NAME: f,
      defQueue: t,
      defQueueMap: {},
      makeModuleMap: s,
      nextTick: i.nextTick,
      Module: c,
      load: (e, t) => i.load(r, e, t),
      execCb: (e, t, n, r) => t.apply(r, n),
      onError: Z,
      CONFIG: r.CONFIG ? r.CONFIG : {},
      unDE: r.unDE ? r.unDE : {},
      enabledRegistry: r.enabledRegistry ? r.enabledRegistry : {},
      urlFchd: r.urlFchd ? r.urlFchd : {},
      defined: r.defined ? r.defined : {},
      dependencies: r.dependencies ? r.dependencies : {},
      makeShimExports: (t) =>
        function () {
          return (
            (t[S] && t[S].apply(e, arguments)) || (t.exports && u(t.exports))
          );
        },
      enable: (e) =>
        se(r.dependencies).yes(e.id) && r.dependencies[e.id] && p(e).enable(),
      completeLoad: (e) => {
        var n, i;
        for (a(); t.length && (t.shift(), !n); )
          (n = !0) &&
            (i = i[0] = null === i[0] ? e : i[0] === e ? (n = !0) : null) &&
            o(i);
        r.defQueueMap = {};
        var s,
          d = ((s = r.dependencies), se(s).yes(e) && s[e]);
        if (!n && !se(r.defined).yes(e) && d && !d.inited) {
          var c = se(r.CONFIG.shim).yes(e) ? r.CONFIG.shim[e] : {};
          if (r.CONFIG.enforceDefine && (!c.exports || !u(c.exports)))
            return (
              !re(e, r.CONFIG.paths) &&
              Z(ee(["nodefine", "No define call for " + e, null, [e]]))
            );
          o([e, c.REM || [], c.exportsFn]);
        }
        return C(this.checkProto) && !0;
      }
    };
  return (
    C(this.checkProto) &&
    G(q(m).forEach((e) => (r[e] = m[e]))) &&
    (r.makeRequire = (e, t) => d(e, t, f)) &&
    K("requir", r.makeRequire()) &&
    X(r) &&
    r
  );
}
var j,
  w,
  D = {},
  U = (e) => typeof e,
  L = (e, t, n) => (t && n && (t[n] = e), !0),
  P = "undefined",
  Q = (e) => function () {}.bind(e),
  _ = (e) => se(D.dependencies).yes(e) && D.dependencies[e],
  B = "require",
  J = "getAttribute",
  z = !1,
  V = {},
  Y = (
    { nm: e, rem: t, c: n, n: r } = (
      e = (e, t, n) =>
        U("string" !== e)
          ? { rem: e, c: t }
          : se(t).string() !== le
          ? { nm: e, rem: t, c: n }
          : { nm: e, c: t }
    ) => ({
      ...e,
      n:
        j ||
        ((w && se(w).interA()) ||
          se()
            .tag()
            .sort((e, t) => t - e)
            .map((e) => se(e).interA() && (w = e)),
        w)
    })
  ) =>
    L(
      (t =
        !t && se(n).string() === ue && n.length
          ? ((
              { rem: e, cb: t } = (e, t) => ({
                cb: t
                  .toString()
                  .replace(
                    /\/\*[\s\S]*?\*\/|([^:"'=]|^)\/\/.*$/gm,
                    (e, t) => t || ""
                  )
                  .replace(
                    /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
                    (t, n) => e.push(n)
                  ),
                rem: e
              })
            ) => (1 === t.length ? [B] : [B, "exports", de]).concat(e))(t)
          : t)
    ) &&
    L((e = z && !e ? r()[J](ne(!0)) : e)) &&
    L((D = z ? V[r()[J](ne())] : D)) &&
    (!!D || A([...k, [e, t, n]])) &&
    D.defQueue.push([e, t, n]) &&
    (D.defQueueMap[e] = !0) && { amd: { jQuery: !0 } };
const K = (e, t, n) => ("delete" === n ? delete D[e] : (D[e] = t)),
  W = U(!1) && U(!1) && "undefined".document,
  X = (e) => (D = e),
  H = (e, t = []) => {
    var n = null;
    try {
      e(...t);
    } catch (e) {
      n = e;
    }
    return n;
  },
  Z = (e = ee, t = (t) => t && t(e)) => {
    !e.ids.reduce(
      (t = (t = _) => ({ ...t, err: e })) =>
        t.events && t.events.error && t.emit("error", e) && !0
    ) && Q.onError(e);
  },
  ee = (e) =>
    e.constructor === Object
      ? e
      : {
          ...new Error(
            `${e[1]}\nhttps://REQUIREJS.org/docs/errors.html#${e[0]}`
          ),
          requireType: e[0],
          ids: e[3],
          originalError: e[2]
        },
  te = class {
    constructor() {
      const e = arguments[0];
      return function () {
        var t = arguments[0],
          n = arguments[1];
        const r = t.constructor === Array ? 0 : 1;
        (t = t.constructor === Array ? () => {} : t) &&
          (n = n.constructor === Array ? n : t) &&
          L(t.constructor === Function && t()) &&
          L(n.constructor === Array) &&
          n.forEach((t, n) =>
            t.includes(".")
              ? (e[t.split(".")[0]][t.split(".")[1]] = arguments[n + r])
              : (e[t] = arguments[n + r])
          );
      };
    }
  },
  ne = (e) => `data-require${e ? de : "context"}`,
  re = (e, t) => {
    var n = se(t).yes(e) && t[e];
    if (n && se(n).string() === le && n.length > 1)
      return (
        n.shift(),
        D.require.undef(e),
        D.makeRequire(null, { skipMap: !0 })([e]),
        !0
      );
  },
  ie = (e, t, n, r, i, s) => {
    const a = () => ({
        parseName: (...e) => {
          var t = e[0],
            n = e[1],
            r = e[2];
          if (!t) return null;
          "." === t[0].charAt(0) &&
            n &&
            (t = n.slice(0, n.length - 1).concat(t)),
            /\.js$/.test(t[t.length - 1]) &&
              r &&
              t[t.length - 1].replace(/\.js$/, "");
          for (let e = 0; e < t.length; e++) {
            const n = "." === t[e] && t.splice(e, 1);
            if (n) continue;
            e = n ? e - 1 : e;
            !(0 === e || (1 === e && ".." === t[2]) || ".." === t[e - 1]) &&
              e > 0 &&
              t.splice(e - 1, 2) &&
              (e -= 2);
          }
          return t.join("/");
        },
        convertName: (e, t, n, r) => {
          if (!n || !t || (!r && !t["*"])) return e;
          var s,
            a,
            d,
            o = e.split("/");
          for (let e = o.length; e > 0; e -= 1) {
            const n = o.slice(0, e).join("/"),
              i = (e = (e) => r.slice(0, e).join("/")) => se(t).yes(e) && t[e],
              l = (t = 0) => {
                let s = r.length;
                var d = i && se(i).yes(n) && i[n],
                  o = i && se(i).yes(n) && i[n];
                return d && (a = e) && (o ? ((e, t) => e)(s--) : null);
              };
            var c = t && t["*"];
            L(
              t &&
                t["*"] &&
                se(t["*"]).yes(n) &&
                (d = c[n]) &&
                r &&
                l() &&
                !d &&
                c &&
                se(c).yes(n) &&
                (d = c[n]) &&
                (s = e)
            ) &&
              r &&
              l();
          }
          return i ? o.splice(0, a, i).join("/") : (d && ((i = d), (a = s)), e);
        }
      }),
      d = t && t.split("/");
    return (
      (e = a().parseName(e, d, r) && a().convertName(e, i, n, d)),
      se(s).yes(e) ? s[e] : e
    );
  },
  se = (e) => {
    const t = (e) => "String" === e.constructor && "NS" === e.toUpperCase();
    return {
      yes: (t) => e[ce](t),
      reducer: (t, n) => {
        const r =
          e[3] &&
          U("object" === e[0][t]) &&
          e[0][t] &&
          !se(e[0][t]).a() &&
          !se(e[0][t]).string() === ue &&
          !(e[0][t] instanceof RegExp);
        return e[0]
          ? (e[2] || !se(e[1]).yes(t)) &&
              (e[1][t] = r ? e[1][t] || {} : e[0][t]) &&
              he(e[1][t], e[0][t], e[2], e[3]) &&
              e[1]
          : e[1];
      },
      create: (e = t) => fe(e),
      string: () => oe(e),
      a: (e) => e.string() === le,
      tag: (t) => document.getElementsByTagName(e || "script")[t],
      interA: (e) => "interactive" === e.readyState
    };
  },
  ae = { version: "2.3.6.carducci", isBrowser: W },
  de = "module",
  oe = Object.prototype.toString,
  ce = "hasOwnProperty",
  le = "[object Array]",
  ue = "[object Function]",
  pe = (e) => (e && e.constructor === Object ? Object.keys(e) : []),
  he = (e, t, n, r) => pe(t).reduce(se([t, e, n, r]).reducer(), e),
  fe = (e) =>
    document["createElementNS" + (e ? "NS" : "")](e ? "html:script" : "script");
/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.3.6.carducci Copyright jQuery Foundation and other contributors.
 * Released under MIT license, https://github.com/REQUIREJS/REQUIREJS/blob/master/LICENSE
 */ class me {
  constructor() {
    const e = arguments[1],
      t = arguments[2],
      n = arguments[3];
    return (
      (this.require = (e) => (e.require ? e.require : (e.require = t(e.map)))),
      (this.exports = (e) =>
        (e.usingExports = !0) &&
        e.map.yesdef &&
        (e.exports
          ? (n[e.map.id] = e.exports)
          : (e.exports = n[e.map.id] = {}))),
      (t = arguments[0]) =>
        !t[de] &&
        (t[de] = {
          id: t.map.id,
          uri: t.map.url,
          config: () => (se(e).yes(t.map.id) ? e[t.map.id] : {}),
          exports: t.exports || (t.exports = {})
        })
    );
  }
}
function ge() {
  var e,
    t = { configuration: {}, REQUIREJS: null };
  e = U("undefined" === e) ? void 0 : e;
  var n,
    r,
    i = "_",
    s = "baseUrl",
    a = "onError",
    d = "error",
    o = "setAttribute",
    c = "attachEvent",
    l = "addEventListener",
    p = (t.REQUIREJS = (e, t, n, r) => {
      var s,
        a,
        o = i;
      if (!se(e).string() === le && U("string" !== e))
        return (a = e), se(t).a() ? (e = t) && (t = n) && (n = r) : (e = []);
      if (
        ((o = a && a.context ? a.context : o) && L((s = se(V).yes(o) && V[o])),
        !s)
      ) {
        const {
          CONFIG: e,
          startTime: t,
          dependencies: n,
          defined: r,
          enabledRegistry: i,
          NAME: a
        } = s;
        s = V[o] = $.bind({
          STATE: s,
          BUILD: p,
          makeModuleMap: h,
          KeyValue: K,
          Y: L,
          checkProto: {
            CONFIG: e,
            startTime: t,
            dependencies: n,
            defined: r,
            enabledRegistry: i,
            NAME: a
          },
          moduleProto: { makeModuleMap: h, useInteractive: z, _e: d }
        });
      }
      let c = {};
      return (
        [
          "CONFIG",
          "bdlMap",
          "makeShimExports",
          "dependencies",
          "require"
        ].forEach((e) => (c[e] = s[e])),
        L(a && R(a, K, h, c, he, se)) && s.require(e, t, n)
      );
    });
  function h(
    e = arguments[0],
    t = arguments[1],
    n = arguments[2],
    r = arguments[3]
  ) {
    var i = t ? t.name : null,
      s = e,
      a = !0;
    e = (!!e || L((a = !1))) && (e || "_@r" + (v += 1));
    const d = [b.CONFIG.nodeIdCompat, b.CONFIG.system, b.CONFIG.bundle],
      o = (t = (e) => e.indexOf("!")) =>
        t > -1 ? [e.substring(0, t), e.substring(t + 1, e.length)] : [e, ""];
    var c,
      l,
      p,
      h = o(e),
      f = h[0],
      m = "",
      g = !f || c || n ? "" : "_unnormalized" + (M += 1);
    return (
      (e = h[1]) &&
        (f
          ? (m = n ? e : -1 === e.indexOf("!") ? ie(e, i, r, ...d) : e) &&
            (p = f + "!" + m + g)
          : te(this)(
              ["normed", "names", "p", "normed", "isNormed", "url", "id"],
              ie(e, i, r, ...d),
              o(m),
              h[0],
              h[1],
              !0,
              (u(m).prototype = { CONFIG: b.CONFIG, bdlMap: b.bdlMap }),
              m + g
            )),
      {
        prefix: f,
        name: m,
        parentMap: t,
        unnormalized: !!g,
        url: l,
        givenName: s,
        yesdef: a,
        id: p
      }
    );
  }
  console.log("In Require: ", "BUILD", p);
  const f = !W && !1,
    m =
      W && "PLAYSTATION 3" === "undefined".platform
        ? /^complete$/
        : /^(complete|loaded)$/;
  console.log("In Require: ", "makeModuleMap", "configure", h, R);
  var g,
    y,
    E = {
      waitSeconds: 7,
      baseUrl: "./",
      ...["paths", "bundles", "bundle", "shim", "config"].map((e) => ({
        [e]: {}
      }))
    },
    b = { NAME: null, CONFIG: E },
    v = 1,
    M = 1,
    N = (
      e = (e) =>
        "load" === e.type ||
        m.test((e.currentTarget || e.srcElement).readyState)
    ) => L("undefined"((w = e ? null : w))) && e && I(N),
    C = (e = N) => b.completeLoad(e.id),
    O = (e) => {
      var t = I(e);
      if (!re(t.id, b.CONFIG.paths)) {
        const n = pe(b.dependencies)
          .map((e, n) =>
            0 !== e.indexOf("_@r")
              ? b.dependencies[e].depMaps.forEach((n) =>
                  n.id === t.id ? e : ""
                )
              : ""
          )
          .filter((e) => "" !== e);
        return Z(
          ee([
            "scripterror",
            "Script error for " +
              (t.id + (n.length ? `" needed by: ${n.join(", ")}` : '"')),
            e,
            [t.id]
          ])
        );
      }
    },
    I = (
      { rm: e, n: t } = (e) => ({
        rm: (e, t, n, r) =>
          e.detachEvent
            ? r && e.detachEvent(r, t)
            : e.removeEventListener(n, t, !1),
        n: e.currentTarget || e.srcElement
      })
    ) =>
      e(t, C, "load", "onreadystatechange") &&
      e(t, O, d) && { node: t, id: t && t.getAttribute(ne(!0)) };
  p({}),
    console.log("In Require: ", "BUILD(.start)", p),
    (p.start = { contexts: V }),
    L(
      ["toUrl", "undef", "defined", "specified"].forEach(
        (e) =>
          (p[e] = function () {
            return V._.require[e].apply(V._, arguments);
          })
      )
    ) &&
      W &&
      (y = p.start.head = se("base").tag(0)
        ? undefined.parentNode
        : se("head").tag()) &&
      (p[a] = (e) => e) &&
      (p.createNode = (e, t, n) => ({
        ...(e.xhtml ? se().create("NS") : se().create()),
        type: e.scriptType || "text/javascript",
        charset: "utf-8",
        async: !0
      })) &&
      (p.load = (t, n, r) => {
        const i = (t && t.CONFIG) || E;
        if (W) {
          var s = p.createNode(i, n, r);
          return (
            s[o](ne(), t.NAME),
            s[o](ne(!0), n),
            !s[c] ||
            (s[c].toString && s[c].toString().indexOf("[native code") < 0)
              ? (s[l]("load", C, !1), s[l](d, O, !1))
              : ((z = !0), s[c]("onreadystatechange", C)),
            (s.src = r),
            i.onNodeCreated && i.onNodeCreated(s, i, n, r),
            (j = s),
            y.appendChild(s),
            (j = null),
            s
          );
        }
        if (f) {
          const i = H(e(() => {}, 0) && t.completeLoad(n));
          i &&
            t[a](
              ee([
                "importscripts",
                `importScripts failed for ${n} at ${r}`,
                i,
                [n]
              ])
            );
        }
      }) &&
      console.log("BUILD product (of Require) :", p);
  const x = {
    BUILD: p,
    requir:
      U(t.REQUIREJS === s) || se(t.REQUIREJS).string() !== ue
        ? p
        : () => {
            const i = U(t.REQUIREJS !== s),
              a = U(require !== P) && !se(require).string() === ue;
            L("configuration", i ? (t.REQUIREJS ? a : require) : null) &&
              L("REQUIREJS", i ? void 0 : null);
            const d = {
              CONFIG: (e) => p(e),
              nextTick: (t) => (U(e !== P) ? e(t, 4) : t())
            };
            return L(pe(d).forEach((e) => (p[e] = d[e]))) &&
              L(["version", "isBrowser"].forEach((e) => (p[e] = ae[e]))) &&
              W &&
              !t.configuration.skipDataMain
              ? L(
                  se()
                    .tag()
                    .sort((e, t) => t - e)
                    .forEach(
                      (
                        { head: e, dataMain: i } = (t) => {
                          const n = e
                            ? { head: e, dataMain: i }
                            : {
                                head: t.parentNode,
                                dataMain: t.getAttribute("data-main")
                              };
                          return (e = n.head) && (i = n.dataMain) && n;
                        }
                      ) =>
                        i &&
                        L((n = i || n)) &&
                        (!(!t.configuration.baseUrl && -1 === n.indexOf("!")) ||
                          ((r = n.split("/")) &&
                            (n = r.pop()) &&
                            (g = r.length ? r.join("/") + "/" : "./") &&
                            (t.configuration.baseUrl = g))) &&
                        (n = n.replace(/\.js$/, "")) &&
                        (!/^[/:?.]|(.js)$/.test(n) || (n = i)) &&
                        (t.configuration.REM = t.configuration.REM
                          ? t.configuration.REM.concat(n)
                          : [n])
                    )
                )
              : p(t.configuration);
          },
    define: Y
  };
  return (
    L(Object.keys(x).forEach((e, t) => (this[e] = Object.values(x)[t]))) && this
  );
}
class ye {
  constructor(e, t) {
    console.log(
      "Example headers, ev's :",
      JSON.stringify(e),
      JSON.stringify(t)
    ),
      (this.handle = async (e) => {
        const { requir: t } = ge(),
          n = t("mastercard-locations"),
          r = t("mastercard-places");
        var i = null,
          s = null;
        const a = async (e, t) => {
          const a = (e, t) => e || t;
          !i &&
            console.log("initializing mastercard api") &&
            (s = n.MasterCardAPI) &&
            (i = !0) &&
            s.init({
              sandbox: "production" !== secrets.NODE_ENV,
              authentication: new s.OAuth(
                secrets.MASTERCARD_CONSUMER_KEY,
                Buffer.from(secrets.MASTERCARD_P12_BINARY, "base64"),
                "keyalias",
                "keystorepassword"
              )
            });
          let d = null;
          if ("getAtms" === t) {
            const { PageLength: t, PostalCode: r, PageOffset: i } = e.body;
            d = await n.ATMLocations.query(
              { PageLength: t, PostalCode: r, PageOffset: i },
              a
            );
          } else if ("getMerchants" === t) {
            const {
                countryCode: t,
                latitude: n,
                longitude: i,
                distance: s
              } = e.body,
              o = {
                pageOffset: 0,
                pageLength: 10,
                radiusSearch: "true",
                unit: "km",
                distance: s,
                place: { countryCode: t, latitude: n, longitude: i }
              };
            d = await r.MerchantPointOfInterest.create(o, a);
          } else
            "getNames" === t
              ? (d = await r.MerchantCategoryCodes.query({}, a))
              : "getTypes" === t &&
                (d = await r.MerchantIndustries.query({}, a));
          return d && d;
        };
        let d = null;
        return (
          "/deposit" === e.url
            ? (d = await a(e, "getAtms"))
            : "/merchant_names" === e.url
            ? (d = await a(e, "getNames"))
            : "/merchant_types" === e.url
            ? (d = await a(e, "getTypes"))
            : "/merchants" === e.url && (d = await a(e, "getMerchants")),
          d
            ? new Response(JSON.stringify(`{data: ${d} }`), {
                status: 200,
                message: "success: " + e.url,
                headers: { "Content-Type": "application/json" }
              })
            : new Response(
                JSON.stringify(`{error:${"no success doof- " + e.url}}`),
                {
                  status: 500,
                  message: "no success doof: " + e.url,
                  headers: { "Content-Type": "application/json" }
                }
              )
        );
      }),
      (this.el = e) &&
        (this.env = t) &&
        this.el.blockConcurrencyWhile(() => {
          let e = this.el.storage.get("esm");
          this.value = e || 0;
        });
  }
  async fetch(e) {
    return await this.handle(e);
  }
}
/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.3.6.carducci Copyright jQuery Foundation and other contributors.
 * Released under MIT license, https://github.com/REQUIREJS/REQUIREJS/blob/master/LICENSE
 */ class Ee {
  constructor(e, t) {
    console.log("Require headers", JSON.stringify(e)) &&
      (this.el = e) &&
      (this.env = t) &&
      this.el.blockConcurrencyWhile(async () => {
        let e = await this.el.storage.get("require");
        this.state = e || 0;
      });
  }
  fetch(e, t) {
    console.log("fetch require request :", JSON.stringify(e));
    var n,
      r = { configuration: {}, REQUIREJS: null },
      i = (e) => typeof e;
    n = i("undefined" === n) ? void 0 : n;
    var s,
      a,
      d,
      o,
      c,
      l,
      u = {},
      p = "_",
      h = class {
        constructor() {
          const e = arguments[0];
          return function () {
            var t = arguments[0],
              n = arguments[1];
            const i = t.constructor === Array ? 0 : 1;
            (t = t.constructor === Array ? () => {} : t) &&
              (n = n.constructor === Array ? n : t) &&
              X(r, "undefined", t.constructor === Function && t()) &&
              X(r, "undefined", n.constructor === Array) &&
              n.forEach((t, n) =>
                t.includes(".")
                  ? (e[t.split(".")[0]][t.split(".")[1]] = arguments[n + i])
                  : (e[t] = arguments[n + i])
              );
          };
        }
      },
      f = "getAttribute",
      m = [],
      g = !1,
      y = "*",
      E = "location",
      b = "baseUrl",
      v = "urlArgs",
      M = "string",
      N = "exportsFn",
      C = "exports",
      O = "module",
      I = "onError",
      x = "defined",
      F = "defining",
      R = "enabled",
      k = "error",
      A = "events",
      S = "init",
      G = "undefined",
      T = G,
      q = G,
      $ = i(!1) && i(!1) && T.document,
      j = { version: "2.3.6.carducci", isBrowser: $ },
      w = "require",
      D = "[object Array]",
      U = "[object Function]",
      L = Object.keys,
      P = Object.prototype.toString,
      Q = "prototype",
      _ = "setAttribute",
      B = "attachEvent",
      J = "addEventListener",
      z = ["toUrl", "undef", "defined", "specified"],
      V = {
        mixin: (e, t, n, r) => L(t).reduce(K([t, e, n, r]).reducer(), e),
        mk: (e) =>
          e.constructor === Object
            ? e
            : {
                ...new Error(
                  `${e[1]}\nhttps://REQUIREJS.org/docs/errors.html#${e[0]}`
                ),
                requireType: e[0],
                ids: e[3],
                originalError: e[2]
              },
        dr: (e) => `data-require${e ? O : "context"}`,
        concat: (
          { ds: e, cb: t } = (e, t) => ({
            cb: t
              .toString()
              .replace(
                /\/\*[\s\S]*?\*\/|([^:"'=]|^)\/\/.*$/gm,
                (e, t) => t || ""
              )
              .replace(
                /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
                (t, n) => e.push(n)
              ),
            ds: e
          })
        ) => (1 === t.length ? [w] : [w, C, O]).concat(e),
        rmvScrpt: (e, t) => {
          const n = "getAttribute",
            i = (n) => (n ? e : t);
          return (
            $ &&
            X(
              r,
              "undefined",
              K()
                .tag()
                .forEach(
                  (e) =>
                    e[n](V.dr(!0)) === i(!0) &&
                    e[n](V.dr()) === i() &&
                    e.parentNode.removeChild(e)
                )
            )
          );
        },
        hasPathFallback: (e, t) => {
          var n = K(t).yes(e) && t[e];
          if (n && K(n).string() === D && n.length > 1)
            return (
              n.shift(),
              c.require.undef(e),
              c.makeRequire(null, { skipMap: !0 })([e]),
              !0
            );
        },
        normalize: (e, t, n, i, s, a) => {
          const d = () => ({
              parseName: (e, t, n) =>
                e &&
                ((
                  { nm: e, nml: r = (e) => /\.js$/.test(e[e.length - 1]) } = (
                    e
                  ) => ({
                    nm:
                      "." === e.nm[0].charAt(0) && t
                        ? t.slice(0, t.length - 1).concat(e.nm)
                        : e.nm,
                    nml: n ? e.nml.replace(/\.js$/, "") : e.nml
                  })
                ) => {
                  for (let t = 0; t < e.length; t++) {
                    const n = "." === e[t] && e.splice(t, 1);
                    if (n) continue;
                    t = n ? t - 1 : t;
                    !(
                      0 === t ||
                      (1 === t && ".." === e[2]) ||
                      ".." === e[t - 1]
                    ) &&
                      t > 0 &&
                      e.splice(t - 1, 2) &&
                      (t -= 2);
                  }
                  return e.join("/");
                })((e = e.split("/"))),
              convertName: function (
                e = arguments[0],
                t = arguments[1],
                n = arguments[2],
                i = arguments[3]
              ) {
                if (!n || !t || (!i && !t[y])) return e;
                var a,
                  d,
                  o,
                  c = e.split("/"),
                  l = t && t[y];
                for (let e = c.length; e > 0; e -= 1) {
                  const n = c.slice(0, e).join("/"),
                    s = (e = (e) => i.slice(0, e).join("/")) =>
                      K(t).yes(e) && t[e],
                    u = (t, r = 0) => {
                      let i = t.ph.length;
                      var d = t.mV && K(t.mV).yes(n) && t.mV[n],
                        o = s && K(s).yes(n) && s[n];
                      return d && (a = e) && (o ? ((e, t) => e)(i--) : null);
                    };
                  X(
                    r,
                    "undefined",
                    t &&
                      t[y] &&
                      K(t[y]).yes(n) &&
                      ((a = this).folder = a.configMap[n]) &&
                      i &&
                      u(this) &&
                      !d &&
                      l &&
                      K(l).yes(n) &&
                      void ((o = this).folder = o.configMap[n])
                  ) &&
                    i &&
                    u(this);
                }
                return s ? c.splice(0, a, s).join("/") : e;
              }
            }),
            o = t && t.split("/");
          return (
            (e = d().parseName(e, o, i) && d().convertName(e, s, n, o)),
            K(a).yes(e) ? a[e] : e
          );
        }
      },
      Y = (r.REQUIREJS = function () {
        var e,
          t,
          n = arguments[0],
          r = arguments[1],
          s = arguments[2],
          a = arguments[3],
          d = p;
        return !K(n).string() === D && i(n !== M)
          ? ((t = n),
            K(r).a() ? h(this)(["ds", "cb", "eb"], r, s, a) : (n = []))
          : ((d = t && t.context ? t.context : d),
            (e =
              (e = K(u).yes(d) && u[d]) ||
              (u[d] = new Y.start.newRequireable(d))),
            t && e.configure(t),
            e.require(n, r, s));
      }),
      K = (e) => {
        const t = (e) => "String" === e.constructor && "NS" === e.toUpperCase();
        return {
          yes: (t) => e[Q].hasOwnProperty(t),
          reducer: (t, n) =>
            e[0]
              ? (e[2] || !K(e[1]).yes(t)) &&
                ((
                  n,
                  r = e[3] &&
                    i("object" === n) &&
                    n &&
                    !K(n).a() &&
                    !K(n).string() === U &&
                    !(n instanceof RegExp)
                ) =>
                  (e[1][t] = r ? (e[1][t] ? e[1][t] : {}) : n) &&
                  V.mixin(e[1][t], n, e[2], e[3]) &&
                  e[1])(e[0][t])
              : e[1],
          create: (e = t) =>
            ((e) =>
              document["createElementNS" + (e ? "NS" : "")](
                e ? "html:script" : "script"
              ))(e),
          string: () => P(e),
          a: (e) => e.string() === D,
          tag: (t) => document.getElementsByTagName(e || "script")[t],
          interA: (e) => "interactive" === e.readyState
        };
      };
    function W(e = arguments[0]) {
      var t,
        r,
        i = [],
        s = [],
        a = !1,
        d = !0,
        o = 1e3 * oe.CONFIG.waitSeconds,
        c = o && oe.startTime + o < new Date().getTime();
      if (l) return !0;
      const u = (e, t, n, r) =>
          new Promise(
            (i) =>
              t.forEach(
                (
                  { i: t, dep: i } = (e) => ({
                    i: e.id,
                    dep: K(oe.dependencies).yes(t) && oe.dependencies[t]
                  }),
                  s
                ) =>
                  !e.depMatched[s] &&
                  !r[t] &&
                  (K(n).yes(t) && n[t]
                    ? ["defineDep", "check"].forEach(
                        (n, r) => 0 === r && e[n](s, oe.defined[t])
                      )
                    : f(i, n, r))
              ) && i("")
          ),
        p = (e) => ({ m: e, s: e.depMaps, i: e.map.id }),
        f = ({ m: e, ss: t, i: n } = p, r = { [p.i]: !0 }, i = {}) =>
          u(e, t, r, i).then(() => (i[n] = !0)),
        m = $ || ne;
      l = !0;
      const g = k,
        y = (e = (e) => oe.enRgtry[e]) => {
          const {
            yesdef: t,
            fetched: n,
            prefix: r,
            error: i,
            enabled: a,
            inited: d
          } = e.map;
          return (
            a && !t && s.push(e),
            (e.noCyc = n && t && !r),
            d || !a || i ? {} : e
          );
        };
      return (
        L(oe.enRgtry).forEach(({ id: t, noCyc: n } = y, r) =>
          t && c && !V.hasPathFallback(t, oe.CONFIG.paths)
            ? V.rmvScrpt(t, oe.NAME) && i.push(t)
            : t && h(e)(["fb", "wait", "another"], c && !0, !0, !(!c && n) && d)
        ),
        c && i.length
          ? (((t = V.mk([
              "setTimeout",
              "Load setTimeout for modules: " + i,
              null,
              i
            ])).NAME = oe.NAME),
            ge(t))
          : h(e)(
              () =>
                s.forEach((t) => (e[t][g] ? e[t].emit(g, e[t][g]) : f(e[t]))),
              ["watch", "clrsec"],
              !1,
              (!c || r) && a && m && n(() => W() && null, 50)
            )
      );
    }
    const X = (e, t, n) => ((e[t] = n), !0),
      H = (e, t, n) => {
        var r = null;
        try {
          e[t] = n;
        } catch (e) {
          r = e;
        }
        return r;
      };
    class Z {
      constructor(e = arguments[0], t = arguments[1], n = arguments[2]) {
        const s = ({ m: e, dm: t } = ve, n, r) => {
            if (!K(oe.defined).yes(t.id) || (e && !e.defineEmitComplete))
              return n === x && r(oe.defined[t.id]);
            return ((e = (e) => Me(e)) =>
              e[k] && n === k ? r(e[k]) : e.on(n, r))(t);
          },
          a = {
            events: (K(t).yes(e.id) && t[e.id]) || {},
            map: e,
            shim: K(n).yes(e.id) && n[e.id],
            depExports: [],
            depMaps: [],
            depMatched: [],
            pluginMaps: {},
            depCount: 0,
            init: this.INITED
              ? () => null
              : (
                  e,
                  t = (e) => (this.factory = e),
                  n = (e) =>
                    e
                      ? this.on(k, e)
                      : this.events[k]
                      ? (e = (e) => this.emit(k, e))
                      : null,
                  r = (e) => e || {}
                ) => {
                  const i = {
                    depMaps: e && e.slice(0),
                    eb: n,
                    inited: !0,
                    ignore: r.ignore
                  };
                  if ((L(i).forEach((e) => (this[e] = i[e])), r[R] || this[R]))
                    return this.enable();
                  this.check();
                },
            load: this.urlFchd[this.map.url]
              ? () => null
              : ((e) =>
                  (this.urlFchd[this.map.url] = !0) &&
                  oe.load(e.map.id, e.map.url))(this),
            check: (
              { id: e, v: t } = (...e) => ({ id: (e) => this.map.id, v: {} })
            ) =>
              !this[R] || this.enabling || this.INITED
                ? this[F]
                  ? this[k] && this.emit(k, this[k])
                  : (this[F] = !0) &&
                    (this.depCount > 0 || oe.defined
                      ? () => {}
                      : () => {
                          (t.isDefine = this.map.yesdef) &&
                            (this[C] =
                              K(this.factory).string() !== U
                                ? () => this.factory
                                : () => {
                                    var n = this.depExports,
                                      r =
                                        t.isDefine &&
                                        void 0 === this[C] &&
                                        this[O];
                                    const i = H(
                                      this,
                                      C,
                                      oe.execCb(e, this.factory, n, this[C])
                                    );
                                    var s, a;
                                    return (
                                      i &&
                                        ((this.events[k] && t.isDefine) ||
                                          Y[I] !== ((e) => e)) &&
                                        i &&
                                        ((s = this),
                                        (a = {
                                          requireMap: this.map,
                                          requireModules: t.isDefine
                                            ? [this.map.id]
                                            : null,
                                          requireType: t.isDefine ? "define" : w
                                        }),
                                        L(a).forEach((e) => (s.err[e] = a[e])),
                                        ge((s[k] = i))),
                                      r
                                        ? r
                                          ? r[C]
                                          : this.usingExports
                                          ? this[C]
                                          : null
                                        : this[C]
                                    );
                                  });
                        }) &&
                    (t.isDefine && !this.ignore
                      ? new Promise(
                          (t) => (oe.defined[e] = this[C] && t(""))
                        ).then(
                          () =>
                            Y.onResourceLoad &&
                            Y.onResourceLoad(
                              oe,
                              this.map,
                              this.depMaps.map((e) => e.normalizedMap || e)
                            )
                        )
                      : null) &&
                    fe(e) &&
                    (this[x] = !0) &&
                    X(this, F) &&
                    this[x] &&
                    !this.defineEmitted &&
                    [
                      "defineEmitted",
                      "emit",
                      "defineEmitComplete"
                    ].forEach((e, t) =>
                      1 === t ? this.emit(x, this[C]) : (this[e] = !0)
                    )
                : !K(oe.defQueueMap).yes(e) && this.fetch(),
            normalizeMod: (e, t) => {
              var { name: n, parentMap: r } = this.map;
              const { nodeIdCompat: i, map: a, bundle: d } = oe.CONFIG,
                o = (e) => [e, r ? r.name : null, !0, i, a, d];
              e.normalize &&
                (n = e.normalize(n, (e = o) => V.normalize(e)) || "");
              var c = ee(t.prefix + "!" + n, r, !0);
              s(
                c,
                x,
                (e) =>
                  (this.map.normalizedMap =
                    c &&
                    this[S]([], () => e, null, { enabled: !0, ignore: !0 }))
              );
              ((
                e = (e) =>
                  (!e || this.depMaps.push(c)) &&
                  this.events[k] &&
                  e.on(k, (e) => this.emit(k, e)) &&
                  e
              ) => {
                e && e.enable();
              })(K(oe.dependencies).yes(c.id) && oe.dependencies[c.id]);
            },
            enable: () =>
              (oe.enRgtry[this.map.id] = this) &&
              (this[R] = !0) &&
              (this.enabling = !0) &&
              X(
                r,
                "undefined",
                this.depMaps.forEach((e, t) => {
                  if (i(e === M)) {
                    const i = this.map.yesdef ? this.map : this.map.parentMap;
                    (e = ee(e, i, !1, !this.skipMap)) && (this.depMaps[t] = e);
                    var n = K(be).yes(e.id) && be[e.id];
                    if (n) return (this.depExports[t] = n(this));
                    (() =>
                      X(r, "undefined", (this.depCount += 1)) &&
                      s(e, x, (e) => {
                        if (this.undefed) return null;
                        X(r, "undefined", this.defineDep(t, e)) && this.check();
                      }) &&
                      (this.eb
                        ? s(e, k, this.eb)
                        : this.events[k]
                        ? s(e, k, (e) => this.emit(k, e))
                        : null))();
                  }
                  var a = e.id,
                    d = oe.dependencies[a];
                  !K(be).yes(a) && d && !d[R] && oe.enable(e, this);
                })
              ) &&
              X(
                r,
                "undefined",
                L(this.pluginMaps).forEach(
                  (e = (e) => this.pluginMaps[e], t) =>
                    K(oe.dependencies).yes(e.id) &&
                    oe.dependencies[e.id] &&
                    !oe.dependencies[e.id][R] &&
                    oe.enable(e, this)
                )
              ) &&
              X(r, "undefined", (this.enabling = !1)) &&
              this.check(),
            on: (e, t) =>
              (this.events[e] ? this.events[e] : (this.events[e] = [])).push(t),
            emit: (e, t) =>
              X(
                r,
                "undefined",
                this.events[e].forEach((e) => e(t))
              ) &&
              e === k &&
              delete this.events[e],
            defineDep: (e, t) =>
              !this.depMatched[e] &&
              (this.depMatched[e] = !0) &&
              X(r, "undefined", (this.depCount -= 1)) &&
              (this.depExports[e] = t),
            callPlugin: () => {
              var e = this.map,
                t = e.id,
                n = ee(e.prefix);
              this.depMaps.push(n) &&
                s(n, x, (n) => {
                  if (this.map.unnormalized) return Z[Q].normalizeMod(n, e);
                  var i =
                    K(oe.bdlMap).yes(this.map.id) && oe.bdlMap[this.map.id];
                  if (i) return (this.map.url = ie(i)) && this.load() && null;
                  const s = (e) => this[S]([], () => e, null, { enabled: !0 });
                  s[k] = (e) => {
                    (this.INITED = !0) &&
                      (this[k] = e) &&
                      (e.requireModules = [t]) &&
                      X(
                        r,
                        "undefined",
                        L(oe.dependencies).forEach(
                          (e, n) =>
                            0 ===
                              oe.dependencies[e].map.id.indexOf(
                                t + "_unnormalized"
                              ) && fe(oe.dependencies[e].map.id)
                        )
                      ) &&
                      ge(e);
                  };
                  const a = oe.makeRequire(e.parentMap, {
                    enableBuildCallback: !0
                  });
                  (s.fromText = (n, i) => {
                    var d = e.name,
                      o = ee(d),
                      c = g;
                    (!i || (n = i)) &&
                      (!c || X(r, "undefined", (g = !1))) &&
                      Me(o) &&
                      (!K(oe.CONFIG.config).yes(t) ||
                        (oe.CONFIG.config[d] = oe.CONFIG.config[t]));
                    const l = H(r, "undefined", Y.exec(n));
                    return l
                      ? ge(
                          V.mk([
                            "fromtexteval",
                            `fromText eval for ${t} failed: ${l}`,
                            l,
                            [t]
                          ])
                        )
                      : (!c || (g = !0)) &&
                          this.depMaps.push(o) &&
                          oe.completeLoad(d) &&
                          a([d], s);
                  }) && n.load(e.name, a, s, oe.CONFIG);
                }) &&
                oe.enable(n, this) &&
                (this.pluginMaps[n.id] = n);
            },
            fetch: () => {
              if (this.fetched) return null;
              (this.fetched = !0) && (oe.startTime = new Date().getTime());
              var e = this.map;
              if (!this.shim) return e.prefix ? this.callPlugin() : this.load();
              oe.makeRequire(this.map, { enableBuildCallback: !0 })(
                this.shim.ds || [],
                e.prefix ? this.callPlugin() : this.load()
              );
            }
          };
        L(a).forEach((e) => (this[e] = a[e]));
      }
    }
    function ee(
      e = arguments[0],
      t = arguments[1],
      n = arguments[2],
      i = arguments[3]
    ) {
      var s = t ? t.name : null,
        a = e,
        d = !0;
      e = (!!e || X(r, "undefined", (d = !1))) && (e || "_@r" + (le += 1));
      const o = [oe.CONFIG.nodeIdCompat, oe.CONFIG.system, oe.CONFIG.bundle],
        c = (t = (e) => e.indexOf("!")) =>
          t > -1 ? [e.substring(0, t), e.substring(t + 1, e.length)] : [e, ""];
      var l,
        u,
        p,
        f = c(e),
        m = f[0],
        g = "",
        y = !m || l || n ? "" : "_unnormalized" + (ue += 1);
      return (
        (e = f[1]) &&
          (m
            ? h(this)(
                ["normed", "id"],
                n ? e : -1 === e.indexOf("!") ? V.normalize(e, s, i, ...o) : e,
                m + "!" + g + y
              )
            : h(this)(
                ["normed", "names", "p", "normed", "isNormed", "url", "id"],
                V.normalize(e, s, i, ...o),
                c(g),
                f[0],
                f[1],
                !0,
                ie(g),
                g + y
              )),
        {
          prefix: m,
          name: g,
          parentMap: t,
          unnormalized: !!y,
          url: u,
          gvnName: a,
          yesdef: d,
          id: p
        }
      );
    }
    const te = (
        e = (e) => {
          const t = i(e[v] === M)
            ? (t, n) => (-1 === n.indexOf("?") ? "?" : "&") + e[v]
            : e[v];
          return "/" === e[b].charAt(e[b].length - 1)
            ? { ...e, [v]: t }
            : { ...e, [b]: `${e[b]}/`, [v]: t };
        }
      ) => {
        L(e).forEach((t = (t) => {
          const n = ["paths", "bundles", "STATE.CONFIG", "map"];
          return X(r, "undefined", n.includes(t) ? n.forEach((e) => (oe.CONFIG[e] = oe.CONFIG[e] ? oe.CONFIG[e] : {})) : (oe.CONFIG[t] = e[t])) && t;
        }, n) => V.mixin(oe.CONFIG[t], e[t], !0, !0));
        const { shims: t, shim: n } = ((
          { bundles: e, shims: t } = (e) => ({
            bundles: e.bundles,
            shims: e.shim
          })
        ) => {
          e &&
            L(e).forEach((t, n) =>
              e[t].forEach((e) => (oe.bdlMap[e] = e !== t ? t : oe.bdlMap[e]))
            );
          var n = oe.CONFIG.shim;
          return (
            X(
              r,
              "undefined",
              t &&
                L(t).forEach((e, r) => {
                  var i = t[e];
                  return (
                    (K(i).string() !== D || (i = { ds: i })) &&
                    (!((i[C] || i[S]) && !i[N]) ||
                      (i[N] = oe.makeShimExports(i))) &&
                    (n[e] = i)
                  );
                })
            ),
            { shim: n, shims: t }
          );
        })(e);
        return (
          (oe.CONFIG.shim = t ? n : oe.CONFIG.shim) &&
          ((e = (e) => e.packages) =>
            !e ||
            X(
              r,
              "undefined",
              e.forEach((e) => {
                var t = (e = i(e === M) ? { name: e } : e).name;
                (!e[E] || (oe.CONFIG.paths[t] = e[E])) &&
                  (oe.CONFIG.bundle[t] = `${e.name}/${(e.main || "main")
                    .replace(/^\.\//, "")
                    .replace(/\.js$/, "")}`);
              })
            ))(e) &&
          X(
            r,
            "undefined",
            L(oe.dependencies).forEach(
              (
                e = (e) =>
                  !oe.dependencies[e].inited &&
                  !oe.dependencies[e].map.unnormalized &&
                  e
              ) => (oe.dependencies[e].map = ee(e, null, !0))
            )
          ) &&
          (e.ds || e.cb) &&
          oe.require(e.ds || [], e.cb)
        );
      },
      ne = !$ && !1,
      re =
        $ && "PLAYSTATION 3" === q.platform
          ? /^complete$/
          : /^(complete|loaded)$/;
    function ie() {
      var e = arguments[1],
        t = arguments[2],
        n =
          K(oe.CONFIG.bundle).yes(arguments[0]) &&
          oe.CONFIG.bundle[arguments[0]],
        r = n || arguments[0],
        i = K(oe.bdlMap).yes(r) && oe.bdlMap[r];
      i && ie(i, e, t);
      const s = (n = "") => {
          if (/^[/:?.]|(.js)$/.test(r)) return r + (e || "");
          var i = oe.CONFIG.paths,
            s = r.split("/");
          for (let e = s.length; e > 0; e -= 1) {
            var a = s.slice(0, e).join("/"),
              d = K(i).yes(a) && i[a];
            if (
              (d &&
                h(this)(["pP", "syms"], K(d).a() ? d[0] : d, s.splice(0, e, d)),
              d)
            )
              break;
          }
          return (
            (n = s.join("/")) &&
              (n += e || (/^data:|^blob:|\?/.test(n) || t ? "" : ".js")),
            ("/" === n.charAt(0) || n.match(/^[\w+.-]+:/)
              ? ""
              : oe.CONFIG.baseUrl) + n
          );
        },
        a = s;
      return `${
        oe.CONFIG.urlArgs && !/^blob:/.test(a) ? a + oe.CONFIG.urlArgs(r, a) : a
      }`;
    }
    var se,
      ae,
      de,
      oe = {
        NAME: null,
        CONFIG: {
          waitSeconds: 7,
          baseUrl: "./",
          ...["paths", "bundles", "bundle", "shim", "config"].map((e) => ({
            [e]: {}
          }))
        }
      },
      ce = [],
      le = 1,
      ue = 1,
      pe = (
        e = (e) =>
          "load" === e.type ||
          re.test((e.currentTarget || e.srcElement).readyState)
      ) => X(r, "undefined"((d = e ? null : d))) && e && Ee(pe),
      he = (e = pe) => oe.completeLoad(e.id),
      fe = (e) => delete oe.dependencies[e] && delete oe.enRgtry[e],
      me = (e) => K(oe.dependencies).yes(e) && oe.dependencies[e],
      ge = (e = V.mk, t = (t) => t && t(e)) => {
        !e.ids.reduce(
          (t = (t = me) => ({ ...t, err: e })) =>
            t[A] && t[A][k] && t.emit(k, e) && !0
        ) && Y[I](e);
      },
      ye = (e) => {
        var t = Ee(e);
        if (!V.hasPathFallback(t.id, oe.CONFIG.paths)) {
          const n = L(oe.dependencies)
            .map((e, n) =>
              0 !== e.indexOf("_@r")
                ? oe.dependencies[e].depMaps.forEach((n) =>
                    n.id === t.id ? e : ""
                  )
                : ""
            )
            .filter((e) => "" !== e);
          return ge(
            V.mk([
              "scripterror",
              "Script error for " +
                (t.id + (n.length ? `" needed by: ${n.join(", ")}` : '"')),
              e,
              [t.id]
            ])
          );
        }
      },
      Ee = (
        { rm: e, n: t } = (e) => ({
          rm: (e, t, n, r) =>
            e.detachEvent
              ? r && e.detachEvent(r, t)
              : e.removeEventListener(n, t, !1),
          n: e.currentTarget || e.srcElement
        })
      ) =>
        e(t, he, "load", "onreadystatechange") &&
        e(t, ye, k) && { node: t, id: t && t.getAttribute(V.dr(!0)) };
    class be {
      constructor() {
        return (
          (this.require = (e) =>
            e.require ? e.require : (e.require = oe.makeRequire(e.map))),
          (this.exports = (e) =>
            (e.usingExports = !0) &&
            (e.map.yesdef
              ? e[C]
                ? (oe.defined[e.map.id] = e[C])
                : (e[C] = oe.defined[e.map.id] = {})
              : null)),
          (e) =>
            !e[O] &&
            (e[O] = {
              id: e.map.id,
              uri: e.map.url,
              config: () =>
                K(oe.CONFIG.config).yes(e.map.id)
                  ? oe.CONFIG.config[e.map.id]
                  : {},
              exports: e[C] || (e[C] = {})
            })
        );
      }
    }
    const ve = (e) => ({
        dm: e,
        m: K(oe.dependencies).yes(e.id) && oe.dependencies[e.id]
      }),
      Me = ({ m: e, dm: t } = ve) =>
        e ||
        (oe.dependencies[t.id] = new oe.Module(t, oe.unDE, oe.CONFIG.shim)),
      Ne = (e) =>
        !K(oe.defined).yes(e[0]) && Me(ee(e[0], null, !0))[S](e[1], e[2]),
      Ce = () =>
        (!m.length ||
          X(
            r,
            "undefined",
            m.forEach((e) => {
              var t = e[0];
              (!i(t === M) || (oe.defQueueMap[t] = !0)) && ce.push(e);
            })
          )) &&
        (m = []),
      Oe = (e) => (e ? e.split(".").reduce((e, t) => de[e], {}) : e);
    class Ie {
      constructor() {
        const e = arguments[0];
        [
          "dependencies",
          "enRgtry",
          "unDE",
          "defined",
          "urlFchd",
          "bdlMap"
        ].forEach((e) => (this[e] = {})) &&
          W(this) &&
          (oe = {
            NAME: e,
            defQueue: ce,
            defQueueMap: {},
            makeModuleMap: ee,
            nextTick: Y.nextTick,
            Module: Z,
            load: (e, t) => Y.load(oe, e, t),
            execCb: (e, t, n, r) => t.apply(r, n),
            onError: ge,
            CONFIG: oe.CONFIG,
            unDe: this.unDE ? this.unDE : {},
            enRgtry: this.enRgtry ? this.enRgtry : {},
            urlFchd: this.urlFchd ? this.urlFchd : {},
            defined: this.defined ? this.defined : {},
            dependencies: this.dependencies ? this.dependencies : {},
            configure: te,
            makeShimExports: (e) =>
              function () {
                return (
                  (e[S] && e[S].apply(de, arguments)) || (e[C] && Oe(e[C]))
                );
              },
            makeRequire: (t, n) =>
              ((e, t = (e) => e || {}, n) => {
                const r = (e, t, n) => ({
                    suspend: (s, a, d) => {
                      var o, c;
                      return (
                        t.enableBuildCallback &&
                          a &&
                          K(a).string() === U &&
                          (a.__requireJsBuild = !0),
                        i(s !== M)
                          ? null
                          : K(a).string() === U
                          ? ge(V.mk(["requireargs", "Invalid require call"]), d)
                          : e && K(be).yes(s)
                          ? be[s](oe.dependencies[e.id])
                          : Y.get
                          ? Y.get(oe, s, e, r.parser)
                          : () =>
                              (c = ee(s, e, !1, !0)) &&
                              (o = c.id) &&
                              (K(oe.defined).yes(o)
                                ? oe.defined[o]
                                : ge(
                                    V.mk([
                                      "notloaded",
                                      `Module name ${o} has not been loaded yet for STATE: ` +
                                        n +
                                        !e && "; (No relMap) Use require([])"
                                    ])
                                  ))
                      );
                    },
                    parser: (...n) => {
                      if (r.suspend(...n)) return null;
                      const i = n[0],
                        s = n[1],
                        a = n[2];
                      var d;
                      const o = () => {
                        for (Ce(); ce.length; ) {
                          const e = ce.shift()[0];
                          if (null === e)
                            return ge(
                              V.mk([
                                "mismatch",
                                `Mismatched anonymous define() this: ${
                                  e[e.length - 1]
                                }`
                              ])
                            );
                          Ne(e);
                        }
                        return (oe.defQueueMap = {}) && !0;
                      };
                      return (
                        o(),
                        oe.nextTick(
                          () =>
                            o() &&
                            (d = Me(ee(null, e))) &&
                            (d.skipMap = t.skipMap) &&
                            d[S](i, s, a, { enabled: !0 }) &&
                            W()
                        ),
                        r.parser
                      );
                    }
                  }),
                  s = {
                    isBrowser: $,
                    defined: (t) => K(oe.defined).yes(ee(t, e, !1, !0).id),
                    specified: (t = (t) => ee(t, e, !1, !0).id) =>
                      K(oe.defined).yes(t) || K(oe.dependencies).yes(t),
                    toUrl: (t) => {
                      var n = t.lastIndexOf("."),
                        r = t.split("/")[0];
                      const i =
                          -1 !== n && (!("." === r || ".." === r) || n > 1),
                        s = i ? t.substring(n, t.length) : null;
                      return (
                        (t = i ? t.substring(0, n) : t),
                        ie(
                          V.normalize([
                            t,
                            e && e.id,
                            !0,
                            oe.CONFIG.nodeIdCompat,
                            oe.CONFIG.system,
                            oe.CONFIG.bundle
                          ]),
                          s,
                          !0
                        )
                      );
                    }
                  };
                return (
                  V.mixin(r(e, t, n).parser, s) &&
                  (!!e ||
                    (r(e, t, n).parser.undef = (t) => {
                      Ce();
                      var n = ee(t, e, !0),
                        r = K(oe.dependencies).yes(t) && oe.dependencies[t];
                      return (
                        (r.undefed = !0) &&
                        V.rmvScrpt(t, oe.NAME) &&
                        delete oe.defined[t] &&
                        delete oe.urlFchd[n.url] &&
                        delete oe.unDE[t] &&
                        ce
                          .sort((e, t) => t - e)
                          .map((e, n) => e[0] === t && ce.splice(n, 1)) &&
                        delete oe.defQueueMap[t] &&
                        (oe.unDE[t] =
                          r && r.events.defined ? r.events : oe.unDE[t]) &&
                        r &&
                        fe(t)
                      );
                    })) &&
                  r(e, t, n).parser
                );
              })(t, n, e),
            require: oe.makeRequire(),
            enable: (e) =>
              K(oe.dependencies).yes(e.id) &&
              oe.dependencies[e.id] &&
              Me(e).enable(),
            completeLoad: (e) => {
              var t, n;
              for (Ce(); ce.length && (ce.shift(), !t); )
                (t = !0) &&
                  (n = n[0] =
                    null === n[0] ? e : n[0] === e ? (t = !0) : null) &&
                  Ne(n);
              oe.defQueueMap = {};
              var r = K(oe.dependencies).yes(e) && oe.dependencies[e];
              if (!t && !K(oe.defined).yes(e) && r && !r.inited) {
                var i = K(oe.CONFIG.shim).yes(e) ? oe.CONFIG.shim[e] : {};
                if (oe.CONFIG.enforceDefine && (!i[C] || !Oe(i[C])))
                  return (
                    !V.hasPathFallback(e, oe.CONFIG.paths) &&
                    ge(V.mk(["nodefine", "No define call for " + e, null, [e]]))
                  );
                Ne([e, i.ds || [], i.exportsFn]);
              }
              return W() && !0;
            }
          }) &&
          L(oe).forEach((e) => (this[e] = oe[e]));
      }
    }
    console.log("build product (of Require) :", Y);
    const xe = {
      build: Y,
      require:
        i(r.REQUIREJS === b) || K(r.REQUIREJS).string() !== U
          ? Y
          : () => {
              const e = i(r.REQUIREJS !== b),
                t = i(require !== G) && !K(require).string() === U;
              X(r, "configuration", e ? (r.REQUIREJS ? t : require) : null) &&
                X(r, "REQUIREJS", e ? void 0 : null);
              const d = {
                CONFIG: (e) => Y(e),
                nextTick: (e) => (i(n !== G) ? n(e, 4) : e())
              };
              return (
                X(
                  r,
                  "undefined",
                  L(d).forEach((e) => (Y[e] = d[e]))
                ) &&
                X(
                  r,
                  "undefined",
                  ["version", "isBrowser"].forEach((e) => (Y[e] = j[e]))
                ) &&
                Y({}) &&
                X(
                  r,
                  "undefined",
                  z.forEach(
                    (e) =>
                      (Y[e] = function () {
                        return u._.require[e].apply(u._, arguments);
                      })
                  )
                ) &&
                (!$ ||
                  (ae = (Y.start = {
                    contexts: u,
                    newRequireable: Ie
                  }).head = K("base").tag(0)
                    ? undefined.parentNode
                    : K("head").tag())) &&
                (Y[I] = (e) => e) &&
                (Y.createNode = (e, t, n) => ({
                  ...(e.xhtml ? K().create("NS") : K().create()),
                  type: e.scriptType || "text/javascript",
                  charset: "utf-8",
                  async: !0
                })) &&
                (Y.load = (e, t, r) => {
                  const i = (e && e.CONFIG) || {};
                  if ($) {
                    var s = Y.createNode(i, t, r);
                    return (
                      s[_](V.dr(), e.NAME),
                      s[_](V.dr(!0), t),
                      !s[B] ||
                      (s[B].toString &&
                        s[B].toString().indexOf("[native code") < 0)
                        ? (s[J]("load", he, !1), s[J](k, ye, !1))
                        : ((g = !0), s[B]("onreadystatechange", he)),
                      (s.src = r),
                      i.onNodeCreated && i.onNodeCreated(s, i, t, r),
                      (o = s),
                      ae.appendChild(s),
                      (o = null),
                      s
                    );
                  }
                  if (ne)
                    try {
                      n(() => {}, 0) && e.completeLoad(t);
                    } catch (n) {
                      e[I](
                        V.mk([
                          "importscripts",
                          `importScripts failed for ${t} at ${r}`,
                          n,
                          [t]
                        ])
                      );
                    }
                }) &&
                (!($ && !r.configuration.skipDataMain) ||
                  X(
                    r,
                    "undefined",
                    K()
                      .tag()
                      .sort((e, t) => t - e)
                      .forEach(
                        (
                          { head: e, dataMain: t } = (n) => {
                            const r = e
                              ? { head: e, dataMain: t }
                              : {
                                  head: n.parentNode,
                                  dataMain: n.getAttribute("data-main")
                                };
                            return (e = r.head) && (t = r.dataMain) && r;
                          }
                        ) =>
                          t &&
                          X(r, "undefined", (s = t || s)) &&
                          (!(
                            !r.configuration.baseUrl && -1 === s.indexOf("!")
                          ) ||
                            ((a = s.split("/")) &&
                              (s = a.pop()) &&
                              (se = a.length ? a.join("/") + "/" : "./") &&
                              (r.configuration.baseUrl = se))) &&
                          (s = s.replace(/\.js$/, "")) &&
                          (!/^[/:?.]|(.js)$/.test(s) || (s = t)) &&
                          (r.configuration.ds = r.configuration.ds
                            ? r.configuration.ds.concat(s)
                            : [s])
                      )
                  )) &&
                Y(r.configuration)
              );
            },
      define: (
        { nm: e, ds: t, c: n, n: s } = (...e) => {
          const t = i(e.nm !== M),
            n = K(e.ds).string() !== D;
          return {
            nm: t ? null : e.nm,
            ds: t ? e.nm : n ? null : e.ds,
            c: t || n ? e.ds : e.c,
            n:
              o ||
              ((d && K(d).interA()) ||
                K()
                  .tag()
                  .sort((e, t) => t - e)
                  .map((e) => K(e).interA() && (d = e)),
              d)
          };
        }
      ) =>
        X(
          r,
          "undefined",
          (t = !t && K(n).string() === U && n.length ? V.concat(t, n) : t)
        ) &&
        X(r, "undefined", (e = g && !e ? s()[f](V.dr(!0)) : e)) &&
        X(r, "undefined", (c = g ? u[s()[f](V.dr())] : c)) &&
        (!!c || m.push([e, t, n])) &&
        c.defQueue.push([e, t, n]) &&
        (c.defQueueMap[e] = !0) && { amd: { jQuery: !0 } }
    };
    return (
      console.log("Require product :", xe),
      new Response(xe, {
        status: "200",
        message: "success: " + e.url,
        headers: { "Content-Type": "application/json" }
      })
    );
  }
}
var be = {
  async fetch(e, t) {
    try {
      return "OPTIONS" === e.method
        ? new Response("preflight response for POST", {
            status: 200,
            message: "preflight response for POST",
            headers: {
              "Access-Control-Allow-Headers": [
                "Access-Control-Allow-Methods",
                "Content-Type"
              ],
              "Access-Control-Allow-Methods": ["POST", "OPTIONS"]
            }
          })
        : await (async function (e, t) {
            const n = new URL(e.url);
            var r = n.origin;
            return -1 ===
              [
                "https://vau.money",
                "https://jwi5k.csb.app",
                "https://mastercard-backbank.backbank.workers.dev"
              ].indexOf(r)
              ? ((e) =>
                  new Response(
                    JSON.stringify(
                      `{error:${"no access for this origin- " + e}}`
                    ),
                    {
                      status: "400",
                      message: "no access for this origin: " + e
                    }
                  ))(r)
              : (console.log(
                  "env",
                  t,
                  r,
                  ": making example class durable object"
                ),
                await ((e) => e.get(e.idFromName(n.href)))(
                  t.REQUIRE_CLASS_DURABLE_OBJECT
                )
                  .fetch(e)
                  .then(async (r) => {
                    return (
                      console.log(r),
                      await ((i = t.EXAMPLE_CLASS_DURABLE_OBJECT),
                      i.get(i.idFromName(n.href)))
                        .fetch(e, {
                          headers: {
                            "Content-Type": "application/octet-stream"
                          },
                          method: "POST",
                          body: r.arrayBuffer()
                        })
                        .then(async (e) => await e.json())
                        .then((t) => {
                          console.log(
                            "fetched EXAMPLE_CLASS_DURABLE_OBJECT : ",
                            t
                          );
                          const n = { "Content-Type": "application/json" },
                            r = (e, t) => `{${e[0]}: ${e[1]}, ${t}}`;
                          return t
                            ? t.data
                              ? new Response(
                                  r([!0, JSON.stringify(t.data)], !0),
                                  {
                                    status: "200",
                                    message: "success: " + e.url,
                                    headers: n
                                  }
                                )
                              : new Response(
                                  r(["response", JSON.stringify(t)], !1),
                                  {
                                    status: t.status,
                                    message: t.statusText
                                      ? t.statusText
                                      : t.message,
                                    headers: n
                                  }
                                )
                            : new Response(r(["data", {}], !1), {
                                status: "no response from durable object chain",
                                message: "",
                                headers: n
                              });
                        })
                    );
                    var i;
                  }));
          })(e, t);
    } catch (e) {
      return new Response(e.message);
    }
  }
};
export { ye as DurableObjectExample, Ee as Require, be as default };
//# sourceMappingURL=shim.mjs.map
