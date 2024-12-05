function zS(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const o in r)
        if (o !== 'default' && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  );
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === 'childList')
        for (const a of i.addedNodes)
          a.tagName === 'LINK' && a.rel === 'modulepreload' && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (i.credentials = 'omit')
          : (i.credentials = 'same-origin'),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function Wd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var fg = { exports: {} },
  fe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pl = Symbol.for('react.element'),
  jS = Symbol.for('react.portal'),
  DS = Symbol.for('react.fragment'),
  BS = Symbol.for('react.strict_mode'),
  VS = Symbol.for('react.profiler'),
  HS = Symbol.for('react.provider'),
  US = Symbol.for('react.context'),
  WS = Symbol.for('react.forward_ref'),
  KS = Symbol.for('react.suspense'),
  GS = Symbol.for('react.memo'),
  qS = Symbol.for('react.lazy'),
  vm = Symbol.iterator;
function XS(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (vm && e[vm]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var dg = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  vg = Object.assign,
  mg = {};
function Hi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = mg),
    (this.updater = n || dg);
}
Hi.prototype.isReactComponent = {};
Hi.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Hi.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function pg() {}
pg.prototype = Hi.prototype;
function Kd(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = mg),
    (this.updater = n || dg);
}
var Gd = (Kd.prototype = new pg());
Gd.constructor = Kd;
vg(Gd, Hi.prototype);
Gd.isPureReactComponent = !0;
var mm = Array.isArray,
  hg = Object.prototype.hasOwnProperty,
  qd = { current: null },
  gg = { key: !0, ref: !0, __self: !0, __source: !0 };
function yg(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      hg.call(t, r) && !gg.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var s = Array(l), u = 0; u < l; u++) s[u] = arguments[u + 2];
    o.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: pl,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: qd.current,
  };
}
function QS(e, t) {
  return {
    $$typeof: pl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Xd(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === pl;
}
function YS(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var pm = /\/+/g;
function lc(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? YS('' + e.key)
    : t.toString(36);
}
function us(e, t, n, r, o) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        a = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case pl:
          case jS:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = r === '' ? '.' + lc(a, 0) : r),
      mm(o)
        ? ((n = ''),
          e != null && (n = e.replace(pm, '$&/') + '/'),
          us(o, t, n, '', function (u) {
            return u;
          }))
        : o != null &&
          (Xd(o) &&
            (o = QS(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ''
                  : ('' + o.key).replace(pm, '$&/') + '/') +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (r = r === '' ? '.' : r + ':'), mm(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var s = r + lc(i, l);
      a += us(i, t, n, s, o);
    }
  else if (((s = XS(e)), typeof s == 'function'))
    for (e = s.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + lc(i, l++)), (a += us(i, t, n, s, o));
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return a;
}
function Nl(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    us(e, r, '', '', function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function ZS(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Zt = { current: null },
  cs = { transition: null },
  JS = {
    ReactCurrentDispatcher: Zt,
    ReactCurrentBatchConfig: cs,
    ReactCurrentOwner: qd,
  };
function Sg() {
  throw Error('act(...) is not supported in production builds of React.');
}
fe.Children = {
  map: Nl,
  forEach: function (e, t, n) {
    Nl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Nl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Nl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Xd(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
fe.Component = Hi;
fe.Fragment = DS;
fe.Profiler = VS;
fe.PureComponent = Kd;
fe.StrictMode = BS;
fe.Suspense = KS;
fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = JS;
fe.act = Sg;
fe.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = vg({}, e.props),
    o = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = qd.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (s in t)
      hg.call(t, s) &&
        !gg.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    l = Array(s);
    for (var u = 0; u < s; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: pl, type: e.type, key: o, ref: i, props: r, _owner: a };
};
fe.createContext = function (e) {
  return (
    (e = {
      $$typeof: US,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: HS, _context: e }),
    (e.Consumer = e)
  );
};
fe.createElement = yg;
fe.createFactory = function (e) {
  var t = yg.bind(null, e);
  return (t.type = e), t;
};
fe.createRef = function () {
  return { current: null };
};
fe.forwardRef = function (e) {
  return { $$typeof: WS, render: e };
};
fe.isValidElement = Xd;
fe.lazy = function (e) {
  return { $$typeof: qS, _payload: { _status: -1, _result: e }, _init: ZS };
};
fe.memo = function (e, t) {
  return { $$typeof: GS, type: e, compare: t === void 0 ? null : t };
};
fe.startTransition = function (e) {
  var t = cs.transition;
  cs.transition = {};
  try {
    e();
  } finally {
    cs.transition = t;
  }
};
fe.unstable_act = Sg;
fe.useCallback = function (e, t) {
  return Zt.current.useCallback(e, t);
};
fe.useContext = function (e) {
  return Zt.current.useContext(e);
};
fe.useDebugValue = function () {};
fe.useDeferredValue = function (e) {
  return Zt.current.useDeferredValue(e);
};
fe.useEffect = function (e, t) {
  return Zt.current.useEffect(e, t);
};
fe.useId = function () {
  return Zt.current.useId();
};
fe.useImperativeHandle = function (e, t, n) {
  return Zt.current.useImperativeHandle(e, t, n);
};
fe.useInsertionEffect = function (e, t) {
  return Zt.current.useInsertionEffect(e, t);
};
fe.useLayoutEffect = function (e, t) {
  return Zt.current.useLayoutEffect(e, t);
};
fe.useMemo = function (e, t) {
  return Zt.current.useMemo(e, t);
};
fe.useReducer = function (e, t, n) {
  return Zt.current.useReducer(e, t, n);
};
fe.useRef = function (e) {
  return Zt.current.useRef(e);
};
fe.useState = function (e) {
  return Zt.current.useState(e);
};
fe.useSyncExternalStore = function (e, t, n) {
  return Zt.current.useSyncExternalStore(e, t, n);
};
fe.useTransition = function () {
  return Zt.current.useTransition();
};
fe.version = '18.3.1';
fg.exports = fe;
var f = fg.exports;
const ae = Wd(f),
  hl = zS({ __proto__: null, default: ae }, [f]);
var Zc = {},
  wg = { exports: {} },
  Cn = {},
  Cg = { exports: {} },
  bg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(k, O) {
    var _ = k.length;
    k.push(O);
    e: for (; 0 < _; ) {
      var z = (_ - 1) >>> 1,
        B = k[z];
      if (0 < o(B, O)) (k[z] = O), (k[_] = B), (_ = z);
      else break e;
    }
  }
  function n(k) {
    return k.length === 0 ? null : k[0];
  }
  function r(k) {
    if (k.length === 0) return null;
    var O = k[0],
      _ = k.pop();
    if (_ !== O) {
      k[0] = _;
      e: for (var z = 0, B = k.length, K = B >>> 1; z < K; ) {
        var D = 2 * (z + 1) - 1,
          q = k[D],
          te = D + 1,
          ne = k[te];
        if (0 > o(q, _))
          te < B && 0 > o(ne, q)
            ? ((k[z] = ne), (k[te] = _), (z = te))
            : ((k[z] = q), (k[D] = _), (z = D));
        else if (te < B && 0 > o(ne, _)) (k[z] = ne), (k[te] = _), (z = te);
        else break e;
      }
    }
    return O;
  }
  function o(k, O) {
    var _ = k.sortIndex - O.sortIndex;
    return _ !== 0 ? _ : k.id - O.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      l = a.now();
    e.unstable_now = function () {
      return a.now() - l;
    };
  }
  var s = [],
    u = [],
    c = 1,
    d = null,
    v = 3,
    w = !1,
    g = !1,
    S = !1,
    y = typeof setTimeout == 'function' ? setTimeout : null,
    p = typeof clearTimeout == 'function' ? clearTimeout : null,
    m = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(k) {
    for (var O = n(u); O !== null; ) {
      if (O.callback === null) r(u);
      else if (O.startTime <= k)
        r(u), (O.sortIndex = O.expirationTime), t(s, O);
      else break;
      O = n(u);
    }
  }
  function C(k) {
    if (((S = !1), h(k), !g))
      if (n(s) !== null) (g = !0), T(b);
      else {
        var O = n(u);
        O !== null && R(C, O.startTime - k);
      }
  }
  function b(k, O) {
    (g = !1), S && ((S = !1), p(P), (P = -1)), (w = !0);
    var _ = v;
    try {
      for (
        h(O), d = n(s);
        d !== null && (!(d.expirationTime > O) || (k && !A()));

      ) {
        var z = d.callback;
        if (typeof z == 'function') {
          (d.callback = null), (v = d.priorityLevel);
          var B = z(d.expirationTime <= O);
          (O = e.unstable_now()),
            typeof B == 'function' ? (d.callback = B) : d === n(s) && r(s),
            h(O);
        } else r(s);
        d = n(s);
      }
      if (d !== null) var K = !0;
      else {
        var D = n(u);
        D !== null && R(C, D.startTime - O), (K = !1);
      }
      return K;
    } finally {
      (d = null), (v = _), (w = !1);
    }
  }
  var x = !1,
    E = null,
    P = -1,
    I = 5,
    M = -1;
  function A() {
    return !(e.unstable_now() - M < I);
  }
  function j() {
    if (E !== null) {
      var k = e.unstable_now();
      M = k;
      var O = !0;
      try {
        O = E(!0, k);
      } finally {
        O ? L() : ((x = !1), (E = null));
      }
    } else x = !1;
  }
  var L;
  if (typeof m == 'function')
    L = function () {
      m(j);
    };
  else if (typeof MessageChannel < 'u') {
    var F = new MessageChannel(),
      U = F.port2;
    (F.port1.onmessage = j),
      (L = function () {
        U.postMessage(null);
      });
  } else
    L = function () {
      y(j, 0);
    };
  function T(k) {
    (E = k), x || ((x = !0), L());
  }
  function R(k, O) {
    P = y(function () {
      k(e.unstable_now());
    }, O);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (k) {
      k.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || w || ((g = !0), T(b));
    }),
    (e.unstable_forceFrameRate = function (k) {
      0 > k || 125 < k
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (I = 0 < k ? Math.floor(1e3 / k) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return v;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (k) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = v;
      }
      var _ = v;
      v = O;
      try {
        return k();
      } finally {
        v = _;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (k, O) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var _ = v;
      v = k;
      try {
        return O();
      } finally {
        v = _;
      }
    }),
    (e.unstable_scheduleCallback = function (k, O, _) {
      var z = e.unstable_now();
      switch (
        (typeof _ == 'object' && _ !== null
          ? ((_ = _.delay), (_ = typeof _ == 'number' && 0 < _ ? z + _ : z))
          : (_ = z),
        k)
      ) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return (
        (B = _ + B),
        (k = {
          id: c++,
          callback: O,
          priorityLevel: k,
          startTime: _,
          expirationTime: B,
          sortIndex: -1,
        }),
        _ > z
          ? ((k.sortIndex = _),
            t(u, k),
            n(s) === null &&
              k === n(u) &&
              (S ? (p(P), (P = -1)) : (S = !0), R(C, _ - z)))
          : ((k.sortIndex = B), t(s, k), g || w || ((g = !0), T(b))),
        k
      );
    }),
    (e.unstable_shouldYield = A),
    (e.unstable_wrapCallback = function (k) {
      var O = v;
      return function () {
        var _ = v;
        v = O;
        try {
          return k.apply(this, arguments);
        } finally {
          v = _;
        }
      };
    });
})(bg);
Cg.exports = bg;
var ew = Cg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tw = f,
  yn = ew;
function H(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var xg = new Set(),
  La = {};
function jo(e, t) {
  Oi(e, t), Oi(e + 'Capture', t);
}
function Oi(e, t) {
  for (La[e] = t, e = 0; e < t.length; e++) xg.add(t[e]);
}
var kr = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Jc = Object.prototype.hasOwnProperty,
  nw =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  hm = {},
  gm = {};
function rw(e) {
  return Jc.call(gm, e)
    ? !0
    : Jc.call(hm, e)
      ? !1
      : nw.test(e)
        ? (gm[e] = !0)
        : ((hm[e] = !0), !1);
}
function ow(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function iw(e, t, n, r) {
  if (t === null || typeof t > 'u' || ow(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Jt(e, t, n, r, o, i, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a);
}
var Lt = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Lt[e] = new Jt(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  Lt[t] = new Jt(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Lt[e] = new Jt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  Lt[e] = new Jt(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Lt[e] = new Jt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Lt[e] = new Jt(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  Lt[e] = new Jt(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Lt[e] = new Jt(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  Lt[e] = new Jt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Qd = /[\-:]([a-z])/g;
function Yd(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Qd, Yd);
    Lt[t] = new Jt(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Qd, Yd);
    Lt[t] = new Jt(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Qd, Yd);
  Lt[t] = new Jt(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  Lt[e] = new Jt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Lt.xlinkHref = new Jt(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Lt[e] = new Jt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Zd(e, t, n, r) {
  var o = Lt.hasOwnProperty(t) ? Lt[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (iw(t, n, o, r) && (n = null),
    r || o === null
      ? rw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Mr = tw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Fl = Symbol.for('react.element'),
  si = Symbol.for('react.portal'),
  ui = Symbol.for('react.fragment'),
  Jd = Symbol.for('react.strict_mode'),
  ef = Symbol.for('react.profiler'),
  Eg = Symbol.for('react.provider'),
  kg = Symbol.for('react.context'),
  ev = Symbol.for('react.forward_ref'),
  tf = Symbol.for('react.suspense'),
  nf = Symbol.for('react.suspense_list'),
  tv = Symbol.for('react.memo'),
  Dr = Symbol.for('react.lazy'),
  Pg = Symbol.for('react.offscreen'),
  ym = Symbol.iterator;
function ta(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (ym && e[ym]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Je = Object.assign,
  sc;
function pa(e) {
  if (sc === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      sc = (t && t[1]) || '';
    }
  return (
    `
` +
    sc +
    e
  );
}
var uc = !1;
function cc(e, t) {
  if (!e || uc) return '';
  uc = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          a = o.length - 1,
          l = i.length - 1;
        1 <= a && 0 <= l && o[a] !== i[l];

      )
        l--;
      for (; 1 <= a && 0 <= l; a--, l--)
        if (o[a] !== i[l]) {
          if (a !== 1 || l !== 1)
            do
              if ((a--, l--, 0 > l || o[a] !== i[l])) {
                var s =
                  `
` + o[a].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    s.includes('<anonymous>') &&
                    (s = s.replace('<anonymous>', e.displayName)),
                  s
                );
              }
            while (1 <= a && 0 <= l);
          break;
        }
    }
  } finally {
    (uc = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? pa(e) : '';
}
function aw(e) {
  switch (e.tag) {
    case 5:
      return pa(e.type);
    case 16:
      return pa('Lazy');
    case 13:
      return pa('Suspense');
    case 19:
      return pa('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = cc(e.type, !1)), e;
    case 11:
      return (e = cc(e.type.render, !1)), e;
    case 1:
      return (e = cc(e.type, !0)), e;
    default:
      return '';
  }
}
function rf(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case ui:
      return 'Fragment';
    case si:
      return 'Portal';
    case ef:
      return 'Profiler';
    case Jd:
      return 'StrictMode';
    case tf:
      return 'Suspense';
    case nf:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case kg:
        return (e.displayName || 'Context') + '.Consumer';
      case Eg:
        return (e._context.displayName || 'Context') + '.Provider';
      case ev:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case tv:
        return (
          (t = e.displayName || null), t !== null ? t : rf(e.type) || 'Memo'
        );
      case Dr:
        (t = e._payload), (e = e._init);
        try {
          return rf(e(t));
        } catch {}
    }
  return null;
}
function lw(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return rf(t);
    case 8:
      return t === Jd ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function io(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Rg(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function sw(e) {
  var t = Rg(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (a) {
          (r = '' + a), i.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = '' + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ll(e) {
  e._valueTracker || (e._valueTracker = sw(e));
}
function Ig(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Rg(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function $s(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function of(e, t) {
  var n = t.checked;
  return Je({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Sm(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = io(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function Mg(e, t) {
  (t = t.checked), t != null && Zd(e, 'checked', t, !1);
}
function af(e, t) {
  Mg(e, t);
  var n = io(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? lf(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && lf(e, t.type, io(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function wm(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function lf(e, t, n) {
  (t !== 'number' || $s(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var ha = Array.isArray;
function xi(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + io(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function sf(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(H(91));
  return Je({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Cm(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(H(92));
      if (ha(n)) {
        if (1 < n.length) throw Error(H(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: io(n) };
}
function Og(e, t) {
  var n = io(t.value),
    r = io(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function bm(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function $g(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function uf(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? $g(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var Al,
  Tg = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        Al = Al || document.createElement('div'),
          Al.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Al.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Aa(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ca = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  uw = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Ca).forEach(function (e) {
  uw.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ca[t] = Ca[e]);
  });
});
function _g(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Ca.hasOwnProperty(e) && Ca[e])
      ? ('' + t).trim()
      : t + 'px';
}
function Ng(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = _g(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var cw = Je(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function cf(e, t) {
  if (t) {
    if (cw[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(H(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(H(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(H(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(H(62));
  }
}
function ff(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var df = null;
function nv(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var vf = null,
  Ei = null,
  ki = null;
function xm(e) {
  if ((e = Sl(e))) {
    if (typeof vf != 'function') throw Error(H(280));
    var t = e.stateNode;
    t && ((t = gu(t)), vf(e.stateNode, e.type, t));
  }
}
function Fg(e) {
  Ei ? (ki ? ki.push(e) : (ki = [e])) : (Ei = e);
}
function Lg() {
  if (Ei) {
    var e = Ei,
      t = ki;
    if (((ki = Ei = null), xm(e), t)) for (e = 0; e < t.length; e++) xm(t[e]);
  }
}
function Ag(e, t) {
  return e(t);
}
function zg() {}
var fc = !1;
function jg(e, t, n) {
  if (fc) return e(t, n);
  fc = !0;
  try {
    return Ag(e, t, n);
  } finally {
    (fc = !1), (Ei !== null || ki !== null) && (zg(), Lg());
  }
}
function za(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = gu(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(H(231, t, typeof n));
  return n;
}
var mf = !1;
if (kr)
  try {
    var na = {};
    Object.defineProperty(na, 'passive', {
      get: function () {
        mf = !0;
      },
    }),
      window.addEventListener('test', na, na),
      window.removeEventListener('test', na, na);
  } catch {
    mf = !1;
  }
function fw(e, t, n, r, o, i, a, l, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var ba = !1,
  Ts = null,
  _s = !1,
  pf = null,
  dw = {
    onError: function (e) {
      (ba = !0), (Ts = e);
    },
  };
function vw(e, t, n, r, o, i, a, l, s) {
  (ba = !1), (Ts = null), fw.apply(dw, arguments);
}
function mw(e, t, n, r, o, i, a, l, s) {
  if ((vw.apply(this, arguments), ba)) {
    if (ba) {
      var u = Ts;
      (ba = !1), (Ts = null);
    } else throw Error(H(198));
    _s || ((_s = !0), (pf = u));
  }
}
function Do(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Dg(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Em(e) {
  if (Do(e) !== e) throw Error(H(188));
}
function pw(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Do(e)), t === null)) throw Error(H(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Em(o), e;
        if (i === r) return Em(o), t;
        i = i.sibling;
      }
      throw Error(H(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var a = !1, l = o.child; l; ) {
        if (l === n) {
          (a = !0), (n = o), (r = i);
          break;
        }
        if (l === r) {
          (a = !0), (r = o), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!a) {
        for (l = i.child; l; ) {
          if (l === n) {
            (a = !0), (n = i), (r = o);
            break;
          }
          if (l === r) {
            (a = !0), (r = i), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!a) throw Error(H(189));
      }
    }
    if (n.alternate !== r) throw Error(H(190));
  }
  if (n.tag !== 3) throw Error(H(188));
  return n.stateNode.current === n ? e : t;
}
function Bg(e) {
  return (e = pw(e)), e !== null ? Vg(e) : null;
}
function Vg(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Vg(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Hg = yn.unstable_scheduleCallback,
  km = yn.unstable_cancelCallback,
  hw = yn.unstable_shouldYield,
  gw = yn.unstable_requestPaint,
  st = yn.unstable_now,
  yw = yn.unstable_getCurrentPriorityLevel,
  rv = yn.unstable_ImmediatePriority,
  Ug = yn.unstable_UserBlockingPriority,
  Ns = yn.unstable_NormalPriority,
  Sw = yn.unstable_LowPriority,
  Wg = yn.unstable_IdlePriority,
  vu = null,
  dr = null;
function ww(e) {
  if (dr && typeof dr.onCommitFiberRoot == 'function')
    try {
      dr.onCommitFiberRoot(vu, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var qn = Math.clz32 ? Math.clz32 : xw,
  Cw = Math.log,
  bw = Math.LN2;
function xw(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Cw(e) / bw) | 0)) | 0;
}
var zl = 64,
  jl = 4194304;
function ga(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Fs(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var l = a & ~o;
    l !== 0 ? (r = ga(l)) : ((i &= a), i !== 0 && (r = ga(i)));
  } else (a = n & ~o), a !== 0 ? (r = ga(a)) : i !== 0 && (r = ga(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - qn(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Ew(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function kw(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - qn(i),
      l = 1 << a,
      s = o[a];
    s === -1
      ? (!(l & n) || l & r) && (o[a] = Ew(l, t))
      : s <= t && (e.expiredLanes |= l),
      (i &= ~l);
  }
}
function hf(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Kg() {
  var e = zl;
  return (zl <<= 1), !(zl & 4194240) && (zl = 64), e;
}
function dc(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function gl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - qn(t)),
    (e[t] = n);
}
function Pw(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - qn(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function ov(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - qn(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var Ie = 0;
function Gg(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var qg,
  iv,
  Xg,
  Qg,
  Yg,
  gf = !1,
  Dl = [],
  Yr = null,
  Zr = null,
  Jr = null,
  ja = new Map(),
  Da = new Map(),
  Vr = [],
  Rw =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Pm(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Yr = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Zr = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Jr = null;
      break;
    case 'pointerover':
    case 'pointerout':
      ja.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Da.delete(t.pointerId);
  }
}
function ra(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Sl(t)), t !== null && iv(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Iw(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (Yr = ra(Yr, e, t, n, r, o)), !0;
    case 'dragenter':
      return (Zr = ra(Zr, e, t, n, r, o)), !0;
    case 'mouseover':
      return (Jr = ra(Jr, e, t, n, r, o)), !0;
    case 'pointerover':
      var i = o.pointerId;
      return ja.set(i, ra(ja.get(i) || null, e, t, n, r, o)), !0;
    case 'gotpointercapture':
      return (
        (i = o.pointerId), Da.set(i, ra(Da.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Zg(e) {
  var t = Eo(e.target);
  if (t !== null) {
    var n = Do(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Dg(n)), t !== null)) {
          (e.blockedOn = t),
            Yg(e.priority, function () {
              Xg(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function fs(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = yf(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (df = r), n.target.dispatchEvent(r), (df = null);
    } else return (t = Sl(n)), t !== null && iv(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Rm(e, t, n) {
  fs(e) && n.delete(t);
}
function Mw() {
  (gf = !1),
    Yr !== null && fs(Yr) && (Yr = null),
    Zr !== null && fs(Zr) && (Zr = null),
    Jr !== null && fs(Jr) && (Jr = null),
    ja.forEach(Rm),
    Da.forEach(Rm);
}
function oa(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    gf ||
      ((gf = !0),
      yn.unstable_scheduleCallback(yn.unstable_NormalPriority, Mw)));
}
function Ba(e) {
  function t(o) {
    return oa(o, e);
  }
  if (0 < Dl.length) {
    oa(Dl[0], e);
    for (var n = 1; n < Dl.length; n++) {
      var r = Dl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Yr !== null && oa(Yr, e),
      Zr !== null && oa(Zr, e),
      Jr !== null && oa(Jr, e),
      ja.forEach(t),
      Da.forEach(t),
      n = 0;
    n < Vr.length;
    n++
  )
    (r = Vr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Vr.length && ((n = Vr[0]), n.blockedOn === null); )
    Zg(n), n.blockedOn === null && Vr.shift();
}
var Pi = Mr.ReactCurrentBatchConfig,
  Ls = !0;
function Ow(e, t, n, r) {
  var o = Ie,
    i = Pi.transition;
  Pi.transition = null;
  try {
    (Ie = 1), av(e, t, n, r);
  } finally {
    (Ie = o), (Pi.transition = i);
  }
}
function $w(e, t, n, r) {
  var o = Ie,
    i = Pi.transition;
  Pi.transition = null;
  try {
    (Ie = 4), av(e, t, n, r);
  } finally {
    (Ie = o), (Pi.transition = i);
  }
}
function av(e, t, n, r) {
  if (Ls) {
    var o = yf(e, t, n, r);
    if (o === null) bc(e, t, r, As, n), Pm(e, r);
    else if (Iw(o, e, t, n, r)) r.stopPropagation();
    else if ((Pm(e, r), t & 4 && -1 < Rw.indexOf(e))) {
      for (; o !== null; ) {
        var i = Sl(o);
        if (
          (i !== null && qg(i),
          (i = yf(e, t, n, r)),
          i === null && bc(e, t, r, As, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else bc(e, t, r, null, n);
  }
}
var As = null;
function yf(e, t, n, r) {
  if (((As = null), (e = nv(r)), (e = Eo(e)), e !== null))
    if (((t = Do(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Dg(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (As = e), null;
}
function Jg(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (yw()) {
        case rv:
          return 1;
        case Ug:
          return 4;
        case Ns:
        case Sw:
          return 16;
        case Wg:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ur = null,
  lv = null,
  ds = null;
function e0() {
  if (ds) return ds;
  var e,
    t = lv,
    n = t.length,
    r,
    o = 'value' in Ur ? Ur.value : Ur.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++);
  return (ds = o.slice(e, 1 < r ? 1 - r : void 0));
}
function vs(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Bl() {
  return !0;
}
function Im() {
  return !1;
}
function bn(e) {
  function t(n, r, o, i, a) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Bl
        : Im),
      (this.isPropagationStopped = Im),
      this
    );
  }
  return (
    Je(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Bl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Bl));
      },
      persist: function () {},
      isPersistent: Bl,
    }),
    t
  );
}
var Ui = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  sv = bn(Ui),
  yl = Je({}, Ui, { view: 0, detail: 0 }),
  Tw = bn(yl),
  vc,
  mc,
  ia,
  mu = Je({}, yl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: uv,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== ia &&
            (ia && e.type === 'mousemove'
              ? ((vc = e.screenX - ia.screenX), (mc = e.screenY - ia.screenY))
              : (mc = vc = 0),
            (ia = e)),
          vc);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : mc;
    },
  }),
  Mm = bn(mu),
  _w = Je({}, mu, { dataTransfer: 0 }),
  Nw = bn(_w),
  Fw = Je({}, yl, { relatedTarget: 0 }),
  pc = bn(Fw),
  Lw = Je({}, Ui, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Aw = bn(Lw),
  zw = Je({}, Ui, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  jw = bn(zw),
  Dw = Je({}, Ui, { data: 0 }),
  Om = bn(Dw),
  Bw = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Vw = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Hw = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function Uw(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Hw[e]) ? !!t[e] : !1;
}
function uv() {
  return Uw;
}
var Ww = Je({}, yl, {
    key: function (e) {
      if (e.key) {
        var t = Bw[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = vs(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? Vw[e.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: uv,
    charCode: function (e) {
      return e.type === 'keypress' ? vs(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? vs(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
    },
  }),
  Kw = bn(Ww),
  Gw = Je({}, mu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  $m = bn(Gw),
  qw = Je({}, yl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: uv,
  }),
  Xw = bn(qw),
  Qw = Je({}, Ui, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Yw = bn(Qw),
  Zw = Je({}, mu, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Jw = bn(Zw),
  eC = [9, 13, 27, 32],
  cv = kr && 'CompositionEvent' in window,
  xa = null;
kr && 'documentMode' in document && (xa = document.documentMode);
var tC = kr && 'TextEvent' in window && !xa,
  t0 = kr && (!cv || (xa && 8 < xa && 11 >= xa)),
  Tm = ' ',
  _m = !1;
function n0(e, t) {
  switch (e) {
    case 'keyup':
      return eC.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function r0(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var ci = !1;
function nC(e, t) {
  switch (e) {
    case 'compositionend':
      return r0(t);
    case 'keypress':
      return t.which !== 32 ? null : ((_m = !0), Tm);
    case 'textInput':
      return (e = t.data), e === Tm && _m ? null : e;
    default:
      return null;
  }
}
function rC(e, t) {
  if (ci)
    return e === 'compositionend' || (!cv && n0(e, t))
      ? ((e = e0()), (ds = lv = Ur = null), (ci = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return t0 && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var oC = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Nm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!oC[e.type] : t === 'textarea';
}
function o0(e, t, n, r) {
  Fg(r),
    (t = zs(t, 'onChange')),
    0 < t.length &&
      ((n = new sv('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ea = null,
  Va = null;
function iC(e) {
  p0(e, 0);
}
function pu(e) {
  var t = vi(e);
  if (Ig(t)) return e;
}
function aC(e, t) {
  if (e === 'change') return t;
}
var i0 = !1;
if (kr) {
  var hc;
  if (kr) {
    var gc = 'oninput' in document;
    if (!gc) {
      var Fm = document.createElement('div');
      Fm.setAttribute('oninput', 'return;'),
        (gc = typeof Fm.oninput == 'function');
    }
    hc = gc;
  } else hc = !1;
  i0 = hc && (!document.documentMode || 9 < document.documentMode);
}
function Lm() {
  Ea && (Ea.detachEvent('onpropertychange', a0), (Va = Ea = null));
}
function a0(e) {
  if (e.propertyName === 'value' && pu(Va)) {
    var t = [];
    o0(t, Va, e, nv(e)), jg(iC, t);
  }
}
function lC(e, t, n) {
  e === 'focusin'
    ? (Lm(), (Ea = t), (Va = n), Ea.attachEvent('onpropertychange', a0))
    : e === 'focusout' && Lm();
}
function sC(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return pu(Va);
}
function uC(e, t) {
  if (e === 'click') return pu(t);
}
function cC(e, t) {
  if (e === 'input' || e === 'change') return pu(t);
}
function fC(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Zn = typeof Object.is == 'function' ? Object.is : fC;
function Ha(e, t) {
  if (Zn(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Jc.call(t, o) || !Zn(e[o], t[o])) return !1;
  }
  return !0;
}
function Am(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function zm(e, t) {
  var n = Am(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Am(n);
  }
}
function l0(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? l0(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function s0() {
  for (var e = window, t = $s(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = $s(e.document);
  }
  return t;
}
function fv(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function dC(e) {
  var t = s0(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    l0(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && fv(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = zm(n, i));
        var a = zm(n, r);
        o &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var vC = kr && 'documentMode' in document && 11 >= document.documentMode,
  fi = null,
  Sf = null,
  ka = null,
  wf = !1;
function jm(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  wf ||
    fi == null ||
    fi !== $s(r) ||
    ((r = fi),
    'selectionStart' in r && fv(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ka && Ha(ka, r)) ||
      ((ka = r),
      (r = zs(Sf, 'onSelect')),
      0 < r.length &&
        ((t = new sv('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = fi))));
}
function Vl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var di = {
    animationend: Vl('Animation', 'AnimationEnd'),
    animationiteration: Vl('Animation', 'AnimationIteration'),
    animationstart: Vl('Animation', 'AnimationStart'),
    transitionend: Vl('Transition', 'TransitionEnd'),
  },
  yc = {},
  u0 = {};
kr &&
  ((u0 = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete di.animationend.animation,
    delete di.animationiteration.animation,
    delete di.animationstart.animation),
  'TransitionEvent' in window || delete di.transitionend.transition);
function hu(e) {
  if (yc[e]) return yc[e];
  if (!di[e]) return e;
  var t = di[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in u0) return (yc[e] = t[n]);
  return e;
}
var c0 = hu('animationend'),
  f0 = hu('animationiteration'),
  d0 = hu('animationstart'),
  v0 = hu('transitionend'),
  m0 = new Map(),
  Dm =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function lo(e, t) {
  m0.set(e, t), jo(t, [e]);
}
for (var Sc = 0; Sc < Dm.length; Sc++) {
  var wc = Dm[Sc],
    mC = wc.toLowerCase(),
    pC = wc[0].toUpperCase() + wc.slice(1);
  lo(mC, 'on' + pC);
}
lo(c0, 'onAnimationEnd');
lo(f0, 'onAnimationIteration');
lo(d0, 'onAnimationStart');
lo('dblclick', 'onDoubleClick');
lo('focusin', 'onFocus');
lo('focusout', 'onBlur');
lo(v0, 'onTransitionEnd');
Oi('onMouseEnter', ['mouseout', 'mouseover']);
Oi('onMouseLeave', ['mouseout', 'mouseover']);
Oi('onPointerEnter', ['pointerout', 'pointerover']);
Oi('onPointerLeave', ['pointerout', 'pointerover']);
jo(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
jo(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
jo('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
jo(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
jo(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
jo(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var ya =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  hC = new Set('cancel close invalid load scroll toggle'.split(' ').concat(ya));
function Bm(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), mw(r, t, void 0, e), (e.currentTarget = null);
}
function p0(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var l = r[a],
            s = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), s !== i && o.isPropagationStopped())) break e;
          Bm(o, l, u), (i = s);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((l = r[a]),
            (s = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            s !== i && o.isPropagationStopped())
          )
            break e;
          Bm(o, l, u), (i = s);
        }
    }
  }
  if (_s) throw ((e = pf), (_s = !1), (pf = null), e);
}
function Ue(e, t) {
  var n = t[kf];
  n === void 0 && (n = t[kf] = new Set());
  var r = e + '__bubble';
  n.has(r) || (h0(t, e, 2, !1), n.add(r));
}
function Cc(e, t, n) {
  var r = 0;
  t && (r |= 4), h0(n, e, r, t);
}
var Hl = '_reactListening' + Math.random().toString(36).slice(2);
function Ua(e) {
  if (!e[Hl]) {
    (e[Hl] = !0),
      xg.forEach(function (n) {
        n !== 'selectionchange' && (hC.has(n) || Cc(n, !1, e), Cc(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Hl] || ((t[Hl] = !0), Cc('selectionchange', !1, t));
  }
}
function h0(e, t, n, r) {
  switch (Jg(t)) {
    case 1:
      var o = Ow;
      break;
    case 4:
      o = $w;
      break;
    default:
      o = av;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !mf ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1);
}
function bc(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var s = a.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = a.stateNode.containerInfo),
              s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return;
            a = a.return;
          }
        for (; l !== null; ) {
          if (((a = Eo(l)), a === null)) return;
          if (((s = a.tag), s === 5 || s === 6)) {
            r = i = a;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  jg(function () {
    var u = i,
      c = nv(n),
      d = [];
    e: {
      var v = m0.get(e);
      if (v !== void 0) {
        var w = sv,
          g = e;
        switch (e) {
          case 'keypress':
            if (vs(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            w = Kw;
            break;
          case 'focusin':
            (g = 'focus'), (w = pc);
            break;
          case 'focusout':
            (g = 'blur'), (w = pc);
            break;
          case 'beforeblur':
          case 'afterblur':
            w = pc;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            w = Mm;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            w = Nw;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            w = Xw;
            break;
          case c0:
          case f0:
          case d0:
            w = Aw;
            break;
          case v0:
            w = Yw;
            break;
          case 'scroll':
            w = Tw;
            break;
          case 'wheel':
            w = Jw;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            w = jw;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            w = $m;
        }
        var S = (t & 4) !== 0,
          y = !S && e === 'scroll',
          p = S ? (v !== null ? v + 'Capture' : null) : v;
        S = [];
        for (var m = u, h; m !== null; ) {
          h = m;
          var C = h.stateNode;
          if (
            (h.tag === 5 &&
              C !== null &&
              ((h = C),
              p !== null && ((C = za(m, p)), C != null && S.push(Wa(m, C, h)))),
            y)
          )
            break;
          m = m.return;
        }
        0 < S.length &&
          ((v = new w(v, g, null, n, c)), d.push({ event: v, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((v = e === 'mouseover' || e === 'pointerover'),
          (w = e === 'mouseout' || e === 'pointerout'),
          v &&
            n !== df &&
            (g = n.relatedTarget || n.fromElement) &&
            (Eo(g) || g[Pr]))
        )
          break e;
        if (
          (w || v) &&
          ((v =
            c.window === c
              ? c
              : (v = c.ownerDocument)
                ? v.defaultView || v.parentWindow
                : window),
          w
            ? ((g = n.relatedTarget || n.toElement),
              (w = u),
              (g = g ? Eo(g) : null),
              g !== null &&
                ((y = Do(g)), g !== y || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((w = null), (g = u)),
          w !== g)
        ) {
          if (
            ((S = Mm),
            (C = 'onMouseLeave'),
            (p = 'onMouseEnter'),
            (m = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((S = $m),
              (C = 'onPointerLeave'),
              (p = 'onPointerEnter'),
              (m = 'pointer')),
            (y = w == null ? v : vi(w)),
            (h = g == null ? v : vi(g)),
            (v = new S(C, m + 'leave', w, n, c)),
            (v.target = y),
            (v.relatedTarget = h),
            (C = null),
            Eo(c) === u &&
              ((S = new S(p, m + 'enter', g, n, c)),
              (S.target = h),
              (S.relatedTarget = y),
              (C = S)),
            (y = C),
            w && g)
          )
            t: {
              for (S = w, p = g, m = 0, h = S; h; h = Jo(h)) m++;
              for (h = 0, C = p; C; C = Jo(C)) h++;
              for (; 0 < m - h; ) (S = Jo(S)), m--;
              for (; 0 < h - m; ) (p = Jo(p)), h--;
              for (; m--; ) {
                if (S === p || (p !== null && S === p.alternate)) break t;
                (S = Jo(S)), (p = Jo(p));
              }
              S = null;
            }
          else S = null;
          w !== null && Vm(d, v, w, S, !1),
            g !== null && y !== null && Vm(d, y, g, S, !0);
        }
      }
      e: {
        if (
          ((v = u ? vi(u) : window),
          (w = v.nodeName && v.nodeName.toLowerCase()),
          w === 'select' || (w === 'input' && v.type === 'file'))
        )
          var b = aC;
        else if (Nm(v))
          if (i0) b = cC;
          else {
            b = sC;
            var x = lC;
          }
        else
          (w = v.nodeName) &&
            w.toLowerCase() === 'input' &&
            (v.type === 'checkbox' || v.type === 'radio') &&
            (b = uC);
        if (b && (b = b(e, u))) {
          o0(d, b, n, c);
          break e;
        }
        x && x(e, v, u),
          e === 'focusout' &&
            (x = v._wrapperState) &&
            x.controlled &&
            v.type === 'number' &&
            lf(v, 'number', v.value);
      }
      switch (((x = u ? vi(u) : window), e)) {
        case 'focusin':
          (Nm(x) || x.contentEditable === 'true') &&
            ((fi = x), (Sf = u), (ka = null));
          break;
        case 'focusout':
          ka = Sf = fi = null;
          break;
        case 'mousedown':
          wf = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (wf = !1), jm(d, n, c);
          break;
        case 'selectionchange':
          if (vC) break;
        case 'keydown':
        case 'keyup':
          jm(d, n, c);
      }
      var E;
      if (cv)
        e: {
          switch (e) {
            case 'compositionstart':
              var P = 'onCompositionStart';
              break e;
            case 'compositionend':
              P = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              P = 'onCompositionUpdate';
              break e;
          }
          P = void 0;
        }
      else
        ci
          ? n0(e, n) && (P = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (P = 'onCompositionStart');
      P &&
        (t0 &&
          n.locale !== 'ko' &&
          (ci || P !== 'onCompositionStart'
            ? P === 'onCompositionEnd' && ci && (E = e0())
            : ((Ur = c),
              (lv = 'value' in Ur ? Ur.value : Ur.textContent),
              (ci = !0))),
        (x = zs(u, P)),
        0 < x.length &&
          ((P = new Om(P, e, null, n, c)),
          d.push({ event: P, listeners: x }),
          E ? (P.data = E) : ((E = r0(n)), E !== null && (P.data = E)))),
        (E = tC ? nC(e, n) : rC(e, n)) &&
          ((u = zs(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new Om('onBeforeInput', 'beforeinput', null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = E)));
    }
    p0(d, t);
  });
}
function Wa(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function zs(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = za(e, n)),
      i != null && r.unshift(Wa(e, i, o)),
      (i = za(e, t)),
      i != null && r.push(Wa(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Jo(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Vm(e, t, n, r, o) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var l = n,
      s = l.alternate,
      u = l.stateNode;
    if (s !== null && s === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((s = za(n, i)), s != null && a.unshift(Wa(n, s, l)))
        : o || ((s = za(n, i)), s != null && a.push(Wa(n, s, l)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var gC = /\r\n?/g,
  yC = /\u0000|\uFFFD/g;
function Hm(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      gC,
      `
`
    )
    .replace(yC, '');
}
function Ul(e, t, n) {
  if (((t = Hm(t)), Hm(e) !== t && n)) throw Error(H(425));
}
function js() {}
var Cf = null,
  bf = null;
function xf(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ef = typeof setTimeout == 'function' ? setTimeout : void 0,
  SC = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Um = typeof Promise == 'function' ? Promise : void 0,
  wC =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Um < 'u'
        ? function (e) {
            return Um.resolve(null).then(e).catch(CC);
          }
        : Ef;
function CC(e) {
  setTimeout(function () {
    throw e;
  });
}
function xc(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), Ba(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = o;
  } while (n);
  Ba(t);
}
function eo(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function Wm(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Wi = Math.random().toString(36).slice(2),
  cr = '__reactFiber$' + Wi,
  Ka = '__reactProps$' + Wi,
  Pr = '__reactContainer$' + Wi,
  kf = '__reactEvents$' + Wi,
  bC = '__reactListeners$' + Wi,
  xC = '__reactHandles$' + Wi;
function Eo(e) {
  var t = e[cr];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Pr] || n[cr])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Wm(e); e !== null; ) {
          if ((n = e[cr])) return n;
          e = Wm(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Sl(e) {
  return (
    (e = e[cr] || e[Pr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function vi(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(H(33));
}
function gu(e) {
  return e[Ka] || null;
}
var Pf = [],
  mi = -1;
function so(e) {
  return { current: e };
}
function We(e) {
  0 > mi || ((e.current = Pf[mi]), (Pf[mi] = null), mi--);
}
function ze(e, t) {
  mi++, (Pf[mi] = e.current), (e.current = t);
}
var ao = {},
  Kt = so(ao),
  rn = so(!1),
  _o = ao;
function $i(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ao;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function on(e) {
  return (e = e.childContextTypes), e != null;
}
function Ds() {
  We(rn), We(Kt);
}
function Km(e, t, n) {
  if (Kt.current !== ao) throw Error(H(168));
  ze(Kt, t), ze(rn, n);
}
function g0(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(H(108, lw(e) || 'Unknown', o));
  return Je({}, n, r);
}
function Bs(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ao),
    (_o = Kt.current),
    ze(Kt, e),
    ze(rn, rn.current),
    !0
  );
}
function Gm(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(H(169));
  n
    ? ((e = g0(e, t, _o)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      We(rn),
      We(Kt),
      ze(Kt, e))
    : We(rn),
    ze(rn, n);
}
var yr = null,
  yu = !1,
  Ec = !1;
function y0(e) {
  yr === null ? (yr = [e]) : yr.push(e);
}
function EC(e) {
  (yu = !0), y0(e);
}
function uo() {
  if (!Ec && yr !== null) {
    Ec = !0;
    var e = 0,
      t = Ie;
    try {
      var n = yr;
      for (Ie = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (yr = null), (yu = !1);
    } catch (o) {
      throw (yr !== null && (yr = yr.slice(e + 1)), Hg(rv, uo), o);
    } finally {
      (Ie = t), (Ec = !1);
    }
  }
  return null;
}
var pi = [],
  hi = 0,
  Vs = null,
  Hs = 0,
  In = [],
  Mn = 0,
  No = null,
  Sr = 1,
  wr = '';
function Co(e, t) {
  (pi[hi++] = Hs), (pi[hi++] = Vs), (Vs = e), (Hs = t);
}
function S0(e, t, n) {
  (In[Mn++] = Sr), (In[Mn++] = wr), (In[Mn++] = No), (No = e);
  var r = Sr;
  e = wr;
  var o = 32 - qn(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - qn(t) + o;
  if (30 < i) {
    var a = o - (o % 5);
    (i = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (o -= a),
      (Sr = (1 << (32 - qn(t) + o)) | (n << o) | r),
      (wr = i + e);
  } else (Sr = (1 << i) | (n << o) | r), (wr = e);
}
function dv(e) {
  e.return !== null && (Co(e, 1), S0(e, 1, 0));
}
function vv(e) {
  for (; e === Vs; )
    (Vs = pi[--hi]), (pi[hi] = null), (Hs = pi[--hi]), (pi[hi] = null);
  for (; e === No; )
    (No = In[--Mn]),
      (In[Mn] = null),
      (wr = In[--Mn]),
      (In[Mn] = null),
      (Sr = In[--Mn]),
      (In[Mn] = null);
}
var gn = null,
  pn = null,
  Xe = !1,
  Gn = null;
function w0(e, t) {
  var n = On(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function qm(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (gn = e), (pn = eo(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (gn = e), (pn = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = No !== null ? { id: Sr, overflow: wr } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = On(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (gn = e),
            (pn = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Rf(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function If(e) {
  if (Xe) {
    var t = pn;
    if (t) {
      var n = t;
      if (!qm(e, t)) {
        if (Rf(e)) throw Error(H(418));
        t = eo(n.nextSibling);
        var r = gn;
        t && qm(e, t)
          ? w0(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Xe = !1), (gn = e));
      }
    } else {
      if (Rf(e)) throw Error(H(418));
      (e.flags = (e.flags & -4097) | 2), (Xe = !1), (gn = e);
    }
  }
}
function Xm(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  gn = e;
}
function Wl(e) {
  if (e !== gn) return !1;
  if (!Xe) return Xm(e), (Xe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !xf(e.type, e.memoizedProps))),
    t && (t = pn))
  ) {
    if (Rf(e)) throw (C0(), Error(H(418)));
    for (; t; ) w0(e, t), (t = eo(t.nextSibling));
  }
  if ((Xm(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(H(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              pn = eo(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      pn = null;
    }
  } else pn = gn ? eo(e.stateNode.nextSibling) : null;
  return !0;
}
function C0() {
  for (var e = pn; e; ) e = eo(e.nextSibling);
}
function Ti() {
  (pn = gn = null), (Xe = !1);
}
function mv(e) {
  Gn === null ? (Gn = [e]) : Gn.push(e);
}
var kC = Mr.ReactCurrentBatchConfig;
function aa(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(H(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(H(147, e));
      var o = r,
        i = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var l = o.refs;
            a === null ? delete l[i] : (l[i] = a);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(H(284));
    if (!n._owner) throw Error(H(290, e));
  }
  return e;
}
function Kl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      H(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function Qm(e) {
  var t = e._init;
  return t(e._payload);
}
function b0(e) {
  function t(p, m) {
    if (e) {
      var h = p.deletions;
      h === null ? ((p.deletions = [m]), (p.flags |= 16)) : h.push(m);
    }
  }
  function n(p, m) {
    if (!e) return null;
    for (; m !== null; ) t(p, m), (m = m.sibling);
    return null;
  }
  function r(p, m) {
    for (p = new Map(); m !== null; )
      m.key !== null ? p.set(m.key, m) : p.set(m.index, m), (m = m.sibling);
    return p;
  }
  function o(p, m) {
    return (p = oo(p, m)), (p.index = 0), (p.sibling = null), p;
  }
  function i(p, m, h) {
    return (
      (p.index = h),
      e
        ? ((h = p.alternate),
          h !== null
            ? ((h = h.index), h < m ? ((p.flags |= 2), m) : h)
            : ((p.flags |= 2), m))
        : ((p.flags |= 1048576), m)
    );
  }
  function a(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function l(p, m, h, C) {
    return m === null || m.tag !== 6
      ? ((m = $c(h, p.mode, C)), (m.return = p), m)
      : ((m = o(m, h)), (m.return = p), m);
  }
  function s(p, m, h, C) {
    var b = h.type;
    return b === ui
      ? c(p, m, h.props.children, C, h.key)
      : m !== null &&
          (m.elementType === b ||
            (typeof b == 'object' &&
              b !== null &&
              b.$$typeof === Dr &&
              Qm(b) === m.type))
        ? ((C = o(m, h.props)), (C.ref = aa(p, m, h)), (C.return = p), C)
        : ((C = ws(h.type, h.key, h.props, null, p.mode, C)),
          (C.ref = aa(p, m, h)),
          (C.return = p),
          C);
  }
  function u(p, m, h, C) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== h.containerInfo ||
      m.stateNode.implementation !== h.implementation
      ? ((m = Tc(h, p.mode, C)), (m.return = p), m)
      : ((m = o(m, h.children || [])), (m.return = p), m);
  }
  function c(p, m, h, C, b) {
    return m === null || m.tag !== 7
      ? ((m = Oo(h, p.mode, C, b)), (m.return = p), m)
      : ((m = o(m, h)), (m.return = p), m);
  }
  function d(p, m, h) {
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return (m = $c('' + m, p.mode, h)), (m.return = p), m;
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case Fl:
          return (
            (h = ws(m.type, m.key, m.props, null, p.mode, h)),
            (h.ref = aa(p, null, m)),
            (h.return = p),
            h
          );
        case si:
          return (m = Tc(m, p.mode, h)), (m.return = p), m;
        case Dr:
          var C = m._init;
          return d(p, C(m._payload), h);
      }
      if (ha(m) || ta(m))
        return (m = Oo(m, p.mode, h, null)), (m.return = p), m;
      Kl(p, m);
    }
    return null;
  }
  function v(p, m, h, C) {
    var b = m !== null ? m.key : null;
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return b !== null ? null : l(p, m, '' + h, C);
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case Fl:
          return h.key === b ? s(p, m, h, C) : null;
        case si:
          return h.key === b ? u(p, m, h, C) : null;
        case Dr:
          return (b = h._init), v(p, m, b(h._payload), C);
      }
      if (ha(h) || ta(h)) return b !== null ? null : c(p, m, h, C, null);
      Kl(p, h);
    }
    return null;
  }
  function w(p, m, h, C, b) {
    if ((typeof C == 'string' && C !== '') || typeof C == 'number')
      return (p = p.get(h) || null), l(m, p, '' + C, b);
    if (typeof C == 'object' && C !== null) {
      switch (C.$$typeof) {
        case Fl:
          return (p = p.get(C.key === null ? h : C.key) || null), s(m, p, C, b);
        case si:
          return (p = p.get(C.key === null ? h : C.key) || null), u(m, p, C, b);
        case Dr:
          var x = C._init;
          return w(p, m, h, x(C._payload), b);
      }
      if (ha(C) || ta(C)) return (p = p.get(h) || null), c(m, p, C, b, null);
      Kl(m, C);
    }
    return null;
  }
  function g(p, m, h, C) {
    for (
      var b = null, x = null, E = m, P = (m = 0), I = null;
      E !== null && P < h.length;
      P++
    ) {
      E.index > P ? ((I = E), (E = null)) : (I = E.sibling);
      var M = v(p, E, h[P], C);
      if (M === null) {
        E === null && (E = I);
        break;
      }
      e && E && M.alternate === null && t(p, E),
        (m = i(M, m, P)),
        x === null ? (b = M) : (x.sibling = M),
        (x = M),
        (E = I);
    }
    if (P === h.length) return n(p, E), Xe && Co(p, P), b;
    if (E === null) {
      for (; P < h.length; P++)
        (E = d(p, h[P], C)),
          E !== null &&
            ((m = i(E, m, P)), x === null ? (b = E) : (x.sibling = E), (x = E));
      return Xe && Co(p, P), b;
    }
    for (E = r(p, E); P < h.length; P++)
      (I = w(E, p, P, h[P], C)),
        I !== null &&
          (e && I.alternate !== null && E.delete(I.key === null ? P : I.key),
          (m = i(I, m, P)),
          x === null ? (b = I) : (x.sibling = I),
          (x = I));
    return (
      e &&
        E.forEach(function (A) {
          return t(p, A);
        }),
      Xe && Co(p, P),
      b
    );
  }
  function S(p, m, h, C) {
    var b = ta(h);
    if (typeof b != 'function') throw Error(H(150));
    if (((h = b.call(h)), h == null)) throw Error(H(151));
    for (
      var x = (b = null), E = m, P = (m = 0), I = null, M = h.next();
      E !== null && !M.done;
      P++, M = h.next()
    ) {
      E.index > P ? ((I = E), (E = null)) : (I = E.sibling);
      var A = v(p, E, M.value, C);
      if (A === null) {
        E === null && (E = I);
        break;
      }
      e && E && A.alternate === null && t(p, E),
        (m = i(A, m, P)),
        x === null ? (b = A) : (x.sibling = A),
        (x = A),
        (E = I);
    }
    if (M.done) return n(p, E), Xe && Co(p, P), b;
    if (E === null) {
      for (; !M.done; P++, M = h.next())
        (M = d(p, M.value, C)),
          M !== null &&
            ((m = i(M, m, P)), x === null ? (b = M) : (x.sibling = M), (x = M));
      return Xe && Co(p, P), b;
    }
    for (E = r(p, E); !M.done; P++, M = h.next())
      (M = w(E, p, P, M.value, C)),
        M !== null &&
          (e && M.alternate !== null && E.delete(M.key === null ? P : M.key),
          (m = i(M, m, P)),
          x === null ? (b = M) : (x.sibling = M),
          (x = M));
    return (
      e &&
        E.forEach(function (j) {
          return t(p, j);
        }),
      Xe && Co(p, P),
      b
    );
  }
  function y(p, m, h, C) {
    if (
      (typeof h == 'object' &&
        h !== null &&
        h.type === ui &&
        h.key === null &&
        (h = h.props.children),
      typeof h == 'object' && h !== null)
    ) {
      switch (h.$$typeof) {
        case Fl:
          e: {
            for (var b = h.key, x = m; x !== null; ) {
              if (x.key === b) {
                if (((b = h.type), b === ui)) {
                  if (x.tag === 7) {
                    n(p, x.sibling),
                      (m = o(x, h.props.children)),
                      (m.return = p),
                      (p = m);
                    break e;
                  }
                } else if (
                  x.elementType === b ||
                  (typeof b == 'object' &&
                    b !== null &&
                    b.$$typeof === Dr &&
                    Qm(b) === x.type)
                ) {
                  n(p, x.sibling),
                    (m = o(x, h.props)),
                    (m.ref = aa(p, x, h)),
                    (m.return = p),
                    (p = m);
                  break e;
                }
                n(p, x);
                break;
              } else t(p, x);
              x = x.sibling;
            }
            h.type === ui
              ? ((m = Oo(h.props.children, p.mode, C, h.key)),
                (m.return = p),
                (p = m))
              : ((C = ws(h.type, h.key, h.props, null, p.mode, C)),
                (C.ref = aa(p, m, h)),
                (C.return = p),
                (p = C));
          }
          return a(p);
        case si:
          e: {
            for (x = h.key; m !== null; ) {
              if (m.key === x)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === h.containerInfo &&
                  m.stateNode.implementation === h.implementation
                ) {
                  n(p, m.sibling),
                    (m = o(m, h.children || [])),
                    (m.return = p),
                    (p = m);
                  break e;
                } else {
                  n(p, m);
                  break;
                }
              else t(p, m);
              m = m.sibling;
            }
            (m = Tc(h, p.mode, C)), (m.return = p), (p = m);
          }
          return a(p);
        case Dr:
          return (x = h._init), y(p, m, x(h._payload), C);
      }
      if (ha(h)) return g(p, m, h, C);
      if (ta(h)) return S(p, m, h, C);
      Kl(p, h);
    }
    return (typeof h == 'string' && h !== '') || typeof h == 'number'
      ? ((h = '' + h),
        m !== null && m.tag === 6
          ? (n(p, m.sibling), (m = o(m, h)), (m.return = p), (p = m))
          : (n(p, m), (m = $c(h, p.mode, C)), (m.return = p), (p = m)),
        a(p))
      : n(p, m);
  }
  return y;
}
var _i = b0(!0),
  x0 = b0(!1),
  Us = so(null),
  Ws = null,
  gi = null,
  pv = null;
function hv() {
  pv = gi = Ws = null;
}
function gv(e) {
  var t = Us.current;
  We(Us), (e._currentValue = t);
}
function Mf(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Ri(e, t) {
  (Ws = e),
    (pv = gi = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (nn = !0), (e.firstContext = null));
}
function Tn(e) {
  var t = e._currentValue;
  if (pv !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), gi === null)) {
      if (Ws === null) throw Error(H(308));
      (gi = e), (Ws.dependencies = { lanes: 0, firstContext: e });
    } else gi = gi.next = e;
  return t;
}
var ko = null;
function yv(e) {
  ko === null ? (ko = [e]) : ko.push(e);
}
function E0(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), yv(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Rr(e, r)
  );
}
function Rr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Br = !1;
function Sv(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function k0(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Cr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function to(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Se & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Rr(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), yv(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Rr(e, n)
  );
}
function ms(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ov(e, n);
  }
}
function Ym(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = a) : (i = i.next = a), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ks(e, t, n, r) {
  var o = e.updateQueue;
  Br = !1;
  var i = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var s = l,
      u = s.next;
    (s.next = null), a === null ? (i = u) : (a.next = u), (a = s);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== a &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var d = o.baseState;
    (a = 0), (c = u = s = null), (l = i);
    do {
      var v = l.lane,
        w = l.eventTime;
      if ((r & v) === v) {
        c !== null &&
          (c = c.next =
            {
              eventTime: w,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var g = e,
            S = l;
          switch (((v = t), (w = n), S.tag)) {
            case 1:
              if (((g = S.payload), typeof g == 'function')) {
                d = g.call(w, d, v);
                break e;
              }
              d = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = S.payload),
                (v = typeof g == 'function' ? g.call(w, d, v) : g),
                v == null)
              )
                break e;
              d = Je({}, d, v);
              break e;
            case 2:
              Br = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (v = o.effects),
          v === null ? (o.effects = [l]) : v.push(l));
      } else
        (w = {
          eventTime: w,
          lane: v,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = w), (s = d)) : (c = c.next = w),
          (a |= v);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (v = l),
          (l = v.next),
          (v.next = null),
          (o.lastBaseUpdate = v),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (s = d),
      (o.baseState = s),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Lo |= a), (e.lanes = a), (e.memoizedState = d);
  }
}
function Zm(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function'))
          throw Error(H(191, o));
        o.call(r);
      }
    }
}
var wl = {},
  vr = so(wl),
  Ga = so(wl),
  qa = so(wl);
function Po(e) {
  if (e === wl) throw Error(H(174));
  return e;
}
function wv(e, t) {
  switch ((ze(qa, t), ze(Ga, e), ze(vr, wl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : uf(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = uf(t, e));
  }
  We(vr), ze(vr, t);
}
function Ni() {
  We(vr), We(Ga), We(qa);
}
function P0(e) {
  Po(qa.current);
  var t = Po(vr.current),
    n = uf(t, e.type);
  t !== n && (ze(Ga, e), ze(vr, n));
}
function Cv(e) {
  Ga.current === e && (We(vr), We(Ga));
}
var Ye = so(0);
function Gs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var kc = [];
function bv() {
  for (var e = 0; e < kc.length; e++)
    kc[e]._workInProgressVersionPrimary = null;
  kc.length = 0;
}
var ps = Mr.ReactCurrentDispatcher,
  Pc = Mr.ReactCurrentBatchConfig,
  Fo = 0,
  Ze = null,
  mt = null,
  Ct = null,
  qs = !1,
  Pa = !1,
  Xa = 0,
  PC = 0;
function Bt() {
  throw Error(H(321));
}
function xv(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Zn(e[n], t[n])) return !1;
  return !0;
}
function Ev(e, t, n, r, o, i) {
  if (
    ((Fo = i),
    (Ze = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ps.current = e === null || e.memoizedState === null ? OC : $C),
    (e = n(r, o)),
    Pa)
  ) {
    i = 0;
    do {
      if (((Pa = !1), (Xa = 0), 25 <= i)) throw Error(H(301));
      (i += 1),
        (Ct = mt = null),
        (t.updateQueue = null),
        (ps.current = TC),
        (e = n(r, o));
    } while (Pa);
  }
  if (
    ((ps.current = Xs),
    (t = mt !== null && mt.next !== null),
    (Fo = 0),
    (Ct = mt = Ze = null),
    (qs = !1),
    t)
  )
    throw Error(H(300));
  return e;
}
function kv() {
  var e = Xa !== 0;
  return (Xa = 0), e;
}
function sr() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ct === null ? (Ze.memoizedState = Ct = e) : (Ct = Ct.next = e), Ct;
}
function _n() {
  if (mt === null) {
    var e = Ze.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = mt.next;
  var t = Ct === null ? Ze.memoizedState : Ct.next;
  if (t !== null) (Ct = t), (mt = e);
  else {
    if (e === null) throw Error(H(310));
    (mt = e),
      (e = {
        memoizedState: mt.memoizedState,
        baseState: mt.baseState,
        baseQueue: mt.baseQueue,
        queue: mt.queue,
        next: null,
      }),
      Ct === null ? (Ze.memoizedState = Ct = e) : (Ct = Ct.next = e);
  }
  return Ct;
}
function Qa(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Rc(e) {
  var t = _n(),
    n = t.queue;
  if (n === null) throw Error(H(311));
  n.lastRenderedReducer = e;
  var r = mt,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      (o.next = i.next), (i.next = a);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var l = (a = null),
      s = null,
      u = i;
    do {
      var c = u.lane;
      if ((Fo & c) === c)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((l = s = d), (a = r)) : (s = s.next = d),
          (Ze.lanes |= c),
          (Lo |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    s === null ? (a = r) : (s.next = l),
      Zn(r, t.memoizedState) || (nn = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (Ze.lanes |= i), (Lo |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ic(e) {
  var t = _n(),
    n = t.queue;
  if (n === null) throw Error(H(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (i = e(i, a.action)), (a = a.next);
    while (a !== o);
    Zn(i, t.memoizedState) || (nn = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function R0() {}
function I0(e, t) {
  var n = Ze,
    r = _n(),
    o = t(),
    i = !Zn(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (nn = !0)),
    (r = r.queue),
    Pv($0.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Ct !== null && Ct.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ya(9, O0.bind(null, n, r, o, t), void 0, null),
      bt === null)
    )
      throw Error(H(349));
    Fo & 30 || M0(n, t, o);
  }
  return o;
}
function M0(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ze.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ze.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function O0(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), T0(t) && _0(e);
}
function $0(e, t, n) {
  return n(function () {
    T0(t) && _0(e);
  });
}
function T0(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Zn(e, n);
  } catch {
    return !0;
  }
}
function _0(e) {
  var t = Rr(e, 1);
  t !== null && Xn(t, e, 1, -1);
}
function Jm(e) {
  var t = sr();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Qa,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = MC.bind(null, Ze, e)),
    [t.memoizedState, e]
  );
}
function Ya(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Ze.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ze.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function N0() {
  return _n().memoizedState;
}
function hs(e, t, n, r) {
  var o = sr();
  (Ze.flags |= e),
    (o.memoizedState = Ya(1 | t, n, void 0, r === void 0 ? null : r));
}
function Su(e, t, n, r) {
  var o = _n();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (mt !== null) {
    var a = mt.memoizedState;
    if (((i = a.destroy), r !== null && xv(r, a.deps))) {
      o.memoizedState = Ya(t, n, i, r);
      return;
    }
  }
  (Ze.flags |= e), (o.memoizedState = Ya(1 | t, n, i, r));
}
function ep(e, t) {
  return hs(8390656, 8, e, t);
}
function Pv(e, t) {
  return Su(2048, 8, e, t);
}
function F0(e, t) {
  return Su(4, 2, e, t);
}
function L0(e, t) {
  return Su(4, 4, e, t);
}
function A0(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function z0(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Su(4, 4, A0.bind(null, t, e), n)
  );
}
function Rv() {}
function j0(e, t) {
  var n = _n();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xv(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function D0(e, t) {
  var n = _n();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xv(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function B0(e, t, n) {
  return Fo & 21
    ? (Zn(n, t) || ((n = Kg()), (Ze.lanes |= n), (Lo |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (nn = !0)), (e.memoizedState = n));
}
function RC(e, t) {
  var n = Ie;
  (Ie = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Pc.transition;
  Pc.transition = {};
  try {
    e(!1), t();
  } finally {
    (Ie = n), (Pc.transition = r);
  }
}
function V0() {
  return _n().memoizedState;
}
function IC(e, t, n) {
  var r = ro(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    H0(e))
  )
    U0(t, n);
  else if (((n = E0(e, t, n, r)), n !== null)) {
    var o = Qt();
    Xn(n, e, r, o), W0(n, t, r);
  }
}
function MC(e, t, n) {
  var r = ro(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (H0(e)) U0(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var a = t.lastRenderedState,
          l = i(a, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), Zn(l, a))) {
          var s = t.interleaved;
          s === null
            ? ((o.next = o), yv(t))
            : ((o.next = s.next), (s.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = E0(e, t, o, r)),
      n !== null && ((o = Qt()), Xn(n, e, r, o), W0(n, t, r));
  }
}
function H0(e) {
  var t = e.alternate;
  return e === Ze || (t !== null && t === Ze);
}
function U0(e, t) {
  Pa = qs = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function W0(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ov(e, n);
  }
}
var Xs = {
    readContext: Tn,
    useCallback: Bt,
    useContext: Bt,
    useEffect: Bt,
    useImperativeHandle: Bt,
    useInsertionEffect: Bt,
    useLayoutEffect: Bt,
    useMemo: Bt,
    useReducer: Bt,
    useRef: Bt,
    useState: Bt,
    useDebugValue: Bt,
    useDeferredValue: Bt,
    useTransition: Bt,
    useMutableSource: Bt,
    useSyncExternalStore: Bt,
    useId: Bt,
    unstable_isNewReconciler: !1,
  },
  OC = {
    readContext: Tn,
    useCallback: function (e, t) {
      return (sr().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Tn,
    useEffect: ep,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        hs(4194308, 4, A0.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return hs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return hs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = sr();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = sr();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = IC.bind(null, Ze, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = sr();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Jm,
    useDebugValue: Rv,
    useDeferredValue: function (e) {
      return (sr().memoizedState = e);
    },
    useTransition: function () {
      var e = Jm(!1),
        t = e[0];
      return (e = RC.bind(null, e[1])), (sr().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Ze,
        o = sr();
      if (Xe) {
        if (n === void 0) throw Error(H(407));
        n = n();
      } else {
        if (((n = t()), bt === null)) throw Error(H(349));
        Fo & 30 || M0(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        ep($0.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Ya(9, O0.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = sr(),
        t = bt.identifierPrefix;
      if (Xe) {
        var n = wr,
          r = Sr;
        (n = (r & ~(1 << (32 - qn(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Xa++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = PC++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  $C = {
    readContext: Tn,
    useCallback: j0,
    useContext: Tn,
    useEffect: Pv,
    useImperativeHandle: z0,
    useInsertionEffect: F0,
    useLayoutEffect: L0,
    useMemo: D0,
    useReducer: Rc,
    useRef: N0,
    useState: function () {
      return Rc(Qa);
    },
    useDebugValue: Rv,
    useDeferredValue: function (e) {
      var t = _n();
      return B0(t, mt.memoizedState, e);
    },
    useTransition: function () {
      var e = Rc(Qa)[0],
        t = _n().memoizedState;
      return [e, t];
    },
    useMutableSource: R0,
    useSyncExternalStore: I0,
    useId: V0,
    unstable_isNewReconciler: !1,
  },
  TC = {
    readContext: Tn,
    useCallback: j0,
    useContext: Tn,
    useEffect: Pv,
    useImperativeHandle: z0,
    useInsertionEffect: F0,
    useLayoutEffect: L0,
    useMemo: D0,
    useReducer: Ic,
    useRef: N0,
    useState: function () {
      return Ic(Qa);
    },
    useDebugValue: Rv,
    useDeferredValue: function (e) {
      var t = _n();
      return mt === null ? (t.memoizedState = e) : B0(t, mt.memoizedState, e);
    },
    useTransition: function () {
      var e = Ic(Qa)[0],
        t = _n().memoizedState;
      return [e, t];
    },
    useMutableSource: R0,
    useSyncExternalStore: I0,
    useId: V0,
    unstable_isNewReconciler: !1,
  };
function Hn(e, t) {
  if (e && e.defaultProps) {
    (t = Je({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Of(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Je({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var wu = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Do(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Qt(),
      o = ro(e),
      i = Cr(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = to(e, i, o)),
      t !== null && (Xn(t, e, o, r), ms(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Qt(),
      o = ro(e),
      i = Cr(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = to(e, i, o)),
      t !== null && (Xn(t, e, o, r), ms(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Qt(),
      r = ro(e),
      o = Cr(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = to(e, o, r)),
      t !== null && (Xn(t, e, r, n), ms(t, e, r));
  },
};
function tp(e, t, n, r, o, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, a)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Ha(n, r) || !Ha(o, i)
        : !0
  );
}
function K0(e, t, n) {
  var r = !1,
    o = ao,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = Tn(i))
      : ((o = on(t) ? _o : Kt.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? $i(e, o) : ao)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = wu),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function np(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && wu.enqueueReplaceState(t, t.state, null);
}
function $f(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Sv(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null
    ? (o.context = Tn(i))
    : ((i = on(t) ? _o : Kt.current), (o.context = $i(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (Of(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && wu.enqueueReplaceState(o, o.state, null),
      Ks(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Fi(e, t) {
  try {
    var n = '',
      r = t;
    do (n += aw(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Mc(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Tf(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var _C = typeof WeakMap == 'function' ? WeakMap : Map;
function G0(e, t, n) {
  (n = Cr(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ys || ((Ys = !0), (Vf = r)), Tf(e, t);
    }),
    n
  );
}
function q0(e, t, n) {
  (n = Cr(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Tf(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        Tf(e, t),
          typeof r != 'function' &&
            (no === null ? (no = new Set([this])) : no.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : '',
        });
      }),
    n
  );
}
function rp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new _C();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = GC.bind(null, e, t, n)), t.then(e, e));
}
function op(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ip(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Cr(-1, 1)), (t.tag = 2), to(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var NC = Mr.ReactCurrentOwner,
  nn = !1;
function Xt(e, t, n, r) {
  t.child = e === null ? x0(t, null, n, r) : _i(t, e.child, n, r);
}
function ap(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Ri(t, o),
    (r = Ev(e, t, n, r, i, o)),
    (n = kv()),
    e !== null && !nn
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Ir(e, t, o))
      : (Xe && n && dv(t), (t.flags |= 1), Xt(e, t, r, o), t.child)
  );
}
function lp(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !Fv(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), X0(e, t, i, r, o))
      : ((e = ws(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var a = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ha), n(a, r) && e.ref === t.ref)
    )
      return Ir(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = oo(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function X0(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ha(i, r) && e.ref === t.ref)
      if (((nn = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (nn = !0);
      else return (t.lanes = e.lanes), Ir(e, t, o);
  }
  return _f(e, t, n, r, o);
}
function Q0(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ze(Si, mn),
        (mn |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ze(Si, mn),
          (mn |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ze(Si, mn),
        (mn |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ze(Si, mn),
      (mn |= r);
  return Xt(e, t, o, n), t.child;
}
function Y0(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function _f(e, t, n, r, o) {
  var i = on(n) ? _o : Kt.current;
  return (
    (i = $i(t, i)),
    Ri(t, o),
    (n = Ev(e, t, n, r, i, o)),
    (r = kv()),
    e !== null && !nn
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Ir(e, t, o))
      : (Xe && r && dv(t), (t.flags |= 1), Xt(e, t, n, o), t.child)
  );
}
function sp(e, t, n, r, o) {
  if (on(n)) {
    var i = !0;
    Bs(t);
  } else i = !1;
  if ((Ri(t, o), t.stateNode === null))
    gs(e, t), K0(t, n, r), $f(t, n, r, o), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      l = t.memoizedProps;
    a.props = l;
    var s = a.context,
      u = n.contextType;
    typeof u == 'object' && u !== null
      ? (u = Tn(u))
      : ((u = on(n) ? _o : Kt.current), (u = $i(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == 'function' ||
        typeof a.getSnapshotBeforeUpdate == 'function';
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((l !== r || s !== u) && np(t, a, r, u)),
      (Br = !1);
    var v = t.memoizedState;
    (a.state = v),
      Ks(t, r, a, o),
      (s = t.memoizedState),
      l !== r || v !== s || rn.current || Br
        ? (typeof c == 'function' && (Of(t, n, c, r), (s = t.memoizedState)),
          (l = Br || tp(t, n, l, r, v, s, u))
            ? (d ||
                (typeof a.UNSAFE_componentWillMount != 'function' &&
                  typeof a.componentWillMount != 'function') ||
                (typeof a.componentWillMount == 'function' &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == 'function' &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (a.props = r),
          (a.state = s),
          (a.context = u),
          (r = l))
        : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      k0(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Hn(t.type, l)),
      (a.props = u),
      (d = t.pendingProps),
      (v = a.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null
        ? (s = Tn(s))
        : ((s = on(n) ? _o : Kt.current), (s = $i(t, s)));
    var w = n.getDerivedStateFromProps;
    (c =
      typeof w == 'function' ||
      typeof a.getSnapshotBeforeUpdate == 'function') ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((l !== d || v !== s) && np(t, a, r, s)),
      (Br = !1),
      (v = t.memoizedState),
      (a.state = v),
      Ks(t, r, a, o);
    var g = t.memoizedState;
    l !== d || v !== g || rn.current || Br
      ? (typeof w == 'function' && (Of(t, n, w, r), (g = t.memoizedState)),
        (u = Br || tp(t, n, u, r, v, g, s) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != 'function' &&
                typeof a.componentWillUpdate != 'function') ||
              (typeof a.componentWillUpdate == 'function' &&
                a.componentWillUpdate(r, g, s),
              typeof a.UNSAFE_componentWillUpdate == 'function' &&
                a.UNSAFE_componentWillUpdate(r, g, s)),
            typeof a.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != 'function' ||
              (l === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != 'function' ||
              (l === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (a.props = r),
        (a.state = g),
        (a.context = s),
        (r = u))
      : (typeof a.componentDidUpdate != 'function' ||
          (l === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != 'function' ||
          (l === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Nf(e, t, n, r, i, o);
}
function Nf(e, t, n, r, o, i) {
  Y0(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return o && Gm(t, n, !1), Ir(e, t, i);
  (r = t.stateNode), (NC.current = t);
  var l =
    a && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = _i(t, e.child, null, i)), (t.child = _i(t, null, l, i)))
      : Xt(e, t, l, i),
    (t.memoizedState = r.state),
    o && Gm(t, n, !0),
    t.child
  );
}
function Z0(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Km(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Km(e, t.context, !1),
    wv(e, t.containerInfo);
}
function up(e, t, n, r, o) {
  return Ti(), mv(o), (t.flags |= 256), Xt(e, t, n, r), t.child;
}
var Ff = { dehydrated: null, treeContext: null, retryLane: 0 };
function Lf(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function J0(e, t, n) {
  var r = t.pendingProps,
    o = Ye.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    l;
  if (
    ((l = a) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    ze(Ye, o & 1),
    e === null)
  )
    return (
      If(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (a = { mode: 'hidden', children: a }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = xu(a, r, 0, null)),
              (e = Oo(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Lf(n)),
              (t.memoizedState = Ff),
              e)
            : Iv(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return FC(e, t, a, r, l, o, n);
  if (i) {
    (i = r.fallback), (a = t.mode), (o = e.child), (l = o.sibling);
    var s = { mode: 'hidden', children: r.children };
    return (
      !(a & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = oo(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = oo(l, i)) : ((i = Oo(i, a, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Lf(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ff),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = oo(i, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Iv(e, t) {
  return (
    (t = xu({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Gl(e, t, n, r) {
  return (
    r !== null && mv(r),
    _i(t, e.child, null, n),
    (e = Iv(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function FC(e, t, n, r, o, i, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Mc(Error(H(422)))), Gl(e, t, a, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = xu({ mode: 'visible', children: r.children }, o, 0, null)),
          (i = Oo(i, o, a, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && _i(t, e.child, null, a),
          (t.child.memoizedState = Lf(a)),
          (t.memoizedState = Ff),
          i);
  if (!(t.mode & 1)) return Gl(e, t, a, null);
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error(H(419))), (r = Mc(i, r, void 0)), Gl(e, t, a, r);
  }
  if (((l = (a & e.childLanes) !== 0), nn || l)) {
    if (((r = bt), r !== null)) {
      switch (a & -a) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | a) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Rr(e, o), Xn(r, e, o, -1));
    }
    return Nv(), (r = Mc(Error(H(421)))), Gl(e, t, a, r);
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = qC.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (pn = eo(o.nextSibling)),
      (gn = t),
      (Xe = !0),
      (Gn = null),
      e !== null &&
        ((In[Mn++] = Sr),
        (In[Mn++] = wr),
        (In[Mn++] = No),
        (Sr = e.id),
        (wr = e.overflow),
        (No = t)),
      (t = Iv(t, r.children)),
      (t.flags |= 4096),
      t);
}
function cp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Mf(e.return, t, n);
}
function Oc(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function ey(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Xt(e, t, r.children, n), (r = Ye.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && cp(e, n, t);
        else if (e.tag === 19) cp(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ze(Ye, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Gs(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Oc(t, !1, o, n, i);
        break;
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Gs(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Oc(t, !0, n, null, i);
        break;
      case 'together':
        Oc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function gs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ir(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Lo |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(H(153));
  if (t.child !== null) {
    for (
      e = t.child, n = oo(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = oo(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function LC(e, t, n) {
  switch (t.tag) {
    case 3:
      Z0(t), Ti();
      break;
    case 5:
      P0(t);
      break;
    case 1:
      on(t.type) && Bs(t);
      break;
    case 4:
      wv(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      ze(Us, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ze(Ye, Ye.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? J0(e, t, n)
            : (ze(Ye, Ye.current & 1),
              (e = Ir(e, t, n)),
              e !== null ? e.sibling : null);
      ze(Ye, Ye.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return ey(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ze(Ye, Ye.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Q0(e, t, n);
  }
  return Ir(e, t, n);
}
var ty, Af, ny, ry;
ty = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Af = function () {};
ny = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Po(vr.current);
    var i = null;
    switch (n) {
      case 'input':
        (o = of(e, o)), (r = of(e, r)), (i = []);
        break;
      case 'select':
        (o = Je({}, o, { value: void 0 })),
          (r = Je({}, r, { value: void 0 })),
          (i = []);
        break;
      case 'textarea':
        (o = sf(e, o)), (r = sf(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = js);
    }
    cf(n, r);
    var a;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === 'style') {
          var l = o[u];
          for (a in l) l.hasOwnProperty(a) && (n || (n = {}), (n[a] = ''));
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (La.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((l = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && s !== l && (s != null || l != null))
      )
        if (u === 'style')
          if (l) {
            for (a in l)
              !l.hasOwnProperty(a) ||
                (s && s.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ''));
            for (a in s)
              s.hasOwnProperty(a) &&
                l[a] !== s[a] &&
                (n || (n = {}), (n[a] = s[a]));
          } else n || (i || (i = []), i.push(u, n)), (n = s);
        else
          u === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0),
              (l = l ? l.__html : void 0),
              s != null && l !== s && (i = i || []).push(u, s))
            : u === 'children'
              ? (typeof s != 'string' && typeof s != 'number') ||
                (i = i || []).push(u, '' + s)
              : u !== 'suppressContentEditableWarning' &&
                u !== 'suppressHydrationWarning' &&
                (La.hasOwnProperty(u)
                  ? (s != null && u === 'onScroll' && Ue('scroll', e),
                    i || l === s || (i = []))
                  : (i = i || []).push(u, s));
    }
    n && (i = i || []).push('style', n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
ry = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function la(e, t) {
  if (!Xe)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Vt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function AC(e, t, n) {
  var r = t.pendingProps;
  switch ((vv(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Vt(t), null;
    case 1:
      return on(t.type) && Ds(), Vt(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Ni(),
        We(rn),
        We(Kt),
        bv(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Wl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Gn !== null && (Wf(Gn), (Gn = null)))),
        Af(e, t),
        Vt(t),
        null
      );
    case 5:
      Cv(t);
      var o = Po(qa.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        ny(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(H(166));
          return Vt(t), null;
        }
        if (((e = Po(vr.current)), Wl(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[cr] = t), (r[Ka] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              Ue('cancel', r), Ue('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              Ue('load', r);
              break;
            case 'video':
            case 'audio':
              for (o = 0; o < ya.length; o++) Ue(ya[o], r);
              break;
            case 'source':
              Ue('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              Ue('error', r), Ue('load', r);
              break;
            case 'details':
              Ue('toggle', r);
              break;
            case 'input':
              Sm(r, i), Ue('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                Ue('invalid', r);
              break;
            case 'textarea':
              Cm(r, i), Ue('invalid', r);
          }
          cf(n, i), (o = null);
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var l = i[a];
              a === 'children'
                ? typeof l == 'string'
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ul(r.textContent, l, e),
                    (o = ['children', l]))
                  : typeof l == 'number' &&
                    r.textContent !== '' + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ul(r.textContent, l, e),
                    (o = ['children', '' + l]))
                : La.hasOwnProperty(a) &&
                  l != null &&
                  a === 'onScroll' &&
                  Ue('scroll', r);
            }
          switch (n) {
            case 'input':
              Ll(r), wm(r, i, !0);
              break;
            case 'textarea':
              Ll(r), bm(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = js);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = $g(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = a.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = a.createElement(n, { is: r.is }))
                  : ((e = a.createElement(n)),
                    n === 'select' &&
                      ((a = e),
                      r.multiple
                        ? (a.multiple = !0)
                        : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[cr] = t),
            (e[Ka] = r),
            ty(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = ff(n, r)), n)) {
              case 'dialog':
                Ue('cancel', e), Ue('close', e), (o = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                Ue('load', e), (o = r);
                break;
              case 'video':
              case 'audio':
                for (o = 0; o < ya.length; o++) Ue(ya[o], e);
                o = r;
                break;
              case 'source':
                Ue('error', e), (o = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                Ue('error', e), Ue('load', e), (o = r);
                break;
              case 'details':
                Ue('toggle', e), (o = r);
                break;
              case 'input':
                Sm(e, r), (o = of(e, r)), Ue('invalid', e);
                break;
              case 'option':
                o = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Je({}, r, { value: void 0 })),
                  Ue('invalid', e);
                break;
              case 'textarea':
                Cm(e, r), (o = sf(e, r)), Ue('invalid', e);
                break;
              default:
                o = r;
            }
            cf(n, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var s = l[i];
                i === 'style'
                  ? Ng(e, s)
                  : i === 'dangerouslySetInnerHTML'
                    ? ((s = s ? s.__html : void 0), s != null && Tg(e, s))
                    : i === 'children'
                      ? typeof s == 'string'
                        ? (n !== 'textarea' || s !== '') && Aa(e, s)
                        : typeof s == 'number' && Aa(e, '' + s)
                      : i !== 'suppressContentEditableWarning' &&
                        i !== 'suppressHydrationWarning' &&
                        i !== 'autoFocus' &&
                        (La.hasOwnProperty(i)
                          ? s != null && i === 'onScroll' && Ue('scroll', e)
                          : s != null && Zd(e, i, s, a));
              }
            switch (n) {
              case 'input':
                Ll(e), wm(e, r, !1);
                break;
              case 'textarea':
                Ll(e), bm(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + io(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? xi(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      xi(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == 'function' && (e.onclick = js);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Vt(t), null;
    case 6:
      if (e && t.stateNode != null) ry(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(H(166));
        if (((n = Po(qa.current)), Po(vr.current), Wl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[cr] = t),
            (i = r.nodeValue !== n) && ((e = gn), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ul(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ul(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[cr] = t),
            (t.stateNode = r);
      }
      return Vt(t), null;
    case 13:
      if (
        (We(Ye),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Xe && pn !== null && t.mode & 1 && !(t.flags & 128))
          C0(), Ti(), (t.flags |= 98560), (i = !1);
        else if (((i = Wl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(H(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(H(317));
            i[cr] = t;
          } else
            Ti(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Vt(t), (i = !1);
        } else Gn !== null && (Wf(Gn), (Gn = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Ye.current & 1 ? pt === 0 && (pt = 3) : Nv())),
          t.updateQueue !== null && (t.flags |= 4),
          Vt(t),
          null);
    case 4:
      return (
        Ni(), Af(e, t), e === null && Ua(t.stateNode.containerInfo), Vt(t), null
      );
    case 10:
      return gv(t.type._context), Vt(t), null;
    case 17:
      return on(t.type) && Ds(), Vt(t), null;
    case 19:
      if ((We(Ye), (i = t.memoizedState), i === null)) return Vt(t), null;
      if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (r) la(i, !1);
        else {
          if (pt !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = Gs(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    la(i, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ze(Ye, (Ye.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            st() > Li &&
            ((t.flags |= 128), (r = !0), la(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Gs(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              la(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !a.alternate && !Xe)
            )
              return Vt(t), null;
          } else
            2 * st() - i.renderingStartTime > Li &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), la(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = i.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = st()),
          (t.sibling = null),
          (n = Ye.current),
          ze(Ye, r ? (n & 1) | 2 : n & 1),
          t)
        : (Vt(t), null);
    case 22:
    case 23:
      return (
        _v(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? mn & 1073741824 && (Vt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Vt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(H(156, t.tag));
}
function zC(e, t) {
  switch ((vv(t), t.tag)) {
    case 1:
      return (
        on(t.type) && Ds(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ni(),
        We(rn),
        We(Kt),
        bv(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Cv(t), null;
    case 13:
      if (
        (We(Ye), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(H(340));
        Ti();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return We(Ye), null;
    case 4:
      return Ni(), null;
    case 10:
      return gv(t.type._context), null;
    case 22:
    case 23:
      return _v(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ql = !1,
  Ut = !1,
  jC = typeof WeakSet == 'function' ? WeakSet : Set,
  G = null;
function yi(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        rt(e, t, r);
      }
    else n.current = null;
}
function zf(e, t, n) {
  try {
    n();
  } catch (r) {
    rt(e, t, r);
  }
}
var fp = !1;
function DC(e, t) {
  if (((Cf = Ls), (e = s0()), fv(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            l = -1,
            s = -1,
            u = 0,
            c = 0,
            d = e,
            v = null;
          t: for (;;) {
            for (
              var w;
              d !== n || (o !== 0 && d.nodeType !== 3) || (l = a + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (s = a + r),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (w = d.firstChild) !== null;

            )
              (v = d), (d = w);
            for (;;) {
              if (d === e) break t;
              if (
                (v === n && ++u === o && (l = a),
                v === i && ++c === r && (s = a),
                (w = d.nextSibling) !== null)
              )
                break;
              (d = v), (v = d.parentNode);
            }
            d = w;
          }
          n = l === -1 || s === -1 ? null : { start: l, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (bf = { focusedElem: e, selectionRange: n }, Ls = !1, G = t; G !== null; )
    if (((t = G), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (G = e);
    else
      for (; G !== null; ) {
        t = G;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var S = g.memoizedProps,
                    y = g.memoizedState,
                    p = t.stateNode,
                    m = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : Hn(t.type, S),
                      y
                    );
                  p.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = '')
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(H(163));
            }
        } catch (C) {
          rt(t, t.return, C);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (G = e);
          break;
        }
        G = t.return;
      }
  return (g = fp), (fp = !1), g;
}
function Ra(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && zf(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Cu(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function jf(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function oy(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), oy(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[cr], delete t[Ka], delete t[kf], delete t[bC], delete t[xC])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function iy(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function dp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || iy(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Df(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = js));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Df(e, t, n), e = e.sibling; e !== null; ) Df(e, t, n), (e = e.sibling);
}
function Bf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Bf(e, t, n), e = e.sibling; e !== null; ) Bf(e, t, n), (e = e.sibling);
}
var Tt = null,
  Un = !1;
function Ar(e, t, n) {
  for (n = n.child; n !== null; ) ay(e, t, n), (n = n.sibling);
}
function ay(e, t, n) {
  if (dr && typeof dr.onCommitFiberUnmount == 'function')
    try {
      dr.onCommitFiberUnmount(vu, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ut || yi(n, t);
    case 6:
      var r = Tt,
        o = Un;
      (Tt = null),
        Ar(e, t, n),
        (Tt = r),
        (Un = o),
        Tt !== null &&
          (Un
            ? ((e = Tt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Tt.removeChild(n.stateNode));
      break;
    case 18:
      Tt !== null &&
        (Un
          ? ((e = Tt),
            (n = n.stateNode),
            e.nodeType === 8
              ? xc(e.parentNode, n)
              : e.nodeType === 1 && xc(e, n),
            Ba(e))
          : xc(Tt, n.stateNode));
      break;
    case 4:
      (r = Tt),
        (o = Un),
        (Tt = n.stateNode.containerInfo),
        (Un = !0),
        Ar(e, t, n),
        (Tt = r),
        (Un = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ut &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            a = i.destroy;
          (i = i.tag),
            a !== void 0 && (i & 2 || i & 4) && zf(n, t, a),
            (o = o.next);
        } while (o !== r);
      }
      Ar(e, t, n);
      break;
    case 1:
      if (
        !Ut &&
        (yi(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          rt(n, t, l);
        }
      Ar(e, t, n);
      break;
    case 21:
      Ar(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ut = (r = Ut) || n.memoizedState !== null), Ar(e, t, n), (Ut = r))
        : Ar(e, t, n);
      break;
    default:
      Ar(e, t, n);
  }
}
function vp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new jC()),
      t.forEach(function (r) {
        var o = XC.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Bn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          a = t,
          l = a;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (Tt = l.stateNode), (Un = !1);
              break e;
            case 3:
              (Tt = l.stateNode.containerInfo), (Un = !0);
              break e;
            case 4:
              (Tt = l.stateNode.containerInfo), (Un = !0);
              break e;
          }
          l = l.return;
        }
        if (Tt === null) throw Error(H(160));
        ay(i, a, o), (Tt = null), (Un = !1);
        var s = o.alternate;
        s !== null && (s.return = null), (o.return = null);
      } catch (u) {
        rt(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) ly(t, e), (t = t.sibling);
}
function ly(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Bn(t, e), lr(e), r & 4)) {
        try {
          Ra(3, e, e.return), Cu(3, e);
        } catch (S) {
          rt(e, e.return, S);
        }
        try {
          Ra(5, e, e.return);
        } catch (S) {
          rt(e, e.return, S);
        }
      }
      break;
    case 1:
      Bn(t, e), lr(e), r & 512 && n !== null && yi(n, n.return);
      break;
    case 5:
      if (
        (Bn(t, e),
        lr(e),
        r & 512 && n !== null && yi(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Aa(o, '');
        } catch (S) {
          rt(e, e.return, S);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          a = n !== null ? n.memoizedProps : i,
          l = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            l === 'input' && i.type === 'radio' && i.name != null && Mg(o, i),
              ff(l, a);
            var u = ff(l, i);
            for (a = 0; a < s.length; a += 2) {
              var c = s[a],
                d = s[a + 1];
              c === 'style'
                ? Ng(o, d)
                : c === 'dangerouslySetInnerHTML'
                  ? Tg(o, d)
                  : c === 'children'
                    ? Aa(o, d)
                    : Zd(o, c, d, u);
            }
            switch (l) {
              case 'input':
                af(o, i);
                break;
              case 'textarea':
                Og(o, i);
                break;
              case 'select':
                var v = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? xi(o, !!i.multiple, w, !1)
                  : v !== !!i.multiple &&
                    (i.defaultValue != null
                      ? xi(o, !!i.multiple, i.defaultValue, !0)
                      : xi(o, !!i.multiple, i.multiple ? [] : '', !1));
            }
            o[Ka] = i;
          } catch (S) {
            rt(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((Bn(t, e), lr(e), r & 4)) {
        if (e.stateNode === null) throw Error(H(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (S) {
          rt(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (Bn(t, e), lr(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ba(t.containerInfo);
        } catch (S) {
          rt(e, e.return, S);
        }
      break;
    case 4:
      Bn(t, e), lr(e);
      break;
    case 13:
      Bn(t, e),
        lr(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            ($v = st())),
        r & 4 && vp(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ut = (u = Ut) || c), Bn(t, e), (Ut = u)) : Bn(t, e),
        lr(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (G = e, c = e.child; c !== null; ) {
            for (d = G = c; G !== null; ) {
              switch (((v = G), (w = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ra(4, v, v.return);
                  break;
                case 1:
                  yi(v, v.return);
                  var g = v.stateNode;
                  if (typeof g.componentWillUnmount == 'function') {
                    (r = v), (n = v.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (S) {
                      rt(r, n, S);
                    }
                  }
                  break;
                case 5:
                  yi(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    pp(d);
                    continue;
                  }
              }
              w !== null ? ((w.return = v), (G = w)) : pp(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((l = d.stateNode),
                      (s = d.memoizedProps.style),
                      (a =
                        s != null && s.hasOwnProperty('display')
                          ? s.display
                          : null),
                      (l.style.display = _g('display', a)));
              } catch (S) {
                rt(e, e.return, S);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? '' : d.memoizedProps;
              } catch (S) {
                rt(e, e.return, S);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Bn(t, e), lr(e), r & 4 && vp(e);
      break;
    case 21:
      break;
    default:
      Bn(t, e), lr(e);
  }
}
function lr(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (iy(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(H(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Aa(o, ''), (r.flags &= -33));
          var i = dp(e);
          Bf(e, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            l = dp(e);
          Df(e, l, a);
          break;
        default:
          throw Error(H(161));
      }
    } catch (s) {
      rt(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function BC(e, t, n) {
  (G = e), sy(e);
}
function sy(e, t, n) {
  for (var r = (e.mode & 1) !== 0; G !== null; ) {
    var o = G,
      i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || ql;
      if (!a) {
        var l = o.alternate,
          s = (l !== null && l.memoizedState !== null) || Ut;
        l = ql;
        var u = Ut;
        if (((ql = a), (Ut = s) && !u))
          for (G = o; G !== null; )
            (a = G),
              (s = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? hp(o)
                : s !== null
                  ? ((s.return = a), (G = s))
                  : hp(o);
        for (; i !== null; ) (G = i), sy(i), (i = i.sibling);
        (G = o), (ql = l), (Ut = u);
      }
      mp(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (G = i)) : mp(e);
  }
}
function mp(e) {
  for (; G !== null; ) {
    var t = G;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ut || Cu(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ut)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Hn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Zm(t, i, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Zm(t, a, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var s = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && n.focus();
                    break;
                  case 'img':
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Ba(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(H(163));
          }
        Ut || (t.flags & 512 && jf(t));
      } catch (v) {
        rt(t, t.return, v);
      }
    }
    if (t === e) {
      G = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (G = n);
      break;
    }
    G = t.return;
  }
}
function pp(e) {
  for (; G !== null; ) {
    var t = G;
    if (t === e) {
      G = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (G = n);
      break;
    }
    G = t.return;
  }
}
function hp(e) {
  for (; G !== null; ) {
    var t = G;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Cu(4, t);
          } catch (s) {
            rt(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              rt(t, o, s);
            }
          }
          var i = t.return;
          try {
            jf(t);
          } catch (s) {
            rt(t, i, s);
          }
          break;
        case 5:
          var a = t.return;
          try {
            jf(t);
          } catch (s) {
            rt(t, a, s);
          }
      }
    } catch (s) {
      rt(t, t.return, s);
    }
    if (t === e) {
      G = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (G = l);
      break;
    }
    G = t.return;
  }
}
var VC = Math.ceil,
  Qs = Mr.ReactCurrentDispatcher,
  Mv = Mr.ReactCurrentOwner,
  $n = Mr.ReactCurrentBatchConfig,
  Se = 0,
  bt = null,
  ct = null,
  Nt = 0,
  mn = 0,
  Si = so(0),
  pt = 0,
  Za = null,
  Lo = 0,
  bu = 0,
  Ov = 0,
  Ia = null,
  en = null,
  $v = 0,
  Li = 1 / 0,
  gr = null,
  Ys = !1,
  Vf = null,
  no = null,
  Xl = !1,
  Wr = null,
  Zs = 0,
  Ma = 0,
  Hf = null,
  ys = -1,
  Ss = 0;
function Qt() {
  return Se & 6 ? st() : ys !== -1 ? ys : (ys = st());
}
function ro(e) {
  return e.mode & 1
    ? Se & 2 && Nt !== 0
      ? Nt & -Nt
      : kC.transition !== null
        ? (Ss === 0 && (Ss = Kg()), Ss)
        : ((e = Ie),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Jg(e.type))),
          e)
    : 1;
}
function Xn(e, t, n, r) {
  if (50 < Ma) throw ((Ma = 0), (Hf = null), Error(H(185)));
  gl(e, n, r),
    (!(Se & 2) || e !== bt) &&
      (e === bt && (!(Se & 2) && (bu |= n), pt === 4 && Hr(e, Nt)),
      an(e, r),
      n === 1 && Se === 0 && !(t.mode & 1) && ((Li = st() + 500), yu && uo()));
}
function an(e, t) {
  var n = e.callbackNode;
  kw(e, t);
  var r = Fs(e, e === bt ? Nt : 0);
  if (r === 0)
    n !== null && km(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && km(n), t === 1))
      e.tag === 0 ? EC(gp.bind(null, e)) : y0(gp.bind(null, e)),
        wC(function () {
          !(Se & 6) && uo();
        }),
        (n = null);
    else {
      switch (Gg(r)) {
        case 1:
          n = rv;
          break;
        case 4:
          n = Ug;
          break;
        case 16:
          n = Ns;
          break;
        case 536870912:
          n = Wg;
          break;
        default:
          n = Ns;
      }
      n = hy(n, uy.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function uy(e, t) {
  if (((ys = -1), (Ss = 0), Se & 6)) throw Error(H(327));
  var n = e.callbackNode;
  if (Ii() && e.callbackNode !== n) return null;
  var r = Fs(e, e === bt ? Nt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Js(e, r);
  else {
    t = r;
    var o = Se;
    Se |= 2;
    var i = fy();
    (bt !== e || Nt !== t) && ((gr = null), (Li = st() + 500), Mo(e, t));
    do
      try {
        WC();
        break;
      } catch (l) {
        cy(e, l);
      }
    while (!0);
    hv(),
      (Qs.current = i),
      (Se = o),
      ct !== null ? (t = 0) : ((bt = null), (Nt = 0), (t = pt));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = hf(e)), o !== 0 && ((r = o), (t = Uf(e, o)))), t === 1)
    )
      throw ((n = Za), Mo(e, 0), Hr(e, r), an(e, st()), n);
    if (t === 6) Hr(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !HC(o) &&
          ((t = Js(e, r)),
          t === 2 && ((i = hf(e)), i !== 0 && ((r = i), (t = Uf(e, i)))),
          t === 1))
      )
        throw ((n = Za), Mo(e, 0), Hr(e, r), an(e, st()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(H(345));
        case 2:
          bo(e, en, gr);
          break;
        case 3:
          if (
            (Hr(e, r), (r & 130023424) === r && ((t = $v + 500 - st()), 10 < t))
          ) {
            if (Fs(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Qt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Ef(bo.bind(null, e, en, gr), t);
            break;
          }
          bo(e, en, gr);
          break;
        case 4:
          if ((Hr(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - qn(r);
            (i = 1 << a), (a = t[a]), a > o && (o = a), (r &= ~i);
          }
          if (
            ((r = o),
            (r = st() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * VC(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ef(bo.bind(null, e, en, gr), r);
            break;
          }
          bo(e, en, gr);
          break;
        case 5:
          bo(e, en, gr);
          break;
        default:
          throw Error(H(329));
      }
    }
  }
  return an(e, st()), e.callbackNode === n ? uy.bind(null, e) : null;
}
function Uf(e, t) {
  var n = Ia;
  return (
    e.current.memoizedState.isDehydrated && (Mo(e, t).flags |= 256),
    (e = Js(e, t)),
    e !== 2 && ((t = en), (en = n), t !== null && Wf(t)),
    e
  );
}
function Wf(e) {
  en === null ? (en = e) : en.push.apply(en, e);
}
function HC(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Zn(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Hr(e, t) {
  for (
    t &= ~Ov,
      t &= ~bu,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - qn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function gp(e) {
  if (Se & 6) throw Error(H(327));
  Ii();
  var t = Fs(e, 0);
  if (!(t & 1)) return an(e, st()), null;
  var n = Js(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = hf(e);
    r !== 0 && ((t = r), (n = Uf(e, r)));
  }
  if (n === 1) throw ((n = Za), Mo(e, 0), Hr(e, t), an(e, st()), n);
  if (n === 6) throw Error(H(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    bo(e, en, gr),
    an(e, st()),
    null
  );
}
function Tv(e, t) {
  var n = Se;
  Se |= 1;
  try {
    return e(t);
  } finally {
    (Se = n), Se === 0 && ((Li = st() + 500), yu && uo());
  }
}
function Ao(e) {
  Wr !== null && Wr.tag === 0 && !(Se & 6) && Ii();
  var t = Se;
  Se |= 1;
  var n = $n.transition,
    r = Ie;
  try {
    if ((($n.transition = null), (Ie = 1), e)) return e();
  } finally {
    (Ie = r), ($n.transition = n), (Se = t), !(Se & 6) && uo();
  }
}
function _v() {
  (mn = Si.current), We(Si);
}
function Mo(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), SC(n)), ct !== null))
    for (n = ct.return; n !== null; ) {
      var r = n;
      switch ((vv(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ds();
          break;
        case 3:
          Ni(), We(rn), We(Kt), bv();
          break;
        case 5:
          Cv(r);
          break;
        case 4:
          Ni();
          break;
        case 13:
          We(Ye);
          break;
        case 19:
          We(Ye);
          break;
        case 10:
          gv(r.type._context);
          break;
        case 22:
        case 23:
          _v();
      }
      n = n.return;
    }
  if (
    ((bt = e),
    (ct = e = oo(e.current, null)),
    (Nt = mn = t),
    (pt = 0),
    (Za = null),
    (Ov = bu = Lo = 0),
    (en = Ia = null),
    ko !== null)
  ) {
    for (t = 0; t < ko.length; t++)
      if (((n = ko[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var a = i.next;
          (i.next = o), (r.next = a);
        }
        n.pending = r;
      }
    ko = null;
  }
  return e;
}
function cy(e, t) {
  do {
    var n = ct;
    try {
      if ((hv(), (ps.current = Xs), qs)) {
        for (var r = Ze.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        qs = !1;
      }
      if (
        ((Fo = 0),
        (Ct = mt = Ze = null),
        (Pa = !1),
        (Xa = 0),
        (Mv.current = null),
        n === null || n.return === null)
      ) {
        (pt = 1), (Za = t), (ct = null);
        break;
      }
      e: {
        var i = e,
          a = n.return,
          l = n,
          s = t;
        if (
          ((t = Nt),
          (l.flags |= 32768),
          s !== null && typeof s == 'object' && typeof s.then == 'function')
        ) {
          var u = s,
            c = l,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var v = c.alternate;
            v
              ? ((c.updateQueue = v.updateQueue),
                (c.memoizedState = v.memoizedState),
                (c.lanes = v.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var w = op(a);
          if (w !== null) {
            (w.flags &= -257),
              ip(w, a, l, i, t),
              w.mode & 1 && rp(i, u, t),
              (t = w),
              (s = u);
            var g = t.updateQueue;
            if (g === null) {
              var S = new Set();
              S.add(s), (t.updateQueue = S);
            } else g.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              rp(i, u, t), Nv();
              break e;
            }
            s = Error(H(426));
          }
        } else if (Xe && l.mode & 1) {
          var y = op(a);
          if (y !== null) {
            !(y.flags & 65536) && (y.flags |= 256),
              ip(y, a, l, i, t),
              mv(Fi(s, l));
            break e;
          }
        }
        (i = s = Fi(s, l)),
          pt !== 4 && (pt = 2),
          Ia === null ? (Ia = [i]) : Ia.push(i),
          (i = a);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var p = G0(i, s, t);
              Ym(i, p);
              break e;
            case 1:
              l = s;
              var m = i.type,
                h = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof m.getDerivedStateFromError == 'function' ||
                  (h !== null &&
                    typeof h.componentDidCatch == 'function' &&
                    (no === null || !no.has(h))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var C = q0(i, l, t);
                Ym(i, C);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      vy(n);
    } catch (b) {
      (t = b), ct === n && n !== null && (ct = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function fy() {
  var e = Qs.current;
  return (Qs.current = Xs), e === null ? Xs : e;
}
function Nv() {
  (pt === 0 || pt === 3 || pt === 2) && (pt = 4),
    bt === null || (!(Lo & 268435455) && !(bu & 268435455)) || Hr(bt, Nt);
}
function Js(e, t) {
  var n = Se;
  Se |= 2;
  var r = fy();
  (bt !== e || Nt !== t) && ((gr = null), Mo(e, t));
  do
    try {
      UC();
      break;
    } catch (o) {
      cy(e, o);
    }
  while (!0);
  if ((hv(), (Se = n), (Qs.current = r), ct !== null)) throw Error(H(261));
  return (bt = null), (Nt = 0), pt;
}
function UC() {
  for (; ct !== null; ) dy(ct);
}
function WC() {
  for (; ct !== null && !hw(); ) dy(ct);
}
function dy(e) {
  var t = py(e.alternate, e, mn);
  (e.memoizedProps = e.pendingProps),
    t === null ? vy(e) : (ct = t),
    (Mv.current = null);
}
function vy(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = zC(n, t)), n !== null)) {
        (n.flags &= 32767), (ct = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (pt = 6), (ct = null);
        return;
      }
    } else if (((n = AC(n, t, mn)), n !== null)) {
      ct = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ct = t;
      return;
    }
    ct = t = e;
  } while (t !== null);
  pt === 0 && (pt = 5);
}
function bo(e, t, n) {
  var r = Ie,
    o = $n.transition;
  try {
    ($n.transition = null), (Ie = 1), KC(e, t, n, r);
  } finally {
    ($n.transition = o), (Ie = r);
  }
  return null;
}
function KC(e, t, n, r) {
  do Ii();
  while (Wr !== null);
  if (Se & 6) throw Error(H(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(H(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Pw(e, i),
    e === bt && ((ct = bt = null), (Nt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Xl ||
      ((Xl = !0),
      hy(Ns, function () {
        return Ii(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = $n.transition), ($n.transition = null);
    var a = Ie;
    Ie = 1;
    var l = Se;
    (Se |= 4),
      (Mv.current = null),
      DC(e, n),
      ly(n, e),
      dC(bf),
      (Ls = !!Cf),
      (bf = Cf = null),
      (e.current = n),
      BC(n),
      gw(),
      (Se = l),
      (Ie = a),
      ($n.transition = i);
  } else e.current = n;
  if (
    (Xl && ((Xl = !1), (Wr = e), (Zs = o)),
    (i = e.pendingLanes),
    i === 0 && (no = null),
    ww(n.stateNode),
    an(e, st()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ys) throw ((Ys = !1), (e = Vf), (Vf = null), e);
  return (
    Zs & 1 && e.tag !== 0 && Ii(),
    (i = e.pendingLanes),
    i & 1 ? (e === Hf ? Ma++ : ((Ma = 0), (Hf = e))) : (Ma = 0),
    uo(),
    null
  );
}
function Ii() {
  if (Wr !== null) {
    var e = Gg(Zs),
      t = $n.transition,
      n = Ie;
    try {
      if ((($n.transition = null), (Ie = 16 > e ? 16 : e), Wr === null))
        var r = !1;
      else {
        if (((e = Wr), (Wr = null), (Zs = 0), Se & 6)) throw Error(H(331));
        var o = Se;
        for (Se |= 4, G = e.current; G !== null; ) {
          var i = G,
            a = i.child;
          if (G.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var s = 0; s < l.length; s++) {
                var u = l[s];
                for (G = u; G !== null; ) {
                  var c = G;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ra(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (G = d);
                  else
                    for (; G !== null; ) {
                      c = G;
                      var v = c.sibling,
                        w = c.return;
                      if ((oy(c), c === u)) {
                        G = null;
                        break;
                      }
                      if (v !== null) {
                        (v.return = w), (G = v);
                        break;
                      }
                      G = w;
                    }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var S = g.child;
                if (S !== null) {
                  g.child = null;
                  do {
                    var y = S.sibling;
                    (S.sibling = null), (S = y);
                  } while (S !== null);
                }
              }
              G = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (G = a);
          else
            e: for (; G !== null; ) {
              if (((i = G), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ra(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                (p.return = i.return), (G = p);
                break e;
              }
              G = i.return;
            }
        }
        var m = e.current;
        for (G = m; G !== null; ) {
          a = G;
          var h = a.child;
          if (a.subtreeFlags & 2064 && h !== null) (h.return = a), (G = h);
          else
            e: for (a = m; G !== null; ) {
              if (((l = G), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Cu(9, l);
                  }
                } catch (b) {
                  rt(l, l.return, b);
                }
              if (l === a) {
                G = null;
                break e;
              }
              var C = l.sibling;
              if (C !== null) {
                (C.return = l.return), (G = C);
                break e;
              }
              G = l.return;
            }
        }
        if (
          ((Se = o), uo(), dr && typeof dr.onPostCommitFiberRoot == 'function')
        )
          try {
            dr.onPostCommitFiberRoot(vu, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Ie = n), ($n.transition = t);
    }
  }
  return !1;
}
function yp(e, t, n) {
  (t = Fi(n, t)),
    (t = G0(e, t, 1)),
    (e = to(e, t, 1)),
    (t = Qt()),
    e !== null && (gl(e, 1, t), an(e, t));
}
function rt(e, t, n) {
  if (e.tag === 3) yp(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        yp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (no === null || !no.has(r)))
        ) {
          (e = Fi(n, e)),
            (e = q0(t, e, 1)),
            (t = to(t, e, 1)),
            (e = Qt()),
            t !== null && (gl(t, 1, e), an(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function GC(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Qt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    bt === e &&
      (Nt & n) === n &&
      (pt === 4 || (pt === 3 && (Nt & 130023424) === Nt && 500 > st() - $v)
        ? Mo(e, 0)
        : (Ov |= n)),
    an(e, t);
}
function my(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = jl), (jl <<= 1), !(jl & 130023424) && (jl = 4194304))
      : (t = 1));
  var n = Qt();
  (e = Rr(e, t)), e !== null && (gl(e, t, n), an(e, n));
}
function qC(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), my(e, n);
}
function XC(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(H(314));
  }
  r !== null && r.delete(t), my(e, n);
}
var py;
py = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || rn.current) nn = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (nn = !1), LC(e, t, n);
      nn = !!(e.flags & 131072);
    }
  else (nn = !1), Xe && t.flags & 1048576 && S0(t, Hs, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      gs(e, t), (e = t.pendingProps);
      var o = $i(t, Kt.current);
      Ri(t, n), (o = Ev(null, t, r, e, o, n));
      var i = kv();
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            on(r) ? ((i = !0), Bs(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Sv(t),
            (o.updater = wu),
            (t.stateNode = o),
            (o._reactInternals = t),
            $f(t, r, e, n),
            (t = Nf(null, t, r, !0, i, n)))
          : ((t.tag = 0), Xe && i && dv(t), Xt(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (gs(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = YC(r)),
          (e = Hn(r, e)),
          o)
        ) {
          case 0:
            t = _f(null, t, r, e, n);
            break e;
          case 1:
            t = sp(null, t, r, e, n);
            break e;
          case 11:
            t = ap(null, t, r, e, n);
            break e;
          case 14:
            t = lp(null, t, r, Hn(r.type, e), n);
            break e;
        }
        throw Error(H(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Hn(r, o)),
        _f(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Hn(r, o)),
        sp(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Z0(t), e === null)) throw Error(H(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          k0(e, t),
          Ks(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Fi(Error(H(423)), t)), (t = up(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Fi(Error(H(424)), t)), (t = up(e, t, r, n, o));
            break e;
          } else
            for (
              pn = eo(t.stateNode.containerInfo.firstChild),
                gn = t,
                Xe = !0,
                Gn = null,
                n = x0(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Ti(), r === o)) {
            t = Ir(e, t, n);
            break e;
          }
          Xt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        P0(t),
        e === null && If(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = o.children),
        xf(r, o) ? (a = null) : i !== null && xf(r, i) && (t.flags |= 32),
        Y0(e, t),
        Xt(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && If(t), null;
    case 13:
      return J0(e, t, n);
    case 4:
      return (
        wv(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = _i(t, null, r, n)) : Xt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Hn(r, o)),
        ap(e, t, r, o, n)
      );
    case 7:
      return Xt(e, t, t.pendingProps, n), t.child;
    case 8:
      return Xt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Xt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (a = o.value),
          ze(Us, r._currentValue),
          (r._currentValue = a),
          i !== null)
        )
          if (Zn(i.value, a)) {
            if (i.children === o.children && !rn.current) {
              t = Ir(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                a = i.child;
                for (var s = l.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Cr(-1, n & -n)), (s.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (s.next = s)
                          : ((s.next = c.next), (c.next = s)),
                          (u.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Mf(i.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(H(341));
                (a.lanes |= n),
                  (l = a.alternate),
                  l !== null && (l.lanes |= n),
                  Mf(a, n, t),
                  (a = i.sibling);
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    (i.return = a.return), (a = i);
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        Xt(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Ri(t, n),
        (o = Tn(o)),
        (r = r(o)),
        (t.flags |= 1),
        Xt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Hn(r, t.pendingProps)),
        (o = Hn(r.type, o)),
        lp(e, t, r, o, n)
      );
    case 15:
      return X0(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Hn(r, o)),
        gs(e, t),
        (t.tag = 1),
        on(r) ? ((e = !0), Bs(t)) : (e = !1),
        Ri(t, n),
        K0(t, r, o),
        $f(t, r, o, n),
        Nf(null, t, r, !0, e, n)
      );
    case 19:
      return ey(e, t, n);
    case 22:
      return Q0(e, t, n);
  }
  throw Error(H(156, t.tag));
};
function hy(e, t) {
  return Hg(e, t);
}
function QC(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function On(e, t, n, r) {
  return new QC(e, t, n, r);
}
function Fv(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function YC(e) {
  if (typeof e == 'function') return Fv(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ev)) return 11;
    if (e === tv) return 14;
  }
  return 2;
}
function oo(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = On(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ws(e, t, n, r, o, i) {
  var a = 2;
  if (((r = e), typeof e == 'function')) Fv(e) && (a = 1);
  else if (typeof e == 'string') a = 5;
  else
    e: switch (e) {
      case ui:
        return Oo(n.children, o, i, t);
      case Jd:
        (a = 8), (o |= 8);
        break;
      case ef:
        return (
          (e = On(12, n, t, o | 2)), (e.elementType = ef), (e.lanes = i), e
        );
      case tf:
        return (e = On(13, n, t, o)), (e.elementType = tf), (e.lanes = i), e;
      case nf:
        return (e = On(19, n, t, o)), (e.elementType = nf), (e.lanes = i), e;
      case Pg:
        return xu(n, o, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Eg:
              a = 10;
              break e;
            case kg:
              a = 9;
              break e;
            case ev:
              a = 11;
              break e;
            case tv:
              a = 14;
              break e;
            case Dr:
              (a = 16), (r = null);
              break e;
          }
        throw Error(H(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = On(a, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Oo(e, t, n, r) {
  return (e = On(7, e, r, t)), (e.lanes = n), e;
}
function xu(e, t, n, r) {
  return (
    (e = On(22, e, r, t)),
    (e.elementType = Pg),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function $c(e, t, n) {
  return (e = On(6, e, null, t)), (e.lanes = n), e;
}
function Tc(e, t, n) {
  return (
    (t = On(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function ZC(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = dc(0)),
    (this.expirationTimes = dc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = dc(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Lv(e, t, n, r, o, i, a, l, s) {
  return (
    (e = new ZC(e, t, n, l, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = On(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Sv(i),
    e
  );
}
function JC(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: si,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function gy(e) {
  if (!e) return ao;
  e = e._reactInternals;
  e: {
    if (Do(e) !== e || e.tag !== 1) throw Error(H(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (on(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(H(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (on(n)) return g0(e, n, t);
  }
  return t;
}
function yy(e, t, n, r, o, i, a, l, s) {
  return (
    (e = Lv(n, r, !0, e, o, i, a, l, s)),
    (e.context = gy(null)),
    (n = e.current),
    (r = Qt()),
    (o = ro(n)),
    (i = Cr(r, o)),
    (i.callback = t ?? null),
    to(n, i, o),
    (e.current.lanes = o),
    gl(e, o, r),
    an(e, r),
    e
  );
}
function Eu(e, t, n, r) {
  var o = t.current,
    i = Qt(),
    a = ro(o);
  return (
    (n = gy(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Cr(i, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = to(o, t, a)),
    e !== null && (Xn(e, o, a, i), ms(e, o, a)),
    a
  );
}
function eu(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Sp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Av(e, t) {
  Sp(e, t), (e = e.alternate) && Sp(e, t);
}
function eb() {
  return null;
}
var Sy =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function zv(e) {
  this._internalRoot = e;
}
ku.prototype.render = zv.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(H(409));
  Eu(e, t, null, null);
};
ku.prototype.unmount = zv.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ao(function () {
      Eu(null, e, null, null);
    }),
      (t[Pr] = null);
  }
};
function ku(e) {
  this._internalRoot = e;
}
ku.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Qg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Vr.length && t !== 0 && t < Vr[n].priority; n++);
    Vr.splice(n, 0, e), n === 0 && Zg(e);
  }
};
function jv(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Pu(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function wp() {}
function tb(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var u = eu(a);
        i.call(u);
      };
    }
    var a = yy(t, r, e, 0, null, !1, !1, '', wp);
    return (
      (e._reactRootContainer = a),
      (e[Pr] = a.current),
      Ua(e.nodeType === 8 ? e.parentNode : e),
      Ao(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == 'function') {
    var l = r;
    r = function () {
      var u = eu(s);
      l.call(u);
    };
  }
  var s = Lv(e, 0, !1, null, null, !1, !1, '', wp);
  return (
    (e._reactRootContainer = s),
    (e[Pr] = s.current),
    Ua(e.nodeType === 8 ? e.parentNode : e),
    Ao(function () {
      Eu(t, s, n, r);
    }),
    s
  );
}
function Ru(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == 'function') {
      var l = o;
      o = function () {
        var s = eu(a);
        l.call(s);
      };
    }
    Eu(t, a, e, o);
  } else a = tb(n, t, e, o, r);
  return eu(a);
}
qg = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ga(t.pendingLanes);
        n !== 0 &&
          (ov(t, n | 1), an(t, st()), !(Se & 6) && ((Li = st() + 500), uo()));
      }
      break;
    case 13:
      Ao(function () {
        var r = Rr(e, 1);
        if (r !== null) {
          var o = Qt();
          Xn(r, e, 1, o);
        }
      }),
        Av(e, 1);
  }
};
iv = function (e) {
  if (e.tag === 13) {
    var t = Rr(e, 134217728);
    if (t !== null) {
      var n = Qt();
      Xn(t, e, 134217728, n);
    }
    Av(e, 134217728);
  }
};
Xg = function (e) {
  if (e.tag === 13) {
    var t = ro(e),
      n = Rr(e, t);
    if (n !== null) {
      var r = Qt();
      Xn(n, e, t, r);
    }
    Av(e, t);
  }
};
Qg = function () {
  return Ie;
};
Yg = function (e, t) {
  var n = Ie;
  try {
    return (Ie = e), t();
  } finally {
    Ie = n;
  }
};
vf = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((af(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = gu(r);
            if (!o) throw Error(H(90));
            Ig(r), af(r, o);
          }
        }
      }
      break;
    case 'textarea':
      Og(e, n);
      break;
    case 'select':
      (t = n.value), t != null && xi(e, !!n.multiple, t, !1);
  }
};
Ag = Tv;
zg = Ao;
var nb = { usingClientEntryPoint: !1, Events: [Sl, vi, gu, Fg, Lg, Tv] },
  sa = {
    findFiberByHostInstance: Eo,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  rb = {
    bundleType: sa.bundleType,
    version: sa.version,
    rendererPackageName: sa.rendererPackageName,
    rendererConfig: sa.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Mr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Bg(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: sa.findFiberByHostInstance || eb,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Ql = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ql.isDisabled && Ql.supportsFiber)
    try {
      (vu = Ql.inject(rb)), (dr = Ql);
    } catch {}
}
Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nb;
Cn.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!jv(t)) throw Error(H(200));
  return JC(e, t, null, n);
};
Cn.createRoot = function (e, t) {
  if (!jv(e)) throw Error(H(299));
  var n = !1,
    r = '',
    o = Sy;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Lv(e, 1, !1, null, null, n, !1, r, o)),
    (e[Pr] = t.current),
    Ua(e.nodeType === 8 ? e.parentNode : e),
    new zv(t)
  );
};
Cn.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(H(188))
      : ((e = Object.keys(e).join(',')), Error(H(268, e)));
  return (e = Bg(t)), (e = e === null ? null : e.stateNode), e;
};
Cn.flushSync = function (e) {
  return Ao(e);
};
Cn.hydrate = function (e, t, n) {
  if (!Pu(t)) throw Error(H(200));
  return Ru(null, e, t, !0, n);
};
Cn.hydrateRoot = function (e, t, n) {
  if (!jv(e)) throw Error(H(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    a = Sy;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = yy(t, null, e, 1, n ?? null, o, !1, i, a)),
    (e[Pr] = t.current),
    Ua(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new ku(t);
};
Cn.render = function (e, t, n) {
  if (!Pu(t)) throw Error(H(200));
  return Ru(null, e, t, !1, n);
};
Cn.unmountComponentAtNode = function (e) {
  if (!Pu(e)) throw Error(H(40));
  return e._reactRootContainer
    ? (Ao(function () {
        Ru(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Pr] = null);
        });
      }),
      !0)
    : !1;
};
Cn.unstable_batchedUpdates = Tv;
Cn.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Pu(n)) throw Error(H(200));
  if (e == null || e._reactInternals === void 0) throw Error(H(38));
  return Ru(e, t, n, !1, r);
};
Cn.version = '18.3.1-next-f1338f8080-20240426';
function wy() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wy);
    } catch (e) {
      console.error(e);
    }
}
wy(), (wg.exports = Cn);
var Cl = wg.exports;
const Cp = Wd(Cl);
var bp = Cl;
(Zc.createRoot = bp.createRoot), (Zc.hydrateRoot = bp.hydrateRoot);
/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ja() {
  return (
    (Ja = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ja.apply(this, arguments)
  );
}
var Kr;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(Kr || (Kr = {}));
const xp = 'popstate';
function ob(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: a, hash: l } = r.location;
    return Kf(
      '',
      { pathname: i, search: a, hash: l },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || 'default'
    );
  }
  function n(r, o) {
    return typeof o == 'string' ? o : by(o);
  }
  return ab(t, n, null, e);
}
function ht(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function Cy(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function ib() {
  return Math.random().toString(36).substr(2, 8);
}
function Ep(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Kf(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ja(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? Ki(t) : t,
      { state: n, key: (t && t.key) || r || ib() }
    )
  );
}
function by(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function Ki(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function ab(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    a = o.history,
    l = Kr.Pop,
    s = null,
    u = c();
  u == null && ((u = 0), a.replaceState(Ja({}, a.state, { idx: u }), ''));
  function c() {
    return (a.state || { idx: null }).idx;
  }
  function d() {
    l = Kr.Pop;
    let y = c(),
      p = y == null ? null : y - u;
    (u = y), s && s({ action: l, location: S.location, delta: p });
  }
  function v(y, p) {
    l = Kr.Push;
    let m = Kf(S.location, y, p);
    u = c() + 1;
    let h = Ep(m, u),
      C = S.createHref(m);
    try {
      a.pushState(h, '', C);
    } catch (b) {
      if (b instanceof DOMException && b.name === 'DataCloneError') throw b;
      o.location.assign(C);
    }
    i && s && s({ action: l, location: S.location, delta: 1 });
  }
  function w(y, p) {
    l = Kr.Replace;
    let m = Kf(S.location, y, p);
    u = c();
    let h = Ep(m, u),
      C = S.createHref(m);
    a.replaceState(h, '', C),
      i && s && s({ action: l, location: S.location, delta: 0 });
  }
  function g(y) {
    let p = o.location.origin !== 'null' ? o.location.origin : o.location.href,
      m = typeof y == 'string' ? y : by(y);
    return (
      (m = m.replace(/ $/, '%20')),
      ht(
        p,
        'No window.location.(origin|href) available to create URL for href: ' +
          m
      ),
      new URL(m, p)
    );
  }
  let S = {
    get action() {
      return l;
    },
    get location() {
      return e(o, a);
    },
    listen(y) {
      if (s) throw new Error('A history only accepts one active listener');
      return (
        o.addEventListener(xp, d),
        (s = y),
        () => {
          o.removeEventListener(xp, d), (s = null);
        }
      );
    },
    createHref(y) {
      return t(o, y);
    },
    createURL: g,
    encodeLocation(y) {
      let p = g(y);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: v,
    replace: w,
    go(y) {
      return a.go(y);
    },
  };
  return S;
}
var kp;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(kp || (kp = {}));
function lb(e, t, n) {
  return n === void 0 && (n = '/'), sb(e, t, n, !1);
}
function sb(e, t, n, r) {
  let o = typeof t == 'string' ? Ki(t) : t,
    i = ky(o.pathname || '/', n);
  if (i == null) return null;
  let a = xy(e);
  ub(a);
  let l = null;
  for (let s = 0; l == null && s < a.length; ++s) {
    let u = wb(i);
    l = yb(a[s], u, r);
  }
  return l;
}
function xy(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let o = (i, a, l) => {
    let s = {
      relativePath: l === void 0 ? i.path || '' : l,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: a,
      route: i,
    };
    s.relativePath.startsWith('/') &&
      (ht(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let u = $o([r, s.relativePath]),
      c = n.concat(s);
    i.children &&
      i.children.length > 0 &&
      (ht(
        i.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + u + '".')
      ),
      xy(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: hb(u, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, a) => {
      var l;
      if (i.path === '' || !((l = i.path) != null && l.includes('?'))) o(i, a);
      else for (let s of Ey(i.path)) o(i, a, s);
    }),
    t
  );
}
function Ey(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith('?'),
    i = n.replace(/\?$/, '');
  if (r.length === 0) return o ? [i, ''] : [i];
  let a = Ey(r.join('/')),
    l = [];
  return (
    l.push(...a.map((s) => (s === '' ? i : [i, s].join('/')))),
    o && l.push(...a),
    l.map((s) => (e.startsWith('/') && s === '' ? '/' : s))
  );
}
function ub(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : gb(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const cb = /^:[\w-]+$/,
  fb = 3,
  db = 2,
  vb = 1,
  mb = 10,
  pb = -2,
  Pp = (e) => e === '*';
function hb(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(Pp) && (r += pb),
    t && (r += db),
    n
      .filter((o) => !Pp(o))
      .reduce((o, i) => o + (cb.test(i) ? fb : i === '' ? vb : mb), r)
  );
}
function gb(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function yb(e, t, n) {
  let { routesMeta: r } = e,
    o = {},
    i = '/',
    a = [];
  for (let l = 0; l < r.length; ++l) {
    let s = r[l],
      u = l === r.length - 1,
      c = i === '/' ? t : t.slice(i.length) || '/',
      d = Rp(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: u },
        c
      ),
      v = s.route;
    if (
      (!d &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (d = Rp(
          { path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 },
          c
        )),
      !d)
    )
      return null;
    Object.assign(o, d.params),
      a.push({
        params: o,
        pathname: $o([i, d.pathname]),
        pathnameBase: Pb($o([i, d.pathnameBase])),
        route: v,
      }),
      d.pathnameBase !== '/' && (i = $o([i, d.pathnameBase]));
  }
  return a;
}
function Rp(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Sb(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    a = i.replace(/(.)\/+$/, '$1'),
    l = o.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      let { paramName: v, isOptional: w } = c;
      if (v === '*') {
        let S = l[d] || '';
        a = i.slice(0, i.length - S.length).replace(/(.)\/+$/, '$1');
      }
      const g = l[d];
      return (
        w && !g ? (u[v] = void 0) : (u[v] = (g || '').replace(/%2F/g, '/')), u
      );
    }, {}),
    pathname: i,
    pathnameBase: a,
    pattern: e,
  };
}
function Sb(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Cy(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    );
  let r = [],
    o =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (a, l, s) => (
            r.push({ paramName: l, isOptional: s != null }),
            s ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }),
        (o += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
        ? (o += '\\/*$')
        : e !== '' && e !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, t ? void 0 : 'i'), r]
  );
}
function wb(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      Cy(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    );
  }
}
function ky(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function Cb(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: o = '',
  } = typeof e == 'string' ? Ki(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : bb(n, t)) : t,
    search: Rb(r),
    hash: Ib(o),
  };
}
function bb(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((o) => {
      o === '..' ? n.length > 1 && n.pop() : o !== '.' && n.push(o);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function _c(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function xb(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Eb(e, t) {
  let n = xb(e);
  return t
    ? n.map((r, o) => (o === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function kb(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == 'string'
    ? (o = Ki(e))
    : ((o = Ja({}, e)),
      ht(
        !o.pathname || !o.pathname.includes('?'),
        _c('?', 'pathname', 'search', o)
      ),
      ht(
        !o.pathname || !o.pathname.includes('#'),
        _c('#', 'pathname', 'hash', o)
      ),
      ht(!o.search || !o.search.includes('#'), _c('#', 'search', 'hash', o)));
  let i = e === '' || o.pathname === '',
    a = i ? '/' : o.pathname,
    l;
  if (a == null) l = n;
  else {
    let d = t.length - 1;
    if (!r && a.startsWith('..')) {
      let v = a.split('/');
      for (; v[0] === '..'; ) v.shift(), (d -= 1);
      o.pathname = v.join('/');
    }
    l = d >= 0 ? t[d] : '/';
  }
  let s = Cb(o, l),
    u = a && a !== '/' && a.endsWith('/'),
    c = (i || a === '.') && n.endsWith('/');
  return !s.pathname.endsWith('/') && (u || c) && (s.pathname += '/'), s;
}
const $o = (e) => e.join('/').replace(/\/\/+/g, '/'),
  Pb = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Rb = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  Ib = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function Mb(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const Py = ['post', 'put', 'patch', 'delete'];
new Set(Py);
const Ob = ['get', ...Py];
new Set(Ob);
/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function el() {
  return (
    (el = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    el.apply(this, arguments)
  );
}
const Dv = f.createContext(null),
  $b = f.createContext(null),
  Iu = f.createContext(null),
  Mu = f.createContext(null),
  Gi = f.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Ry = f.createContext(null);
function Ou() {
  return f.useContext(Mu) != null;
}
function Bv() {
  return Ou() || ht(!1), f.useContext(Mu).location;
}
function Iy(e) {
  f.useContext(Iu).static || f.useLayoutEffect(e);
}
function Tb() {
  let { isDataRoute: e } = f.useContext(Gi);
  return e ? Wb() : _b();
}
function _b() {
  Ou() || ht(!1);
  let e = f.useContext(Dv),
    { basename: t, future: n, navigator: r } = f.useContext(Iu),
    { matches: o } = f.useContext(Gi),
    { pathname: i } = Bv(),
    a = JSON.stringify(Eb(o, n.v7_relativeSplatPath)),
    l = f.useRef(!1);
  return (
    Iy(() => {
      l.current = !0;
    }),
    f.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !l.current)) return;
        if (typeof u == 'number') {
          r.go(u);
          return;
        }
        let d = kb(u, JSON.parse(a), i, c.relative === 'path');
        e == null &&
          t !== '/' &&
          (d.pathname = d.pathname === '/' ? t : $o([t, d.pathname])),
          (c.replace ? r.replace : r.push)(d, c.state, c);
      },
      [t, r, a, i, e]
    )
  );
}
function Nb(e, t) {
  return Fb(e, t);
}
function Fb(e, t, n, r) {
  Ou() || ht(!1);
  let { navigator: o } = f.useContext(Iu),
    { matches: i } = f.useContext(Gi),
    a = i[i.length - 1],
    l = a ? a.params : {};
  a && a.pathname;
  let s = a ? a.pathnameBase : '/';
  a && a.route;
  let u = Bv(),
    c;
  if (t) {
    var d;
    let y = typeof t == 'string' ? Ki(t) : t;
    s === '/' || ((d = y.pathname) != null && d.startsWith(s)) || ht(!1),
      (c = y);
  } else c = u;
  let v = c.pathname || '/',
    w = v;
  if (s !== '/') {
    let y = s.replace(/^\//, '').split('/');
    w = '/' + v.replace(/^\//, '').split('/').slice(y.length).join('/');
  }
  let g = lb(e, { pathname: w }),
    S = Db(
      g &&
        g.map((y) =>
          Object.assign({}, y, {
            params: Object.assign({}, l, y.params),
            pathname: $o([
              s,
              o.encodeLocation
                ? o.encodeLocation(y.pathname).pathname
                : y.pathname,
            ]),
            pathnameBase:
              y.pathnameBase === '/'
                ? s
                : $o([
                    s,
                    o.encodeLocation
                      ? o.encodeLocation(y.pathnameBase).pathname
                      : y.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && S
    ? f.createElement(
        Mu.Provider,
        {
          value: {
            location: el(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              c
            ),
            navigationType: Kr.Pop,
          },
        },
        S
      )
    : S;
}
function Lb() {
  let e = Ub(),
    t = Mb(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
  return f.createElement(
    f.Fragment,
    null,
    f.createElement('h2', null, 'Unexpected Application Error!'),
    f.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? f.createElement('pre', { style: o }, n) : null,
    null
  );
}
const Ab = f.createElement(Lb, null);
class zb extends f.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      'React Router caught the following error during render',
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? f.createElement(
          Gi.Provider,
          { value: this.props.routeContext },
          f.createElement(Ry.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function jb(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = f.useContext(Dv);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    f.createElement(Gi.Provider, { value: t }, r)
  );
}
function Db(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let a = e,
    l = (o = n) == null ? void 0 : o.errors;
  if (l != null) {
    let c = a.findIndex(
      (d) => d.route.id && (l == null ? void 0 : l[d.route.id]) !== void 0
    );
    c >= 0 || ht(!1), (a = a.slice(0, Math.min(a.length, c + 1)));
  }
  let s = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < a.length; c++) {
      let d = a[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
        d.route.id)
      ) {
        let { loaderData: v, errors: w } = n,
          g =
            d.route.loader &&
            v[d.route.id] === void 0 &&
            (!w || w[d.route.id] === void 0);
        if (d.route.lazy || g) {
          (s = !0), u >= 0 ? (a = a.slice(0, u + 1)) : (a = [a[0]]);
          break;
        }
      }
    }
  return a.reduceRight((c, d, v) => {
    let w,
      g = !1,
      S = null,
      y = null;
    n &&
      ((w = l && d.route.id ? l[d.route.id] : void 0),
      (S = d.route.errorElement || Ab),
      s &&
        (u < 0 && v === 0
          ? ((g = !0), (y = null))
          : u === v &&
            ((g = !0), (y = d.route.hydrateFallbackElement || null))));
    let p = t.concat(a.slice(0, v + 1)),
      m = () => {
        let h;
        return (
          w
            ? (h = S)
            : g
              ? (h = y)
              : d.route.Component
                ? (h = f.createElement(d.route.Component, null))
                : d.route.element
                  ? (h = d.route.element)
                  : (h = c),
          f.createElement(jb, {
            match: d,
            routeContext: { outlet: c, matches: p, isDataRoute: n != null },
            children: h,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || v === 0)
      ? f.createElement(zb, {
          location: n.location,
          revalidation: n.revalidation,
          component: S,
          error: w,
          children: m(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : m();
  }, null);
}
var My = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(My || {}),
  tu = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    );
  })(tu || {});
function Bb(e) {
  let t = f.useContext(Dv);
  return t || ht(!1), t;
}
function Vb(e) {
  let t = f.useContext($b);
  return t || ht(!1), t;
}
function Hb(e) {
  let t = f.useContext(Gi);
  return t || ht(!1), t;
}
function Oy(e) {
  let t = Hb(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ht(!1), n.route.id;
}
function Ub() {
  var e;
  let t = f.useContext(Ry),
    n = Vb(tu.UseRouteError),
    r = Oy(tu.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Wb() {
  let { router: e } = Bb(My.UseNavigateStable),
    t = Oy(tu.UseNavigateStable),
    n = f.useRef(!1);
  return (
    Iy(() => {
      n.current = !0;
    }),
    f.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == 'number'
              ? e.navigate(o)
              : e.navigate(o, el({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
const Ip = {};
function Kb(e, t) {
  Ip[t] || ((Ip[t] = !0), console.warn(t));
}
const Mp = (e, t, n) =>
  Kb(
    e,
    '⚠️ React Router Future Flag Warning: ' +
      t +
      '. ' +
      ('You can use the `' + e + '` future flag to opt-in early. ') +
      ('For more information, see ' + n + '.')
  );
function Gb(e, t) {
  (e != null && e.v7_startTransition) ||
    Mp(
      'v7_startTransition',
      'React Router will begin wrapping state updates in `React.startTransition` in v7',
      'https://reactrouter.com/v6/upgrading/future#v7_starttransition'
    ),
    !(e != null && e.v7_relativeSplatPath) &&
      !t &&
      Mp(
        'v7_relativeSplatPath',
        'Relative route resolution within Splat routes is changing in v7',
        'https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath'
      );
}
function Cs(e) {
  ht(!1);
}
function qb(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: o = Kr.Pop,
    navigator: i,
    static: a = !1,
    future: l,
  } = e;
  Ou() && ht(!1);
  let s = t.replace(/^\/*/, '/'),
    u = f.useMemo(
      () => ({
        basename: s,
        navigator: i,
        static: a,
        future: el({ v7_relativeSplatPath: !1 }, l),
      }),
      [s, l, i, a]
    );
  typeof r == 'string' && (r = Ki(r));
  let {
      pathname: c = '/',
      search: d = '',
      hash: v = '',
      state: w = null,
      key: g = 'default',
    } = r,
    S = f.useMemo(() => {
      let y = ky(c, s);
      return y == null
        ? null
        : {
            location: { pathname: y, search: d, hash: v, state: w, key: g },
            navigationType: o,
          };
    }, [s, c, d, v, w, g, o]);
  return S == null
    ? null
    : f.createElement(
        Iu.Provider,
        { value: u },
        f.createElement(Mu.Provider, { children: n, value: S })
      );
}
function Xb(e) {
  let { children: t, location: n } = e;
  return Nb(Gf(t), n);
}
new Promise(() => {});
function Gf(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    f.Children.forEach(e, (r, o) => {
      if (!f.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === f.Fragment) {
        n.push.apply(n, Gf(r.props.children, i));
        return;
      }
      r.type !== Cs && ht(!1), !r.props.index || !r.props.children || ht(!1);
      let a = {
        id: r.props.id || i.join('-'),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (a.children = Gf(r.props.children, i)), n.push(a);
    }),
    n
  );
}
/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const Qb = '6';
try {
  window.__reactRouterVersion = Qb;
} catch {}
const Yb = 'startTransition',
  Op = hl[Yb];
function Zb(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = f.useRef();
  i.current == null && (i.current = ob({ window: o, v5Compat: !0 }));
  let a = i.current,
    [l, s] = f.useState({ action: a.action, location: a.location }),
    { v7_startTransition: u } = r || {},
    c = f.useCallback(
      (d) => {
        u && Op ? Op(() => s(d)) : s(d);
      },
      [s, u]
    );
  return (
    f.useLayoutEffect(() => a.listen(c), [a, c]),
    f.useEffect(() => Gb(r), [r]),
    f.createElement(qb, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: a,
      future: r,
    })
  );
}
var $p;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})($p || ($p = {}));
var Tp;
(function (e) {
  (e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(Tp || (Tp = {}));
var $y = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var i = '', a = 0; a < arguments.length; a++) {
        var l = arguments[a];
        l && (i = o(i, r(l)));
      }
      return i;
    }
    function r(i) {
      if (typeof i == 'string' || typeof i == 'number') return i;
      if (typeof i != 'object') return '';
      if (Array.isArray(i)) return n.apply(null, i);
      if (
        i.toString !== Object.prototype.toString &&
        !i.toString.toString().includes('[native code]')
      )
        return i.toString();
      var a = '';
      for (var l in i) t.call(i, l) && i[l] && (a = o(a, l));
      return a;
    }
    function o(i, a) {
      return a ? (i ? i + ' ' + a : i + a) : i;
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})($y);
var Jb = $y.exports;
const ue = Wd(Jb);
function ce() {
  return (
    (ce = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ce.apply(null, arguments)
  );
}
var Ty = { exports: {} },
  Me = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vv = Symbol.for('react.element'),
  Hv = Symbol.for('react.portal'),
  $u = Symbol.for('react.fragment'),
  Tu = Symbol.for('react.strict_mode'),
  _u = Symbol.for('react.profiler'),
  Nu = Symbol.for('react.provider'),
  Fu = Symbol.for('react.context'),
  ex = Symbol.for('react.server_context'),
  Lu = Symbol.for('react.forward_ref'),
  Au = Symbol.for('react.suspense'),
  zu = Symbol.for('react.suspense_list'),
  ju = Symbol.for('react.memo'),
  Du = Symbol.for('react.lazy'),
  tx = Symbol.for('react.offscreen'),
  _y;
_y = Symbol.for('react.module.reference');
function Fn(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Vv:
        switch (((e = e.type), e)) {
          case $u:
          case _u:
          case Tu:
          case Au:
          case zu:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case ex:
              case Fu:
              case Lu:
              case Du:
              case ju:
              case Nu:
                return e;
              default:
                return t;
            }
        }
      case Hv:
        return t;
    }
  }
}
Me.ContextConsumer = Fu;
Me.ContextProvider = Nu;
Me.Element = Vv;
Me.ForwardRef = Lu;
Me.Fragment = $u;
Me.Lazy = Du;
Me.Memo = ju;
Me.Portal = Hv;
Me.Profiler = _u;
Me.StrictMode = Tu;
Me.Suspense = Au;
Me.SuspenseList = zu;
Me.isAsyncMode = function () {
  return !1;
};
Me.isConcurrentMode = function () {
  return !1;
};
Me.isContextConsumer = function (e) {
  return Fn(e) === Fu;
};
Me.isContextProvider = function (e) {
  return Fn(e) === Nu;
};
Me.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Vv;
};
Me.isForwardRef = function (e) {
  return Fn(e) === Lu;
};
Me.isFragment = function (e) {
  return Fn(e) === $u;
};
Me.isLazy = function (e) {
  return Fn(e) === Du;
};
Me.isMemo = function (e) {
  return Fn(e) === ju;
};
Me.isPortal = function (e) {
  return Fn(e) === Hv;
};
Me.isProfiler = function (e) {
  return Fn(e) === _u;
};
Me.isStrictMode = function (e) {
  return Fn(e) === Tu;
};
Me.isSuspense = function (e) {
  return Fn(e) === Au;
};
Me.isSuspenseList = function (e) {
  return Fn(e) === zu;
};
Me.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === $u ||
    e === _u ||
    e === Tu ||
    e === Au ||
    e === zu ||
    e === tx ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Du ||
        e.$$typeof === ju ||
        e.$$typeof === Nu ||
        e.$$typeof === Fu ||
        e.$$typeof === Lu ||
        e.$$typeof === _y ||
        e.getModuleId !== void 0))
  );
};
Me.typeOf = Fn;
Ty.exports = Me;
var Oa = Ty.exports;
function zo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = [];
  return (
    ae.Children.forEach(e, function (r) {
      (r == null && !t.keepEmpty) ||
        (Array.isArray(r)
          ? (n = n.concat(zo(r)))
          : Oa.isFragment(r) && r.props
            ? (n = n.concat(zo(r.props.children, t)))
            : n.push(r));
    }),
    n
  );
}
var qf = {},
  nx = function (t) {};
function rx(e, t) {}
function ox(e, t) {}
function ix() {
  qf = {};
}
function Ny(e, t, n) {
  !t && !qf[n] && (e(!1, n), (qf[n] = !0));
}
function Yt(e, t) {
  Ny(rx, e, t);
}
function ax(e, t) {
  Ny(ox, e, t);
}
Yt.preMessage = nx;
Yt.resetWarned = ix;
Yt.noteOnce = ax;
function oe(e) {
  '@babel/helpers - typeof';
  return (
    (oe =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    oe(e)
  );
}
function lx(e, t) {
  if (oe(e) != 'object' || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || 'default');
    if (oe(r) != 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function Fy(e) {
  var t = lx(e, 'string');
  return oe(t) == 'symbol' ? t : t + '';
}
function $(e, t, n) {
  return (
    (t = Fy(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function _p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? _p(Object(n), !0).forEach(function (r) {
          $(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : _p(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function tl(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function sx(e) {
  return e && oe(e) === 'object' && tl(e.nativeElement)
    ? e.nativeElement
    : tl(e)
      ? e
      : null;
}
function bs(e) {
  var t = sx(e);
  if (t) return t;
  if (e instanceof ae.Component) {
    var n;
    return (n = Cp.findDOMNode) === null || n === void 0
      ? void 0
      : n.call(Cp, e);
  }
  return null;
}
function Bu(e, t, n) {
  var r = f.useRef({});
  return (
    (!('value' in r.current) || n(r.current.condition, t)) &&
      ((r.current.value = e()), (r.current.condition = t)),
    r.current.value
  );
}
var Uv = function (t, n) {
    typeof t == 'function'
      ? t(n)
      : oe(t) === 'object' && t && 'current' in t && (t.current = n);
  },
  Ly = function () {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    var o = n.filter(Boolean);
    return o.length <= 1
      ? o[0]
      : function (i) {
          n.forEach(function (a) {
            Uv(a, i);
          });
        };
  },
  Vu = function () {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Bu(
      function () {
        return Ly.apply(void 0, n);
      },
      n,
      function (o, i) {
        return (
          o.length !== i.length ||
          o.every(function (a, l) {
            return a !== i[l];
          })
        );
      }
    );
  },
  Hu = function (t) {
    var n,
      r,
      o = Oa.isMemo(t) ? t.type.type : t.type;
    return !(
      (typeof o == 'function' &&
        !((n = o.prototype) !== null && n !== void 0 && n.render) &&
        o.$$typeof !== Oa.ForwardRef) ||
      (typeof t == 'function' &&
        !((r = t.prototype) !== null && r !== void 0 && r.render) &&
        t.$$typeof !== Oa.ForwardRef)
    );
  };
function Np(e) {
  return f.isValidElement(e) && !Oa.isFragment(e);
}
Number(f.version.split('.')[0]) >= 19;
var Xf = f.createContext(null);
function ux(e) {
  var t = e.children,
    n = e.onBatchResize,
    r = f.useRef(0),
    o = f.useRef([]),
    i = f.useContext(Xf),
    a = f.useCallback(
      function (l, s, u) {
        r.current += 1;
        var c = r.current;
        o.current.push({ size: l, element: s, data: u }),
          Promise.resolve().then(function () {
            c === r.current && (n == null || n(o.current), (o.current = []));
          }),
          i == null || i(l, s, u);
      },
      [n, i]
    );
  return f.createElement(Xf.Provider, { value: a }, t);
}
var Ay = (function () {
    if (typeof Map < 'u') return Map;
    function e(t, n) {
      var r = -1;
      return (
        t.some(function (o, i) {
          return o[0] === n ? ((r = i), !0) : !1;
        }),
        r
      );
    }
    return (function () {
      function t() {
        this.__entries__ = [];
      }
      return (
        Object.defineProperty(t.prototype, 'size', {
          get: function () {
            return this.__entries__.length;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.get = function (n) {
          var r = e(this.__entries__, n),
            o = this.__entries__[r];
          return o && o[1];
        }),
        (t.prototype.set = function (n, r) {
          var o = e(this.__entries__, n);
          ~o ? (this.__entries__[o][1] = r) : this.__entries__.push([n, r]);
        }),
        (t.prototype.delete = function (n) {
          var r = this.__entries__,
            o = e(r, n);
          ~o && r.splice(o, 1);
        }),
        (t.prototype.has = function (n) {
          return !!~e(this.__entries__, n);
        }),
        (t.prototype.clear = function () {
          this.__entries__.splice(0);
        }),
        (t.prototype.forEach = function (n, r) {
          r === void 0 && (r = null);
          for (var o = 0, i = this.__entries__; o < i.length; o++) {
            var a = i[o];
            n.call(r, a[1], a[0]);
          }
        }),
        t
      );
    })();
  })(),
  Qf =
    typeof window < 'u' &&
    typeof document < 'u' &&
    window.document === document,
  nu = (function () {
    return typeof global < 'u' && global.Math === Math
      ? global
      : typeof self < 'u' && self.Math === Math
        ? self
        : typeof window < 'u' && window.Math === Math
          ? window
          : Function('return this')();
  })(),
  cx = (function () {
    return typeof requestAnimationFrame == 'function'
      ? requestAnimationFrame.bind(nu)
      : function (e) {
          return setTimeout(function () {
            return e(Date.now());
          }, 1e3 / 60);
        };
  })(),
  fx = 2;
function dx(e, t) {
  var n = !1,
    r = !1,
    o = 0;
  function i() {
    n && ((n = !1), e()), r && l();
  }
  function a() {
    cx(i);
  }
  function l() {
    var s = Date.now();
    if (n) {
      if (s - o < fx) return;
      r = !0;
    } else (n = !0), (r = !1), setTimeout(a, t);
    o = s;
  }
  return l;
}
var vx = 20,
  mx = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'],
  px = typeof MutationObserver < 'u',
  hx = (function () {
    function e() {
      (this.connected_ = !1),
        (this.mutationEventsAdded_ = !1),
        (this.mutationsObserver_ = null),
        (this.observers_ = []),
        (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
        (this.refresh = dx(this.refresh.bind(this), vx));
    }
    return (
      (e.prototype.addObserver = function (t) {
        ~this.observers_.indexOf(t) || this.observers_.push(t),
          this.connected_ || this.connect_();
      }),
      (e.prototype.removeObserver = function (t) {
        var n = this.observers_,
          r = n.indexOf(t);
        ~r && n.splice(r, 1),
          !n.length && this.connected_ && this.disconnect_();
      }),
      (e.prototype.refresh = function () {
        var t = this.updateObservers_();
        t && this.refresh();
      }),
      (e.prototype.updateObservers_ = function () {
        var t = this.observers_.filter(function (n) {
          return n.gatherActive(), n.hasActive();
        });
        return (
          t.forEach(function (n) {
            return n.broadcastActive();
          }),
          t.length > 0
        );
      }),
      (e.prototype.connect_ = function () {
        !Qf ||
          this.connected_ ||
          (document.addEventListener('transitionend', this.onTransitionEnd_),
          window.addEventListener('resize', this.refresh),
          px
            ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
              this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0,
              }))
            : (document.addEventListener('DOMSubtreeModified', this.refresh),
              (this.mutationEventsAdded_ = !0)),
          (this.connected_ = !0));
      }),
      (e.prototype.disconnect_ = function () {
        !Qf ||
          !this.connected_ ||
          (document.removeEventListener('transitionend', this.onTransitionEnd_),
          window.removeEventListener('resize', this.refresh),
          this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
          this.mutationEventsAdded_ &&
            document.removeEventListener('DOMSubtreeModified', this.refresh),
          (this.mutationsObserver_ = null),
          (this.mutationEventsAdded_ = !1),
          (this.connected_ = !1));
      }),
      (e.prototype.onTransitionEnd_ = function (t) {
        var n = t.propertyName,
          r = n === void 0 ? '' : n,
          o = mx.some(function (i) {
            return !!~r.indexOf(i);
          });
        o && this.refresh();
      }),
      (e.getInstance = function () {
        return this.instance_ || (this.instance_ = new e()), this.instance_;
      }),
      (e.instance_ = null),
      e
    );
  })(),
  zy = function (e, t) {
    for (var n = 0, r = Object.keys(t); n < r.length; n++) {
      var o = r[n];
      Object.defineProperty(e, o, {
        value: t[o],
        enumerable: !1,
        writable: !1,
        configurable: !0,
      });
    }
    return e;
  },
  Ai = function (e) {
    var t = e && e.ownerDocument && e.ownerDocument.defaultView;
    return t || nu;
  },
  jy = Uu(0, 0, 0, 0);
function ru(e) {
  return parseFloat(e) || 0;
}
function Fp(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return t.reduce(function (r, o) {
    var i = e['border-' + o + '-width'];
    return r + ru(i);
  }, 0);
}
function gx(e) {
  for (
    var t = ['top', 'right', 'bottom', 'left'], n = {}, r = 0, o = t;
    r < o.length;
    r++
  ) {
    var i = o[r],
      a = e['padding-' + i];
    n[i] = ru(a);
  }
  return n;
}
function yx(e) {
  var t = e.getBBox();
  return Uu(0, 0, t.width, t.height);
}
function Sx(e) {
  var t = e.clientWidth,
    n = e.clientHeight;
  if (!t && !n) return jy;
  var r = Ai(e).getComputedStyle(e),
    o = gx(r),
    i = o.left + o.right,
    a = o.top + o.bottom,
    l = ru(r.width),
    s = ru(r.height);
  if (
    (r.boxSizing === 'border-box' &&
      (Math.round(l + i) !== t && (l -= Fp(r, 'left', 'right') + i),
      Math.round(s + a) !== n && (s -= Fp(r, 'top', 'bottom') + a)),
    !Cx(e))
  ) {
    var u = Math.round(l + i) - t,
      c = Math.round(s + a) - n;
    Math.abs(u) !== 1 && (l -= u), Math.abs(c) !== 1 && (s -= c);
  }
  return Uu(o.left, o.top, l, s);
}
var wx = (function () {
  return typeof SVGGraphicsElement < 'u'
    ? function (e) {
        return e instanceof Ai(e).SVGGraphicsElement;
      }
    : function (e) {
        return e instanceof Ai(e).SVGElement && typeof e.getBBox == 'function';
      };
})();
function Cx(e) {
  return e === Ai(e).document.documentElement;
}
function bx(e) {
  return Qf ? (wx(e) ? yx(e) : Sx(e)) : jy;
}
function xx(e) {
  var t = e.x,
    n = e.y,
    r = e.width,
    o = e.height,
    i = typeof DOMRectReadOnly < 'u' ? DOMRectReadOnly : Object,
    a = Object.create(i.prototype);
  return (
    zy(a, {
      x: t,
      y: n,
      width: r,
      height: o,
      top: n,
      right: t + r,
      bottom: o + n,
      left: t,
    }),
    a
  );
}
function Uu(e, t, n, r) {
  return { x: e, y: t, width: n, height: r };
}
var Ex = (function () {
    function e(t) {
      (this.broadcastWidth = 0),
        (this.broadcastHeight = 0),
        (this.contentRect_ = Uu(0, 0, 0, 0)),
        (this.target = t);
    }
    return (
      (e.prototype.isActive = function () {
        var t = bx(this.target);
        return (
          (this.contentRect_ = t),
          t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
        );
      }),
      (e.prototype.broadcastRect = function () {
        var t = this.contentRect_;
        return (
          (this.broadcastWidth = t.width), (this.broadcastHeight = t.height), t
        );
      }),
      e
    );
  })(),
  kx = (function () {
    function e(t, n) {
      var r = xx(n);
      zy(this, { target: t, contentRect: r });
    }
    return e;
  })(),
  Px = (function () {
    function e(t, n, r) {
      if (
        ((this.activeObservations_ = []),
        (this.observations_ = new Ay()),
        typeof t != 'function')
      )
        throw new TypeError(
          'The callback provided as parameter 1 is not a function.'
        );
      (this.callback_ = t), (this.controller_ = n), (this.callbackCtx_ = r);
    }
    return (
      (e.prototype.observe = function (t) {
        if (!arguments.length)
          throw new TypeError('1 argument required, but only 0 present.');
        if (!(typeof Element > 'u' || !(Element instanceof Object))) {
          if (!(t instanceof Ai(t).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var n = this.observations_;
          n.has(t) ||
            (n.set(t, new Ex(t)),
            this.controller_.addObserver(this),
            this.controller_.refresh());
        }
      }),
      (e.prototype.unobserve = function (t) {
        if (!arguments.length)
          throw new TypeError('1 argument required, but only 0 present.');
        if (!(typeof Element > 'u' || !(Element instanceof Object))) {
          if (!(t instanceof Ai(t).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var n = this.observations_;
          n.has(t) &&
            (n.delete(t), n.size || this.controller_.removeObserver(this));
        }
      }),
      (e.prototype.disconnect = function () {
        this.clearActive(),
          this.observations_.clear(),
          this.controller_.removeObserver(this);
      }),
      (e.prototype.gatherActive = function () {
        var t = this;
        this.clearActive(),
          this.observations_.forEach(function (n) {
            n.isActive() && t.activeObservations_.push(n);
          });
      }),
      (e.prototype.broadcastActive = function () {
        if (this.hasActive()) {
          var t = this.callbackCtx_,
            n = this.activeObservations_.map(function (r) {
              return new kx(r.target, r.broadcastRect());
            });
          this.callback_.call(t, n, t), this.clearActive();
        }
      }),
      (e.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
      }),
      (e.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
      }),
      e
    );
  })(),
  Dy = typeof WeakMap < 'u' ? new WeakMap() : new Ay(),
  By = (function () {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError('Cannot call a class as a function.');
      if (!arguments.length)
        throw new TypeError('1 argument required, but only 0 present.');
      var n = hx.getInstance(),
        r = new Px(t, n, this);
      Dy.set(this, r);
    }
    return e;
  })();
['observe', 'unobserve', 'disconnect'].forEach(function (e) {
  By.prototype[e] = function () {
    var t;
    return (t = Dy.get(this))[e].apply(t, arguments);
  };
});
var Rx = (function () {
    return typeof nu.ResizeObserver < 'u' ? nu.ResizeObserver : By;
  })(),
  Gr = new Map();
function Ix(e) {
  e.forEach(function (t) {
    var n,
      r = t.target;
    (n = Gr.get(r)) === null ||
      n === void 0 ||
      n.forEach(function (o) {
        return o(r);
      });
  });
}
var Vy = new Rx(Ix);
function Mx(e, t) {
  Gr.has(e) || (Gr.set(e, new Set()), Vy.observe(e)), Gr.get(e).add(t);
}
function Ox(e, t) {
  Gr.has(e) &&
    (Gr.get(e).delete(t), Gr.get(e).size || (Vy.unobserve(e), Gr.delete(e)));
}
function At(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function Lp(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, Fy(r.key), r);
  }
}
function zt(e, t, n) {
  return (
    t && Lp(e.prototype, t),
    n && Lp(e, n),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
function nl(e, t) {
  return (
    (nl = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    nl(e, t)
  );
}
function co(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && nl(e, t);
}
function rl(e) {
  return (
    (rl = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    rl(e)
  );
}
function Wv() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (Wv = function () {
    return !!e;
  })();
}
function se(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function $x(e, t) {
  if (t && (oe(t) == 'object' || typeof t == 'function')) return t;
  if (t !== void 0)
    throw new TypeError(
      'Derived constructors may only return object or undefined'
    );
  return se(e);
}
function fo(e) {
  var t = Wv();
  return function () {
    var n,
      r = rl(e);
    if (t) {
      var o = rl(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else n = r.apply(this, arguments);
    return $x(this, n);
  };
}
var Tx = (function (e) {
  co(n, e);
  var t = fo(n);
  function n() {
    return At(this, n), t.apply(this, arguments);
  }
  return (
    zt(n, [
      {
        key: 'render',
        value: function () {
          return this.props.children;
        },
      },
    ]),
    n
  );
})(f.Component);
function _x(e, t) {
  var n = e.children,
    r = e.disabled,
    o = f.useRef(null),
    i = f.useRef(null),
    a = f.useContext(Xf),
    l = typeof n == 'function',
    s = l ? n(o) : n,
    u = f.useRef({ width: -1, height: -1, offsetWidth: -1, offsetHeight: -1 }),
    c = !l && f.isValidElement(s) && Hu(s),
    d = c ? s.ref : null,
    v = Vu(d, o),
    w = function () {
      var p;
      return (
        bs(o.current) ||
        (o.current && oe(o.current) === 'object'
          ? bs(
              (p = o.current) === null || p === void 0
                ? void 0
                : p.nativeElement
            )
          : null) ||
        bs(i.current)
      );
    };
  f.useImperativeHandle(t, function () {
    return w();
  });
  var g = f.useRef(e);
  g.current = e;
  var S = f.useCallback(function (y) {
    var p = g.current,
      m = p.onResize,
      h = p.data,
      C = y.getBoundingClientRect(),
      b = C.width,
      x = C.height,
      E = y.offsetWidth,
      P = y.offsetHeight,
      I = Math.floor(b),
      M = Math.floor(x);
    if (
      u.current.width !== I ||
      u.current.height !== M ||
      u.current.offsetWidth !== E ||
      u.current.offsetHeight !== P
    ) {
      var A = { width: I, height: M, offsetWidth: E, offsetHeight: P };
      u.current = A;
      var j = E === Math.round(b) ? b : E,
        L = P === Math.round(x) ? x : P,
        F = N(N({}, A), {}, { offsetWidth: j, offsetHeight: L });
      a == null || a(F, y, h),
        m &&
          Promise.resolve().then(function () {
            m(F, y);
          });
    }
  }, []);
  return (
    f.useEffect(
      function () {
        var y = w();
        return (
          y && !r && Mx(y, S),
          function () {
            return Ox(y, S);
          }
        );
      },
      [o.current, r]
    ),
    f.createElement(Tx, { ref: i }, c ? f.cloneElement(s, { ref: v }) : s)
  );
}
var Nx = f.forwardRef(_x),
  Fx = 'rc-observer-key';
function Lx(e, t) {
  var n = e.children,
    r = typeof n == 'function' ? [n] : zo(n);
  return r.map(function (o, i) {
    var a = (o == null ? void 0 : o.key) || ''.concat(Fx, '-').concat(i);
    return f.createElement(
      Nx,
      ce({}, e, { key: a, ref: i === 0 ? t : void 0 }),
      o
    );
  });
}
var bl = f.forwardRef(Lx);
bl.Collection = ux;
function vo(e, t) {
  var n = Object.assign({}, e);
  return (
    Array.isArray(t) &&
      t.forEach(function (r) {
        delete n[r];
      }),
    n
  );
}
function Yf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Ax(e) {
  if (Array.isArray(e)) return Yf(e);
}
function Hy(e) {
  if (
    (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function Kv(e, t) {
  if (e) {
    if (typeof e == 'string') return Yf(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set'
        ? Array.from(e)
        : n === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Yf(e, t)
          : void 0
    );
  }
}
function zx() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Z(e) {
  return Ax(e) || Hy(e) || Kv(e) || zx();
}
var Uy = function (t) {
    return +setTimeout(t, 16);
  },
  Wy = function (t) {
    return clearTimeout(t);
  };
typeof window < 'u' &&
  'requestAnimationFrame' in window &&
  ((Uy = function (t) {
    return window.requestAnimationFrame(t);
  }),
  (Wy = function (t) {
    return window.cancelAnimationFrame(t);
  }));
var Ap = 0,
  Gv = new Map();
function Ky(e) {
  Gv.delete(e);
}
var br = function (t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Ap += 1;
  var r = Ap;
  function o(i) {
    if (i === 0) Ky(r), t();
    else {
      var a = Uy(function () {
        o(i - 1);
      });
      Gv.set(r, a);
    }
  }
  return o(n), r;
};
br.cancel = function (e) {
  var t = Gv.get(e);
  return Ky(e), Wy(t);
};
function Gy(e) {
  if (Array.isArray(e)) return e;
}
function jx(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (n != null) {
    var r,
      o,
      i,
      a,
      l = [],
      s = !0,
      u = !1;
    try {
      if (((i = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        s = !1;
      } else
        for (
          ;
          !(s = (r = i.call(n)).done) && (l.push(r.value), l.length !== t);
          s = !0
        );
    } catch (c) {
      (u = !0), (o = c);
    } finally {
      try {
        if (!s && n.return != null && ((a = n.return()), Object(a) !== a))
          return;
      } finally {
        if (u) throw o;
      }
    }
    return l;
  }
}
function qy() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function V(e, t) {
  return Gy(e) || jx(e, t) || Kv(e, t) || qy();
}
function ol(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
function Sn() {
  return !!(
    typeof window < 'u' &&
    window.document &&
    window.document.createElement
  );
}
function Dx(e, t) {
  if (!e) return !1;
  if (e.contains) return e.contains(t);
  for (var n = t; n; ) {
    if (n === e) return !0;
    n = n.parentNode;
  }
  return !1;
}
var zp = 'data-rc-order',
  jp = 'data-rc-priority',
  Bx = 'rc-util-key',
  Zf = new Map();
function Xy() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = e.mark;
  return t ? (t.startsWith('data-') ? t : 'data-'.concat(t)) : Bx;
}
function Wu(e) {
  if (e.attachTo) return e.attachTo;
  var t = document.querySelector('head');
  return t || document.body;
}
function Vx(e) {
  return e === 'queue' ? 'prependQueue' : e ? 'prepend' : 'append';
}
function qv(e) {
  return Array.from((Zf.get(e) || e).children).filter(function (t) {
    return t.tagName === 'STYLE';
  });
}
function Qy(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Sn()) return null;
  var n = t.csp,
    r = t.prepend,
    o = t.priority,
    i = o === void 0 ? 0 : o,
    a = Vx(r),
    l = a === 'prependQueue',
    s = document.createElement('style');
  s.setAttribute(zp, a),
    l && i && s.setAttribute(jp, ''.concat(i)),
    n != null && n.nonce && (s.nonce = n == null ? void 0 : n.nonce),
    (s.innerHTML = e);
  var u = Wu(t),
    c = u.firstChild;
  if (r) {
    if (l) {
      var d = (t.styles || qv(u)).filter(function (v) {
        if (!['prepend', 'prependQueue'].includes(v.getAttribute(zp)))
          return !1;
        var w = Number(v.getAttribute(jp) || 0);
        return i >= w;
      });
      if (d.length) return u.insertBefore(s, d[d.length - 1].nextSibling), s;
    }
    u.insertBefore(s, c);
  } else u.appendChild(s);
  return s;
}
function Yy(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = Wu(t);
  return (t.styles || qv(n)).find(function (r) {
    return r.getAttribute(Xy(t)) === e;
  });
}
function il(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = Yy(e, t);
  if (n) {
    var r = Wu(t);
    r.removeChild(n);
  }
}
function Hx(e, t) {
  var n = Zf.get(e);
  if (!n || !Dx(document, n)) {
    var r = Qy('', t),
      o = r.parentNode;
    Zf.set(e, o), e.removeChild(r);
  }
}
function xr(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = Wu(n),
    o = qv(r),
    i = N(N({}, n), {}, { styles: o });
  Hx(r, i);
  var a = Yy(t, i);
  if (a) {
    var l, s;
    if (
      (l = i.csp) !== null &&
      l !== void 0 &&
      l.nonce &&
      a.nonce !== ((s = i.csp) === null || s === void 0 ? void 0 : s.nonce)
    ) {
      var u;
      a.nonce = (u = i.csp) === null || u === void 0 ? void 0 : u.nonce;
    }
    return a.innerHTML !== e && (a.innerHTML = e), a;
  }
  var c = Qy(e, i);
  return c.setAttribute(Xy(i), t), c;
}
function Ux(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.includes(r)) continue;
      n[r] = e[r];
    }
  return n;
}
function je(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = Ux(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      (n = i[r]),
        t.includes(n) || ({}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function al(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
    r = new Set();
  function o(i, a) {
    var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      s = r.has(i);
    if ((Yt(!s, 'Warning: There may be circular references'), s)) return !1;
    if (i === a) return !0;
    if (n && l > 1) return !1;
    r.add(i);
    var u = l + 1;
    if (Array.isArray(i)) {
      if (!Array.isArray(a) || i.length !== a.length) return !1;
      for (var c = 0; c < i.length; c++) if (!o(i[c], a[c], u)) return !1;
      return !0;
    }
    if (i && a && oe(i) === 'object' && oe(a) === 'object') {
      var d = Object.keys(i);
      return d.length !== Object.keys(a).length
        ? !1
        : d.every(function (v) {
            return o(i[v], a[v], u);
          });
    }
    return !1;
  }
  return o(e, t);
}
var Wx = '%';
function Jf(e) {
  return e.join(Wx);
}
var Kx = (function () {
    function e(t) {
      At(this, e),
        $(this, 'instanceId', void 0),
        $(this, 'cache', new Map()),
        (this.instanceId = t);
    }
    return (
      zt(e, [
        {
          key: 'get',
          value: function (n) {
            return this.opGet(Jf(n));
          },
        },
        {
          key: 'opGet',
          value: function (n) {
            return this.cache.get(n) || null;
          },
        },
        {
          key: 'update',
          value: function (n, r) {
            return this.opUpdate(Jf(n), r);
          },
        },
        {
          key: 'opUpdate',
          value: function (n, r) {
            var o = this.cache.get(n),
              i = r(o);
            i === null ? this.cache.delete(n) : this.cache.set(n, i);
          },
        },
      ]),
      e
    );
  })(),
  zi = 'data-token-hash',
  Qn = 'data-css-hash',
  qr = '__cssinjs_instance__';
function Gx() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < 'u' && document.head && document.body) {
    var t = document.body.querySelectorAll('style['.concat(Qn, ']')) || [],
      n = document.head.firstChild;
    Array.from(t).forEach(function (o) {
      (o[qr] = o[qr] || e), o[qr] === e && document.head.insertBefore(o, n);
    });
    var r = {};
    Array.from(document.querySelectorAll('style['.concat(Qn, ']'))).forEach(
      function (o) {
        var i = o.getAttribute(Qn);
        if (r[i]) {
          if (o[qr] === e) {
            var a;
            (a = o.parentNode) === null || a === void 0 || a.removeChild(o);
          }
        } else r[i] = !0;
      }
    );
  }
  return new Kx(e);
}
var Ku = f.createContext({
  hashPriority: 'low',
  cache: Gx(),
  defaultCache: !0,
});
function qx(e, t) {
  if (e.length !== t.length) return !1;
  for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
var Xv = (function () {
  function e() {
    At(this, e),
      $(this, 'cache', void 0),
      $(this, 'keys', void 0),
      $(this, 'cacheCallTimes', void 0),
      (this.cache = new Map()),
      (this.keys = []),
      (this.cacheCallTimes = 0);
  }
  return (
    zt(e, [
      {
        key: 'size',
        value: function () {
          return this.keys.length;
        },
      },
      {
        key: 'internalGet',
        value: function (n) {
          var r,
            o,
            i =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : !1,
            a = { map: this.cache };
          return (
            n.forEach(function (l) {
              if (!a) a = void 0;
              else {
                var s;
                a =
                  (s = a) === null ||
                  s === void 0 ||
                  (s = s.map) === null ||
                  s === void 0
                    ? void 0
                    : s.get(l);
              }
            }),
            (r = a) !== null &&
              r !== void 0 &&
              r.value &&
              i &&
              (a.value[1] = this.cacheCallTimes++),
            (o = a) === null || o === void 0 ? void 0 : o.value
          );
        },
      },
      {
        key: 'get',
        value: function (n) {
          var r;
          return (r = this.internalGet(n, !0)) === null || r === void 0
            ? void 0
            : r[0];
        },
      },
      {
        key: 'has',
        value: function (n) {
          return !!this.internalGet(n);
        },
      },
      {
        key: 'set',
        value: function (n, r) {
          var o = this;
          if (!this.has(n)) {
            if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
              var i = this.keys.reduce(
                  function (u, c) {
                    var d = V(u, 2),
                      v = d[1];
                    return o.internalGet(c)[1] < v
                      ? [c, o.internalGet(c)[1]]
                      : u;
                  },
                  [this.keys[0], this.cacheCallTimes]
                ),
                a = V(i, 1),
                l = a[0];
              this.delete(l);
            }
            this.keys.push(n);
          }
          var s = this.cache;
          n.forEach(function (u, c) {
            if (c === n.length - 1)
              s.set(u, { value: [r, o.cacheCallTimes++] });
            else {
              var d = s.get(u);
              d ? d.map || (d.map = new Map()) : s.set(u, { map: new Map() }),
                (s = s.get(u).map);
            }
          });
        },
      },
      {
        key: 'deleteByPath',
        value: function (n, r) {
          var o = n.get(r[0]);
          if (r.length === 1) {
            var i;
            return (
              o.map ? n.set(r[0], { map: o.map }) : n.delete(r[0]),
              (i = o.value) === null || i === void 0 ? void 0 : i[0]
            );
          }
          var a = this.deleteByPath(o.map, r.slice(1));
          return (!o.map || o.map.size === 0) && !o.value && n.delete(r[0]), a;
        },
      },
      {
        key: 'delete',
        value: function (n) {
          if (this.has(n))
            return (
              (this.keys = this.keys.filter(function (r) {
                return !qx(r, n);
              })),
              this.deleteByPath(this.cache, n)
            );
        },
      },
    ]),
    e
  );
})();
$(Xv, 'MAX_CACHE_SIZE', 20);
$(Xv, 'MAX_CACHE_OFFSET', 5);
var Dp = 0,
  Zy = (function () {
    function e(t) {
      At(this, e),
        $(this, 'derivatives', void 0),
        $(this, 'id', void 0),
        (this.derivatives = Array.isArray(t) ? t : [t]),
        (this.id = Dp),
        t.length === 0 && (t.length > 0, void 0),
        (Dp += 1);
    }
    return (
      zt(e, [
        {
          key: 'getDerivativeToken',
          value: function (n) {
            return this.derivatives.reduce(
              function (r, o) {
                return o(n, r);
              },
              void 0
            );
          },
        },
      ]),
      e
    );
  })(),
  Nc = new Xv();
function ed(e) {
  var t = Array.isArray(e) ? e : [e];
  return Nc.has(t) || Nc.set(t, new Zy(t)), Nc.get(t);
}
var Xx = new WeakMap(),
  Fc = {};
function Qx(e, t) {
  for (var n = Xx, r = 0; r < t.length; r += 1) {
    var o = t[r];
    n.has(o) || n.set(o, new WeakMap()), (n = n.get(o));
  }
  return n.has(Fc) || n.set(Fc, e()), n.get(Fc);
}
var Bp = new WeakMap();
function $a(e) {
  var t = Bp.get(e) || '';
  return (
    t ||
      (Object.keys(e).forEach(function (n) {
        var r = e[n];
        (t += n),
          r instanceof Zy
            ? (t += r.id)
            : r && oe(r) === 'object'
              ? (t += $a(r))
              : (t += r);
      }),
      (t = ol(t)),
      Bp.set(e, t)),
    t
  );
}
function Vp(e, t) {
  return ol(''.concat(t, '_').concat($a(e)));
}
var td = Sn();
function pe(e) {
  return typeof e == 'number' ? ''.concat(e, 'px') : e;
}
function ou(e, t, n) {
  var r,
    o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
    i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (i) return e;
  var a = N(N({}, o), {}, ((r = {}), $(r, zi, t), $(r, Qn, n), r)),
    l = Object.keys(a)
      .map(function (s) {
        var u = a[s];
        return u ? ''.concat(s, '="').concat(u, '"') : null;
      })
      .filter(function (s) {
        return s;
      })
      .join(' ');
  return '<style '.concat(l, '>').concat(e, '</style>');
}
var xs = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    return '--'
      .concat(n ? ''.concat(n, '-') : '')
      .concat(t)
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, '$1-$2')
      .replace(/([a-z])([A-Z0-9])/g, '$1-$2')
      .toLowerCase();
  },
  Yx = function (t, n, r) {
    return Object.keys(t).length
      ? '.'
          .concat(n)
          .concat(r != null && r.scope ? '.'.concat(r.scope) : '', '{')
          .concat(
            Object.entries(t)
              .map(function (o) {
                var i = V(o, 2),
                  a = i[0],
                  l = i[1];
                return ''.concat(a, ':').concat(l, ';');
              })
              .join(''),
            '}'
          )
      : '';
  },
  Jy = function (t, n, r) {
    var o = {},
      i = {};
    return (
      Object.entries(t).forEach(function (a) {
        var l,
          s,
          u = V(a, 2),
          c = u[0],
          d = u[1];
        if (r != null && (l = r.preserve) !== null && l !== void 0 && l[c])
          i[c] = d;
        else if (
          (typeof d == 'string' || typeof d == 'number') &&
          !(r != null && (s = r.ignore) !== null && s !== void 0 && s[c])
        ) {
          var v,
            w = xs(c, r == null ? void 0 : r.prefix);
          (o[w] =
            typeof d == 'number' &&
            !(r != null && (v = r.unitless) !== null && v !== void 0 && v[c])
              ? ''.concat(d, 'px')
              : String(d)),
            (i[c] = 'var('.concat(w, ')'));
        }
      }),
      [i, Yx(o, n, { scope: r == null ? void 0 : r.scope })]
    );
  },
  Hp = Sn() ? f.useLayoutEffect : f.useEffect,
  Wt = function (t, n) {
    var r = f.useRef(!0);
    Hp(function () {
      return t(r.current);
    }, n),
      Hp(function () {
        return (
          (r.current = !1),
          function () {
            r.current = !0;
          }
        );
      }, []);
  },
  Up = function (t, n) {
    Wt(function (r) {
      if (!r) return t();
    }, n);
  },
  Zx = N({}, hl),
  Wp = Zx.useInsertionEffect,
  Jx = function (t, n, r) {
    f.useMemo(t, r),
      Wt(function () {
        return n(!0);
      }, r);
  },
  eE = Wp
    ? function (e, t, n) {
        return Wp(function () {
          return e(), t();
        }, n);
      }
    : Jx,
  tE = N({}, hl),
  nE = tE.useInsertionEffect,
  rE = function (t) {
    var n = [],
      r = !1;
    function o(i) {
      r || n.push(i);
    }
    return (
      f.useEffect(function () {
        return (
          (r = !1),
          function () {
            (r = !0),
              n.length &&
                n.forEach(function (i) {
                  return i();
                });
          }
        );
      }, t),
      o
    );
  },
  oE = function () {
    return function (t) {
      t();
    };
  },
  iE = typeof nE < 'u' ? rE : oE;
function Qv(e, t, n, r, o) {
  var i = f.useContext(Ku),
    a = i.cache,
    l = [e].concat(Z(t)),
    s = Jf(l),
    u = iE([s]),
    c = function (g) {
      a.opUpdate(s, function (S) {
        var y = S || [void 0, void 0],
          p = V(y, 2),
          m = p[0],
          h = m === void 0 ? 0 : m,
          C = p[1],
          b = C,
          x = b || n(),
          E = [h, x];
        return g ? g(E) : E;
      });
    };
  f.useMemo(
    function () {
      c();
    },
    [s]
  );
  var d = a.opGet(s),
    v = d[1];
  return (
    eE(
      function () {
        o == null || o(v);
      },
      function (w) {
        return (
          c(function (g) {
            var S = V(g, 2),
              y = S[0],
              p = S[1];
            return w && y === 0 && (o == null || o(v)), [y + 1, p];
          }),
          function () {
            a.opUpdate(s, function (g) {
              var S = g || [],
                y = V(S, 2),
                p = y[0],
                m = p === void 0 ? 0 : p,
                h = y[1],
                C = m - 1;
              return C === 0
                ? (u(function () {
                    (w || !a.opGet(s)) && (r == null || r(h, !1));
                  }),
                  null)
                : [m - 1, h];
            });
          }
        );
      },
      [s]
    ),
    v
  );
}
var aE = {},
  lE = 'css',
  xo = new Map();
function sE(e) {
  xo.set(e, (xo.get(e) || 0) + 1);
}
function uE(e, t) {
  if (typeof document < 'u') {
    var n = document.querySelectorAll(
      'style['.concat(zi, '="').concat(e, '"]')
    );
    n.forEach(function (r) {
      if (r[qr] === t) {
        var o;
        (o = r.parentNode) === null || o === void 0 || o.removeChild(r);
      }
    });
  }
}
var cE = 0;
function fE(e, t) {
  xo.set(e, (xo.get(e) || 0) - 1);
  var n = Array.from(xo.keys()),
    r = n.filter(function (o) {
      var i = xo.get(o) || 0;
      return i <= 0;
    });
  n.length - r.length > cE &&
    r.forEach(function (o) {
      uE(o, t), xo.delete(o);
    });
}
var dE = function (t, n, r, o) {
    var i = r.getDerivativeToken(t),
      a = N(N({}, i), n);
    return o && (a = o(a)), a;
  },
  e1 = 'token';
function vE(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = f.useContext(Ku),
    o = r.cache.instanceId,
    i = r.container,
    a = n.salt,
    l = a === void 0 ? '' : a,
    s = n.override,
    u = s === void 0 ? aE : s,
    c = n.formatToken,
    d = n.getComputedToken,
    v = n.cssVar,
    w = Qx(function () {
      return Object.assign.apply(Object, [{}].concat(Z(t)));
    }, t),
    g = $a(w),
    S = $a(u),
    y = v ? $a(v) : '',
    p = Qv(
      e1,
      [l, e.id, g, S, y],
      function () {
        var m,
          h = d ? d(w, u, e) : dE(w, u, e, c),
          C = N({}, h),
          b = '';
        if (v) {
          var x = Jy(h, v.key, {
              prefix: v.prefix,
              ignore: v.ignore,
              unitless: v.unitless,
              preserve: v.preserve,
            }),
            E = V(x, 2);
          (h = E[0]), (b = E[1]);
        }
        var P = Vp(h, l);
        (h._tokenKey = P), (C._tokenKey = Vp(C, l));
        var I =
          (m = v == null ? void 0 : v.key) !== null && m !== void 0 ? m : P;
        (h._themeKey = I), sE(I);
        var M = ''.concat(lE, '-').concat(ol(P));
        return (
          (h._hashId = M), [h, M, C, b, (v == null ? void 0 : v.key) || '']
        );
      },
      function (m) {
        fE(m[0]._themeKey, o);
      },
      function (m) {
        var h = V(m, 4),
          C = h[0],
          b = h[3];
        if (v && b) {
          var x = xr(b, ol('css-variables-'.concat(C._themeKey)), {
            mark: Qn,
            prepend: 'queue',
            attachTo: i,
            priority: -999,
          });
          (x[qr] = o), x.setAttribute(zi, C._themeKey);
        }
      }
    );
  return p;
}
var mE = function (t, n, r) {
    var o = V(t, 5),
      i = o[2],
      a = o[3],
      l = o[4],
      s = r || {},
      u = s.plain;
    if (!a) return null;
    var c = i._tokenKey,
      d = -999,
      v = { 'data-rc-order': 'prependQueue', 'data-rc-priority': ''.concat(d) },
      w = ou(a, l, c, v, u);
    return [d, c, w];
  },
  pE = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  t1 = 'comm',
  n1 = 'rule',
  r1 = 'decl',
  hE = '@import',
  gE = '@keyframes',
  yE = '@layer',
  o1 = Math.abs,
  Yv = String.fromCharCode;
function i1(e) {
  return e.trim();
}
function Es(e, t, n) {
  return e.replace(t, n);
}
function SE(e, t, n) {
  return e.indexOf(t, n);
}
function ll(e, t) {
  return e.charCodeAt(t) | 0;
}
function ji(e, t, n) {
  return e.slice(t, n);
}
function ur(e) {
  return e.length;
}
function wE(e) {
  return e.length;
}
function Yl(e, t) {
  return t.push(e), e;
}
var Gu = 1,
  Di = 1,
  a1 = 0,
  Nn = 0,
  ut = 0,
  qi = '';
function Zv(e, t, n, r, o, i, a, l) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: Gu,
    column: Di,
    length: a,
    return: '',
    siblings: l,
  };
}
function CE() {
  return ut;
}
function bE() {
  return (
    (ut = Nn > 0 ? ll(qi, --Nn) : 0), Di--, ut === 10 && ((Di = 1), Gu--), ut
  );
}
function Yn() {
  return (
    (ut = Nn < a1 ? ll(qi, Nn++) : 0), Di++, ut === 10 && ((Di = 1), Gu++), ut
  );
}
function Xr() {
  return ll(qi, Nn);
}
function ks() {
  return Nn;
}
function qu(e, t) {
  return ji(qi, e, t);
}
function sl(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function xE(e) {
  return (Gu = Di = 1), (a1 = ur((qi = e))), (Nn = 0), [];
}
function EE(e) {
  return (qi = ''), e;
}
function Lc(e) {
  return i1(qu(Nn - 1, nd(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function kE(e) {
  for (; (ut = Xr()) && ut < 33; ) Yn();
  return sl(e) > 2 || sl(ut) > 3 ? '' : ' ';
}
function PE(e, t) {
  for (
    ;
    --t &&
    Yn() &&
    !(ut < 48 || ut > 102 || (ut > 57 && ut < 65) || (ut > 70 && ut < 97));

  );
  return qu(e, ks() + (t < 6 && Xr() == 32 && Yn() == 32));
}
function nd(e) {
  for (; Yn(); )
    switch (ut) {
      case e:
        return Nn;
      case 34:
      case 39:
        e !== 34 && e !== 39 && nd(ut);
        break;
      case 40:
        e === 41 && nd(e);
        break;
      case 92:
        Yn();
        break;
    }
  return Nn;
}
function RE(e, t) {
  for (; Yn() && e + ut !== 57; ) if (e + ut === 84 && Xr() === 47) break;
  return '/*' + qu(t, Nn - 1) + '*' + Yv(e === 47 ? e : Yn());
}
function IE(e) {
  for (; !sl(Xr()); ) Yn();
  return qu(e, Nn);
}
function ME(e) {
  return EE(Ps('', null, null, null, [''], (e = xE(e)), 0, [0], e));
}
function Ps(e, t, n, r, o, i, a, l, s) {
  for (
    var u = 0,
      c = 0,
      d = a,
      v = 0,
      w = 0,
      g = 0,
      S = 1,
      y = 1,
      p = 1,
      m = 0,
      h = '',
      C = o,
      b = i,
      x = r,
      E = h;
    y;

  )
    switch (((g = m), (m = Yn()))) {
      case 40:
        if (g != 108 && ll(E, d - 1) == 58) {
          SE((E += Es(Lc(m), '&', '&\f')), '&\f', o1(u ? l[u - 1] : 0)) != -1 &&
            (p = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += Lc(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += kE(g);
        break;
      case 92:
        E += PE(ks() - 1, 7);
        continue;
      case 47:
        switch (Xr()) {
          case 42:
          case 47:
            Yl(OE(RE(Yn(), ks()), t, n, s), s),
              (sl(g || 1) == 5 || sl(Xr() || 1) == 5) &&
                ur(E) &&
                ji(E, -1, void 0) !== ' ' &&
                (E += ' ');
            break;
          default:
            E += '/';
        }
        break;
      case 123 * S:
        l[u++] = ur(E) * p;
      case 125 * S:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            y = 0;
          case 59 + c:
            p == -1 && (E = Es(E, /\f/g, '')),
              w > 0 &&
                (ur(E) - d || (S === 0 && g === 47)) &&
                Yl(
                  w > 32
                    ? Gp(E + ';', r, n, d - 1, s)
                    : Gp(Es(E, ' ', '') + ';', r, n, d - 2, s),
                  s
                );
            break;
          case 59:
            E += ';';
          default:
            if (
              (Yl(
                (x = Kp(E, t, n, u, c, o, l, h, (C = []), (b = []), d, i)),
                i
              ),
              m === 123)
            )
              if (c === 0) Ps(E, t, x, x, C, i, d, l, b);
              else
                switch (v === 99 && ll(E, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ps(
                      e,
                      x,
                      x,
                      r && Yl(Kp(e, x, x, 0, 0, o, l, h, o, (C = []), d, b), b),
                      o,
                      b,
                      d,
                      l,
                      r ? C : b
                    );
                    break;
                  default:
                    Ps(E, x, x, x, [''], b, 0, l, b);
                }
        }
        (u = c = w = 0), (S = p = 1), (h = E = ''), (d = a);
        break;
      case 58:
        (d = 1 + ur(E)), (w = g);
      default:
        if (S < 1) {
          if (m == 123) --S;
          else if (m == 125 && S++ == 0 && bE() == 125) continue;
        }
        switch (((E += Yv(m)), m * S)) {
          case 38:
            p = c > 0 ? 1 : ((E += '\f'), -1);
            break;
          case 44:
            (l[u++] = (ur(E) - 1) * p), (p = 1);
            break;
          case 64:
            Xr() === 45 && (E += Lc(Yn())),
              (v = Xr()),
              (c = d = ur((h = E += IE(ks())))),
              m++;
            break;
          case 45:
            g === 45 && ur(E) == 2 && (S = 0);
        }
    }
  return i;
}
function Kp(e, t, n, r, o, i, a, l, s, u, c, d) {
  for (
    var v = o - 1, w = o === 0 ? i : [''], g = wE(w), S = 0, y = 0, p = 0;
    S < r;
    ++S
  )
    for (var m = 0, h = ji(e, v + 1, (v = o1((y = a[S])))), C = e; m < g; ++m)
      (C = i1(y > 0 ? w[m] + ' ' + h : Es(h, /&\f/g, w[m]))) && (s[p++] = C);
  return Zv(e, t, n, o === 0 ? n1 : l, s, u, c, d);
}
function OE(e, t, n, r) {
  return Zv(e, t, n, t1, Yv(CE()), ji(e, 2, -2), 0, r);
}
function Gp(e, t, n, r, o) {
  return Zv(e, t, n, r1, ji(e, 0, r), ji(e, r + 1, -1), r, o);
}
function rd(e, t) {
  for (var n = '', r = 0; r < e.length; r++) n += t(e[r], r, e, t) || '';
  return n;
}
function $E(e, t, n, r) {
  switch (e.type) {
    case yE:
      if (e.children.length) break;
    case hE:
    case r1:
      return (e.return = e.return || e.value);
    case t1:
      return '';
    case gE:
      return (e.return = e.value + '{' + rd(e.children, r) + '}');
    case n1:
      if (!ur((e.value = e.props.join(',')))) return '';
  }
  return ur((n = rd(e.children, r)))
    ? (e.return = e.value + '{' + n + '}')
    : '';
}
var qp = 'data-ant-cssinjs-cache-path',
  l1 = '_FILE_STYLE__',
  To,
  s1 = !0;
function TE() {
  if (!To && ((To = {}), Sn())) {
    var e = document.createElement('div');
    (e.className = qp),
      (e.style.position = 'fixed'),
      (e.style.visibility = 'hidden'),
      (e.style.top = '-9999px'),
      document.body.appendChild(e);
    var t = getComputedStyle(e).content || '';
    (t = t.replace(/^"/, '').replace(/"$/, '')),
      t.split(';').forEach(function (o) {
        var i = o.split(':'),
          a = V(i, 2),
          l = a[0],
          s = a[1];
        To[l] = s;
      });
    var n = document.querySelector('style['.concat(qp, ']'));
    if (n) {
      var r;
      (s1 = !1),
        (r = n.parentNode) === null || r === void 0 || r.removeChild(n);
    }
    document.body.removeChild(e);
  }
}
function _E(e) {
  return TE(), !!To[e];
}
function NE(e) {
  var t = To[e],
    n = null;
  if (t && Sn())
    if (s1) n = l1;
    else {
      var r = document.querySelector(
        'style['.concat(Qn, '="').concat(To[e], '"]')
      );
      r ? (n = r.innerHTML) : delete To[e];
    }
  return [n, t];
}
var FE = '_skip_check_',
  u1 = '_multi_value_';
function Rs(e) {
  var t = rd(ME(e), $E);
  return t.replace(/\{%%%\:[^;];}/g, ';');
}
function LE(e) {
  return oe(e) === 'object' && e && (FE in e || u1 in e);
}
function Xp(e, t, n) {
  if (!t) return e;
  var r = '.'.concat(t),
    o = n === 'low' ? ':where('.concat(r, ')') : r,
    i = e.split(',').map(function (a) {
      var l,
        s = a.trim().split(/\s+/),
        u = s[0] || '',
        c =
          ((l = u.match(/^\w+/)) === null || l === void 0 ? void 0 : l[0]) ||
          '';
      return (
        (u = ''.concat(c).concat(o).concat(u.slice(c.length))),
        [u].concat(Z(s.slice(1))).join(' ')
      );
    });
  return i.join(',');
}
var AE = function e(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r =
      arguments.length > 2 && arguments[2] !== void 0
        ? arguments[2]
        : { root: !0, parentSelectors: [] },
    o = r.root,
    i = r.injectHash,
    a = r.parentSelectors,
    l = n.hashId,
    s = n.layer;
  n.path;
  var u = n.hashPriority,
    c = n.transformers,
    d = c === void 0 ? [] : c;
  n.linters;
  var v = '',
    w = {};
  function g(p) {
    var m = p.getName(l);
    if (!w[m]) {
      var h = e(p.style, n, { root: !1, parentSelectors: a }),
        C = V(h, 1),
        b = C[0];
      w[m] = '@keyframes '.concat(p.getName(l)).concat(b);
    }
  }
  function S(p) {
    var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return (
      p.forEach(function (h) {
        Array.isArray(h) ? S(h, m) : h && m.push(h);
      }),
      m
    );
  }
  var y = S(Array.isArray(t) ? t : [t]);
  return (
    y.forEach(function (p) {
      var m = typeof p == 'string' && !o ? {} : p;
      if (typeof m == 'string')
        v += ''.concat(
          m,
          `
`
        );
      else if (m._keyframe) g(m);
      else {
        var h = d.reduce(function (C, b) {
          var x;
          return (
            (b == null || (x = b.visit) === null || x === void 0
              ? void 0
              : x.call(b, C)) || C
          );
        }, m);
        Object.keys(h).forEach(function (C) {
          var b = h[C];
          if (
            oe(b) === 'object' &&
            b &&
            (C !== 'animationName' || !b._keyframe) &&
            !LE(b)
          ) {
            var x = !1,
              E = C.trim(),
              P = !1;
            (o || i) && l
              ? E.startsWith('@')
                ? (x = !0)
                : E === '&'
                  ? (E = Xp('', l, u))
                  : (E = Xp(C, l, u))
              : o && !l && (E === '&' || E === '') && ((E = ''), (P = !0));
            var I = e(b, n, {
                root: P,
                injectHash: x,
                parentSelectors: [].concat(Z(a), [E]),
              }),
              M = V(I, 2),
              A = M[0],
              j = M[1];
            (w = N(N({}, w), j)), (v += ''.concat(E).concat(A));
          } else {
            let U = function (T, R) {
              var k = T.replace(/[A-Z]/g, function (_) {
                  return '-'.concat(_.toLowerCase());
                }),
                O = R;
              !pE[T] &&
                typeof O == 'number' &&
                O !== 0 &&
                (O = ''.concat(O, 'px')),
                T === 'animationName' &&
                  R !== null &&
                  R !== void 0 &&
                  R._keyframe &&
                  (g(R), (O = R.getName(l))),
                (v += ''.concat(k, ':').concat(O, ';'));
            };
            var L,
              F =
                (L = b == null ? void 0 : b.value) !== null && L !== void 0
                  ? L
                  : b;
            oe(b) === 'object' &&
            b !== null &&
            b !== void 0 &&
            b[u1] &&
            Array.isArray(F)
              ? F.forEach(function (T) {
                  U(C, T);
                })
              : U(C, F);
          }
        });
      }
    }),
    o
      ? s &&
        ((v = '@layer '.concat(s.name, ' {').concat(v, '}')),
        s.dependencies &&
          (w['@layer '.concat(s.name)] = s.dependencies.map(function (p) {
            return '@layer '.concat(p, ', ').concat(s.name, ';');
          }).join(`
`)))
      : (v = '{'.concat(v, '}')),
    [v, w]
  );
};
function c1(e, t) {
  return ol(''.concat(e.join('%')).concat(t));
}
function zE() {
  return null;
}
var f1 = 'style';
function od(e, t) {
  var n = e.token,
    r = e.path,
    o = e.hashId,
    i = e.layer,
    a = e.nonce,
    l = e.clientOnly,
    s = e.order,
    u = s === void 0 ? 0 : s,
    c = f.useContext(Ku),
    d = c.autoClear;
  c.mock;
  var v = c.defaultCache,
    w = c.hashPriority,
    g = c.container,
    S = c.ssrInline,
    y = c.transformers,
    p = c.linters,
    m = c.cache,
    h = c.layer,
    C = n._tokenKey,
    b = [C];
  h && b.push('layer'), b.push.apply(b, Z(r));
  var x = td,
    E = Qv(
      f1,
      b,
      function () {
        var j = b.join('|');
        if (_E(j)) {
          var L = NE(j),
            F = V(L, 2),
            U = F[0],
            T = F[1];
          if (U) return [U, C, T, {}, l, u];
        }
        var R = t(),
          k = AE(R, {
            hashId: o,
            hashPriority: w,
            layer: h ? i : void 0,
            path: r.join('-'),
            transformers: y,
            linters: p,
          }),
          O = V(k, 2),
          _ = O[0],
          z = O[1],
          B = Rs(_),
          K = c1(b, B);
        return [B, C, K, z, l, u];
      },
      function (j, L) {
        var F = V(j, 3),
          U = F[2];
        (L || d) && td && il(U, { mark: Qn });
      },
      function (j) {
        var L = V(j, 4),
          F = L[0];
        L[1];
        var U = L[2],
          T = L[3];
        if (x && F !== l1) {
          var R = {
              mark: Qn,
              prepend: h ? !1 : 'queue',
              attachTo: g,
              priority: u,
            },
            k = typeof a == 'function' ? a() : a;
          k && (R.csp = { nonce: k });
          var O = [],
            _ = [];
          Object.keys(T).forEach(function (B) {
            B.startsWith('@layer') ? O.push(B) : _.push(B);
          }),
            O.forEach(function (B) {
              xr(
                Rs(T[B]),
                '_layer-'.concat(B),
                N(N({}, R), {}, { prepend: !0 })
              );
            });
          var z = xr(F, U, R);
          (z[qr] = m.instanceId),
            z.setAttribute(zi, C),
            _.forEach(function (B) {
              xr(Rs(T[B]), '_effect-'.concat(B), R);
            });
        }
      }
    ),
    P = V(E, 3),
    I = P[0],
    M = P[1],
    A = P[2];
  return function (j) {
    var L;
    if (!S || x || !v) L = f.createElement(zE, null);
    else {
      var F;
      L = f.createElement(
        'style',
        ce({}, ((F = {}), $(F, zi, M), $(F, Qn, A), F), {
          dangerouslySetInnerHTML: { __html: I },
        })
      );
    }
    return f.createElement(f.Fragment, null, L, j);
  };
}
var jE = function (t, n, r) {
    var o = V(t, 6),
      i = o[0],
      a = o[1],
      l = o[2],
      s = o[3],
      u = o[4],
      c = o[5],
      d = r || {},
      v = d.plain;
    if (u) return null;
    var w = i,
      g = { 'data-rc-order': 'prependQueue', 'data-rc-priority': ''.concat(c) };
    return (
      (w = ou(i, a, l, g, v)),
      s &&
        Object.keys(s).forEach(function (S) {
          if (!n[S]) {
            n[S] = !0;
            var y = Rs(s[S]),
              p = ou(y, a, '_effect-'.concat(S), g, v);
            S.startsWith('@layer') ? (w = p + w) : (w += p);
          }
        }),
      [c, l, w]
    );
  },
  d1 = 'cssVar',
  DE = function (t, n) {
    var r = t.key,
      o = t.prefix,
      i = t.unitless,
      a = t.ignore,
      l = t.token,
      s = t.scope,
      u = s === void 0 ? '' : s,
      c = f.useContext(Ku),
      d = c.cache.instanceId,
      v = c.container,
      w = l._tokenKey,
      g = [].concat(Z(t.path), [r, u, w]),
      S = Qv(
        d1,
        g,
        function () {
          var y = n(),
            p = Jy(y, r, { prefix: o, unitless: i, ignore: a, scope: u }),
            m = V(p, 2),
            h = m[0],
            C = m[1],
            b = c1(g, C);
          return [h, C, b, r];
        },
        function (y) {
          var p = V(y, 3),
            m = p[2];
          td && il(m, { mark: Qn });
        },
        function (y) {
          var p = V(y, 3),
            m = p[1],
            h = p[2];
          if (m) {
            var C = xr(m, h, {
              mark: Qn,
              prepend: 'queue',
              attachTo: v,
              priority: -999,
            });
            (C[qr] = d), C.setAttribute(zi, r);
          }
        }
      );
    return S;
  },
  BE = function (t, n, r) {
    var o = V(t, 4),
      i = o[1],
      a = o[2],
      l = o[3],
      s = r || {},
      u = s.plain;
    if (!i) return null;
    var c = -999,
      d = { 'data-rc-order': 'prependQueue', 'data-rc-priority': ''.concat(c) },
      v = ou(i, l, a, d, u);
    return [c, a, v];
  },
  ua;
(ua = {}), $(ua, f1, jE), $(ua, e1, mE), $(ua, d1, BE);
var ft = (function () {
  function e(t, n) {
    At(this, e),
      $(this, 'name', void 0),
      $(this, 'style', void 0),
      $(this, '_keyframe', !0),
      (this.name = t),
      (this.style = n);
  }
  return (
    zt(e, [
      {
        key: 'getName',
        value: function () {
          var n =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
          return n ? ''.concat(n, '-').concat(this.name) : this.name;
        },
      },
    ]),
    e
  );
})();
function ei(e) {
  return (e.notSplit = !0), e;
}
ei(['borderTop', 'borderBottom']),
  ei(['borderTop']),
  ei(['borderBottom']),
  ei(['borderLeft', 'borderRight']),
  ei(['borderLeft']),
  ei(['borderRight']);
var Jv = f.createContext({});
function VE(e) {
  return Gy(e) || Hy(e) || Kv(e) || qy();
}
function fr(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null) return;
    n = n[t[r]];
  }
  return n;
}
function v1(e, t, n, r) {
  if (!t.length) return n;
  var o = VE(t),
    i = o[0],
    a = o.slice(1),
    l;
  return (
    !e && typeof i == 'number'
      ? (l = [])
      : Array.isArray(e)
        ? (l = Z(e))
        : (l = N({}, e)),
    r && n === void 0 && a.length === 1
      ? delete l[i][a[0]]
      : (l[i] = v1(l[i], a, n, r)),
    l
  );
}
function Wn(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !fr(e, t.slice(0, -1))
    ? e
    : v1(e, t, n, r);
}
function HE(e) {
  return (
    oe(e) === 'object' &&
    e !== null &&
    Object.getPrototypeOf(e) === Object.prototype
  );
}
function Qp(e) {
  return Array.isArray(e) ? [] : {};
}
var UE = typeof Reflect > 'u' ? Object.keys : Reflect.ownKeys;
function wi() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = Qp(t[0]);
  return (
    t.forEach(function (o) {
      function i(a, l) {
        var s = new Set(l),
          u = fr(o, a),
          c = Array.isArray(u);
        if (c || HE(u)) {
          if (!s.has(u)) {
            s.add(u);
            var d = fr(r, a);
            c
              ? (r = Wn(r, a, []))
              : (!d || oe(d) !== 'object') && (r = Wn(r, a, Qp(u))),
              UE(u).forEach(function (v) {
                i([].concat(Z(a), [v]), s);
              });
          }
        } else r = Wn(r, a, u);
      }
      i([]);
    }),
    r
  );
}
function WE() {}
const KE = f.createContext({}),
  m1 = () => {
    const e = () => {};
    return (e.deprecated = WE), e;
  },
  GE = f.createContext(void 0);
var qE = {
    items_per_page: '/ page',
    jump_to: 'Go to',
    jump_to_confirm: 'confirm',
    page: 'Page',
    prev_page: 'Previous Page',
    next_page: 'Next Page',
    prev_5: 'Previous 5 Pages',
    next_5: 'Next 5 Pages',
    prev_3: 'Previous 3 Pages',
    next_3: 'Next 3 Pages',
    page_size: 'Page Size',
  },
  XE = {
    yearFormat: 'YYYY',
    dayFormat: 'D',
    cellMeridiemFormat: 'A',
    monthBeforeYear: !0,
  },
  QE = N(
    N({}, XE),
    {},
    {
      locale: 'en_US',
      today: 'Today',
      now: 'Now',
      backToToday: 'Back to today',
      ok: 'OK',
      clear: 'Clear',
      month: 'Month',
      year: 'Year',
      timeSelect: 'select time',
      dateSelect: 'select date',
      weekSelect: 'Choose a week',
      monthSelect: 'Choose a month',
      yearSelect: 'Choose a year',
      decadeSelect: 'Choose a decade',
      dateFormat: 'M/D/YYYY',
      dateTimeFormat: 'M/D/YYYY HH:mm:ss',
      previousMonth: 'Previous month (PageUp)',
      nextMonth: 'Next month (PageDown)',
      previousYear: 'Last year (Control + left)',
      nextYear: 'Next year (Control + right)',
      previousDecade: 'Last decade',
      nextDecade: 'Next decade',
      previousCentury: 'Last century',
      nextCentury: 'Next century',
    }
  );
const p1 = {
    placeholder: 'Select time',
    rangePlaceholder: ['Start time', 'End time'],
  },
  Yp = {
    lang: Object.assign(
      {
        placeholder: 'Select date',
        yearPlaceholder: 'Select year',
        quarterPlaceholder: 'Select quarter',
        monthPlaceholder: 'Select month',
        weekPlaceholder: 'Select week',
        rangePlaceholder: ['Start date', 'End date'],
        rangeYearPlaceholder: ['Start year', 'End year'],
        rangeQuarterPlaceholder: ['Start quarter', 'End quarter'],
        rangeMonthPlaceholder: ['Start month', 'End month'],
        rangeWeekPlaceholder: ['Start week', 'End week'],
      },
      QE
    ),
    timePickerLocale: Object.assign({}, p1),
  },
  fn = '${label} is not a valid ${type}',
  Xu = {
    locale: 'en',
    Pagination: qE,
    DatePicker: Yp,
    TimePicker: p1,
    Calendar: Yp,
    global: { placeholder: 'Please select' },
    Table: {
      filterTitle: 'Filter menu',
      filterConfirm: 'OK',
      filterReset: 'Reset',
      filterEmptyText: 'No filters',
      filterCheckall: 'Select all items',
      filterSearchPlaceholder: 'Search in filters',
      emptyText: 'No data',
      selectAll: 'Select current page',
      selectInvert: 'Invert current page',
      selectNone: 'Clear all data',
      selectionAll: 'Select all data',
      sortTitle: 'Sort',
      expand: 'Expand row',
      collapse: 'Collapse row',
      triggerDesc: 'Click to sort descending',
      triggerAsc: 'Click to sort ascending',
      cancelSort: 'Click to cancel sorting',
    },
    Tour: { Next: 'Next', Previous: 'Previous', Finish: 'Finish' },
    Modal: { okText: 'OK', cancelText: 'Cancel', justOkText: 'OK' },
    Popconfirm: { okText: 'OK', cancelText: 'Cancel' },
    Transfer: {
      titles: ['', ''],
      searchPlaceholder: 'Search here',
      itemUnit: 'item',
      itemsUnit: 'items',
      remove: 'Remove',
      selectCurrent: 'Select current page',
      removeCurrent: 'Remove current page',
      selectAll: 'Select all data',
      deselectAll: 'Deselect all data',
      removeAll: 'Remove all data',
      selectInvert: 'Invert current page',
    },
    Upload: {
      uploading: 'Uploading...',
      removeFile: 'Remove file',
      uploadError: 'Upload error',
      previewFile: 'Preview file',
      downloadFile: 'Download file',
    },
    Empty: { description: 'No data' },
    Icon: { icon: 'icon' },
    Text: {
      edit: 'Edit',
      copy: 'Copy',
      copied: 'Copied',
      expand: 'Expand',
      collapse: 'Collapse',
    },
    Form: {
      optional: '(optional)',
      defaultValidateMessages: {
        default: 'Field validation error for ${label}',
        required: 'Please enter ${label}',
        enum: '${label} must be one of [${enum}]',
        whitespace: '${label} cannot be a blank character',
        date: {
          format: '${label} date format is invalid',
          parse: '${label} cannot be converted to a date',
          invalid: '${label} is an invalid date',
        },
        types: {
          string: fn,
          method: fn,
          array: fn,
          object: fn,
          number: fn,
          date: fn,
          boolean: fn,
          integer: fn,
          float: fn,
          regexp: fn,
          email: fn,
          url: fn,
          hex: fn,
        },
        string: {
          len: '${label} must be ${len} characters',
          min: '${label} must be at least ${min} characters',
          max: '${label} must be up to ${max} characters',
          range: '${label} must be between ${min}-${max} characters',
        },
        number: {
          len: '${label} must be equal to ${len}',
          min: '${label} must be minimum ${min}',
          max: '${label} must be maximum ${max}',
          range: '${label} must be between ${min}-${max}',
        },
        array: {
          len: 'Must be ${len} ${label}',
          min: 'At least ${min} ${label}',
          max: 'At most ${max} ${label}',
          range: 'The amount of ${label} must be between ${min}-${max}',
        },
        pattern: { mismatch: '${label} does not match the pattern ${pattern}' },
      },
    },
    Image: { preview: 'Preview' },
    QRCode: {
      expired: 'QR code expired',
      refresh: 'Refresh',
      scanned: 'Scanned',
    },
    ColorPicker: {
      presetEmpty: 'Empty',
      transparent: 'Transparent',
      singleColor: 'Single',
      gradientColor: 'Gradient',
    },
  };
Object.assign({}, Xu.Modal);
let Is = [];
const Zp = () =>
  Is.reduce((e, t) => Object.assign(Object.assign({}, e), t), Xu.Modal);
function YE(e) {
  if (e) {
    const t = Object.assign({}, e);
    return (
      Is.push(t),
      Zp(),
      () => {
        (Is = Is.filter((n) => n !== t)), Zp();
      }
    );
  }
  Object.assign({}, Xu.Modal);
}
const h1 = f.createContext(void 0),
  ZE = 'internalMark',
  JE = (e) => {
    const { locale: t = {}, children: n, _ANT_MARK__: r } = e;
    f.useEffect(() => YE(t == null ? void 0 : t.Modal), [t]);
    const o = f.useMemo(
      () => Object.assign(Object.assign({}, t), { exist: !0 }),
      [t]
    );
    return f.createElement(h1.Provider, { value: o }, n);
  };
function Ft(e, t) {
  ek(e) && (e = '100%');
  var n = tk(e);
  return (
    (e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e)))),
    n && (e = parseInt(String(e * t), 10) / 100),
    Math.abs(e - t) < 1e-6
      ? 1
      : (t === 360
          ? (e = (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t)))
          : (e = (e % t) / parseFloat(String(t))),
        e)
  );
}
function Zl(e) {
  return Math.min(1, Math.max(0, e));
}
function ek(e) {
  return typeof e == 'string' && e.indexOf('.') !== -1 && parseFloat(e) === 1;
}
function tk(e) {
  return typeof e == 'string' && e.indexOf('%') !== -1;
}
function g1(e) {
  return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Jl(e) {
  return e <= 1 ? ''.concat(Number(e) * 100, '%') : e;
}
function Ro(e) {
  return e.length === 1 ? '0' + e : String(e);
}
function nk(e, t, n) {
  return { r: Ft(e, 255) * 255, g: Ft(t, 255) * 255, b: Ft(n, 255) * 255 };
}
function Jp(e, t, n) {
  (e = Ft(e, 255)), (t = Ft(t, 255)), (n = Ft(n, 255));
  var r = Math.max(e, t, n),
    o = Math.min(e, t, n),
    i = 0,
    a = 0,
    l = (r + o) / 2;
  if (r === o) (a = 0), (i = 0);
  else {
    var s = r - o;
    switch (((a = l > 0.5 ? s / (2 - r - o) : s / (r + o)), r)) {
      case e:
        i = (t - n) / s + (t < n ? 6 : 0);
        break;
      case t:
        i = (n - e) / s + 2;
        break;
      case n:
        i = (e - t) / s + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: a, l };
}
function Ac(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * (6 * n)
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function rk(e, t, n) {
  var r, o, i;
  if (((e = Ft(e, 360)), (t = Ft(t, 100)), (n = Ft(n, 100)), t === 0))
    (o = n), (i = n), (r = n);
  else {
    var a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (r = Ac(l, a, e + 1 / 3)), (o = Ac(l, a, e)), (i = Ac(l, a, e - 1 / 3));
  }
  return { r: r * 255, g: o * 255, b: i * 255 };
}
function id(e, t, n) {
  (e = Ft(e, 255)), (t = Ft(t, 255)), (n = Ft(n, 255));
  var r = Math.max(e, t, n),
    o = Math.min(e, t, n),
    i = 0,
    a = r,
    l = r - o,
    s = r === 0 ? 0 : l / r;
  if (r === o) i = 0;
  else {
    switch (r) {
      case e:
        i = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        i = (n - e) / l + 2;
        break;
      case n:
        i = (e - t) / l + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s, v: a };
}
function ok(e, t, n) {
  (e = Ft(e, 360) * 6), (t = Ft(t, 100)), (n = Ft(n, 100));
  var r = Math.floor(e),
    o = e - r,
    i = n * (1 - t),
    a = n * (1 - o * t),
    l = n * (1 - (1 - o) * t),
    s = r % 6,
    u = [n, a, i, i, l, n][s],
    c = [l, n, n, a, i, i][s],
    d = [i, i, l, n, n, a][s];
  return { r: u * 255, g: c * 255, b: d * 255 };
}
function ad(e, t, n, r) {
  var o = [
    Ro(Math.round(e).toString(16)),
    Ro(Math.round(t).toString(16)),
    Ro(Math.round(n).toString(16)),
  ];
  return r &&
    o[0].startsWith(o[0].charAt(1)) &&
    o[1].startsWith(o[1].charAt(1)) &&
    o[2].startsWith(o[2].charAt(1))
    ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0)
    : o.join('');
}
function ik(e, t, n, r, o) {
  var i = [
    Ro(Math.round(e).toString(16)),
    Ro(Math.round(t).toString(16)),
    Ro(Math.round(n).toString(16)),
    Ro(ak(r)),
  ];
  return o &&
    i[0].startsWith(i[0].charAt(1)) &&
    i[1].startsWith(i[1].charAt(1)) &&
    i[2].startsWith(i[2].charAt(1)) &&
    i[3].startsWith(i[3].charAt(1))
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0)
    : i.join('');
}
function ak(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function eh(e) {
  return vn(e) / 255;
}
function vn(e) {
  return parseInt(e, 16);
}
function lk(e) {
  return { r: e >> 16, g: (e & 65280) >> 8, b: e & 255 };
}
var ld = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgreen: '#006400',
  darkgrey: '#a9a9a9',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  goldenrod: '#daa520',
  gold: '#ffd700',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  grey: '#808080',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavenderblush: '#fff0f5',
  lavender: '#e6e6fa',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgreen: '#90ee90',
  lightgrey: '#d3d3d3',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32',
};
function li(e) {
  var t = { r: 0, g: 0, b: 0 },
    n = 1,
    r = null,
    o = null,
    i = null,
    a = !1,
    l = !1;
  return (
    typeof e == 'string' && (e = ck(e)),
    typeof e == 'object' &&
      (hr(e.r) && hr(e.g) && hr(e.b)
        ? ((t = nk(e.r, e.g, e.b)),
          (a = !0),
          (l = String(e.r).substr(-1) === '%' ? 'prgb' : 'rgb'))
        : hr(e.h) && hr(e.s) && hr(e.v)
          ? ((r = Jl(e.s)),
            (o = Jl(e.v)),
            (t = ok(e.h, r, o)),
            (a = !0),
            (l = 'hsv'))
          : hr(e.h) &&
            hr(e.s) &&
            hr(e.l) &&
            ((r = Jl(e.s)),
            (i = Jl(e.l)),
            (t = rk(e.h, r, i)),
            (a = !0),
            (l = 'hsl')),
      Object.prototype.hasOwnProperty.call(e, 'a') && (n = e.a)),
    (n = g1(n)),
    {
      ok: a,
      format: e.format || l,
      r: Math.min(255, Math.max(t.r, 0)),
      g: Math.min(255, Math.max(t.g, 0)),
      b: Math.min(255, Math.max(t.b, 0)),
      a: n,
    }
  );
}
var sk = '[-\\+]?\\d+%?',
  uk = '[-\\+]?\\d*\\.\\d+%?',
  Qr = '(?:'.concat(uk, ')|(?:').concat(sk, ')'),
  zc = '[\\s|\\(]+('
    .concat(Qr, ')[,|\\s]+(')
    .concat(Qr, ')[,|\\s]+(')
    .concat(Qr, ')\\s*\\)?'),
  jc = '[\\s|\\(]+('
    .concat(Qr, ')[,|\\s]+(')
    .concat(Qr, ')[,|\\s]+(')
    .concat(Qr, ')[,|\\s]+(')
    .concat(Qr, ')\\s*\\)?'),
  Vn = {
    CSS_UNIT: new RegExp(Qr),
    rgb: new RegExp('rgb' + zc),
    rgba: new RegExp('rgba' + jc),
    hsl: new RegExp('hsl' + zc),
    hsla: new RegExp('hsla' + jc),
    hsv: new RegExp('hsv' + zc),
    hsva: new RegExp('hsva' + jc),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  };
function ck(e) {
  if (((e = e.trim().toLowerCase()), e.length === 0)) return !1;
  var t = !1;
  if (ld[e]) (e = ld[e]), (t = !0);
  else if (e === 'transparent')
    return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
  var n = Vn.rgb.exec(e);
  return n
    ? { r: n[1], g: n[2], b: n[3] }
    : ((n = Vn.rgba.exec(e)),
      n
        ? { r: n[1], g: n[2], b: n[3], a: n[4] }
        : ((n = Vn.hsl.exec(e)),
          n
            ? { h: n[1], s: n[2], l: n[3] }
            : ((n = Vn.hsla.exec(e)),
              n
                ? { h: n[1], s: n[2], l: n[3], a: n[4] }
                : ((n = Vn.hsv.exec(e)),
                  n
                    ? { h: n[1], s: n[2], v: n[3] }
                    : ((n = Vn.hsva.exec(e)),
                      n
                        ? { h: n[1], s: n[2], v: n[3], a: n[4] }
                        : ((n = Vn.hex8.exec(e)),
                          n
                            ? {
                                r: vn(n[1]),
                                g: vn(n[2]),
                                b: vn(n[3]),
                                a: eh(n[4]),
                                format: t ? 'name' : 'hex8',
                              }
                            : ((n = Vn.hex6.exec(e)),
                              n
                                ? {
                                    r: vn(n[1]),
                                    g: vn(n[2]),
                                    b: vn(n[3]),
                                    format: t ? 'name' : 'hex',
                                  }
                                : ((n = Vn.hex4.exec(e)),
                                  n
                                    ? {
                                        r: vn(n[1] + n[1]),
                                        g: vn(n[2] + n[2]),
                                        b: vn(n[3] + n[3]),
                                        a: eh(n[4] + n[4]),
                                        format: t ? 'name' : 'hex8',
                                      }
                                    : ((n = Vn.hex3.exec(e)),
                                      n
                                        ? {
                                            r: vn(n[1] + n[1]),
                                            g: vn(n[2] + n[2]),
                                            b: vn(n[3] + n[3]),
                                            format: t ? 'name' : 'hex',
                                          }
                                        : !1)))))))));
}
function hr(e) {
  return !!Vn.CSS_UNIT.exec(String(e));
}
var _t = (function () {
    function e(t, n) {
      t === void 0 && (t = ''), n === void 0 && (n = {});
      var r;
      if (t instanceof e) return t;
      typeof t == 'number' && (t = lk(t)), (this.originalInput = t);
      var o = li(t);
      (this.originalInput = t),
        (this.r = o.r),
        (this.g = o.g),
        (this.b = o.b),
        (this.a = o.a),
        (this.roundA = Math.round(100 * this.a) / 100),
        (this.format = (r = n.format) !== null && r !== void 0 ? r : o.format),
        (this.gradientType = n.gradientType),
        this.r < 1 && (this.r = Math.round(this.r)),
        this.g < 1 && (this.g = Math.round(this.g)),
        this.b < 1 && (this.b = Math.round(this.b)),
        (this.isValid = o.ok);
    }
    return (
      (e.prototype.isDark = function () {
        return this.getBrightness() < 128;
      }),
      (e.prototype.isLight = function () {
        return !this.isDark();
      }),
      (e.prototype.getBrightness = function () {
        var t = this.toRgb();
        return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
      }),
      (e.prototype.getLuminance = function () {
        var t = this.toRgb(),
          n,
          r,
          o,
          i = t.r / 255,
          a = t.g / 255,
          l = t.b / 255;
        return (
          i <= 0.03928
            ? (n = i / 12.92)
            : (n = Math.pow((i + 0.055) / 1.055, 2.4)),
          a <= 0.03928
            ? (r = a / 12.92)
            : (r = Math.pow((a + 0.055) / 1.055, 2.4)),
          l <= 0.03928
            ? (o = l / 12.92)
            : (o = Math.pow((l + 0.055) / 1.055, 2.4)),
          0.2126 * n + 0.7152 * r + 0.0722 * o
        );
      }),
      (e.prototype.getAlpha = function () {
        return this.a;
      }),
      (e.prototype.setAlpha = function (t) {
        return (
          (this.a = g1(t)), (this.roundA = Math.round(100 * this.a) / 100), this
        );
      }),
      (e.prototype.isMonochrome = function () {
        var t = this.toHsl().s;
        return t === 0;
      }),
      (e.prototype.toHsv = function () {
        var t = id(this.r, this.g, this.b);
        return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
      }),
      (e.prototype.toHsvString = function () {
        var t = id(this.r, this.g, this.b),
          n = Math.round(t.h * 360),
          r = Math.round(t.s * 100),
          o = Math.round(t.v * 100);
        return this.a === 1
          ? 'hsv('.concat(n, ', ').concat(r, '%, ').concat(o, '%)')
          : 'hsva('
              .concat(n, ', ')
              .concat(r, '%, ')
              .concat(o, '%, ')
              .concat(this.roundA, ')');
      }),
      (e.prototype.toHsl = function () {
        var t = Jp(this.r, this.g, this.b);
        return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
      }),
      (e.prototype.toHslString = function () {
        var t = Jp(this.r, this.g, this.b),
          n = Math.round(t.h * 360),
          r = Math.round(t.s * 100),
          o = Math.round(t.l * 100);
        return this.a === 1
          ? 'hsl('.concat(n, ', ').concat(r, '%, ').concat(o, '%)')
          : 'hsla('
              .concat(n, ', ')
              .concat(r, '%, ')
              .concat(o, '%, ')
              .concat(this.roundA, ')');
      }),
      (e.prototype.toHex = function (t) {
        return t === void 0 && (t = !1), ad(this.r, this.g, this.b, t);
      }),
      (e.prototype.toHexString = function (t) {
        return t === void 0 && (t = !1), '#' + this.toHex(t);
      }),
      (e.prototype.toHex8 = function (t) {
        return t === void 0 && (t = !1), ik(this.r, this.g, this.b, this.a, t);
      }),
      (e.prototype.toHex8String = function (t) {
        return t === void 0 && (t = !1), '#' + this.toHex8(t);
      }),
      (e.prototype.toHexShortString = function (t) {
        return (
          t === void 0 && (t = !1),
          this.a === 1 ? this.toHexString(t) : this.toHex8String(t)
        );
      }),
      (e.prototype.toRgb = function () {
        return {
          r: Math.round(this.r),
          g: Math.round(this.g),
          b: Math.round(this.b),
          a: this.a,
        };
      }),
      (e.prototype.toRgbString = function () {
        var t = Math.round(this.r),
          n = Math.round(this.g),
          r = Math.round(this.b);
        return this.a === 1
          ? 'rgb('.concat(t, ', ').concat(n, ', ').concat(r, ')')
          : 'rgba('
              .concat(t, ', ')
              .concat(n, ', ')
              .concat(r, ', ')
              .concat(this.roundA, ')');
      }),
      (e.prototype.toPercentageRgb = function () {
        var t = function (n) {
          return ''.concat(Math.round(Ft(n, 255) * 100), '%');
        };
        return { r: t(this.r), g: t(this.g), b: t(this.b), a: this.a };
      }),
      (e.prototype.toPercentageRgbString = function () {
        var t = function (n) {
          return Math.round(Ft(n, 255) * 100);
        };
        return this.a === 1
          ? 'rgb('
              .concat(t(this.r), '%, ')
              .concat(t(this.g), '%, ')
              .concat(t(this.b), '%)')
          : 'rgba('
              .concat(t(this.r), '%, ')
              .concat(t(this.g), '%, ')
              .concat(t(this.b), '%, ')
              .concat(this.roundA, ')');
      }),
      (e.prototype.toName = function () {
        if (this.a === 0) return 'transparent';
        if (this.a < 1) return !1;
        for (
          var t = '#' + ad(this.r, this.g, this.b, !1),
            n = 0,
            r = Object.entries(ld);
          n < r.length;
          n++
        ) {
          var o = r[n],
            i = o[0],
            a = o[1];
          if (t === a) return i;
        }
        return !1;
      }),
      (e.prototype.toString = function (t) {
        var n = !!t;
        t = t ?? this.format;
        var r = !1,
          o = this.a < 1 && this.a >= 0,
          i = !n && o && (t.startsWith('hex') || t === 'name');
        return i
          ? t === 'name' && this.a === 0
            ? this.toName()
            : this.toRgbString()
          : (t === 'rgb' && (r = this.toRgbString()),
            t === 'prgb' && (r = this.toPercentageRgbString()),
            (t === 'hex' || t === 'hex6') && (r = this.toHexString()),
            t === 'hex3' && (r = this.toHexString(!0)),
            t === 'hex4' && (r = this.toHex8String(!0)),
            t === 'hex8' && (r = this.toHex8String()),
            t === 'name' && (r = this.toName()),
            t === 'hsl' && (r = this.toHslString()),
            t === 'hsv' && (r = this.toHsvString()),
            r || this.toHexString());
      }),
      (e.prototype.toNumber = function () {
        return (
          (Math.round(this.r) << 16) +
          (Math.round(this.g) << 8) +
          Math.round(this.b)
        );
      }),
      (e.prototype.clone = function () {
        return new e(this.toString());
      }),
      (e.prototype.lighten = function (t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return (n.l += t / 100), (n.l = Zl(n.l)), new e(n);
      }),
      (e.prototype.brighten = function (t) {
        t === void 0 && (t = 10);
        var n = this.toRgb();
        return (
          (n.r = Math.max(
            0,
            Math.min(255, n.r - Math.round(255 * -(t / 100)))
          )),
          (n.g = Math.max(
            0,
            Math.min(255, n.g - Math.round(255 * -(t / 100)))
          )),
          (n.b = Math.max(
            0,
            Math.min(255, n.b - Math.round(255 * -(t / 100)))
          )),
          new e(n)
        );
      }),
      (e.prototype.darken = function (t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return (n.l -= t / 100), (n.l = Zl(n.l)), new e(n);
      }),
      (e.prototype.tint = function (t) {
        return t === void 0 && (t = 10), this.mix('white', t);
      }),
      (e.prototype.shade = function (t) {
        return t === void 0 && (t = 10), this.mix('black', t);
      }),
      (e.prototype.desaturate = function (t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return (n.s -= t / 100), (n.s = Zl(n.s)), new e(n);
      }),
      (e.prototype.saturate = function (t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return (n.s += t / 100), (n.s = Zl(n.s)), new e(n);
      }),
      (e.prototype.greyscale = function () {
        return this.desaturate(100);
      }),
      (e.prototype.spin = function (t) {
        var n = this.toHsl(),
          r = (n.h + t) % 360;
        return (n.h = r < 0 ? 360 + r : r), new e(n);
      }),
      (e.prototype.mix = function (t, n) {
        n === void 0 && (n = 50);
        var r = this.toRgb(),
          o = new e(t).toRgb(),
          i = n / 100,
          a = {
            r: (o.r - r.r) * i + r.r,
            g: (o.g - r.g) * i + r.g,
            b: (o.b - r.b) * i + r.b,
            a: (o.a - r.a) * i + r.a,
          };
        return new e(a);
      }),
      (e.prototype.analogous = function (t, n) {
        t === void 0 && (t = 6), n === void 0 && (n = 30);
        var r = this.toHsl(),
          o = 360 / n,
          i = [this];
        for (r.h = (r.h - ((o * t) >> 1) + 720) % 360; --t; )
          (r.h = (r.h + o) % 360), i.push(new e(r));
        return i;
      }),
      (e.prototype.complement = function () {
        var t = this.toHsl();
        return (t.h = (t.h + 180) % 360), new e(t);
      }),
      (e.prototype.monochromatic = function (t) {
        t === void 0 && (t = 6);
        for (
          var n = this.toHsv(), r = n.h, o = n.s, i = n.v, a = [], l = 1 / t;
          t--;

        )
          a.push(new e({ h: r, s: o, v: i })), (i = (i + l) % 1);
        return a;
      }),
      (e.prototype.splitcomplement = function () {
        var t = this.toHsl(),
          n = t.h;
        return [
          this,
          new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
          new e({ h: (n + 216) % 360, s: t.s, l: t.l }),
        ];
      }),
      (e.prototype.onBackground = function (t) {
        var n = this.toRgb(),
          r = new e(t).toRgb(),
          o = n.a + r.a * (1 - n.a);
        return new e({
          r: (n.r * n.a + r.r * r.a * (1 - n.a)) / o,
          g: (n.g * n.a + r.g * r.a * (1 - n.a)) / o,
          b: (n.b * n.a + r.b * r.a * (1 - n.a)) / o,
          a: o,
        });
      }),
      (e.prototype.triad = function () {
        return this.polyad(3);
      }),
      (e.prototype.tetrad = function () {
        return this.polyad(4);
      }),
      (e.prototype.polyad = function (t) {
        for (
          var n = this.toHsl(), r = n.h, o = [this], i = 360 / t, a = 1;
          a < t;
          a++
        )
          o.push(new e({ h: (r + a * i) % 360, s: n.s, l: n.l }));
        return o;
      }),
      (e.prototype.equals = function (t) {
        return this.toRgbString() === new e(t).toRgbString();
      }),
      e
    );
  })(),
  es = 2,
  th = 0.16,
  fk = 0.05,
  dk = 0.05,
  vk = 0.15,
  y1 = 5,
  S1 = 4,
  mk = [
    { index: 7, opacity: 0.15 },
    { index: 6, opacity: 0.25 },
    { index: 5, opacity: 0.3 },
    { index: 5, opacity: 0.45 },
    { index: 5, opacity: 0.65 },
    { index: 5, opacity: 0.85 },
    { index: 4, opacity: 0.9 },
    { index: 3, opacity: 0.95 },
    { index: 2, opacity: 0.97 },
    { index: 1, opacity: 0.98 },
  ];
function nh(e) {
  var t = e.r,
    n = e.g,
    r = e.b,
    o = id(t, n, r);
  return { h: o.h * 360, s: o.s, v: o.v };
}
function ts(e) {
  var t = e.r,
    n = e.g,
    r = e.b;
  return '#'.concat(ad(t, n, r, !1));
}
function pk(e, t, n) {
  var r = n / 100,
    o = {
      r: (t.r - e.r) * r + e.r,
      g: (t.g - e.g) * r + e.g,
      b: (t.b - e.b) * r + e.b,
    };
  return o;
}
function rh(e, t, n) {
  var r;
  return (
    Math.round(e.h) >= 60 && Math.round(e.h) <= 240
      ? (r = n ? Math.round(e.h) - es * t : Math.round(e.h) + es * t)
      : (r = n ? Math.round(e.h) + es * t : Math.round(e.h) - es * t),
    r < 0 ? (r += 360) : r >= 360 && (r -= 360),
    r
  );
}
function oh(e, t, n) {
  if (e.h === 0 && e.s === 0) return e.s;
  var r;
  return (
    n ? (r = e.s - th * t) : t === S1 ? (r = e.s + th) : (r = e.s + fk * t),
    r > 1 && (r = 1),
    n && t === y1 && r > 0.1 && (r = 0.1),
    r < 0.06 && (r = 0.06),
    Number(r.toFixed(2))
  );
}
function ih(e, t, n) {
  var r;
  return (
    n ? (r = e.v + dk * t) : (r = e.v - vk * t),
    r > 1 && (r = 1),
    Number(r.toFixed(2))
  );
}
function ul(e) {
  for (
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = [],
      r = li(e),
      o = y1;
    o > 0;
    o -= 1
  ) {
    var i = nh(r),
      a = ts(li({ h: rh(i, o, !0), s: oh(i, o, !0), v: ih(i, o, !0) }));
    n.push(a);
  }
  n.push(ts(r));
  for (var l = 1; l <= S1; l += 1) {
    var s = nh(r),
      u = ts(li({ h: rh(s, l), s: oh(s, l), v: ih(s, l) }));
    n.push(u);
  }
  return t.theme === 'dark'
    ? mk.map(function (c) {
        var d = c.index,
          v = c.opacity,
          w = ts(pk(li(t.backgroundColor || '#141414'), li(n[d]), v * 100));
        return w;
      })
    : n;
}
var Dc = {
    red: '#F5222D',
    volcano: '#FA541C',
    orange: '#FA8C16',
    gold: '#FAAD14',
    yellow: '#FADB14',
    lime: '#A0D911',
    green: '#52C41A',
    cyan: '#13C2C2',
    blue: '#1677FF',
    geekblue: '#2F54EB',
    purple: '#722ED1',
    magenta: '#EB2F96',
    grey: '#666666',
  },
  sd = [
    '#fff1f0',
    '#ffccc7',
    '#ffa39e',
    '#ff7875',
    '#ff4d4f',
    '#f5222d',
    '#cf1322',
    '#a8071a',
    '#820014',
    '#5c0011',
  ];
sd.primary = sd[5];
var ud = [
  '#fff2e8',
  '#ffd8bf',
  '#ffbb96',
  '#ff9c6e',
  '#ff7a45',
  '#fa541c',
  '#d4380d',
  '#ad2102',
  '#871400',
  '#610b00',
];
ud.primary = ud[5];
var cd = [
  '#fff7e6',
  '#ffe7ba',
  '#ffd591',
  '#ffc069',
  '#ffa940',
  '#fa8c16',
  '#d46b08',
  '#ad4e00',
  '#873800',
  '#612500',
];
cd.primary = cd[5];
var fd = [
  '#fffbe6',
  '#fff1b8',
  '#ffe58f',
  '#ffd666',
  '#ffc53d',
  '#faad14',
  '#d48806',
  '#ad6800',
  '#874d00',
  '#613400',
];
fd.primary = fd[5];
var dd = [
  '#feffe6',
  '#ffffb8',
  '#fffb8f',
  '#fff566',
  '#ffec3d',
  '#fadb14',
  '#d4b106',
  '#ad8b00',
  '#876800',
  '#614700',
];
dd.primary = dd[5];
var vd = [
  '#fcffe6',
  '#f4ffb8',
  '#eaff8f',
  '#d3f261',
  '#bae637',
  '#a0d911',
  '#7cb305',
  '#5b8c00',
  '#3f6600',
  '#254000',
];
vd.primary = vd[5];
var md = [
  '#f6ffed',
  '#d9f7be',
  '#b7eb8f',
  '#95de64',
  '#73d13d',
  '#52c41a',
  '#389e0d',
  '#237804',
  '#135200',
  '#092b00',
];
md.primary = md[5];
var pd = [
  '#e6fffb',
  '#b5f5ec',
  '#87e8de',
  '#5cdbd3',
  '#36cfc9',
  '#13c2c2',
  '#08979c',
  '#006d75',
  '#00474f',
  '#002329',
];
pd.primary = pd[5];
var iu = [
  '#e6f4ff',
  '#bae0ff',
  '#91caff',
  '#69b1ff',
  '#4096ff',
  '#1677ff',
  '#0958d9',
  '#003eb3',
  '#002c8c',
  '#001d66',
];
iu.primary = iu[5];
var hd = [
  '#f0f5ff',
  '#d6e4ff',
  '#adc6ff',
  '#85a5ff',
  '#597ef7',
  '#2f54eb',
  '#1d39c4',
  '#10239e',
  '#061178',
  '#030852',
];
hd.primary = hd[5];
var gd = [
  '#f9f0ff',
  '#efdbff',
  '#d3adf7',
  '#b37feb',
  '#9254de',
  '#722ed1',
  '#531dab',
  '#391085',
  '#22075e',
  '#120338',
];
gd.primary = gd[5];
var yd = [
  '#fff0f6',
  '#ffd6e7',
  '#ffadd2',
  '#ff85c0',
  '#f759ab',
  '#eb2f96',
  '#c41d7f',
  '#9e1068',
  '#780650',
  '#520339',
];
yd.primary = yd[5];
var Sd = [
  '#a6a6a6',
  '#999999',
  '#8c8c8c',
  '#808080',
  '#737373',
  '#666666',
  '#404040',
  '#1a1a1a',
  '#000000',
  '#000000',
];
Sd.primary = Sd[5];
var Bc = {
  red: sd,
  volcano: ud,
  orange: cd,
  gold: fd,
  yellow: dd,
  lime: vd,
  green: md,
  cyan: pd,
  blue: iu,
  geekblue: hd,
  purple: gd,
  magenta: yd,
  grey: Sd,
};
const w1 = {
    blue: '#1677FF',
    purple: '#722ED1',
    cyan: '#13C2C2',
    green: '#52C41A',
    magenta: '#EB2F96',
    pink: '#EB2F96',
    red: '#F5222D',
    orange: '#FA8C16',
    yellow: '#FADB14',
    volcano: '#FA541C',
    geekblue: '#2F54EB',
    gold: '#FAAD14',
    lime: '#A0D911',
  },
  cl = Object.assign(Object.assign({}, w1), {
    colorPrimary: '#1677ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    colorInfo: '#1677ff',
    colorLink: '',
    colorTextBase: '',
    colorBgBase: '',
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
    fontFamilyCode:
      "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    fontSize: 14,
    lineWidth: 1,
    lineType: 'solid',
    motionUnit: 0.1,
    motionBase: 0,
    motionEaseOutCirc: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
    motionEaseInOutCirc: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
    motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    motionEaseOutBack: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
    motionEaseInBack: 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
    motionEaseInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    motionEaseOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
    borderRadius: 6,
    sizeUnit: 4,
    sizeStep: 4,
    sizePopupArrow: 16,
    controlHeight: 32,
    zIndexBase: 0,
    zIndexPopupBase: 1e3,
    opacityImage: 1,
    wireframe: !1,
    motion: !0,
  });
function hk(e, t) {
  let { generateColorPalettes: n, generateNeutralColorPalettes: r } = t;
  const {
      colorSuccess: o,
      colorWarning: i,
      colorError: a,
      colorInfo: l,
      colorPrimary: s,
      colorBgBase: u,
      colorTextBase: c,
    } = e,
    d = n(s),
    v = n(o),
    w = n(i),
    g = n(a),
    S = n(l),
    y = r(u, c),
    p = e.colorLink || e.colorInfo,
    m = n(p),
    h = new _t(g[1]).mix(new _t(g[3]), 50).toHexString();
  return Object.assign(Object.assign({}, y), {
    colorPrimaryBg: d[1],
    colorPrimaryBgHover: d[2],
    colorPrimaryBorder: d[3],
    colorPrimaryBorderHover: d[4],
    colorPrimaryHover: d[5],
    colorPrimary: d[6],
    colorPrimaryActive: d[7],
    colorPrimaryTextHover: d[8],
    colorPrimaryText: d[9],
    colorPrimaryTextActive: d[10],
    colorSuccessBg: v[1],
    colorSuccessBgHover: v[2],
    colorSuccessBorder: v[3],
    colorSuccessBorderHover: v[4],
    colorSuccessHover: v[4],
    colorSuccess: v[6],
    colorSuccessActive: v[7],
    colorSuccessTextHover: v[8],
    colorSuccessText: v[9],
    colorSuccessTextActive: v[10],
    colorErrorBg: g[1],
    colorErrorBgHover: g[2],
    colorErrorBgFilledHover: h,
    colorErrorBgActive: g[3],
    colorErrorBorder: g[3],
    colorErrorBorderHover: g[4],
    colorErrorHover: g[5],
    colorError: g[6],
    colorErrorActive: g[7],
    colorErrorTextHover: g[8],
    colorErrorText: g[9],
    colorErrorTextActive: g[10],
    colorWarningBg: w[1],
    colorWarningBgHover: w[2],
    colorWarningBorder: w[3],
    colorWarningBorderHover: w[4],
    colorWarningHover: w[4],
    colorWarning: w[6],
    colorWarningActive: w[7],
    colorWarningTextHover: w[8],
    colorWarningText: w[9],
    colorWarningTextActive: w[10],
    colorInfoBg: S[1],
    colorInfoBgHover: S[2],
    colorInfoBorder: S[3],
    colorInfoBorderHover: S[4],
    colorInfoHover: S[4],
    colorInfo: S[6],
    colorInfoActive: S[7],
    colorInfoTextHover: S[8],
    colorInfoText: S[9],
    colorInfoTextActive: S[10],
    colorLinkHover: m[4],
    colorLink: m[6],
    colorLinkActive: m[7],
    colorBgMask: new _t('#000').setAlpha(0.45).toRgbString(),
    colorWhite: '#fff',
  });
}
const gk = (e) => {
  let t = e,
    n = e,
    r = e,
    o = e;
  return (
    e < 6 && e >= 5
      ? (t = e + 1)
      : e < 16 && e >= 6
        ? (t = e + 2)
        : e >= 16 && (t = 16),
    e < 7 && e >= 5
      ? (n = 4)
      : e < 8 && e >= 7
        ? (n = 5)
        : e < 14 && e >= 8
          ? (n = 6)
          : e < 16 && e >= 14
            ? (n = 7)
            : e >= 16 && (n = 8),
    e < 6 && e >= 2 ? (r = 1) : e >= 6 && (r = 2),
    e > 4 && e < 8 ? (o = 4) : e >= 8 && (o = 6),
    {
      borderRadius: e,
      borderRadiusXS: r,
      borderRadiusSM: n,
      borderRadiusLG: t,
      borderRadiusOuter: o,
    }
  );
};
function yk(e) {
  const { motionUnit: t, motionBase: n, borderRadius: r, lineWidth: o } = e;
  return Object.assign(
    {
      motionDurationFast: `${(n + t).toFixed(1)}s`,
      motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
      motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
      lineWidthBold: o + 1,
    },
    gk(r)
  );
}
const Sk = (e) => {
  const { controlHeight: t } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25,
  };
};
function wk(e) {
  return (e + 8) / e;
}
function Ck(e) {
  const t = new Array(10).fill(null).map((n, r) => {
    const o = r - 1,
      i = e * Math.pow(Math.E, o / 5),
      a = r > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(a / 2) * 2;
  });
  return (t[1] = e), t.map((n) => ({ size: n, lineHeight: wk(n) }));
}
const bk = (e) => {
  const t = Ck(e),
    n = t.map((c) => c.size),
    r = t.map((c) => c.lineHeight),
    o = n[1],
    i = n[0],
    a = n[2],
    l = r[1],
    s = r[0],
    u = r[2];
  return {
    fontSizeSM: i,
    fontSize: o,
    fontSizeLG: a,
    fontSizeXL: n[3],
    fontSizeHeading1: n[6],
    fontSizeHeading2: n[5],
    fontSizeHeading3: n[4],
    fontSizeHeading4: n[3],
    fontSizeHeading5: n[2],
    lineHeight: l,
    lineHeightLG: u,
    lineHeightSM: s,
    fontHeight: Math.round(l * o),
    fontHeightLG: Math.round(u * a),
    fontHeightSM: Math.round(s * i),
    lineHeightHeading1: r[6],
    lineHeightHeading2: r[5],
    lineHeightHeading3: r[4],
    lineHeightHeading4: r[3],
    lineHeightHeading5: r[2],
  };
};
function xk(e) {
  const { sizeUnit: t, sizeStep: n } = e;
  return {
    sizeXXL: t * (n + 8),
    sizeXL: t * (n + 4),
    sizeLG: t * (n + 2),
    sizeMD: t * (n + 1),
    sizeMS: t * n,
    size: t * n,
    sizeSM: t * (n - 1),
    sizeXS: t * (n - 2),
    sizeXXS: t * (n - 3),
  };
}
const kn = (e, t) => new _t(e).setAlpha(t).toRgbString(),
  ca = (e, t) => new _t(e).darken(t).toHexString(),
  Ek = (e) => {
    const t = ul(e);
    return {
      1: t[0],
      2: t[1],
      3: t[2],
      4: t[3],
      5: t[4],
      6: t[5],
      7: t[6],
      8: t[4],
      9: t[5],
      10: t[6],
    };
  },
  kk = (e, t) => {
    const n = e || '#fff',
      r = t || '#000';
    return {
      colorBgBase: n,
      colorTextBase: r,
      colorText: kn(r, 0.88),
      colorTextSecondary: kn(r, 0.65),
      colorTextTertiary: kn(r, 0.45),
      colorTextQuaternary: kn(r, 0.25),
      colorFill: kn(r, 0.15),
      colorFillSecondary: kn(r, 0.06),
      colorFillTertiary: kn(r, 0.04),
      colorFillQuaternary: kn(r, 0.02),
      colorBgSolid: kn(r, 1),
      colorBgSolidHover: kn(r, 0.75),
      colorBgSolidActive: kn(r, 0.95),
      colorBgLayout: ca(n, 4),
      colorBgContainer: ca(n, 0),
      colorBgElevated: ca(n, 0),
      colorBgSpotlight: kn(r, 0.85),
      colorBgBlur: 'transparent',
      colorBorder: ca(n, 15),
      colorBorderSecondary: ca(n, 6),
    };
  };
function Pk(e) {
  (Dc.pink = Dc.magenta), (Bc.pink = Bc.magenta);
  const t = Object.keys(w1)
    .map((n) => {
      const r = e[n] === Dc[n] ? Bc[n] : ul(e[n]);
      return new Array(10)
        .fill(1)
        .reduce(
          (o, i, a) => (
            (o[`${n}-${a + 1}`] = r[a]), (o[`${n}${a + 1}`] = r[a]), o
          ),
          {}
        );
    })
    .reduce((n, r) => ((n = Object.assign(Object.assign({}, n), r)), n), {});
  return Object.assign(
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(Object.assign({}, e), t),
            hk(e, {
              generateColorPalettes: Ek,
              generateNeutralColorPalettes: kk,
            })
          ),
          bk(e.fontSize)
        ),
        xk(e)
      ),
      Sk(e)
    ),
    yk(e)
  );
}
const C1 = ed(Pk),
  wd = { token: cl, override: { override: cl }, hashed: !0 },
  b1 = ae.createContext(wd),
  au = 'ant',
  x1 = 'anticon',
  Rk = (e, t) => t || (e ? `${au}-${e}` : au),
  wn = f.createContext({ getPrefixCls: Rk, iconPrefixCls: x1 }),
  Ik = `-ant-${Date.now()}-${Math.random()}`;
function Mk(e, t) {
  const n = {},
    r = (a, l) => {
      let s = a.clone();
      return (s = (l == null ? void 0 : l(s)) || s), s.toRgbString();
    },
    o = (a, l) => {
      const s = new _t(a),
        u = ul(s.toRgbString());
      (n[`${l}-color`] = r(s)),
        (n[`${l}-color-disabled`] = u[1]),
        (n[`${l}-color-hover`] = u[4]),
        (n[`${l}-color-active`] = u[6]),
        (n[`${l}-color-outline`] = s.clone().setAlpha(0.2).toRgbString()),
        (n[`${l}-color-deprecated-bg`] = u[0]),
        (n[`${l}-color-deprecated-border`] = u[2]);
    };
  if (t.primaryColor) {
    o(t.primaryColor, 'primary');
    const a = new _t(t.primaryColor),
      l = ul(a.toRgbString());
    l.forEach((u, c) => {
      n[`primary-${c + 1}`] = u;
    }),
      (n['primary-color-deprecated-l-35'] = r(a, (u) => u.lighten(35))),
      (n['primary-color-deprecated-l-20'] = r(a, (u) => u.lighten(20))),
      (n['primary-color-deprecated-t-20'] = r(a, (u) => u.tint(20))),
      (n['primary-color-deprecated-t-50'] = r(a, (u) => u.tint(50))),
      (n['primary-color-deprecated-f-12'] = r(a, (u) =>
        u.setAlpha(u.getAlpha() * 0.12)
      ));
    const s = new _t(l[0]);
    (n['primary-color-active-deprecated-f-30'] = r(s, (u) =>
      u.setAlpha(u.getAlpha() * 0.3)
    )),
      (n['primary-color-active-deprecated-d-02'] = r(s, (u) => u.darken(2)));
  }
  return (
    t.successColor && o(t.successColor, 'success'),
    t.warningColor && o(t.warningColor, 'warning'),
    t.errorColor && o(t.errorColor, 'error'),
    t.infoColor && o(t.infoColor, 'info'),
    `
  :root {
    ${Object.keys(n).map((a) => `--${e}-${a}: ${n[a]};`).join(`
`)}
  }
  `.trim()
  );
}
function Ok(e, t) {
  const n = Mk(e, t);
  Sn() && xr(n, `${Ik}-dynamic-theme`);
}
const Cd = f.createContext(!1),
  $k = (e) => {
    let { children: t, disabled: n } = e;
    const r = f.useContext(Cd);
    return f.createElement(Cd.Provider, { value: n ?? r }, t);
  },
  fl = f.createContext(void 0),
  Tk = (e) => {
    let { children: t, size: n } = e;
    const r = f.useContext(fl);
    return f.createElement(fl.Provider, { value: n || r }, t);
  };
function _k() {
  const e = f.useContext(Cd),
    t = f.useContext(fl);
  return { componentDisabled: e, componentSize: t };
}
var E1 = zt(function e() {
    At(this, e);
  }),
  k1 = 'CALC_UNIT',
  Nk = new RegExp(k1, 'g');
function Vc(e) {
  return typeof e == 'number' ? ''.concat(e).concat(k1) : e;
}
var Fk = (function (e) {
    co(n, e);
    var t = fo(n);
    function n(r, o) {
      var i;
      At(this, n),
        (i = t.call(this)),
        $(se(i), 'result', ''),
        $(se(i), 'unitlessCssVar', void 0),
        $(se(i), 'lowPriority', void 0);
      var a = oe(r);
      return (
        (i.unitlessCssVar = o),
        r instanceof n
          ? (i.result = '('.concat(r.result, ')'))
          : a === 'number'
            ? (i.result = Vc(r))
            : a === 'string' && (i.result = r),
        i
      );
    }
    return (
      zt(n, [
        {
          key: 'add',
          value: function (o) {
            return (
              o instanceof n
                ? (this.result = ''
                    .concat(this.result, ' + ')
                    .concat(o.getResult()))
                : (typeof o == 'number' || typeof o == 'string') &&
                  (this.result = ''.concat(this.result, ' + ').concat(Vc(o))),
              (this.lowPriority = !0),
              this
            );
          },
        },
        {
          key: 'sub',
          value: function (o) {
            return (
              o instanceof n
                ? (this.result = ''
                    .concat(this.result, ' - ')
                    .concat(o.getResult()))
                : (typeof o == 'number' || typeof o == 'string') &&
                  (this.result = ''.concat(this.result, ' - ').concat(Vc(o))),
              (this.lowPriority = !0),
              this
            );
          },
        },
        {
          key: 'mul',
          value: function (o) {
            return (
              this.lowPriority && (this.result = '('.concat(this.result, ')')),
              o instanceof n
                ? (this.result = ''
                    .concat(this.result, ' * ')
                    .concat(o.getResult(!0)))
                : (typeof o == 'number' || typeof o == 'string') &&
                  (this.result = ''.concat(this.result, ' * ').concat(o)),
              (this.lowPriority = !1),
              this
            );
          },
        },
        {
          key: 'div',
          value: function (o) {
            return (
              this.lowPriority && (this.result = '('.concat(this.result, ')')),
              o instanceof n
                ? (this.result = ''
                    .concat(this.result, ' / ')
                    .concat(o.getResult(!0)))
                : (typeof o == 'number' || typeof o == 'string') &&
                  (this.result = ''.concat(this.result, ' / ').concat(o)),
              (this.lowPriority = !1),
              this
            );
          },
        },
        {
          key: 'getResult',
          value: function (o) {
            return this.lowPriority || o
              ? '('.concat(this.result, ')')
              : this.result;
          },
        },
        {
          key: 'equal',
          value: function (o) {
            var i = this,
              a = o || {},
              l = a.unit,
              s = !0;
            return (
              typeof l == 'boolean'
                ? (s = l)
                : Array.from(this.unitlessCssVar).some(function (u) {
                    return i.result.includes(u);
                  }) && (s = !1),
              (this.result = this.result.replace(Nk, s ? 'px' : '')),
              typeof this.lowPriority < 'u'
                ? 'calc('.concat(this.result, ')')
                : this.result
            );
          },
        },
      ]),
      n
    );
  })(E1),
  Lk = (function (e) {
    co(n, e);
    var t = fo(n);
    function n(r) {
      var o;
      return (
        At(this, n),
        (o = t.call(this)),
        $(se(o), 'result', 0),
        r instanceof n
          ? (o.result = r.result)
          : typeof r == 'number' && (o.result = r),
        o
      );
    }
    return (
      zt(n, [
        {
          key: 'add',
          value: function (o) {
            return (
              o instanceof n
                ? (this.result += o.result)
                : typeof o == 'number' && (this.result += o),
              this
            );
          },
        },
        {
          key: 'sub',
          value: function (o) {
            return (
              o instanceof n
                ? (this.result -= o.result)
                : typeof o == 'number' && (this.result -= o),
              this
            );
          },
        },
        {
          key: 'mul',
          value: function (o) {
            return (
              o instanceof n
                ? (this.result *= o.result)
                : typeof o == 'number' && (this.result *= o),
              this
            );
          },
        },
        {
          key: 'div',
          value: function (o) {
            return (
              o instanceof n
                ? (this.result /= o.result)
                : typeof o == 'number' && (this.result /= o),
              this
            );
          },
        },
        {
          key: 'equal',
          value: function () {
            return this.result;
          },
        },
      ]),
      n
    );
  })(E1),
  Ak = function (t, n) {
    var r = t === 'css' ? Fk : Lk;
    return function (o) {
      return new r(o, n);
    };
  },
  ah = function (t, n) {
    return ''.concat(
      [
        n,
        t
          .replace(/([A-Z]+)([A-Z][a-z]+)/g, '$1-$2')
          .replace(/([a-z])([A-Z])/g, '$1-$2'),
      ]
        .filter(Boolean)
        .join('-')
    );
  };
function tn(e) {
  var t = f.useRef();
  t.current = e;
  var n = f.useCallback(function () {
    for (var r, o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (r = t.current) === null || r === void 0
      ? void 0
      : r.call.apply(r, [t].concat(i));
  }, []);
  return n;
}
function dl(e) {
  var t = f.useRef(!1),
    n = f.useState(e),
    r = V(n, 2),
    o = r[0],
    i = r[1];
  f.useEffect(function () {
    return (
      (t.current = !1),
      function () {
        t.current = !0;
      }
    );
  }, []);
  function a(l, s) {
    (s && t.current) || i(l);
  }
  return [o, a];
}
function Hc(e) {
  return e !== void 0;
}
function Ta(e, t) {
  var n = t || {},
    r = n.defaultValue,
    o = n.value,
    i = n.onChange,
    a = n.postState,
    l = dl(function () {
      return Hc(o)
        ? o
        : Hc(r)
          ? typeof r == 'function'
            ? r()
            : r
          : typeof e == 'function'
            ? e()
            : e;
    }),
    s = V(l, 2),
    u = s[0],
    c = s[1],
    d = o !== void 0 ? o : u,
    v = a ? a(d) : d,
    w = tn(i),
    g = dl([d]),
    S = V(g, 2),
    y = S[0],
    p = S[1];
  Up(
    function () {
      var h = y[0];
      u !== h && w(u, h);
    },
    [y]
  ),
    Up(
      function () {
        Hc(o) || c(o);
      },
      [o]
    );
  var m = tn(function (h, C) {
    c(h, C), p([d], C);
  });
  return [v, m];
}
function lh(e, t, n, r) {
  var o = N({}, t[e]);
  if (r != null && r.deprecatedTokens) {
    var i = r.deprecatedTokens;
    i.forEach(function (l) {
      var s = V(l, 2),
        u = s[0],
        c = s[1];
      if ((o != null && o[u]) || (o != null && o[c])) {
        var d;
        ((d = o[c]) !== null && d !== void 0) ||
          (o[c] = o == null ? void 0 : o[u]);
      }
    });
  }
  var a = N(N({}, n), o);
  return (
    Object.keys(a).forEach(function (l) {
      a[l] === t[l] && delete a[l];
    }),
    a
  );
}
var P1 = typeof CSSINJS_STATISTIC < 'u',
  bd = !0;
function Bi() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!P1) return Object.assign.apply(Object, [{}].concat(t));
  bd = !1;
  var r = {};
  return (
    t.forEach(function (o) {
      if (oe(o) === 'object') {
        var i = Object.keys(o);
        i.forEach(function (a) {
          Object.defineProperty(r, a, {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return o[a];
            },
          });
        });
      }
    }),
    (bd = !0),
    r
  );
}
var sh = {};
function zk() {}
var jk = function (t) {
  var n,
    r = t,
    o = zk;
  return (
    P1 &&
      typeof Proxy < 'u' &&
      ((n = new Set()),
      (r = new Proxy(t, {
        get: function (a, l) {
          if (bd) {
            var s;
            (s = n) === null || s === void 0 || s.add(l);
          }
          return a[l];
        },
      })),
      (o = function (a, l) {
        var s;
        sh[a] = {
          global: Array.from(n),
          component: N(
            N({}, (s = sh[a]) === null || s === void 0 ? void 0 : s.component),
            l
          ),
        };
      })),
    { token: r, keys: n, flush: o }
  );
};
function uh(e, t, n) {
  if (typeof n == 'function') {
    var r;
    return n(Bi(t, (r = t[e]) !== null && r !== void 0 ? r : {}));
  }
  return n ?? {};
}
function Dk(e) {
  return e === 'js'
    ? { max: Math.max, min: Math.min }
    : {
        max: function () {
          for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return 'max('.concat(
            r
              .map(function (i) {
                return pe(i);
              })
              .join(','),
            ')'
          );
        },
        min: function () {
          for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return 'min('.concat(
            r
              .map(function (i) {
                return pe(i);
              })
              .join(','),
            ')'
          );
        },
      };
}
var Bk = 1e3 * 60 * 10,
  Vk = (function () {
    function e() {
      At(this, e),
        $(this, 'map', new Map()),
        $(this, 'objectIDMap', new WeakMap()),
        $(this, 'nextID', 0),
        $(this, 'lastAccessBeat', new Map()),
        $(this, 'accessBeat', 0);
    }
    return (
      zt(e, [
        {
          key: 'set',
          value: function (n, r) {
            this.clear();
            var o = this.getCompositeKey(n);
            this.map.set(o, r), this.lastAccessBeat.set(o, Date.now());
          },
        },
        {
          key: 'get',
          value: function (n) {
            var r = this.getCompositeKey(n),
              o = this.map.get(r);
            return (
              this.lastAccessBeat.set(r, Date.now()), (this.accessBeat += 1), o
            );
          },
        },
        {
          key: 'getCompositeKey',
          value: function (n) {
            var r = this,
              o = n.map(function (i) {
                return i && oe(i) === 'object'
                  ? 'obj_'.concat(r.getObjectID(i))
                  : ''.concat(oe(i), '_').concat(i);
              });
            return o.join('|');
          },
        },
        {
          key: 'getObjectID',
          value: function (n) {
            if (this.objectIDMap.has(n)) return this.objectIDMap.get(n);
            var r = this.nextID;
            return this.objectIDMap.set(n, r), (this.nextID += 1), r;
          },
        },
        {
          key: 'clear',
          value: function () {
            var n = this;
            if (this.accessBeat > 1e4) {
              var r = Date.now();
              this.lastAccessBeat.forEach(function (o, i) {
                r - o > Bk && (n.map.delete(i), n.lastAccessBeat.delete(i));
              }),
                (this.accessBeat = 0);
            }
          },
        },
      ]),
      e
    );
  })(),
  ch = new Vk();
function Hk(e, t) {
  return ae.useMemo(function () {
    var n = ch.get(t);
    if (n) return n;
    var r = e();
    return ch.set(t, r), r;
  }, t);
}
var Uk = function () {
  return {};
};
function Wk(e) {
  var t = e.useCSP,
    n = t === void 0 ? Uk : t,
    r = e.useToken,
    o = e.usePrefix,
    i = e.getResetStyles,
    a = e.getCommonStyle,
    l = e.getCompUnitless;
  function s(v, w, g, S) {
    var y = Array.isArray(v) ? v[0] : v;
    function p(P) {
      return ''
        .concat(String(y))
        .concat(P.slice(0, 1).toUpperCase())
        .concat(P.slice(1));
    }
    var m = (S == null ? void 0 : S.unitless) || {},
      h = typeof l == 'function' ? l(v) : {},
      C = N(N({}, h), {}, $({}, p('zIndexPopup'), !0));
    Object.keys(m).forEach(function (P) {
      C[p(P)] = m[P];
    });
    var b = N(N({}, S), {}, { unitless: C, prefixToken: p }),
      x = c(v, w, g, b),
      E = u(y, g, b);
    return function (P) {
      var I =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : P,
        M = x(P, I),
        A = V(M, 2),
        j = A[1],
        L = E(I),
        F = V(L, 2),
        U = F[0],
        T = F[1];
      return [U, j, T];
    };
  }
  function u(v, w, g) {
    var S = g.unitless,
      y = g.injectStyle,
      p = y === void 0 ? !0 : y,
      m = g.prefixToken,
      h = g.ignore,
      C = function (E) {
        var P = E.rootCls,
          I = E.cssVar,
          M = I === void 0 ? {} : I,
          A = r(),
          j = A.realToken;
        return (
          DE(
            {
              path: [v],
              prefix: M.prefix,
              key: M.key,
              unitless: S,
              ignore: h,
              token: j,
              scope: P,
            },
            function () {
              var L = uh(v, j, w),
                F = lh(v, j, L, {
                  deprecatedTokens: g == null ? void 0 : g.deprecatedTokens,
                });
              return (
                Object.keys(L).forEach(function (U) {
                  (F[m(U)] = F[U]), delete F[U];
                }),
                F
              );
            }
          ),
          null
        );
      },
      b = function (E) {
        var P = r(),
          I = P.cssVar;
        return [
          function (M) {
            return p && I
              ? ae.createElement(
                  ae.Fragment,
                  null,
                  ae.createElement(C, { rootCls: E, cssVar: I, component: v }),
                  M
                )
              : M;
          },
          I == null ? void 0 : I.key,
        ];
      };
    return b;
  }
  function c(v, w, g) {
    var S = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
      y = Array.isArray(v) ? v : [v, v],
      p = V(y, 1),
      m = p[0],
      h = y.join('-'),
      C = e.layer || { name: 'antd' };
    return function (b) {
      var x =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : b,
        E = r(),
        P = E.theme,
        I = E.realToken,
        M = E.hashId,
        A = E.token,
        j = E.cssVar,
        L = o(),
        F = L.rootPrefixCls,
        U = L.iconPrefixCls,
        T = n(),
        R = j ? 'css' : 'js',
        k = Hk(
          function () {
            var D = new Set();
            return (
              j &&
                Object.keys(S.unitless || {}).forEach(function (q) {
                  D.add(xs(q, j.prefix)), D.add(xs(q, ah(m, j.prefix)));
                }),
              Ak(R, D)
            );
          },
          [R, m, j == null ? void 0 : j.prefix]
        ),
        O = Dk(R),
        _ = O.max,
        z = O.min,
        B = {
          theme: P,
          token: A,
          hashId: M,
          nonce: function () {
            return T.nonce;
          },
          clientOnly: S.clientOnly,
          layer: C,
          order: S.order || -999,
        };
      od(N(N({}, B), {}, { clientOnly: !1, path: ['Shared', F] }), function () {
        return typeof i == 'function' ? i(A) : [];
      });
      var K = od(N(N({}, B), {}, { path: [h, b, U] }), function () {
        if (S.injectStyle === !1) return [];
        var D = jk(A),
          q = D.token,
          te = D.flush,
          ne = uh(m, I, g),
          xe = '.'.concat(b),
          le = lh(m, I, ne, { deprecatedTokens: S.deprecatedTokens });
        j &&
          ne &&
          oe(ne) === 'object' &&
          Object.keys(ne).forEach(function (Ne) {
            ne[Ne] = 'var('.concat(xs(Ne, ah(m, j.prefix)), ')');
          });
        var he = Bi(
            q,
            {
              componentCls: xe,
              prefixCls: b,
              iconCls: '.'.concat(U),
              antCls: '.'.concat(F),
              calc: k,
              max: _,
              min: z,
            },
            j ? ne : le
          ),
          Ee = w(he, {
            hashId: M,
            prefixCls: b,
            rootPrefixCls: F,
            iconPrefixCls: U,
          });
        te(m, le);
        var ge = typeof a == 'function' ? a(he, b, x, S.resetFont) : null;
        return [S.resetStyle === !1 ? null : ge, Ee];
      });
      return [K, M];
    };
  }
  function d(v, w, g) {
    var S = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
      y = c(v, w, g, N({ resetStyle: !1, order: -998 }, S)),
      p = function (h) {
        var C = h.prefixCls,
          b = h.rootCls,
          x = b === void 0 ? C : b;
        return y(C, x), null;
      };
    return p;
  }
  return {
    genStyleHooks: s,
    genSubStyleComponent: d,
    genComponentStyleHook: c,
  };
}
const lu = [
    'blue',
    'purple',
    'cyan',
    'green',
    'magenta',
    'pink',
    'red',
    'orange',
    'yellow',
    'volcano',
    'geekblue',
    'lime',
    'gold',
  ],
  Kk = '5.22.1';
function Uc(e) {
  return e >= 0 && e <= 255;
}
function ns(e, t) {
  const { r: n, g: r, b: o, a: i } = new _t(e).toRgb();
  if (i < 1) return e;
  const { r: a, g: l, b: s } = new _t(t).toRgb();
  for (let u = 0.01; u <= 1; u += 0.01) {
    const c = Math.round((n - a * (1 - u)) / u),
      d = Math.round((r - l * (1 - u)) / u),
      v = Math.round((o - s * (1 - u)) / u);
    if (Uc(c) && Uc(d) && Uc(v))
      return new _t({
        r: c,
        g: d,
        b: v,
        a: Math.round(u * 100) / 100,
      }).toRgbString();
  }
  return new _t({ r: n, g: r, b: o, a: 1 }).toRgbString();
}
var Gk = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
function R1(e) {
  const { override: t } = e,
    n = Gk(e, ['override']),
    r = Object.assign({}, t);
  Object.keys(cl).forEach((v) => {
    delete r[v];
  });
  const o = Object.assign(Object.assign({}, n), r),
    i = 480,
    a = 576,
    l = 768,
    s = 992,
    u = 1200,
    c = 1600;
  if (o.motion === !1) {
    const v = '0s';
    (o.motionDurationFast = v),
      (o.motionDurationMid = v),
      (o.motionDurationSlow = v);
  }
  return Object.assign(
    Object.assign(Object.assign({}, o), {
      colorFillContent: o.colorFillSecondary,
      colorFillContentHover: o.colorFill,
      colorFillAlter: o.colorFillQuaternary,
      colorBgContainerDisabled: o.colorFillTertiary,
      colorBorderBg: o.colorBgContainer,
      colorSplit: ns(o.colorBorderSecondary, o.colorBgContainer),
      colorTextPlaceholder: o.colorTextQuaternary,
      colorTextDisabled: o.colorTextQuaternary,
      colorTextHeading: o.colorText,
      colorTextLabel: o.colorTextSecondary,
      colorTextDescription: o.colorTextTertiary,
      colorTextLightSolid: o.colorWhite,
      colorHighlight: o.colorError,
      colorBgTextHover: o.colorFillSecondary,
      colorBgTextActive: o.colorFill,
      colorIcon: o.colorTextTertiary,
      colorIconHover: o.colorText,
      colorErrorOutline: ns(o.colorErrorBg, o.colorBgContainer),
      colorWarningOutline: ns(o.colorWarningBg, o.colorBgContainer),
      fontSizeIcon: o.fontSizeSM,
      lineWidthFocus: o.lineWidth * 3,
      lineWidth: o.lineWidth,
      controlOutlineWidth: o.lineWidth * 2,
      controlInteractiveSize: o.controlHeight / 2,
      controlItemBgHover: o.colorFillTertiary,
      controlItemBgActive: o.colorPrimaryBg,
      controlItemBgActiveHover: o.colorPrimaryBgHover,
      controlItemBgActiveDisabled: o.colorFill,
      controlTmpOutline: o.colorFillQuaternary,
      controlOutline: ns(o.colorPrimaryBg, o.colorBgContainer),
      lineType: o.lineType,
      borderRadius: o.borderRadius,
      borderRadiusXS: o.borderRadiusXS,
      borderRadiusSM: o.borderRadiusSM,
      borderRadiusLG: o.borderRadiusLG,
      fontWeightStrong: 600,
      opacityLoading: 0.65,
      linkDecoration: 'none',
      linkHoverDecoration: 'none',
      linkFocusDecoration: 'none',
      controlPaddingHorizontal: 12,
      controlPaddingHorizontalSM: 8,
      paddingXXS: o.sizeXXS,
      paddingXS: o.sizeXS,
      paddingSM: o.sizeSM,
      padding: o.size,
      paddingMD: o.sizeMD,
      paddingLG: o.sizeLG,
      paddingXL: o.sizeXL,
      paddingContentHorizontalLG: o.sizeLG,
      paddingContentVerticalLG: o.sizeMS,
      paddingContentHorizontal: o.sizeMS,
      paddingContentVertical: o.sizeSM,
      paddingContentHorizontalSM: o.size,
      paddingContentVerticalSM: o.sizeXS,
      marginXXS: o.sizeXXS,
      marginXS: o.sizeXS,
      marginSM: o.sizeSM,
      margin: o.size,
      marginMD: o.sizeMD,
      marginLG: o.sizeLG,
      marginXL: o.sizeXL,
      marginXXL: o.sizeXXL,
      boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
      screenXS: i,
      screenXSMin: i,
      screenXSMax: a - 1,
      screenSM: a,
      screenSMMin: a,
      screenSMMax: l - 1,
      screenMD: l,
      screenMDMin: l,
      screenMDMax: s - 1,
      screenLG: s,
      screenLGMin: s,
      screenLGMax: u - 1,
      screenXL: u,
      screenXLMin: u,
      screenXLMax: c - 1,
      screenXXL: c,
      screenXXLMin: c,
      boxShadowPopoverArrow: '2px 2px 5px rgba(0, 0, 0, 0.05)',
      boxShadowCard: `
      0 1px 2px -2px ${new _t('rgba(0, 0, 0, 0.16)').toRgbString()},
      0 3px 6px 0 ${new _t('rgba(0, 0, 0, 0.12)').toRgbString()},
      0 5px 12px 4px ${new _t('rgba(0, 0, 0, 0.09)').toRgbString()}
    `,
      boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTabsOverflowLeft: 'inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)',
      boxShadowTabsOverflowRight: 'inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)',
      boxShadowTabsOverflowTop: 'inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)',
      boxShadowTabsOverflowBottom: 'inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)',
    }),
    r
  );
}
var fh = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
const I1 = {
    lineHeight: !0,
    lineHeightSM: !0,
    lineHeightLG: !0,
    lineHeightHeading1: !0,
    lineHeightHeading2: !0,
    lineHeightHeading3: !0,
    lineHeightHeading4: !0,
    lineHeightHeading5: !0,
    opacityLoading: !0,
    fontWeightStrong: !0,
    zIndexPopupBase: !0,
    zIndexBase: !0,
    opacityImage: !0,
  },
  qk = {
    size: !0,
    sizeSM: !0,
    sizeLG: !0,
    sizeMD: !0,
    sizeXS: !0,
    sizeXXS: !0,
    sizeMS: !0,
    sizeXL: !0,
    sizeXXL: !0,
    sizeUnit: !0,
    sizeStep: !0,
    motionBase: !0,
    motionUnit: !0,
  },
  Xk = {
    screenXS: !0,
    screenXSMin: !0,
    screenXSMax: !0,
    screenSM: !0,
    screenSMMin: !0,
    screenSMMax: !0,
    screenMD: !0,
    screenMDMin: !0,
    screenMDMax: !0,
    screenLG: !0,
    screenLGMin: !0,
    screenLGMax: !0,
    screenXL: !0,
    screenXLMin: !0,
    screenXLMax: !0,
    screenXXL: !0,
    screenXXLMin: !0,
  },
  M1 = (e, t, n) => {
    const r = n.getDerivativeToken(e),
      { override: o } = t,
      i = fh(t, ['override']);
    let a = Object.assign(Object.assign({}, r), { override: o });
    return (
      (a = R1(a)),
      i &&
        Object.entries(i).forEach((l) => {
          let [s, u] = l;
          const { theme: c } = u,
            d = fh(u, ['theme']);
          let v = d;
          c &&
            (v = M1(
              Object.assign(Object.assign({}, a), d),
              { override: d },
              c
            )),
            (a[s] = v);
        }),
      a
    );
  };
function Xi() {
  const {
      token: e,
      hashed: t,
      theme: n,
      override: r,
      cssVar: o,
    } = ae.useContext(b1),
    i = `${Kk}-${t || ''}`,
    a = n || C1,
    [l, s, u] = vE(a, [cl, e], {
      salt: i,
      override: r,
      getComputedToken: M1,
      formatToken: R1,
      cssVar: o && {
        prefix: o.prefix,
        key: o.key,
        unitless: I1,
        ignore: qk,
        preserve: Xk,
      },
    });
  return [a, u, t ? s : '', l, o];
}
const Qk = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  O1 = function (e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
      color: e.colorText,
      fontSize: e.fontSize,
      lineHeight: e.lineHeight,
      listStyle: 'none',
      fontFamily: t ? 'inherit' : e.fontFamily,
    };
  },
  $1 = () => ({
    display: 'inline-flex',
    alignItems: 'center',
    color: 'inherit',
    fontStyle: 'normal',
    lineHeight: 0,
    textAlign: 'center',
    textTransform: 'none',
    verticalAlign: '-0.125em',
    textRendering: 'optimizeLegibility',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    '> *': { lineHeight: 1 },
    svg: { display: 'inline-block' },
  }),
  dh = () => ({
    '&::before': { display: 'table', content: '""' },
    '&::after': { display: 'table', clear: 'both', content: '""' },
  }),
  Yk = (e) => ({
    a: {
      color: e.colorLink,
      textDecoration: e.linkDecoration,
      backgroundColor: 'transparent',
      outline: 'none',
      cursor: 'pointer',
      transition: `color ${e.motionDurationSlow}`,
      '-webkit-text-decoration-skip': 'objects',
      '&:hover': { color: e.colorLinkHover },
      '&:active': { color: e.colorLinkActive },
      '&:active, &:hover': {
        textDecoration: e.linkHoverDecoration,
        outline: 0,
      },
      '&:focus': { textDecoration: e.linkFocusDecoration, outline: 0 },
      '&[disabled]': { color: e.colorTextDisabled, cursor: 'not-allowed' },
    },
  }),
  Zk = (e, t, n, r) => {
    const o = `[class^="${t}"], [class*=" ${t}"]`,
      i = n ? `.${n}` : o,
      a = {
        boxSizing: 'border-box',
        '&::before, &::after': { boxSizing: 'border-box' },
      };
    let l = {};
    return (
      r !== !1 && (l = { fontFamily: e.fontFamily, fontSize: e.fontSize }),
      { [i]: Object.assign(Object.assign(Object.assign({}, l), a), { [o]: a }) }
    );
  },
  Jk = (e) => ({
    outline: `${pe(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
    outlineOffset: 1,
    transition: 'outline-offset 0s, outline 0s',
  }),
  T1 = (e, t) => {
    const [n, r] = Xi();
    return od(
      {
        theme: n,
        token: r,
        hashId: '',
        path: ['ant-design-icons', e],
        nonce: () => (t == null ? void 0 : t.nonce),
        layer: { name: 'antd' },
      },
      () => [
        {
          [`.${e}`]: Object.assign(Object.assign({}, $1()), {
            [`.${e} .${e}-icon`]: { display: 'block' },
          }),
        },
      ]
    );
  },
  {
    genStyleHooks: Qu,
    genComponentStyleHook: LM,
    genSubStyleComponent: AM,
  } = Wk({
    usePrefix: () => {
      const { getPrefixCls: e, iconPrefixCls: t } = f.useContext(wn);
      return { rootPrefixCls: e(), iconPrefixCls: t };
    },
    useToken: () => {
      const [e, t, n, r, o] = Xi();
      return { theme: e, realToken: t, hashId: n, token: r, cssVar: o };
    },
    useCSP: () => {
      const { csp: e, iconPrefixCls: t } = f.useContext(wn);
      return T1(t, e), e ?? {};
    },
    getResetStyles: (e) => [{ '&': Yk(e) }],
    getCommonStyle: Zk,
    getCompUnitless: () => I1,
  });
function e2(e, t) {
  return lu.reduce((n, r) => {
    const o = e[`${r}1`],
      i = e[`${r}3`],
      a = e[`${r}6`],
      l = e[`${r}7`];
    return Object.assign(
      Object.assign({}, n),
      t(r, { lightColor: o, lightBorderColor: i, darkColor: a, textColor: l })
    );
  }, {});
}
const t2 = Object.assign({}, hl),
  { useId: vh } = t2,
  n2 = () => '',
  r2 = typeof vh > 'u' ? n2 : vh;
function o2(e, t, n) {
  var r;
  m1();
  const o = e || {},
    i =
      o.inherit === !1 || !t
        ? Object.assign(Object.assign({}, wd), {
            hashed:
              (r = t == null ? void 0 : t.hashed) !== null && r !== void 0
                ? r
                : wd.hashed,
            cssVar: t == null ? void 0 : t.cssVar,
          })
        : t,
    a = r2();
  return Bu(
    () => {
      var l, s;
      if (!e) return t;
      const u = Object.assign({}, i.components);
      Object.keys(e.components || {}).forEach((v) => {
        u[v] = Object.assign(Object.assign({}, u[v]), e.components[v]);
      });
      const c = `css-var-${a.replace(/:/g, '')}`,
        d =
          ((l = o.cssVar) !== null && l !== void 0 ? l : i.cssVar) &&
          Object.assign(
            Object.assign(
              Object.assign(
                { prefix: n == null ? void 0 : n.prefixCls },
                typeof i.cssVar == 'object' ? i.cssVar : {}
              ),
              typeof o.cssVar == 'object' ? o.cssVar : {}
            ),
            {
              key:
                (typeof o.cssVar == 'object' &&
                  ((s = o.cssVar) === null || s === void 0 ? void 0 : s.key)) ||
                c,
            }
          );
      return Object.assign(Object.assign(Object.assign({}, i), o), {
        token: Object.assign(Object.assign({}, i.token), o.token),
        components: u,
        cssVar: d,
      });
    },
    [o, i],
    (l, s) =>
      l.some((u, c) => {
        const d = s[c];
        return !al(u, d, !0);
      })
  );
}
var i2 = ['children'],
  _1 = f.createContext({});
function a2(e) {
  var t = e.children,
    n = je(e, i2);
  return f.createElement(_1.Provider, { value: n }, t);
}
var l2 = (function (e) {
  co(n, e);
  var t = fo(n);
  function n() {
    return At(this, n), t.apply(this, arguments);
  }
  return (
    zt(n, [
      {
        key: 'render',
        value: function () {
          return this.props.children;
        },
      },
    ]),
    n
  );
})(f.Component);
function s2(e) {
  var t = f.useReducer(function (l) {
      return l + 1;
    }, 0),
    n = V(t, 2),
    r = n[1],
    o = f.useRef(e),
    i = tn(function () {
      return o.current;
    }),
    a = tn(function (l) {
      (o.current = typeof l == 'function' ? l(o.current) : l), r();
    });
  return [i, a];
}
var jr = 'none',
  rs = 'appear',
  os = 'enter',
  is = 'leave',
  mh = 'none',
  Kn = 'prepare',
  Ci = 'start',
  bi = 'active',
  em = 'end',
  N1 = 'prepared';
function ph(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit'.concat(e)] = 'webkit'.concat(t)),
    (n['Moz'.concat(e)] = 'moz'.concat(t)),
    (n['ms'.concat(e)] = 'MS'.concat(t)),
    (n['O'.concat(e)] = 'o'.concat(t.toLowerCase())),
    n
  );
}
function u2(e, t) {
  var n = {
    animationend: ph('Animation', 'AnimationEnd'),
    transitionend: ph('Transition', 'TransitionEnd'),
  };
  return (
    e &&
      ('AnimationEvent' in t || delete n.animationend.animation,
      'TransitionEvent' in t || delete n.transitionend.transition),
    n
  );
}
var c2 = u2(Sn(), typeof window < 'u' ? window : {}),
  F1 = {};
if (Sn()) {
  var f2 = document.createElement('div');
  F1 = f2.style;
}
var as = {};
function L1(e) {
  if (as[e]) return as[e];
  var t = c2[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, o = 0; o < r; o += 1) {
      var i = n[o];
      if (Object.prototype.hasOwnProperty.call(t, i) && i in F1)
        return (as[e] = t[i]), as[e];
    }
  return '';
}
var A1 = L1('animationend'),
  z1 = L1('transitionend'),
  j1 = !!(A1 && z1),
  hh = A1 || 'animationend',
  gh = z1 || 'transitionend';
function yh(e, t) {
  if (!e) return null;
  if (oe(e) === 'object') {
    var n = t.replace(/-\w/g, function (r) {
      return r[1].toUpperCase();
    });
    return e[n];
  }
  return ''.concat(e, '-').concat(t);
}
const d2 = function (e) {
  var t = f.useRef();
  function n(o) {
    o && (o.removeEventListener(gh, e), o.removeEventListener(hh, e));
  }
  function r(o) {
    t.current && t.current !== o && n(t.current),
      o &&
        o !== t.current &&
        (o.addEventListener(gh, e), o.addEventListener(hh, e), (t.current = o));
  }
  return (
    f.useEffect(function () {
      return function () {
        n(t.current);
      };
    }, []),
    [r, n]
  );
};
var D1 = Sn() ? f.useLayoutEffect : f.useEffect;
const v2 = function () {
  var e = f.useRef(null);
  function t() {
    br.cancel(e.current);
  }
  function n(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var i = br(function () {
      o <= 1
        ? r({
            isCanceled: function () {
              return i !== e.current;
            },
          })
        : n(r, o - 1);
    });
    e.current = i;
  }
  return (
    f.useEffect(function () {
      return function () {
        t();
      };
    }, []),
    [n, t]
  );
};
var m2 = [Kn, Ci, bi, em],
  p2 = [Kn, N1],
  B1 = !1,
  h2 = !0;
function V1(e) {
  return e === bi || e === em;
}
const g2 = function (e, t, n) {
  var r = dl(mh),
    o = V(r, 2),
    i = o[0],
    a = o[1],
    l = v2(),
    s = V(l, 2),
    u = s[0],
    c = s[1];
  function d() {
    a(Kn, !0);
  }
  var v = t ? p2 : m2;
  return (
    D1(
      function () {
        if (i !== mh && i !== em) {
          var w = v.indexOf(i),
            g = v[w + 1],
            S = n(i);
          S === B1
            ? a(g, !0)
            : g &&
              u(function (y) {
                function p() {
                  y.isCanceled() || a(g, !0);
                }
                S === !0 ? p() : Promise.resolve(S).then(p);
              });
        }
      },
      [e, i]
    ),
    f.useEffect(function () {
      return function () {
        c();
      };
    }, []),
    [d, i]
  );
};
function y2(e, t, n, r) {
  var o = r.motionEnter,
    i = o === void 0 ? !0 : o,
    a = r.motionAppear,
    l = a === void 0 ? !0 : a,
    s = r.motionLeave,
    u = s === void 0 ? !0 : s,
    c = r.motionDeadline,
    d = r.motionLeaveImmediately,
    v = r.onAppearPrepare,
    w = r.onEnterPrepare,
    g = r.onLeavePrepare,
    S = r.onAppearStart,
    y = r.onEnterStart,
    p = r.onLeaveStart,
    m = r.onAppearActive,
    h = r.onEnterActive,
    C = r.onLeaveActive,
    b = r.onAppearEnd,
    x = r.onEnterEnd,
    E = r.onLeaveEnd,
    P = r.onVisibleChanged,
    I = dl(),
    M = V(I, 2),
    A = M[0],
    j = M[1],
    L = s2(jr),
    F = V(L, 2),
    U = F[0],
    T = F[1],
    R = dl(null),
    k = V(R, 2),
    O = k[0],
    _ = k[1],
    z = U(),
    B = f.useRef(!1),
    K = f.useRef(null);
  function D() {
    return n();
  }
  var q = f.useRef(!1);
  function te() {
    T(jr), _(null, !0);
  }
  var ne = tn(function (ve) {
      var ie = U();
      if (ie !== jr) {
        var Be = D();
        if (!(ve && !ve.deadline && ve.target !== Be)) {
          var Q = q.current,
            Ae;
          ie === rs && Q
            ? (Ae = b == null ? void 0 : b(Be, ve))
            : ie === os && Q
              ? (Ae = x == null ? void 0 : x(Be, ve))
              : ie === is && Q && (Ae = E == null ? void 0 : E(Be, ve)),
            Q && Ae !== !1 && te();
        }
      }
    }),
    xe = d2(ne),
    le = V(xe, 1),
    he = le[0],
    Ee = function (ie) {
      switch (ie) {
        case rs:
          return $($($({}, Kn, v), Ci, S), bi, m);
        case os:
          return $($($({}, Kn, w), Ci, y), bi, h);
        case is:
          return $($($({}, Kn, g), Ci, p), bi, C);
        default:
          return {};
      }
    },
    ge = f.useMemo(
      function () {
        return Ee(z);
      },
      [z]
    ),
    Ne = g2(z, !e, function (ve) {
      if (ve === Kn) {
        var ie = ge[Kn];
        return ie ? ie(D()) : B1;
      }
      if ($e in ge) {
        var Be;
        _(
          ((Be = ge[$e]) === null || Be === void 0
            ? void 0
            : Be.call(ge, D(), null)) || null
        );
      }
      return (
        $e === bi &&
          z !== jr &&
          (he(D()),
          c > 0 &&
            (clearTimeout(K.current),
            (K.current = setTimeout(function () {
              ne({ deadline: !0 });
            }, c)))),
        $e === N1 && te(),
        h2
      );
    }),
    Oe = V(Ne, 2),
    Pe = Oe[0],
    $e = Oe[1],
    et = V1($e);
  (q.current = et),
    D1(
      function () {
        j(t);
        var ve = B.current;
        B.current = !0;
        var ie;
        !ve && t && l && (ie = rs),
          ve && t && i && (ie = os),
          ((ve && !t && u) || (!ve && d && !t && u)) && (ie = is);
        var Be = Ee(ie);
        ie && (e || Be[Kn]) ? (T(ie), Pe()) : T(jr);
      },
      [t]
    ),
    f.useEffect(
      function () {
        ((z === rs && !l) || (z === os && !i) || (z === is && !u)) && T(jr);
      },
      [l, i, u]
    ),
    f.useEffect(function () {
      return function () {
        (B.current = !1), clearTimeout(K.current);
      };
    }, []);
  var ye = f.useRef(!1);
  f.useEffect(
    function () {
      A && (ye.current = !0),
        A !== void 0 &&
          z === jr &&
          ((ye.current || A) && (P == null || P(A)), (ye.current = !0));
    },
    [A, z]
  );
  var De = O;
  return (
    ge[Kn] && $e === Ci && (De = N({ transition: 'none' }, De)),
    [z, $e, De, A ?? t]
  );
}
function S2(e) {
  var t = e;
  oe(e) === 'object' && (t = e.transitionSupport);
  function n(o, i) {
    return !!(o.motionName && t && i !== !1);
  }
  var r = f.forwardRef(function (o, i) {
    var a = o.visible,
      l = a === void 0 ? !0 : a,
      s = o.removeOnLeave,
      u = s === void 0 ? !0 : s,
      c = o.forceRender,
      d = o.children,
      v = o.motionName,
      w = o.leavedClassName,
      g = o.eventProps,
      S = f.useContext(_1),
      y = S.motion,
      p = n(o, y),
      m = f.useRef(),
      h = f.useRef();
    function C() {
      try {
        return m.current instanceof HTMLElement ? m.current : bs(h.current);
      } catch {
        return null;
      }
    }
    var b = y2(p, l, C, o),
      x = V(b, 4),
      E = x[0],
      P = x[1],
      I = x[2],
      M = x[3],
      A = f.useRef(M);
    M && (A.current = !0);
    var j = f.useCallback(
        function (O) {
          (m.current = O), Uv(i, O);
        },
        [i]
      ),
      L,
      F = N(N({}, g), {}, { visible: l });
    if (!d) L = null;
    else if (E === jr)
      M
        ? (L = d(N({}, F), j))
        : !u && A.current && w
          ? (L = d(N(N({}, F), {}, { className: w }), j))
          : c || (!u && !w)
            ? (L = d(N(N({}, F), {}, { style: { display: 'none' } }), j))
            : (L = null);
    else {
      var U;
      P === Kn
        ? (U = 'prepare')
        : V1(P)
          ? (U = 'active')
          : P === Ci && (U = 'start');
      var T = yh(v, ''.concat(E, '-').concat(U));
      L = d(
        N(
          N({}, F),
          {},
          {
            className: ue(
              yh(v, E),
              $($({}, T, T && U), v, typeof v == 'string')
            ),
            style: I,
          }
        ),
        j
      );
    }
    if (f.isValidElement(L) && Hu(L)) {
      var R = L,
        k = R.ref;
      k || (L = f.cloneElement(L, { ref: j }));
    }
    return f.createElement(l2, { ref: h }, L);
  });
  return (r.displayName = 'CSSMotion'), r;
}
const Yu = S2(j1);
var xd = 'add',
  Ed = 'keep',
  kd = 'remove',
  Wc = 'removed';
function w2(e) {
  var t;
  return (
    e && oe(e) === 'object' && 'key' in e ? (t = e) : (t = { key: e }),
    N(N({}, t), {}, { key: String(t.key) })
  );
}
function Pd() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(w2);
}
function C2() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
    n = [],
    r = 0,
    o = t.length,
    i = Pd(e),
    a = Pd(t);
  i.forEach(function (u) {
    for (var c = !1, d = r; d < o; d += 1) {
      var v = a[d];
      if (v.key === u.key) {
        r < d &&
          ((n = n.concat(
            a.slice(r, d).map(function (w) {
              return N(N({}, w), {}, { status: xd });
            })
          )),
          (r = d)),
          n.push(N(N({}, v), {}, { status: Ed })),
          (r += 1),
          (c = !0);
        break;
      }
    }
    c || n.push(N(N({}, u), {}, { status: kd }));
  }),
    r < o &&
      (n = n.concat(
        a.slice(r).map(function (u) {
          return N(N({}, u), {}, { status: xd });
        })
      ));
  var l = {};
  n.forEach(function (u) {
    var c = u.key;
    l[c] = (l[c] || 0) + 1;
  });
  var s = Object.keys(l).filter(function (u) {
    return l[u] > 1;
  });
  return (
    s.forEach(function (u) {
      (n = n.filter(function (c) {
        var d = c.key,
          v = c.status;
        return d !== u || v !== kd;
      })),
        n.forEach(function (c) {
          c.key === u && (c.status = Ed);
        });
    }),
    n
  );
}
var b2 = ['component', 'children', 'onVisibleChanged', 'onAllRemoved'],
  x2 = ['status'],
  E2 = [
    'eventProps',
    'visible',
    'children',
    'motionName',
    'motionAppear',
    'motionEnter',
    'motionLeave',
    'motionLeaveImmediately',
    'motionDeadline',
    'removeOnLeave',
    'leavedClassName',
    'onAppearPrepare',
    'onAppearStart',
    'onAppearActive',
    'onAppearEnd',
    'onEnterStart',
    'onEnterActive',
    'onEnterEnd',
    'onLeaveStart',
    'onLeaveActive',
    'onLeaveEnd',
  ];
function k2(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Yu,
    n = (function (r) {
      co(i, r);
      var o = fo(i);
      function i() {
        var a;
        At(this, i);
        for (var l = arguments.length, s = new Array(l), u = 0; u < l; u++)
          s[u] = arguments[u];
        return (
          (a = o.call.apply(o, [this].concat(s))),
          $(se(a), 'state', { keyEntities: [] }),
          $(se(a), 'removeKey', function (c) {
            a.setState(
              function (d) {
                var v = d.keyEntities.map(function (w) {
                  return w.key !== c ? w : N(N({}, w), {}, { status: Wc });
                });
                return { keyEntities: v };
              },
              function () {
                var d = a.state.keyEntities,
                  v = d.filter(function (w) {
                    var g = w.status;
                    return g !== Wc;
                  }).length;
                v === 0 && a.props.onAllRemoved && a.props.onAllRemoved();
              }
            );
          }),
          a
        );
      }
      return (
        zt(
          i,
          [
            {
              key: 'render',
              value: function () {
                var l = this,
                  s = this.state.keyEntities,
                  u = this.props,
                  c = u.component,
                  d = u.children,
                  v = u.onVisibleChanged;
                u.onAllRemoved;
                var w = je(u, b2),
                  g = c || f.Fragment,
                  S = {};
                return (
                  E2.forEach(function (y) {
                    (S[y] = w[y]), delete w[y];
                  }),
                  delete w.keys,
                  f.createElement(
                    g,
                    w,
                    s.map(function (y, p) {
                      var m = y.status,
                        h = je(y, x2),
                        C = m === xd || m === Ed;
                      return f.createElement(
                        t,
                        ce({}, S, {
                          key: h.key,
                          visible: C,
                          eventProps: h,
                          onVisibleChanged: function (x) {
                            v == null || v(x, { key: h.key }),
                              x || l.removeKey(h.key);
                          },
                        }),
                        function (b, x) {
                          return d(N(N({}, b), {}, { index: p }), x);
                        }
                      );
                    })
                  )
                );
              },
            },
          ],
          [
            {
              key: 'getDerivedStateFromProps',
              value: function (l, s) {
                var u = l.keys,
                  c = s.keyEntities,
                  d = Pd(u),
                  v = C2(c, d);
                return {
                  keyEntities: v.filter(function (w) {
                    var g = c.find(function (S) {
                      var y = S.key;
                      return w.key === y;
                    });
                    return !(g && g.status === Wc && w.status === kd);
                  }),
                };
              },
            },
          ]
        ),
        i
      );
    })(f.Component);
  return $(n, 'defaultProps', { component: 'div' }), n;
}
k2(j1);
function P2(e) {
  const { children: t } = e,
    [, n] = Xi(),
    { motion: r } = n,
    o = f.useRef(!1);
  return (
    (o.current = o.current || r === !1),
    o.current ? f.createElement(a2, { motion: r }, t) : t
  );
}
const R2 = () => null;
var I2 = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
const M2 = [
  'getTargetContainer',
  'getPopupContainer',
  'renderEmpty',
  'input',
  'pagination',
  'form',
  'select',
  'button',
];
let H1;
function O2() {
  return H1 || au;
}
function $2(e) {
  return Object.keys(e).some((t) => t.endsWith('Color'));
}
const T2 = (e) => {
    const { prefixCls: t, iconPrefixCls: n, theme: r, holderRender: o } = e;
    t !== void 0 && (H1 = t), r && $2(r) && Ok(O2(), r);
  },
  _2 = (e) => {
    const {
        children: t,
        csp: n,
        autoInsertSpaceInButton: r,
        alert: o,
        anchor: i,
        form: a,
        locale: l,
        componentSize: s,
        direction: u,
        space: c,
        splitter: d,
        virtual: v,
        dropdownMatchSelectWidth: w,
        popupMatchSelectWidth: g,
        popupOverflow: S,
        legacyLocale: y,
        parentContext: p,
        iconPrefixCls: m,
        theme: h,
        componentDisabled: C,
        segmented: b,
        statistic: x,
        spin: E,
        calendar: P,
        carousel: I,
        cascader: M,
        collapse: A,
        typography: j,
        checkbox: L,
        descriptions: F,
        divider: U,
        drawer: T,
        skeleton: R,
        steps: k,
        image: O,
        layout: _,
        list: z,
        mentions: B,
        modal: K,
        progress: D,
        result: q,
        slider: te,
        breadcrumb: ne,
        menu: xe,
        pagination: le,
        input: he,
        textArea: Ee,
        empty: ge,
        badge: Ne,
        radio: Oe,
        rate: Pe,
        switch: $e,
        transfer: et,
        avatar: ye,
        message: De,
        tag: ve,
        table: ie,
        card: Be,
        tabs: Q,
        timeline: Ae,
        timePicker: Ke,
        upload: we,
        notification: yt,
        tree: xt,
        colorPicker: tt,
        datePicker: Et,
        rangePicker: dt,
        flex: ot,
        wave: Ve,
        dropdown: me,
        warning: it,
        tour: Gt,
        floatButtonGroup: St,
        variant: kt,
        inputNumber: tr,
        treeSelect: Ln,
      } = e,
      jt = f.useCallback(
        (Te, Ce) => {
          const { prefixCls: It } = e;
          if (Ce) return Ce;
          const wt = It || p.getPrefixCls('');
          return Te ? `${wt}-${Te}` : wt;
        },
        [p.getPrefixCls, e.prefixCls]
      ),
      ln = m || p.iconPrefixCls || x1,
      Qe = n || p.csp;
    T1(ln, Qe);
    const He = o2(h, p.theme, { prefixCls: jt('') }),
      Pt = {
        csp: Qe,
        autoInsertSpaceInButton: r,
        alert: o,
        anchor: i,
        locale: l || y,
        direction: u,
        space: c,
        splitter: d,
        virtual: v,
        popupMatchSelectWidth: g ?? w,
        popupOverflow: S,
        getPrefixCls: jt,
        iconPrefixCls: ln,
        theme: He,
        segmented: b,
        statistic: x,
        spin: E,
        calendar: P,
        carousel: I,
        cascader: M,
        collapse: A,
        typography: j,
        checkbox: L,
        descriptions: F,
        divider: U,
        drawer: T,
        skeleton: R,
        steps: k,
        image: O,
        input: he,
        textArea: Ee,
        layout: _,
        list: z,
        mentions: B,
        modal: K,
        progress: D,
        result: q,
        slider: te,
        breadcrumb: ne,
        menu: xe,
        pagination: le,
        empty: ge,
        badge: Ne,
        radio: Oe,
        rate: Pe,
        switch: $e,
        transfer: et,
        avatar: ye,
        message: De,
        tag: ve,
        table: ie,
        card: Be,
        tabs: Q,
        timeline: Ae,
        timePicker: Ke,
        upload: we,
        notification: yt,
        tree: xt,
        colorPicker: tt,
        datePicker: Et,
        rangePicker: dt,
        flex: ot,
        wave: Ve,
        dropdown: me,
        warning: it,
        tour: Gt,
        floatButtonGroup: St,
        variant: kt,
        inputNumber: tr,
        treeSelect: Ln,
      },
      Re = Object.assign({}, p);
    Object.keys(Pt).forEach((Te) => {
      Pt[Te] !== void 0 && (Re[Te] = Pt[Te]);
    }),
      M2.forEach((Te) => {
        const Ce = e[Te];
        Ce && (Re[Te] = Ce);
      }),
      typeof r < 'u' &&
        (Re.button = Object.assign({ autoInsertSpace: r }, Re.button));
    const ee = Bu(
        () => Re,
        Re,
        (Te, Ce) => {
          const It = Object.keys(Te),
            wt = Object.keys(Ce);
          return It.length !== wt.length || It.some((Dt) => Te[Dt] !== Ce[Dt]);
        }
      ),
      Y = f.useMemo(() => ({ prefixCls: ln, csp: Qe }), [ln, Qe]);
    let W = f.createElement(
      f.Fragment,
      null,
      f.createElement(R2, { dropdownMatchSelectWidth: w }),
      t
    );
    const Fe = f.useMemo(() => {
      var Te, Ce, It, wt;
      return wi(
        ((Te = Xu.Form) === null || Te === void 0
          ? void 0
          : Te.defaultValidateMessages) || {},
        ((It =
          (Ce = ee.locale) === null || Ce === void 0 ? void 0 : Ce.Form) ===
          null || It === void 0
          ? void 0
          : It.defaultValidateMessages) || {},
        ((wt = ee.form) === null || wt === void 0
          ? void 0
          : wt.validateMessages) || {},
        (a == null ? void 0 : a.validateMessages) || {}
      );
    }, [ee, a == null ? void 0 : a.validateMessages]);
    Object.keys(Fe).length > 0 &&
      (W = f.createElement(GE.Provider, { value: Fe }, W)),
      l && (W = f.createElement(JE, { locale: l, _ANT_MARK__: ZE }, W)),
      (ln || Qe) && (W = f.createElement(Jv.Provider, { value: Y }, W)),
      s && (W = f.createElement(Tk, { size: s }, W)),
      (W = f.createElement(P2, null, W));
    const Rt = f.useMemo(() => {
      const Te = He || {},
        { algorithm: Ce, token: It, components: wt, cssVar: Dt } = Te,
        An = I2(Te, ['algorithm', 'token', 'components', 'cssVar']),
        Or = Ce && (!Array.isArray(Ce) || Ce.length > 0) ? ed(Ce) : C1,
        sn = {};
      Object.entries(wt || {}).forEach((nr) => {
        let [xn, zn] = nr;
        const nt = Object.assign({}, zn);
        'algorithm' in nt &&
          (nt.algorithm === !0
            ? (nt.theme = Or)
            : (Array.isArray(nt.algorithm) ||
                typeof nt.algorithm == 'function') &&
              (nt.theme = ed(nt.algorithm)),
          delete nt.algorithm),
          (sn[xn] = nt);
      });
      const Mt = Object.assign(Object.assign({}, cl), It);
      return Object.assign(Object.assign({}, An), {
        theme: Or,
        token: Mt,
        components: sn,
        override: Object.assign({ override: Mt }, sn),
        cssVar: Dt,
      });
    }, [He]);
    return (
      h && (W = f.createElement(b1.Provider, { value: Rt }, W)),
      ee.warning &&
        (W = f.createElement(KE.Provider, { value: ee.warning }, W)),
      C !== void 0 && (W = f.createElement($k, { disabled: C }, W)),
      f.createElement(wn.Provider, { value: ee }, W)
    );
  },
  xl = (e) => {
    const t = f.useContext(wn),
      n = f.useContext(h1);
    return f.createElement(
      _2,
      Object.assign({ parentContext: t, legacyLocale: n }, e)
    );
  };
xl.ConfigContext = wn;
xl.SizeContext = fl;
xl.config = T2;
xl.useConfig = _k;
Object.defineProperty(xl, 'SizeContext', { get: () => fl });
function U1(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0
    ? void 0
    : t.call(e);
}
function N2(e) {
  return U1(e) instanceof ShadowRoot;
}
function su(e) {
  return N2(e) ? U1(e) : null;
}
function F2(e) {
  return e.replace(/-(.)/g, function (t, n) {
    return n.toUpperCase();
  });
}
function L2(e, t) {
  Yt(e, '[@ant-design/icons] '.concat(t));
}
function Sh(e) {
  return (
    oe(e) === 'object' &&
    typeof e.name == 'string' &&
    typeof e.theme == 'string' &&
    (oe(e.icon) === 'object' || typeof e.icon == 'function')
  );
}
function wh() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n];
    switch (n) {
      case 'class':
        (t.className = r), delete t.class;
        break;
      default:
        delete t[n], (t[F2(n)] = r);
    }
    return t;
  }, {});
}
function Rd(e, t, n) {
  return n
    ? ae.createElement(
        e.tag,
        N(N({ key: t }, wh(e.attrs)), n),
        (e.children || []).map(function (r, o) {
          return Rd(r, ''.concat(t, '-').concat(e.tag, '-').concat(o));
        })
      )
    : ae.createElement(
        e.tag,
        N({ key: t }, wh(e.attrs)),
        (e.children || []).map(function (r, o) {
          return Rd(r, ''.concat(t, '-').concat(e.tag, '-').concat(o));
        })
      );
}
function W1(e) {
  return ul(e)[0];
}
function K1(e) {
  return e ? (Array.isArray(e) ? e : [e]) : [];
}
var A2 = `
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,
  z2 = function (t) {
    var n = f.useContext(Jv),
      r = n.csp,
      o = n.prefixCls,
      i = A2;
    o && (i = i.replace(/anticon/g, o)),
      f.useEffect(function () {
        var a = t.current,
          l = su(a);
        xr(i, '@ant-design-icons', { prepend: !0, csp: r, attachTo: l });
      }, []);
  },
  j2 = [
    'icon',
    'className',
    'onClick',
    'style',
    'primaryColor',
    'secondaryColor',
  ],
  _a = { primaryColor: '#333', secondaryColor: '#E6E6E6', calculated: !1 };
function D2(e) {
  var t = e.primaryColor,
    n = e.secondaryColor;
  (_a.primaryColor = t),
    (_a.secondaryColor = n || W1(t)),
    (_a.calculated = !!n);
}
function B2() {
  return N({}, _a);
}
var Qi = function (t) {
  var n = t.icon,
    r = t.className,
    o = t.onClick,
    i = t.style,
    a = t.primaryColor,
    l = t.secondaryColor,
    s = je(t, j2),
    u = f.useRef(),
    c = _a;
  if (
    (a && (c = { primaryColor: a, secondaryColor: l || W1(a) }),
    z2(u),
    L2(Sh(n), 'icon should be icon definiton, but got '.concat(n)),
    !Sh(n))
  )
    return null;
  var d = n;
  return (
    d &&
      typeof d.icon == 'function' &&
      (d = N(N({}, d), {}, { icon: d.icon(c.primaryColor, c.secondaryColor) })),
    Rd(
      d.icon,
      'svg-'.concat(d.name),
      N(
        N(
          {
            className: r,
            onClick: o,
            style: i,
            'data-icon': d.name,
            width: '1em',
            height: '1em',
            fill: 'currentColor',
            'aria-hidden': 'true',
          },
          s
        ),
        {},
        { ref: u }
      )
    )
  );
};
Qi.displayName = 'IconReact';
Qi.getTwoToneColors = B2;
Qi.setTwoToneColors = D2;
function G1(e) {
  var t = K1(e),
    n = V(t, 2),
    r = n[0],
    o = n[1];
  return Qi.setTwoToneColors({ primaryColor: r, secondaryColor: o });
}
function V2() {
  var e = Qi.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var H2 = [
  'className',
  'icon',
  'spin',
  'rotate',
  'tabIndex',
  'onClick',
  'twoToneColor',
];
G1(iu.primary);
var Bo = f.forwardRef(function (e, t) {
  var n = e.className,
    r = e.icon,
    o = e.spin,
    i = e.rotate,
    a = e.tabIndex,
    l = e.onClick,
    s = e.twoToneColor,
    u = je(e, H2),
    c = f.useContext(Jv),
    d = c.prefixCls,
    v = d === void 0 ? 'anticon' : d,
    w = c.rootClassName,
    g = ue(
      w,
      v,
      $(
        $({}, ''.concat(v, '-').concat(r.name), !!r.name),
        ''.concat(v, '-spin'),
        !!o || r.name === 'loading'
      ),
      n
    ),
    S = a;
  S === void 0 && l && (S = -1);
  var y = i
      ? {
          msTransform: 'rotate('.concat(i, 'deg)'),
          transform: 'rotate('.concat(i, 'deg)'),
        }
      : void 0,
    p = K1(s),
    m = V(p, 2),
    h = m[0],
    C = m[1];
  return f.createElement(
    'span',
    ce({ role: 'img', 'aria-label': r.name }, u, {
      ref: t,
      tabIndex: S,
      onClick: l,
      className: g,
    }),
    f.createElement(Qi, {
      icon: r,
      primaryColor: h,
      secondaryColor: C,
      style: y,
    })
  );
});
Bo.displayName = 'AntdIcon';
Bo.getTwoToneColor = V2;
Bo.setTwoToneColor = G1;
function U2(e) {
  return e && ae.isValidElement(e) && e.type === ae.Fragment;
}
const W2 = (e, t, n) =>
  ae.isValidElement(e)
    ? ae.cloneElement(e, typeof n == 'function' ? n(e.props || {}) : n)
    : t;
function Zu(e, t) {
  return W2(e, e, t);
}
const K2 = (e) => {
  const [, , , , t] = Xi();
  return t ? `${e}-css-var` : '';
};
var J = {
  MAC_ENTER: 3,
  BACKSPACE: 8,
  TAB: 9,
  NUM_CENTER: 12,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  PAUSE: 19,
  CAPS_LOCK: 20,
  ESC: 27,
  SPACE: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  PRINT_SCREEN: 44,
  INSERT: 45,
  DELETE: 46,
  ZERO: 48,
  ONE: 49,
  TWO: 50,
  THREE: 51,
  FOUR: 52,
  FIVE: 53,
  SIX: 54,
  SEVEN: 55,
  EIGHT: 56,
  NINE: 57,
  QUESTION_MARK: 63,
  A: 65,
  B: 66,
  C: 67,
  D: 68,
  E: 69,
  F: 70,
  G: 71,
  H: 72,
  I: 73,
  J: 74,
  K: 75,
  L: 76,
  M: 77,
  N: 78,
  O: 79,
  P: 80,
  Q: 81,
  R: 82,
  S: 83,
  T: 84,
  U: 85,
  V: 86,
  W: 87,
  X: 88,
  Y: 89,
  Z: 90,
  META: 91,
  WIN_KEY_RIGHT: 92,
  CONTEXT_MENU: 93,
  NUM_ZERO: 96,
  NUM_ONE: 97,
  NUM_TWO: 98,
  NUM_THREE: 99,
  NUM_FOUR: 100,
  NUM_FIVE: 101,
  NUM_SIX: 102,
  NUM_SEVEN: 103,
  NUM_EIGHT: 104,
  NUM_NINE: 105,
  NUM_MULTIPLY: 106,
  NUM_PLUS: 107,
  NUM_MINUS: 109,
  NUM_PERIOD: 110,
  NUM_DIVISION: 111,
  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,
  NUMLOCK: 144,
  SEMICOLON: 186,
  DASH: 189,
  EQUALS: 187,
  COMMA: 188,
  PERIOD: 190,
  SLASH: 191,
  APOSTROPHE: 192,
  SINGLE_QUOTE: 222,
  OPEN_SQUARE_BRACKET: 219,
  BACKSLASH: 220,
  CLOSE_SQUARE_BRACKET: 221,
  WIN_KEY: 224,
  MAC_FF_META: 224,
  WIN_IME: 229,
  isTextModifyingKeyEvent: function (t) {
    var n = t.keyCode;
    if ((t.altKey && !t.ctrlKey) || t.metaKey || (n >= J.F1 && n <= J.F12))
      return !1;
    switch (n) {
      case J.ALT:
      case J.CAPS_LOCK:
      case J.CONTEXT_MENU:
      case J.CTRL:
      case J.DOWN:
      case J.END:
      case J.ESC:
      case J.HOME:
      case J.INSERT:
      case J.LEFT:
      case J.MAC_FF_META:
      case J.META:
      case J.NUMLOCK:
      case J.NUM_CENTER:
      case J.PAGE_DOWN:
      case J.PAGE_UP:
      case J.PAUSE:
      case J.PRINT_SCREEN:
      case J.RIGHT:
      case J.SHIFT:
      case J.UP:
      case J.WIN_KEY:
      case J.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  isCharacterKey: function (t) {
    if (
      (t >= J.ZERO && t <= J.NINE) ||
      (t >= J.NUM_ZERO && t <= J.NUM_MULTIPLY) ||
      (t >= J.A && t <= J.Z) ||
      (window.navigator.userAgent.indexOf('WebKit') !== -1 && t === 0)
    )
      return !0;
    switch (t) {
      case J.SPACE:
      case J.QUESTION_MARK:
      case J.NUM_PLUS:
      case J.NUM_MINUS:
      case J.NUM_PERIOD:
      case J.NUM_DIVISION:
      case J.SEMICOLON:
      case J.DASH:
      case J.EQUALS:
      case J.COMMA:
      case J.PERIOD:
      case J.SLASH:
      case J.APOSTROPHE:
      case J.SINGLE_QUOTE:
      case J.OPEN_SQUARE_BRACKET:
      case J.BACKSLASH:
      case J.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  },
};
const q1 = ae.createContext(void 0),
  So = 100,
  X1 = {
    Modal: So,
    Drawer: So,
    Popover: So,
    Popconfirm: So,
    Tooltip: So,
    Tour: So,
    FloatButton: So,
  },
  G2 = {
    SelectLike: 50,
    Dropdown: 50,
    DatePicker: 50,
    Menu: 50,
    ImagePreview: 1,
  };
function q2(e) {
  return e in X1;
}
const Q1 = (e, t) => {
  const [, n] = Xi(),
    r = ae.useContext(q1),
    o = q2(e);
  let i;
  if (t !== void 0) i = [t, t];
  else {
    let a = r ?? 0;
    o ? (a += (r ? 0 : n.zIndexPopupBase) + X1[e]) : (a += G2[e]),
      (i = [r === void 0 ? t : a, a]);
  }
  return i;
};
function Jn() {
  Jn = function () {
    return t;
  };
  var e,
    t = {},
    n = Object.prototype,
    r = n.hasOwnProperty,
    o =
      Object.defineProperty ||
      function (T, R, k) {
        T[R] = k.value;
      },
    i = typeof Symbol == 'function' ? Symbol : {},
    a = i.iterator || '@@iterator',
    l = i.asyncIterator || '@@asyncIterator',
    s = i.toStringTag || '@@toStringTag';
  function u(T, R, k) {
    return (
      Object.defineProperty(T, R, {
        value: k,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      T[R]
    );
  }
  try {
    u({}, '');
  } catch {
    u = function (k, O, _) {
      return (k[O] = _);
    };
  }
  function c(T, R, k, O) {
    var _ = R && R.prototype instanceof p ? R : p,
      z = Object.create(_.prototype),
      B = new F(O || []);
    return o(z, '_invoke', { value: M(T, k, B) }), z;
  }
  function d(T, R, k) {
    try {
      return { type: 'normal', arg: T.call(R, k) };
    } catch (O) {
      return { type: 'throw', arg: O };
    }
  }
  t.wrap = c;
  var v = 'suspendedStart',
    w = 'suspendedYield',
    g = 'executing',
    S = 'completed',
    y = {};
  function p() {}
  function m() {}
  function h() {}
  var C = {};
  u(C, a, function () {
    return this;
  });
  var b = Object.getPrototypeOf,
    x = b && b(b(U([])));
  x && x !== n && r.call(x, a) && (C = x);
  var E = (h.prototype = p.prototype = Object.create(C));
  function P(T) {
    ['next', 'throw', 'return'].forEach(function (R) {
      u(T, R, function (k) {
        return this._invoke(R, k);
      });
    });
  }
  function I(T, R) {
    function k(_, z, B, K) {
      var D = d(T[_], T, z);
      if (D.type !== 'throw') {
        var q = D.arg,
          te = q.value;
        return te && oe(te) == 'object' && r.call(te, '__await')
          ? R.resolve(te.__await).then(
              function (ne) {
                k('next', ne, B, K);
              },
              function (ne) {
                k('throw', ne, B, K);
              }
            )
          : R.resolve(te).then(
              function (ne) {
                (q.value = ne), B(q);
              },
              function (ne) {
                return k('throw', ne, B, K);
              }
            );
      }
      K(D.arg);
    }
    var O;
    o(this, '_invoke', {
      value: function (z, B) {
        function K() {
          return new R(function (D, q) {
            k(z, B, D, q);
          });
        }
        return (O = O ? O.then(K, K) : K());
      },
    });
  }
  function M(T, R, k) {
    var O = v;
    return function (_, z) {
      if (O === g) throw Error('Generator is already running');
      if (O === S) {
        if (_ === 'throw') throw z;
        return { value: e, done: !0 };
      }
      for (k.method = _, k.arg = z; ; ) {
        var B = k.delegate;
        if (B) {
          var K = A(B, k);
          if (K) {
            if (K === y) continue;
            return K;
          }
        }
        if (k.method === 'next') k.sent = k._sent = k.arg;
        else if (k.method === 'throw') {
          if (O === v) throw ((O = S), k.arg);
          k.dispatchException(k.arg);
        } else k.method === 'return' && k.abrupt('return', k.arg);
        O = g;
        var D = d(T, R, k);
        if (D.type === 'normal') {
          if (((O = k.done ? S : w), D.arg === y)) continue;
          return { value: D.arg, done: k.done };
        }
        D.type === 'throw' && ((O = S), (k.method = 'throw'), (k.arg = D.arg));
      }
    };
  }
  function A(T, R) {
    var k = R.method,
      O = T.iterator[k];
    if (O === e)
      return (
        (R.delegate = null),
        (k === 'throw' &&
          T.iterator.return &&
          ((R.method = 'return'),
          (R.arg = e),
          A(T, R),
          R.method === 'throw')) ||
          (k !== 'return' &&
            ((R.method = 'throw'),
            (R.arg = new TypeError(
              "The iterator does not provide a '" + k + "' method"
            )))),
        y
      );
    var _ = d(O, T.iterator, R.arg);
    if (_.type === 'throw')
      return (R.method = 'throw'), (R.arg = _.arg), (R.delegate = null), y;
    var z = _.arg;
    return z
      ? z.done
        ? ((R[T.resultName] = z.value),
          (R.next = T.nextLoc),
          R.method !== 'return' && ((R.method = 'next'), (R.arg = e)),
          (R.delegate = null),
          y)
        : z
      : ((R.method = 'throw'),
        (R.arg = new TypeError('iterator result is not an object')),
        (R.delegate = null),
        y);
  }
  function j(T) {
    var R = { tryLoc: T[0] };
    1 in T && (R.catchLoc = T[1]),
      2 in T && ((R.finallyLoc = T[2]), (R.afterLoc = T[3])),
      this.tryEntries.push(R);
  }
  function L(T) {
    var R = T.completion || {};
    (R.type = 'normal'), delete R.arg, (T.completion = R);
  }
  function F(T) {
    (this.tryEntries = [{ tryLoc: 'root' }]),
      T.forEach(j, this),
      this.reset(!0);
  }
  function U(T) {
    if (T || T === '') {
      var R = T[a];
      if (R) return R.call(T);
      if (typeof T.next == 'function') return T;
      if (!isNaN(T.length)) {
        var k = -1,
          O = function _() {
            for (; ++k < T.length; )
              if (r.call(T, k)) return (_.value = T[k]), (_.done = !1), _;
            return (_.value = e), (_.done = !0), _;
          };
        return (O.next = O);
      }
    }
    throw new TypeError(oe(T) + ' is not iterable');
  }
  return (
    (m.prototype = h),
    o(E, 'constructor', { value: h, configurable: !0 }),
    o(h, 'constructor', { value: m, configurable: !0 }),
    (m.displayName = u(h, s, 'GeneratorFunction')),
    (t.isGeneratorFunction = function (T) {
      var R = typeof T == 'function' && T.constructor;
      return (
        !!R && (R === m || (R.displayName || R.name) === 'GeneratorFunction')
      );
    }),
    (t.mark = function (T) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(T, h)
          : ((T.__proto__ = h), u(T, s, 'GeneratorFunction')),
        (T.prototype = Object.create(E)),
        T
      );
    }),
    (t.awrap = function (T) {
      return { __await: T };
    }),
    P(I.prototype),
    u(I.prototype, l, function () {
      return this;
    }),
    (t.AsyncIterator = I),
    (t.async = function (T, R, k, O, _) {
      _ === void 0 && (_ = Promise);
      var z = new I(c(T, R, k, O), _);
      return t.isGeneratorFunction(R)
        ? z
        : z.next().then(function (B) {
            return B.done ? B.value : z.next();
          });
    }),
    P(E),
    u(E, s, 'Generator'),
    u(E, a, function () {
      return this;
    }),
    u(E, 'toString', function () {
      return '[object Generator]';
    }),
    (t.keys = function (T) {
      var R = Object(T),
        k = [];
      for (var O in R) k.push(O);
      return (
        k.reverse(),
        function _() {
          for (; k.length; ) {
            var z = k.pop();
            if (z in R) return (_.value = z), (_.done = !1), _;
          }
          return (_.done = !0), _;
        }
      );
    }),
    (t.values = U),
    (F.prototype = {
      constructor: F,
      reset: function (R) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = e),
          (this.done = !1),
          (this.delegate = null),
          (this.method = 'next'),
          (this.arg = e),
          this.tryEntries.forEach(L),
          !R)
        )
          for (var k in this)
            k.charAt(0) === 't' &&
              r.call(this, k) &&
              !isNaN(+k.slice(1)) &&
              (this[k] = e);
      },
      stop: function () {
        this.done = !0;
        var R = this.tryEntries[0].completion;
        if (R.type === 'throw') throw R.arg;
        return this.rval;
      },
      dispatchException: function (R) {
        if (this.done) throw R;
        var k = this;
        function O(q, te) {
          return (
            (B.type = 'throw'),
            (B.arg = R),
            (k.next = q),
            te && ((k.method = 'next'), (k.arg = e)),
            !!te
          );
        }
        for (var _ = this.tryEntries.length - 1; _ >= 0; --_) {
          var z = this.tryEntries[_],
            B = z.completion;
          if (z.tryLoc === 'root') return O('end');
          if (z.tryLoc <= this.prev) {
            var K = r.call(z, 'catchLoc'),
              D = r.call(z, 'finallyLoc');
            if (K && D) {
              if (this.prev < z.catchLoc) return O(z.catchLoc, !0);
              if (this.prev < z.finallyLoc) return O(z.finallyLoc);
            } else if (K) {
              if (this.prev < z.catchLoc) return O(z.catchLoc, !0);
            } else {
              if (!D) throw Error('try statement without catch or finally');
              if (this.prev < z.finallyLoc) return O(z.finallyLoc);
            }
          }
        }
      },
      abrupt: function (R, k) {
        for (var O = this.tryEntries.length - 1; O >= 0; --O) {
          var _ = this.tryEntries[O];
          if (
            _.tryLoc <= this.prev &&
            r.call(_, 'finallyLoc') &&
            this.prev < _.finallyLoc
          ) {
            var z = _;
            break;
          }
        }
        z &&
          (R === 'break' || R === 'continue') &&
          z.tryLoc <= k &&
          k <= z.finallyLoc &&
          (z = null);
        var B = z ? z.completion : {};
        return (
          (B.type = R),
          (B.arg = k),
          z
            ? ((this.method = 'next'), (this.next = z.finallyLoc), y)
            : this.complete(B)
        );
      },
      complete: function (R, k) {
        if (R.type === 'throw') throw R.arg;
        return (
          R.type === 'break' || R.type === 'continue'
            ? (this.next = R.arg)
            : R.type === 'return'
              ? ((this.rval = this.arg = R.arg),
                (this.method = 'return'),
                (this.next = 'end'))
              : R.type === 'normal' && k && (this.next = k),
          y
        );
      },
      finish: function (R) {
        for (var k = this.tryEntries.length - 1; k >= 0; --k) {
          var O = this.tryEntries[k];
          if (O.finallyLoc === R)
            return this.complete(O.completion, O.afterLoc), L(O), y;
        }
      },
      catch: function (R) {
        for (var k = this.tryEntries.length - 1; k >= 0; --k) {
          var O = this.tryEntries[k];
          if (O.tryLoc === R) {
            var _ = O.completion;
            if (_.type === 'throw') {
              var z = _.arg;
              L(O);
            }
            return z;
          }
        }
        throw Error('illegal catch attempt');
      },
      delegateYield: function (R, k, O) {
        return (
          (this.delegate = { iterator: U(R), resultName: k, nextLoc: O }),
          this.method === 'next' && (this.arg = e),
          y
        );
      },
    }),
    t
  );
}
function Ch(e, t, n, r, o, i, a) {
  try {
    var l = e[i](a),
      s = l.value;
  } catch (u) {
    return void n(u);
  }
  l.done ? t(s) : Promise.resolve(s).then(r, o);
}
function El(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, o) {
      var i = e.apply(t, n);
      function a(s) {
        Ch(i, r, o, a, l, 'next', s);
      }
      function l(s) {
        Ch(i, r, o, a, l, 'throw', s);
      }
      a(void 0);
    });
  };
}
const Kc = () => ({ height: 0, opacity: 0 }),
  bh = (e) => {
    const { scrollHeight: t } = e;
    return { height: t, opacity: 1 };
  },
  X2 = (e) => ({ height: e ? e.offsetHeight : 0 }),
  Gc = (e, t) =>
    (t == null ? void 0 : t.deadline) === !0 || t.propertyName === 'height',
  Q2 = function () {
    return {
      motionName: `${arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : au}-motion-collapse`,
      onAppearStart: Kc,
      onEnterStart: Kc,
      onAppearActive: bh,
      onEnterActive: bh,
      onLeaveStart: X2,
      onLeaveActive: Kc,
      onAppearEnd: Gc,
      onEnterEnd: Gc,
      onLeaveEnd: Gc,
      motionDeadline: 500,
    };
  },
  Y2 = (e, t, n) => (n !== void 0 ? n : `${e}-${t}`),
  Y1 = function (e) {
    if (!e) return !1;
    if (e instanceof Element) {
      if (e.offsetParent) return !0;
      if (e.getBBox) {
        var t = e.getBBox(),
          n = t.width,
          r = t.height;
        if (n || r) return !0;
      }
      if (e.getBoundingClientRect) {
        var o = e.getBoundingClientRect(),
          i = o.width,
          a = o.height;
        if (i || a) return !0;
      }
    }
    return !1;
  },
  Z2 = f.createContext(null),
  J2 = (e) => {
    let { children: t } = e;
    return f.createElement(Z2.Provider, { value: null }, t);
  };
var eP = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z',
          },
        },
      ],
    },
    name: 'right',
    theme: 'outlined',
  },
  tP = function (t, n) {
    return f.createElement(Bo, ce({}, t, { ref: n, icon: eP }));
  },
  xh = f.forwardRef(tP);
const nP = (e) => ({
    [e.componentCls]: {
      [`${e.antCls}-motion-collapse-legacy`]: {
        overflow: 'hidden',
        '&-active': {
          transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`,
        },
      },
      [`${e.antCls}-motion-collapse`]: {
        overflow: 'hidden',
        transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`,
      },
    },
  }),
  rP = (e) => ({ animationDuration: e, animationFillMode: 'both' }),
  oP = (e) => ({ animationDuration: e, animationFillMode: 'both' }),
  Z1 = function (e, t, n, r) {
    const i = (
      arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1
    )
      ? '&'
      : '';
    return {
      [`
      ${i}${e}-enter,
      ${i}${e}-appear
    `]: Object.assign(Object.assign({}, rP(r)), {
        animationPlayState: 'paused',
      }),
      [`${i}${e}-leave`]: Object.assign(Object.assign({}, oP(r)), {
        animationPlayState: 'paused',
      }),
      [`
      ${i}${e}-enter${e}-enter-active,
      ${i}${e}-appear${e}-appear-active
    `]: { animationName: t, animationPlayState: 'running' },
      [`${i}${e}-leave${e}-leave-active`]: {
        animationName: n,
        animationPlayState: 'running',
        pointerEvents: 'none',
      },
    };
  },
  iP = new ft('antSlideUpIn', {
    '0%': { transform: 'scaleY(0.8)', transformOrigin: '0% 0%', opacity: 0 },
    '100%': { transform: 'scaleY(1)', transformOrigin: '0% 0%', opacity: 1 },
  }),
  aP = new ft('antSlideUpOut', {
    '0%': { transform: 'scaleY(1)', transformOrigin: '0% 0%', opacity: 1 },
    '100%': { transform: 'scaleY(0.8)', transformOrigin: '0% 0%', opacity: 0 },
  }),
  lP = new ft('antSlideDownIn', {
    '0%': {
      transform: 'scaleY(0.8)',
      transformOrigin: '100% 100%',
      opacity: 0,
    },
    '100%': {
      transform: 'scaleY(1)',
      transformOrigin: '100% 100%',
      opacity: 1,
    },
  }),
  sP = new ft('antSlideDownOut', {
    '0%': { transform: 'scaleY(1)', transformOrigin: '100% 100%', opacity: 1 },
    '100%': {
      transform: 'scaleY(0.8)',
      transformOrigin: '100% 100%',
      opacity: 0,
    },
  }),
  uP = new ft('antSlideLeftIn', {
    '0%': { transform: 'scaleX(0.8)', transformOrigin: '0% 0%', opacity: 0 },
    '100%': { transform: 'scaleX(1)', transformOrigin: '0% 0%', opacity: 1 },
  }),
  cP = new ft('antSlideLeftOut', {
    '0%': { transform: 'scaleX(1)', transformOrigin: '0% 0%', opacity: 1 },
    '100%': { transform: 'scaleX(0.8)', transformOrigin: '0% 0%', opacity: 0 },
  }),
  fP = new ft('antSlideRightIn', {
    '0%': { transform: 'scaleX(0.8)', transformOrigin: '100% 0%', opacity: 0 },
    '100%': { transform: 'scaleX(1)', transformOrigin: '100% 0%', opacity: 1 },
  }),
  dP = new ft('antSlideRightOut', {
    '0%': { transform: 'scaleX(1)', transformOrigin: '100% 0%', opacity: 1 },
    '100%': {
      transform: 'scaleX(0.8)',
      transformOrigin: '100% 0%',
      opacity: 0,
    },
  }),
  vP = {
    'slide-up': { inKeyframes: iP, outKeyframes: aP },
    'slide-down': { inKeyframes: lP, outKeyframes: sP },
    'slide-left': { inKeyframes: uP, outKeyframes: cP },
    'slide-right': { inKeyframes: fP, outKeyframes: dP },
  },
  Eh = (e, t) => {
    const { antCls: n } = e,
      r = `${n}-${t}`,
      { inKeyframes: o, outKeyframes: i } = vP[t];
    return [
      Z1(r, o, i, e.motionDurationMid),
      {
        [`
      ${r}-enter,
      ${r}-appear
    `]: {
          transform: 'scale(0)',
          transformOrigin: '0% 0%',
          opacity: 0,
          animationTimingFunction: e.motionEaseOutQuint,
          '&-prepare': { transform: 'scale(1)' },
        },
        [`${r}-leave`]: { animationTimingFunction: e.motionEaseInQuint },
      },
    ];
  },
  mP = new ft('antZoomIn', {
    '0%': { transform: 'scale(0.2)', opacity: 0 },
    '100%': { transform: 'scale(1)', opacity: 1 },
  }),
  pP = new ft('antZoomOut', {
    '0%': { transform: 'scale(1)' },
    '100%': { transform: 'scale(0.2)', opacity: 0 },
  }),
  kh = new ft('antZoomBigIn', {
    '0%': { transform: 'scale(0.8)', opacity: 0 },
    '100%': { transform: 'scale(1)', opacity: 1 },
  }),
  Ph = new ft('antZoomBigOut', {
    '0%': { transform: 'scale(1)' },
    '100%': { transform: 'scale(0.8)', opacity: 0 },
  }),
  hP = new ft('antZoomUpIn', {
    '0%': { transform: 'scale(0.8)', transformOrigin: '50% 0%', opacity: 0 },
    '100%': { transform: 'scale(1)', transformOrigin: '50% 0%' },
  }),
  gP = new ft('antZoomUpOut', {
    '0%': { transform: 'scale(1)', transformOrigin: '50% 0%' },
    '100%': { transform: 'scale(0.8)', transformOrigin: '50% 0%', opacity: 0 },
  }),
  yP = new ft('antZoomLeftIn', {
    '0%': { transform: 'scale(0.8)', transformOrigin: '0% 50%', opacity: 0 },
    '100%': { transform: 'scale(1)', transformOrigin: '0% 50%' },
  }),
  SP = new ft('antZoomLeftOut', {
    '0%': { transform: 'scale(1)', transformOrigin: '0% 50%' },
    '100%': { transform: 'scale(0.8)', transformOrigin: '0% 50%', opacity: 0 },
  }),
  wP = new ft('antZoomRightIn', {
    '0%': { transform: 'scale(0.8)', transformOrigin: '100% 50%', opacity: 0 },
    '100%': { transform: 'scale(1)', transformOrigin: '100% 50%' },
  }),
  CP = new ft('antZoomRightOut', {
    '0%': { transform: 'scale(1)', transformOrigin: '100% 50%' },
    '100%': {
      transform: 'scale(0.8)',
      transformOrigin: '100% 50%',
      opacity: 0,
    },
  }),
  bP = new ft('antZoomDownIn', {
    '0%': { transform: 'scale(0.8)', transformOrigin: '50% 100%', opacity: 0 },
    '100%': { transform: 'scale(1)', transformOrigin: '50% 100%' },
  }),
  xP = new ft('antZoomDownOut', {
    '0%': { transform: 'scale(1)', transformOrigin: '50% 100%' },
    '100%': {
      transform: 'scale(0.8)',
      transformOrigin: '50% 100%',
      opacity: 0,
    },
  }),
  EP = {
    zoom: { inKeyframes: mP, outKeyframes: pP },
    'zoom-big': { inKeyframes: kh, outKeyframes: Ph },
    'zoom-big-fast': { inKeyframes: kh, outKeyframes: Ph },
    'zoom-left': { inKeyframes: yP, outKeyframes: SP },
    'zoom-right': { inKeyframes: wP, outKeyframes: CP },
    'zoom-up': { inKeyframes: hP, outKeyframes: gP },
    'zoom-down': { inKeyframes: bP, outKeyframes: xP },
  },
  J1 = (e, t) => {
    const { antCls: n } = e,
      r = `${n}-${t}`,
      { inKeyframes: o, outKeyframes: i } = EP[t];
    return [
      Z1(
        r,
        o,
        i,
        t === 'zoom-big-fast' ? e.motionDurationFast : e.motionDurationMid
      ),
      {
        [`
        ${r}-enter,
        ${r}-appear
      `]: {
          transform: 'scale(0)',
          opacity: 0,
          animationTimingFunction: e.motionEaseOutCirc,
          '&-prepare': { transform: 'none' },
        },
        [`${r}-leave`]: { animationTimingFunction: e.motionEaseInOutCirc },
      },
    ];
  };
var eS = f.createContext(null),
  Rh = [];
function kP(e, t) {
  var n = f.useState(function () {
      if (!Sn()) return null;
      var g = document.createElement('div');
      return g;
    }),
    r = V(n, 1),
    o = r[0],
    i = f.useRef(!1),
    a = f.useContext(eS),
    l = f.useState(Rh),
    s = V(l, 2),
    u = s[0],
    c = s[1],
    d =
      a ||
      (i.current
        ? void 0
        : function (g) {
            c(function (S) {
              var y = [g].concat(Z(S));
              return y;
            });
          });
  function v() {
    o.parentElement || document.body.appendChild(o), (i.current = !0);
  }
  function w() {
    var g;
    (g = o.parentElement) === null || g === void 0 || g.removeChild(o),
      (i.current = !1);
  }
  return (
    Wt(
      function () {
        return e ? (a ? a(v) : v()) : w(), w;
      },
      [e]
    ),
    Wt(
      function () {
        u.length &&
          (u.forEach(function (g) {
            return g();
          }),
          c(Rh));
      },
      [u]
    ),
    [o, d]
  );
}
function PP(e) {
  var t = 'rc-scrollbar-measure-'.concat(
      Math.random().toString(36).substring(7)
    ),
    n = document.createElement('div');
  n.id = t;
  var r = n.style;
  (r.position = 'absolute'),
    (r.left = '0'),
    (r.top = '0'),
    (r.width = '100px'),
    (r.height = '100px'),
    (r.overflow = 'scroll');
  var o, i;
  if (e) {
    var a = getComputedStyle(e);
    (r.scrollbarColor = a.scrollbarColor),
      (r.scrollbarWidth = a.scrollbarWidth);
    var l = getComputedStyle(e, '::-webkit-scrollbar'),
      s = parseInt(l.width, 10),
      u = parseInt(l.height, 10);
    try {
      var c = s ? 'width: '.concat(l.width, ';') : '',
        d = u ? 'height: '.concat(l.height, ';') : '';
      xr(
        `
#`
          .concat(
            t,
            `::-webkit-scrollbar {
`
          )
          .concat(
            c,
            `
`
          )
          .concat(
            d,
            `
}`
          ),
        t
      );
    } catch (g) {
      console.error(g), (o = s), (i = u);
    }
  }
  document.body.appendChild(n);
  var v = e && o && !isNaN(o) ? o : n.offsetWidth - n.clientWidth,
    w = e && i && !isNaN(i) ? i : n.offsetHeight - n.clientHeight;
  return document.body.removeChild(n), il(t), { width: v, height: w };
}
function RP(e) {
  return typeof document > 'u' || !e || !(e instanceof Element)
    ? { width: 0, height: 0 }
    : PP(e);
}
function IP() {
  return (
    document.body.scrollHeight >
      (window.innerHeight || document.documentElement.clientHeight) &&
    window.innerWidth > document.body.offsetWidth
  );
}
var MP = 'rc-util-locker-'.concat(Date.now()),
  Ih = 0;
function OP(e) {
  var t = !!e,
    n = f.useState(function () {
      return (Ih += 1), ''.concat(MP, '_').concat(Ih);
    }),
    r = V(n, 1),
    o = r[0];
  Wt(
    function () {
      if (t) {
        var i = RP(document.body).width,
          a = IP();
        xr(
          `
html body {
  overflow-y: hidden;
  `.concat(
            a ? 'width: calc(100% - '.concat(i, 'px);') : '',
            `
}`
          ),
          o
        );
      } else il(o);
      return function () {
        il(o);
      };
    },
    [t, o]
  );
}
var $P = !1;
function TP(e) {
  return $P;
}
var Mh = function (t) {
    return t === !1
      ? !1
      : !Sn() || !t
        ? null
        : typeof t == 'string'
          ? document.querySelector(t)
          : typeof t == 'function'
            ? t()
            : t;
  },
  tS = f.forwardRef(function (e, t) {
    var n = e.open,
      r = e.autoLock,
      o = e.getContainer;
    e.debug;
    var i = e.autoDestroy,
      a = i === void 0 ? !0 : i,
      l = e.children,
      s = f.useState(n),
      u = V(s, 2),
      c = u[0],
      d = u[1],
      v = c || n;
    f.useEffect(
      function () {
        (a || n) && d(n);
      },
      [n, a]
    );
    var w = f.useState(function () {
        return Mh(o);
      }),
      g = V(w, 2),
      S = g[0],
      y = g[1];
    f.useEffect(function () {
      var A = Mh(o);
      y(A ?? null);
    });
    var p = kP(v && !S),
      m = V(p, 2),
      h = m[0],
      C = m[1],
      b = S ?? h;
    OP(r && n && Sn() && (b === h || b === document.body));
    var x = null;
    if (l && Hu(l) && t) {
      var E = l;
      x = E.ref;
    }
    var P = Vu(x, t);
    if (!v || !Sn() || S === void 0) return null;
    var I = b === !1 || TP(),
      M = l;
    return (
      t && (M = f.cloneElement(l, { ref: P })),
      f.createElement(eS.Provider, { value: C }, I ? M : Cl.createPortal(M, b))
    );
  });
function _P() {
  var e = N({}, hl);
  return e.useId;
}
var Oh = 0,
  $h = _P();
const NP = $h
  ? function (t) {
      var n = $h();
      return t || n;
    }
  : function (t) {
      var n = f.useState('ssr-id'),
        r = V(n, 2),
        o = r[0],
        i = r[1];
      return (
        f.useEffect(function () {
          var a = Oh;
          (Oh += 1), i('rc_unique_'.concat(a));
        }, []),
        t || o
      );
    };
var Io = 'RC_FORM_INTERNAL_HOOKS',
  _e = function () {
    Yt(
      !1,
      'Can not find FormContext. Please make sure you wrap Field under Form.'
    );
  },
  Vi = f.createContext({
    getFieldValue: _e,
    getFieldsValue: _e,
    getFieldError: _e,
    getFieldWarning: _e,
    getFieldsError: _e,
    isFieldsTouched: _e,
    isFieldTouched: _e,
    isFieldValidating: _e,
    isFieldsValidating: _e,
    resetFields: _e,
    setFields: _e,
    setFieldValue: _e,
    setFieldsValue: _e,
    validateFields: _e,
    submit: _e,
    getInternalHooks: function () {
      return (
        _e(),
        {
          dispatch: _e,
          initEntityValue: _e,
          registerField: _e,
          useSubscribe: _e,
          setInitialValues: _e,
          destroyForm: _e,
          setCallbacks: _e,
          registerWatch: _e,
          getFields: _e,
          setValidateMessages: _e,
          setPreserve: _e,
          getInitialValue: _e,
        }
      );
    },
  }),
  uu = f.createContext(null);
function Id(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function FP(e) {
  return e && !!e._init;
}
function Md() {
  return {
    default: 'Validation error on field %s',
    required: '%s is required',
    enum: '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid',
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      boolean: '%s is not a %s',
      integer: '%s is not an %s',
      float: '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s',
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters',
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s',
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length',
    },
    pattern: { mismatch: '%s value %s does not match pattern %s' },
    clone: function () {
      var t = JSON.parse(JSON.stringify(this));
      return (t.clone = this.clone), t;
    },
  };
}
var Od = Md();
function LP(e) {
  try {
    return Function.toString.call(e).indexOf('[native code]') !== -1;
  } catch {
    return typeof e == 'function';
  }
}
function AP(e, t, n) {
  if (Wv()) return Reflect.construct.apply(null, arguments);
  var r = [null];
  r.push.apply(r, t);
  var o = new (e.bind.apply(e, r))();
  return n && nl(o, n.prototype), o;
}
function $d(e) {
  var t = typeof Map == 'function' ? new Map() : void 0;
  return (
    ($d = function (r) {
      if (r === null || !LP(r)) return r;
      if (typeof r != 'function')
        throw new TypeError(
          'Super expression must either be null or a function'
        );
      if (t !== void 0) {
        if (t.has(r)) return t.get(r);
        t.set(r, o);
      }
      function o() {
        return AP(r, arguments, rl(this).constructor);
      }
      return (
        (o.prototype = Object.create(r.prototype, {
          constructor: {
            value: o,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        nl(o, r)
      );
    }),
    $d(e)
  );
}
var zP = /%[sdj%]/g,
  jP = function () {};
function Td(e) {
  if (!e || !e.length) return null;
  var t = {};
  return (
    e.forEach(function (n) {
      var r = n.field;
      (t[r] = t[r] || []), t[r].push(n);
    }),
    t
  );
}
function hn(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  var o = 0,
    i = n.length;
  if (typeof e == 'function') return e.apply(null, n);
  if (typeof e == 'string') {
    var a = e.replace(zP, function (l) {
      if (l === '%%') return '%';
      if (o >= i) return l;
      switch (l) {
        case '%s':
          return String(n[o++]);
        case '%d':
          return Number(n[o++]);
        case '%j':
          try {
            return JSON.stringify(n[o++]);
          } catch {
            return '[Circular]';
          }
          break;
        default:
          return l;
      }
    });
    return a;
  }
  return e;
}
function DP(e) {
  return (
    e === 'string' ||
    e === 'url' ||
    e === 'hex' ||
    e === 'email' ||
    e === 'date' ||
    e === 'pattern'
  );
}
function gt(e, t) {
  return !!(
    e == null ||
    (t === 'array' && Array.isArray(e) && !e.length) ||
    (DP(t) && typeof e == 'string' && !e)
  );
}
function BP(e, t, n) {
  var r = [],
    o = 0,
    i = e.length;
  function a(l) {
    r.push.apply(r, Z(l || [])), o++, o === i && n(r);
  }
  e.forEach(function (l) {
    t(l, a);
  });
}
function Th(e, t, n) {
  var r = 0,
    o = e.length;
  function i(a) {
    if (a && a.length) {
      n(a);
      return;
    }
    var l = r;
    (r = r + 1), l < o ? t(e[l], i) : n([]);
  }
  i([]);
}
function VP(e) {
  var t = [];
  return (
    Object.keys(e).forEach(function (n) {
      t.push.apply(t, Z(e[n] || []));
    }),
    t
  );
}
var _h = (function (e) {
  co(n, e);
  var t = fo(n);
  function n(r, o) {
    var i;
    return (
      At(this, n),
      (i = t.call(this, 'Async Validation Error')),
      $(se(i), 'errors', void 0),
      $(se(i), 'fields', void 0),
      (i.errors = r),
      (i.fields = o),
      i
    );
  }
  return zt(n);
})($d(Error));
function HP(e, t, n, r, o) {
  if (t.first) {
    var i = new Promise(function (v, w) {
      var g = function (p) {
          return r(p), p.length ? w(new _h(p, Td(p))) : v(o);
        },
        S = VP(e);
      Th(S, n, g);
    });
    return (
      i.catch(function (v) {
        return v;
      }),
      i
    );
  }
  var a = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [],
    l = Object.keys(e),
    s = l.length,
    u = 0,
    c = [],
    d = new Promise(function (v, w) {
      var g = function (y) {
        if ((c.push.apply(c, y), u++, u === s))
          return r(c), c.length ? w(new _h(c, Td(c))) : v(o);
      };
      l.length || (r(c), v(o)),
        l.forEach(function (S) {
          var y = e[S];
          a.indexOf(S) !== -1 ? Th(y, n, g) : BP(y, n, g);
        });
    });
  return (
    d.catch(function (v) {
      return v;
    }),
    d
  );
}
function UP(e) {
  return !!(e && e.message !== void 0);
}
function WP(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null) return n;
    n = n[t[r]];
  }
  return n;
}
function Nh(e, t) {
  return function (n) {
    var r;
    return (
      e.fullFields
        ? (r = WP(t, e.fullFields))
        : (r = t[n.field || e.fullField]),
      UP(n)
        ? ((n.field = n.field || e.fullField), (n.fieldValue = r), n)
        : {
            message: typeof n == 'function' ? n() : n,
            fieldValue: r,
            field: n.field || e.fullField,
          }
    );
  };
}
function Fh(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n];
        oe(r) === 'object' && oe(e[n]) === 'object'
          ? (e[n] = N(N({}, e[n]), r))
          : (e[n] = r);
      }
  }
  return e;
}
var ti = 'enum',
  KP = function (t, n, r, o, i) {
    (t[ti] = Array.isArray(t[ti]) ? t[ti] : []),
      t[ti].indexOf(n) === -1 &&
        o.push(hn(i.messages[ti], t.fullField, t[ti].join(', ')));
  },
  GP = function (t, n, r, o, i) {
    if (t.pattern) {
      if (t.pattern instanceof RegExp)
        (t.pattern.lastIndex = 0),
          t.pattern.test(n) ||
            o.push(hn(i.messages.pattern.mismatch, t.fullField, n, t.pattern));
      else if (typeof t.pattern == 'string') {
        var a = new RegExp(t.pattern);
        a.test(n) ||
          o.push(hn(i.messages.pattern.mismatch, t.fullField, n, t.pattern));
      }
    }
  },
  qP = function (t, n, r, o, i) {
    var a = typeof t.len == 'number',
      l = typeof t.min == 'number',
      s = typeof t.max == 'number',
      u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
      c = n,
      d = null,
      v = typeof n == 'number',
      w = typeof n == 'string',
      g = Array.isArray(n);
    if ((v ? (d = 'number') : w ? (d = 'string') : g && (d = 'array'), !d))
      return !1;
    g && (c = n.length),
      w && (c = n.replace(u, '_').length),
      a
        ? c !== t.len && o.push(hn(i.messages[d].len, t.fullField, t.len))
        : l && !s && c < t.min
          ? o.push(hn(i.messages[d].min, t.fullField, t.min))
          : s && !l && c > t.max
            ? o.push(hn(i.messages[d].max, t.fullField, t.max))
            : l &&
              s &&
              (c < t.min || c > t.max) &&
              o.push(hn(i.messages[d].range, t.fullField, t.min, t.max));
  },
  nS = function (t, n, r, o, i, a) {
    t.required &&
      (!r.hasOwnProperty(t.field) || gt(n, a || t.type)) &&
      o.push(hn(i.messages.required, t.fullField));
  },
  ls;
const XP = function () {
  if (ls) return ls;
  var e = '[a-fA-F\\d:]',
    t = function (x) {
      return x && x.includeBoundaries
        ? '(?:(?<=\\s|^)(?='.concat(e, ')|(?<=').concat(e, ')(?=\\s|$))')
        : '';
    },
    n =
      '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}',
    r = '[a-fA-F\\d]{1,4}',
    o = [
      '(?:'.concat(r, ':){7}(?:').concat(r, '|:)'),
      '(?:'.concat(r, ':){6}(?:').concat(n, '|:').concat(r, '|:)'),
      '(?:'.concat(r, ':){5}(?::').concat(n, '|(?::').concat(r, '){1,2}|:)'),
      '(?:'
        .concat(r, ':){4}(?:(?::')
        .concat(r, '){0,1}:')
        .concat(n, '|(?::')
        .concat(r, '){1,3}|:)'),
      '(?:'
        .concat(r, ':){3}(?:(?::')
        .concat(r, '){0,2}:')
        .concat(n, '|(?::')
        .concat(r, '){1,4}|:)'),
      '(?:'
        .concat(r, ':){2}(?:(?::')
        .concat(r, '){0,3}:')
        .concat(n, '|(?::')
        .concat(r, '){1,5}|:)'),
      '(?:'
        .concat(r, ':){1}(?:(?::')
        .concat(r, '){0,4}:')
        .concat(n, '|(?::')
        .concat(r, '){1,6}|:)'),
      '(?::(?:(?::'
        .concat(r, '){0,5}:')
        .concat(n, '|(?::')
        .concat(r, '){1,7}|:))'),
    ],
    i = '(?:%[0-9a-zA-Z]{1,})?',
    a = '(?:'.concat(o.join('|'), ')').concat(i),
    l = new RegExp('(?:^'.concat(n, '$)|(?:^').concat(a, '$)')),
    s = new RegExp('^'.concat(n, '$')),
    u = new RegExp('^'.concat(a, '$')),
    c = function (x) {
      return x && x.exact
        ? l
        : new RegExp(
            '(?:'
              .concat(t(x))
              .concat(n)
              .concat(t(x), ')|(?:')
              .concat(t(x))
              .concat(a)
              .concat(t(x), ')'),
            'g'
          );
    };
  (c.v4 = function (b) {
    return b && b.exact
      ? s
      : new RegExp(''.concat(t(b)).concat(n).concat(t(b)), 'g');
  }),
    (c.v6 = function (b) {
      return b && b.exact
        ? u
        : new RegExp(''.concat(t(b)).concat(a).concat(t(b)), 'g');
    });
  var d = '(?:(?:[a-z]+:)?//)',
    v = '(?:\\S+(?::\\S*)?@)?',
    w = c.v4().source,
    g = c.v6().source,
    S = '(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)',
    y = '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*',
    p = '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))',
    m = '(?::\\d{2,5})?',
    h = '(?:[/?#][^\\s"]*)?',
    C = '(?:'
      .concat(d, '|www\\.)')
      .concat(v, '(?:localhost|')
      .concat(w, '|')
      .concat(g, '|')
      .concat(S)
      .concat(y)
      .concat(p, ')')
      .concat(m)
      .concat(h);
  return (ls = new RegExp('(?:^'.concat(C, '$)'), 'i')), ls;
};
var Lh = {
    email:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
    hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,
  },
  Sa = {
    integer: function (t) {
      return Sa.number(t) && parseInt(t, 10) === t;
    },
    float: function (t) {
      return Sa.number(t) && !Sa.integer(t);
    },
    array: function (t) {
      return Array.isArray(t);
    },
    regexp: function (t) {
      if (t instanceof RegExp) return !0;
      try {
        return !!new RegExp(t);
      } catch {
        return !1;
      }
    },
    date: function (t) {
      return (
        typeof t.getTime == 'function' &&
        typeof t.getMonth == 'function' &&
        typeof t.getYear == 'function' &&
        !isNaN(t.getTime())
      );
    },
    number: function (t) {
      return isNaN(t) ? !1 : typeof t == 'number';
    },
    object: function (t) {
      return oe(t) === 'object' && !Sa.array(t);
    },
    method: function (t) {
      return typeof t == 'function';
    },
    email: function (t) {
      return typeof t == 'string' && t.length <= 320 && !!t.match(Lh.email);
    },
    url: function (t) {
      return typeof t == 'string' && t.length <= 2048 && !!t.match(XP());
    },
    hex: function (t) {
      return typeof t == 'string' && !!t.match(Lh.hex);
    },
  },
  QP = function (t, n, r, o, i) {
    if (t.required && n === void 0) {
      nS(t, n, r, o, i);
      return;
    }
    var a = [
        'integer',
        'float',
        'array',
        'regexp',
        'object',
        'method',
        'email',
        'number',
        'date',
        'url',
        'hex',
      ],
      l = t.type;
    a.indexOf(l) > -1
      ? Sa[l](n) || o.push(hn(i.messages.types[l], t.fullField, t.type))
      : l &&
        oe(n) !== t.type &&
        o.push(hn(i.messages.types[l], t.fullField, t.type));
  },
  YP = function (t, n, r, o, i) {
    (/^\s+$/.test(n) || n === '') &&
      o.push(hn(i.messages.whitespace, t.fullField));
  };
const de = {
  required: nS,
  whitespace: YP,
  type: QP,
  range: qP,
  enum: KP,
  pattern: GP,
};
var ZP = function (t, n, r, o, i) {
    var a = [],
      l = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (l) {
      if (gt(n) && !t.required) return r();
      de.required(t, n, o, a, i);
    }
    r(a);
  },
  JP = function (t, n, r, o, i) {
    var a = [],
      l = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (l) {
      if (n == null && !t.required) return r();
      de.required(t, n, o, a, i, 'array'),
        n != null && (de.type(t, n, o, a, i), de.range(t, n, o, a, i));
    }
    r(a);
  },
  eR = function (t, n, r, o, i) {
    var a = [],
      l = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (l) {
      if (gt(n) && !t.required) return r();
      de.required(t, n, o, a, i), n !== void 0 && de.type(t, n, o, a, i);
    }
    r(a);
  },
  tR = function (t, n, r, o, i) {
    var a = [],
      l = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (l) {
      if (gt(n, 'date') && !t.required) return r();
      if ((de.required(t, n, o, a, i), !gt(n, 'date'))) {
        var s;
        n instanceof Date ? (s = n) : (s = new Date(n)),
          de.type(t, s, o, a, i),
          s && de.range(t, s.getTime(), o, a, i);
      }
    }
    r(a);
  },
  nR = 'enum',
  rR = function (t, n, r, o, i) {
    var a = [],
      l = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (l) {
      if (gt(n) && !t.required) return r();
      de.required(t, n, o, a, i), n !== void 0 && de[nR](t, n, o, a, i);
    }
    r(a);
  },
  oR = function (t, n, r, o, i) {
    var a = [],
      l = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (l) {
      if (gt(n) && !t.required) return r();
      de.required(t, n, o, a, i),
        n !== void 0 && (de.type(t, n, o, a, i), de.range(t, n, o, a, i));
    }
    r(a);
  },
  iR = function (t, n, r, o, i) {
    var a = [],
      l = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (l) {
      if (gt(n) && !t.required) return r();
      de.required(t, n, o, a, i),
        n !== void 0 && (de.type(t, n, o, a, i), de.range(t, n, o, a, i));
    }
    r(a);
  },
  aR = function (t, n, r, o, i) {
    var a = [],
      l = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (l) {
      if (gt(n) && !t.required) return r();
      de.required(t, n, o, a, i), n !== void 0 && de.type(t, n, o, a, i);
    }
    r(a);
  },
  lR = function (t, n, r, o, i) {
    var a = [],
      l = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (l) {
      if ((n === '' && (n = void 0), gt(n) && !t.required)) return r();
      de.required(t, n, o, a, i),
        n !== void 0 && (de.type(t, n, o, a, i), de.range(t, n, o, a, i));
    }
    r(a);
  },
  sR = function (t, n, r, o, i) {
    var a = [],
      l = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (l) {
      if (gt(n) && !t.required) return r();
      de.required(t, n, o, a, i), n !== void 0 && de.type(t, n, o, a, i);
    }
    r(a);
  },
  uR = function (t, n, r, o, i) {
    var a = [],
      l = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (l) {
      if (gt(n, 'string') && !t.required) return r();
      de.required(t, n, o, a, i), gt(n, 'string') || de.pattern(t, n, o, a, i);
    }
    r(a);
  },
  cR = function (t, n, r, o, i) {
    var a = [],
      l = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (l) {
      if (gt(n) && !t.required) return r();
      de.required(t, n, o, a, i), gt(n) || de.type(t, n, o, a, i);
    }
    r(a);
  },
  fR = function (t, n, r, o, i) {
    var a = [],
      l = Array.isArray(n) ? 'array' : oe(n);
    de.required(t, n, o, a, i, l), r(a);
  },
  dR = function (t, n, r, o, i) {
    var a = [],
      l = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (l) {
      if (gt(n, 'string') && !t.required) return r();
      de.required(t, n, o, a, i, 'string'),
        gt(n, 'string') ||
          (de.type(t, n, o, a, i),
          de.range(t, n, o, a, i),
          de.pattern(t, n, o, a, i),
          t.whitespace === !0 && de.whitespace(t, n, o, a, i));
    }
    r(a);
  },
  qc = function (t, n, r, o, i) {
    var a = t.type,
      l = [],
      s = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (s) {
      if (gt(n, a) && !t.required) return r();
      de.required(t, n, o, l, i, a), gt(n, a) || de.type(t, n, o, l, i);
    }
    r(l);
  };
const Na = {
  string: dR,
  method: aR,
  number: lR,
  boolean: eR,
  regexp: cR,
  integer: iR,
  float: oR,
  array: JP,
  object: sR,
  enum: rR,
  pattern: uR,
  date: tR,
  url: qc,
  hex: qc,
  email: qc,
  required: fR,
  any: ZP,
};
var kl = (function () {
  function e(t) {
    At(this, e),
      $(this, 'rules', null),
      $(this, '_messages', Od),
      this.define(t);
  }
  return (
    zt(e, [
      {
        key: 'define',
        value: function (n) {
          var r = this;
          if (!n) throw new Error('Cannot configure a schema with no rules');
          if (oe(n) !== 'object' || Array.isArray(n))
            throw new Error('Rules must be an object');
          (this.rules = {}),
            Object.keys(n).forEach(function (o) {
              var i = n[o];
              r.rules[o] = Array.isArray(i) ? i : [i];
            });
        },
      },
      {
        key: 'messages',
        value: function (n) {
          return n && (this._messages = Fh(Md(), n)), this._messages;
        },
      },
      {
        key: 'validate',
        value: function (n) {
          var r = this,
            o =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : function () {},
            a = n,
            l = o,
            s = i;
          if (
            (typeof l == 'function' && ((s = l), (l = {})),
            !this.rules || Object.keys(this.rules).length === 0)
          )
            return s && s(null, a), Promise.resolve(a);
          function u(g) {
            var S = [],
              y = {};
            function p(h) {
              if (Array.isArray(h)) {
                var C;
                S = (C = S).concat.apply(C, Z(h));
              } else S.push(h);
            }
            for (var m = 0; m < g.length; m++) p(g[m]);
            S.length ? ((y = Td(S)), s(S, y)) : s(null, a);
          }
          if (l.messages) {
            var c = this.messages();
            c === Od && (c = Md()), Fh(c, l.messages), (l.messages = c);
          } else l.messages = this.messages();
          var d = {},
            v = l.keys || Object.keys(this.rules);
          v.forEach(function (g) {
            var S = r.rules[g],
              y = a[g];
            S.forEach(function (p) {
              var m = p;
              typeof m.transform == 'function' &&
                (a === n && (a = N({}, a)),
                (y = a[g] = m.transform(y)),
                y != null &&
                  (m.type = m.type || (Array.isArray(y) ? 'array' : oe(y)))),
                typeof m == 'function'
                  ? (m = { validator: m })
                  : (m = N({}, m)),
                (m.validator = r.getValidationMethod(m)),
                m.validator &&
                  ((m.field = g),
                  (m.fullField = m.fullField || g),
                  (m.type = r.getType(m)),
                  (d[g] = d[g] || []),
                  d[g].push({ rule: m, value: y, source: a, field: g }));
            });
          });
          var w = {};
          return HP(
            d,
            l,
            function (g, S) {
              var y = g.rule,
                p =
                  (y.type === 'object' || y.type === 'array') &&
                  (oe(y.fields) === 'object' ||
                    oe(y.defaultField) === 'object');
              (p = p && (y.required || (!y.required && g.value))),
                (y.field = g.field);
              function m(E, P) {
                return N(
                  N({}, P),
                  {},
                  {
                    fullField: ''.concat(y.fullField, '.').concat(E),
                    fullFields: y.fullFields
                      ? [].concat(Z(y.fullFields), [E])
                      : [E],
                  }
                );
              }
              function h() {
                var E =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : [],
                  P = Array.isArray(E) ? E : [E];
                !l.suppressWarning &&
                  P.length &&
                  e.warning('async-validator:', P),
                  P.length &&
                    y.message !== void 0 &&
                    (P = [].concat(y.message));
                var I = P.map(Nh(y, a));
                if (l.first && I.length) return (w[y.field] = 1), S(I);
                if (!p) S(I);
                else {
                  if (y.required && !g.value)
                    return (
                      y.message !== void 0
                        ? (I = [].concat(y.message).map(Nh(y, a)))
                        : l.error &&
                          (I = [l.error(y, hn(l.messages.required, y.field))]),
                      S(I)
                    );
                  var M = {};
                  y.defaultField &&
                    Object.keys(g.value).map(function (L) {
                      M[L] = y.defaultField;
                    }),
                    (M = N(N({}, M), g.rule.fields));
                  var A = {};
                  Object.keys(M).forEach(function (L) {
                    var F = M[L],
                      U = Array.isArray(F) ? F : [F];
                    A[L] = U.map(m.bind(null, L));
                  });
                  var j = new e(A);
                  j.messages(l.messages),
                    g.rule.options &&
                      ((g.rule.options.messages = l.messages),
                      (g.rule.options.error = l.error)),
                    j.validate(g.value, g.rule.options || l, function (L) {
                      var F = [];
                      I && I.length && F.push.apply(F, Z(I)),
                        L && L.length && F.push.apply(F, Z(L)),
                        S(F.length ? F : null);
                    });
                }
              }
              var C;
              if (y.asyncValidator)
                C = y.asyncValidator(y, g.value, h, g.source, l);
              else if (y.validator) {
                try {
                  C = y.validator(y, g.value, h, g.source, l);
                } catch (E) {
                  var b, x;
                  (b = (x = console).error) === null ||
                    b === void 0 ||
                    b.call(x, E),
                    l.suppressValidatorError ||
                      setTimeout(function () {
                        throw E;
                      }, 0),
                    h(E.message);
                }
                C === !0
                  ? h()
                  : C === !1
                    ? h(
                        typeof y.message == 'function'
                          ? y.message(y.fullField || y.field)
                          : y.message ||
                              ''.concat(y.fullField || y.field, ' fails')
                      )
                    : C instanceof Array
                      ? h(C)
                      : C instanceof Error && h(C.message);
              }
              C &&
                C.then &&
                C.then(
                  function () {
                    return h();
                  },
                  function (E) {
                    return h(E);
                  }
                );
            },
            function (g) {
              u(g);
            },
            a
          );
        },
      },
      {
        key: 'getType',
        value: function (n) {
          if (
            (n.type === void 0 &&
              n.pattern instanceof RegExp &&
              (n.type = 'pattern'),
            typeof n.validator != 'function' &&
              n.type &&
              !Na.hasOwnProperty(n.type))
          )
            throw new Error(hn('Unknown rule type %s', n.type));
          return n.type || 'string';
        },
      },
      {
        key: 'getValidationMethod',
        value: function (n) {
          if (typeof n.validator == 'function') return n.validator;
          var r = Object.keys(n),
            o = r.indexOf('message');
          return (
            o !== -1 && r.splice(o, 1),
            r.length === 1 && r[0] === 'required'
              ? Na.required
              : Na[this.getType(n)] || void 0
          );
        },
      },
    ]),
    e
  );
})();
$(kl, 'register', function (t, n) {
  if (typeof n != 'function')
    throw new Error(
      'Cannot register a validator by type, validator is not a function'
    );
  Na[t] = n;
});
$(kl, 'warning', jP);
$(kl, 'messages', Od);
$(kl, 'validators', Na);
var dn = "'${name}' is not a valid ${type}",
  rS = {
    default: "Validation error on field '${name}'",
    required: "'${name}' is required",
    enum: "'${name}' must be one of [${enum}]",
    whitespace: "'${name}' cannot be empty",
    date: {
      format: "'${name}' is invalid for format date",
      parse: "'${name}' could not be parsed as date",
      invalid: "'${name}' is invalid date",
    },
    types: {
      string: dn,
      method: dn,
      array: dn,
      object: dn,
      number: dn,
      date: dn,
      boolean: dn,
      integer: dn,
      float: dn,
      regexp: dn,
      email: dn,
      url: dn,
      hex: dn,
    },
    string: {
      len: "'${name}' must be exactly ${len} characters",
      min: "'${name}' must be at least ${min} characters",
      max: "'${name}' cannot be longer than ${max} characters",
      range: "'${name}' must be between ${min} and ${max} characters",
    },
    number: {
      len: "'${name}' must equal ${len}",
      min: "'${name}' cannot be less than ${min}",
      max: "'${name}' cannot be greater than ${max}",
      range: "'${name}' must be between ${min} and ${max}",
    },
    array: {
      len: "'${name}' must be exactly ${len} in length",
      min: "'${name}' cannot be less than ${min} in length",
      max: "'${name}' cannot be greater than ${max} in length",
      range: "'${name}' must be between ${min} and ${max} in length",
    },
    pattern: { mismatch: "'${name}' does not match pattern ${pattern}" },
  },
  Ah = kl;
function vR(e, t) {
  return e.replace(/\\?\$\{\w+\}/g, function (n) {
    if (n.startsWith('\\')) return n.slice(1);
    var r = n.slice(2, -1);
    return t[r];
  });
}
var zh = 'CODE_LOGIC_ERROR';
function _d(e, t, n, r, o) {
  return Nd.apply(this, arguments);
}
function Nd() {
  return (
    (Nd = El(
      Jn().mark(function e(t, n, r, o, i) {
        var a, l, s, u, c, d, v, w, g;
        return Jn().wrap(
          function (y) {
            for (;;)
              switch ((y.prev = y.next)) {
                case 0:
                  return (
                    (a = N({}, r)),
                    delete a.ruleIndex,
                    (Ah.warning = function () {}),
                    a.validator &&
                      ((l = a.validator),
                      (a.validator = function () {
                        try {
                          return l.apply(void 0, arguments);
                        } catch (p) {
                          return console.error(p), Promise.reject(zh);
                        }
                      })),
                    (s = null),
                    a &&
                      a.type === 'array' &&
                      a.defaultField &&
                      ((s = a.defaultField), delete a.defaultField),
                    (u = new Ah($({}, t, [a]))),
                    (c = wi(rS, o.validateMessages)),
                    u.messages(c),
                    (d = []),
                    (y.prev = 10),
                    (y.next = 13),
                    Promise.resolve(u.validate($({}, t, n), N({}, o)))
                  );
                case 13:
                  y.next = 18;
                  break;
                case 15:
                  (y.prev = 15),
                    (y.t0 = y.catch(10)),
                    y.t0.errors &&
                      (d = y.t0.errors.map(function (p, m) {
                        var h = p.message,
                          C = h === zh ? c.default : h;
                        return f.isValidElement(C)
                          ? f.cloneElement(C, { key: 'error_'.concat(m) })
                          : C;
                      }));
                case 18:
                  if (!(!d.length && s)) {
                    y.next = 23;
                    break;
                  }
                  return (
                    (y.next = 21),
                    Promise.all(
                      n.map(function (p, m) {
                        return _d(''.concat(t, '.').concat(m), p, s, o, i);
                      })
                    )
                  );
                case 21:
                  return (
                    (v = y.sent),
                    y.abrupt(
                      'return',
                      v.reduce(function (p, m) {
                        return [].concat(Z(p), Z(m));
                      }, [])
                    )
                  );
                case 23:
                  return (
                    (w = N(
                      N({}, r),
                      {},
                      { name: t, enum: (r.enum || []).join(', ') },
                      i
                    )),
                    (g = d.map(function (p) {
                      return typeof p == 'string' ? vR(p, w) : p;
                    })),
                    y.abrupt('return', g)
                  );
                case 26:
                case 'end':
                  return y.stop();
              }
          },
          e,
          null,
          [[10, 15]]
        );
      })
    )),
    Nd.apply(this, arguments)
  );
}
function mR(e, t, n, r, o, i) {
  var a = e.join('.'),
    l = n
      .map(function (c, d) {
        var v = c.validator,
          w = N(N({}, c), {}, { ruleIndex: d });
        return (
          v &&
            (w.validator = function (g, S, y) {
              var p = !1,
                m = function () {
                  for (
                    var b = arguments.length, x = new Array(b), E = 0;
                    E < b;
                    E++
                  )
                    x[E] = arguments[E];
                  Promise.resolve().then(function () {
                    Yt(
                      !p,
                      'Your validator function has already return a promise. `callback` will be ignored.'
                    ),
                      p || y.apply(void 0, x);
                  });
                },
                h = v(g, S, m);
              (p =
                h &&
                typeof h.then == 'function' &&
                typeof h.catch == 'function'),
                Yt(
                  p,
                  '`callback` is deprecated. Please return a promise instead.'
                ),
                p &&
                  h
                    .then(function () {
                      y();
                    })
                    .catch(function (C) {
                      y(C || ' ');
                    });
            }),
          w
        );
      })
      .sort(function (c, d) {
        var v = c.warningOnly,
          w = c.ruleIndex,
          g = d.warningOnly,
          S = d.ruleIndex;
        return !!v == !!g ? w - S : v ? 1 : -1;
      }),
    s;
  if (o === !0)
    s = new Promise(
      (function () {
        var c = El(
          Jn().mark(function d(v, w) {
            var g, S, y;
            return Jn().wrap(function (m) {
              for (;;)
                switch ((m.prev = m.next)) {
                  case 0:
                    g = 0;
                  case 1:
                    if (!(g < l.length)) {
                      m.next = 12;
                      break;
                    }
                    return (S = l[g]), (m.next = 5), _d(a, t, S, r, i);
                  case 5:
                    if (((y = m.sent), !y.length)) {
                      m.next = 9;
                      break;
                    }
                    return w([{ errors: y, rule: S }]), m.abrupt('return');
                  case 9:
                    (g += 1), (m.next = 1);
                    break;
                  case 12:
                    v([]);
                  case 13:
                  case 'end':
                    return m.stop();
                }
            }, d);
          })
        );
        return function (d, v) {
          return c.apply(this, arguments);
        };
      })()
    );
  else {
    var u = l.map(function (c) {
      return _d(a, t, c, r, i).then(function (d) {
        return { errors: d, rule: c };
      });
    });
    s = (o ? hR(u) : pR(u)).then(function (c) {
      return Promise.reject(c);
    });
  }
  return (
    s.catch(function (c) {
      return c;
    }),
    s
  );
}
function pR(e) {
  return Fd.apply(this, arguments);
}
function Fd() {
  return (
    (Fd = El(
      Jn().mark(function e(t) {
        return Jn().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                return r.abrupt(
                  'return',
                  Promise.all(t).then(function (o) {
                    var i,
                      a = (i = []).concat.apply(i, Z(o));
                    return a;
                  })
                );
              case 1:
              case 'end':
                return r.stop();
            }
        }, e);
      })
    )),
    Fd.apply(this, arguments)
  );
}
function hR(e) {
  return Ld.apply(this, arguments);
}
function Ld() {
  return (
    (Ld = El(
      Jn().mark(function e(t) {
        var n;
        return Jn().wrap(function (o) {
          for (;;)
            switch ((o.prev = o.next)) {
              case 0:
                return (
                  (n = 0),
                  o.abrupt(
                    'return',
                    new Promise(function (i) {
                      t.forEach(function (a) {
                        a.then(function (l) {
                          l.errors.length && i([l]),
                            (n += 1),
                            n === t.length && i([]);
                        });
                      });
                    })
                  )
                );
              case 2:
              case 'end':
                return o.stop();
            }
        }, e);
      })
    )),
    Ld.apply(this, arguments)
  );
}
function lt(e) {
  return Id(e);
}
function jh(e, t) {
  var n = {};
  return (
    t.forEach(function (r) {
      var o = fr(e, r);
      n = Wn(n, r, o);
    }),
    n
  );
}
function Mi(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return (
    e &&
    e.some(function (r) {
      return oS(t, r, n);
    })
  );
}
function oS(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return !e || !t || (!n && e.length !== t.length)
    ? !1
    : t.every(function (r, o) {
        return e[o] === r;
      });
}
function gR(e, t) {
  if (e === t) return !0;
  if (
    (!e && t) ||
    (e && !t) ||
    !e ||
    !t ||
    oe(e) !== 'object' ||
    oe(t) !== 'object'
  )
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t),
    o = new Set([].concat(n, r));
  return Z(o).every(function (i) {
    var a = e[i],
      l = t[i];
    return typeof a == 'function' && typeof l == 'function' ? !0 : a === l;
  });
}
function yR(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && oe(t.target) === 'object' && e in t.target
    ? t.target[e]
    : t;
}
function Dh(e, t, n) {
  var r = e.length;
  if (t < 0 || t >= r || n < 0 || n >= r) return e;
  var o = e[t],
    i = t - n;
  return i > 0
    ? [].concat(Z(e.slice(0, n)), [o], Z(e.slice(n, t)), Z(e.slice(t + 1, r)))
    : i < 0
      ? [].concat(
          Z(e.slice(0, t)),
          Z(e.slice(t + 1, n + 1)),
          [o],
          Z(e.slice(n + 1, r))
        )
      : e;
}
var SR = ['name'],
  Pn = [];
function Xc(e, t, n, r, o, i) {
  return typeof e == 'function'
    ? e(t, n, 'source' in i ? { source: i.source } : {})
    : r !== o;
}
var tm = (function (e) {
  co(n, e);
  var t = fo(n);
  function n(r) {
    var o;
    if (
      (At(this, n),
      (o = t.call(this, r)),
      $(se(o), 'state', { resetCount: 0 }),
      $(se(o), 'cancelRegisterFunc', null),
      $(se(o), 'mounted', !1),
      $(se(o), 'touched', !1),
      $(se(o), 'dirty', !1),
      $(se(o), 'validatePromise', void 0),
      $(se(o), 'prevValidating', void 0),
      $(se(o), 'errors', Pn),
      $(se(o), 'warnings', Pn),
      $(se(o), 'cancelRegister', function () {
        var s = o.props,
          u = s.preserve,
          c = s.isListField,
          d = s.name;
        o.cancelRegisterFunc && o.cancelRegisterFunc(c, u, lt(d)),
          (o.cancelRegisterFunc = null);
      }),
      $(se(o), 'getNamePath', function () {
        var s = o.props,
          u = s.name,
          c = s.fieldContext,
          d = c.prefixName,
          v = d === void 0 ? [] : d;
        return u !== void 0 ? [].concat(Z(v), Z(u)) : [];
      }),
      $(se(o), 'getRules', function () {
        var s = o.props,
          u = s.rules,
          c = u === void 0 ? [] : u,
          d = s.fieldContext;
        return c.map(function (v) {
          return typeof v == 'function' ? v(d) : v;
        });
      }),
      $(se(o), 'refresh', function () {
        o.mounted &&
          o.setState(function (s) {
            var u = s.resetCount;
            return { resetCount: u + 1 };
          });
      }),
      $(se(o), 'metaCache', null),
      $(se(o), 'triggerMetaEvent', function (s) {
        var u = o.props.onMetaChange;
        if (u) {
          var c = N(N({}, o.getMeta()), {}, { destroy: s });
          al(o.metaCache, c) || u(c), (o.metaCache = c);
        } else o.metaCache = null;
      }),
      $(se(o), 'onStoreChange', function (s, u, c) {
        var d = o.props,
          v = d.shouldUpdate,
          w = d.dependencies,
          g = w === void 0 ? [] : w,
          S = d.onReset,
          y = c.store,
          p = o.getNamePath(),
          m = o.getValue(s),
          h = o.getValue(y),
          C = u && Mi(u, p);
        switch (
          (c.type === 'valueUpdate' &&
            c.source === 'external' &&
            !al(m, h) &&
            ((o.touched = !0),
            (o.dirty = !0),
            (o.validatePromise = null),
            (o.errors = Pn),
            (o.warnings = Pn),
            o.triggerMetaEvent()),
          c.type)
        ) {
          case 'reset':
            if (!u || C) {
              (o.touched = !1),
                (o.dirty = !1),
                (o.validatePromise = void 0),
                (o.errors = Pn),
                (o.warnings = Pn),
                o.triggerMetaEvent(),
                S == null || S(),
                o.refresh();
              return;
            }
            break;
          case 'remove': {
            if (v && Xc(v, s, y, m, h, c)) {
              o.reRender();
              return;
            }
            break;
          }
          case 'setField': {
            var b = c.data;
            if (C) {
              'touched' in b && (o.touched = b.touched),
                'validating' in b &&
                  !('originRCField' in b) &&
                  (o.validatePromise = b.validating
                    ? Promise.resolve([])
                    : null),
                'errors' in b && (o.errors = b.errors || Pn),
                'warnings' in b && (o.warnings = b.warnings || Pn),
                (o.dirty = !0),
                o.triggerMetaEvent(),
                o.reRender();
              return;
            } else if ('value' in b && Mi(u, p, !0)) {
              o.reRender();
              return;
            }
            if (v && !p.length && Xc(v, s, y, m, h, c)) {
              o.reRender();
              return;
            }
            break;
          }
          case 'dependenciesUpdate': {
            var x = g.map(lt);
            if (
              x.some(function (E) {
                return Mi(c.relatedFields, E);
              })
            ) {
              o.reRender();
              return;
            }
            break;
          }
          default:
            if (C || ((!g.length || p.length || v) && Xc(v, s, y, m, h, c))) {
              o.reRender();
              return;
            }
            break;
        }
        v === !0 && o.reRender();
      }),
      $(se(o), 'validateRules', function (s) {
        var u = o.getNamePath(),
          c = o.getValue(),
          d = s || {},
          v = d.triggerName,
          w = d.validateOnly,
          g = w === void 0 ? !1 : w,
          S = Promise.resolve().then(
            El(
              Jn().mark(function y() {
                var p, m, h, C, b, x, E;
                return Jn().wrap(function (I) {
                  for (;;)
                    switch ((I.prev = I.next)) {
                      case 0:
                        if (o.mounted) {
                          I.next = 2;
                          break;
                        }
                        return I.abrupt('return', []);
                      case 2:
                        if (
                          ((p = o.props),
                          (m = p.validateFirst),
                          (h = m === void 0 ? !1 : m),
                          (C = p.messageVariables),
                          (b = p.validateDebounce),
                          (x = o.getRules()),
                          v &&
                            (x = x
                              .filter(function (M) {
                                return M;
                              })
                              .filter(function (M) {
                                var A = M.validateTrigger;
                                if (!A) return !0;
                                var j = Id(A);
                                return j.includes(v);
                              })),
                          !(b && v))
                        ) {
                          I.next = 10;
                          break;
                        }
                        return (
                          (I.next = 8),
                          new Promise(function (M) {
                            setTimeout(M, b);
                          })
                        );
                      case 8:
                        if (o.validatePromise === S) {
                          I.next = 10;
                          break;
                        }
                        return I.abrupt('return', []);
                      case 10:
                        return (
                          (E = mR(u, c, x, s, h, C)),
                          E.catch(function (M) {
                            return M;
                          }).then(function () {
                            var M =
                              arguments.length > 0 && arguments[0] !== void 0
                                ? arguments[0]
                                : Pn;
                            if (o.validatePromise === S) {
                              var A;
                              o.validatePromise = null;
                              var j = [],
                                L = [];
                              (A = M.forEach) === null ||
                                A === void 0 ||
                                A.call(M, function (F) {
                                  var U = F.rule.warningOnly,
                                    T = F.errors,
                                    R = T === void 0 ? Pn : T;
                                  U
                                    ? L.push.apply(L, Z(R))
                                    : j.push.apply(j, Z(R));
                                }),
                                (o.errors = j),
                                (o.warnings = L),
                                o.triggerMetaEvent(),
                                o.reRender();
                            }
                          }),
                          I.abrupt('return', E)
                        );
                      case 13:
                      case 'end':
                        return I.stop();
                    }
                }, y);
              })
            )
          );
        return (
          g ||
            ((o.validatePromise = S),
            (o.dirty = !0),
            (o.errors = Pn),
            (o.warnings = Pn),
            o.triggerMetaEvent(),
            o.reRender()),
          S
        );
      }),
      $(se(o), 'isFieldValidating', function () {
        return !!o.validatePromise;
      }),
      $(se(o), 'isFieldTouched', function () {
        return o.touched;
      }),
      $(se(o), 'isFieldDirty', function () {
        if (o.dirty || o.props.initialValue !== void 0) return !0;
        var s = o.props.fieldContext,
          u = s.getInternalHooks(Io),
          c = u.getInitialValue;
        return c(o.getNamePath()) !== void 0;
      }),
      $(se(o), 'getErrors', function () {
        return o.errors;
      }),
      $(se(o), 'getWarnings', function () {
        return o.warnings;
      }),
      $(se(o), 'isListField', function () {
        return o.props.isListField;
      }),
      $(se(o), 'isList', function () {
        return o.props.isList;
      }),
      $(se(o), 'isPreserve', function () {
        return o.props.preserve;
      }),
      $(se(o), 'getMeta', function () {
        o.prevValidating = o.isFieldValidating();
        var s = {
          touched: o.isFieldTouched(),
          validating: o.prevValidating,
          errors: o.errors,
          warnings: o.warnings,
          name: o.getNamePath(),
          validated: o.validatePromise === null,
        };
        return s;
      }),
      $(se(o), 'getOnlyChild', function (s) {
        if (typeof s == 'function') {
          var u = o.getMeta();
          return N(
            N(
              {},
              o.getOnlyChild(s(o.getControlled(), u, o.props.fieldContext))
            ),
            {},
            { isFunction: !0 }
          );
        }
        var c = zo(s);
        return c.length !== 1 || !f.isValidElement(c[0])
          ? { child: c, isFunction: !1 }
          : { child: c[0], isFunction: !1 };
      }),
      $(se(o), 'getValue', function (s) {
        var u = o.props.fieldContext.getFieldsValue,
          c = o.getNamePath();
        return fr(s || u(!0), c);
      }),
      $(se(o), 'getControlled', function () {
        var s =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          u = o.props,
          c = u.name,
          d = u.trigger,
          v = u.validateTrigger,
          w = u.getValueFromEvent,
          g = u.normalize,
          S = u.valuePropName,
          y = u.getValueProps,
          p = u.fieldContext,
          m = v !== void 0 ? v : p.validateTrigger,
          h = o.getNamePath(),
          C = p.getInternalHooks,
          b = p.getFieldsValue,
          x = C(Io),
          E = x.dispatch,
          P = o.getValue(),
          I =
            y ||
            function (F) {
              return $({}, S, F);
            },
          M = s[d],
          A = c !== void 0 ? I(P) : {},
          j = N(N({}, s), A);
        j[d] = function () {
          (o.touched = !0), (o.dirty = !0), o.triggerMetaEvent();
          for (var F, U = arguments.length, T = new Array(U), R = 0; R < U; R++)
            T[R] = arguments[R];
          w ? (F = w.apply(void 0, T)) : (F = yR.apply(void 0, [S].concat(T))),
            g && (F = g(F, P, b(!0))),
            F !== P && E({ type: 'updateValue', namePath: h, value: F }),
            M && M.apply(void 0, T);
        };
        var L = Id(m || []);
        return (
          L.forEach(function (F) {
            var U = j[F];
            j[F] = function () {
              U && U.apply(void 0, arguments);
              var T = o.props.rules;
              T &&
                T.length &&
                E({ type: 'validateField', namePath: h, triggerName: F });
            };
          }),
          j
        );
      }),
      r.fieldContext)
    ) {
      var i = r.fieldContext.getInternalHooks,
        a = i(Io),
        l = a.initEntityValue;
      l(se(o));
    }
    return o;
  }
  return (
    zt(n, [
      {
        key: 'componentDidMount',
        value: function () {
          var o = this.props,
            i = o.shouldUpdate,
            a = o.fieldContext;
          if (((this.mounted = !0), a)) {
            var l = a.getInternalHooks,
              s = l(Io),
              u = s.registerField;
            this.cancelRegisterFunc = u(this);
          }
          i === !0 && this.reRender();
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this.cancelRegister(), this.triggerMetaEvent(!0), (this.mounted = !1);
        },
      },
      {
        key: 'reRender',
        value: function () {
          this.mounted && this.forceUpdate();
        },
      },
      {
        key: 'render',
        value: function () {
          var o = this.state.resetCount,
            i = this.props.children,
            a = this.getOnlyChild(i),
            l = a.child,
            s = a.isFunction,
            u;
          return (
            s
              ? (u = l)
              : f.isValidElement(l)
                ? (u = f.cloneElement(l, this.getControlled(l.props)))
                : (Yt(!l, '`children` of Field is not validate ReactElement.'),
                  (u = l)),
            f.createElement(f.Fragment, { key: o }, u)
          );
        },
      },
    ]),
    n
  );
})(f.Component);
$(tm, 'contextType', Vi);
$(tm, 'defaultProps', { trigger: 'onChange', valuePropName: 'value' });
function iS(e) {
  var t = e.name,
    n = je(e, SR),
    r = f.useContext(Vi),
    o = f.useContext(uu),
    i = t !== void 0 ? lt(t) : void 0,
    a = 'keep';
  return (
    n.isListField || (a = '_'.concat((i || []).join('_'))),
    f.createElement(
      tm,
      ce({ key: a, name: i, isListField: !!o }, n, { fieldContext: r })
    )
  );
}
function wR(e) {
  var t = e.name,
    n = e.initialValue,
    r = e.children,
    o = e.rules,
    i = e.validateTrigger,
    a = e.isListField,
    l = f.useContext(Vi),
    s = f.useContext(uu),
    u = f.useRef({ keys: [], id: 0 }),
    c = u.current,
    d = f.useMemo(
      function () {
        var S = lt(l.prefixName) || [];
        return [].concat(Z(S), Z(lt(t)));
      },
      [l.prefixName, t]
    ),
    v = f.useMemo(
      function () {
        return N(N({}, l), {}, { prefixName: d });
      },
      [l, d]
    ),
    w = f.useMemo(
      function () {
        return {
          getKey: function (y) {
            var p = d.length,
              m = y[p];
            return [c.keys[m], y.slice(p + 1)];
          },
        };
      },
      [d]
    );
  if (typeof r != 'function')
    return Yt(!1, 'Form.List only accepts function as children.'), null;
  var g = function (y, p, m) {
    var h = m.source;
    return h === 'internal' ? !1 : y !== p;
  };
  return f.createElement(
    uu.Provider,
    { value: w },
    f.createElement(
      Vi.Provider,
      { value: v },
      f.createElement(
        iS,
        {
          name: [],
          shouldUpdate: g,
          rules: o,
          validateTrigger: i,
          initialValue: n,
          isList: !0,
          isListField: a ?? !!s,
        },
        function (S, y) {
          var p = S.value,
            m = p === void 0 ? [] : p,
            h = S.onChange,
            C = l.getFieldValue,
            b = function () {
              var I = C(d || []);
              return I || [];
            },
            x = {
              add: function (I, M) {
                var A = b();
                M >= 0 && M <= A.length
                  ? ((c.keys = [].concat(
                      Z(c.keys.slice(0, M)),
                      [c.id],
                      Z(c.keys.slice(M))
                    )),
                    h([].concat(Z(A.slice(0, M)), [I], Z(A.slice(M)))))
                  : ((c.keys = [].concat(Z(c.keys), [c.id])),
                    h([].concat(Z(A), [I]))),
                  (c.id += 1);
              },
              remove: function (I) {
                var M = b(),
                  A = new Set(Array.isArray(I) ? I : [I]);
                A.size <= 0 ||
                  ((c.keys = c.keys.filter(function (j, L) {
                    return !A.has(L);
                  })),
                  h(
                    M.filter(function (j, L) {
                      return !A.has(L);
                    })
                  ));
              },
              move: function (I, M) {
                if (I !== M) {
                  var A = b();
                  I < 0 ||
                    I >= A.length ||
                    M < 0 ||
                    M >= A.length ||
                    ((c.keys = Dh(c.keys, I, M)), h(Dh(A, I, M)));
                }
              },
            },
            E = m || [];
          return (
            Array.isArray(E) || (E = []),
            r(
              E.map(function (P, I) {
                var M = c.keys[I];
                return (
                  M === void 0 &&
                    ((c.keys[I] = c.id), (M = c.keys[I]), (c.id += 1)),
                  { name: I, key: M, isListField: !0 }
                );
              }),
              x,
              y
            )
          );
        }
      )
    )
  );
}
function CR(e) {
  var t = !1,
    n = e.length,
    r = [];
  return e.length
    ? new Promise(function (o, i) {
        e.forEach(function (a, l) {
          a.catch(function (s) {
            return (t = !0), s;
          }).then(function (s) {
            (n -= 1), (r[l] = s), !(n > 0) && (t && i(r), o(r));
          });
        });
      })
    : Promise.resolve([]);
}
var aS = '__@field_split__';
function Qc(e) {
  return e
    .map(function (t) {
      return ''.concat(oe(t), ':').concat(t);
    })
    .join(aS);
}
var ni = (function () {
    function e() {
      At(this, e), $(this, 'kvs', new Map());
    }
    return (
      zt(e, [
        {
          key: 'set',
          value: function (n, r) {
            this.kvs.set(Qc(n), r);
          },
        },
        {
          key: 'get',
          value: function (n) {
            return this.kvs.get(Qc(n));
          },
        },
        {
          key: 'update',
          value: function (n, r) {
            var o = this.get(n),
              i = r(o);
            i ? this.set(n, i) : this.delete(n);
          },
        },
        {
          key: 'delete',
          value: function (n) {
            this.kvs.delete(Qc(n));
          },
        },
        {
          key: 'map',
          value: function (n) {
            return Z(this.kvs.entries()).map(function (r) {
              var o = V(r, 2),
                i = o[0],
                a = o[1],
                l = i.split(aS);
              return n({
                key: l.map(function (s) {
                  var u = s.match(/^([^:]*):(.*)$/),
                    c = V(u, 3),
                    d = c[1],
                    v = c[2];
                  return d === 'number' ? Number(v) : v;
                }),
                value: a,
              });
            });
          },
        },
        {
          key: 'toJSON',
          value: function () {
            var n = {};
            return (
              this.map(function (r) {
                var o = r.key,
                  i = r.value;
                return (n[o.join('.')] = i), null;
              }),
              n
            );
          },
        },
      ]),
      e
    );
  })(),
  bR = ['name'],
  xR = zt(function e(t) {
    var n = this;
    At(this, e),
      $(this, 'formHooked', !1),
      $(this, 'forceRootUpdate', void 0),
      $(this, 'subscribable', !0),
      $(this, 'store', {}),
      $(this, 'fieldEntities', []),
      $(this, 'initialValues', {}),
      $(this, 'callbacks', {}),
      $(this, 'validateMessages', null),
      $(this, 'preserve', null),
      $(this, 'lastValidatePromise', null),
      $(this, 'getForm', function () {
        return {
          getFieldValue: n.getFieldValue,
          getFieldsValue: n.getFieldsValue,
          getFieldError: n.getFieldError,
          getFieldWarning: n.getFieldWarning,
          getFieldsError: n.getFieldsError,
          isFieldsTouched: n.isFieldsTouched,
          isFieldTouched: n.isFieldTouched,
          isFieldValidating: n.isFieldValidating,
          isFieldsValidating: n.isFieldsValidating,
          resetFields: n.resetFields,
          setFields: n.setFields,
          setFieldValue: n.setFieldValue,
          setFieldsValue: n.setFieldsValue,
          validateFields: n.validateFields,
          submit: n.submit,
          _init: !0,
          getInternalHooks: n.getInternalHooks,
        };
      }),
      $(this, 'getInternalHooks', function (r) {
        return r === Io
          ? ((n.formHooked = !0),
            {
              dispatch: n.dispatch,
              initEntityValue: n.initEntityValue,
              registerField: n.registerField,
              useSubscribe: n.useSubscribe,
              setInitialValues: n.setInitialValues,
              destroyForm: n.destroyForm,
              setCallbacks: n.setCallbacks,
              setValidateMessages: n.setValidateMessages,
              getFields: n.getFields,
              setPreserve: n.setPreserve,
              getInitialValue: n.getInitialValue,
              registerWatch: n.registerWatch,
            })
          : (Yt(
              !1,
              '`getInternalHooks` is internal usage. Should not call directly.'
            ),
            null);
      }),
      $(this, 'useSubscribe', function (r) {
        n.subscribable = r;
      }),
      $(this, 'prevWithoutPreserves', null),
      $(this, 'setInitialValues', function (r, o) {
        if (((n.initialValues = r || {}), o)) {
          var i,
            a = wi(r, n.store);
          (i = n.prevWithoutPreserves) === null ||
            i === void 0 ||
            i.map(function (l) {
              var s = l.key;
              a = Wn(a, s, fr(r, s));
            }),
            (n.prevWithoutPreserves = null),
            n.updateStore(a);
        }
      }),
      $(this, 'destroyForm', function (r) {
        if (r) n.updateStore({});
        else {
          var o = new ni();
          n.getFieldEntities(!0).forEach(function (i) {
            n.isMergedPreserve(i.isPreserve()) || o.set(i.getNamePath(), !0);
          }),
            (n.prevWithoutPreserves = o);
        }
      }),
      $(this, 'getInitialValue', function (r) {
        var o = fr(n.initialValues, r);
        return r.length ? wi(o) : o;
      }),
      $(this, 'setCallbacks', function (r) {
        n.callbacks = r;
      }),
      $(this, 'setValidateMessages', function (r) {
        n.validateMessages = r;
      }),
      $(this, 'setPreserve', function (r) {
        n.preserve = r;
      }),
      $(this, 'watchList', []),
      $(this, 'registerWatch', function (r) {
        return (
          n.watchList.push(r),
          function () {
            n.watchList = n.watchList.filter(function (o) {
              return o !== r;
            });
          }
        );
      }),
      $(this, 'notifyWatch', function () {
        var r =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        if (n.watchList.length) {
          var o = n.getFieldsValue(),
            i = n.getFieldsValue(!0);
          n.watchList.forEach(function (a) {
            a(o, i, r);
          });
        }
      }),
      $(this, 'timeoutId', null),
      $(this, 'warningUnhooked', function () {}),
      $(this, 'updateStore', function (r) {
        n.store = r;
      }),
      $(this, 'getFieldEntities', function () {
        var r =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
        return r
          ? n.fieldEntities.filter(function (o) {
              return o.getNamePath().length;
            })
          : n.fieldEntities;
      }),
      $(this, 'getFieldsMap', function () {
        var r =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
          o = new ni();
        return (
          n.getFieldEntities(r).forEach(function (i) {
            var a = i.getNamePath();
            o.set(a, i);
          }),
          o
        );
      }),
      $(this, 'getFieldEntitiesForNamePathList', function (r) {
        if (!r) return n.getFieldEntities(!0);
        var o = n.getFieldsMap(!0);
        return r.map(function (i) {
          var a = lt(i);
          return o.get(a) || { INVALIDATE_NAME_PATH: lt(i) };
        });
      }),
      $(this, 'getFieldsValue', function (r, o) {
        n.warningUnhooked();
        var i, a, l;
        if (
          (r === !0 || Array.isArray(r)
            ? ((i = r), (a = o))
            : r && oe(r) === 'object' && ((l = r.strict), (a = r.filter)),
          i === !0 && !a)
        )
          return n.store;
        var s = n.getFieldEntitiesForNamePathList(Array.isArray(i) ? i : null),
          u = [];
        return (
          s.forEach(function (c) {
            var d,
              v,
              w =
                'INVALIDATE_NAME_PATH' in c
                  ? c.INVALIDATE_NAME_PATH
                  : c.getNamePath();
            if (l) {
              var g, S;
              if ((g = (S = c).isList) !== null && g !== void 0 && g.call(S))
                return;
            } else if (
              !i &&
              (d = (v = c).isListField) !== null &&
              d !== void 0 &&
              d.call(v)
            )
              return;
            if (!a) u.push(w);
            else {
              var y = 'getMeta' in c ? c.getMeta() : null;
              a(y) && u.push(w);
            }
          }),
          jh(n.store, u.map(lt))
        );
      }),
      $(this, 'getFieldValue', function (r) {
        n.warningUnhooked();
        var o = lt(r);
        return fr(n.store, o);
      }),
      $(this, 'getFieldsError', function (r) {
        n.warningUnhooked();
        var o = n.getFieldEntitiesForNamePathList(r);
        return o.map(function (i, a) {
          return i && !('INVALIDATE_NAME_PATH' in i)
            ? {
                name: i.getNamePath(),
                errors: i.getErrors(),
                warnings: i.getWarnings(),
              }
            : { name: lt(r[a]), errors: [], warnings: [] };
        });
      }),
      $(this, 'getFieldError', function (r) {
        n.warningUnhooked();
        var o = lt(r),
          i = n.getFieldsError([o])[0];
        return i.errors;
      }),
      $(this, 'getFieldWarning', function (r) {
        n.warningUnhooked();
        var o = lt(r),
          i = n.getFieldsError([o])[0];
        return i.warnings;
      }),
      $(this, 'isFieldsTouched', function () {
        n.warningUnhooked();
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
          o[i] = arguments[i];
        var a = o[0],
          l = o[1],
          s,
          u = !1;
        o.length === 0
          ? (s = null)
          : o.length === 1
            ? Array.isArray(a)
              ? ((s = a.map(lt)), (u = !1))
              : ((s = null), (u = a))
            : ((s = a.map(lt)), (u = l));
        var c = n.getFieldEntities(!0),
          d = function (y) {
            return y.isFieldTouched();
          };
        if (!s)
          return u
            ? c.every(function (S) {
                return d(S) || S.isList();
              })
            : c.some(d);
        var v = new ni();
        s.forEach(function (S) {
          v.set(S, []);
        }),
          c.forEach(function (S) {
            var y = S.getNamePath();
            s.forEach(function (p) {
              p.every(function (m, h) {
                return y[h] === m;
              }) &&
                v.update(p, function (m) {
                  return [].concat(Z(m), [S]);
                });
            });
          });
        var w = function (y) {
            return y.some(d);
          },
          g = v.map(function (S) {
            var y = S.value;
            return y;
          });
        return u ? g.every(w) : g.some(w);
      }),
      $(this, 'isFieldTouched', function (r) {
        return n.warningUnhooked(), n.isFieldsTouched([r]);
      }),
      $(this, 'isFieldsValidating', function (r) {
        n.warningUnhooked();
        var o = n.getFieldEntities();
        if (!r)
          return o.some(function (a) {
            return a.isFieldValidating();
          });
        var i = r.map(lt);
        return o.some(function (a) {
          var l = a.getNamePath();
          return Mi(i, l) && a.isFieldValidating();
        });
      }),
      $(this, 'isFieldValidating', function (r) {
        return n.warningUnhooked(), n.isFieldsValidating([r]);
      }),
      $(this, 'resetWithFieldInitialValue', function () {
        var r =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          o = new ni(),
          i = n.getFieldEntities(!0);
        i.forEach(function (s) {
          var u = s.props.initialValue,
            c = s.getNamePath();
          if (u !== void 0) {
            var d = o.get(c) || new Set();
            d.add({ entity: s, value: u }), o.set(c, d);
          }
        });
        var a = function (u) {
            u.forEach(function (c) {
              var d = c.props.initialValue;
              if (d !== void 0) {
                var v = c.getNamePath(),
                  w = n.getInitialValue(v);
                if (w !== void 0)
                  Yt(
                    !1,
                    "Form already set 'initialValues' with path '".concat(
                      v.join('.'),
                      "'. Field can not overwrite it."
                    )
                  );
                else {
                  var g = o.get(v);
                  if (g && g.size > 1)
                    Yt(
                      !1,
                      "Multiple Field with path '".concat(
                        v.join('.'),
                        "' set 'initialValue'. Can not decide which one to pick."
                      )
                    );
                  else if (g) {
                    var S = n.getFieldValue(v),
                      y = c.isListField();
                    !y &&
                      (!r.skipExist || S === void 0) &&
                      n.updateStore(Wn(n.store, v, Z(g)[0].value));
                  }
                }
              }
            });
          },
          l;
        r.entities
          ? (l = r.entities)
          : r.namePathList
            ? ((l = []),
              r.namePathList.forEach(function (s) {
                var u = o.get(s);
                if (u) {
                  var c;
                  (c = l).push.apply(
                    c,
                    Z(
                      Z(u).map(function (d) {
                        return d.entity;
                      })
                    )
                  );
                }
              }))
            : (l = i),
          a(l);
      }),
      $(this, 'resetFields', function (r) {
        n.warningUnhooked();
        var o = n.store;
        if (!r) {
          n.updateStore(wi(n.initialValues)),
            n.resetWithFieldInitialValue(),
            n.notifyObservers(o, null, { type: 'reset' }),
            n.notifyWatch();
          return;
        }
        var i = r.map(lt);
        i.forEach(function (a) {
          var l = n.getInitialValue(a);
          n.updateStore(Wn(n.store, a, l));
        }),
          n.resetWithFieldInitialValue({ namePathList: i }),
          n.notifyObservers(o, i, { type: 'reset' }),
          n.notifyWatch(i);
      }),
      $(this, 'setFields', function (r) {
        n.warningUnhooked();
        var o = n.store,
          i = [];
        r.forEach(function (a) {
          var l = a.name,
            s = je(a, bR),
            u = lt(l);
          i.push(u),
            'value' in s && n.updateStore(Wn(n.store, u, s.value)),
            n.notifyObservers(o, [u], { type: 'setField', data: a });
        }),
          n.notifyWatch(i);
      }),
      $(this, 'getFields', function () {
        var r = n.getFieldEntities(!0),
          o = r.map(function (i) {
            var a = i.getNamePath(),
              l = i.getMeta(),
              s = N(N({}, l), {}, { name: a, value: n.getFieldValue(a) });
            return Object.defineProperty(s, 'originRCField', { value: !0 }), s;
          });
        return o;
      }),
      $(this, 'initEntityValue', function (r) {
        var o = r.props.initialValue;
        if (o !== void 0) {
          var i = r.getNamePath(),
            a = fr(n.store, i);
          a === void 0 && n.updateStore(Wn(n.store, i, o));
        }
      }),
      $(this, 'isMergedPreserve', function (r) {
        var o = r !== void 0 ? r : n.preserve;
        return o ?? !0;
      }),
      $(this, 'registerField', function (r) {
        n.fieldEntities.push(r);
        var o = r.getNamePath();
        if ((n.notifyWatch([o]), r.props.initialValue !== void 0)) {
          var i = n.store;
          n.resetWithFieldInitialValue({ entities: [r], skipExist: !0 }),
            n.notifyObservers(i, [r.getNamePath()], {
              type: 'valueUpdate',
              source: 'internal',
            });
        }
        return function (a, l) {
          var s =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
          if (
            ((n.fieldEntities = n.fieldEntities.filter(function (d) {
              return d !== r;
            })),
            !n.isMergedPreserve(l) && (!a || s.length > 1))
          ) {
            var u = a ? void 0 : n.getInitialValue(o);
            if (
              o.length &&
              n.getFieldValue(o) !== u &&
              n.fieldEntities.every(function (d) {
                return !oS(d.getNamePath(), o);
              })
            ) {
              var c = n.store;
              n.updateStore(Wn(c, o, u, !0)),
                n.notifyObservers(c, [o], { type: 'remove' }),
                n.triggerDependenciesUpdate(c, o);
            }
          }
          n.notifyWatch([o]);
        };
      }),
      $(this, 'dispatch', function (r) {
        switch (r.type) {
          case 'updateValue': {
            var o = r.namePath,
              i = r.value;
            n.updateValue(o, i);
            break;
          }
          case 'validateField': {
            var a = r.namePath,
              l = r.triggerName;
            n.validateFields([a], { triggerName: l });
            break;
          }
        }
      }),
      $(this, 'notifyObservers', function (r, o, i) {
        if (n.subscribable) {
          var a = N(N({}, i), {}, { store: n.getFieldsValue(!0) });
          n.getFieldEntities().forEach(function (l) {
            var s = l.onStoreChange;
            s(r, o, a);
          });
        } else n.forceRootUpdate();
      }),
      $(this, 'triggerDependenciesUpdate', function (r, o) {
        var i = n.getDependencyChildrenFields(o);
        return (
          i.length && n.validateFields(i),
          n.notifyObservers(r, i, {
            type: 'dependenciesUpdate',
            relatedFields: [o].concat(Z(i)),
          }),
          i
        );
      }),
      $(this, 'updateValue', function (r, o) {
        var i = lt(r),
          a = n.store;
        n.updateStore(Wn(n.store, i, o)),
          n.notifyObservers(a, [i], {
            type: 'valueUpdate',
            source: 'internal',
          }),
          n.notifyWatch([i]);
        var l = n.triggerDependenciesUpdate(a, i),
          s = n.callbacks.onValuesChange;
        if (s) {
          var u = jh(n.store, [i]);
          s(u, n.getFieldsValue());
        }
        n.triggerOnFieldsChange([i].concat(Z(l)));
      }),
      $(this, 'setFieldsValue', function (r) {
        n.warningUnhooked();
        var o = n.store;
        if (r) {
          var i = wi(n.store, r);
          n.updateStore(i);
        }
        n.notifyObservers(o, null, { type: 'valueUpdate', source: 'external' }),
          n.notifyWatch();
      }),
      $(this, 'setFieldValue', function (r, o) {
        n.setFields([{ name: r, value: o }]);
      }),
      $(this, 'getDependencyChildrenFields', function (r) {
        var o = new Set(),
          i = [],
          a = new ni();
        n.getFieldEntities().forEach(function (s) {
          var u = s.props.dependencies;
          (u || []).forEach(function (c) {
            var d = lt(c);
            a.update(d, function () {
              var v =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : new Set();
              return v.add(s), v;
            });
          });
        });
        var l = function s(u) {
          var c = a.get(u) || new Set();
          c.forEach(function (d) {
            if (!o.has(d)) {
              o.add(d);
              var v = d.getNamePath();
              d.isFieldDirty() && v.length && (i.push(v), s(v));
            }
          });
        };
        return l(r), i;
      }),
      $(this, 'triggerOnFieldsChange', function (r, o) {
        var i = n.callbacks.onFieldsChange;
        if (i) {
          var a = n.getFields();
          if (o) {
            var l = new ni();
            o.forEach(function (u) {
              var c = u.name,
                d = u.errors;
              l.set(c, d);
            }),
              a.forEach(function (u) {
                u.errors = l.get(u.name) || u.errors;
              });
          }
          var s = a.filter(function (u) {
            var c = u.name;
            return Mi(r, c);
          });
          s.length && i(s, a);
        }
      }),
      $(this, 'validateFields', function (r, o) {
        n.warningUnhooked();
        var i, a;
        Array.isArray(r) || typeof r == 'string' || typeof o == 'string'
          ? ((i = r), (a = o))
          : (a = r);
        var l = !!i,
          s = l ? i.map(lt) : [],
          u = [],
          c = String(Date.now()),
          d = new Set(),
          v = a || {},
          w = v.recursive,
          g = v.dirty;
        n.getFieldEntities(!0).forEach(function (m) {
          if (
            (l || s.push(m.getNamePath()),
            !(!m.props.rules || !m.props.rules.length) &&
              !(g && !m.isFieldDirty()))
          ) {
            var h = m.getNamePath();
            if ((d.add(h.join(c)), !l || Mi(s, h, w))) {
              var C = m.validateRules(
                N({ validateMessages: N(N({}, rS), n.validateMessages) }, a)
              );
              u.push(
                C.then(function () {
                  return { name: h, errors: [], warnings: [] };
                }).catch(function (b) {
                  var x,
                    E = [],
                    P = [];
                  return (
                    (x = b.forEach) === null ||
                      x === void 0 ||
                      x.call(b, function (I) {
                        var M = I.rule.warningOnly,
                          A = I.errors;
                        M ? P.push.apply(P, Z(A)) : E.push.apply(E, Z(A));
                      }),
                    E.length
                      ? Promise.reject({ name: h, errors: E, warnings: P })
                      : { name: h, errors: E, warnings: P }
                  );
                })
              );
            }
          }
        });
        var S = CR(u);
        (n.lastValidatePromise = S),
          S.catch(function (m) {
            return m;
          }).then(function (m) {
            var h = m.map(function (C) {
              var b = C.name;
              return b;
            });
            n.notifyObservers(n.store, h, { type: 'validateFinish' }),
              n.triggerOnFieldsChange(h, m);
          });
        var y = S.then(function () {
          return n.lastValidatePromise === S
            ? Promise.resolve(n.getFieldsValue(s))
            : Promise.reject([]);
        }).catch(function (m) {
          var h = m.filter(function (C) {
            return C && C.errors.length;
          });
          return Promise.reject({
            values: n.getFieldsValue(s),
            errorFields: h,
            outOfDate: n.lastValidatePromise !== S,
          });
        });
        y.catch(function (m) {
          return m;
        });
        var p = s.filter(function (m) {
          return d.has(m.join(c));
        });
        return n.triggerOnFieldsChange(p), y;
      }),
      $(this, 'submit', function () {
        n.warningUnhooked(),
          n
            .validateFields()
            .then(function (r) {
              var o = n.callbacks.onFinish;
              if (o)
                try {
                  o(r);
                } catch (i) {
                  console.error(i);
                }
            })
            .catch(function (r) {
              var o = n.callbacks.onFinishFailed;
              o && o(r);
            });
      }),
      (this.forceRootUpdate = t);
  });
function lS(e) {
  var t = f.useRef(),
    n = f.useState({}),
    r = V(n, 2),
    o = r[1];
  if (!t.current)
    if (e) t.current = e;
    else {
      var i = function () {
          o({});
        },
        a = new xR(i);
      t.current = a.getForm();
    }
  return [t.current];
}
var Ad = f.createContext({
    triggerFormChange: function () {},
    triggerFormFinish: function () {},
    registerForm: function () {},
    unregisterForm: function () {},
  }),
  ER = function (t) {
    var n = t.validateMessages,
      r = t.onFormChange,
      o = t.onFormFinish,
      i = t.children,
      a = f.useContext(Ad),
      l = f.useRef({});
    return f.createElement(
      Ad.Provider,
      {
        value: N(
          N({}, a),
          {},
          {
            validateMessages: N(N({}, a.validateMessages), n),
            triggerFormChange: function (u, c) {
              r && r(u, { changedFields: c, forms: l.current }),
                a.triggerFormChange(u, c);
            },
            triggerFormFinish: function (u, c) {
              o && o(u, { values: c, forms: l.current }),
                a.triggerFormFinish(u, c);
            },
            registerForm: function (u, c) {
              u && (l.current = N(N({}, l.current), {}, $({}, u, c))),
                a.registerForm(u, c);
            },
            unregisterForm: function (u) {
              var c = N({}, l.current);
              delete c[u], (l.current = c), a.unregisterForm(u);
            },
          }
        ),
      },
      i
    );
  },
  kR = [
    'name',
    'initialValues',
    'fields',
    'form',
    'preserve',
    'children',
    'component',
    'validateMessages',
    'validateTrigger',
    'onValuesChange',
    'onFieldsChange',
    'onFinish',
    'onFinishFailed',
    'clearOnDestroy',
  ],
  PR = function (t, n) {
    var r = t.name,
      o = t.initialValues,
      i = t.fields,
      a = t.form,
      l = t.preserve,
      s = t.children,
      u = t.component,
      c = u === void 0 ? 'form' : u,
      d = t.validateMessages,
      v = t.validateTrigger,
      w = v === void 0 ? 'onChange' : v,
      g = t.onValuesChange,
      S = t.onFieldsChange,
      y = t.onFinish,
      p = t.onFinishFailed,
      m = t.clearOnDestroy,
      h = je(t, kR),
      C = f.useRef(null),
      b = f.useContext(Ad),
      x = lS(a),
      E = V(x, 1),
      P = E[0],
      I = P.getInternalHooks(Io),
      M = I.useSubscribe,
      A = I.setInitialValues,
      j = I.setCallbacks,
      L = I.setValidateMessages,
      F = I.setPreserve,
      U = I.destroyForm;
    f.useImperativeHandle(n, function () {
      return N(N({}, P), {}, { nativeElement: C.current });
    }),
      f.useEffect(
        function () {
          return (
            b.registerForm(r, P),
            function () {
              b.unregisterForm(r);
            }
          );
        },
        [b, P, r]
      ),
      L(N(N({}, b.validateMessages), d)),
      j({
        onValuesChange: g,
        onFieldsChange: function (D) {
          if ((b.triggerFormChange(r, D), S)) {
            for (
              var q = arguments.length,
                te = new Array(q > 1 ? q - 1 : 0),
                ne = 1;
              ne < q;
              ne++
            )
              te[ne - 1] = arguments[ne];
            S.apply(void 0, [D].concat(te));
          }
        },
        onFinish: function (D) {
          b.triggerFormFinish(r, D), y && y(D);
        },
        onFinishFailed: p,
      }),
      F(l);
    var T = f.useRef(null);
    A(o, !T.current),
      T.current || (T.current = !0),
      f.useEffect(function () {
        return function () {
          return U(m);
        };
      }, []);
    var R,
      k = typeof s == 'function';
    if (k) {
      var O = P.getFieldsValue(!0);
      R = s(O, P);
    } else R = s;
    M(!k);
    var _ = f.useRef();
    f.useEffect(
      function () {
        gR(_.current || [], i || []) || P.setFields(i || []), (_.current = i);
      },
      [i, P]
    );
    var z = f.useMemo(
        function () {
          return N(N({}, P), {}, { validateTrigger: w });
        },
        [P, w]
      ),
      B = f.createElement(
        uu.Provider,
        { value: null },
        f.createElement(Vi.Provider, { value: z }, R)
      );
    return c === !1
      ? B
      : f.createElement(
          c,
          ce({}, h, {
            ref: C,
            onSubmit: function (D) {
              D.preventDefault(), D.stopPropagation(), P.submit();
            },
            onReset: function (D) {
              var q;
              D.preventDefault(),
                P.resetFields(),
                (q = h.onReset) === null || q === void 0 || q.call(h, D);
            },
          }),
          B
        );
  };
function Bh(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
function RR() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t[0],
    o = t[1],
    i = o === void 0 ? {} : o,
    a = FP(i) ? { form: i } : i,
    l = a.form,
    s = f.useState(),
    u = V(s, 2),
    c = u[0],
    d = u[1],
    v = f.useMemo(
      function () {
        return Bh(c);
      },
      [c]
    ),
    w = f.useRef(v);
  w.current = v;
  var g = f.useContext(Vi),
    S = l || g,
    y = S && S._init,
    p = lt(r),
    m = f.useRef(p);
  return (
    (m.current = p),
    f.useEffect(
      function () {
        if (y) {
          var h = S.getFieldsValue,
            C = S.getInternalHooks,
            b = C(Io),
            x = b.registerWatch,
            E = function (A, j) {
              var L = a.preserve ? j : A;
              return typeof r == 'function' ? r(L) : fr(L, m.current);
            },
            P = x(function (M, A) {
              var j = E(M, A),
                L = Bh(j);
              w.current !== L && ((w.current = L), d(j));
            }),
            I = E(h(), h(!0));
          return c !== I && d(I), P;
        }
      },
      [y]
    ),
    c
  );
}
var IR = f.forwardRef(PR),
  Pl = IR;
Pl.FormProvider = ER;
Pl.Field = iS;
Pl.List = wR;
Pl.useForm = lS;
Pl.useWatch = RR;
const Vh = f.createContext({}),
  MR = (e) => {
    let { children: t, status: n, override: r } = e;
    const o = f.useContext(Vh),
      i = f.useMemo(() => {
        const a = Object.assign({}, o);
        return (
          r && delete a.isFormItemInput,
          n && (delete a.status, delete a.hasFeedback, delete a.feedbackIcon),
          a
        );
      }, [n, r, o]);
    return f.createElement(Vh.Provider, { value: i }, t);
  },
  OR = (e) => {
    const { space: t, form: n, children: r } = e;
    if (r == null) return null;
    let o = r;
    return (
      n && (o = ae.createElement(MR, { override: !0, status: !0 }, o)),
      t && (o = ae.createElement(J2, null, o)),
      o
    );
  },
  $R = function () {
    if (typeof navigator > 'u' || typeof window > 'u') return !1;
    var e = navigator.userAgent || navigator.vendor || window.opera;
    return (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        e
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
        e == null ? void 0 : e.substr(0, 4)
      )
    );
  };
var TR = [
    'prefixCls',
    'invalidate',
    'item',
    'renderItem',
    'responsive',
    'responsiveDisabled',
    'registerSize',
    'itemKey',
    'className',
    'style',
    'children',
    'display',
    'order',
    'component',
  ],
  ri = void 0;
function _R(e, t) {
  var n = e.prefixCls,
    r = e.invalidate,
    o = e.item,
    i = e.renderItem,
    a = e.responsive,
    l = e.responsiveDisabled,
    s = e.registerSize,
    u = e.itemKey,
    c = e.className,
    d = e.style,
    v = e.children,
    w = e.display,
    g = e.order,
    S = e.component,
    y = S === void 0 ? 'div' : S,
    p = je(e, TR),
    m = a && !w;
  function h(P) {
    s(u, P);
  }
  f.useEffect(function () {
    return function () {
      h(null);
    };
  }, []);
  var C = i && o !== ri ? i(o) : v,
    b;
  r ||
    (b = {
      opacity: m ? 0 : 1,
      height: m ? 0 : ri,
      overflowY: m ? 'hidden' : ri,
      order: a ? g : ri,
      pointerEvents: m ? 'none' : ri,
      position: m ? 'absolute' : ri,
    });
  var x = {};
  m && (x['aria-hidden'] = !0);
  var E = f.createElement(
    y,
    ce({ className: ue(!r && n, c), style: N(N({}, b), d) }, x, p, { ref: t }),
    C
  );
  return (
    a &&
      (E = f.createElement(
        bl,
        {
          onResize: function (I) {
            var M = I.offsetWidth;
            h(M);
          },
          disabled: l,
        },
        E
      )),
    E
  );
}
var Fa = f.forwardRef(_R);
Fa.displayName = 'Item';
function NR(e) {
  if (typeof MessageChannel > 'u') br(e);
  else {
    var t = new MessageChannel();
    (t.port1.onmessage = function () {
      return e();
    }),
      t.port2.postMessage(void 0);
  }
}
function FR() {
  var e = f.useRef(null),
    t = function (r) {
      e.current ||
        ((e.current = []),
        NR(function () {
          Cl.unstable_batchedUpdates(function () {
            e.current.forEach(function (o) {
              o();
            }),
              (e.current = null);
          });
        })),
        e.current.push(r);
    };
  return t;
}
function fa(e, t) {
  var n = f.useState(t),
    r = V(n, 2),
    o = r[0],
    i = r[1],
    a = tn(function (l) {
      e(function () {
        i(l);
      });
    });
  return [o, a];
}
var cu = ae.createContext(null),
  LR = ['component'],
  AR = ['className'],
  zR = ['className'],
  jR = function (t, n) {
    var r = f.useContext(cu);
    if (!r) {
      var o = t.component,
        i = o === void 0 ? 'div' : o,
        a = je(t, LR);
      return f.createElement(i, ce({}, a, { ref: n }));
    }
    var l = r.className,
      s = je(r, AR),
      u = t.className,
      c = je(t, zR);
    return f.createElement(
      cu.Provider,
      { value: null },
      f.createElement(Fa, ce({ ref: n, className: ue(l, u) }, s, c))
    );
  },
  sS = f.forwardRef(jR);
sS.displayName = 'RawItem';
var DR = [
    'prefixCls',
    'data',
    'renderItem',
    'renderRawItem',
    'itemKey',
    'itemWidth',
    'ssr',
    'style',
    'className',
    'maxCount',
    'renderRest',
    'renderRawRest',
    'suffix',
    'component',
    'itemComponent',
    'onVisibleChange',
  ],
  uS = 'responsive',
  cS = 'invalidate';
function BR(e) {
  return '+ '.concat(e.length, ' ...');
}
function VR(e, t) {
  var n = e.prefixCls,
    r = n === void 0 ? 'rc-overflow' : n,
    o = e.data,
    i = o === void 0 ? [] : o,
    a = e.renderItem,
    l = e.renderRawItem,
    s = e.itemKey,
    u = e.itemWidth,
    c = u === void 0 ? 10 : u,
    d = e.ssr,
    v = e.style,
    w = e.className,
    g = e.maxCount,
    S = e.renderRest,
    y = e.renderRawRest,
    p = e.suffix,
    m = e.component,
    h = m === void 0 ? 'div' : m,
    C = e.itemComponent,
    b = e.onVisibleChange,
    x = je(e, DR),
    E = d === 'full',
    P = FR(),
    I = fa(P, null),
    M = V(I, 2),
    A = M[0],
    j = M[1],
    L = A || 0,
    F = fa(P, new Map()),
    U = V(F, 2),
    T = U[0],
    R = U[1],
    k = fa(P, 0),
    O = V(k, 2),
    _ = O[0],
    z = O[1],
    B = fa(P, 0),
    K = V(B, 2),
    D = K[0],
    q = K[1],
    te = fa(P, 0),
    ne = V(te, 2),
    xe = ne[0],
    le = ne[1],
    he = f.useState(null),
    Ee = V(he, 2),
    ge = Ee[0],
    Ne = Ee[1],
    Oe = f.useState(null),
    Pe = V(Oe, 2),
    $e = Pe[0],
    et = Pe[1],
    ye = f.useMemo(
      function () {
        return $e === null && E ? Number.MAX_SAFE_INTEGER : $e || 0;
      },
      [$e, A]
    ),
    De = f.useState(!1),
    ve = V(De, 2),
    ie = ve[0],
    Be = ve[1],
    Q = ''.concat(r, '-item'),
    Ae = Math.max(_, D),
    Ke = g === uS,
    we = i.length && Ke,
    yt = g === cS,
    xt = we || (typeof g == 'number' && i.length > g),
    tt = f.useMemo(
      function () {
        var ee = i;
        return (
          we
            ? A === null && E
              ? (ee = i)
              : (ee = i.slice(0, Math.min(i.length, L / c)))
            : typeof g == 'number' && (ee = i.slice(0, g)),
          ee
        );
      },
      [i, c, A, g, we]
    ),
    Et = f.useMemo(
      function () {
        return we ? i.slice(ye + 1) : i.slice(tt.length);
      },
      [i, tt, we, ye]
    ),
    dt = f.useCallback(
      function (ee, Y) {
        var W;
        return typeof s == 'function'
          ? s(ee)
          : (W = s && (ee == null ? void 0 : ee[s])) !== null && W !== void 0
            ? W
            : Y;
      },
      [s]
    ),
    ot = f.useCallback(
      a ||
        function (ee) {
          return ee;
        },
      [a]
    );
  function Ve(ee, Y, W) {
    ($e === ee && (Y === void 0 || Y === ge)) ||
      (et(ee),
      W || (Be(ee < i.length - 1), b == null || b(ee)),
      Y !== void 0 && Ne(Y));
  }
  function me(ee, Y) {
    j(Y.clientWidth);
  }
  function it(ee, Y) {
    R(function (W) {
      var Fe = new Map(W);
      return Y === null ? Fe.delete(ee) : Fe.set(ee, Y), Fe;
    });
  }
  function Gt(ee, Y) {
    q(Y), z(D);
  }
  function St(ee, Y) {
    le(Y);
  }
  function kt(ee) {
    return T.get(dt(tt[ee], ee));
  }
  Wt(
    function () {
      if (L && typeof Ae == 'number' && tt) {
        var ee = xe,
          Y = tt.length,
          W = Y - 1;
        if (!Y) {
          Ve(0, null);
          return;
        }
        for (var Fe = 0; Fe < Y; Fe += 1) {
          var Rt = kt(Fe);
          if ((E && (Rt = Rt || 0), Rt === void 0)) {
            Ve(Fe - 1, void 0, !0);
            break;
          }
          if (
            ((ee += Rt),
            (W === 0 && ee <= L) || (Fe === W - 1 && ee + kt(W) <= L))
          ) {
            Ve(W, null);
            break;
          } else if (ee + Ae > L) {
            Ve(Fe - 1, ee - Rt - xe + D);
            break;
          }
        }
        p && kt(0) + xe > L && Ne(null);
      }
    },
    [L, T, D, xe, dt, tt]
  );
  var tr = ie && !!Et.length,
    Ln = {};
  ge !== null && we && (Ln = { position: 'absolute', left: ge, top: 0 });
  var jt = { prefixCls: Q, responsive: we, component: C, invalidate: yt },
    ln = l
      ? function (ee, Y) {
          var W = dt(ee, Y);
          return f.createElement(
            cu.Provider,
            {
              key: W,
              value: N(
                N({}, jt),
                {},
                {
                  order: Y,
                  item: ee,
                  itemKey: W,
                  registerSize: it,
                  display: Y <= ye,
                }
              ),
            },
            l(ee, Y)
          );
        }
      : function (ee, Y) {
          var W = dt(ee, Y);
          return f.createElement(
            Fa,
            ce({}, jt, {
              order: Y,
              key: W,
              item: ee,
              renderItem: ot,
              itemKey: W,
              registerSize: it,
              display: Y <= ye,
            })
          );
        },
    Qe,
    He = {
      order: tr ? ye : Number.MAX_SAFE_INTEGER,
      className: ''.concat(Q, '-rest'),
      registerSize: Gt,
      display: tr,
    };
  if (y)
    y &&
      (Qe = f.createElement(cu.Provider, { value: N(N({}, jt), He) }, y(Et)));
  else {
    var Pt = S || BR;
    Qe = f.createElement(
      Fa,
      ce({}, jt, He),
      typeof Pt == 'function' ? Pt(Et) : Pt
    );
  }
  var Re = f.createElement(
    h,
    ce({ className: ue(!yt && r, w), style: v, ref: t }, x),
    tt.map(ln),
    xt ? Qe : null,
    p &&
      f.createElement(
        Fa,
        ce({}, jt, {
          responsive: Ke,
          responsiveDisabled: !we,
          order: ye,
          className: ''.concat(Q, '-suffix'),
          registerSize: St,
          display: !0,
          style: Ln,
        }),
        p
      )
  );
  return (
    Ke && (Re = f.createElement(bl, { onResize: me, disabled: !we }, Re)), Re
  );
}
var Er = f.forwardRef(VR);
Er.displayName = 'Overflow';
Er.Item = sS;
Er.RESPONSIVE = uS;
Er.INVALIDATE = cS;
function HR(e) {
  var t = e.prefixCls,
    n = e.align,
    r = e.arrow,
    o = e.arrowPos,
    i = r || {},
    a = i.className,
    l = i.content,
    s = o.x,
    u = s === void 0 ? 0 : s,
    c = o.y,
    d = c === void 0 ? 0 : c,
    v = f.useRef();
  if (!n || !n.points) return null;
  var w = { position: 'absolute' };
  if (n.autoArrow !== !1) {
    var g = n.points[0],
      S = n.points[1],
      y = g[0],
      p = g[1],
      m = S[0],
      h = S[1];
    y === m || !['t', 'b'].includes(y)
      ? (w.top = d)
      : y === 't'
        ? (w.top = 0)
        : (w.bottom = 0),
      p === h || !['l', 'r'].includes(p)
        ? (w.left = u)
        : p === 'l'
          ? (w.left = 0)
          : (w.right = 0);
  }
  return f.createElement(
    'div',
    { ref: v, className: ue(''.concat(t, '-arrow'), a), style: w },
    l
  );
}
function UR(e) {
  var t = e.prefixCls,
    n = e.open,
    r = e.zIndex,
    o = e.mask,
    i = e.motion;
  return o
    ? f.createElement(
        Yu,
        ce({}, i, { motionAppear: !0, visible: n, removeOnLeave: !0 }),
        function (a) {
          var l = a.className;
          return f.createElement('div', {
            style: { zIndex: r },
            className: ue(''.concat(t, '-mask'), l),
          });
        }
      )
    : null;
}
var WR = f.memo(
    function (e) {
      var t = e.children;
      return t;
    },
    function (e, t) {
      return t.cache;
    }
  ),
  KR = f.forwardRef(function (e, t) {
    var n = e.popup,
      r = e.className,
      o = e.prefixCls,
      i = e.style,
      a = e.target,
      l = e.onVisibleChanged,
      s = e.open,
      u = e.keepDom,
      c = e.fresh,
      d = e.onClick,
      v = e.mask,
      w = e.arrow,
      g = e.arrowPos,
      S = e.align,
      y = e.motion,
      p = e.maskMotion,
      m = e.forceRender,
      h = e.getPopupContainer,
      C = e.autoDestroy,
      b = e.portal,
      x = e.zIndex,
      E = e.onMouseEnter,
      P = e.onMouseLeave,
      I = e.onPointerEnter,
      M = e.onPointerDownCapture,
      A = e.ready,
      j = e.offsetX,
      L = e.offsetY,
      F = e.offsetR,
      U = e.offsetB,
      T = e.onAlign,
      R = e.onPrepare,
      k = e.stretch,
      O = e.targetWidth,
      _ = e.targetHeight,
      z = typeof n == 'function' ? n() : n,
      B = s || u,
      K = (h == null ? void 0 : h.length) > 0,
      D = f.useState(!h || !K),
      q = V(D, 2),
      te = q[0],
      ne = q[1];
    if (
      (Wt(
        function () {
          !te && K && a && ne(!0);
        },
        [te, K, a]
      ),
      !te)
    )
      return null;
    var xe = 'auto',
      le = { left: '-1000vw', top: '-1000vh', right: xe, bottom: xe };
    if (A || !s) {
      var he,
        Ee = S.points,
        ge =
          S.dynamicInset ||
          ((he = S._experimental) === null || he === void 0
            ? void 0
            : he.dynamicInset),
        Ne = ge && Ee[0][1] === 'r',
        Oe = ge && Ee[0][0] === 'b';
      Ne ? ((le.right = F), (le.left = xe)) : ((le.left = j), (le.right = xe)),
        Oe
          ? ((le.bottom = U), (le.top = xe))
          : ((le.top = L), (le.bottom = xe));
    }
    var Pe = {};
    return (
      k &&
        (k.includes('height') && _
          ? (Pe.height = _)
          : k.includes('minHeight') && _ && (Pe.minHeight = _),
        k.includes('width') && O
          ? (Pe.width = O)
          : k.includes('minWidth') && O && (Pe.minWidth = O)),
      s || (Pe.pointerEvents = 'none'),
      f.createElement(
        b,
        {
          open: m || B,
          getContainer:
            h &&
            function () {
              return h(a);
            },
          autoDestroy: C,
        },
        f.createElement(UR, {
          prefixCls: o,
          open: s,
          zIndex: x,
          mask: v,
          motion: p,
        }),
        f.createElement(bl, { onResize: T, disabled: !s }, function ($e) {
          return f.createElement(
            Yu,
            ce(
              {
                motionAppear: !0,
                motionEnter: !0,
                motionLeave: !0,
                removeOnLeave: !1,
                forceRender: m,
                leavedClassName: ''.concat(o, '-hidden'),
              },
              y,
              {
                onAppearPrepare: R,
                onEnterPrepare: R,
                visible: s,
                onVisibleChanged: function (ye) {
                  var De;
                  y == null ||
                    (De = y.onVisibleChanged) === null ||
                    De === void 0 ||
                    De.call(y, ye),
                    l(ye);
                },
              }
            ),
            function (et, ye) {
              var De = et.className,
                ve = et.style,
                ie = ue(o, De, r);
              return f.createElement(
                'div',
                {
                  ref: Ly($e, t, ye),
                  className: ie,
                  style: N(
                    N(
                      N(
                        N(
                          {
                            '--arrow-x': ''.concat(g.x || 0, 'px'),
                            '--arrow-y': ''.concat(g.y || 0, 'px'),
                          },
                          le
                        ),
                        Pe
                      ),
                      ve
                    ),
                    {},
                    { boxSizing: 'border-box', zIndex: x },
                    i
                  ),
                  onMouseEnter: E,
                  onMouseLeave: P,
                  onPointerEnter: I,
                  onClick: d,
                  onPointerDownCapture: M,
                },
                w &&
                  f.createElement(HR, {
                    prefixCls: o,
                    arrow: w,
                    arrowPos: g,
                    align: S,
                  }),
                f.createElement(WR, { cache: !s && !c }, z)
              );
            }
          );
        })
      )
    );
  }),
  GR = f.forwardRef(function (e, t) {
    var n = e.children,
      r = e.getTriggerDOMNode,
      o = Hu(n),
      i = f.useCallback(
        function (l) {
          Uv(t, r ? r(l) : l);
        },
        [r]
      ),
      a = Vu(i, n.ref);
    return o ? f.cloneElement(n, { ref: a }) : n;
  }),
  Hh = f.createContext(null);
function Uh(e) {
  return e ? (Array.isArray(e) ? e : [e]) : [];
}
function qR(e, t, n, r) {
  return f.useMemo(
    function () {
      var o = Uh(n ?? t),
        i = Uh(r ?? t),
        a = new Set(o),
        l = new Set(i);
      return (
        e &&
          (a.has('hover') && (a.delete('hover'), a.add('click')),
          l.has('hover') && (l.delete('hover'), l.add('click'))),
        [a, l]
      );
    },
    [e, t, n, r]
  );
}
function XR() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
    n = arguments.length > 2 ? arguments[2] : void 0;
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function QR(e, t, n, r) {
  for (var o = n.points, i = Object.keys(e), a = 0; a < i.length; a += 1) {
    var l,
      s = i[a];
    if (XR((l = e[s]) === null || l === void 0 ? void 0 : l.points, o, r))
      return ''.concat(t, '-placement-').concat(s);
  }
  return '';
}
function Wh(e, t, n, r) {
  return (
    t ||
    (n
      ? { motionName: ''.concat(e, '-').concat(n) }
      : r
        ? { motionName: r }
        : null)
  );
}
function Rl(e) {
  return e.ownerDocument.defaultView;
}
function zd(e) {
  for (
    var t = [],
      n = e == null ? void 0 : e.parentElement,
      r = ['hidden', 'scroll', 'clip', 'auto'];
    n;

  ) {
    var o = Rl(n).getComputedStyle(n),
      i = o.overflowX,
      a = o.overflowY,
      l = o.overflow;
    [i, a, l].some(function (s) {
      return r.includes(s);
    }) && t.push(n),
      (n = n.parentElement);
  }
  return t;
}
function vl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e) ? t : e;
}
function da(e) {
  return vl(parseFloat(e), 0);
}
function Kh(e, t) {
  var n = N({}, e);
  return (
    (t || []).forEach(function (r) {
      if (!(r instanceof HTMLBodyElement || r instanceof HTMLHtmlElement)) {
        var o = Rl(r).getComputedStyle(r),
          i = o.overflow,
          a = o.overflowClipMargin,
          l = o.borderTopWidth,
          s = o.borderBottomWidth,
          u = o.borderLeftWidth,
          c = o.borderRightWidth,
          d = r.getBoundingClientRect(),
          v = r.offsetHeight,
          w = r.clientHeight,
          g = r.offsetWidth,
          S = r.clientWidth,
          y = da(l),
          p = da(s),
          m = da(u),
          h = da(c),
          C = vl(Math.round((d.width / g) * 1e3) / 1e3),
          b = vl(Math.round((d.height / v) * 1e3) / 1e3),
          x = (g - S - m - h) * C,
          E = (v - w - y - p) * b,
          P = y * b,
          I = p * b,
          M = m * C,
          A = h * C,
          j = 0,
          L = 0;
        if (i === 'clip') {
          var F = da(a);
          (j = F * C), (L = F * b);
        }
        var U = d.x + M - j,
          T = d.y + P - L,
          R = U + d.width + 2 * j - M - A - x,
          k = T + d.height + 2 * L - P - I - E;
        (n.left = Math.max(n.left, U)),
          (n.top = Math.max(n.top, T)),
          (n.right = Math.min(n.right, R)),
          (n.bottom = Math.min(n.bottom, k));
      }
    }),
    n
  );
}
function Gh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    n = ''.concat(t),
    r = n.match(/^(.*)\%$/);
  return r ? e * (parseFloat(r[1]) / 100) : parseFloat(n);
}
function qh(e, t) {
  var n = t || [],
    r = V(n, 2),
    o = r[0],
    i = r[1];
  return [Gh(e.width, o), Gh(e.height, i)];
}
function Xh() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
  return [e[0], e[1]];
}
function oi(e, t) {
  var n = t[0],
    r = t[1],
    o,
    i;
  return (
    n === 't'
      ? (i = e.y)
      : n === 'b'
        ? (i = e.y + e.height)
        : (i = e.y + e.height / 2),
    r === 'l'
      ? (o = e.x)
      : r === 'r'
        ? (o = e.x + e.width)
        : (o = e.x + e.width / 2),
    { x: o, y: i }
  );
}
function zr(e, t) {
  var n = { t: 'b', b: 't', l: 'r', r: 'l' };
  return e
    .map(function (r, o) {
      return o === t ? n[r] || 'c' : r;
    })
    .join('');
}
function YR(e, t, n, r, o, i, a) {
  var l = f.useState({
      ready: !1,
      offsetX: 0,
      offsetY: 0,
      offsetR: 0,
      offsetB: 0,
      arrowX: 0,
      arrowY: 0,
      scaleX: 1,
      scaleY: 1,
      align: o[r] || {},
    }),
    s = V(l, 2),
    u = s[0],
    c = s[1],
    d = f.useRef(0),
    v = f.useMemo(
      function () {
        return t ? zd(t) : [];
      },
      [t]
    ),
    w = f.useRef({}),
    g = function () {
      w.current = {};
    };
  e || g();
  var S = tn(function () {
      if (t && n && e) {
        let qt = function (Yo, Lr) {
            var Zo =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : Ae,
              Ol = D.x + Yo,
              $l = D.y + Lr,
              ic = Ol + Ne,
              X = $l + ge,
              re = Math.max(Ol, Zo.left),
              Ge = Math.max($l, Zo.top),
              at = Math.min(ic, Zo.right),
              qe = Math.min(X, Zo.bottom);
            return Math.max(0, (at - re) * (qe - Ge));
          },
          Qo = function () {
            (xn = D.y + W), (zn = xn + ge), (nt = D.x + Y), ($r = nt + Ne);
          };
        var cm = qt,
          fm = Qo,
          m,
          h,
          C,
          b,
          x = t,
          E = x.ownerDocument,
          P = Rl(x),
          I = P.getComputedStyle(x),
          M = I.width,
          A = I.height,
          j = I.position,
          L = x.style.left,
          F = x.style.top,
          U = x.style.right,
          T = x.style.bottom,
          R = x.style.overflow,
          k = N(N({}, o[r]), i),
          O = E.createElement('div');
        (m = x.parentElement) === null || m === void 0 || m.appendChild(O),
          (O.style.left = ''.concat(x.offsetLeft, 'px')),
          (O.style.top = ''.concat(x.offsetTop, 'px')),
          (O.style.position = j),
          (O.style.height = ''.concat(x.offsetHeight, 'px')),
          (O.style.width = ''.concat(x.offsetWidth, 'px')),
          (x.style.left = '0'),
          (x.style.top = '0'),
          (x.style.right = 'auto'),
          (x.style.bottom = 'auto'),
          (x.style.overflow = 'hidden');
        var _;
        if (Array.isArray(n)) _ = { x: n[0], y: n[1], width: 0, height: 0 };
        else {
          var z,
            B,
            K = n.getBoundingClientRect();
          (K.x = (z = K.x) !== null && z !== void 0 ? z : K.left),
            (K.y = (B = K.y) !== null && B !== void 0 ? B : K.top),
            (_ = { x: K.x, y: K.y, width: K.width, height: K.height });
        }
        var D = x.getBoundingClientRect();
        (D.x = (h = D.x) !== null && h !== void 0 ? h : D.left),
          (D.y = (C = D.y) !== null && C !== void 0 ? C : D.top);
        var q = E.documentElement,
          te = q.clientWidth,
          ne = q.clientHeight,
          xe = q.scrollWidth,
          le = q.scrollHeight,
          he = q.scrollTop,
          Ee = q.scrollLeft,
          ge = D.height,
          Ne = D.width,
          Oe = _.height,
          Pe = _.width,
          $e = { left: 0, top: 0, right: te, bottom: ne },
          et = { left: -Ee, top: -he, right: xe - Ee, bottom: le - he },
          ye = k.htmlRegion,
          De = 'visible',
          ve = 'visibleFirst';
        ye !== 'scroll' && ye !== ve && (ye = De);
        var ie = ye === ve,
          Be = Kh(et, v),
          Q = Kh($e, v),
          Ae = ye === De ? Q : Be,
          Ke = ie ? Q : Ae;
        (x.style.left = 'auto'),
          (x.style.top = 'auto'),
          (x.style.right = '0'),
          (x.style.bottom = '0');
        var we = x.getBoundingClientRect();
        (x.style.left = L),
          (x.style.top = F),
          (x.style.right = U),
          (x.style.bottom = T),
          (x.style.overflow = R),
          (b = x.parentElement) === null || b === void 0 || b.removeChild(O);
        var yt = vl(Math.round((Ne / parseFloat(M)) * 1e3) / 1e3),
          xt = vl(Math.round((ge / parseFloat(A)) * 1e3) / 1e3);
        if (yt === 0 || xt === 0 || (tl(n) && !Y1(n))) return;
        var tt = k.offset,
          Et = k.targetOffset,
          dt = qh(D, tt),
          ot = V(dt, 2),
          Ve = ot[0],
          me = ot[1],
          it = qh(_, Et),
          Gt = V(it, 2),
          St = Gt[0],
          kt = Gt[1];
        (_.x -= St), (_.y -= kt);
        var tr = k.points || [],
          Ln = V(tr, 2),
          jt = Ln[0],
          ln = Ln[1],
          Qe = Xh(ln),
          He = Xh(jt),
          Pt = oi(_, Qe),
          Re = oi(D, He),
          ee = N({}, k),
          Y = Pt.x - Re.x + Ve,
          W = Pt.y - Re.y + me,
          Fe = qt(Y, W),
          Rt = qt(Y, W, Q),
          Te = oi(_, ['t', 'l']),
          Ce = oi(D, ['t', 'l']),
          It = oi(_, ['b', 'r']),
          wt = oi(D, ['b', 'r']),
          Dt = k.overflow || {},
          An = Dt.adjustX,
          Or = Dt.adjustY,
          sn = Dt.shiftX,
          Mt = Dt.shiftY,
          nr = function (Lr) {
            return typeof Lr == 'boolean' ? Lr : Lr >= 0;
          },
          xn,
          zn,
          nt,
          $r;
        Qo();
        var rr = nr(Or),
          Ho = He[0] === Qe[0];
        if (rr && He[0] === 't' && (zn > Ke.bottom || w.current.bt)) {
          var vt = W;
          Ho ? (vt -= ge - Oe) : (vt = Te.y - wt.y - me);
          var Uo = qt(Y, vt),
            Zi = qt(Y, vt, Q);
          Uo > Fe || (Uo === Fe && (!ie || Zi >= Rt))
            ? ((w.current.bt = !0),
              (W = vt),
              (me = -me),
              (ee.points = [zr(He, 0), zr(Qe, 0)]))
            : (w.current.bt = !1);
        }
        if (rr && He[0] === 'b' && (xn < Ke.top || w.current.tb)) {
          var or = W;
          Ho ? (or += ge - Oe) : (or = It.y - Ce.y - me);
          var ir = qt(Y, or),
            mo = qt(Y, or, Q);
          ir > Fe || (ir === Fe && (!ie || mo >= Rt))
            ? ((w.current.tb = !0),
              (W = or),
              (me = -me),
              (ee.points = [zr(He, 0), zr(Qe, 0)]))
            : (w.current.tb = !1);
        }
        var Wo = nr(An),
          Ko = He[1] === Qe[1];
        if (Wo && He[1] === 'l' && ($r > Ke.right || w.current.rl)) {
          var mr = Y;
          Ko ? (mr -= Ne - Pe) : (mr = Te.x - wt.x - Ve);
          var po = qt(mr, W),
            jn = qt(mr, W, Q);
          po > Fe || (po === Fe && (!ie || jn >= Rt))
            ? ((w.current.rl = !0),
              (Y = mr),
              (Ve = -Ve),
              (ee.points = [zr(He, 1), zr(Qe, 1)]))
            : (w.current.rl = !1);
        }
        if (Wo && He[1] === 'r' && (nt < Ke.left || w.current.lr)) {
          var Dn = Y;
          Ko ? (Dn += Ne - Pe) : (Dn = It.x - Ce.x - Ve);
          var Go = qt(Dn, W),
            qo = qt(Dn, W, Q);
          Go > Fe || (Go === Fe && (!ie || qo >= Rt))
            ? ((w.current.lr = !0),
              (Y = Dn),
              (Ve = -Ve),
              (ee.points = [zr(He, 1), zr(Qe, 1)]))
            : (w.current.lr = !1);
        }
        Qo();
        var un = sn === !0 ? 0 : sn;
        typeof un == 'number' &&
          (nt < Q.left &&
            ((Y -= nt - Q.left - Ve),
            _.x + Pe < Q.left + un && (Y += _.x - Q.left + Pe - un)),
          $r > Q.right &&
            ((Y -= $r - Q.right - Ve),
            _.x > Q.right - un && (Y += _.x - Q.right + un)));
        var cn = Mt === !0 ? 0 : Mt;
        typeof cn == 'number' &&
          (xn < Q.top &&
            ((W -= xn - Q.top - me),
            _.y + Oe < Q.top + cn && (W += _.y - Q.top + Oe - cn)),
          zn > Q.bottom &&
            ((W -= zn - Q.bottom - me),
            _.y > Q.bottom - cn && (W += _.y - Q.bottom + cn)));
        var Tr = D.x + Y,
          _r = Tr + Ne,
          En = D.y + W,
          Ji = En + ge,
          Le = _.x,
          be = Le + Pe,
          ke = _.y,
          Ot = ke + Oe,
          $t = Math.max(Tr, Le),
          Nr = Math.min(_r, be),
          Fr = ($t + Nr) / 2,
          ea = Fr - Tr,
          Xo = Math.max(En, ke),
          ho = Math.min(Ji, Ot),
          pr = (Xo + ho) / 2,
          go = pr - En;
        a == null || a(t, ee);
        var yo = we.right - D.x - (Y + D.width),
          ar = we.bottom - D.y - (W + D.height);
        yt === 1 && ((Y = Math.round(Y)), (yo = Math.round(yo))),
          xt === 1 && ((W = Math.round(W)), (ar = Math.round(ar)));
        var oc = {
          ready: !0,
          offsetX: Y / yt,
          offsetY: W / xt,
          offsetR: yo / yt,
          offsetB: ar / xt,
          arrowX: ea / yt,
          arrowY: go / xt,
          scaleX: yt,
          scaleY: xt,
          align: ee,
        };
        c(oc);
      }
    }),
    y = function () {
      d.current += 1;
      var h = d.current;
      Promise.resolve().then(function () {
        d.current === h && S();
      });
    },
    p = function () {
      c(function (h) {
        return N(N({}, h), {}, { ready: !1 });
      });
    };
  return (
    Wt(p, [r]),
    Wt(
      function () {
        e || p();
      },
      [e]
    ),
    [
      u.ready,
      u.offsetX,
      u.offsetY,
      u.offsetR,
      u.offsetB,
      u.arrowX,
      u.arrowY,
      u.scaleX,
      u.scaleY,
      u.align,
      y,
    ]
  );
}
function ZR(e, t, n, r, o) {
  Wt(
    function () {
      if (e && t && n) {
        let v = function () {
          r(), o();
        };
        var d = v,
          i = t,
          a = n,
          l = zd(i),
          s = zd(a),
          u = Rl(a),
          c = new Set([u].concat(Z(l), Z(s)));
        return (
          c.forEach(function (w) {
            w.addEventListener('scroll', v, { passive: !0 });
          }),
          u.addEventListener('resize', v, { passive: !0 }),
          r(),
          function () {
            c.forEach(function (w) {
              w.removeEventListener('scroll', v),
                u.removeEventListener('resize', v);
            });
          }
        );
      }
    },
    [e, t, n]
  );
}
function JR(e, t, n, r, o, i, a, l) {
  var s = f.useRef(e);
  s.current = e;
  var u = f.useRef(!1);
  f.useEffect(
    function () {
      if (t && r && (!o || i)) {
        var d = function () {
            u.current = !1;
          },
          v = function (y) {
            var p;
            s.current &&
              !a(
                ((p = y.composedPath) === null ||
                p === void 0 ||
                (p = p.call(y)) === null ||
                p === void 0
                  ? void 0
                  : p[0]) || y.target
              ) &&
              !u.current &&
              l(!1);
          },
          w = Rl(r);
        w.addEventListener('pointerdown', d, !0),
          w.addEventListener('mousedown', v, !0),
          w.addEventListener('contextmenu', v, !0);
        var g = su(n);
        return (
          g &&
            (g.addEventListener('mousedown', v, !0),
            g.addEventListener('contextmenu', v, !0)),
          function () {
            w.removeEventListener('pointerdown', d, !0),
              w.removeEventListener('mousedown', v, !0),
              w.removeEventListener('contextmenu', v, !0),
              g &&
                (g.removeEventListener('mousedown', v, !0),
                g.removeEventListener('contextmenu', v, !0));
          }
        );
      }
    },
    [t, n, r, o, i]
  );
  function c() {
    u.current = !0;
  }
  return c;
}
var eI = [
  'prefixCls',
  'children',
  'action',
  'showAction',
  'hideAction',
  'popupVisible',
  'defaultPopupVisible',
  'onPopupVisibleChange',
  'afterPopupVisibleChange',
  'mouseEnterDelay',
  'mouseLeaveDelay',
  'focusDelay',
  'blurDelay',
  'mask',
  'maskClosable',
  'getPopupContainer',
  'forceRender',
  'autoDestroy',
  'destroyPopupOnHide',
  'popup',
  'popupClassName',
  'popupStyle',
  'popupPlacement',
  'builtinPlacements',
  'popupAlign',
  'zIndex',
  'stretch',
  'getPopupClassNameFromAlign',
  'fresh',
  'alignPoint',
  'onPopupClick',
  'onPopupAlign',
  'arrow',
  'popupMotion',
  'maskMotion',
  'popupTransitionName',
  'popupAnimation',
  'maskTransitionName',
  'maskAnimation',
  'className',
  'getTriggerDOMNode',
];
function tI() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : tS,
    t = f.forwardRef(function (n, r) {
      var o = n.prefixCls,
        i = o === void 0 ? 'rc-trigger-popup' : o,
        a = n.children,
        l = n.action,
        s = l === void 0 ? 'hover' : l,
        u = n.showAction,
        c = n.hideAction,
        d = n.popupVisible,
        v = n.defaultPopupVisible,
        w = n.onPopupVisibleChange,
        g = n.afterPopupVisibleChange,
        S = n.mouseEnterDelay,
        y = n.mouseLeaveDelay,
        p = y === void 0 ? 0.1 : y,
        m = n.focusDelay,
        h = n.blurDelay,
        C = n.mask,
        b = n.maskClosable,
        x = b === void 0 ? !0 : b,
        E = n.getPopupContainer,
        P = n.forceRender,
        I = n.autoDestroy,
        M = n.destroyPopupOnHide,
        A = n.popup,
        j = n.popupClassName,
        L = n.popupStyle,
        F = n.popupPlacement,
        U = n.builtinPlacements,
        T = U === void 0 ? {} : U,
        R = n.popupAlign,
        k = n.zIndex,
        O = n.stretch,
        _ = n.getPopupClassNameFromAlign,
        z = n.fresh,
        B = n.alignPoint,
        K = n.onPopupClick,
        D = n.onPopupAlign,
        q = n.arrow,
        te = n.popupMotion,
        ne = n.maskMotion,
        xe = n.popupTransitionName,
        le = n.popupAnimation,
        he = n.maskTransitionName,
        Ee = n.maskAnimation,
        ge = n.className,
        Ne = n.getTriggerDOMNode,
        Oe = je(n, eI),
        Pe = I || M || !1,
        $e = f.useState(!1),
        et = V($e, 2),
        ye = et[0],
        De = et[1];
      Wt(function () {
        De($R());
      }, []);
      var ve = f.useRef({}),
        ie = f.useContext(Hh),
        Be = f.useMemo(
          function () {
            return {
              registerSubPopup: function (re, Ge) {
                (ve.current[re] = Ge),
                  ie == null || ie.registerSubPopup(re, Ge);
              },
            };
          },
          [ie]
        ),
        Q = NP(),
        Ae = f.useState(null),
        Ke = V(Ae, 2),
        we = Ke[0],
        yt = Ke[1],
        xt = f.useRef(null),
        tt = tn(function (X) {
          (xt.current = X),
            tl(X) && we !== X && yt(X),
            ie == null || ie.registerSubPopup(Q, X);
        }),
        Et = f.useState(null),
        dt = V(Et, 2),
        ot = dt[0],
        Ve = dt[1],
        me = f.useRef(null),
        it = tn(function (X) {
          tl(X) && ot !== X && (Ve(X), (me.current = X));
        }),
        Gt = f.Children.only(a),
        St = (Gt == null ? void 0 : Gt.props) || {},
        kt = {},
        tr = tn(function (X) {
          var re,
            Ge,
            at = ot;
          return (
            (at == null ? void 0 : at.contains(X)) ||
            ((re = su(at)) === null || re === void 0 ? void 0 : re.host) ===
              X ||
            X === at ||
            (we == null ? void 0 : we.contains(X)) ||
            ((Ge = su(we)) === null || Ge === void 0 ? void 0 : Ge.host) ===
              X ||
            X === we ||
            Object.values(ve.current).some(function (qe) {
              return (qe == null ? void 0 : qe.contains(X)) || X === qe;
            })
          );
        }),
        Ln = Wh(i, te, le, xe),
        jt = Wh(i, ne, Ee, he),
        ln = f.useState(v || !1),
        Qe = V(ln, 2),
        He = Qe[0],
        Pt = Qe[1],
        Re = d ?? He,
        ee = tn(function (X) {
          d === void 0 && Pt(X);
        });
      Wt(
        function () {
          Pt(d || !1);
        },
        [d]
      );
      var Y = f.useRef(Re);
      Y.current = Re;
      var W = f.useRef([]);
      W.current = [];
      var Fe = tn(function (X) {
          var re;
          ee(X),
            ((re = W.current[W.current.length - 1]) !== null && re !== void 0
              ? re
              : Re) !== X && (W.current.push(X), w == null || w(X));
        }),
        Rt = f.useRef(),
        Te = function () {
          clearTimeout(Rt.current);
        },
        Ce = function (re) {
          var Ge =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          Te(),
            Ge === 0
              ? Fe(re)
              : (Rt.current = setTimeout(function () {
                  Fe(re);
                }, Ge * 1e3));
        };
      f.useEffect(function () {
        return Te;
      }, []);
      var It = f.useState(!1),
        wt = V(It, 2),
        Dt = wt[0],
        An = wt[1];
      Wt(
        function (X) {
          (!X || Re) && An(!0);
        },
        [Re]
      );
      var Or = f.useState(null),
        sn = V(Or, 2),
        Mt = sn[0],
        nr = sn[1],
        xn = f.useState(null),
        zn = V(xn, 2),
        nt = zn[0],
        $r = zn[1],
        rr = function (re) {
          $r([re.clientX, re.clientY]);
        },
        Ho = YR(Re, we, B && nt !== null ? nt : ot, F, T, R, D),
        vt = V(Ho, 11),
        Uo = vt[0],
        Zi = vt[1],
        or = vt[2],
        ir = vt[3],
        mo = vt[4],
        Wo = vt[5],
        Ko = vt[6],
        mr = vt[7],
        po = vt[8],
        jn = vt[9],
        Dn = vt[10],
        Go = qR(ye, s, u, c),
        qo = V(Go, 2),
        un = qo[0],
        cn = qo[1],
        Tr = un.has('click'),
        _r = cn.has('click') || cn.has('contextMenu'),
        En = tn(function () {
          Dt || Dn();
        }),
        Ji = function () {
          Y.current && B && _r && Ce(!1);
        };
      ZR(Re, ot, we, En, Ji),
        Wt(
          function () {
            En();
          },
          [nt, F]
        ),
        Wt(
          function () {
            Re && !(T != null && T[F]) && En();
          },
          [JSON.stringify(R)]
        );
      var Le = f.useMemo(
        function () {
          var X = QR(T, i, jn, B);
          return ue(X, _ == null ? void 0 : _(jn));
        },
        [jn, _, T, i, B]
      );
      f.useImperativeHandle(r, function () {
        return {
          nativeElement: me.current,
          popupElement: xt.current,
          forceAlign: En,
        };
      });
      var be = f.useState(0),
        ke = V(be, 2),
        Ot = ke[0],
        $t = ke[1],
        Nr = f.useState(0),
        Fr = V(Nr, 2),
        ea = Fr[0],
        Xo = Fr[1],
        ho = function () {
          if (O && ot) {
            var re = ot.getBoundingClientRect();
            $t(re.width), Xo(re.height);
          }
        },
        pr = function () {
          ho(), En();
        },
        go = function (re) {
          An(!1), Dn(), g == null || g(re);
        },
        yo = function () {
          return new Promise(function (re) {
            ho(),
              nr(function () {
                return re;
              });
          });
        };
      Wt(
        function () {
          Mt && (Dn(), Mt(), nr(null));
        },
        [Mt]
      );
      function ar(X, re, Ge, at) {
        kt[X] = function (qe) {
          var Tl;
          at == null || at(qe), Ce(re, Ge);
          for (
            var ac = arguments.length,
              dm = new Array(ac > 1 ? ac - 1 : 0),
              _l = 1;
            _l < ac;
            _l++
          )
            dm[_l - 1] = arguments[_l];
          (Tl = St[X]) === null ||
            Tl === void 0 ||
            Tl.call.apply(Tl, [St, qe].concat(dm));
        };
      }
      (Tr || _r) &&
        (kt.onClick = function (X) {
          var re;
          Y.current && _r ? Ce(!1) : !Y.current && Tr && (rr(X), Ce(!0));
          for (
            var Ge = arguments.length,
              at = new Array(Ge > 1 ? Ge - 1 : 0),
              qe = 1;
            qe < Ge;
            qe++
          )
            at[qe - 1] = arguments[qe];
          (re = St.onClick) === null ||
            re === void 0 ||
            re.call.apply(re, [St, X].concat(at));
        });
      var oc = JR(Re, _r, ot, we, C, x, tr, Ce),
        cm = un.has('hover'),
        fm = cn.has('hover'),
        qt,
        Qo;
      cm &&
        (ar('onMouseEnter', !0, S, function (X) {
          rr(X);
        }),
        ar('onPointerEnter', !0, S, function (X) {
          rr(X);
        }),
        (qt = function (re) {
          (Re || Dt) &&
            we !== null &&
            we !== void 0 &&
            we.contains(re.target) &&
            Ce(!0, S);
        }),
        B &&
          (kt.onMouseMove = function (X) {
            var re;
            (re = St.onMouseMove) === null || re === void 0 || re.call(St, X);
          })),
        fm &&
          (ar('onMouseLeave', !1, p),
          ar('onPointerLeave', !1, p),
          (Qo = function () {
            Ce(!1, p);
          })),
        un.has('focus') && ar('onFocus', !0, m),
        cn.has('focus') && ar('onBlur', !1, h),
        un.has('contextMenu') &&
          (kt.onContextMenu = function (X) {
            var re;
            Y.current && cn.has('contextMenu') ? Ce(!1) : (rr(X), Ce(!0)),
              X.preventDefault();
            for (
              var Ge = arguments.length,
                at = new Array(Ge > 1 ? Ge - 1 : 0),
                qe = 1;
              qe < Ge;
              qe++
            )
              at[qe - 1] = arguments[qe];
            (re = St.onContextMenu) === null ||
              re === void 0 ||
              re.call.apply(re, [St, X].concat(at));
          }),
        ge && (kt.className = ue(St.className, ge));
      var Yo = N(N({}, St), kt),
        Lr = {},
        Zo = [
          'onContextMenu',
          'onClick',
          'onMouseDown',
          'onTouchStart',
          'onMouseEnter',
          'onMouseLeave',
          'onFocus',
          'onBlur',
        ];
      Zo.forEach(function (X) {
        Oe[X] &&
          (Lr[X] = function () {
            for (
              var re, Ge = arguments.length, at = new Array(Ge), qe = 0;
              qe < Ge;
              qe++
            )
              at[qe] = arguments[qe];
            (re = Yo[X]) === null ||
              re === void 0 ||
              re.call.apply(re, [Yo].concat(at)),
              Oe[X].apply(Oe, at);
          });
      });
      var Ol = f.cloneElement(Gt, N(N({}, Yo), Lr)),
        $l = { x: Wo, y: Ko },
        ic = q ? N({}, q !== !0 ? q : {}) : null;
      return f.createElement(
        f.Fragment,
        null,
        f.createElement(
          bl,
          { disabled: !Re, ref: it, onResize: pr },
          f.createElement(GR, { getTriggerDOMNode: Ne }, Ol)
        ),
        f.createElement(
          Hh.Provider,
          { value: Be },
          f.createElement(KR, {
            portal: e,
            ref: tt,
            prefixCls: i,
            popup: A,
            className: ue(j, Le),
            style: L,
            target: ot,
            onMouseEnter: qt,
            onMouseLeave: Qo,
            onPointerEnter: qt,
            zIndex: k,
            open: Re,
            keepDom: Dt,
            fresh: z,
            onClick: K,
            onPointerDownCapture: oc,
            mask: C,
            motion: Ln,
            maskMotion: jt,
            onVisibleChanged: go,
            onPrepare: yo,
            forceRender: P,
            autoDestroy: Pe,
            getPopupContainer: E,
            align: jn,
            arrow: ic,
            arrowPos: $l,
            ready: Uo,
            offsetX: Zi,
            offsetY: or,
            offsetR: ir,
            offsetB: mo,
            onAlign: En,
            stretch: O,
            targetWidth: Ot / mr,
            targetHeight: ea / po,
          })
        )
      );
    });
  return t;
}
const fS = tI(tS);
function dS(e) {
  var t = e.children,
    n = e.prefixCls,
    r = e.id,
    o = e.overlayInnerStyle,
    i = e.className,
    a = e.style;
  return f.createElement(
    'div',
    { className: ue(''.concat(n, '-content'), i), style: a },
    f.createElement(
      'div',
      { className: ''.concat(n, '-inner'), id: r, role: 'tooltip', style: o },
      typeof t == 'function' ? t() : t
    )
  );
}
var ii = { shiftX: 64, adjustY: 1 },
  ai = { adjustX: 1, shiftY: !0 },
  Rn = [0, 0],
  nI = {
    left: {
      points: ['cr', 'cl'],
      overflow: ai,
      offset: [-4, 0],
      targetOffset: Rn,
    },
    right: {
      points: ['cl', 'cr'],
      overflow: ai,
      offset: [4, 0],
      targetOffset: Rn,
    },
    top: {
      points: ['bc', 'tc'],
      overflow: ii,
      offset: [0, -4],
      targetOffset: Rn,
    },
    bottom: {
      points: ['tc', 'bc'],
      overflow: ii,
      offset: [0, 4],
      targetOffset: Rn,
    },
    topLeft: {
      points: ['bl', 'tl'],
      overflow: ii,
      offset: [0, -4],
      targetOffset: Rn,
    },
    leftTop: {
      points: ['tr', 'tl'],
      overflow: ai,
      offset: [-4, 0],
      targetOffset: Rn,
    },
    topRight: {
      points: ['br', 'tr'],
      overflow: ii,
      offset: [0, -4],
      targetOffset: Rn,
    },
    rightTop: {
      points: ['tl', 'tr'],
      overflow: ai,
      offset: [4, 0],
      targetOffset: Rn,
    },
    bottomRight: {
      points: ['tr', 'br'],
      overflow: ii,
      offset: [0, 4],
      targetOffset: Rn,
    },
    rightBottom: {
      points: ['bl', 'br'],
      overflow: ai,
      offset: [4, 0],
      targetOffset: Rn,
    },
    bottomLeft: {
      points: ['tl', 'bl'],
      overflow: ii,
      offset: [0, 4],
      targetOffset: Rn,
    },
    leftBottom: {
      points: ['br', 'bl'],
      overflow: ai,
      offset: [-4, 0],
      targetOffset: Rn,
    },
  },
  rI = [
    'overlayClassName',
    'trigger',
    'mouseEnterDelay',
    'mouseLeaveDelay',
    'overlayStyle',
    'prefixCls',
    'children',
    'onVisibleChange',
    'afterVisibleChange',
    'transitionName',
    'animation',
    'motion',
    'placement',
    'align',
    'destroyTooltipOnHide',
    'defaultVisible',
    'getTooltipContainer',
    'overlayInnerStyle',
    'arrowContent',
    'overlay',
    'id',
    'showArrow',
  ],
  oI = function (t, n) {
    var r = t.overlayClassName,
      o = t.trigger,
      i = o === void 0 ? ['hover'] : o,
      a = t.mouseEnterDelay,
      l = a === void 0 ? 0 : a,
      s = t.mouseLeaveDelay,
      u = s === void 0 ? 0.1 : s,
      c = t.overlayStyle,
      d = t.prefixCls,
      v = d === void 0 ? 'rc-tooltip' : d,
      w = t.children,
      g = t.onVisibleChange,
      S = t.afterVisibleChange,
      y = t.transitionName,
      p = t.animation,
      m = t.motion,
      h = t.placement,
      C = h === void 0 ? 'right' : h,
      b = t.align,
      x = b === void 0 ? {} : b,
      E = t.destroyTooltipOnHide,
      P = E === void 0 ? !1 : E,
      I = t.defaultVisible,
      M = t.getTooltipContainer,
      A = t.overlayInnerStyle;
    t.arrowContent;
    var j = t.overlay,
      L = t.id,
      F = t.showArrow,
      U = F === void 0 ? !0 : F,
      T = je(t, rI),
      R = f.useRef(null);
    f.useImperativeHandle(n, function () {
      return R.current;
    });
    var k = N({}, T);
    'visible' in t && (k.popupVisible = t.visible);
    var O = function () {
      return f.createElement(
        dS,
        { key: 'content', prefixCls: v, id: L, overlayInnerStyle: A },
        j
      );
    };
    return f.createElement(
      fS,
      ce(
        {
          popupClassName: r,
          prefixCls: v,
          popup: O,
          action: i,
          builtinPlacements: nI,
          popupPlacement: C,
          ref: R,
          popupAlign: x,
          getPopupContainer: M,
          onPopupVisibleChange: g,
          afterPopupVisibleChange: S,
          popupTransitionName: y,
          popupAnimation: p,
          popupMotion: m,
          defaultPopupVisible: I,
          autoDestroy: P,
          mouseLeaveDelay: u,
          popupStyle: c,
          mouseEnterDelay: l,
          arrow: U,
        },
        k
      ),
      w
    );
  };
const iI = f.forwardRef(oI);
function aI(e) {
  const { sizePopupArrow: t, borderRadiusXS: n, borderRadiusOuter: r } = e,
    o = t / 2,
    i = 0,
    a = o,
    l = (r * 1) / Math.sqrt(2),
    s = o - r * (1 - 1 / Math.sqrt(2)),
    u = o - n * (1 / Math.sqrt(2)),
    c = r * (Math.sqrt(2) - 1) + n * (1 / Math.sqrt(2)),
    d = 2 * o - u,
    v = c,
    w = 2 * o - l,
    g = s,
    S = 2 * o - i,
    y = a,
    p = o * Math.sqrt(2) + r * (Math.sqrt(2) - 2),
    m = r * (Math.sqrt(2) - 1),
    h = `polygon(${m}px 100%, 50% ${m}px, ${2 * o - m}px 100%, ${m}px 100%)`,
    C = `path('M ${i} ${a} A ${r} ${r} 0 0 0 ${l} ${s} L ${u} ${c} A ${n} ${n} 0 0 1 ${d} ${v} L ${w} ${g} A ${r} ${r} 0 0 0 ${S} ${y} Z')`;
  return { arrowShadowWidth: p, arrowPath: C, arrowPolygon: h };
}
const lI = (e, t, n) => {
    const {
      sizePopupArrow: r,
      arrowPolygon: o,
      arrowPath: i,
      arrowShadowWidth: a,
      borderRadiusXS: l,
      calc: s,
    } = e;
    return {
      pointerEvents: 'none',
      width: r,
      height: r,
      overflow: 'hidden',
      '&::before': {
        position: 'absolute',
        bottom: 0,
        insetInlineStart: 0,
        width: r,
        height: s(r).div(2).equal(),
        background: t,
        clipPath: { _multi_value_: !0, value: [o, i] },
        content: '""',
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        width: a,
        height: a,
        bottom: 0,
        insetInline: 0,
        margin: 'auto',
        borderRadius: { _skip_check_: !0, value: `0 0 ${pe(l)} 0` },
        transform: 'translateY(50%) rotate(-135deg)',
        boxShadow: n,
        zIndex: 0,
        background: 'transparent',
      },
    };
  },
  vS = 8;
function mS(e) {
  const { contentRadius: t, limitVerticalRadius: n } = e,
    r = t > 12 ? t + 2 : 12;
  return { arrowOffsetHorizontal: r, arrowOffsetVertical: n ? vS : r };
}
function ss(e, t) {
  return e ? t : {};
}
function sI(e, t, n) {
  const {
      componentCls: r,
      boxShadowPopoverArrow: o,
      arrowOffsetVertical: i,
      arrowOffsetHorizontal: a,
    } = e,
    {
      arrowDistance: l = 0,
      arrowPlacement: s = { left: !0, right: !0, top: !0, bottom: !0 },
    } = {};
  return {
    [r]: Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            {
              [`${r}-arrow`]: [
                Object.assign(
                  Object.assign(
                    { position: 'absolute', zIndex: 1, display: 'block' },
                    lI(e, t, o)
                  ),
                  { '&:before': { background: t } }
                ),
              ],
            },
            ss(!!s.top, {
              [[
                `&-placement-top > ${r}-arrow`,
                `&-placement-topLeft > ${r}-arrow`,
                `&-placement-topRight > ${r}-arrow`,
              ].join(',')]: {
                bottom: l,
                transform: 'translateY(100%) rotate(180deg)',
              },
              [`&-placement-top > ${r}-arrow`]: {
                left: { _skip_check_: !0, value: '50%' },
                transform: 'translateX(-50%) translateY(100%) rotate(180deg)',
              },
              '&-placement-topLeft': {
                '--arrow-offset-horizontal': a,
                [`> ${r}-arrow`]: { left: { _skip_check_: !0, value: a } },
              },
              '&-placement-topRight': {
                '--arrow-offset-horizontal': `calc(100% - ${pe(a)})`,
                [`> ${r}-arrow`]: { right: { _skip_check_: !0, value: a } },
              },
            })
          ),
          ss(!!s.bottom, {
            [[
              `&-placement-bottom > ${r}-arrow`,
              `&-placement-bottomLeft > ${r}-arrow`,
              `&-placement-bottomRight > ${r}-arrow`,
            ].join(',')]: { top: l, transform: 'translateY(-100%)' },
            [`&-placement-bottom > ${r}-arrow`]: {
              left: { _skip_check_: !0, value: '50%' },
              transform: 'translateX(-50%) translateY(-100%)',
            },
            '&-placement-bottomLeft': {
              '--arrow-offset-horizontal': a,
              [`> ${r}-arrow`]: { left: { _skip_check_: !0, value: a } },
            },
            '&-placement-bottomRight': {
              '--arrow-offset-horizontal': `calc(100% - ${pe(a)})`,
              [`> ${r}-arrow`]: { right: { _skip_check_: !0, value: a } },
            },
          })
        ),
        ss(!!s.left, {
          [[
            `&-placement-left > ${r}-arrow`,
            `&-placement-leftTop > ${r}-arrow`,
            `&-placement-leftBottom > ${r}-arrow`,
          ].join(',')]: {
            right: { _skip_check_: !0, value: l },
            transform: 'translateX(100%) rotate(90deg)',
          },
          [`&-placement-left > ${r}-arrow`]: {
            top: { _skip_check_: !0, value: '50%' },
            transform: 'translateY(-50%) translateX(100%) rotate(90deg)',
          },
          [`&-placement-leftTop > ${r}-arrow`]: { top: i },
          [`&-placement-leftBottom > ${r}-arrow`]: { bottom: i },
        })
      ),
      ss(!!s.right, {
        [[
          `&-placement-right > ${r}-arrow`,
          `&-placement-rightTop > ${r}-arrow`,
          `&-placement-rightBottom > ${r}-arrow`,
        ].join(',')]: {
          left: { _skip_check_: !0, value: l },
          transform: 'translateX(-100%) rotate(-90deg)',
        },
        [`&-placement-right > ${r}-arrow`]: {
          top: { _skip_check_: !0, value: '50%' },
          transform: 'translateY(-50%) translateX(-100%) rotate(-90deg)',
        },
        [`&-placement-rightTop > ${r}-arrow`]: { top: i },
        [`&-placement-rightBottom > ${r}-arrow`]: { bottom: i },
      })
    ),
  };
}
function uI(e, t, n, r) {
  if (r === !1) return { adjustX: !1, adjustY: !1 };
  const o = r && typeof r == 'object' ? r : {},
    i = {};
  switch (e) {
    case 'top':
    case 'bottom':
      (i.shiftX = t.arrowOffsetHorizontal * 2 + n),
        (i.shiftY = !0),
        (i.adjustY = !0);
      break;
    case 'left':
    case 'right':
      (i.shiftY = t.arrowOffsetVertical * 2 + n),
        (i.shiftX = !0),
        (i.adjustX = !0);
      break;
  }
  const a = Object.assign(Object.assign({}, i), o);
  return a.shiftX || (a.adjustX = !0), a.shiftY || (a.adjustY = !0), a;
}
const Qh = {
    left: { points: ['cr', 'cl'] },
    right: { points: ['cl', 'cr'] },
    top: { points: ['bc', 'tc'] },
    bottom: { points: ['tc', 'bc'] },
    topLeft: { points: ['bl', 'tl'] },
    leftTop: { points: ['tr', 'tl'] },
    topRight: { points: ['br', 'tr'] },
    rightTop: { points: ['tl', 'tr'] },
    bottomRight: { points: ['tr', 'br'] },
    rightBottom: { points: ['bl', 'br'] },
    bottomLeft: { points: ['tl', 'bl'] },
    leftBottom: { points: ['br', 'bl'] },
  },
  cI = {
    topLeft: { points: ['bl', 'tc'] },
    leftTop: { points: ['tr', 'cl'] },
    topRight: { points: ['br', 'tc'] },
    rightTop: { points: ['tl', 'cr'] },
    bottomRight: { points: ['tr', 'bc'] },
    rightBottom: { points: ['bl', 'cr'] },
    bottomLeft: { points: ['tl', 'bc'] },
    leftBottom: { points: ['br', 'cl'] },
  },
  fI = new Set([
    'topLeft',
    'topRight',
    'bottomLeft',
    'bottomRight',
    'leftTop',
    'leftBottom',
    'rightTop',
    'rightBottom',
  ]);
function dI(e) {
  const {
      arrowWidth: t,
      autoAdjustOverflow: n,
      arrowPointAtCenter: r,
      offset: o,
      borderRadius: i,
      visibleFirst: a,
    } = e,
    l = t / 2,
    s = {};
  return (
    Object.keys(Qh).forEach((u) => {
      const c = (r && cI[u]) || Qh[u],
        d = Object.assign(Object.assign({}, c), {
          offset: [0, 0],
          dynamicInset: !0,
        });
      switch (((s[u] = d), fI.has(u) && (d.autoArrow = !1), u)) {
        case 'top':
        case 'topLeft':
        case 'topRight':
          d.offset[1] = -l - o;
          break;
        case 'bottom':
        case 'bottomLeft':
        case 'bottomRight':
          d.offset[1] = l + o;
          break;
        case 'left':
        case 'leftTop':
        case 'leftBottom':
          d.offset[0] = -l - o;
          break;
        case 'right':
        case 'rightTop':
        case 'rightBottom':
          d.offset[0] = l + o;
          break;
      }
      const v = mS({ contentRadius: i, limitVerticalRadius: !0 });
      if (r)
        switch (u) {
          case 'topLeft':
          case 'bottomLeft':
            d.offset[0] = -v.arrowOffsetHorizontal - l;
            break;
          case 'topRight':
          case 'bottomRight':
            d.offset[0] = v.arrowOffsetHorizontal + l;
            break;
          case 'leftTop':
          case 'rightTop':
            d.offset[1] = -v.arrowOffsetHorizontal * 2 + l;
            break;
          case 'leftBottom':
          case 'rightBottom':
            d.offset[1] = v.arrowOffsetHorizontal * 2 - l;
            break;
        }
      (d.overflow = uI(u, v, t, n)), a && (d.htmlRegion = 'visibleFirst');
    }),
    s
  );
}
const vI = (e) => {
    const {
      componentCls: t,
      tooltipMaxWidth: n,
      tooltipColor: r,
      tooltipBg: o,
      tooltipBorderRadius: i,
      zIndexPopup: a,
      controlHeight: l,
      boxShadowSecondary: s,
      paddingSM: u,
      paddingXS: c,
    } = e;
    return [
      {
        [t]: Object.assign(
          Object.assign(
            Object.assign(Object.assign({}, O1(e)), {
              position: 'absolute',
              zIndex: a,
              display: 'block',
              width: 'max-content',
              maxWidth: n,
              visibility: 'visible',
              '--valid-offset-x':
                'var(--arrow-offset-horizontal, var(--arrow-x))',
              transformOrigin: [
                'var(--valid-offset-x, 50%)',
                'var(--arrow-y, 50%)',
              ].join(' '),
              '&-hidden': { display: 'none' },
              '--antd-arrow-background-color': o,
              [`${t}-inner`]: {
                minWidth: '1em',
                minHeight: l,
                padding: `${pe(e.calc(u).div(2).equal())} ${pe(c)}`,
                color: r,
                textAlign: 'start',
                textDecoration: 'none',
                wordWrap: 'break-word',
                backgroundColor: o,
                borderRadius: i,
                boxShadow: s,
                boxSizing: 'border-box',
              },
              [[
                '&-placement-left',
                '&-placement-leftTop',
                '&-placement-leftBottom',
                '&-placement-right',
                '&-placement-rightTop',
                '&-placement-rightBottom',
              ].join(',')]: { [`${t}-inner`]: { borderRadius: e.min(i, vS) } },
              [`${t}-content`]: { position: 'relative' },
            }),
            e2(e, (d, v) => {
              let { darkColor: w } = v;
              return {
                [`&${t}-${d}`]: {
                  [`${t}-inner`]: { backgroundColor: w },
                  [`${t}-arrow`]: { '--antd-arrow-background-color': w },
                },
              };
            })
          ),
          { '&-rtl': { direction: 'rtl' } }
        ),
      },
      sI(e, 'var(--antd-arrow-background-color)'),
      {
        [`${t}-pure`]: {
          position: 'relative',
          maxWidth: 'none',
          margin: e.sizePopupArrow,
        },
      },
    ];
  },
  mI = (e) =>
    Object.assign(
      Object.assign(
        { zIndexPopup: e.zIndexPopupBase + 70 },
        mS({ contentRadius: e.borderRadius, limitVerticalRadius: !0 })
      ),
      aI(Bi(e, { borderRadiusOuter: Math.min(e.borderRadiusOuter, 4) }))
    ),
  pS = function (e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return Qu(
      'Tooltip',
      (r) => {
        const {
            borderRadius: o,
            colorTextLightSolid: i,
            colorBgSpotlight: a,
          } = r,
          l = Bi(r, {
            tooltipMaxWidth: 250,
            tooltipColor: i,
            tooltipBorderRadius: o,
            tooltipBg: a,
          });
        return [vI(l), J1(r, 'zoom-big-fast')];
      },
      mI,
      { resetStyle: !1, injectStyle: t }
    )(e);
  },
  pI = lu.map((e) => `${e}-inverse`);
function hI(e) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0)
    ? [].concat(Z(pI), Z(lu)).includes(e)
    : lu.includes(e);
}
function hS(e, t) {
  const n = hI(t),
    r = ue({ [`${e}-${t}`]: t && n }),
    o = {},
    i = {};
  return (
    t && !n && ((o.background = t), (i['--antd-arrow-background-color'] = t)),
    { className: r, overlayStyle: o, arrowStyle: i }
  );
}
const gI = (e) => {
  const {
      prefixCls: t,
      className: n,
      placement: r = 'top',
      title: o,
      color: i,
      overlayInnerStyle: a,
    } = e,
    { getPrefixCls: l } = f.useContext(wn),
    s = l('tooltip', t),
    [u, c, d] = pS(s),
    v = hS(s, i),
    w = v.arrowStyle,
    g = Object.assign(Object.assign({}, a), v.overlayStyle),
    S = ue(c, d, s, `${s}-pure`, `${s}-placement-${r}`, n, v.className);
  return u(
    f.createElement(
      'div',
      { className: S, style: w },
      f.createElement('div', { className: `${s}-arrow` }),
      f.createElement(
        dS,
        Object.assign({}, e, {
          className: c,
          prefixCls: s,
          overlayInnerStyle: g,
        }),
        o
      )
    )
  );
};
var yI = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
const SI = f.forwardRef((e, t) => {
    var n, r;
    const {
        prefixCls: o,
        openClassName: i,
        getTooltipContainer: a,
        overlayClassName: l,
        color: s,
        overlayInnerStyle: u,
        children: c,
        afterOpenChange: d,
        afterVisibleChange: v,
        destroyTooltipOnHide: w,
        arrow: g = !0,
        title: S,
        overlay: y,
        builtinPlacements: p,
        arrowPointAtCenter: m = !1,
        autoAdjustOverflow: h = !0,
      } = e,
      C = !!g,
      [, b] = Xi(),
      {
        getPopupContainer: x,
        getPrefixCls: E,
        direction: P,
      } = f.useContext(wn),
      I = m1(),
      M = f.useRef(null),
      A = () => {
        var Q;
        (Q = M.current) === null || Q === void 0 || Q.forceAlign();
      };
    f.useImperativeHandle(t, () => {
      var Q;
      return {
        forceAlign: A,
        forcePopupAlign: () => {
          I.deprecated(!1, 'forcePopupAlign', 'forceAlign'), A();
        },
        nativeElement:
          (Q = M.current) === null || Q === void 0 ? void 0 : Q.nativeElement,
      };
    });
    const [j, L] = Ta(!1, {
        value: (n = e.open) !== null && n !== void 0 ? n : e.visible,
        defaultValue:
          (r = e.defaultOpen) !== null && r !== void 0 ? r : e.defaultVisible,
      }),
      F = !S && !y && S !== 0,
      U = (Q) => {
        var Ae, Ke;
        L(F ? !1 : Q),
          F ||
            ((Ae = e.onOpenChange) === null || Ae === void 0 || Ae.call(e, Q),
            (Ke = e.onVisibleChange) === null ||
              Ke === void 0 ||
              Ke.call(e, Q));
      },
      T = f.useMemo(() => {
        var Q, Ae;
        let Ke = m;
        return (
          typeof g == 'object' &&
            (Ke =
              (Ae =
                (Q = g.pointAtCenter) !== null && Q !== void 0
                  ? Q
                  : g.arrowPointAtCenter) !== null && Ae !== void 0
                ? Ae
                : m),
          p ||
            dI({
              arrowPointAtCenter: Ke,
              autoAdjustOverflow: h,
              arrowWidth: C ? b.sizePopupArrow : 0,
              borderRadius: b.borderRadius,
              offset: b.marginXXS,
              visibleFirst: !0,
            })
        );
      }, [m, g, p, b]),
      R = f.useMemo(() => (S === 0 ? S : y || S || ''), [y, S]),
      k = f.createElement(OR, { space: !0 }, typeof R == 'function' ? R() : R),
      {
        getPopupContainer: O,
        placement: _ = 'top',
        mouseEnterDelay: z = 0.1,
        mouseLeaveDelay: B = 0.1,
        overlayStyle: K,
        rootClassName: D,
      } = e,
      q = yI(e, [
        'getPopupContainer',
        'placement',
        'mouseEnterDelay',
        'mouseLeaveDelay',
        'overlayStyle',
        'rootClassName',
      ]),
      te = E('tooltip', o),
      ne = E(),
      xe = e['data-popover-inject'];
    let le = j;
    !('open' in e) && !('visible' in e) && F && (le = !1);
    const he =
        f.isValidElement(c) && !U2(c) ? c : f.createElement('span', null, c),
      Ee = he.props,
      ge =
        !Ee.className || typeof Ee.className == 'string'
          ? ue(Ee.className, i || `${te}-open`)
          : Ee.className,
      [Ne, Oe, Pe] = pS(te, !xe),
      $e = hS(te, s),
      et = $e.arrowStyle,
      ye = Object.assign(Object.assign({}, u), $e.overlayStyle),
      De = ue(l, { [`${te}-rtl`]: P === 'rtl' }, $e.className, D, Oe, Pe),
      [ve, ie] = Q1('Tooltip', q.zIndex),
      Be = f.createElement(
        iI,
        Object.assign({}, q, {
          zIndex: ve,
          showArrow: C,
          placement: _,
          mouseEnterDelay: z,
          mouseLeaveDelay: B,
          prefixCls: te,
          overlayClassName: De,
          overlayStyle: Object.assign(Object.assign({}, et), K),
          getTooltipContainer: O || a || x,
          ref: M,
          builtinPlacements: T,
          overlay: k,
          visible: le,
          onVisibleChange: U,
          afterVisibleChange: d ?? v,
          overlayInnerStyle: ye,
          arrowContent: f.createElement('span', {
            className: `${te}-arrow-content`,
          }),
          motion: {
            motionName: Y2(ne, 'zoom-big-fast', e.transitionName),
            motionDeadline: 1e3,
          },
          destroyTooltipOnHide: !!w,
        }),
        le ? Zu(he, { className: ge }) : he
      );
    return Ne(f.createElement(q1.Provider, { value: ie }, Be));
  }),
  gS = SI;
gS._InternalPanelDoNotUseOrYouWillBeFired = gI;
var yS = f.createContext(null);
function SS(e, t) {
  return e === void 0 ? null : ''.concat(e, '-').concat(t);
}
function wS(e) {
  var t = f.useContext(yS);
  return SS(t, e);
}
var wI = ['children', 'locked'],
  er = f.createContext(null);
function CI(e, t) {
  var n = N({}, e);
  return (
    Object.keys(t).forEach(function (r) {
      var o = t[r];
      o !== void 0 && (n[r] = o);
    }),
    n
  );
}
function ml(e) {
  var t = e.children,
    n = e.locked,
    r = je(e, wI),
    o = f.useContext(er),
    i = Bu(
      function () {
        return CI(o, r);
      },
      [o, r],
      function (a, l) {
        return !n && (a[0] !== l[0] || !al(a[1], l[1], !0));
      }
    );
  return f.createElement(er.Provider, { value: i }, t);
}
var bI = [],
  CS = f.createContext(null);
function Ju() {
  return f.useContext(CS);
}
var bS = f.createContext(bI);
function Yi(e) {
  var t = f.useContext(bS);
  return f.useMemo(
    function () {
      return e !== void 0 ? [].concat(Z(t), [e]) : t;
    },
    [t, e]
  );
}
var xS = f.createContext(null),
  nm = f.createContext({});
function Yh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (Y1(e)) {
    var n = e.nodeName.toLowerCase(),
      r =
        ['input', 'select', 'textarea', 'button'].includes(n) ||
        e.isContentEditable ||
        (n === 'a' && !!e.getAttribute('href')),
      o = e.getAttribute('tabindex'),
      i = Number(o),
      a = null;
    return (
      o && !Number.isNaN(i) ? (a = i) : r && a === null && (a = 0),
      r && e.disabled && (a = null),
      a !== null && (a >= 0 || (t && a < 0))
    );
  }
  return !1;
}
function xI(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
    n = Z(e.querySelectorAll('*')).filter(function (r) {
      return Yh(r, t);
    });
  return Yh(e, t) && n.unshift(e), n;
}
var jd = J.LEFT,
  Dd = J.RIGHT,
  Bd = J.UP,
  Ms = J.DOWN,
  Os = J.ENTER,
  ES = J.ESC,
  va = J.HOME,
  ma = J.END,
  Zh = [Bd, Ms, jd, Dd];
function EI(e, t, n, r) {
  var o,
    i = 'prev',
    a = 'next',
    l = 'children',
    s = 'parent';
  if (e === 'inline' && r === Os) return { inlineTrigger: !0 };
  var u = $($({}, Bd, i), Ms, a),
    c = $($($($({}, jd, n ? a : i), Dd, n ? i : a), Ms, l), Os, l),
    d = $(
      $($($($($({}, Bd, i), Ms, a), Os, l), ES, s), jd, n ? l : s),
      Dd,
      n ? s : l
    ),
    v = {
      inline: u,
      horizontal: c,
      vertical: d,
      inlineSub: u,
      horizontalSub: d,
      verticalSub: d,
    },
    w =
      (o = v[''.concat(e).concat(t ? '' : 'Sub')]) === null || o === void 0
        ? void 0
        : o[r];
  switch (w) {
    case i:
      return { offset: -1, sibling: !0 };
    case a:
      return { offset: 1, sibling: !0 };
    case s:
      return { offset: -1, sibling: !1 };
    case l:
      return { offset: 1, sibling: !1 };
    default:
      return null;
  }
}
function kI(e) {
  for (var t = e; t; ) {
    if (t.getAttribute('data-menu-list')) return t;
    t = t.parentElement;
  }
  return null;
}
function PI(e, t) {
  for (var n = e || document.activeElement; n; ) {
    if (t.has(n)) return n;
    n = n.parentElement;
  }
  return null;
}
function rm(e, t) {
  var n = xI(e, !0);
  return n.filter(function (r) {
    return t.has(r);
  });
}
function Jh(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  if (!e) return null;
  var o = rm(e, t),
    i = o.length,
    a = o.findIndex(function (l) {
      return n === l;
    });
  return (
    r < 0 ? (a === -1 ? (a = i - 1) : (a -= 1)) : r > 0 && (a += 1),
    (a = (a + i) % i),
    o[a]
  );
}
var Vd = function (t, n) {
  var r = new Set(),
    o = new Map(),
    i = new Map();
  return (
    t.forEach(function (a) {
      var l = document.querySelector("[data-menu-id='".concat(SS(n, a), "']"));
      l && (r.add(l), i.set(l, a), o.set(a, l));
    }),
    { elements: r, key2element: o, element2key: i }
  );
};
function RI(e, t, n, r, o, i, a, l, s, u) {
  var c = f.useRef(),
    d = f.useRef();
  d.current = t;
  var v = function () {
    br.cancel(c.current);
  };
  return (
    f.useEffect(function () {
      return function () {
        v();
      };
    }, []),
    function (w) {
      var g = w.which;
      if ([].concat(Zh, [Os, ES, va, ma]).includes(g)) {
        var S = i(),
          y = Vd(S, r),
          p = y,
          m = p.elements,
          h = p.key2element,
          C = p.element2key,
          b = h.get(t),
          x = PI(b, m),
          E = C.get(x),
          P = EI(e, a(E, !0).length === 1, n, g);
        if (!P && g !== va && g !== ma) return;
        (Zh.includes(g) || [va, ma].includes(g)) && w.preventDefault();
        var I = function (R) {
          if (R) {
            var k = R,
              O = R.querySelector('a');
            O != null && O.getAttribute('href') && (k = O);
            var _ = C.get(R);
            l(_),
              v(),
              (c.current = br(function () {
                d.current === _ && k.focus();
              }));
          }
        };
        if ([va, ma].includes(g) || P.sibling || !x) {
          var M;
          !x || e === 'inline' ? (M = o.current) : (M = kI(x));
          var A,
            j = rm(M, m);
          g === va
            ? (A = j[0])
            : g === ma
              ? (A = j[j.length - 1])
              : (A = Jh(M, m, x, P.offset)),
            I(A);
        } else if (P.inlineTrigger) s(E);
        else if (P.offset > 0)
          s(E, !0),
            v(),
            (c.current = br(function () {
              y = Vd(S, r);
              var T = x.getAttribute('aria-controls'),
                R = document.getElementById(T),
                k = Jh(R, y.elements);
              I(k);
            }, 5));
        else if (P.offset < 0) {
          var L = a(E, !0),
            F = L[L.length - 2],
            U = h.get(F);
          s(F, !1), I(U);
        }
      }
      u == null || u(w);
    }
  );
}
function II(e) {
  Promise.resolve().then(e);
}
var om = '__RC_UTIL_PATH_SPLIT__',
  eg = function (t) {
    return t.join(om);
  },
  MI = function (t) {
    return t.split(om);
  },
  Hd = 'rc-menu-more';
function OI() {
  var e = f.useState({}),
    t = V(e, 2),
    n = t[1],
    r = f.useRef(new Map()),
    o = f.useRef(new Map()),
    i = f.useState([]),
    a = V(i, 2),
    l = a[0],
    s = a[1],
    u = f.useRef(0),
    c = f.useRef(!1),
    d = function () {
      c.current || n({});
    },
    v = f.useCallback(function (h, C) {
      var b = eg(C);
      o.current.set(b, h), r.current.set(h, b), (u.current += 1);
      var x = u.current;
      II(function () {
        x === u.current && d();
      });
    }, []),
    w = f.useCallback(function (h, C) {
      var b = eg(C);
      o.current.delete(b), r.current.delete(h);
    }, []),
    g = f.useCallback(function (h) {
      s(h);
    }, []),
    S = f.useCallback(
      function (h, C) {
        var b = r.current.get(h) || '',
          x = MI(b);
        return C && l.includes(x[0]) && x.unshift(Hd), x;
      },
      [l]
    ),
    y = f.useCallback(
      function (h, C) {
        return h
          .filter(function (b) {
            return b !== void 0;
          })
          .some(function (b) {
            var x = S(b, !0);
            return x.includes(C);
          });
      },
      [S]
    ),
    p = function () {
      var C = Z(r.current.keys());
      return l.length && C.push(Hd), C;
    },
    m = f.useCallback(function (h) {
      var C = ''.concat(r.current.get(h)).concat(om),
        b = new Set();
      return (
        Z(o.current.keys()).forEach(function (x) {
          x.startsWith(C) && b.add(o.current.get(x));
        }),
        b
      );
    }, []);
  return (
    f.useEffect(function () {
      return function () {
        c.current = !0;
      };
    }, []),
    {
      registerPath: v,
      unregisterPath: w,
      refreshOverflowKeys: g,
      isSubPathKey: y,
      getKeyPath: S,
      getKeys: p,
      getSubPathKeys: m,
    }
  );
}
function wa(e) {
  var t = f.useRef(e);
  t.current = e;
  var n = f.useCallback(function () {
    for (var r, o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (r = t.current) === null || r === void 0
      ? void 0
      : r.call.apply(r, [t].concat(i));
  }, []);
  return e ? n : void 0;
}
var $I = Math.random().toFixed(5).toString().slice(2),
  tg = 0;
function TI(e) {
  var t = Ta(e, { value: e }),
    n = V(t, 2),
    r = n[0],
    o = n[1];
  return (
    f.useEffect(function () {
      tg += 1;
      var i = ''.concat($I, '-').concat(tg);
      o('rc-menu-uuid-'.concat(i));
    }, []),
    r
  );
}
function kS(e, t, n, r) {
  var o = f.useContext(er),
    i = o.activeKey,
    a = o.onActive,
    l = o.onInactive,
    s = { active: i === e };
  return (
    t ||
      ((s.onMouseEnter = function (u) {
        n == null || n({ key: e, domEvent: u }), a(e);
      }),
      (s.onMouseLeave = function (u) {
        r == null || r({ key: e, domEvent: u }), l(e);
      })),
    s
  );
}
function PS(e) {
  var t = f.useContext(er),
    n = t.mode,
    r = t.rtl,
    o = t.inlineIndent;
  if (n !== 'inline') return null;
  var i = e;
  return r ? { paddingRight: i * o } : { paddingLeft: i * o };
}
function RS(e) {
  var t = e.icon,
    n = e.props,
    r = e.children,
    o;
  return t === null || t === !1
    ? null
    : (typeof t == 'function'
        ? (o = f.createElement(t, N({}, n)))
        : typeof t != 'boolean' && (o = t),
      o || r || null);
}
var _I = ['item'];
function fu(e) {
  var t = e.item,
    n = je(e, _I);
  return (
    Object.defineProperty(n, 'item', {
      get: function () {
        return (
          Yt(
            !1,
            '`info.item` is deprecated since we will move to function component that not provides React Node instance in future.'
          ),
          t
        );
      },
    }),
    n
  );
}
var NI = ['title', 'attribute', 'elementRef'],
  FI = [
    'style',
    'className',
    'eventKey',
    'warnKey',
    'disabled',
    'itemIcon',
    'children',
    'role',
    'onMouseEnter',
    'onMouseLeave',
    'onClick',
    'onKeyDown',
    'onFocus',
  ],
  LI = ['active'],
  AI = (function (e) {
    co(n, e);
    var t = fo(n);
    function n() {
      return At(this, n), t.apply(this, arguments);
    }
    return (
      zt(n, [
        {
          key: 'render',
          value: function () {
            var o = this.props,
              i = o.title,
              a = o.attribute,
              l = o.elementRef,
              s = je(o, NI),
              u = vo(s, [
                'eventKey',
                'popupClassName',
                'popupOffset',
                'onTitleClick',
              ]);
            return (
              Yt(
                !a,
                '`attribute` of Menu.Item is deprecated. Please pass attribute directly.'
              ),
              f.createElement(
                Er.Item,
                ce({}, a, { title: typeof i == 'string' ? i : void 0 }, u, {
                  ref: l,
                })
              )
            );
          },
        },
      ]),
      n
    );
  })(f.Component),
  zI = f.forwardRef(function (e, t) {
    var n = e.style,
      r = e.className,
      o = e.eventKey;
    e.warnKey;
    var i = e.disabled,
      a = e.itemIcon,
      l = e.children,
      s = e.role,
      u = e.onMouseEnter,
      c = e.onMouseLeave,
      d = e.onClick,
      v = e.onKeyDown,
      w = e.onFocus,
      g = je(e, FI),
      S = wS(o),
      y = f.useContext(er),
      p = y.prefixCls,
      m = y.onItemClick,
      h = y.disabled,
      C = y.overflowDisabled,
      b = y.itemIcon,
      x = y.selectedKeys,
      E = y.onActive,
      P = f.useContext(nm),
      I = P._internalRenderMenuItem,
      M = ''.concat(p, '-item'),
      A = f.useRef(),
      j = f.useRef(),
      L = h || i,
      F = Vu(t, j),
      U = Yi(o),
      T = function (le) {
        return {
          key: o,
          keyPath: Z(U).reverse(),
          item: A.current,
          domEvent: le,
        };
      },
      R = a || b,
      k = kS(o, L, u, c),
      O = k.active,
      _ = je(k, LI),
      z = x.includes(o),
      B = PS(U.length),
      K = function (le) {
        if (!L) {
          var he = T(le);
          d == null || d(fu(he)), m(he);
        }
      },
      D = function (le) {
        if ((v == null || v(le), le.which === J.ENTER)) {
          var he = T(le);
          d == null || d(fu(he)), m(he);
        }
      },
      q = function (le) {
        E(o), w == null || w(le);
      },
      te = {};
    e.role === 'option' && (te['aria-selected'] = z);
    var ne = f.createElement(
      AI,
      ce(
        {
          ref: A,
          elementRef: F,
          role: s === null ? 'none' : s || 'menuitem',
          tabIndex: i ? null : -1,
          'data-menu-id': C && S ? null : S,
        },
        vo(g, ['extra']),
        _,
        te,
        {
          component: 'li',
          'aria-disabled': i,
          style: N(N({}, B), n),
          className: ue(
            M,
            $(
              $(
                $({}, ''.concat(M, '-active'), O),
                ''.concat(M, '-selected'),
                z
              ),
              ''.concat(M, '-disabled'),
              L
            ),
            r
          ),
          onClick: K,
          onKeyDown: D,
          onFocus: q,
        }
      ),
      l,
      f.createElement(RS, {
        props: N(N({}, e), {}, { isSelected: z }),
        icon: R,
      })
    );
    return I && (ne = I(ne, e, { selected: z })), ne;
  });
function jI(e, t) {
  var n = e.eventKey,
    r = Ju(),
    o = Yi(n);
  return (
    f.useEffect(
      function () {
        if (r)
          return (
            r.registerPath(n, o),
            function () {
              r.unregisterPath(n, o);
            }
          );
      },
      [o]
    ),
    r ? null : f.createElement(zI, ce({}, e, { ref: t }))
  );
}
const ec = f.forwardRef(jI);
var DI = ['className', 'children'],
  BI = function (t, n) {
    var r = t.className,
      o = t.children,
      i = je(t, DI),
      a = f.useContext(er),
      l = a.prefixCls,
      s = a.mode,
      u = a.rtl;
    return f.createElement(
      'ul',
      ce(
        {
          className: ue(
            l,
            u && ''.concat(l, '-rtl'),
            ''.concat(l, '-sub'),
            ''.concat(l, '-').concat(s === 'inline' ? 'inline' : 'vertical'),
            r
          ),
          role: 'menu',
        },
        i,
        { 'data-menu-list': !0, ref: n }
      ),
      o
    );
  },
  im = f.forwardRef(BI);
im.displayName = 'SubMenuList';
function am(e, t) {
  return zo(e).map(function (n, r) {
    if (f.isValidElement(n)) {
      var o,
        i,
        a = n.key,
        l =
          (o = (i = n.props) === null || i === void 0 ? void 0 : i.eventKey) !==
            null && o !== void 0
            ? o
            : a,
        s = l == null;
      s && (l = 'tmp_key-'.concat([].concat(Z(t), [r]).join('-')));
      var u = { key: l, eventKey: l };
      return f.cloneElement(n, u);
    }
    return n;
  });
}
var Ht = { adjustX: 1, adjustY: 1 },
  VI = {
    topLeft: { points: ['bl', 'tl'], overflow: Ht },
    topRight: { points: ['br', 'tr'], overflow: Ht },
    bottomLeft: { points: ['tl', 'bl'], overflow: Ht },
    bottomRight: { points: ['tr', 'br'], overflow: Ht },
    leftTop: { points: ['tr', 'tl'], overflow: Ht },
    leftBottom: { points: ['br', 'bl'], overflow: Ht },
    rightTop: { points: ['tl', 'tr'], overflow: Ht },
    rightBottom: { points: ['bl', 'br'], overflow: Ht },
  },
  HI = {
    topLeft: { points: ['bl', 'tl'], overflow: Ht },
    topRight: { points: ['br', 'tr'], overflow: Ht },
    bottomLeft: { points: ['tl', 'bl'], overflow: Ht },
    bottomRight: { points: ['tr', 'br'], overflow: Ht },
    rightTop: { points: ['tr', 'tl'], overflow: Ht },
    rightBottom: { points: ['br', 'bl'], overflow: Ht },
    leftTop: { points: ['tl', 'tr'], overflow: Ht },
    leftBottom: { points: ['bl', 'br'], overflow: Ht },
  };
function IS(e, t, n) {
  if (t) return t;
  if (n) return n[e] || n.other;
}
var UI = {
  horizontal: 'bottomLeft',
  vertical: 'rightTop',
  'vertical-left': 'rightTop',
  'vertical-right': 'leftTop',
};
function WI(e) {
  var t = e.prefixCls,
    n = e.visible,
    r = e.children,
    o = e.popup,
    i = e.popupStyle,
    a = e.popupClassName,
    l = e.popupOffset,
    s = e.disabled,
    u = e.mode,
    c = e.onVisibleChange,
    d = f.useContext(er),
    v = d.getPopupContainer,
    w = d.rtl,
    g = d.subMenuOpenDelay,
    S = d.subMenuCloseDelay,
    y = d.builtinPlacements,
    p = d.triggerSubMenuAction,
    m = d.forceSubMenuRender,
    h = d.rootClassName,
    C = d.motion,
    b = d.defaultMotions,
    x = f.useState(!1),
    E = V(x, 2),
    P = E[0],
    I = E[1],
    M = N(w ? N({}, HI) : N({}, VI), y),
    A = UI[u],
    j = IS(u, C, b),
    L = f.useRef(j);
  u !== 'inline' && (L.current = j);
  var F = N(
      N({}, L.current),
      {},
      {
        leavedClassName: ''.concat(t, '-hidden'),
        removeOnLeave: !1,
        motionAppear: !0,
      }
    ),
    U = f.useRef();
  return (
    f.useEffect(
      function () {
        return (
          (U.current = br(function () {
            I(n);
          })),
          function () {
            br.cancel(U.current);
          }
        );
      },
      [n]
    ),
    f.createElement(
      fS,
      {
        prefixCls: t,
        popupClassName: ue(
          ''.concat(t, '-popup'),
          $({}, ''.concat(t, '-rtl'), w),
          a,
          h
        ),
        stretch: u === 'horizontal' ? 'minWidth' : null,
        getPopupContainer: v,
        builtinPlacements: M,
        popupPlacement: A,
        popupVisible: P,
        popup: o,
        popupStyle: i,
        popupAlign: l && { offset: l },
        action: s ? [] : [p],
        mouseEnterDelay: g,
        mouseLeaveDelay: S,
        onPopupVisibleChange: c,
        forceRender: m,
        popupMotion: F,
        fresh: !0,
      },
      r
    )
  );
}
function KI(e) {
  var t = e.id,
    n = e.open,
    r = e.keyPath,
    o = e.children,
    i = 'inline',
    a = f.useContext(er),
    l = a.prefixCls,
    s = a.forceSubMenuRender,
    u = a.motion,
    c = a.defaultMotions,
    d = a.mode,
    v = f.useRef(!1);
  v.current = d === i;
  var w = f.useState(!v.current),
    g = V(w, 2),
    S = g[0],
    y = g[1],
    p = v.current ? n : !1;
  f.useEffect(
    function () {
      v.current && y(!1);
    },
    [d]
  );
  var m = N({}, IS(i, u, c));
  r.length > 1 && (m.motionAppear = !1);
  var h = m.onVisibleChanged;
  return (
    (m.onVisibleChanged = function (C) {
      return !v.current && !C && y(!0), h == null ? void 0 : h(C);
    }),
    S
      ? null
      : f.createElement(
          ml,
          { mode: i, locked: !v.current },
          f.createElement(
            Yu,
            ce({ visible: p }, m, {
              forceRender: s,
              removeOnLeave: !1,
              leavedClassName: ''.concat(l, '-hidden'),
            }),
            function (C) {
              var b = C.className,
                x = C.style;
              return f.createElement(im, { id: t, className: b, style: x }, o);
            }
          )
        )
  );
}
var GI = [
    'style',
    'className',
    'title',
    'eventKey',
    'warnKey',
    'disabled',
    'internalPopupClose',
    'children',
    'itemIcon',
    'expandIcon',
    'popupClassName',
    'popupOffset',
    'popupStyle',
    'onClick',
    'onMouseEnter',
    'onMouseLeave',
    'onTitleClick',
    'onTitleMouseEnter',
    'onTitleMouseLeave',
  ],
  qI = ['active'],
  XI = f.forwardRef(function (e, t) {
    var n = e.style,
      r = e.className,
      o = e.title,
      i = e.eventKey;
    e.warnKey;
    var a = e.disabled,
      l = e.internalPopupClose,
      s = e.children,
      u = e.itemIcon,
      c = e.expandIcon,
      d = e.popupClassName,
      v = e.popupOffset,
      w = e.popupStyle,
      g = e.onClick,
      S = e.onMouseEnter,
      y = e.onMouseLeave,
      p = e.onTitleClick,
      m = e.onTitleMouseEnter,
      h = e.onTitleMouseLeave,
      C = je(e, GI),
      b = wS(i),
      x = f.useContext(er),
      E = x.prefixCls,
      P = x.mode,
      I = x.openKeys,
      M = x.disabled,
      A = x.overflowDisabled,
      j = x.activeKey,
      L = x.selectedKeys,
      F = x.itemIcon,
      U = x.expandIcon,
      T = x.onItemClick,
      R = x.onOpenChange,
      k = x.onActive,
      O = f.useContext(nm),
      _ = O._internalRenderSubMenuItem,
      z = f.useContext(xS),
      B = z.isSubPathKey,
      K = Yi(),
      D = ''.concat(E, '-submenu'),
      q = M || a,
      te = f.useRef(),
      ne = f.useRef(),
      xe = u ?? F,
      le = c ?? U,
      he = I.includes(i),
      Ee = !A && he,
      ge = B(L, i),
      Ne = kS(i, q, m, h),
      Oe = Ne.active,
      Pe = je(Ne, qI),
      $e = f.useState(!1),
      et = V($e, 2),
      ye = et[0],
      De = et[1],
      ve = function (it) {
        q || De(it);
      },
      ie = function (it) {
        ve(!0), S == null || S({ key: i, domEvent: it });
      },
      Be = function (it) {
        ve(!1), y == null || y({ key: i, domEvent: it });
      },
      Q = f.useMemo(
        function () {
          return Oe || (P !== 'inline' ? ye || B([j], i) : !1);
        },
        [P, Oe, j, ye, i, B]
      ),
      Ae = PS(K.length),
      Ke = function (it) {
        q ||
          (p == null || p({ key: i, domEvent: it }),
          P === 'inline' && R(i, !he));
      },
      we = wa(function (me) {
        g == null || g(fu(me)), T(me);
      }),
      yt = function (it) {
        P !== 'inline' && R(i, it);
      },
      xt = function () {
        k(i);
      },
      tt = b && ''.concat(b, '-popup'),
      Et = f.createElement(
        'div',
        ce(
          {
            role: 'menuitem',
            style: Ae,
            className: ''.concat(D, '-title'),
            tabIndex: q ? null : -1,
            ref: te,
            title: typeof o == 'string' ? o : null,
            'data-menu-id': A && b ? null : b,
            'aria-expanded': Ee,
            'aria-haspopup': !0,
            'aria-controls': tt,
            'aria-disabled': q,
            onClick: Ke,
            onFocus: xt,
          },
          Pe
        ),
        o,
        f.createElement(
          RS,
          {
            icon: P !== 'horizontal' ? le : void 0,
            props: N(N({}, e), {}, { isOpen: Ee, isSubMenu: !0 }),
          },
          f.createElement('i', { className: ''.concat(D, '-arrow') })
        )
      ),
      dt = f.useRef(P);
    if (
      (P !== 'inline' && K.length > 1
        ? (dt.current = 'vertical')
        : (dt.current = P),
      !A)
    ) {
      var ot = dt.current;
      Et = f.createElement(
        WI,
        {
          mode: ot,
          prefixCls: D,
          visible: !l && Ee && P !== 'inline',
          popupClassName: d,
          popupOffset: v,
          popupStyle: w,
          popup: f.createElement(
            ml,
            { mode: ot === 'horizontal' ? 'vertical' : ot },
            f.createElement(im, { id: tt, ref: ne }, s)
          ),
          disabled: q,
          onVisibleChange: yt,
        },
        Et
      );
    }
    var Ve = f.createElement(
      Er.Item,
      ce({ ref: t, role: 'none' }, C, {
        component: 'li',
        style: n,
        className: ue(
          D,
          ''.concat(D, '-').concat(P),
          r,
          $(
            $(
              $($({}, ''.concat(D, '-open'), Ee), ''.concat(D, '-active'), Q),
              ''.concat(D, '-selected'),
              ge
            ),
            ''.concat(D, '-disabled'),
            q
          )
        ),
        onMouseEnter: ie,
        onMouseLeave: Be,
      }),
      Et,
      !A && f.createElement(KI, { id: tt, open: Ee, keyPath: K }, s)
    );
    return (
      _ && (Ve = _(Ve, e, { selected: ge, active: Q, open: Ee, disabled: q })),
      f.createElement(
        ml,
        {
          onItemClick: we,
          mode: P === 'horizontal' ? 'vertical' : P,
          itemIcon: xe,
          expandIcon: le,
        },
        Ve
      )
    );
  }),
  tc = f.forwardRef(function (e, t) {
    var n = e.eventKey,
      r = e.children,
      o = Yi(n),
      i = am(r, o),
      a = Ju();
    f.useEffect(
      function () {
        if (a)
          return (
            a.registerPath(n, o),
            function () {
              a.unregisterPath(n, o);
            }
          );
      },
      [o]
    );
    var l;
    return (
      a ? (l = i) : (l = f.createElement(XI, ce({ ref: t }, e), i)),
      f.createElement(bS.Provider, { value: o }, l)
    );
  });
function lm(e) {
  var t = e.className,
    n = e.style,
    r = f.useContext(er),
    o = r.prefixCls,
    i = Ju();
  return i
    ? null
    : f.createElement('li', {
        role: 'separator',
        className: ue(''.concat(o, '-item-divider'), t),
        style: n,
      });
}
var QI = ['className', 'title', 'eventKey', 'children'],
  YI = f.forwardRef(function (e, t) {
    var n = e.className,
      r = e.title;
    e.eventKey;
    var o = e.children,
      i = je(e, QI),
      a = f.useContext(er),
      l = a.prefixCls,
      s = ''.concat(l, '-item-group');
    return f.createElement(
      'li',
      ce({ ref: t, role: 'presentation' }, i, {
        onClick: function (c) {
          return c.stopPropagation();
        },
        className: ue(s, n),
      }),
      f.createElement(
        'div',
        {
          role: 'presentation',
          className: ''.concat(s, '-title'),
          title: typeof r == 'string' ? r : void 0,
        },
        r
      ),
      f.createElement(
        'ul',
        { role: 'group', className: ''.concat(s, '-list') },
        o
      )
    );
  }),
  sm = f.forwardRef(function (e, t) {
    var n = e.eventKey,
      r = e.children,
      o = Yi(n),
      i = am(r, o),
      a = Ju();
    return a ? i : f.createElement(YI, ce({ ref: t }, vo(e, ['warnKey'])), i);
  }),
  ZI = ['label', 'children', 'key', 'type', 'extra'];
function Ud(e, t, n) {
  var r = t.item,
    o = t.group,
    i = t.submenu,
    a = t.divider;
  return (e || [])
    .map(function (l, s) {
      if (l && oe(l) === 'object') {
        var u = l,
          c = u.label,
          d = u.children,
          v = u.key,
          w = u.type,
          g = u.extra,
          S = je(u, ZI),
          y = v ?? 'tmp-'.concat(s);
        return d || w === 'group'
          ? w === 'group'
            ? f.createElement(o, ce({ key: y }, S, { title: c }), Ud(d, t, n))
            : f.createElement(i, ce({ key: y }, S, { title: c }), Ud(d, t, n))
          : w === 'divider'
            ? f.createElement(a, ce({ key: y }, S))
            : f.createElement(
                r,
                ce({ key: y }, S, { extra: g }),
                c,
                (!!g || g === 0) &&
                  f.createElement(
                    'span',
                    { className: ''.concat(n, '-item-extra') },
                    g
                  )
              );
      }
      return null;
    })
    .filter(function (l) {
      return l;
    });
}
function ng(e, t, n, r, o) {
  var i = e,
    a = N({ divider: lm, item: ec, group: sm, submenu: tc }, r);
  return t && (i = Ud(t, a, o)), am(i, n);
}
var JI = [
    'prefixCls',
    'rootClassName',
    'style',
    'className',
    'tabIndex',
    'items',
    'children',
    'direction',
    'id',
    'mode',
    'inlineCollapsed',
    'disabled',
    'disabledOverflow',
    'subMenuOpenDelay',
    'subMenuCloseDelay',
    'forceSubMenuRender',
    'defaultOpenKeys',
    'openKeys',
    'activeKey',
    'defaultActiveFirst',
    'selectable',
    'multiple',
    'defaultSelectedKeys',
    'selectedKeys',
    'onSelect',
    'onDeselect',
    'inlineIndent',
    'motion',
    'defaultMotions',
    'triggerSubMenuAction',
    'builtinPlacements',
    'itemIcon',
    'expandIcon',
    'overflowedIndicator',
    'overflowedIndicatorPopupClassName',
    'getPopupContainer',
    'onClick',
    'onOpenChange',
    'onKeyDown',
    'openAnimation',
    'openTransitionName',
    '_internalRenderMenuItem',
    '_internalRenderSubMenuItem',
    '_internalComponents',
  ],
  wo = [],
  eM = f.forwardRef(function (e, t) {
    var n,
      r = e,
      o = r.prefixCls,
      i = o === void 0 ? 'rc-menu' : o,
      a = r.rootClassName,
      l = r.style,
      s = r.className,
      u = r.tabIndex,
      c = u === void 0 ? 0 : u,
      d = r.items,
      v = r.children,
      w = r.direction,
      g = r.id,
      S = r.mode,
      y = S === void 0 ? 'vertical' : S,
      p = r.inlineCollapsed,
      m = r.disabled,
      h = r.disabledOverflow,
      C = r.subMenuOpenDelay,
      b = C === void 0 ? 0.1 : C,
      x = r.subMenuCloseDelay,
      E = x === void 0 ? 0.1 : x,
      P = r.forceSubMenuRender,
      I = r.defaultOpenKeys,
      M = r.openKeys,
      A = r.activeKey,
      j = r.defaultActiveFirst,
      L = r.selectable,
      F = L === void 0 ? !0 : L,
      U = r.multiple,
      T = U === void 0 ? !1 : U,
      R = r.defaultSelectedKeys,
      k = r.selectedKeys,
      O = r.onSelect,
      _ = r.onDeselect,
      z = r.inlineIndent,
      B = z === void 0 ? 24 : z,
      K = r.motion,
      D = r.defaultMotions,
      q = r.triggerSubMenuAction,
      te = q === void 0 ? 'hover' : q,
      ne = r.builtinPlacements,
      xe = r.itemIcon,
      le = r.expandIcon,
      he = r.overflowedIndicator,
      Ee = he === void 0 ? '...' : he,
      ge = r.overflowedIndicatorPopupClassName,
      Ne = r.getPopupContainer,
      Oe = r.onClick,
      Pe = r.onOpenChange,
      $e = r.onKeyDown;
    r.openAnimation, r.openTransitionName;
    var et = r._internalRenderMenuItem,
      ye = r._internalRenderSubMenuItem,
      De = r._internalComponents,
      ve = je(r, JI),
      ie = f.useMemo(
        function () {
          return [ng(v, d, wo, De, i), ng(v, d, wo, {}, i)];
        },
        [v, d, De]
      ),
      Be = V(ie, 2),
      Q = Be[0],
      Ae = Be[1],
      Ke = f.useState(!1),
      we = V(Ke, 2),
      yt = we[0],
      xt = we[1],
      tt = f.useRef(),
      Et = TI(g),
      dt = w === 'rtl',
      ot = Ta(I, {
        value: M,
        postState: function (be) {
          return be || wo;
        },
      }),
      Ve = V(ot, 2),
      me = Ve[0],
      it = Ve[1],
      Gt = function (be) {
        var ke =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        function Ot() {
          it(be), Pe == null || Pe(be);
        }
        ke ? Cl.flushSync(Ot) : Ot();
      },
      St = f.useState(me),
      kt = V(St, 2),
      tr = kt[0],
      Ln = kt[1],
      jt = f.useRef(!1),
      ln = f.useMemo(
        function () {
          return (y === 'inline' || y === 'vertical') && p
            ? ['vertical', p]
            : [y, !1];
        },
        [y, p]
      ),
      Qe = V(ln, 2),
      He = Qe[0],
      Pt = Qe[1],
      Re = He === 'inline',
      ee = f.useState(He),
      Y = V(ee, 2),
      W = Y[0],
      Fe = Y[1],
      Rt = f.useState(Pt),
      Te = V(Rt, 2),
      Ce = Te[0],
      It = Te[1];
    f.useEffect(
      function () {
        Fe(He), It(Pt), jt.current && (Re ? it(tr) : Gt(wo));
      },
      [He, Pt]
    );
    var wt = f.useState(0),
      Dt = V(wt, 2),
      An = Dt[0],
      Or = Dt[1],
      sn = An >= Q.length - 1 || W !== 'horizontal' || h;
    f.useEffect(
      function () {
        Re && Ln(me);
      },
      [me]
    ),
      f.useEffect(function () {
        return (
          (jt.current = !0),
          function () {
            jt.current = !1;
          }
        );
      }, []);
    var Mt = OI(),
      nr = Mt.registerPath,
      xn = Mt.unregisterPath,
      zn = Mt.refreshOverflowKeys,
      nt = Mt.isSubPathKey,
      $r = Mt.getKeyPath,
      rr = Mt.getKeys,
      Ho = Mt.getSubPathKeys,
      vt = f.useMemo(
        function () {
          return { registerPath: nr, unregisterPath: xn };
        },
        [nr, xn]
      ),
      Uo = f.useMemo(
        function () {
          return { isSubPathKey: nt };
        },
        [nt]
      );
    f.useEffect(
      function () {
        zn(
          sn
            ? wo
            : Q.slice(An + 1).map(function (Le) {
                return Le.key;
              })
        );
      },
      [An, sn]
    );
    var Zi = Ta(
        A || (j && ((n = Q[0]) === null || n === void 0 ? void 0 : n.key)),
        { value: A }
      ),
      or = V(Zi, 2),
      ir = or[0],
      mo = or[1],
      Wo = wa(function (Le) {
        mo(Le);
      }),
      Ko = wa(function () {
        mo(void 0);
      });
    f.useImperativeHandle(t, function () {
      return {
        list: tt.current,
        focus: function (be) {
          var ke,
            Ot = rr(),
            $t = Vd(Ot, Et),
            Nr = $t.elements,
            Fr = $t.key2element,
            ea = $t.element2key,
            Xo = rm(tt.current, Nr),
            ho =
              ir ??
              (Xo[0]
                ? ea.get(Xo[0])
                : (ke = Q.find(function (yo) {
                      return !yo.props.disabled;
                    })) === null || ke === void 0
                  ? void 0
                  : ke.key),
            pr = Fr.get(ho);
          if (ho && pr) {
            var go;
            pr == null ||
              (go = pr.focus) === null ||
              go === void 0 ||
              go.call(pr, be);
          }
        },
      };
    });
    var mr = Ta(R || [], {
        value: k,
        postState: function (be) {
          return Array.isArray(be) ? be : be == null ? wo : [be];
        },
      }),
      po = V(mr, 2),
      jn = po[0],
      Dn = po[1],
      Go = function (be) {
        if (F) {
          var ke = be.key,
            Ot = jn.includes(ke),
            $t;
          T
            ? Ot
              ? ($t = jn.filter(function (Fr) {
                  return Fr !== ke;
                }))
              : ($t = [].concat(Z(jn), [ke]))
            : ($t = [ke]),
            Dn($t);
          var Nr = N(N({}, be), {}, { selectedKeys: $t });
          Ot ? _ == null || _(Nr) : O == null || O(Nr);
        }
        !T && me.length && W !== 'inline' && Gt(wo);
      },
      qo = wa(function (Le) {
        Oe == null || Oe(fu(Le)), Go(Le);
      }),
      un = wa(function (Le, be) {
        var ke = me.filter(function ($t) {
          return $t !== Le;
        });
        if (be) ke.push(Le);
        else if (W !== 'inline') {
          var Ot = Ho(Le);
          ke = ke.filter(function ($t) {
            return !Ot.has($t);
          });
        }
        al(me, ke, !0) || Gt(ke, !0);
      }),
      cn = function (be, ke) {
        var Ot = ke ?? !me.includes(be);
        un(be, Ot);
      },
      Tr = RI(W, ir, dt, Et, tt, rr, $r, mo, cn, $e);
    f.useEffect(function () {
      xt(!0);
    }, []);
    var _r = f.useMemo(
        function () {
          return {
            _internalRenderMenuItem: et,
            _internalRenderSubMenuItem: ye,
          };
        },
        [et, ye]
      ),
      En =
        W !== 'horizontal' || h
          ? Q
          : Q.map(function (Le, be) {
              return f.createElement(
                ml,
                { key: Le.key, overflowDisabled: be > An },
                Le
              );
            }),
      Ji = f.createElement(
        Er,
        ce(
          {
            id: g,
            ref: tt,
            prefixCls: ''.concat(i, '-overflow'),
            component: 'ul',
            itemComponent: ec,
            className: ue(
              i,
              ''.concat(i, '-root'),
              ''.concat(i, '-').concat(W),
              s,
              $(
                $({}, ''.concat(i, '-inline-collapsed'), Ce),
                ''.concat(i, '-rtl'),
                dt
              ),
              a
            ),
            dir: w,
            style: l,
            role: 'menu',
            tabIndex: c,
            data: En,
            renderRawItem: function (be) {
              return be;
            },
            renderRawRest: function (be) {
              var ke = be.length,
                Ot = ke ? Q.slice(-ke) : null;
              return f.createElement(
                tc,
                {
                  eventKey: Hd,
                  title: Ee,
                  disabled: sn,
                  internalPopupClose: ke === 0,
                  popupClassName: ge,
                },
                Ot
              );
            },
            maxCount: W !== 'horizontal' || h ? Er.INVALIDATE : Er.RESPONSIVE,
            ssr: 'full',
            'data-menu-list': !0,
            onVisibleChange: function (be) {
              Or(be);
            },
            onKeyDown: Tr,
          },
          ve
        )
      );
    return f.createElement(
      nm.Provider,
      { value: _r },
      f.createElement(
        yS.Provider,
        { value: Et },
        f.createElement(
          ml,
          {
            prefixCls: i,
            rootClassName: a,
            mode: W,
            openKeys: me,
            rtl: dt,
            disabled: m,
            motion: yt ? K : null,
            defaultMotions: yt ? D : null,
            activeKey: ir,
            onActive: Wo,
            onInactive: Ko,
            selectedKeys: jn,
            inlineIndent: B,
            subMenuOpenDelay: b,
            subMenuCloseDelay: E,
            forceSubMenuRender: P,
            builtinPlacements: ne,
            triggerSubMenuAction: te,
            getPopupContainer: Ne,
            itemIcon: xe,
            expandIcon: le,
            onItemClick: qo,
            onOpenChange: un,
          },
          f.createElement(xS.Provider, { value: Uo }, Ji),
          f.createElement(
            'div',
            { style: { display: 'none' }, 'aria-hidden': !0 },
            f.createElement(CS.Provider, { value: vt }, Ae)
          )
        )
      )
    );
  }),
  Il = eM;
Il.Item = ec;
Il.SubMenu = tc;
Il.ItemGroup = sm;
Il.Divider = lm;
var tM = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z',
          },
        },
      ],
    },
    name: 'bars',
    theme: 'outlined',
  },
  nM = function (t, n) {
    return f.createElement(Bo, ce({}, t, { ref: n, icon: tM }));
  },
  rM = f.forwardRef(nM),
  oM = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z',
          },
        },
      ],
    },
    name: 'left',
    theme: 'outlined',
  },
  iM = function (t, n) {
    return f.createElement(Bo, ce({}, t, { ref: n, icon: oM }));
  },
  rg = f.forwardRef(iM);
const aM = (e) => !isNaN(parseFloat(e)) && isFinite(e),
  MS = f.createContext({
    siderHook: { addSider: () => null, removeSider: () => null },
  }),
  lM = (e) => {
    const {
      antCls: t,
      componentCls: n,
      colorText: r,
      footerBg: o,
      headerHeight: i,
      headerPadding: a,
      headerColor: l,
      footerPadding: s,
      fontSize: u,
      bodyBg: c,
      headerBg: d,
    } = e;
    return {
      [n]: {
        display: 'flex',
        flex: 'auto',
        flexDirection: 'column',
        minHeight: 0,
        background: c,
        '&, *': { boxSizing: 'border-box' },
        [`&${n}-has-sider`]: {
          flexDirection: 'row',
          [`> ${n}, > ${n}-content`]: { width: 0 },
        },
        [`${n}-header, &${n}-footer`]: { flex: '0 0 auto' },
        '&-rtl': { direction: 'rtl' },
      },
      [`${n}-header`]: {
        height: i,
        padding: a,
        color: l,
        lineHeight: pe(i),
        background: d,
        [`${t}-menu`]: { lineHeight: 'inherit' },
      },
      [`${n}-footer`]: { padding: s, color: r, fontSize: u, background: o },
      [`${n}-content`]: { flex: 'auto', color: r, minHeight: 0 },
    };
  },
  OS = (e) => {
    const {
        colorBgLayout: t,
        controlHeight: n,
        controlHeightLG: r,
        colorText: o,
        controlHeightSM: i,
        marginXXS: a,
        colorTextLightSolid: l,
        colorBgContainer: s,
      } = e,
      u = r * 1.25;
    return {
      colorBgHeader: '#001529',
      colorBgBody: t,
      colorBgTrigger: '#002140',
      bodyBg: t,
      headerBg: '#001529',
      headerHeight: n * 2,
      headerPadding: `0 ${u}px`,
      headerColor: o,
      footerPadding: `${i}px ${u}px`,
      footerBg: t,
      siderBg: '#001529',
      triggerHeight: r + a * 2,
      triggerBg: '#002140',
      triggerColor: l,
      zeroTriggerWidth: r,
      zeroTriggerHeight: r,
      lightSiderBg: s,
      lightTriggerBg: s,
      lightTriggerColor: o,
    };
  },
  $S = [
    ['colorBgBody', 'bodyBg'],
    ['colorBgHeader', 'headerBg'],
    ['colorBgTrigger', 'triggerBg'],
  ],
  TS = Qu('Layout', (e) => [lM(e)], OS, { deprecatedTokens: $S }),
  sM = (e) => {
    const {
      componentCls: t,
      siderBg: n,
      motionDurationMid: r,
      motionDurationSlow: o,
      antCls: i,
      triggerHeight: a,
      triggerColor: l,
      triggerBg: s,
      headerHeight: u,
      zeroTriggerWidth: c,
      zeroTriggerHeight: d,
      borderRadius: v,
      lightSiderBg: w,
      lightTriggerColor: g,
      lightTriggerBg: S,
      bodyBg: y,
    } = e;
    return {
      [t]: {
        position: 'relative',
        minWidth: 0,
        background: n,
        transition: `all ${r}, background 0s`,
        '&-has-trigger': { paddingBottom: a },
        '&-right': { order: 1 },
        [`${t}-children`]: {
          height: '100%',
          marginTop: -0.1,
          paddingTop: 0.1,
          [`${i}-menu${i}-menu-inline-collapsed`]: { width: 'auto' },
        },
        [`${t}-trigger`]: {
          position: 'fixed',
          bottom: 0,
          zIndex: 1,
          height: a,
          color: l,
          lineHeight: pe(a),
          textAlign: 'center',
          background: s,
          cursor: 'pointer',
          transition: `all ${r}`,
        },
        '&-zero-width': {
          '> *': { overflow: 'hidden' },
          '&-trigger': {
            position: 'absolute',
            top: u,
            insetInlineEnd: e.calc(c).mul(-1).equal(),
            zIndex: 1,
            width: c,
            height: d,
            color: l,
            fontSize: e.fontSizeXL,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: n,
            borderStartStartRadius: 0,
            borderStartEndRadius: v,
            borderEndEndRadius: v,
            borderEndStartRadius: 0,
            cursor: 'pointer',
            transition: `background ${o} ease`,
            '&::after': {
              position: 'absolute',
              inset: 0,
              background: 'transparent',
              transition: `all ${o}`,
              content: '""',
            },
            '&:hover::after': { background: 'rgba(255, 255, 255, 0.2)' },
            '&-right': {
              insetInlineStart: e.calc(c).mul(-1).equal(),
              borderStartStartRadius: v,
              borderStartEndRadius: 0,
              borderEndEndRadius: 0,
              borderEndStartRadius: v,
            },
          },
        },
        '&-light': {
          background: w,
          [`${t}-trigger`]: { color: g, background: S },
          [`${t}-zero-width-trigger`]: {
            color: g,
            background: S,
            border: `1px solid ${y}`,
            borderInlineStart: 0,
          },
        },
      },
    };
  },
  uM = Qu(['Layout', 'Sider'], (e) => [sM(e)], OS, { deprecatedTokens: $S });
var cM = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
const og = {
    xs: '479.98px',
    sm: '575.98px',
    md: '767.98px',
    lg: '991.98px',
    xl: '1199.98px',
    xxl: '1599.98px',
  },
  nc = f.createContext({}),
  fM = (() => {
    let e = 0;
    return function () {
      let t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
      return (e += 1), `${t}${e}`;
    };
  })(),
  _S = f.forwardRef((e, t) => {
    const {
        prefixCls: n,
        className: r,
        trigger: o,
        children: i,
        defaultCollapsed: a = !1,
        theme: l = 'dark',
        style: s = {},
        collapsible: u = !1,
        reverseArrow: c = !1,
        width: d = 200,
        collapsedWidth: v = 80,
        zeroWidthTriggerStyle: w,
        breakpoint: g,
        onCollapse: S,
        onBreakpoint: y,
      } = e,
      p = cM(e, [
        'prefixCls',
        'className',
        'trigger',
        'children',
        'defaultCollapsed',
        'theme',
        'style',
        'collapsible',
        'reverseArrow',
        'width',
        'collapsedWidth',
        'zeroWidthTriggerStyle',
        'breakpoint',
        'onCollapse',
        'onBreakpoint',
      ]),
      { siderHook: m } = f.useContext(MS),
      [h, C] = f.useState('collapsed' in e ? e.collapsed : a),
      [b, x] = f.useState(!1);
    f.useEffect(() => {
      'collapsed' in e && C(e.collapsed);
    }, [e.collapsed]);
    const E = (R, k) => {
        'collapsed' in e || C(R), S == null || S(R, k);
      },
      { getPrefixCls: P } = f.useContext(wn),
      I = P('layout-sider', n),
      [M, A, j] = uM(I),
      L = f.useRef();
    (L.current = (R) => {
      x(R.matches),
        y == null || y(R.matches),
        h !== R.matches && E(R.matches, 'responsive');
    }),
      f.useEffect(() => {
        function R(O) {
          return L.current(O);
        }
        let k;
        if (typeof window < 'u') {
          const { matchMedia: O } = window;
          if (O && g && g in og) {
            k = O(`screen and (max-width: ${og[g]})`);
            try {
              k.addEventListener('change', R);
            } catch {
              k.addListener(R);
            }
            R(k);
          }
        }
        return () => {
          try {
            k == null || k.removeEventListener('change', R);
          } catch {
            k == null || k.removeListener(R);
          }
        };
      }, [g]),
      f.useEffect(() => {
        const R = fM('ant-sider-');
        return m.addSider(R), () => m.removeSider(R);
      }, []);
    const F = () => {
        E(!h, 'clickTrigger');
      },
      U = () => {
        const R = vo(p, ['collapsed']),
          k = h ? v : d,
          O = aM(k) ? `${k}px` : String(k),
          _ =
            parseFloat(String(v || 0)) === 0
              ? f.createElement(
                  'span',
                  {
                    onClick: F,
                    className: ue(
                      `${I}-zero-width-trigger`,
                      `${I}-zero-width-trigger-${c ? 'right' : 'left'}`
                    ),
                    style: w,
                  },
                  o || f.createElement(rM, null)
                )
              : null,
          K = {
            expanded: c ? f.createElement(xh, null) : f.createElement(rg, null),
            collapsed: c
              ? f.createElement(rg, null)
              : f.createElement(xh, null),
          }[h ? 'collapsed' : 'expanded'],
          D =
            o !== null
              ? _ ||
                f.createElement(
                  'div',
                  {
                    className: `${I}-trigger`,
                    onClick: F,
                    style: { width: O },
                  },
                  o || K
                )
              : null,
          q = Object.assign(Object.assign({}, s), {
            flex: `0 0 ${O}`,
            maxWidth: O,
            minWidth: O,
            width: O,
          }),
          te = ue(
            I,
            `${I}-${l}`,
            {
              [`${I}-collapsed`]: !!h,
              [`${I}-has-trigger`]: u && o !== null && !_,
              [`${I}-below`]: !!b,
              [`${I}-zero-width`]: parseFloat(O) === 0,
            },
            r,
            A,
            j
          );
        return f.createElement(
          'aside',
          Object.assign({ className: te }, R, { style: q, ref: t }),
          f.createElement('div', { className: `${I}-children` }, i),
          u || (b && _) ? D : null
        );
      },
      T = f.useMemo(() => ({ siderCollapsed: h }), [h]);
    return M(f.createElement(nc.Provider, { value: T }, U()));
  });
var dM = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z',
          },
        },
      ],
    },
    name: 'ellipsis',
    theme: 'outlined',
  },
  vM = function (t, n) {
    return f.createElement(Bo, ce({}, t, { ref: n, icon: dM }));
  },
  mM = f.forwardRef(vM);
const du = f.createContext({
  prefixCls: '',
  firstLevel: !0,
  inlineCollapsed: !1,
});
var pM = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
const NS = (e) => {
    const { prefixCls: t, className: n, dashed: r } = e,
      o = pM(e, ['prefixCls', 'className', 'dashed']),
      { getPrefixCls: i } = f.useContext(wn),
      a = i('menu', t),
      l = ue({ [`${a}-item-divider-dashed`]: !!r }, n);
    return f.createElement(lm, Object.assign({ className: l }, o));
  },
  FS = (e) => {
    var t;
    const {
        className: n,
        children: r,
        icon: o,
        title: i,
        danger: a,
        extra: l,
      } = e,
      {
        prefixCls: s,
        firstLevel: u,
        direction: c,
        disableMenuItemTitleTooltip: d,
        inlineCollapsed: v,
      } = f.useContext(du),
      w = (h) => {
        const C = r == null ? void 0 : r[0],
          b = f.createElement(
            'span',
            {
              className: ue(`${s}-title-content`, {
                [`${s}-title-content-with-extra`]: !!l || l === 0,
              }),
            },
            r
          );
        return (!o || (f.isValidElement(r) && r.type === 'span')) &&
          r &&
          h &&
          u &&
          typeof C == 'string'
          ? f.createElement(
              'div',
              { className: `${s}-inline-collapsed-noicon` },
              C.charAt(0)
            )
          : b;
      },
      { siderCollapsed: g } = f.useContext(nc);
    let S = i;
    typeof i > 'u' ? (S = u ? r : '') : i === !1 && (S = '');
    const y = { title: S };
    !g && !v && ((y.title = null), (y.open = !1));
    const p = zo(r).length;
    let m = f.createElement(
      ec,
      Object.assign({}, vo(e, ['title', 'icon', 'danger']), {
        className: ue(
          {
            [`${s}-item-danger`]: a,
            [`${s}-item-only-child`]: (o ? p + 1 : p) === 1,
          },
          n
        ),
        title: typeof i == 'string' ? i : void 0,
      }),
      Zu(o, {
        className: ue(
          f.isValidElement(o)
            ? (t = o.props) === null || t === void 0
              ? void 0
              : t.className
            : '',
          `${s}-item-icon`
        ),
      }),
      w(v)
    );
    return (
      d ||
        (m = f.createElement(
          gS,
          Object.assign({}, y, {
            placement: c === 'rtl' ? 'left' : 'right',
            overlayClassName: `${s}-inline-collapsed-tooltip`,
          }),
          m
        )),
      m
    );
  },
  ig = f.createContext(null),
  hM = (e) => {
    const {
      componentCls: t,
      motionDurationSlow: n,
      horizontalLineHeight: r,
      colorSplit: o,
      lineWidth: i,
      lineType: a,
      itemPaddingInline: l,
    } = e;
    return {
      [`${t}-horizontal`]: {
        lineHeight: r,
        border: 0,
        borderBottom: `${pe(i)} ${a} ${o}`,
        boxShadow: 'none',
        '&::after': {
          display: 'block',
          clear: 'both',
          height: 0,
          content: '"\\20"',
        },
        [`${t}-item, ${t}-submenu`]: {
          position: 'relative',
          display: 'inline-block',
          verticalAlign: 'bottom',
          paddingInline: l,
        },
        [`> ${t}-item:hover,
        > ${t}-item-active,
        > ${t}-submenu ${t}-submenu-title:hover`]: {
          backgroundColor: 'transparent',
        },
        [`${t}-item, ${t}-submenu-title`]: {
          transition: [`border-color ${n}`, `background ${n}`].join(','),
        },
        [`${t}-submenu-arrow`]: { display: 'none' },
      },
    };
  },
  gM = (e) => {
    let { componentCls: t, menuArrowOffset: n, calc: r } = e;
    return {
      [`${t}-rtl`]: { direction: 'rtl' },
      [`${t}-submenu-rtl`]: { transformOrigin: '100% 0' },
      [`${t}-rtl${t}-vertical,
    ${t}-submenu-rtl ${t}-vertical`]: {
        [`${t}-submenu-arrow`]: {
          '&::before': {
            transform: `rotate(-45deg) translateY(${pe(r(n).mul(-1).equal())})`,
          },
          '&::after': { transform: `rotate(45deg) translateY(${pe(n)})` },
        },
      },
    };
  },
  ag = (e) => Object.assign({}, Jk(e)),
  lg = (e, t) => {
    const {
      componentCls: n,
      itemColor: r,
      itemSelectedColor: o,
      groupTitleColor: i,
      itemBg: a,
      subMenuItemBg: l,
      itemSelectedBg: s,
      activeBarHeight: u,
      activeBarWidth: c,
      activeBarBorderWidth: d,
      motionDurationSlow: v,
      motionEaseInOut: w,
      motionEaseOut: g,
      itemPaddingInline: S,
      motionDurationMid: y,
      itemHoverColor: p,
      lineType: m,
      colorSplit: h,
      itemDisabledColor: C,
      dangerItemColor: b,
      dangerItemHoverColor: x,
      dangerItemSelectedColor: E,
      dangerItemActiveBg: P,
      dangerItemSelectedBg: I,
      popupBg: M,
      itemHoverBg: A,
      itemActiveBg: j,
      menuSubMenuBg: L,
      horizontalItemSelectedColor: F,
      horizontalItemSelectedBg: U,
      horizontalItemBorderRadius: T,
      horizontalItemHoverBg: R,
    } = e;
    return {
      [`${n}-${t}, ${n}-${t} > ${n}`]: {
        color: r,
        background: a,
        [`&${n}-root:focus-visible`]: Object.assign({}, ag(e)),
        [`${n}-item`]: { '&-group-title, &-extra': { color: i } },
        [`${n}-submenu-selected`]: { [`> ${n}-submenu-title`]: { color: o } },
        [`${n}-item, ${n}-submenu-title`]: {
          color: r,
          [`&:not(${n}-item-disabled):focus-visible`]: Object.assign({}, ag(e)),
        },
        [`${n}-item-disabled, ${n}-submenu-disabled`]: {
          color: `${C} !important`,
        },
        [`${n}-item:not(${n}-item-selected):not(${n}-submenu-selected)`]: {
          [`&:hover, > ${n}-submenu-title:hover`]: { color: p },
        },
        [`&:not(${n}-horizontal)`]: {
          [`${n}-item:not(${n}-item-selected)`]: {
            '&:hover': { backgroundColor: A },
            '&:active': { backgroundColor: j },
          },
          [`${n}-submenu-title`]: {
            '&:hover': { backgroundColor: A },
            '&:active': { backgroundColor: j },
          },
        },
        [`${n}-item-danger`]: {
          color: b,
          [`&${n}-item:hover`]: {
            [`&:not(${n}-item-selected):not(${n}-submenu-selected)`]: {
              color: x,
            },
          },
          [`&${n}-item:active`]: { background: P },
        },
        [`${n}-item a`]: { '&, &:hover': { color: 'inherit' } },
        [`${n}-item-selected`]: {
          color: o,
          [`&${n}-item-danger`]: { color: E },
          'a, a:hover': { color: 'inherit' },
        },
        [`& ${n}-item-selected`]: {
          backgroundColor: s,
          [`&${n}-item-danger`]: { backgroundColor: I },
        },
        [`&${n}-submenu > ${n}`]: { backgroundColor: L },
        [`&${n}-popup > ${n}`]: { backgroundColor: M },
        [`&${n}-submenu-popup > ${n}`]: { backgroundColor: M },
        [`&${n}-horizontal`]: Object.assign(
          Object.assign({}, t === 'dark' ? { borderBottom: 0 } : {}),
          {
            [`> ${n}-item, > ${n}-submenu`]: {
              top: d,
              marginTop: e.calc(d).mul(-1).equal(),
              marginBottom: 0,
              borderRadius: T,
              '&::after': {
                position: 'absolute',
                insetInline: S,
                bottom: 0,
                borderBottom: `${pe(u)} solid transparent`,
                transition: `border-color ${v} ${w}`,
                content: '""',
              },
              '&:hover, &-active, &-open': {
                background: R,
                '&::after': { borderBottomWidth: u, borderBottomColor: F },
              },
              '&-selected': {
                color: F,
                backgroundColor: U,
                '&:hover': { backgroundColor: U },
                '&::after': { borderBottomWidth: u, borderBottomColor: F },
              },
            },
          }
        ),
        [`&${n}-root`]: {
          [`&${n}-inline, &${n}-vertical`]: {
            borderInlineEnd: `${pe(d)} ${m} ${h}`,
          },
        },
        [`&${n}-inline`]: {
          [`${n}-sub${n}-inline`]: { background: l },
          [`${n}-item`]: {
            position: 'relative',
            '&::after': {
              position: 'absolute',
              insetBlock: 0,
              insetInlineEnd: 0,
              borderInlineEnd: `${pe(c)} solid ${o}`,
              transform: 'scaleY(0.0001)',
              opacity: 0,
              transition: [`transform ${y} ${g}`, `opacity ${y} ${g}`].join(
                ','
              ),
              content: '""',
            },
            [`&${n}-item-danger`]: { '&::after': { borderInlineEndColor: E } },
          },
          [`${n}-selected, ${n}-item-selected`]: {
            '&::after': {
              transform: 'scaleY(1)',
              opacity: 1,
              transition: [`transform ${y} ${w}`, `opacity ${y} ${w}`].join(
                ','
              ),
            },
          },
        },
      },
    };
  },
  sg = (e) => {
    const {
        componentCls: t,
        itemHeight: n,
        itemMarginInline: r,
        padding: o,
        menuArrowSize: i,
        marginXS: a,
        itemMarginBlock: l,
        itemWidth: s,
        itemPaddingInline: u,
      } = e,
      c = e.calc(i).add(o).add(a).equal();
    return {
      [`${t}-item`]: { position: 'relative', overflow: 'hidden' },
      [`${t}-item, ${t}-submenu-title`]: {
        height: n,
        lineHeight: pe(n),
        paddingInline: u,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        marginInline: r,
        marginBlock: l,
        width: s,
      },
      [`> ${t}-item,
            > ${t}-submenu > ${t}-submenu-title`]: {
        height: n,
        lineHeight: pe(n),
      },
      [`${t}-item-group-list ${t}-submenu-title,
            ${t}-submenu-title`]: { paddingInlineEnd: c },
    };
  },
  yM = (e) => {
    const {
        componentCls: t,
        iconCls: n,
        itemHeight: r,
        colorTextLightSolid: o,
        dropdownWidth: i,
        controlHeightLG: a,
        motionEaseOut: l,
        paddingXL: s,
        itemMarginInline: u,
        fontSizeLG: c,
        motionDurationFast: d,
        motionDurationSlow: v,
        paddingXS: w,
        boxShadowSecondary: g,
        collapsedWidth: S,
        collapsedIconSize: y,
      } = e,
      p = {
        height: r,
        lineHeight: pe(r),
        listStylePosition: 'inside',
        listStyleType: 'disc',
      };
    return [
      {
        [t]: {
          '&-inline, &-vertical': Object.assign(
            { [`&${t}-root`]: { boxShadow: 'none' } },
            sg(e)
          ),
        },
        [`${t}-submenu-popup`]: {
          [`${t}-vertical`]: Object.assign(Object.assign({}, sg(e)), {
            boxShadow: g,
          }),
        },
      },
      {
        [`${t}-submenu-popup ${t}-vertical${t}-sub`]: {
          minWidth: i,
          maxHeight: `calc(100vh - ${pe(e.calc(a).mul(2.5).equal())})`,
          padding: '0',
          overflow: 'hidden',
          borderInlineEnd: 0,
          "&:not([class*='-active'])": {
            overflowX: 'hidden',
            overflowY: 'auto',
          },
        },
      },
      {
        [`${t}-inline`]: {
          width: '100%',
          [`&${t}-root`]: {
            [`${t}-item, ${t}-submenu-title`]: {
              display: 'flex',
              alignItems: 'center',
              transition: [
                `border-color ${v}`,
                `background ${v}`,
                `padding ${d} ${l}`,
              ].join(','),
              [`> ${t}-title-content`]: {
                flex: 'auto',
                minWidth: 0,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              },
              '> *': { flex: 'none' },
            },
          },
          [`${t}-sub${t}-inline`]: {
            padding: 0,
            border: 0,
            borderRadius: 0,
            boxShadow: 'none',
            [`& > ${t}-submenu > ${t}-submenu-title`]: p,
            [`& ${t}-item-group-title`]: { paddingInlineStart: s },
          },
          [`${t}-item`]: p,
        },
      },
      {
        [`${t}-inline-collapsed`]: {
          width: S,
          [`&${t}-root`]: {
            [`${t}-item, ${t}-submenu ${t}-submenu-title`]: {
              [`> ${t}-inline-collapsed-noicon`]: {
                fontSize: c,
                textAlign: 'center',
              },
            },
          },
          [`> ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-submenu > ${t}-submenu-title,
          > ${t}-submenu > ${t}-submenu-title`]: {
            insetInlineStart: 0,
            paddingInline: `calc(50% - ${pe(e.calc(c).div(2).equal())} - ${pe(u)})`,
            textOverflow: 'clip',
            [`
            ${t}-submenu-arrow,
            ${t}-submenu-expand-icon
          `]: { opacity: 0 },
            [`${t}-item-icon, ${n}`]: {
              margin: 0,
              fontSize: y,
              lineHeight: pe(r),
              '+ span': { display: 'inline-block', opacity: 0 },
            },
          },
          [`${t}-item-icon, ${n}`]: { display: 'inline-block' },
          '&-tooltip': {
            pointerEvents: 'none',
            [`${t}-item-icon, ${n}`]: { display: 'none' },
            'a, a:hover': { color: o },
          },
          [`${t}-item-group-title`]: Object.assign(Object.assign({}, Qk), {
            paddingInline: w,
          }),
        },
      },
    ];
  },
  ug = (e) => {
    const {
      componentCls: t,
      motionDurationSlow: n,
      motionDurationMid: r,
      motionEaseInOut: o,
      motionEaseOut: i,
      iconCls: a,
      iconSize: l,
      iconMarginInlineEnd: s,
    } = e;
    return {
      [`${t}-item, ${t}-submenu-title`]: {
        position: 'relative',
        display: 'block',
        margin: 0,
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        transition: [
          `border-color ${n}`,
          `background ${n}`,
          `padding calc(${n} + 0.1s) ${o}`,
        ].join(','),
        [`${t}-item-icon, ${a}`]: {
          minWidth: l,
          fontSize: l,
          transition: [
            `font-size ${r} ${i}`,
            `margin ${n} ${o}`,
            `color ${n}`,
          ].join(','),
          '+ span': {
            marginInlineStart: s,
            opacity: 1,
            transition: [`opacity ${n} ${o}`, `margin ${n}`, `color ${n}`].join(
              ','
            ),
          },
        },
        [`${t}-item-icon`]: Object.assign({}, $1()),
        [`&${t}-item-only-child`]: {
          [`> ${a}, > ${t}-item-icon`]: { marginInlineEnd: 0 },
        },
      },
      [`${t}-item-disabled, ${t}-submenu-disabled`]: {
        background: 'none !important',
        cursor: 'not-allowed',
        '&::after': { borderColor: 'transparent !important' },
        a: { color: 'inherit !important' },
        [`> ${t}-submenu-title`]: {
          color: 'inherit !important',
          cursor: 'not-allowed',
        },
      },
    };
  },
  cg = (e) => {
    const {
      componentCls: t,
      motionDurationSlow: n,
      motionEaseInOut: r,
      borderRadius: o,
      menuArrowSize: i,
      menuArrowOffset: a,
    } = e;
    return {
      [`${t}-submenu`]: {
        '&-expand-icon, &-arrow': {
          position: 'absolute',
          top: '50%',
          insetInlineEnd: e.margin,
          width: i,
          color: 'currentcolor',
          transform: 'translateY(-50%)',
          transition: `transform ${n} ${r}, opacity ${n}`,
        },
        '&-arrow': {
          '&::before, &::after': {
            position: 'absolute',
            width: e.calc(i).mul(0.6).equal(),
            height: e.calc(i).mul(0.15).equal(),
            backgroundColor: 'currentcolor',
            borderRadius: o,
            transition: [
              `background ${n} ${r}`,
              `transform ${n} ${r}`,
              `top ${n} ${r}`,
              `color ${n} ${r}`,
            ].join(','),
            content: '""',
          },
          '&::before': {
            transform: `rotate(45deg) translateY(${pe(e.calc(a).mul(-1).equal())})`,
          },
          '&::after': { transform: `rotate(-45deg) translateY(${pe(a)})` },
        },
      },
    };
  },
  SM = (e) => {
    const {
      antCls: t,
      componentCls: n,
      fontSize: r,
      motionDurationSlow: o,
      motionDurationMid: i,
      motionEaseInOut: a,
      paddingXS: l,
      padding: s,
      colorSplit: u,
      lineWidth: c,
      zIndexPopup: d,
      borderRadiusLG: v,
      subMenuItemBorderRadius: w,
      menuArrowSize: g,
      menuArrowOffset: S,
      lineType: y,
      groupTitleLineHeight: p,
      groupTitleFontSize: m,
    } = e;
    return [
      {
        '': {
          [n]: Object.assign(Object.assign({}, dh()), {
            '&-hidden': { display: 'none' },
          }),
        },
        [`${n}-submenu-hidden`]: { display: 'none' },
      },
      {
        [n]: Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(Object.assign(Object.assign({}, O1(e)), dh()), {
                  marginBottom: 0,
                  paddingInlineStart: 0,
                  fontSize: r,
                  lineHeight: 0,
                  listStyle: 'none',
                  outline: 'none',
                  transition: `width ${o} cubic-bezier(0.2, 0, 0, 1) 0s`,
                  'ul, ol': { margin: 0, padding: 0, listStyle: 'none' },
                  '&-overflow': {
                    display: 'flex',
                    [`${n}-item`]: { flex: 'none' },
                  },
                  [`${n}-item, ${n}-submenu, ${n}-submenu-title`]: {
                    borderRadius: e.itemBorderRadius,
                  },
                  [`${n}-item-group-title`]: {
                    padding: `${pe(l)} ${pe(s)}`,
                    fontSize: m,
                    lineHeight: p,
                    transition: `all ${o}`,
                  },
                  [`&-horizontal ${n}-submenu`]: {
                    transition: [
                      `border-color ${o} ${a}`,
                      `background ${o} ${a}`,
                    ].join(','),
                  },
                  [`${n}-submenu, ${n}-submenu-inline`]: {
                    transition: [
                      `border-color ${o} ${a}`,
                      `background ${o} ${a}`,
                      `padding ${i} ${a}`,
                    ].join(','),
                  },
                  [`${n}-submenu ${n}-sub`]: {
                    cursor: 'initial',
                    transition: [
                      `background ${o} ${a}`,
                      `padding ${o} ${a}`,
                    ].join(','),
                  },
                  [`${n}-title-content`]: {
                    transition: `color ${o}`,
                    '&-with-extra': {
                      display: 'inline-flex',
                      alignItems: 'center',
                      width: '100%',
                    },
                    [`> ${t}-typography-ellipsis-single-line`]: {
                      display: 'inline',
                      verticalAlign: 'unset',
                    },
                    [`${n}-item-extra`]: {
                      marginInlineStart: 'auto',
                      paddingInlineStart: e.padding,
                      fontSize: e.fontSizeSM,
                    },
                  },
                  [`${n}-item a`]: {
                    '&::before': {
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'transparent',
                      content: '""',
                    },
                  },
                  [`${n}-item-divider`]: {
                    overflow: 'hidden',
                    lineHeight: 0,
                    borderColor: u,
                    borderStyle: y,
                    borderWidth: 0,
                    borderTopWidth: c,
                    marginBlock: c,
                    padding: 0,
                    '&-dashed': { borderStyle: 'dashed' },
                  },
                }),
                ug(e)
              ),
              {
                [`${n}-item-group`]: {
                  [`${n}-item-group-list`]: {
                    margin: 0,
                    padding: 0,
                    [`${n}-item, ${n}-submenu-title`]: {
                      paddingInline: `${pe(e.calc(r).mul(2).equal())} ${pe(s)}`,
                    },
                  },
                },
                '&-submenu': {
                  '&-popup': {
                    position: 'absolute',
                    zIndex: d,
                    borderRadius: v,
                    boxShadow: 'none',
                    transformOrigin: '0 0',
                    [`&${n}-submenu`]: { background: 'transparent' },
                    '&::before': {
                      position: 'absolute',
                      inset: 0,
                      zIndex: -1,
                      width: '100%',
                      height: '100%',
                      opacity: 0,
                      content: '""',
                    },
                    [`> ${n}`]: Object.assign(
                      Object.assign(
                        Object.assign({ borderRadius: v }, ug(e)),
                        cg(e)
                      ),
                      {
                        [`${n}-item, ${n}-submenu > ${n}-submenu-title`]: {
                          borderRadius: w,
                        },
                        [`${n}-submenu-title::after`]: {
                          transition: `transform ${o} ${a}`,
                        },
                      }
                    ),
                  },
                  '\n          &-placement-leftTop,\n          &-placement-bottomRight,\n          ':
                    { transformOrigin: '100% 0' },
                  '\n          &-placement-leftBottom,\n          &-placement-topRight,\n          ':
                    { transformOrigin: '100% 100%' },
                  '\n          &-placement-rightBottom,\n          &-placement-topLeft,\n          ':
                    { transformOrigin: '0 100%' },
                  '\n          &-placement-bottomLeft,\n          &-placement-rightTop,\n          ':
                    { transformOrigin: '0 0' },
                  '\n          &-placement-leftTop,\n          &-placement-leftBottom\n          ':
                    { paddingInlineEnd: e.paddingXS },
                  '\n          &-placement-rightTop,\n          &-placement-rightBottom\n          ':
                    { paddingInlineStart: e.paddingXS },
                  '\n          &-placement-topRight,\n          &-placement-topLeft\n          ':
                    { paddingBottom: e.paddingXS },
                  '\n          &-placement-bottomRight,\n          &-placement-bottomLeft\n          ':
                    { paddingTop: e.paddingXS },
                },
              }
            ),
            cg(e)
          ),
          {
            [`&-inline-collapsed ${n}-submenu-arrow,
        &-inline ${n}-submenu-arrow`]: {
              '&::before': { transform: `rotate(-45deg) translateX(${pe(S)})` },
              '&::after': {
                transform: `rotate(45deg) translateX(${pe(e.calc(S).mul(-1).equal())})`,
              },
            },
            [`${n}-submenu-open${n}-submenu-inline > ${n}-submenu-title > ${n}-submenu-arrow`]:
              {
                transform: `translateY(${pe(e.calc(g).mul(0.2).mul(-1).equal())})`,
                '&::after': {
                  transform: `rotate(-45deg) translateX(${pe(e.calc(S).mul(-1).equal())})`,
                },
                '&::before': {
                  transform: `rotate(45deg) translateX(${pe(S)})`,
                },
              },
          }
        ),
      },
      { [`${t}-layout-header`]: { [n]: { lineHeight: 'inherit' } } },
    ];
  },
  wM = (e) => {
    var t, n, r;
    const {
        colorPrimary: o,
        colorError: i,
        colorTextDisabled: a,
        colorErrorBg: l,
        colorText: s,
        colorTextDescription: u,
        colorBgContainer: c,
        colorFillAlter: d,
        colorFillContent: v,
        lineWidth: w,
        lineWidthBold: g,
        controlItemBgActive: S,
        colorBgTextHover: y,
        controlHeightLG: p,
        lineHeight: m,
        colorBgElevated: h,
        marginXXS: C,
        padding: b,
        fontSize: x,
        controlHeightSM: E,
        fontSizeLG: P,
        colorTextLightSolid: I,
        colorErrorHover: M,
      } = e,
      A = (t = e.activeBarWidth) !== null && t !== void 0 ? t : 0,
      j = (n = e.activeBarBorderWidth) !== null && n !== void 0 ? n : w,
      L = (r = e.itemMarginInline) !== null && r !== void 0 ? r : e.marginXXS,
      F = new _t(I).setAlpha(0.65).toRgbString();
    return {
      dropdownWidth: 160,
      zIndexPopup: e.zIndexPopupBase + 50,
      radiusItem: e.borderRadiusLG,
      itemBorderRadius: e.borderRadiusLG,
      radiusSubMenuItem: e.borderRadiusSM,
      subMenuItemBorderRadius: e.borderRadiusSM,
      colorItemText: s,
      itemColor: s,
      colorItemTextHover: s,
      itemHoverColor: s,
      colorItemTextHoverHorizontal: o,
      horizontalItemHoverColor: o,
      colorGroupTitle: u,
      groupTitleColor: u,
      colorItemTextSelected: o,
      itemSelectedColor: o,
      colorItemTextSelectedHorizontal: o,
      horizontalItemSelectedColor: o,
      colorItemBg: c,
      itemBg: c,
      colorItemBgHover: y,
      itemHoverBg: y,
      colorItemBgActive: v,
      itemActiveBg: S,
      colorSubItemBg: d,
      subMenuItemBg: d,
      colorItemBgSelected: S,
      itemSelectedBg: S,
      colorItemBgSelectedHorizontal: 'transparent',
      horizontalItemSelectedBg: 'transparent',
      colorActiveBarWidth: 0,
      activeBarWidth: A,
      colorActiveBarHeight: g,
      activeBarHeight: g,
      colorActiveBarBorderSize: w,
      activeBarBorderWidth: j,
      colorItemTextDisabled: a,
      itemDisabledColor: a,
      colorDangerItemText: i,
      dangerItemColor: i,
      colorDangerItemTextHover: i,
      dangerItemHoverColor: i,
      colorDangerItemTextSelected: i,
      dangerItemSelectedColor: i,
      colorDangerItemBgActive: l,
      dangerItemActiveBg: l,
      colorDangerItemBgSelected: l,
      dangerItemSelectedBg: l,
      itemMarginInline: L,
      horizontalItemBorderRadius: 0,
      horizontalItemHoverBg: 'transparent',
      itemHeight: p,
      groupTitleLineHeight: m,
      collapsedWidth: p * 2,
      popupBg: h,
      itemMarginBlock: C,
      itemPaddingInline: b,
      horizontalLineHeight: `${p * 1.15}px`,
      iconSize: x,
      iconMarginInlineEnd: E - x,
      collapsedIconSize: P,
      groupTitleFontSize: x,
      darkItemDisabledColor: new _t(I).setAlpha(0.25).toRgbString(),
      darkItemColor: F,
      darkDangerItemColor: i,
      darkItemBg: '#001529',
      darkPopupBg: '#001529',
      darkSubMenuItemBg: '#000c17',
      darkItemSelectedColor: I,
      darkItemSelectedBg: o,
      darkDangerItemSelectedBg: i,
      darkItemHoverBg: 'transparent',
      darkGroupTitleColor: F,
      darkItemHoverColor: I,
      darkDangerItemHoverColor: M,
      darkDangerItemSelectedColor: I,
      darkDangerItemActiveBg: i,
      itemWidth: A ? `calc(100% + ${j}px)` : `calc(100% - ${L * 2}px)`,
    };
  },
  CM = function (e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e,
      n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    return Qu(
      'Menu',
      (o) => {
        const {
            colorBgElevated: i,
            controlHeightLG: a,
            fontSize: l,
            darkItemColor: s,
            darkDangerItemColor: u,
            darkItemBg: c,
            darkSubMenuItemBg: d,
            darkItemSelectedColor: v,
            darkItemSelectedBg: w,
            darkDangerItemSelectedBg: g,
            darkItemHoverBg: S,
            darkGroupTitleColor: y,
            darkItemHoverColor: p,
            darkItemDisabledColor: m,
            darkDangerItemHoverColor: h,
            darkDangerItemSelectedColor: C,
            darkDangerItemActiveBg: b,
            popupBg: x,
            darkPopupBg: E,
          } = o,
          P = o.calc(l).div(7).mul(5).equal(),
          I = Bi(o, {
            menuArrowSize: P,
            menuHorizontalHeight: o.calc(a).mul(1.15).equal(),
            menuArrowOffset: o.calc(P).mul(0.25).equal(),
            menuSubMenuBg: i,
            calc: o.calc,
            popupBg: x,
          }),
          M = Bi(I, {
            itemColor: s,
            itemHoverColor: p,
            groupTitleColor: y,
            itemSelectedColor: v,
            itemBg: c,
            popupBg: E,
            subMenuItemBg: d,
            itemActiveBg: 'transparent',
            itemSelectedBg: w,
            activeBarHeight: 0,
            activeBarBorderWidth: 0,
            itemHoverBg: S,
            itemDisabledColor: m,
            dangerItemColor: u,
            dangerItemHoverColor: h,
            dangerItemSelectedColor: C,
            dangerItemActiveBg: b,
            dangerItemSelectedBg: g,
            menuSubMenuBg: d,
            horizontalItemSelectedColor: v,
            horizontalItemSelectedBg: w,
          });
        return [
          SM(I),
          hM(I),
          yM(I),
          lg(I, 'light'),
          lg(M, 'dark'),
          gM(I),
          nP(I),
          Eh(I, 'slide-up'),
          Eh(I, 'slide-down'),
          J1(I, 'zoom-big'),
        ];
      },
      wM,
      {
        deprecatedTokens: [
          ['colorGroupTitle', 'groupTitleColor'],
          ['radiusItem', 'itemBorderRadius'],
          ['radiusSubMenuItem', 'subMenuItemBorderRadius'],
          ['colorItemText', 'itemColor'],
          ['colorItemTextHover', 'itemHoverColor'],
          ['colorItemTextHoverHorizontal', 'horizontalItemHoverColor'],
          ['colorItemTextSelected', 'itemSelectedColor'],
          ['colorItemTextSelectedHorizontal', 'horizontalItemSelectedColor'],
          ['colorItemTextDisabled', 'itemDisabledColor'],
          ['colorDangerItemText', 'dangerItemColor'],
          ['colorDangerItemTextHover', 'dangerItemHoverColor'],
          ['colorDangerItemTextSelected', 'dangerItemSelectedColor'],
          ['colorDangerItemBgActive', 'dangerItemActiveBg'],
          ['colorDangerItemBgSelected', 'dangerItemSelectedBg'],
          ['colorItemBg', 'itemBg'],
          ['colorItemBgHover', 'itemHoverBg'],
          ['colorSubItemBg', 'subMenuItemBg'],
          ['colorItemBgActive', 'itemActiveBg'],
          ['colorItemBgSelectedHorizontal', 'horizontalItemSelectedBg'],
          ['colorActiveBarWidth', 'activeBarWidth'],
          ['colorActiveBarHeight', 'activeBarHeight'],
          ['colorActiveBarBorderSize', 'activeBarBorderWidth'],
          ['colorItemBgSelected', 'itemSelectedBg'],
        ],
        injectStyle: n,
        unitless: { groupTitleLineHeight: !0 },
      }
    )(e, t);
  },
  LS = (e) => {
    var t;
    const { popupClassName: n, icon: r, title: o, theme: i } = e,
      a = f.useContext(du),
      { prefixCls: l, inlineCollapsed: s, theme: u } = a,
      c = Yi();
    let d;
    if (!r)
      d =
        s && !c.length && o && typeof o == 'string'
          ? f.createElement(
              'div',
              { className: `${l}-inline-collapsed-noicon` },
              o.charAt(0)
            )
          : f.createElement('span', { className: `${l}-title-content` }, o);
    else {
      const g = f.isValidElement(o) && o.type === 'span';
      d = f.createElement(
        f.Fragment,
        null,
        Zu(r, {
          className: ue(
            f.isValidElement(r)
              ? (t = r.props) === null || t === void 0
                ? void 0
                : t.className
              : '',
            `${l}-item-icon`
          ),
        }),
        g ? o : f.createElement('span', { className: `${l}-title-content` }, o)
      );
    }
    const v = f.useMemo(
        () => Object.assign(Object.assign({}, a), { firstLevel: !1 }),
        [a]
      ),
      [w] = Q1('Menu');
    return f.createElement(
      du.Provider,
      { value: v },
      f.createElement(
        tc,
        Object.assign({}, vo(e, ['icon']), {
          title: d,
          popupClassName: ue(l, n, `${l}-${i || u}`),
          popupStyle: Object.assign({ zIndex: w }, e.popupStyle),
        })
      )
    );
  };
var bM = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
function Yc(e) {
  return e === null || e === !1;
}
const xM = { item: FS, submenu: LS, divider: NS },
  EM = f.forwardRef((e, t) => {
    var n;
    const r = f.useContext(ig),
      o = r || {},
      {
        getPrefixCls: i,
        getPopupContainer: a,
        direction: l,
        menu: s,
      } = f.useContext(wn),
      u = i(),
      {
        prefixCls: c,
        className: d,
        style: v,
        theme: w = 'light',
        expandIcon: g,
        _internalDisableMenuItemTitleTooltip: S,
        inlineCollapsed: y,
        siderCollapsed: p,
        rootClassName: m,
        mode: h,
        selectable: C,
        onClick: b,
        overflowedIndicatorPopupClassName: x,
      } = e,
      E = bM(e, [
        'prefixCls',
        'className',
        'style',
        'theme',
        'expandIcon',
        '_internalDisableMenuItemTitleTooltip',
        'inlineCollapsed',
        'siderCollapsed',
        'rootClassName',
        'mode',
        'selectable',
        'onClick',
        'overflowedIndicatorPopupClassName',
      ]),
      P = vo(E, ['collapsedWidth']);
    (n = o.validator) === null || n === void 0 || n.call(o, { mode: h });
    const I = tn(function () {
        var B;
        b == null || b.apply(void 0, arguments),
          (B = o.onClick) === null || B === void 0 || B.call(o);
      }),
      M = o.mode || h,
      A = C ?? o.selectable,
      j = f.useMemo(() => (p !== void 0 ? p : y), [y, p]),
      L = {
        horizontal: { motionName: `${u}-slide-up` },
        inline: Q2(u),
        other: { motionName: `${u}-zoom-big` },
      },
      F = i('menu', c || o.prefixCls),
      U = K2(F),
      [T, R, k] = CM(F, U, !r),
      O = ue(`${F}-${w}`, s == null ? void 0 : s.className, d),
      _ = f.useMemo(() => {
        var B, K;
        if (typeof g == 'function' || Yc(g)) return g || null;
        if (typeof o.expandIcon == 'function' || Yc(o.expandIcon))
          return o.expandIcon || null;
        if (
          typeof (s == null ? void 0 : s.expandIcon) == 'function' ||
          Yc(s == null ? void 0 : s.expandIcon)
        )
          return (s == null ? void 0 : s.expandIcon) || null;
        const D =
          (B = g ?? (o == null ? void 0 : o.expandIcon)) !== null &&
          B !== void 0
            ? B
            : s == null
              ? void 0
              : s.expandIcon;
        return Zu(D, {
          className: ue(
            `${F}-submenu-expand-icon`,
            f.isValidElement(D)
              ? (K = D.props) === null || K === void 0
                ? void 0
                : K.className
              : void 0
          ),
        });
      }, [
        g,
        o == null ? void 0 : o.expandIcon,
        s == null ? void 0 : s.expandIcon,
        F,
      ]),
      z = f.useMemo(
        () => ({
          prefixCls: F,
          inlineCollapsed: j || !1,
          direction: l,
          firstLevel: !0,
          theme: w,
          mode: M,
          disableMenuItemTitleTooltip: S,
        }),
        [F, j, l, S, w]
      );
    return T(
      f.createElement(
        ig.Provider,
        { value: null },
        f.createElement(
          du.Provider,
          { value: z },
          f.createElement(
            Il,
            Object.assign(
              {
                getPopupContainer: a,
                overflowedIndicator: f.createElement(mM, null),
                overflowedIndicatorPopupClassName: ue(F, `${F}-${w}`, x),
                mode: M,
                selectable: A,
                onClick: I,
              },
              P,
              {
                inlineCollapsed: j,
                style: Object.assign(
                  Object.assign({}, s == null ? void 0 : s.style),
                  v
                ),
                className: O,
                prefixCls: F,
                direction: l,
                defaultMotions: L,
                expandIcon: _,
                ref: t,
                rootClassName: ue(m, R, o.rootClassName, k, U),
                _internalComponents: xM,
              }
            )
          )
        )
      )
    );
  }),
  Ml = f.forwardRef((e, t) => {
    const n = f.useRef(null),
      r = f.useContext(nc);
    return (
      f.useImperativeHandle(t, () => ({
        menu: n.current,
        focus: (o) => {
          var i;
          (i = n.current) === null || i === void 0 || i.focus(o);
        },
      })),
      f.createElement(EM, Object.assign({ ref: n }, e, r))
    );
  });
Ml.Item = FS;
Ml.SubMenu = LS;
Ml.Divider = NS;
Ml.ItemGroup = sm;
function kM(e, t, n) {
  return typeof n == 'boolean'
    ? n
    : e.length
      ? !0
      : zo(t).some((o) => o.type === _S);
}
var AS = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
function rc(e) {
  let { suffixCls: t, tagName: n, displayName: r } = e;
  return (o) =>
    f.forwardRef((a, l) =>
      f.createElement(o, Object.assign({ ref: l, suffixCls: t, tagName: n }, a))
    );
}
const um = f.forwardRef((e, t) => {
    const { prefixCls: n, suffixCls: r, className: o, tagName: i } = e,
      a = AS(e, ['prefixCls', 'suffixCls', 'className', 'tagName']),
      { getPrefixCls: l } = f.useContext(wn),
      s = l('layout', n),
      [u, c, d] = TS(s),
      v = r ? `${s}-${r}` : s;
    return u(
      f.createElement(
        i,
        Object.assign({ className: ue(n || v, o, c, d), ref: t }, a)
      )
    );
  }),
  PM = f.forwardRef((e, t) => {
    const { direction: n } = f.useContext(wn),
      [r, o] = f.useState([]),
      {
        prefixCls: i,
        className: a,
        rootClassName: l,
        children: s,
        hasSider: u,
        tagName: c,
        style: d,
      } = e,
      v = AS(e, [
        'prefixCls',
        'className',
        'rootClassName',
        'children',
        'hasSider',
        'tagName',
        'style',
      ]),
      w = vo(v, ['suffixCls']),
      { getPrefixCls: g, layout: S } = f.useContext(wn),
      y = g('layout', i),
      p = kM(r, s, u),
      [m, h, C] = TS(y),
      b = ue(
        y,
        { [`${y}-has-sider`]: p, [`${y}-rtl`]: n === 'rtl' },
        S == null ? void 0 : S.className,
        a,
        l,
        h,
        C
      ),
      x = f.useMemo(
        () => ({
          siderHook: {
            addSider: (E) => {
              o((P) => [].concat(Z(P), [E]));
            },
            removeSider: (E) => {
              o((P) => P.filter((I) => I !== E));
            },
          },
        }),
        []
      );
    return m(
      f.createElement(
        MS.Provider,
        { value: x },
        f.createElement(
          c,
          Object.assign(
            {
              ref: t,
              className: b,
              style: Object.assign(
                Object.assign({}, S == null ? void 0 : S.style),
                d
              ),
            },
            w
          ),
          s
        )
      )
    );
  }),
  RM = rc({ tagName: 'div', displayName: 'Layout' })(PM),
  IM = rc({ suffixCls: 'header', tagName: 'header', displayName: 'Header' })(
    um
  ),
  MM = rc({ suffixCls: 'footer', tagName: 'footer', displayName: 'Footer' })(
    um
  ),
  OM = rc({ suffixCls: 'content', tagName: 'main', displayName: 'Content' })(
    um
  ),
  Vo = RM;
Vo.Header = IM;
Vo.Footer = MM;
Vo.Content = OM;
Vo.Sider = _S;
Vo._InternalSiderContext = nc;
const $M = () => {
    const e = Bv(),
      t = Tb(),
      [n, r] = f.useState('1');
    f.useEffect(() => {
      const l = e.pathname;
      r(l === '/' ? '1' : o(l));
    }, [e.pathname]);
    const o = (l) => {
        switch (l) {
          case '1':
            return '/';
          case '2':
            return 'heatMap';
          case '3':
            return 'resources';
          case '/':
            return '1';
          case '/heatMap':
            return '2';
          case '/resources':
            return '3';
          default:
            return '/';
        }
      },
      i = [
        { key: '1', label: 'Home' },
        { key: '2', label: 'Heat Map' },
        { key: '3', label: 'Resources' },
      ],
      a = (l) => {
        r(l.key), t(o(l.key));
      };
    return ae.createElement(
      ae.Fragment,
      null,
      ae.createElement(Ml, {
        theme: 'dark',
        mode: 'horizontal',
        selectedKeys: [n],
        onClick: a,
        items: i,
        style: { flex: 1, minWidth: 0 },
      })
    );
  },
  { Content: TM, Footer: _M } = Vo,
  NM = () =>
    ae.createElement(
      'div',
      { className: 'App' },
      ae.createElement(
        Vo,
        null,
        ae.createElement($M, null),
        ae.createElement(
          TM,
          { style: { padding: '20px', minHeight: 'calc(100vh - 134px)' } },
          ae.createElement(
            Xb,
            null,
            ae.createElement(Cs, {
              exact: !0,
              path: '/',
              element: ae.createElement(
                ae.Fragment,
                null,
                'Welcome to gotham watch'
              ),
            }),
            ae.createElement(Cs, {
              exact: !0,
              path: '/heatMap',
              element: ae.createElement(
                ae.Fragment,
                null,
                'welcome to gotham watch map'
              ),
            }),
            ae.createElement(Cs, {
              exact: !0,
              path: '/resources',
              element: ae.createElement(
                ae.Fragment,
                null,
                'welcome to gotham watch resources page'
              ),
            })
          )
        ),
        ae.createElement(
          _M,
          { style: { textAlign: 'center' } },
          'Gotham Watch © ',
          new Date().getFullYear()
        )
      )
    ),
  FM = Zc.createRoot(document.getElementById('root'));
FM.render(
  ae.createElement(
    ae.StrictMode,
    null,
    ae.createElement(Zb, null, ae.createElement(NM, null))
  )
);
