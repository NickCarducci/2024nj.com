var e,
  r,
  t,
  n,
  o,
  a,
  s = void 0 !== s ? s : {},
  i = Object.assign({}, s),
  u = (e, r) => {
    throw r;
  },
  l = "object" == typeof window,
  c =
    "object" == typeof process &&
    "object" == typeof process.versions &&
    "string" == typeof process.versions.node,
  d = "";
c
  ? ((d = __dirname + "/"),
    (a = () => {
      o || ((n = require("fs")), (o = require("path")));
    }),
    (e = function (e, r) {
      return a(), (e = o.normalize(e)), n.readFileSync(e, r ? void 0 : "utf8");
    }),
    (t = (r) => {
      var t = e(r, !0);
      return t.buffer || (t = new Uint8Array(t)), t;
    }),
    (r = (e, r, t) => {
      a(),
        (e = o.normalize(e)),
        n.readFile(e, function (e, n) {
          e ? t(e) : r(n.buffer);
        });
    }),
    process.argv.length > 1 && process.argv[1].replace(/\\/g, "/"),
    process.argv.slice(2),
    "undefined" != typeof module && (module.exports = s),
    process.on("uncaughtException", function (e) {
      if (!(e instanceof le)) throw e;
    }),
    process.on("unhandledRejection", function (e) {
      throw e;
    }),
    (u = (e, r) => {
      if (N()) throw ((process.exitCode = e), r);
      !(function (e) {
        if (e instanceof le) return;
        m("exiting due to exception: " + e);
      })(r),
        process.exit(e);
    }),
    (s.inspect = function () {
      return "[Emscripten Module object]";
    }))
  : l &&
    ("undefined" != typeof document &&
      document.currentScript &&
      (d = document.currentScript.src),
    (d =
      0 !== d.indexOf("blob:")
        ? d.substr(0, d.replace(/[?#].*/, "").lastIndexOf("/") + 1)
        : ""),
    (e = (e) => {
      var r = new XMLHttpRequest();
      return r.open("GET", e, !1), r.send(null), r.responseText;
    }),
    (r = (e, r, t) => {
      var n = new XMLHttpRequest();
      n.open("GET", e, !0),
        (n.responseType = "arraybuffer"),
        (n.onload = () => {
          200 == n.status || (0 == n.status && n.response)
            ? r(n.response)
            : t();
        }),
        (n.onerror = t),
        n.send(null);
    }));
var f,
  p = s.print || console.log.bind(console),
  m = s.printErr || console.warn.bind(console);
Object.assign(s, i),
  (i = null),
  s.arguments,
  s.thisProgram,
  s.quit && (u = s.quit),
  s.wasmBinary && (f = s.wasmBinary);
var h,
  w = s.noExitRuntime || !0;
"object" != typeof WebAssembly && L("no native wasm support detected");
var v,
  y = !1;
var E,
  g,
  _,
  k,
  b,
  S,
  D,
  A = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
function F(e, r, t) {
  for (var n = r + t, o = r; e[o] && !(o >= n); ) ++o;
  if (o - r > 16 && e.buffer && A) return A.decode(e.subarray(r, o));
  for (var a = ""; r < o; ) {
    var s = e[r++];
    if (128 & s) {
      var i = 63 & e[r++];
      if (192 != (224 & s)) {
        var u = 63 & e[r++];
        if (
          (s =
            224 == (240 & s)
              ? ((15 & s) << 12) | (i << 6) | u
              : ((7 & s) << 18) | (i << 12) | (u << 6) | (63 & e[r++])) < 65536
        )
          a += String.fromCharCode(s);
        else {
          var l = s - 65536;
          a += String.fromCharCode(55296 | (l >> 10), 56320 | (1023 & l));
        }
      } else a += String.fromCharCode(((31 & s) << 6) | i);
    } else a += String.fromCharCode(s);
  }
  return a;
}
function P(e, r, t, n) {
  if (!(n > 0)) return 0;
  for (var o = t, a = t + n - 1, s = 0; s < e.length; ++s) {
    var i = e.charCodeAt(s);
    if (i >= 55296 && i <= 57343)
      i = (65536 + ((1023 & i) << 10)) | (1023 & e.charCodeAt(++s));
    if (i <= 127) {
      if (t >= a) break;
      r[t++] = i;
    } else if (i <= 2047) {
      if (t + 1 >= a) break;
      (r[t++] = 192 | (i >> 6)), (r[t++] = 128 | (63 & i));
    } else if (i <= 65535) {
      if (t + 2 >= a) break;
      (r[t++] = 224 | (i >> 12)),
        (r[t++] = 128 | ((i >> 6) & 63)),
        (r[t++] = 128 | (63 & i));
    } else {
      if (t + 3 >= a) break;
      (r[t++] = 240 | (i >> 18)),
        (r[t++] = 128 | ((i >> 12) & 63)),
        (r[t++] = 128 | ((i >> 6) & 63)),
        (r[t++] = 128 | (63 & i));
    }
  }
  return (r[t] = 0), t - o;
}
function R(e) {
  for (var r = 0, t = 0; t < e.length; ++t) {
    var n = e.charCodeAt(t);
    n >= 55296 &&
      n <= 57343 &&
      (n = (65536 + ((1023 & n) << 10)) | (1023 & e.charCodeAt(++t))),
      n <= 127 ? ++r : (r += n <= 2047 ? 2 : n <= 65535 ? 3 : 4);
  }
  return r;
}
"undefined" != typeof TextDecoder && new TextDecoder("utf-16le"),
  s.INITIAL_MEMORY;
var M = [],
  x = [],
  j = [],
  B = [];
function N() {
  return w;
}
var T = 0,
  O = null;
function z(e) {
  T++, s.monitorRunDependencies && s.monitorRunDependencies(T);
}
function C(e) {
  if (
    (T--, s.monitorRunDependencies && s.monitorRunDependencies(T), 0 == T && O)
  ) {
    var r = O;
    (O = null), r();
  }
}
function L(e) {
  throw (
    (s.onAbort && s.onAbort(e),
    m((e = "Aborted(" + e + ")")),
    (y = !0),
    (v = 1),
    (e += ". Build with -sASSERTIONS for more info."),
    new WebAssembly.RuntimeError(e))
  );
}
var I, U, H, q;
function W(e) {
  return e.startsWith("data:application/octet-stream;base64,");
}
function X(e) {
  return e.startsWith("file://");
}
function V(e) {
  try {
    if (e == I && f) return new Uint8Array(f);
    if (t) return t(e);
    throw "both async and sync fetching of the wasm failed";
  } catch (e) {
    L(e);
  }
}
function $(e) {
  for (; e.length > 0; ) {
    var r = e.shift();
    if ("function" != typeof r) {
      var t = r.func;
      "number" == typeof t
        ? void 0 === r.arg
          ? J(t)()
          : J(t)(r.arg)
        : t(void 0 === r.arg ? null : r.arg);
    } else r(s);
  }
}
W((I = "a.out.wasm")) ||
  ((U = I), (I = s.locateFile ? s.locateFile(U, d) : d + U));
var G = [];
function J(e) {
  var r = G[e];
  return r || (e >= G.length && (G.length = e + 1), (G[e] = r = D.get(e))), r;
}
var K = {
  isAbs: (e) => "/" === e.charAt(0),
  splitPath: (e) =>
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
      .exec(e)
      .slice(1),
  normalizeArray: (e, r) => {
    for (var t = 0, n = e.length - 1; n >= 0; n--) {
      var o = e[n];
      "." === o
        ? e.splice(n, 1)
        : ".." === o
        ? (e.splice(n, 1), t++)
        : t && (e.splice(n, 1), t--);
    }
    if (r) for (; t; t--) e.unshift("..");
    return e;
  },
  normalize: (e) => {
    var r = K.isAbs(e),
      t = "/" === e.substr(-1);
    return (
      (e = K.normalizeArray(
        e.split("/").filter((e) => !!e),
        !r
      ).join("/")) ||
        r ||
        (e = "."),
      e && t && (e += "/"),
      (r ? "/" : "") + e
    );
  },
  dirname: (e) => {
    var r = K.splitPath(e),
      t = r[0],
      n = r[1];
    return t || n ? (n && (n = n.substr(0, n.length - 1)), t + n) : ".";
  },
  basename: (e) => {
    if ("/" === e) return "/";
    var r = (e = (e = K.normalize(e)).replace(/\/$/, "")).lastIndexOf("/");
    return -1 === r ? e : e.substr(r + 1);
  },
  join: function () {
    var e = Array.prototype.slice.call(arguments, 0);
    return K.normalize(e.join("/"));
  },
  join2: (e, r) => K.normalize(e + "/" + r)
};
var Y = {
    resolve: function () {
      for (var e = "", r = !1, t = arguments.length - 1; t >= -1 && !r; t--) {
        var n = t >= 0 ? arguments[t] : te.cwd();
        if ("string" != typeof n)
          throw new TypeError("Arguments to path.resolve must be strings");
        if (!n) return "";
        (e = n + "/" + e), (r = K.isAbs(n));
      }
      return (
        (r ? "/" : "") +
          (e = K.normalizeArray(
            e.split("/").filter((e) => !!e),
            !r
          ).join("/")) || "."
      );
    },
    relative: (e, r) => {
      function t(e) {
        for (var r = 0; r < e.length && "" === e[r]; r++);
        for (var t = e.length - 1; t >= 0 && "" === e[t]; t--);
        return r > t ? [] : e.slice(r, t - r + 1);
      }
      (e = Y.resolve(e).substr(1)), (r = Y.resolve(r).substr(1));
      for (
        var n = t(e.split("/")),
          o = t(r.split("/")),
          a = Math.min(n.length, o.length),
          s = a,
          i = 0;
        i < a;
        i++
      )
        if (n[i] !== o[i]) {
          s = i;
          break;
        }
      var u = [];
      for (i = s; i < n.length; i++) u.push("..");
      return (u = u.concat(o.slice(s))).join("/");
    }
  },
  Q = {
    ttys: [],
    init: function () {},
    shutdown: function () {},
    register: function (e, r) {
      (Q.ttys[e] = { input: [], output: [], ops: r }),
        te.registerDevice(e, Q.stream_ops);
    },
    stream_ops: {
      open: function (e) {
        var r = Q.ttys[e.node.rdev];
        if (!r) throw new te.ErrnoError(43);
        (e.tty = r), (e.seekable = !1);
      },
      close: function (e) {
        e.tty.ops.flush(e.tty);
      },
      flush: function (e) {
        e.tty.ops.flush(e.tty);
      },
      read: function (e, r, t, n, o) {
        if (!e.tty || !e.tty.ops.get_char) throw new te.ErrnoError(60);
        for (var a = 0, s = 0; s < n; s++) {
          var i;
          try {
            i = e.tty.ops.get_char(e.tty);
          } catch (e) {
            throw new te.ErrnoError(29);
          }
          if (void 0 === i && 0 === a) throw new te.ErrnoError(6);
          if (null == i) break;
          a++, (r[t + s] = i);
        }
        return a && (e.node.timestamp = Date.now()), a;
      },
      write: function (e, r, t, n, o) {
        if (!e.tty || !e.tty.ops.put_char) throw new te.ErrnoError(60);
        try {
          for (var a = 0; a < n; a++) e.tty.ops.put_char(e.tty, r[t + a]);
        } catch (e) {
          throw new te.ErrnoError(29);
        }
        return n && (e.node.timestamp = Date.now()), a;
      }
    },
    default_tty_ops: {
      get_char: function (e) {
        if (!e.input.length) {
          var r = null;
          if (c) {
            var t = Buffer.alloc(256),
              o = 0;
            try {
              o = n.readSync(process.stdin.fd, t, 0, 256, -1);
            } catch (e) {
              if (!e.toString().includes("EOF")) throw e;
              o = 0;
            }
            r = o > 0 ? t.slice(0, o).toString("utf-8") : null;
          } else
            "undefined" != typeof window && "function" == typeof window.prompt
              ? null !== (r = window.prompt("Input: ")) && (r += "\n")
              : "function" == typeof readline &&
                null !== (r = readline()) &&
                (r += "\n");
          if (!r) return null;
          e.input = ae(r, !0);
        }
        return e.input.shift();
      },
      put_char: function (e, r) {
        null === r || 10 === r
          ? (p(F(e.output, 0)), (e.output = []))
          : 0 != r && e.output.push(r);
      },
      flush: function (e) {
        e.output && e.output.length > 0 && (p(F(e.output, 0)), (e.output = []));
      }
    },
    default_tty1_ops: {
      put_char: function (e, r) {
        null === r || 10 === r
          ? (m(F(e.output, 0)), (e.output = []))
          : 0 != r && e.output.push(r);
      },
      flush: function (e) {
        e.output && e.output.length > 0 && (m(F(e.output, 0)), (e.output = []));
      }
    }
  };
function Z(e) {
  L();
}
var ee = {
  ops_table: null,
  mount: function (e) {
    return ee.createNode(null, "/", 16895, 0);
  },
  createNode: function (e, r, t, n) {
    if (te.isBlkdev(t) || te.isFIFO(t)) throw new te.ErrnoError(63);
    ee.ops_table ||
      (ee.ops_table = {
        dir: {
          node: {
            getattr: ee.node_ops.getattr,
            setattr: ee.node_ops.setattr,
            lookup: ee.node_ops.lookup,
            mknod: ee.node_ops.mknod,
            rename: ee.node_ops.rename,
            unlink: ee.node_ops.unlink,
            rmdir: ee.node_ops.rmdir,
            readdir: ee.node_ops.readdir,
            symlink: ee.node_ops.symlink
          },
          stream: { llseek: ee.stream_ops.llseek }
        },
        file: {
          node: { getattr: ee.node_ops.getattr, setattr: ee.node_ops.setattr },
          stream: {
            llseek: ee.stream_ops.llseek,
            read: ee.stream_ops.read,
            write: ee.stream_ops.write,
            allocate: ee.stream_ops.allocate,
            mmap: ee.stream_ops.mmap,
            msync: ee.stream_ops.msync
          }
        },
        link: {
          node: {
            getattr: ee.node_ops.getattr,
            setattr: ee.node_ops.setattr,
            readlink: ee.node_ops.readlink
          },
          stream: {}
        },
        chrdev: {
          node: { getattr: ee.node_ops.getattr, setattr: ee.node_ops.setattr },
          stream: te.chrdev_stream_ops
        }
      });
    var o = te.createNode(e, r, t, n);
    return (
      te.isDir(o.mode)
        ? ((o.node_ops = ee.ops_table.dir.node),
          (o.stream_ops = ee.ops_table.dir.stream),
          (o.contents = {}))
        : te.isFile(o.mode)
        ? ((o.node_ops = ee.ops_table.file.node),
          (o.stream_ops = ee.ops_table.file.stream),
          (o.usedBytes = 0),
          (o.contents = null))
        : te.isLink(o.mode)
        ? ((o.node_ops = ee.ops_table.link.node),
          (o.stream_ops = ee.ops_table.link.stream))
        : te.isChrdev(o.mode) &&
          ((o.node_ops = ee.ops_table.chrdev.node),
          (o.stream_ops = ee.ops_table.chrdev.stream)),
      (o.timestamp = Date.now()),
      e && ((e.contents[r] = o), (e.timestamp = o.timestamp)),
      o
    );
  },
  getFileDataAsTypedArray: function (e) {
    return e.contents
      ? e.contents.subarray
        ? e.contents.subarray(0, e.usedBytes)
        : new Uint8Array(e.contents)
      : new Uint8Array(0);
  },
  expandFileStorage: function (e, r) {
    var t = e.contents ? e.contents.length : 0;
    if (!(t >= r)) {
      (r = Math.max(r, (t * (t < 1048576 ? 2 : 1.125)) >>> 0)),
        0 != t && (r = Math.max(r, 256));
      var n = e.contents;
      (e.contents = new Uint8Array(r)),
        e.usedBytes > 0 && e.contents.set(n.subarray(0, e.usedBytes), 0);
    }
  },
  resizeFileStorage: function (e, r) {
    if (e.usedBytes != r)
      if (0 == r) (e.contents = null), (e.usedBytes = 0);
      else {
        var t = e.contents;
        (e.contents = new Uint8Array(r)),
          t && e.contents.set(t.subarray(0, Math.min(r, e.usedBytes))),
          (e.usedBytes = r);
      }
  },
  node_ops: {
    getattr: function (e) {
      var r = {};
      return (
        (r.dev = te.isChrdev(e.mode) ? e.id : 1),
        (r.ino = e.id),
        (r.mode = e.mode),
        (r.nlink = 1),
        (r.uid = 0),
        (r.gid = 0),
        (r.rdev = e.rdev),
        te.isDir(e.mode)
          ? (r.size = 4096)
          : te.isFile(e.mode)
          ? (r.size = e.usedBytes)
          : te.isLink(e.mode)
          ? (r.size = e.link.length)
          : (r.size = 0),
        (r.atime = new Date(e.timestamp)),
        (r.mtime = new Date(e.timestamp)),
        (r.ctime = new Date(e.timestamp)),
        (r.blksize = 4096),
        (r.blocks = Math.ceil(r.size / r.blksize)),
        r
      );
    },
    setattr: function (e, r) {
      void 0 !== r.mode && (e.mode = r.mode),
        void 0 !== r.timestamp && (e.timestamp = r.timestamp),
        void 0 !== r.size && ee.resizeFileStorage(e, r.size);
    },
    lookup: function (e, r) {
      throw te.genericErrors[44];
    },
    mknod: function (e, r, t, n) {
      return ee.createNode(e, r, t, n);
    },
    rename: function (e, r, t) {
      if (te.isDir(e.mode)) {
        var n;
        try {
          n = te.lookupNode(r, t);
        } catch (e) {}
        if (n) for (var o in n.contents) throw new te.ErrnoError(55);
      }
      delete e.parent.contents[e.name],
        (e.parent.timestamp = Date.now()),
        (e.name = t),
        (r.contents[t] = e),
        (r.timestamp = e.parent.timestamp),
        (e.parent = r);
    },
    unlink: function (e, r) {
      delete e.contents[r], (e.timestamp = Date.now());
    },
    rmdir: function (e, r) {
      var t = te.lookupNode(e, r);
      for (var n in t.contents) throw new te.ErrnoError(55);
      delete e.contents[r], (e.timestamp = Date.now());
    },
    readdir: function (e) {
      var r = [".", ".."];
      for (var t in e.contents) e.contents.hasOwnProperty(t) && r.push(t);
      return r;
    },
    symlink: function (e, r, t) {
      var n = ee.createNode(e, r, 41471, 0);
      return (n.link = t), n;
    },
    readlink: function (e) {
      if (!te.isLink(e.mode)) throw new te.ErrnoError(28);
      return e.link;
    }
  },
  stream_ops: {
    read: function (e, r, t, n, o) {
      var a = e.node.contents;
      if (o >= e.node.usedBytes) return 0;
      var s = Math.min(e.node.usedBytes - o, n);
      if (s > 8 && a.subarray) r.set(a.subarray(o, o + s), t);
      else for (var i = 0; i < s; i++) r[t + i] = a[o + i];
      return s;
    },
    write: function (e, r, t, n, o, a) {
      if (!n) return 0;
      var s = e.node;
      if (
        ((s.timestamp = Date.now()),
        r.subarray && (!s.contents || s.contents.subarray))
      ) {
        if (a) return (s.contents = r.subarray(t, t + n)), (s.usedBytes = n), n;
        if (0 === s.usedBytes && 0 === o)
          return (s.contents = r.slice(t, t + n)), (s.usedBytes = n), n;
        if (o + n <= s.usedBytes)
          return s.contents.set(r.subarray(t, t + n), o), n;
      }
      if ((ee.expandFileStorage(s, o + n), s.contents.subarray && r.subarray))
        s.contents.set(r.subarray(t, t + n), o);
      else for (var i = 0; i < n; i++) s.contents[o + i] = r[t + i];
      return (s.usedBytes = Math.max(s.usedBytes, o + n)), n;
    },
    llseek: function (e, r, t) {
      var n = r;
      if (
        (1 === t
          ? (n += e.position)
          : 2 === t && te.isFile(e.node.mode) && (n += e.node.usedBytes),
        n < 0)
      )
        throw new te.ErrnoError(28);
      return n;
    },
    allocate: function (e, r, t) {
      ee.expandFileStorage(e.node, r + t),
        (e.node.usedBytes = Math.max(e.node.usedBytes, r + t));
    },
    mmap: function (e, r, t, n, o) {
      if (!te.isFile(e.node.mode)) throw new te.ErrnoError(43);
      var a,
        s,
        i = e.node.contents;
      if (2 & o || i.buffer !== E) {
        if (
          ((t > 0 || t + r < i.length) &&
            (i = i.subarray
              ? i.subarray(t, t + r)
              : Array.prototype.slice.call(i, t, t + r)),
          (s = !0),
          !(a = Z()))
        )
          throw new te.ErrnoError(48);
        g.set(i, a);
      } else (s = !1), (a = i.byteOffset);
      return { ptr: a, allocated: s };
    },
    msync: function (e, r, t, n, o) {
      if (!te.isFile(e.node.mode)) throw new te.ErrnoError(43);
      return 2 & o || ee.stream_ops.write(e, r, 0, n, t, !1), 0;
    }
  }
};
function re(e, t, n, o) {
  var a = o ? "" : "al " + e;
  r(
    e,
    function (r) {
      var n;
      (n = 'Loading data file "' + e + '" failed (no arrayBuffer).'),
        r || L(n),
        t(new Uint8Array(r)),
        a && C();
    },
    function (r) {
      if (!n) throw 'Loading data file "' + e + '" failed.';
      n();
    }
  ),
    a && z();
}
var te = {
    root: null,
    mounts: [],
    devices: {},
    streams: [],
    nextInode: 1,
    nameTable: null,
    currentPath: "/",
    initialized: !1,
    ignorePermissions: !0,
    ErrnoError: null,
    genericErrors: {},
    filesystems: null,
    syncFSRequests: 0,
    lookupPath: (e, r = {}) => {
      if (!(e = Y.resolve(te.cwd(), e))) return { path: "", node: null };
      if (
        (r = Object.assign({ follow_mount: !0, recurse_count: 0 }, r))
          .recurse_count > 8
      )
        throw new te.ErrnoError(32);
      for (
        var t = K.normalizeArray(
            e.split("/").filter((e) => !!e),
            !1
          ),
          n = te.root,
          o = "/",
          a = 0;
        a < t.length;
        a++
      ) {
        var s = a === t.length - 1;
        if (s && r.parent) break;
        if (
          ((n = te.lookupNode(n, t[a])),
          (o = K.join2(o, t[a])),
          te.isMountpoint(n) &&
            (!s || (s && r.follow_mount)) &&
            (n = n.mounted.root),
          !s || r.follow)
        )
          for (var i = 0; te.isLink(n.mode); ) {
            var u = te.readlink(o);
            if (
              ((o = Y.resolve(K.dirname(o), u)),
              (n = te.lookupPath(o, { recurse_count: r.recurse_count + 1 })
                .node),
              i++ > 40)
            )
              throw new te.ErrnoError(32);
          }
      }
      return { path: o, node: n };
    },
    getPath: (e) => {
      for (var r; ; ) {
        if (te.isRoot(e)) {
          var t = e.mount.mountpoint;
          return r ? ("/" !== t[t.length - 1] ? t + "/" + r : t + r) : t;
        }
        (r = r ? e.name + "/" + r : e.name), (e = e.parent);
      }
    },
    hashName: (e, r) => {
      for (var t = 0, n = 0; n < r.length; n++)
        t = ((t << 5) - t + r.charCodeAt(n)) | 0;
      return ((e + t) >>> 0) % te.nameTable.length;
    },
    hashAddNode: (e) => {
      var r = te.hashName(e.parent.id, e.name);
      (e.name_next = te.nameTable[r]), (te.nameTable[r] = e);
    },
    hashRemoveNode: (e) => {
      var r = te.hashName(e.parent.id, e.name);
      if (te.nameTable[r] === e) te.nameTable[r] = e.name_next;
      else
        for (var t = te.nameTable[r]; t; ) {
          if (t.name_next === e) {
            t.name_next = e.name_next;
            break;
          }
          t = t.name_next;
        }
    },
    lookupNode: (e, r) => {
      var t = te.mayLookup(e);
      if (t) throw new te.ErrnoError(t, e);
      for (
        var n = te.hashName(e.id, r), o = te.nameTable[n];
        o;
        o = o.name_next
      ) {
        var a = o.name;
        if (o.parent.id === e.id && a === r) return o;
      }
      return te.lookup(e, r);
    },
    createNode: (e, r, t, n) => {
      var o = new te.FSNode(e, r, t, n);
      return te.hashAddNode(o), o;
    },
    destroyNode: (e) => {
      te.hashRemoveNode(e);
    },
    isRoot: (e) => e === e.parent,
    isMountpoint: (e) => !!e.mounted,
    isFile: (e) => 32768 == (61440 & e),
    isDir: (e) => 16384 == (61440 & e),
    isLink: (e) => 40960 == (61440 & e),
    isChrdev: (e) => 8192 == (61440 & e),
    isBlkdev: (e) => 24576 == (61440 & e),
    isFIFO: (e) => 4096 == (61440 & e),
    isSocket: (e) => 49152 == (49152 & e),
    flagModes: { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 },
    modeStringToFlags: (e) => {
      var r = te.flagModes[e];
      if (void 0 === r) throw new Error("Unknown file open mode: " + e);
      return r;
    },
    flagsToPermissionString: (e) => {
      var r = ["r", "w", "rw"][3 & e];
      return 512 & e && (r += "w"), r;
    },
    nodePermissions: (e, r) =>
      te.ignorePermissions ||
      ((!r.includes("r") || 292 & e.mode) &&
        (!r.includes("w") || 146 & e.mode) &&
        (!r.includes("x") || 73 & e.mode))
        ? 0
        : 2,
    mayLookup: (e) => {
      var r = te.nodePermissions(e, "x");
      return r || (e.node_ops.lookup ? 0 : 2);
    },
    mayCreate: (e, r) => {
      try {
        te.lookupNode(e, r);
        return 20;
      } catch (e) {}
      return te.nodePermissions(e, "wx");
    },
    mayDelete: (e, r, t) => {
      var n;
      try {
        n = te.lookupNode(e, r);
      } catch (e) {
        return e.errno;
      }
      var o = te.nodePermissions(e, "wx");
      if (o) return o;
      if (t) {
        if (!te.isDir(n.mode)) return 54;
        if (te.isRoot(n) || te.getPath(n) === te.cwd()) return 10;
      } else if (te.isDir(n.mode)) return 31;
      return 0;
    },
    mayOpen: (e, r) =>
      e
        ? te.isLink(e.mode)
          ? 32
          : te.isDir(e.mode) &&
            ("r" !== te.flagsToPermissionString(r) || 512 & r)
          ? 31
          : te.nodePermissions(e, te.flagsToPermissionString(r))
        : 44,
    MAX_OPEN_FDS: 4096,
    nextfd: (e = 0, r = te.MAX_OPEN_FDS) => {
      for (var t = e; t <= r; t++) if (!te.streams[t]) return t;
      throw new te.ErrnoError(33);
    },
    getStream: (e) => te.streams[e],
    createStream: (e, r, t) => {
      te.FSStream ||
        ((te.FSStream = function () {
          this.shared = {};
        }),
        (te.FSStream.prototype = {
          object: {
            get: function () {
              return this.node;
            },
            set: function (e) {
              this.node = e;
            }
          },
          isRead: {
            get: function () {
              return 1 != (2097155 & this.flags);
            }
          },
          isWrite: {
            get: function () {
              return 0 != (2097155 & this.flags);
            }
          },
          isAppend: {
            get: function () {
              return 1024 & this.flags;
            }
          },
          flags: {
            get: function () {
              return this.shared.flags;
            },
            set: function (e) {
              this.shared.flags = e;
            }
          },
          position: {
            get function() {
              return this.shared.position;
            },
            set: function (e) {
              this.shared.position = e;
            }
          }
        })),
        (e = Object.assign(new te.FSStream(), e));
      var n = te.nextfd(r, t);
      return (e.fd = n), (te.streams[n] = e), e;
    },
    closeStream: (e) => {
      te.streams[e] = null;
    },
    chrdev_stream_ops: {
      open: (e) => {
        var r = te.getDevice(e.node.rdev);
        (e.stream_ops = r.stream_ops),
          e.stream_ops.open && e.stream_ops.open(e);
      },
      llseek: () => {
        throw new te.ErrnoError(70);
      }
    },
    major: (e) => e >> 8,
    minor: (e) => 255 & e,
    makedev: (e, r) => (e << 8) | r,
    registerDevice: (e, r) => {
      te.devices[e] = { stream_ops: r };
    },
    getDevice: (e) => te.devices[e],
    getMounts: (e) => {
      for (var r = [], t = [e]; t.length; ) {
        var n = t.pop();
        r.push(n), t.push.apply(t, n.mounts);
      }
      return r;
    },
    syncfs: (e, r) => {
      "function" == typeof e && ((r = e), (e = !1)),
        te.syncFSRequests++,
        te.syncFSRequests > 1 &&
          m(
            "warning: " +
              te.syncFSRequests +
              " FS.syncfs operations in flight at once, probably just doing extra work"
          );
      var t = te.getMounts(te.root.mount),
        n = 0;
      function o(e) {
        return te.syncFSRequests--, r(e);
      }
      function a(e) {
        if (e) return a.errored ? void 0 : ((a.errored = !0), o(e));
        ++n >= t.length && o(null);
      }
      t.forEach((r) => {
        if (!r.type.syncfs) return a(null);
        r.type.syncfs(r, e, a);
      });
    },
    mount: (e, r, t) => {
      var n,
        o = "/" === t,
        a = !t;
      if (o && te.root) throw new te.ErrnoError(10);
      if (!o && !a) {
        var s = te.lookupPath(t, { follow_mount: !1 });
        if (((t = s.path), (n = s.node), te.isMountpoint(n)))
          throw new te.ErrnoError(10);
        if (!te.isDir(n.mode)) throw new te.ErrnoError(54);
      }
      var i = { type: e, opts: r, mountpoint: t, mounts: [] },
        u = e.mount(i);
      return (
        (u.mount = i),
        (i.root = u),
        o
          ? (te.root = u)
          : n && ((n.mounted = i), n.mount && n.mount.mounts.push(i)),
        u
      );
    },
    unmount: (e) => {
      var r = te.lookupPath(e, { follow_mount: !1 });
      if (!te.isMountpoint(r.node)) throw new te.ErrnoError(28);
      var t = r.node,
        n = t.mounted,
        o = te.getMounts(n);
      Object.keys(te.nameTable).forEach((e) => {
        for (var r = te.nameTable[e]; r; ) {
          var t = r.name_next;
          o.includes(r.mount) && te.destroyNode(r), (r = t);
        }
      }),
        (t.mounted = null);
      var a = t.mount.mounts.indexOf(n);
      t.mount.mounts.splice(a, 1);
    },
    lookup: (e, r) => e.node_ops.lookup(e, r),
    mknod: (e, r, t) => {
      var n = te.lookupPath(e, { parent: !0 }).node,
        o = K.basename(e);
      if (!o || "." === o || ".." === o) throw new te.ErrnoError(28);
      var a = te.mayCreate(n, o);
      if (a) throw new te.ErrnoError(a);
      if (!n.node_ops.mknod) throw new te.ErrnoError(63);
      return n.node_ops.mknod(n, o, r, t);
    },
    create: (e, r) => (
      (r = void 0 !== r ? r : 438), (r &= 4095), (r |= 32768), te.mknod(e, r, 0)
    ),
    mkdir: (e, r) => (
      (r = void 0 !== r ? r : 511), (r &= 1023), (r |= 16384), te.mknod(e, r, 0)
    ),
    mkdirTree: (e, r) => {
      for (var t = e.split("/"), n = "", o = 0; o < t.length; ++o)
        if (t[o]) {
          n += "/" + t[o];
          try {
            te.mkdir(n, r);
          } catch (e) {
            if (20 != e.errno) throw e;
          }
        }
    },
    mkdev: (e, r, t) => (
      void 0 === t && ((t = r), (r = 438)), (r |= 8192), te.mknod(e, r, t)
    ),
    symlink: (e, r) => {
      if (!Y.resolve(e)) throw new te.ErrnoError(44);
      var t = te.lookupPath(r, { parent: !0 }).node;
      if (!t) throw new te.ErrnoError(44);
      var n = K.basename(r),
        o = te.mayCreate(t, n);
      if (o) throw new te.ErrnoError(o);
      if (!t.node_ops.symlink) throw new te.ErrnoError(63);
      return t.node_ops.symlink(t, n, e);
    },
    rename: (e, r) => {
      var t,
        n,
        o = K.dirname(e),
        a = K.dirname(r),
        s = K.basename(e),
        i = K.basename(r);
      if (
        ((t = te.lookupPath(e, { parent: !0 }).node),
        (n = te.lookupPath(r, { parent: !0 }).node),
        !t || !n)
      )
        throw new te.ErrnoError(44);
      if (t.mount !== n.mount) throw new te.ErrnoError(75);
      var u,
        l = te.lookupNode(t, s),
        c = Y.relative(e, a);
      if ("." !== c.charAt(0)) throw new te.ErrnoError(28);
      if ("." !== (c = Y.relative(r, o)).charAt(0)) throw new te.ErrnoError(55);
      try {
        u = te.lookupNode(n, i);
      } catch (e) {}
      if (l !== u) {
        var d = te.isDir(l.mode),
          f = te.mayDelete(t, s, d);
        if (f) throw new te.ErrnoError(f);
        if ((f = u ? te.mayDelete(n, i, d) : te.mayCreate(n, i)))
          throw new te.ErrnoError(f);
        if (!t.node_ops.rename) throw new te.ErrnoError(63);
        if (te.isMountpoint(l) || (u && te.isMountpoint(u)))
          throw new te.ErrnoError(10);
        if (n !== t && (f = te.nodePermissions(t, "w")))
          throw new te.ErrnoError(f);
        te.hashRemoveNode(l);
        try {
          t.node_ops.rename(l, n, i);
        } catch (e) {
          throw e;
        } finally {
          te.hashAddNode(l);
        }
      }
    },
    rmdir: (e) => {
      var r = te.lookupPath(e, { parent: !0 }).node,
        t = K.basename(e),
        n = te.lookupNode(r, t),
        o = te.mayDelete(r, t, !0);
      if (o) throw new te.ErrnoError(o);
      if (!r.node_ops.rmdir) throw new te.ErrnoError(63);
      if (te.isMountpoint(n)) throw new te.ErrnoError(10);
      r.node_ops.rmdir(r, t), te.destroyNode(n);
    },
    readdir: (e) => {
      var r = te.lookupPath(e, { follow: !0 }).node;
      if (!r.node_ops.readdir) throw new te.ErrnoError(54);
      return r.node_ops.readdir(r);
    },
    unlink: (e) => {
      var r = te.lookupPath(e, { parent: !0 }).node;
      if (!r) throw new te.ErrnoError(44);
      var t = K.basename(e),
        n = te.lookupNode(r, t),
        o = te.mayDelete(r, t, !1);
      if (o) throw new te.ErrnoError(o);
      if (!r.node_ops.unlink) throw new te.ErrnoError(63);
      if (te.isMountpoint(n)) throw new te.ErrnoError(10);
      r.node_ops.unlink(r, t), te.destroyNode(n);
    },
    readlink: (e) => {
      var r = te.lookupPath(e).node;
      if (!r) throw new te.ErrnoError(44);
      if (!r.node_ops.readlink) throw new te.ErrnoError(28);
      return Y.resolve(te.getPath(r.parent), r.node_ops.readlink(r));
    },
    stat: (e, r) => {
      var t = te.lookupPath(e, { follow: !r }).node;
      if (!t) throw new te.ErrnoError(44);
      if (!t.node_ops.getattr) throw new te.ErrnoError(63);
      return t.node_ops.getattr(t);
    },
    lstat: (e) => te.stat(e, !0),
    chmod: (e, r, t) => {
      var n;
      "string" == typeof e
        ? (n = te.lookupPath(e, { follow: !t }).node)
        : (n = e);
      if (!n.node_ops.setattr) throw new te.ErrnoError(63);
      n.node_ops.setattr(n, {
        mode: (4095 & r) | (-4096 & n.mode),
        timestamp: Date.now()
      });
    },
    lchmod: (e, r) => {
      te.chmod(e, r, !0);
    },
    fchmod: (e, r) => {
      var t = te.getStream(e);
      if (!t) throw new te.ErrnoError(8);
      te.chmod(t.node, r);
    },
    chown: (e, r, t, n) => {
      var o;
      "string" == typeof e
        ? (o = te.lookupPath(e, { follow: !n }).node)
        : (o = e);
      if (!o.node_ops.setattr) throw new te.ErrnoError(63);
      o.node_ops.setattr(o, { timestamp: Date.now() });
    },
    lchown: (e, r, t) => {
      te.chown(e, r, t, !0);
    },
    fchown: (e, r, t) => {
      var n = te.getStream(e);
      if (!n) throw new te.ErrnoError(8);
      te.chown(n.node, r, t);
    },
    truncate: (e, r) => {
      if (r < 0) throw new te.ErrnoError(28);
      var t;
      "string" == typeof e
        ? (t = te.lookupPath(e, { follow: !0 }).node)
        : (t = e);
      if (!t.node_ops.setattr) throw new te.ErrnoError(63);
      if (te.isDir(t.mode)) throw new te.ErrnoError(31);
      if (!te.isFile(t.mode)) throw new te.ErrnoError(28);
      var n = te.nodePermissions(t, "w");
      if (n) throw new te.ErrnoError(n);
      t.node_ops.setattr(t, { size: r, timestamp: Date.now() });
    },
    ftruncate: (e, r) => {
      var t = te.getStream(e);
      if (!t) throw new te.ErrnoError(8);
      if (0 == (2097155 & t.flags)) throw new te.ErrnoError(28);
      te.truncate(t.node, r);
    },
    utime: (e, r, t) => {
      var n = te.lookupPath(e, { follow: !0 }).node;
      n.node_ops.setattr(n, { timestamp: Math.max(r, t) });
    },
    open: (e, r, t) => {
      if ("" === e) throw new te.ErrnoError(44);
      var n;
      if (
        ((t = void 0 === t ? 438 : t),
        (t =
          64 & (r = "string" == typeof r ? te.modeStringToFlags(r) : r)
            ? (4095 & t) | 32768
            : 0),
        "object" == typeof e)
      )
        n = e;
      else {
        e = K.normalize(e);
        try {
          n = te.lookupPath(e, { follow: !(131072 & r) }).node;
        } catch (e) {}
      }
      var o = !1;
      if (64 & r)
        if (n) {
          if (128 & r) throw new te.ErrnoError(20);
        } else (n = te.mknod(e, t, 0)), (o = !0);
      if (!n) throw new te.ErrnoError(44);
      if ((te.isChrdev(n.mode) && (r &= -513), 65536 & r && !te.isDir(n.mode)))
        throw new te.ErrnoError(54);
      if (!o) {
        var a = te.mayOpen(n, r);
        if (a) throw new te.ErrnoError(a);
      }
      512 & r && !o && te.truncate(n, 0), (r &= -131713);
      var i = te.createStream({
        node: n,
        path: te.getPath(n),
        flags: r,
        seekable: !0,
        position: 0,
        stream_ops: n.stream_ops,
        ungotten: [],
        error: !1
      });
      return (
        i.stream_ops.open && i.stream_ops.open(i),
        !s.logReadFiles ||
          1 & r ||
          (te.readFiles || (te.readFiles = {}),
          e in te.readFiles || (te.readFiles[e] = 1)),
        i
      );
    },
    close: (e) => {
      if (te.isClosed(e)) throw new te.ErrnoError(8);
      e.getdents && (e.getdents = null);
      try {
        e.stream_ops.close && e.stream_ops.close(e);
      } catch (e) {
        throw e;
      } finally {
        te.closeStream(e.fd);
      }
      e.fd = null;
    },
    isClosed: (e) => null === e.fd,
    llseek: (e, r, t) => {
      if (te.isClosed(e)) throw new te.ErrnoError(8);
      if (!e.seekable || !e.stream_ops.llseek) throw new te.ErrnoError(70);
      if (0 != t && 1 != t && 2 != t) throw new te.ErrnoError(28);
      return (
        (e.position = e.stream_ops.llseek(e, r, t)),
        (e.ungotten = []),
        e.position
      );
    },
    read: (e, r, t, n, o) => {
      if (n < 0 || o < 0) throw new te.ErrnoError(28);
      if (te.isClosed(e)) throw new te.ErrnoError(8);
      if (1 == (2097155 & e.flags)) throw new te.ErrnoError(8);
      if (te.isDir(e.node.mode)) throw new te.ErrnoError(31);
      if (!e.stream_ops.read) throw new te.ErrnoError(28);
      var a = void 0 !== o;
      if (a) {
        if (!e.seekable) throw new te.ErrnoError(70);
      } else o = e.position;
      var s = e.stream_ops.read(e, r, t, n, o);
      return a || (e.position += s), s;
    },
    write: (e, r, t, n, o, a) => {
      if (n < 0 || o < 0) throw new te.ErrnoError(28);
      if (te.isClosed(e)) throw new te.ErrnoError(8);
      if (0 == (2097155 & e.flags)) throw new te.ErrnoError(8);
      if (te.isDir(e.node.mode)) throw new te.ErrnoError(31);
      if (!e.stream_ops.write) throw new te.ErrnoError(28);
      e.seekable && 1024 & e.flags && te.llseek(e, 0, 2);
      var s = void 0 !== o;
      if (s) {
        if (!e.seekable) throw new te.ErrnoError(70);
      } else o = e.position;
      var i = e.stream_ops.write(e, r, t, n, o, a);
      return s || (e.position += i), i;
    },
    allocate: (e, r, t) => {
      if (te.isClosed(e)) throw new te.ErrnoError(8);
      if (r < 0 || t <= 0) throw new te.ErrnoError(28);
      if (0 == (2097155 & e.flags)) throw new te.ErrnoError(8);
      if (!te.isFile(e.node.mode) && !te.isDir(e.node.mode))
        throw new te.ErrnoError(43);
      if (!e.stream_ops.allocate) throw new te.ErrnoError(138);
      e.stream_ops.allocate(e, r, t);
    },
    mmap: (e, r, t, n, o) => {
      if (0 != (2 & n) && 0 == (2 & o) && 2 != (2097155 & e.flags))
        throw new te.ErrnoError(2);
      if (1 == (2097155 & e.flags)) throw new te.ErrnoError(2);
      if (!e.stream_ops.mmap) throw new te.ErrnoError(43);
      return e.stream_ops.mmap(e, r, t, n, o);
    },
    msync: (e, r, t, n, o) =>
      e && e.stream_ops.msync ? e.stream_ops.msync(e, r, t, n, o) : 0,
    munmap: (e) => 0,
    ioctl: (e, r, t) => {
      if (!e.stream_ops.ioctl) throw new te.ErrnoError(59);
      return e.stream_ops.ioctl(e, r, t);
    },
    readFile: (e, r = {}) => {
      if (
        ((r.flags = r.flags || 0),
        (r.encoding = r.encoding || "binary"),
        "utf8" !== r.encoding && "binary" !== r.encoding)
      )
        throw new Error('Invalid encoding type "' + r.encoding + '"');
      var t,
        n = te.open(e, r.flags),
        o = te.stat(e).size,
        a = new Uint8Array(o);
      return (
        te.read(n, a, 0, o, 0),
        "utf8" === r.encoding
          ? (t = F(a, 0))
          : "binary" === r.encoding && (t = a),
        te.close(n),
        t
      );
    },
    writeFile: (e, r, t = {}) => {
      t.flags = t.flags || 577;
      var n = te.open(e, t.flags, t.mode);
      if ("string" == typeof r) {
        var o = new Uint8Array(R(r) + 1),
          a = P(r, o, 0, o.length);
        te.write(n, o, 0, a, void 0, t.canOwn);
      } else {
        if (!ArrayBuffer.isView(r)) throw new Error("Unsupported data type");
        te.write(n, r, 0, r.byteLength, void 0, t.canOwn);
      }
      te.close(n);
    },
    cwd: () => te.currentPath,
    chdir: (e) => {
      var r = te.lookupPath(e, { follow: !0 });
      if (null === r.node) throw new te.ErrnoError(44);
      if (!te.isDir(r.node.mode)) throw new te.ErrnoError(54);
      var t = te.nodePermissions(r.node, "x");
      if (t) throw new te.ErrnoError(t);
      te.currentPath = r.path;
    },
    createDefaultDirectories: () => {
      te.mkdir("/tmp"), te.mkdir("/home"), te.mkdir("/home/web_user");
    },
    createDefaultDevices: () => {
      te.mkdir("/dev"),
        te.registerDevice(te.makedev(1, 3), {
          read: () => 0,
          write: (e, r, t, n, o) => n
        }),
        te.mkdev("/dev/null", te.makedev(1, 3)),
        Q.register(te.makedev(5, 0), Q.default_tty_ops),
        Q.register(te.makedev(6, 0), Q.default_tty1_ops),
        te.mkdev("/dev/tty", te.makedev(5, 0)),
        te.mkdev("/dev/tty1", te.makedev(6, 0));
      var e = (function () {
        if (
          "object" == typeof crypto &&
          "function" == typeof crypto.getRandomValues
        ) {
          var e = new Uint8Array(1);
          return function () {
            return crypto.getRandomValues(e), e[0];
          };
        }
        if (c)
          try {
            var r = require("crypto");
            return function () {
              return r.randomBytes(1)[0];
            };
          } catch (e) {}
        return function () {
          L("randomDevice");
        };
      })();
      te.createDevice("/dev", "random", e),
        te.createDevice("/dev", "urandom", e),
        te.mkdir("/dev/shm"),
        te.mkdir("/dev/shm/tmp");
    },
    createSpecialDirectories: () => {
      te.mkdir("/proc");
      var e = te.mkdir("/proc/self");
      te.mkdir("/proc/self/fd"),
        te.mount(
          {
            mount: () => {
              var r = te.createNode(e, "fd", 16895, 73);
              return (
                (r.node_ops = {
                  lookup: (e, r) => {
                    var t = +r,
                      n = te.getStream(t);
                    if (!n) throw new te.ErrnoError(8);
                    var o = {
                      parent: null,
                      mount: { mountpoint: "fake" },
                      node_ops: { readlink: () => n.path }
                    };
                    return (o.parent = o), o;
                  }
                }),
                r
              );
            }
          },
          {},
          "/proc/self/fd"
        );
    },
    createStandardStreams: () => {
      s.stdin
        ? te.createDevice("/dev", "stdin", s.stdin)
        : te.symlink("/dev/tty", "/dev/stdin"),
        s.stdout
          ? te.createDevice("/dev", "stdout", null, s.stdout)
          : te.symlink("/dev/tty", "/dev/stdout"),
        s.stderr
          ? te.createDevice("/dev", "stderr", null, s.stderr)
          : te.symlink("/dev/tty1", "/dev/stderr"),
        te.open("/dev/stdin", 0),
        te.open("/dev/stdout", 1),
        te.open("/dev/stderr", 1);
    },
    ensureErrnoError: () => {
      te.ErrnoError ||
        ((te.ErrnoError = function (e, r) {
          (this.node = r),
            (this.setErrno = function (e) {
              this.errno = e;
            }),
            this.setErrno(e),
            (this.message = "FS error");
        }),
        (te.ErrnoError.prototype = new Error()),
        (te.ErrnoError.prototype.constructor = te.ErrnoError),
        [44].forEach((e) => {
          (te.genericErrors[e] = new te.ErrnoError(e)),
            (te.genericErrors[e].stack = "<generic error, no stack>");
        }));
    },
    staticInit: () => {
      te.ensureErrnoError(),
        (te.nameTable = new Array(4096)),
        te.mount(ee, {}, "/"),
        te.createDefaultDirectories(),
        te.createDefaultDevices(),
        te.createSpecialDirectories(),
        (te.filesystems = { MEMFS: ee });
    },
    init: (e, r, t) => {
      (te.init.initialized = !0),
        te.ensureErrnoError(),
        (s.stdin = e || s.stdin),
        (s.stdout = r || s.stdout),
        (s.stderr = t || s.stderr),
        te.createStandardStreams();
    },
    quit: () => {
      te.init.initialized = !1;
      for (var e = 0; e < te.streams.length; e++) {
        var r = te.streams[e];
        r && te.close(r);
      }
    },
    getMode: (e, r) => {
      var t = 0;
      return e && (t |= 365), r && (t |= 146), t;
    },
    findObject: (e, r) => {
      var t = te.analyzePath(e, r);
      return t.exists ? t.object : null;
    },
    analyzePath: (e, r) => {
      try {
        e = (n = te.lookupPath(e, { follow: !r })).path;
      } catch (e) {}
      var t = {
        isRoot: !1,
        exists: !1,
        error: 0,
        name: null,
        path: null,
        object: null,
        parentExists: !1,
        parentPath: null,
        parentObject: null
      };
      try {
        var n = te.lookupPath(e, { parent: !0 });
        (t.parentExists = !0),
          (t.parentPath = n.path),
          (t.parentObject = n.node),
          (t.name = K.basename(e)),
          (n = te.lookupPath(e, { follow: !r })),
          (t.exists = !0),
          (t.path = n.path),
          (t.object = n.node),
          (t.name = n.node.name),
          (t.isRoot = "/" === n.path);
      } catch (e) {
        t.error = e.errno;
      }
      return t;
    },
    createPath: (e, r, t, n) => {
      e = "string" == typeof e ? e : te.getPath(e);
      for (var o = r.split("/").reverse(); o.length; ) {
        var a = o.pop();
        if (a) {
          var s = K.join2(e, a);
          try {
            te.mkdir(s);
          } catch (e) {}
          e = s;
        }
      }
      return s;
    },
    createFile: (e, r, t, n, o) => {
      var a = K.join2("string" == typeof e ? e : te.getPath(e), r),
        s = te.getMode(n, o);
      return te.create(a, s);
    },
    createDataFile: (e, r, t, n, o, a) => {
      var s = r;
      e &&
        ((e = "string" == typeof e ? e : te.getPath(e)),
        (s = r ? K.join2(e, r) : e));
      var i = te.getMode(n, o),
        u = te.create(s, i);
      if (t) {
        if ("string" == typeof t) {
          for (var l = new Array(t.length), c = 0, d = t.length; c < d; ++c)
            l[c] = t.charCodeAt(c);
          t = l;
        }
        te.chmod(u, 146 | i);
        var f = te.open(u, 577);
        te.write(f, t, 0, t.length, 0, a), te.close(f), te.chmod(u, i);
      }
      return u;
    },
    createDevice: (e, r, t, n) => {
      var o = K.join2("string" == typeof e ? e : te.getPath(e), r),
        a = te.getMode(!!t, !!n);
      te.createDevice.major || (te.createDevice.major = 64);
      var s = te.makedev(te.createDevice.major++, 0);
      return (
        te.registerDevice(s, {
          open: (e) => {
            e.seekable = !1;
          },
          close: (e) => {
            n && n.buffer && n.buffer.length && n(10);
          },
          read: (e, r, n, o, a) => {
            for (var s = 0, i = 0; i < o; i++) {
              var u;
              try {
                u = t();
              } catch (e) {
                throw new te.ErrnoError(29);
              }
              if (void 0 === u && 0 === s) throw new te.ErrnoError(6);
              if (null == u) break;
              s++, (r[n + i] = u);
            }
            return s && (e.node.timestamp = Date.now()), s;
          },
          write: (e, r, t, o, a) => {
            for (var s = 0; s < o; s++)
              try {
                n(r[t + s]);
              } catch (e) {
                throw new te.ErrnoError(29);
              }
            return o && (e.node.timestamp = Date.now()), s;
          }
        }),
        te.mkdev(o, a, s)
      );
    },
    forceLoadFile: (r) => {
      if (r.isDevice || r.isFolder || r.link || r.contents) return !0;
      if ("undefined" != typeof XMLHttpRequest)
        throw new Error(
          "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread."
        );
      if (!e) throw new Error("Cannot load without read() or XMLHttpRequest.");
      try {
        (r.contents = ae(e(r.url), !0)), (r.usedBytes = r.contents.length);
      } catch (e) {
        throw new te.ErrnoError(29);
      }
    },
    createLazyFile: (e, r, t, n, o) => {
      function a() {
        (this.lengthKnown = !1), (this.chunks = []);
      }
      if (
        ((a.prototype.get = function (e) {
          if (!(e > this.length - 1 || e < 0)) {
            var r = e % this.chunkSize,
              t = (e / this.chunkSize) | 0;
            return this.getter(t)[r];
          }
        }),
        (a.prototype.setDataGetter = function (e) {
          this.getter = e;
        }),
        (a.prototype.cacheLength = function () {
          var e = new XMLHttpRequest();
          if (
            (e.open("HEAD", t, !1),
            e.send(null),
            !((e.status >= 200 && e.status < 300) || 304 === e.status))
          )
            throw new Error("Couldn't load " + t + ". Status: " + e.status);
          var r,
            n = Number(e.getResponseHeader("Content-length")),
            o = (r = e.getResponseHeader("Accept-Ranges")) && "bytes" === r,
            a = (r = e.getResponseHeader("Content-Encoding")) && "gzip" === r,
            s = 1048576;
          o || (s = n);
          var i = this;
          i.setDataGetter((e) => {
            var r = e * s,
              o = (e + 1) * s - 1;
            if (
              ((o = Math.min(o, n - 1)),
              void 0 === i.chunks[e] &&
                (i.chunks[e] = ((e, r) => {
                  if (e > r)
                    throw new Error(
                      "invalid range (" +
                        e +
                        ", " +
                        r +
                        ") or no bytes requested!"
                    );
                  if (r > n - 1)
                    throw new Error(
                      "only " + n + " bytes available! programmer error!"
                    );
                  var o = new XMLHttpRequest();
                  if (
                    (o.open("GET", t, !1),
                    n !== s &&
                      o.setRequestHeader("Range", "bytes=" + e + "-" + r),
                    (o.responseType = "arraybuffer"),
                    o.overrideMimeType &&
                      o.overrideMimeType("text/plain; charset=x-user-defined"),
                    o.send(null),
                    !((o.status >= 200 && o.status < 300) || 304 === o.status))
                  )
                    throw new Error(
                      "Couldn't load " + t + ". Status: " + o.status
                    );
                  return void 0 !== o.response
                    ? new Uint8Array(o.response || [])
                    : ae(o.responseText || "", !0);
                })(r, o)),
              void 0 === i.chunks[e])
            )
              throw new Error("doXHR failed!");
            return i.chunks[e];
          }),
            (!a && n) ||
              ((s = n = 1),
              (n = this.getter(0).length),
              (s = n),
              p(
                "LazyFiles on gzip forces download of the whole file when length is accessed"
              )),
            (this._length = n),
            (this._chunkSize = s),
            (this.lengthKnown = !0);
        }),
        "undefined" != typeof XMLHttpRequest)
      )
        throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
      var s = { isDevice: !1, url: t },
        i = te.createFile(e, r, s, n, o);
      s.contents
        ? (i.contents = s.contents)
        : s.url && ((i.contents = null), (i.url = s.url)),
        Object.defineProperties(i, {
          usedBytes: {
            get: function () {
              return this.contents.length;
            }
          }
        });
      var u = {};
      function l(e, r, t, n, o) {
        var a = e.node.contents;
        if (o >= a.length) return 0;
        var s = Math.min(a.length - o, n);
        if (a.slice) for (var i = 0; i < s; i++) r[t + i] = a[o + i];
        else for (i = 0; i < s; i++) r[t + i] = a.get(o + i);
        return s;
      }
      return (
        Object.keys(i.stream_ops).forEach((e) => {
          var r = i.stream_ops[e];
          u[e] = function () {
            return te.forceLoadFile(i), r.apply(null, arguments);
          };
        }),
        (u.read = (e, r, t, n, o) => (te.forceLoadFile(i), l(e, r, t, n, o))),
        (u.mmap = (e, r, t, n, o) => {
          te.forceLoadFile(i);
          var a = Z();
          if (!a) throw new te.ErrnoError(48);
          return l(e, g, a, r, t), { ptr: a, allocated: !0 };
        }),
        (i.stream_ops = u),
        i
      );
    },
    createPreloadedFile: (e, r, t, n, o, a, s, i, u, l) => {
      var c = r ? Y.resolve(K.join2(e, r)) : e;
      function d(t) {
        function d(t) {
          l && l(), i || te.createDataFile(e, r, t, n, o, u), a && a(), C();
        }
        Browser.handledByPreloadPlugin(t, c, d, () => {
          s && s(), C();
        }) || d(t);
      }
      z(), "string" == typeof t ? re(t, (e) => d(e), s) : d(t);
    },
    indexedDB: () =>
      window.indexedDB ||
      window.mozIndexedDB ||
      window.webkitIndexedDB ||
      window.msIndexedDB,
    DB_NAME: () => "EM_FS_" + window.location.pathname,
    DB_VERSION: 20,
    DB_STORE_NAME: "FILE_DATA",
    saveFilesToDB: (e, r, t) => {
      (r = r || (() => {})), (t = t || (() => {}));
      var n = te.indexedDB();
      try {
        var o = n.open(te.DB_NAME(), te.DB_VERSION);
      } catch (e) {
        return t(e);
      }
      (o.onupgradeneeded = () => {
        p("creating db"), o.result.createObjectStore(te.DB_STORE_NAME);
      }),
        (o.onsuccess = () => {
          var n = o.result.transaction([te.DB_STORE_NAME], "readwrite"),
            a = n.objectStore(te.DB_STORE_NAME),
            s = 0,
            i = 0,
            u = e.length;
          function l() {
            0 == i ? r() : t();
          }
          e.forEach((e) => {
            var r = a.put(te.analyzePath(e).object.contents, e);
            (r.onsuccess = () => {
              ++s + i == u && l();
            }),
              (r.onerror = () => {
                i++, s + i == u && l();
              });
          }),
            (n.onerror = t);
        }),
        (o.onerror = t);
    },
    loadFilesFromDB: (e, r, t) => {
      (r = r || (() => {})), (t = t || (() => {}));
      var n = te.indexedDB();
      try {
        var o = n.open(te.DB_NAME(), te.DB_VERSION);
      } catch (e) {
        return t(e);
      }
      (o.onupgradeneeded = t),
        (o.onsuccess = () => {
          var n = o.result;
          try {
            var a = n.transaction([te.DB_STORE_NAME], "readonly");
          } catch (e) {
            return void t(e);
          }
          var s = a.objectStore(te.DB_STORE_NAME),
            i = 0,
            u = 0,
            l = e.length;
          function c() {
            0 == u ? r() : t();
          }
          e.forEach((e) => {
            var r = s.get(e);
            (r.onsuccess = () => {
              te.analyzePath(e).exists && te.unlink(e),
                te.createDataFile(
                  K.dirname(e),
                  K.basename(e),
                  r.result,
                  !0,
                  !0,
                  !0
                ),
                ++i + u == l && c();
            }),
              (r.onerror = () => {
                u++, i + u == l && c();
              });
          }),
            (a.onerror = t);
        }),
        (o.onerror = t);
    }
  },
  ne = {
    DEFAULT_POLLMASK: 5,
    calculateAt: function (e, r, t) {
      if (K.isAbs(r)) return r;
      var n;
      if (-100 === e) n = te.cwd();
      else {
        var o = te.getStream(e);
        if (!o) throw new te.ErrnoError(8);
        n = o.path;
      }
      if (0 == r.length) {
        if (!t) throw new te.ErrnoError(44);
        return n;
      }
      return K.join2(n, r);
    },
    doStat: function (e, r, t) {
      try {
        var n = e(r);
      } catch (e) {
        if (e && e.node && K.normalize(r) !== K.normalize(te.getPath(e.node)))
          return -54;
        throw e;
      }
      return (
        (b[t >> 2] = n.dev),
        (b[(t + 4) >> 2] = 0),
        (b[(t + 8) >> 2] = n.ino),
        (b[(t + 12) >> 2] = n.mode),
        (b[(t + 16) >> 2] = n.nlink),
        (b[(t + 20) >> 2] = n.uid),
        (b[(t + 24) >> 2] = n.gid),
        (b[(t + 28) >> 2] = n.rdev),
        (b[(t + 32) >> 2] = 0),
        (q = [
          n.size >>> 0,
          ((H = n.size),
          +Math.abs(H) >= 1
            ? H > 0
              ? (0 | Math.min(+Math.floor(H / 4294967296), 4294967295)) >>> 0
              : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0
            : 0)
        ]),
        (b[(t + 40) >> 2] = q[0]),
        (b[(t + 44) >> 2] = q[1]),
        (b[(t + 48) >> 2] = 4096),
        (b[(t + 52) >> 2] = n.blocks),
        (b[(t + 56) >> 2] = (n.atime.getTime() / 1e3) | 0),
        (b[(t + 60) >> 2] = 0),
        (b[(t + 64) >> 2] = (n.mtime.getTime() / 1e3) | 0),
        (b[(t + 68) >> 2] = 0),
        (b[(t + 72) >> 2] = (n.ctime.getTime() / 1e3) | 0),
        (b[(t + 76) >> 2] = 0),
        (q = [
          n.ino >>> 0,
          ((H = n.ino),
          +Math.abs(H) >= 1
            ? H > 0
              ? (0 | Math.min(+Math.floor(H / 4294967296), 4294967295)) >>> 0
              : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0
            : 0)
        ]),
        (b[(t + 80) >> 2] = q[0]),
        (b[(t + 84) >> 2] = q[1]),
        0
      );
    },
    doMsync: function (e, r, t, n, o) {
      var a = _.slice(e, e + t);
      te.msync(r, a, o, t, n);
    },
    varargs: void 0,
    get: function () {
      return (ne.varargs += 4), b[(ne.varargs - 4) >> 2];
    },
    getStr: function (e) {
      var r = (function (e, r) {
        return e ? F(_, e, r) : "";
      })(e);
      return r;
    },
    getStreamFromFD: function (e) {
      var r = te.getStream(e);
      if (!r) throw new te.ErrnoError(8);
      return r;
    }
  };
var oe = function (e, r, t, n) {
  e || (e = this),
    (this.parent = e),
    (this.mount = e.mount),
    (this.mounted = null),
    (this.id = te.nextInode++),
    (this.name = r),
    (this.mode = t),
    (this.node_ops = {}),
    (this.stream_ops = {}),
    (this.rdev = n);
};
function ae(e, r, t) {
  var n = t > 0 ? t : R(e) + 1,
    o = new Array(n),
    a = P(e, o, 0, o.length);
  return r && (o.length = a), o;
}
Object.defineProperties(oe.prototype, {
  read: {
    get: function () {
      return 365 == (365 & this.mode);
    },
    set: function (e) {
      e ? (this.mode |= 365) : (this.mode &= -366);
    }
  },
  write: {
    get: function () {
      return 146 == (146 & this.mode);
    },
    set: function (e) {
      e ? (this.mode |= 146) : (this.mode &= -147);
    }
  },
  isFolder: {
    get: function () {
      return te.isDir(this.mode);
    }
  },
  isDevice: {
    get: function () {
      return te.isChrdev(this.mode);
    }
  }
}),
  (te.FSNode = oe),
  te.staticInit();
var se = {
  __syscall_fcntl64: function (e, r, t) {
    ne.varargs = t;
    try {
      var n = ne.getStreamFromFD(e);
      switch (r) {
        case 0:
          return (o = ne.get()) < 0 ? -28 : te.createStream(n, o).fd;
        case 1:
        case 2:
        case 6:
        case 7:
          return 0;
        case 3:
          return n.flags;
        case 4:
          var o = ne.get();
          return (n.flags |= o), 0;
        case 5:
          o = ne.get();
          return (k[(o + 0) >> 1] = 2), 0;
        case 16:
        case 8:
        default:
          return -28;
        case 9:
          return (a = 28), (b[ue() >> 2] = a), -1;
      }
    } catch (e) {
      if (void 0 === te || !(e instanceof te.ErrnoError)) throw e;
      return -e.errno;
    }
    var a;
  },
  __syscall_ioctl: function (e, r, t) {
    ne.varargs = t;
    try {
      var n = ne.getStreamFromFD(e);
      switch (r) {
        case 21509:
        case 21505:
        case 21510:
        case 21511:
        case 21512:
        case 21506:
        case 21507:
        case 21508:
        case 21523:
        case 21524:
          return n.tty ? 0 : -59;
        case 21519:
          if (!n.tty) return -59;
          var o = ne.get();
          return (b[o >> 2] = 0), 0;
        case 21520:
          return n.tty ? -28 : -59;
        case 21531:
          o = ne.get();
          return te.ioctl(n, r, o);
        default:
          L("bad ioctl syscall " + r);
      }
    } catch (e) {
      if (void 0 === te || !(e instanceof te.ErrnoError)) throw e;
      return -e.errno;
    }
  },
  __syscall_openat: function (e, r, t, n) {
    ne.varargs = n;
    try {
      (r = ne.getStr(r)), (r = ne.calculateAt(e, r));
      var o = n ? ne.get() : 0;
      return te.open(r, t, o).fd;
    } catch (e) {
      if (void 0 === te || !(e instanceof te.ErrnoError)) throw e;
      return -e.errno;
    }
  },
  emscripten_resize_heap: function (e) {
    _.length, L("OOM");
  },
  fd_close: function (e) {
    try {
      var r = ne.getStreamFromFD(e);
      return te.close(r), 0;
    } catch (e) {
      if (void 0 === te || !(e instanceof te.ErrnoError)) throw e;
      return e.errno;
    }
  },
  fd_read: function (e, r, t, n) {
    try {
      var o = (function (e, r, t, n) {
        for (var o = 0, a = 0; a < t; a++) {
          var s = S[r >> 2],
            i = S[(r + 4) >> 2];
          r += 8;
          var u = te.read(e, g, s, i, n);
          if (u < 0) return -1;
          if (((o += u), u < i)) break;
        }
        return o;
      })(ne.getStreamFromFD(e), r, t);
      return (b[n >> 2] = o), 0;
    } catch (e) {
      if (void 0 === te || !(e instanceof te.ErrnoError)) throw e;
      return e.errno;
    }
  },
  fd_seek: function (e, r, t, n, o) {
    try {
      var a =
        ((u = t) + 2097152) >>> 0 < 4194305 - !!(i = r)
          ? (i >>> 0) + 4294967296 * u
          : NaN;
      if (isNaN(a)) return 61;
      var s = ne.getStreamFromFD(e);
      return (
        te.llseek(s, a, n),
        (q = [
          s.position >>> 0,
          ((H = s.position),
          +Math.abs(H) >= 1
            ? H > 0
              ? (0 | Math.min(+Math.floor(H / 4294967296), 4294967295)) >>> 0
              : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0
            : 0)
        ]),
        (b[o >> 2] = q[0]),
        (b[(o + 4) >> 2] = q[1]),
        s.getdents && 0 === a && 0 === n && (s.getdents = null),
        0
      );
    } catch (e) {
      if (void 0 === te || !(e instanceof te.ErrnoError)) throw e;
      return e.errno;
    }
    var i, u;
  },
  fd_write: function (e, r, t, n) {
    try {
      var o = (function (e, r, t, n) {
        for (var o = 0, a = 0; a < t; a++) {
          var s = S[r >> 2],
            i = S[(r + 4) >> 2];
          r += 8;
          var u = te.write(e, g, s, i, n);
          if (u < 0) return -1;
          o += u;
        }
        return o;
      })(ne.getStreamFromFD(e), r, t);
      return (S[n >> 2] = o), 0;
    } catch (e) {
      if (void 0 === te || !(e instanceof te.ErrnoError)) throw e;
      return e.errno;
    }
  },
  setTempRet0: function (e) {}
};
!(function () {
  var e = { env: se, wasi_snapshot_preview1: se };
  function t(e, r) {
    var t,
      n,
      o = e.exports;
    (s.asm = o),
      (h = s.asm.memory),
      (t = h.buffer),
      (E = t),
      (s.HEAP8 = g = new Int8Array(t)),
      (s.HEAP16 = k = new Int16Array(t)),
      (s.HEAP32 = b = new Int32Array(t)),
      (s.HEAPU8 = _ = new Uint8Array(t)),
      (s.HEAPU16 = new Uint16Array(t)),
      (s.HEAPU32 = S = new Uint32Array(t)),
      (s.HEAPF32 = new Float32Array(t)),
      (s.HEAPF64 = new Float64Array(t)),
      (D = s.asm.__indirect_function_table),
      (n = s.asm.__wasm_call_ctors),
      x.unshift(n),
      C();
  }
  function n(e) {
    t(e.instance);
  }
  function o(t) {
    return (function () {
      if (!f && l) {
        if ("function" == typeof fetch && !X(I))
          return fetch(I, { credentials: "same-origin" })
            .then(function (e) {
              if (!e.ok) throw "failed to load wasm binary file at '" + I + "'";
              return e.arrayBuffer();
            })
            .catch(function () {
              return V(I);
            });
        if (r)
          return new Promise(function (e, t) {
            r(
              I,
              function (r) {
                e(new Uint8Array(r));
              },
              t
            );
          });
      }
      return Promise.resolve().then(function () {
        return V(I);
      });
    })()
      .then(function (r) {
        return WebAssembly.instantiate(r, e);
      })
      .then(function (e) {
        return e;
      })
      .then(t, function (e) {
        m("failed to asynchronously prepare wasm: " + e), L(e);
      });
  }
  if ((z(), s.instantiateWasm))
    try {
      return s.instantiateWasm(e, t);
    } catch (e) {
      return m("Module.instantiateWasm callback failed with error: " + e), !1;
    }
  f ||
  "function" != typeof WebAssembly.instantiateStreaming ||
  W(I) ||
  X(I) ||
  c ||
  "function" != typeof fetch
    ? o(n)
    : fetch(I, { credentials: "same-origin" }).then(function (r) {
        return WebAssembly.instantiateStreaming(r, e).then(n, function (e) {
          return (
            m("wasm streaming compile failed: " + e),
            m("falling back to ArrayBuffer instantiation"),
            o(n)
          );
        });
      });
})(),
  (s.___wasm_call_ctors = function () {
    return (s.___wasm_call_ctors = s.asm.__wasm_call_ctors).apply(
      null,
      arguments
    );
  }),
  (s._main = function () {
    return (s._main = s.asm.main).apply(null, arguments);
  });
var ie,
  ue = (s.___errno_location = function () {
    return (ue = s.___errno_location = s.asm.__errno_location).apply(
      null,
      arguments
    );
  });
function le(e) {
  (this.name = "ExitStatus"),
    (this.message = "Program terminated with exit(" + e + ")"),
    (this.status = e);
}
function ce(e) {
  var r,
    t,
    n = s._main;
  try {
    var o = n(0, 0);
    return (
      (v = t = o),
      (v = r = t),
      N() || (s.onExit && s.onExit(r), (y = !0)),
      u(r, new le(r)),
      o
    );
  } catch (e) {
    return (function (e) {
      if (e instanceof le || "unwind" == e) return v;
      u(1, e);
    })(e);
  }
}
function de(e) {
  function r() {
    ie ||
      ((ie = !0),
      (s.calledRun = !0),
      y ||
        (s.noFSInit || te.init.initialized || te.init(),
        (te.ignorePermissions = !1),
        $(x),
        $(j),
        s.onRuntimeInitialized && s.onRuntimeInitialized(),
        fe && ce(),
        (function () {
          if (s.postRun)
            for (
              "function" == typeof s.postRun && (s.postRun = [s.postRun]);
              s.postRun.length;

            )
              (e = s.postRun.shift()), B.unshift(e);
          var e;
          $(B);
        })()));
  }
  T > 0 ||
    (!(function () {
      if (s.preRun)
        for (
          "function" == typeof s.preRun && (s.preRun = [s.preRun]);
          s.preRun.length;

        )
          (e = s.preRun.shift()), M.unshift(e);
      var e;
      $(M);
    })(),
    T > 0 ||
      (s.setStatus
        ? (s.setStatus("Running..."),
          setTimeout(function () {
            setTimeout(function () {
              s.setStatus("");
            }, 1),
              r();
          }, 1))
        : r()));
}
if (
  ((s.stackSave = function () {
    return (s.stackSave = s.asm.stackSave).apply(null, arguments);
  }),
  (s.stackRestore = function () {
    return (s.stackRestore = s.asm.stackRestore).apply(null, arguments);
  }),
  (s.stackAlloc = function () {
    return (s.stackAlloc = s.asm.stackAlloc).apply(null, arguments);
  }),
  (s.dynCall_jiji = function () {
    return (s.dynCall_jiji = s.asm.dynCall_jiji).apply(null, arguments);
  }),
  (O = function e() {
    ie || de(), ie || (O = e);
  }),
  (s.run = de),
  s.preInit)
)
  for (
    "function" == typeof s.preInit && (s.preInit = [s.preInit]);
    s.preInit.length > 0;

  )
    s.preInit.pop()();
var fe = !0;
s.noInitialRun && (fe = !1), de();
let pe = "";
class me {
  constructor(e, r) {
    this.state = e;
  }
  async fetch(e) {
    if (!e.url) return t({ response: "abnormal" }, [400, "abnormal", r]);
    const r = { "Content-Type": "application/json" },
      t = (e, r) =>
        new Response(e, { status: r[0], message: r[1], headers: r[2] });
    if ("/" !== new URL(e.url).pathname)
      return new Response("Not found", { status: 404 });
    {
      const o = (async function (e) {
        return await s({
          locateFile: function (r, t) {
            return new URL(e.url) + r;
          },
          wasmMemory: new WebAssembly.Memory({ initial: 512 }),
          print: (e) => (pe += `${e}\n`),
          printErr: (e) => (pe += `${e}\n`),
          instantiateWasm: (e, r) => {
            const t = new WebAssembly.Instance(BACKBANK_WASM, e);
            return r(t), t.exports;
          }
        });
      })(e);
      var n = { keyValue: {}, opts: [] };
      if (o)
        return o.constructor !== Object
          ? (console.log("response.c!==Obj"),
            (n.keyValue = { response: o }),
            (n.opts = [200, "string success...: " + e.url, r]),
            t(n.keyValue, n.opts))
          : ((n.keyValue = { data: o }),
            (n.opts = [200, "success: " + e.url, r]),
            t(n.keyValue, n.opts));
    }
  }
}
var he = {
  async fetch(e, r) {
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
        : await (async function (e, r) {
            const t = new URL(e.url);
            var n = t.origin;
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
                    { status: 400, message: "no access for this origin: " + e }
                  ))(n)
              : (console.log(
                  "env",
                  r,
                  n,
                  ": making example class durable object"
                ),
                await ((e) => e.get(e.idFromName(t.href)))(
                  r.EXAMPLE_CLASS_DURABLE_OBJECT
                )
                  .fetch(e)
                  .then(
                    async (e) => (
                      console.log("response from worker object", e), e
                    )
                  )
                  .then((r) => {
                    console.log("fetched EXAMPLE_CLASS_DURABLE_OBJECT : ", r);
                    const t = { "Content-Type": "application/json" },
                      n = (e, r, t) => {
                        const n = JSON.stringify({ success: e, ...r });
                        return new Response(n, {
                          status: t[0],
                          message: t[1],
                          headers: t[2]
                        });
                      };
                    var o = {};
                    return (
                      ((e) => !0)((o.opts = [])) && (o.obj = {}),
                      r
                        ? r.data
                          ? ((o.opts = [200, `success: ${e.url}`, t]),
                            (o.obj = { true: JSON.stringify(r.data) }),
                            n(!0, o.obj, o.opts))
                          : ((o.opts = [
                              r.status,
                              (r.statusText, r.statusText),
                              t
                            ]),
                            (o.obj = { response: r }),
                            n(!1, o.obj, o.opts))
                        : ((o.opts = [
                            400,
                            "no Response from durable object chain",
                            t
                          ]),
                          (o.obj = { data: {} }),
                          n(!1, o.obj, o.opts))
                    );
                  }));
          })(e, r);
    } catch (e) {
      return new Response(e.message);
    }
  }
};
export { me as DurableObjectExample, he as default };
