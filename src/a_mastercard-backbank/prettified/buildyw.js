const e = (e) => typeof e,
  t = (e, t, r) => (t && r && (t[r] = e), !0),
  r = e(!1) && e(!1) && "undefined".document,
  n = (e, t = []) => {
    var r = null;
    try {
      e(...t);
    } catch (e) {
      r = e;
    }
    return r;
  },
  s = (e) =>
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
  i = class {
    constructor() {
      const e = arguments[0];
      return function () {
        var r = arguments[0],
          n = arguments[1];
        const s = r.constructor === Array ? 0 : 1;
        (r = r.constructor === Array ? () => {} : r) &&
          (n = n.constructor === Array ? n : r) &&
          t(r.constructor === Function && r()) &&
          t(n.constructor === Array) &&
          n.forEach((t, r) =>
            t.includes(".")
              ? (e[t.split(".")[0]][t.split(".")[1]] = arguments[r + s])
              : (e[t] = arguments[r + s])
          );
      };
    }
  },
  o = (e) => "data-require" + (e ? "module" : "context"),
  a = (e, r, n, s, i, o) => {
    const a = () => ({
        parseName: (...e) => {
          var t = e[0],
            r = e[1],
            n = e[2];
          if (!t) return null;
          "." === t[0].charAt(0) &&
            r &&
            (t = r.slice(0, r.length - 1).concat(t)),
            /\.js$/.test(t[t.length - 1]) &&
              n &&
              t[t.length - 1].replace(/\.js$/, "");
          for (let e = 0; e < t.length; e++) {
            const r = "." === t[e] && t.splice(e, 1);
            if (r) continue;
            e = r ? e - 1 : e;
            !(0 === e || (1 === e && ".." === t[2]) || ".." === t[e - 1]) &&
              e > 0 &&
              t.splice(e - 1, 2) &&
              (e -= 2);
          }
          return t.join("/");
        },
        convertName: (e, r, n, s) => {
          if (!n || !r || (!s && !r["*"])) return e;
          var o,
            a,
            d,
            l = e.split("/");
          for (let e = l.length; e > 0; e -= 1) {
            const n = l.slice(0, e).join("/"),
              i = (e = (e) => s.slice(0, e).join("/")) => P(r).yes(e) && r[e],
              u = (t = 0) => {
                let r = s.length;
                var o = i && P(i).yes(n) && i[n],
                  d = i && P(i).yes(n) && i[n];
                return o && (a = e) && (d ? ((e, t) => e)(r--) : null);
              };
            var c = r && r["*"];
            t(
              r &&
                r["*"] &&
                P(r["*"]).yes(n) &&
                (d = c[n]) &&
                s &&
                u() &&
                !d &&
                c &&
                P(c).yes(n) &&
                (d = c[n]) &&
                (o = e)
            ) &&
              s &&
              u();
          }
          return i ? l.splice(0, a, i).join("/") : (d && ((i = d), (a = o)), e);
        }
      }),
      d = r && r.split("/");
    return (
      (e = a().parseName(e, d, s) && a().convertName(e, i, n, d)),
      P(o).yes(e) ? o[e] : e
    );
  },
  d = (e, n) => {
    const s = "getAttribute",
      i = (t) => (t ? e : n);
    return (
      r &&
      t(
        P()
          .tag()
          .forEach(
            (e) =>
              e[s](o(!0)) === i(!0) &&
              e[s](o()) === i() &&
              e.parentNode.removeChild(e)
          )
      )
    );
  };
function l(e, t, r) {
  try {
    var n = {};
    return Object.keys(r).forEach((t) => e.includes(t) && (n[t] = r[t])), n;
  } catch (e) {
    return console.log(this, e);
  }
}
function c() {
  const { CONFIG: e, bdlMap: t } = this;
  var r = arguments[1],
    n = arguments[2],
    s = P(e.bundle).yes(arguments[0]) && e.bundle[arguments[0]],
    i = s || arguments[0],
    o = P(t).yes(i) && t[i];
  o && c(o, r, n);
  const a = (t = "") => {
      if (/^[/:?.]|(.js)$/.test(i)) return i + (r || "");
      var s = e.paths,
        o = i.split("/");
      for (let e = o.length; e > 0; e -= 1) {
        var a = o.slice(0, e).join("/"),
          d = P(s).yes(a) && s[a];
        if ((d && (d = P(d).a() ? d[0] : d) && o.splice(0, e, d), d)) break;
      }
      return (
        (t = o.join("/")) &&
          (t += r || (/^data:|^blob:|\?/.test(t) || n ? "" : ".js")),
        ("/" === t.charAt(0) || t.match(/^[\w+.-]+:/) ? "" : e.baseUrl) + t
      );
    },
    d = a;
  return `${e.urlArgs && !/^blob:/.test(d) ? d + e.urlArgs(i, d) : d}`;
}
function u(e = arguments[0], t = arguments[1], r = arguments[2], i) {
  const { moduleProto: o } = this,
    { Module: d, CONFIG: p = (e) => e.config, urlFchd: f, load: h } = t,
    m = (e) =>
      T(`dependencies.${e}`, null, "delete") &&
      T(`enabledRegistry.${e}`, null, "delete"),
    y = (r) => ({
      dm: r,
      m: e(t.dependencies).yes(r.id) && t.dependencies[r.id]
    });
  return {
    getModule: ({ m: i, dm: g } = y) => {
      const { makeModuleMap: b, useInteractive: M, _e: O } = o;
      return (
        i ||
        T(
          `dependencies.${g.id}`,
          new d(
            g,
            b,
            M,
            O,
            m,
            c,
            u(e, t, r, o, this).getModule,
            L,
            ...l.call(
              this,
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
              "dependency",
              t
            ),
            (e, n, s, i) =>
              !(e.yesdef && !n) ||
              new Promise((e) =>
                T(`defined.${s}`, module.exports && e(""))
              ).then(
                () =>
                  r.onResourceLoad &&
                  r.onResourceLoad(
                    t,
                    e,
                    i.map((e) => e.normalizedMap || e)
                  )
              ),
            (t, r) => !e(p).yes(t) || T(`CONFIG.config.${r}`, p[t]),
            () =>
              f[g.url]
                ? console.log(
                    `redundant dependency.load(${g.id}, ${g.url}) call (?), dependency.urlFchd[${g.url}] === true`
                  )
                : T(`urlFchd.${g.url}`, !0) && h(g.id, g.url),
            T("startTime", new Date().getTime()),
            T(`enabledRegistry.${g.id}`, this),
            a,
            r.onError !== ((e) => e),
            (e, t) => {
              const i = n(r.exec, [e]);
              if (i)
                return L(
                  s([
                    "fromtexteval",
                    `fromText eval for ${t} failed: ${i}`,
                    i,
                    [t]
                  ])
                );
            },
            y
          )
        )
      );
    }
  };
}
function p(e = arguments[0], t = arguments[1], r = arguments[2]) {
  const n = (e) => (e.constructor === Object ? e : {});
  (this.requir = (e) => (e.requir = t(e.map))),
    (this.exports = (e) =>
      (this.usingExports = !0) &&
      this.map.yesdef &&
      (r[e.map.id] = n(e.exports))),
    (this.module = {
      id: this.map.id,
      uri: this.map.url,
      config: n(e[this.map.id]),
      exports: n(this.exports)
    });
}
var f = (e, t, r, n) => Object.keys(t).reduce(P([t, e, r, n]).reducer(), e);
const h = "[object Function]";
function m(
  n = arguments[0],
  i = arguments[1],
  o = arguments[2],
  m = arguments[3],
  y = arguments[4]
) {
  const {
      dependency: g,
      BUILD: b,
      makeModuleMap: M,
      e_: O,
      checkProto: v,
      moduleProto: E,
      Dependency: C
    } = this,
    { getModule: N, clrRegstr: x } = u.call(
      C,
      O,
      l.call(this, ["CONFIG", "urlFchd", "load"], "dependency", g),
      l.call(this, ["onResourceLoad", "exec", "onError"], "BUILD", b),
      E
    ),
    k = (e) => !O(g.defined).yes(e[0]) && N(M(e[0], null, !0)).init(e[1], e[2]);
  return {
    callGetModule: k,
    getGlobal: (e) => (e ? e.split(".").reduce((e, t) => n[e], {}) : e),
    makeRequire: (n, l = (e) => e || {}, u) => {
      const E = (r, n, i) => {
          const { dependencies: a, CONFIG: d, makeRequire: l, defined: c } = g;
          return {
            errr: (
              o,
              u = (e) =>
                t(
                  n.enableBuildCallback &&
                    e &&
                    O(e).string() === h &&
                    (e.__requireJsBuild = !0)
                ) && e,
              f
            ) =>
              e("string" !== o)
                ? null
                : O(u).string() === h
                ? L(
                    s([
                      "requireargs",
                      "Invalid ([object Function], -class?) requir callback"
                    ]),
                    f
                  )
                : r && O(p).yes(o)
                ? p[o](a[r.id], d.config, l, c)
                : b && b.get
                ? b.get(g, o, r, E.requir)
                : () => {
                    var e, t;
                    return (
                      (t = M(o, r, !1, !0)) &&
                      (e = t.id) &&
                      (O(c).yes(e)
                        ? c[e]
                        : L(
                            s([
                              "notloaded",
                              `Module name ${e} has not been loaded yet for commonjs Dependencies' build : ` +
                                i +
                                !r && "; (No modMap) Use requir([])"
                            ])
                          ))
                    );
                  },
            requir: (...e) => {
              if (E.errr(...e)) return null;
              const t = e[0],
                i = e[1],
                a = e[2];
              var d;
              const l = () => {
                for (y(); m.length; ) {
                  const e = o[0];
                  if (null === e)
                    return L(
                      s([
                        "mismatch",
                        `Mismatched anonymous define() thi: ${e[e.length - 1]}`
                      ])
                    );
                  k(e);
                }
                return (g.defQueueMap = {}) && !0;
              };
              return (
                l(),
                g.nextTick(
                  () =>
                    l() &&
                    (d = N(M(null, r))) &&
                    (d.skipMap = n.skipMap) &&
                    d.init(t, i, a, { enabled: !0 }) &&
                    I.bind(v)
                ),
                E.requir
              );
            }
          };
        },
        C = {
          isBrowser: r,
          defined: (e) => O(g.defined).yes(M(e, n, !1, !0).id),
          specified: (e = (e) => M(e, n, !1, !0).id) =>
            O(g.defined).yes(e) || O(g.dependencies).yes(e),
          toUrl: (
            { i: e, isAlias: t, mNPE: r } = (t) => {
              const r = t.split("/")[0];
              return {
                i: t.lastIndexOf("."),
                isAlias: -1 !== e && (![".", ".."].includes(r) || e > 1),
                mNPE: t
              };
            }
          ) => {
            const s = t ? r.substring(e, r.length) : null;
            var i;
            (r = t ? r.substring(0, e) : r),
              Object.keys(g.CONFIG).forEach(
                (e) =>
                  ["nodeIdCompat", "system", "bundle"].includes(e) &&
                  (i[e] = g.CONFIG[e])
              );
            const o = n && n.id;
            return c(a([r, o, !0, ...i]), s, !0);
          }
        };
      return (
        f(E(n, l, u).requir, C) &&
        t(
          !n &&
            ((e) => {
              y();
              var t = M(e, n, !0),
                r = O(g.dependencies).yes(e) && g.dependencies[e];
              return (
                (r.undefed = !0) &&
                d(e, g.NAME) &&
                T(`defined.${e}`, null, "delete") &&
                T(`urlFchd.${t.url}`, null, "delete") &&
                T(`unDE.${e}`, null, "undefined") &&
                i(e) &&
                T(`defQueueMap.${e}`, null, "delete") &&
                T(`unDE.${e}`, r && r.events.defined ? r.events : g.unDE[e]) &&
                r &&
                x(e)
              );
            })
        ) &&
        E(n, l, u).requir
      );
    }
  };
}
var y = "error",
  g = "defined",
  b = "enabled",
  M = "prototype",
  O = "[object Function]";
const v = (e, t, r) => (t && r && (t[r] = e), !0),
  E = (e) => (e && e.constructor === Object ? Object.keys(e) : []),
  C = (e) => typeof e;
function N() {
  var e = arguments[0],
    t = arguments[1],
    r = arguments[2],
    n = arguments[3],
    s = arguments[4],
    i = arguments[5],
    o = arguments[6],
    a = arguments[7],
    d = arguments[8],
    l = arguments[9],
    c = l.shim,
    u = l.config,
    f = arguments[10],
    h = arguments[11],
    m = arguments[12],
    x = arguments[13],
    k = arguments[14],
    I = arguments[15],
    F = arguments[16],
    j = arguments[17],
    A = arguments[18],
    $ = arguments[19],
    G = arguments[20],
    R = arguments[21],
    q = arguments[22],
    w = arguments[23],
    T = arguments[24],
    S = arguments[25],
    P = arguments[26];
  const L = () => e.id,
    D = () => {
      var d = e.id,
        c = t(e.prefix);
      V.push(c) &&
        Z(c, g, (c) => {
          if (e.unnormalized) return N[M].normalizeMod(c, e);
          var u = n(m).yes(e.id) && m[e.id];
          if (u)
            return (
              (e.url = i(u).prototype = { CONFIG: l, bdlMap: m }) &&
              this.load() &&
              null
            );
          const p = (e) => ue([], () => e, null, { enabled: !0 });
          p.error = (e) => {
            (de = !0) &&
              (Q = e) &&
              (e.requireModules = [d]) &&
              v(
                E(f).forEach(
                  (e, t) =>
                    0 === f[e].map.id.indexOf(d + "_unnormalized") &&
                    s(f[e].map.id)
                )
              ) &&
              a(e);
          };
          const y = h(e.parentMap, { enableBuildCallback: !0 });
          (p.fromText = (n, s) => {
            var i = e.name,
              a = t(i),
              l = r;
            return (
              (!s || (n = s)) && (!l || v((r = !1))) && o(a) && $(d, i),
              S(n, d),
              (!l || (r = !0)) && V.push(a) && x(i) && y([i], p)
            );
          }) && c.load(e.name, y, p, l);
        }) &&
        k(c, this) &&
        (X[c.id] = c);
    },
    _ = () =>
      te
        ? null
        : ((te = !0) && R(),
          le
            ? void h(e, { enableBuildCallback: !0 })(
                le.REM || [],
                e.prefix ? D() : this.load()
              )
            : e.prefix
            ? D()
            : this.load()),
    B = (e, t) => {
      var r = null;
      try {
        J.exports = e(...t);
      } catch (e) {
        r = e;
      }
      return r;
    };
  var U,
    z,
    J = {},
    Q = {},
    Y = {},
    K = [],
    V = [],
    X = {},
    H = [],
    W = (n(d).yes(e.id) && d[e.id]) || {};
  const Z = ({ m: e, dm: t } = P, r, s) => {
      if (!n(F).yes(t.id) || (e && !e.defineEmitComplete))
        return r === g && s(F[t.id]);
      return ((e = (e) => o(e)) =>
        e.error && r === y ? s(e.error) : e.addEventListene(r, s))(t);
    },
    ee = (e, t) => v(W[e].forEach((e) => e(t))) && v(e === y && delete W[e]);
  var te,
    re,
    ne,
    se,
    ie,
    oe,
    ae,
    de,
    le = n(c).yes(e.id) && c[e.id],
    ce = 0;
  const ue = de
      ? () => null
      : (
          r,
          s = (e) => (Y = e),
          i = (e) =>
            e
              ? this.addEventListene(y, e)
              : W.error
              ? (e = (e) => ee(y, e))
              : null,
          o = (e) => (z = e || {})
        ) => {
          if ((v(r && r.slice(0)) && v((ne = i)) && (de = !0), o[b] || ae))
            return (
              q(this) &&
              (ae = !0) &&
              (re = !0) &&
              v(
                r.forEach((s, i) => {
                  if (C("string" === s)) {
                    const a = e.yesdef ? e : e.parentMap;
                    (s = t(s, a, !1, !this.skipMap)) && (r[i] = s);
                    var o = n(p).yes(s.id) && p[s.id];
                    if (o) return (H[i] = o.call(this, u, h, F));
                    const d = () =>
                      v((ce += 1)) &&
                      Z(s, "defined", (e) => {
                        v(this.defineDep(i, e)) && pe();
                      }) &&
                      (ne
                        ? Z(s, y, ne)
                        : W.error
                        ? Z(s, y, (e) => ee(y, e))
                        : null);
                    d();
                  }
                  var a = s.id,
                    d = f[a];
                  !n(p).yes(a) && d && !d[b] && k(s, this);
                })
              ) &&
              v(
                E(X).forEach(
                  (e = (e) => X[e], t) =>
                    n(f).yes(e.id) && f[e.id] && !f[e.id][b] && k(e, this)
                )
              ) &&
              v((re = !1)) &&
              pe()
            );
          pe();
        },
    pe = () =>
      !ae || re || de
        ? oe
          ? Q && ee(y, Q)
          : (oe = !0) &&
            ce < 1 &&
            !F &&
            e.yesdef &&
            (J.exports =
              n(Y).string() !== O
                ? () => Y
                : () => {
                    var t = H,
                      r = e.yesdef && void 0 === J.exports && J;
                    const n = B(I, [L, Y, t, J.exports]);
                    return (
                      n &&
                        (T ||
                          ("requir" !=
                            (n.requireType = e.yesdef ? "define" : "requir") &&
                            W.error)) &&
                        (n.requireMap = e) &&
                        v((n.requireModules = e.yesdef && [e.id])) &&
                        a((Q = n)),
                      r
                        ? r
                          ? r.exports
                          : this.usingExports
                          ? J.exports
                          : null
                        : J.exports
                    );
                  }) &&
            A(e, z, L, V) &&
            s(L) &&
            (ie = !0) &&
            v(null, this, "defining") &&
            ie &&
            !U &&
            (U = !0) &&
            ee(g, J.exports)
        : !n(j).yes(L) && _(),
    fe = {
      inited: de,
      undefed: se,
      defined: ie,
      error: Q,
      enabled: ae,
      enable: k,
      map: e,
      shim: le,
      load: G
    },
    he = {
      ...fe,
      normalizeMod: (e, r) => {
        const { nodeIdCompat: s, map: i, bundle: o } = l,
          a = (e) => [e, i.parentMap ? i.parentMap.name : null, !0, s, i, o],
          d = e.normalize ? e.normalize(i.name, (e = a) => w(e)) : i.name;
        var c, u;
        Z(
          (c = t(r.prefix + "!" + d, i.parentMap, !0)),
          g,
          (e) =>
            (i.normalizedMap =
              c && ue([], () => e, null, { enabled: !0, ignore: !0 }))
        ),
          ((u = n(f).yes(c.id) && f[c.id]),
          (!u || V.push(c)) &&
          W.error &&
          u.addEventListene(y, (e) => ee(y, e)) &&
          u
            ? { enable: k }
            : { enable: () => {} }).enable();
      },
      addEventListene: (e, t) => (W[e] ? W[e] : (W[e] = [])).push(t),
      defineDep: (e, t) => !K[e] && (K[e] = !0) && v((ce -= 1)) && (t[e] = t)
    };
  this.fetched = te;
  let me = {};
  return v(E(he).forEach((e) => (me[e] = he[e]))) && me;
}
var x, k;
function I() {
  const {
    CONFIG: e,
    startTime: t,
    dependencies: n,
    defined: o,
    enabledRegistry: a,
    NAME: l
  } = this;
  var c,
    u = [],
    p = [],
    f = 1e3 * e.waitSeconds,
    h = f && t + f < new Date().getTime();
  if (k) return !0;
  var m = r || (!r && !1);
  k = !0;
  const y = "error";
  if (
    (console.log("In Checkloaded", "dependency reduced for purpose: ", this),
    Object.keys(
      a
    ).forEach(
      (
        { id: t, noCyc: r } = (e = (e) => a[e]) =>
          ((
            {
              yesdef: t,
              fetched: r,
              prefix: n,
              error: s,
              enabled: i,
              inited: o
            } = (e) => e
          ) =>
            i
              ? (t || p.push(e),
                (e.noCyc = r && t && !n),
                o || !i || s ? {} : e)
              : null)(e.map)
      ) =>
        t && h && !D(t, e.paths)
          ? d(t, l) && u.push(t)
          : t && i(this)(["fb", "wait", "another"], h && !0, !0, !(!h && r))
    ),
    h && u.length)
  )
    return (
      ((c = s([
        "setTimeout",
        "Load setTimeout for modules: " + u,
        null,
        u
      ])).NAME = l),
      L(c)
    );
  (k = !1),
    (x =
      !!h &&
      undefined &&
      m &&
      !x &&
      setTimeout(() => I.bind(this) && null, 50));
  var g,
    b = (
      { m: e, depMaps: t, id: r, tt: s, p: i } = (e) =>
        (r = e.map.id) && {
          m: e,
          depMaps: e.depMaps,
          id: r,
          tt: { id: r },
          p: {}
        }
    ) =>
      A(
        t
          .map((e) => e.id)
          .forEach(
            (t, r) =>
              (g = P(n).yes(t) && n[t]) &&
              !e.depMatched[r] &&
              !i[t] &&
              (P(s).yes(t) && s[t]
                ? A(e.defineDep(r, o[t])) && e.check()
                : b(g))
          )
      ) && (i[r] = !0);
  return p.forEach((e) => (e.error ? e.emit(y, e.error) : b(e)));
}
var F = [];
const j = (e) => (F = e),
  A = (e, t, r) => (t && r && (t[r] = e), !0),
  $ = (e) => typeof e,
  G = (e) => (e && e.constructor === Object ? Object.keys(e) : []);
function R() {
  var e,
    t = [];
  const r = (e) =>
      t.sort((e, t) => t - e).map((r, n) => r[0] === e && t.splice(n, 1)),
    n = () =>
      (!F.length ||
        A(
          F.forEach((e) => {
            var r = e[0];
            (!$("string" === r) || (o.defQueueMap[r] = !0)) && t.push(e);
          })
        )) &&
      j([]),
    i = [this, e, r, () => t.shift(), t, n],
    {
      dependency: o,
      BUILD: a,
      makeModuleMap: d,
      makeRequire: l,
      callGetModule: c,
      getGlobal: p
    } = m.bind(...i),
    f = (e) => (e.constructor === Object ? o[e] : {}),
    h = {
      bdlMap: {},
      NAME: arguments[0],
      defQueue: t,
      defQueueMap: f("defQueueMap"),
      makeModuleMap: d,
      nextTick: a.nextTick,
      Module: N,
      load: (e, t) => a.load(o, e, t),
      execCb: (e, t, r, n) => t.apply(n, r),
      onError: L,
      CONFIG: f("CONFIG"),
      unDE: f("unDE"),
      enabledRegistry: f("enabledRegistry"),
      urlFchd: f("urlFchd"),
      defined: f("defined"),
      dependencies: f("dependencies")
    },
    { getModule: y } = u.call(
      this,
      P,
      ...{
        dependency: reduce.call(
          this,
          ["CONFIG", "urlFchd", "load"],
          "dependency",
          o
        ),
        build: reduce.call(
          this,
          ["onResourceLoad", "exec", "onError"],
          "BUILD",
          a
        )
      }
    ),
    g = {
      ...h,
      makeShimExports: (t) =>
        function () {
          return (
            (t.init && t.init.apply(e, arguments)) ||
            (t.exports && p(t.exports))
          );
        },
      enable: (e) =>
        P(o.dependencies).yes(e.id) && o.dependencies[e.id] && y(e).enable(),
      completeLoad: (e) => {
        var r, i;
        for (n(); t.length && (t.shift(), !r); )
          (r = !0) &&
            (i = i[0] = null === i[0] ? e : i[0] === e ? (r = !0) : null) &&
            c(i);
        o.defQueueMap = {};
        var a,
          d = ((a = o.dependencies), P(a).yes(e) && a[e]);
        if (!r && !P(o.defined).yes(e) && d && !d.inited) {
          var l = P(o.CONFIG.exportable).yes(e) ? o.CONFIG.exportable[e] : {};
          if (o.CONFIG.enforceDefine && (!l.exports || !p(l.exports)))
            return (
              !D(e, o.CONFIG.paths) &&
              L(s(["nodefine", "No define call for " + e, null, [e]]))
            );
          c([e, l.REM || [], l.exportsFn]);
        }
        return I(this.checkProto) && !0;
      }
    };
  return (
    I(this.checkProto) &&
    A(G(o).forEach((e) => (o[e] = g[e]))) &&
    (o.makeRequire = (e, t) => l(e, t, arguments[0])) &&
    T("requir", o.makeRequire()) &&
    S(o) &&
    o
  );
}
const q = Object.prototype.toString,
  w = "error",
  T = (e, t, r) =>
    "delete" === r
      ? delete U[e]
      : e.includes(".")
      ? (U[e.split(".")[0]][e.split(".")[1]] = t)
      : (U[e] = t),
  S = (e) => (U = e),
  P = (e) => {
    const t = (e) => "String" === e.constructor && "NS" === e.toUpperCase();
    return {
      yes: (t) => e.hasOwnProperty(t),
      reducer: (t, r) => {
        const n =
          e[3] &&
          _("object" === e[0][t]) &&
          e[0][t] &&
          !P(e[0][t]).a() &&
          !P(e[0][t]).string() === Y &&
          !(e[0][t] instanceof RegExp);
        return e[0]
          ? (e[2] || !P(e[1]).yes(t)) &&
              (e[1][t] = n ? e[1][t] || {} : e[0][t]) &&
              K(e[1][t], e[0][t], e[2], e[3]) &&
              e[1]
          : e[1];
      },
      create: (e = t) =>
        ((e) =>
          document["createElementNS" + (e ? "NS" : "")](
            e ? "html:script" : "script"
          ))(e),
      string: () => q(e),
      a: (e) => e.string() === Q,
      tag: (t) => document.getElementsByTagName(e || "script")[t],
      interA: (e) => "interactive" === e.readyState
    };
  },
  L = (e = s, t = (t) => t && t(e)) => {
    const r = (e) => P(U.dependencies).yes(e) && U.dependencies[e];
    !e.ids.reduce(
      (t = (t = r) => ({ ...t, err: e })) =>
        t.events && t.events[w] && t.emit(w, e) && !0
    ) && U.onError(e);
  },
  D = (e, t) => {
    var r = P(t).yes(e) && t[e];
    if (r && "[object Array]" === P(r).string() && r.length > 1)
      return (
        r.shift(),
        U.requir.undef(e),
        U.makeRequire(null, { skipMap: !0 })([e]),
        !0
      );
  };
var _ = (e) => typeof e,
  B = (e, t, r) => (t && r && (t[r] = e), !0),
  U = (e) => (
    console.log("buildable/Build", e),
    function () {
      return se(...arguments);
    }.bind(e)
  ),
  z = "string",
  J = {};
const Q = "[object Array]",
  Y = "[object Function]",
  K = (e, t, r, n) => {
    return ((s = t),
    s && s.constructor === Object ? Object.keys(s) : []).reduce(
      P([t, e, r, n]).reducer(),
      e
    );
    var s;
  };
var V = 1,
  X = 1,
  H = "_",
  W = "baseUrl";
function Z(
  e = arguments[0],
  t = arguments[1],
  r = arguments[2],
  n = arguments[3]
) {
  var s = t ? t.name : null,
    o = e,
    d = !0;
  e = (!!e || B((d = !1))) && (e || "_@r" + (V += 1));
  const l = [U.CONFIG.nodeIdCompat, U.CONFIG.system, U.CONFIG.bundle],
    u = (t = (e) => e.indexOf("!")) =>
      t > -1 ? [e.substring(0, t), e.substring(t + 1, e.length)] : [e, ""];
  var p,
    f,
    h,
    m = u(e),
    y = m[0],
    g = "",
    b = !y || p || r ? "" : "_unnormalized" + (X += 1);
  return (
    (e = m[1]) &&
      (y
        ? (g = r ? e : -1 === e.indexOf("!") ? a(e, s, n, ...l) : e) &&
          (h = y + "!" + g + b)
        : i(this)(
            ["normed", "names", "p", "normed", "isNormed", "url", "id"],
            a(e, s, n, ...l),
            u(g),
            m[0],
            m[1],
            !0,
            (c(g).prototype = { CONFIG: U.CONFIG, bdlMap: U.bdlMap }),
            g + b
          )),
    {
      prefix: y,
      name: g,
      parentMap: t,
      unnormalized: !!b,
      url: f,
      givenName: o,
      yesdef: d,
      id: h
    }
  );
}
const ee = "packages",
  te = "location",
  re = "urlArgs",
  ne = (
    e = (e) => {
      const t = _(e[re] === z)
        ? (t, r) => (-1 === r.indexOf("?") ? "?" : "&") + e[re]
        : e[re];
      return "/" === e[W].charAt(e[W].length - 1)
        ? { ...e, [re]: t }
        : { ...e, [W]: `${e[W]}/`, [re]: t };
    },
    t,
    r,
    n,
    s,
    i
  ) => {
    Object.keys(e).forEach((r = (r) => {
      const s = ["paths", "bundles", "config", "map"];
      return B(s.includes(r) ? s.forEach((e) =>
                t(`CONFIG.${e}`, n.CONFIG[e] ? n.CONFIG[e] : {})
              ) : t(`CONFIG.${r}`, e[r])) && r;
    }, i) => s(n.CONFIG[r], e[r], !0, !0));
    const { exportables: o, exportable: a } = ((e, r) => {
      var s = n.CONFIG.exportable;
      return (
        e &&
          Object.keys(e).forEach((r, s) =>
            e[r].forEach((e) => t(`bdlMap.${e}`, e !== r ? r : n.bdlMap[e]))
          ),
        B(
          r &&
            Object.keys(r).forEach((e, t) => {
              var s = r[e];
              return (
                B(i(s).string() === Q && (s = { REM: s })) &&
                B(
                  (s.exports || s.init) &&
                    !s.exportsFn &&
                    (s.exportsFn = n.makeShimExports(s))
                ) &&
                (s[e] = s)
              );
            })
        ),
        { exportable: s, exportables: r }
      );
    })(e.bundles, e.exportable);
    return (
      B(t(`CONFIG.${a}`, o ? a : n.CONFIG.exportable)) &&
      B(
        (e[ee] ? e[ee] : []).forEach((e) => {
          var r = (e = _(e === z) ? { name: e } : e).name;
          (!e[te] || t(`CONFIG.paths.${r}`, e[te])) &&
            t(
              `CONFIG.bundle.${r}`,
              `${e.name}/${(e.main || "main")
                .replace(/^\.\//, "")
                .replace(/\.js$/, "")}`
            );
        })
      ) &&
      ((d = n.dependencies),
      B(
        Object.keys(d).forEach(
          (e = (e) => !d[e].inited && !d[e].map.unnormalized && e) =>
            (d[e].map = r(e, null, !0))
        )
      )) &&
      (e.REM || e.cb) &&
      n.requir(e.REM || [], e.cb)
    );
    var d;
  };
var se,
  ie = function (
    e = arguments[0],
    t = arguments[1],
    r = arguments[2],
    n = arguments[3]
  ) {
    var s,
      i,
      o = H;
    if (!P(e).string() === Q && _(e !== z))
      return (i = e), P(t).a() ? (e = t) && (t = r) && (r = n) : (e = []);
    if (
      ((o = i && i.context ? i.context : o) && B((s = P(J).yes(o) && J[o])), !s)
    ) {
      const e = l.call(
          this,
          [
            "CONFIG",
            "startTime",
            "dependencies",
            "defined",
            "enabledRegistry",
            "NAME"
          ],
          "Build",
          s
        ),
        t = {
          Build: s,
          buildable: U,
          makeModuleMap: Z,
          KeyValue: T,
          Y: B,
          checkProto: e,
          moduleProto: { makeModuleMap: Z, useInteractive: false, _e: w }
        };
      J[o] = s = R.bind(t);
    }
    return (
      B(
        i &&
          ne(
            i,
            T,
            Z,
            l.call(
              this,
              ["CONFIG", "bdlMap", "makeShimExports", "dependencies", "requir"],
              "Build",
              s
            ),
            K,
            P
          )
      ) && s.requir(e, t, r)
    );
  }.bind({ version: "2.3.6.carducci", isBrowser: !1 });
(U.NAME = null),
  (U.CONFIG = {
    waitSeconds: 7,
    baseUrl: "./",
    ...["paths", "bundles", "bundle", "exportable", "config"].map((e) => ({
      [e]: {}
    }))
  }),
  U({}),
  (U.start = { contexts: J }),
  B(
    ["toUrl", "undef", "defined", "specified"].forEach(
      (e) =>
        (U[e] = function () {
          return J[H].requir[e].apply(J[H], arguments);
        })
    )
  ),
  (se =
    _(ie === W) || P(ie).string() !== Y
      ? U
      : function () {
          var e,
            t,
            r = _(!1) ? void 0 : t;
          const n = _(ie !== W),
            s = n ? void 0 : null;
          return (
            B((e = n ? !!ie || se : null)) && B((ie = s)),
            (U.CONFIG = (e) => U(e)),
            (U.nextTick = (e) => (_("undefined" !== r) ? r(e, 4) : e())),
            U(e)
          );
        });
class oe {
  constructor(e, t) {
    console.log(
      "Example headers, ev's :",
      JSON.stringify(e),
      JSON.stringify(t)
    ),
      (this.handle = async (e) => {
        console.log("req.url" + e.url);
        const t = se.call(this, "mastercard-locations"),
          r = se.call(this, "mastercard-places");
        console.log("locs", t, "requir", se);
        var n = null,
          s = null;
        const i = async (e, i) => {
          const o = (e, t) => e || t;
          !n &&
            console.log("initializing mastercard api") &&
            (s = t.MasterCardAPI) &&
            (n = !0) &&
            s.init({
              sandbox: "production" !== secrets.NODE_ENV,
              authentication: new s.OAuth(
                secrets.MASTERCARD_CONSUMER_KEY,
                Buffer.from(secrets.MASTERCARD_P12_BINARY, "base64"),
                "keyalias",
                "keystorepassword"
              )
            });
          let a = null;
          if ("getAtms" === i) {
            const { PageLength: r, PostalCode: n, PageOffset: s } = e.body;
            a = await t.ATMLocations.query(
              { PageLength: r, PostalCode: n, PageOffset: s },
              o
            );
          } else if ("getMerchants" === i) {
            const {
                countryCode: t,
                latitude: n,
                longitude: s,
                distance: i
              } = e.body,
              d = {
                pageOffset: 0,
                pageLength: 10,
                radiusSearch: "true",
                unit: "km",
                distance: i,
                place: { countryCode: t, latitude: n, longitude: s }
              };
            a = await r.MerchantPointOfInterest.create(d, o);
          } else
            "getNames" === i
              ? (a = await r.MerchantCategoryCodes.query({}, o))
              : "getTypes" === i &&
                (a = await r.MerchantIndustries.query({}, o));
          return a || [i, se];
        };
        let o = null;
        "/deposit" === e.url
          ? (o = await i(e, "getAtms"))
          : "/merchant_names" === e.url
          ? (o = await i(e, "getNames"))
          : "/merchant_types" === e.url
          ? (o = await i(e, "getTypes"))
          : "/merchants" === e.url && (o = await i(e, "getMerchants"));
        const a = { "Content-Type": "application/json" },
          d = (e, t) =>
            new Response(`{${e[0]}: ${e[1]}}`, {
              status: t[0],
              message: t[1],
              headers: t[2]
            });
        return o
          ? o.constructor === Object
            ? d(
                ["data", o],
                [
                  200,
                  "success: " + e.url,
                  { "Content-Type": "application/json" }
                ]
              )
            : d(["response", o], [200, "string success...: " + e.url, a])
          : d(["error", se], [500, e.path + JSON.stringify(se), a]);
      }),
      (this.el = e) &&
        (this.env = t) &&
        this.el.blockConcurrencyWhile(() => {});
  }
  async fetch(e) {
    return await this.handle(e);
  }
}
var ae = {
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
            const r = new URL(e.url);
            var n = r.origin;
            return -1 ===
              [
                "https://vau.money",
                "https://jwi5k.csb.app",
                "https://mastercard-backbank.backbank.workers.dev"
              ].indexOf(n)
              ? ((e) =>
                  new Response(
                    JSON.stringify(
                      `{error:${"no access for this origin- " + e}}`
                    ),
                    {
                      status: "400",
                      message: "no access for this origin: " + e
                    }
                  ))(n)
              : (console.log(
                  "env",
                  t,
                  n,
                  ": making example class durable object"
                ),
                await ((e) => e.get(e.idFromName(r.href)))(
                  t.EXAMPLE_CLASS_DURABLE_OBJECT
                )
                  .fetch(e)
                  .then(async (e) => await e.json())
                  .then((t) => {
                    console.log("fetched EXAMPLE_CLASS_DURABLE_OBJECT : ", t);
                    const r = { "Content-Type": "application/json" },
                      n = (e, t, r) =>
                        new Response(`{${e[0]}: ${e[1]}, ${t}}`, {
                          status: r[0],
                          message: r[1],
                          headers: r[2]
                        });
                    return t
                      ? t.data
                        ? n([!0, JSON.stringify(t.data)], !0, [
                            "200",
                            "success: " + e.url,
                            r
                          ])
                        : n(["response", JSON.stringify(t)], !1, [
                            t.status,
                            t.statusText ? t.statusText : t.message,
                            r
                          ])
                      : n(["data", {}], !1, [
                          "no response from durable object chain",
                          "",
                          r
                        ]);
                  }));
          })(e, t);
    } catch (e) {
      return new Response(e.message);
    }
  }
};
export { oe as DurableObjectExample, ae as default };
//# sourceMappingURL=shim.mjs.map
