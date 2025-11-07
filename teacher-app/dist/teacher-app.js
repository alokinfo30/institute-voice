import * as E from "react";
import at, { forwardRef as Zd, useContext as Xa, Children as ef, isValidElement as vr, cloneElement as xr, createContext as iy, useState as oa, useEffect as ay } from "react";
import * as cy from "react-dom";
import Bn from "react-dom";
import { useNavigate as ly, useLocation as uy, Navigate as ol, Routes as dy, Route as pr, BrowserRouter as fy } from "react-router-dom";
function tf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function gt(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var sa = { exports: {} }, Nn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sl;
function py() {
  if (sl)
    return Nn;
  sl = 1;
  var e = at, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(a, d, u) {
    var f, p = {}, m = null, g = null;
    u !== void 0 && (m = "" + u), d.key !== void 0 && (m = "" + d.key), d.ref !== void 0 && (g = d.ref);
    for (f in d)
      n.call(d, f) && !s.hasOwnProperty(f) && (p[f] = d[f]);
    if (a && a.defaultProps)
      for (f in d = a.defaultProps, d)
        p[f] === void 0 && (p[f] = d[f]);
    return { $$typeof: t, type: a, key: m, ref: g, props: p, _owner: o.current };
  }
  return Nn.Fragment = r, Nn.jsx = i, Nn.jsxs = i, Nn;
}
var kn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var il;
function hy() {
  return il || (il = 1, process.env.NODE_ENV !== "production" && function() {
    var e = at, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = Symbol.iterator, c = "@@iterator";
    function b(R) {
      if (R === null || typeof R != "object")
        return null;
      var B = h && R[h] || R[c];
      return typeof B == "function" ? B : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(R) {
      {
        for (var B = arguments.length, re = new Array(B > 1 ? B - 1 : 0), ie = 1; ie < B; ie++)
          re[ie - 1] = arguments[ie];
        $("error", R, re);
      }
    }
    function $(R, B, re) {
      {
        var ie = x.ReactDebugCurrentFrame, me = ie.getStackAddendum();
        me !== "" && (B += "%s", re = re.concat([me]));
        var je = re.map(function(pe) {
          return String(pe);
        });
        je.unshift("Warning: " + B), Function.prototype.apply.call(console[R], console, je);
      }
    }
    var S = !1, y = !1, P = !1, O = !1, I = !1, F;
    F = Symbol.for("react.module.reference");
    function V(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === n || R === s || I || R === o || R === u || R === f || O || R === g || S || y || P || typeof R == "object" && R !== null && (R.$$typeof === m || R.$$typeof === p || R.$$typeof === i || R.$$typeof === a || R.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === F || R.getModuleId !== void 0));
    }
    function Q(R, B, re) {
      var ie = R.displayName;
      if (ie)
        return ie;
      var me = B.displayName || B.name || "";
      return me !== "" ? re + "(" + me + ")" : re;
    }
    function q(R) {
      return R.displayName || "Context";
    }
    function L(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case a:
            var B = R;
            return q(B) + ".Consumer";
          case i:
            var re = R;
            return q(re._context) + ".Provider";
          case d:
            return Q(R, R.render, "ForwardRef");
          case p:
            var ie = R.displayName || null;
            return ie !== null ? ie : L(R.type) || "Memo";
          case m: {
            var me = R, je = me._payload, pe = me._init;
            try {
              return L(pe(je));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, ne = 0, z, te, D, se, _, N, W;
    function Y() {
    }
    Y.__reactDisabledLog = !0;
    function M() {
      {
        if (ne === 0) {
          z = console.log, te = console.info, D = console.warn, se = console.error, _ = console.group, N = console.groupCollapsed, W = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: Y,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        ne++;
      }
    }
    function H() {
      {
        if (ne--, ne === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, R, {
              value: z
            }),
            info: j({}, R, {
              value: te
            }),
            warn: j({}, R, {
              value: D
            }),
            error: j({}, R, {
              value: se
            }),
            group: j({}, R, {
              value: _
            }),
            groupCollapsed: j({}, R, {
              value: N
            }),
            groupEnd: j({}, R, {
              value: W
            })
          });
        }
        ne < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = x.ReactCurrentDispatcher, K;
    function X(R, B, re) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (me) {
            var ie = me.stack.trim().match(/\n( *(at )?)/);
            K = ie && ie[1] || "";
          }
        return `
` + K + R;
      }
    }
    var G = !1, Z;
    {
      var ue = typeof WeakMap == "function" ? WeakMap : Map;
      Z = new ue();
    }
    function T(R, B) {
      if (!R || G)
        return "";
      {
        var re = Z.get(R);
        if (re !== void 0)
          return re;
      }
      var ie;
      G = !0;
      var me = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var je;
      je = U.current, U.current = null, M();
      try {
        if (B) {
          var pe = function() {
            throw Error();
          };
          if (Object.defineProperty(pe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(pe, []);
            } catch (xt) {
              ie = xt;
            }
            Reflect.construct(R, [], pe);
          } else {
            try {
              pe.call();
            } catch (xt) {
              ie = xt;
            }
            R.call(pe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (xt) {
            ie = xt;
          }
          R();
        }
      } catch (xt) {
        if (xt && ie && typeof xt.stack == "string") {
          for (var fe = xt.stack.split(`
`), bt = ie.stack.split(`
`), Ke = fe.length - 1, rt = bt.length - 1; Ke >= 1 && rt >= 0 && fe[Ke] !== bt[rt]; )
            rt--;
          for (; Ke >= 1 && rt >= 0; Ke--, rt--)
            if (fe[Ke] !== bt[rt]) {
              if (Ke !== 1 || rt !== 1)
                do
                  if (Ke--, rt--, rt < 0 || fe[Ke] !== bt[rt]) {
                    var _t = `
` + fe[Ke].replace(" at new ", " at ");
                    return R.displayName && _t.includes("<anonymous>") && (_t = _t.replace("<anonymous>", R.displayName)), typeof R == "function" && Z.set(R, _t), _t;
                  }
                while (Ke >= 1 && rt >= 0);
              break;
            }
        }
      } finally {
        G = !1, U.current = je, H(), Error.prepareStackTrace = me;
      }
      var Vr = R ? R.displayName || R.name : "", Pr = Vr ? X(Vr) : "";
      return typeof R == "function" && Z.set(R, Pr), Pr;
    }
    function ce(R, B, re) {
      return T(R, !1);
    }
    function xe(R) {
      var B = R.prototype;
      return !!(B && B.isReactComponent);
    }
    function tt(R, B, re) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return T(R, xe(R));
      if (typeof R == "string")
        return X(R);
      switch (R) {
        case u:
          return X("Suspense");
        case f:
          return X("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case d:
            return ce(R.render);
          case p:
            return tt(R.type, B, re);
          case m: {
            var ie = R, me = ie._payload, je = ie._init;
            try {
              return tt(je(me), B, re);
            } catch {
            }
          }
        }
      return "";
    }
    var nr = Object.prototype.hasOwnProperty, Fr = {}, Lr = x.ReactDebugCurrentFrame;
    function dr(R) {
      if (R) {
        var B = R._owner, re = tt(R.type, R._source, B ? B.type : null);
        Lr.setExtraStackFrame(re);
      } else
        Lr.setExtraStackFrame(null);
    }
    function or(R, B, re, ie, me) {
      {
        var je = Function.call.bind(nr);
        for (var pe in R)
          if (je(R, pe)) {
            var fe = void 0;
            try {
              if (typeof R[pe] != "function") {
                var bt = Error((ie || "React class") + ": " + re + " type `" + pe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[pe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw bt.name = "Invariant Violation", bt;
              }
              fe = R[pe](B, pe, ie, re, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ke) {
              fe = Ke;
            }
            fe && !(fe instanceof Error) && (dr(me), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ie || "React class", re, pe, typeof fe), dr(null)), fe instanceof Error && !(fe.message in Fr) && (Fr[fe.message] = !0, dr(me), w("Failed %s type: %s", re, fe.message), dr(null));
          }
      }
    }
    var sr = Array.isArray;
    function Rr(R) {
      return sr(R);
    }
    function wn(R) {
      {
        var B = typeof Symbol == "function" && Symbol.toStringTag, re = B && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return re;
      }
    }
    function zt(R) {
      try {
        return vt(R), !1;
      } catch {
        return !0;
      }
    }
    function vt(R) {
      return "" + R;
    }
    function Br(R) {
      if (zt(R))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", wn(R)), vt(R);
    }
    var Vt = x.ReactCurrentOwner, An = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, J, fr, Or;
    Or = {};
    function _r(R) {
      if (nr.call(R, "ref")) {
        var B = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function xi(R) {
      if (nr.call(R, "key")) {
        var B = Object.getOwnPropertyDescriptor(R, "key").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Wm(R, B) {
      if (typeof R.ref == "string" && Vt.current && B && Vt.current.stateNode !== B) {
        var re = L(Vt.current.type);
        Or[re] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L(Vt.current.type), R.ref), Or[re] = !0);
      }
    }
    function Ym(R, B) {
      {
        var re = function() {
          J || (J = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        re.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: re,
          configurable: !0
        });
      }
    }
    function Hm(R, B) {
      {
        var re = function() {
          fr || (fr = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        re.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: re,
          configurable: !0
        });
      }
    }
    var Gm = function(R, B, re, ie, me, je, pe) {
      var fe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: R,
        key: B,
        ref: re,
        props: pe,
        // Record the component responsible for creating this element.
        _owner: je
      };
      return fe._store = {}, Object.defineProperty(fe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(fe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ie
      }), Object.defineProperty(fe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: me
      }), Object.freeze && (Object.freeze(fe.props), Object.freeze(fe)), fe;
    };
    function Km(R, B, re, ie, me) {
      {
        var je, pe = {}, fe = null, bt = null;
        re !== void 0 && (Br(re), fe = "" + re), xi(B) && (Br(B.key), fe = "" + B.key), _r(B) && (bt = B.ref, Wm(B, me));
        for (je in B)
          nr.call(B, je) && !An.hasOwnProperty(je) && (pe[je] = B[je]);
        if (R && R.defaultProps) {
          var Ke = R.defaultProps;
          for (je in Ke)
            pe[je] === void 0 && (pe[je] = Ke[je]);
        }
        if (fe || bt) {
          var rt = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          fe && Ym(pe, rt), bt && Hm(pe, rt);
        }
        return Gm(R, fe, bt, me, ie, Vt.current, pe);
      }
    }
    var Ei = x.ReactCurrentOwner, Xc = x.ReactDebugCurrentFrame;
    function zr(R) {
      if (R) {
        var B = R._owner, re = tt(R.type, R._source, B ? B.type : null);
        Xc.setExtraStackFrame(re);
      } else
        Xc.setExtraStackFrame(null);
    }
    var Ti;
    Ti = !1;
    function Ci(R) {
      return typeof R == "object" && R !== null && R.$$typeof === t;
    }
    function Jc() {
      {
        if (Ei.current) {
          var R = L(Ei.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function Qm(R) {
      {
        if (R !== void 0) {
          var B = R.fileName.replace(/^.*[\\\/]/, ""), re = R.lineNumber;
          return `

Check your code at ` + B + ":" + re + ".";
        }
        return "";
      }
    }
    var Zc = {};
    function Xm(R) {
      {
        var B = Jc();
        if (!B) {
          var re = typeof R == "string" ? R : R.displayName || R.name;
          re && (B = `

Check the top-level render call using <` + re + ">.");
        }
        return B;
      }
    }
    function el(R, B) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var re = Xm(B);
        if (Zc[re])
          return;
        Zc[re] = !0;
        var ie = "";
        R && R._owner && R._owner !== Ei.current && (ie = " It was passed a child from " + L(R._owner.type) + "."), zr(R), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', re, ie), zr(null);
      }
    }
    function tl(R, B) {
      {
        if (typeof R != "object")
          return;
        if (Rr(R))
          for (var re = 0; re < R.length; re++) {
            var ie = R[re];
            Ci(ie) && el(ie, B);
          }
        else if (Ci(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var me = b(R);
          if (typeof me == "function" && me !== R.entries)
            for (var je = me.call(R), pe; !(pe = je.next()).done; )
              Ci(pe.value) && el(pe.value, B);
        }
      }
    }
    function Jm(R) {
      {
        var B = R.type;
        if (B == null || typeof B == "string")
          return;
        var re;
        if (typeof B == "function")
          re = B.propTypes;
        else if (typeof B == "object" && (B.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        B.$$typeof === p))
          re = B.propTypes;
        else
          return;
        if (re) {
          var ie = L(B);
          or(re, R.props, "prop", ie, R);
        } else if (B.PropTypes !== void 0 && !Ti) {
          Ti = !0;
          var me = L(B);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", me || "Unknown");
        }
        typeof B.getDefaultProps == "function" && !B.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Zm(R) {
      {
        for (var B = Object.keys(R.props), re = 0; re < B.length; re++) {
          var ie = B[re];
          if (ie !== "children" && ie !== "key") {
            zr(R), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ie), zr(null);
            break;
          }
        }
        R.ref !== null && (zr(R), w("Invalid attribute `ref` supplied to `React.Fragment`."), zr(null));
      }
    }
    var rl = {};
    function nl(R, B, re, ie, me, je) {
      {
        var pe = V(R);
        if (!pe) {
          var fe = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (fe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var bt = Qm(me);
          bt ? fe += bt : fe += Jc();
          var Ke;
          R === null ? Ke = "null" : Rr(R) ? Ke = "array" : R !== void 0 && R.$$typeof === t ? (Ke = "<" + (L(R.type) || "Unknown") + " />", fe = " Did you accidentally export a JSX literal instead of a component?") : Ke = typeof R, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ke, fe);
        }
        var rt = Km(R, B, re, me, je);
        if (rt == null)
          return rt;
        if (pe) {
          var _t = B.children;
          if (_t !== void 0)
            if (ie)
              if (Rr(_t)) {
                for (var Vr = 0; Vr < _t.length; Vr++)
                  tl(_t[Vr], R);
                Object.freeze && Object.freeze(_t);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              tl(_t, R);
        }
        if (nr.call(B, "key")) {
          var Pr = L(R), xt = Object.keys(B).filter(function(sy) {
            return sy !== "key";
          }), Si = xt.length > 0 ? "{key: someKey, " + xt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!rl[Pr + Si]) {
            var oy = xt.length > 0 ? "{" + xt.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Si, Pr, oy, Pr), rl[Pr + Si] = !0;
          }
        }
        return R === n ? Zm(rt) : Jm(rt), rt;
      }
    }
    function ey(R, B, re) {
      return nl(R, B, re, !0);
    }
    function ty(R, B, re) {
      return nl(R, B, re, !1);
    }
    var ry = ty, ny = ey;
    kn.Fragment = n, kn.jsx = ry, kn.jsxs = ny;
  }()), kn;
}
process.env.NODE_ENV === "production" ? sa.exports = py() : sa.exports = hy();
var v = sa.exports;
function al(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function is(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? al(Object(r), !0).forEach(function(n) {
      my(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : al(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function rf(e) {
  return (rf = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  })(e);
}
function my(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ia(e) {
  return (ia = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  })(e);
}
function nf(e, t) {
  var r;
  if (typeof (r = t.domElement ? function() {
    return t.domElement;
  } : t.domElementGetter ? t.domElementGetter : e.domElementGetter ? e.domElementGetter : function(n) {
    var o = n.appName || n.name;
    if (!o)
      throw Error("single-spa's dom-element-getter-helpers was not given an application name as a prop, so it can't make a unique dom element container for the react application");
    var s = "single-spa-application:".concat(o);
    return function() {
      var i = document.getElementById(s);
      return i || ((i = document.createElement("div")).id = s, document.body.appendChild(i)), i;
    };
  }(t)) != "function")
    throw Error("single-spa's dom-element-getter-helpers was given an invalid domElementGetter for application or parcel '".concat(t.name, "'. Expected a function, received ").concat(ia(r)));
  return function() {
    var n = r(t);
    if (!(n instanceof HTMLElement))
      throw Error("single-spa's dom-element-getter-helpers: domElementGetter returned an invalid dom element for application or parcel '".concat(t.name, "'. Expected HTMLElement, received ").concat(ia(n)));
    return n;
  };
}
var Xn = null;
try {
  Xn = require("react").createContext();
} catch {
}
var yy = { React: null, ReactDOM: null, rootComponent: null, loadRootComponent: null, renderType: null, errorBoundary: null, errorBoundaryClass: null, domElementGetter: null, parcelCanUpdate: !0, suppressComponentDidCatchWarning: !1, domElements: {}, renderResults: {}, updateResolves: {} };
function gy(e) {
  if (rf(e) !== "object")
    throw new Error("single-spa-react requires a configuration object");
  var t = is(is({}, yy), e);
  if (!t.React)
    throw new Error("single-spa-react must be passed opts.React");
  if (!t.ReactDOM)
    throw new Error("single-spa-react must be passed opts.ReactDOM");
  if (!t.rootComponent && !t.loadRootComponent)
    throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");
  if (t.errorBoundary && typeof t.errorBoundary != "function")
    throw Error("The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements");
  !Xn && t.React.createContext && (Xn = t.React.createContext()), t.SingleSpaRoot = function(n) {
    function o(s) {
      o.displayName = "SingleSpaRoot(".concat(s.name, ")");
    }
    return o.prototype = Object.create(n.React.Component.prototype), o.prototype.componentDidMount = function() {
      setTimeout(this.props.mountFinished);
    }, o.prototype.componentWillUnmount = function() {
      setTimeout(this.props.unmountFinished);
    }, o.prototype.render = function() {
      return setTimeout(this.props.updateFinished), this.props.children;
    }, o;
  }(t);
  var r = { bootstrap: by.bind(null, t), mount: vy.bind(null, t), unmount: xy.bind(null, t) };
  return t.parcelCanUpdate && (r.update = Ey.bind(null, t)), r;
}
function by(e, t) {
  return e.rootComponent ? Promise.resolve() : e.loadRootComponent(t).then(function(r) {
    e.rootComponent = r;
  });
}
function vy(e, t) {
  return new Promise(function(r, n) {
    e.suppressComponentDidCatchWarning || !function(a) {
      if (!(a && typeof a.version == "string" && a.version.indexOf(".") >= 0))
        return !1;
      var d = a.version.slice(0, a.version.indexOf("."));
      try {
        return Number(d) >= 16;
      } catch {
        return !1;
      }
    }(e.React) || e.errorBoundary || (e.rootComponent.prototype ? e.rootComponent.prototype.componentDidCatch || console.warn("single-spa-react: ".concat(t.name || t.appName || t.childAppName, "'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")) : console.warn("single-spa-react: ".concat(t.name || t.appName || t.childAppName, "'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts).")));
    var o = of(e, t, function() {
      r(this);
    }), s = nf(e, t)(), i = function(a) {
      var d = a.opts, u = a.elementToRender, f = a.domElement, p = typeof d.renderType == "function" ? d.renderType() : d.renderType;
      if (["createRoot", "unstable_createRoot", "createBlockingRoot", "unstable_createBlockingRoot"].indexOf(p) >= 0) {
        var m = d.ReactDOM[p](f);
        return m.render(u), m;
      }
      return p === "hydrate" ? d.ReactDOM.hydrate(u, f) : d.ReactDOM.render(u, f), null;
    }({ elementToRender: o, domElement: s, opts: e });
    e.domElements[t.name] = s, e.renderResults[t.name] = i;
  });
}
function xy(e, t) {
  return new Promise(function(r) {
    e.unmountFinished = r;
    var n = e.renderResults[t.name];
    n && n.unmount ? n.unmount() : e.ReactDOM.unmountComponentAtNode(e.domElements[t.name]), delete e.domElements[t.name], delete e.renderResults[t.name];
  });
}
function Ey(e, t) {
  return new Promise(function(r) {
    e.updateResolves[t.name] || (e.updateResolves[t.name] = []), e.updateResolves[t.name].push(r);
    var n = of(e, t, null), o = e.renderResults[t.name];
    if (o && o.render)
      o.render(n);
    else {
      var s = nf(e, t)();
      e.ReactDOM.render(n, s);
    }
  });
}
function of(e, t, r) {
  var n = e.React.createElement(e.rootComponent, t), o = Xn ? e.React.createElement(Xn.Provider, { value: t }, n) : n;
  return (e.errorBoundary || t.errorBoundary || e.errorBoundaryClass || t.errorBoundaryClass) && (e.errorBoundaryClass = e.errorBoundaryClass || t.errorBoundaryClass || function(s, i) {
    function a(d) {
      s.React.Component.apply(this, arguments), this.state = { caughtError: null, caughtErrorInfo: null }, a.displayName = "SingleSpaReactErrorBoundary(".concat(d.name, ")");
    }
    return a.prototype = Object.create(s.React.Component.prototype), a.prototype.render = function() {
      return this.state.caughtError ? (s.errorBoundary || i.errorBoundary)(this.state.caughtError, this.state.caughtErrorInfo, this.props) : this.props.children;
    }, a.prototype.componentDidCatch = function(d, u) {
      this.setState({ caughtError: d, caughtErrorInfo: u });
    }, a;
  }(e, t), o = e.React.createElement(e.errorBoundaryClass, t, o)), o = e.React.createElement(e.SingleSpaRoot, is(is({}, t), {}, { mountFinished: r, updateFinished: function() {
    e.updateResolves[t.name] && (e.updateResolves[t.name].forEach(function(s) {
      return s();
    }), delete e.updateResolves[t.name]);
  }, unmountFinished: function() {
    setTimeout(e.unmountFinished);
  } }), o);
}
function Jn(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let r = 1; r < arguments.length; r += 1)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Ty = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jn
}, Symbol.toStringTag, { value: "Module" })), pn = "$$material";
function A() {
  return A = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, A.apply(null, arguments);
}
function de(e, t) {
  if (e == null)
    return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1)
        continue;
      r[n] = e[n];
    }
  return r;
}
var Cy = !1;
function Sy(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function $y(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Ry = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var s;
      n.tags.length === 0 ? n.insertionPoint ? s = n.insertionPoint.nextSibling : n.prepend ? s = n.container.firstChild : s = n.before : s = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, s), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !Cy : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag($y(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var s = Sy(o);
      try {
        s.insertRule(n, s.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      var o;
      return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), ht = "-ms-", as = "-moz-", ye = "-webkit-", sf = "comm", Ja = "rule", Za = "decl", Oy = "@import", af = "@keyframes", _y = "@layer", Py = Math.abs, _s = String.fromCharCode, wy = Object.assign;
function Ay(e, t) {
  return dt(e, 0) ^ 45 ? (((t << 2 ^ dt(e, 0)) << 2 ^ dt(e, 1)) << 2 ^ dt(e, 2)) << 2 ^ dt(e, 3) : 0;
}
function cf(e) {
  return e.trim();
}
function Ny(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function be(e, t, r) {
  return e.replace(t, r);
}
function aa(e, t) {
  return e.indexOf(t);
}
function dt(e, t) {
  return e.charCodeAt(t) | 0;
}
function Zn(e, t, r) {
  return e.slice(t, r);
}
function Kt(e) {
  return e.length;
}
function ec(e) {
  return e.length;
}
function Ao(e, t) {
  return t.push(e), e;
}
function ky(e, t) {
  return e.map(t).join("");
}
var Ps = 1, hn = 1, lf = 0, Tt = 0, ot = 0, xn = "";
function ws(e, t, r, n, o, s, i) {
  return { value: e, root: t, parent: r, type: n, props: o, children: s, line: Ps, column: hn, length: i, return: "" };
}
function In(e, t) {
  return wy(ws("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Iy() {
  return ot;
}
function My() {
  return ot = Tt > 0 ? dt(xn, --Tt) : 0, hn--, ot === 10 && (hn = 1, Ps--), ot;
}
function Rt() {
  return ot = Tt < lf ? dt(xn, Tt++) : 0, hn++, ot === 10 && (hn = 1, Ps++), ot;
}
function Zt() {
  return dt(xn, Tt);
}
function qo() {
  return Tt;
}
function fo(e, t) {
  return Zn(xn, e, t);
}
function eo(e) {
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
function uf(e) {
  return Ps = hn = 1, lf = Kt(xn = e), Tt = 0, [];
}
function df(e) {
  return xn = "", e;
}
function Wo(e) {
  return cf(fo(Tt - 1, ca(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function jy(e) {
  for (; (ot = Zt()) && ot < 33; )
    Rt();
  return eo(e) > 2 || eo(ot) > 3 ? "" : " ";
}
function Dy(e, t) {
  for (; --t && Rt() && !(ot < 48 || ot > 102 || ot > 57 && ot < 65 || ot > 70 && ot < 97); )
    ;
  return fo(e, qo() + (t < 6 && Zt() == 32 && Rt() == 32));
}
function ca(e) {
  for (; Rt(); )
    switch (ot) {
      case e:
        return Tt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ca(ot);
        break;
      case 40:
        e === 41 && ca(e);
        break;
      case 92:
        Rt();
        break;
    }
  return Tt;
}
function Fy(e, t) {
  for (; Rt() && e + ot !== 47 + 10; )
    if (e + ot === 42 + 42 && Zt() === 47)
      break;
  return "/*" + fo(t, Tt - 1) + "*" + _s(e === 47 ? e : Rt());
}
function Ly(e) {
  for (; !eo(Zt()); )
    Rt();
  return fo(e, Tt);
}
function By(e) {
  return df(Yo("", null, null, null, [""], e = uf(e), 0, [0], e));
}
function Yo(e, t, r, n, o, s, i, a, d) {
  for (var u = 0, f = 0, p = i, m = 0, g = 0, h = 0, c = 1, b = 1, x = 1, w = 0, $ = "", S = o, y = s, P = n, O = $; b; )
    switch (h = w, w = Rt()) {
      case 40:
        if (h != 108 && dt(O, p - 1) == 58) {
          aa(O += be(Wo(w), "&", "&\f"), "&\f") != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        O += Wo(w);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        O += jy(h);
        break;
      case 92:
        O += Dy(qo() - 1, 7);
        continue;
      case 47:
        switch (Zt()) {
          case 42:
          case 47:
            Ao(zy(Fy(Rt(), qo()), t, r), d);
            break;
          default:
            O += "/";
        }
        break;
      case 123 * c:
        a[u++] = Kt(O) * x;
      case 125 * c:
      case 59:
      case 0:
        switch (w) {
          case 0:
          case 125:
            b = 0;
          case 59 + f:
            x == -1 && (O = be(O, /\f/g, "")), g > 0 && Kt(O) - p && Ao(g > 32 ? ll(O + ";", n, r, p - 1) : ll(be(O, " ", "") + ";", n, r, p - 2), d);
            break;
          case 59:
            O += ";";
          default:
            if (Ao(P = cl(O, t, r, u, f, o, a, $, S = [], y = [], p), s), w === 123)
              if (f === 0)
                Yo(O, t, P, P, S, s, p, a, y);
              else
                switch (m === 99 && dt(O, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Yo(e, P, P, n && Ao(cl(e, P, P, 0, 0, o, a, $, o, S = [], p), y), o, y, p, a, n ? S : y);
                    break;
                  default:
                    Yo(O, P, P, P, [""], y, 0, a, y);
                }
        }
        u = f = g = 0, c = x = 1, $ = O = "", p = i;
        break;
      case 58:
        p = 1 + Kt(O), g = h;
      default:
        if (c < 1) {
          if (w == 123)
            --c;
          else if (w == 125 && c++ == 0 && My() == 125)
            continue;
        }
        switch (O += _s(w), w * c) {
          case 38:
            x = f > 0 ? 1 : (O += "\f", -1);
            break;
          case 44:
            a[u++] = (Kt(O) - 1) * x, x = 1;
            break;
          case 64:
            Zt() === 45 && (O += Wo(Rt())), m = Zt(), f = p = Kt($ = O += Ly(qo())), w++;
            break;
          case 45:
            h === 45 && Kt(O) == 2 && (c = 0);
        }
    }
  return s;
}
function cl(e, t, r, n, o, s, i, a, d, u, f) {
  for (var p = o - 1, m = o === 0 ? s : [""], g = ec(m), h = 0, c = 0, b = 0; h < n; ++h)
    for (var x = 0, w = Zn(e, p + 1, p = Py(c = i[h])), $ = e; x < g; ++x)
      ($ = cf(c > 0 ? m[x] + " " + w : be(w, /&\f/g, m[x]))) && (d[b++] = $);
  return ws(e, t, r, o === 0 ? Ja : a, d, u, f);
}
function zy(e, t, r) {
  return ws(e, t, r, sf, _s(Iy()), Zn(e, 2, -2), 0);
}
function ll(e, t, r, n) {
  return ws(e, t, r, Za, Zn(e, 0, n), Zn(e, n + 1, -1), n);
}
function cn(e, t) {
  for (var r = "", n = ec(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function Vy(e, t, r, n) {
  switch (e.type) {
    case _y:
      if (e.children.length)
        break;
    case Oy:
    case Za:
      return e.return = e.return || e.value;
    case sf:
      return "";
    case af:
      return e.return = e.value + "{" + cn(e.children, n) + "}";
    case Ja:
      e.value = e.props.join(",");
  }
  return Kt(r = cn(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Uy(e) {
  var t = ec(e);
  return function(r, n, o, s) {
    for (var i = "", a = 0; a < t; a++)
      i += e[a](r, n, o, s) || "";
    return i;
  };
}
function qy(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function ff(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Wy = function(t, r, n) {
  for (var o = 0, s = 0; o = s, s = Zt(), o === 38 && s === 12 && (r[n] = 1), !eo(s); )
    Rt();
  return fo(t, Tt);
}, Yy = function(t, r) {
  var n = -1, o = 44;
  do
    switch (eo(o)) {
      case 0:
        o === 38 && Zt() === 12 && (r[n] = 1), t[n] += Wy(Tt - 1, r, n);
        break;
      case 2:
        t[n] += Wo(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Zt() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += _s(o);
    }
  while (o = Rt());
  return t;
}, Hy = function(t, r) {
  return df(Yy(uf(t), r));
}, ul = /* @__PURE__ */ new WeakMap(), Gy = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !ul.get(n)) && !o) {
      ul.set(t, !0);
      for (var s = [], i = Hy(r, s), a = n.props, d = 0, u = 0; d < i.length; d++)
        for (var f = 0; f < a.length; f++, u++)
          t.props[u] = s[d] ? i[d].replace(/&\f/g, a[f]) : a[f] + " " + i[d];
    }
  }
}, Ky = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function pf(e, t) {
  switch (Ay(e, t)) {
    case 5103:
      return ye + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ye + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ye + e + as + e + ht + e + e;
    case 6828:
    case 4268:
      return ye + e + ht + e + e;
    case 6165:
      return ye + e + ht + "flex-" + e + e;
    case 5187:
      return ye + e + be(e, /(\w+).+(:[^]+)/, ye + "box-$1$2" + ht + "flex-$1$2") + e;
    case 5443:
      return ye + e + ht + "flex-item-" + be(e, /flex-|-self/, "") + e;
    case 4675:
      return ye + e + ht + "flex-line-pack" + be(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ye + e + ht + be(e, "shrink", "negative") + e;
    case 5292:
      return ye + e + ht + be(e, "basis", "preferred-size") + e;
    case 6060:
      return ye + "box-" + be(e, "-grow", "") + ye + e + ht + be(e, "grow", "positive") + e;
    case 4554:
      return ye + be(e, /([^-])(transform)/g, "$1" + ye + "$2") + e;
    case 6187:
      return be(be(be(e, /(zoom-|grab)/, ye + "$1"), /(image-set)/, ye + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return be(e, /(image-set\([^]*)/, ye + "$1$`$1");
    case 4968:
      return be(be(e, /(.+:)(flex-)?(.*)/, ye + "box-pack:$3" + ht + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ye + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return be(e, /(.+)-inline(.+)/, ye + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Kt(e) - 1 - t > 6)
        switch (dt(e, t + 1)) {
          case 109:
            if (dt(e, t + 4) !== 45)
              break;
          case 102:
            return be(e, /(.+:)(.+)-([^]+)/, "$1" + ye + "$2-$3$1" + as + (dt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~aa(e, "stretch") ? pf(be(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (dt(e, t + 1) !== 115)
        break;
    case 6444:
      switch (dt(e, Kt(e) - 3 - (~aa(e, "!important") && 10))) {
        case 107:
          return be(e, ":", ":" + ye) + e;
        case 101:
          return be(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ye + (dt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ye + "$2$3$1" + ht + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (dt(e, t + 11)) {
        case 114:
          return ye + e + ht + be(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ye + e + ht + be(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ye + e + ht + be(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ye + e + ht + e + e;
  }
  return e;
}
var Qy = function(t, r, n, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Za:
        t.return = pf(t.value, t.length);
        break;
      case af:
        return cn([In(t, {
          value: be(t.value, "@", "@" + ye)
        })], o);
      case Ja:
        if (t.length)
          return ky(t.props, function(s) {
            switch (Ny(s, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return cn([In(t, {
                  props: [be(s, /:(read-\w+)/, ":" + as + "$1")]
                })], o);
              case "::placeholder":
                return cn([In(t, {
                  props: [be(s, /:(plac\w+)/, ":" + ye + "input-$1")]
                }), In(t, {
                  props: [be(s, /:(plac\w+)/, ":" + as + "$1")]
                }), In(t, {
                  props: [be(s, /:(plac\w+)/, ht + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, Xy = [Qy], hf = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(c) {
      var b = c.getAttribute("data-emotion");
      b.indexOf(" ") !== -1 && (document.head.appendChild(c), c.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Xy, s = {}, i, a = [];
  i = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(c) {
      for (var b = c.getAttribute("data-emotion").split(" "), x = 1; x < b.length; x++)
        s[b[x]] = !0;
      a.push(c);
    }
  );
  var d, u = [Gy, Ky];
  {
    var f, p = [Vy, qy(function(c) {
      f.insert(c);
    })], m = Uy(u.concat(o, p)), g = function(b) {
      return cn(By(b), m);
    };
    d = function(b, x, w, $) {
      f = w, g(b ? b + "{" + x.styles + "}" : x.styles), $ && (h.inserted[x.name] = !0);
    };
  }
  var h = {
    key: r,
    sheet: new Ry({
      key: r,
      container: i,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: s,
    registered: {},
    insert: d
  };
  return h.sheet.hydrate(a), h;
}, la = { exports: {} }, Ee = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dl;
function Jy() {
  if (dl)
    return Ee;
  dl = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, c = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function $(y) {
    if (typeof y == "object" && y !== null) {
      var P = y.$$typeof;
      switch (P) {
        case t:
          switch (y = y.type, y) {
            case d:
            case u:
            case n:
            case s:
            case o:
            case p:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case a:
                case f:
                case h:
                case g:
                case i:
                  return y;
                default:
                  return P;
              }
          }
        case r:
          return P;
      }
    }
  }
  function S(y) {
    return $(y) === u;
  }
  return Ee.AsyncMode = d, Ee.ConcurrentMode = u, Ee.ContextConsumer = a, Ee.ContextProvider = i, Ee.Element = t, Ee.ForwardRef = f, Ee.Fragment = n, Ee.Lazy = h, Ee.Memo = g, Ee.Portal = r, Ee.Profiler = s, Ee.StrictMode = o, Ee.Suspense = p, Ee.isAsyncMode = function(y) {
    return S(y) || $(y) === d;
  }, Ee.isConcurrentMode = S, Ee.isContextConsumer = function(y) {
    return $(y) === a;
  }, Ee.isContextProvider = function(y) {
    return $(y) === i;
  }, Ee.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, Ee.isForwardRef = function(y) {
    return $(y) === f;
  }, Ee.isFragment = function(y) {
    return $(y) === n;
  }, Ee.isLazy = function(y) {
    return $(y) === h;
  }, Ee.isMemo = function(y) {
    return $(y) === g;
  }, Ee.isPortal = function(y) {
    return $(y) === r;
  }, Ee.isProfiler = function(y) {
    return $(y) === s;
  }, Ee.isStrictMode = function(y) {
    return $(y) === o;
  }, Ee.isSuspense = function(y) {
    return $(y) === p;
  }, Ee.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === n || y === u || y === s || y === o || y === p || y === m || typeof y == "object" && y !== null && (y.$$typeof === h || y.$$typeof === g || y.$$typeof === i || y.$$typeof === a || y.$$typeof === f || y.$$typeof === b || y.$$typeof === x || y.$$typeof === w || y.$$typeof === c);
  }, Ee.typeOf = $, Ee;
}
var Te = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fl;
function Zy() {
  return fl || (fl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, c = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function $(T) {
      return typeof T == "string" || typeof T == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      T === n || T === u || T === s || T === o || T === p || T === m || typeof T == "object" && T !== null && (T.$$typeof === h || T.$$typeof === g || T.$$typeof === i || T.$$typeof === a || T.$$typeof === f || T.$$typeof === b || T.$$typeof === x || T.$$typeof === w || T.$$typeof === c);
    }
    function S(T) {
      if (typeof T == "object" && T !== null) {
        var ce = T.$$typeof;
        switch (ce) {
          case t:
            var xe = T.type;
            switch (xe) {
              case d:
              case u:
              case n:
              case s:
              case o:
              case p:
                return xe;
              default:
                var tt = xe && xe.$$typeof;
                switch (tt) {
                  case a:
                  case f:
                  case h:
                  case g:
                  case i:
                    return tt;
                  default:
                    return ce;
                }
            }
          case r:
            return ce;
        }
      }
    }
    var y = d, P = u, O = a, I = i, F = t, V = f, Q = n, q = h, L = g, j = r, ne = s, z = o, te = p, D = !1;
    function se(T) {
      return D || (D = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), _(T) || S(T) === d;
    }
    function _(T) {
      return S(T) === u;
    }
    function N(T) {
      return S(T) === a;
    }
    function W(T) {
      return S(T) === i;
    }
    function Y(T) {
      return typeof T == "object" && T !== null && T.$$typeof === t;
    }
    function M(T) {
      return S(T) === f;
    }
    function H(T) {
      return S(T) === n;
    }
    function U(T) {
      return S(T) === h;
    }
    function K(T) {
      return S(T) === g;
    }
    function X(T) {
      return S(T) === r;
    }
    function G(T) {
      return S(T) === s;
    }
    function Z(T) {
      return S(T) === o;
    }
    function ue(T) {
      return S(T) === p;
    }
    Te.AsyncMode = y, Te.ConcurrentMode = P, Te.ContextConsumer = O, Te.ContextProvider = I, Te.Element = F, Te.ForwardRef = V, Te.Fragment = Q, Te.Lazy = q, Te.Memo = L, Te.Portal = j, Te.Profiler = ne, Te.StrictMode = z, Te.Suspense = te, Te.isAsyncMode = se, Te.isConcurrentMode = _, Te.isContextConsumer = N, Te.isContextProvider = W, Te.isElement = Y, Te.isForwardRef = M, Te.isFragment = H, Te.isLazy = U, Te.isMemo = K, Te.isPortal = X, Te.isProfiler = G, Te.isStrictMode = Z, Te.isSuspense = ue, Te.isValidElementType = $, Te.typeOf = S;
  }()), Te;
}
process.env.NODE_ENV === "production" ? la.exports = Jy() : la.exports = Zy();
var eg = la.exports, mf = eg, tg = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, rg = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, yf = {};
yf[mf.ForwardRef] = tg;
yf[mf.Memo] = rg;
var ng = !0;
function gf(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var tc = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  ng === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, rc = function(t, r, n) {
  tc(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var s = r;
    do
      t.insert(r === s ? "." + o : "", s, t.sheet, !0), s = s.next;
    while (s !== void 0);
  }
};
function og(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var sg = {
  animationIterationCount: 1,
  aspectRatio: 1,
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
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, ig = !1, ag = /[A-Z]|^ms/g, cg = /_EMO_([^_]+?)_([^]*?)_EMO_/g, bf = function(t) {
  return t.charCodeAt(1) === 45;
}, pl = function(t) {
  return t != null && typeof t != "boolean";
}, $i = /* @__PURE__ */ ff(function(e) {
  return bf(e) ? e : e.replace(ag, "-$&").toLowerCase();
}), hl = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(cg, function(n, o, s) {
          return Qt = {
            name: o,
            styles: s,
            next: Qt
          }, o;
        });
  }
  return sg[t] !== 1 && !bf(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
}, lg = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function to(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return Qt = {
          name: o.name,
          styles: o.styles,
          next: Qt
        }, o.name;
      var s = r;
      if (s.styles !== void 0) {
        var i = s.next;
        if (i !== void 0)
          for (; i !== void 0; )
            Qt = {
              name: i.name,
              styles: i.styles,
              next: Qt
            }, i = i.next;
        var a = s.styles + ";";
        return a;
      }
      return ug(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var d = Qt, u = r(e);
        return Qt = d, to(e, t, u);
      }
      break;
    }
  }
  var f = r;
  if (t == null)
    return f;
  var p = t[f];
  return p !== void 0 ? p : f;
}
function ug(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += to(e, t, r[o]) + ";";
  else
    for (var s in r) {
      var i = r[s];
      if (typeof i != "object") {
        var a = i;
        t != null && t[a] !== void 0 ? n += s + "{" + t[a] + "}" : pl(a) && (n += $i(s) + ":" + hl(s, a) + ";");
      } else {
        if (s === "NO_COMPONENT_SELECTOR" && ig)
          throw new Error(lg);
        if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
          for (var d = 0; d < i.length; d++)
            pl(i[d]) && (n += $i(s) + ":" + hl(s, i[d]) + ";");
        else {
          var u = to(e, t, i);
          switch (s) {
            case "animation":
            case "animationName": {
              n += $i(s) + ":" + u + ";";
              break;
            }
            default:
              n += s + "{" + u + "}";
          }
        }
      }
    }
  return n;
}
var ml = /label:\s*([^\s;{]+)\s*(;|$)/g, Qt;
function po(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Qt = void 0;
  var s = e[0];
  if (s == null || s.raw === void 0)
    n = !1, o += to(r, t, s);
  else {
    var i = s;
    o += i[0];
  }
  for (var a = 1; a < e.length; a++)
    if (o += to(r, t, e[a]), n) {
      var d = s;
      o += d[a];
    }
  ml.lastIndex = 0;
  for (var u = "", f; (f = ml.exec(o)) !== null; )
    u += "-" + f[1];
  var p = og(o) + u;
  return {
    name: p,
    styles: o,
    next: Qt
  };
}
var dg = function(t) {
  return t();
}, vf = E["useInsertionEffect"] ? E["useInsertionEffect"] : !1, xf = vf || dg, yl = vf || E.useLayoutEffect, fg = !1, Ef = /* @__PURE__ */ E.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ hf({
    key: "css"
  }) : null
), pg = Ef.Provider, nc = function(t) {
  return /* @__PURE__ */ Zd(function(r, n) {
    var o = Xa(Ef);
    return t(r, o, n);
  });
}, En = /* @__PURE__ */ E.createContext({}), oc = {}.hasOwnProperty, ua = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", hg = function(t, r) {
  var n = {};
  for (var o in r)
    oc.call(r, o) && (n[o] = r[o]);
  return n[ua] = t, n;
}, mg = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return tc(r, n, o), xf(function() {
    return rc(r, n, o);
  }), null;
}, yg = /* @__PURE__ */ nc(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[ua], s = [n], i = "";
  typeof e.className == "string" ? i = gf(t.registered, s, e.className) : e.className != null && (i = e.className + " ");
  var a = po(s, void 0, E.useContext(En));
  i += t.key + "-" + a.name;
  var d = {};
  for (var u in e)
    oc.call(e, u) && u !== "css" && u !== ua && !fg && (d[u] = e[u]);
  return d.className = i, r && (d.ref = r), /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(mg, {
    cache: t,
    serialized: a,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ E.createElement(o, d));
}), gg = yg, Ri = { exports: {} }, gl;
function Tf() {
  return gl || (gl = 1, function(e) {
    function t() {
      return e.exports = t = Object.assign ? Object.assign.bind() : function(r) {
        for (var n = 1; n < arguments.length; n++) {
          var o = arguments[n];
          for (var s in o)
            ({}).hasOwnProperty.call(o, s) && (r[s] = o[s]);
        }
        return r;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(null, arguments);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Ri)), Ri.exports;
}
Tf();
var bl = function(t, r) {
  var n = arguments;
  if (r == null || !oc.call(r, "css"))
    return E.createElement.apply(void 0, n);
  var o = n.length, s = new Array(o);
  s[0] = gg, s[1] = hg(t, r);
  for (var i = 2; i < o; i++)
    s[i] = n[i];
  return E.createElement.apply(null, s);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(bl || (bl = {}));
var bg = /* @__PURE__ */ nc(function(e, t) {
  var r = e.styles, n = po([r], void 0, E.useContext(En)), o = E.useRef();
  return yl(function() {
    var s = t.key + "-global", i = new t.sheet.constructor({
      key: s,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), a = !1, d = document.querySelector('style[data-emotion="' + s + " " + n.name + '"]');
    return t.sheet.tags.length && (i.before = t.sheet.tags[0]), d !== null && (a = !0, d.setAttribute("data-emotion", s), i.hydrate([d])), o.current = [i, a], function() {
      i.flush();
    };
  }, [t]), yl(function() {
    var s = o.current, i = s[0], a = s[1];
    if (a) {
      s[1] = !1;
      return;
    }
    if (n.next !== void 0 && rc(t, n.next, !0), i.tags.length) {
      var d = i.tags[i.tags.length - 1].nextElementSibling;
      i.before = d, i.flush();
    }
    t.insert("", n, i, !1);
  }, [t, n.name]), null;
});
function Cf() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return po(t);
}
function As() {
  var e = Cf.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var vg = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, xg = /* @__PURE__ */ ff(
  function(e) {
    return vg.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Eg = !1, Tg = xg, Cg = function(t) {
  return t !== "theme";
}, vl = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Tg : Cg;
}, xl = function(t, r, n) {
  var o;
  if (r) {
    var s = r.shouldForwardProp;
    o = t.__emotion_forwardProp && s ? function(i) {
      return t.__emotion_forwardProp(i) && s(i);
    } : s;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, Sg = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return tc(r, n, o), xf(function() {
    return rc(r, n, o);
  }), null;
}, $g = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, s, i;
  r !== void 0 && (s = r.label, i = r.target);
  var a = xl(t, r, n), d = a || vl(o), u = !d("as");
  return function() {
    var f = arguments, p = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (s !== void 0 && p.push("label:" + s + ";"), f[0] == null || f[0].raw === void 0)
      p.push.apply(p, f);
    else {
      var m = f[0];
      p.push(m[0]);
      for (var g = f.length, h = 1; h < g; h++)
        p.push(f[h], m[h]);
    }
    var c = nc(function(b, x, w) {
      var $ = u && b.as || o, S = "", y = [], P = b;
      if (b.theme == null) {
        P = {};
        for (var O in b)
          P[O] = b[O];
        P.theme = E.useContext(En);
      }
      typeof b.className == "string" ? S = gf(x.registered, y, b.className) : b.className != null && (S = b.className + " ");
      var I = po(p.concat(y), x.registered, P);
      S += x.key + "-" + I.name, i !== void 0 && (S += " " + i);
      var F = u && a === void 0 ? vl($) : d, V = {};
      for (var Q in b)
        u && Q === "as" || F(Q) && (V[Q] = b[Q]);
      return V.className = S, w && (V.ref = w), /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(Sg, {
        cache: x,
        serialized: I,
        isStringTag: typeof $ == "string"
      }), /* @__PURE__ */ E.createElement($, V));
    });
    return c.displayName = s !== void 0 ? s : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", c.defaultProps = t.defaultProps, c.__emotion_real = c, c.__emotion_base = o, c.__emotion_styles = p, c.__emotion_forwardProp = a, Object.defineProperty(c, "toString", {
      value: function() {
        return i === void 0 && Eg ? "NO_COMPONENT_SELECTOR" : "." + i;
      }
    }), c.withComponent = function(b, x) {
      var w = e(b, A({}, r, x, {
        shouldForwardProp: xl(c, x, !0)
      }));
      return w.apply(void 0, p);
    }, c;
  };
}, Rg = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], da = $g.bind(null);
Rg.forEach(function(e) {
  da[e] = da(e);
});
var fa = { exports: {} }, No = { exports: {} }, Ce = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var El;
function Og() {
  if (El)
    return Ce;
  El = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, c = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function $(y) {
    if (typeof y == "object" && y !== null) {
      var P = y.$$typeof;
      switch (P) {
        case t:
          switch (y = y.type, y) {
            case d:
            case u:
            case n:
            case s:
            case o:
            case p:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case a:
                case f:
                case h:
                case g:
                case i:
                  return y;
                default:
                  return P;
              }
          }
        case r:
          return P;
      }
    }
  }
  function S(y) {
    return $(y) === u;
  }
  return Ce.AsyncMode = d, Ce.ConcurrentMode = u, Ce.ContextConsumer = a, Ce.ContextProvider = i, Ce.Element = t, Ce.ForwardRef = f, Ce.Fragment = n, Ce.Lazy = h, Ce.Memo = g, Ce.Portal = r, Ce.Profiler = s, Ce.StrictMode = o, Ce.Suspense = p, Ce.isAsyncMode = function(y) {
    return S(y) || $(y) === d;
  }, Ce.isConcurrentMode = S, Ce.isContextConsumer = function(y) {
    return $(y) === a;
  }, Ce.isContextProvider = function(y) {
    return $(y) === i;
  }, Ce.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, Ce.isForwardRef = function(y) {
    return $(y) === f;
  }, Ce.isFragment = function(y) {
    return $(y) === n;
  }, Ce.isLazy = function(y) {
    return $(y) === h;
  }, Ce.isMemo = function(y) {
    return $(y) === g;
  }, Ce.isPortal = function(y) {
    return $(y) === r;
  }, Ce.isProfiler = function(y) {
    return $(y) === s;
  }, Ce.isStrictMode = function(y) {
    return $(y) === o;
  }, Ce.isSuspense = function(y) {
    return $(y) === p;
  }, Ce.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === n || y === u || y === s || y === o || y === p || y === m || typeof y == "object" && y !== null && (y.$$typeof === h || y.$$typeof === g || y.$$typeof === i || y.$$typeof === a || y.$$typeof === f || y.$$typeof === b || y.$$typeof === x || y.$$typeof === w || y.$$typeof === c);
  }, Ce.typeOf = $, Ce;
}
var Se = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tl;
function _g() {
  return Tl || (Tl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, c = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function $(T) {
      return typeof T == "string" || typeof T == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      T === n || T === u || T === s || T === o || T === p || T === m || typeof T == "object" && T !== null && (T.$$typeof === h || T.$$typeof === g || T.$$typeof === i || T.$$typeof === a || T.$$typeof === f || T.$$typeof === b || T.$$typeof === x || T.$$typeof === w || T.$$typeof === c);
    }
    function S(T) {
      if (typeof T == "object" && T !== null) {
        var ce = T.$$typeof;
        switch (ce) {
          case t:
            var xe = T.type;
            switch (xe) {
              case d:
              case u:
              case n:
              case s:
              case o:
              case p:
                return xe;
              default:
                var tt = xe && xe.$$typeof;
                switch (tt) {
                  case a:
                  case f:
                  case h:
                  case g:
                  case i:
                    return tt;
                  default:
                    return ce;
                }
            }
          case r:
            return ce;
        }
      }
    }
    var y = d, P = u, O = a, I = i, F = t, V = f, Q = n, q = h, L = g, j = r, ne = s, z = o, te = p, D = !1;
    function se(T) {
      return D || (D = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), _(T) || S(T) === d;
    }
    function _(T) {
      return S(T) === u;
    }
    function N(T) {
      return S(T) === a;
    }
    function W(T) {
      return S(T) === i;
    }
    function Y(T) {
      return typeof T == "object" && T !== null && T.$$typeof === t;
    }
    function M(T) {
      return S(T) === f;
    }
    function H(T) {
      return S(T) === n;
    }
    function U(T) {
      return S(T) === h;
    }
    function K(T) {
      return S(T) === g;
    }
    function X(T) {
      return S(T) === r;
    }
    function G(T) {
      return S(T) === s;
    }
    function Z(T) {
      return S(T) === o;
    }
    function ue(T) {
      return S(T) === p;
    }
    Se.AsyncMode = y, Se.ConcurrentMode = P, Se.ContextConsumer = O, Se.ContextProvider = I, Se.Element = F, Se.ForwardRef = V, Se.Fragment = Q, Se.Lazy = q, Se.Memo = L, Se.Portal = j, Se.Profiler = ne, Se.StrictMode = z, Se.Suspense = te, Se.isAsyncMode = se, Se.isConcurrentMode = _, Se.isContextConsumer = N, Se.isContextProvider = W, Se.isElement = Y, Se.isForwardRef = M, Se.isFragment = H, Se.isLazy = U, Se.isMemo = K, Se.isPortal = X, Se.isProfiler = G, Se.isStrictMode = Z, Se.isSuspense = ue, Se.isValidElementType = $, Se.typeOf = S;
  }()), Se;
}
var Cl;
function Sf() {
  return Cl || (Cl = 1, process.env.NODE_ENV === "production" ? No.exports = Og() : No.exports = _g()), No.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Oi, Sl;
function Pg() {
  if (Sl)
    return Oi;
  Sl = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var i = {}, a = 0; a < 10; a++)
        i["_" + String.fromCharCode(a)] = a;
      var d = Object.getOwnPropertyNames(i).map(function(f) {
        return i[f];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        u[f] = f;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Oi = o() ? Object.assign : function(s, i) {
    for (var a, d = n(s), u, f = 1; f < arguments.length; f++) {
      a = Object(arguments[f]);
      for (var p in a)
        t.call(a, p) && (d[p] = a[p]);
      if (e) {
        u = e(a);
        for (var m = 0; m < u.length; m++)
          r.call(a, u[m]) && (d[u[m]] = a[u[m]]);
      }
    }
    return d;
  }, Oi;
}
var _i, $l;
function sc() {
  if ($l)
    return _i;
  $l = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return _i = e, _i;
}
var Pi, Rl;
function $f() {
  return Rl || (Rl = 1, Pi = Function.call.bind(Object.prototype.hasOwnProperty)), Pi;
}
var wi, Ol;
function wg() {
  if (Ol)
    return wi;
  Ol = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = sc(), r = {}, n = $f();
    e = function(s) {
      var i = "Warning: " + s;
      typeof console < "u" && console.error(i);
      try {
        throw new Error(i);
      } catch {
      }
    };
  }
  function o(s, i, a, d, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in s)
        if (n(s, f)) {
          var p;
          try {
            if (typeof s[f] != "function") {
              var m = Error(
                (d || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            p = s[f](i, f, d, a, null, t);
          } catch (h) {
            p = h;
          }
          if (p && !(p instanceof Error) && e(
            (d || "React class") + ": type specification of " + a + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in r)) {
            r[p.message] = !0;
            var g = u ? u() : "";
            e(
              "Failed " + a + " type: " + p.message + (g ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, wi = o, wi;
}
var Ai, _l;
function Ag() {
  if (_l)
    return Ai;
  _l = 1;
  var e = Sf(), t = Pg(), r = sc(), n = $f(), o = wg(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(a) {
    var d = "Warning: " + a;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function i() {
    return null;
  }
  return Ai = function(a, d) {
    var u = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function p(_) {
      var N = _ && (u && _[u] || _[f]);
      if (typeof N == "function")
        return N;
    }
    var m = "<<anonymous>>", g = {
      array: x("array"),
      bigint: x("bigint"),
      bool: x("boolean"),
      func: x("function"),
      number: x("number"),
      object: x("object"),
      string: x("string"),
      symbol: x("symbol"),
      any: w(),
      arrayOf: $,
      element: S(),
      elementType: y(),
      instanceOf: P,
      node: V(),
      objectOf: I,
      oneOf: O,
      oneOfType: F,
      shape: q,
      exact: L
    };
    function h(_, N) {
      return _ === N ? _ !== 0 || 1 / _ === 1 / N : _ !== _ && N !== N;
    }
    function c(_, N) {
      this.message = _, this.data = N && typeof N == "object" ? N : {}, this.stack = "";
    }
    c.prototype = Error.prototype;
    function b(_) {
      if (process.env.NODE_ENV !== "production")
        var N = {}, W = 0;
      function Y(H, U, K, X, G, Z, ue) {
        if (X = X || m, Z = Z || K, ue !== r) {
          if (d) {
            var T = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw T.name = "Invariant Violation", T;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ce = X + ":" + K;
            !N[ce] && // Avoid spamming the console because they are often not actionable except for lib authors
            W < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + Z + "` prop on `" + X + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), N[ce] = !0, W++);
          }
        }
        return U[K] == null ? H ? U[K] === null ? new c("The " + G + " `" + Z + "` is marked as required " + ("in `" + X + "`, but its value is `null`.")) : new c("The " + G + " `" + Z + "` is marked as required in " + ("`" + X + "`, but its value is `undefined`.")) : null : _(U, K, X, G, Z);
      }
      var M = Y.bind(null, !1);
      return M.isRequired = Y.bind(null, !0), M;
    }
    function x(_) {
      function N(W, Y, M, H, U, K) {
        var X = W[Y], G = z(X);
        if (G !== _) {
          var Z = te(X);
          return new c(
            "Invalid " + H + " `" + U + "` of type " + ("`" + Z + "` supplied to `" + M + "`, expected ") + ("`" + _ + "`."),
            { expectedType: _ }
          );
        }
        return null;
      }
      return b(N);
    }
    function w() {
      return b(i);
    }
    function $(_) {
      function N(W, Y, M, H, U) {
        if (typeof _ != "function")
          return new c("Property `" + U + "` of component `" + M + "` has invalid PropType notation inside arrayOf.");
        var K = W[Y];
        if (!Array.isArray(K)) {
          var X = z(K);
          return new c("Invalid " + H + " `" + U + "` of type " + ("`" + X + "` supplied to `" + M + "`, expected an array."));
        }
        for (var G = 0; G < K.length; G++) {
          var Z = _(K, G, M, H, U + "[" + G + "]", r);
          if (Z instanceof Error)
            return Z;
        }
        return null;
      }
      return b(N);
    }
    function S() {
      function _(N, W, Y, M, H) {
        var U = N[W];
        if (!a(U)) {
          var K = z(U);
          return new c("Invalid " + M + " `" + H + "` of type " + ("`" + K + "` supplied to `" + Y + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(_);
    }
    function y() {
      function _(N, W, Y, M, H) {
        var U = N[W];
        if (!e.isValidElementType(U)) {
          var K = z(U);
          return new c("Invalid " + M + " `" + H + "` of type " + ("`" + K + "` supplied to `" + Y + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(_);
    }
    function P(_) {
      function N(W, Y, M, H, U) {
        if (!(W[Y] instanceof _)) {
          var K = _.name || m, X = se(W[Y]);
          return new c("Invalid " + H + " `" + U + "` of type " + ("`" + X + "` supplied to `" + M + "`, expected ") + ("instance of `" + K + "`."));
        }
        return null;
      }
      return b(N);
    }
    function O(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), i;
      function N(W, Y, M, H, U) {
        for (var K = W[Y], X = 0; X < _.length; X++)
          if (h(K, _[X]))
            return null;
        var G = JSON.stringify(_, function(ue, T) {
          var ce = te(T);
          return ce === "symbol" ? String(T) : T;
        });
        return new c("Invalid " + H + " `" + U + "` of value `" + String(K) + "` " + ("supplied to `" + M + "`, expected one of " + G + "."));
      }
      return b(N);
    }
    function I(_) {
      function N(W, Y, M, H, U) {
        if (typeof _ != "function")
          return new c("Property `" + U + "` of component `" + M + "` has invalid PropType notation inside objectOf.");
        var K = W[Y], X = z(K);
        if (X !== "object")
          return new c("Invalid " + H + " `" + U + "` of type " + ("`" + X + "` supplied to `" + M + "`, expected an object."));
        for (var G in K)
          if (n(K, G)) {
            var Z = _(K, G, M, H, U + "." + G, r);
            if (Z instanceof Error)
              return Z;
          }
        return null;
      }
      return b(N);
    }
    function F(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var N = 0; N < _.length; N++) {
        var W = _[N];
        if (typeof W != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + D(W) + " at index " + N + "."
          ), i;
      }
      function Y(M, H, U, K, X) {
        for (var G = [], Z = 0; Z < _.length; Z++) {
          var ue = _[Z], T = ue(M, H, U, K, X, r);
          if (T == null)
            return null;
          T.data && n(T.data, "expectedType") && G.push(T.data.expectedType);
        }
        var ce = G.length > 0 ? ", expected one of type [" + G.join(", ") + "]" : "";
        return new c("Invalid " + K + " `" + X + "` supplied to " + ("`" + U + "`" + ce + "."));
      }
      return b(Y);
    }
    function V() {
      function _(N, W, Y, M, H) {
        return j(N[W]) ? null : new c("Invalid " + M + " `" + H + "` supplied to " + ("`" + Y + "`, expected a ReactNode."));
      }
      return b(_);
    }
    function Q(_, N, W, Y, M) {
      return new c(
        (_ || "React class") + ": " + N + " type `" + W + "." + Y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + M + "`."
      );
    }
    function q(_) {
      function N(W, Y, M, H, U) {
        var K = W[Y], X = z(K);
        if (X !== "object")
          return new c("Invalid " + H + " `" + U + "` of type `" + X + "` " + ("supplied to `" + M + "`, expected `object`."));
        for (var G in _) {
          var Z = _[G];
          if (typeof Z != "function")
            return Q(M, H, U, G, te(Z));
          var ue = Z(K, G, M, H, U + "." + G, r);
          if (ue)
            return ue;
        }
        return null;
      }
      return b(N);
    }
    function L(_) {
      function N(W, Y, M, H, U) {
        var K = W[Y], X = z(K);
        if (X !== "object")
          return new c("Invalid " + H + " `" + U + "` of type `" + X + "` " + ("supplied to `" + M + "`, expected `object`."));
        var G = t({}, W[Y], _);
        for (var Z in G) {
          var ue = _[Z];
          if (n(_, Z) && typeof ue != "function")
            return Q(M, H, U, Z, te(ue));
          if (!ue)
            return new c(
              "Invalid " + H + " `" + U + "` key `" + Z + "` supplied to `" + M + "`.\nBad object: " + JSON.stringify(W[Y], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(_), null, "  ")
            );
          var T = ue(K, Z, M, H, U + "." + Z, r);
          if (T)
            return T;
        }
        return null;
      }
      return b(N);
    }
    function j(_) {
      switch (typeof _) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !_;
        case "object":
          if (Array.isArray(_))
            return _.every(j);
          if (_ === null || a(_))
            return !0;
          var N = p(_);
          if (N) {
            var W = N.call(_), Y;
            if (N !== _.entries) {
              for (; !(Y = W.next()).done; )
                if (!j(Y.value))
                  return !1;
            } else
              for (; !(Y = W.next()).done; ) {
                var M = Y.value;
                if (M && !j(M[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ne(_, N) {
      return _ === "symbol" ? !0 : N ? N["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && N instanceof Symbol : !1;
    }
    function z(_) {
      var N = typeof _;
      return Array.isArray(_) ? "array" : _ instanceof RegExp ? "object" : ne(N, _) ? "symbol" : N;
    }
    function te(_) {
      if (typeof _ > "u" || _ === null)
        return "" + _;
      var N = z(_);
      if (N === "object") {
        if (_ instanceof Date)
          return "date";
        if (_ instanceof RegExp)
          return "regexp";
      }
      return N;
    }
    function D(_) {
      var N = te(_);
      switch (N) {
        case "array":
        case "object":
          return "an " + N;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + N;
        default:
          return N;
      }
    }
    function se(_) {
      return !_.constructor || !_.constructor.name ? m : _.constructor.name;
    }
    return g.checkPropTypes = o, g.resetWarningCache = o.resetWarningCache, g.PropTypes = g, g;
  }, Ai;
}
var Ni, Pl;
function Ng() {
  if (Pl)
    return Ni;
  Pl = 1;
  var e = sc();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Ni = function() {
    function n(i, a, d, u, f, p) {
      if (p !== e) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var s = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, Ni;
}
if (process.env.NODE_ENV !== "production") {
  var kg = Sf(), Ig = !0;
  fa.exports = Ag()(kg.isElement, Ig);
} else
  fa.exports = Ng()();
var Mg = fa.exports;
const l = /* @__PURE__ */ tf(Mg);
function jg(e, t) {
  const r = hf({
    key: "css",
    prepend: e
  });
  if (t) {
    const n = r.insert;
    r.insert = (...o) => (o[1].styles.match(/^@layer\s+[^{]*$/) || (o[1].styles = `@layer mui {${o[1].styles}}`), n(...o));
  }
  return r;
}
const ki = /* @__PURE__ */ new Map();
function Rf(e) {
  const {
    injectFirst: t,
    enableCssLayer: r,
    children: n
  } = e, o = E.useMemo(() => {
    const s = `${t}-${r}`;
    if (typeof document == "object" && ki.has(s))
      return ki.get(s);
    const i = jg(t, r);
    return ki.set(s, i), i;
  }, [t, r]);
  return t || r ? /* @__PURE__ */ v.jsx(pg, {
    value: o,
    children: n
  }) : n;
}
process.env.NODE_ENV !== "production" && (Rf.propTypes = {
  /**
   * Your component tree.
   */
  children: l.node,
  /**
   * If true, MUI styles are wrapped in CSS `@layer mui` rule.
   * It helps to override MUI styles when using CSS Modules, Tailwind CSS, plain CSS, or any other styling solution.
   */
  enableCssLayer: l.bool,
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: l.bool
});
function Dg(e) {
  return e == null || Object.keys(e).length === 0;
}
function ic(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e, n = typeof t == "function" ? (o) => t(Dg(o) ? r : o) : t;
  return /* @__PURE__ */ v.jsx(bg, {
    styles: n
  });
}
process.env.NODE_ENV !== "production" && (ic.propTypes = {
  defaultTheme: l.object,
  styles: l.oneOfType([l.array, l.string, l.object, l.func])
});
/**
 * @mui/styled-engine v5.18.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Of(e, t) {
  const r = da(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((s) => s === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
const Fg = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, wl = [];
function _f(e) {
  return wl[0] = e, po(wl);
}
const Lg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: ic,
  StyledEngineProvider: Rf,
  ThemeContext: En,
  css: Cf,
  default: Of,
  internal_processStyles: Fg,
  internal_serializeStyles: _f,
  keyframes: As
}, Symbol.toStringTag, { value: "Module" }));
function gr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Pf(e) {
  if (/* @__PURE__ */ E.isValidElement(e) || !gr(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Pf(e[r]);
  }), t;
}
function er(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? A({}, e) : e;
  return gr(e) && gr(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ E.isValidElement(t[o]) ? n[o] = t[o] : gr(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && gr(e[o]) ? n[o] = er(e[o], t[o], r) : r.clone ? n[o] = gr(t[o]) ? Pf(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
const Bg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: er,
  isPlainObject: gr
}, Symbol.toStringTag, { value: "Module" })), zg = ["values", "unit", "step"], Vg = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => A({}, r, {
    [n.key]: n.val
  }), {});
};
function wf(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5
  } = e, o = de(e, zg), s = Vg(t), i = Object.keys(s);
  function a(m) {
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${r})`;
  }
  function d(m) {
    return `@media (max-width:${(typeof t[m] == "number" ? t[m] : m) - n / 100}${r})`;
  }
  function u(m, g) {
    const h = i.indexOf(g);
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${r}) and (max-width:${(h !== -1 && typeof t[i[h]] == "number" ? t[i[h]] : g) - n / 100}${r})`;
  }
  function f(m) {
    return i.indexOf(m) + 1 < i.length ? u(m, i[i.indexOf(m) + 1]) : a(m);
  }
  function p(m) {
    const g = i.indexOf(m);
    return g === 0 ? a(i[1]) : g === i.length - 1 ? d(i[g]) : u(m, i[i.indexOf(m) + 1]).replace("@media", "@media not all and");
  }
  return A({
    keys: i,
    values: s,
    up: a,
    down: d,
    between: u,
    only: f,
    not: p,
    unit: r
  }, o);
}
const Ug = {
  borderRadius: 4
}, qg = Ug, Wg = process.env.NODE_ENV !== "production" ? l.oneOfType([l.number, l.string, l.object, l.array]) : {}, Tr = Wg;
function Yn(e, t) {
  return t ? er(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const ac = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Al = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${ac[e]}px)`
};
function jt(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const s = n.breakpoints || Al;
    return t.reduce((i, a, d) => (i[s.up(s.keys[d])] = r(t[d]), i), {});
  }
  if (typeof t == "object") {
    const s = n.breakpoints || Al;
    return Object.keys(t).reduce((i, a) => {
      if (Object.keys(s.values || ac).indexOf(a) !== -1) {
        const d = s.up(a);
        i[d] = r(t[a], a);
      } else {
        const d = a;
        i[d] = t[d];
      }
      return i;
    }, {});
  }
  return r(t);
}
function Yg(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((n, o) => {
    const s = e.up(o);
    return n[s] = {}, n;
  }, {})) || {};
}
function Nl(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function Hg(e, t) {
  if (typeof e != "object")
    return {};
  const r = {}, n = Object.keys(t);
  return Array.isArray(e) ? n.forEach((o, s) => {
    s < e.length && (r[o] = !0);
  }) : n.forEach((o) => {
    e[o] != null && (r[o] = !0);
  }), r;
}
function Ns({
  values: e,
  breakpoints: t,
  base: r
}) {
  const n = r || Hg(e, t), o = Object.keys(n);
  if (o.length === 0)
    return e;
  let s;
  return o.reduce((i, a, d) => (Array.isArray(e) ? (i[a] = e[d] != null ? e[d] : e[s], s = d) : typeof e == "object" ? (i[a] = e[a] != null ? e[a] : e[s], s = a) : i[a] = e, i), {});
}
function oe(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Jn(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const Gg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: oe
}, Symbol.toStringTag, { value: "Module" }));
function ks(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, s) => o && o[s] ? o[s] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function cs(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = ks(e, r) || n, t && (o = t(o, n, e)), o;
}
function Qe(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, s = (i) => {
    if (i[t] == null)
      return null;
    const a = i[t], d = i.theme, u = ks(d, n) || {};
    return jt(i, a, (p) => {
      let m = cs(u, o, p);
      return p === m && typeof p == "string" && (m = cs(u, o, `${t}${p === "default" ? "" : oe(p)}`, p)), r === !1 ? m : {
        [r]: m
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Tr
  } : {}, s.filterProps = [t], s;
}
function Kg(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Qg = {
  m: "margin",
  p: "padding"
}, Xg = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, kl = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Jg = Kg((e) => {
  if (e.length > 2)
    if (kl[e])
      e = kl[e];
    else
      return [e];
  const [t, r] = e.split(""), n = Qg[t], o = Xg[r] || "";
  return Array.isArray(o) ? o.map((s) => n + s) : [n + o];
}), Is = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Ms = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Zg = [...Is, ...Ms];
function ho(e, t, r, n) {
  var o;
  const s = (o = ks(e, t, !1)) != null ? o : r;
  return typeof s == "number" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), s * i) : Array.isArray(s) ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && (Number.isInteger(i) ? i > s.length - 1 && console.error([`MUI: The value provided (${i}) overflows.`, `The supported values are: ${JSON.stringify(s)}.`, `${i} > ${s.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), s[i]) : typeof s == "function" ? s : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${s}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Af(e) {
  return ho(e, "spacing", 8, "spacing");
}
function mo(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const r = Math.abs(t), n = e(r);
  return t >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function eb(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = mo(t, r), n), {});
}
function tb(e, t, r, n) {
  if (t.indexOf(r) === -1)
    return null;
  const o = Jg(r), s = eb(o, n), i = e[r];
  return jt(e, i, s);
}
function Nf(e, t) {
  const r = Af(e.theme);
  return Object.keys(e).map((n) => tb(e, t, n, r)).reduce(Yn, {});
}
function We(e) {
  return Nf(e, Is);
}
We.propTypes = process.env.NODE_ENV !== "production" ? Is.reduce((e, t) => (e[t] = Tr, e), {}) : {};
We.filterProps = Is;
function Ye(e) {
  return Nf(e, Ms);
}
Ye.propTypes = process.env.NODE_ENV !== "production" ? Ms.reduce((e, t) => (e[t] = Tr, e), {}) : {};
Ye.filterProps = Ms;
process.env.NODE_ENV !== "production" && Zg.reduce((e, t) => (e[t] = Tr, e), {});
function rb(e = 8) {
  if (e.mui)
    return e;
  const t = Af({
    spacing: e
  }), r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((s) => {
    const i = t(s);
    return typeof i == "number" ? `${i}px` : i;
  }).join(" "));
  return r.mui = !0, r;
}
function js(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((s) => {
    n[s] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, s) => t[s] ? Yn(o, t[s](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function It(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Lt(e, t) {
  return Qe({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const nb = Lt("border", It), ob = Lt("borderTop", It), sb = Lt("borderRight", It), ib = Lt("borderBottom", It), ab = Lt("borderLeft", It), cb = Lt("borderColor"), lb = Lt("borderTopColor"), ub = Lt("borderRightColor"), db = Lt("borderBottomColor"), fb = Lt("borderLeftColor"), pb = Lt("outline", It), hb = Lt("outlineColor"), Ds = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = ho(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: mo(t, n)
    });
    return jt(e, e.borderRadius, r);
  }
  return null;
};
Ds.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Tr
} : {};
Ds.filterProps = ["borderRadius"];
js(nb, ob, sb, ib, ab, cb, lb, ub, db, fb, Ds, pb, hb);
const Fs = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = ho(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: mo(t, n)
    });
    return jt(e, e.gap, r);
  }
  return null;
};
Fs.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Tr
} : {};
Fs.filterProps = ["gap"];
const Ls = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = ho(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: mo(t, n)
    });
    return jt(e, e.columnGap, r);
  }
  return null;
};
Ls.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Tr
} : {};
Ls.filterProps = ["columnGap"];
const Bs = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = ho(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: mo(t, n)
    });
    return jt(e, e.rowGap, r);
  }
  return null;
};
Bs.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Tr
} : {};
Bs.filterProps = ["rowGap"];
const mb = Qe({
  prop: "gridColumn"
}), yb = Qe({
  prop: "gridRow"
}), gb = Qe({
  prop: "gridAutoFlow"
}), bb = Qe({
  prop: "gridAutoColumns"
}), vb = Qe({
  prop: "gridAutoRows"
}), xb = Qe({
  prop: "gridTemplateColumns"
}), Eb = Qe({
  prop: "gridTemplateRows"
}), Tb = Qe({
  prop: "gridTemplateAreas"
}), Cb = Qe({
  prop: "gridArea"
});
js(Fs, Ls, Bs, mb, yb, gb, bb, vb, xb, Eb, Tb, Cb);
function ln(e, t) {
  return t === "grey" ? t : e;
}
const Sb = Qe({
  prop: "color",
  themeKey: "palette",
  transform: ln
}), $b = Qe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: ln
}), Rb = Qe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: ln
});
js(Sb, $b, Rb);
function St(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Ob = Qe({
  prop: "width",
  transform: St
}), cc = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var n, o;
      const s = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[r]) || ac[r];
      return s ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${s}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: s
      } : {
        maxWidth: St(r)
      };
    };
    return jt(e, e.maxWidth, t);
  }
  return null;
};
cc.filterProps = ["maxWidth"];
const _b = Qe({
  prop: "minWidth",
  transform: St
}), Pb = Qe({
  prop: "height",
  transform: St
}), wb = Qe({
  prop: "maxHeight",
  transform: St
}), Ab = Qe({
  prop: "minHeight",
  transform: St
});
Qe({
  prop: "size",
  cssProperty: "width",
  transform: St
});
Qe({
  prop: "size",
  cssProperty: "height",
  transform: St
});
const Nb = Qe({
  prop: "boxSizing"
});
js(Ob, cc, _b, Pb, wb, Ab, Nb);
const kb = {
  // borders
  border: {
    themeKey: "borders",
    transform: It
  },
  borderTop: {
    themeKey: "borders",
    transform: It
  },
  borderRight: {
    themeKey: "borders",
    transform: It
  },
  borderBottom: {
    themeKey: "borders",
    transform: It
  },
  borderLeft: {
    themeKey: "borders",
    transform: It
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: It
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Ds
  },
  // palette
  color: {
    themeKey: "palette",
    transform: ln
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: ln
  },
  backgroundColor: {
    themeKey: "palette",
    transform: ln
  },
  // spacing
  p: {
    style: Ye
  },
  pt: {
    style: Ye
  },
  pr: {
    style: Ye
  },
  pb: {
    style: Ye
  },
  pl: {
    style: Ye
  },
  px: {
    style: Ye
  },
  py: {
    style: Ye
  },
  padding: {
    style: Ye
  },
  paddingTop: {
    style: Ye
  },
  paddingRight: {
    style: Ye
  },
  paddingBottom: {
    style: Ye
  },
  paddingLeft: {
    style: Ye
  },
  paddingX: {
    style: Ye
  },
  paddingY: {
    style: Ye
  },
  paddingInline: {
    style: Ye
  },
  paddingInlineStart: {
    style: Ye
  },
  paddingInlineEnd: {
    style: Ye
  },
  paddingBlock: {
    style: Ye
  },
  paddingBlockStart: {
    style: Ye
  },
  paddingBlockEnd: {
    style: Ye
  },
  m: {
    style: We
  },
  mt: {
    style: We
  },
  mr: {
    style: We
  },
  mb: {
    style: We
  },
  ml: {
    style: We
  },
  mx: {
    style: We
  },
  my: {
    style: We
  },
  margin: {
    style: We
  },
  marginTop: {
    style: We
  },
  marginRight: {
    style: We
  },
  marginBottom: {
    style: We
  },
  marginLeft: {
    style: We
  },
  marginX: {
    style: We
  },
  marginY: {
    style: We
  },
  marginInline: {
    style: We
  },
  marginInlineStart: {
    style: We
  },
  marginInlineEnd: {
    style: We
  },
  marginBlock: {
    style: We
  },
  marginBlockStart: {
    style: We
  },
  marginBlockEnd: {
    style: We
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Fs
  },
  rowGap: {
    style: Bs
  },
  columnGap: {
    style: Ls
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: St
  },
  maxWidth: {
    style: cc
  },
  minWidth: {
    transform: St
  },
  height: {
    transform: St
  },
  maxHeight: {
    transform: St
  },
  minHeight: {
    transform: St
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, yo = kb;
function Ib(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Mb(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function kf() {
  function e(r, n, o, s) {
    const i = {
      [r]: n,
      theme: o
    }, a = s[r];
    if (!a)
      return {
        [r]: n
      };
    const {
      cssProperty: d = r,
      themeKey: u,
      transform: f,
      style: p
    } = a;
    if (n == null)
      return null;
    if (u === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const m = ks(o, u) || {};
    return p ? p(i) : jt(i, n, (h) => {
      let c = cs(m, f, h);
      return h === c && typeof h == "string" && (c = cs(m, f, `${r}${h === "default" ? "" : oe(h)}`, h)), d === !1 ? c : {
        [d]: c
      };
    });
  }
  function t(r) {
    var n;
    const {
      sx: o,
      theme: s = {},
      nested: i
    } = r || {};
    if (!o)
      return null;
    const a = (n = s.unstable_sxConfig) != null ? n : yo;
    function d(u) {
      let f = u;
      if (typeof u == "function")
        f = u(s);
      else if (typeof u != "object")
        return u;
      if (!f)
        return null;
      const p = Yg(s.breakpoints), m = Object.keys(p);
      let g = p;
      return Object.keys(f).forEach((h) => {
        const c = Mb(f[h], s);
        if (c != null)
          if (typeof c == "object")
            if (a[h])
              g = Yn(g, e(h, c, s, a));
            else {
              const b = jt({
                theme: s
              }, c, (x) => ({
                [h]: x
              }));
              Ib(b, c) ? g[h] = t({
                sx: c,
                theme: s,
                nested: !0
              }) : g = Yn(g, b);
            }
          else
            g = Yn(g, e(h, c, s, a));
      }), !i && s.modularCssLayers ? {
        "@layer sx": Nl(m, g)
      } : Nl(m, g);
    }
    return Array.isArray(o) ? o.map(d) : d(o);
  }
  return t;
}
const If = kf();
If.filterProps = ["sx"];
const zs = If;
function Mf(e, t) {
  const r = this;
  return r.vars && typeof r.getColorSchemeSelector == "function" ? {
    [r.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : r.palette.mode === e ? t : {};
}
const jb = ["breakpoints", "palette", "spacing", "shape"];
function lc(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: s = {}
  } = e, i = de(e, jb), a = wf(r), d = rb(o);
  let u = er({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: A({
      mode: "light"
    }, n),
    spacing: d,
    shape: A({}, qg, s)
  }, i);
  return u.applyStyles = Mf, u = t.reduce((f, p) => er(f, p), u), u.unstable_sxConfig = A({}, yo, i == null ? void 0 : i.unstable_sxConfig), u.unstable_sx = function(p) {
    return zs({
      sx: p,
      theme: this
    });
  }, u;
}
const Db = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lc,
  private_createBreakpoints: wf,
  unstable_applyStyles: Mf
}, Symbol.toStringTag, { value: "Module" }));
function Fb(e) {
  return Object.keys(e).length === 0;
}
function uc(e = null) {
  const t = E.useContext(En);
  return !t || Fb(t) ? e : t;
}
const Lb = lc();
function dc(e = Lb) {
  return uc(e);
}
function Ii(e) {
  const t = _f(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function fc({
  styles: e,
  themeId: t,
  defaultTheme: r = {}
}) {
  const n = dc(r), o = t && n[t] || n;
  let s = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(s) ? s = s.map((i) => Ii(typeof i == "function" ? i(o) : i)) : s = Ii(s)), /* @__PURE__ */ v.jsx(ic, {
    styles: s
  });
}
process.env.NODE_ENV !== "production" && (fc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: l.object,
  /**
   * @ignore
   */
  styles: l.oneOfType([l.array, l.func, l.number, l.object, l.string, l.bool]),
  /**
   * @ignore
   */
  themeId: l.string
});
const Bb = ["sx"], zb = (e) => {
  var t, r;
  const n = {
    systemProps: {},
    otherProps: {}
  }, o = (t = e == null || (r = e.theme) == null ? void 0 : r.unstable_sxConfig) != null ? t : yo;
  return Object.keys(e).forEach((s) => {
    o[s] ? n.systemProps[s] = e[s] : n.otherProps[s] = e[s];
  }), n;
};
function Vs(e) {
  const {
    sx: t
  } = e, r = de(e, Bb), {
    systemProps: n,
    otherProps: o
  } = zb(r);
  let s;
  return Array.isArray(t) ? s = [n, ...t] : typeof t == "function" ? s = (...i) => {
    const a = t(...i);
    return gr(a) ? A({}, n, a) : n;
  } : s = A({}, n, t), A({}, o, {
    sx: s
  });
}
const Vb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zs,
  extendSxProp: Vs,
  unstable_createStyleFunctionSx: kf,
  unstable_defaultSxConfig: yo
}, Symbol.toStringTag, { value: "Module" })), Il = (e) => e, Ub = () => {
  let e = Il;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Il;
    }
  };
}, qb = Ub(), jf = qb;
function Df(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (r = Df(e[t])) && (n && (n += " "), n += r);
    } else
      for (r in e)
        e[r] && (n && (n += " "), n += r);
  return n;
}
function ae() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
    (e = arguments[r]) && (t = Df(e)) && (n && (n += " "), n += t);
  return n;
}
const Wb = ["className", "component"];
function Yb(e = {}) {
  const {
    themeId: t,
    defaultTheme: r,
    defaultClassName: n = "MuiBox-root",
    generateClassName: o
  } = e, s = Of("div", {
    shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as"
  })(zs);
  return /* @__PURE__ */ E.forwardRef(function(d, u) {
    const f = dc(r), p = Vs(d), {
      className: m,
      component: g = "div"
    } = p, h = de(p, Wb);
    return /* @__PURE__ */ v.jsx(s, A({
      as: g,
      ref: u,
      className: ae(m, o ? o(n) : n),
      theme: t && f[t] || f
    }, h));
  });
}
const Hb = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Ve(e, t, r = "Mui") {
  const n = Hb[t];
  return n ? `${r}-${n}` : `${jf.generate(e)}-${t}`;
}
function Ue(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = Ve(e, o, r);
  }), n;
}
var pa = { exports: {} }, we = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ml;
function Gb() {
  if (Ml)
    return we;
  Ml = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), i = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.view_transition"), g = Symbol.for("react.client.reference");
  function h(c) {
    if (typeof c == "object" && c !== null) {
      var b = c.$$typeof;
      switch (b) {
        case e:
          switch (c = c.type, c) {
            case r:
            case o:
            case n:
            case d:
            case u:
            case m:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case i:
                case a:
                case p:
                case f:
                  return c;
                case s:
                  return c;
                default:
                  return b;
              }
          }
        case t:
          return b;
      }
    }
  }
  return we.ContextConsumer = s, we.ContextProvider = i, we.Element = e, we.ForwardRef = a, we.Fragment = r, we.Lazy = p, we.Memo = f, we.Portal = t, we.Profiler = o, we.StrictMode = n, we.Suspense = d, we.SuspenseList = u, we.isContextConsumer = function(c) {
    return h(c) === s;
  }, we.isContextProvider = function(c) {
    return h(c) === i;
  }, we.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === e;
  }, we.isForwardRef = function(c) {
    return h(c) === a;
  }, we.isFragment = function(c) {
    return h(c) === r;
  }, we.isLazy = function(c) {
    return h(c) === p;
  }, we.isMemo = function(c) {
    return h(c) === f;
  }, we.isPortal = function(c) {
    return h(c) === t;
  }, we.isProfiler = function(c) {
    return h(c) === o;
  }, we.isStrictMode = function(c) {
    return h(c) === n;
  }, we.isSuspense = function(c) {
    return h(c) === d;
  }, we.isSuspenseList = function(c) {
    return h(c) === u;
  }, we.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === r || c === o || c === n || c === d || c === u || typeof c == "object" && c !== null && (c.$$typeof === p || c.$$typeof === f || c.$$typeof === i || c.$$typeof === s || c.$$typeof === a || c.$$typeof === g || c.getModuleId !== void 0);
  }, we.typeOf = h, we;
}
var Ae = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jl;
function Kb() {
  return jl || (jl = 1, process.env.NODE_ENV !== "production" && function() {
    function e(c) {
      if (typeof c == "object" && c !== null) {
        var b = c.$$typeof;
        switch (b) {
          case t:
            switch (c = c.type, c) {
              case n:
              case s:
              case o:
              case u:
              case f:
              case g:
                return c;
              default:
                switch (c = c && c.$$typeof, c) {
                  case a:
                  case d:
                  case m:
                  case p:
                    return c;
                  case i:
                    return c;
                  default:
                    return b;
                }
            }
          case r:
            return b;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), a = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.view_transition"), h = Symbol.for("react.client.reference");
    Ae.ContextConsumer = i, Ae.ContextProvider = a, Ae.Element = t, Ae.ForwardRef = d, Ae.Fragment = n, Ae.Lazy = m, Ae.Memo = p, Ae.Portal = r, Ae.Profiler = s, Ae.StrictMode = o, Ae.Suspense = u, Ae.SuspenseList = f, Ae.isContextConsumer = function(c) {
      return e(c) === i;
    }, Ae.isContextProvider = function(c) {
      return e(c) === a;
    }, Ae.isElement = function(c) {
      return typeof c == "object" && c !== null && c.$$typeof === t;
    }, Ae.isForwardRef = function(c) {
      return e(c) === d;
    }, Ae.isFragment = function(c) {
      return e(c) === n;
    }, Ae.isLazy = function(c) {
      return e(c) === m;
    }, Ae.isMemo = function(c) {
      return e(c) === p;
    }, Ae.isPortal = function(c) {
      return e(c) === r;
    }, Ae.isProfiler = function(c) {
      return e(c) === s;
    }, Ae.isStrictMode = function(c) {
      return e(c) === o;
    }, Ae.isSuspense = function(c) {
      return e(c) === u;
    }, Ae.isSuspenseList = function(c) {
      return e(c) === f;
    }, Ae.isValidElementType = function(c) {
      return typeof c == "string" || typeof c == "function" || c === n || c === s || c === o || c === u || c === f || typeof c == "object" && c !== null && (c.$$typeof === m || c.$$typeof === p || c.$$typeof === a || c.$$typeof === i || c.$$typeof === d || c.$$typeof === h || c.getModuleId !== void 0);
    }, Ae.typeOf = e;
  }()), Ae;
}
process.env.NODE_ENV === "production" ? pa.exports = Gb() : pa.exports = Kb();
var Dl = pa.exports;
const Qb = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Ff(e) {
  const t = `${e}`.match(Qb);
  return t && t[1] || "";
}
function Lf(e, t = "") {
  return e.displayName || e.name || Ff(e) || t;
}
function Fl(e, t, r) {
  const n = Lf(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function Xb(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Lf(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Dl.ForwardRef:
          return Fl(e, e.render, "ForwardRef");
        case Dl.Memo:
          return Fl(e, e.type, "memo");
        default:
          return;
      }
  }
}
const Jb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xb,
  getFunctionName: Ff
}, Symbol.toStringTag, { value: "Module" }));
function ls(e, t) {
  const r = A({}, t);
  return Object.keys(e).forEach((n) => {
    if (n.toString().match(/^(components|slots)$/))
      r[n] = A({}, e[n], r[n]);
    else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[n] || {}, s = t[n];
      r[n] = {}, !s || !Object.keys(s) ? r[n] = o : !o || !Object.keys(o) ? r[n] = s : (r[n] = A({}, s), Object.keys(o).forEach((i) => {
        r[n][i] = ls(o[i], s[i]);
      }));
    } else
      r[n] === void 0 && (r[n] = e[n]);
  }), r;
}
const Zb = typeof window < "u" ? E.useLayoutEffect : E.useEffect, mn = Zb;
function ev(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
const tv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ev
}, Symbol.toStringTag, { value: "Module" }));
function Cr(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function rv(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Bf(e, t, r, n, o) {
  const s = e[t], i = o || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  const d = s.type;
  return typeof d == "function" && !rv(d) && (a = "Did you accidentally use a plain function component for an element instead?"), a !== void 0 ? new Error(`Invalid ${n} \`${i}\` supplied to \`${r}\`. Expected an element that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const zf = Cr(l.element, Bf);
zf.isRequired = Cr(l.element.isRequired, Bf);
const Us = zf;
function nv(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function ov(e, t, r, n, o) {
  const s = e[t], i = o || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  return typeof s == "function" && !nv(s) && (a = "Did you accidentally provide a plain function component instead?"), a !== void 0 ? new Error(`Invalid ${n} \`${i}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Vf = Cr(l.elementType, ov), sv = "exact-prop: ​";
function qs(e) {
  return process.env.NODE_ENV === "production" ? e : A({}, e, {
    [sv]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function pc(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = e[t], i = o || t;
  return s == null ? null : s && s.nodeType !== 1 ? new Error(`Invalid ${n} \`${i}\` supplied to \`${r}\`. Expected an HTMLElement.`) : null;
}
const iv = l.oneOfType([l.func, l.object]), av = iv;
function Ll(...e) {
  return e.reduce((t, r) => r == null ? t : function(...o) {
    t.apply(this, o), r.apply(this, o);
  }, () => {
  });
}
function cv(e, t = 166) {
  let r;
  function n(...o) {
    const s = () => {
      e.apply(this, o);
    };
    clearTimeout(r), r = setTimeout(s, t);
  }
  return n.clear = () => {
    clearTimeout(r);
  }, n;
}
function Uf(e, t) {
  var r, n;
  return /* @__PURE__ */ E.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (r = e.type.muiName) != null ? r : (n = e.type) == null || (n = n._payload) == null || (n = n.value) == null ? void 0 : n.muiName
  ) !== -1;
}
function Er(e) {
  return e && e.ownerDocument || document;
}
function go(e) {
  return Er(e).defaultView || window;
}
function lv(e, t) {
  if (process.env.NODE_ENV === "production")
    return () => null;
  const r = t ? A({}, t.propTypes) : null;
  return (o) => (s, i, a, d, u, ...f) => {
    const p = u || i, m = r == null ? void 0 : r[p];
    if (m) {
      const g = m(s, i, a, d, u, ...f);
      if (g)
        return g;
    }
    return typeof s[i] < "u" && !s[o] ? new Error(`The prop \`${p}\` of \`${e}\` can only be used together with the \`${o}\` prop.`) : null;
  };
}
function ha(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Bl = 0;
function uv(e) {
  const [t, r] = E.useState(e), n = e || t;
  return E.useEffect(() => {
    t == null && (Bl += 1, r(`mui-${Bl}`));
  }, [t]), n;
}
const zl = E["useId".toString()];
function dv(e) {
  if (zl !== void 0) {
    const t = zl();
    return e ?? t;
  }
  return uv(e);
}
function fv(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = o || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${s}\` is not supported. Please remove it.`) : null;
}
function on(e) {
  const t = E.useRef(e);
  return mn(() => {
    t.current = e;
  }), E.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function qt(...e) {
  return E.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      ha(r, t);
    });
  }, e);
}
const Vl = {};
function pv(e, t) {
  const r = E.useRef(Vl);
  return r.current === Vl && (r.current = e(t)), r;
}
const hv = [];
function mv(e) {
  E.useEffect(e, hv);
}
let qf = class Wf {
  constructor() {
    this.currentId = null, this.clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new Wf();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
};
function yv() {
  const e = pv(qf.create).current;
  return mv(e.disposeEffect), e;
}
let Ws = !0, ma = !1;
const gv = new qf(), bv = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function vv(e) {
  const {
    type: t,
    tagName: r
  } = e;
  return !!(r === "INPUT" && bv[t] && !e.readOnly || r === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function xv(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Ws = !0);
}
function Mi() {
  Ws = !1;
}
function Ev() {
  this.visibilityState === "hidden" && ma && (Ws = !0);
}
function Tv(e) {
  e.addEventListener("keydown", xv, !0), e.addEventListener("mousedown", Mi, !0), e.addEventListener("pointerdown", Mi, !0), e.addEventListener("touchstart", Mi, !0), e.addEventListener("visibilitychange", Ev, !0);
}
function Cv(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return Ws || vv(t);
}
function Sv() {
  const e = E.useCallback((o) => {
    o != null && Tv(o.ownerDocument);
  }, []), t = E.useRef(!1);
  function r() {
    return t.current ? (ma = !0, gv.start(100, () => {
      ma = !1;
    }), t.current = !1, !0) : !1;
  }
  function n(o) {
    return Cv(o) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: n,
    onBlur: r,
    ref: e
  };
}
function $v(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function Rv(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function Ov(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const _v = Number.isInteger || Ov;
function Yf(e, t, r, n) {
  const o = e[t];
  if (o == null || !_v(o)) {
    const s = Rv(o);
    return new RangeError(`Invalid ${n} \`${t}\` of type \`${s}\` supplied to \`${r}\`, expected \`integer\`.`);
  }
  return null;
}
function Hf(e, t, ...r) {
  return e[t] === void 0 ? null : Yf(e, t, ...r);
}
function ya() {
  return null;
}
Hf.isRequired = Yf;
ya.isRequired = ya;
const Gf = process.env.NODE_ENV === "production" ? ya : Hf;
function Xe(e, t, r = void 0) {
  const n = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (o) => {
      n[o] = e[o].reduce((s, i) => {
        if (i) {
          const a = t(i);
          a !== "" && s.push(a), r && r[i] && s.push(r[i]);
        }
        return s;
      }, []).join(" ");
    }
  ), n;
}
function ga(e) {
  return typeof e == "string";
}
function Pv(e, t, r) {
  return e === void 0 || ga(e) ? t : A({}, t, {
    ownerState: A({}, t.ownerState, r)
  });
}
function Kf(e, t = []) {
  if (e === void 0)
    return {};
  const r = {};
  return Object.keys(e).filter((n) => n.match(/^on[A-Z]/) && typeof e[n] == "function" && !t.includes(n)).forEach((n) => {
    r[n] = e[n];
  }), r;
}
function Ul(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((r) => !(r.match(/^on[A-Z]/) && typeof e[r] == "function")).forEach((r) => {
    t[r] = e[r];
  }), t;
}
function wv(e) {
  const {
    getSlotProps: t,
    additionalProps: r,
    externalSlotProps: n,
    externalForwardedProps: o,
    className: s
  } = e;
  if (!t) {
    const g = ae(r == null ? void 0 : r.className, s, o == null ? void 0 : o.className, n == null ? void 0 : n.className), h = A({}, r == null ? void 0 : r.style, o == null ? void 0 : o.style, n == null ? void 0 : n.style), c = A({}, r, o, n);
    return g.length > 0 && (c.className = g), Object.keys(h).length > 0 && (c.style = h), {
      props: c,
      internalRef: void 0
    };
  }
  const i = Kf(A({}, o, n)), a = Ul(n), d = Ul(o), u = t(i), f = ae(u == null ? void 0 : u.className, r == null ? void 0 : r.className, s, o == null ? void 0 : o.className, n == null ? void 0 : n.className), p = A({}, u == null ? void 0 : u.style, r == null ? void 0 : r.style, o == null ? void 0 : o.style, n == null ? void 0 : n.style), m = A({}, u, r, d, a);
  return f.length > 0 && (m.className = f), Object.keys(p).length > 0 && (m.style = p), {
    props: m,
    internalRef: u.ref
  };
}
function Av(e, t, r) {
  return typeof e == "function" ? e(t, r) : e;
}
const Nv = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function ql(e) {
  var t;
  const {
    elementType: r,
    externalSlotProps: n,
    ownerState: o,
    skipResolvingSlotProps: s = !1
  } = e, i = de(e, Nv), a = s ? {} : Av(n, o), {
    props: d,
    internalRef: u
  } = wv(A({}, i, {
    externalSlotProps: a
  })), f = qt(u, a == null ? void 0 : a.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return Pv(r, A({}, d, {
    ref: f
  }), o);
}
function Ys(e) {
  if (parseInt(E.version, 10) >= 19) {
    var t;
    return (e == null || (t = e.props) == null ? void 0 : t.ref) || null;
  }
  return (e == null ? void 0 : e.ref) || null;
}
const Qf = /* @__PURE__ */ E.createContext(null);
process.env.NODE_ENV !== "production" && (Qf.displayName = "ThemeContext");
const Xf = Qf;
function Jf() {
  const e = E.useContext(Xf);
  return process.env.NODE_ENV !== "production" && E.useDebugValue(e), e;
}
const kv = typeof Symbol == "function" && Symbol.for, Iv = kv ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Mv(e, t) {
  if (typeof t == "function") {
    const r = t(e);
    return process.env.NODE_ENV !== "production" && (r || console.error(["MUI: You should return an object from your theme function, i.e.", "<ThemeProvider theme={() => ({})} />"].join(`
`))), r;
  }
  return A({}, e, t);
}
function us(e) {
  const {
    children: t,
    theme: r
  } = e, n = Jf();
  process.env.NODE_ENV !== "production" && n === null && typeof r == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const o = E.useMemo(() => {
    const s = n === null ? r : Mv(n, r);
    return s != null && (s[Iv] = n !== null), s;
  }, [r, n]);
  return /* @__PURE__ */ v.jsx(Xf.Provider, {
    value: o,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (us.propTypes = {
  /**
   * Your component tree.
   */
  children: l.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: l.oneOfType([l.object, l.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (us.propTypes = qs(us.propTypes));
const jv = ["value"], Zf = /* @__PURE__ */ E.createContext();
function ep(e) {
  let {
    value: t
  } = e, r = de(e, jv);
  return /* @__PURE__ */ v.jsx(Zf.Provider, A({
    value: t ?? !0
  }, r));
}
process.env.NODE_ENV !== "production" && (ep.propTypes = {
  children: l.node,
  value: l.bool
});
const Dv = () => {
  const e = E.useContext(Zf);
  return e ?? !1;
}, tp = /* @__PURE__ */ E.createContext(void 0);
function rp({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ v.jsx(tp.Provider, {
    value: e,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (rp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: l.node,
  /**
   * @ignore
   */
  value: l.object
});
function Fv(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? ls(o.defaultProps, n) : !o.styleOverrides && !o.variants ? ls(o, n) : n;
}
function Lv({
  props: e,
  name: t
}) {
  const r = E.useContext(tp);
  return Fv({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
function Bv(e) {
  const t = uc(), r = dv() || "", {
    modularCssLayers: n
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !n || t !== null ? o = "" : typeof n == "string" ? o = n.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, mn(() => {
    const s = document.querySelector("head");
    if (!s)
      return;
    const i = s.firstChild;
    if (o) {
      var a;
      if (i && (a = i.hasAttribute) != null && a.call(i, "data-mui-layer-order") && i.getAttribute("data-mui-layer-order") === r)
        return;
      const u = document.createElement("style");
      u.setAttribute("data-mui-layer-order", r), u.textContent = o, s.prepend(u);
    } else {
      var d;
      (d = s.querySelector(`style[data-mui-layer-order="${r}"]`)) == null || d.remove();
    }
  }, [o, r]), o ? /* @__PURE__ */ v.jsx(fc, {
    styles: o
  }) : null;
}
const Wl = {};
function Yl(e, t, r, n = !1) {
  return E.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof r == "function") {
      const s = r(o), i = e ? A({}, t, {
        [e]: s
      }) : s;
      return n ? () => i : i;
    }
    return e ? A({}, t, {
      [e]: r
    }) : A({}, t, r);
  }, [e, t, r, n]);
}
function ds(e) {
  const {
    children: t,
    theme: r,
    themeId: n
  } = e, o = uc(Wl), s = Jf() || Wl;
  process.env.NODE_ENV !== "production" && (o === null && typeof r == "function" || n && o && !o[n] && typeof r == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const i = Yl(n, o, r), a = Yl(n, s, r, !0), d = i.direction === "rtl", u = Bv(i);
  return /* @__PURE__ */ v.jsx(us, {
    theme: a,
    children: /* @__PURE__ */ v.jsx(En.Provider, {
      value: i,
      children: /* @__PURE__ */ v.jsx(ep, {
        value: d,
        children: /* @__PURE__ */ v.jsxs(rp, {
          value: i == null ? void 0 : i.components,
          children: [u, t]
        })
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (ds.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Your component tree.
   */
  children: l.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: l.oneOfType([l.func, l.object]).isRequired,
  /**
   * The design system's unique id for getting the corresponded theme when there are multiple design systems.
   */
  themeId: l.string
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (ds.propTypes = qs(ds.propTypes));
function zv(e, t) {
  return A({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, t);
}
var Je = {}, np = { exports: {} };
(function(e) {
  function t(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(np);
var op = np.exports;
const Vv = /* @__PURE__ */ gt(Ty), Uv = /* @__PURE__ */ gt(tv);
var sp = op;
Object.defineProperty(Je, "__esModule", {
  value: !0
});
var De = Je.alpha = lp;
Je.blend = t0;
Je.colorChannel = void 0;
var qv = Je.darken = mc;
Je.decomposeColor = Dt;
Je.emphasize = up;
var Hl = Je.getContrastRatio = Qv;
Je.getLuminance = fs;
Je.hexToRgb = ip;
Je.hslToRgb = cp;
var Wv = Je.lighten = yc;
Je.private_safeAlpha = Xv;
Je.private_safeColorChannel = void 0;
Je.private_safeDarken = Jv;
Je.private_safeEmphasize = e0;
Je.private_safeLighten = Zv;
Je.recomposeColor = Tn;
Je.rgbToHex = Kv;
var Gl = sp(Vv), Yv = sp(Uv);
function hc(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), (0, Yv.default)(e, t, r);
}
function ip(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Hv(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function Dt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Dt(ip(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(r) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, Gl.default)(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, Gl.default)(10, o));
  } else
    n = n.split(",");
  return n = n.map((s) => parseFloat(s)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const ap = (e) => {
  const t = Dt(e);
  return t.values.slice(0, 3).map((r, n) => t.type.indexOf("hsl") !== -1 && n !== 0 ? `${r}%` : r).join(" ");
};
Je.colorChannel = ap;
const Gv = (e, t) => {
  try {
    return ap(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
Je.private_safeColorChannel = Gv;
function Tn(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.indexOf("rgb") !== -1 ? n = n.map((o, s) => s < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.indexOf("color") !== -1 ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function Kv(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: t
  } = Dt(e);
  return `#${t.map((r, n) => Hv(n === 3 ? Math.round(255 * r) : r)).join("")}`;
}
function cp(e) {
  e = Dt(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, s = n * Math.min(o, 1 - o), i = (u, f = (u + r / 30) % 12) => o - s * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let a = "rgb";
  const d = [Math.round(i(0) * 255), Math.round(i(8) * 255), Math.round(i(4) * 255)];
  return e.type === "hsla" && (a += "a", d.push(t[3])), Tn({
    type: a,
    values: d
  });
}
function fs(e) {
  e = Dt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Dt(cp(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Qv(e, t) {
  const r = fs(e), n = fs(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function lp(e, t) {
  return e = Dt(e), t = hc(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Tn(e);
}
function Xv(e, t, r) {
  try {
    return lp(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function mc(e, t) {
  if (e = Dt(e), t = hc(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return Tn(e);
}
function Jv(e, t, r) {
  try {
    return mc(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function yc(e, t) {
  if (e = Dt(e), t = hc(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return Tn(e);
}
function Zv(e, t, r) {
  try {
    return yc(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function up(e, t = 0.15) {
  return fs(e) > 0.5 ? mc(e, t) : yc(e, t);
}
function e0(e, t, r) {
  try {
    return up(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function t0(e, t, r, n = 1) {
  const o = (d, u) => Math.round((d ** (1 / n) * (1 - r) + u ** (1 / n) * r) ** n), s = Dt(e), i = Dt(t), a = [o(s.values[0], i.values[0]), o(s.values[1], i.values[1]), o(s.values[2], i.values[2])];
  return Tn({
    type: "rgb",
    values: a
  });
}
const r0 = {
  black: "#000",
  white: "#fff"
}, ro = r0, n0 = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, o0 = n0, s0 = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, Ur = s0, i0 = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, qr = i0, a0 = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, Mn = a0, c0 = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, Wr = c0, l0 = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, Yr = l0, u0 = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, Hr = u0, d0 = ["mode", "contrastThreshold", "tonalOffset"], Kl = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: ro.white,
    default: ro.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, ji = {
  text: {
    primary: ro.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: ro.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function Ql(e, t, r, n) {
  const o = n.light || n, s = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Wv(e.main, o) : t === "dark" && (e.dark = qv(e.main, s)));
}
function f0(e = "light") {
  return e === "dark" ? {
    main: Wr[200],
    light: Wr[50],
    dark: Wr[400]
  } : {
    main: Wr[700],
    light: Wr[400],
    dark: Wr[800]
  };
}
function p0(e = "light") {
  return e === "dark" ? {
    main: Ur[200],
    light: Ur[50],
    dark: Ur[400]
  } : {
    main: Ur[500],
    light: Ur[300],
    dark: Ur[700]
  };
}
function h0(e = "light") {
  return e === "dark" ? {
    main: qr[500],
    light: qr[300],
    dark: qr[700]
  } : {
    main: qr[700],
    light: qr[400],
    dark: qr[800]
  };
}
function m0(e = "light") {
  return e === "dark" ? {
    main: Yr[400],
    light: Yr[300],
    dark: Yr[700]
  } : {
    main: Yr[700],
    light: Yr[500],
    dark: Yr[900]
  };
}
function y0(e = "light") {
  return e === "dark" ? {
    main: Hr[400],
    light: Hr[300],
    dark: Hr[700]
  } : {
    main: Hr[800],
    light: Hr[500],
    dark: Hr[900]
  };
}
function g0(e = "light") {
  return e === "dark" ? {
    main: Mn[400],
    light: Mn[300],
    dark: Mn[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Mn[500],
    dark: Mn[900]
  };
}
function b0(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2
  } = e, o = de(e, d0), s = e.primary || f0(t), i = e.secondary || p0(t), a = e.error || h0(t), d = e.info || m0(t), u = e.success || y0(t), f = e.warning || g0(t);
  function p(c) {
    const b = Hl(c, ji.text.primary) >= r ? ji.text.primary : Kl.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const x = Hl(c, b);
      x < 3 && console.error([`MUI: The contrast ratio of ${x}:1 for ${b} on ${c}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return b;
  }
  const m = ({
    color: c,
    name: b,
    mainShade: x = 500,
    lightShade: w = 300,
    darkShade: $ = 700
  }) => {
    if (c = A({}, c), !c.main && c[x] && (c.main = c[x]), !c.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${b ? ` (${b})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${x}\` property.` : Jn(11, b ? ` (${b})` : "", x));
    if (typeof c.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${b ? ` (${b})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(c.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Jn(12, b ? ` (${b})` : "", JSON.stringify(c.main)));
    return Ql(c, "light", w, n), Ql(c, "dark", $, n), c.contrastText || (c.contrastText = p(c.main)), c;
  }, g = {
    dark: ji,
    light: Kl
  };
  return process.env.NODE_ENV !== "production" && (g[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), er(A({
    // A collection of common colors.
    common: A({}, ro),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: m({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: m({
      color: i,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: m({
      color: a,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: m({
      color: f,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: m({
      color: d,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: m({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: o0,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: m,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, g[t]), o);
}
const v0 = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function x0(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Xl = {
  textTransform: "uppercase"
}, Jl = '"Roboto", "Helvetica", "Arial", sans-serif';
function E0(e, t) {
  const r = typeof t == "function" ? t(e) : t, {
    fontFamily: n = Jl,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: s = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: d = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: p
  } = r, m = de(r, v0);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const g = o / 14, h = p || ((x) => `${x / u * g}rem`), c = (x, w, $, S, y) => A({
    fontFamily: n,
    fontWeight: x,
    fontSize: h(w),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: $
  }, n === Jl ? {
    letterSpacing: `${x0(S / w)}em`
  } : {}, y, f), b = {
    h1: c(s, 96, 1.167, -1.5),
    h2: c(s, 60, 1.2, -0.5),
    h3: c(i, 48, 1.167, 0),
    h4: c(i, 34, 1.235, 0.25),
    h5: c(i, 24, 1.334, 0),
    h6: c(a, 20, 1.6, 0.15),
    subtitle1: c(i, 16, 1.75, 0.15),
    subtitle2: c(a, 14, 1.57, 0.1),
    body1: c(i, 16, 1.5, 0.15),
    body2: c(i, 14, 1.43, 0.15),
    button: c(a, 14, 1.75, 0.4, Xl),
    caption: c(i, 12, 1.66, 0.4),
    overline: c(i, 12, 2.66, 1, Xl),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return er(A({
    htmlFontSize: u,
    pxToRem: h,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: s,
    fontWeightRegular: i,
    fontWeightMedium: a,
    fontWeightBold: d
  }, b), m, {
    clone: !1
    // No need to clone deep
  });
}
const T0 = 0.2, C0 = 0.14, S0 = 0.12;
function Le(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${T0})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${C0})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${S0})`].join(",");
}
const $0 = ["none", Le(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Le(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Le(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Le(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Le(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Le(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Le(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Le(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Le(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Le(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Le(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Le(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Le(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Le(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Le(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Le(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Le(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Le(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Le(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Le(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Le(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Le(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Le(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Le(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], R0 = $0, O0 = ["duration", "easing", "delay"], _0 = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, P0 = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Zl(e) {
  return `${Math.round(e)}ms`;
}
function w0(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function A0(e) {
  const t = A({}, _0, e.easing), r = A({}, P0, e.duration);
  return A({
    getAutoHeightDuration: w0,
    create: (o = ["all"], s = {}) => {
      const {
        duration: i = r.standard,
        easing: a = t.easeInOut,
        delay: d = 0
      } = s, u = de(s, O0);
      if (process.env.NODE_ENV !== "production") {
        const f = (m) => typeof m == "string", p = (m) => !isNaN(parseFloat(m));
        !f(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !p(i) && !f(i) && console.error(`MUI: Argument "duration" must be a number or a string but found ${i}.`), f(a) || console.error('MUI: Argument "easing" must be a string.'), !p(d) && !f(d) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((f) => `${f} ${typeof i == "string" ? i : Zl(i)} ${a} ${typeof d == "string" ? d : Zl(d)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: r
  });
}
const N0 = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, k0 = N0, I0 = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function dp(e = {}, ...t) {
  const {
    mixins: r = {},
    palette: n = {},
    transitions: o = {},
    typography: s = {}
  } = e, i = de(e, I0);
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateCssVars` is the closest identifier for checking that the `options` is a result of `extendTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateCssVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Jn(18));
  const a = b0(n), d = lc(e);
  let u = er(d, {
    mixins: zv(d.breakpoints, r),
    palette: a,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: R0.slice(),
    typography: E0(a, s),
    transitions: A0(o),
    zIndex: A({}, k0)
  });
  if (u = er(u, i), u = t.reduce((f, p) => er(f, p), u), process.env.NODE_ENV !== "production") {
    const f = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], p = (m, g) => {
      let h;
      for (h in m) {
        const c = m[h];
        if (f.indexOf(h) !== -1 && Object.keys(c).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const b = Ve("", h);
            console.error([`MUI: The \`${g}\` component increases the CSS specificity of the \`${h}\` internal state.`, "You can not override it like this: ", JSON.stringify(m, null, 2), "", `Instead, you need to use the '&.${b}' syntax:`, JSON.stringify({
              root: {
                [`&.${b}`]: c
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          m[h] = {};
        }
      }
    };
    Object.keys(u.components).forEach((m) => {
      const g = u.components[m].styleOverrides;
      g && m.indexOf("Mui") === 0 && p(g, m);
    });
  }
  return u.unstable_sxConfig = A({}, yo, i == null ? void 0 : i.unstable_sxConfig), u.unstable_sx = function(p) {
    return zs({
      sx: p,
      theme: this
    });
  }, u;
}
const M0 = dp(), gc = M0;
function bo() {
  const e = dc(gc);
  return process.env.NODE_ENV !== "production" && E.useDebugValue(e), e[pn] || e;
}
var vo = {}, Di = { exports: {} }, eu;
function j0() {
  return eu || (eu = 1, function(e) {
    function t(r, n) {
      if (r == null)
        return {};
      var o = {};
      for (var s in r)
        if ({}.hasOwnProperty.call(r, s)) {
          if (n.indexOf(s) !== -1)
            continue;
          o[s] = r[s];
        }
      return o;
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Di)), Di.exports;
}
const D0 = /* @__PURE__ */ gt(Lg), F0 = /* @__PURE__ */ gt(Bg), L0 = /* @__PURE__ */ gt(Gg), B0 = /* @__PURE__ */ gt(Jb), z0 = /* @__PURE__ */ gt(Db), V0 = /* @__PURE__ */ gt(Vb);
var Cn = op;
Object.defineProperty(vo, "__esModule", {
  value: !0
});
var U0 = vo.default = n1;
vo.shouldForwardProp = Ho;
vo.systemDefaultTheme = void 0;
var Pt = Cn(Tf()), ba = Cn(j0()), ps = J0(D0), q0 = F0, W0 = Cn(L0), Y0 = Cn(B0), H0 = Cn(z0), G0 = Cn(V0);
const K0 = ["ownerState"], Q0 = ["variants"], X0 = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function fp(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (fp = function(n) {
    return n ? r : t;
  })(e);
}
function J0(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = fp(t);
  if (r && r.has(e))
    return r.get(e);
  var n = { __proto__: null }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var s in e)
    if (s !== "default" && Object.prototype.hasOwnProperty.call(e, s)) {
      var i = o ? Object.getOwnPropertyDescriptor(e, s) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, s, i) : n[s] = e[s];
    }
  return n.default = e, r && r.set(e, n), n;
}
function Z0(e) {
  return Object.keys(e).length === 0;
}
function e1(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Ho(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function tu(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
const t1 = vo.systemDefaultTheme = (0, H0.default)(), ru = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function ko({
  defaultTheme: e,
  theme: t,
  themeId: r
}) {
  return Z0(t) ? e : t[r] || t;
}
function r1(e) {
  return e ? (t, r) => r[e] : null;
}
function Go(e, t, r) {
  let {
    ownerState: n
  } = t, o = (0, ba.default)(t, K0);
  const s = typeof e == "function" ? e((0, Pt.default)({
    ownerState: n
  }, o)) : e;
  if (Array.isArray(s))
    return s.flatMap((i) => Go(i, (0, Pt.default)({
      ownerState: n
    }, o), r));
  if (s && typeof s == "object" && Array.isArray(s.variants)) {
    const {
      variants: i = []
    } = s;
    let d = (0, ba.default)(s, Q0);
    return i.forEach((u) => {
      let f = !0;
      if (typeof u.props == "function" ? f = u.props((0, Pt.default)({
        ownerState: n
      }, o, n)) : Object.keys(u.props).forEach((p) => {
        (n == null ? void 0 : n[p]) !== u.props[p] && o[p] !== u.props[p] && (f = !1);
      }), f) {
        Array.isArray(d) || (d = [d]);
        const p = typeof u.style == "function" ? u.style((0, Pt.default)({
          ownerState: n
        }, o, n)) : u.style;
        d.push(r ? tu((0, ps.internal_serializeStyles)(p), r) : p);
      }
    }), d;
  }
  return r ? tu((0, ps.internal_serializeStyles)(s), r) : s;
}
function n1(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = t1,
    rootShouldForwardProp: n = Ho,
    slotShouldForwardProp: o = Ho
  } = e, s = (i) => (0, G0.default)((0, Pt.default)({}, i, {
    theme: ko((0, Pt.default)({}, i, {
      defaultTheme: r,
      themeId: t
    }))
  }));
  return s.__mui_systemSx = !0, (i, a = {}) => {
    (0, ps.internal_processStyles)(i, (P) => P.filter((O) => !(O != null && O.__mui_systemSx)));
    const {
      name: d,
      slot: u,
      skipVariantsResolver: f,
      skipSx: p,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: m = r1(ru(u))
    } = a, g = (0, ba.default)(a, X0), h = d && d.startsWith("Mui") || u ? "components" : "custom", c = f !== void 0 ? f : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), b = p || !1;
    let x;
    process.env.NODE_ENV !== "production" && d && (x = `${d}-${ru(u || "Root")}`);
    let w = Ho;
    u === "Root" || u === "root" ? w = n : u ? w = o : e1(i) && (w = void 0);
    const $ = (0, ps.default)(i, (0, Pt.default)({
      shouldForwardProp: w,
      label: x
    }, g)), S = (P) => typeof P == "function" && P.__emotion_real !== P || (0, q0.isPlainObject)(P) ? (O) => {
      const I = ko({
        theme: O.theme,
        defaultTheme: r,
        themeId: t
      });
      return Go(P, (0, Pt.default)({}, O, {
        theme: I
      }), I.modularCssLayers ? h : void 0);
    } : P, y = (P, ...O) => {
      let I = S(P);
      const F = O ? O.map(S) : [];
      d && m && F.push((q) => {
        const L = ko((0, Pt.default)({}, q, {
          defaultTheme: r,
          themeId: t
        }));
        if (!L.components || !L.components[d] || !L.components[d].styleOverrides)
          return null;
        const j = L.components[d].styleOverrides, ne = {};
        return Object.entries(j).forEach(([z, te]) => {
          ne[z] = Go(te, (0, Pt.default)({}, q, {
            theme: L
          }), L.modularCssLayers ? "theme" : void 0);
        }), m(q, ne);
      }), d && !c && F.push((q) => {
        var L;
        const j = ko((0, Pt.default)({}, q, {
          defaultTheme: r,
          themeId: t
        })), ne = j == null || (L = j.components) == null || (L = L[d]) == null ? void 0 : L.variants;
        return Go({
          variants: ne
        }, (0, Pt.default)({}, q, {
          theme: j
        }), j.modularCssLayers ? "theme" : void 0);
      }), b || F.push(s);
      const V = F.length - O.length;
      if (Array.isArray(P) && V > 0) {
        const q = new Array(V).fill("");
        I = [...P, ...q], I.raw = [...P.raw, ...q];
      }
      const Q = $(I, ...F);
      if (process.env.NODE_ENV !== "production") {
        let q;
        d && (q = `${d}${(0, W0.default)(u || "")}`), q === void 0 && (q = `Styled(${(0, Y0.default)(i)})`), Q.displayName = q;
      }
      return i.muiName && (Q.muiName = i.muiName), Q;
    };
    return $.withConfig && (y.withConfig = $.withConfig), y;
  };
}
function o1(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const s1 = (e) => o1(e) && e !== "classes", Hs = s1, i1 = U0({
  themeId: pn,
  defaultTheme: gc,
  rootShouldForwardProp: Hs
}), Pe = i1, a1 = ["theme"];
function pp(e) {
  let {
    theme: t
  } = e, r = de(e, a1);
  const n = t[pn];
  let o = n || t;
  return typeof t != "function" && (n && !n.vars ? o = A({}, n, {
    vars: null
  }) : t && !t.vars && (o = A({}, t, {
    vars: null
  }))), /* @__PURE__ */ v.jsx(ds, A({}, r, {
    themeId: n ? pn : void 0,
    theme: o
  }));
}
process.env.NODE_ENV !== "production" && (pp.propTypes = {
  /**
   * Your component tree.
   */
  children: l.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: l.oneOfType([l.object, l.func]).isRequired
});
const c1 = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
}, nu = c1;
process.env.NODE_ENV !== "production" && (l.node, l.object.isRequired);
function qe(e) {
  return Lv(e);
}
function l1(e) {
  return Ve("MuiSvgIcon", e);
}
Ue("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const u1 = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], d1 = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${oe(t)}`, `fontSize${oe(r)}`]
  };
  return Xe(o, l1, n);
}, f1 = Pe("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${oe(r.color)}`], t[`fontSize${oe(r.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var r, n, o, s, i, a, d, u, f, p, m, g, h;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // for example heroicons uses fill="none" and stroke="currentColor"
    fill: t.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (r = e.transitions) == null || (n = r.create) == null ? void 0 : n.call(r, "fill", {
      duration: (o = e.transitions) == null || (o = o.duration) == null ? void 0 : o.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((s = e.typography) == null || (i = s.pxToRem) == null ? void 0 : i.call(s, 20)) || "1.25rem",
      medium: ((a = e.typography) == null || (d = a.pxToRem) == null ? void 0 : d.call(a, 24)) || "1.5rem",
      large: ((u = e.typography) == null || (f = u.pxToRem) == null ? void 0 : f.call(u, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (p = (m = (e.vars || e).palette) == null || (m = m[t.color]) == null ? void 0 : m.main) != null ? p : {
      action: (g = (e.vars || e).palette) == null || (g = g.action) == null ? void 0 : g.active,
      disabled: (h = (e.vars || e).palette) == null || (h = h.action) == null ? void 0 : h.disabled,
      inherit: void 0
    }[t.color]
  };
}), bc = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = qe({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: s,
    color: i = "inherit",
    component: a = "svg",
    fontSize: d = "medium",
    htmlColor: u,
    inheritViewBox: f = !1,
    titleAccess: p,
    viewBox: m = "0 0 24 24"
  } = n, g = de(n, u1), h = /* @__PURE__ */ E.isValidElement(o) && o.type === "svg", c = A({}, n, {
    color: i,
    component: a,
    fontSize: d,
    instanceFontSize: t.fontSize,
    inheritViewBox: f,
    viewBox: m,
    hasSvgAsChild: h
  }), b = {};
  f || (b.viewBox = m);
  const x = d1(c);
  return /* @__PURE__ */ v.jsxs(f1, A({
    as: a,
    className: ae(x.root, s),
    focusable: "false",
    color: u,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: r
  }, b, g, h && o.props, {
    ownerState: c,
    children: [h ? o.props.children : o, p ? /* @__PURE__ */ v.jsx("title", {
      children: p
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (bc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: l.oneOfType([l.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), l.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: l.oneOfType([l.oneOf(["inherit", "large", "medium", "small"]), l.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: l.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: l.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: l.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: l.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: l.string
});
bc.muiName = "SvgIcon";
const ou = bc;
function Wt(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ v.jsx(ou, A({
      "data-testid": `${t}Icon`,
      ref: o
    }, n, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = ou.muiName, /* @__PURE__ */ E.memo(/* @__PURE__ */ E.forwardRef(r));
}
function va(e, t) {
  return va = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, va(e, t);
}
function hp(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, va(e, t);
}
const su = {
  disabled: !1
};
var p1 = process.env.NODE_ENV !== "production" ? l.oneOfType([l.number, l.shape({
  enter: l.number,
  exit: l.number,
  appear: l.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && l.oneOfType([l.string, l.shape({
  enter: l.string,
  exit: l.string,
  active: l.string
}), l.shape({
  enter: l.string,
  enterDone: l.string,
  enterActive: l.string,
  exit: l.string,
  exitDone: l.string,
  exitActive: l.string
})]);
const hs = at.createContext(null);
var h1 = function(t) {
  return t.scrollTop;
}, zn = "unmounted", wr = "exited", Ar = "entering", tn = "entered", xa = "exiting", cr = /* @__PURE__ */ function(e) {
  hp(t, e);
  function t(n, o) {
    var s;
    s = e.call(this, n, o) || this;
    var i = o, a = i && !i.isMounting ? n.enter : n.appear, d;
    return s.appearStatus = null, n.in ? a ? (d = wr, s.appearStatus = Ar) : d = tn : n.unmountOnExit || n.mountOnEnter ? d = zn : d = wr, s.state = {
      status: d
    }, s.nextCallback = null, s;
  }
  t.getDerivedStateFromProps = function(o, s) {
    var i = o.in;
    return i && s.status === zn ? {
      status: wr
    } : null;
  };
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(o) {
    var s = null;
    if (o !== this.props) {
      var i = this.state.status;
      this.props.in ? i !== Ar && i !== tn && (s = Ar) : (i === Ar || i === tn) && (s = xa);
    }
    this.updateStatus(!1, s);
  }, r.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, r.getTimeouts = function() {
    var o = this.props.timeout, s, i, a;
    return s = i = a = o, o != null && typeof o != "number" && (s = o.exit, i = o.enter, a = o.appear !== void 0 ? o.appear : i), {
      exit: s,
      enter: i,
      appear: a
    };
  }, r.updateStatus = function(o, s) {
    if (o === void 0 && (o = !1), s !== null)
      if (this.cancelNextCallback(), s === Ar) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var i = this.props.nodeRef ? this.props.nodeRef.current : Bn.findDOMNode(this);
          i && h1(i);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === wr && this.setState({
        status: zn
      });
  }, r.performEnter = function(o) {
    var s = this, i = this.props.enter, a = this.context ? this.context.isMounting : o, d = this.props.nodeRef ? [a] : [Bn.findDOMNode(this), a], u = d[0], f = d[1], p = this.getTimeouts(), m = a ? p.appear : p.enter;
    if (!o && !i || su.disabled) {
      this.safeSetState({
        status: tn
      }, function() {
        s.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, f), this.safeSetState({
      status: Ar
    }, function() {
      s.props.onEntering(u, f), s.onTransitionEnd(m, function() {
        s.safeSetState({
          status: tn
        }, function() {
          s.props.onEntered(u, f);
        });
      });
    });
  }, r.performExit = function() {
    var o = this, s = this.props.exit, i = this.getTimeouts(), a = this.props.nodeRef ? void 0 : Bn.findDOMNode(this);
    if (!s || su.disabled) {
      this.safeSetState({
        status: wr
      }, function() {
        o.props.onExited(a);
      });
      return;
    }
    this.props.onExit(a), this.safeSetState({
      status: xa
    }, function() {
      o.props.onExiting(a), o.onTransitionEnd(i.exit, function() {
        o.safeSetState({
          status: wr
        }, function() {
          o.props.onExited(a);
        });
      });
    });
  }, r.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, r.safeSetState = function(o, s) {
    s = this.setNextCallback(s), this.setState(o, s);
  }, r.setNextCallback = function(o) {
    var s = this, i = !0;
    return this.nextCallback = function(a) {
      i && (i = !1, s.nextCallback = null, o(a));
    }, this.nextCallback.cancel = function() {
      i = !1;
    }, this.nextCallback;
  }, r.onTransitionEnd = function(o, s) {
    this.setNextCallback(s);
    var i = this.props.nodeRef ? this.props.nodeRef.current : Bn.findDOMNode(this), a = o == null && !this.props.addEndListener;
    if (!i || a) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var d = this.props.nodeRef ? [this.nextCallback] : [i, this.nextCallback], u = d[0], f = d[1];
      this.props.addEndListener(u, f);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, r.render = function() {
    var o = this.state.status;
    if (o === zn)
      return null;
    var s = this.props, i = s.children;
    s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
    var a = de(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ at.createElement(hs.Provider, {
        value: null
      }, typeof i == "function" ? i(o, a) : at.cloneElement(at.Children.only(i), a))
    );
  }, t;
}(at.Component);
cr.contextType = hs;
cr.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: l.shape({
    current: typeof Element > "u" ? l.any : function(e, t, r, n, o, s) {
      var i = e[t];
      return l.instanceOf(i && "ownerDocument" in i ? i.ownerDocument.defaultView.Element : Element)(e, t, r, n, o, s);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: l.oneOfType([l.func.isRequired, l.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: l.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: l.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: l.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: l.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: l.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: l.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var r = p1;
    t.addEndListener || (r = r.isRequired);
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      o[s - 1] = arguments[s];
    return r.apply(void 0, [t].concat(o));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: l.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: l.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: l.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: l.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: l.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: l.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: l.func
} : {};
function Gr() {
}
cr.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Gr,
  onEntering: Gr,
  onEntered: Gr,
  onExit: Gr,
  onExiting: Gr,
  onExited: Gr
};
cr.UNMOUNTED = zn;
cr.EXITED = wr;
cr.ENTERING = Ar;
cr.ENTERED = tn;
cr.EXITING = xa;
const mp = cr;
function m1(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function vc(e, t) {
  var r = function(s) {
    return t && vr(s) ? t(s) : s;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && ef.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function y1(e, t) {
  e = e || {}, t = t || {};
  function r(f) {
    return f in t ? t[f] : e[f];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var s in e)
    s in t ? o.length && (n[s] = o, o = []) : o.push(s);
  var i, a = {};
  for (var d in t) {
    if (n[d])
      for (i = 0; i < n[d].length; i++) {
        var u = n[d][i];
        a[n[d][i]] = r(u);
      }
    a[d] = r(d);
  }
  for (i = 0; i < o.length; i++)
    a[o[i]] = r(o[i]);
  return a;
}
function Nr(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function g1(e, t) {
  return vc(e.children, function(r) {
    return xr(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: Nr(r, "appear", e),
      enter: Nr(r, "enter", e),
      exit: Nr(r, "exit", e)
    });
  });
}
function b1(e, t, r) {
  var n = vc(e.children), o = y1(t, n);
  return Object.keys(o).forEach(function(s) {
    var i = o[s];
    if (vr(i)) {
      var a = s in t, d = s in n, u = t[s], f = vr(u) && !u.props.in;
      d && (!a || f) ? o[s] = xr(i, {
        onExited: r.bind(null, i),
        in: !0,
        exit: Nr(i, "exit", e),
        enter: Nr(i, "enter", e)
      }) : !d && a && !f ? o[s] = xr(i, {
        in: !1
      }) : d && a && vr(u) && (o[s] = xr(i, {
        onExited: r.bind(null, i),
        in: u.props.in,
        exit: Nr(i, "exit", e),
        enter: Nr(i, "enter", e)
      }));
    }
  }), o;
}
var v1 = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, x1 = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, xc = /* @__PURE__ */ function(e) {
  hp(t, e);
  function t(n, o) {
    var s;
    s = e.call(this, n, o) || this;
    var i = s.handleExited.bind(m1(s));
    return s.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: i,
      firstRender: !0
    }, s;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, s) {
    var i = s.children, a = s.handleExited, d = s.firstRender;
    return {
      children: d ? g1(o, a) : b1(o, i, a),
      firstRender: !1
    };
  }, r.handleExited = function(o, s) {
    var i = vc(this.props.children);
    o.key in i || (o.props.onExited && o.props.onExited(s), this.mounted && this.setState(function(a) {
      var d = A({}, a.children);
      return delete d[o.key], {
        children: d
      };
    }));
  }, r.render = function() {
    var o = this.props, s = o.component, i = o.childFactory, a = de(o, ["component", "childFactory"]), d = this.state.contextValue, u = v1(this.state.children).map(i);
    return delete a.appear, delete a.enter, delete a.exit, s === null ? /* @__PURE__ */ at.createElement(hs.Provider, {
      value: d
    }, u) : /* @__PURE__ */ at.createElement(hs.Provider, {
      value: d
    }, /* @__PURE__ */ at.createElement(s, a, u));
  }, t;
}(at.Component);
xc.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: l.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: l.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: l.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: l.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: l.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: l.func
} : {};
xc.defaultProps = x1;
const E1 = xc, yp = (e) => e.scrollTop;
function ms(e, t) {
  var r, n;
  const {
    timeout: o,
    easing: s,
    style: i = {}
  } = e;
  return {
    duration: (r = i.transitionDuration) != null ? r : typeof o == "number" ? o : o[t.mode] || 0,
    easing: (n = i.transitionTimingFunction) != null ? n : typeof s == "object" ? s[t.mode] : s,
    delay: i.transitionDelay
  };
}
function T1(e) {
  return Ve("MuiPaper", e);
}
Ue("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const C1 = ["className", "component", "elevation", "square", "variant"], S1 = (e) => {
  const {
    square: t,
    elevation: r,
    variant: n,
    classes: o
  } = e, s = {
    root: ["root", n, !t && "rounded", n === "elevation" && `elevation${r}`]
  };
  return Xe(s, T1, o);
}, $1 = Pe("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], !r.square && t.rounded, r.variant === "elevation" && t[`elevation${r.elevation}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var r;
  return A({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: e.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, t.variant === "elevation" && A({
    boxShadow: (e.vars || e).shadows[t.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${De("#fff", nu(t.elevation))}, ${De("#fff", nu(t.elevation))})`
  }, e.vars && {
    backgroundImage: (r = e.vars.overlays) == null ? void 0 : r[t.elevation]
  }));
}), gp = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = qe({
    props: t,
    name: "MuiPaper"
  }), {
    className: o,
    component: s = "div",
    elevation: i = 1,
    square: a = !1,
    variant: d = "elevation"
  } = n, u = de(n, C1), f = A({}, n, {
    component: s,
    elevation: i,
    square: a,
    variant: d
  }), p = S1(f);
  return process.env.NODE_ENV !== "production" && bo().shadows[i] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${i}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${i}]\` is defined.`].join(`
`)), /* @__PURE__ */ v.jsx($1, A({
    as: s,
    ownerState: f,
    className: ae(p.root, o),
    ref: r
  }, u));
});
process.env.NODE_ENV !== "production" && (gp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: Cr(Gf, (e) => {
    const {
      elevation: t,
      variant: r
    } = e;
    return t > 0 && r === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${r}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: l.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: l.oneOfType([l.oneOf(["elevation", "outlined"]), l.string])
});
const Ec = gp;
function bp(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: s,
    rippleSize: i,
    in: a,
    onExited: d,
    timeout: u
  } = e, [f, p] = E.useState(!1), m = ae(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), g = {
    width: i,
    height: i,
    top: -(i / 2) + s,
    left: -(i / 2) + o
  }, h = ae(r.child, f && r.childLeaving, n && r.childPulsate);
  return !a && !f && p(!0), E.useEffect(() => {
    if (!a && d != null) {
      const c = setTimeout(d, u);
      return () => {
        clearTimeout(c);
      };
    }
  }, [d, a, u]), /* @__PURE__ */ v.jsx("span", {
    className: m,
    style: g,
    children: /* @__PURE__ */ v.jsx("span", {
      className: h
    })
  });
}
process.env.NODE_ENV !== "production" && (bp.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object.isRequired,
  className: l.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: l.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: l.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: l.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: l.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: l.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: l.number,
  /**
   * exit delay
   */
  timeout: l.number.isRequired
});
const R1 = Ue("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Nt = R1, O1 = ["center", "classes", "className"];
let Gs = (e) => e, iu, au, cu, lu;
const Ea = 550, _1 = 80, P1 = As(iu || (iu = Gs`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), w1 = As(au || (au = Gs`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), A1 = As(cu || (cu = Gs`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), N1 = Pe("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), k1 = Pe(bp, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(lu || (lu = Gs`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), Nt.rippleVisible, P1, Ea, ({
  theme: e
}) => e.transitions.easing.easeInOut, Nt.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, Nt.child, Nt.childLeaving, w1, Ea, ({
  theme: e
}) => e.transitions.easing.easeInOut, Nt.childPulsate, A1, ({
  theme: e
}) => e.transitions.easing.easeInOut), vp = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = qe({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: s = {},
    className: i
  } = n, a = de(n, O1), [d, u] = E.useState([]), f = E.useRef(0), p = E.useRef(null);
  E.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [d]);
  const m = E.useRef(!1), g = yv(), h = E.useRef(null), c = E.useRef(null), b = E.useCallback((S) => {
    const {
      pulsate: y,
      rippleX: P,
      rippleY: O,
      rippleSize: I,
      cb: F
    } = S;
    u((V) => [...V, /* @__PURE__ */ v.jsx(k1, {
      classes: {
        ripple: ae(s.ripple, Nt.ripple),
        rippleVisible: ae(s.rippleVisible, Nt.rippleVisible),
        ripplePulsate: ae(s.ripplePulsate, Nt.ripplePulsate),
        child: ae(s.child, Nt.child),
        childLeaving: ae(s.childLeaving, Nt.childLeaving),
        childPulsate: ae(s.childPulsate, Nt.childPulsate)
      },
      timeout: Ea,
      pulsate: y,
      rippleX: P,
      rippleY: O,
      rippleSize: I
    }, f.current)]), f.current += 1, p.current = F;
  }, [s]), x = E.useCallback((S = {}, y = {}, P = () => {
  }) => {
    const {
      pulsate: O = !1,
      center: I = o || y.pulsate,
      fakeElement: F = !1
      // For test purposes
    } = y;
    if ((S == null ? void 0 : S.type) === "mousedown" && m.current) {
      m.current = !1;
      return;
    }
    (S == null ? void 0 : S.type) === "touchstart" && (m.current = !0);
    const V = F ? null : c.current, Q = V ? V.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let q, L, j;
    if (I || S === void 0 || S.clientX === 0 && S.clientY === 0 || !S.clientX && !S.touches)
      q = Math.round(Q.width / 2), L = Math.round(Q.height / 2);
    else {
      const {
        clientX: ne,
        clientY: z
      } = S.touches && S.touches.length > 0 ? S.touches[0] : S;
      q = Math.round(ne - Q.left), L = Math.round(z - Q.top);
    }
    if (I)
      j = Math.sqrt((2 * Q.width ** 2 + Q.height ** 2) / 3), j % 2 === 0 && (j += 1);
    else {
      const ne = Math.max(Math.abs((V ? V.clientWidth : 0) - q), q) * 2 + 2, z = Math.max(Math.abs((V ? V.clientHeight : 0) - L), L) * 2 + 2;
      j = Math.sqrt(ne ** 2 + z ** 2);
    }
    S != null && S.touches ? h.current === null && (h.current = () => {
      b({
        pulsate: O,
        rippleX: q,
        rippleY: L,
        rippleSize: j,
        cb: P
      });
    }, g.start(_1, () => {
      h.current && (h.current(), h.current = null);
    })) : b({
      pulsate: O,
      rippleX: q,
      rippleY: L,
      rippleSize: j,
      cb: P
    });
  }, [o, b, g]), w = E.useCallback(() => {
    x({}, {
      pulsate: !0
    });
  }, [x]), $ = E.useCallback((S, y) => {
    if (g.clear(), (S == null ? void 0 : S.type) === "touchend" && h.current) {
      h.current(), h.current = null, g.start(0, () => {
        $(S, y);
      });
      return;
    }
    h.current = null, u((P) => P.length > 0 ? P.slice(1) : P), p.current = y;
  }, [g]);
  return E.useImperativeHandle(r, () => ({
    pulsate: w,
    start: x,
    stop: $
  }), [w, x, $]), /* @__PURE__ */ v.jsx(N1, A({
    className: ae(Nt.root, s.root, i),
    ref: c
  }, a, {
    children: /* @__PURE__ */ v.jsx(E1, {
      component: null,
      exit: !0,
      children: d
    })
  }));
});
process.env.NODE_ENV !== "production" && (vp.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: l.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string
});
const I1 = vp;
function M1(e) {
  return Ve("MuiButtonBase", e);
}
const j1 = Ue("MuiButtonBase", ["root", "disabled", "focusVisible"]), D1 = j1, F1 = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], L1 = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, i = Xe({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, M1, o);
  return r && n && (i.root += ` ${n}`), i;
}, B1 = Pe("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${D1.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), xp = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = qe({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: s = !1,
    children: i,
    className: a,
    component: d = "button",
    disabled: u = !1,
    disableRipple: f = !1,
    disableTouchRipple: p = !1,
    focusRipple: m = !1,
    LinkComponent: g = "a",
    onBlur: h,
    onClick: c,
    onContextMenu: b,
    onDragLeave: x,
    onFocus: w,
    onFocusVisible: $,
    onKeyDown: S,
    onKeyUp: y,
    onMouseDown: P,
    onMouseLeave: O,
    onMouseUp: I,
    onTouchEnd: F,
    onTouchMove: V,
    onTouchStart: Q,
    tabIndex: q = 0,
    TouchRippleProps: L,
    touchRippleRef: j,
    type: ne
  } = n, z = de(n, F1), te = E.useRef(null), D = E.useRef(null), se = qt(D, j), {
    isFocusVisibleRef: _,
    onFocus: N,
    onBlur: W,
    ref: Y
  } = Sv(), [M, H] = E.useState(!1);
  u && M && H(!1), E.useImperativeHandle(o, () => ({
    focusVisible: () => {
      H(!0), te.current.focus();
    }
  }), []);
  const [U, K] = E.useState(!1);
  E.useEffect(() => {
    K(!0);
  }, []);
  const X = U && !f && !u;
  E.useEffect(() => {
    M && m && !f && U && D.current.pulsate();
  }, [f, m, M, U]);
  function G(J, fr, Or = p) {
    return on((_r) => (fr && fr(_r), !Or && D.current && D.current[J](_r), !0));
  }
  const Z = G("start", P), ue = G("stop", b), T = G("stop", x), ce = G("stop", I), xe = G("stop", (J) => {
    M && J.preventDefault(), O && O(J);
  }), tt = G("start", Q), nr = G("stop", F), Fr = G("stop", V), Lr = G("stop", (J) => {
    W(J), _.current === !1 && H(!1), h && h(J);
  }, !1), dr = on((J) => {
    te.current || (te.current = J.currentTarget), N(J), _.current === !0 && (H(!0), $ && $(J)), w && w(J);
  }), or = () => {
    const J = te.current;
    return d && d !== "button" && !(J.tagName === "A" && J.href);
  }, sr = E.useRef(!1), Rr = on((J) => {
    m && !sr.current && M && D.current && J.key === " " && (sr.current = !0, D.current.stop(J, () => {
      D.current.start(J);
    })), J.target === J.currentTarget && or() && J.key === " " && J.preventDefault(), S && S(J), J.target === J.currentTarget && or() && J.key === "Enter" && !u && (J.preventDefault(), c && c(J));
  }), wn = on((J) => {
    m && J.key === " " && D.current && M && !J.defaultPrevented && (sr.current = !1, D.current.stop(J, () => {
      D.current.pulsate(J);
    })), y && y(J), c && J.target === J.currentTarget && or() && J.key === " " && !J.defaultPrevented && c(J);
  });
  let zt = d;
  zt === "button" && (z.href || z.to) && (zt = g);
  const vt = {};
  zt === "button" ? (vt.type = ne === void 0 ? "button" : ne, vt.disabled = u) : (!z.href && !z.to && (vt.role = "button"), u && (vt["aria-disabled"] = u));
  const Br = qt(r, Y, te);
  process.env.NODE_ENV !== "production" && E.useEffect(() => {
    X && !D.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [X]);
  const Vt = A({}, n, {
    centerRipple: s,
    component: d,
    disabled: u,
    disableRipple: f,
    disableTouchRipple: p,
    focusRipple: m,
    tabIndex: q,
    focusVisible: M
  }), An = L1(Vt);
  return /* @__PURE__ */ v.jsxs(B1, A({
    as: zt,
    className: ae(An.root, a),
    ownerState: Vt,
    onBlur: Lr,
    onClick: c,
    onContextMenu: ue,
    onFocus: dr,
    onKeyDown: Rr,
    onKeyUp: wn,
    onMouseDown: Z,
    onMouseLeave: xe,
    onMouseUp: ce,
    onDragLeave: T,
    onTouchEnd: nr,
    onTouchMove: Fr,
    onTouchStart: tt,
    ref: Br,
    tabIndex: u ? -1 : q,
    type: ne
  }, vt, z, {
    children: [i, X ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ v.jsx(I1, A({
        ref: se,
        center: s
      }, L))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (xp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: av,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: l.bool,
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Vf,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: l.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: l.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: l.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: l.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: l.string,
  /**
   * @ignore
   */
  href: l.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: l.elementType,
  /**
   * @ignore
   */
  onBlur: l.func,
  /**
   * @ignore
   */
  onClick: l.func,
  /**
   * @ignore
   */
  onContextMenu: l.func,
  /**
   * @ignore
   */
  onDragLeave: l.func,
  /**
   * @ignore
   */
  onFocus: l.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: l.func,
  /**
   * @ignore
   */
  onKeyDown: l.func,
  /**
   * @ignore
   */
  onKeyUp: l.func,
  /**
   * @ignore
   */
  onMouseDown: l.func,
  /**
   * @ignore
   */
  onMouseLeave: l.func,
  /**
   * @ignore
   */
  onMouseUp: l.func,
  /**
   * @ignore
   */
  onTouchEnd: l.func,
  /**
   * @ignore
   */
  onTouchMove: l.func,
  /**
   * @ignore
   */
  onTouchStart: l.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * @default 0
   */
  tabIndex: l.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: l.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: l.oneOfType([l.func, l.shape({
    current: l.shape({
      pulsate: l.func.isRequired,
      start: l.func.isRequired,
      stop: l.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: l.oneOfType([l.oneOf(["button", "reset", "submit"]), l.string])
});
const yn = xp;
function z1(e) {
  return Ve("MuiIconButton", e);
}
const V1 = Ue("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), U1 = V1, q1 = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], W1 = (e) => {
  const {
    classes: t,
    disabled: r,
    color: n,
    edge: o,
    size: s
  } = e, i = {
    root: ["root", r && "disabled", n !== "default" && `color${oe(n)}`, o && `edge${oe(o)}`, `size${oe(s)}`]
  };
  return Xe(i, z1, t);
}, Y1 = Pe(yn, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "default" && t[`color${oe(r.color)}`], r.edge && t[`edge${oe(r.edge)}`], t[`size${oe(r.size)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => A({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  overflow: "visible",
  // Explicitly set the default value to solve a bug on IE11.
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  })
}, !t.disableRipple && {
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : De(e.palette.action.active, e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, t.edge === "start" && {
  marginLeft: t.size === "small" ? -3 : -12
}, t.edge === "end" && {
  marginRight: t.size === "small" ? -3 : -12
}), ({
  theme: e,
  ownerState: t
}) => {
  var r;
  const n = (r = (e.vars || e).palette) == null ? void 0 : r[t.color];
  return A({}, t.color === "inherit" && {
    color: "inherit"
  }, t.color !== "inherit" && t.color !== "default" && A({
    color: n == null ? void 0 : n.main
  }, !t.disableRipple && {
    "&:hover": A({}, n && {
      backgroundColor: e.vars ? `rgba(${n.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : De(n.main, e.palette.action.hoverOpacity)
    }, {
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    })
  }), t.size === "small" && {
    padding: 5,
    fontSize: e.typography.pxToRem(18)
  }, t.size === "large" && {
    padding: 12,
    fontSize: e.typography.pxToRem(28)
  }, {
    [`&.${U1.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), Ep = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = qe({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: s,
    className: i,
    color: a = "default",
    disabled: d = !1,
    disableFocusRipple: u = !1,
    size: f = "medium"
  } = n, p = de(n, q1), m = A({}, n, {
    edge: o,
    color: a,
    disabled: d,
    disableFocusRipple: u,
    size: f
  }), g = W1(m);
  return /* @__PURE__ */ v.jsx(Y1, A({
    className: ae(g.root, i),
    centerRipple: !0,
    focusRipple: !u,
    disabled: d,
    ref: r
  }, p, {
    ownerState: m,
    children: s
  }));
});
process.env.NODE_ENV !== "production" && (Ep.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: Cr(l.node, (e) => E.Children.toArray(e.children).some((r) => /* @__PURE__ */ E.isValidElement(r) && r.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: l.oneOfType([l.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), l.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: l.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: l.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: l.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: l.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: l.oneOfType([l.oneOf(["small", "medium", "large"]), l.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object])
});
const H1 = Ep;
function G1(e) {
  return Ve("MuiTypography", e);
}
Ue("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const K1 = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], Q1 = (e) => {
  const {
    align: t,
    gutterBottom: r,
    noWrap: n,
    paragraph: o,
    variant: s,
    classes: i
  } = e, a = {
    root: ["root", s, e.align !== "inherit" && `align${oe(t)}`, r && "gutterBottom", n && "noWrap", o && "paragraph"]
  };
  return Xe(a, G1, i);
}, X1 = Pe("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.variant && t[r.variant], r.align !== "inherit" && t[`align${oe(r.align)}`], r.noWrap && t.noWrap, r.gutterBottom && t.gutterBottom, r.paragraph && t.paragraph];
  }
})(({
  theme: e,
  ownerState: t
}) => A({
  margin: 0
}, t.variant === "inherit" && {
  // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
  font: "inherit"
}, t.variant !== "inherit" && e.typography[t.variant], t.align !== "inherit" && {
  textAlign: t.align
}, t.noWrap && {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}, t.gutterBottom && {
  marginBottom: "0.35em"
}, t.paragraph && {
  marginBottom: 16
})), uu = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, J1 = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, Z1 = (e) => J1[e] || e, Tp = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = qe({
    props: t,
    name: "MuiTypography"
  }), o = Z1(n.color), s = Vs(A({}, n, {
    color: o
  })), {
    align: i = "inherit",
    className: a,
    component: d,
    gutterBottom: u = !1,
    noWrap: f = !1,
    paragraph: p = !1,
    variant: m = "body1",
    variantMapping: g = uu
  } = s, h = de(s, K1), c = A({}, s, {
    align: i,
    color: o,
    className: a,
    component: d,
    gutterBottom: u,
    noWrap: f,
    paragraph: p,
    variant: m,
    variantMapping: g
  }), b = d || (p ? "p" : g[m] || uu[m]) || "span", x = Q1(c);
  return /* @__PURE__ */ v.jsx(X1, A({
    as: b,
    ref: r,
    ownerState: c,
    className: ae(x.root, a)
  }, h));
});
process.env.NODE_ENV !== "production" && (Tp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: l.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: l.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: l.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph: l.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: l.oneOfType([l.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), l.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: l.object
});
const ze = Tp;
function ex(e) {
  return Ve("MuiAppBar", e);
}
Ue("MuiAppBar", ["root", "positionFixed", "positionAbsolute", "positionSticky", "positionStatic", "positionRelative", "colorDefault", "colorPrimary", "colorSecondary", "colorInherit", "colorTransparent", "colorError", "colorInfo", "colorSuccess", "colorWarning"]);
const tx = ["className", "color", "enableColorOnDark", "position"], rx = (e) => {
  const {
    color: t,
    position: r,
    classes: n
  } = e, o = {
    root: ["root", `color${oe(t)}`, `position${oe(r)}`]
  };
  return Xe(o, ex, n);
}, Io = (e, t) => e ? `${e == null ? void 0 : e.replace(")", "")}, ${t})` : t, nx = Pe(Ec, {
  name: "MuiAppBar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[`position${oe(r.position)}`], t[`color${oe(r.color)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  const r = e.palette.mode === "light" ? e.palette.grey[100] : e.palette.grey[900];
  return A({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    boxSizing: "border-box",
    // Prevent padding issue with the Modal and fixed positioned AppBar.
    flexShrink: 0
  }, t.position === "fixed" && {
    position: "fixed",
    zIndex: (e.vars || e).zIndex.appBar,
    top: 0,
    left: "auto",
    right: 0,
    "@media print": {
      // Prevent the app bar to be visible on each printed page.
      position: "absolute"
    }
  }, t.position === "absolute" && {
    position: "absolute",
    zIndex: (e.vars || e).zIndex.appBar,
    top: 0,
    left: "auto",
    right: 0
  }, t.position === "sticky" && {
    // ⚠️ sticky is not supported by IE11.
    position: "sticky",
    zIndex: (e.vars || e).zIndex.appBar,
    top: 0,
    left: "auto",
    right: 0
  }, t.position === "static" && {
    position: "static"
  }, t.position === "relative" && {
    position: "relative"
  }, !e.vars && A({}, t.color === "default" && {
    backgroundColor: r,
    color: e.palette.getContrastText(r)
  }, t.color && t.color !== "default" && t.color !== "inherit" && t.color !== "transparent" && {
    backgroundColor: e.palette[t.color].main,
    color: e.palette[t.color].contrastText
  }, t.color === "inherit" && {
    color: "inherit"
  }, e.palette.mode === "dark" && !t.enableColorOnDark && {
    backgroundColor: null,
    color: null
  }, t.color === "transparent" && A({
    backgroundColor: "transparent",
    color: "inherit"
  }, e.palette.mode === "dark" && {
    backgroundImage: "none"
  })), e.vars && A({}, t.color === "default" && {
    "--AppBar-background": t.enableColorOnDark ? e.vars.palette.AppBar.defaultBg : Io(e.vars.palette.AppBar.darkBg, e.vars.palette.AppBar.defaultBg),
    "--AppBar-color": t.enableColorOnDark ? e.vars.palette.text.primary : Io(e.vars.palette.AppBar.darkColor, e.vars.palette.text.primary)
  }, t.color && !t.color.match(/^(default|inherit|transparent)$/) && {
    "--AppBar-background": t.enableColorOnDark ? e.vars.palette[t.color].main : Io(e.vars.palette.AppBar.darkBg, e.vars.palette[t.color].main),
    "--AppBar-color": t.enableColorOnDark ? e.vars.palette[t.color].contrastText : Io(e.vars.palette.AppBar.darkColor, e.vars.palette[t.color].contrastText)
  }, !["inherit", "transparent"].includes(t.color) && {
    backgroundColor: "var(--AppBar-background)"
  }, {
    color: t.color === "inherit" ? "inherit" : "var(--AppBar-color)"
  }, t.color === "transparent" && {
    backgroundImage: "none",
    backgroundColor: "transparent",
    color: "inherit"
  }));
}), Cp = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = qe({
    props: t,
    name: "MuiAppBar"
  }), {
    className: o,
    color: s = "primary",
    enableColorOnDark: i = !1,
    position: a = "fixed"
  } = n, d = de(n, tx), u = A({}, n, {
    color: s,
    position: a,
    enableColorOnDark: i
  }), f = rx(u);
  return /* @__PURE__ */ v.jsx(nx, A({
    square: !0,
    component: "header",
    ownerState: u,
    elevation: 4,
    className: ae(f.root, o, a === "fixed" && "mui-fixed"),
    ref: r
  }, d));
});
process.env.NODE_ENV !== "production" && (Cp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: l.oneOfType([l.oneOf(["default", "inherit", "primary", "secondary", "transparent", "error", "info", "success", "warning"]), l.string]),
  /**
   * If true, the `color` prop is applied in dark mode.
   * @default false
   */
  enableColorOnDark: l.bool,
  /**
   * The positioning type. The behavior of the different options is described
   * [in the MDN web docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning).
   * Note: `sticky` is not universally supported and will fall back to `static` when unavailable.
   * @default 'fixed'
   */
  position: l.oneOf(["absolute", "fixed", "relative", "static", "sticky"]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object])
});
const ox = Cp;
function sx(e) {
  return typeof e == "function" ? e() : e;
}
const ys = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const {
    children: n,
    container: o,
    disablePortal: s = !1
  } = t, [i, a] = E.useState(null), d = qt(/* @__PURE__ */ E.isValidElement(n) ? Ys(n) : null, r);
  if (mn(() => {
    s || a(sx(o) || document.body);
  }, [o, s]), mn(() => {
    if (i && !s)
      return ha(r, i), () => {
        ha(r, null);
      };
  }, [r, i, s]), s) {
    if (/* @__PURE__ */ E.isValidElement(n)) {
      const u = {
        ref: d
      };
      return /* @__PURE__ */ E.cloneElement(n, u);
    }
    return /* @__PURE__ */ v.jsx(E.Fragment, {
      children: n
    });
  }
  return /* @__PURE__ */ v.jsx(E.Fragment, {
    children: i && /* @__PURE__ */ cy.createPortal(n, i)
  });
});
process.env.NODE_ENV !== "production" && (ys.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: l.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: l.oneOfType([pc, l.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: l.bool
});
process.env.NODE_ENV !== "production" && (ys["propTypes"] = qs(ys.propTypes));
const ix = ys, ax = Wt(/* @__PURE__ */ v.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function cx(e) {
  return Ve("MuiChip", e);
}
const lx = Ue("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), he = lx, ux = ["avatar", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant", "tabIndex", "skipFocusWhenDisabled"], dx = (e) => {
  const {
    classes: t,
    disabled: r,
    size: n,
    color: o,
    iconColor: s,
    onDelete: i,
    clickable: a,
    variant: d
  } = e, u = {
    root: ["root", d, r && "disabled", `size${oe(n)}`, `color${oe(o)}`, a && "clickable", a && `clickableColor${oe(o)}`, i && "deletable", i && `deletableColor${oe(o)}`, `${d}${oe(o)}`],
    label: ["label", `label${oe(n)}`],
    avatar: ["avatar", `avatar${oe(n)}`, `avatarColor${oe(o)}`],
    icon: ["icon", `icon${oe(n)}`, `iconColor${oe(s)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${oe(n)}`, `deleteIconColor${oe(o)}`, `deleteIcon${oe(d)}Color${oe(o)}`]
  };
  return Xe(u, cx, t);
}, fx = Pe("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e, {
      color: n,
      iconColor: o,
      clickable: s,
      onDelete: i,
      size: a,
      variant: d
    } = r;
    return [{
      [`& .${he.avatar}`]: t.avatar
    }, {
      [`& .${he.avatar}`]: t[`avatar${oe(a)}`]
    }, {
      [`& .${he.avatar}`]: t[`avatarColor${oe(n)}`]
    }, {
      [`& .${he.icon}`]: t.icon
    }, {
      [`& .${he.icon}`]: t[`icon${oe(a)}`]
    }, {
      [`& .${he.icon}`]: t[`iconColor${oe(o)}`]
    }, {
      [`& .${he.deleteIcon}`]: t.deleteIcon
    }, {
      [`& .${he.deleteIcon}`]: t[`deleteIcon${oe(a)}`]
    }, {
      [`& .${he.deleteIcon}`]: t[`deleteIconColor${oe(n)}`]
    }, {
      [`& .${he.deleteIcon}`]: t[`deleteIcon${oe(d)}Color${oe(n)}`]
    }, t.root, t[`size${oe(a)}`], t[`color${oe(n)}`], s && t.clickable, s && n !== "default" && t[`clickableColor${oe(n)})`], i && t.deletable, i && n !== "default" && t[`deletableColor${oe(n)}`], t[d], t[`${d}${oe(n)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  const r = e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
  return A({
    maxWidth: "100%",
    fontFamily: e.typography.fontFamily,
    fontSize: e.typography.pxToRem(13),
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: 32,
    color: (e.vars || e).palette.text.primary,
    backgroundColor: (e.vars || e).palette.action.selected,
    borderRadius: 32 / 2,
    whiteSpace: "nowrap",
    transition: e.transitions.create(["background-color", "box-shadow"]),
    // reset cursor explicitly in case ButtonBase is used
    cursor: "unset",
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    textDecoration: "none",
    border: 0,
    // Remove `button` border
    padding: 0,
    // Remove `button` padding
    verticalAlign: "middle",
    boxSizing: "border-box",
    [`&.${he.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${he.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : r,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${he.avatarColorPrimary}`]: {
      color: (e.vars || e).palette.primary.contrastText,
      backgroundColor: (e.vars || e).palette.primary.dark
    },
    [`& .${he.avatarColorSecondary}`]: {
      color: (e.vars || e).palette.secondary.contrastText,
      backgroundColor: (e.vars || e).palette.secondary.dark
    },
    [`& .${he.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: e.typography.pxToRem(10)
    },
    [`& .${he.icon}`]: A({
      marginLeft: 5,
      marginRight: -6
    }, t.size === "small" && {
      fontSize: 18,
      marginLeft: 4,
      marginRight: -4
    }, t.iconColor === t.color && A({
      color: e.vars ? e.vars.palette.Chip.defaultIconColor : r
    }, t.color !== "default" && {
      color: "inherit"
    })),
    [`& .${he.deleteIcon}`]: A({
      WebkitTapHighlightColor: "transparent",
      color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : De(e.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : De(e.palette.text.primary, 0.4)
      }
    }, t.size === "small" && {
      fontSize: 16,
      marginRight: 4,
      marginLeft: -4
    }, t.color !== "default" && {
      color: e.vars ? `rgba(${e.vars.palette[t.color].contrastTextChannel} / 0.7)` : De(e.palette[t.color].contrastText, 0.7),
      "&:hover, &:active": {
        color: (e.vars || e).palette[t.color].contrastText
      }
    })
  }, t.size === "small" && {
    height: 24
  }, t.color !== "default" && {
    backgroundColor: (e.vars || e).palette[t.color].main,
    color: (e.vars || e).palette[t.color].contrastText
  }, t.onDelete && {
    [`&.${he.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : De(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  }, t.onDelete && t.color !== "default" && {
    [`&.${he.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette[t.color].dark
    }
  });
}, ({
  theme: e,
  ownerState: t
}) => A({}, t.clickable && {
  userSelect: "none",
  WebkitTapHighlightColor: "transparent",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : De(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
  },
  [`&.${he.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : De(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
  },
  "&:active": {
    boxShadow: (e.vars || e).shadows[1]
  }
}, t.clickable && t.color !== "default" && {
  [`&:hover, &.${he.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette[t.color].dark
  }
}), ({
  theme: e,
  ownerState: t
}) => A({}, t.variant === "outlined" && {
  backgroundColor: "transparent",
  border: e.vars ? `1px solid ${e.vars.palette.Chip.defaultBorder}` : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
  [`&.${he.clickable}:hover`]: {
    backgroundColor: (e.vars || e).palette.action.hover
  },
  [`&.${he.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`& .${he.avatar}`]: {
    marginLeft: 4
  },
  [`& .${he.avatarSmall}`]: {
    marginLeft: 2
  },
  [`& .${he.icon}`]: {
    marginLeft: 4
  },
  [`& .${he.iconSmall}`]: {
    marginLeft: 2
  },
  [`& .${he.deleteIcon}`]: {
    marginRight: 5
  },
  [`& .${he.deleteIconSmall}`]: {
    marginRight: 3
  }
}, t.variant === "outlined" && t.color !== "default" && {
  color: (e.vars || e).palette[t.color].main,
  border: `1px solid ${e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : De(e.palette[t.color].main, 0.7)}`,
  [`&.${he.clickable}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : De(e.palette[t.color].main, e.palette.action.hoverOpacity)
  },
  [`&.${he.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.focusOpacity})` : De(e.palette[t.color].main, e.palette.action.focusOpacity)
  },
  [`& .${he.deleteIcon}`]: {
    color: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : De(e.palette[t.color].main, 0.7),
    "&:hover, &:active": {
      color: (e.vars || e).palette[t.color].main
    }
  }
})), px = Pe("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e, {
      size: n
    } = r;
    return [t.label, t[`label${oe(n)}`]];
  }
})(({
  ownerState: e
}) => A({
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: "nowrap"
}, e.variant === "outlined" && {
  paddingLeft: 11,
  paddingRight: 11
}, e.size === "small" && {
  paddingLeft: 8,
  paddingRight: 8
}, e.size === "small" && e.variant === "outlined" && {
  paddingLeft: 7,
  paddingRight: 7
}));
function du(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Sp = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = qe({
    props: t,
    name: "MuiChip"
  }), {
    avatar: o,
    className: s,
    clickable: i,
    color: a = "default",
    component: d,
    deleteIcon: u,
    disabled: f = !1,
    icon: p,
    label: m,
    onClick: g,
    onDelete: h,
    onKeyDown: c,
    onKeyUp: b,
    size: x = "medium",
    variant: w = "filled",
    tabIndex: $,
    skipFocusWhenDisabled: S = !1
    // TODO v6: Rename to `focusableWhenDisabled`.
  } = n, y = de(n, ux), P = E.useRef(null), O = qt(P, r), I = (se) => {
    se.stopPropagation(), h && h(se);
  }, F = (se) => {
    se.currentTarget === se.target && du(se) && se.preventDefault(), c && c(se);
  }, V = (se) => {
    se.currentTarget === se.target && (h && du(se) ? h(se) : se.key === "Escape" && P.current && P.current.blur()), b && b(se);
  }, Q = i !== !1 && g ? !0 : i, q = Q || h ? yn : d || "div", L = A({}, n, {
    component: q,
    disabled: f,
    size: x,
    color: a,
    iconColor: /* @__PURE__ */ E.isValidElement(p) && p.props.color || a,
    onDelete: !!h,
    clickable: Q,
    variant: w
  }), j = dx(L), ne = q === yn ? A({
    component: d || "div",
    focusVisibleClassName: j.focusVisible
  }, h && {
    disableRipple: !0
  }) : {};
  let z = null;
  h && (z = u && /* @__PURE__ */ E.isValidElement(u) ? /* @__PURE__ */ E.cloneElement(u, {
    className: ae(u.props.className, j.deleteIcon),
    onClick: I
  }) : /* @__PURE__ */ v.jsx(ax, {
    className: ae(j.deleteIcon),
    onClick: I
  }));
  let te = null;
  o && /* @__PURE__ */ E.isValidElement(o) && (te = /* @__PURE__ */ E.cloneElement(o, {
    className: ae(j.avatar, o.props.className)
  }));
  let D = null;
  return p && /* @__PURE__ */ E.isValidElement(p) && (D = /* @__PURE__ */ E.cloneElement(p, {
    className: ae(j.icon, p.props.className)
  })), process.env.NODE_ENV !== "production" && te && D && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ v.jsxs(fx, A({
    as: q,
    className: ae(j.root, s),
    disabled: Q && f ? !0 : void 0,
    onClick: g,
    onKeyDown: F,
    onKeyUp: V,
    ref: O,
    tabIndex: S && f ? -1 : $,
    ownerState: L
  }, ne, y, {
    children: [te || D, /* @__PURE__ */ v.jsx(px, {
      className: ae(j.label),
      ownerState: L,
      children: m
    }), z]
  }));
});
process.env.NODE_ENV !== "production" && (Sp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The Avatar element to display.
   */
  avatar: l.element,
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: fv,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * If `true`, the chip will appear clickable, and will raise when pressed,
   * even if the onClick prop is not defined.
   * If `false`, the chip will not appear clickable, even if onClick prop is defined.
   * This can be used, for example,
   * along with the component prop to indicate an anchor Chip is clickable.
   * Note: this controls the UI and does not affect the onClick event.
   */
  clickable: l.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: l.oneOfType([l.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), l.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: l.element,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: l.bool,
  /**
   * Icon element.
   */
  icon: l.element,
  /**
   * The content of the component.
   */
  label: l.node,
  /**
   * @ignore
   */
  onClick: l.func,
  /**
   * Callback fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: l.func,
  /**
   * @ignore
   */
  onKeyDown: l.func,
  /**
   * @ignore
   */
  onKeyUp: l.func,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: l.oneOfType([l.oneOf(["medium", "small"]), l.string]),
  /**
   * If `true`, allows the disabled chip to escape focus.
   * If `false`, allows the disabled chip to receive focus.
   * @default false
   */
  skipFocusWhenDisabled: l.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * @ignore
   */
  tabIndex: l.number,
  /**
   * The variant to use.
   * @default 'filled'
   */
  variant: l.oneOfType([l.oneOf(["filled", "outlined"]), l.string])
});
const Ta = Sp;
function $p(e) {
  return /* @__PURE__ */ v.jsx(fc, A({}, e, {
    defaultTheme: gc,
    themeId: pn
  }));
}
process.env.NODE_ENV !== "production" && ($p.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: l.oneOfType([l.array, l.func, l.number, l.object, l.string, l.bool])
});
const hx = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], mx = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Rp = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = bo(), o = {
    enter: n.transitions.duration.enteringScreen,
    exit: n.transitions.duration.leavingScreen
  }, {
    addEndListener: s,
    appear: i = !0,
    children: a,
    easing: d,
    in: u,
    onEnter: f,
    onEntered: p,
    onEntering: m,
    onExit: g,
    onExited: h,
    onExiting: c,
    style: b,
    timeout: x = o,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: w = mp
  } = t, $ = de(t, hx), S = E.useRef(null), y = qt(S, Ys(a), r), P = (j) => (ne) => {
    if (j) {
      const z = S.current;
      ne === void 0 ? j(z) : j(z, ne);
    }
  }, O = P(m), I = P((j, ne) => {
    yp(j);
    const z = ms({
      style: b,
      timeout: x,
      easing: d
    }, {
      mode: "enter"
    });
    j.style.webkitTransition = n.transitions.create("opacity", z), j.style.transition = n.transitions.create("opacity", z), f && f(j, ne);
  }), F = P(p), V = P(c), Q = P((j) => {
    const ne = ms({
      style: b,
      timeout: x,
      easing: d
    }, {
      mode: "exit"
    });
    j.style.webkitTransition = n.transitions.create("opacity", ne), j.style.transition = n.transitions.create("opacity", ne), g && g(j);
  }), q = P(h), L = (j) => {
    s && s(S.current, j);
  };
  return /* @__PURE__ */ v.jsx(w, A({
    appear: i,
    in: u,
    nodeRef: S,
    onEnter: I,
    onEntered: F,
    onEntering: O,
    onExit: Q,
    onExited: q,
    onExiting: V,
    addEndListener: L,
    timeout: x
  }, $, {
    children: (j, ne) => /* @__PURE__ */ E.cloneElement(a, A({
      style: A({
        opacity: 0,
        visibility: j === "exited" && !u ? "hidden" : void 0
      }, mx[j], b, a.props.style),
      ref: y
    }, ne))
  }));
});
process.env.NODE_ENV !== "production" && (Rp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: l.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: l.bool,
  /**
   * A single child content element.
   */
  children: Us.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: l.oneOfType([l.shape({
    enter: l.string,
    exit: l.string
  }), l.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: l.bool,
  /**
   * @ignore
   */
  onEnter: l.func,
  /**
   * @ignore
   */
  onEntered: l.func,
  /**
   * @ignore
   */
  onEntering: l.func,
  /**
   * @ignore
   */
  onExit: l.func,
  /**
   * @ignore
   */
  onExited: l.func,
  /**
   * @ignore
   */
  onExiting: l.func,
  /**
   * @ignore
   */
  style: l.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: l.oneOfType([l.number, l.shape({
    appear: l.number,
    enter: l.number,
    exit: l.number
  })])
});
const yx = Rp;
function gx(e) {
  return Ve("MuiBackdrop", e);
}
Ue("MuiBackdrop", ["root", "invisible"]);
const bx = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], vx = (e) => {
  const {
    classes: t,
    invisible: r
  } = e;
  return Xe({
    root: ["root", r && "invisible"]
  }, gx, t);
}, xx = Pe("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.invisible && t.invisible];
  }
})(({
  ownerState: e
}) => A({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent"
}, e.invisible && {
  backgroundColor: "transparent"
})), Op = /* @__PURE__ */ E.forwardRef(function(t, r) {
  var n, o, s;
  const i = qe({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: a,
    className: d,
    component: u = "div",
    components: f = {},
    componentsProps: p = {},
    invisible: m = !1,
    open: g,
    slotProps: h = {},
    slots: c = {},
    TransitionComponent: b = yx,
    transitionDuration: x
  } = i, w = de(i, bx), $ = A({}, i, {
    component: u,
    invisible: m
  }), S = vx($), y = (n = h.root) != null ? n : p.root;
  return /* @__PURE__ */ v.jsx(b, A({
    in: g,
    timeout: x
  }, w, {
    children: /* @__PURE__ */ v.jsx(xx, A({
      "aria-hidden": !0
    }, y, {
      as: (o = (s = c.root) != null ? s : f.Root) != null ? o : u,
      className: ae(S.root, d, y == null ? void 0 : y.className),
      ownerState: A({}, $, y == null ? void 0 : y.ownerState),
      classes: S,
      ref: r,
      children: a
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Op.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: l.shape({
    Root: l.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: l.shape({
    root: l.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: l.bool,
  /**
   * If `true`, the component is shown.
   */
  open: l.bool.isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: l.shape({
    root: l.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: l.shape({
    root: l.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: l.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: l.oneOfType([l.number, l.shape({
    appear: l.number,
    enter: l.number,
    exit: l.number
  })])
});
const Ex = Op, Tx = Ue("MuiBox", ["root"]), Cx = Tx, Sx = dp(), _p = Yb({
  themeId: pn,
  defaultTheme: Sx,
  defaultClassName: Cx.root,
  generateClassName: jf.generate
});
process.env.NODE_ENV !== "production" && (_p.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: l.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object])
});
const ut = _p;
function $x(e) {
  return Ve("MuiButton", e);
}
const Rx = Ue("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), Mo = Rx, Pp = /* @__PURE__ */ E.createContext({});
process.env.NODE_ENV !== "production" && (Pp.displayName = "ButtonGroupContext");
const Ox = Pp, wp = /* @__PURE__ */ E.createContext(void 0);
process.env.NODE_ENV !== "production" && (wp.displayName = "ButtonGroupButtonContext");
const _x = wp, Px = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], wx = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: o,
    variant: s,
    classes: i
  } = e, a = {
    root: ["root", s, `${s}${oe(t)}`, `size${oe(o)}`, `${s}Size${oe(o)}`, `color${oe(t)}`, r && "disableElevation", n && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${oe(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${oe(o)}`]
  }, d = Xe(a, $x, i);
  return A({}, i, d);
}, Ap = (e) => A({}, e.size === "small" && {
  "& > *:nth-of-type(1)": {
    fontSize: 18
  }
}, e.size === "medium" && {
  "& > *:nth-of-type(1)": {
    fontSize: 20
  }
}, e.size === "large" && {
  "& > *:nth-of-type(1)": {
    fontSize: 22
  }
}), Ax = Pe(yn, {
  shouldForwardProp: (e) => Hs(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${oe(r.color)}`], t[`size${oe(r.size)}`], t[`${r.variant}Size${oe(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var r, n;
  const o = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], s = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return A({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": A({
      textDecoration: "none",
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : De(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "text" && t.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : De(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "outlined" && t.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[t.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : De(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "contained" && {
      backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedHoverBg : s,
      boxShadow: (e.vars || e).shadows[4],
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: (e.vars || e).shadows[2],
        backgroundColor: (e.vars || e).palette.grey[300]
      }
    }, t.variant === "contained" && t.color !== "inherit" && {
      backgroundColor: (e.vars || e).palette[t.color].dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (e.vars || e).palette[t.color].main
      }
    }),
    "&:active": A({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[8]
    }),
    [`&.${Mo.focusVisible}`]: A({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${Mo.disabled}`]: A({
      color: (e.vars || e).palette.action.disabled
    }, t.variant === "outlined" && {
      border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
    }, t.variant === "contained" && {
      color: (e.vars || e).palette.action.disabled,
      boxShadow: (e.vars || e).shadows[0],
      backgroundColor: (e.vars || e).palette.action.disabledBackground
    })
  }, t.variant === "text" && {
    padding: "6px 8px"
  }, t.variant === "text" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main
  }, t.variant === "outlined" && {
    padding: "5px 15px",
    border: "1px solid currentColor"
  }, t.variant === "outlined" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main,
    border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${De(e.palette[t.color].main, 0.5)}`
  }, t.variant === "contained" && {
    color: e.vars ? (
      // this is safe because grey does not change between default light/dark mode
      e.vars.palette.text.primary
    ) : (r = (n = e.palette).getContrastText) == null ? void 0 : r.call(n, e.palette.grey[300]),
    backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedBg : o,
    boxShadow: (e.vars || e).shadows[2]
  }, t.variant === "contained" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].contrastText,
    backgroundColor: (e.vars || e).palette[t.color].main
  }, t.color === "inherit" && {
    color: "inherit",
    borderColor: "currentColor"
  }, t.size === "small" && t.variant === "text" && {
    padding: "4px 5px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "text" && {
    padding: "8px 11px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "outlined" && {
    padding: "3px 9px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "outlined" && {
    padding: "7px 21px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "contained" && {
    padding: "4px 10px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "contained" && {
    padding: "8px 22px",
    fontSize: e.typography.pxToRem(15)
  }, t.fullWidth && {
    width: "100%"
  });
}, ({
  ownerState: e
}) => e.disableElevation && {
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none"
  },
  [`&.${Mo.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${Mo.disabled}`]: {
    boxShadow: "none"
  }
}), Nx = Pe("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, t[`iconSize${oe(r.size)}`]];
  }
})(({
  ownerState: e
}) => A({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, Ap(e))), kx = Pe("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, t[`iconSize${oe(r.size)}`]];
  }
})(({
  ownerState: e
}) => A({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, Ap(e))), Np = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = E.useContext(Ox), o = E.useContext(_x), s = ls(n, t), i = qe({
    props: s,
    name: "MuiButton"
  }), {
    children: a,
    color: d = "primary",
    component: u = "button",
    className: f,
    disabled: p = !1,
    disableElevation: m = !1,
    disableFocusRipple: g = !1,
    endIcon: h,
    focusVisibleClassName: c,
    fullWidth: b = !1,
    size: x = "medium",
    startIcon: w,
    type: $,
    variant: S = "text"
  } = i, y = de(i, Px), P = A({}, i, {
    color: d,
    component: u,
    disabled: p,
    disableElevation: m,
    disableFocusRipple: g,
    fullWidth: b,
    size: x,
    type: $,
    variant: S
  }), O = wx(P), I = w && /* @__PURE__ */ v.jsx(Nx, {
    className: O.startIcon,
    ownerState: P,
    children: w
  }), F = h && /* @__PURE__ */ v.jsx(kx, {
    className: O.endIcon,
    ownerState: P,
    children: h
  }), V = o || "";
  return /* @__PURE__ */ v.jsxs(Ax, A({
    ownerState: P,
    className: ae(n.className, O.root, f, V),
    component: u,
    disabled: p,
    focusRipple: !g,
    focusVisibleClassName: ae(O.focusVisible, c),
    ref: r,
    type: $
  }, y, {
    classes: O,
    children: [I, a, F]
  }));
});
process.env.NODE_ENV !== "production" && (Np.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: l.oneOfType([l.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), l.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: l.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: l.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: l.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: l.bool,
  /**
   * Element placed after the children.
   */
  endIcon: l.node,
  /**
   * @ignore
   */
  focusVisibleClassName: l.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: l.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: l.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: l.oneOfType([l.oneOf(["small", "medium", "large"]), l.string]),
  /**
   * Element placed before the children.
   */
  startIcon: l.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * @ignore
   */
  type: l.oneOfType([l.oneOf(["button", "reset", "submit"]), l.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: l.oneOfType([l.oneOf(["contained", "outlined", "text"]), l.string])
});
const fu = Np;
function Ix(e) {
  return Ve("MuiCard", e);
}
Ue("MuiCard", ["root"]);
const Mx = ["className", "raised"], jx = (e) => {
  const {
    classes: t
  } = e;
  return Xe({
    root: ["root"]
  }, Ix, t);
}, Dx = Pe(Ec, {
  name: "MuiCard",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(() => ({
  overflow: "hidden"
})), kp = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = qe({
    props: t,
    name: "MuiCard"
  }), {
    className: o,
    raised: s = !1
  } = n, i = de(n, Mx), a = A({}, n, {
    raised: s
  }), d = jx(a);
  return /* @__PURE__ */ v.jsx(Dx, A({
    className: ae(d.root, o),
    elevation: s ? 8 : void 0,
    ref: r,
    ownerState: a
  }, i));
});
process.env.NODE_ENV !== "production" && (kp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * If `true`, the card will use raised styling.
   * @default false
   */
  raised: Cr(l.bool, (e) => e.raised && e.variant === "outlined" ? new Error('MUI: Combining `raised={true}` with `variant="outlined"` has no effect.') : null),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object])
});
const Vn = kp;
function Fx(e) {
  return Ve("MuiCardContent", e);
}
Ue("MuiCardContent", ["root"]);
const Lx = ["className", "component"], Bx = (e) => {
  const {
    classes: t
  } = e;
  return Xe({
    root: ["root"]
  }, Fx, t);
}, zx = Pe("div", {
  name: "MuiCardContent",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(() => ({
  padding: 16,
  "&:last-child": {
    paddingBottom: 24
  }
})), Ip = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = qe({
    props: t,
    name: "MuiCardContent"
  }), {
    className: o,
    component: s = "div"
  } = n, i = de(n, Lx), a = A({}, n, {
    component: s
  }), d = Bx(a);
  return /* @__PURE__ */ v.jsx(zx, A({
    as: s,
    className: ae(d.root, o),
    ownerState: a,
    ref: r
  }, i));
});
process.env.NODE_ENV !== "production" && (Ip.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object])
});
const Un = Ip, Vx = (e, t) => A({
  WebkitFontSmoothing: "antialiased",
  // Antialiasing.
  MozOsxFontSmoothing: "grayscale",
  // Antialiasing.
  // Change from `box-sizing: content-box` so that `width`
  // is not affected by `padding` or `border`.
  boxSizing: "border-box",
  // Fix font resize problem in iOS
  WebkitTextSizeAdjust: "100%"
}, t && !e.vars && {
  colorScheme: e.palette.mode
}), Ux = (e) => A({
  color: (e.vars || e).palette.text.primary
}, e.typography.body1, {
  backgroundColor: (e.vars || e).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (e.vars || e).palette.common.white
  }
}), qx = (e, t = !1) => {
  var r;
  const n = {};
  t && e.colorSchemes && Object.entries(e.colorSchemes).forEach(([i, a]) => {
    var d;
    n[e.getColorSchemeSelector(i).replace(/\s*&/, "")] = {
      colorScheme: (d = a.palette) == null ? void 0 : d.mode
    };
  });
  let o = A({
    html: Vx(e, t),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: e.typography.fontWeightBold
    },
    body: A({
      margin: 0
    }, Ux(e), {
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: (e.vars || e).palette.background.default
      }
    })
  }, n);
  const s = (r = e.components) == null || (r = r.MuiCssBaseline) == null ? void 0 : r.styleOverrides;
  return s && (o = [o, s]), o;
};
function Mp(e) {
  const t = qe({
    props: e,
    name: "MuiCssBaseline"
  }), {
    children: r,
    enableColorScheme: n = !1
  } = t;
  return /* @__PURE__ */ v.jsxs(E.Fragment, {
    children: [/* @__PURE__ */ v.jsx($p, {
      styles: (o) => qx(o, n)
    }), r]
  });
}
process.env.NODE_ENV !== "production" && (Mp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * You can wrap a node.
   */
  children: l.node,
  /**
   * Enable `color-scheme` CSS property to use `theme.palette.mode`.
   * For more details, check out https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
   * For browser support, check out https://caniuse.com/?search=color-scheme
   * @default false
   */
  enableColorScheme: l.bool
});
function Wx(e) {
  const t = Er(e);
  return t.body === e ? go(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Hn(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function pu(e) {
  return parseInt(go(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Yx(e) {
  const r = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, n = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return r || n;
}
function hu(e, t, r, n, o) {
  const s = [t, r, ...n];
  [].forEach.call(e.children, (i) => {
    const a = s.indexOf(i) === -1, d = !Yx(i);
    a && d && Hn(i, o);
  });
}
function Fi(e, t) {
  let r = -1;
  return e.some((n, o) => t(n) ? (r = o, !0) : !1), r;
}
function Hx(e, t) {
  const r = [], n = e.container;
  if (!t.disableScrollLock) {
    if (Wx(n)) {
      const i = $v(Er(n));
      r.push({
        value: n.style.paddingRight,
        property: "padding-right",
        el: n
      }), n.style.paddingRight = `${pu(n) + i}px`;
      const a = Er(n).querySelectorAll(".mui-fixed");
      [].forEach.call(a, (d) => {
        r.push({
          value: d.style.paddingRight,
          property: "padding-right",
          el: d
        }), d.style.paddingRight = `${pu(d) + i}px`;
      });
    }
    let s;
    if (n.parentNode instanceof DocumentFragment)
      s = Er(n).body;
    else {
      const i = n.parentElement, a = go(n);
      s = (i == null ? void 0 : i.nodeName) === "HTML" && a.getComputedStyle(i).overflowY === "scroll" ? i : n;
    }
    r.push({
      value: s.style.overflow,
      property: "overflow",
      el: s
    }, {
      value: s.style.overflowX,
      property: "overflow-x",
      el: s
    }, {
      value: s.style.overflowY,
      property: "overflow-y",
      el: s
    }), s.style.overflow = "hidden";
  }
  return () => {
    r.forEach(({
      value: s,
      el: i,
      property: a
    }) => {
      s ? i.style.setProperty(a, s) : i.style.removeProperty(a);
    });
  };
}
function Gx(e) {
  const t = [];
  return [].forEach.call(e.children, (r) => {
    r.getAttribute("aria-hidden") === "true" && t.push(r);
  }), t;
}
class Kx {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, r) {
    let n = this.modals.indexOf(t);
    if (n !== -1)
      return n;
    n = this.modals.length, this.modals.push(t), t.modalRef && Hn(t.modalRef, !1);
    const o = Gx(r);
    hu(r, t.mount, t.modalRef, o, !0);
    const s = Fi(this.containers, (i) => i.container === r);
    return s !== -1 ? (this.containers[s].modals.push(t), n) : (this.containers.push({
      modals: [t],
      container: r,
      restore: null,
      hiddenSiblings: o
    }), n);
  }
  mount(t, r) {
    const n = Fi(this.containers, (s) => s.modals.indexOf(t) !== -1), o = this.containers[n];
    o.restore || (o.restore = Hx(o, r));
  }
  remove(t, r = !0) {
    const n = this.modals.indexOf(t);
    if (n === -1)
      return n;
    const o = Fi(this.containers, (i) => i.modals.indexOf(t) !== -1), s = this.containers[o];
    if (s.modals.splice(s.modals.indexOf(t), 1), this.modals.splice(n, 1), s.modals.length === 0)
      s.restore && s.restore(), t.modalRef && Hn(t.modalRef, r), hu(s.container, t.mount, t.modalRef, s.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const i = s.modals[s.modals.length - 1];
      i.modalRef && Hn(i.modalRef, !1);
    }
    return n;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const Qx = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Xx(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Jx(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (n) => e.ownerDocument.querySelector(`input[type="radio"]${n}`);
  let r = t(`[name="${e.name}"]:checked`);
  return r || (r = t(`[name="${e.name}"]`)), r !== e;
}
function Zx(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Jx(e));
}
function eE(e) {
  const t = [], r = [];
  return Array.from(e.querySelectorAll(Qx)).forEach((n, o) => {
    const s = Xx(n);
    s === -1 || !Zx(n) || (s === 0 ? t.push(n) : r.push({
      documentOrder: o,
      tabIndex: s,
      node: n
    }));
  }), r.sort((n, o) => n.tabIndex === o.tabIndex ? n.documentOrder - o.documentOrder : n.tabIndex - o.tabIndex).map((n) => n.node).concat(t);
}
function tE() {
  return !0;
}
function gs(e) {
  const {
    children: t,
    disableAutoFocus: r = !1,
    disableEnforceFocus: n = !1,
    disableRestoreFocus: o = !1,
    getTabbable: s = eE,
    isEnabled: i = tE,
    open: a
  } = e, d = E.useRef(!1), u = E.useRef(null), f = E.useRef(null), p = E.useRef(null), m = E.useRef(null), g = E.useRef(!1), h = E.useRef(null), c = qt(Ys(t), h), b = E.useRef(null);
  E.useEffect(() => {
    !a || !h.current || (g.current = !r);
  }, [r, a]), E.useEffect(() => {
    if (!a || !h.current)
      return;
    const $ = Er(h.current);
    return h.current.contains($.activeElement) || (h.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), h.current.setAttribute("tabIndex", "-1")), g.current && h.current.focus()), () => {
      o || (p.current && p.current.focus && (d.current = !0, p.current.focus()), p.current = null);
    };
  }, [a]), E.useEffect(() => {
    if (!a || !h.current)
      return;
    const $ = Er(h.current), S = (O) => {
      b.current = O, !(n || !i() || O.key !== "Tab") && $.activeElement === h.current && O.shiftKey && (d.current = !0, f.current && f.current.focus());
    }, y = () => {
      const O = h.current;
      if (O === null)
        return;
      if (!$.hasFocus() || !i() || d.current) {
        d.current = !1;
        return;
      }
      if (O.contains($.activeElement) || n && $.activeElement !== u.current && $.activeElement !== f.current)
        return;
      if ($.activeElement !== m.current)
        m.current = null;
      else if (m.current !== null)
        return;
      if (!g.current)
        return;
      let I = [];
      if (($.activeElement === u.current || $.activeElement === f.current) && (I = s(h.current)), I.length > 0) {
        var F, V;
        const Q = !!((F = b.current) != null && F.shiftKey && ((V = b.current) == null ? void 0 : V.key) === "Tab"), q = I[0], L = I[I.length - 1];
        typeof q != "string" && typeof L != "string" && (Q ? L.focus() : q.focus());
      } else
        O.focus();
    };
    $.addEventListener("focusin", y), $.addEventListener("keydown", S, !0);
    const P = setInterval(() => {
      $.activeElement && $.activeElement.tagName === "BODY" && y();
    }, 50);
    return () => {
      clearInterval(P), $.removeEventListener("focusin", y), $.removeEventListener("keydown", S, !0);
    };
  }, [r, n, o, i, a, s]);
  const x = ($) => {
    p.current === null && (p.current = $.relatedTarget), g.current = !0, m.current = $.target;
    const S = t.props.onFocus;
    S && S($);
  }, w = ($) => {
    p.current === null && (p.current = $.relatedTarget), g.current = !0;
  };
  return /* @__PURE__ */ v.jsxs(E.Fragment, {
    children: [/* @__PURE__ */ v.jsx("div", {
      tabIndex: a ? 0 : -1,
      onFocus: w,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ E.cloneElement(t, {
      ref: c,
      onFocus: x
    }), /* @__PURE__ */ v.jsx("div", {
      tabIndex: a ? 0 : -1,
      onFocus: w,
      ref: f,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (gs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: Us,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: l.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: l.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: l.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: l.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: l.func,
  /**
   * If `true`, focus is locked.
   */
  open: l.bool.isRequired
});
process.env.NODE_ENV !== "production" && (gs["propTypes"] = qs(gs.propTypes));
function rE(e) {
  return typeof e == "function" ? e() : e;
}
function nE(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const oE = new Kx();
function sE(e) {
  const {
    container: t,
    disableEscapeKeyDown: r = !1,
    disableScrollLock: n = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: o = oE,
    closeAfterTransition: s = !1,
    onTransitionEnter: i,
    onTransitionExited: a,
    children: d,
    onClose: u,
    open: f,
    rootRef: p
  } = e, m = E.useRef({}), g = E.useRef(null), h = E.useRef(null), c = qt(h, p), [b, x] = E.useState(!f), w = nE(d);
  let $ = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && ($ = !1);
  const S = () => Er(g.current), y = () => (m.current.modalRef = h.current, m.current.mount = g.current, m.current), P = () => {
    o.mount(y(), {
      disableScrollLock: n
    }), h.current && (h.current.scrollTop = 0);
  }, O = on(() => {
    const z = rE(t) || S().body;
    o.add(y(), z), h.current && P();
  }), I = E.useCallback(() => o.isTopModal(y()), [o]), F = on((z) => {
    g.current = z, z && (f && I() ? P() : h.current && Hn(h.current, $));
  }), V = E.useCallback(() => {
    o.remove(y(), $);
  }, [$, o]);
  E.useEffect(() => () => {
    V();
  }, [V]), E.useEffect(() => {
    f ? O() : (!w || !s) && V();
  }, [f, V, w, s, O]);
  const Q = (z) => (te) => {
    var D;
    (D = z.onKeyDown) == null || D.call(z, te), !(te.key !== "Escape" || te.which === 229 || // Wait until IME is settled.
    !I()) && (r || (te.stopPropagation(), u && u(te, "escapeKeyDown")));
  }, q = (z) => (te) => {
    var D;
    (D = z.onClick) == null || D.call(z, te), te.target === te.currentTarget && u && u(te, "backdropClick");
  };
  return {
    getRootProps: (z = {}) => {
      const te = Kf(e);
      delete te.onTransitionEnter, delete te.onTransitionExited;
      const D = A({}, te, z);
      return A({
        role: "presentation"
      }, D, {
        onKeyDown: Q(D),
        ref: c
      });
    },
    getBackdropProps: (z = {}) => {
      const te = z;
      return A({
        "aria-hidden": !0
      }, te, {
        onClick: q(te),
        open: f
      });
    },
    getTransitionProps: () => {
      const z = () => {
        x(!1), i && i();
      }, te = () => {
        x(!0), a && a(), s && V();
      };
      return {
        onEnter: Ll(z, d == null ? void 0 : d.props.onEnter),
        onExited: Ll(te, d == null ? void 0 : d.props.onExited)
      };
    },
    rootRef: c,
    portalRef: F,
    isTopModal: I,
    exited: b,
    hasTransition: w
  };
}
function iE(e) {
  return Ve("MuiModal", e);
}
Ue("MuiModal", ["root", "hidden", "backdrop"]);
const aE = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], cE = (e) => {
  const {
    open: t,
    exited: r,
    classes: n
  } = e;
  return Xe({
    root: ["root", !t && r && "hidden"],
    backdrop: ["backdrop"]
  }, iE, n);
}, lE = Pe("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, !r.open && r.exited && t.hidden];
  }
})(({
  theme: e,
  ownerState: t
}) => A({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !t.open && t.exited && {
  visibility: "hidden"
})), uE = Pe(Ex, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), jp = /* @__PURE__ */ E.forwardRef(function(t, r) {
  var n, o, s, i, a, d;
  const u = qe({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: f = uE,
    BackdropProps: p,
    className: m,
    closeAfterTransition: g = !1,
    children: h,
    container: c,
    component: b,
    components: x = {},
    componentsProps: w = {},
    disableAutoFocus: $ = !1,
    disableEnforceFocus: S = !1,
    disableEscapeKeyDown: y = !1,
    disablePortal: P = !1,
    disableRestoreFocus: O = !1,
    disableScrollLock: I = !1,
    hideBackdrop: F = !1,
    keepMounted: V = !1,
    onBackdropClick: Q,
    open: q,
    slotProps: L,
    slots: j
    // eslint-disable-next-line react/prop-types
  } = u, ne = de(u, aE), z = A({}, u, {
    closeAfterTransition: g,
    disableAutoFocus: $,
    disableEnforceFocus: S,
    disableEscapeKeyDown: y,
    disablePortal: P,
    disableRestoreFocus: O,
    disableScrollLock: I,
    hideBackdrop: F,
    keepMounted: V
  }), {
    getRootProps: te,
    getBackdropProps: D,
    getTransitionProps: se,
    portalRef: _,
    isTopModal: N,
    exited: W,
    hasTransition: Y
  } = sE(A({}, z, {
    rootRef: r
  })), M = A({}, z, {
    exited: W
  }), H = cE(M), U = {};
  if (h.props.tabIndex === void 0 && (U.tabIndex = "-1"), Y) {
    const {
      onEnter: ce,
      onExited: xe
    } = se();
    U.onEnter = ce, U.onExited = xe;
  }
  const K = (n = (o = j == null ? void 0 : j.root) != null ? o : x.Root) != null ? n : lE, X = (s = (i = j == null ? void 0 : j.backdrop) != null ? i : x.Backdrop) != null ? s : f, G = (a = L == null ? void 0 : L.root) != null ? a : w.root, Z = (d = L == null ? void 0 : L.backdrop) != null ? d : w.backdrop, ue = ql({
    elementType: K,
    externalSlotProps: G,
    externalForwardedProps: ne,
    getSlotProps: te,
    additionalProps: {
      ref: r,
      as: b
    },
    ownerState: M,
    className: ae(m, G == null ? void 0 : G.className, H == null ? void 0 : H.root, !M.open && M.exited && (H == null ? void 0 : H.hidden))
  }), T = ql({
    elementType: X,
    externalSlotProps: Z,
    additionalProps: p,
    getSlotProps: (ce) => D(A({}, ce, {
      onClick: (xe) => {
        Q && Q(xe), ce != null && ce.onClick && ce.onClick(xe);
      }
    })),
    className: ae(Z == null ? void 0 : Z.className, p == null ? void 0 : p.className, H == null ? void 0 : H.backdrop),
    ownerState: M
  });
  return !V && !q && (!Y || W) ? null : /* @__PURE__ */ v.jsx(ix, {
    ref: _,
    container: c,
    disablePortal: P,
    children: /* @__PURE__ */ v.jsxs(K, A({}, ue, {
      children: [!F && f ? /* @__PURE__ */ v.jsx(X, A({}, T)) : null, /* @__PURE__ */ v.jsx(gs, {
        disableEnforceFocus: S,
        disableAutoFocus: $,
        disableRestoreFocus: O,
        isEnabled: N,
        open: q,
        children: /* @__PURE__ */ E.cloneElement(h, U)
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (jp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: l.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: l.object,
  /**
   * A single child content element.
   */
  children: Us.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: l.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: l.shape({
    Backdrop: l.elementType,
    Root: l.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: l.shape({
    backdrop: l.oneOfType([l.func, l.object]),
    root: l.oneOfType([l.func, l.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: l.oneOfType([pc, l.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: l.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: l.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: l.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: l.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: l.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: l.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: l.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: l.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: l.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: l.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: l.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: l.func,
  /**
   * If `true`, the component is shown.
   */
  open: l.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: l.shape({
    backdrop: l.oneOfType([l.func, l.object]),
    root: l.oneOfType([l.func, l.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: l.shape({
    backdrop: l.elementType,
    root: l.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object])
});
const dE = jp, fE = ["addEndListener", "appear", "children", "container", "direction", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function pE(e, t, r) {
  const n = t.getBoundingClientRect(), o = r && r.getBoundingClientRect(), s = go(t);
  let i;
  if (t.fakeTransform)
    i = t.fakeTransform;
  else {
    const u = s.getComputedStyle(t);
    i = u.getPropertyValue("-webkit-transform") || u.getPropertyValue("transform");
  }
  let a = 0, d = 0;
  if (i && i !== "none" && typeof i == "string") {
    const u = i.split("(")[1].split(")")[0].split(",");
    a = parseInt(u[4], 10), d = parseInt(u[5], 10);
  }
  return e === "left" ? o ? `translateX(${o.right + a - n.left}px)` : `translateX(${s.innerWidth + a - n.left}px)` : e === "right" ? o ? `translateX(-${n.right - o.left - a}px)` : `translateX(-${n.left + n.width - a}px)` : e === "up" ? o ? `translateY(${o.bottom + d - n.top}px)` : `translateY(${s.innerHeight + d - n.top}px)` : o ? `translateY(-${n.top - o.top + n.height - d}px)` : `translateY(-${n.top + n.height - d}px)`;
}
function Dp(e) {
  return typeof e == "function" ? e() : e;
}
function jo(e, t, r) {
  const n = Dp(r), o = pE(e, t, n);
  o && (t.style.webkitTransform = o, t.style.transform = o);
}
const Fp = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = bo(), o = {
    enter: n.transitions.easing.easeOut,
    exit: n.transitions.easing.sharp
  }, s = {
    enter: n.transitions.duration.enteringScreen,
    exit: n.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: a = !0,
    children: d,
    container: u,
    direction: f = "down",
    easing: p = o,
    in: m,
    onEnter: g,
    onEntered: h,
    onEntering: c,
    onExit: b,
    onExited: x,
    onExiting: w,
    style: $,
    timeout: S = s,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: y = mp
  } = t, P = de(t, fE), O = E.useRef(null), I = qt(Ys(d), O, r), F = (D) => (se) => {
    D && (se === void 0 ? D(O.current) : D(O.current, se));
  }, V = F((D, se) => {
    jo(f, D, u), yp(D), g && g(D, se);
  }), Q = F((D, se) => {
    const _ = ms({
      timeout: S,
      style: $,
      easing: p
    }, {
      mode: "enter"
    });
    D.style.webkitTransition = n.transitions.create("-webkit-transform", A({}, _)), D.style.transition = n.transitions.create("transform", A({}, _)), D.style.webkitTransform = "none", D.style.transform = "none", c && c(D, se);
  }), q = F(h), L = F(w), j = F((D) => {
    const se = ms({
      timeout: S,
      style: $,
      easing: p
    }, {
      mode: "exit"
    });
    D.style.webkitTransition = n.transitions.create("-webkit-transform", se), D.style.transition = n.transitions.create("transform", se), jo(f, D, u), b && b(D);
  }), ne = F((D) => {
    D.style.webkitTransition = "", D.style.transition = "", x && x(D);
  }), z = (D) => {
    i && i(O.current, D);
  }, te = E.useCallback(() => {
    O.current && jo(f, O.current, u);
  }, [f, u]);
  return E.useEffect(() => {
    if (m || f === "down" || f === "right")
      return;
    const D = cv(() => {
      O.current && jo(f, O.current, u);
    }), se = go(O.current);
    return se.addEventListener("resize", D), () => {
      D.clear(), se.removeEventListener("resize", D);
    };
  }, [f, m, u]), E.useEffect(() => {
    m || te();
  }, [m, te]), /* @__PURE__ */ v.jsx(y, A({
    nodeRef: O,
    onEnter: V,
    onEntered: q,
    onEntering: Q,
    onExit: j,
    onExited: ne,
    onExiting: L,
    addEndListener: z,
    appear: a,
    in: m,
    timeout: S
  }, P, {
    children: (D, se) => /* @__PURE__ */ E.cloneElement(d, A({
      ref: I,
      style: A({
        visibility: D === "exited" && !m ? "hidden" : void 0
      }, $, d.props.style)
    }, se))
  }));
});
process.env.NODE_ENV !== "production" && (Fp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: l.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: l.bool,
  /**
   * A single child content element.
   */
  children: Us.isRequired,
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the container the Slide is transitioning from.
   */
  container: Cr(l.oneOfType([pc, l.func]), (e) => {
    if (e.open) {
      const t = Dp(e.container);
      if (t && t.nodeType === 1) {
        const r = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && r.top === 0 && r.left === 0 && r.right === 0 && r.bottom === 0)
          return new Error(["MUI: The `container` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `container` prop provided to the component is invalid.", "It should be an HTML element instance."].join(`
`));
    }
    return null;
  }),
  /**
   * Direction the child node will enter from.
   * @default 'down'
   */
  direction: l.oneOf(["down", "left", "right", "up"]),
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   * @default {
   *   enter: theme.transitions.easing.easeOut,
   *   exit: theme.transitions.easing.sharp,
   * }
   */
  easing: l.oneOfType([l.shape({
    enter: l.string,
    exit: l.string
  }), l.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: l.bool,
  /**
   * @ignore
   */
  onEnter: l.func,
  /**
   * @ignore
   */
  onEntered: l.func,
  /**
   * @ignore
   */
  onEntering: l.func,
  /**
   * @ignore
   */
  onExit: l.func,
  /**
   * @ignore
   */
  onExited: l.func,
  /**
   * @ignore
   */
  onExiting: l.func,
  /**
   * @ignore
   */
  style: l.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: l.oneOfType([l.number, l.shape({
    appear: l.number,
    enter: l.number,
    exit: l.number
  })])
});
const hE = Fp;
function mE(e) {
  return Ve("MuiDrawer", e);
}
Ue("MuiDrawer", ["root", "docked", "paper", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);
const yE = ["BackdropProps"], gE = ["anchor", "BackdropProps", "children", "className", "elevation", "hideBackdrop", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "TransitionComponent", "transitionDuration", "variant"], Lp = (e, t) => {
  const {
    ownerState: r
  } = e;
  return [t.root, (r.variant === "permanent" || r.variant === "persistent") && t.docked, t.modal];
}, bE = (e) => {
  const {
    classes: t,
    anchor: r,
    variant: n
  } = e, o = {
    root: ["root"],
    docked: [(n === "permanent" || n === "persistent") && "docked"],
    modal: ["modal"],
    paper: ["paper", `paperAnchor${oe(r)}`, n !== "temporary" && `paperAnchorDocked${oe(r)}`]
  };
  return Xe(o, mE, t);
}, vE = Pe(dE, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver: Lp
})(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.drawer
})), mu = Pe("div", {
  shouldForwardProp: Hs,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: !1,
  overridesResolver: Lp
})({
  flex: "0 0 auto"
}), xE = Pe(Ec, {
  name: "MuiDrawer",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.paper, t[`paperAnchor${oe(r.anchor)}`], r.variant !== "temporary" && t[`paperAnchorDocked${oe(r.anchor)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => A({
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  flex: "1 0 auto",
  zIndex: (e.vars || e).zIndex.drawer,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  // temporary style
  position: "fixed",
  top: 0,
  // We disable the focus ring for mouse, touch and keyboard users.
  // At some point, it would be better to keep it for keyboard users.
  // :focus-ring CSS pseudo-class will help.
  outline: 0
}, t.anchor === "left" && {
  left: 0
}, t.anchor === "top" && {
  top: 0,
  left: 0,
  right: 0,
  height: "auto",
  maxHeight: "100%"
}, t.anchor === "right" && {
  right: 0
}, t.anchor === "bottom" && {
  top: "auto",
  left: 0,
  bottom: 0,
  right: 0,
  height: "auto",
  maxHeight: "100%"
}, t.anchor === "left" && t.variant !== "temporary" && {
  borderRight: `1px solid ${(e.vars || e).palette.divider}`
}, t.anchor === "top" && t.variant !== "temporary" && {
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`
}, t.anchor === "right" && t.variant !== "temporary" && {
  borderLeft: `1px solid ${(e.vars || e).palette.divider}`
}, t.anchor === "bottom" && t.variant !== "temporary" && {
  borderTop: `1px solid ${(e.vars || e).palette.divider}`
})), Bp = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function EE(e) {
  return ["left", "right"].indexOf(e) !== -1;
}
function TE({
  direction: e
}, t) {
  return e === "rtl" && EE(t) ? Bp[t] : t;
}
const zp = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = qe({
    props: t,
    name: "MuiDrawer"
  }), o = bo(), s = Dv(), i = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    anchor: a = "left",
    BackdropProps: d,
    children: u,
    className: f,
    elevation: p = 16,
    hideBackdrop: m = !1,
    ModalProps: {
      BackdropProps: g
    } = {},
    onClose: h,
    open: c = !1,
    PaperProps: b = {},
    SlideProps: x,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: w = hE,
    transitionDuration: $ = i,
    variant: S = "temporary"
  } = n, y = de(n.ModalProps, yE), P = de(n, gE), O = E.useRef(!1);
  E.useEffect(() => {
    O.current = !0;
  }, []);
  const I = TE({
    direction: s ? "rtl" : "ltr"
  }, a), V = A({}, n, {
    anchor: a,
    elevation: p,
    open: c,
    variant: S
  }, P), Q = bE(V), q = /* @__PURE__ */ v.jsx(xE, A({
    elevation: S === "temporary" ? p : 0,
    square: !0
  }, b, {
    className: ae(Q.paper, b.className),
    ownerState: V,
    children: u
  }));
  if (S === "permanent")
    return /* @__PURE__ */ v.jsx(mu, A({
      className: ae(Q.root, Q.docked, f),
      ownerState: V,
      ref: r
    }, P, {
      children: q
    }));
  const L = /* @__PURE__ */ v.jsx(w, A({
    in: c,
    direction: Bp[I],
    timeout: $,
    appear: O.current
  }, x, {
    children: q
  }));
  return S === "persistent" ? /* @__PURE__ */ v.jsx(mu, A({
    className: ae(Q.root, Q.docked, f),
    ownerState: V,
    ref: r
  }, P, {
    children: L
  })) : /* @__PURE__ */ v.jsx(vE, A({
    BackdropProps: A({}, d, g, {
      transitionDuration: $
    }),
    className: ae(Q.root, Q.modal, f),
    open: c,
    ownerState: V,
    onClose: h,
    hideBackdrop: m,
    ref: r
  }, P, y, {
    children: L
  }));
});
process.env.NODE_ENV !== "production" && (zp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Side from which the drawer will appear.
   * @default 'left'
   */
  anchor: l.oneOf(["bottom", "left", "right", "top"]),
  /**
   * @ignore
   */
  BackdropProps: l.object,
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The elevation of the drawer.
   * @default 16
   */
  elevation: Gf,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: l.bool,
  /**
   * Props applied to the [`Modal`](/material-ui/api/modal/) element.
   * @default {}
   */
  ModalProps: l.object,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: l.func,
  /**
   * If `true`, the component is shown.
   * @default false
   */
  open: l.bool,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   * @default {}
   */
  PaperProps: l.object,
  /**
   * Props applied to the [`Slide`](/material-ui/api/slide/) element.
   */
  SlideProps: l.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: l.oneOfType([l.number, l.shape({
    appear: l.number,
    enter: l.number,
    exit: l.number
  })]),
  /**
   * The variant to use.
   * @default 'temporary'
   */
  variant: l.oneOf(["permanent", "persistent", "temporary"])
});
const yu = zp, Vp = /* @__PURE__ */ E.createContext();
process.env.NODE_ENV !== "production" && (Vp.displayName = "GridContext");
const gu = Vp;
function CE(e) {
  return Ve("MuiGrid", e);
}
const SE = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], $E = ["column-reverse", "column", "row-reverse", "row"], RE = ["nowrap", "wrap-reverse", "wrap"], jn = ["auto", !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], no = Ue("MuiGrid", [
  "root",
  "container",
  "item",
  "zeroMinWidth",
  // spacings
  ...SE.map((e) => `spacing-xs-${e}`),
  // direction values
  ...$E.map((e) => `direction-xs-${e}`),
  // wrap values
  ...RE.map((e) => `wrap-xs-${e}`),
  // grid sizes for all breakpoints
  ...jn.map((e) => `grid-xs-${e}`),
  ...jn.map((e) => `grid-sm-${e}`),
  ...jn.map((e) => `grid-md-${e}`),
  ...jn.map((e) => `grid-lg-${e}`),
  ...jn.map((e) => `grid-xl-${e}`)
]), OE = ["className", "columns", "columnSpacing", "component", "container", "direction", "item", "rowSpacing", "spacing", "wrap", "zeroMinWidth"];
function un(e) {
  const t = parseFloat(e);
  return `${t}${String(e).replace(String(t), "") || "px"}`;
}
function _E({
  theme: e,
  ownerState: t
}) {
  let r;
  return e.breakpoints.keys.reduce((n, o) => {
    let s = {};
    if (t[o] && (r = t[o]), !r)
      return n;
    if (r === !0)
      s = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: "100%"
      };
    else if (r === "auto")
      s = {
        flexBasis: "auto",
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: "none",
        width: "auto"
      };
    else {
      const i = Ns({
        values: t.columns,
        breakpoints: e.breakpoints.values
      }), a = typeof i == "object" ? i[o] : i;
      if (a == null)
        return n;
      const d = `${Math.round(r / a * 1e8) / 1e6}%`;
      let u = {};
      if (t.container && t.item && t.columnSpacing !== 0) {
        const f = e.spacing(t.columnSpacing);
        if (f !== "0px") {
          const p = `calc(${d} + ${un(f)})`;
          u = {
            flexBasis: p,
            maxWidth: p
          };
        }
      }
      s = A({
        flexBasis: d,
        flexGrow: 0,
        maxWidth: d
      }, u);
    }
    return e.breakpoints.values[o] === 0 ? Object.assign(n, s) : n[e.breakpoints.up(o)] = s, n;
  }, {});
}
function PE({
  theme: e,
  ownerState: t
}) {
  const r = Ns({
    values: t.direction,
    breakpoints: e.breakpoints.values
  });
  return jt({
    theme: e
  }, r, (n) => {
    const o = {
      flexDirection: n
    };
    return n.indexOf("column") === 0 && (o[`& > .${no.item}`] = {
      maxWidth: "none"
    }), o;
  });
}
function Up({
  breakpoints: e,
  values: t
}) {
  let r = "";
  Object.keys(t).forEach((o) => {
    r === "" && t[o] !== 0 && (r = o);
  });
  const n = Object.keys(e).sort((o, s) => e[o] - e[s]);
  return n.slice(0, n.indexOf(r));
}
function wE({
  theme: e,
  ownerState: t
}) {
  const {
    container: r,
    rowSpacing: n
  } = t;
  let o = {};
  if (r && n !== 0) {
    const s = Ns({
      values: n,
      breakpoints: e.breakpoints.values
    });
    let i;
    typeof s == "object" && (i = Up({
      breakpoints: e.breakpoints.values,
      values: s
    })), o = jt({
      theme: e
    }, s, (a, d) => {
      var u;
      const f = e.spacing(a);
      return f !== "0px" ? {
        marginTop: `-${un(f)}`,
        [`& > .${no.item}`]: {
          paddingTop: un(f)
        }
      } : (u = i) != null && u.includes(d) ? {} : {
        marginTop: 0,
        [`& > .${no.item}`]: {
          paddingTop: 0
        }
      };
    });
  }
  return o;
}
function AE({
  theme: e,
  ownerState: t
}) {
  const {
    container: r,
    columnSpacing: n
  } = t;
  let o = {};
  if (r && n !== 0) {
    const s = Ns({
      values: n,
      breakpoints: e.breakpoints.values
    });
    let i;
    typeof s == "object" && (i = Up({
      breakpoints: e.breakpoints.values,
      values: s
    })), o = jt({
      theme: e
    }, s, (a, d) => {
      var u;
      const f = e.spacing(a);
      return f !== "0px" ? {
        width: `calc(100% + ${un(f)})`,
        marginLeft: `-${un(f)}`,
        [`& > .${no.item}`]: {
          paddingLeft: un(f)
        }
      } : (u = i) != null && u.includes(d) ? {} : {
        width: "100%",
        marginLeft: 0,
        [`& > .${no.item}`]: {
          paddingLeft: 0
        }
      };
    });
  }
  return o;
}
function NE(e, t, r = {}) {
  if (!e || e <= 0)
    return [];
  if (typeof e == "string" && !Number.isNaN(Number(e)) || typeof e == "number")
    return [r[`spacing-xs-${String(e)}`]];
  const n = [];
  return t.forEach((o) => {
    const s = e[o];
    Number(s) > 0 && n.push(r[`spacing-${o}-${String(s)}`]);
  }), n;
}
const kE = Pe("div", {
  name: "MuiGrid",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e, {
      container: n,
      direction: o,
      item: s,
      spacing: i,
      wrap: a,
      zeroMinWidth: d,
      breakpoints: u
    } = r;
    let f = [];
    n && (f = NE(i, u, t));
    const p = [];
    return u.forEach((m) => {
      const g = r[m];
      g && p.push(t[`grid-${m}-${String(g)}`]);
    }), [t.root, n && t.container, s && t.item, d && t.zeroMinWidth, ...f, o !== "row" && t[`direction-xs-${String(o)}`], a !== "wrap" && t[`wrap-xs-${String(a)}`], ...p];
  }
})(({
  ownerState: e
}) => A({
  boxSizing: "border-box"
}, e.container && {
  display: "flex",
  flexWrap: "wrap",
  width: "100%"
}, e.item && {
  margin: 0
  // For instance, it's useful when used with a `figure` element.
}, e.zeroMinWidth && {
  minWidth: 0
}, e.wrap !== "wrap" && {
  flexWrap: e.wrap
}), PE, wE, AE, _E);
function IE(e, t) {
  if (!e || e <= 0)
    return [];
  if (typeof e == "string" && !Number.isNaN(Number(e)) || typeof e == "number")
    return [`spacing-xs-${String(e)}`];
  const r = [];
  return t.forEach((n) => {
    const o = e[n];
    if (Number(o) > 0) {
      const s = `spacing-${n}-${String(o)}`;
      r.push(s);
    }
  }), r;
}
const ME = (e) => {
  const {
    classes: t,
    container: r,
    direction: n,
    item: o,
    spacing: s,
    wrap: i,
    zeroMinWidth: a,
    breakpoints: d
  } = e;
  let u = [];
  r && (u = IE(s, d));
  const f = [];
  d.forEach((m) => {
    const g = e[m];
    g && f.push(`grid-${m}-${String(g)}`);
  });
  const p = {
    root: ["root", r && "container", o && "item", a && "zeroMinWidth", ...u, n !== "row" && `direction-xs-${String(n)}`, i !== "wrap" && `wrap-xs-${String(i)}`, ...f]
  };
  return Xe(p, CE, t);
}, Gn = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = qe({
    props: t,
    name: "MuiGrid"
  }), {
    breakpoints: o
  } = bo(), s = Vs(n), {
    className: i,
    columns: a,
    columnSpacing: d,
    component: u = "div",
    container: f = !1,
    direction: p = "row",
    item: m = !1,
    rowSpacing: g,
    spacing: h = 0,
    wrap: c = "wrap",
    zeroMinWidth: b = !1
  } = s, x = de(s, OE), w = g || h, $ = d || h, S = E.useContext(gu), y = f ? a || 12 : S, P = {}, O = A({}, x);
  o.keys.forEach((V) => {
    x[V] != null && (P[V] = x[V], delete O[V]);
  });
  const I = A({}, s, {
    columns: y,
    container: f,
    direction: p,
    item: m,
    rowSpacing: w,
    columnSpacing: $,
    wrap: c,
    zeroMinWidth: b,
    spacing: h
  }, P, {
    breakpoints: o.keys
  }), F = ME(I);
  return /* @__PURE__ */ v.jsx(gu.Provider, {
    value: y,
    children: /* @__PURE__ */ v.jsx(kE, A({
      ownerState: I,
      className: ae(F.root, i),
      as: u,
      ref: r
    }, O))
  });
});
process.env.NODE_ENV !== "production" && (Gn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The number of columns.
   * @default 12
   */
  columns: l.oneOfType([l.arrayOf(l.number), l.number, l.object]),
  /**
   * Defines the horizontal space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  columnSpacing: l.oneOfType([l.arrayOf(l.oneOfType([l.number, l.string])), l.number, l.object, l.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  container: l.bool,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'row'
   */
  direction: l.oneOfType([l.oneOf(["column-reverse", "column", "row-reverse", "row"]), l.arrayOf(l.oneOf(["column-reverse", "column", "row-reverse", "row"])), l.object]),
  /**
   * If `true`, the component will have the flex *item* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  item: l.bool,
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `lg` breakpoint and wider screens if not overridden.
   * @default false
   */
  lg: l.oneOfType([l.oneOf(["auto"]), l.number, l.bool]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `md` breakpoint and wider screens if not overridden.
   * @default false
   */
  md: l.oneOfType([l.oneOf(["auto"]), l.number, l.bool]),
  /**
   * Defines the vertical space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  rowSpacing: l.oneOfType([l.arrayOf(l.oneOfType([l.number, l.string])), l.number, l.object, l.string]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `sm` breakpoint and wider screens if not overridden.
   * @default false
   */
  sm: l.oneOfType([l.oneOf(["auto"]), l.number, l.bool]),
  /**
   * Defines the space between the type `item` components.
   * It can only be used on a type `container` component.
   * @default 0
   */
  spacing: l.oneOfType([l.arrayOf(l.oneOfType([l.number, l.string])), l.number, l.object, l.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   * @default 'wrap'
   */
  wrap: l.oneOf(["nowrap", "wrap-reverse", "wrap"]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `xl` breakpoint and wider screens if not overridden.
   * @default false
   */
  xl: l.oneOfType([l.oneOf(["auto"]), l.number, l.bool]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for all the screen sizes with the lowest priority.
   * @default false
   */
  xs: l.oneOfType([l.oneOf(["auto"]), l.number, l.bool]),
  /**
   * If `true`, it sets `min-width: 0` on the item.
   * Refer to the limitations section of the documentation to better understand the use case.
   * @default false
   */
  zeroMinWidth: l.bool
});
if (process.env.NODE_ENV !== "production") {
  const e = lv("Grid", Gn);
  Gn["propTypes"] = A({}, Gn.propTypes, {
    direction: e("container"),
    lg: e("item"),
    md: e("item"),
    sm: e("item"),
    spacing: e("container"),
    wrap: e("container"),
    xs: e("item"),
    zeroMinWidth: e("item")
  });
}
const Ht = Gn, qp = /* @__PURE__ */ E.createContext({});
process.env.NODE_ENV !== "production" && (qp.displayName = "ListContext");
const ir = qp;
function jE(e) {
  return Ve("MuiList", e);
}
Ue("MuiList", ["root", "padding", "dense", "subheader"]);
const DE = ["children", "className", "component", "dense", "disablePadding", "subheader"], FE = (e) => {
  const {
    classes: t,
    disablePadding: r,
    dense: n,
    subheader: o
  } = e;
  return Xe({
    root: ["root", !r && "padding", n && "dense", o && "subheader"]
  }, jE, t);
}, LE = Pe("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, !r.disablePadding && t.padding, r.dense && t.dense, r.subheader && t.subheader];
  }
})(({
  ownerState: e
}) => A({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !e.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, e.subheader && {
  paddingTop: 0
})), Wp = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = qe({
    props: t,
    name: "MuiList"
  }), {
    children: o,
    className: s,
    component: i = "ul",
    dense: a = !1,
    disablePadding: d = !1,
    subheader: u
  } = n, f = de(n, DE), p = E.useMemo(() => ({
    dense: a
  }), [a]), m = A({}, n, {
    component: i,
    dense: a,
    disablePadding: d
  }), g = FE(m);
  return /* @__PURE__ */ v.jsx(ir.Provider, {
    value: p,
    children: /* @__PURE__ */ v.jsxs(LE, A({
      as: i,
      className: ae(g.root, s),
      ref: r,
      ownerState: m
    }, f, {
      children: [u, o]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Wp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: l.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: l.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: l.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object])
});
const Ca = Wp;
function BE(e) {
  return Ve("MuiListItem", e);
}
const zE = Ue("MuiListItem", ["root", "container", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "padding", "button", "secondaryAction", "selected"]), rn = zE;
function VE(e) {
  return Ve("MuiListItemButton", e);
}
const UE = Ue("MuiListItemButton", ["root", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "selected"]), nn = UE, qE = ["alignItems", "autoFocus", "component", "children", "dense", "disableGutters", "divider", "focusVisibleClassName", "selected", "className"], WE = (e, t) => {
  const {
    ownerState: r
  } = e;
  return [t.root, r.dense && t.dense, r.alignItems === "flex-start" && t.alignItemsFlexStart, r.divider && t.divider, !r.disableGutters && t.gutters];
}, YE = (e) => {
  const {
    alignItems: t,
    classes: r,
    dense: n,
    disabled: o,
    disableGutters: s,
    divider: i,
    selected: a
  } = e, u = Xe({
    root: ["root", n && "dense", !s && "gutters", i && "divider", o && "disabled", t === "flex-start" && "alignItemsFlexStart", a && "selected"]
  }, VE, r);
  return A({}, r, u);
}, HE = Pe(yn, {
  shouldForwardProp: (e) => Hs(e) || e === "classes",
  name: "MuiListItemButton",
  slot: "Root",
  overridesResolver: WE
})(({
  theme: e,
  ownerState: t
}) => A({
  display: "flex",
  flexGrow: 1,
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minWidth: 0,
  boxSizing: "border-box",
  textAlign: "left",
  paddingTop: 8,
  paddingBottom: 8,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${nn.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : De(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${nn.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : De(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${nn.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : De(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : De(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${nn.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${nn.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  }
}, t.divider && {
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
  backgroundClip: "padding-box"
}, t.alignItems === "flex-start" && {
  alignItems: "flex-start"
}, !t.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, t.dense && {
  paddingTop: 4,
  paddingBottom: 4
})), Yp = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = qe({
    props: t,
    name: "MuiListItemButton"
  }), {
    alignItems: o = "center",
    autoFocus: s = !1,
    component: i = "div",
    children: a,
    dense: d = !1,
    disableGutters: u = !1,
    divider: f = !1,
    focusVisibleClassName: p,
    selected: m = !1,
    className: g
  } = n, h = de(n, qE), c = E.useContext(ir), b = E.useMemo(() => ({
    dense: d || c.dense || !1,
    alignItems: o,
    disableGutters: u
  }), [o, c.dense, d, u]), x = E.useRef(null);
  mn(() => {
    s && (x.current ? x.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a ListItemButton whose component has not been rendered."));
  }, [s]);
  const w = A({}, n, {
    alignItems: o,
    dense: b.dense,
    disableGutters: u,
    divider: f,
    selected: m
  }), $ = YE(w), S = qt(x, r);
  return /* @__PURE__ */ v.jsx(ir.Provider, {
    value: b,
    children: /* @__PURE__ */ v.jsx(HE, A({
      ref: S,
      href: h.href || h.to,
      component: (h.href || h.to) && i === "div" ? "button" : i,
      focusVisibleClassName: ae($.focusVisible, p),
      ownerState: w,
      className: ae($.root, g)
    }, h, {
      classes: $,
      children: a
    }))
  });
});
process.env.NODE_ENV !== "production" && (Yp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Defines the `align-items` style property.
   * @default 'center'
   */
  alignItems: l.oneOf(["center", "flex-start"]),
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: l.bool,
  /**
   * The content of the component if a `ListItemSecondaryAction` is used it must
   * be the last child.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent List component.
   * @default false
   */
  dense: l.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: l.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: l.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   * @default false
   */
  divider: l.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: l.string,
  /**
   * @ignore
   */
  href: l.string,
  /**
   * Use to apply selected styling.
   * @default false
   */
  selected: l.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object])
});
const GE = Yp;
function KE(e) {
  return Ve("MuiListItemSecondaryAction", e);
}
Ue("MuiListItemSecondaryAction", ["root", "disableGutters"]);
const QE = ["className"], XE = (e) => {
  const {
    disableGutters: t,
    classes: r
  } = e;
  return Xe({
    root: ["root", t && "disableGutters"]
  }, KE, r);
}, JE = Pe("div", {
  name: "MuiListItemSecondaryAction",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.disableGutters && t.disableGutters];
  }
})(({
  ownerState: e
}) => A({
  position: "absolute",
  right: 16,
  top: "50%",
  transform: "translateY(-50%)"
}, e.disableGutters && {
  right: 0
})), Tc = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = qe({
    props: t,
    name: "MuiListItemSecondaryAction"
  }), {
    className: o
  } = n, s = de(n, QE), i = E.useContext(ir), a = A({}, n, {
    disableGutters: i.disableGutters
  }), d = XE(a);
  return /* @__PURE__ */ v.jsx(JE, A({
    className: ae(d.root, o),
    ownerState: a,
    ref: r
  }, s));
});
process.env.NODE_ENV !== "production" && (Tc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally an `IconButton` or selection control.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object])
});
Tc.muiName = "ListItemSecondaryAction";
const ZE = Tc, eT = ["className"], tT = ["alignItems", "autoFocus", "button", "children", "className", "component", "components", "componentsProps", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "disablePadding", "divider", "focusVisibleClassName", "secondaryAction", "selected", "slotProps", "slots"], rT = (e, t) => {
  const {
    ownerState: r
  } = e;
  return [t.root, r.dense && t.dense, r.alignItems === "flex-start" && t.alignItemsFlexStart, r.divider && t.divider, !r.disableGutters && t.gutters, !r.disablePadding && t.padding, r.button && t.button, r.hasSecondaryAction && t.secondaryAction];
}, nT = (e) => {
  const {
    alignItems: t,
    button: r,
    classes: n,
    dense: o,
    disabled: s,
    disableGutters: i,
    disablePadding: a,
    divider: d,
    hasSecondaryAction: u,
    selected: f
  } = e;
  return Xe({
    root: ["root", o && "dense", !i && "gutters", !a && "padding", d && "divider", s && "disabled", r && "button", t === "flex-start" && "alignItemsFlexStart", u && "secondaryAction", f && "selected"],
    container: ["container"]
  }, BE, n);
}, oT = Pe("div", {
  name: "MuiListItem",
  slot: "Root",
  overridesResolver: rT
})(({
  theme: e,
  ownerState: t
}) => A({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  width: "100%",
  boxSizing: "border-box",
  textAlign: "left"
}, !t.disablePadding && A({
  paddingTop: 8,
  paddingBottom: 8
}, t.dense && {
  paddingTop: 4,
  paddingBottom: 4
}, !t.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, !!t.secondaryAction && {
  // Add some space to avoid collision as `ListItemSecondaryAction`
  // is absolutely positioned.
  paddingRight: 48
}), !!t.secondaryAction && {
  [`& > .${nn.root}`]: {
    paddingRight: 48
  }
}, {
  [`&.${rn.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${rn.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : De(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${rn.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : De(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${rn.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  }
}, t.alignItems === "flex-start" && {
  alignItems: "flex-start"
}, t.divider && {
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
  backgroundClip: "padding-box"
}, t.button && {
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${rn.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : De(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : De(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  }
}, t.hasSecondaryAction && {
  // Add some space to avoid collision as `ListItemSecondaryAction`
  // is absolutely positioned.
  paddingRight: 48
})), sT = Pe("li", {
  name: "MuiListItem",
  slot: "Container",
  overridesResolver: (e, t) => t.container
})({
  position: "relative"
}), Hp = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = qe({
    props: t,
    name: "MuiListItem"
  }), {
    alignItems: o = "center",
    autoFocus: s = !1,
    button: i = !1,
    children: a,
    className: d,
    component: u,
    components: f = {},
    componentsProps: p = {},
    ContainerComponent: m = "li",
    ContainerProps: {
      className: g
    } = {},
    dense: h = !1,
    disabled: c = !1,
    disableGutters: b = !1,
    disablePadding: x = !1,
    divider: w = !1,
    focusVisibleClassName: $,
    secondaryAction: S,
    selected: y = !1,
    slotProps: P = {},
    slots: O = {}
  } = n, I = de(n.ContainerProps, eT), F = de(n, tT), V = E.useContext(ir), Q = E.useMemo(() => ({
    dense: h || V.dense || !1,
    alignItems: o,
    disableGutters: b
  }), [o, V.dense, h, b]), q = E.useRef(null);
  mn(() => {
    s && (q.current ? q.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a ListItem whose component has not been rendered."));
  }, [s]);
  const L = E.Children.toArray(a), j = L.length && Uf(L[L.length - 1], ["ListItemSecondaryAction"]), ne = A({}, n, {
    alignItems: o,
    autoFocus: s,
    button: i,
    dense: Q.dense,
    disabled: c,
    disableGutters: b,
    disablePadding: x,
    divider: w,
    hasSecondaryAction: j,
    selected: y
  }), z = nT(ne), te = qt(q, r), D = O.root || f.Root || oT, se = P.root || p.root || {}, _ = A({
    className: ae(z.root, se.className, d),
    disabled: c
  }, F);
  let N = u || "li";
  return i && (_.component = u || "div", _.focusVisibleClassName = ae(rn.focusVisible, $), N = yn), j ? (N = !_.component && !u ? "div" : N, m === "li" && (N === "li" ? N = "div" : _.component === "li" && (_.component = "div")), /* @__PURE__ */ v.jsx(ir.Provider, {
    value: Q,
    children: /* @__PURE__ */ v.jsxs(sT, A({
      as: m,
      className: ae(z.container, g),
      ref: te,
      ownerState: ne
    }, I, {
      children: [/* @__PURE__ */ v.jsx(D, A({}, se, !ga(D) && {
        as: N,
        ownerState: A({}, ne, se.ownerState)
      }, _, {
        children: L
      })), L.pop()]
    }))
  })) : /* @__PURE__ */ v.jsx(ir.Provider, {
    value: Q,
    children: /* @__PURE__ */ v.jsxs(D, A({}, se, {
      as: N,
      ref: te
    }, !ga(D) && {
      ownerState: A({}, ne, se.ownerState)
    }, _, {
      children: [L, S && /* @__PURE__ */ v.jsx(ZE, {
        children: S
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Hp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Defines the `align-items` style property.
   * @default 'center'
   */
  alignItems: l.oneOf(["center", "flex-start"]),
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  autoFocus: l.bool,
  /**
   * If `true`, the list item is a button (using `ButtonBase`). Props intended
   * for `ButtonBase` can then be applied to `ListItem`.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  button: l.bool,
  /**
   * The content of the component if a `ListItemSecondaryAction` is used it must
   * be the last child.
   */
  children: Cr(l.node, (e) => {
    const t = E.Children.toArray(e.children);
    let r = -1;
    for (let n = t.length - 1; n >= 0; n -= 1) {
      const o = t[n];
      if (Uf(o, ["ListItemSecondaryAction"])) {
        r = n;
        break;
      }
    }
    return r !== -1 && r !== t.length - 1 ? new Error("MUI: You used an element after ListItemSecondaryAction. For ListItem to detect that it has a secondary action you must pass it as the last child to ListItem.") : null;
  }),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: l.shape({
    Root: l.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: l.shape({
    root: l.object
  }),
  /**
   * The container component used when a `ListItemSecondaryAction` is the last child.
   * @default 'li'
   * @deprecated
   */
  ContainerComponent: Vf,
  /**
   * Props applied to the container component if used.
   * @default {}
   * @deprecated
   */
  ContainerProps: l.object,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent List component.
   * @default false
   */
  dense: l.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  disabled: l.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: l.bool,
  /**
   * If `true`, all padding is removed.
   * @default false
   */
  disablePadding: l.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   * @default false
   */
  divider: l.bool,
  /**
   * @ignore
   */
  focusVisibleClassName: l.string,
  /**
   * The element to display at the end of ListItem.
   */
  secondaryAction: l.node,
  /**
   * Use to apply selected styling.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  selected: l.bool,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: l.shape({
    root: l.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: l.shape({
    root: l.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object])
});
const Sa = Hp;
function iT(e) {
  return Ve("MuiListItemIcon", e);
}
Ue("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
const aT = ["className"], cT = (e) => {
  const {
    alignItems: t,
    classes: r
  } = e;
  return Xe({
    root: ["root", t === "flex-start" && "alignItemsFlexStart"]
  }, iT, r);
}, lT = Pe("div", {
  name: "MuiListItemIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.alignItems === "flex-start" && t.alignItemsFlexStart];
  }
})(({
  theme: e,
  ownerState: t
}) => A({
  minWidth: 56,
  color: (e.vars || e).palette.action.active,
  flexShrink: 0,
  display: "inline-flex"
}, t.alignItems === "flex-start" && {
  marginTop: 8
})), Gp = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = qe({
    props: t,
    name: "MuiListItemIcon"
  }), {
    className: o
  } = n, s = de(n, aT), i = E.useContext(ir), a = A({}, n, {
    alignItems: i.alignItems
  }), d = cT(a);
  return /* @__PURE__ */ v.jsx(lT, A({
    className: ae(d.root, o),
    ownerState: a,
    ref: r
  }, s));
});
process.env.NODE_ENV !== "production" && (Gp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally `Icon`, `SvgIcon`,
   * or a `@mui/icons-material` SVG icon element.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object])
});
const $a = Gp;
function uT(e) {
  return Ve("MuiListItemText", e);
}
const dT = Ue("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), bu = dT, fT = ["children", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"], pT = (e) => {
  const {
    classes: t,
    inset: r,
    primary: n,
    secondary: o,
    dense: s
  } = e;
  return Xe({
    root: ["root", r && "inset", s && "dense", n && o && "multiline"],
    primary: ["primary"],
    secondary: ["secondary"]
  }, uT, t);
}, hT = Pe("div", {
  name: "MuiListItemText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [{
      [`& .${bu.primary}`]: t.primary
    }, {
      [`& .${bu.secondary}`]: t.secondary
    }, t.root, r.inset && t.inset, r.primary && r.secondary && t.multiline, r.dense && t.dense];
  }
})(({
  ownerState: e
}) => A({
  flex: "1 1 auto",
  minWidth: 0,
  marginTop: 4,
  marginBottom: 4
}, e.primary && e.secondary && {
  marginTop: 6,
  marginBottom: 6
}, e.inset && {
  paddingLeft: 56
})), Kp = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = qe({
    props: t,
    name: "MuiListItemText"
  }), {
    children: o,
    className: s,
    disableTypography: i = !1,
    inset: a = !1,
    primary: d,
    primaryTypographyProps: u,
    secondary: f,
    secondaryTypographyProps: p
  } = n, m = de(n, fT), {
    dense: g
  } = E.useContext(ir);
  let h = d ?? o, c = f;
  const b = A({}, n, {
    disableTypography: i,
    inset: a,
    primary: !!h,
    secondary: !!c,
    dense: g
  }), x = pT(b);
  return h != null && h.type !== ze && !i && (h = /* @__PURE__ */ v.jsx(ze, A({
    variant: g ? "body2" : "body1",
    className: x.primary,
    component: u != null && u.variant ? void 0 : "span",
    display: "block"
  }, u, {
    children: h
  }))), c != null && c.type !== ze && !i && (c = /* @__PURE__ */ v.jsx(ze, A({
    variant: "body2",
    className: x.secondary,
    color: "text.secondary",
    display: "block"
  }, p, {
    children: c
  }))), /* @__PURE__ */ v.jsxs(hT, A({
    className: ae(x.root, s),
    ownerState: b,
    ref: r
  }, m, {
    children: [h, c]
  }));
});
process.env.NODE_ENV !== "production" && (Kp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Alias for the `primary` prop.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * If `true`, the children won't be wrapped by a Typography component.
   * This can be useful to render an alternative Typography variant by wrapping
   * the `children` (or `primary`) text, and optional `secondary` text
   * with the Typography component.
   * @default false
   */
  disableTypography: l.bool,
  /**
   * If `true`, the children are indented.
   * This should be used if there is no left avatar or left icon.
   * @default false
   */
  inset: l.bool,
  /**
   * The main content element.
   */
  primary: l.node,
  /**
   * These props will be forwarded to the primary typography component
   * (as long as disableTypography is not `true`).
   */
  primaryTypographyProps: l.object,
  /**
   * The secondary content element.
   */
  secondary: l.node,
  /**
   * These props will be forwarded to the secondary typography component
   * (as long as disableTypography is not `true`).
   */
  secondaryTypographyProps: l.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object])
});
const Ra = Kp;
function mT(e) {
  return Ve("MuiToolbar", e);
}
Ue("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const yT = ["className", "component", "disableGutters", "variant"], gT = (e) => {
  const {
    classes: t,
    disableGutters: r,
    variant: n
  } = e;
  return Xe({
    root: ["root", !r && "gutters", n]
  }, mT, t);
}, bT = Pe("div", {
  name: "MuiToolbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, !r.disableGutters && t.gutters, t[r.variant]];
  }
})(({
  theme: e,
  ownerState: t
}) => A({
  position: "relative",
  display: "flex",
  alignItems: "center"
}, !t.disableGutters && {
  paddingLeft: e.spacing(2),
  paddingRight: e.spacing(2),
  [e.breakpoints.up("sm")]: {
    paddingLeft: e.spacing(3),
    paddingRight: e.spacing(3)
  }
}, t.variant === "dense" && {
  minHeight: 48
}), ({
  theme: e,
  ownerState: t
}) => t.variant === "regular" && e.mixins.toolbar), Qp = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = qe({
    props: t,
    name: "MuiToolbar"
  }), {
    className: o,
    component: s = "div",
    disableGutters: i = !1,
    variant: a = "regular"
  } = n, d = de(n, yT), u = A({}, n, {
    component: s,
    disableGutters: i,
    variant: a
  }), f = gT(u);
  return /* @__PURE__ */ v.jsx(bT, A({
    as: s,
    className: ae(f.root, o),
    ref: r,
    ownerState: u
  }, d));
});
process.env.NODE_ENV !== "production" && (Qp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The Toolbar children, usually a mixture of `IconButton`, `Button` and `Typography`.
   * The Toolbar is a flex container, allowing flex item properties to be used to lay out the children.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * If `true`, disables gutter padding.
   * @default false
   */
  disableGutters: l.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * The variant to use.
   * @default 'regular'
   */
  variant: l.oneOfType([l.oneOf(["dense", "regular"]), l.string])
});
const Li = Qp;
class xo {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(t) {
    const r = {
      listener: t
    };
    return this.listeners.add(r), this.onSubscribe(), () => {
      this.listeners.delete(r), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}
const oo = typeof window > "u" || "Deno" in window;
function wt() {
}
function vT(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Oa(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Xp(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function qn(e, t, r) {
  return Ks(e) ? typeof t == "function" ? {
    ...r,
    queryKey: e,
    queryFn: t
  } : {
    ...t,
    queryKey: e
  } : e;
}
function yr(e, t, r) {
  return Ks(e) ? [{
    ...t,
    queryKey: e
  }, r] : [e || {}, t];
}
function vu(e, t) {
  const {
    type: r = "all",
    exact: n,
    fetchStatus: o,
    predicate: s,
    queryKey: i,
    stale: a
  } = e;
  if (Ks(i)) {
    if (n) {
      if (t.queryHash !== Cc(i, t.options))
        return !1;
    } else if (!sn(t.queryKey, i))
      return !1;
  }
  if (r !== "all") {
    const d = t.isActive();
    if (r === "active" && !d || r === "inactive" && d)
      return !1;
  }
  return !(typeof a == "boolean" && t.isStale() !== a || typeof o < "u" && o !== t.state.fetchStatus || s && !s(t));
}
function xu(e, t) {
  const {
    exact: r,
    fetching: n,
    predicate: o,
    mutationKey: s
  } = e;
  if (Ks(s)) {
    if (!t.options.mutationKey)
      return !1;
    if (r) {
      if (kr(t.options.mutationKey) !== kr(s))
        return !1;
    } else if (!sn(t.options.mutationKey, s))
      return !1;
  }
  return !(typeof n == "boolean" && t.state.status === "loading" !== n || o && !o(t));
}
function Cc(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || kr)(e);
}
function kr(e) {
  return JSON.stringify(e, (t, r) => Pa(r) ? Object.keys(r).sort().reduce((n, o) => (n[o] = r[o], n), {}) : r);
}
function sn(e, t) {
  return Jp(e, t);
}
function Jp(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some((r) => !Jp(e[r], t[r])) : !1;
}
function Zp(e, t) {
  if (e === t)
    return e;
  const r = Eu(e) && Eu(t);
  if (r || Pa(e) && Pa(t)) {
    const n = r ? e.length : Object.keys(e).length, o = r ? t : Object.keys(t), s = o.length, i = r ? [] : {};
    let a = 0;
    for (let d = 0; d < s; d++) {
      const u = r ? d : o[d];
      i[u] = Zp(e[u], t[u]), i[u] === e[u] && a++;
    }
    return n === s && a === n ? e : i;
  }
  return t;
}
function _a(e, t) {
  if (e && !t || t && !e)
    return !1;
  for (const r in e)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Eu(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Pa(e) {
  if (!Tu(e))
    return !1;
  const t = e.constructor;
  if (typeof t > "u")
    return !0;
  const r = t.prototype;
  return !(!Tu(r) || !r.hasOwnProperty("isPrototypeOf"));
}
function Tu(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Ks(e) {
  return Array.isArray(e);
}
function eh(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Cu(e) {
  eh(0).then(e);
}
function xT() {
  if (typeof AbortController == "function")
    return new AbortController();
}
function wa(e, t, r) {
  return r.isDataEqual != null && r.isDataEqual(e, t) ? e : typeof r.structuralSharing == "function" ? r.structuralSharing(e, t) : r.structuralSharing !== !1 ? Zp(e, t) : t;
}
class ET extends xo {
  constructor() {
    super(), this.setup = (t) => {
      if (!oo && window.addEventListener) {
        const r = () => t();
        return window.addEventListener("visibilitychange", r, !1), window.addEventListener("focus", r, !1), () => {
          window.removeEventListener("visibilitychange", r), window.removeEventListener("focus", r);
        };
      }
    };
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var t;
      (t = this.cleanup) == null || t.call(this), this.cleanup = void 0;
    }
  }
  setEventListener(t) {
    var r;
    this.setup = t, (r = this.cleanup) == null || r.call(this), this.cleanup = t((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    });
  }
  setFocused(t) {
    this.focused !== t && (this.focused = t, this.onFocus());
  }
  onFocus() {
    this.listeners.forEach(({
      listener: t
    }) => {
      t();
    });
  }
  isFocused() {
    return typeof this.focused == "boolean" ? this.focused : typeof document > "u" ? !0 : [void 0, "visible", "prerender"].includes(document.visibilityState);
  }
}
const bs = new ET(), Su = ["online", "offline"];
class TT extends xo {
  constructor() {
    super(), this.setup = (t) => {
      if (!oo && window.addEventListener) {
        const r = () => t();
        return Su.forEach((n) => {
          window.addEventListener(n, r, !1);
        }), () => {
          Su.forEach((n) => {
            window.removeEventListener(n, r);
          });
        };
      }
    };
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var t;
      (t = this.cleanup) == null || t.call(this), this.cleanup = void 0;
    }
  }
  setEventListener(t) {
    var r;
    this.setup = t, (r = this.cleanup) == null || r.call(this), this.cleanup = t((n) => {
      typeof n == "boolean" ? this.setOnline(n) : this.onOnline();
    });
  }
  setOnline(t) {
    this.online !== t && (this.online = t, this.onOnline());
  }
  onOnline() {
    this.listeners.forEach(({
      listener: t
    }) => {
      t();
    });
  }
  isOnline() {
    return typeof this.online == "boolean" ? this.online : typeof navigator > "u" || typeof navigator.onLine > "u" ? !0 : navigator.onLine;
  }
}
const vs = new TT();
function CT(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Qs(e) {
  return (e ?? "online") === "online" ? vs.isOnline() : !0;
}
class th {
  constructor(t) {
    this.revert = t == null ? void 0 : t.revert, this.silent = t == null ? void 0 : t.silent;
  }
}
function Ko(e) {
  return e instanceof th;
}
function rh(e) {
  let t = !1, r = 0, n = !1, o, s, i;
  const a = new Promise((b, x) => {
    s = b, i = x;
  }), d = (b) => {
    n || (g(new th(b)), e.abort == null || e.abort());
  }, u = () => {
    t = !0;
  }, f = () => {
    t = !1;
  }, p = () => !bs.isFocused() || e.networkMode !== "always" && !vs.isOnline(), m = (b) => {
    n || (n = !0, e.onSuccess == null || e.onSuccess(b), o == null || o(), s(b));
  }, g = (b) => {
    n || (n = !0, e.onError == null || e.onError(b), o == null || o(), i(b));
  }, h = () => new Promise((b) => {
    o = (x) => {
      const w = n || !p();
      return w && b(x), w;
    }, e.onPause == null || e.onPause();
  }).then(() => {
    o = void 0, n || e.onContinue == null || e.onContinue();
  }), c = () => {
    if (n)
      return;
    let b;
    try {
      b = e.fn();
    } catch (x) {
      b = Promise.reject(x);
    }
    Promise.resolve(b).then(m).catch((x) => {
      var w, $;
      if (n)
        return;
      const S = (w = e.retry) != null ? w : 3, y = ($ = e.retryDelay) != null ? $ : CT, P = typeof y == "function" ? y(r, x) : y, O = S === !0 || typeof S == "number" && r < S || typeof S == "function" && S(r, x);
      if (t || !O) {
        g(x);
        return;
      }
      r++, e.onFail == null || e.onFail(r, x), eh(P).then(() => {
        if (p())
          return h();
      }).then(() => {
        t ? g(x) : c();
      });
    });
  };
  return Qs(e.networkMode) ? c() : h().then(c), {
    promise: a,
    cancel: d,
    continue: () => (o == null ? void 0 : o()) ? a : Promise.resolve(),
    cancelRetry: u,
    continueRetry: f
  };
}
const Sc = console;
function ST() {
  let e = [], t = 0, r = (f) => {
    f();
  }, n = (f) => {
    f();
  };
  const o = (f) => {
    let p;
    t++;
    try {
      p = f();
    } finally {
      t--, t || a();
    }
    return p;
  }, s = (f) => {
    t ? e.push(f) : Cu(() => {
      r(f);
    });
  }, i = (f) => (...p) => {
    s(() => {
      f(...p);
    });
  }, a = () => {
    const f = e;
    e = [], f.length && Cu(() => {
      n(() => {
        f.forEach((p) => {
          r(p);
        });
      });
    });
  };
  return {
    batch: o,
    batchCalls: i,
    schedule: s,
    setNotifyFunction: (f) => {
      r = f;
    },
    setBatchNotifyFunction: (f) => {
      n = f;
    }
  };
}
const st = ST();
class nh {
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), Oa(this.cacheTime) && (this.gcTimeout = setTimeout(() => {
      this.optionalRemove();
    }, this.cacheTime));
  }
  updateCacheTime(t) {
    this.cacheTime = Math.max(this.cacheTime || 0, t ?? (oo ? 1 / 0 : 5 * 60 * 1e3));
  }
  clearGcTimeout() {
    this.gcTimeout && (clearTimeout(this.gcTimeout), this.gcTimeout = void 0);
  }
}
class $T extends nh {
  constructor(t) {
    super(), this.abortSignalConsumed = !1, this.defaultOptions = t.defaultOptions, this.setOptions(t.options), this.observers = [], this.cache = t.cache, this.logger = t.logger || Sc, this.queryKey = t.queryKey, this.queryHash = t.queryHash, this.initialState = t.state || RT(this.options), this.state = this.initialState, this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  setOptions(t) {
    this.options = {
      ...this.defaultOptions,
      ...t
    }, this.updateCacheTime(this.options.cacheTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && this.cache.remove(this);
  }
  setData(t, r) {
    const n = wa(this.state.data, t, this.options);
    return this.dispatch({
      data: n,
      type: "success",
      dataUpdatedAt: r == null ? void 0 : r.updatedAt,
      manual: r == null ? void 0 : r.manual
    }), n;
  }
  setState(t, r) {
    this.dispatch({
      type: "setState",
      state: t,
      setStateOptions: r
    });
  }
  cancel(t) {
    var r;
    const n = this.promise;
    return (r = this.retryer) == null || r.cancel(t), n ? n.then(wt).catch(wt) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({
      silent: !0
    });
  }
  reset() {
    this.destroy(), this.setState(this.initialState);
  }
  isActive() {
    return this.observers.some((t) => t.options.enabled !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some((t) => t.getCurrentResult().isStale);
  }
  isStaleByTime(t = 0) {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !Xp(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    var t;
    const r = this.observers.find((n) => n.shouldFetchOnWindowFocus());
    r && r.refetch({
      cancelRefetch: !1
    }), (t = this.retryer) == null || t.continue();
  }
  onOnline() {
    var t;
    const r = this.observers.find((n) => n.shouldFetchOnReconnect());
    r && r.refetch({
      cancelRefetch: !1
    }), (t = this.retryer) == null || t.continue();
  }
  addObserver(t) {
    this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), this.cache.notify({
      type: "observerAdded",
      query: this,
      observer: t
    }));
  }
  removeObserver(t) {
    this.observers.includes(t) && (this.observers = this.observers.filter((r) => r !== t), this.observers.length || (this.retryer && (this.abortSignalConsumed ? this.retryer.cancel({
      revert: !0
    }) : this.retryer.cancelRetry()), this.scheduleGc()), this.cache.notify({
      type: "observerRemoved",
      query: this,
      observer: t
    }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || this.dispatch({
      type: "invalidate"
    });
  }
  fetch(t, r) {
    var n, o;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.dataUpdatedAt && r != null && r.cancelRefetch)
        this.cancel({
          silent: !0
        });
      else if (this.promise) {
        var s;
        return (s = this.retryer) == null || s.continueRetry(), this.promise;
      }
    }
    if (t && this.setOptions(t), !this.options.queryFn) {
      const g = this.observers.find((h) => h.options.queryFn);
      g && this.setOptions(g.options);
    }
    process.env.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || this.logger.error("As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"));
    const i = xT(), a = {
      queryKey: this.queryKey,
      pageParam: void 0,
      meta: this.meta
    }, d = (g) => {
      Object.defineProperty(g, "signal", {
        enumerable: !0,
        get: () => {
          if (i)
            return this.abortSignalConsumed = !0, i.signal;
        }
      });
    };
    d(a);
    const u = () => this.options.queryFn ? (this.abortSignalConsumed = !1, this.options.queryFn(a)) : Promise.reject("Missing queryFn for queryKey '" + this.options.queryHash + "'"), f = {
      fetchOptions: r,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: u
    };
    if (d(f), (n = this.options.behavior) == null || n.onFetch(f), this.revertState = this.state, this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((o = f.fetchOptions) == null ? void 0 : o.meta)) {
      var p;
      this.dispatch({
        type: "fetch",
        meta: (p = f.fetchOptions) == null ? void 0 : p.meta
      });
    }
    const m = (g) => {
      if (Ko(g) && g.silent || this.dispatch({
        type: "error",
        error: g
      }), !Ko(g)) {
        var h, c, b, x;
        (h = (c = this.cache.config).onError) == null || h.call(c, g, this), (b = (x = this.cache.config).onSettled) == null || b.call(x, this.state.data, g, this), process.env.NODE_ENV !== "production" && this.logger.error(g);
      }
      this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
    };
    return this.retryer = rh({
      fn: f.fetchFn,
      abort: i == null ? void 0 : i.abort.bind(i),
      onSuccess: (g) => {
        var h, c, b, x;
        if (typeof g > "u") {
          process.env.NODE_ENV !== "production" && this.logger.error("Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: " + this.queryHash), m(new Error(this.queryHash + " data is undefined"));
          return;
        }
        this.setData(g), (h = (c = this.cache.config).onSuccess) == null || h.call(c, g, this), (b = (x = this.cache.config).onSettled) == null || b.call(x, g, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
      },
      onError: m,
      onFail: (g, h) => {
        this.dispatch({
          type: "failed",
          failureCount: g,
          error: h
        });
      },
      onPause: () => {
        this.dispatch({
          type: "pause"
        });
      },
      onContinue: () => {
        this.dispatch({
          type: "continue"
        });
      },
      retry: f.options.retry,
      retryDelay: f.options.retryDelay,
      networkMode: f.options.networkMode
    }), this.promise = this.retryer.promise, this.promise;
  }
  dispatch(t) {
    const r = (n) => {
      var o, s;
      switch (t.type) {
        case "failed":
          return {
            ...n,
            fetchFailureCount: t.failureCount,
            fetchFailureReason: t.error
          };
        case "pause":
          return {
            ...n,
            fetchStatus: "paused"
          };
        case "continue":
          return {
            ...n,
            fetchStatus: "fetching"
          };
        case "fetch":
          return {
            ...n,
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchMeta: (o = t.meta) != null ? o : null,
            fetchStatus: Qs(this.options.networkMode) ? "fetching" : "paused",
            ...!n.dataUpdatedAt && {
              error: null,
              status: "loading"
            }
          };
        case "success":
          return {
            ...n,
            data: t.data,
            dataUpdateCount: n.dataUpdateCount + 1,
            dataUpdatedAt: (s = t.dataUpdatedAt) != null ? s : Date.now(),
            error: null,
            isInvalidated: !1,
            status: "success",
            ...!t.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null
            }
          };
        case "error":
          const i = t.error;
          return Ko(i) && i.revert && this.revertState ? {
            ...this.revertState,
            fetchStatus: "idle"
          } : {
            ...n,
            error: i,
            errorUpdateCount: n.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: n.fetchFailureCount + 1,
            fetchFailureReason: i,
            fetchStatus: "idle",
            status: "error"
          };
        case "invalidate":
          return {
            ...n,
            isInvalidated: !0
          };
        case "setState":
          return {
            ...n,
            ...t.state
          };
      }
    };
    this.state = r(this.state), st.batch(() => {
      this.observers.forEach((n) => {
        n.onQueryUpdate(t);
      }), this.cache.notify({
        query: this,
        type: "updated",
        action: t
      });
    });
  }
}
function RT(e) {
  const t = typeof e.initialData == "function" ? e.initialData() : e.initialData, r = typeof t < "u", n = r ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? n ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? "success" : "loading",
    fetchStatus: "idle"
  };
}
class OT extends xo {
  constructor(t) {
    super(), this.config = t || {}, this.queries = [], this.queriesMap = {};
  }
  build(t, r, n) {
    var o;
    const s = r.queryKey, i = (o = r.queryHash) != null ? o : Cc(s, r);
    let a = this.get(i);
    return a || (a = new $T({
      cache: this,
      logger: t.getLogger(),
      queryKey: s,
      queryHash: i,
      options: t.defaultQueryOptions(r),
      state: n,
      defaultOptions: t.getQueryDefaults(s)
    }), this.add(a)), a;
  }
  add(t) {
    this.queriesMap[t.queryHash] || (this.queriesMap[t.queryHash] = t, this.queries.push(t), this.notify({
      type: "added",
      query: t
    }));
  }
  remove(t) {
    const r = this.queriesMap[t.queryHash];
    r && (t.destroy(), this.queries = this.queries.filter((n) => n !== t), r === t && delete this.queriesMap[t.queryHash], this.notify({
      type: "removed",
      query: t
    }));
  }
  clear() {
    st.batch(() => {
      this.queries.forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return this.queriesMap[t];
  }
  getAll() {
    return this.queries;
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  find(t, r) {
    const [n] = yr(t, r);
    return typeof n.exact > "u" && (n.exact = !0), this.queries.find((o) => vu(n, o));
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  findAll(t, r) {
    const [n] = yr(t, r);
    return Object.keys(n).length > 0 ? this.queries.filter((o) => vu(n, o)) : this.queries;
  }
  notify(t) {
    st.batch(() => {
      this.listeners.forEach(({
        listener: r
      }) => {
        r(t);
      });
    });
  }
  onFocus() {
    st.batch(() => {
      this.queries.forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    st.batch(() => {
      this.queries.forEach((t) => {
        t.onOnline();
      });
    });
  }
}
class _T extends nh {
  constructor(t) {
    super(), this.defaultOptions = t.defaultOptions, this.mutationId = t.mutationId, this.mutationCache = t.mutationCache, this.logger = t.logger || Sc, this.observers = [], this.state = t.state || PT(), this.setOptions(t.options), this.scheduleGc();
  }
  setOptions(t) {
    this.options = {
      ...this.defaultOptions,
      ...t
    }, this.updateCacheTime(this.options.cacheTime);
  }
  get meta() {
    return this.options.meta;
  }
  setState(t) {
    this.dispatch({
      type: "setState",
      state: t
    });
  }
  addObserver(t) {
    this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), this.mutationCache.notify({
      type: "observerAdded",
      mutation: this,
      observer: t
    }));
  }
  removeObserver(t) {
    this.observers = this.observers.filter((r) => r !== t), this.scheduleGc(), this.mutationCache.notify({
      type: "observerRemoved",
      mutation: this,
      observer: t
    });
  }
  optionalRemove() {
    this.observers.length || (this.state.status === "loading" ? this.scheduleGc() : this.mutationCache.remove(this));
  }
  continue() {
    var t, r;
    return (t = (r = this.retryer) == null ? void 0 : r.continue()) != null ? t : this.execute();
  }
  async execute() {
    const t = () => {
      var O;
      return this.retryer = rh({
        fn: () => this.options.mutationFn ? this.options.mutationFn(this.state.variables) : Promise.reject("No mutationFn found"),
        onFail: (I, F) => {
          this.dispatch({
            type: "failed",
            failureCount: I,
            error: F
          });
        },
        onPause: () => {
          this.dispatch({
            type: "pause"
          });
        },
        onContinue: () => {
          this.dispatch({
            type: "continue"
          });
        },
        retry: (O = this.options.retry) != null ? O : 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode
      }), this.retryer.promise;
    }, r = this.state.status === "loading";
    try {
      var n, o, s, i, a, d, u, f;
      if (!r) {
        var p, m, g, h;
        this.dispatch({
          type: "loading",
          variables: this.options.variables
        }), await ((p = (m = this.mutationCache.config).onMutate) == null ? void 0 : p.call(m, this.state.variables, this));
        const I = await ((g = (h = this.options).onMutate) == null ? void 0 : g.call(h, this.state.variables));
        I !== this.state.context && this.dispatch({
          type: "loading",
          context: I,
          variables: this.state.variables
        });
      }
      const O = await t();
      return await ((n = (o = this.mutationCache.config).onSuccess) == null ? void 0 : n.call(o, O, this.state.variables, this.state.context, this)), await ((s = (i = this.options).onSuccess) == null ? void 0 : s.call(i, O, this.state.variables, this.state.context)), await ((a = (d = this.mutationCache.config).onSettled) == null ? void 0 : a.call(d, O, null, this.state.variables, this.state.context, this)), await ((u = (f = this.options).onSettled) == null ? void 0 : u.call(f, O, null, this.state.variables, this.state.context)), this.dispatch({
        type: "success",
        data: O
      }), O;
    } catch (O) {
      try {
        var c, b, x, w, $, S, y, P;
        throw await ((c = (b = this.mutationCache.config).onError) == null ? void 0 : c.call(b, O, this.state.variables, this.state.context, this)), process.env.NODE_ENV !== "production" && this.logger.error(O), await ((x = (w = this.options).onError) == null ? void 0 : x.call(w, O, this.state.variables, this.state.context)), await (($ = (S = this.mutationCache.config).onSettled) == null ? void 0 : $.call(S, void 0, O, this.state.variables, this.state.context, this)), await ((y = (P = this.options).onSettled) == null ? void 0 : y.call(P, void 0, O, this.state.variables, this.state.context)), O;
      } finally {
        this.dispatch({
          type: "error",
          error: O
        });
      }
    }
  }
  dispatch(t) {
    const r = (n) => {
      switch (t.type) {
        case "failed":
          return {
            ...n,
            failureCount: t.failureCount,
            failureReason: t.error
          };
        case "pause":
          return {
            ...n,
            isPaused: !0
          };
        case "continue":
          return {
            ...n,
            isPaused: !1
          };
        case "loading":
          return {
            ...n,
            context: t.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: !Qs(this.options.networkMode),
            status: "loading",
            variables: t.variables
          };
        case "success":
          return {
            ...n,
            data: t.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1
          };
        case "error":
          return {
            ...n,
            data: void 0,
            error: t.error,
            failureCount: n.failureCount + 1,
            failureReason: t.error,
            isPaused: !1,
            status: "error"
          };
        case "setState":
          return {
            ...n,
            ...t.state
          };
      }
    };
    this.state = r(this.state), st.batch(() => {
      this.observers.forEach((n) => {
        n.onMutationUpdate(t);
      }), this.mutationCache.notify({
        mutation: this,
        type: "updated",
        action: t
      });
    });
  }
}
function PT() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0
  };
}
class wT extends xo {
  constructor(t) {
    super(), this.config = t || {}, this.mutations = [], this.mutationId = 0;
  }
  build(t, r, n) {
    const o = new _T({
      mutationCache: this,
      logger: t.getLogger(),
      mutationId: ++this.mutationId,
      options: t.defaultMutationOptions(r),
      state: n,
      defaultOptions: r.mutationKey ? t.getMutationDefaults(r.mutationKey) : void 0
    });
    return this.add(o), o;
  }
  add(t) {
    this.mutations.push(t), this.notify({
      type: "added",
      mutation: t
    });
  }
  remove(t) {
    this.mutations = this.mutations.filter((r) => r !== t), this.notify({
      type: "removed",
      mutation: t
    });
  }
  clear() {
    st.batch(() => {
      this.mutations.forEach((t) => {
        this.remove(t);
      });
    });
  }
  getAll() {
    return this.mutations;
  }
  find(t) {
    return typeof t.exact > "u" && (t.exact = !0), this.mutations.find((r) => xu(t, r));
  }
  findAll(t) {
    return this.mutations.filter((r) => xu(t, r));
  }
  notify(t) {
    st.batch(() => {
      this.listeners.forEach(({
        listener: r
      }) => {
        r(t);
      });
    });
  }
  resumePausedMutations() {
    var t;
    return this.resuming = ((t = this.resuming) != null ? t : Promise.resolve()).then(() => {
      const r = this.mutations.filter((n) => n.state.isPaused);
      return st.batch(() => r.reduce((n, o) => n.then(() => o.continue().catch(wt)), Promise.resolve()));
    }).then(() => {
      this.resuming = void 0;
    }), this.resuming;
  }
}
function AT() {
  return {
    onFetch: (e) => {
      e.fetchFn = () => {
        var t, r, n, o, s, i;
        const a = (t = e.fetchOptions) == null || (r = t.meta) == null ? void 0 : r.refetchPage, d = (n = e.fetchOptions) == null || (o = n.meta) == null ? void 0 : o.fetchMore, u = d == null ? void 0 : d.pageParam, f = (d == null ? void 0 : d.direction) === "forward", p = (d == null ? void 0 : d.direction) === "backward", m = ((s = e.state.data) == null ? void 0 : s.pages) || [], g = ((i = e.state.data) == null ? void 0 : i.pageParams) || [];
        let h = g, c = !1;
        const b = (P) => {
          Object.defineProperty(P, "signal", {
            enumerable: !0,
            get: () => {
              var O;
              if ((O = e.signal) != null && O.aborted)
                c = !0;
              else {
                var I;
                (I = e.signal) == null || I.addEventListener("abort", () => {
                  c = !0;
                });
              }
              return e.signal;
            }
          });
        }, x = e.options.queryFn || (() => Promise.reject("Missing queryFn for queryKey '" + e.options.queryHash + "'")), w = (P, O, I, F) => (h = F ? [O, ...h] : [...h, O], F ? [I, ...P] : [...P, I]), $ = (P, O, I, F) => {
          if (c)
            return Promise.reject("Cancelled");
          if (typeof I > "u" && !O && P.length)
            return Promise.resolve(P);
          const V = {
            queryKey: e.queryKey,
            pageParam: I,
            meta: e.options.meta
          };
          b(V);
          const Q = x(V);
          return Promise.resolve(Q).then((L) => w(P, I, L, F));
        };
        let S;
        if (!m.length)
          S = $([]);
        else if (f) {
          const P = typeof u < "u", O = P ? u : $u(e.options, m);
          S = $(m, P, O);
        } else if (p) {
          const P = typeof u < "u", O = P ? u : NT(e.options, m);
          S = $(m, P, O, !0);
        } else {
          h = [];
          const P = typeof e.options.getNextPageParam > "u";
          S = (a && m[0] ? a(m[0], 0, m) : !0) ? $([], P, g[0]) : Promise.resolve(w([], g[0], m[0]));
          for (let I = 1; I < m.length; I++)
            S = S.then((F) => {
              if (a && m[I] ? a(m[I], I, m) : !0) {
                const Q = P ? g[I] : $u(e.options, F);
                return $(F, P, Q);
              }
              return Promise.resolve(w(F, g[I], m[I]));
            });
        }
        return S.then((P) => ({
          pages: P,
          pageParams: h
        }));
      };
    }
  };
}
function $u(e, t) {
  return e.getNextPageParam == null ? void 0 : e.getNextPageParam(t[t.length - 1], t);
}
function NT(e, t) {
  return e.getPreviousPageParam == null ? void 0 : e.getPreviousPageParam(t[0], t);
}
class kT {
  constructor(t = {}) {
    this.queryCache = t.queryCache || new OT(), this.mutationCache = t.mutationCache || new wT(), this.logger = t.logger || Sc, this.defaultOptions = t.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = [], this.mountCount = 0, process.env.NODE_ENV !== "production" && t.logger && this.logger.error("Passing a custom logger has been deprecated and will be removed in the next major version.");
  }
  mount() {
    this.mountCount++, this.mountCount === 1 && (this.unsubscribeFocus = bs.subscribe(() => {
      bs.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus());
    }), this.unsubscribeOnline = vs.subscribe(() => {
      vs.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline());
    }));
  }
  unmount() {
    var t, r;
    this.mountCount--, this.mountCount === 0 && ((t = this.unsubscribeFocus) == null || t.call(this), this.unsubscribeFocus = void 0, (r = this.unsubscribeOnline) == null || r.call(this), this.unsubscribeOnline = void 0);
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  isFetching(t, r) {
    const [n] = yr(t, r);
    return n.fetchStatus = "fetching", this.queryCache.findAll(n).length;
  }
  isMutating(t) {
    return this.mutationCache.findAll({
      ...t,
      fetching: !0
    }).length;
  }
  /**
   * @deprecated This method will accept only queryKey in the next major version.
   */
  getQueryData(t, r) {
    var n;
    return (n = this.queryCache.find(t, r)) == null ? void 0 : n.state.data;
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  ensureQueryData(t, r, n) {
    const o = qn(t, r, n), s = this.getQueryData(o.queryKey);
    return s ? Promise.resolve(s) : this.fetchQuery(o);
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  getQueriesData(t) {
    return this.getQueryCache().findAll(t).map(({
      queryKey: r,
      state: n
    }) => {
      const o = n.data;
      return [r, o];
    });
  }
  setQueryData(t, r, n) {
    const o = this.queryCache.find(t), s = o == null ? void 0 : o.state.data, i = vT(r, s);
    if (typeof i > "u")
      return;
    const a = qn(t), d = this.defaultQueryOptions(a);
    return this.queryCache.build(this, d).setData(i, {
      ...n,
      manual: !0
    });
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  setQueriesData(t, r, n) {
    return st.batch(() => this.getQueryCache().findAll(t).map(({
      queryKey: o
    }) => [o, this.setQueryData(o, r, n)]));
  }
  getQueryState(t, r) {
    var n;
    return (n = this.queryCache.find(t, r)) == null ? void 0 : n.state;
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  removeQueries(t, r) {
    const [n] = yr(t, r), o = this.queryCache;
    st.batch(() => {
      o.findAll(n).forEach((s) => {
        o.remove(s);
      });
    });
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  resetQueries(t, r, n) {
    const [o, s] = yr(t, r, n), i = this.queryCache, a = {
      type: "active",
      ...o
    };
    return st.batch(() => (i.findAll(o).forEach((d) => {
      d.reset();
    }), this.refetchQueries(a, s)));
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  cancelQueries(t, r, n) {
    const [o, s = {}] = yr(t, r, n);
    typeof s.revert > "u" && (s.revert = !0);
    const i = st.batch(() => this.queryCache.findAll(o).map((a) => a.cancel(s)));
    return Promise.all(i).then(wt).catch(wt);
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  invalidateQueries(t, r, n) {
    const [o, s] = yr(t, r, n);
    return st.batch(() => {
      var i, a;
      if (this.queryCache.findAll(o).forEach((u) => {
        u.invalidate();
      }), o.refetchType === "none")
        return Promise.resolve();
      const d = {
        ...o,
        type: (i = (a = o.refetchType) != null ? a : o.type) != null ? i : "active"
      };
      return this.refetchQueries(d, s);
    });
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  refetchQueries(t, r, n) {
    const [o, s] = yr(t, r, n), i = st.batch(() => this.queryCache.findAll(o).filter((d) => !d.isDisabled()).map((d) => {
      var u;
      return d.fetch(void 0, {
        ...s,
        cancelRefetch: (u = s == null ? void 0 : s.cancelRefetch) != null ? u : !0,
        meta: {
          refetchPage: o.refetchPage
        }
      });
    }));
    let a = Promise.all(i).then(wt);
    return s != null && s.throwOnError || (a = a.catch(wt)), a;
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  fetchQuery(t, r, n) {
    const o = qn(t, r, n), s = this.defaultQueryOptions(o);
    typeof s.retry > "u" && (s.retry = !1);
    const i = this.queryCache.build(this, s);
    return i.isStaleByTime(s.staleTime) ? i.fetch(s) : Promise.resolve(i.state.data);
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  prefetchQuery(t, r, n) {
    return this.fetchQuery(t, r, n).then(wt).catch(wt);
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  fetchInfiniteQuery(t, r, n) {
    const o = qn(t, r, n);
    return o.behavior = AT(), this.fetchQuery(o);
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  prefetchInfiniteQuery(t, r, n) {
    return this.fetchInfiniteQuery(t, r, n).then(wt).catch(wt);
  }
  resumePausedMutations() {
    return this.mutationCache.resumePausedMutations();
  }
  getQueryCache() {
    return this.queryCache;
  }
  getMutationCache() {
    return this.mutationCache;
  }
  getLogger() {
    return this.logger;
  }
  getDefaultOptions() {
    return this.defaultOptions;
  }
  setDefaultOptions(t) {
    this.defaultOptions = t;
  }
  setQueryDefaults(t, r) {
    const n = this.queryDefaults.find((o) => kr(t) === kr(o.queryKey));
    n ? n.defaultOptions = r : this.queryDefaults.push({
      queryKey: t,
      defaultOptions: r
    });
  }
  getQueryDefaults(t) {
    if (!t)
      return;
    const r = this.queryDefaults.find((n) => sn(t, n.queryKey));
    return process.env.NODE_ENV !== "production" && this.queryDefaults.filter((o) => sn(t, o.queryKey)).length > 1 && this.logger.error("[QueryClient] Several query defaults match with key '" + JSON.stringify(t) + "'. The first matching query defaults are used. Please check how query defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetquerydefaults."), r == null ? void 0 : r.defaultOptions;
  }
  setMutationDefaults(t, r) {
    const n = this.mutationDefaults.find((o) => kr(t) === kr(o.mutationKey));
    n ? n.defaultOptions = r : this.mutationDefaults.push({
      mutationKey: t,
      defaultOptions: r
    });
  }
  getMutationDefaults(t) {
    if (!t)
      return;
    const r = this.mutationDefaults.find((n) => sn(t, n.mutationKey));
    return process.env.NODE_ENV !== "production" && this.mutationDefaults.filter((o) => sn(t, o.mutationKey)).length > 1 && this.logger.error("[QueryClient] Several mutation defaults match with key '" + JSON.stringify(t) + "'. The first matching mutation defaults are used. Please check how mutation defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetmutationdefaults."), r == null ? void 0 : r.defaultOptions;
  }
  defaultQueryOptions(t) {
    if (t != null && t._defaulted)
      return t;
    const r = {
      ...this.defaultOptions.queries,
      ...this.getQueryDefaults(t == null ? void 0 : t.queryKey),
      ...t,
      _defaulted: !0
    };
    return !r.queryHash && r.queryKey && (r.queryHash = Cc(r.queryKey, r)), typeof r.refetchOnReconnect > "u" && (r.refetchOnReconnect = r.networkMode !== "always"), typeof r.useErrorBoundary > "u" && (r.useErrorBoundary = !!r.suspense), r;
  }
  defaultMutationOptions(t) {
    return t != null && t._defaulted ? t : {
      ...this.defaultOptions.mutations,
      ...this.getMutationDefaults(t == null ? void 0 : t.mutationKey),
      ...t,
      _defaulted: !0
    };
  }
  clear() {
    this.queryCache.clear(), this.mutationCache.clear();
  }
}
class IT extends xo {
  constructor(t, r) {
    super(), this.client = t, this.options = r, this.trackedProps = /* @__PURE__ */ new Set(), this.selectError = null, this.bindMethods(), this.setOptions(r);
  }
  bindMethods() {
    this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (this.currentQuery.addObserver(this), Ru(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Aa(this.currentQuery, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return Aa(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this);
  }
  setOptions(t, r) {
    const n = this.options, o = this.currentQuery;
    if (this.options = this.client.defaultQueryOptions(t), process.env.NODE_ENV !== "production" && typeof (t == null ? void 0 : t.isDataEqual) < "u" && this.client.getLogger().error("The isDataEqual option has been deprecated and will be removed in the next major version. You can achieve the same functionality by passing a function as the structuralSharing option"), _a(n, this.options) || this.client.getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: this.currentQuery,
      observer: this
    }), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = n.queryKey), this.updateQuery();
    const s = this.hasListeners();
    s && Ou(this.currentQuery, o, this.options, n) && this.executeFetch(), this.updateResult(r), s && (this.currentQuery !== o || this.options.enabled !== n.enabled || this.options.staleTime !== n.staleTime) && this.updateStaleTimeout();
    const i = this.computeRefetchInterval();
    s && (this.currentQuery !== o || this.options.enabled !== n.enabled || i !== this.currentRefetchInterval) && this.updateRefetchInterval(i);
  }
  getOptimisticResult(t) {
    const r = this.client.getQueryCache().build(this.client, t), n = this.createResult(r, t);
    return jT(this, n, t) && (this.currentResult = n, this.currentResultOptions = this.options, this.currentResultState = this.currentQuery.state), n;
  }
  getCurrentResult() {
    return this.currentResult;
  }
  trackResult(t) {
    const r = {};
    return Object.keys(t).forEach((n) => {
      Object.defineProperty(r, n, {
        configurable: !1,
        enumerable: !0,
        get: () => (this.trackedProps.add(n), t[n])
      });
    }), r;
  }
  getCurrentQuery() {
    return this.currentQuery;
  }
  remove() {
    this.client.getQueryCache().remove(this.currentQuery);
  }
  refetch({
    refetchPage: t,
    ...r
  } = {}) {
    return this.fetch({
      ...r,
      meta: {
        refetchPage: t
      }
    });
  }
  fetchOptimistic(t) {
    const r = this.client.defaultQueryOptions(t), n = this.client.getQueryCache().build(this.client, r);
    return n.isFetchingOptimistic = !0, n.fetch().then(() => this.createResult(n, r));
  }
  fetch(t) {
    var r;
    return this.executeFetch({
      ...t,
      cancelRefetch: (r = t.cancelRefetch) != null ? r : !0
    }).then(() => (this.updateResult(), this.currentResult));
  }
  executeFetch(t) {
    this.updateQuery();
    let r = this.currentQuery.fetch(this.options, t);
    return t != null && t.throwOnError || (r = r.catch(wt)), r;
  }
  updateStaleTimeout() {
    if (this.clearStaleTimeout(), oo || this.currentResult.isStale || !Oa(this.options.staleTime))
      return;
    const r = Xp(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
    this.staleTimeoutId = setTimeout(() => {
      this.currentResult.isStale || this.updateResult();
    }, r);
  }
  computeRefetchInterval() {
    var t;
    return typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : (t = this.options.refetchInterval) != null ? t : !1;
  }
  updateRefetchInterval(t) {
    this.clearRefetchInterval(), this.currentRefetchInterval = t, !(oo || this.options.enabled === !1 || !Oa(this.currentRefetchInterval) || this.currentRefetchInterval === 0) && (this.refetchIntervalId = setInterval(() => {
      (this.options.refetchIntervalInBackground || bs.isFocused()) && this.executeFetch();
    }, this.currentRefetchInterval));
  }
  updateTimers() {
    this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval());
  }
  clearStaleTimeout() {
    this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), this.staleTimeoutId = void 0);
  }
  clearRefetchInterval() {
    this.refetchIntervalId && (clearInterval(this.refetchIntervalId), this.refetchIntervalId = void 0);
  }
  createResult(t, r) {
    const n = this.currentQuery, o = this.options, s = this.currentResult, i = this.currentResultState, a = this.currentResultOptions, d = t !== n, u = d ? t.state : this.currentQueryInitialState, f = d ? this.currentResult : this.previousQueryResult, {
      state: p
    } = t;
    let {
      dataUpdatedAt: m,
      error: g,
      errorUpdatedAt: h,
      fetchStatus: c,
      status: b
    } = p, x = !1, w = !1, $;
    if (r._optimisticResults) {
      const I = this.hasListeners(), F = !I && Ru(t, r), V = I && Ou(t, n, r, o);
      (F || V) && (c = Qs(t.options.networkMode) ? "fetching" : "paused", m || (b = "loading")), r._optimisticResults === "isRestoring" && (c = "idle");
    }
    if (r.keepPreviousData && !p.dataUpdatedAt && f != null && f.isSuccess && b !== "error")
      $ = f.data, m = f.dataUpdatedAt, b = f.status, x = !0;
    else if (r.select && typeof p.data < "u")
      if (s && p.data === (i == null ? void 0 : i.data) && r.select === this.selectFn)
        $ = this.selectResult;
      else
        try {
          this.selectFn = r.select, $ = r.select(p.data), $ = wa(s == null ? void 0 : s.data, $, r), this.selectResult = $, this.selectError = null;
        } catch (I) {
          process.env.NODE_ENV !== "production" && this.client.getLogger().error(I), this.selectError = I;
        }
    else
      $ = p.data;
    if (typeof r.placeholderData < "u" && typeof $ > "u" && b === "loading") {
      let I;
      if (s != null && s.isPlaceholderData && r.placeholderData === (a == null ? void 0 : a.placeholderData))
        I = s.data;
      else if (I = typeof r.placeholderData == "function" ? r.placeholderData() : r.placeholderData, r.select && typeof I < "u")
        try {
          I = r.select(I), this.selectError = null;
        } catch (F) {
          process.env.NODE_ENV !== "production" && this.client.getLogger().error(F), this.selectError = F;
        }
      typeof I < "u" && (b = "success", $ = wa(s == null ? void 0 : s.data, I, r), w = !0);
    }
    this.selectError && (g = this.selectError, $ = this.selectResult, h = Date.now(), b = "error");
    const S = c === "fetching", y = b === "loading", P = b === "error";
    return {
      status: b,
      fetchStatus: c,
      isLoading: y,
      isSuccess: b === "success",
      isError: P,
      isInitialLoading: y && S,
      data: $,
      dataUpdatedAt: m,
      error: g,
      errorUpdatedAt: h,
      failureCount: p.fetchFailureCount,
      failureReason: p.fetchFailureReason,
      errorUpdateCount: p.errorUpdateCount,
      isFetched: p.dataUpdateCount > 0 || p.errorUpdateCount > 0,
      isFetchedAfterMount: p.dataUpdateCount > u.dataUpdateCount || p.errorUpdateCount > u.errorUpdateCount,
      isFetching: S,
      isRefetching: S && !y,
      isLoadingError: P && p.dataUpdatedAt === 0,
      isPaused: c === "paused",
      isPlaceholderData: w,
      isPreviousData: x,
      isRefetchError: P && p.dataUpdatedAt !== 0,
      isStale: $c(t, r),
      refetch: this.refetch,
      remove: this.remove
    };
  }
  updateResult(t) {
    const r = this.currentResult, n = this.createResult(this.currentQuery, this.options);
    if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, _a(n, r))
      return;
    this.currentResult = n;
    const o = {
      cache: !0
    }, s = () => {
      if (!r)
        return !0;
      const {
        notifyOnChangeProps: i
      } = this.options, a = typeof i == "function" ? i() : i;
      if (a === "all" || !a && !this.trackedProps.size)
        return !0;
      const d = new Set(a ?? this.trackedProps);
      return this.options.useErrorBoundary && d.add("error"), Object.keys(this.currentResult).some((u) => {
        const f = u;
        return this.currentResult[f] !== r[f] && d.has(f);
      });
    };
    (t == null ? void 0 : t.listeners) !== !1 && s() && (o.listeners = !0), this.notify({
      ...o,
      ...t
    });
  }
  updateQuery() {
    const t = this.client.getQueryCache().build(this.client, this.options);
    if (t === this.currentQuery)
      return;
    const r = this.currentQuery;
    this.currentQuery = t, this.currentQueryInitialState = t.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (r == null || r.removeObserver(this), t.addObserver(this));
  }
  onQueryUpdate(t) {
    const r = {};
    t.type === "success" ? r.onSuccess = !t.manual : t.type === "error" && !Ko(t.error) && (r.onError = !0), this.updateResult(r), this.hasListeners() && this.updateTimers();
  }
  notify(t) {
    st.batch(() => {
      if (t.onSuccess) {
        var r, n, o, s;
        (r = (n = this.options).onSuccess) == null || r.call(n, this.currentResult.data), (o = (s = this.options).onSettled) == null || o.call(s, this.currentResult.data, null);
      } else if (t.onError) {
        var i, a, d, u;
        (i = (a = this.options).onError) == null || i.call(a, this.currentResult.error), (d = (u = this.options).onSettled) == null || d.call(u, void 0, this.currentResult.error);
      }
      t.listeners && this.listeners.forEach(({
        listener: f
      }) => {
        f(this.currentResult);
      }), t.cache && this.client.getQueryCache().notify({
        query: this.currentQuery,
        type: "observerResultsUpdated"
      });
    });
  }
}
function MT(e, t) {
  return t.enabled !== !1 && !e.state.dataUpdatedAt && !(e.state.status === "error" && t.retryOnMount === !1);
}
function Ru(e, t) {
  return MT(e, t) || e.state.dataUpdatedAt > 0 && Aa(e, t, t.refetchOnMount);
}
function Aa(e, t, r) {
  if (t.enabled !== !1) {
    const n = typeof r == "function" ? r(e) : r;
    return n === "always" || n !== !1 && $c(e, t);
  }
  return !1;
}
function Ou(e, t, r, n) {
  return r.enabled !== !1 && (e !== t || n.enabled === !1) && (!r.suspense || e.state.status !== "error") && $c(e, r);
}
function $c(e, t) {
  return e.isStaleByTime(t.staleTime);
}
function jT(e, t, r) {
  return r.keepPreviousData ? !1 : r.placeholderData !== void 0 ? t.isPlaceholderData : !_a(e.getCurrentResult(), t);
}
var Na = { exports: {} }, Bi = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _u;
function DT() {
  if (_u)
    return Bi;
  _u = 1;
  var e = at;
  function t(p, m) {
    return p === m && (p !== 0 || 1 / p === 1 / m) || p !== p && m !== m;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, s = e.useLayoutEffect, i = e.useDebugValue;
  function a(p, m) {
    var g = m(), h = n({ inst: { value: g, getSnapshot: m } }), c = h[0].inst, b = h[1];
    return s(
      function() {
        c.value = g, c.getSnapshot = m, d(c) && b({ inst: c });
      },
      [p, g, m]
    ), o(
      function() {
        return d(c) && b({ inst: c }), p(function() {
          d(c) && b({ inst: c });
        });
      },
      [p]
    ), i(g), g;
  }
  function d(p) {
    var m = p.getSnapshot;
    p = p.value;
    try {
      var g = m();
      return !r(p, g);
    } catch {
      return !0;
    }
  }
  function u(p, m) {
    return m();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : a;
  return Bi.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, Bi;
}
var zi = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pu;
function FT() {
  return Pu || (Pu = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
      f || o.startTransition === void 0 || (f = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var c = h();
      if (!p) {
        var b = h();
        s(c, b) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), p = !0);
      }
      b = i({
        inst: { value: c, getSnapshot: h }
      });
      var x = b[0].inst, w = b[1];
      return d(
        function() {
          x.value = c, x.getSnapshot = h, r(x) && w({ inst: x });
        },
        [g, c, h]
      ), a(
        function() {
          return r(x) && w({ inst: x }), g(function() {
            r(x) && w({ inst: x });
          });
        },
        [g]
      ), u(c), c;
    }
    function r(g) {
      var h = g.getSnapshot;
      g = g.value;
      try {
        var c = h();
        return !s(g, c);
      } catch {
        return !0;
      }
    }
    function n(g, h) {
      return h();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = at, s = typeof Object.is == "function" ? Object.is : e, i = o.useState, a = o.useEffect, d = o.useLayoutEffect, u = o.useDebugValue, f = !1, p = !1, m = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    zi.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : m, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), zi;
}
process.env.NODE_ENV === "production" ? Na.exports = DT() : Na.exports = FT();
var LT = Na.exports;
const BT = LT.useSyncExternalStore, wu = /* @__PURE__ */ E.createContext(void 0), oh = /* @__PURE__ */ E.createContext(!1);
function sh(e, t) {
  return e || (t && typeof window < "u" ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = wu), window.ReactQueryClientContext) : wu);
}
const zT = ({
  context: e
} = {}) => {
  const t = E.useContext(sh(e, E.useContext(oh)));
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, VT = ({
  client: e,
  children: t,
  context: r,
  contextSharing: n = !1
}) => {
  E.useEffect(() => (e.mount(), () => {
    e.unmount();
  }), [e]), process.env.NODE_ENV !== "production" && n && e.getLogger().error("The contextSharing option has been deprecated and will be removed in the next major version");
  const o = sh(r, n);
  return /* @__PURE__ */ E.createElement(oh.Provider, {
    value: !r && n
  }, /* @__PURE__ */ E.createElement(o.Provider, {
    value: e
  }, t));
}, ih = /* @__PURE__ */ E.createContext(!1), UT = () => E.useContext(ih);
ih.Provider;
function qT() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e
  };
}
const WT = /* @__PURE__ */ E.createContext(qT()), YT = () => E.useContext(WT);
function HT(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
const GT = (e, t) => {
  (e.suspense || e.useErrorBoundary) && (t.isReset() || (e.retryOnMount = !1));
}, KT = (e) => {
  E.useEffect(() => {
    e.clearReset();
  }, [e]);
}, QT = ({
  result: e,
  errorResetBoundary: t,
  useErrorBoundary: r,
  query: n
}) => e.isError && !t.isReset() && !e.isFetching && HT(r, [e.error, n]), XT = (e) => {
  e.suspense && (typeof e.staleTime != "number" && (e.staleTime = 1e3), typeof e.cacheTime == "number" && (e.cacheTime = Math.max(e.cacheTime, 1e3)));
}, JT = (e, t) => e.isLoading && e.isFetching && !t, ZT = (e, t, r) => (e == null ? void 0 : e.suspense) && JT(t, r), eC = (e, t, r) => t.fetchOptimistic(e).then(({
  data: n
}) => {
  e.onSuccess == null || e.onSuccess(n), e.onSettled == null || e.onSettled(n, null);
}).catch((n) => {
  r.clearReset(), e.onError == null || e.onError(n), e.onSettled == null || e.onSettled(void 0, n);
});
function tC(e, t) {
  const r = zT({
    context: e.context
  }), n = UT(), o = YT(), s = r.defaultQueryOptions(e);
  s._optimisticResults = n ? "isRestoring" : "optimistic", s.onError && (s.onError = st.batchCalls(s.onError)), s.onSuccess && (s.onSuccess = st.batchCalls(s.onSuccess)), s.onSettled && (s.onSettled = st.batchCalls(s.onSettled)), XT(s), GT(s, o), KT(o);
  const [i] = E.useState(() => new t(r, s)), a = i.getOptimisticResult(s);
  if (BT(E.useCallback((d) => {
    const u = n ? () => {
    } : i.subscribe(st.batchCalls(d));
    return i.updateResult(), u;
  }, [i, n]), () => i.getCurrentResult(), () => i.getCurrentResult()), E.useEffect(() => {
    i.setOptions(s, {
      listeners: !1
    });
  }, [s, i]), ZT(s, a, n))
    throw eC(s, i, o);
  if (QT({
    result: a,
    errorResetBoundary: o,
    useErrorBoundary: s.useErrorBoundary,
    query: i.getCurrentQuery()
  }))
    throw a.error;
  return s.notifyOnChangeProps ? a : i.trackResult(a);
}
function rC(e, t, r) {
  const n = qn(e, t, r);
  return tC(n, IT);
}
function so(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let r = 1; r < arguments.length; r += 1)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const nC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: so
}, Symbol.toStringTag, { value: "Module" })), ah = "$$material";
function ee() {
  return ee = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ee.apply(null, arguments);
}
function lt(e, t) {
  if (e == null)
    return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1)
        continue;
      r[n] = e[n];
    }
  return r;
}
var oC = !1;
function sC(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function iC(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var aC = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var s;
      n.tags.length === 0 ? n.insertionPoint ? s = n.insertionPoint.nextSibling : n.prepend ? s = n.container.firstChild : s = n.before : s = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, s), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !oC : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(iC(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var s = sC(o);
      try {
        s.insertRule(n, s.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      var o;
      return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), mt = "-ms-", xs = "-moz-", ge = "-webkit-", ch = "comm", Rc = "rule", Oc = "decl", cC = "@import", lh = "@keyframes", lC = "@layer", uC = Math.abs, Xs = String.fromCharCode, dC = Object.assign;
function fC(e, t) {
  return ft(e, 0) ^ 45 ? (((t << 2 ^ ft(e, 0)) << 2 ^ ft(e, 1)) << 2 ^ ft(e, 2)) << 2 ^ ft(e, 3) : 0;
}
function uh(e) {
  return e.trim();
}
function pC(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ve(e, t, r) {
  return e.replace(t, r);
}
function ka(e, t) {
  return e.indexOf(t);
}
function ft(e, t) {
  return e.charCodeAt(t) | 0;
}
function io(e, t, r) {
  return e.slice(t, r);
}
function Xt(e) {
  return e.length;
}
function _c(e) {
  return e.length;
}
function Do(e, t) {
  return t.push(e), e;
}
function hC(e, t) {
  return e.map(t).join("");
}
var Js = 1, gn = 1, dh = 0, Ct = 0, it = 0, Sn = "";
function Zs(e, t, r, n, o, s, i) {
  return { value: e, root: t, parent: r, type: n, props: o, children: s, line: Js, column: gn, length: i, return: "" };
}
function Dn(e, t) {
  return dC(Zs("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function mC() {
  return it;
}
function yC() {
  return it = Ct > 0 ? ft(Sn, --Ct) : 0, gn--, it === 10 && (gn = 1, Js--), it;
}
function Ot() {
  return it = Ct < dh ? ft(Sn, Ct++) : 0, gn++, it === 10 && (gn = 1, Js++), it;
}
function tr() {
  return ft(Sn, Ct);
}
function Qo() {
  return Ct;
}
function Eo(e, t) {
  return io(Sn, e, t);
}
function ao(e) {
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
function fh(e) {
  return Js = gn = 1, dh = Xt(Sn = e), Ct = 0, [];
}
function ph(e) {
  return Sn = "", e;
}
function Xo(e) {
  return uh(Eo(Ct - 1, Ia(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function gC(e) {
  for (; (it = tr()) && it < 33; )
    Ot();
  return ao(e) > 2 || ao(it) > 3 ? "" : " ";
}
function bC(e, t) {
  for (; --t && Ot() && !(it < 48 || it > 102 || it > 57 && it < 65 || it > 70 && it < 97); )
    ;
  return Eo(e, Qo() + (t < 6 && tr() == 32 && Ot() == 32));
}
function Ia(e) {
  for (; Ot(); )
    switch (it) {
      case e:
        return Ct;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ia(it);
        break;
      case 40:
        e === 41 && Ia(e);
        break;
      case 92:
        Ot();
        break;
    }
  return Ct;
}
function vC(e, t) {
  for (; Ot() && e + it !== 47 + 10; )
    if (e + it === 42 + 42 && tr() === 47)
      break;
  return "/*" + Eo(t, Ct - 1) + "*" + Xs(e === 47 ? e : Ot());
}
function xC(e) {
  for (; !ao(tr()); )
    Ot();
  return Eo(e, Ct);
}
function EC(e) {
  return ph(Jo("", null, null, null, [""], e = fh(e), 0, [0], e));
}
function Jo(e, t, r, n, o, s, i, a, d) {
  for (var u = 0, f = 0, p = i, m = 0, g = 0, h = 0, c = 1, b = 1, x = 1, w = 0, $ = "", S = o, y = s, P = n, O = $; b; )
    switch (h = w, w = Ot()) {
      case 40:
        if (h != 108 && ft(O, p - 1) == 58) {
          ka(O += ve(Xo(w), "&", "&\f"), "&\f") != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        O += Xo(w);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        O += gC(h);
        break;
      case 92:
        O += bC(Qo() - 1, 7);
        continue;
      case 47:
        switch (tr()) {
          case 42:
          case 47:
            Do(TC(vC(Ot(), Qo()), t, r), d);
            break;
          default:
            O += "/";
        }
        break;
      case 123 * c:
        a[u++] = Xt(O) * x;
      case 125 * c:
      case 59:
      case 0:
        switch (w) {
          case 0:
          case 125:
            b = 0;
          case 59 + f:
            x == -1 && (O = ve(O, /\f/g, "")), g > 0 && Xt(O) - p && Do(g > 32 ? Nu(O + ";", n, r, p - 1) : Nu(ve(O, " ", "") + ";", n, r, p - 2), d);
            break;
          case 59:
            O += ";";
          default:
            if (Do(P = Au(O, t, r, u, f, o, a, $, S = [], y = [], p), s), w === 123)
              if (f === 0)
                Jo(O, t, P, P, S, s, p, a, y);
              else
                switch (m === 99 && ft(O, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Jo(e, P, P, n && Do(Au(e, P, P, 0, 0, o, a, $, o, S = [], p), y), o, y, p, a, n ? S : y);
                    break;
                  default:
                    Jo(O, P, P, P, [""], y, 0, a, y);
                }
        }
        u = f = g = 0, c = x = 1, $ = O = "", p = i;
        break;
      case 58:
        p = 1 + Xt(O), g = h;
      default:
        if (c < 1) {
          if (w == 123)
            --c;
          else if (w == 125 && c++ == 0 && yC() == 125)
            continue;
        }
        switch (O += Xs(w), w * c) {
          case 38:
            x = f > 0 ? 1 : (O += "\f", -1);
            break;
          case 44:
            a[u++] = (Xt(O) - 1) * x, x = 1;
            break;
          case 64:
            tr() === 45 && (O += Xo(Ot())), m = tr(), f = p = Xt($ = O += xC(Qo())), w++;
            break;
          case 45:
            h === 45 && Xt(O) == 2 && (c = 0);
        }
    }
  return s;
}
function Au(e, t, r, n, o, s, i, a, d, u, f) {
  for (var p = o - 1, m = o === 0 ? s : [""], g = _c(m), h = 0, c = 0, b = 0; h < n; ++h)
    for (var x = 0, w = io(e, p + 1, p = uC(c = i[h])), $ = e; x < g; ++x)
      ($ = uh(c > 0 ? m[x] + " " + w : ve(w, /&\f/g, m[x]))) && (d[b++] = $);
  return Zs(e, t, r, o === 0 ? Rc : a, d, u, f);
}
function TC(e, t, r) {
  return Zs(e, t, r, ch, Xs(mC()), io(e, 2, -2), 0);
}
function Nu(e, t, r, n) {
  return Zs(e, t, r, Oc, io(e, 0, n), io(e, n + 1, -1), n);
}
function dn(e, t) {
  for (var r = "", n = _c(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function CC(e, t, r, n) {
  switch (e.type) {
    case lC:
      if (e.children.length)
        break;
    case cC:
    case Oc:
      return e.return = e.return || e.value;
    case ch:
      return "";
    case lh:
      return e.return = e.value + "{" + dn(e.children, n) + "}";
    case Rc:
      e.value = e.props.join(",");
  }
  return Xt(r = dn(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function SC(e) {
  var t = _c(e);
  return function(r, n, o, s) {
    for (var i = "", a = 0; a < t; a++)
      i += e[a](r, n, o, s) || "";
    return i;
  };
}
function $C(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function hh(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var RC = function(t, r, n) {
  for (var o = 0, s = 0; o = s, s = tr(), o === 38 && s === 12 && (r[n] = 1), !ao(s); )
    Ot();
  return Eo(t, Ct);
}, OC = function(t, r) {
  var n = -1, o = 44;
  do
    switch (ao(o)) {
      case 0:
        o === 38 && tr() === 12 && (r[n] = 1), t[n] += RC(Ct - 1, r, n);
        break;
      case 2:
        t[n] += Xo(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = tr() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += Xs(o);
    }
  while (o = Ot());
  return t;
}, _C = function(t, r) {
  return ph(OC(fh(t), r));
}, ku = /* @__PURE__ */ new WeakMap(), PC = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !ku.get(n)) && !o) {
      ku.set(t, !0);
      for (var s = [], i = _C(r, s), a = n.props, d = 0, u = 0; d < i.length; d++)
        for (var f = 0; f < a.length; f++, u++)
          t.props[u] = s[d] ? i[d].replace(/&\f/g, a[f]) : a[f] + " " + i[d];
    }
  }
}, wC = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function mh(e, t) {
  switch (fC(e, t)) {
    case 5103:
      return ge + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ge + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ge + e + xs + e + mt + e + e;
    case 6828:
    case 4268:
      return ge + e + mt + e + e;
    case 6165:
      return ge + e + mt + "flex-" + e + e;
    case 5187:
      return ge + e + ve(e, /(\w+).+(:[^]+)/, ge + "box-$1$2" + mt + "flex-$1$2") + e;
    case 5443:
      return ge + e + mt + "flex-item-" + ve(e, /flex-|-self/, "") + e;
    case 4675:
      return ge + e + mt + "flex-line-pack" + ve(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ge + e + mt + ve(e, "shrink", "negative") + e;
    case 5292:
      return ge + e + mt + ve(e, "basis", "preferred-size") + e;
    case 6060:
      return ge + "box-" + ve(e, "-grow", "") + ge + e + mt + ve(e, "grow", "positive") + e;
    case 4554:
      return ge + ve(e, /([^-])(transform)/g, "$1" + ge + "$2") + e;
    case 6187:
      return ve(ve(ve(e, /(zoom-|grab)/, ge + "$1"), /(image-set)/, ge + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ve(e, /(image-set\([^]*)/, ge + "$1$`$1");
    case 4968:
      return ve(ve(e, /(.+:)(flex-)?(.*)/, ge + "box-pack:$3" + mt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ge + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ve(e, /(.+)-inline(.+)/, ge + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Xt(e) - 1 - t > 6)
        switch (ft(e, t + 1)) {
          case 109:
            if (ft(e, t + 4) !== 45)
              break;
          case 102:
            return ve(e, /(.+:)(.+)-([^]+)/, "$1" + ge + "$2-$3$1" + xs + (ft(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~ka(e, "stretch") ? mh(ve(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ft(e, t + 1) !== 115)
        break;
    case 6444:
      switch (ft(e, Xt(e) - 3 - (~ka(e, "!important") && 10))) {
        case 107:
          return ve(e, ":", ":" + ge) + e;
        case 101:
          return ve(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ge + (ft(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ge + "$2$3$1" + mt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (ft(e, t + 11)) {
        case 114:
          return ge + e + mt + ve(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ge + e + mt + ve(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ge + e + mt + ve(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ge + e + mt + e + e;
  }
  return e;
}
var AC = function(t, r, n, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Oc:
        t.return = mh(t.value, t.length);
        break;
      case lh:
        return dn([Dn(t, {
          value: ve(t.value, "@", "@" + ge)
        })], o);
      case Rc:
        if (t.length)
          return hC(t.props, function(s) {
            switch (pC(s, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return dn([Dn(t, {
                  props: [ve(s, /:(read-\w+)/, ":" + xs + "$1")]
                })], o);
              case "::placeholder":
                return dn([Dn(t, {
                  props: [ve(s, /:(plac\w+)/, ":" + ge + "input-$1")]
                }), Dn(t, {
                  props: [ve(s, /:(plac\w+)/, ":" + xs + "$1")]
                }), Dn(t, {
                  props: [ve(s, /:(plac\w+)/, mt + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, NC = [AC], yh = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(c) {
      var b = c.getAttribute("data-emotion");
      b.indexOf(" ") !== -1 && (document.head.appendChild(c), c.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || NC, s = {}, i, a = [];
  i = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(c) {
      for (var b = c.getAttribute("data-emotion").split(" "), x = 1; x < b.length; x++)
        s[b[x]] = !0;
      a.push(c);
    }
  );
  var d, u = [PC, wC];
  {
    var f, p = [CC, $C(function(c) {
      f.insert(c);
    })], m = SC(u.concat(o, p)), g = function(b) {
      return dn(EC(b), m);
    };
    d = function(b, x, w, $) {
      f = w, g(b ? b + "{" + x.styles + "}" : x.styles), $ && (h.inserted[x.name] = !0);
    };
  }
  var h = {
    key: r,
    sheet: new aC({
      key: r,
      container: i,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: s,
    registered: {},
    insert: d
  };
  return h.sheet.hydrate(a), h;
}, Ma = { exports: {} }, $e = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Iu;
function kC() {
  if (Iu)
    return $e;
  Iu = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, c = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function $(y) {
    if (typeof y == "object" && y !== null) {
      var P = y.$$typeof;
      switch (P) {
        case t:
          switch (y = y.type, y) {
            case d:
            case u:
            case n:
            case s:
            case o:
            case p:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case a:
                case f:
                case h:
                case g:
                case i:
                  return y;
                default:
                  return P;
              }
          }
        case r:
          return P;
      }
    }
  }
  function S(y) {
    return $(y) === u;
  }
  return $e.AsyncMode = d, $e.ConcurrentMode = u, $e.ContextConsumer = a, $e.ContextProvider = i, $e.Element = t, $e.ForwardRef = f, $e.Fragment = n, $e.Lazy = h, $e.Memo = g, $e.Portal = r, $e.Profiler = s, $e.StrictMode = o, $e.Suspense = p, $e.isAsyncMode = function(y) {
    return S(y) || $(y) === d;
  }, $e.isConcurrentMode = S, $e.isContextConsumer = function(y) {
    return $(y) === a;
  }, $e.isContextProvider = function(y) {
    return $(y) === i;
  }, $e.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, $e.isForwardRef = function(y) {
    return $(y) === f;
  }, $e.isFragment = function(y) {
    return $(y) === n;
  }, $e.isLazy = function(y) {
    return $(y) === h;
  }, $e.isMemo = function(y) {
    return $(y) === g;
  }, $e.isPortal = function(y) {
    return $(y) === r;
  }, $e.isProfiler = function(y) {
    return $(y) === s;
  }, $e.isStrictMode = function(y) {
    return $(y) === o;
  }, $e.isSuspense = function(y) {
    return $(y) === p;
  }, $e.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === n || y === u || y === s || y === o || y === p || y === m || typeof y == "object" && y !== null && (y.$$typeof === h || y.$$typeof === g || y.$$typeof === i || y.$$typeof === a || y.$$typeof === f || y.$$typeof === b || y.$$typeof === x || y.$$typeof === w || y.$$typeof === c);
  }, $e.typeOf = $, $e;
}
var Re = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mu;
function IC() {
  return Mu || (Mu = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, c = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function $(T) {
      return typeof T == "string" || typeof T == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      T === n || T === u || T === s || T === o || T === p || T === m || typeof T == "object" && T !== null && (T.$$typeof === h || T.$$typeof === g || T.$$typeof === i || T.$$typeof === a || T.$$typeof === f || T.$$typeof === b || T.$$typeof === x || T.$$typeof === w || T.$$typeof === c);
    }
    function S(T) {
      if (typeof T == "object" && T !== null) {
        var ce = T.$$typeof;
        switch (ce) {
          case t:
            var xe = T.type;
            switch (xe) {
              case d:
              case u:
              case n:
              case s:
              case o:
              case p:
                return xe;
              default:
                var tt = xe && xe.$$typeof;
                switch (tt) {
                  case a:
                  case f:
                  case h:
                  case g:
                  case i:
                    return tt;
                  default:
                    return ce;
                }
            }
          case r:
            return ce;
        }
      }
    }
    var y = d, P = u, O = a, I = i, F = t, V = f, Q = n, q = h, L = g, j = r, ne = s, z = o, te = p, D = !1;
    function se(T) {
      return D || (D = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), _(T) || S(T) === d;
    }
    function _(T) {
      return S(T) === u;
    }
    function N(T) {
      return S(T) === a;
    }
    function W(T) {
      return S(T) === i;
    }
    function Y(T) {
      return typeof T == "object" && T !== null && T.$$typeof === t;
    }
    function M(T) {
      return S(T) === f;
    }
    function H(T) {
      return S(T) === n;
    }
    function U(T) {
      return S(T) === h;
    }
    function K(T) {
      return S(T) === g;
    }
    function X(T) {
      return S(T) === r;
    }
    function G(T) {
      return S(T) === s;
    }
    function Z(T) {
      return S(T) === o;
    }
    function ue(T) {
      return S(T) === p;
    }
    Re.AsyncMode = y, Re.ConcurrentMode = P, Re.ContextConsumer = O, Re.ContextProvider = I, Re.Element = F, Re.ForwardRef = V, Re.Fragment = Q, Re.Lazy = q, Re.Memo = L, Re.Portal = j, Re.Profiler = ne, Re.StrictMode = z, Re.Suspense = te, Re.isAsyncMode = se, Re.isConcurrentMode = _, Re.isContextConsumer = N, Re.isContextProvider = W, Re.isElement = Y, Re.isForwardRef = M, Re.isFragment = H, Re.isLazy = U, Re.isMemo = K, Re.isPortal = X, Re.isProfiler = G, Re.isStrictMode = Z, Re.isSuspense = ue, Re.isValidElementType = $, Re.typeOf = S;
  }()), Re;
}
process.env.NODE_ENV === "production" ? Ma.exports = kC() : Ma.exports = IC();
var MC = Ma.exports, gh = MC, jC = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, DC = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, bh = {};
bh[gh.ForwardRef] = jC;
bh[gh.Memo] = DC;
var FC = !0;
function vh(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var Pc = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  FC === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, wc = function(t, r, n) {
  Pc(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var s = r;
    do
      t.insert(r === s ? "." + o : "", s, t.sheet, !0), s = s.next;
    while (s !== void 0);
  }
};
function LC(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var BC = {
  animationIterationCount: 1,
  aspectRatio: 1,
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
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, zC = !1, VC = /[A-Z]|^ms/g, UC = /_EMO_([^_]+?)_([^]*?)_EMO_/g, xh = function(t) {
  return t.charCodeAt(1) === 45;
}, ju = function(t) {
  return t != null && typeof t != "boolean";
}, Vi = /* @__PURE__ */ hh(function(e) {
  return xh(e) ? e : e.replace(VC, "-$&").toLowerCase();
}), Du = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(UC, function(n, o, s) {
          return Jt = {
            name: o,
            styles: s,
            next: Jt
          }, o;
        });
  }
  return BC[t] !== 1 && !xh(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
}, qC = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function co(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return Jt = {
          name: o.name,
          styles: o.styles,
          next: Jt
        }, o.name;
      var s = r;
      if (s.styles !== void 0) {
        var i = s.next;
        if (i !== void 0)
          for (; i !== void 0; )
            Jt = {
              name: i.name,
              styles: i.styles,
              next: Jt
            }, i = i.next;
        var a = s.styles + ";";
        return a;
      }
      return WC(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var d = Jt, u = r(e);
        return Jt = d, co(e, t, u);
      }
      break;
    }
  }
  var f = r;
  if (t == null)
    return f;
  var p = t[f];
  return p !== void 0 ? p : f;
}
function WC(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += co(e, t, r[o]) + ";";
  else
    for (var s in r) {
      var i = r[s];
      if (typeof i != "object") {
        var a = i;
        t != null && t[a] !== void 0 ? n += s + "{" + t[a] + "}" : ju(a) && (n += Vi(s) + ":" + Du(s, a) + ";");
      } else {
        if (s === "NO_COMPONENT_SELECTOR" && zC)
          throw new Error(qC);
        if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
          for (var d = 0; d < i.length; d++)
            ju(i[d]) && (n += Vi(s) + ":" + Du(s, i[d]) + ";");
        else {
          var u = co(e, t, i);
          switch (s) {
            case "animation":
            case "animationName": {
              n += Vi(s) + ":" + u + ";";
              break;
            }
            default:
              n += s + "{" + u + "}";
          }
        }
      }
    }
  return n;
}
var Fu = /label:\s*([^\s;{]+)\s*(;|$)/g, Jt;
function To(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Jt = void 0;
  var s = e[0];
  if (s == null || s.raw === void 0)
    n = !1, o += co(r, t, s);
  else {
    var i = s;
    o += i[0];
  }
  for (var a = 1; a < e.length; a++)
    if (o += co(r, t, e[a]), n) {
      var d = s;
      o += d[a];
    }
  Fu.lastIndex = 0;
  for (var u = "", f; (f = Fu.exec(o)) !== null; )
    u += "-" + f[1];
  var p = LC(o) + u;
  return {
    name: p,
    styles: o,
    next: Jt
  };
}
var YC = function(t) {
  return t();
}, Eh = E["useInsertionEffect"] ? E["useInsertionEffect"] : !1, Th = Eh || YC, Lu = Eh || E.useLayoutEffect, HC = !1, Ch = /* @__PURE__ */ E.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ yh({
    key: "css"
  }) : null
), GC = Ch.Provider, Ac = function(t) {
  return /* @__PURE__ */ Zd(function(r, n) {
    var o = Xa(Ch);
    return t(r, o, n);
  });
}, Co = /* @__PURE__ */ E.createContext({}), Nc = {}.hasOwnProperty, ja = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", KC = function(t, r) {
  var n = {};
  for (var o in r)
    Nc.call(r, o) && (n[o] = r[o]);
  return n[ja] = t, n;
}, QC = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Pc(r, n, o), Th(function() {
    return wc(r, n, o);
  }), null;
}, XC = /* @__PURE__ */ Ac(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[ja], s = [n], i = "";
  typeof e.className == "string" ? i = vh(t.registered, s, e.className) : e.className != null && (i = e.className + " ");
  var a = To(s, void 0, E.useContext(Co));
  i += t.key + "-" + a.name;
  var d = {};
  for (var u in e)
    Nc.call(e, u) && u !== "css" && u !== ja && !HC && (d[u] = e[u]);
  return d.className = i, r && (d.ref = r), /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(QC, {
    cache: t,
    serialized: a,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ E.createElement(o, d));
}), JC = XC, Ui = { exports: {} }, Bu;
function Sh() {
  return Bu || (Bu = 1, function(e) {
    function t() {
      return e.exports = t = Object.assign ? Object.assign.bind() : function(r) {
        for (var n = 1; n < arguments.length; n++) {
          var o = arguments[n];
          for (var s in o)
            ({}).hasOwnProperty.call(o, s) && (r[s] = o[s]);
        }
        return r;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(null, arguments);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Ui)), Ui.exports;
}
Sh();
var zu = function(t, r) {
  var n = arguments;
  if (r == null || !Nc.call(r, "css"))
    return E.createElement.apply(void 0, n);
  var o = n.length, s = new Array(o);
  s[0] = JC, s[1] = KC(t, r);
  for (var i = 2; i < o; i++)
    s[i] = n[i];
  return E.createElement.apply(null, s);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(zu || (zu = {}));
var ZC = /* @__PURE__ */ Ac(function(e, t) {
  var r = e.styles, n = To([r], void 0, E.useContext(Co)), o = E.useRef();
  return Lu(function() {
    var s = t.key + "-global", i = new t.sheet.constructor({
      key: s,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), a = !1, d = document.querySelector('style[data-emotion="' + s + " " + n.name + '"]');
    return t.sheet.tags.length && (i.before = t.sheet.tags[0]), d !== null && (a = !0, d.setAttribute("data-emotion", s), i.hydrate([d])), o.current = [i, a], function() {
      i.flush();
    };
  }, [t]), Lu(function() {
    var s = o.current, i = s[0], a = s[1];
    if (a) {
      s[1] = !1;
      return;
    }
    if (n.next !== void 0 && wc(t, n.next, !0), i.tags.length) {
      var d = i.tags[i.tags.length - 1].nextElementSibling;
      i.before = d, i.flush();
    }
    t.insert("", n, i, !1);
  }, [t, n.name]), null;
});
function ei() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return To(t);
}
function $n() {
  var e = ei.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var eS = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, tS = /* @__PURE__ */ hh(
  function(e) {
    return eS.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), rS = !1, nS = tS, oS = function(t) {
  return t !== "theme";
}, Vu = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? nS : oS;
}, Uu = function(t, r, n) {
  var o;
  if (r) {
    var s = r.shouldForwardProp;
    o = t.__emotion_forwardProp && s ? function(i) {
      return t.__emotion_forwardProp(i) && s(i);
    } : s;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, sS = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Pc(r, n, o), Th(function() {
    return wc(r, n, o);
  }), null;
}, iS = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, s, i;
  r !== void 0 && (s = r.label, i = r.target);
  var a = Uu(t, r, n), d = a || Vu(o), u = !d("as");
  return function() {
    var f = arguments, p = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (s !== void 0 && p.push("label:" + s + ";"), f[0] == null || f[0].raw === void 0)
      p.push.apply(p, f);
    else {
      var m = f[0];
      p.push(m[0]);
      for (var g = f.length, h = 1; h < g; h++)
        p.push(f[h], m[h]);
    }
    var c = Ac(function(b, x, w) {
      var $ = u && b.as || o, S = "", y = [], P = b;
      if (b.theme == null) {
        P = {};
        for (var O in b)
          P[O] = b[O];
        P.theme = E.useContext(Co);
      }
      typeof b.className == "string" ? S = vh(x.registered, y, b.className) : b.className != null && (S = b.className + " ");
      var I = To(p.concat(y), x.registered, P);
      S += x.key + "-" + I.name, i !== void 0 && (S += " " + i);
      var F = u && a === void 0 ? Vu($) : d, V = {};
      for (var Q in b)
        u && Q === "as" || F(Q) && (V[Q] = b[Q]);
      return V.className = S, w && (V.ref = w), /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(sS, {
        cache: x,
        serialized: I,
        isStringTag: typeof $ == "string"
      }), /* @__PURE__ */ E.createElement($, V));
    });
    return c.displayName = s !== void 0 ? s : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", c.defaultProps = t.defaultProps, c.__emotion_real = c, c.__emotion_base = o, c.__emotion_styles = p, c.__emotion_forwardProp = a, Object.defineProperty(c, "toString", {
      value: function() {
        return i === void 0 && rS ? "NO_COMPONENT_SELECTOR" : "." + i;
      }
    }), c.withComponent = function(b, x) {
      var w = e(b, ee({}, r, x, {
        shouldForwardProp: Uu(c, x, !0)
      }));
      return w.apply(void 0, p);
    }, c;
  };
}, aS = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Da = iS.bind(null);
aS.forEach(function(e) {
  Da[e] = Da(e);
});
var Fa = { exports: {} }, Fo = { exports: {} }, Oe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qu;
function cS() {
  if (qu)
    return Oe;
  qu = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, c = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function $(y) {
    if (typeof y == "object" && y !== null) {
      var P = y.$$typeof;
      switch (P) {
        case t:
          switch (y = y.type, y) {
            case d:
            case u:
            case n:
            case s:
            case o:
            case p:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case a:
                case f:
                case h:
                case g:
                case i:
                  return y;
                default:
                  return P;
              }
          }
        case r:
          return P;
      }
    }
  }
  function S(y) {
    return $(y) === u;
  }
  return Oe.AsyncMode = d, Oe.ConcurrentMode = u, Oe.ContextConsumer = a, Oe.ContextProvider = i, Oe.Element = t, Oe.ForwardRef = f, Oe.Fragment = n, Oe.Lazy = h, Oe.Memo = g, Oe.Portal = r, Oe.Profiler = s, Oe.StrictMode = o, Oe.Suspense = p, Oe.isAsyncMode = function(y) {
    return S(y) || $(y) === d;
  }, Oe.isConcurrentMode = S, Oe.isContextConsumer = function(y) {
    return $(y) === a;
  }, Oe.isContextProvider = function(y) {
    return $(y) === i;
  }, Oe.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, Oe.isForwardRef = function(y) {
    return $(y) === f;
  }, Oe.isFragment = function(y) {
    return $(y) === n;
  }, Oe.isLazy = function(y) {
    return $(y) === h;
  }, Oe.isMemo = function(y) {
    return $(y) === g;
  }, Oe.isPortal = function(y) {
    return $(y) === r;
  }, Oe.isProfiler = function(y) {
    return $(y) === s;
  }, Oe.isStrictMode = function(y) {
    return $(y) === o;
  }, Oe.isSuspense = function(y) {
    return $(y) === p;
  }, Oe.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === n || y === u || y === s || y === o || y === p || y === m || typeof y == "object" && y !== null && (y.$$typeof === h || y.$$typeof === g || y.$$typeof === i || y.$$typeof === a || y.$$typeof === f || y.$$typeof === b || y.$$typeof === x || y.$$typeof === w || y.$$typeof === c);
  }, Oe.typeOf = $, Oe;
}
var _e = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wu;
function lS() {
  return Wu || (Wu = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, c = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function $(T) {
      return typeof T == "string" || typeof T == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      T === n || T === u || T === s || T === o || T === p || T === m || typeof T == "object" && T !== null && (T.$$typeof === h || T.$$typeof === g || T.$$typeof === i || T.$$typeof === a || T.$$typeof === f || T.$$typeof === b || T.$$typeof === x || T.$$typeof === w || T.$$typeof === c);
    }
    function S(T) {
      if (typeof T == "object" && T !== null) {
        var ce = T.$$typeof;
        switch (ce) {
          case t:
            var xe = T.type;
            switch (xe) {
              case d:
              case u:
              case n:
              case s:
              case o:
              case p:
                return xe;
              default:
                var tt = xe && xe.$$typeof;
                switch (tt) {
                  case a:
                  case f:
                  case h:
                  case g:
                  case i:
                    return tt;
                  default:
                    return ce;
                }
            }
          case r:
            return ce;
        }
      }
    }
    var y = d, P = u, O = a, I = i, F = t, V = f, Q = n, q = h, L = g, j = r, ne = s, z = o, te = p, D = !1;
    function se(T) {
      return D || (D = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), _(T) || S(T) === d;
    }
    function _(T) {
      return S(T) === u;
    }
    function N(T) {
      return S(T) === a;
    }
    function W(T) {
      return S(T) === i;
    }
    function Y(T) {
      return typeof T == "object" && T !== null && T.$$typeof === t;
    }
    function M(T) {
      return S(T) === f;
    }
    function H(T) {
      return S(T) === n;
    }
    function U(T) {
      return S(T) === h;
    }
    function K(T) {
      return S(T) === g;
    }
    function X(T) {
      return S(T) === r;
    }
    function G(T) {
      return S(T) === s;
    }
    function Z(T) {
      return S(T) === o;
    }
    function ue(T) {
      return S(T) === p;
    }
    _e.AsyncMode = y, _e.ConcurrentMode = P, _e.ContextConsumer = O, _e.ContextProvider = I, _e.Element = F, _e.ForwardRef = V, _e.Fragment = Q, _e.Lazy = q, _e.Memo = L, _e.Portal = j, _e.Profiler = ne, _e.StrictMode = z, _e.Suspense = te, _e.isAsyncMode = se, _e.isConcurrentMode = _, _e.isContextConsumer = N, _e.isContextProvider = W, _e.isElement = Y, _e.isForwardRef = M, _e.isFragment = H, _e.isLazy = U, _e.isMemo = K, _e.isPortal = X, _e.isProfiler = G, _e.isStrictMode = Z, _e.isSuspense = ue, _e.isValidElementType = $, _e.typeOf = S;
  }()), _e;
}
var Yu;
function $h() {
  return Yu || (Yu = 1, process.env.NODE_ENV === "production" ? Fo.exports = cS() : Fo.exports = lS()), Fo.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var qi, Hu;
function uS() {
  if (Hu)
    return qi;
  Hu = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var i = {}, a = 0; a < 10; a++)
        i["_" + String.fromCharCode(a)] = a;
      var d = Object.getOwnPropertyNames(i).map(function(f) {
        return i[f];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        u[f] = f;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return qi = o() ? Object.assign : function(s, i) {
    for (var a, d = n(s), u, f = 1; f < arguments.length; f++) {
      a = Object(arguments[f]);
      for (var p in a)
        t.call(a, p) && (d[p] = a[p]);
      if (e) {
        u = e(a);
        for (var m = 0; m < u.length; m++)
          r.call(a, u[m]) && (d[u[m]] = a[u[m]]);
      }
    }
    return d;
  }, qi;
}
var Wi, Gu;
function kc() {
  if (Gu)
    return Wi;
  Gu = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Wi = e, Wi;
}
var Yi, Ku;
function Rh() {
  return Ku || (Ku = 1, Yi = Function.call.bind(Object.prototype.hasOwnProperty)), Yi;
}
var Hi, Qu;
function dS() {
  if (Qu)
    return Hi;
  Qu = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = kc(), r = {}, n = Rh();
    e = function(s) {
      var i = "Warning: " + s;
      typeof console < "u" && console.error(i);
      try {
        throw new Error(i);
      } catch {
      }
    };
  }
  function o(s, i, a, d, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in s)
        if (n(s, f)) {
          var p;
          try {
            if (typeof s[f] != "function") {
              var m = Error(
                (d || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            p = s[f](i, f, d, a, null, t);
          } catch (h) {
            p = h;
          }
          if (p && !(p instanceof Error) && e(
            (d || "React class") + ": type specification of " + a + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in r)) {
            r[p.message] = !0;
            var g = u ? u() : "";
            e(
              "Failed " + a + " type: " + p.message + (g ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Hi = o, Hi;
}
var Gi, Xu;
function fS() {
  if (Xu)
    return Gi;
  Xu = 1;
  var e = $h(), t = uS(), r = kc(), n = Rh(), o = dS(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(a) {
    var d = "Warning: " + a;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function i() {
    return null;
  }
  return Gi = function(a, d) {
    var u = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function p(_) {
      var N = _ && (u && _[u] || _[f]);
      if (typeof N == "function")
        return N;
    }
    var m = "<<anonymous>>", g = {
      array: x("array"),
      bigint: x("bigint"),
      bool: x("boolean"),
      func: x("function"),
      number: x("number"),
      object: x("object"),
      string: x("string"),
      symbol: x("symbol"),
      any: w(),
      arrayOf: $,
      element: S(),
      elementType: y(),
      instanceOf: P,
      node: V(),
      objectOf: I,
      oneOf: O,
      oneOfType: F,
      shape: q,
      exact: L
    };
    function h(_, N) {
      return _ === N ? _ !== 0 || 1 / _ === 1 / N : _ !== _ && N !== N;
    }
    function c(_, N) {
      this.message = _, this.data = N && typeof N == "object" ? N : {}, this.stack = "";
    }
    c.prototype = Error.prototype;
    function b(_) {
      if (process.env.NODE_ENV !== "production")
        var N = {}, W = 0;
      function Y(H, U, K, X, G, Z, ue) {
        if (X = X || m, Z = Z || K, ue !== r) {
          if (d) {
            var T = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw T.name = "Invariant Violation", T;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ce = X + ":" + K;
            !N[ce] && // Avoid spamming the console because they are often not actionable except for lib authors
            W < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + Z + "` prop on `" + X + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), N[ce] = !0, W++);
          }
        }
        return U[K] == null ? H ? U[K] === null ? new c("The " + G + " `" + Z + "` is marked as required " + ("in `" + X + "`, but its value is `null`.")) : new c("The " + G + " `" + Z + "` is marked as required in " + ("`" + X + "`, but its value is `undefined`.")) : null : _(U, K, X, G, Z);
      }
      var M = Y.bind(null, !1);
      return M.isRequired = Y.bind(null, !0), M;
    }
    function x(_) {
      function N(W, Y, M, H, U, K) {
        var X = W[Y], G = z(X);
        if (G !== _) {
          var Z = te(X);
          return new c(
            "Invalid " + H + " `" + U + "` of type " + ("`" + Z + "` supplied to `" + M + "`, expected ") + ("`" + _ + "`."),
            { expectedType: _ }
          );
        }
        return null;
      }
      return b(N);
    }
    function w() {
      return b(i);
    }
    function $(_) {
      function N(W, Y, M, H, U) {
        if (typeof _ != "function")
          return new c("Property `" + U + "` of component `" + M + "` has invalid PropType notation inside arrayOf.");
        var K = W[Y];
        if (!Array.isArray(K)) {
          var X = z(K);
          return new c("Invalid " + H + " `" + U + "` of type " + ("`" + X + "` supplied to `" + M + "`, expected an array."));
        }
        for (var G = 0; G < K.length; G++) {
          var Z = _(K, G, M, H, U + "[" + G + "]", r);
          if (Z instanceof Error)
            return Z;
        }
        return null;
      }
      return b(N);
    }
    function S() {
      function _(N, W, Y, M, H) {
        var U = N[W];
        if (!a(U)) {
          var K = z(U);
          return new c("Invalid " + M + " `" + H + "` of type " + ("`" + K + "` supplied to `" + Y + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(_);
    }
    function y() {
      function _(N, W, Y, M, H) {
        var U = N[W];
        if (!e.isValidElementType(U)) {
          var K = z(U);
          return new c("Invalid " + M + " `" + H + "` of type " + ("`" + K + "` supplied to `" + Y + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(_);
    }
    function P(_) {
      function N(W, Y, M, H, U) {
        if (!(W[Y] instanceof _)) {
          var K = _.name || m, X = se(W[Y]);
          return new c("Invalid " + H + " `" + U + "` of type " + ("`" + X + "` supplied to `" + M + "`, expected ") + ("instance of `" + K + "`."));
        }
        return null;
      }
      return b(N);
    }
    function O(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), i;
      function N(W, Y, M, H, U) {
        for (var K = W[Y], X = 0; X < _.length; X++)
          if (h(K, _[X]))
            return null;
        var G = JSON.stringify(_, function(ue, T) {
          var ce = te(T);
          return ce === "symbol" ? String(T) : T;
        });
        return new c("Invalid " + H + " `" + U + "` of value `" + String(K) + "` " + ("supplied to `" + M + "`, expected one of " + G + "."));
      }
      return b(N);
    }
    function I(_) {
      function N(W, Y, M, H, U) {
        if (typeof _ != "function")
          return new c("Property `" + U + "` of component `" + M + "` has invalid PropType notation inside objectOf.");
        var K = W[Y], X = z(K);
        if (X !== "object")
          return new c("Invalid " + H + " `" + U + "` of type " + ("`" + X + "` supplied to `" + M + "`, expected an object."));
        for (var G in K)
          if (n(K, G)) {
            var Z = _(K, G, M, H, U + "." + G, r);
            if (Z instanceof Error)
              return Z;
          }
        return null;
      }
      return b(N);
    }
    function F(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var N = 0; N < _.length; N++) {
        var W = _[N];
        if (typeof W != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + D(W) + " at index " + N + "."
          ), i;
      }
      function Y(M, H, U, K, X) {
        for (var G = [], Z = 0; Z < _.length; Z++) {
          var ue = _[Z], T = ue(M, H, U, K, X, r);
          if (T == null)
            return null;
          T.data && n(T.data, "expectedType") && G.push(T.data.expectedType);
        }
        var ce = G.length > 0 ? ", expected one of type [" + G.join(", ") + "]" : "";
        return new c("Invalid " + K + " `" + X + "` supplied to " + ("`" + U + "`" + ce + "."));
      }
      return b(Y);
    }
    function V() {
      function _(N, W, Y, M, H) {
        return j(N[W]) ? null : new c("Invalid " + M + " `" + H + "` supplied to " + ("`" + Y + "`, expected a ReactNode."));
      }
      return b(_);
    }
    function Q(_, N, W, Y, M) {
      return new c(
        (_ || "React class") + ": " + N + " type `" + W + "." + Y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + M + "`."
      );
    }
    function q(_) {
      function N(W, Y, M, H, U) {
        var K = W[Y], X = z(K);
        if (X !== "object")
          return new c("Invalid " + H + " `" + U + "` of type `" + X + "` " + ("supplied to `" + M + "`, expected `object`."));
        for (var G in _) {
          var Z = _[G];
          if (typeof Z != "function")
            return Q(M, H, U, G, te(Z));
          var ue = Z(K, G, M, H, U + "." + G, r);
          if (ue)
            return ue;
        }
        return null;
      }
      return b(N);
    }
    function L(_) {
      function N(W, Y, M, H, U) {
        var K = W[Y], X = z(K);
        if (X !== "object")
          return new c("Invalid " + H + " `" + U + "` of type `" + X + "` " + ("supplied to `" + M + "`, expected `object`."));
        var G = t({}, W[Y], _);
        for (var Z in G) {
          var ue = _[Z];
          if (n(_, Z) && typeof ue != "function")
            return Q(M, H, U, Z, te(ue));
          if (!ue)
            return new c(
              "Invalid " + H + " `" + U + "` key `" + Z + "` supplied to `" + M + "`.\nBad object: " + JSON.stringify(W[Y], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(_), null, "  ")
            );
          var T = ue(K, Z, M, H, U + "." + Z, r);
          if (T)
            return T;
        }
        return null;
      }
      return b(N);
    }
    function j(_) {
      switch (typeof _) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !_;
        case "object":
          if (Array.isArray(_))
            return _.every(j);
          if (_ === null || a(_))
            return !0;
          var N = p(_);
          if (N) {
            var W = N.call(_), Y;
            if (N !== _.entries) {
              for (; !(Y = W.next()).done; )
                if (!j(Y.value))
                  return !1;
            } else
              for (; !(Y = W.next()).done; ) {
                var M = Y.value;
                if (M && !j(M[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ne(_, N) {
      return _ === "symbol" ? !0 : N ? N["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && N instanceof Symbol : !1;
    }
    function z(_) {
      var N = typeof _;
      return Array.isArray(_) ? "array" : _ instanceof RegExp ? "object" : ne(N, _) ? "symbol" : N;
    }
    function te(_) {
      if (typeof _ > "u" || _ === null)
        return "" + _;
      var N = z(_);
      if (N === "object") {
        if (_ instanceof Date)
          return "date";
        if (_ instanceof RegExp)
          return "regexp";
      }
      return N;
    }
    function D(_) {
      var N = te(_);
      switch (N) {
        case "array":
        case "object":
          return "an " + N;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + N;
        default:
          return N;
      }
    }
    function se(_) {
      return !_.constructor || !_.constructor.name ? m : _.constructor.name;
    }
    return g.checkPropTypes = o, g.resetWarningCache = o.resetWarningCache, g.PropTypes = g, g;
  }, Gi;
}
var Ki, Ju;
function pS() {
  if (Ju)
    return Ki;
  Ju = 1;
  var e = kc();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Ki = function() {
    function n(i, a, d, u, f, p) {
      if (p !== e) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var s = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, Ki;
}
if (process.env.NODE_ENV !== "production") {
  var hS = $h(), mS = !0;
  Fa.exports = fS()(hS.isElement, mS);
} else
  Fa.exports = pS()();
var yS = Fa.exports;
const C = /* @__PURE__ */ tf(yS);
function gS(e, t) {
  const r = yh({
    key: "css",
    prepend: e
  });
  if (t) {
    const n = r.insert;
    r.insert = (...o) => (o[1].styles.match(/^@layer\s+[^{]*$/) || (o[1].styles = `@layer mui {${o[1].styles}}`), n(...o));
  }
  return r;
}
const Qi = /* @__PURE__ */ new Map();
function Oh(e) {
  const {
    injectFirst: t,
    enableCssLayer: r,
    children: n
  } = e, o = E.useMemo(() => {
    const s = `${t}-${r}`;
    if (typeof document == "object" && Qi.has(s))
      return Qi.get(s);
    const i = gS(t, r);
    return Qi.set(s, i), i;
  }, [t, r]);
  return t || r ? /* @__PURE__ */ v.jsx(GC, {
    value: o,
    children: n
  }) : n;
}
process.env.NODE_ENV !== "production" && (Oh.propTypes = {
  /**
   * Your component tree.
   */
  children: C.node,
  /**
   * If true, MUI styles are wrapped in CSS `@layer mui` rule.
   * It helps to override MUI styles when using CSS Modules, Tailwind CSS, plain CSS, or any other styling solution.
   */
  enableCssLayer: C.bool,
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: C.bool
});
function bS(e) {
  return e == null || Object.keys(e).length === 0;
}
function _h(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e, n = typeof t == "function" ? (o) => t(bS(o) ? r : o) : t;
  return /* @__PURE__ */ v.jsx(ZC, {
    styles: n
  });
}
process.env.NODE_ENV !== "production" && (_h.propTypes = {
  defaultTheme: C.object,
  styles: C.oneOfType([C.array, C.string, C.object, C.func])
});
/**
 * @mui/styled-engine v5.18.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Ph(e, t) {
  const r = Da(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((s) => s === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
const vS = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, Zu = [];
function xS(e) {
  return Zu[0] = e, To(Zu);
}
const ES = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: _h,
  StyledEngineProvider: Oh,
  ThemeContext: Co,
  css: ei,
  default: Ph,
  internal_processStyles: vS,
  internal_serializeStyles: xS,
  keyframes: $n
}, Symbol.toStringTag, { value: "Module" }));
function br(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function wh(e) {
  if (/* @__PURE__ */ E.isValidElement(e) || !br(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = wh(e[r]);
  }), t;
}
function rr(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? ee({}, e) : e;
  return br(e) && br(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ E.isValidElement(t[o]) ? n[o] = t[o] : br(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && br(e[o]) ? n[o] = rr(e[o], t[o], r) : r.clone ? n[o] = br(t[o]) ? wh(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
const TS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rr,
  isPlainObject: br
}, Symbol.toStringTag, { value: "Module" })), CS = ["values", "unit", "step"], SS = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ee({}, r, {
    [n.key]: n.val
  }), {});
};
function Ah(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5
  } = e, o = lt(e, CS), s = SS(t), i = Object.keys(s);
  function a(m) {
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${r})`;
  }
  function d(m) {
    return `@media (max-width:${(typeof t[m] == "number" ? t[m] : m) - n / 100}${r})`;
  }
  function u(m, g) {
    const h = i.indexOf(g);
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${r}) and (max-width:${(h !== -1 && typeof t[i[h]] == "number" ? t[i[h]] : g) - n / 100}${r})`;
  }
  function f(m) {
    return i.indexOf(m) + 1 < i.length ? u(m, i[i.indexOf(m) + 1]) : a(m);
  }
  function p(m) {
    const g = i.indexOf(m);
    return g === 0 ? a(i[1]) : g === i.length - 1 ? d(i[g]) : u(m, i[i.indexOf(m) + 1]).replace("@media", "@media not all and");
  }
  return ee({
    keys: i,
    values: s,
    up: a,
    down: d,
    between: u,
    only: f,
    not: p,
    unit: r
  }, o);
}
const $S = {
  borderRadius: 4
}, RS = $S, OS = process.env.NODE_ENV !== "production" ? C.oneOfType([C.number, C.string, C.object, C.array]) : {}, Sr = OS;
function Kn(e, t) {
  return t ? rr(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Ic = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, ed = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Ic[e]}px)`
};
function ar(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const s = n.breakpoints || ed;
    return t.reduce((i, a, d) => (i[s.up(s.keys[d])] = r(t[d]), i), {});
  }
  if (typeof t == "object") {
    const s = n.breakpoints || ed;
    return Object.keys(t).reduce((i, a) => {
      if (Object.keys(s.values || Ic).indexOf(a) !== -1) {
        const d = s.up(a);
        i[d] = r(t[a], a);
      } else {
        const d = a;
        i[d] = t[d];
      }
      return i;
    }, {});
  }
  return r(t);
}
function _S(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((n, o) => {
    const s = e.up(o);
    return n[s] = {}, n;
  }, {})) || {};
}
function td(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function Fe(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : so(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const PS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fe
}, Symbol.toStringTag, { value: "Module" }));
function bn(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, s) => o && o[s] ? o[s] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function Es(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = bn(e, r) || n, t && (o = t(o, n, e)), o;
}
function Ze(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, s = (i) => {
    if (i[t] == null)
      return null;
    const a = i[t], d = i.theme, u = bn(d, n) || {};
    return ar(i, a, (p) => {
      let m = Es(u, o, p);
      return p === m && typeof p == "string" && (m = Es(u, o, `${t}${p === "default" ? "" : Fe(p)}`, p)), r === !1 ? m : {
        [r]: m
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Sr
  } : {}, s.filterProps = [t], s;
}
function wS(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const AS = {
  m: "margin",
  p: "padding"
}, NS = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, rd = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, kS = wS((e) => {
  if (e.length > 2)
    if (rd[e])
      e = rd[e];
    else
      return [e];
  const [t, r] = e.split(""), n = AS[t], o = NS[r] || "";
  return Array.isArray(o) ? o.map((s) => n + s) : [n + o];
}), ti = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], ri = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], IS = [...ti, ...ri];
function So(e, t, r, n) {
  var o;
  const s = (o = bn(e, t, !1)) != null ? o : r;
  return typeof s == "number" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), s * i) : Array.isArray(s) ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && (Number.isInteger(i) ? i > s.length - 1 && console.error([`MUI: The value provided (${i}) overflows.`, `The supported values are: ${JSON.stringify(s)}.`, `${i} > ${s.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), s[i]) : typeof s == "function" ? s : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${s}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Nh(e) {
  return So(e, "spacing", 8, "spacing");
}
function $o(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const r = Math.abs(t), n = e(r);
  return t >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function MS(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = $o(t, r), n), {});
}
function jS(e, t, r, n) {
  if (t.indexOf(r) === -1)
    return null;
  const o = kS(r), s = MS(o, n), i = e[r];
  return ar(e, i, s);
}
function kh(e, t) {
  const r = Nh(e.theme);
  return Object.keys(e).map((n) => jS(e, t, n, r)).reduce(Kn, {});
}
function He(e) {
  return kh(e, ti);
}
He.propTypes = process.env.NODE_ENV !== "production" ? ti.reduce((e, t) => (e[t] = Sr, e), {}) : {};
He.filterProps = ti;
function Ge(e) {
  return kh(e, ri);
}
Ge.propTypes = process.env.NODE_ENV !== "production" ? ri.reduce((e, t) => (e[t] = Sr, e), {}) : {};
Ge.filterProps = ri;
process.env.NODE_ENV !== "production" && IS.reduce((e, t) => (e[t] = Sr, e), {});
function DS(e = 8) {
  if (e.mui)
    return e;
  const t = Nh({
    spacing: e
  }), r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((s) => {
    const i = t(s);
    return typeof i == "number" ? `${i}px` : i;
  }).join(" "));
  return r.mui = !0, r;
}
function ni(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((s) => {
    n[s] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, s) => t[s] ? Kn(o, t[s](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function Mt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Bt(e, t) {
  return Ze({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const FS = Bt("border", Mt), LS = Bt("borderTop", Mt), BS = Bt("borderRight", Mt), zS = Bt("borderBottom", Mt), VS = Bt("borderLeft", Mt), US = Bt("borderColor"), qS = Bt("borderTopColor"), WS = Bt("borderRightColor"), YS = Bt("borderBottomColor"), HS = Bt("borderLeftColor"), GS = Bt("outline", Mt), KS = Bt("outlineColor"), oi = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = So(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: $o(t, n)
    });
    return ar(e, e.borderRadius, r);
  }
  return null;
};
oi.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Sr
} : {};
oi.filterProps = ["borderRadius"];
ni(FS, LS, BS, zS, VS, US, qS, WS, YS, HS, oi, GS, KS);
const si = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = So(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: $o(t, n)
    });
    return ar(e, e.gap, r);
  }
  return null;
};
si.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Sr
} : {};
si.filterProps = ["gap"];
const ii = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = So(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: $o(t, n)
    });
    return ar(e, e.columnGap, r);
  }
  return null;
};
ii.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Sr
} : {};
ii.filterProps = ["columnGap"];
const ai = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = So(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: $o(t, n)
    });
    return ar(e, e.rowGap, r);
  }
  return null;
};
ai.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Sr
} : {};
ai.filterProps = ["rowGap"];
const QS = Ze({
  prop: "gridColumn"
}), XS = Ze({
  prop: "gridRow"
}), JS = Ze({
  prop: "gridAutoFlow"
}), ZS = Ze({
  prop: "gridAutoColumns"
}), e$ = Ze({
  prop: "gridAutoRows"
}), t$ = Ze({
  prop: "gridTemplateColumns"
}), r$ = Ze({
  prop: "gridTemplateRows"
}), n$ = Ze({
  prop: "gridTemplateAreas"
}), o$ = Ze({
  prop: "gridArea"
});
ni(si, ii, ai, QS, XS, JS, ZS, e$, t$, r$, n$, o$);
function fn(e, t) {
  return t === "grey" ? t : e;
}
const s$ = Ze({
  prop: "color",
  themeKey: "palette",
  transform: fn
}), i$ = Ze({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: fn
}), a$ = Ze({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: fn
});
ni(s$, i$, a$);
function $t(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const c$ = Ze({
  prop: "width",
  transform: $t
}), Mc = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var n, o;
      const s = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[r]) || Ic[r];
      return s ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${s}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: s
      } : {
        maxWidth: $t(r)
      };
    };
    return ar(e, e.maxWidth, t);
  }
  return null;
};
Mc.filterProps = ["maxWidth"];
const l$ = Ze({
  prop: "minWidth",
  transform: $t
}), u$ = Ze({
  prop: "height",
  transform: $t
}), d$ = Ze({
  prop: "maxHeight",
  transform: $t
}), f$ = Ze({
  prop: "minHeight",
  transform: $t
});
Ze({
  prop: "size",
  cssProperty: "width",
  transform: $t
});
Ze({
  prop: "size",
  cssProperty: "height",
  transform: $t
});
const p$ = Ze({
  prop: "boxSizing"
});
ni(c$, Mc, l$, u$, d$, f$, p$);
const h$ = {
  // borders
  border: {
    themeKey: "borders",
    transform: Mt
  },
  borderTop: {
    themeKey: "borders",
    transform: Mt
  },
  borderRight: {
    themeKey: "borders",
    transform: Mt
  },
  borderBottom: {
    themeKey: "borders",
    transform: Mt
  },
  borderLeft: {
    themeKey: "borders",
    transform: Mt
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Mt
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: oi
  },
  // palette
  color: {
    themeKey: "palette",
    transform: fn
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: fn
  },
  backgroundColor: {
    themeKey: "palette",
    transform: fn
  },
  // spacing
  p: {
    style: Ge
  },
  pt: {
    style: Ge
  },
  pr: {
    style: Ge
  },
  pb: {
    style: Ge
  },
  pl: {
    style: Ge
  },
  px: {
    style: Ge
  },
  py: {
    style: Ge
  },
  padding: {
    style: Ge
  },
  paddingTop: {
    style: Ge
  },
  paddingRight: {
    style: Ge
  },
  paddingBottom: {
    style: Ge
  },
  paddingLeft: {
    style: Ge
  },
  paddingX: {
    style: Ge
  },
  paddingY: {
    style: Ge
  },
  paddingInline: {
    style: Ge
  },
  paddingInlineStart: {
    style: Ge
  },
  paddingInlineEnd: {
    style: Ge
  },
  paddingBlock: {
    style: Ge
  },
  paddingBlockStart: {
    style: Ge
  },
  paddingBlockEnd: {
    style: Ge
  },
  m: {
    style: He
  },
  mt: {
    style: He
  },
  mr: {
    style: He
  },
  mb: {
    style: He
  },
  ml: {
    style: He
  },
  mx: {
    style: He
  },
  my: {
    style: He
  },
  margin: {
    style: He
  },
  marginTop: {
    style: He
  },
  marginRight: {
    style: He
  },
  marginBottom: {
    style: He
  },
  marginLeft: {
    style: He
  },
  marginX: {
    style: He
  },
  marginY: {
    style: He
  },
  marginInline: {
    style: He
  },
  marginInlineStart: {
    style: He
  },
  marginInlineEnd: {
    style: He
  },
  marginBlock: {
    style: He
  },
  marginBlockStart: {
    style: He
  },
  marginBlockEnd: {
    style: He
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: si
  },
  rowGap: {
    style: ai
  },
  columnGap: {
    style: ii
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: $t
  },
  maxWidth: {
    style: Mc
  },
  minWidth: {
    transform: $t
  },
  height: {
    transform: $t
  },
  maxHeight: {
    transform: $t
  },
  minHeight: {
    transform: $t
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, Ro = h$;
function m$(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function y$(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ih() {
  function e(r, n, o, s) {
    const i = {
      [r]: n,
      theme: o
    }, a = s[r];
    if (!a)
      return {
        [r]: n
      };
    const {
      cssProperty: d = r,
      themeKey: u,
      transform: f,
      style: p
    } = a;
    if (n == null)
      return null;
    if (u === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const m = bn(o, u) || {};
    return p ? p(i) : ar(i, n, (h) => {
      let c = Es(m, f, h);
      return h === c && typeof h == "string" && (c = Es(m, f, `${r}${h === "default" ? "" : Fe(h)}`, h)), d === !1 ? c : {
        [d]: c
      };
    });
  }
  function t(r) {
    var n;
    const {
      sx: o,
      theme: s = {},
      nested: i
    } = r || {};
    if (!o)
      return null;
    const a = (n = s.unstable_sxConfig) != null ? n : Ro;
    function d(u) {
      let f = u;
      if (typeof u == "function")
        f = u(s);
      else if (typeof u != "object")
        return u;
      if (!f)
        return null;
      const p = _S(s.breakpoints), m = Object.keys(p);
      let g = p;
      return Object.keys(f).forEach((h) => {
        const c = y$(f[h], s);
        if (c != null)
          if (typeof c == "object")
            if (a[h])
              g = Kn(g, e(h, c, s, a));
            else {
              const b = ar({
                theme: s
              }, c, (x) => ({
                [h]: x
              }));
              m$(b, c) ? g[h] = t({
                sx: c,
                theme: s,
                nested: !0
              }) : g = Kn(g, b);
            }
          else
            g = Kn(g, e(h, c, s, a));
      }), !i && s.modularCssLayers ? {
        "@layer sx": td(m, g)
      } : td(m, g);
    }
    return Array.isArray(o) ? o.map(d) : d(o);
  }
  return t;
}
const Mh = Ih();
Mh.filterProps = ["sx"];
const ci = Mh;
function jh(e, t) {
  const r = this;
  return r.vars && typeof r.getColorSchemeSelector == "function" ? {
    [r.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : r.palette.mode === e ? t : {};
}
const g$ = ["breakpoints", "palette", "spacing", "shape"];
function jc(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: s = {}
  } = e, i = lt(e, g$), a = Ah(r), d = DS(o);
  let u = rr({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: ee({
      mode: "light"
    }, n),
    spacing: d,
    shape: ee({}, RS, s)
  }, i);
  return u.applyStyles = jh, u = t.reduce((f, p) => rr(f, p), u), u.unstable_sxConfig = ee({}, Ro, i == null ? void 0 : i.unstable_sxConfig), u.unstable_sx = function(p) {
    return ci({
      sx: p,
      theme: this
    });
  }, u;
}
const b$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: jc,
  private_createBreakpoints: Ah,
  unstable_applyStyles: jh
}, Symbol.toStringTag, { value: "Module" }));
function v$(e) {
  return Object.keys(e).length === 0;
}
function x$(e = null) {
  const t = E.useContext(Co);
  return !t || v$(t) ? e : t;
}
const E$ = jc();
function T$(e = E$) {
  return x$(e);
}
const C$ = ["sx"], S$ = (e) => {
  var t, r;
  const n = {
    systemProps: {},
    otherProps: {}
  }, o = (t = e == null || (r = e.theme) == null ? void 0 : r.unstable_sxConfig) != null ? t : Ro;
  return Object.keys(e).forEach((s) => {
    o[s] ? n.systemProps[s] = e[s] : n.otherProps[s] = e[s];
  }), n;
};
function Dc(e) {
  const {
    sx: t
  } = e, r = lt(e, C$), {
    systemProps: n,
    otherProps: o
  } = S$(r);
  let s;
  return Array.isArray(t) ? s = [n, ...t] : typeof t == "function" ? s = (...i) => {
    const a = t(...i);
    return br(a) ? ee({}, n, a) : n;
  } : s = ee({}, n, t), ee({}, o, {
    sx: s
  });
}
const $$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ci,
  extendSxProp: Dc,
  unstable_createStyleFunctionSx: Ih,
  unstable_defaultSxConfig: Ro
}, Symbol.toStringTag, { value: "Module" })), nd = (e) => e, R$ = () => {
  let e = nd;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = nd;
    }
  };
}, O$ = R$(), Dh = O$;
function Fh(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (r = Fh(e[t])) && (n && (n += " "), n += r);
    } else
      for (r in e)
        e[r] && (n && (n += " "), n += r);
  return n;
}
function nt() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
    (e = arguments[r]) && (t = Fh(e)) && (n && (n += " "), n += t);
  return n;
}
const _$ = ["className", "component"];
function P$(e = {}) {
  const {
    themeId: t,
    defaultTheme: r,
    defaultClassName: n = "MuiBox-root",
    generateClassName: o
  } = e, s = Ph("div", {
    shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as"
  })(ci);
  return /* @__PURE__ */ E.forwardRef(function(d, u) {
    const f = T$(r), p = Dc(d), {
      className: m,
      component: g = "div"
    } = p, h = lt(p, _$);
    return /* @__PURE__ */ v.jsx(s, ee({
      as: g,
      ref: u,
      className: nt(m, o ? o(n) : n),
      theme: t && f[t] || f
    }, h));
  });
}
const w$ = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function lr(e, t, r = "Mui") {
  const n = w$[t];
  return n ? `${r}-${n}` : `${Dh.generate(e)}-${t}`;
}
function ur(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = lr(e, o, r);
  }), n;
}
var La = { exports: {} }, Ne = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var od;
function A$() {
  if (od)
    return Ne;
  od = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), i = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.view_transition"), g = Symbol.for("react.client.reference");
  function h(c) {
    if (typeof c == "object" && c !== null) {
      var b = c.$$typeof;
      switch (b) {
        case e:
          switch (c = c.type, c) {
            case r:
            case o:
            case n:
            case d:
            case u:
            case m:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case i:
                case a:
                case p:
                case f:
                  return c;
                case s:
                  return c;
                default:
                  return b;
              }
          }
        case t:
          return b;
      }
    }
  }
  return Ne.ContextConsumer = s, Ne.ContextProvider = i, Ne.Element = e, Ne.ForwardRef = a, Ne.Fragment = r, Ne.Lazy = p, Ne.Memo = f, Ne.Portal = t, Ne.Profiler = o, Ne.StrictMode = n, Ne.Suspense = d, Ne.SuspenseList = u, Ne.isContextConsumer = function(c) {
    return h(c) === s;
  }, Ne.isContextProvider = function(c) {
    return h(c) === i;
  }, Ne.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === e;
  }, Ne.isForwardRef = function(c) {
    return h(c) === a;
  }, Ne.isFragment = function(c) {
    return h(c) === r;
  }, Ne.isLazy = function(c) {
    return h(c) === p;
  }, Ne.isMemo = function(c) {
    return h(c) === f;
  }, Ne.isPortal = function(c) {
    return h(c) === t;
  }, Ne.isProfiler = function(c) {
    return h(c) === o;
  }, Ne.isStrictMode = function(c) {
    return h(c) === n;
  }, Ne.isSuspense = function(c) {
    return h(c) === d;
  }, Ne.isSuspenseList = function(c) {
    return h(c) === u;
  }, Ne.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === r || c === o || c === n || c === d || c === u || typeof c == "object" && c !== null && (c.$$typeof === p || c.$$typeof === f || c.$$typeof === i || c.$$typeof === s || c.$$typeof === a || c.$$typeof === g || c.getModuleId !== void 0);
  }, Ne.typeOf = h, Ne;
}
var ke = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sd;
function N$() {
  return sd || (sd = 1, process.env.NODE_ENV !== "production" && function() {
    function e(c) {
      if (typeof c == "object" && c !== null) {
        var b = c.$$typeof;
        switch (b) {
          case t:
            switch (c = c.type, c) {
              case n:
              case s:
              case o:
              case u:
              case f:
              case g:
                return c;
              default:
                switch (c = c && c.$$typeof, c) {
                  case a:
                  case d:
                  case m:
                  case p:
                    return c;
                  case i:
                    return c;
                  default:
                    return b;
                }
            }
          case r:
            return b;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), a = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.view_transition"), h = Symbol.for("react.client.reference");
    ke.ContextConsumer = i, ke.ContextProvider = a, ke.Element = t, ke.ForwardRef = d, ke.Fragment = n, ke.Lazy = m, ke.Memo = p, ke.Portal = r, ke.Profiler = s, ke.StrictMode = o, ke.Suspense = u, ke.SuspenseList = f, ke.isContextConsumer = function(c) {
      return e(c) === i;
    }, ke.isContextProvider = function(c) {
      return e(c) === a;
    }, ke.isElement = function(c) {
      return typeof c == "object" && c !== null && c.$$typeof === t;
    }, ke.isForwardRef = function(c) {
      return e(c) === d;
    }, ke.isFragment = function(c) {
      return e(c) === n;
    }, ke.isLazy = function(c) {
      return e(c) === m;
    }, ke.isMemo = function(c) {
      return e(c) === p;
    }, ke.isPortal = function(c) {
      return e(c) === r;
    }, ke.isProfiler = function(c) {
      return e(c) === s;
    }, ke.isStrictMode = function(c) {
      return e(c) === o;
    }, ke.isSuspense = function(c) {
      return e(c) === u;
    }, ke.isSuspenseList = function(c) {
      return e(c) === f;
    }, ke.isValidElementType = function(c) {
      return typeof c == "string" || typeof c == "function" || c === n || c === s || c === o || c === u || c === f || typeof c == "object" && c !== null && (c.$$typeof === m || c.$$typeof === p || c.$$typeof === a || c.$$typeof === i || c.$$typeof === d || c.$$typeof === h || c.getModuleId !== void 0);
    }, ke.typeOf = e;
  }()), ke;
}
process.env.NODE_ENV === "production" ? La.exports = A$() : La.exports = N$();
var id = La.exports;
const k$ = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Lh(e) {
  const t = `${e}`.match(k$);
  return t && t[1] || "";
}
function Bh(e, t = "") {
  return e.displayName || e.name || Lh(e) || t;
}
function ad(e, t, r) {
  const n = Bh(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function I$(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Bh(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case id.ForwardRef:
          return ad(e, e.render, "ForwardRef");
        case id.Memo:
          return ad(e, e.type, "memo");
        default:
          return;
      }
  }
}
const M$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: I$,
  getFunctionName: Lh
}, Symbol.toStringTag, { value: "Module" }));
function Ts(e, t) {
  const r = ee({}, t);
  return Object.keys(e).forEach((n) => {
    if (n.toString().match(/^(components|slots)$/))
      r[n] = ee({}, e[n], r[n]);
    else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[n] || {}, s = t[n];
      r[n] = {}, !s || !Object.keys(s) ? r[n] = o : !o || !Object.keys(o) ? r[n] = s : (r[n] = ee({}, s), Object.keys(o).forEach((i) => {
        r[n][i] = Ts(o[i], s[i]);
      }));
    } else
      r[n] === void 0 && (r[n] = e[n]);
  }), r;
}
const j$ = typeof window < "u" ? E.useLayoutEffect : E.useEffect, D$ = j$;
function F$(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
const L$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: F$
}, Symbol.toStringTag, { value: "Module" }));
function zh(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function B$(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function z$(e, t, r, n, o) {
  const s = e[t], i = o || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  return typeof s == "function" && !B$(s) && (a = "Did you accidentally provide a plain function component instead?"), a !== void 0 ? new Error(`Invalid ${n} \`${i}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Vh = zh(C.elementType, z$), V$ = C.oneOfType([C.func, C.object]), U$ = V$;
function q$(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Lo(e) {
  const t = E.useRef(e);
  return D$(() => {
    t.current = e;
  }), E.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function Cs(...e) {
  return E.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      q$(r, t);
    });
  }, e);
}
const cd = {};
function W$(e, t) {
  const r = E.useRef(cd);
  return r.current === cd && (r.current = e(t)), r;
}
const Y$ = [];
function H$(e) {
  E.useEffect(e, Y$);
}
class li {
  constructor() {
    this.currentId = null, this.clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new li();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
}
function G$() {
  const e = W$(li.create).current;
  return H$(e.disposeEffect), e;
}
let ui = !0, Ba = !1;
const K$ = new li(), Q$ = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function X$(e) {
  const {
    type: t,
    tagName: r
  } = e;
  return !!(r === "INPUT" && Q$[t] && !e.readOnly || r === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function J$(e) {
  e.metaKey || e.altKey || e.ctrlKey || (ui = !0);
}
function Xi() {
  ui = !1;
}
function Z$() {
  this.visibilityState === "hidden" && Ba && (ui = !0);
}
function eR(e) {
  e.addEventListener("keydown", J$, !0), e.addEventListener("mousedown", Xi, !0), e.addEventListener("pointerdown", Xi, !0), e.addEventListener("touchstart", Xi, !0), e.addEventListener("visibilitychange", Z$, !0);
}
function tR(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return ui || X$(t);
}
function Uh() {
  const e = E.useCallback((o) => {
    o != null && eR(o.ownerDocument);
  }, []), t = E.useRef(!1);
  function r() {
    return t.current ? (Ba = !0, K$.start(100, () => {
      Ba = !1;
    }), t.current = !1, !0) : !1;
  }
  function n(o) {
    return tR(o) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: n,
    onBlur: r,
    ref: e
  };
}
function rR(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function nR(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const oR = Number.isInteger || nR;
function qh(e, t, r, n) {
  const o = e[t];
  if (o == null || !oR(o)) {
    const s = rR(o);
    return new RangeError(`Invalid ${n} \`${t}\` of type \`${s}\` supplied to \`${r}\`, expected \`integer\`.`);
  }
  return null;
}
function Wh(e, t, ...r) {
  return e[t] === void 0 ? null : qh(e, t, ...r);
}
function za() {
  return null;
}
Wh.isRequired = qh;
za.isRequired = za;
const Ji = process.env.NODE_ENV === "production" ? za : Wh;
function Dr(e, t, r = void 0) {
  const n = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (o) => {
      n[o] = e[o].reduce((s, i) => {
        if (i) {
          const a = t(i);
          a !== "" && s.push(a), r && r[i] && s.push(r[i]);
        }
        return s;
      }, []).join(" ");
    }
  ), n;
}
function sR(e) {
  return typeof e == "string";
}
function iR(e, t, r) {
  return e === void 0 || sR(e) ? t : ee({}, t, {
    ownerState: ee({}, t.ownerState, r)
  });
}
function aR(e, t = []) {
  if (e === void 0)
    return {};
  const r = {};
  return Object.keys(e).filter((n) => n.match(/^on[A-Z]/) && typeof e[n] == "function" && !t.includes(n)).forEach((n) => {
    r[n] = e[n];
  }), r;
}
function ld(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((r) => !(r.match(/^on[A-Z]/) && typeof e[r] == "function")).forEach((r) => {
    t[r] = e[r];
  }), t;
}
function cR(e) {
  const {
    getSlotProps: t,
    additionalProps: r,
    externalSlotProps: n,
    externalForwardedProps: o,
    className: s
  } = e;
  if (!t) {
    const g = nt(r == null ? void 0 : r.className, s, o == null ? void 0 : o.className, n == null ? void 0 : n.className), h = ee({}, r == null ? void 0 : r.style, o == null ? void 0 : o.style, n == null ? void 0 : n.style), c = ee({}, r, o, n);
    return g.length > 0 && (c.className = g), Object.keys(h).length > 0 && (c.style = h), {
      props: c,
      internalRef: void 0
    };
  }
  const i = aR(ee({}, o, n)), a = ld(n), d = ld(o), u = t(i), f = nt(u == null ? void 0 : u.className, r == null ? void 0 : r.className, s, o == null ? void 0 : o.className, n == null ? void 0 : n.className), p = ee({}, u == null ? void 0 : u.style, r == null ? void 0 : r.style, o == null ? void 0 : o.style, n == null ? void 0 : n.style), m = ee({}, u, r, d, a);
  return f.length > 0 && (m.className = f), Object.keys(p).length > 0 && (m.style = p), {
    props: m,
    internalRef: u.ref
  };
}
function lR(e, t, r) {
  return typeof e == "function" ? e(t, r) : e;
}
const uR = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function dR(e) {
  var t;
  const {
    elementType: r,
    externalSlotProps: n,
    ownerState: o,
    skipResolvingSlotProps: s = !1
  } = e, i = lt(e, uR), a = s ? {} : lR(n, o), {
    props: d,
    internalRef: u
  } = cR(ee({}, i, {
    externalSlotProps: a
  })), f = Cs(u, a == null ? void 0 : a.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return iR(r, ee({}, d, {
    ref: f
  }), o);
}
const fR = /* @__PURE__ */ E.createContext(void 0);
process.env.NODE_ENV !== "production" && (C.node, C.object);
function pR(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? Ts(o.defaultProps, n) : !o.styleOverrides && !o.variants ? Ts(o, n) : n;
}
function hR({
  props: e,
  name: t
}) {
  const r = E.useContext(fR);
  return pR({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
function mR(e, t) {
  return ee({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, t);
}
var et = {}, Yh = { exports: {} };
(function(e) {
  function t(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Yh);
var Hh = Yh.exports;
const yR = /* @__PURE__ */ gt(nC), gR = /* @__PURE__ */ gt(L$);
var Gh = Hh;
Object.defineProperty(et, "__esModule", {
  value: !0
});
var Wn = et.alpha = Jh;
et.blend = PR;
et.colorChannel = void 0;
var bR = et.darken = Lc;
et.decomposeColor = Ft;
var ud = et.emphasize = Zh, dd = et.getContrastRatio = SR;
et.getLuminance = Ss;
et.hexToRgb = Kh;
et.hslToRgb = Xh;
var vR = et.lighten = Bc;
et.private_safeAlpha = $R;
et.private_safeColorChannel = void 0;
et.private_safeDarken = RR;
et.private_safeEmphasize = _R;
et.private_safeLighten = OR;
et.recomposeColor = Rn;
et.rgbToHex = CR;
var fd = Gh(yR), xR = Gh(gR);
function Fc(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), (0, xR.default)(e, t, r);
}
function Kh(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function ER(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function Ft(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Ft(Kh(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(r) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, fd.default)(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, fd.default)(10, o));
  } else
    n = n.split(",");
  return n = n.map((s) => parseFloat(s)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const Qh = (e) => {
  const t = Ft(e);
  return t.values.slice(0, 3).map((r, n) => t.type.indexOf("hsl") !== -1 && n !== 0 ? `${r}%` : r).join(" ");
};
et.colorChannel = Qh;
const TR = (e, t) => {
  try {
    return Qh(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
et.private_safeColorChannel = TR;
function Rn(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.indexOf("rgb") !== -1 ? n = n.map((o, s) => s < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.indexOf("color") !== -1 ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function CR(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: t
  } = Ft(e);
  return `#${t.map((r, n) => ER(n === 3 ? Math.round(255 * r) : r)).join("")}`;
}
function Xh(e) {
  e = Ft(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, s = n * Math.min(o, 1 - o), i = (u, f = (u + r / 30) % 12) => o - s * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let a = "rgb";
  const d = [Math.round(i(0) * 255), Math.round(i(8) * 255), Math.round(i(4) * 255)];
  return e.type === "hsla" && (a += "a", d.push(t[3])), Rn({
    type: a,
    values: d
  });
}
function Ss(e) {
  e = Ft(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Ft(Xh(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function SR(e, t) {
  const r = Ss(e), n = Ss(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Jh(e, t) {
  return e = Ft(e), t = Fc(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Rn(e);
}
function $R(e, t, r) {
  try {
    return Jh(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Lc(e, t) {
  if (e = Ft(e), t = Fc(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return Rn(e);
}
function RR(e, t, r) {
  try {
    return Lc(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Bc(e, t) {
  if (e = Ft(e), t = Fc(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return Rn(e);
}
function OR(e, t, r) {
  try {
    return Bc(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Zh(e, t = 0.15) {
  return Ss(e) > 0.5 ? Lc(e, t) : Bc(e, t);
}
function _R(e, t, r) {
  try {
    return Zh(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function PR(e, t, r, n = 1) {
  const o = (d, u) => Math.round((d ** (1 / n) * (1 - r) + u ** (1 / n) * r) ** n), s = Ft(e), i = Ft(t), a = [o(s.values[0], i.values[0]), o(s.values[1], i.values[1]), o(s.values[2], i.values[2])];
  return Rn({
    type: "rgb",
    values: a
  });
}
const wR = {
  black: "#000",
  white: "#fff"
}, lo = wR, AR = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, NR = AR, kR = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, Kr = kR, IR = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, Qr = IR, MR = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, Fn = MR, jR = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, Xr = jR, DR = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, Jr = DR, FR = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, Zr = FR, LR = ["mode", "contrastThreshold", "tonalOffset"], pd = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: lo.white,
    default: lo.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, Zi = {
  text: {
    primary: lo.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: lo.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function hd(e, t, r, n) {
  const o = n.light || n, s = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = vR(e.main, o) : t === "dark" && (e.dark = bR(e.main, s)));
}
function BR(e = "light") {
  return e === "dark" ? {
    main: Xr[200],
    light: Xr[50],
    dark: Xr[400]
  } : {
    main: Xr[700],
    light: Xr[400],
    dark: Xr[800]
  };
}
function zR(e = "light") {
  return e === "dark" ? {
    main: Kr[200],
    light: Kr[50],
    dark: Kr[400]
  } : {
    main: Kr[500],
    light: Kr[300],
    dark: Kr[700]
  };
}
function VR(e = "light") {
  return e === "dark" ? {
    main: Qr[500],
    light: Qr[300],
    dark: Qr[700]
  } : {
    main: Qr[700],
    light: Qr[400],
    dark: Qr[800]
  };
}
function UR(e = "light") {
  return e === "dark" ? {
    main: Jr[400],
    light: Jr[300],
    dark: Jr[700]
  } : {
    main: Jr[700],
    light: Jr[500],
    dark: Jr[900]
  };
}
function qR(e = "light") {
  return e === "dark" ? {
    main: Zr[400],
    light: Zr[300],
    dark: Zr[700]
  } : {
    main: Zr[800],
    light: Zr[500],
    dark: Zr[900]
  };
}
function WR(e = "light") {
  return e === "dark" ? {
    main: Fn[400],
    light: Fn[300],
    dark: Fn[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Fn[500],
    dark: Fn[900]
  };
}
function YR(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2
  } = e, o = lt(e, LR), s = e.primary || BR(t), i = e.secondary || zR(t), a = e.error || VR(t), d = e.info || UR(t), u = e.success || qR(t), f = e.warning || WR(t);
  function p(c) {
    const b = dd(c, Zi.text.primary) >= r ? Zi.text.primary : pd.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const x = dd(c, b);
      x < 3 && console.error([`MUI: The contrast ratio of ${x}:1 for ${b} on ${c}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return b;
  }
  const m = ({
    color: c,
    name: b,
    mainShade: x = 500,
    lightShade: w = 300,
    darkShade: $ = 700
  }) => {
    if (c = ee({}, c), !c.main && c[x] && (c.main = c[x]), !c.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${b ? ` (${b})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${x}\` property.` : so(11, b ? ` (${b})` : "", x));
    if (typeof c.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${b ? ` (${b})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(c.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : so(12, b ? ` (${b})` : "", JSON.stringify(c.main)));
    return hd(c, "light", w, n), hd(c, "dark", $, n), c.contrastText || (c.contrastText = p(c.main)), c;
  }, g = {
    dark: Zi,
    light: pd
  };
  return process.env.NODE_ENV !== "production" && (g[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), rr(ee({
    // A collection of common colors.
    common: ee({}, lo),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: m({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: m({
      color: i,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: m({
      color: a,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: m({
      color: f,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: m({
      color: d,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: m({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: NR,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: m,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, g[t]), o);
}
const HR = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function GR(e) {
  return Math.round(e * 1e5) / 1e5;
}
const md = {
  textTransform: "uppercase"
}, yd = '"Roboto", "Helvetica", "Arial", sans-serif';
function KR(e, t) {
  const r = typeof t == "function" ? t(e) : t, {
    fontFamily: n = yd,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: s = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: d = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: p
  } = r, m = lt(r, HR);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const g = o / 14, h = p || ((x) => `${x / u * g}rem`), c = (x, w, $, S, y) => ee({
    fontFamily: n,
    fontWeight: x,
    fontSize: h(w),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: $
  }, n === yd ? {
    letterSpacing: `${GR(S / w)}em`
  } : {}, y, f), b = {
    h1: c(s, 96, 1.167, -1.5),
    h2: c(s, 60, 1.2, -0.5),
    h3: c(i, 48, 1.167, 0),
    h4: c(i, 34, 1.235, 0.25),
    h5: c(i, 24, 1.334, 0),
    h6: c(a, 20, 1.6, 0.15),
    subtitle1: c(i, 16, 1.75, 0.15),
    subtitle2: c(a, 14, 1.57, 0.1),
    body1: c(i, 16, 1.5, 0.15),
    body2: c(i, 14, 1.43, 0.15),
    button: c(a, 14, 1.75, 0.4, md),
    caption: c(i, 12, 1.66, 0.4),
    overline: c(i, 12, 2.66, 1, md),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return rr(ee({
    htmlFontSize: u,
    pxToRem: h,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: s,
    fontWeightRegular: i,
    fontWeightMedium: a,
    fontWeightBold: d
  }, b), m, {
    clone: !1
    // No need to clone deep
  });
}
const QR = 0.2, XR = 0.14, JR = 0.12;
function Be(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${QR})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${XR})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${JR})`].join(",");
}
const ZR = ["none", Be(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Be(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Be(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Be(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Be(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Be(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Be(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Be(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Be(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Be(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Be(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Be(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Be(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Be(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Be(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Be(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Be(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Be(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Be(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Be(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Be(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Be(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Be(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Be(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], eO = ZR, tO = ["duration", "easing", "delay"], rO = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, nO = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function gd(e) {
  return `${Math.round(e)}ms`;
}
function oO(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function sO(e) {
  const t = ee({}, rO, e.easing), r = ee({}, nO, e.duration);
  return ee({
    getAutoHeightDuration: oO,
    create: (o = ["all"], s = {}) => {
      const {
        duration: i = r.standard,
        easing: a = t.easeInOut,
        delay: d = 0
      } = s, u = lt(s, tO);
      if (process.env.NODE_ENV !== "production") {
        const f = (m) => typeof m == "string", p = (m) => !isNaN(parseFloat(m));
        !f(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !p(i) && !f(i) && console.error(`MUI: Argument "duration" must be a number or a string but found ${i}.`), f(a) || console.error('MUI: Argument "easing" must be a string.'), !p(d) && !f(d) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((f) => `${f} ${typeof i == "string" ? i : gd(i)} ${a} ${typeof d == "string" ? d : gd(d)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: r
  });
}
const iO = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, aO = iO, cO = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function di(e = {}, ...t) {
  const {
    mixins: r = {},
    palette: n = {},
    transitions: o = {},
    typography: s = {}
  } = e, i = lt(e, cO);
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateCssVars` is the closest identifier for checking that the `options` is a result of `extendTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateCssVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : so(18));
  const a = YR(n), d = jc(e);
  let u = rr(d, {
    mixins: mR(d.breakpoints, r),
    palette: a,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: eO.slice(),
    typography: KR(a, s),
    transitions: sO(o),
    zIndex: ee({}, aO)
  });
  if (u = rr(u, i), u = t.reduce((f, p) => rr(f, p), u), process.env.NODE_ENV !== "production") {
    const f = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], p = (m, g) => {
      let h;
      for (h in m) {
        const c = m[h];
        if (f.indexOf(h) !== -1 && Object.keys(c).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const b = lr("", h);
            console.error([`MUI: The \`${g}\` component increases the CSS specificity of the \`${h}\` internal state.`, "You can not override it like this: ", JSON.stringify(m, null, 2), "", `Instead, you need to use the '&.${b}' syntax:`, JSON.stringify({
              root: {
                [`&.${b}`]: c
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          m[h] = {};
        }
      }
    };
    Object.keys(u.components).forEach((m) => {
      const g = u.components[m].styleOverrides;
      g && m.indexOf("Mui") === 0 && p(g, m);
    });
  }
  return u.unstable_sxConfig = ee({}, Ro, i == null ? void 0 : i.unstable_sxConfig), u.unstable_sx = function(p) {
    return ci({
      sx: p,
      theme: this
    });
  }, u;
}
const lO = di(), uO = lO;
var Oo = {}, ea = { exports: {} }, bd;
function dO() {
  return bd || (bd = 1, function(e) {
    function t(r, n) {
      if (r == null)
        return {};
      var o = {};
      for (var s in r)
        if ({}.hasOwnProperty.call(r, s)) {
          if (n.indexOf(s) !== -1)
            continue;
          o[s] = r[s];
        }
      return o;
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(ea)), ea.exports;
}
const fO = /* @__PURE__ */ gt(ES), pO = /* @__PURE__ */ gt(TS), hO = /* @__PURE__ */ gt(PS), mO = /* @__PURE__ */ gt(M$), yO = /* @__PURE__ */ gt(b$), gO = /* @__PURE__ */ gt($$);
var On = Hh;
Object.defineProperty(Oo, "__esModule", {
  value: !0
});
var bO = Oo.default = NO;
Oo.shouldForwardProp = Zo;
Oo.systemDefaultTheme = void 0;
var At = On(Sh()), Va = On(dO()), $s = OO(fO), vO = pO, xO = On(hO), EO = On(mO), TO = On(yO), CO = On(gO);
const SO = ["ownerState"], $O = ["variants"], RO = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function em(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (em = function(n) {
    return n ? r : t;
  })(e);
}
function OO(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = em(t);
  if (r && r.has(e))
    return r.get(e);
  var n = { __proto__: null }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var s in e)
    if (s !== "default" && Object.prototype.hasOwnProperty.call(e, s)) {
      var i = o ? Object.getOwnPropertyDescriptor(e, s) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, s, i) : n[s] = e[s];
    }
  return n.default = e, r && r.set(e, n), n;
}
function _O(e) {
  return Object.keys(e).length === 0;
}
function PO(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Zo(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function vd(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
const wO = Oo.systemDefaultTheme = (0, TO.default)(), xd = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Bo({
  defaultTheme: e,
  theme: t,
  themeId: r
}) {
  return _O(t) ? e : t[r] || t;
}
function AO(e) {
  return e ? (t, r) => r[e] : null;
}
function es(e, t, r) {
  let {
    ownerState: n
  } = t, o = (0, Va.default)(t, SO);
  const s = typeof e == "function" ? e((0, At.default)({
    ownerState: n
  }, o)) : e;
  if (Array.isArray(s))
    return s.flatMap((i) => es(i, (0, At.default)({
      ownerState: n
    }, o), r));
  if (s && typeof s == "object" && Array.isArray(s.variants)) {
    const {
      variants: i = []
    } = s;
    let d = (0, Va.default)(s, $O);
    return i.forEach((u) => {
      let f = !0;
      if (typeof u.props == "function" ? f = u.props((0, At.default)({
        ownerState: n
      }, o, n)) : Object.keys(u.props).forEach((p) => {
        (n == null ? void 0 : n[p]) !== u.props[p] && o[p] !== u.props[p] && (f = !1);
      }), f) {
        Array.isArray(d) || (d = [d]);
        const p = typeof u.style == "function" ? u.style((0, At.default)({
          ownerState: n
        }, o, n)) : u.style;
        d.push(r ? vd((0, $s.internal_serializeStyles)(p), r) : p);
      }
    }), d;
  }
  return r ? vd((0, $s.internal_serializeStyles)(s), r) : s;
}
function NO(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = wO,
    rootShouldForwardProp: n = Zo,
    slotShouldForwardProp: o = Zo
  } = e, s = (i) => (0, CO.default)((0, At.default)({}, i, {
    theme: Bo((0, At.default)({}, i, {
      defaultTheme: r,
      themeId: t
    }))
  }));
  return s.__mui_systemSx = !0, (i, a = {}) => {
    (0, $s.internal_processStyles)(i, (P) => P.filter((O) => !(O != null && O.__mui_systemSx)));
    const {
      name: d,
      slot: u,
      skipVariantsResolver: f,
      skipSx: p,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: m = AO(xd(u))
    } = a, g = (0, Va.default)(a, RO), h = d && d.startsWith("Mui") || u ? "components" : "custom", c = f !== void 0 ? f : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), b = p || !1;
    let x;
    process.env.NODE_ENV !== "production" && d && (x = `${d}-${xd(u || "Root")}`);
    let w = Zo;
    u === "Root" || u === "root" ? w = n : u ? w = o : PO(i) && (w = void 0);
    const $ = (0, $s.default)(i, (0, At.default)({
      shouldForwardProp: w,
      label: x
    }, g)), S = (P) => typeof P == "function" && P.__emotion_real !== P || (0, vO.isPlainObject)(P) ? (O) => {
      const I = Bo({
        theme: O.theme,
        defaultTheme: r,
        themeId: t
      });
      return es(P, (0, At.default)({}, O, {
        theme: I
      }), I.modularCssLayers ? h : void 0);
    } : P, y = (P, ...O) => {
      let I = S(P);
      const F = O ? O.map(S) : [];
      d && m && F.push((q) => {
        const L = Bo((0, At.default)({}, q, {
          defaultTheme: r,
          themeId: t
        }));
        if (!L.components || !L.components[d] || !L.components[d].styleOverrides)
          return null;
        const j = L.components[d].styleOverrides, ne = {};
        return Object.entries(j).forEach(([z, te]) => {
          ne[z] = es(te, (0, At.default)({}, q, {
            theme: L
          }), L.modularCssLayers ? "theme" : void 0);
        }), m(q, ne);
      }), d && !c && F.push((q) => {
        var L;
        const j = Bo((0, At.default)({}, q, {
          defaultTheme: r,
          themeId: t
        })), ne = j == null || (L = j.components) == null || (L = L[d]) == null ? void 0 : L.variants;
        return es({
          variants: ne
        }, (0, At.default)({}, q, {
          theme: j
        }), j.modularCssLayers ? "theme" : void 0);
      }), b || F.push(s);
      const V = F.length - O.length;
      if (Array.isArray(P) && V > 0) {
        const q = new Array(V).fill("");
        I = [...P, ...q], I.raw = [...P.raw, ...q];
      }
      const Q = $(I, ...F);
      if (process.env.NODE_ENV !== "production") {
        let q;
        d && (q = `${d}${(0, xO.default)(u || "")}`), q === void 0 && (q = `Styled(${(0, EO.default)(i)})`), Q.displayName = q;
      }
      return i.muiName && (Q.muiName = i.muiName), Q;
    };
    return $.withConfig && (y.withConfig = $.withConfig), y;
  };
}
function kO(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const IO = (e) => kO(e) && e !== "classes", tm = IO, MO = bO({
  themeId: ah,
  defaultTheme: uO,
  rootShouldForwardProp: tm
}), pt = MO, rm = di({
  palette: {
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#ffffff"
    },
    secondary: {
      main: "#dc004e",
      light: "#ff5983",
      dark: "#9a0036",
      contrastText: "#ffffff"
    },
    success: {
      main: "#2e7d32",
      light: "#4caf50",
      dark: "#1b5e20"
    },
    warning: {
      main: "#ed6c02",
      light: "#ff9800",
      dark: "#e65100"
    },
    error: {
      main: "#d32f2f",
      light: "#ef5350",
      dark: "#c62828"
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff"
    },
    text: {
      primary: "#1a1a1a",
      secondary: "#666666"
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 600
    },
    h6: {
      fontSize: "1.1rem",
      fontWeight: 600
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5
    }
  },
  shape: {
    borderRadius: 8
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
          borderRadius: 8,
          padding: "8px 16px"
        },
        contained: {
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          "&:hover": {
            boxShadow: "0 4px 8px rgba(0,0,0,0.15)"
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          borderRadius: 12,
          border: "1px solid #e0e0e0"
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
        }
      }
    }
  }
});
di({
  ...rm,
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
      light: "#e3f2fd",
      dark: "#42a5f5"
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e"
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0b0b0"
    }
  }
});
process.env.NODE_ENV !== "production" && (C.node, C.object.isRequired);
function $r(e) {
  return hR(e);
}
function jO(e) {
  return lr("MuiSvgIcon", e);
}
ur("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const DO = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], FO = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${Fe(t)}`, `fontSize${Fe(r)}`]
  };
  return Dr(o, jO, n);
}, LO = pt("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${Fe(r.color)}`], t[`fontSize${Fe(r.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var r, n, o, s, i, a, d, u, f, p, m, g, h;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // for example heroicons uses fill="none" and stroke="currentColor"
    fill: t.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (r = e.transitions) == null || (n = r.create) == null ? void 0 : n.call(r, "fill", {
      duration: (o = e.transitions) == null || (o = o.duration) == null ? void 0 : o.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((s = e.typography) == null || (i = s.pxToRem) == null ? void 0 : i.call(s, 20)) || "1.25rem",
      medium: ((a = e.typography) == null || (d = a.pxToRem) == null ? void 0 : d.call(a, 24)) || "1.5rem",
      large: ((u = e.typography) == null || (f = u.pxToRem) == null ? void 0 : f.call(u, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (p = (m = (e.vars || e).palette) == null || (m = m[t.color]) == null ? void 0 : m.main) != null ? p : {
      action: (g = (e.vars || e).palette) == null || (g = g.action) == null ? void 0 : g.active,
      disabled: (h = (e.vars || e).palette) == null || (h = h.action) == null ? void 0 : h.disabled,
      inherit: void 0
    }[t.color]
  };
}), zc = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = $r({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: s,
    color: i = "inherit",
    component: a = "svg",
    fontSize: d = "medium",
    htmlColor: u,
    inheritViewBox: f = !1,
    titleAccess: p,
    viewBox: m = "0 0 24 24"
  } = n, g = lt(n, DO), h = /* @__PURE__ */ E.isValidElement(o) && o.type === "svg", c = ee({}, n, {
    color: i,
    component: a,
    fontSize: d,
    instanceFontSize: t.fontSize,
    inheritViewBox: f,
    viewBox: m,
    hasSvgAsChild: h
  }), b = {};
  f || (b.viewBox = m);
  const x = FO(c);
  return /* @__PURE__ */ v.jsxs(LO, ee({
    as: a,
    className: nt(x.root, s),
    focusable: "false",
    color: u,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: r
  }, b, g, h && o.props, {
    ownerState: c,
    children: [h ? o.props.children : o, p ? /* @__PURE__ */ v.jsx("title", {
      children: p
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (zc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: C.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: C.object,
  /**
   * @ignore
   */
  className: C.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: C.oneOfType([C.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), C.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: C.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: C.oneOfType([C.oneOf(["inherit", "large", "medium", "small"]), C.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: C.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: C.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: C.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: C.oneOfType([C.arrayOf(C.oneOfType([C.func, C.object, C.bool])), C.func, C.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: C.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: C.string
});
zc.muiName = "SvgIcon";
const Ed = zc;
function Vc(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ v.jsx(Ed, ee({
      "data-testid": `${t}Icon`,
      ref: o
    }, n, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = Ed.muiName, /* @__PURE__ */ E.memo(/* @__PURE__ */ E.forwardRef(r));
}
var Ua = { exports: {} }, Ie = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Td;
function BO() {
  if (Td)
    return Ie;
  Td = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), i = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.view_transition"), g = Symbol.for("react.client.reference");
  function h(c) {
    if (typeof c == "object" && c !== null) {
      var b = c.$$typeof;
      switch (b) {
        case e:
          switch (c = c.type, c) {
            case r:
            case o:
            case n:
            case d:
            case u:
            case m:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case i:
                case a:
                case p:
                case f:
                  return c;
                case s:
                  return c;
                default:
                  return b;
              }
          }
        case t:
          return b;
      }
    }
  }
  return Ie.ContextConsumer = s, Ie.ContextProvider = i, Ie.Element = e, Ie.ForwardRef = a, Ie.Fragment = r, Ie.Lazy = p, Ie.Memo = f, Ie.Portal = t, Ie.Profiler = o, Ie.StrictMode = n, Ie.Suspense = d, Ie.SuspenseList = u, Ie.isContextConsumer = function(c) {
    return h(c) === s;
  }, Ie.isContextProvider = function(c) {
    return h(c) === i;
  }, Ie.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === e;
  }, Ie.isForwardRef = function(c) {
    return h(c) === a;
  }, Ie.isFragment = function(c) {
    return h(c) === r;
  }, Ie.isLazy = function(c) {
    return h(c) === p;
  }, Ie.isMemo = function(c) {
    return h(c) === f;
  }, Ie.isPortal = function(c) {
    return h(c) === t;
  }, Ie.isProfiler = function(c) {
    return h(c) === o;
  }, Ie.isStrictMode = function(c) {
    return h(c) === n;
  }, Ie.isSuspense = function(c) {
    return h(c) === d;
  }, Ie.isSuspenseList = function(c) {
    return h(c) === u;
  }, Ie.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === r || c === o || c === n || c === d || c === u || typeof c == "object" && c !== null && (c.$$typeof === p || c.$$typeof === f || c.$$typeof === i || c.$$typeof === s || c.$$typeof === a || c.$$typeof === g || c.getModuleId !== void 0);
  }, Ie.typeOf = h, Ie;
}
var Me = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cd;
function zO() {
  return Cd || (Cd = 1, process.env.NODE_ENV !== "production" && function() {
    function e(c) {
      if (typeof c == "object" && c !== null) {
        var b = c.$$typeof;
        switch (b) {
          case t:
            switch (c = c.type, c) {
              case n:
              case s:
              case o:
              case u:
              case f:
              case g:
                return c;
              default:
                switch (c = c && c.$$typeof, c) {
                  case a:
                  case d:
                  case m:
                  case p:
                    return c;
                  case i:
                    return c;
                  default:
                    return b;
                }
            }
          case r:
            return b;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), a = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.view_transition"), h = Symbol.for("react.client.reference");
    Me.ContextConsumer = i, Me.ContextProvider = a, Me.Element = t, Me.ForwardRef = d, Me.Fragment = n, Me.Lazy = m, Me.Memo = p, Me.Portal = r, Me.Profiler = s, Me.StrictMode = o, Me.Suspense = u, Me.SuspenseList = f, Me.isContextConsumer = function(c) {
      return e(c) === i;
    }, Me.isContextProvider = function(c) {
      return e(c) === a;
    }, Me.isElement = function(c) {
      return typeof c == "object" && c !== null && c.$$typeof === t;
    }, Me.isForwardRef = function(c) {
      return e(c) === d;
    }, Me.isFragment = function(c) {
      return e(c) === n;
    }, Me.isLazy = function(c) {
      return e(c) === m;
    }, Me.isMemo = function(c) {
      return e(c) === p;
    }, Me.isPortal = function(c) {
      return e(c) === r;
    }, Me.isProfiler = function(c) {
      return e(c) === s;
    }, Me.isStrictMode = function(c) {
      return e(c) === o;
    }, Me.isSuspense = function(c) {
      return e(c) === u;
    }, Me.isSuspenseList = function(c) {
      return e(c) === f;
    }, Me.isValidElementType = function(c) {
      return typeof c == "string" || typeof c == "function" || c === n || c === s || c === o || c === u || c === f || typeof c == "object" && c !== null && (c.$$typeof === m || c.$$typeof === p || c.$$typeof === a || c.$$typeof === i || c.$$typeof === d || c.$$typeof === h || c.getModuleId !== void 0);
    }, Me.typeOf = e;
  }()), Me;
}
process.env.NODE_ENV === "production" ? Ua.exports = BO() : Ua.exports = zO();
var VO = Ua.exports;
function qa(e, t) {
  return qa = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, qa(e, t);
}
function UO(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, qa(e, t);
}
const Sd = at.createContext(null);
function qO(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Uc(e, t) {
  var r = function(s) {
    return t && vr(s) ? t(s) : s;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && ef.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function WO(e, t) {
  e = e || {}, t = t || {};
  function r(f) {
    return f in t ? t[f] : e[f];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var s in e)
    s in t ? o.length && (n[s] = o, o = []) : o.push(s);
  var i, a = {};
  for (var d in t) {
    if (n[d])
      for (i = 0; i < n[d].length; i++) {
        var u = n[d][i];
        a[n[d][i]] = r(u);
      }
    a[d] = r(d);
  }
  for (i = 0; i < o.length; i++)
    a[o[i]] = r(o[i]);
  return a;
}
function Ir(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function YO(e, t) {
  return Uc(e.children, function(r) {
    return xr(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: Ir(r, "appear", e),
      enter: Ir(r, "enter", e),
      exit: Ir(r, "exit", e)
    });
  });
}
function HO(e, t, r) {
  var n = Uc(e.children), o = WO(t, n);
  return Object.keys(o).forEach(function(s) {
    var i = o[s];
    if (vr(i)) {
      var a = s in t, d = s in n, u = t[s], f = vr(u) && !u.props.in;
      d && (!a || f) ? o[s] = xr(i, {
        onExited: r.bind(null, i),
        in: !0,
        exit: Ir(i, "exit", e),
        enter: Ir(i, "enter", e)
      }) : !d && a && !f ? o[s] = xr(i, {
        in: !1
      }) : d && a && vr(u) && (o[s] = xr(i, {
        onExited: r.bind(null, i),
        in: u.props.in,
        exit: Ir(i, "exit", e),
        enter: Ir(i, "enter", e)
      }));
    }
  }), o;
}
var GO = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, KO = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, qc = /* @__PURE__ */ function(e) {
  UO(t, e);
  function t(n, o) {
    var s;
    s = e.call(this, n, o) || this;
    var i = s.handleExited.bind(qO(s));
    return s.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: i,
      firstRender: !0
    }, s;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, s) {
    var i = s.children, a = s.handleExited, d = s.firstRender;
    return {
      children: d ? YO(o, a) : HO(o, i, a),
      firstRender: !1
    };
  }, r.handleExited = function(o, s) {
    var i = Uc(this.props.children);
    o.key in i || (o.props.onExited && o.props.onExited(s), this.mounted && this.setState(function(a) {
      var d = ee({}, a.children);
      return delete d[o.key], {
        children: d
      };
    }));
  }, r.render = function() {
    var o = this.props, s = o.component, i = o.childFactory, a = lt(o, ["component", "childFactory"]), d = this.state.contextValue, u = GO(this.state.children).map(i);
    return delete a.appear, delete a.enter, delete a.exit, s === null ? /* @__PURE__ */ at.createElement(Sd.Provider, {
      value: d
    }, u) : /* @__PURE__ */ at.createElement(Sd.Provider, {
      value: d
    }, /* @__PURE__ */ at.createElement(s, a, u));
  }, t;
}(at.Component);
qc.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: C.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: C.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: C.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: C.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: C.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: C.func
} : {};
qc.defaultProps = KO;
const QO = qc;
function nm(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: s,
    rippleSize: i,
    in: a,
    onExited: d,
    timeout: u
  } = e, [f, p] = E.useState(!1), m = nt(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), g = {
    width: i,
    height: i,
    top: -(i / 2) + s,
    left: -(i / 2) + o
  }, h = nt(r.child, f && r.childLeaving, n && r.childPulsate);
  return !a && !f && p(!0), E.useEffect(() => {
    if (!a && d != null) {
      const c = setTimeout(d, u);
      return () => {
        clearTimeout(c);
      };
    }
  }, [d, a, u]), /* @__PURE__ */ v.jsx("span", {
    className: m,
    style: g,
    children: /* @__PURE__ */ v.jsx("span", {
      className: h
    })
  });
}
process.env.NODE_ENV !== "production" && (nm.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: C.object.isRequired,
  className: C.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: C.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: C.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: C.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: C.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: C.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: C.number,
  /**
   * exit delay
   */
  timeout: C.number.isRequired
});
const XO = ur("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), kt = XO, JO = ["center", "classes", "className"];
let fi = (e) => e, $d, Rd, Od, _d;
const Wa = 550, ZO = 80, e_ = $n($d || ($d = fi`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), t_ = $n(Rd || (Rd = fi`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), r_ = $n(Od || (Od = fi`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), n_ = pt("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), o_ = pt(nm, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(_d || (_d = fi`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), kt.rippleVisible, e_, Wa, ({
  theme: e
}) => e.transitions.easing.easeInOut, kt.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, kt.child, kt.childLeaving, t_, Wa, ({
  theme: e
}) => e.transitions.easing.easeInOut, kt.childPulsate, r_, ({
  theme: e
}) => e.transitions.easing.easeInOut), om = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = $r({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: s = {},
    className: i
  } = n, a = lt(n, JO), [d, u] = E.useState([]), f = E.useRef(0), p = E.useRef(null);
  E.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [d]);
  const m = E.useRef(!1), g = G$(), h = E.useRef(null), c = E.useRef(null), b = E.useCallback((S) => {
    const {
      pulsate: y,
      rippleX: P,
      rippleY: O,
      rippleSize: I,
      cb: F
    } = S;
    u((V) => [...V, /* @__PURE__ */ v.jsx(o_, {
      classes: {
        ripple: nt(s.ripple, kt.ripple),
        rippleVisible: nt(s.rippleVisible, kt.rippleVisible),
        ripplePulsate: nt(s.ripplePulsate, kt.ripplePulsate),
        child: nt(s.child, kt.child),
        childLeaving: nt(s.childLeaving, kt.childLeaving),
        childPulsate: nt(s.childPulsate, kt.childPulsate)
      },
      timeout: Wa,
      pulsate: y,
      rippleX: P,
      rippleY: O,
      rippleSize: I
    }, f.current)]), f.current += 1, p.current = F;
  }, [s]), x = E.useCallback((S = {}, y = {}, P = () => {
  }) => {
    const {
      pulsate: O = !1,
      center: I = o || y.pulsate,
      fakeElement: F = !1
      // For test purposes
    } = y;
    if ((S == null ? void 0 : S.type) === "mousedown" && m.current) {
      m.current = !1;
      return;
    }
    (S == null ? void 0 : S.type) === "touchstart" && (m.current = !0);
    const V = F ? null : c.current, Q = V ? V.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let q, L, j;
    if (I || S === void 0 || S.clientX === 0 && S.clientY === 0 || !S.clientX && !S.touches)
      q = Math.round(Q.width / 2), L = Math.round(Q.height / 2);
    else {
      const {
        clientX: ne,
        clientY: z
      } = S.touches && S.touches.length > 0 ? S.touches[0] : S;
      q = Math.round(ne - Q.left), L = Math.round(z - Q.top);
    }
    if (I)
      j = Math.sqrt((2 * Q.width ** 2 + Q.height ** 2) / 3), j % 2 === 0 && (j += 1);
    else {
      const ne = Math.max(Math.abs((V ? V.clientWidth : 0) - q), q) * 2 + 2, z = Math.max(Math.abs((V ? V.clientHeight : 0) - L), L) * 2 + 2;
      j = Math.sqrt(ne ** 2 + z ** 2);
    }
    S != null && S.touches ? h.current === null && (h.current = () => {
      b({
        pulsate: O,
        rippleX: q,
        rippleY: L,
        rippleSize: j,
        cb: P
      });
    }, g.start(ZO, () => {
      h.current && (h.current(), h.current = null);
    })) : b({
      pulsate: O,
      rippleX: q,
      rippleY: L,
      rippleSize: j,
      cb: P
    });
  }, [o, b, g]), w = E.useCallback(() => {
    x({}, {
      pulsate: !0
    });
  }, [x]), $ = E.useCallback((S, y) => {
    if (g.clear(), (S == null ? void 0 : S.type) === "touchend" && h.current) {
      h.current(), h.current = null, g.start(0, () => {
        $(S, y);
      });
      return;
    }
    h.current = null, u((P) => P.length > 0 ? P.slice(1) : P), p.current = y;
  }, [g]);
  return E.useImperativeHandle(r, () => ({
    pulsate: w,
    start: x,
    stop: $
  }), [w, x, $]), /* @__PURE__ */ v.jsx(n_, ee({
    className: nt(kt.root, s.root, i),
    ref: c
  }, a, {
    children: /* @__PURE__ */ v.jsx(QO, {
      component: null,
      exit: !0,
      children: d
    })
  }));
});
process.env.NODE_ENV !== "production" && (om.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: C.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: C.object,
  /**
   * @ignore
   */
  className: C.string
});
const s_ = om;
function i_(e) {
  return lr("MuiButtonBase", e);
}
const a_ = ur("MuiButtonBase", ["root", "disabled", "focusVisible"]), c_ = a_, l_ = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], u_ = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, i = Dr({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, i_, o);
  return r && n && (i.root += ` ${n}`), i;
}, d_ = pt("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${c_.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), sm = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = $r({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: s = !1,
    children: i,
    className: a,
    component: d = "button",
    disabled: u = !1,
    disableRipple: f = !1,
    disableTouchRipple: p = !1,
    focusRipple: m = !1,
    LinkComponent: g = "a",
    onBlur: h,
    onClick: c,
    onContextMenu: b,
    onDragLeave: x,
    onFocus: w,
    onFocusVisible: $,
    onKeyDown: S,
    onKeyUp: y,
    onMouseDown: P,
    onMouseLeave: O,
    onMouseUp: I,
    onTouchEnd: F,
    onTouchMove: V,
    onTouchStart: Q,
    tabIndex: q = 0,
    TouchRippleProps: L,
    touchRippleRef: j,
    type: ne
  } = n, z = lt(n, l_), te = E.useRef(null), D = E.useRef(null), se = Cs(D, j), {
    isFocusVisibleRef: _,
    onFocus: N,
    onBlur: W,
    ref: Y
  } = Uh(), [M, H] = E.useState(!1);
  u && M && H(!1), E.useImperativeHandle(o, () => ({
    focusVisible: () => {
      H(!0), te.current.focus();
    }
  }), []);
  const [U, K] = E.useState(!1);
  E.useEffect(() => {
    K(!0);
  }, []);
  const X = U && !f && !u;
  E.useEffect(() => {
    M && m && !f && U && D.current.pulsate();
  }, [f, m, M, U]);
  function G(J, fr, Or = p) {
    return Lo((_r) => (fr && fr(_r), !Or && D.current && D.current[J](_r), !0));
  }
  const Z = G("start", P), ue = G("stop", b), T = G("stop", x), ce = G("stop", I), xe = G("stop", (J) => {
    M && J.preventDefault(), O && O(J);
  }), tt = G("start", Q), nr = G("stop", F), Fr = G("stop", V), Lr = G("stop", (J) => {
    W(J), _.current === !1 && H(!1), h && h(J);
  }, !1), dr = Lo((J) => {
    te.current || (te.current = J.currentTarget), N(J), _.current === !0 && (H(!0), $ && $(J)), w && w(J);
  }), or = () => {
    const J = te.current;
    return d && d !== "button" && !(J.tagName === "A" && J.href);
  }, sr = E.useRef(!1), Rr = Lo((J) => {
    m && !sr.current && M && D.current && J.key === " " && (sr.current = !0, D.current.stop(J, () => {
      D.current.start(J);
    })), J.target === J.currentTarget && or() && J.key === " " && J.preventDefault(), S && S(J), J.target === J.currentTarget && or() && J.key === "Enter" && !u && (J.preventDefault(), c && c(J));
  }), wn = Lo((J) => {
    m && J.key === " " && D.current && M && !J.defaultPrevented && (sr.current = !1, D.current.stop(J, () => {
      D.current.pulsate(J);
    })), y && y(J), c && J.target === J.currentTarget && or() && J.key === " " && !J.defaultPrevented && c(J);
  });
  let zt = d;
  zt === "button" && (z.href || z.to) && (zt = g);
  const vt = {};
  zt === "button" ? (vt.type = ne === void 0 ? "button" : ne, vt.disabled = u) : (!z.href && !z.to && (vt.role = "button"), u && (vt["aria-disabled"] = u));
  const Br = Cs(r, Y, te);
  process.env.NODE_ENV !== "production" && E.useEffect(() => {
    X && !D.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [X]);
  const Vt = ee({}, n, {
    centerRipple: s,
    component: d,
    disabled: u,
    disableRipple: f,
    disableTouchRipple: p,
    focusRipple: m,
    tabIndex: q,
    focusVisible: M
  }), An = u_(Vt);
  return /* @__PURE__ */ v.jsxs(d_, ee({
    as: zt,
    className: nt(An.root, a),
    ownerState: Vt,
    onBlur: Lr,
    onClick: c,
    onContextMenu: ue,
    onFocus: dr,
    onKeyDown: Rr,
    onKeyUp: wn,
    onMouseDown: Z,
    onMouseLeave: xe,
    onMouseUp: ce,
    onDragLeave: T,
    onTouchEnd: nr,
    onTouchMove: Fr,
    onTouchStart: tt,
    ref: Br,
    tabIndex: u ? -1 : q,
    type: ne
  }, vt, z, {
    children: [i, X ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ v.jsx(s_, ee({
        ref: se,
        center: s
      }, L))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (sm.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: U$,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: C.bool,
  /**
   * The content of the component.
   */
  children: C.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: C.object,
  /**
   * @ignore
   */
  className: C.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Vh,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: C.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: C.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: C.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: C.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: C.string,
  /**
   * @ignore
   */
  href: C.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: C.elementType,
  /**
   * @ignore
   */
  onBlur: C.func,
  /**
   * @ignore
   */
  onClick: C.func,
  /**
   * @ignore
   */
  onContextMenu: C.func,
  /**
   * @ignore
   */
  onDragLeave: C.func,
  /**
   * @ignore
   */
  onFocus: C.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: C.func,
  /**
   * @ignore
   */
  onKeyDown: C.func,
  /**
   * @ignore
   */
  onKeyUp: C.func,
  /**
   * @ignore
   */
  onMouseDown: C.func,
  /**
   * @ignore
   */
  onMouseLeave: C.func,
  /**
   * @ignore
   */
  onMouseUp: C.func,
  /**
   * @ignore
   */
  onTouchEnd: C.func,
  /**
   * @ignore
   */
  onTouchMove: C.func,
  /**
   * @ignore
   */
  onTouchStart: C.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: C.oneOfType([C.arrayOf(C.oneOfType([C.func, C.object, C.bool])), C.func, C.object]),
  /**
   * @default 0
   */
  tabIndex: C.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: C.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: C.oneOfType([C.func, C.shape({
    current: C.shape({
      pulsate: C.func.isRequired,
      start: C.func.isRequired,
      stop: C.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: C.oneOfType([C.oneOf(["button", "reset", "submit"]), C.string])
});
const im = sm;
function f_(e) {
  return lr("MuiTypography", e);
}
ur("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const p_ = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], h_ = (e) => {
  const {
    align: t,
    gutterBottom: r,
    noWrap: n,
    paragraph: o,
    variant: s,
    classes: i
  } = e, a = {
    root: ["root", s, e.align !== "inherit" && `align${Fe(t)}`, r && "gutterBottom", n && "noWrap", o && "paragraph"]
  };
  return Dr(a, f_, i);
}, m_ = pt("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.variant && t[r.variant], r.align !== "inherit" && t[`align${Fe(r.align)}`], r.noWrap && t.noWrap, r.gutterBottom && t.gutterBottom, r.paragraph && t.paragraph];
  }
})(({
  theme: e,
  ownerState: t
}) => ee({
  margin: 0
}, t.variant === "inherit" && {
  // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
  font: "inherit"
}, t.variant !== "inherit" && e.typography[t.variant], t.align !== "inherit" && {
  textAlign: t.align
}, t.noWrap && {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}, t.gutterBottom && {
  marginBottom: "0.35em"
}, t.paragraph && {
  marginBottom: 16
})), Pd = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, y_ = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, g_ = (e) => y_[e] || e, am = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = $r({
    props: t,
    name: "MuiTypography"
  }), o = g_(n.color), s = Dc(ee({}, n, {
    color: o
  })), {
    align: i = "inherit",
    className: a,
    component: d,
    gutterBottom: u = !1,
    noWrap: f = !1,
    paragraph: p = !1,
    variant: m = "body1",
    variantMapping: g = Pd
  } = s, h = lt(s, p_), c = ee({}, s, {
    align: i,
    color: o,
    className: a,
    component: d,
    gutterBottom: u,
    noWrap: f,
    paragraph: p,
    variant: m,
    variantMapping: g
  }), b = d || (p ? "p" : g[m] || Pd[m]) || "span", x = h_(c);
  return /* @__PURE__ */ v.jsx(m_, ee({
    as: b,
    ref: r,
    ownerState: c,
    className: nt(x.root, a)
  }, h));
});
process.env.NODE_ENV !== "production" && (am.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: C.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: C.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: C.object,
  /**
   * @ignore
   */
  className: C.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: C.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: C.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: C.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph: C.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: C.oneOfType([C.arrayOf(C.oneOfType([C.func, C.object, C.bool])), C.func, C.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: C.oneOfType([C.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), C.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: C.object
});
const uo = am, b_ = ur("MuiBox", ["root"]), v_ = b_, x_ = di(), cm = P$({
  themeId: ah,
  defaultTheme: x_,
  defaultClassName: v_.root,
  generateClassName: Dh.generate
});
process.env.NODE_ENV !== "production" && (cm.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: C.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: C.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: C.oneOfType([C.arrayOf(C.oneOfType([C.func, C.object, C.bool])), C.func, C.object])
});
const Qn = cm, E_ = Vc(/* @__PURE__ */ v.jsx("path", {
  d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), "MoreHoriz"), T_ = ["slots", "slotProps"], C_ = pt(im, {
  name: "MuiBreadcrumbCollapsed"
})(({
  theme: e
}) => ee({
  display: "flex",
  marginLeft: `calc(${e.spacing(1)} * 0.5)`,
  marginRight: `calc(${e.spacing(1)} * 0.5)`
}, e.palette.mode === "light" ? {
  backgroundColor: e.palette.grey[100],
  color: e.palette.grey[700]
} : {
  backgroundColor: e.palette.grey[700],
  color: e.palette.grey[100]
}, {
  borderRadius: 2,
  "&:hover, &:focus": ee({}, e.palette.mode === "light" ? {
    backgroundColor: e.palette.grey[200]
  } : {
    backgroundColor: e.palette.grey[600]
  }),
  "&:active": ee({
    boxShadow: e.shadows[0]
  }, e.palette.mode === "light" ? {
    backgroundColor: ud(e.palette.grey[200], 0.12)
  } : {
    backgroundColor: ud(e.palette.grey[600], 0.12)
  })
})), S_ = pt(E_)({
  width: 24,
  height: 16
});
function lm(e) {
  const {
    slots: t = {},
    slotProps: r = {}
  } = e, n = lt(e, T_), o = e;
  return /* @__PURE__ */ v.jsx("li", {
    children: /* @__PURE__ */ v.jsx(C_, ee({
      focusRipple: !0
    }, n, {
      ownerState: o,
      children: /* @__PURE__ */ v.jsx(S_, ee({
        as: t.CollapsedIcon,
        ownerState: o
      }, r.collapsedIcon))
    }))
  });
}
process.env.NODE_ENV !== "production" && (lm.propTypes = {
  /**
   * The props used for the CollapsedIcon slot.
   * @default {}
   */
  slotProps: C.shape({
    collapsedIcon: C.oneOfType([C.func, C.object])
  }),
  /**
   * The components used for each slot inside the BreadcumbCollapsed.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: C.shape({
    CollapsedIcon: C.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: C.object
});
function $_(e) {
  return lr("MuiBreadcrumbs", e);
}
const R_ = ur("MuiBreadcrumbs", ["root", "ol", "li", "separator"]), O_ = R_, __ = ["children", "className", "component", "slots", "slotProps", "expandText", "itemsAfterCollapse", "itemsBeforeCollapse", "maxItems", "separator"], P_ = (e) => {
  const {
    classes: t
  } = e;
  return Dr({
    root: ["root"],
    li: ["li"],
    ol: ["ol"],
    separator: ["separator"]
  }, $_, t);
}, w_ = pt(uo, {
  name: "MuiBreadcrumbs",
  slot: "Root",
  overridesResolver: (e, t) => [{
    [`& .${O_.li}`]: t.li
  }, t.root]
})({}), A_ = pt("ol", {
  name: "MuiBreadcrumbs",
  slot: "Ol",
  overridesResolver: (e, t) => t.ol
})({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  padding: 0,
  margin: 0,
  listStyle: "none"
}), N_ = pt("li", {
  name: "MuiBreadcrumbs",
  slot: "Separator",
  overridesResolver: (e, t) => t.separator
})({
  display: "flex",
  userSelect: "none",
  marginLeft: 8,
  marginRight: 8
});
function k_(e, t, r, n) {
  return e.reduce((o, s, i) => (i < e.length - 1 ? o = o.concat(s, /* @__PURE__ */ v.jsx(N_, {
    "aria-hidden": !0,
    className: t,
    ownerState: n,
    children: r
  }, `separator-${i}`)) : o.push(s), o), []);
}
const um = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = $r({
    props: t,
    name: "MuiBreadcrumbs"
  }), {
    children: o,
    className: s,
    component: i = "nav",
    slots: a = {},
    slotProps: d = {},
    expandText: u = "Show path",
    itemsAfterCollapse: f = 1,
    itemsBeforeCollapse: p = 1,
    maxItems: m = 8,
    separator: g = "/"
  } = n, h = lt(n, __), [c, b] = E.useState(!1), x = ee({}, n, {
    component: i,
    expanded: c,
    expandText: u,
    itemsAfterCollapse: f,
    itemsBeforeCollapse: p,
    maxItems: m,
    separator: g
  }), w = P_(x), $ = dR({
    elementType: a.CollapsedIcon,
    externalSlotProps: d.collapsedIcon,
    ownerState: x
  }), S = E.useRef(null), y = (O) => {
    const I = () => {
      b(!0);
      const F = S.current.querySelector("a[href],button,[tabindex]");
      F && F.focus();
    };
    return p + f >= O.length ? (process.env.NODE_ENV !== "production" && console.error(["MUI: You have provided an invalid combination of props to the Breadcrumbs.", `itemsAfterCollapse={${f}} + itemsBeforeCollapse={${p}} >= maxItems={${m}}`].join(`
`)), O) : [...O.slice(0, p), /* @__PURE__ */ v.jsx(lm, {
      "aria-label": u,
      slots: {
        CollapsedIcon: a.CollapsedIcon
      },
      slotProps: {
        collapsedIcon: $
      },
      onClick: I
    }, "ellipsis"), ...O.slice(O.length - f, O.length)];
  }, P = E.Children.toArray(o).filter((O) => (process.env.NODE_ENV !== "production" && VO.isFragment(O) && console.error(["MUI: The Breadcrumbs component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), /* @__PURE__ */ E.isValidElement(O))).map((O, I) => /* @__PURE__ */ v.jsx("li", {
    className: w.li,
    children: O
  }, `child-${I}`));
  return /* @__PURE__ */ v.jsx(w_, ee({
    ref: r,
    component: i,
    color: "text.secondary",
    className: nt(w.root, s),
    ownerState: x
  }, h, {
    children: /* @__PURE__ */ v.jsx(A_, {
      className: w.ol,
      ref: S,
      ownerState: x,
      children: k_(c || m && P.length <= m ? P : y(P), w.separator, g, x)
    })
  }));
});
process.env.NODE_ENV !== "production" && (um.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: C.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: C.object,
  /**
   * @ignore
   */
  className: C.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: C.elementType,
  /**
   * Override the default label for the expand button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Show path'
   */
  expandText: C.string,
  /**
   * If max items is exceeded, the number of items to show after the ellipsis.
   * @default 1
   */
  itemsAfterCollapse: Ji,
  /**
   * If max items is exceeded, the number of items to show before the ellipsis.
   * @default 1
   */
  itemsBeforeCollapse: Ji,
  /**
   * Specifies the maximum number of breadcrumbs to display. When there are more
   * than the maximum number, only the first `itemsBeforeCollapse` and last `itemsAfterCollapse`
   * will be shown, with an ellipsis in between.
   * @default 8
   */
  maxItems: Ji,
  /**
   * Custom separator node.
   * @default '/'
   */
  separator: C.node,
  /**
   * The props used for each slot inside the Breadcumb.
   * @default {}
   */
  slotProps: C.shape({
    collapsedIcon: C.oneOfType([C.func, C.object])
  }),
  /**
   * The components used for each slot inside the Breadcumb.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: C.shape({
    CollapsedIcon: C.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: C.oneOfType([C.arrayOf(C.oneOfType([C.func, C.object, C.bool])), C.func, C.object])
});
const I_ = um;
function M_(e) {
  return lr("MuiButton", e);
}
const j_ = ur("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), zo = j_, dm = /* @__PURE__ */ E.createContext({});
process.env.NODE_ENV !== "production" && (dm.displayName = "ButtonGroupContext");
const D_ = dm, fm = /* @__PURE__ */ E.createContext(void 0);
process.env.NODE_ENV !== "production" && (fm.displayName = "ButtonGroupButtonContext");
const F_ = fm, L_ = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], B_ = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: o,
    variant: s,
    classes: i
  } = e, a = {
    root: ["root", s, `${s}${Fe(t)}`, `size${Fe(o)}`, `${s}Size${Fe(o)}`, `color${Fe(t)}`, r && "disableElevation", n && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${Fe(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${Fe(o)}`]
  }, d = Dr(a, M_, i);
  return ee({}, i, d);
}, pm = (e) => ee({}, e.size === "small" && {
  "& > *:nth-of-type(1)": {
    fontSize: 18
  }
}, e.size === "medium" && {
  "& > *:nth-of-type(1)": {
    fontSize: 20
  }
}, e.size === "large" && {
  "& > *:nth-of-type(1)": {
    fontSize: 22
  }
}), z_ = pt(im, {
  shouldForwardProp: (e) => tm(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${Fe(r.color)}`], t[`size${Fe(r.size)}`], t[`${r.variant}Size${Fe(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var r, n;
  const o = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], s = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return ee({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": ee({
      textDecoration: "none",
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Wn(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "text" && t.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Wn(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "outlined" && t.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[t.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Wn(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "contained" && {
      backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedHoverBg : s,
      boxShadow: (e.vars || e).shadows[4],
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: (e.vars || e).shadows[2],
        backgroundColor: (e.vars || e).palette.grey[300]
      }
    }, t.variant === "contained" && t.color !== "inherit" && {
      backgroundColor: (e.vars || e).palette[t.color].dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (e.vars || e).palette[t.color].main
      }
    }),
    "&:active": ee({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[8]
    }),
    [`&.${zo.focusVisible}`]: ee({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${zo.disabled}`]: ee({
      color: (e.vars || e).palette.action.disabled
    }, t.variant === "outlined" && {
      border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
    }, t.variant === "contained" && {
      color: (e.vars || e).palette.action.disabled,
      boxShadow: (e.vars || e).shadows[0],
      backgroundColor: (e.vars || e).palette.action.disabledBackground
    })
  }, t.variant === "text" && {
    padding: "6px 8px"
  }, t.variant === "text" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main
  }, t.variant === "outlined" && {
    padding: "5px 15px",
    border: "1px solid currentColor"
  }, t.variant === "outlined" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main,
    border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${Wn(e.palette[t.color].main, 0.5)}`
  }, t.variant === "contained" && {
    color: e.vars ? (
      // this is safe because grey does not change between default light/dark mode
      e.vars.palette.text.primary
    ) : (r = (n = e.palette).getContrastText) == null ? void 0 : r.call(n, e.palette.grey[300]),
    backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedBg : o,
    boxShadow: (e.vars || e).shadows[2]
  }, t.variant === "contained" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].contrastText,
    backgroundColor: (e.vars || e).palette[t.color].main
  }, t.color === "inherit" && {
    color: "inherit",
    borderColor: "currentColor"
  }, t.size === "small" && t.variant === "text" && {
    padding: "4px 5px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "text" && {
    padding: "8px 11px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "outlined" && {
    padding: "3px 9px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "outlined" && {
    padding: "7px 21px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "contained" && {
    padding: "4px 10px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "contained" && {
    padding: "8px 22px",
    fontSize: e.typography.pxToRem(15)
  }, t.fullWidth && {
    width: "100%"
  });
}, ({
  ownerState: e
}) => e.disableElevation && {
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none"
  },
  [`&.${zo.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${zo.disabled}`]: {
    boxShadow: "none"
  }
}), V_ = pt("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, t[`iconSize${Fe(r.size)}`]];
  }
})(({
  ownerState: e
}) => ee({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, pm(e))), U_ = pt("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, t[`iconSize${Fe(r.size)}`]];
  }
})(({
  ownerState: e
}) => ee({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, pm(e))), hm = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = E.useContext(D_), o = E.useContext(F_), s = Ts(n, t), i = $r({
    props: s,
    name: "MuiButton"
  }), {
    children: a,
    color: d = "primary",
    component: u = "button",
    className: f,
    disabled: p = !1,
    disableElevation: m = !1,
    disableFocusRipple: g = !1,
    endIcon: h,
    focusVisibleClassName: c,
    fullWidth: b = !1,
    size: x = "medium",
    startIcon: w,
    type: $,
    variant: S = "text"
  } = i, y = lt(i, L_), P = ee({}, i, {
    color: d,
    component: u,
    disabled: p,
    disableElevation: m,
    disableFocusRipple: g,
    fullWidth: b,
    size: x,
    type: $,
    variant: S
  }), O = B_(P), I = w && /* @__PURE__ */ v.jsx(V_, {
    className: O.startIcon,
    ownerState: P,
    children: w
  }), F = h && /* @__PURE__ */ v.jsx(U_, {
    className: O.endIcon,
    ownerState: P,
    children: h
  }), V = o || "";
  return /* @__PURE__ */ v.jsxs(z_, ee({
    ownerState: P,
    className: nt(n.className, O.root, f, V),
    component: u,
    disabled: p,
    focusRipple: !g,
    focusVisibleClassName: nt(O.focusVisible, c),
    ref: r,
    type: $
  }, y, {
    classes: O,
    children: [I, a, F]
  }));
});
process.env.NODE_ENV !== "production" && (hm.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: C.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: C.object,
  /**
   * @ignore
   */
  className: C.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: C.oneOfType([C.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), C.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: C.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: C.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: C.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: C.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: C.bool,
  /**
   * Element placed after the children.
   */
  endIcon: C.node,
  /**
   * @ignore
   */
  focusVisibleClassName: C.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: C.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: C.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: C.oneOfType([C.oneOf(["small", "medium", "large"]), C.string]),
  /**
   * Element placed before the children.
   */
  startIcon: C.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: C.oneOfType([C.arrayOf(C.oneOfType([C.func, C.object, C.bool])), C.func, C.object]),
  /**
   * @ignore
   */
  type: C.oneOfType([C.oneOf(["button", "reset", "submit"]), C.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: C.oneOfType([C.oneOf(["contained", "outlined", "text"]), C.string])
});
const q_ = hm;
function W_(e) {
  return lr("MuiCircularProgress", e);
}
ur("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const Y_ = ["className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"];
let pi = (e) => e, wd, Ad, Nd, kd;
const hr = 44, H_ = $n(wd || (wd = pi`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)), G_ = $n(Ad || (Ad = pi`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)), K_ = (e) => {
  const {
    classes: t,
    variant: r,
    color: n,
    disableShrink: o
  } = e, s = {
    root: ["root", r, `color${Fe(n)}`],
    svg: ["svg"],
    circle: ["circle", `circle${Fe(r)}`, o && "circleDisableShrink"]
  };
  return Dr(s, W_, t);
}, Q_ = pt("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`color${Fe(r.color)}`]];
  }
})(({
  ownerState: e,
  theme: t
}) => ee({
  display: "inline-block"
}, e.variant === "determinate" && {
  transition: t.transitions.create("transform")
}, e.color !== "inherit" && {
  color: (t.vars || t).palette[e.color].main
}), ({
  ownerState: e
}) => e.variant === "indeterminate" && ei(Nd || (Nd = pi`
      animation: ${0} 1.4s linear infinite;
    `), H_)), X_ = pt("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (e, t) => t.svg
})({
  display: "block"
  // Keeps the progress centered
}), J_ = pt("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.circle, t[`circle${Fe(r.variant)}`], r.disableShrink && t.circleDisableShrink];
  }
})(({
  ownerState: e,
  theme: t
}) => ee({
  stroke: "currentColor"
}, e.variant === "determinate" && {
  transition: t.transitions.create("stroke-dashoffset")
}, e.variant === "indeterminate" && {
  // Some default value that looks fine waiting for the animation to kicks in.
  strokeDasharray: "80px, 200px",
  strokeDashoffset: 0
  // Add the unit to fix a Edge 16 and below bug.
}), ({
  ownerState: e
}) => e.variant === "indeterminate" && !e.disableShrink && ei(kd || (kd = pi`
      animation: ${0} 1.4s ease-in-out infinite;
    `), G_)), mm = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = $r({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: o,
    color: s = "primary",
    disableShrink: i = !1,
    size: a = 40,
    style: d,
    thickness: u = 3.6,
    value: f = 0,
    variant: p = "indeterminate"
  } = n, m = lt(n, Y_), g = ee({}, n, {
    color: s,
    disableShrink: i,
    size: a,
    thickness: u,
    value: f,
    variant: p
  }), h = K_(g), c = {}, b = {}, x = {};
  if (p === "determinate") {
    const w = 2 * Math.PI * ((hr - u) / 2);
    c.strokeDasharray = w.toFixed(3), x["aria-valuenow"] = Math.round(f), c.strokeDashoffset = `${((100 - f) / 100 * w).toFixed(3)}px`, b.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ v.jsx(Q_, ee({
    className: nt(h.root, o),
    style: ee({
      width: a,
      height: a
    }, b, d),
    ownerState: g,
    ref: r,
    role: "progressbar"
  }, x, m, {
    children: /* @__PURE__ */ v.jsx(X_, {
      className: h.svg,
      ownerState: g,
      viewBox: `${hr / 2} ${hr / 2} ${hr} ${hr}`,
      children: /* @__PURE__ */ v.jsx(J_, {
        className: h.circle,
        style: c,
        ownerState: g,
        cx: hr,
        cy: hr,
        r: (hr - u) / 2,
        fill: "none",
        strokeWidth: u
      })
    })
  }));
});
process.env.NODE_ENV !== "production" && (mm.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: C.object,
  /**
   * @ignore
   */
  className: C.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: C.oneOfType([C.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), C.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: zh(C.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: C.oneOfType([C.number, C.string]),
  /**
   * @ignore
   */
  style: C.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: C.oneOfType([C.arrayOf(C.oneOfType([C.func, C.object, C.bool])), C.func, C.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: C.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: C.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: C.oneOf(["determinate", "indeterminate"])
});
const Z_ = mm;
function eP(e) {
  return lr("MuiLink", e);
}
const tP = ur("MuiLink", ["root", "underlineNone", "underlineHover", "underlineAlways", "button", "focusVisible"]), rP = tP, ym = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, nP = (e) => ym[e] || e, oP = ({
  theme: e,
  ownerState: t
}) => {
  const r = nP(t.color), n = bn(e, `palette.${r}`, !1) || t.color, o = bn(e, `palette.${r}Channel`);
  return "vars" in e && o ? `rgba(${o} / 0.4)` : Wn(n, 0.4);
}, sP = oP, iP = ["className", "color", "component", "onBlur", "onFocus", "TypographyClasses", "underline", "variant", "sx"], aP = (e) => {
  const {
    classes: t,
    component: r,
    focusVisible: n,
    underline: o
  } = e, s = {
    root: ["root", `underline${Fe(o)}`, r === "button" && "button", n && "focusVisible"]
  };
  return Dr(s, eP, t);
}, cP = pt(uo, {
  name: "MuiLink",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[`underline${Fe(r.underline)}`], r.component === "button" && t.button];
  }
})(({
  theme: e,
  ownerState: t
}) => ee({}, t.underline === "none" && {
  textDecoration: "none"
}, t.underline === "hover" && {
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline"
  }
}, t.underline === "always" && ee({
  textDecoration: "underline"
}, t.color !== "inherit" && {
  textDecorationColor: sP({
    theme: e,
    ownerState: t
  })
}, {
  "&:hover": {
    textDecorationColor: "inherit"
  }
}), t.component === "button" && {
  position: "relative",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${rP.focusVisible}`]: {
    outline: "auto"
  }
})), gm = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = $r({
    props: t,
    name: "MuiLink"
  }), {
    className: o,
    color: s = "primary",
    component: i = "a",
    onBlur: a,
    onFocus: d,
    TypographyClasses: u,
    underline: f = "always",
    variant: p = "inherit",
    sx: m
  } = n, g = lt(n, iP), {
    isFocusVisibleRef: h,
    onBlur: c,
    onFocus: b,
    ref: x
  } = Uh(), [w, $] = E.useState(!1), S = Cs(r, x), y = (F) => {
    c(F), h.current === !1 && $(!1), a && a(F);
  }, P = (F) => {
    b(F), h.current === !0 && $(!0), d && d(F);
  }, O = ee({}, n, {
    color: s,
    component: i,
    focusVisible: w,
    underline: f,
    variant: p
  }), I = aP(O);
  return /* @__PURE__ */ v.jsx(cP, ee({
    color: s,
    className: nt(I.root, o),
    classes: u,
    component: i,
    onBlur: y,
    onFocus: P,
    ref: S,
    ownerState: O,
    variant: p,
    sx: [...Object.keys(ym).includes(s) ? [] : [{
      color: s
    }], ...Array.isArray(m) ? m : [m]]
  }, g));
});
process.env.NODE_ENV !== "production" && (gm.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: C.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: C.object,
  /**
   * @ignore
   */
  className: C.string,
  /**
   * The color of the link.
   * @default 'primary'
   */
  color: C.any,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Vh,
  /**
   * @ignore
   */
  onBlur: C.func,
  /**
   * @ignore
   */
  onFocus: C.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: C.oneOfType([C.arrayOf(C.oneOfType([C.func, C.object, C.bool])), C.func, C.object]),
  /**
   * `classes` prop applied to the [`Typography`](/material-ui/api/typography/) element.
   */
  TypographyClasses: C.object,
  /**
   * Controls when the link should have an underline.
   * @default 'always'
   */
  underline: C.oneOf(["always", "hover", "none"]),
  /**
   * Applies the theme typography styles.
   * @default 'inherit'
   */
  variant: C.oneOfType([C.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), C.string])
});
const lP = gm, uP = ({ size: e = 40, message: t, fullScreen: r = !1 }) => {
  const n = v.jsxs(Qn, { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2, children: [v.jsx(Z_, { size: e }), t && v.jsx(uo, { variant: "body2", color: "textSecondary", children: t })] });
  return r ? v.jsx(Qn, { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "background.paper", zIndex: 9999, children: n }) : n;
}, dP = Vc(/* @__PURE__ */ v.jsx("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
}), "Add"), fP = Vc(/* @__PURE__ */ v.jsx("path", {
  d: "M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
}), "NavigateNext"), pP = ({ title: e, subtitle: t, breadcrumbs: r, action: n }) => v.jsxs(Qn, { mb: 4, children: [r && r.length > 0 && v.jsx(I_, { separator: v.jsx(fP, { fontSize: "small" }), sx: { mb: 2 }, children: r.map((o, s) => v.jsx(lP, { href: o.href, color: s === r.length - 1 ? "textPrimary" : "inherit", underline: s === r.length - 1 ? "none" : "hover", sx: { cursor: o.href ? "pointer" : "default" }, children: o.label }, s)) }), v.jsxs(Qn, { display: "flex", justifyContent: "space-between", alignItems: "flex-start", children: [v.jsxs(Qn, { children: [v.jsx(uo, { variant: "h4", component: "h1", gutterBottom: !0, children: e }), t && v.jsx(uo, { variant: "body1", color: "textSecondary", children: t })] }), n && v.jsx(q_, { variant: "contained", startIcon: n.icon || v.jsx(dP, {}), onClick: n.onClick, size: "large", children: n.label })] })] }), hP = process.env.REACT_APP_API_URL || "http://localhost:3000/api";
function bm(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: mP } = Object.prototype, { getPrototypeOf: Wc } = Object, { iterator: hi, toStringTag: vm } = Symbol, mi = ((e) => (t) => {
  const r = mP.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Yt = (e) => (e = e.toLowerCase(), (t) => mi(t) === e), yi = (e) => (t) => typeof t === e, { isArray: _n } = Array, vn = yi("undefined");
function _o(e) {
  return e !== null && !vn(e) && e.constructor !== null && !vn(e.constructor) && Et(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const xm = Yt("ArrayBuffer");
function yP(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && xm(e.buffer), t;
}
const gP = yi("string"), Et = yi("function"), Em = yi("number"), Po = (e) => e !== null && typeof e == "object", bP = (e) => e === !0 || e === !1, ts = (e) => {
  if (mi(e) !== "object")
    return !1;
  const t = Wc(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(vm in e) && !(hi in e);
}, vP = (e) => {
  if (!Po(e) || _o(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, xP = Yt("Date"), EP = Yt("File"), TP = Yt("Blob"), CP = Yt("FileList"), SP = (e) => Po(e) && Et(e.pipe), $P = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Et(e.append) && ((t = mi(e)) === "formdata" || // detect form-data instance
  t === "object" && Et(e.toString) && e.toString() === "[object FormData]"));
}, RP = Yt("URLSearchParams"), [OP, _P, PP, wP] = ["ReadableStream", "Request", "Response", "Headers"].map(Yt), AP = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function wo(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), _n(e))
    for (n = 0, o = e.length; n < o; n++)
      t.call(null, e[n], n, e);
  else {
    if (_o(e))
      return;
    const s = r ? Object.getOwnPropertyNames(e) : Object.keys(e), i = s.length;
    let a;
    for (n = 0; n < i; n++)
      a = s[n], t.call(null, e[a], a, e);
  }
}
function Tm(e, t) {
  if (_o(e))
    return null;
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], t === o.toLowerCase())
      return o;
  return null;
}
const Mr = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Cm = (e) => !vn(e) && e !== Mr;
function Ya() {
  const { caseless: e, skipUndefined: t } = Cm(this) && this || {}, r = {}, n = (o, s) => {
    const i = e && Tm(r, s) || s;
    ts(r[i]) && ts(o) ? r[i] = Ya(r[i], o) : ts(o) ? r[i] = Ya({}, o) : _n(o) ? r[i] = o.slice() : (!t || !vn(o)) && (r[i] = o);
  };
  for (let o = 0, s = arguments.length; o < s; o++)
    arguments[o] && wo(arguments[o], n);
  return r;
}
const NP = (e, t, r, { allOwnKeys: n } = {}) => (wo(t, (o, s) => {
  r && Et(o) ? e[s] = bm(o, r) : e[s] = o;
}, { allOwnKeys: n }), e), kP = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), IP = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, MP = (e, t, r, n) => {
  let o, s, i;
  const a = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      i = o[s], (!n || n(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = r !== !1 && Wc(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, jP = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, DP = (e) => {
  if (!e)
    return null;
  if (_n(e))
    return e;
  let t = e.length;
  if (!Em(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, FP = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Wc(Uint8Array)), LP = (e, t) => {
  const n = (e && e[hi]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
  }
}, BP = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, zP = Yt("HTMLFormElement"), VP = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), Id = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), UP = Yt("RegExp"), Sm = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  wo(r, (o, s) => {
    let i;
    (i = t(o, s, e)) !== !1 && (n[s] = i || o);
  }), Object.defineProperties(e, n);
}, qP = (e) => {
  Sm(e, (t, r) => {
    if (Et(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (Et(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, WP = (e, t) => {
  const r = {}, n = (o) => {
    o.forEach((s) => {
      r[s] = !0;
    });
  };
  return _n(e) ? n(e) : n(String(e).split(t)), r;
}, YP = () => {
}, HP = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function GP(e) {
  return !!(e && Et(e.append) && e[vm] === "FormData" && e[hi]);
}
const KP = (e) => {
  const t = new Array(10), r = (n, o) => {
    if (Po(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (_o(n))
        return n;
      if (!("toJSON" in n)) {
        t[o] = n;
        const s = _n(n) ? [] : {};
        return wo(n, (i, a) => {
          const d = r(i, o + 1);
          !vn(d) && (s[a] = d);
        }), t[o] = void 0, s;
      }
    }
    return n;
  };
  return r(e, 0);
}, QP = Yt("AsyncFunction"), XP = (e) => e && (Po(e) || Et(e)) && Et(e.then) && Et(e.catch), $m = ((e, t) => e ? setImmediate : t ? ((r, n) => (Mr.addEventListener("message", ({ source: o, data: s }) => {
  o === Mr && s === r && n.length && n.shift()();
}, !1), (o) => {
  n.push(o), Mr.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  Et(Mr.postMessage)
), JP = typeof queueMicrotask < "u" ? queueMicrotask.bind(Mr) : typeof process < "u" && process.nextTick || $m, ZP = (e) => e != null && Et(e[hi]), k = {
  isArray: _n,
  isArrayBuffer: xm,
  isBuffer: _o,
  isFormData: $P,
  isArrayBufferView: yP,
  isString: gP,
  isNumber: Em,
  isBoolean: bP,
  isObject: Po,
  isPlainObject: ts,
  isEmptyObject: vP,
  isReadableStream: OP,
  isRequest: _P,
  isResponse: PP,
  isHeaders: wP,
  isUndefined: vn,
  isDate: xP,
  isFile: EP,
  isBlob: TP,
  isRegExp: UP,
  isFunction: Et,
  isStream: SP,
  isURLSearchParams: RP,
  isTypedArray: FP,
  isFileList: CP,
  forEach: wo,
  merge: Ya,
  extend: NP,
  trim: AP,
  stripBOM: kP,
  inherits: IP,
  toFlatObject: MP,
  kindOf: mi,
  kindOfTest: Yt,
  endsWith: jP,
  toArray: DP,
  forEachEntry: LP,
  matchAll: BP,
  isHTMLForm: zP,
  hasOwnProperty: Id,
  hasOwnProp: Id,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Sm,
  freezeMethods: qP,
  toObjectSet: WP,
  toCamelCase: VP,
  noop: YP,
  toFiniteNumber: HP,
  findKey: Tm,
  global: Mr,
  isContextDefined: Cm,
  isSpecCompliantForm: GP,
  toJSONObject: KP,
  isAsyncFn: QP,
  isThenable: XP,
  setImmediate: $m,
  asap: JP,
  isIterable: ZP
};
function le(e, t, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o, this.status = o.status ? o.status : null);
}
k.inherits(le, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: k.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Rm = le.prototype, Om = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Om[e] = { value: e };
});
Object.defineProperties(le, Om);
Object.defineProperty(Rm, "isAxiosError", { value: !0 });
le.from = (e, t, r, n, o, s) => {
  const i = Object.create(Rm);
  k.toFlatObject(e, i, function(f) {
    return f !== Error.prototype;
  }, (u) => u !== "isAxiosError");
  const a = e && e.message ? e.message : "Error", d = t == null && e ? e.code : t;
  return le.call(i, a, d, r, n, o), e && i.cause == null && Object.defineProperty(i, "cause", { value: e, configurable: !0 }), i.name = e && e.name || "Error", s && Object.assign(i, s), i;
};
const ew = null;
function Ha(e) {
  return k.isPlainObject(e) || k.isArray(e);
}
function _m(e) {
  return k.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Md(e, t, r) {
  return e ? e.concat(t).map(function(o, s) {
    return o = _m(o), !r && s ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function tw(e) {
  return k.isArray(e) && !e.some(Ha);
}
const rw = k.toFlatObject(k, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function gi(e, t, r) {
  if (!k.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = k.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(c, b) {
    return !k.isUndefined(b[c]);
  });
  const n = r.metaTokens, o = r.visitor || f, s = r.dots, i = r.indexes, d = (r.Blob || typeof Blob < "u" && Blob) && k.isSpecCompliantForm(t);
  if (!k.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(h) {
    if (h === null)
      return "";
    if (k.isDate(h))
      return h.toISOString();
    if (k.isBoolean(h))
      return h.toString();
    if (!d && k.isBlob(h))
      throw new le("Blob is not supported. Use a Buffer instead.");
    return k.isArrayBuffer(h) || k.isTypedArray(h) ? d && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function f(h, c, b) {
    let x = h;
    if (h && !b && typeof h == "object") {
      if (k.endsWith(c, "{}"))
        c = n ? c : c.slice(0, -2), h = JSON.stringify(h);
      else if (k.isArray(h) && tw(h) || (k.isFileList(h) || k.endsWith(c, "[]")) && (x = k.toArray(h)))
        return c = _m(c), x.forEach(function($, S) {
          !(k.isUndefined($) || $ === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Md([c], S, s) : i === null ? c : c + "[]",
            u($)
          );
        }), !1;
    }
    return Ha(h) ? !0 : (t.append(Md(b, c, s), u(h)), !1);
  }
  const p = [], m = Object.assign(rw, {
    defaultVisitor: f,
    convertValue: u,
    isVisitable: Ha
  });
  function g(h, c) {
    if (!k.isUndefined(h)) {
      if (p.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + c.join("."));
      p.push(h), k.forEach(h, function(x, w) {
        (!(k.isUndefined(x) || x === null) && o.call(
          t,
          x,
          k.isString(w) ? w.trim() : w,
          c,
          m
        )) === !0 && g(x, c ? c.concat(w) : [w]);
      }), p.pop();
    }
  }
  if (!k.isObject(e))
    throw new TypeError("data must be an object");
  return g(e), t;
}
function jd(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function Yc(e, t) {
  this._pairs = [], e && gi(e, this, t);
}
const Pm = Yc.prototype;
Pm.append = function(t, r) {
  this._pairs.push([t, r]);
};
Pm.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, jd);
  } : jd;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function nw(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function wm(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || nw;
  k.isFunction(r) && (r = {
    serialize: r
  });
  const o = r && r.serialize;
  let s;
  if (o ? s = o(t, r) : s = k.isURLSearchParams(t) ? t.toString() : new Yc(t, r).toString(n), s) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class ow {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    k.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const Dd = ow, Am = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, sw = typeof URLSearchParams < "u" ? URLSearchParams : Yc, iw = typeof FormData < "u" ? FormData : null, aw = typeof Blob < "u" ? Blob : null, cw = {
  isBrowser: !0,
  classes: {
    URLSearchParams: sw,
    FormData: iw,
    Blob: aw
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Hc = typeof window < "u" && typeof document < "u", Ga = typeof navigator == "object" && navigator || void 0, lw = Hc && (!Ga || ["ReactNative", "NativeScript", "NS"].indexOf(Ga.product) < 0), uw = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), dw = Hc && window.location.href || "http://localhost", fw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Hc,
  hasStandardBrowserEnv: lw,
  hasStandardBrowserWebWorkerEnv: uw,
  navigator: Ga,
  origin: dw
}, Symbol.toStringTag, { value: "Module" })), yt = {
  ...fw,
  ...cw
};
function pw(e, t) {
  return gi(e, new yt.classes.URLSearchParams(), {
    visitor: function(r, n, o, s) {
      return yt.isNode && k.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function hw(e) {
  return k.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function mw(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const o = r.length;
  let s;
  for (n = 0; n < o; n++)
    s = r[n], t[s] = e[s];
  return t;
}
function Nm(e) {
  function t(r, n, o, s) {
    let i = r[s++];
    if (i === "__proto__")
      return !0;
    const a = Number.isFinite(+i), d = s >= r.length;
    return i = !i && k.isArray(o) ? o.length : i, d ? (k.hasOwnProp(o, i) ? o[i] = [o[i], n] : o[i] = n, !a) : ((!o[i] || !k.isObject(o[i])) && (o[i] = []), t(r, n, o[i], s) && k.isArray(o[i]) && (o[i] = mw(o[i])), !a);
  }
  if (k.isFormData(e) && k.isFunction(e.entries)) {
    const r = {};
    return k.forEachEntry(e, (n, o) => {
      t(hw(n), o, r, 0);
    }), r;
  }
  return null;
}
function yw(e, t, r) {
  if (k.isString(e))
    try {
      return (t || JSON.parse)(e), k.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const Gc = {
  transitional: Am,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, s = k.isObject(t);
    if (s && k.isHTMLForm(t) && (t = new FormData(t)), k.isFormData(t))
      return o ? JSON.stringify(Nm(t)) : t;
    if (k.isArrayBuffer(t) || k.isBuffer(t) || k.isStream(t) || k.isFile(t) || k.isBlob(t) || k.isReadableStream(t))
      return t;
    if (k.isArrayBufferView(t))
      return t.buffer;
    if (k.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (s) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return pw(t, this.formSerializer).toString();
      if ((a = k.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const d = this.env && this.env.FormData;
        return gi(
          a ? { "files[]": t } : t,
          d && new d(),
          this.formSerializer
        );
      }
    }
    return s || o ? (r.setContentType("application/json", !1), yw(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || Gc.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (k.isResponse(t) || k.isReadableStream(t))
      return t;
    if (t && k.isString(t) && (n && !this.responseType || o)) {
      const i = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(t, this.parseReviver);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? le.from(a, le.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: yt.classes.FormData,
    Blob: yt.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
k.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Gc.headers[e] = {};
});
const Kc = Gc, gw = k.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), bw = (e) => {
  const t = {};
  let r, n, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), r = i.substring(0, o).trim().toLowerCase(), n = i.substring(o + 1).trim(), !(!r || t[r] && gw[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Fd = Symbol("internals");
function Ln(e) {
  return e && String(e).trim().toLowerCase();
}
function rs(e) {
  return e === !1 || e == null ? e : k.isArray(e) ? e.map(rs) : String(e);
}
function vw(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const xw = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ta(e, t, r, n, o) {
  if (k.isFunction(n))
    return n.call(this, t, r);
  if (o && (t = r), !!k.isString(t)) {
    if (k.isString(n))
      return t.indexOf(n) !== -1;
    if (k.isRegExp(n))
      return n.test(t);
  }
}
function Ew(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Tw(e, t) {
  const r = k.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(o, s, i) {
        return this[n].call(this, t, o, s, i);
      },
      configurable: !0
    });
  });
}
class bi {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const o = this;
    function s(a, d, u) {
      const f = Ln(d);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const p = k.findKey(o, f);
      (!p || o[p] === void 0 || u === !0 || u === void 0 && o[p] !== !1) && (o[p || d] = rs(a));
    }
    const i = (a, d) => k.forEach(a, (u, f) => s(u, f, d));
    if (k.isPlainObject(t) || t instanceof this.constructor)
      i(t, r);
    else if (k.isString(t) && (t = t.trim()) && !xw(t))
      i(bw(t), r);
    else if (k.isObject(t) && k.isIterable(t)) {
      let a = {}, d, u;
      for (const f of t) {
        if (!k.isArray(f))
          throw TypeError("Object iterator must return a key-value pair");
        a[u = f[0]] = (d = a[u]) ? k.isArray(d) ? [...d, f[1]] : [d, f[1]] : f[1];
      }
      i(a, r);
    } else
      t != null && s(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = Ln(t), t) {
      const n = k.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return vw(o);
        if (k.isFunction(r))
          return r.call(this, o, n);
        if (k.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Ln(t), t) {
      const n = k.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || ta(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function s(i) {
      if (i = Ln(i), i) {
        const a = k.findKey(n, i);
        a && (!r || ta(n, n[a], a, r)) && (delete n[a], o = !0);
      }
    }
    return k.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const s = r[n];
      (!t || ta(this, this[s], s, t, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(t) {
    const r = this, n = {};
    return k.forEach(this, (o, s) => {
      const i = k.findKey(n, s);
      if (i) {
        r[i] = rs(o), delete r[s];
        return;
      }
      const a = t ? Ew(s) : String(s).trim();
      a !== s && delete r[s], r[a] = rs(o), n[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return k.forEach(this, (n, o) => {
      n != null && n !== !1 && (r[o] = t && k.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((o) => n.set(o)), n;
  }
  static accessor(t) {
    const n = (this[Fd] = this[Fd] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(i) {
      const a = Ln(i);
      n[a] || (Tw(o, i), n[a] = !0);
    }
    return k.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
bi.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
k.reduceDescriptors(bi.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
k.freezeMethods(bi);
const Ut = bi;
function ra(e, t) {
  const r = this || Kc, n = t || r, o = Ut.from(n.headers);
  let s = n.data;
  return k.forEach(e, function(a) {
    s = a.call(r, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function km(e) {
  return !!(e && e.__CANCEL__);
}
function Pn(e, t, r) {
  le.call(this, e ?? "canceled", le.ERR_CANCELED, t, r), this.name = "CanceledError";
}
k.inherits(Pn, le, {
  __CANCEL__: !0
});
function Im(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new le(
    "Request failed with status code " + r.status,
    [le.ERR_BAD_REQUEST, le.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function Cw(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Sw(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let o = 0, s = 0, i;
  return t = t !== void 0 ? t : 1e3, function(d) {
    const u = Date.now(), f = n[s];
    i || (i = u), r[o] = d, n[o] = u;
    let p = s, m = 0;
    for (; p !== o; )
      m += r[p++], p = p % e;
    if (o = (o + 1) % e, o === s && (s = (s + 1) % e), u - i < t)
      return;
    const g = f && u - f;
    return g ? Math.round(m * 1e3 / g) : void 0;
  };
}
function $w(e, t) {
  let r = 0, n = 1e3 / t, o, s;
  const i = (u, f = Date.now()) => {
    r = f, o = null, s && (clearTimeout(s), s = null), e(...u);
  };
  return [(...u) => {
    const f = Date.now(), p = f - r;
    p >= n ? i(u, f) : (o = u, s || (s = setTimeout(() => {
      s = null, i(o);
    }, n - p)));
  }, () => o && i(o)];
}
const Rs = (e, t, r = 3) => {
  let n = 0;
  const o = Sw(50, 250);
  return $w((s) => {
    const i = s.loaded, a = s.lengthComputable ? s.total : void 0, d = i - n, u = o(d), f = i <= a;
    n = i;
    const p = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: d,
      rate: u || void 0,
      estimated: u && a && f ? (a - i) / u : void 0,
      event: s,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(p);
  }, r);
}, Ld = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, Bd = (e) => (...t) => k.asap(() => e(...t)), Rw = yt.hasStandardBrowserEnv ? ((e, t) => (r) => (r = new URL(r, yt.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(yt.origin),
  yt.navigator && /(msie|trident)/i.test(yt.navigator.userAgent)
) : () => !0, Ow = yt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, o, s) {
      const i = [e + "=" + encodeURIComponent(t)];
      k.isNumber(r) && i.push("expires=" + new Date(r).toGMTString()), k.isString(n) && i.push("path=" + n), k.isString(o) && i.push("domain=" + o), s === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function _w(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Pw(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Mm(e, t, r) {
  let n = !_w(t);
  return e && (n || r == !1) ? Pw(e, t) : t;
}
const zd = (e) => e instanceof Ut ? { ...e } : e;
function jr(e, t) {
  t = t || {};
  const r = {};
  function n(u, f, p, m) {
    return k.isPlainObject(u) && k.isPlainObject(f) ? k.merge.call({ caseless: m }, u, f) : k.isPlainObject(f) ? k.merge({}, f) : k.isArray(f) ? f.slice() : f;
  }
  function o(u, f, p, m) {
    if (k.isUndefined(f)) {
      if (!k.isUndefined(u))
        return n(void 0, u, p, m);
    } else
      return n(u, f, p, m);
  }
  function s(u, f) {
    if (!k.isUndefined(f))
      return n(void 0, f);
  }
  function i(u, f) {
    if (k.isUndefined(f)) {
      if (!k.isUndefined(u))
        return n(void 0, u);
    } else
      return n(void 0, f);
  }
  function a(u, f, p) {
    if (p in t)
      return n(u, f);
    if (p in e)
      return n(void 0, u);
  }
  const d = {
    url: s,
    method: s,
    data: s,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: a,
    headers: (u, f, p) => o(zd(u), zd(f), p, !0)
  };
  return k.forEach(Object.keys({ ...e, ...t }), function(f) {
    const p = d[f] || o, m = p(e[f], t[f], f);
    k.isUndefined(m) && p !== a || (r[f] = m);
  }), r;
}
const jm = (e) => {
  const t = jr({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: o, xsrfCookieName: s, headers: i, auth: a } = t;
  if (t.headers = i = Ut.from(i), t.url = wm(Mm(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && i.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  ), k.isFormData(r)) {
    if (yt.hasStandardBrowserEnv || yt.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if (k.isFunction(r.getHeaders)) {
      const d = r.getHeaders(), u = ["content-type", "content-length"];
      Object.entries(d).forEach(([f, p]) => {
        u.includes(f.toLowerCase()) && i.set(f, p);
      });
    }
  }
  if (yt.hasStandardBrowserEnv && (n && k.isFunction(n) && (n = n(t)), n || n !== !1 && Rw(t.url))) {
    const d = o && s && Ow.read(s);
    d && i.set(o, d);
  }
  return t;
}, ww = typeof XMLHttpRequest < "u", Aw = ww && function(e) {
  return new Promise(function(r, n) {
    const o = jm(e);
    let s = o.data;
    const i = Ut.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: d, onDownloadProgress: u } = o, f, p, m, g, h;
    function c() {
      g && g(), h && h(), o.cancelToken && o.cancelToken.unsubscribe(f), o.signal && o.signal.removeEventListener("abort", f);
    }
    let b = new XMLHttpRequest();
    b.open(o.method.toUpperCase(), o.url, !0), b.timeout = o.timeout;
    function x() {
      if (!b)
        return;
      const $ = Ut.from(
        "getAllResponseHeaders" in b && b.getAllResponseHeaders()
      ), y = {
        data: !a || a === "text" || a === "json" ? b.responseText : b.response,
        status: b.status,
        statusText: b.statusText,
        headers: $,
        config: e,
        request: b
      };
      Im(function(O) {
        r(O), c();
      }, function(O) {
        n(O), c();
      }, y), b = null;
    }
    "onloadend" in b ? b.onloadend = x : b.onreadystatechange = function() {
      !b || b.readyState !== 4 || b.status === 0 && !(b.responseURL && b.responseURL.indexOf("file:") === 0) || setTimeout(x);
    }, b.onabort = function() {
      b && (n(new le("Request aborted", le.ECONNABORTED, e, b)), b = null);
    }, b.onerror = function(S) {
      const y = S && S.message ? S.message : "Network Error", P = new le(y, le.ERR_NETWORK, e, b);
      P.event = S || null, n(P), b = null;
    }, b.ontimeout = function() {
      let S = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const y = o.transitional || Am;
      o.timeoutErrorMessage && (S = o.timeoutErrorMessage), n(new le(
        S,
        y.clarifyTimeoutError ? le.ETIMEDOUT : le.ECONNABORTED,
        e,
        b
      )), b = null;
    }, s === void 0 && i.setContentType(null), "setRequestHeader" in b && k.forEach(i.toJSON(), function(S, y) {
      b.setRequestHeader(y, S);
    }), k.isUndefined(o.withCredentials) || (b.withCredentials = !!o.withCredentials), a && a !== "json" && (b.responseType = o.responseType), u && ([m, h] = Rs(u, !0), b.addEventListener("progress", m)), d && b.upload && ([p, g] = Rs(d), b.upload.addEventListener("progress", p), b.upload.addEventListener("loadend", g)), (o.cancelToken || o.signal) && (f = ($) => {
      b && (n(!$ || $.type ? new Pn(null, e, b) : $), b.abort(), b = null);
    }, o.cancelToken && o.cancelToken.subscribe(f), o.signal && (o.signal.aborted ? f() : o.signal.addEventListener("abort", f)));
    const w = Cw(o.url);
    if (w && yt.protocols.indexOf(w) === -1) {
      n(new le("Unsupported protocol " + w + ":", le.ERR_BAD_REQUEST, e));
      return;
    }
    b.send(s || null);
  });
}, Nw = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), o;
    const s = function(u) {
      if (!o) {
        o = !0, a();
        const f = u instanceof Error ? u : this.reason;
        n.abort(f instanceof le ? f : new Pn(f instanceof Error ? f.message : f));
      }
    };
    let i = t && setTimeout(() => {
      i = null, s(new le(`timeout ${t} of ms exceeded`, le.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(s) : u.removeEventListener("abort", s);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", s));
    const { signal: d } = n;
    return d.unsubscribe = () => k.asap(a), d;
  }
}, kw = Nw, Iw = function* (e, t) {
  let r = e.byteLength;
  if (!t || r < t) {
    yield e;
    return;
  }
  let n = 0, o;
  for (; n < r; )
    o = n + t, yield e.slice(n, o), n = o;
}, Mw = async function* (e, t) {
  for await (const r of jw(e))
    yield* Iw(r, t);
}, jw = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: r, value: n } = await t.read();
      if (r)
        break;
      yield n;
    }
  } finally {
    await t.cancel();
  }
}, Vd = (e, t, r, n) => {
  const o = Mw(e, t);
  let s = 0, i, a = (d) => {
    i || (i = !0, n && n(d));
  };
  return new ReadableStream({
    async pull(d) {
      try {
        const { done: u, value: f } = await o.next();
        if (u) {
          a(), d.close();
          return;
        }
        let p = f.byteLength;
        if (r) {
          let m = s += p;
          r(m);
        }
        d.enqueue(new Uint8Array(f));
      } catch (u) {
        throw a(u), u;
      }
    },
    cancel(d) {
      return a(d), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, Ud = 64 * 1024, { isFunction: Vo } = k, Dw = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(k.global), {
  ReadableStream: qd,
  TextEncoder: Wd
} = k.global, Yd = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Fw = (e) => {
  e = k.merge.call({
    skipUndefined: !0
  }, Dw, e);
  const { fetch: t, Request: r, Response: n } = e, o = t ? Vo(t) : typeof fetch == "function", s = Vo(r), i = Vo(n);
  if (!o)
    return !1;
  const a = o && Vo(qd), d = o && (typeof Wd == "function" ? ((h) => (c) => h.encode(c))(new Wd()) : async (h) => new Uint8Array(await new r(h).arrayBuffer())), u = s && a && Yd(() => {
    let h = !1;
    const c = new r(yt.origin, {
      body: new qd(),
      method: "POST",
      get duplex() {
        return h = !0, "half";
      }
    }).headers.has("Content-Type");
    return h && !c;
  }), f = i && a && Yd(() => k.isReadableStream(new n("").body)), p = {
    stream: f && ((h) => h.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((h) => {
    !p[h] && (p[h] = (c, b) => {
      let x = c && c[h];
      if (x)
        return x.call(c);
      throw new le(`Response type '${h}' is not supported`, le.ERR_NOT_SUPPORT, b);
    });
  });
  const m = async (h) => {
    if (h == null)
      return 0;
    if (k.isBlob(h))
      return h.size;
    if (k.isSpecCompliantForm(h))
      return (await new r(yt.origin, {
        method: "POST",
        body: h
      }).arrayBuffer()).byteLength;
    if (k.isArrayBufferView(h) || k.isArrayBuffer(h))
      return h.byteLength;
    if (k.isURLSearchParams(h) && (h = h + ""), k.isString(h))
      return (await d(h)).byteLength;
  }, g = async (h, c) => {
    const b = k.toFiniteNumber(h.getContentLength());
    return b ?? m(c);
  };
  return async (h) => {
    let {
      url: c,
      method: b,
      data: x,
      signal: w,
      cancelToken: $,
      timeout: S,
      onDownloadProgress: y,
      onUploadProgress: P,
      responseType: O,
      headers: I,
      withCredentials: F = "same-origin",
      fetchOptions: V
    } = jm(h), Q = t || fetch;
    O = O ? (O + "").toLowerCase() : "text";
    let q = kw([w, $ && $.toAbortSignal()], S), L = null;
    const j = q && q.unsubscribe && (() => {
      q.unsubscribe();
    });
    let ne;
    try {
      if (P && u && b !== "get" && b !== "head" && (ne = await g(I, x)) !== 0) {
        let N = new r(c, {
          method: "POST",
          body: x,
          duplex: "half"
        }), W;
        if (k.isFormData(x) && (W = N.headers.get("content-type")) && I.setContentType(W), N.body) {
          const [Y, M] = Ld(
            ne,
            Rs(Bd(P))
          );
          x = Vd(N.body, Ud, Y, M);
        }
      }
      k.isString(F) || (F = F ? "include" : "omit");
      const z = s && "credentials" in r.prototype, te = {
        ...V,
        signal: q,
        method: b.toUpperCase(),
        headers: I.normalize().toJSON(),
        body: x,
        duplex: "half",
        credentials: z ? F : void 0
      };
      L = s && new r(c, te);
      let D = await (s ? Q(L, V) : Q(c, te));
      const se = f && (O === "stream" || O === "response");
      if (f && (y || se && j)) {
        const N = {};
        ["status", "statusText", "headers"].forEach((H) => {
          N[H] = D[H];
        });
        const W = k.toFiniteNumber(D.headers.get("content-length")), [Y, M] = y && Ld(
          W,
          Rs(Bd(y), !0)
        ) || [];
        D = new n(
          Vd(D.body, Ud, Y, () => {
            M && M(), j && j();
          }),
          N
        );
      }
      O = O || "text";
      let _ = await p[k.findKey(p, O) || "text"](D, h);
      return !se && j && j(), await new Promise((N, W) => {
        Im(N, W, {
          data: _,
          headers: Ut.from(D.headers),
          status: D.status,
          statusText: D.statusText,
          config: h,
          request: L
        });
      });
    } catch (z) {
      throw j && j(), z && z.name === "TypeError" && /Load failed|fetch/i.test(z.message) ? Object.assign(
        new le("Network Error", le.ERR_NETWORK, h, L),
        {
          cause: z.cause || z
        }
      ) : le.from(z, z && z.code, h, L);
    }
  };
}, Lw = /* @__PURE__ */ new Map(), Dm = (e) => {
  let t = e ? e.env : {};
  const { fetch: r, Request: n, Response: o } = t, s = [
    n,
    o,
    r
  ];
  let i = s.length, a = i, d, u, f = Lw;
  for (; a--; )
    d = s[a], u = f.get(d), u === void 0 && f.set(d, u = a ? /* @__PURE__ */ new Map() : Fw(t)), f = u;
  return u;
};
Dm();
const Ka = {
  http: ew,
  xhr: Aw,
  fetch: {
    get: Dm
  }
};
k.forEach(Ka, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Hd = (e) => `- ${e}`, Bw = (e) => k.isFunction(e) || e === null || e === !1, Fm = {
  getAdapter: (e, t) => {
    e = k.isArray(e) ? e : [e];
    const { length: r } = e;
    let n, o;
    const s = {};
    for (let i = 0; i < r; i++) {
      n = e[i];
      let a;
      if (o = n, !Bw(n) && (o = Ka[(a = String(n)).toLowerCase()], o === void 0))
        throw new le(`Unknown adapter '${a}'`);
      if (o && (k.isFunction(o) || (o = o.get(t))))
        break;
      s[a || "#" + i] = o;
    }
    if (!o) {
      const i = Object.entries(s).map(
        ([d, u]) => `adapter ${d} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let a = r ? i.length > 1 ? `since :
` + i.map(Hd).join(`
`) : " " + Hd(i[0]) : "as no adapter specified";
      throw new le(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return o;
  },
  adapters: Ka
};
function na(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Pn(null, e);
}
function Gd(e) {
  return na(e), e.headers = Ut.from(e.headers), e.data = ra.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Fm.getAdapter(e.adapter || Kc.adapter, e)(e).then(function(n) {
    return na(e), n.data = ra.call(
      e,
      e.transformResponse,
      n
    ), n.headers = Ut.from(n.headers), n;
  }, function(n) {
    return km(n) || (na(e), n && n.response && (n.response.data = ra.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = Ut.from(n.response.headers))), Promise.reject(n);
  });
}
const Lm = "1.12.2", vi = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  vi[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Kd = {};
vi.transitional = function(t, r, n) {
  function o(s, i) {
    return "[Axios v" + Lm + "] Transitional option '" + s + "'" + i + (n ? ". " + n : "");
  }
  return (s, i, a) => {
    if (t === !1)
      throw new le(
        o(i, " has been removed" + (r ? " in " + r : "")),
        le.ERR_DEPRECATED
      );
    return r && !Kd[i] && (Kd[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(s, i, a) : !0;
  };
};
vi.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function zw(e, t, r) {
  if (typeof e != "object")
    throw new le("options must be an object", le.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const s = n[o], i = t[s];
    if (i) {
      const a = e[s], d = a === void 0 || i(a, s, e);
      if (d !== !0)
        throw new le("option " + s + " must be " + d, le.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new le("Unknown option " + s, le.ERR_BAD_OPTION);
  }
}
const ns = {
  assertOptions: zw,
  validators: vi
}, Gt = ns.validators;
class Os {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Dd(),
      response: new Dd()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (n) {
      if (n instanceof Error) {
        let o = {};
        Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error();
        const s = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? s && !String(n.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + s) : n.stack = s;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = jr(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: s } = r;
    n !== void 0 && ns.assertOptions(n, {
      silentJSONParsing: Gt.transitional(Gt.boolean),
      forcedJSONParsing: Gt.transitional(Gt.boolean),
      clarifyTimeoutError: Gt.transitional(Gt.boolean)
    }, !1), o != null && (k.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : ns.assertOptions(o, {
      encode: Gt.function,
      serialize: Gt.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), ns.assertOptions(r, {
      baseUrl: Gt.spelling("baseURL"),
      withXsrfToken: Gt.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let i = s && k.merge(
      s.common,
      s[r.method]
    );
    s && k.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete s[h];
      }
    ), r.headers = Ut.concat(i, s);
    const a = [];
    let d = !0;
    this.interceptors.request.forEach(function(c) {
      typeof c.runWhen == "function" && c.runWhen(r) === !1 || (d = d && c.synchronous, a.unshift(c.fulfilled, c.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(c) {
      u.push(c.fulfilled, c.rejected);
    });
    let f, p = 0, m;
    if (!d) {
      const h = [Gd.bind(this), void 0];
      for (h.unshift(...a), h.push(...u), m = h.length, f = Promise.resolve(r); p < m; )
        f = f.then(h[p++], h[p++]);
      return f;
    }
    m = a.length;
    let g = r;
    for (; p < m; ) {
      const h = a[p++], c = a[p++];
      try {
        g = h(g);
      } catch (b) {
        c.call(this, b);
        break;
      }
    }
    try {
      f = Gd.call(this, g);
    } catch (h) {
      return Promise.reject(h);
    }
    for (p = 0, m = u.length; p < m; )
      f = f.then(u[p++], u[p++]);
    return f;
  }
  getUri(t) {
    t = jr(this.defaults, t);
    const r = Mm(t.baseURL, t.url, t.allowAbsoluteUrls);
    return wm(r, t.params, t.paramsSerializer);
  }
}
k.forEach(["delete", "get", "head", "options"], function(t) {
  Os.prototype[t] = function(r, n) {
    return this.request(jr(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
k.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(s, i, a) {
      return this.request(jr(a || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: i
      }));
    };
  }
  Os.prototype[t] = r(), Os.prototype[t + "Form"] = r(!0);
});
const os = Os;
class Qc {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(s) {
      r = s;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners)
        return;
      let s = n._listeners.length;
      for (; s-- > 0; )
        n._listeners[s](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let s;
      const i = new Promise((a) => {
        n.subscribe(a), s = a;
      }).then(o);
      return i.cancel = function() {
        n.unsubscribe(s);
      }, i;
    }, t(function(s, i, a) {
      n.reason || (n.reason = new Pn(s, i, a), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), r = (n) => {
      t.abort(n);
    };
    return this.subscribe(r), t.signal.unsubscribe = () => this.unsubscribe(r), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Qc(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const Vw = Qc;
function Uw(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function qw(e) {
  return k.isObject(e) && e.isAxiosError === !0;
}
const Qa = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Qa).forEach(([e, t]) => {
  Qa[t] = e;
});
const Ww = Qa;
function Bm(e) {
  const t = new os(e), r = bm(os.prototype.request, t);
  return k.extend(r, os.prototype, t, { allOwnKeys: !0 }), k.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return Bm(jr(e, o));
  }, r;
}
const ct = Bm(Kc);
ct.Axios = os;
ct.CanceledError = Pn;
ct.CancelToken = Vw;
ct.isCancel = km;
ct.VERSION = Lm;
ct.toFormData = gi;
ct.AxiosError = le;
ct.Cancel = ct.CanceledError;
ct.all = function(t) {
  return Promise.all(t);
};
ct.spread = Uw;
ct.isAxiosError = qw;
ct.mergeConfig = jr;
ct.AxiosHeaders = Ut;
ct.formToJSON = (e) => Nm(k.isHTMLForm(e) ? new FormData(e) : e);
ct.getAdapter = Fm.getAdapter;
ct.HttpStatusCode = Ww;
ct.default = ct;
const Yw = ct;
class Hw {
  constructor() {
    this.client = Yw.create({
      baseURL: hP,
      timeout: 1e4,
      headers: {
        "Content-Type": "application/json"
      }
    }), this.setupInterceptors();
  }
  setupInterceptors() {
    this.client.interceptors.request.use((t) => {
      const r = localStorage.getItem("auth_token");
      return r && (t.headers.Authorization = `Bearer ${r}`), t;
    }, (t) => Promise.reject(t)), this.client.interceptors.response.use((t) => t, (t) => {
      var r;
      return ((r = t.response) == null ? void 0 : r.status) === 401 && (localStorage.removeItem("auth_token"), window.location.href = "/login"), Promise.reject(t);
    });
  }
  async get(t, r) {
    return (await this.client.get(t, r)).data;
  }
  async post(t, r, n) {
    return (await this.client.post(t, r, n)).data;
  }
  async put(t, r, n) {
    return (await this.client.put(t, r, n)).data;
  }
  async delete(t, r) {
    return (await this.client.delete(t, r)).data;
  }
  async patch(t, r, n) {
    return (await this.client.patch(t, r, n)).data;
  }
}
const an = new Hw();
class mr {
  static set(t, r) {
    try {
      const n = JSON.stringify(r);
      localStorage.setItem(t, n);
    } catch (n) {
      console.error(`Error saving to localStorage key "${t}":`, n);
    }
  }
  static get(t, r = null) {
    try {
      const n = localStorage.getItem(t);
      return n === null ? r : JSON.parse(n);
    } catch (n) {
      return console.error(`Error reading from localStorage key "${t}":`, n), r;
    }
  }
  static remove(t) {
    try {
      localStorage.removeItem(t);
    } catch (r) {
      console.error(`Error removing from localStorage key "${t}":`, r);
    }
  }
  static clear() {
    try {
      localStorage.clear();
    } catch (t) {
      console.error("Error clearing localStorage:", t);
    }
  }
  // Auth specific methods
  static setAuthToken(t) {
    this.set("auth_token", t);
  }
  static getAuthToken() {
    return this.get("auth_token");
  }
  static removeAuthToken() {
    this.remove("auth_token");
  }
  static setUser(t) {
    this.set("user_data", t);
  }
  static getUser() {
    return this.get("user_data");
  }
  static clearAuth() {
    this.removeAuthToken(), this.remove("user_data");
  }
}
const zm = iy(void 0), Vm = () => {
  const e = Xa(zm);
  if (e === void 0)
    throw new Error("useAuth must be used within an AuthProvider");
  return e;
}, Gw = ({ children: e }) => {
  const [t, r] = oa(null), [n, o] = oa(!0);
  ay(() => {
    (async () => {
      const f = mr.getAuthToken(), p = mr.get("user_data");
      if (f && p)
        try {
          const m = await an.get("/auth/me");
          r(m), mr.setUser(m);
        } catch {
          mr.clearAuth();
        }
      o(!1);
    })();
  }, []);
  const d = {
    user: t,
    isLoading: n,
    isAuthenticated: !!t,
    login: async (u, f) => {
      try {
        o(!0);
        const p = await an.post("/auth/login", {
          email: u,
          password: f
        });
        mr.setAuthToken(p.access_token), mr.setUser(p.user), r(p.user);
      } catch {
        throw new Error("Login failed. Please check your credentials.");
      } finally {
        o(!1);
      }
    },
    logout: () => {
      mr.clearAuth(), r(null), window.location.href = "/login";
    },
    updateUser: (u) => {
      if (t) {
        const f = { ...t, ...u };
        r(f), mr.setUser(f);
      }
    }
  };
  return v.jsx(zm.Provider, { value: d, children: e });
}, Um = Wt(/* @__PURE__ */ v.jsx("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M9 17H7v-5h2zm4 0h-2v-3h2zm0-5h-2v-2h2zm4 5h-2V7h2z"
}), "Analytics"), Qd = Wt(/* @__PURE__ */ v.jsx("path", {
  d: "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m2 14H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z"
}), "Assignment"), Kw = Wt(/* @__PURE__ */ v.jsx("path", {
  d: "M3 13h8V3H3zm0 8h8v-6H3zm10 0h8V11h-8zm0-18v6h8V3z"
}), "Dashboard"), Qw = Wt(/* @__PURE__ */ v.jsx("path", {
  d: "M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73 1.17-.52 2.61-.91 4.24-.91M4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58C.48 14.9 0 15.62 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29M20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m4 3.43c0-.81-.48-1.53-1.22-1.85-.85-.37-1.79-.58-2.78-.58-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3"
}), "Groups"), ss = Wt(/* @__PURE__ */ v.jsx("path", {
  d: "M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-6 16h-2v-2h2zm2.07-7.75-.9.92C13.45 11.9 13 12.5 13 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25"
}), "LiveHelp"), Xw = Wt(/* @__PURE__ */ v.jsx("path", {
  d: "M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
}), "Menu"), Jw = Wt(/* @__PURE__ */ v.jsx("path", {
  d: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5"
}), "People"), Xd = Wt([/* @__PURE__ */ v.jsx("path", {
  d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
}, "0"), /* @__PURE__ */ v.jsx("path", {
  d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
}, "1")], "Schedule"), qm = Wt(/* @__PURE__ */ v.jsx("path", {
  d: "M5 13.18v4L12 21l7-3.82v-4L12 17zM12 3 1 9l11 6 9-4.91V17h2V9z"
}), "School"), Zw = Wt(/* @__PURE__ */ v.jsx("path", {
  d: "m16 6 2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"
}), "TrendingUp"), en = 240, e2 = [
  { text: "Dashboard", icon: /* @__PURE__ */ v.jsx(Kw, {}), path: "/" },
  { text: "Courses", icon: /* @__PURE__ */ v.jsx(qm, {}), path: "/courses" },
  { text: "Students", icon: /* @__PURE__ */ v.jsx(Jw, {}), path: "/students" },
  { text: "Doubts", icon: /* @__PURE__ */ v.jsx(ss, {}), path: "/doubts" },
  { text: "Analytics", icon: /* @__PURE__ */ v.jsx(Um, {}), path: "/analytics" }
], t2 = ({ children: e }) => {
  const [t, r] = oa(!1), n = ly(), o = uy(), s = () => {
    r(!t);
  }, i = /* @__PURE__ */ v.jsxs(ut, { children: [
    /* @__PURE__ */ v.jsx(Li, { children: /* @__PURE__ */ v.jsx(ze, { variant: "h6", children: "Teacher Portal" }) }),
    /* @__PURE__ */ v.jsx(Ca, { children: e2.map((a) => /* @__PURE__ */ v.jsx(Sa, { disablePadding: !0, children: /* @__PURE__ */ v.jsxs(GE, { selected: o.pathname === a.path, onClick: () => n(a.path), children: [
      /* @__PURE__ */ v.jsx($a, { children: a.icon }),
      /* @__PURE__ */ v.jsx(Ra, { primary: a.text })
    ] }) }, a.text)) })
  ] });
  return /* @__PURE__ */ v.jsxs(ut, { sx: { display: "flex" }, children: [
    /* @__PURE__ */ v.jsx(ox, { position: "fixed", sx: { width: { md: `calc(100% - ${en}px)` }, ml: { md: `${en}px` } }, children: /* @__PURE__ */ v.jsxs(Li, { children: [
      /* @__PURE__ */ v.jsx(H1, { color: "inherit", edge: "start", onClick: s, sx: { mr: 2, display: { md: "none" } }, children: /* @__PURE__ */ v.jsx(Xw, {}) }),
      /* @__PURE__ */ v.jsx(ze, { variant: "h6", sx: { flexGrow: 1 }, children: "Teacher Portal" })
    ] }) }),
    /* @__PURE__ */ v.jsxs(ut, { component: "nav", sx: { width: { md: en }, flexShrink: { md: 0 } }, children: [
      /* @__PURE__ */ v.jsx(yu, { variant: "temporary", open: t, onClose: s, ModalProps: { keepMounted: !0 }, sx: { display: { xs: "block", md: "none" }, "& .MuiDrawer-paper": { boxSizing: "border-box", width: en } }, children: i }),
      /* @__PURE__ */ v.jsx(yu, { variant: "permanent", sx: { display: { xs: "none", md: "block" }, "& .MuiDrawer-paper": { boxSizing: "border-box", width: en } }, open: !0, children: i })
    ] }),
    /* @__PURE__ */ v.jsxs(ut, { component: "main", sx: { flexGrow: 1, p: 3, width: { md: `calc(100% - ${en}px)` } }, children: [
      /* @__PURE__ */ v.jsx(Li, {}),
      e
    ] })
  ] });
}, Uo = ({ title: e, value: t, subtitle: r, icon: n, color: o = "primary", trend: s }) => /* @__PURE__ */ v.jsx(Vn, { sx: { height: "100%", transition: "all 0.3s", "&:hover": { transform: "translateY(-4px)" } }, children: /* @__PURE__ */ v.jsx(Un, { children: /* @__PURE__ */ v.jsxs(ut, { display: "flex", alignItems: "flex-start", justifyContent: "space-between", children: [
  /* @__PURE__ */ v.jsxs(ut, { children: [
    /* @__PURE__ */ v.jsx(ze, { color: "textSecondary", gutterBottom: !0, variant: "overline", children: e }),
    /* @__PURE__ */ v.jsx(ze, { variant: "h4", component: "div", fontWeight: "bold", children: t }),
    /* @__PURE__ */ v.jsx(ze, { variant: "body2", color: "textSecondary", children: r }),
    s && /* @__PURE__ */ v.jsx(
      Ta,
      {
        label: s,
        size: "small",
        color: s.includes("+") ? "success" : "error",
        variant: "outlined",
        sx: { mt: 1 }
      }
    )
  ] }),
  /* @__PURE__ */ v.jsx(
    ut,
    {
      sx: {
        p: 1,
        borderRadius: 2,
        bgcolor: `${o}.light`,
        color: `${o}.contrastText`
      },
      children: n
    }
  )
] }) }) }), Jd = () => {
  const { user: e } = Vm(), { data: t, isLoading: r } = rC({
    queryKey: ["teacher-dashboard"],
    queryFn: async () => {
      const [u, f, p, m] = await Promise.all([
        an.get("/courses/teacher-courses"),
        an.get("/analytics/teacher-students"),
        an.get("/doubts/teacher-doubts"),
        an.get("/analytics/teacher-overview")
      ]);
      return { courses: u, students: f, doubts: p, analytics: m };
    }
  });
  if (r)
    return /* @__PURE__ */ v.jsx(uP, { fullScreen: !0, message: "Loading your dashboard..." });
  const n = (t == null ? void 0 : t.courses) || [], o = (t == null ? void 0 : t.students) || [], s = (t == null ? void 0 : t.doubts) || [], i = (t == null ? void 0 : t.analytics) || {}, a = s.filter((u) => u.status === "pending"), d = o.filter((u) => u.isActive);
  return /* @__PURE__ */ v.jsxs(ut, { children: [
    /* @__PURE__ */ v.jsx(
      pP,
      {
        title: `Welcome, ${(e == null ? void 0 : e.name) || "Teacher"}!`,
        subtitle: "Monitor your classes and help students succeed"
      }
    ),
    /* @__PURE__ */ v.jsxs(Ht, { container: !0, spacing: 3, children: [
      /* @__PURE__ */ v.jsx(Ht, { item: !0, xs: 12, sm: 6, md: 3, children: /* @__PURE__ */ v.jsx(
        Uo,
        {
          title: "Active Courses",
          value: n.length.toString(),
          subtitle: "Teaching this semester",
          icon: /* @__PURE__ */ v.jsx(qm, {}),
          color: "primary",
          trend: "+2 this month"
        }
      ) }),
      /* @__PURE__ */ v.jsx(Ht, { item: !0, xs: 12, sm: 6, md: 3, children: /* @__PURE__ */ v.jsx(
        Uo,
        {
          title: "Students",
          value: d.length.toString(),
          subtitle: "Active learners",
          icon: /* @__PURE__ */ v.jsx(Qw, {}),
          color: "success",
          trend: "+15% growth"
        }
      ) }),
      /* @__PURE__ */ v.jsx(Ht, { item: !0, xs: 12, sm: 6, md: 3, children: /* @__PURE__ */ v.jsx(
        Uo,
        {
          title: "Pending Doubts",
          value: a.length.toString(),
          subtitle: "Need your attention",
          icon: /* @__PURE__ */ v.jsx(ss, {}),
          color: "warning"
        }
      ) }),
      /* @__PURE__ */ v.jsx(Ht, { item: !0, xs: 12, sm: 6, md: 3, children: /* @__PURE__ */ v.jsx(
        Uo,
        {
          title: "Avg. Performance",
          value: `${i.averageScore || 0}%`,
          subtitle: "Class average",
          icon: /* @__PURE__ */ v.jsx(Zw, {}),
          color: "info"
        }
      ) }),
      /* @__PURE__ */ v.jsx(Ht, { item: !0, xs: 12, md: 6, children: /* @__PURE__ */ v.jsx(Vn, { children: /* @__PURE__ */ v.jsxs(Un, { children: [
        /* @__PURE__ */ v.jsxs(ut, { display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2, children: [
          /* @__PURE__ */ v.jsx(ze, { variant: "h6", fontWeight: "bold", children: "Recent Doubts" }),
          /* @__PURE__ */ v.jsx(
            fu,
            {
              variant: "outlined",
              size: "small",
              onClick: () => window.location.href = "/doubts",
              children: "View All"
            }
          )
        ] }),
        /* @__PURE__ */ v.jsx(Ca, { children: s.slice(0, 5).map((u) => /* @__PURE__ */ v.jsxs(
          Sa,
          {
            sx: {
              borderBottom: "1px solid",
              borderColor: "divider",
              "&:last-child": { borderBottom: "none" }
            },
            children: [
              /* @__PURE__ */ v.jsx($a, { children: /* @__PURE__ */ v.jsx(ss, { color: u.status === "pending" ? "warning" : "success" }) }),
              /* @__PURE__ */ v.jsx(
                Ra,
                {
                  primary: u.title,
                  secondary: /* @__PURE__ */ v.jsxs(ut, { children: [
                    /* @__PURE__ */ v.jsxs(ze, { variant: "body2", color: "textSecondary", children: [
                      u.studentName,
                      " • ",
                      u.courseName
                    ] }),
                    /* @__PURE__ */ v.jsx(
                      Ta,
                      {
                        label: u.status,
                        size: "small",
                        color: u.status === "pending" ? "warning" : "success",
                        sx: { mt: 0.5 }
                      }
                    )
                  ] })
                }
              )
            ]
          },
          u.id
        )) })
      ] }) }) }),
      /* @__PURE__ */ v.jsx(Ht, { item: !0, xs: 12, md: 6, children: /* @__PURE__ */ v.jsx(Vn, { children: /* @__PURE__ */ v.jsxs(Un, { children: [
        /* @__PURE__ */ v.jsxs(ut, { display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2, children: [
          /* @__PURE__ */ v.jsx(ze, { variant: "h6", fontWeight: "bold", children: "Today's Schedule" }),
          /* @__PURE__ */ v.jsx(
            fu,
            {
              variant: "outlined",
              size: "small",
              startIcon: /* @__PURE__ */ v.jsx(Xd, {}),
              children: "Full Schedule"
            }
          )
        ] }),
        /* @__PURE__ */ v.jsx(Ca, { children: [
          { time: "09:00 AM", subject: "Mathematics - Grade 10", type: "Live Class" },
          { time: "11:00 AM", subject: "Physics - Grade 12", type: "Doubt Session" },
          { time: "02:00 PM", subject: "Chemistry - Grade 11", type: "Assessment Review" },
          { time: "04:00 PM", subject: "Mathematics - Grade 9", type: "Remedial Class" }
        ].map((u, f) => /* @__PURE__ */ v.jsxs(
          Sa,
          {
            sx: {
              borderBottom: "1px solid",
              borderColor: "divider",
              "&:last-child": { borderBottom: "none" }
            },
            children: [
              /* @__PURE__ */ v.jsx($a, { children: /* @__PURE__ */ v.jsx(Qd, { color: "primary" }) }),
              /* @__PURE__ */ v.jsx(
                Ra,
                {
                  primary: u.subject,
                  secondary: /* @__PURE__ */ v.jsxs(ut, { children: [
                    /* @__PURE__ */ v.jsx(ze, { variant: "body2", color: "textSecondary", children: u.time }),
                    /* @__PURE__ */ v.jsx(
                      Ta,
                      {
                        label: u.type,
                        size: "small",
                        variant: "outlined",
                        sx: { mt: 0.5 }
                      }
                    )
                  ] })
                }
              )
            ]
          },
          f
        )) })
      ] }) }) }),
      /* @__PURE__ */ v.jsx(Ht, { item: !0, xs: 12, children: /* @__PURE__ */ v.jsx(Vn, { children: /* @__PURE__ */ v.jsxs(Un, { children: [
        /* @__PURE__ */ v.jsx(ze, { variant: "h6", gutterBottom: !0, fontWeight: "bold", children: "Quick Actions" }),
        /* @__PURE__ */ v.jsx(Ht, { container: !0, spacing: 2, children: [
          {
            label: "Create Assignment",
            description: "Set up new homework or test",
            icon: /* @__PURE__ */ v.jsx(Qd, {}),
            action: () => console.log("Create assignment"),
            color: "primary"
          },
          {
            label: "Schedule Class",
            description: "Plan live teaching session",
            icon: /* @__PURE__ */ v.jsx(Xd, {}),
            action: () => console.log("Schedule class"),
            color: "success"
          },
          {
            label: "Review Doubts",
            description: "Help students with questions",
            icon: /* @__PURE__ */ v.jsx(ss, {}),
            action: () => window.location.href = "/doubts",
            color: "warning"
          },
          {
            label: "View Analytics",
            description: "Check class performance",
            icon: /* @__PURE__ */ v.jsx(Um, {}),
            action: () => window.location.href = "/analytics",
            color: "info"
          }
        ].map((u, f) => /* @__PURE__ */ v.jsx(Ht, { item: !0, xs: 12, sm: 6, md: 3, children: /* @__PURE__ */ v.jsx(
          Vn,
          {
            sx: {
              cursor: "pointer",
              transition: "all 0.3s",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: 4
              }
            },
            onClick: u.action,
            children: /* @__PURE__ */ v.jsxs(Un, { sx: { textAlign: "center" }, children: [
              /* @__PURE__ */ v.jsx(
                ut,
                {
                  sx: {
                    p: 2,
                    borderRadius: "50%",
                    bgcolor: `${u.color}.light`,
                    color: `${u.color}.contrastText`,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 64,
                    height: 64,
                    mb: 2
                  },
                  children: u.icon
                }
              ),
              /* @__PURE__ */ v.jsx(ze, { variant: "h6", gutterBottom: !0, children: u.label }),
              /* @__PURE__ */ v.jsx(ze, { variant: "body2", color: "textSecondary", children: u.description })
            ] })
          }
        ) }, f)) })
      ] }) }) })
    ] })
  ] });
}, r2 = () => /* @__PURE__ */ v.jsxs(ut, { p: 3, children: [
  /* @__PURE__ */ v.jsx(ze, { variant: "h4", children: "Manage Courses" }),
  /* @__PURE__ */ v.jsx(ze, { variant: "body1", children: "Course management tools will appear here." })
] }), n2 = () => /* @__PURE__ */ v.jsxs(ut, { p: 3, children: [
  /* @__PURE__ */ v.jsx(ze, { variant: "h4", children: "Student Progress" }),
  /* @__PURE__ */ v.jsx(ze, { variant: "body1", children: "Student progress and reports will appear here." })
] }), o2 = () => /* @__PURE__ */ v.jsxs(ut, { p: 3, children: [
  /* @__PURE__ */ v.jsx(ze, { variant: "h4", children: "Doubt Resolution" }),
  /* @__PURE__ */ v.jsx(ze, { variant: "body1", children: "Resolve student doubts here." })
] }), s2 = () => /* @__PURE__ */ v.jsxs(ut, { p: 3, children: [
  /* @__PURE__ */ v.jsx(ze, { variant: "h4", children: "Analytics" }),
  /* @__PURE__ */ v.jsx(ze, { variant: "body1", children: "Class analytics and reports will appear here." })
] }), i2 = () => {
  const { user: e } = Vm();
  return !e || e.role !== "teacher" ? /* @__PURE__ */ v.jsx(ol, { to: "/login", replace: !0 }) : /* @__PURE__ */ v.jsx(ut, { sx: { display: "flex", minHeight: "100vh" }, children: /* @__PURE__ */ v.jsx(t2, { children: /* @__PURE__ */ v.jsxs(dy, { children: [
    /* @__PURE__ */ v.jsx(pr, { path: "/", element: /* @__PURE__ */ v.jsx(Jd, {}) }),
    /* @__PURE__ */ v.jsx(pr, { path: "/dashboard", element: /* @__PURE__ */ v.jsx(Jd, {}) }),
    /* @__PURE__ */ v.jsx(pr, { path: "/courses", element: /* @__PURE__ */ v.jsx(r2, {}) }),
    /* @__PURE__ */ v.jsx(pr, { path: "/courses/:courseId", element: /* @__PURE__ */ v.jsx("div", { children: "Course Management" }) }),
    /* @__PURE__ */ v.jsx(pr, { path: "/students", element: /* @__PURE__ */ v.jsx(n2, {}) }),
    /* @__PURE__ */ v.jsx(pr, { path: "/doubts", element: /* @__PURE__ */ v.jsx(o2, {}) }),
    /* @__PURE__ */ v.jsx(pr, { path: "/analytics", element: /* @__PURE__ */ v.jsx(s2, {}) }),
    /* @__PURE__ */ v.jsx(pr, { path: "*", element: /* @__PURE__ */ v.jsx(ol, { to: "/", replace: !0 }) })
  ] }) }) });
}, a2 = new kT({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: !1,
      staleTime: 5 * 60 * 1e3
    }
  }
}), c2 = gy({
  React: at,
  ReactDOM: Bn,
  rootComponent: () => /* @__PURE__ */ v.jsxs(pp, { theme: rm, children: [
    /* @__PURE__ */ v.jsx(Mp, {}),
    /* @__PURE__ */ v.jsx(VT, { client: a2, children: /* @__PURE__ */ v.jsx(Gw, { children: /* @__PURE__ */ v.jsx(fy, { children: /* @__PURE__ */ v.jsx(i2, {}) }) }) })
  ] }),
  errorBoundary: (e, t, r) => (console.error("Teacher App Error:", e, t, r), at.createElement("div", null, "Error in Teacher App"))
}), { bootstrap: f2, mount: p2, unmount: h2 } = c2;
export {
  f2 as bootstrap,
  p2 as mount,
  h2 as unmount
};
//# sourceMappingURL=teacher-app.js.map
