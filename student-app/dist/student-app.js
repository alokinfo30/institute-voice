import * as v from "react";
import ut, { forwardRef as ep, useContext as kc, Children as tp, isValidElement as Gr, cloneElement as Qr, createContext as np, useState as co, useEffect as rp } from "react";
import * as op from "react-dom";
import dr from "react-dom";
import { useNavigate as sp, useLocation as ip, Navigate as ya, Routes as ap, Route as zt, BrowserRouter as jc } from "react-router-dom";
function lp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function en(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var s = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, s.get ? s : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var As = { exports: {} }, nr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ba;
function cp() {
  if (ba)
    return nr;
  ba = 1;
  var e = ut, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(l, c, d) {
    var f, p = {}, m = null, g = null;
    d !== void 0 && (m = "" + d), c.key !== void 0 && (m = "" + c.key), c.ref !== void 0 && (g = c.ref);
    for (f in c)
      r.call(c, f) && !i.hasOwnProperty(f) && (p[f] = c[f]);
    if (l && l.defaultProps)
      for (f in c = l.defaultProps, c)
        p[f] === void 0 && (p[f] = c[f]);
    return { $$typeof: t, type: l, key: m, ref: g, props: p, _owner: s.current };
  }
  return nr.Fragment = n, nr.jsx = a, nr.jsxs = a, nr;
}
var rr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ga;
function up() {
  return ga || (ga = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ut, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = Symbol.iterator, u = "@@iterator";
    function b(O) {
      if (O === null || typeof O != "object")
        return null;
      var L = h && O[h] || O[u];
      return typeof L == "function" ? L : null;
    }
    var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(O) {
      {
        for (var L = arguments.length, G = new Array(L > 1 ? L - 1 : 0), ue = 1; ue < L; ue++)
          G[ue - 1] = arguments[ue];
        T("error", O, G);
      }
    }
    function T(O, L, G) {
      {
        var ue = R.ReactDebugCurrentFrame, Oe = ue.getStackAddendum();
        Oe !== "" && (L += "%s", G = G.concat([Oe]));
        var Me = G.map(function(Ce) {
          return String(Ce);
        });
        Me.unshift("Warning: " + L), Function.prototype.apply.call(console[O], console, Me);
      }
    }
    var C = !1, E = !1, w = !1, S = !1, N = !1, M;
    M = Symbol.for("react.module.reference");
    function B(O) {
      return !!(typeof O == "string" || typeof O == "function" || O === r || O === i || N || O === s || O === d || O === f || S || O === g || C || E || w || typeof O == "object" && O !== null && (O.$$typeof === m || O.$$typeof === p || O.$$typeof === a || O.$$typeof === l || O.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      O.$$typeof === M || O.getModuleId !== void 0));
    }
    function W(O, L, G) {
      var ue = O.displayName;
      if (ue)
        return ue;
      var Oe = L.displayName || L.name || "";
      return Oe !== "" ? G + "(" + Oe + ")" : G;
    }
    function z(O) {
      return O.displayName || "Context";
    }
    function j(O) {
      if (O == null)
        return null;
      if (typeof O.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof O == "function")
        return O.displayName || O.name || null;
      if (typeof O == "string")
        return O;
      switch (O) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case i:
          return "Profiler";
        case s:
          return "StrictMode";
        case d:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case l:
            var L = O;
            return z(L) + ".Consumer";
          case a:
            var G = O;
            return z(G._context) + ".Provider";
          case c:
            return W(O, O.render, "ForwardRef");
          case p:
            var ue = O.displayName || null;
            return ue !== null ? ue : j(O.type) || "Memo";
          case m: {
            var Oe = O, Me = Oe._payload, Ce = Oe._init;
            try {
              return j(Ce(Me));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, U = 0, F, H, I, K, k, D, Q;
    function X() {
    }
    X.__reactDisabledLog = !0;
    function q() {
      {
        if (U === 0) {
          F = console.log, H = console.info, I = console.warn, K = console.error, k = console.group, D = console.groupCollapsed, Q = console.groupEnd;
          var O = {
            configurable: !0,
            enumerable: !0,
            value: X,
            writable: !0
          };
          Object.defineProperties(console, {
            info: O,
            log: O,
            warn: O,
            error: O,
            group: O,
            groupCollapsed: O,
            groupEnd: O
          });
        }
        U++;
      }
    }
    function ee() {
      {
        if (U--, U === 0) {
          var O = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, O, {
              value: F
            }),
            info: A({}, O, {
              value: H
            }),
            warn: A({}, O, {
              value: I
            }),
            error: A({}, O, {
              value: K
            }),
            group: A({}, O, {
              value: k
            }),
            groupCollapsed: A({}, O, {
              value: D
            }),
            groupEnd: A({}, O, {
              value: Q
            })
          });
        }
        U < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = R.ReactCurrentDispatcher, ne;
    function re(O, L, G) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (Oe) {
            var ue = Oe.stack.trim().match(/\n( *(at )?)/);
            ne = ue && ue[1] || "";
          }
        return `
` + ne + O;
      }
    }
    var oe = !1, se;
    {
      var le = typeof WeakMap == "function" ? WeakMap : Map;
      se = new le();
    }
    function $(O, L) {
      if (!O || oe)
        return "";
      {
        var G = se.get(O);
        if (G !== void 0)
          return G;
      }
      var ue;
      oe = !0;
      var Oe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Me;
      Me = J.current, J.current = null, q();
      try {
        if (L) {
          var Ce = function() {
            throw Error();
          };
          if (Object.defineProperty(Ce.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ce, []);
            } catch (pt) {
              ue = pt;
            }
            Reflect.construct(O, [], Ce);
          } else {
            try {
              Ce.call();
            } catch (pt) {
              ue = pt;
            }
            O.call(Ce.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (pt) {
            ue = pt;
          }
          O();
        }
      } catch (pt) {
        if (pt && ue && typeof pt.stack == "string") {
          for (var ve = pt.stack.split(`
`), ct = ue.stack.split(`
`), Ve = ve.length - 1, He = ct.length - 1; Ve >= 1 && He >= 0 && ve[Ve] !== ct[He]; )
            He--;
          for (; Ve >= 1 && He >= 0; Ve--, He--)
            if (ve[Ve] !== ct[He]) {
              if (Ve !== 1 || He !== 1)
                do
                  if (Ve--, He--, He < 0 || ve[Ve] !== ct[He]) {
                    var Ct = `
` + ve[Ve].replace(" at new ", " at ");
                    return O.displayName && Ct.includes("<anonymous>") && (Ct = Ct.replace("<anonymous>", O.displayName)), typeof O == "function" && se.set(O, Ct), Ct;
                  }
                while (Ve >= 1 && He >= 0);
              break;
            }
        }
      } finally {
        oe = !1, J.current = Me, ee(), Error.prepareStackTrace = Oe;
      }
      var xn = O ? O.displayName || O.name : "", nn = xn ? re(xn) : "";
      return typeof O == "function" && se.set(O, nn), nn;
    }
    function ie(O, L, G) {
      return $(O, !1);
    }
    function de(O) {
      var L = O.prototype;
      return !!(L && L.isReactComponent);
    }
    function ge(O, L, G) {
      if (O == null)
        return "";
      if (typeof O == "function")
        return $(O, de(O));
      if (typeof O == "string")
        return re(O);
      switch (O) {
        case d:
          return re("Suspense");
        case f:
          return re("SuspenseList");
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case c:
            return ie(O.render);
          case p:
            return ge(O.type, L, G);
          case m: {
            var ue = O, Oe = ue._payload, Me = ue._init;
            try {
              return ge(Me(Oe), L, G);
            } catch {
            }
          }
        }
      return "";
    }
    var Qe = Object.prototype.hasOwnProperty, it = {}, at = R.ReactDebugCurrentFrame;
    function tt(O) {
      if (O) {
        var L = O._owner, G = ge(O.type, O._source, L ? L.type : null);
        at.setExtraStackFrame(G);
      } else
        at.setExtraStackFrame(null);
    }
    function dt(O, L, G, ue, Oe) {
      {
        var Me = Function.call.bind(Qe);
        for (var Ce in O)
          if (Me(O, Ce)) {
            var ve = void 0;
            try {
              if (typeof O[Ce] != "function") {
                var ct = Error((ue || "React class") + ": " + G + " type `" + Ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof O[Ce] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ct.name = "Invariant Violation", ct;
              }
              ve = O[Ce](L, Ce, ue, G, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ve) {
              ve = Ve;
            }
            ve && !(ve instanceof Error) && (tt(Oe), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ue || "React class", G, Ce, typeof ve), tt(null)), ve instanceof Error && !(ve.message in it) && (it[ve.message] = !0, tt(Oe), P("Failed %s type: %s", G, ve.message), tt(null));
          }
      }
    }
    var Le = Array.isArray;
    function nt(O) {
      return Le(O);
    }
    function rt(O) {
      {
        var L = typeof Symbol == "function" && Symbol.toStringTag, G = L && O[Symbol.toStringTag] || O.constructor.name || "Object";
        return G;
      }
    }
    function Fe(O) {
      try {
        return lt(O), !1;
      } catch {
        return !0;
      }
    }
    function lt(O) {
      return "" + O;
    }
    function jt(O) {
      if (Fe(O))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rt(O)), lt(O);
    }
    var ft = R.ReactCurrentOwner, Te = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ce, yt, Bt;
    Bt = {};
    function Kt(O) {
      if (Qe.call(O, "ref")) {
        var L = Object.getOwnPropertyDescriptor(O, "ref").get;
        if (L && L.isReactWarning)
          return !1;
      }
      return O.ref !== void 0;
    }
    function tr(O) {
      if (Qe.call(O, "key")) {
        var L = Object.getOwnPropertyDescriptor(O, "key").get;
        if (L && L.isReactWarning)
          return !1;
      }
      return O.key !== void 0;
    }
    function ae(O, L) {
      if (typeof O.ref == "string" && ft.current && L && ft.current.stateNode !== L) {
        var G = j(ft.current.type);
        Bt[G] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j(ft.current.type), O.ref), Bt[G] = !0);
      }
    }
    function Ee(O, L) {
      {
        var G = function() {
          ce || (ce = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        G.isReactWarning = !0, Object.defineProperty(O, "key", {
          get: G,
          configurable: !0
        });
      }
    }
    function Xe(O, L) {
      {
        var G = function() {
          yt || (yt = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        G.isReactWarning = !0, Object.defineProperty(O, "ref", {
          get: G,
          configurable: !0
        });
      }
    }
    var Yt = function(O, L, G, ue, Oe, Me, Ce) {
      var ve = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: O,
        key: L,
        ref: G,
        props: Ce,
        // Record the component responsible for creating this element.
        _owner: Me
      };
      return ve._store = {}, Object.defineProperty(ve._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ve, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ue
      }), Object.defineProperty(ve, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Oe
      }), Object.freeze && (Object.freeze(ve.props), Object.freeze(ve)), ve;
    };
    function Lr(O, L, G, ue, Oe) {
      {
        var Me, Ce = {}, ve = null, ct = null;
        G !== void 0 && (jt(G), ve = "" + G), tr(L) && (jt(L.key), ve = "" + L.key), Kt(L) && (ct = L.ref, ae(L, Oe));
        for (Me in L)
          Qe.call(L, Me) && !Te.hasOwnProperty(Me) && (Ce[Me] = L[Me]);
        if (O && O.defaultProps) {
          var Ve = O.defaultProps;
          for (Me in Ve)
            Ce[Me] === void 0 && (Ce[Me] = Ve[Me]);
        }
        if (ve || ct) {
          var He = typeof O == "function" ? O.displayName || O.name || "Unknown" : O;
          ve && Ee(Ce, He), ct && Xe(Ce, He);
        }
        return Yt(O, ve, ct, Oe, ue, ft.current, Ce);
      }
    }
    var cs = R.ReactCurrentOwner, ca = R.ReactDebugCurrentFrame;
    function vn(O) {
      if (O) {
        var L = O._owner, G = ge(O.type, O._source, L ? L.type : null);
        ca.setExtraStackFrame(G);
      } else
        ca.setExtraStackFrame(null);
    }
    var us;
    us = !1;
    function ds(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function ua() {
      {
        if (cs.current) {
          var O = j(cs.current.type);
          if (O)
            return `

Check the render method of \`` + O + "`.";
        }
        return "";
      }
    }
    function qf(O) {
      {
        if (O !== void 0) {
          var L = O.fileName.replace(/^.*[\\\/]/, ""), G = O.lineNumber;
          return `

Check your code at ` + L + ":" + G + ".";
        }
        return "";
      }
    }
    var da = {};
    function Wf(O) {
      {
        var L = ua();
        if (!L) {
          var G = typeof O == "string" ? O : O.displayName || O.name;
          G && (L = `

Check the top-level render call using <` + G + ">.");
        }
        return L;
      }
    }
    function fa(O, L) {
      {
        if (!O._store || O._store.validated || O.key != null)
          return;
        O._store.validated = !0;
        var G = Wf(L);
        if (da[G])
          return;
        da[G] = !0;
        var ue = "";
        O && O._owner && O._owner !== cs.current && (ue = " It was passed a child from " + j(O._owner.type) + "."), vn(O), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', G, ue), vn(null);
      }
    }
    function pa(O, L) {
      {
        if (typeof O != "object")
          return;
        if (nt(O))
          for (var G = 0; G < O.length; G++) {
            var ue = O[G];
            ds(ue) && fa(ue, L);
          }
        else if (ds(O))
          O._store && (O._store.validated = !0);
        else if (O) {
          var Oe = b(O);
          if (typeof Oe == "function" && Oe !== O.entries)
            for (var Me = Oe.call(O), Ce; !(Ce = Me.next()).done; )
              ds(Ce.value) && fa(Ce.value, L);
        }
      }
    }
    function Hf(O) {
      {
        var L = O.type;
        if (L == null || typeof L == "string")
          return;
        var G;
        if (typeof L == "function")
          G = L.propTypes;
        else if (typeof L == "object" && (L.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        L.$$typeof === p))
          G = L.propTypes;
        else
          return;
        if (G) {
          var ue = j(L);
          dt(G, O.props, "prop", ue, O);
        } else if (L.PropTypes !== void 0 && !us) {
          us = !0;
          var Oe = j(L);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Oe || "Unknown");
        }
        typeof L.getDefaultProps == "function" && !L.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Kf(O) {
      {
        for (var L = Object.keys(O.props), G = 0; G < L.length; G++) {
          var ue = L[G];
          if (ue !== "children" && ue !== "key") {
            vn(O), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ue), vn(null);
            break;
          }
        }
        O.ref !== null && (vn(O), P("Invalid attribute `ref` supplied to `React.Fragment`."), vn(null));
      }
    }
    var ha = {};
    function ma(O, L, G, ue, Oe, Me) {
      {
        var Ce = B(O);
        if (!Ce) {
          var ve = "";
          (O === void 0 || typeof O == "object" && O !== null && Object.keys(O).length === 0) && (ve += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ct = qf(Oe);
          ct ? ve += ct : ve += ua();
          var Ve;
          O === null ? Ve = "null" : nt(O) ? Ve = "array" : O !== void 0 && O.$$typeof === t ? (Ve = "<" + (j(O.type) || "Unknown") + " />", ve = " Did you accidentally export a JSX literal instead of a component?") : Ve = typeof O, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ve, ve);
        }
        var He = Lr(O, L, G, Oe, Me);
        if (He == null)
          return He;
        if (Ce) {
          var Ct = L.children;
          if (Ct !== void 0)
            if (ue)
              if (nt(Ct)) {
                for (var xn = 0; xn < Ct.length; xn++)
                  pa(Ct[xn], O);
                Object.freeze && Object.freeze(Ct);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              pa(Ct, O);
        }
        if (Qe.call(L, "key")) {
          var nn = j(O), pt = Object.keys(L).filter(function(Zf) {
            return Zf !== "key";
          }), fs = pt.length > 0 ? "{key: someKey, " + pt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ha[nn + fs]) {
            var Jf = pt.length > 0 ? "{" + pt.join(": ..., ") + ": ...}" : "{}";
            P(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, fs, nn, Jf, nn), ha[nn + fs] = !0;
          }
        }
        return O === r ? Kf(He) : Hf(He), He;
      }
    }
    function Yf(O, L, G) {
      return ma(O, L, G, !0);
    }
    function Gf(O, L, G) {
      return ma(O, L, G, !1);
    }
    var Qf = Gf, Xf = Yf;
    rr.Fragment = r, rr.jsx = Qf, rr.jsxs = Xf;
  }()), rr;
}
process.env.NODE_ENV === "production" ? As.exports = cp() : As.exports = up();
var y = As.exports;
function va(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function uo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? va(Object(n), !0).forEach(function(r) {
      dp(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : va(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ac(e) {
  return (Ac = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  })(e);
}
function dp(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ms(e) {
  return (Ms = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  })(e);
}
function Mc(e, t) {
  var n;
  if (typeof (n = t.domElement ? function() {
    return t.domElement;
  } : t.domElementGetter ? t.domElementGetter : e.domElementGetter ? e.domElementGetter : function(r) {
    var s = r.appName || r.name;
    if (!s)
      throw Error("single-spa's dom-element-getter-helpers was not given an application name as a prop, so it can't make a unique dom element container for the react application");
    var i = "single-spa-application:".concat(s);
    return function() {
      var a = document.getElementById(i);
      return a || ((a = document.createElement("div")).id = i, document.body.appendChild(a)), a;
    };
  }(t)) != "function")
    throw Error("single-spa's dom-element-getter-helpers was given an invalid domElementGetter for application or parcel '".concat(t.name, "'. Expected a function, received ").concat(Ms(n)));
  return function() {
    var r = n(t);
    if (!(r instanceof HTMLElement))
      throw Error("single-spa's dom-element-getter-helpers: domElementGetter returned an invalid dom element for application or parcel '".concat(t.name, "'. Expected HTMLElement, received ").concat(Ms(r)));
    return r;
  };
}
var vr = null;
try {
  vr = require("react").createContext();
} catch {
}
var fp = { React: null, ReactDOM: null, rootComponent: null, loadRootComponent: null, renderType: null, errorBoundary: null, errorBoundaryClass: null, domElementGetter: null, parcelCanUpdate: !0, suppressComponentDidCatchWarning: !1, domElements: {}, renderResults: {}, updateResolves: {} };
function pp(e) {
  if (Ac(e) !== "object")
    throw new Error("single-spa-react requires a configuration object");
  var t = uo(uo({}, fp), e);
  if (!t.React)
    throw new Error("single-spa-react must be passed opts.React");
  if (!t.ReactDOM)
    throw new Error("single-spa-react must be passed opts.ReactDOM");
  if (!t.rootComponent && !t.loadRootComponent)
    throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");
  if (t.errorBoundary && typeof t.errorBoundary != "function")
    throw Error("The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements");
  !vr && t.React.createContext && (vr = t.React.createContext()), t.SingleSpaRoot = function(r) {
    function s(i) {
      s.displayName = "SingleSpaRoot(".concat(i.name, ")");
    }
    return s.prototype = Object.create(r.React.Component.prototype), s.prototype.componentDidMount = function() {
      setTimeout(this.props.mountFinished);
    }, s.prototype.componentWillUnmount = function() {
      setTimeout(this.props.unmountFinished);
    }, s.prototype.render = function() {
      return setTimeout(this.props.updateFinished), this.props.children;
    }, s;
  }(t);
  var n = { bootstrap: hp.bind(null, t), mount: mp.bind(null, t), unmount: yp.bind(null, t) };
  return t.parcelCanUpdate && (n.update = bp.bind(null, t)), n;
}
function hp(e, t) {
  return e.rootComponent ? Promise.resolve() : e.loadRootComponent(t).then(function(n) {
    e.rootComponent = n;
  });
}
function mp(e, t) {
  return new Promise(function(n, r) {
    e.suppressComponentDidCatchWarning || !function(l) {
      if (!(l && typeof l.version == "string" && l.version.indexOf(".") >= 0))
        return !1;
      var c = l.version.slice(0, l.version.indexOf("."));
      try {
        return Number(c) >= 16;
      } catch {
        return !1;
      }
    }(e.React) || e.errorBoundary || (e.rootComponent.prototype ? e.rootComponent.prototype.componentDidCatch || console.warn("single-spa-react: ".concat(t.name || t.appName || t.childAppName, "'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")) : console.warn("single-spa-react: ".concat(t.name || t.appName || t.childAppName, "'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts).")));
    var s = Dc(e, t, function() {
      n(this);
    }), i = Mc(e, t)(), a = function(l) {
      var c = l.opts, d = l.elementToRender, f = l.domElement, p = typeof c.renderType == "function" ? c.renderType() : c.renderType;
      if (["createRoot", "unstable_createRoot", "createBlockingRoot", "unstable_createBlockingRoot"].indexOf(p) >= 0) {
        var m = c.ReactDOM[p](f);
        return m.render(d), m;
      }
      return p === "hydrate" ? c.ReactDOM.hydrate(d, f) : c.ReactDOM.render(d, f), null;
    }({ elementToRender: s, domElement: i, opts: e });
    e.domElements[t.name] = i, e.renderResults[t.name] = a;
  });
}
function yp(e, t) {
  return new Promise(function(n) {
    e.unmountFinished = n;
    var r = e.renderResults[t.name];
    r && r.unmount ? r.unmount() : e.ReactDOM.unmountComponentAtNode(e.domElements[t.name]), delete e.domElements[t.name], delete e.renderResults[t.name];
  });
}
function bp(e, t) {
  return new Promise(function(n) {
    e.updateResolves[t.name] || (e.updateResolves[t.name] = []), e.updateResolves[t.name].push(n);
    var r = Dc(e, t, null), s = e.renderResults[t.name];
    if (s && s.render)
      s.render(r);
    else {
      var i = Mc(e, t)();
      e.ReactDOM.render(r, i);
    }
  });
}
function Dc(e, t, n) {
  var r = e.React.createElement(e.rootComponent, t), s = vr ? e.React.createElement(vr.Provider, { value: t }, r) : r;
  return (e.errorBoundary || t.errorBoundary || e.errorBoundaryClass || t.errorBoundaryClass) && (e.errorBoundaryClass = e.errorBoundaryClass || t.errorBoundaryClass || function(i, a) {
    function l(c) {
      i.React.Component.apply(this, arguments), this.state = { caughtError: null, caughtErrorInfo: null }, l.displayName = "SingleSpaReactErrorBoundary(".concat(c.name, ")");
    }
    return l.prototype = Object.create(i.React.Component.prototype), l.prototype.render = function() {
      return this.state.caughtError ? (i.errorBoundary || a.errorBoundary)(this.state.caughtError, this.state.caughtErrorInfo, this.props) : this.props.children;
    }, l.prototype.componentDidCatch = function(c, d) {
      this.setState({ caughtError: c, caughtErrorInfo: d });
    }, l;
  }(e, t), s = e.React.createElement(e.errorBoundaryClass, t, s)), s = e.React.createElement(e.SingleSpaRoot, uo(uo({}, t), {}, { mountFinished: n, updateFinished: function() {
    e.updateResolves[t.name] && (e.updateResolves[t.name].forEach(function(i) {
      return i();
    }), delete e.updateResolves[t.name]);
  }, unmountFinished: function() {
    setTimeout(e.unmountFinished);
  } }), s);
}
function fn(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const gp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fn
}, Symbol.toStringTag, { value: "Module" })), Fn = "$$material";
function x() {
  return x = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, x.apply(null, arguments);
}
function Z(e, t) {
  if (e == null)
    return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1)
        continue;
      n[r] = e[r];
    }
  return n;
}
var vp = !1;
function xp(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Ep(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Cp = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(s) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(s, i), r.tags.push(s);
    }, this.isSpeedy = n.speedy === void 0 ? !vp : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Ep(this));
    var s = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = xp(s);
      try {
        i.insertRule(r, i.cssRules.length);
      } catch {
      }
    } else
      s.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      var s;
      return (s = r.parentNode) == null ? void 0 : s.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), ot = "-ms-", fo = "-moz-", Se = "-webkit-", Fc = "comm", pi = "rule", hi = "decl", Tp = "@import", Lc = "@keyframes", Rp = "@layer", Op = Math.abs, So = String.fromCharCode, Sp = Object.assign;
function wp(e, t) {
  return et(e, 0) ^ 45 ? (((t << 2 ^ et(e, 0)) << 2 ^ et(e, 1)) << 2 ^ et(e, 2)) << 2 ^ et(e, 3) : 0;
}
function Bc(e) {
  return e.trim();
}
function Pp(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function we(e, t, n) {
  return e.replace(t, n);
}
function Ds(e, t) {
  return e.indexOf(t);
}
function et(e, t) {
  return e.charCodeAt(t) | 0;
}
function xr(e, t, n) {
  return e.slice(t, n);
}
function Mt(e) {
  return e.length;
}
function mi(e) {
  return e.length;
}
function Br(e, t) {
  return t.push(e), e;
}
function $p(e, t) {
  return e.map(t).join("");
}
var wo = 1, Ln = 1, zc = 0, mt = 0, Ke = 0, Hn = "";
function Po(e, t, n, r, s, i, a) {
  return { value: e, root: t, parent: n, type: r, props: s, children: i, line: wo, column: Ln, length: a, return: "" };
}
function or(e, t) {
  return Sp(Po("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function _p() {
  return Ke;
}
function Np() {
  return Ke = mt > 0 ? et(Hn, --mt) : 0, Ln--, Ke === 10 && (Ln = 1, wo--), Ke;
}
function gt() {
  return Ke = mt < zc ? et(Hn, mt++) : 0, Ln++, Ke === 10 && (Ln = 1, wo++), Ke;
}
function Ft() {
  return et(Hn, mt);
}
function Xr() {
  return mt;
}
function wr(e, t) {
  return xr(Hn, e, t);
}
function Er(e) {
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
function Uc(e) {
  return wo = Ln = 1, zc = Mt(Hn = e), mt = 0, [];
}
function Vc(e) {
  return Hn = "", e;
}
function Jr(e) {
  return Bc(wr(mt - 1, Fs(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ip(e) {
  for (; (Ke = Ft()) && Ke < 33; )
    gt();
  return Er(e) > 2 || Er(Ke) > 3 ? "" : " ";
}
function kp(e, t) {
  for (; --t && gt() && !(Ke < 48 || Ke > 102 || Ke > 57 && Ke < 65 || Ke > 70 && Ke < 97); )
    ;
  return wr(e, Xr() + (t < 6 && Ft() == 32 && gt() == 32));
}
function Fs(e) {
  for (; gt(); )
    switch (Ke) {
      case e:
        return mt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Fs(Ke);
        break;
      case 40:
        e === 41 && Fs(e);
        break;
      case 92:
        gt();
        break;
    }
  return mt;
}
function jp(e, t) {
  for (; gt() && e + Ke !== 47 + 10; )
    if (e + Ke === 42 + 42 && Ft() === 47)
      break;
  return "/*" + wr(t, mt - 1) + "*" + So(e === 47 ? e : gt());
}
function Ap(e) {
  for (; !Er(Ft()); )
    gt();
  return wr(e, mt);
}
function Mp(e) {
  return Vc(Zr("", null, null, null, [""], e = Uc(e), 0, [0], e));
}
function Zr(e, t, n, r, s, i, a, l, c) {
  for (var d = 0, f = 0, p = a, m = 0, g = 0, h = 0, u = 1, b = 1, R = 1, P = 0, T = "", C = s, E = i, w = r, S = T; b; )
    switch (h = P, P = gt()) {
      case 40:
        if (h != 108 && et(S, p - 1) == 58) {
          Ds(S += we(Jr(P), "&", "&\f"), "&\f") != -1 && (R = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += Jr(P);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += Ip(h);
        break;
      case 92:
        S += kp(Xr() - 1, 7);
        continue;
      case 47:
        switch (Ft()) {
          case 42:
          case 47:
            Br(Dp(jp(gt(), Xr()), t, n), c);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * u:
        l[d++] = Mt(S) * R;
      case 125 * u:
      case 59:
      case 0:
        switch (P) {
          case 0:
          case 125:
            b = 0;
          case 59 + f:
            R == -1 && (S = we(S, /\f/g, "")), g > 0 && Mt(S) - p && Br(g > 32 ? Ea(S + ";", r, n, p - 1) : Ea(we(S, " ", "") + ";", r, n, p - 2), c);
            break;
          case 59:
            S += ";";
          default:
            if (Br(w = xa(S, t, n, d, f, s, l, T, C = [], E = [], p), i), P === 123)
              if (f === 0)
                Zr(S, t, w, w, C, i, p, l, E);
              else
                switch (m === 99 && et(S, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Zr(e, w, w, r && Br(xa(e, w, w, 0, 0, s, l, T, s, C = [], p), E), s, E, p, l, r ? C : E);
                    break;
                  default:
                    Zr(S, w, w, w, [""], E, 0, l, E);
                }
        }
        d = f = g = 0, u = R = 1, T = S = "", p = a;
        break;
      case 58:
        p = 1 + Mt(S), g = h;
      default:
        if (u < 1) {
          if (P == 123)
            --u;
          else if (P == 125 && u++ == 0 && Np() == 125)
            continue;
        }
        switch (S += So(P), P * u) {
          case 38:
            R = f > 0 ? 1 : (S += "\f", -1);
            break;
          case 44:
            l[d++] = (Mt(S) - 1) * R, R = 1;
            break;
          case 64:
            Ft() === 45 && (S += Jr(gt())), m = Ft(), f = p = Mt(T = S += Ap(Xr())), P++;
            break;
          case 45:
            h === 45 && Mt(S) == 2 && (u = 0);
        }
    }
  return i;
}
function xa(e, t, n, r, s, i, a, l, c, d, f) {
  for (var p = s - 1, m = s === 0 ? i : [""], g = mi(m), h = 0, u = 0, b = 0; h < r; ++h)
    for (var R = 0, P = xr(e, p + 1, p = Op(u = a[h])), T = e; R < g; ++R)
      (T = Bc(u > 0 ? m[R] + " " + P : we(P, /&\f/g, m[R]))) && (c[b++] = T);
  return Po(e, t, n, s === 0 ? pi : l, c, d, f);
}
function Dp(e, t, n) {
  return Po(e, t, n, Fc, So(_p()), xr(e, 2, -2), 0);
}
function Ea(e, t, n, r) {
  return Po(e, t, n, hi, xr(e, 0, r), xr(e, r + 1, -1), r);
}
function jn(e, t) {
  for (var n = "", r = mi(e), s = 0; s < r; s++)
    n += t(e[s], s, e, t) || "";
  return n;
}
function Fp(e, t, n, r) {
  switch (e.type) {
    case Rp:
      if (e.children.length)
        break;
    case Tp:
    case hi:
      return e.return = e.return || e.value;
    case Fc:
      return "";
    case Lc:
      return e.return = e.value + "{" + jn(e.children, r) + "}";
    case pi:
      e.value = e.props.join(",");
  }
  return Mt(n = jn(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Lp(e) {
  var t = mi(e);
  return function(n, r, s, i) {
    for (var a = "", l = 0; l < t; l++)
      a += e[l](n, r, s, i) || "";
    return a;
  };
}
function Bp(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function qc(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var zp = function(t, n, r) {
  for (var s = 0, i = 0; s = i, i = Ft(), s === 38 && i === 12 && (n[r] = 1), !Er(i); )
    gt();
  return wr(t, mt);
}, Up = function(t, n) {
  var r = -1, s = 44;
  do
    switch (Er(s)) {
      case 0:
        s === 38 && Ft() === 12 && (n[r] = 1), t[r] += zp(mt - 1, n, r);
        break;
      case 2:
        t[r] += Jr(s);
        break;
      case 4:
        if (s === 44) {
          t[++r] = Ft() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += So(s);
    }
  while (s = gt());
  return t;
}, Vp = function(t, n) {
  return Vc(Up(Uc(t), n));
}, Ca = /* @__PURE__ */ new WeakMap(), qp = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, s = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Ca.get(r)) && !s) {
      Ca.set(t, !0);
      for (var i = [], a = Vp(n, i), l = r.props, c = 0, d = 0; c < a.length; c++)
        for (var f = 0; f < l.length; f++, d++)
          t.props[d] = i[c] ? a[c].replace(/&\f/g, l[f]) : l[f] + " " + a[c];
    }
  }
}, Wp = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Wc(e, t) {
  switch (wp(e, t)) {
    case 5103:
      return Se + "print-" + e + e;
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
      return Se + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Se + e + fo + e + ot + e + e;
    case 6828:
    case 4268:
      return Se + e + ot + e + e;
    case 6165:
      return Se + e + ot + "flex-" + e + e;
    case 5187:
      return Se + e + we(e, /(\w+).+(:[^]+)/, Se + "box-$1$2" + ot + "flex-$1$2") + e;
    case 5443:
      return Se + e + ot + "flex-item-" + we(e, /flex-|-self/, "") + e;
    case 4675:
      return Se + e + ot + "flex-line-pack" + we(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Se + e + ot + we(e, "shrink", "negative") + e;
    case 5292:
      return Se + e + ot + we(e, "basis", "preferred-size") + e;
    case 6060:
      return Se + "box-" + we(e, "-grow", "") + Se + e + ot + we(e, "grow", "positive") + e;
    case 4554:
      return Se + we(e, /([^-])(transform)/g, "$1" + Se + "$2") + e;
    case 6187:
      return we(we(we(e, /(zoom-|grab)/, Se + "$1"), /(image-set)/, Se + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return we(e, /(image-set\([^]*)/, Se + "$1$`$1");
    case 4968:
      return we(we(e, /(.+:)(flex-)?(.*)/, Se + "box-pack:$3" + ot + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Se + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return we(e, /(.+)-inline(.+)/, Se + "$1$2") + e;
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
      if (Mt(e) - 1 - t > 6)
        switch (et(e, t + 1)) {
          case 109:
            if (et(e, t + 4) !== 45)
              break;
          case 102:
            return we(e, /(.+:)(.+)-([^]+)/, "$1" + Se + "$2-$3$1" + fo + (et(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Ds(e, "stretch") ? Wc(we(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (et(e, t + 1) !== 115)
        break;
    case 6444:
      switch (et(e, Mt(e) - 3 - (~Ds(e, "!important") && 10))) {
        case 107:
          return we(e, ":", ":" + Se) + e;
        case 101:
          return we(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Se + (et(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Se + "$2$3$1" + ot + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (et(e, t + 11)) {
        case 114:
          return Se + e + ot + we(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Se + e + ot + we(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Se + e + ot + we(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Se + e + ot + e + e;
  }
  return e;
}
var Hp = function(t, n, r, s) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case hi:
        t.return = Wc(t.value, t.length);
        break;
      case Lc:
        return jn([or(t, {
          value: we(t.value, "@", "@" + Se)
        })], s);
      case pi:
        if (t.length)
          return $p(t.props, function(i) {
            switch (Pp(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return jn([or(t, {
                  props: [we(i, /:(read-\w+)/, ":" + fo + "$1")]
                })], s);
              case "::placeholder":
                return jn([or(t, {
                  props: [we(i, /:(plac\w+)/, ":" + Se + "input-$1")]
                }), or(t, {
                  props: [we(i, /:(plac\w+)/, ":" + fo + "$1")]
                }), or(t, {
                  props: [we(i, /:(plac\w+)/, ot + "input-$1")]
                })], s);
            }
            return "";
          });
    }
}, Kp = [Hp], Hc = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(u) {
      var b = u.getAttribute("data-emotion");
      b.indexOf(" ") !== -1 && (document.head.appendChild(u), u.setAttribute("data-s", ""));
    });
  }
  var s = t.stylisPlugins || Kp, i = {}, a, l = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(u) {
      for (var b = u.getAttribute("data-emotion").split(" "), R = 1; R < b.length; R++)
        i[b[R]] = !0;
      l.push(u);
    }
  );
  var c, d = [qp, Wp];
  {
    var f, p = [Fp, Bp(function(u) {
      f.insert(u);
    })], m = Lp(d.concat(s, p)), g = function(b) {
      return jn(Mp(b), m);
    };
    c = function(b, R, P, T) {
      f = P, g(b ? b + "{" + R.styles + "}" : R.styles), T && (h.inserted[R.name] = !0);
    };
  }
  var h = {
    key: n,
    sheet: new Cp({
      key: n,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: c
  };
  return h.sheet.hydrate(l), h;
}, Ls = { exports: {} }, Pe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ta;
function Yp() {
  if (Ta)
    return Pe;
  Ta = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, u = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
  function T(E) {
    if (typeof E == "object" && E !== null) {
      var w = E.$$typeof;
      switch (w) {
        case t:
          switch (E = E.type, E) {
            case c:
            case d:
            case r:
            case i:
            case s:
            case p:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case l:
                case f:
                case h:
                case g:
                case a:
                  return E;
                default:
                  return w;
              }
          }
        case n:
          return w;
      }
    }
  }
  function C(E) {
    return T(E) === d;
  }
  return Pe.AsyncMode = c, Pe.ConcurrentMode = d, Pe.ContextConsumer = l, Pe.ContextProvider = a, Pe.Element = t, Pe.ForwardRef = f, Pe.Fragment = r, Pe.Lazy = h, Pe.Memo = g, Pe.Portal = n, Pe.Profiler = i, Pe.StrictMode = s, Pe.Suspense = p, Pe.isAsyncMode = function(E) {
    return C(E) || T(E) === c;
  }, Pe.isConcurrentMode = C, Pe.isContextConsumer = function(E) {
    return T(E) === l;
  }, Pe.isContextProvider = function(E) {
    return T(E) === a;
  }, Pe.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === t;
  }, Pe.isForwardRef = function(E) {
    return T(E) === f;
  }, Pe.isFragment = function(E) {
    return T(E) === r;
  }, Pe.isLazy = function(E) {
    return T(E) === h;
  }, Pe.isMemo = function(E) {
    return T(E) === g;
  }, Pe.isPortal = function(E) {
    return T(E) === n;
  }, Pe.isProfiler = function(E) {
    return T(E) === i;
  }, Pe.isStrictMode = function(E) {
    return T(E) === s;
  }, Pe.isSuspense = function(E) {
    return T(E) === p;
  }, Pe.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === r || E === d || E === i || E === s || E === p || E === m || typeof E == "object" && E !== null && (E.$$typeof === h || E.$$typeof === g || E.$$typeof === a || E.$$typeof === l || E.$$typeof === f || E.$$typeof === b || E.$$typeof === R || E.$$typeof === P || E.$$typeof === u);
  }, Pe.typeOf = T, Pe;
}
var $e = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ra;
function Gp() {
  return Ra || (Ra = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, u = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function T($) {
      return typeof $ == "string" || typeof $ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      $ === r || $ === d || $ === i || $ === s || $ === p || $ === m || typeof $ == "object" && $ !== null && ($.$$typeof === h || $.$$typeof === g || $.$$typeof === a || $.$$typeof === l || $.$$typeof === f || $.$$typeof === b || $.$$typeof === R || $.$$typeof === P || $.$$typeof === u);
    }
    function C($) {
      if (typeof $ == "object" && $ !== null) {
        var ie = $.$$typeof;
        switch (ie) {
          case t:
            var de = $.type;
            switch (de) {
              case c:
              case d:
              case r:
              case i:
              case s:
              case p:
                return de;
              default:
                var ge = de && de.$$typeof;
                switch (ge) {
                  case l:
                  case f:
                  case h:
                  case g:
                  case a:
                    return ge;
                  default:
                    return ie;
                }
            }
          case n:
            return ie;
        }
      }
    }
    var E = c, w = d, S = l, N = a, M = t, B = f, W = r, z = h, j = g, A = n, U = i, F = s, H = p, I = !1;
    function K($) {
      return I || (I = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), k($) || C($) === c;
    }
    function k($) {
      return C($) === d;
    }
    function D($) {
      return C($) === l;
    }
    function Q($) {
      return C($) === a;
    }
    function X($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === t;
    }
    function q($) {
      return C($) === f;
    }
    function ee($) {
      return C($) === r;
    }
    function J($) {
      return C($) === h;
    }
    function ne($) {
      return C($) === g;
    }
    function re($) {
      return C($) === n;
    }
    function oe($) {
      return C($) === i;
    }
    function se($) {
      return C($) === s;
    }
    function le($) {
      return C($) === p;
    }
    $e.AsyncMode = E, $e.ConcurrentMode = w, $e.ContextConsumer = S, $e.ContextProvider = N, $e.Element = M, $e.ForwardRef = B, $e.Fragment = W, $e.Lazy = z, $e.Memo = j, $e.Portal = A, $e.Profiler = U, $e.StrictMode = F, $e.Suspense = H, $e.isAsyncMode = K, $e.isConcurrentMode = k, $e.isContextConsumer = D, $e.isContextProvider = Q, $e.isElement = X, $e.isForwardRef = q, $e.isFragment = ee, $e.isLazy = J, $e.isMemo = ne, $e.isPortal = re, $e.isProfiler = oe, $e.isStrictMode = se, $e.isSuspense = le, $e.isValidElementType = T, $e.typeOf = C;
  }()), $e;
}
process.env.NODE_ENV === "production" ? Ls.exports = Yp() : Ls.exports = Gp();
var Qp = Ls.exports, Kc = Qp, Xp = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Jp = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Yc = {};
Yc[Kc.ForwardRef] = Xp;
Yc[Kc.Memo] = Jp;
var Zp = !0;
function Gc(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(s) {
    e[s] !== void 0 ? t.push(e[s] + ";") : s && (r += s + " ");
  }), r;
}
var yi = function(t, n, r) {
  var s = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Zp === !1) && t.registered[s] === void 0 && (t.registered[s] = n.styles);
}, bi = function(t, n, r) {
  yi(t, n, r);
  var s = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + s : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function eh(e) {
  for (var t = 0, n, r = 0, s = e.length; s >= 4; ++r, s -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (s) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var th = {
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
}, nh = !1, rh = /[A-Z]|^ms/g, oh = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Qc = function(t) {
  return t.charCodeAt(1) === 45;
}, Oa = function(t) {
  return t != null && typeof t != "boolean";
}, ps = /* @__PURE__ */ qc(function(e) {
  return Qc(e) ? e : e.replace(rh, "-$&").toLowerCase();
}), Sa = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(oh, function(r, s, i) {
          return Dt = {
            name: s,
            styles: i,
            next: Dt
          }, s;
        });
  }
  return th[t] !== 1 && !Qc(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, sh = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Cr(e, t, n) {
  if (n == null)
    return "";
  var r = n;
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var s = n;
      if (s.anim === 1)
        return Dt = {
          name: s.name,
          styles: s.styles,
          next: Dt
        }, s.name;
      var i = n;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            Dt = {
              name: a.name,
              styles: a.styles,
              next: Dt
            }, a = a.next;
        var l = i.styles + ";";
        return l;
      }
      return ih(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var c = Dt, d = n(e);
        return Dt = c, Cr(e, t, d);
      }
      break;
    }
  }
  var f = n;
  if (t == null)
    return f;
  var p = t[f];
  return p !== void 0 ? p : f;
}
function ih(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var s = 0; s < n.length; s++)
      r += Cr(e, t, n[s]) + ";";
  else
    for (var i in n) {
      var a = n[i];
      if (typeof a != "object") {
        var l = a;
        t != null && t[l] !== void 0 ? r += i + "{" + t[l] + "}" : Oa(l) && (r += ps(i) + ":" + Sa(i, l) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && nh)
          throw new Error(sh);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var c = 0; c < a.length; c++)
            Oa(a[c]) && (r += ps(i) + ":" + Sa(i, a[c]) + ";");
        else {
          var d = Cr(e, t, a);
          switch (i) {
            case "animation":
            case "animationName": {
              r += ps(i) + ":" + d + ";";
              break;
            }
            default:
              r += i + "{" + d + "}";
          }
        }
      }
    }
  return r;
}
var wa = /label:\s*([^\s;{]+)\s*(;|$)/g, Dt;
function Pr(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, s = "";
  Dt = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, s += Cr(n, t, i);
  else {
    var a = i;
    s += a[0];
  }
  for (var l = 1; l < e.length; l++)
    if (s += Cr(n, t, e[l]), r) {
      var c = i;
      s += c[l];
    }
  wa.lastIndex = 0;
  for (var d = "", f; (f = wa.exec(s)) !== null; )
    d += "-" + f[1];
  var p = eh(s) + d;
  return {
    name: p,
    styles: s,
    next: Dt
  };
}
var ah = function(t) {
  return t();
}, Xc = v["useInsertionEffect"] ? v["useInsertionEffect"] : !1, Jc = Xc || ah, Pa = Xc || v.useLayoutEffect, lh = !1, Zc = /* @__PURE__ */ v.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Hc({
    key: "css"
  }) : null
), ch = Zc.Provider, gi = function(t) {
  return /* @__PURE__ */ ep(function(n, r) {
    var s = kc(Zc);
    return t(n, s, r);
  });
}, Kn = /* @__PURE__ */ v.createContext({}), vi = {}.hasOwnProperty, Bs = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", uh = function(t, n) {
  var r = {};
  for (var s in n)
    vi.call(n, s) && (r[s] = n[s]);
  return r[Bs] = t, r;
}, dh = function(t) {
  var n = t.cache, r = t.serialized, s = t.isStringTag;
  return yi(n, r, s), Jc(function() {
    return bi(n, r, s);
  }), null;
}, fh = /* @__PURE__ */ gi(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var s = e[Bs], i = [r], a = "";
  typeof e.className == "string" ? a = Gc(t.registered, i, e.className) : e.className != null && (a = e.className + " ");
  var l = Pr(i, void 0, v.useContext(Kn));
  a += t.key + "-" + l.name;
  var c = {};
  for (var d in e)
    vi.call(e, d) && d !== "css" && d !== Bs && !lh && (c[d] = e[d]);
  return c.className = a, n && (c.ref = n), /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(dh, {
    cache: t,
    serialized: l,
    isStringTag: typeof s == "string"
  }), /* @__PURE__ */ v.createElement(s, c));
}), ph = fh, hs = { exports: {} }, $a;
function eu() {
  return $a || ($a = 1, function(e) {
    function t() {
      return e.exports = t = Object.assign ? Object.assign.bind() : function(n) {
        for (var r = 1; r < arguments.length; r++) {
          var s = arguments[r];
          for (var i in s)
            ({}).hasOwnProperty.call(s, i) && (n[i] = s[i]);
        }
        return n;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(null, arguments);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(hs)), hs.exports;
}
eu();
var _a = function(t, n) {
  var r = arguments;
  if (n == null || !vi.call(n, "css"))
    return v.createElement.apply(void 0, r);
  var s = r.length, i = new Array(s);
  i[0] = ph, i[1] = uh(t, n);
  for (var a = 2; a < s; a++)
    i[a] = r[a];
  return v.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(_a || (_a = {}));
var hh = /* @__PURE__ */ gi(function(e, t) {
  var n = e.styles, r = Pr([n], void 0, v.useContext(Kn)), s = v.useRef();
  return Pa(function() {
    var i = t.key + "-global", a = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, c = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), c !== null && (l = !0, c.setAttribute("data-emotion", i), a.hydrate([c])), s.current = [a, l], function() {
      a.flush();
    };
  }, [t]), Pa(function() {
    var i = s.current, a = i[0], l = i[1];
    if (l) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && bi(t, r.next, !0), a.tags.length) {
      var c = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = c, a.flush();
    }
    t.insert("", r, a, !1);
  }, [t, r.name]), null;
});
function yn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Pr(t);
}
function qt() {
  var e = yn.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var mh = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, yh = /* @__PURE__ */ qc(
  function(e) {
    return mh.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), bh = !1, gh = yh, vh = function(t) {
  return t !== "theme";
}, Na = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? gh : vh;
}, Ia = function(t, n, r) {
  var s;
  if (n) {
    var i = n.shouldForwardProp;
    s = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof s != "function" && r && (s = t.__emotion_forwardProp), s;
}, xh = function(t) {
  var n = t.cache, r = t.serialized, s = t.isStringTag;
  return yi(n, r, s), Jc(function() {
    return bi(n, r, s);
  }), null;
}, Eh = function e(t, n) {
  var r = t.__emotion_real === t, s = r && t.__emotion_base || t, i, a;
  n !== void 0 && (i = n.label, a = n.target);
  var l = Ia(t, n, r), c = l || Na(s), d = !c("as");
  return function() {
    var f = arguments, p = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && p.push("label:" + i + ";"), f[0] == null || f[0].raw === void 0)
      p.push.apply(p, f);
    else {
      var m = f[0];
      p.push(m[0]);
      for (var g = f.length, h = 1; h < g; h++)
        p.push(f[h], m[h]);
    }
    var u = gi(function(b, R, P) {
      var T = d && b.as || s, C = "", E = [], w = b;
      if (b.theme == null) {
        w = {};
        for (var S in b)
          w[S] = b[S];
        w.theme = v.useContext(Kn);
      }
      typeof b.className == "string" ? C = Gc(R.registered, E, b.className) : b.className != null && (C = b.className + " ");
      var N = Pr(p.concat(E), R.registered, w);
      C += R.key + "-" + N.name, a !== void 0 && (C += " " + a);
      var M = d && l === void 0 ? Na(T) : c, B = {};
      for (var W in b)
        d && W === "as" || M(W) && (B[W] = b[W]);
      return B.className = C, P && (B.ref = P), /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(xh, {
        cache: R,
        serialized: N,
        isStringTag: typeof T == "string"
      }), /* @__PURE__ */ v.createElement(T, B));
    });
    return u.displayName = i !== void 0 ? i : "Styled(" + (typeof s == "string" ? s : s.displayName || s.name || "Component") + ")", u.defaultProps = t.defaultProps, u.__emotion_real = u, u.__emotion_base = s, u.__emotion_styles = p, u.__emotion_forwardProp = l, Object.defineProperty(u, "toString", {
      value: function() {
        return a === void 0 && bh ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), u.withComponent = function(b, R) {
      var P = e(b, x({}, n, R, {
        shouldForwardProp: Ia(u, R, !0)
      }));
      return P.apply(void 0, p);
    }, u;
  };
}, Ch = [
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
], zs = Eh.bind(null);
Ch.forEach(function(e) {
  zs[e] = zs(e);
});
var Us = { exports: {} }, zr = { exports: {} }, _e = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ka;
function Th() {
  if (ka)
    return _e;
  ka = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, u = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
  function T(E) {
    if (typeof E == "object" && E !== null) {
      var w = E.$$typeof;
      switch (w) {
        case t:
          switch (E = E.type, E) {
            case c:
            case d:
            case r:
            case i:
            case s:
            case p:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case l:
                case f:
                case h:
                case g:
                case a:
                  return E;
                default:
                  return w;
              }
          }
        case n:
          return w;
      }
    }
  }
  function C(E) {
    return T(E) === d;
  }
  return _e.AsyncMode = c, _e.ConcurrentMode = d, _e.ContextConsumer = l, _e.ContextProvider = a, _e.Element = t, _e.ForwardRef = f, _e.Fragment = r, _e.Lazy = h, _e.Memo = g, _e.Portal = n, _e.Profiler = i, _e.StrictMode = s, _e.Suspense = p, _e.isAsyncMode = function(E) {
    return C(E) || T(E) === c;
  }, _e.isConcurrentMode = C, _e.isContextConsumer = function(E) {
    return T(E) === l;
  }, _e.isContextProvider = function(E) {
    return T(E) === a;
  }, _e.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === t;
  }, _e.isForwardRef = function(E) {
    return T(E) === f;
  }, _e.isFragment = function(E) {
    return T(E) === r;
  }, _e.isLazy = function(E) {
    return T(E) === h;
  }, _e.isMemo = function(E) {
    return T(E) === g;
  }, _e.isPortal = function(E) {
    return T(E) === n;
  }, _e.isProfiler = function(E) {
    return T(E) === i;
  }, _e.isStrictMode = function(E) {
    return T(E) === s;
  }, _e.isSuspense = function(E) {
    return T(E) === p;
  }, _e.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === r || E === d || E === i || E === s || E === p || E === m || typeof E == "object" && E !== null && (E.$$typeof === h || E.$$typeof === g || E.$$typeof === a || E.$$typeof === l || E.$$typeof === f || E.$$typeof === b || E.$$typeof === R || E.$$typeof === P || E.$$typeof === u);
  }, _e.typeOf = T, _e;
}
var Ne = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ja;
function Rh() {
  return ja || (ja = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, u = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function T($) {
      return typeof $ == "string" || typeof $ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      $ === r || $ === d || $ === i || $ === s || $ === p || $ === m || typeof $ == "object" && $ !== null && ($.$$typeof === h || $.$$typeof === g || $.$$typeof === a || $.$$typeof === l || $.$$typeof === f || $.$$typeof === b || $.$$typeof === R || $.$$typeof === P || $.$$typeof === u);
    }
    function C($) {
      if (typeof $ == "object" && $ !== null) {
        var ie = $.$$typeof;
        switch (ie) {
          case t:
            var de = $.type;
            switch (de) {
              case c:
              case d:
              case r:
              case i:
              case s:
              case p:
                return de;
              default:
                var ge = de && de.$$typeof;
                switch (ge) {
                  case l:
                  case f:
                  case h:
                  case g:
                  case a:
                    return ge;
                  default:
                    return ie;
                }
            }
          case n:
            return ie;
        }
      }
    }
    var E = c, w = d, S = l, N = a, M = t, B = f, W = r, z = h, j = g, A = n, U = i, F = s, H = p, I = !1;
    function K($) {
      return I || (I = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), k($) || C($) === c;
    }
    function k($) {
      return C($) === d;
    }
    function D($) {
      return C($) === l;
    }
    function Q($) {
      return C($) === a;
    }
    function X($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === t;
    }
    function q($) {
      return C($) === f;
    }
    function ee($) {
      return C($) === r;
    }
    function J($) {
      return C($) === h;
    }
    function ne($) {
      return C($) === g;
    }
    function re($) {
      return C($) === n;
    }
    function oe($) {
      return C($) === i;
    }
    function se($) {
      return C($) === s;
    }
    function le($) {
      return C($) === p;
    }
    Ne.AsyncMode = E, Ne.ConcurrentMode = w, Ne.ContextConsumer = S, Ne.ContextProvider = N, Ne.Element = M, Ne.ForwardRef = B, Ne.Fragment = W, Ne.Lazy = z, Ne.Memo = j, Ne.Portal = A, Ne.Profiler = U, Ne.StrictMode = F, Ne.Suspense = H, Ne.isAsyncMode = K, Ne.isConcurrentMode = k, Ne.isContextConsumer = D, Ne.isContextProvider = Q, Ne.isElement = X, Ne.isForwardRef = q, Ne.isFragment = ee, Ne.isLazy = J, Ne.isMemo = ne, Ne.isPortal = re, Ne.isProfiler = oe, Ne.isStrictMode = se, Ne.isSuspense = le, Ne.isValidElementType = T, Ne.typeOf = C;
  }()), Ne;
}
var Aa;
function tu() {
  return Aa || (Aa = 1, process.env.NODE_ENV === "production" ? zr.exports = Th() : zr.exports = Rh()), zr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ms, Ma;
function Oh() {
  if (Ma)
    return ms;
  Ma = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function s() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, l = 0; l < 10; l++)
        a["_" + String.fromCharCode(l)] = l;
      var c = Object.getOwnPropertyNames(a).map(function(f) {
        return a[f];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        d[f] = f;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ms = s() ? Object.assign : function(i, a) {
    for (var l, c = r(i), d, f = 1; f < arguments.length; f++) {
      l = Object(arguments[f]);
      for (var p in l)
        t.call(l, p) && (c[p] = l[p]);
      if (e) {
        d = e(l);
        for (var m = 0; m < d.length; m++)
          n.call(l, d[m]) && (c[d[m]] = l[d[m]]);
      }
    }
    return c;
  }, ms;
}
var ys, Da;
function xi() {
  if (Da)
    return ys;
  Da = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ys = e, ys;
}
var bs, Fa;
function nu() {
  return Fa || (Fa = 1, bs = Function.call.bind(Object.prototype.hasOwnProperty)), bs;
}
var gs, La;
function Sh() {
  if (La)
    return gs;
  La = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = xi(), n = {}, r = nu();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function s(i, a, l, c, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in i)
        if (r(i, f)) {
          var p;
          try {
            if (typeof i[f] != "function") {
              var m = Error(
                (c || "React class") + ": " + l + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            p = i[f](a, f, c, l, null, t);
          } catch (h) {
            p = h;
          }
          if (p && !(p instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in n)) {
            n[p.message] = !0;
            var g = d ? d() : "";
            e(
              "Failed " + l + " type: " + p.message + (g ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, gs = s, gs;
}
var vs, Ba;
function wh() {
  if (Ba)
    return vs;
  Ba = 1;
  var e = tu(), t = Oh(), n = xi(), r = nu(), s = Sh(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(l) {
    var c = "Warning: " + l;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return vs = function(l, c) {
    var d = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function p(k) {
      var D = k && (d && k[d] || k[f]);
      if (typeof D == "function")
        return D;
    }
    var m = "<<anonymous>>", g = {
      array: R("array"),
      bigint: R("bigint"),
      bool: R("boolean"),
      func: R("function"),
      number: R("number"),
      object: R("object"),
      string: R("string"),
      symbol: R("symbol"),
      any: P(),
      arrayOf: T,
      element: C(),
      elementType: E(),
      instanceOf: w,
      node: B(),
      objectOf: N,
      oneOf: S,
      oneOfType: M,
      shape: z,
      exact: j
    };
    function h(k, D) {
      return k === D ? k !== 0 || 1 / k === 1 / D : k !== k && D !== D;
    }
    function u(k, D) {
      this.message = k, this.data = D && typeof D == "object" ? D : {}, this.stack = "";
    }
    u.prototype = Error.prototype;
    function b(k) {
      if (process.env.NODE_ENV !== "production")
        var D = {}, Q = 0;
      function X(ee, J, ne, re, oe, se, le) {
        if (re = re || m, se = se || ne, le !== n) {
          if (c) {
            var $ = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw $.name = "Invariant Violation", $;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ie = re + ":" + ne;
            !D[ie] && // Avoid spamming the console because they are often not actionable except for lib authors
            Q < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + se + "` prop on `" + re + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), D[ie] = !0, Q++);
          }
        }
        return J[ne] == null ? ee ? J[ne] === null ? new u("The " + oe + " `" + se + "` is marked as required " + ("in `" + re + "`, but its value is `null`.")) : new u("The " + oe + " `" + se + "` is marked as required in " + ("`" + re + "`, but its value is `undefined`.")) : null : k(J, ne, re, oe, se);
      }
      var q = X.bind(null, !1);
      return q.isRequired = X.bind(null, !0), q;
    }
    function R(k) {
      function D(Q, X, q, ee, J, ne) {
        var re = Q[X], oe = F(re);
        if (oe !== k) {
          var se = H(re);
          return new u(
            "Invalid " + ee + " `" + J + "` of type " + ("`" + se + "` supplied to `" + q + "`, expected ") + ("`" + k + "`."),
            { expectedType: k }
          );
        }
        return null;
      }
      return b(D);
    }
    function P() {
      return b(a);
    }
    function T(k) {
      function D(Q, X, q, ee, J) {
        if (typeof k != "function")
          return new u("Property `" + J + "` of component `" + q + "` has invalid PropType notation inside arrayOf.");
        var ne = Q[X];
        if (!Array.isArray(ne)) {
          var re = F(ne);
          return new u("Invalid " + ee + " `" + J + "` of type " + ("`" + re + "` supplied to `" + q + "`, expected an array."));
        }
        for (var oe = 0; oe < ne.length; oe++) {
          var se = k(ne, oe, q, ee, J + "[" + oe + "]", n);
          if (se instanceof Error)
            return se;
        }
        return null;
      }
      return b(D);
    }
    function C() {
      function k(D, Q, X, q, ee) {
        var J = D[Q];
        if (!l(J)) {
          var ne = F(J);
          return new u("Invalid " + q + " `" + ee + "` of type " + ("`" + ne + "` supplied to `" + X + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(k);
    }
    function E() {
      function k(D, Q, X, q, ee) {
        var J = D[Q];
        if (!e.isValidElementType(J)) {
          var ne = F(J);
          return new u("Invalid " + q + " `" + ee + "` of type " + ("`" + ne + "` supplied to `" + X + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(k);
    }
    function w(k) {
      function D(Q, X, q, ee, J) {
        if (!(Q[X] instanceof k)) {
          var ne = k.name || m, re = K(Q[X]);
          return new u("Invalid " + ee + " `" + J + "` of type " + ("`" + re + "` supplied to `" + q + "`, expected ") + ("instance of `" + ne + "`."));
        }
        return null;
      }
      return b(D);
    }
    function S(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function D(Q, X, q, ee, J) {
        for (var ne = Q[X], re = 0; re < k.length; re++)
          if (h(ne, k[re]))
            return null;
        var oe = JSON.stringify(k, function(le, $) {
          var ie = H($);
          return ie === "symbol" ? String($) : $;
        });
        return new u("Invalid " + ee + " `" + J + "` of value `" + String(ne) + "` " + ("supplied to `" + q + "`, expected one of " + oe + "."));
      }
      return b(D);
    }
    function N(k) {
      function D(Q, X, q, ee, J) {
        if (typeof k != "function")
          return new u("Property `" + J + "` of component `" + q + "` has invalid PropType notation inside objectOf.");
        var ne = Q[X], re = F(ne);
        if (re !== "object")
          return new u("Invalid " + ee + " `" + J + "` of type " + ("`" + re + "` supplied to `" + q + "`, expected an object."));
        for (var oe in ne)
          if (r(ne, oe)) {
            var se = k(ne, oe, q, ee, J + "." + oe, n);
            if (se instanceof Error)
              return se;
          }
        return null;
      }
      return b(D);
    }
    function M(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var D = 0; D < k.length; D++) {
        var Q = k[D];
        if (typeof Q != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + I(Q) + " at index " + D + "."
          ), a;
      }
      function X(q, ee, J, ne, re) {
        for (var oe = [], se = 0; se < k.length; se++) {
          var le = k[se], $ = le(q, ee, J, ne, re, n);
          if ($ == null)
            return null;
          $.data && r($.data, "expectedType") && oe.push($.data.expectedType);
        }
        var ie = oe.length > 0 ? ", expected one of type [" + oe.join(", ") + "]" : "";
        return new u("Invalid " + ne + " `" + re + "` supplied to " + ("`" + J + "`" + ie + "."));
      }
      return b(X);
    }
    function B() {
      function k(D, Q, X, q, ee) {
        return A(D[Q]) ? null : new u("Invalid " + q + " `" + ee + "` supplied to " + ("`" + X + "`, expected a ReactNode."));
      }
      return b(k);
    }
    function W(k, D, Q, X, q) {
      return new u(
        (k || "React class") + ": " + D + " type `" + Q + "." + X + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + q + "`."
      );
    }
    function z(k) {
      function D(Q, X, q, ee, J) {
        var ne = Q[X], re = F(ne);
        if (re !== "object")
          return new u("Invalid " + ee + " `" + J + "` of type `" + re + "` " + ("supplied to `" + q + "`, expected `object`."));
        for (var oe in k) {
          var se = k[oe];
          if (typeof se != "function")
            return W(q, ee, J, oe, H(se));
          var le = se(ne, oe, q, ee, J + "." + oe, n);
          if (le)
            return le;
        }
        return null;
      }
      return b(D);
    }
    function j(k) {
      function D(Q, X, q, ee, J) {
        var ne = Q[X], re = F(ne);
        if (re !== "object")
          return new u("Invalid " + ee + " `" + J + "` of type `" + re + "` " + ("supplied to `" + q + "`, expected `object`."));
        var oe = t({}, Q[X], k);
        for (var se in oe) {
          var le = k[se];
          if (r(k, se) && typeof le != "function")
            return W(q, ee, J, se, H(le));
          if (!le)
            return new u(
              "Invalid " + ee + " `" + J + "` key `" + se + "` supplied to `" + q + "`.\nBad object: " + JSON.stringify(Q[X], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(k), null, "  ")
            );
          var $ = le(ne, se, q, ee, J + "." + se, n);
          if ($)
            return $;
        }
        return null;
      }
      return b(D);
    }
    function A(k) {
      switch (typeof k) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !k;
        case "object":
          if (Array.isArray(k))
            return k.every(A);
          if (k === null || l(k))
            return !0;
          var D = p(k);
          if (D) {
            var Q = D.call(k), X;
            if (D !== k.entries) {
              for (; !(X = Q.next()).done; )
                if (!A(X.value))
                  return !1;
            } else
              for (; !(X = Q.next()).done; ) {
                var q = X.value;
                if (q && !A(q[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function U(k, D) {
      return k === "symbol" ? !0 : D ? D["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && D instanceof Symbol : !1;
    }
    function F(k) {
      var D = typeof k;
      return Array.isArray(k) ? "array" : k instanceof RegExp ? "object" : U(D, k) ? "symbol" : D;
    }
    function H(k) {
      if (typeof k > "u" || k === null)
        return "" + k;
      var D = F(k);
      if (D === "object") {
        if (k instanceof Date)
          return "date";
        if (k instanceof RegExp)
          return "regexp";
      }
      return D;
    }
    function I(k) {
      var D = H(k);
      switch (D) {
        case "array":
        case "object":
          return "an " + D;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + D;
        default:
          return D;
      }
    }
    function K(k) {
      return !k.constructor || !k.constructor.name ? m : k.constructor.name;
    }
    return g.checkPropTypes = s, g.resetWarningCache = s.resetWarningCache, g.PropTypes = g, g;
  }, vs;
}
var xs, za;
function Ph() {
  if (za)
    return xs;
  za = 1;
  var e = xi();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, xs = function() {
    function r(a, l, c, d, f, p) {
      if (p !== e) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
      }
    }
    r.isRequired = r;
    function s() {
      return r;
    }
    var i = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: s,
      element: r,
      elementType: r,
      instanceOf: s,
      node: r,
      objectOf: s,
      oneOf: s,
      oneOfType: s,
      shape: s,
      exact: s,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, xs;
}
if (process.env.NODE_ENV !== "production") {
  var $h = tu(), _h = !0;
  Us.exports = wh()($h.isElement, _h);
} else
  Us.exports = Ph()();
var Nh = Us.exports;
const o = /* @__PURE__ */ lp(Nh);
function Ih(e, t) {
  const n = Hc({
    key: "css",
    prepend: e
  });
  if (t) {
    const r = n.insert;
    n.insert = (...s) => (s[1].styles.match(/^@layer\s+[^{]*$/) || (s[1].styles = `@layer mui {${s[1].styles}}`), r(...s));
  }
  return n;
}
const Es = /* @__PURE__ */ new Map();
function ru(e) {
  const {
    injectFirst: t,
    enableCssLayer: n,
    children: r
  } = e, s = v.useMemo(() => {
    const i = `${t}-${n}`;
    if (typeof document == "object" && Es.has(i))
      return Es.get(i);
    const a = Ih(t, n);
    return Es.set(i, a), a;
  }, [t, n]);
  return t || n ? /* @__PURE__ */ y.jsx(ch, {
    value: s,
    children: r
  }) : r;
}
process.env.NODE_ENV !== "production" && (ru.propTypes = {
  /**
   * Your component tree.
   */
  children: o.node,
  /**
   * If true, MUI styles are wrapped in CSS `@layer mui` rule.
   * It helps to override MUI styles when using CSS Modules, Tailwind CSS, plain CSS, or any other styling solution.
   */
  enableCssLayer: o.bool,
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: o.bool
});
function kh(e) {
  return e == null || Object.keys(e).length === 0;
}
function Ei(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (s) => t(kh(s) ? n : s) : t;
  return /* @__PURE__ */ y.jsx(hh, {
    styles: r
  });
}
process.env.NODE_ENV !== "production" && (Ei.propTypes = {
  defaultTheme: o.object,
  styles: o.oneOfType([o.array, o.string, o.object, o.func])
});
/**
 * @mui/styled-engine v5.18.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function ou(e, t) {
  const n = zs(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const s = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${s})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((i) => i === void 0) && console.error(`MUI: the styled(${s})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
const jh = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, Ua = [];
function su(e) {
  return Ua[0] = e, Pr(Ua);
}
const Ah = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: Ei,
  StyledEngineProvider: ru,
  ThemeContext: Kn,
  css: yn,
  default: ou,
  internal_processStyles: jh,
  internal_serializeStyles: su,
  keyframes: qt
}, Symbol.toStringTag, { value: "Module" }));
function Zt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function iu(e) {
  if (/* @__PURE__ */ v.isValidElement(e) || !Zt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = iu(e[n]);
  }), t;
}
function vt(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? x({}, e) : e;
  return Zt(e) && Zt(t) && Object.keys(t).forEach((s) => {
    /* @__PURE__ */ v.isValidElement(t[s]) ? r[s] = t[s] : Zt(t[s]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, s) && Zt(e[s]) ? r[s] = vt(e[s], t[s], n) : n.clone ? r[s] = Zt(t[s]) ? iu(t[s]) : t[s] : r[s] = t[s];
  }), r;
}
const Mh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vt,
  isPlainObject: Zt
}, Symbol.toStringTag, { value: "Module" })), Dh = ["values", "unit", "step"], Fh = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => x({}, n, {
    [r.key]: r.val
  }), {});
};
function au(e) {
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
    unit: n = "px",
    step: r = 5
  } = e, s = Z(e, Dh), i = Fh(t), a = Object.keys(i);
  function l(m) {
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${n})`;
  }
  function c(m) {
    return `@media (max-width:${(typeof t[m] == "number" ? t[m] : m) - r / 100}${n})`;
  }
  function d(m, g) {
    const h = a.indexOf(g);
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${n}) and (max-width:${(h !== -1 && typeof t[a[h]] == "number" ? t[a[h]] : g) - r / 100}${n})`;
  }
  function f(m) {
    return a.indexOf(m) + 1 < a.length ? d(m, a[a.indexOf(m) + 1]) : l(m);
  }
  function p(m) {
    const g = a.indexOf(m);
    return g === 0 ? l(a[1]) : g === a.length - 1 ? c(a[g]) : d(m, a[a.indexOf(m) + 1]).replace("@media", "@media not all and");
  }
  return x({
    keys: a,
    values: i,
    up: l,
    down: c,
    between: d,
    only: f,
    not: p,
    unit: n
  }, s);
}
const Lh = {
  borderRadius: 4
}, Bh = Lh, zh = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.string, o.object, o.array]) : {}, tn = zh;
function hr(e, t) {
  return t ? vt(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Ci = {
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
}, Va = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Ci[e]}px)`
};
function Pt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Va;
    return t.reduce((a, l, c) => (a[i.up(i.keys[c])] = n(t[c]), a), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || Va;
    return Object.keys(t).reduce((a, l) => {
      if (Object.keys(i.values || Ci).indexOf(l) !== -1) {
        const c = i.up(l);
        a[c] = n(t[l], l);
      } else {
        const c = l;
        a[c] = t[c];
      }
      return a;
    }, {});
  }
  return n(t);
}
function Uh(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, s) => {
    const i = e.up(s);
    return r[i] = {}, r;
  }, {})) || {};
}
function qa(e, t) {
  return e.reduce((n, r) => {
    const s = n[r];
    return (!s || Object.keys(s).length === 0) && delete n[r], n;
  }, t);
}
function Vh(e, t) {
  if (typeof e != "object")
    return {};
  const n = {}, r = Object.keys(t);
  return Array.isArray(e) ? r.forEach((s, i) => {
    i < e.length && (n[s] = !0);
  }) : r.forEach((s) => {
    e[s] != null && (n[s] = !0);
  }), n;
}
function $o({
  values: e,
  breakpoints: t,
  base: n
}) {
  const r = n || Vh(e, t), s = Object.keys(r);
  if (s.length === 0)
    return e;
  let i;
  return s.reduce((a, l, c) => (Array.isArray(e) ? (a[l] = e[c] != null ? e[c] : e[i], i = c) : typeof e == "object" ? (a[l] = e[l] != null ? e[l] : e[i], i = l) : a[l] = e, a), {});
}
function V(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : fn(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const qh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: V
}, Symbol.toStringTag, { value: "Module" }));
function Bn(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((s, i) => s && s[i] ? s[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, s) => r && r[s] != null ? r[s] : null, e);
}
function po(e, t, n, r = n) {
  let s;
  return typeof e == "function" ? s = e(n) : Array.isArray(e) ? s = e[n] || r : s = Bn(e, n) || r, t && (s = t(s, r, e)), s;
}
function qe(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: s
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const l = a[t], c = a.theme, d = Bn(c, r) || {};
    return Pt(a, l, (p) => {
      let m = po(d, s, p);
      return p === m && typeof p == "string" && (m = po(d, s, `${t}${p === "default" ? "" : V(p)}`, p)), n === !1 ? m : {
        [n]: m
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: tn
  } : {}, i.filterProps = [t], i;
}
function Wh(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Hh = {
  m: "margin",
  p: "padding"
}, Kh = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Wa = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Yh = Wh((e) => {
  if (e.length > 2)
    if (Wa[e])
      e = Wa[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Hh[t], s = Kh[n] || "";
  return Array.isArray(s) ? s.map((i) => r + i) : [r + s];
}), _o = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], No = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Gh = [..._o, ...No];
function $r(e, t, n, r) {
  var s;
  const i = (s = Bn(e, t, !1)) != null ? s : n;
  return typeof i == "number" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${a}.`), i * a) : Array.isArray(i) ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > i.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${a} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), i[a]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function lu(e) {
  return $r(e, "spacing", 8, "spacing");
}
function _r(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Qh(e, t) {
  return (n) => e.reduce((r, s) => (r[s] = _r(t, n), r), {});
}
function Xh(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const s = Yh(n), i = Qh(s, r), a = e[n];
  return Pt(e, a, i);
}
function cu(e, t) {
  const n = lu(e.theme);
  return Object.keys(e).map((r) => Xh(e, t, r, n)).reduce(hr, {});
}
function ze(e) {
  return cu(e, _o);
}
ze.propTypes = process.env.NODE_ENV !== "production" ? _o.reduce((e, t) => (e[t] = tn, e), {}) : {};
ze.filterProps = _o;
function Ue(e) {
  return cu(e, No);
}
Ue.propTypes = process.env.NODE_ENV !== "production" ? No.reduce((e, t) => (e[t] = tn, e), {}) : {};
Ue.filterProps = No;
process.env.NODE_ENV !== "production" && Gh.reduce((e, t) => (e[t] = tn, e), {});
function Jh(e = 8) {
  if (e.mui)
    return e;
  const t = lu({
    spacing: e
  }), n = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return n.mui = !0, n;
}
function Io(...e) {
  const t = e.reduce((r, s) => (s.filterProps.forEach((i) => {
    r[i] = s;
  }), r), {}), n = (r) => Object.keys(r).reduce((s, i) => t[i] ? hr(s, t[i](r)) : s, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, s) => Object.assign(r, s.propTypes), {}) : {}, n.filterProps = e.reduce((r, s) => r.concat(s.filterProps), []), n;
}
function wt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function _t(e, t) {
  return qe({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Zh = _t("border", wt), em = _t("borderTop", wt), tm = _t("borderRight", wt), nm = _t("borderBottom", wt), rm = _t("borderLeft", wt), om = _t("borderColor"), sm = _t("borderTopColor"), im = _t("borderRightColor"), am = _t("borderBottomColor"), lm = _t("borderLeftColor"), cm = _t("outline", wt), um = _t("outlineColor"), ko = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = $r(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: _r(t, r)
    });
    return Pt(e, e.borderRadius, n);
  }
  return null;
};
ko.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: tn
} : {};
ko.filterProps = ["borderRadius"];
Io(Zh, em, tm, nm, rm, om, sm, im, am, lm, ko, cm, um);
const jo = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = $r(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: _r(t, r)
    });
    return Pt(e, e.gap, n);
  }
  return null;
};
jo.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: tn
} : {};
jo.filterProps = ["gap"];
const Ao = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = $r(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: _r(t, r)
    });
    return Pt(e, e.columnGap, n);
  }
  return null;
};
Ao.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: tn
} : {};
Ao.filterProps = ["columnGap"];
const Mo = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = $r(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: _r(t, r)
    });
    return Pt(e, e.rowGap, n);
  }
  return null;
};
Mo.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: tn
} : {};
Mo.filterProps = ["rowGap"];
const dm = qe({
  prop: "gridColumn"
}), fm = qe({
  prop: "gridRow"
}), pm = qe({
  prop: "gridAutoFlow"
}), hm = qe({
  prop: "gridAutoColumns"
}), mm = qe({
  prop: "gridAutoRows"
}), ym = qe({
  prop: "gridTemplateColumns"
}), bm = qe({
  prop: "gridTemplateRows"
}), gm = qe({
  prop: "gridTemplateAreas"
}), vm = qe({
  prop: "gridArea"
});
Io(jo, Ao, Mo, dm, fm, pm, hm, mm, ym, bm, gm, vm);
function An(e, t) {
  return t === "grey" ? t : e;
}
const xm = qe({
  prop: "color",
  themeKey: "palette",
  transform: An
}), Em = qe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: An
}), Cm = qe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: An
});
Io(xm, Em, Cm);
function bt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Tm = qe({
  prop: "width",
  transform: bt
}), Ti = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, s;
      const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || Ci[n];
      return i ? ((s = e.theme) == null || (s = s.breakpoints) == null ? void 0 : s.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: bt(n)
      };
    };
    return Pt(e, e.maxWidth, t);
  }
  return null;
};
Ti.filterProps = ["maxWidth"];
const Rm = qe({
  prop: "minWidth",
  transform: bt
}), Om = qe({
  prop: "height",
  transform: bt
}), Sm = qe({
  prop: "maxHeight",
  transform: bt
}), wm = qe({
  prop: "minHeight",
  transform: bt
});
qe({
  prop: "size",
  cssProperty: "width",
  transform: bt
});
qe({
  prop: "size",
  cssProperty: "height",
  transform: bt
});
const Pm = qe({
  prop: "boxSizing"
});
Io(Tm, Ti, Rm, Om, Sm, wm, Pm);
const $m = {
  // borders
  border: {
    themeKey: "borders",
    transform: wt
  },
  borderTop: {
    themeKey: "borders",
    transform: wt
  },
  borderRight: {
    themeKey: "borders",
    transform: wt
  },
  borderBottom: {
    themeKey: "borders",
    transform: wt
  },
  borderLeft: {
    themeKey: "borders",
    transform: wt
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
    transform: wt
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: ko
  },
  // palette
  color: {
    themeKey: "palette",
    transform: An
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: An
  },
  backgroundColor: {
    themeKey: "palette",
    transform: An
  },
  // spacing
  p: {
    style: Ue
  },
  pt: {
    style: Ue
  },
  pr: {
    style: Ue
  },
  pb: {
    style: Ue
  },
  pl: {
    style: Ue
  },
  px: {
    style: Ue
  },
  py: {
    style: Ue
  },
  padding: {
    style: Ue
  },
  paddingTop: {
    style: Ue
  },
  paddingRight: {
    style: Ue
  },
  paddingBottom: {
    style: Ue
  },
  paddingLeft: {
    style: Ue
  },
  paddingX: {
    style: Ue
  },
  paddingY: {
    style: Ue
  },
  paddingInline: {
    style: Ue
  },
  paddingInlineStart: {
    style: Ue
  },
  paddingInlineEnd: {
    style: Ue
  },
  paddingBlock: {
    style: Ue
  },
  paddingBlockStart: {
    style: Ue
  },
  paddingBlockEnd: {
    style: Ue
  },
  m: {
    style: ze
  },
  mt: {
    style: ze
  },
  mr: {
    style: ze
  },
  mb: {
    style: ze
  },
  ml: {
    style: ze
  },
  mx: {
    style: ze
  },
  my: {
    style: ze
  },
  margin: {
    style: ze
  },
  marginTop: {
    style: ze
  },
  marginRight: {
    style: ze
  },
  marginBottom: {
    style: ze
  },
  marginLeft: {
    style: ze
  },
  marginX: {
    style: ze
  },
  marginY: {
    style: ze
  },
  marginInline: {
    style: ze
  },
  marginInlineStart: {
    style: ze
  },
  marginInlineEnd: {
    style: ze
  },
  marginBlock: {
    style: ze
  },
  marginBlockStart: {
    style: ze
  },
  marginBlockEnd: {
    style: ze
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
    style: jo
  },
  rowGap: {
    style: Mo
  },
  columnGap: {
    style: Ao
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
    transform: bt
  },
  maxWidth: {
    style: Ti
  },
  minWidth: {
    transform: bt
  },
  height: {
    transform: bt
  },
  maxHeight: {
    transform: bt
  },
  minHeight: {
    transform: bt
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
}, Nr = $m;
function _m(...e) {
  const t = e.reduce((r, s) => r.concat(Object.keys(s)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function Nm(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function uu() {
  function e(n, r, s, i) {
    const a = {
      [n]: r,
      theme: s
    }, l = i[n];
    if (!l)
      return {
        [n]: r
      };
    const {
      cssProperty: c = n,
      themeKey: d,
      transform: f,
      style: p
    } = l;
    if (r == null)
      return null;
    if (d === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const m = Bn(s, d) || {};
    return p ? p(a) : Pt(a, r, (h) => {
      let u = po(m, f, h);
      return h === u && typeof h == "string" && (u = po(m, f, `${n}${h === "default" ? "" : V(h)}`, h)), c === !1 ? u : {
        [c]: u
      };
    });
  }
  function t(n) {
    var r;
    const {
      sx: s,
      theme: i = {},
      nested: a
    } = n || {};
    if (!s)
      return null;
    const l = (r = i.unstable_sxConfig) != null ? r : Nr;
    function c(d) {
      let f = d;
      if (typeof d == "function")
        f = d(i);
      else if (typeof d != "object")
        return d;
      if (!f)
        return null;
      const p = Uh(i.breakpoints), m = Object.keys(p);
      let g = p;
      return Object.keys(f).forEach((h) => {
        const u = Nm(f[h], i);
        if (u != null)
          if (typeof u == "object")
            if (l[h])
              g = hr(g, e(h, u, i, l));
            else {
              const b = Pt({
                theme: i
              }, u, (R) => ({
                [h]: R
              }));
              _m(b, u) ? g[h] = t({
                sx: u,
                theme: i,
                nested: !0
              }) : g = hr(g, b);
            }
          else
            g = hr(g, e(h, u, i, l));
      }), !a && i.modularCssLayers ? {
        "@layer sx": qa(m, g)
      } : qa(m, g);
    }
    return Array.isArray(s) ? s.map(c) : c(s);
  }
  return t;
}
const du = uu();
du.filterProps = ["sx"];
const Do = du;
function fu(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const Im = ["breakpoints", "palette", "spacing", "shape"];
function Ri(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: s,
    shape: i = {}
  } = e, a = Z(e, Im), l = au(n), c = Jh(s);
  let d = vt({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: x({
      mode: "light"
    }, r),
    spacing: c,
    shape: x({}, Bh, i)
  }, a);
  return d.applyStyles = fu, d = t.reduce((f, p) => vt(f, p), d), d.unstable_sxConfig = x({}, Nr, a == null ? void 0 : a.unstable_sxConfig), d.unstable_sx = function(p) {
    return Do({
      sx: p,
      theme: this
    });
  }, d;
}
const km = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ri,
  private_createBreakpoints: au,
  unstable_applyStyles: fu
}, Symbol.toStringTag, { value: "Module" }));
function jm(e) {
  return Object.keys(e).length === 0;
}
function Fo(e = null) {
  const t = v.useContext(Kn);
  return !t || jm(t) ? e : t;
}
const Am = Ri();
function Oi(e = Am) {
  return Fo(e);
}
function Cs(e) {
  const t = su(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function Si({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Oi(n), s = t && r[t] || r;
  let i = typeof e == "function" ? e(s) : e;
  return s.modularCssLayers && (Array.isArray(i) ? i = i.map((a) => Cs(typeof a == "function" ? a(s) : a)) : i = Cs(i)), /* @__PURE__ */ y.jsx(Ei, {
    styles: i
  });
}
process.env.NODE_ENV !== "production" && (Si.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: o.object,
  /**
   * @ignore
   */
  styles: o.oneOfType([o.array, o.func, o.number, o.object, o.string, o.bool]),
  /**
   * @ignore
   */
  themeId: o.string
});
const Mm = ["sx"], Dm = (e) => {
  var t, n;
  const r = {
    systemProps: {},
    otherProps: {}
  }, s = (t = e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) != null ? t : Nr;
  return Object.keys(e).forEach((i) => {
    s[i] ? r.systemProps[i] = e[i] : r.otherProps[i] = e[i];
  }), r;
};
function Lo(e) {
  const {
    sx: t
  } = e, n = Z(e, Mm), {
    systemProps: r,
    otherProps: s
  } = Dm(n);
  let i;
  return Array.isArray(t) ? i = [r, ...t] : typeof t == "function" ? i = (...a) => {
    const l = t(...a);
    return Zt(l) ? x({}, r, l) : r;
  } : i = x({}, r, t), x({}, s, {
    sx: i
  });
}
const Fm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Do,
  extendSxProp: Lo,
  unstable_createStyleFunctionSx: uu,
  unstable_defaultSxConfig: Nr
}, Symbol.toStringTag, { value: "Module" })), Ha = (e) => e, Lm = () => {
  let e = Ha;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Ha;
    }
  };
}, Bm = Lm(), pu = Bm;
function hu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++)
        e[t] && (n = hu(e[t])) && (r && (r += " "), r += n);
    } else
      for (n in e)
        e[n] && (r && (r += " "), r += n);
  return r;
}
function te() {
  for (var e, t, n = 0, r = "", s = arguments.length; n < s; n++)
    (e = arguments[n]) && (t = hu(e)) && (r && (r += " "), r += t);
  return r;
}
const zm = ["className", "component"];
function Um(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: s
  } = e, i = ou("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(Do);
  return /* @__PURE__ */ v.forwardRef(function(c, d) {
    const f = Oi(n), p = Lo(c), {
      className: m,
      component: g = "div"
    } = p, h = Z(p, zm);
    return /* @__PURE__ */ y.jsx(i, x({
      as: g,
      ref: d,
      className: te(m, s ? s(r) : r),
      theme: t && f[t] || f
    }, h));
  });
}
const Vm = {
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
function pe(e, t, n = "Mui") {
  const r = Vm[t];
  return r ? `${n}-${r}` : `${pu.generate(e)}-${t}`;
}
function he(e, t, n = "Mui") {
  const r = {};
  return t.forEach((s) => {
    r[s] = pe(e, s, n);
  }), r;
}
var Vs = { exports: {} }, Ie = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ka;
function qm() {
  if (Ka)
    return Ie;
  Ka = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.view_transition"), g = Symbol.for("react.client.reference");
  function h(u) {
    if (typeof u == "object" && u !== null) {
      var b = u.$$typeof;
      switch (b) {
        case e:
          switch (u = u.type, u) {
            case n:
            case s:
            case r:
            case c:
            case d:
            case m:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case a:
                case l:
                case p:
                case f:
                  return u;
                case i:
                  return u;
                default:
                  return b;
              }
          }
        case t:
          return b;
      }
    }
  }
  return Ie.ContextConsumer = i, Ie.ContextProvider = a, Ie.Element = e, Ie.ForwardRef = l, Ie.Fragment = n, Ie.Lazy = p, Ie.Memo = f, Ie.Portal = t, Ie.Profiler = s, Ie.StrictMode = r, Ie.Suspense = c, Ie.SuspenseList = d, Ie.isContextConsumer = function(u) {
    return h(u) === i;
  }, Ie.isContextProvider = function(u) {
    return h(u) === a;
  }, Ie.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === e;
  }, Ie.isForwardRef = function(u) {
    return h(u) === l;
  }, Ie.isFragment = function(u) {
    return h(u) === n;
  }, Ie.isLazy = function(u) {
    return h(u) === p;
  }, Ie.isMemo = function(u) {
    return h(u) === f;
  }, Ie.isPortal = function(u) {
    return h(u) === t;
  }, Ie.isProfiler = function(u) {
    return h(u) === s;
  }, Ie.isStrictMode = function(u) {
    return h(u) === r;
  }, Ie.isSuspense = function(u) {
    return h(u) === c;
  }, Ie.isSuspenseList = function(u) {
    return h(u) === d;
  }, Ie.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === n || u === s || u === r || u === c || u === d || typeof u == "object" && u !== null && (u.$$typeof === p || u.$$typeof === f || u.$$typeof === a || u.$$typeof === i || u.$$typeof === l || u.$$typeof === g || u.getModuleId !== void 0);
  }, Ie.typeOf = h, Ie;
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
var Ya;
function Wm() {
  return Ya || (Ya = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u) {
      if (typeof u == "object" && u !== null) {
        var b = u.$$typeof;
        switch (b) {
          case t:
            switch (u = u.type, u) {
              case r:
              case i:
              case s:
              case d:
              case f:
              case g:
                return u;
              default:
                switch (u = u && u.$$typeof, u) {
                  case l:
                  case c:
                  case m:
                  case p:
                    return u;
                  case a:
                    return u;
                  default:
                    return b;
                }
            }
          case n:
            return b;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.view_transition"), h = Symbol.for("react.client.reference");
    ke.ContextConsumer = a, ke.ContextProvider = l, ke.Element = t, ke.ForwardRef = c, ke.Fragment = r, ke.Lazy = m, ke.Memo = p, ke.Portal = n, ke.Profiler = i, ke.StrictMode = s, ke.Suspense = d, ke.SuspenseList = f, ke.isContextConsumer = function(u) {
      return e(u) === a;
    }, ke.isContextProvider = function(u) {
      return e(u) === l;
    }, ke.isElement = function(u) {
      return typeof u == "object" && u !== null && u.$$typeof === t;
    }, ke.isForwardRef = function(u) {
      return e(u) === c;
    }, ke.isFragment = function(u) {
      return e(u) === r;
    }, ke.isLazy = function(u) {
      return e(u) === m;
    }, ke.isMemo = function(u) {
      return e(u) === p;
    }, ke.isPortal = function(u) {
      return e(u) === n;
    }, ke.isProfiler = function(u) {
      return e(u) === i;
    }, ke.isStrictMode = function(u) {
      return e(u) === s;
    }, ke.isSuspense = function(u) {
      return e(u) === d;
    }, ke.isSuspenseList = function(u) {
      return e(u) === f;
    }, ke.isValidElementType = function(u) {
      return typeof u == "string" || typeof u == "function" || u === r || u === i || u === s || u === d || u === f || typeof u == "object" && u !== null && (u.$$typeof === m || u.$$typeof === p || u.$$typeof === l || u.$$typeof === a || u.$$typeof === c || u.$$typeof === h || u.getModuleId !== void 0);
    }, ke.typeOf = e;
  }()), ke;
}
process.env.NODE_ENV === "production" ? Vs.exports = qm() : Vs.exports = Wm();
var Ga = Vs.exports;
const Hm = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function mu(e) {
  const t = `${e}`.match(Hm);
  return t && t[1] || "";
}
function yu(e, t = "") {
  return e.displayName || e.name || mu(e) || t;
}
function Qa(e, t, n) {
  const r = yu(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function Km(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return yu(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Ga.ForwardRef:
          return Qa(e, e.render, "ForwardRef");
        case Ga.Memo:
          return Qa(e, e.type, "memo");
        default:
          return;
      }
  }
}
const Ym = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Km,
  getFunctionName: mu
}, Symbol.toStringTag, { value: "Module" }));
function Tr(e, t) {
  const n = x({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      n[r] = x({}, e[r], n[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const s = e[r] || {}, i = t[r];
      n[r] = {}, !i || !Object.keys(i) ? n[r] = s : !s || !Object.keys(s) ? n[r] = i : (n[r] = x({}, i), Object.keys(s).forEach((a) => {
        n[r][a] = Tr(s[a], i[a]);
      }));
    } else
      n[r] === void 0 && (n[r] = e[r]);
  }), n;
}
function Gm(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : Tr(t.components[n].defaultProps, r);
}
const Qm = typeof window < "u" ? v.useLayoutEffect : v.useEffect, It = Qm;
function Xm(e, t, n, r, s) {
  const [i, a] = v.useState(() => s && n ? n(e).matches : r ? r(e).matches : t);
  return It(() => {
    let l = !0;
    if (!n)
      return;
    const c = n(e), d = () => {
      l && a(c.matches);
    };
    return d(), c.addListener(d), () => {
      l = !1, c.removeListener(d);
    };
  }, [e, n]), i;
}
const bu = v["useSyncExternalStore"];
function Jm(e, t, n, r, s) {
  const i = v.useCallback(() => t, [t]), a = v.useMemo(() => {
    if (s && n)
      return () => n(e).matches;
    if (r !== null) {
      const {
        matches: f
      } = r(e);
      return () => f;
    }
    return i;
  }, [i, e, r, s, n]), [l, c] = v.useMemo(() => {
    if (n === null)
      return [i, () => () => {
      }];
    const f = n(e);
    return [() => f.matches, (p) => (f.addListener(p), () => {
      f.removeListener(p);
    })];
  }, [i, n, e]);
  return bu(c, l, a);
}
function Zm(e, t = {}) {
  const n = Fo(), r = typeof window < "u" && typeof window.matchMedia < "u", {
    defaultMatches: s = !1,
    matchMedia: i = r ? window.matchMedia : null,
    ssrMatchMedia: a = null,
    noSsr: l = !1
  } = Gm({
    name: "MuiUseMediaQuery",
    props: t,
    theme: n
  });
  process.env.NODE_ENV !== "production" && typeof e == "function" && n === null && console.error(["MUI: The `query` argument provided is invalid.", "You are providing a function without a theme in the context.", "One of the parent elements needs to use a ThemeProvider."].join(`
`));
  let c = typeof e == "function" ? e(n) : e;
  c = c.replace(/^@media( ?)/m, "");
  const f = (bu !== void 0 ? Jm : Xm)(c, s, i, a, l);
  return process.env.NODE_ENV !== "production" && v.useDebugValue({
    query: c,
    match: f
  }), f;
}
function ey(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
const ty = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ey
}, Symbol.toStringTag, { value: "Module" }));
function Lt(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function ny(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function gu(e, t, n, r, s) {
  const i = e[t], a = s || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = i.type;
  return typeof c == "function" && !ny(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const vu = Lt(o.element, gu);
vu.isRequired = Lt(o.element.isRequired, gu);
const Ir = vu;
function ry(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function oy(e, t, n, r, s) {
  const i = e[t], a = s || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof i == "function" && !ry(i) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const kr = Lt(o.elementType, oy), sy = "exact-prop: ​";
function Bo(e) {
  return process.env.NODE_ENV === "production" ? e : x({}, e, {
    [sy]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function zn(e, t, n, r, s) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = e[t], a = s || t;
  return i == null ? null : i && i.nodeType !== 1 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const iy = o.oneOfType([o.func, o.object]), Wt = iy;
function Xa(...e) {
  return e.reduce((t, n) => n == null ? t : function(...s) {
    t.apply(this, s), n.apply(this, s);
  }, () => {
  });
}
function wi(e, t = 166) {
  let n;
  function r(...s) {
    const i = () => {
      e.apply(this, s);
    };
    clearTimeout(n), n = setTimeout(i, t);
  }
  return r.clear = () => {
    clearTimeout(n);
  }, r;
}
function mr(e, t) {
  var n, r;
  return /* @__PURE__ */ v.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (n = e.type.muiName) != null ? n : (r = e.type) == null || (r = r._payload) == null || (r = r.value) == null ? void 0 : r.muiName
  ) !== -1;
}
function xt(e) {
  return e && e.ownerDocument || document;
}
function Vt(e) {
  return xt(e).defaultView || window;
}
function ay(e, t) {
  if (process.env.NODE_ENV === "production")
    return () => null;
  const n = t ? x({}, t.propTypes) : null;
  return (s) => (i, a, l, c, d, ...f) => {
    const p = d || a, m = n == null ? void 0 : n[p];
    if (m) {
      const g = m(i, a, l, c, d, ...f);
      if (g)
        return g;
    }
    return typeof i[a] < "u" && !i[s] ? new Error(`The prop \`${p}\` of \`${e}\` can only be used together with the \`${s}\` prop.`) : null;
  };
}
function qs(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Ja = 0;
function ly(e) {
  const [t, n] = v.useState(e), r = e || t;
  return v.useEffect(() => {
    t == null && (Ja += 1, n(`mui-${Ja}`));
  }, [t]), r;
}
const Za = v["useId".toString()];
function Pi(e) {
  if (Za !== void 0) {
    const t = Za();
    return e ?? t;
  }
  return ly(e);
}
function cy(e, t, n, r, s) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = s || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${i}\` is not supported. Please remove it.`) : null;
}
function el({
  controlled: e,
  default: t,
  name: n,
  state: r = "value"
}) {
  const {
    current: s
  } = v.useRef(e !== void 0), [i, a] = v.useState(t), l = s ? e : i;
  if (process.env.NODE_ENV !== "production") {
    v.useEffect(() => {
      s !== (e !== void 0) && console.error([`MUI: A component is changing the ${s ? "" : "un"}controlled ${r} state of ${n} to be ${s ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [r, n, e]);
    const {
      current: d
    } = v.useRef(t);
    v.useEffect(() => {
      !s && !Object.is(d, t) && console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = v.useCallback((d) => {
    s || a(d);
  }, []);
  return [l, c];
}
function an(e) {
  const t = v.useRef(e);
  return It(() => {
    t.current = e;
  }), v.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function Je(...e) {
  return v.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      qs(n, t);
    });
  }, e);
}
const tl = {};
function uy(e, t) {
  const n = v.useRef(tl);
  return n.current === tl && (n.current = e(t)), n;
}
const dy = [];
function fy(e) {
  v.useEffect(e, dy);
}
class zo {
  constructor() {
    this.currentId = null, this.clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new zo();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, n) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, n();
    }, t);
  }
}
function xu() {
  const e = uy(zo.create).current;
  return fy(e.disposeEffect), e;
}
let Uo = !0, Ws = !1;
const py = new zo(), hy = {
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
function my(e) {
  const {
    type: t,
    tagName: n
  } = e;
  return !!(n === "INPUT" && hy[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function yy(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Uo = !0);
}
function Ts() {
  Uo = !1;
}
function by() {
  this.visibilityState === "hidden" && Ws && (Uo = !0);
}
function gy(e) {
  e.addEventListener("keydown", yy, !0), e.addEventListener("mousedown", Ts, !0), e.addEventListener("pointerdown", Ts, !0), e.addEventListener("touchstart", Ts, !0), e.addEventListener("visibilitychange", by, !0);
}
function vy(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return Uo || my(t);
}
function Eu() {
  const e = v.useCallback((s) => {
    s != null && gy(s.ownerDocument);
  }, []), t = v.useRef(!1);
  function n() {
    return t.current ? (Ws = !0, py.start(100, () => {
      Ws = !1;
    }), t.current = !1, !0) : !1;
  }
  function r(s) {
    return vy(s) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: r,
    onBlur: n,
    ref: e
  };
}
function Cu(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function xy(e) {
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
function Ey(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const Cy = Number.isInteger || Ey;
function Tu(e, t, n, r) {
  const s = e[t];
  if (s == null || !Cy(s)) {
    const i = xy(s);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${i}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function Ru(e, t, ...n) {
  return e[t] === void 0 ? null : Tu(e, t, ...n);
}
function Hs() {
  return null;
}
Ru.isRequired = Tu;
Hs.isRequired = Hs;
const Mn = process.env.NODE_ENV === "production" ? Hs : Ru;
function be(e, t, n = void 0) {
  const r = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (s) => {
      r[s] = e[s].reduce((i, a) => {
        if (a) {
          const l = t(a);
          l !== "" && i.push(l), n && n[a] && i.push(n[a]);
        }
        return i;
      }, []).join(" ");
    }
  ), r;
}
function Un(e) {
  return typeof e == "string";
}
function Ty(e, t, n) {
  return e === void 0 || Un(e) ? t : x({}, t, {
    ownerState: x({}, t.ownerState, n)
  });
}
function Ou(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function nl(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function Ry(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: s,
    className: i
  } = e;
  if (!t) {
    const g = te(n == null ? void 0 : n.className, i, s == null ? void 0 : s.className, r == null ? void 0 : r.className), h = x({}, n == null ? void 0 : n.style, s == null ? void 0 : s.style, r == null ? void 0 : r.style), u = x({}, n, s, r);
    return g.length > 0 && (u.className = g), Object.keys(h).length > 0 && (u.style = h), {
      props: u,
      internalRef: void 0
    };
  }
  const a = Ou(x({}, s, r)), l = nl(r), c = nl(s), d = t(a), f = te(d == null ? void 0 : d.className, n == null ? void 0 : n.className, i, s == null ? void 0 : s.className, r == null ? void 0 : r.className), p = x({}, d == null ? void 0 : d.style, n == null ? void 0 : n.style, s == null ? void 0 : s.style, r == null ? void 0 : r.style), m = x({}, d, n, c, l);
  return f.length > 0 && (m.className = f), Object.keys(p).length > 0 && (m.style = p), {
    props: m,
    internalRef: d.ref
  };
}
function Oy(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
const Sy = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function pn(e) {
  var t;
  const {
    elementType: n,
    externalSlotProps: r,
    ownerState: s,
    skipResolvingSlotProps: i = !1
  } = e, a = Z(e, Sy), l = i ? {} : Oy(r, s), {
    props: c,
    internalRef: d
  } = Ry(x({}, a, {
    externalSlotProps: l
  })), f = Je(d, l == null ? void 0 : l.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return Ty(n, x({}, c, {
    ref: f
  }), s);
}
function Yn(e) {
  if (parseInt(v.version, 10) >= 19) {
    var t;
    return (e == null || (t = e.props) == null ? void 0 : t.ref) || null;
  }
  return (e == null ? void 0 : e.ref) || null;
}
const Su = /* @__PURE__ */ v.createContext(null);
process.env.NODE_ENV !== "production" && (Su.displayName = "ThemeContext");
const wu = Su;
function Pu() {
  const e = v.useContext(wu);
  return process.env.NODE_ENV !== "production" && v.useDebugValue(e), e;
}
const wy = typeof Symbol == "function" && Symbol.for, Py = wy ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function $y(e, t) {
  if (typeof t == "function") {
    const n = t(e);
    return process.env.NODE_ENV !== "production" && (n || console.error(["MUI: You should return an object from your theme function, i.e.", "<ThemeProvider theme={() => ({})} />"].join(`
`))), n;
  }
  return x({}, e, t);
}
function ho(e) {
  const {
    children: t,
    theme: n
  } = e, r = Pu();
  process.env.NODE_ENV !== "production" && r === null && typeof n == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const s = v.useMemo(() => {
    const i = r === null ? n : $y(r, n);
    return i != null && (i[Py] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ y.jsx(wu.Provider, {
    value: s,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (ho.propTypes = {
  /**
   * Your component tree.
   */
  children: o.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: o.oneOfType([o.object, o.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (ho.propTypes = Bo(ho.propTypes));
const _y = ["value"], $u = /* @__PURE__ */ v.createContext();
function _u(e) {
  let {
    value: t
  } = e, n = Z(e, _y);
  return /* @__PURE__ */ y.jsx($u.Provider, x({
    value: t ?? !0
  }, n));
}
process.env.NODE_ENV !== "production" && (_u.propTypes = {
  children: o.node,
  value: o.bool
});
const $i = () => {
  const e = v.useContext($u);
  return e ?? !1;
}, Nu = /* @__PURE__ */ v.createContext(void 0);
function Iu({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ y.jsx(Nu.Provider, {
    value: e,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (Iu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: o.node,
  /**
   * @ignore
   */
  value: o.object
});
function Ny(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const s = t.components[n];
  return s.defaultProps ? Tr(s.defaultProps, r) : !s.styleOverrides && !s.variants ? Tr(s, r) : r;
}
function Iy({
  props: e,
  name: t
}) {
  const n = v.useContext(Nu);
  return Ny({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
function ky(e) {
  const t = Fo(), n = Pi() || "", {
    modularCssLayers: r
  } = e;
  let s = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? s = "" : typeof r == "string" ? s = r.replace(/mui(?!\.)/g, s) : s = `@layer ${s};`, It(() => {
    const i = document.querySelector("head");
    if (!i)
      return;
    const a = i.firstChild;
    if (s) {
      var l;
      if (a && (l = a.hasAttribute) != null && l.call(a, "data-mui-layer-order") && a.getAttribute("data-mui-layer-order") === n)
        return;
      const d = document.createElement("style");
      d.setAttribute("data-mui-layer-order", n), d.textContent = s, i.prepend(d);
    } else {
      var c;
      (c = i.querySelector(`style[data-mui-layer-order="${n}"]`)) == null || c.remove();
    }
  }, [s, n]), s ? /* @__PURE__ */ y.jsx(Si, {
    styles: s
  }) : null;
}
const rl = {};
function ol(e, t, n, r = !1) {
  return v.useMemo(() => {
    const s = e && t[e] || t;
    if (typeof n == "function") {
      const i = n(s), a = e ? x({}, t, {
        [e]: i
      }) : i;
      return r ? () => a : a;
    }
    return e ? x({}, t, {
      [e]: n
    }) : x({}, t, n);
  }, [e, t, n, r]);
}
function mo(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, s = Fo(rl), i = Pu() || rl;
  process.env.NODE_ENV !== "production" && (s === null && typeof n == "function" || r && s && !s[r] && typeof n == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const a = ol(r, s, n), l = ol(r, i, n, !0), c = a.direction === "rtl", d = ky(a);
  return /* @__PURE__ */ y.jsx(ho, {
    theme: l,
    children: /* @__PURE__ */ y.jsx(Kn.Provider, {
      value: a,
      children: /* @__PURE__ */ y.jsx(_u, {
        value: c,
        children: /* @__PURE__ */ y.jsxs(Iu, {
          value: a == null ? void 0 : a.components,
          children: [d, t]
        })
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (mo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Your component tree.
   */
  children: o.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: o.oneOfType([o.func, o.object]).isRequired,
  /**
   * The design system's unique id for getting the corresponded theme when there are multiple design systems.
   */
  themeId: o.string
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (mo.propTypes = Bo(mo.propTypes));
function jy(e, t) {
  return x({
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
var We = {}, ku = { exports: {} };
(function(e) {
  function t(n) {
    return n && n.__esModule ? n : {
      default: n
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(ku);
var ju = ku.exports;
const Ay = /* @__PURE__ */ en(gp), My = /* @__PURE__ */ en(ty);
var Au = ju;
Object.defineProperty(We, "__esModule", {
  value: !0
});
var De = We.alpha = zu;
We.blend = Hy;
We.colorChannel = void 0;
var Mu = We.darken = Ni;
We.decomposeColor = $t;
var sl = We.emphasize = Uu, il = We.getContrastRatio = zy;
We.getLuminance = yo;
We.hexToRgb = Fu;
We.hslToRgb = Bu;
var Du = We.lighten = Ii;
We.private_safeAlpha = Uy;
We.private_safeColorChannel = void 0;
We.private_safeDarken = Vy;
We.private_safeEmphasize = Wy;
We.private_safeLighten = qy;
We.recomposeColor = Gn;
We.rgbToHex = By;
var al = Au(Ay), Dy = Au(My);
function _i(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), (0, Dy.default)(e, t, n);
}
function Fu(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, s) => s < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Fy(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function $t(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return $t(Fu(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, al.default)(9, e));
  let r = e.substring(t + 1, e.length - 1), s;
  if (n === "color") {
    if (r = r.split(" "), s = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(s) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${s}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, al.default)(10, s));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: s
  };
}
const Lu = (e) => {
  const t = $t(e);
  return t.values.slice(0, 3).map((n, r) => t.type.indexOf("hsl") !== -1 && r !== 0 ? `${n}%` : n).join(" ");
};
We.colorChannel = Lu;
const Ly = (e, t) => {
  try {
    return Lu(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
We.private_safeColorChannel = Ly;
function Gn(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((s, i) => i < 3 ? parseInt(s, 10) : s) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function By(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: t
  } = $t(e);
  return `#${t.map((n, r) => Fy(r === 3 ? Math.round(255 * n) : n)).join("")}`;
}
function Bu(e) {
  e = $t(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, s = t[2] / 100, i = r * Math.min(s, 1 - s), a = (d, f = (d + n / 30) % 12) => s - i * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let l = "rgb";
  const c = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), Gn({
    type: l,
    values: c
  });
}
function yo(e) {
  e = $t(e);
  let t = e.type === "hsl" || e.type === "hsla" ? $t(Bu(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function zy(e, t) {
  const n = yo(e), r = yo(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function zu(e, t) {
  return e = $t(e), t = _i(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Gn(e);
}
function Uy(e, t, n) {
  try {
    return zu(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function Ni(e, t) {
  if (e = $t(e), t = _i(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Gn(e);
}
function Vy(e, t, n) {
  try {
    return Ni(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function Ii(e, t) {
  if (e = $t(e), t = _i(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Gn(e);
}
function qy(e, t, n) {
  try {
    return Ii(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function Uu(e, t = 0.15) {
  return yo(e) > 0.5 ? Ni(e, t) : Ii(e, t);
}
function Wy(e, t, n) {
  try {
    return Uu(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function Hy(e, t, n, r = 1) {
  const s = (c, d) => Math.round((c ** (1 / r) * (1 - n) + d ** (1 / r) * n) ** r), i = $t(e), a = $t(t), l = [s(i.values[0], a.values[0]), s(i.values[1], a.values[1]), s(i.values[2], a.values[2])];
  return Gn({
    type: "rgb",
    values: l
  });
}
const Ky = {
  black: "#000",
  white: "#fff"
}, Rr = Ky, Yy = {
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
}, Gy = Yy, Qy = {
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
}, En = Qy, Xy = {
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
}, Cn = Xy, Jy = {
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
}, sr = Jy, Zy = {
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
}, Tn = Zy, eb = {
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
}, Rn = eb, tb = {
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
}, On = tb, nb = ["mode", "contrastThreshold", "tonalOffset"], ll = {
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
    paper: Rr.white,
    default: Rr.white
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
}, Rs = {
  text: {
    primary: Rr.white,
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
    active: Rr.white,
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
function cl(e, t, n, r) {
  const s = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Du(e.main, s) : t === "dark" && (e.dark = Mu(e.main, i)));
}
function rb(e = "light") {
  return e === "dark" ? {
    main: Tn[200],
    light: Tn[50],
    dark: Tn[400]
  } : {
    main: Tn[700],
    light: Tn[400],
    dark: Tn[800]
  };
}
function ob(e = "light") {
  return e === "dark" ? {
    main: En[200],
    light: En[50],
    dark: En[400]
  } : {
    main: En[500],
    light: En[300],
    dark: En[700]
  };
}
function sb(e = "light") {
  return e === "dark" ? {
    main: Cn[500],
    light: Cn[300],
    dark: Cn[700]
  } : {
    main: Cn[700],
    light: Cn[400],
    dark: Cn[800]
  };
}
function ib(e = "light") {
  return e === "dark" ? {
    main: Rn[400],
    light: Rn[300],
    dark: Rn[700]
  } : {
    main: Rn[700],
    light: Rn[500],
    dark: Rn[900]
  };
}
function ab(e = "light") {
  return e === "dark" ? {
    main: On[400],
    light: On[300],
    dark: On[700]
  } : {
    main: On[800],
    light: On[500],
    dark: On[900]
  };
}
function lb(e = "light") {
  return e === "dark" ? {
    main: sr[400],
    light: sr[300],
    dark: sr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: sr[500],
    dark: sr[900]
  };
}
function cb(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2
  } = e, s = Z(e, nb), i = e.primary || rb(t), a = e.secondary || ob(t), l = e.error || sb(t), c = e.info || ib(t), d = e.success || ab(t), f = e.warning || lb(t);
  function p(u) {
    const b = il(u, Rs.text.primary) >= n ? Rs.text.primary : ll.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const R = il(u, b);
      R < 3 && console.error([`MUI: The contrast ratio of ${R}:1 for ${b} on ${u}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return b;
  }
  const m = ({
    color: u,
    name: b,
    mainShade: R = 500,
    lightShade: P = 300,
    darkShade: T = 700
  }) => {
    if (u = x({}, u), !u.main && u[R] && (u.main = u[R]), !u.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${b ? ` (${b})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${R}\` property.` : fn(11, b ? ` (${b})` : "", R));
    if (typeof u.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${b ? ` (${b})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(u.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : fn(12, b ? ` (${b})` : "", JSON.stringify(u.main)));
    return cl(u, "light", P, r), cl(u, "dark", T, r), u.contrastText || (u.contrastText = p(u.main)), u;
  }, g = {
    dark: Rs,
    light: ll
  };
  return process.env.NODE_ENV !== "production" && (g[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), vt(x({
    // A collection of common colors.
    common: x({}, Rr),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: m({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: m({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: m({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: m({
      color: f,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: m({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: m({
      color: d,
      name: "success"
    }),
    // The grey colors.
    grey: Gy,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: m,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r
  }, g[t]), s);
}
const ub = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function db(e) {
  return Math.round(e * 1e5) / 1e5;
}
const ul = {
  textTransform: "uppercase"
}, dl = '"Roboto", "Helvetica", "Arial", sans-serif';
function fb(e, t) {
  const n = typeof t == "function" ? t(e) : t, {
    fontFamily: r = dl,
    // The default font size of the Material Specification.
    fontSize: s = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: l = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: d = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: p
  } = n, m = Z(n, ub);
  process.env.NODE_ENV !== "production" && (typeof s != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof d != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const g = s / 14, h = p || ((R) => `${R / d * g}rem`), u = (R, P, T, C, E) => x({
    fontFamily: r,
    fontWeight: R,
    fontSize: h(P),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: T
  }, r === dl ? {
    letterSpacing: `${db(C / P)}em`
  } : {}, E, f), b = {
    h1: u(i, 96, 1.167, -1.5),
    h2: u(i, 60, 1.2, -0.5),
    h3: u(a, 48, 1.167, 0),
    h4: u(a, 34, 1.235, 0.25),
    h5: u(a, 24, 1.334, 0),
    h6: u(l, 20, 1.6, 0.15),
    subtitle1: u(a, 16, 1.75, 0.15),
    subtitle2: u(l, 14, 1.57, 0.1),
    body1: u(a, 16, 1.5, 0.15),
    body2: u(a, 14, 1.43, 0.15),
    button: u(l, 14, 1.75, 0.4, ul),
    caption: u(a, 12, 1.66, 0.4),
    overline: u(a, 12, 2.66, 1, ul),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return vt(x({
    htmlFontSize: d,
    pxToRem: h,
    fontFamily: r,
    fontSize: s,
    fontWeightLight: i,
    fontWeightRegular: a,
    fontWeightMedium: l,
    fontWeightBold: c
  }, b), m, {
    clone: !1
    // No need to clone deep
  });
}
const pb = 0.2, hb = 0.14, mb = 0.12;
function Be(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${pb})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${hb})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${mb})`].join(",");
}
const yb = ["none", Be(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Be(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Be(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Be(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Be(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Be(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Be(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Be(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Be(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Be(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Be(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Be(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Be(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Be(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Be(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Be(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Be(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Be(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Be(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Be(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Be(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Be(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Be(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Be(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], bb = yb, gb = ["duration", "easing", "delay"], vb = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, xb = {
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
function fl(e) {
  return `${Math.round(e)}ms`;
}
function Eb(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Cb(e) {
  const t = x({}, vb, e.easing), n = x({}, xb, e.duration);
  return x({
    getAutoHeightDuration: Eb,
    create: (s = ["all"], i = {}) => {
      const {
        duration: a = n.standard,
        easing: l = t.easeInOut,
        delay: c = 0
      } = i, d = Z(i, gb);
      if (process.env.NODE_ENV !== "production") {
        const f = (m) => typeof m == "string", p = (m) => !isNaN(parseFloat(m));
        !f(s) && !Array.isArray(s) && console.error('MUI: Argument "props" must be a string or Array.'), !p(a) && !f(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), f(l) || console.error('MUI: Argument "easing" must be a string.'), !p(c) && !f(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(d).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(d).join(",")}].`);
      }
      return (Array.isArray(s) ? s : [s]).map((f) => `${f} ${typeof a == "string" ? a : fl(a)} ${l} ${typeof c == "string" ? c : fl(c)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: n
  });
}
const Tb = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Rb = Tb, Ob = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Vo(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: r = {},
    transitions: s = {},
    typography: i = {}
  } = e, a = Z(e, Ob);
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateCssVars` is the closest identifier for checking that the `options` is a result of `extendTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateCssVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : fn(18));
  const l = cb(r), c = Ri(e);
  let d = vt(c, {
    mixins: jy(c.breakpoints, n),
    palette: l,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: bb.slice(),
    typography: fb(l, i),
    transitions: Cb(s),
    zIndex: x({}, Rb)
  });
  if (d = vt(d, a), d = t.reduce((f, p) => vt(f, p), d), process.env.NODE_ENV !== "production") {
    const f = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], p = (m, g) => {
      let h;
      for (h in m) {
        const u = m[h];
        if (f.indexOf(h) !== -1 && Object.keys(u).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const b = pe("", h);
            console.error([`MUI: The \`${g}\` component increases the CSS specificity of the \`${h}\` internal state.`, "You can not override it like this: ", JSON.stringify(m, null, 2), "", `Instead, you need to use the '&.${b}' syntax:`, JSON.stringify({
              root: {
                [`&.${b}`]: u
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          m[h] = {};
        }
      }
    };
    Object.keys(d.components).forEach((m) => {
      const g = d.components[m].styleOverrides;
      g && m.indexOf("Mui") === 0 && p(g, m);
    });
  }
  return d.unstable_sxConfig = x({}, Nr, a == null ? void 0 : a.unstable_sxConfig), d.unstable_sx = function(p) {
    return Do({
      sx: p,
      theme: this
    });
  }, d;
}
const Sb = Vo(), ki = Sb;
function bn() {
  const e = Oi(ki);
  return process.env.NODE_ENV !== "production" && v.useDebugValue(e), e[Fn] || e;
}
var jr = {}, Os = { exports: {} }, pl;
function wb() {
  return pl || (pl = 1, function(e) {
    function t(n, r) {
      if (n == null)
        return {};
      var s = {};
      for (var i in n)
        if ({}.hasOwnProperty.call(n, i)) {
          if (r.indexOf(i) !== -1)
            continue;
          s[i] = n[i];
        }
      return s;
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Os)), Os.exports;
}
const Pb = /* @__PURE__ */ en(Ah), $b = /* @__PURE__ */ en(Mh), _b = /* @__PURE__ */ en(qh), Nb = /* @__PURE__ */ en(Ym), Ib = /* @__PURE__ */ en(km), kb = /* @__PURE__ */ en(Fm);
var Qn = ju;
Object.defineProperty(jr, "__esModule", {
  value: !0
});
var jb = jr.default = Yb;
jr.shouldForwardProp = eo;
jr.systemDefaultTheme = void 0;
var Rt = Qn(eu()), Ks = Qn(wb()), bo = Vb(Pb), Ab = $b, Mb = Qn(_b), Db = Qn(Nb), Fb = Qn(Ib), Lb = Qn(kb);
const Bb = ["ownerState"], zb = ["variants"], Ub = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Vu(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (Vu = function(r) {
    return r ? n : t;
  })(e);
}
function Vb(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var n = Vu(t);
  if (n && n.has(e))
    return n.get(e);
  var r = { __proto__: null }, s = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var a = s ? Object.getOwnPropertyDescriptor(e, i) : null;
      a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i];
    }
  return r.default = e, n && n.set(e, r), r;
}
function qb(e) {
  return Object.keys(e).length === 0;
}
function Wb(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function eo(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function hl(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
const Hb = jr.systemDefaultTheme = (0, Fb.default)(), ml = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Ur({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return qb(t) ? e : t[n] || t;
}
function Kb(e) {
  return e ? (t, n) => n[e] : null;
}
function to(e, t, n) {
  let {
    ownerState: r
  } = t, s = (0, Ks.default)(t, Bb);
  const i = typeof e == "function" ? e((0, Rt.default)({
    ownerState: r
  }, s)) : e;
  if (Array.isArray(i))
    return i.flatMap((a) => to(a, (0, Rt.default)({
      ownerState: r
    }, s), n));
  if (i && typeof i == "object" && Array.isArray(i.variants)) {
    const {
      variants: a = []
    } = i;
    let c = (0, Ks.default)(i, zb);
    return a.forEach((d) => {
      let f = !0;
      if (typeof d.props == "function" ? f = d.props((0, Rt.default)({
        ownerState: r
      }, s, r)) : Object.keys(d.props).forEach((p) => {
        (r == null ? void 0 : r[p]) !== d.props[p] && s[p] !== d.props[p] && (f = !1);
      }), f) {
        Array.isArray(c) || (c = [c]);
        const p = typeof d.style == "function" ? d.style((0, Rt.default)({
          ownerState: r
        }, s, r)) : d.style;
        c.push(n ? hl((0, bo.internal_serializeStyles)(p), n) : p);
      }
    }), c;
  }
  return n ? hl((0, bo.internal_serializeStyles)(i), n) : i;
}
function Yb(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = Hb,
    rootShouldForwardProp: r = eo,
    slotShouldForwardProp: s = eo
  } = e, i = (a) => (0, Lb.default)((0, Rt.default)({}, a, {
    theme: Ur((0, Rt.default)({}, a, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (a, l = {}) => {
    (0, bo.internal_processStyles)(a, (w) => w.filter((S) => !(S != null && S.__mui_systemSx)));
    const {
      name: c,
      slot: d,
      skipVariantsResolver: f,
      skipSx: p,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: m = Kb(ml(d))
    } = l, g = (0, Ks.default)(l, Ub), h = c && c.startsWith("Mui") || d ? "components" : "custom", u = f !== void 0 ? f : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), b = p || !1;
    let R;
    process.env.NODE_ENV !== "production" && c && (R = `${c}-${ml(d || "Root")}`);
    let P = eo;
    d === "Root" || d === "root" ? P = r : d ? P = s : Wb(a) && (P = void 0);
    const T = (0, bo.default)(a, (0, Rt.default)({
      shouldForwardProp: P,
      label: R
    }, g)), C = (w) => typeof w == "function" && w.__emotion_real !== w || (0, Ab.isPlainObject)(w) ? (S) => {
      const N = Ur({
        theme: S.theme,
        defaultTheme: n,
        themeId: t
      });
      return to(w, (0, Rt.default)({}, S, {
        theme: N
      }), N.modularCssLayers ? h : void 0);
    } : w, E = (w, ...S) => {
      let N = C(w);
      const M = S ? S.map(C) : [];
      c && m && M.push((z) => {
        const j = Ur((0, Rt.default)({}, z, {
          defaultTheme: n,
          themeId: t
        }));
        if (!j.components || !j.components[c] || !j.components[c].styleOverrides)
          return null;
        const A = j.components[c].styleOverrides, U = {};
        return Object.entries(A).forEach(([F, H]) => {
          U[F] = to(H, (0, Rt.default)({}, z, {
            theme: j
          }), j.modularCssLayers ? "theme" : void 0);
        }), m(z, U);
      }), c && !u && M.push((z) => {
        var j;
        const A = Ur((0, Rt.default)({}, z, {
          defaultTheme: n,
          themeId: t
        })), U = A == null || (j = A.components) == null || (j = j[c]) == null ? void 0 : j.variants;
        return to({
          variants: U
        }, (0, Rt.default)({}, z, {
          theme: A
        }), A.modularCssLayers ? "theme" : void 0);
      }), b || M.push(i);
      const B = M.length - S.length;
      if (Array.isArray(w) && B > 0) {
        const z = new Array(B).fill("");
        N = [...w, ...z], N.raw = [...w.raw, ...z];
      }
      const W = T(N, ...M);
      if (process.env.NODE_ENV !== "production") {
        let z;
        c && (z = `${c}${(0, Mb.default)(d || "")}`), z === void 0 && (z = `Styled(${(0, Db.default)(a)})`), W.displayName = z;
      }
      return a.muiName && (W.muiName = a.muiName), W;
    };
    return T.withConfig && (E.withConfig = T.withConfig), E;
  };
}
function qu(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Gb = (e) => qu(e) && e !== "classes", Et = Gb, Qb = jb({
  themeId: Fn,
  defaultTheme: ki,
  rootShouldForwardProp: Et
}), Y = Qb, Xb = ["theme"];
function ji(e) {
  let {
    theme: t
  } = e, n = Z(e, Xb);
  const r = t[Fn];
  let s = r || t;
  return typeof t != "function" && (r && !r.vars ? s = x({}, r, {
    vars: null
  }) : t && !t.vars && (s = x({}, t, {
    vars: null
  }))), /* @__PURE__ */ y.jsx(mo, x({}, n, {
    themeId: r ? Fn : void 0,
    theme: s
  }));
}
process.env.NODE_ENV !== "production" && (ji.propTypes = {
  /**
   * Your component tree.
   */
  children: o.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: o.oneOfType([o.object, o.func]).isRequired
});
const Jb = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
}, yl = Jb;
process.env.NODE_ENV !== "production" && (o.node, o.object.isRequired);
function ye(e) {
  return Iy(e);
}
function Ai(e) {
  return /* @__PURE__ */ y.jsx(Si, x({}, e, {
    defaultTheme: ki,
    themeId: Fn
  }));
}
process.env.NODE_ENV !== "production" && (Ai.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: o.oneOfType([o.array, o.func, o.number, o.object, o.string, o.bool])
});
const Zb = (e, t) => x({
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
}), eg = (e) => x({
  color: (e.vars || e).palette.text.primary
}, e.typography.body1, {
  backgroundColor: (e.vars || e).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (e.vars || e).palette.common.white
  }
}), tg = (e, t = !1) => {
  var n;
  const r = {};
  t && e.colorSchemes && Object.entries(e.colorSchemes).forEach(([a, l]) => {
    var c;
    r[e.getColorSchemeSelector(a).replace(/\s*&/, "")] = {
      colorScheme: (c = l.palette) == null ? void 0 : c.mode
    };
  });
  let s = x({
    html: Zb(e, t),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: e.typography.fontWeightBold
    },
    body: x({
      margin: 0
    }, eg(e), {
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: (e.vars || e).palette.background.default
      }
    })
  }, r);
  const i = (n = e.components) == null || (n = n.MuiCssBaseline) == null ? void 0 : n.styleOverrides;
  return i && (s = [s, i]), s;
};
function Mi(e) {
  const t = ye({
    props: e,
    name: "MuiCssBaseline"
  }), {
    children: n,
    enableColorScheme: r = !1
  } = t;
  return /* @__PURE__ */ y.jsxs(v.Fragment, {
    children: [/* @__PURE__ */ y.jsx(Ai, {
      styles: (s) => tg(s, r)
    }), n]
  });
}
process.env.NODE_ENV !== "production" && (Mi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * You can wrap a node.
   */
  children: o.node,
  /**
   * Enable `color-scheme` CSS property to use `theme.palette.mode`.
   * For more details, check out https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
   * For browser support, check out https://caniuse.com/?search=color-scheme
   * @default false
   */
  enableColorScheme: o.bool
});
class Ar {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(t) {
    const n = {
      listener: t
    };
    return this.listeners.add(n), this.onSubscribe(), () => {
      this.listeners.delete(n), this.onUnsubscribe();
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
const Or = typeof window > "u" || "Deno" in window;
function Ot() {
}
function ng(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ys(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Wu(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function fr(e, t, n) {
  return qo(e) ? typeof t == "function" ? {
    ...n,
    queryKey: e,
    queryFn: t
  } : {
    ...t,
    queryKey: e
  } : e;
}
function Jt(e, t, n) {
  return qo(e) ? [{
    ...t,
    queryKey: e
  }, n] : [e || {}, t];
}
function bl(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: s,
    predicate: i,
    queryKey: a,
    stale: l
  } = e;
  if (qo(a)) {
    if (r) {
      if (t.queryHash !== Di(a, t.options))
        return !1;
    } else if (!Nn(t.queryKey, a))
      return !1;
  }
  if (n !== "all") {
    const c = t.isActive();
    if (n === "active" && !c || n === "inactive" && c)
      return !1;
  }
  return !(typeof l == "boolean" && t.isStale() !== l || typeof s < "u" && s !== t.state.fetchStatus || i && !i(t));
}
function gl(e, t) {
  const {
    exact: n,
    fetching: r,
    predicate: s,
    mutationKey: i
  } = e;
  if (qo(i)) {
    if (!t.options.mutationKey)
      return !1;
    if (n) {
      if (ln(t.options.mutationKey) !== ln(i))
        return !1;
    } else if (!Nn(t.options.mutationKey, i))
      return !1;
  }
  return !(typeof r == "boolean" && t.state.status === "loading" !== r || s && !s(t));
}
function Di(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || ln)(e);
}
function ln(e) {
  return JSON.stringify(e, (t, n) => Qs(n) ? Object.keys(n).sort().reduce((r, s) => (r[s] = n[s], r), {}) : n);
}
function Nn(e, t) {
  return Hu(e, t);
}
function Hu(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some((n) => !Hu(e[n], t[n])) : !1;
}
function Ku(e, t) {
  if (e === t)
    return e;
  const n = vl(e) && vl(t);
  if (n || Qs(e) && Qs(t)) {
    const r = n ? e.length : Object.keys(e).length, s = n ? t : Object.keys(t), i = s.length, a = n ? [] : {};
    let l = 0;
    for (let c = 0; c < i; c++) {
      const d = n ? c : s[c];
      a[d] = Ku(e[d], t[d]), a[d] === e[d] && l++;
    }
    return r === i && l === r ? e : a;
  }
  return t;
}
function Gs(e, t) {
  if (e && !t || t && !e)
    return !1;
  for (const n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function vl(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Qs(e) {
  if (!xl(e))
    return !1;
  const t = e.constructor;
  if (typeof t > "u")
    return !0;
  const n = t.prototype;
  return !(!xl(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function xl(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function qo(e) {
  return Array.isArray(e);
}
function Yu(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function El(e) {
  Yu(0).then(e);
}
function rg() {
  if (typeof AbortController == "function")
    return new AbortController();
}
function Xs(e, t, n) {
  return n.isDataEqual != null && n.isDataEqual(e, t) ? e : typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? Ku(e, t) : t;
}
class og extends Ar {
  constructor() {
    super(), this.setup = (t) => {
      if (!Or && window.addEventListener) {
        const n = () => t();
        return window.addEventListener("visibilitychange", n, !1), window.addEventListener("focus", n, !1), () => {
          window.removeEventListener("visibilitychange", n), window.removeEventListener("focus", n);
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
    var n;
    this.setup = t, (n = this.cleanup) == null || n.call(this), this.cleanup = t((r) => {
      typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
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
const go = new og(), Cl = ["online", "offline"];
class sg extends Ar {
  constructor() {
    super(), this.setup = (t) => {
      if (!Or && window.addEventListener) {
        const n = () => t();
        return Cl.forEach((r) => {
          window.addEventListener(r, n, !1);
        }), () => {
          Cl.forEach((r) => {
            window.removeEventListener(r, n);
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
    var n;
    this.setup = t, (n = this.cleanup) == null || n.call(this), this.cleanup = t((r) => {
      typeof r == "boolean" ? this.setOnline(r) : this.onOnline();
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
const vo = new sg();
function ig(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Wo(e) {
  return (e ?? "online") === "online" ? vo.isOnline() : !0;
}
class Gu {
  constructor(t) {
    this.revert = t == null ? void 0 : t.revert, this.silent = t == null ? void 0 : t.silent;
  }
}
function no(e) {
  return e instanceof Gu;
}
function Qu(e) {
  let t = !1, n = 0, r = !1, s, i, a;
  const l = new Promise((b, R) => {
    i = b, a = R;
  }), c = (b) => {
    r || (g(new Gu(b)), e.abort == null || e.abort());
  }, d = () => {
    t = !0;
  }, f = () => {
    t = !1;
  }, p = () => !go.isFocused() || e.networkMode !== "always" && !vo.isOnline(), m = (b) => {
    r || (r = !0, e.onSuccess == null || e.onSuccess(b), s == null || s(), i(b));
  }, g = (b) => {
    r || (r = !0, e.onError == null || e.onError(b), s == null || s(), a(b));
  }, h = () => new Promise((b) => {
    s = (R) => {
      const P = r || !p();
      return P && b(R), P;
    }, e.onPause == null || e.onPause();
  }).then(() => {
    s = void 0, r || e.onContinue == null || e.onContinue();
  }), u = () => {
    if (r)
      return;
    let b;
    try {
      b = e.fn();
    } catch (R) {
      b = Promise.reject(R);
    }
    Promise.resolve(b).then(m).catch((R) => {
      var P, T;
      if (r)
        return;
      const C = (P = e.retry) != null ? P : 3, E = (T = e.retryDelay) != null ? T : ig, w = typeof E == "function" ? E(n, R) : E, S = C === !0 || typeof C == "number" && n < C || typeof C == "function" && C(n, R);
      if (t || !S) {
        g(R);
        return;
      }
      n++, e.onFail == null || e.onFail(n, R), Yu(w).then(() => {
        if (p())
          return h();
      }).then(() => {
        t ? g(R) : u();
      });
    });
  };
  return Wo(e.networkMode) ? u() : h().then(u), {
    promise: l,
    cancel: c,
    continue: () => (s == null ? void 0 : s()) ? l : Promise.resolve(),
    cancelRetry: d,
    continueRetry: f
  };
}
const Fi = console;
function ag() {
  let e = [], t = 0, n = (f) => {
    f();
  }, r = (f) => {
    f();
  };
  const s = (f) => {
    let p;
    t++;
    try {
      p = f();
    } finally {
      t--, t || l();
    }
    return p;
  }, i = (f) => {
    t ? e.push(f) : El(() => {
      n(f);
    });
  }, a = (f) => (...p) => {
    i(() => {
      f(...p);
    });
  }, l = () => {
    const f = e;
    e = [], f.length && El(() => {
      r(() => {
        f.forEach((p) => {
          n(p);
        });
      });
    });
  };
  return {
    batch: s,
    batchCalls: a,
    schedule: i,
    setNotifyFunction: (f) => {
      n = f;
    },
    setBatchNotifyFunction: (f) => {
      r = f;
    }
  };
}
const Ye = ag();
class Xu {
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), Ys(this.cacheTime) && (this.gcTimeout = setTimeout(() => {
      this.optionalRemove();
    }, this.cacheTime));
  }
  updateCacheTime(t) {
    this.cacheTime = Math.max(this.cacheTime || 0, t ?? (Or ? 1 / 0 : 5 * 60 * 1e3));
  }
  clearGcTimeout() {
    this.gcTimeout && (clearTimeout(this.gcTimeout), this.gcTimeout = void 0);
  }
}
class lg extends Xu {
  constructor(t) {
    super(), this.abortSignalConsumed = !1, this.defaultOptions = t.defaultOptions, this.setOptions(t.options), this.observers = [], this.cache = t.cache, this.logger = t.logger || Fi, this.queryKey = t.queryKey, this.queryHash = t.queryHash, this.initialState = t.state || cg(this.options), this.state = this.initialState, this.scheduleGc();
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
  setData(t, n) {
    const r = Xs(this.state.data, t, this.options);
    return this.dispatch({
      data: r,
      type: "success",
      dataUpdatedAt: n == null ? void 0 : n.updatedAt,
      manual: n == null ? void 0 : n.manual
    }), r;
  }
  setState(t, n) {
    this.dispatch({
      type: "setState",
      state: t,
      setStateOptions: n
    });
  }
  cancel(t) {
    var n;
    const r = this.promise;
    return (n = this.retryer) == null || n.cancel(t), r ? r.then(Ot).catch(Ot) : Promise.resolve();
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
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !Wu(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    var t;
    const n = this.observers.find((r) => r.shouldFetchOnWindowFocus());
    n && n.refetch({
      cancelRefetch: !1
    }), (t = this.retryer) == null || t.continue();
  }
  onOnline() {
    var t;
    const n = this.observers.find((r) => r.shouldFetchOnReconnect());
    n && n.refetch({
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
    this.observers.includes(t) && (this.observers = this.observers.filter((n) => n !== t), this.observers.length || (this.retryer && (this.abortSignalConsumed ? this.retryer.cancel({
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
  fetch(t, n) {
    var r, s;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.dataUpdatedAt && n != null && n.cancelRefetch)
        this.cancel({
          silent: !0
        });
      else if (this.promise) {
        var i;
        return (i = this.retryer) == null || i.continueRetry(), this.promise;
      }
    }
    if (t && this.setOptions(t), !this.options.queryFn) {
      const g = this.observers.find((h) => h.options.queryFn);
      g && this.setOptions(g.options);
    }
    process.env.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || this.logger.error("As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"));
    const a = rg(), l = {
      queryKey: this.queryKey,
      pageParam: void 0,
      meta: this.meta
    }, c = (g) => {
      Object.defineProperty(g, "signal", {
        enumerable: !0,
        get: () => {
          if (a)
            return this.abortSignalConsumed = !0, a.signal;
        }
      });
    };
    c(l);
    const d = () => this.options.queryFn ? (this.abortSignalConsumed = !1, this.options.queryFn(l)) : Promise.reject("Missing queryFn for queryKey '" + this.options.queryHash + "'"), f = {
      fetchOptions: n,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: d
    };
    if (c(f), (r = this.options.behavior) == null || r.onFetch(f), this.revertState = this.state, this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((s = f.fetchOptions) == null ? void 0 : s.meta)) {
      var p;
      this.dispatch({
        type: "fetch",
        meta: (p = f.fetchOptions) == null ? void 0 : p.meta
      });
    }
    const m = (g) => {
      if (no(g) && g.silent || this.dispatch({
        type: "error",
        error: g
      }), !no(g)) {
        var h, u, b, R;
        (h = (u = this.cache.config).onError) == null || h.call(u, g, this), (b = (R = this.cache.config).onSettled) == null || b.call(R, this.state.data, g, this), process.env.NODE_ENV !== "production" && this.logger.error(g);
      }
      this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
    };
    return this.retryer = Qu({
      fn: f.fetchFn,
      abort: a == null ? void 0 : a.abort.bind(a),
      onSuccess: (g) => {
        var h, u, b, R;
        if (typeof g > "u") {
          process.env.NODE_ENV !== "production" && this.logger.error("Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: " + this.queryHash), m(new Error(this.queryHash + " data is undefined"));
          return;
        }
        this.setData(g), (h = (u = this.cache.config).onSuccess) == null || h.call(u, g, this), (b = (R = this.cache.config).onSettled) == null || b.call(R, g, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
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
    const n = (r) => {
      var s, i;
      switch (t.type) {
        case "failed":
          return {
            ...r,
            fetchFailureCount: t.failureCount,
            fetchFailureReason: t.error
          };
        case "pause":
          return {
            ...r,
            fetchStatus: "paused"
          };
        case "continue":
          return {
            ...r,
            fetchStatus: "fetching"
          };
        case "fetch":
          return {
            ...r,
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchMeta: (s = t.meta) != null ? s : null,
            fetchStatus: Wo(this.options.networkMode) ? "fetching" : "paused",
            ...!r.dataUpdatedAt && {
              error: null,
              status: "loading"
            }
          };
        case "success":
          return {
            ...r,
            data: t.data,
            dataUpdateCount: r.dataUpdateCount + 1,
            dataUpdatedAt: (i = t.dataUpdatedAt) != null ? i : Date.now(),
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
          const a = t.error;
          return no(a) && a.revert && this.revertState ? {
            ...this.revertState,
            fetchStatus: "idle"
          } : {
            ...r,
            error: a,
            errorUpdateCount: r.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: r.fetchFailureCount + 1,
            fetchFailureReason: a,
            fetchStatus: "idle",
            status: "error"
          };
        case "invalidate":
          return {
            ...r,
            isInvalidated: !0
          };
        case "setState":
          return {
            ...r,
            ...t.state
          };
      }
    };
    this.state = n(this.state), Ye.batch(() => {
      this.observers.forEach((r) => {
        r.onQueryUpdate(t);
      }), this.cache.notify({
        query: this,
        type: "updated",
        action: t
      });
    });
  }
}
function cg(e) {
  const t = typeof e.initialData == "function" ? e.initialData() : e.initialData, n = typeof t < "u", r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "loading",
    fetchStatus: "idle"
  };
}
class ug extends Ar {
  constructor(t) {
    super(), this.config = t || {}, this.queries = [], this.queriesMap = {};
  }
  build(t, n, r) {
    var s;
    const i = n.queryKey, a = (s = n.queryHash) != null ? s : Di(i, n);
    let l = this.get(a);
    return l || (l = new lg({
      cache: this,
      logger: t.getLogger(),
      queryKey: i,
      queryHash: a,
      options: t.defaultQueryOptions(n),
      state: r,
      defaultOptions: t.getQueryDefaults(i)
    }), this.add(l)), l;
  }
  add(t) {
    this.queriesMap[t.queryHash] || (this.queriesMap[t.queryHash] = t, this.queries.push(t), this.notify({
      type: "added",
      query: t
    }));
  }
  remove(t) {
    const n = this.queriesMap[t.queryHash];
    n && (t.destroy(), this.queries = this.queries.filter((r) => r !== t), n === t && delete this.queriesMap[t.queryHash], this.notify({
      type: "removed",
      query: t
    }));
  }
  clear() {
    Ye.batch(() => {
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
  find(t, n) {
    const [r] = Jt(t, n);
    return typeof r.exact > "u" && (r.exact = !0), this.queries.find((s) => bl(r, s));
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  findAll(t, n) {
    const [r] = Jt(t, n);
    return Object.keys(r).length > 0 ? this.queries.filter((s) => bl(r, s)) : this.queries;
  }
  notify(t) {
    Ye.batch(() => {
      this.listeners.forEach(({
        listener: n
      }) => {
        n(t);
      });
    });
  }
  onFocus() {
    Ye.batch(() => {
      this.queries.forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    Ye.batch(() => {
      this.queries.forEach((t) => {
        t.onOnline();
      });
    });
  }
}
class dg extends Xu {
  constructor(t) {
    super(), this.defaultOptions = t.defaultOptions, this.mutationId = t.mutationId, this.mutationCache = t.mutationCache, this.logger = t.logger || Fi, this.observers = [], this.state = t.state || fg(), this.setOptions(t.options), this.scheduleGc();
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
    this.observers = this.observers.filter((n) => n !== t), this.scheduleGc(), this.mutationCache.notify({
      type: "observerRemoved",
      mutation: this,
      observer: t
    });
  }
  optionalRemove() {
    this.observers.length || (this.state.status === "loading" ? this.scheduleGc() : this.mutationCache.remove(this));
  }
  continue() {
    var t, n;
    return (t = (n = this.retryer) == null ? void 0 : n.continue()) != null ? t : this.execute();
  }
  async execute() {
    const t = () => {
      var S;
      return this.retryer = Qu({
        fn: () => this.options.mutationFn ? this.options.mutationFn(this.state.variables) : Promise.reject("No mutationFn found"),
        onFail: (N, M) => {
          this.dispatch({
            type: "failed",
            failureCount: N,
            error: M
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
        retry: (S = this.options.retry) != null ? S : 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode
      }), this.retryer.promise;
    }, n = this.state.status === "loading";
    try {
      var r, s, i, a, l, c, d, f;
      if (!n) {
        var p, m, g, h;
        this.dispatch({
          type: "loading",
          variables: this.options.variables
        }), await ((p = (m = this.mutationCache.config).onMutate) == null ? void 0 : p.call(m, this.state.variables, this));
        const N = await ((g = (h = this.options).onMutate) == null ? void 0 : g.call(h, this.state.variables));
        N !== this.state.context && this.dispatch({
          type: "loading",
          context: N,
          variables: this.state.variables
        });
      }
      const S = await t();
      return await ((r = (s = this.mutationCache.config).onSuccess) == null ? void 0 : r.call(s, S, this.state.variables, this.state.context, this)), await ((i = (a = this.options).onSuccess) == null ? void 0 : i.call(a, S, this.state.variables, this.state.context)), await ((l = (c = this.mutationCache.config).onSettled) == null ? void 0 : l.call(c, S, null, this.state.variables, this.state.context, this)), await ((d = (f = this.options).onSettled) == null ? void 0 : d.call(f, S, null, this.state.variables, this.state.context)), this.dispatch({
        type: "success",
        data: S
      }), S;
    } catch (S) {
      try {
        var u, b, R, P, T, C, E, w;
        throw await ((u = (b = this.mutationCache.config).onError) == null ? void 0 : u.call(b, S, this.state.variables, this.state.context, this)), process.env.NODE_ENV !== "production" && this.logger.error(S), await ((R = (P = this.options).onError) == null ? void 0 : R.call(P, S, this.state.variables, this.state.context)), await ((T = (C = this.mutationCache.config).onSettled) == null ? void 0 : T.call(C, void 0, S, this.state.variables, this.state.context, this)), await ((E = (w = this.options).onSettled) == null ? void 0 : E.call(w, void 0, S, this.state.variables, this.state.context)), S;
      } finally {
        this.dispatch({
          type: "error",
          error: S
        });
      }
    }
  }
  dispatch(t) {
    const n = (r) => {
      switch (t.type) {
        case "failed":
          return {
            ...r,
            failureCount: t.failureCount,
            failureReason: t.error
          };
        case "pause":
          return {
            ...r,
            isPaused: !0
          };
        case "continue":
          return {
            ...r,
            isPaused: !1
          };
        case "loading":
          return {
            ...r,
            context: t.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: !Wo(this.options.networkMode),
            status: "loading",
            variables: t.variables
          };
        case "success":
          return {
            ...r,
            data: t.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1
          };
        case "error":
          return {
            ...r,
            data: void 0,
            error: t.error,
            failureCount: r.failureCount + 1,
            failureReason: t.error,
            isPaused: !1,
            status: "error"
          };
        case "setState":
          return {
            ...r,
            ...t.state
          };
      }
    };
    this.state = n(this.state), Ye.batch(() => {
      this.observers.forEach((r) => {
        r.onMutationUpdate(t);
      }), this.mutationCache.notify({
        mutation: this,
        type: "updated",
        action: t
      });
    });
  }
}
function fg() {
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
class pg extends Ar {
  constructor(t) {
    super(), this.config = t || {}, this.mutations = [], this.mutationId = 0;
  }
  build(t, n, r) {
    const s = new dg({
      mutationCache: this,
      logger: t.getLogger(),
      mutationId: ++this.mutationId,
      options: t.defaultMutationOptions(n),
      state: r,
      defaultOptions: n.mutationKey ? t.getMutationDefaults(n.mutationKey) : void 0
    });
    return this.add(s), s;
  }
  add(t) {
    this.mutations.push(t), this.notify({
      type: "added",
      mutation: t
    });
  }
  remove(t) {
    this.mutations = this.mutations.filter((n) => n !== t), this.notify({
      type: "removed",
      mutation: t
    });
  }
  clear() {
    Ye.batch(() => {
      this.mutations.forEach((t) => {
        this.remove(t);
      });
    });
  }
  getAll() {
    return this.mutations;
  }
  find(t) {
    return typeof t.exact > "u" && (t.exact = !0), this.mutations.find((n) => gl(t, n));
  }
  findAll(t) {
    return this.mutations.filter((n) => gl(t, n));
  }
  notify(t) {
    Ye.batch(() => {
      this.listeners.forEach(({
        listener: n
      }) => {
        n(t);
      });
    });
  }
  resumePausedMutations() {
    var t;
    return this.resuming = ((t = this.resuming) != null ? t : Promise.resolve()).then(() => {
      const n = this.mutations.filter((r) => r.state.isPaused);
      return Ye.batch(() => n.reduce((r, s) => r.then(() => s.continue().catch(Ot)), Promise.resolve()));
    }).then(() => {
      this.resuming = void 0;
    }), this.resuming;
  }
}
function hg() {
  return {
    onFetch: (e) => {
      e.fetchFn = () => {
        var t, n, r, s, i, a;
        const l = (t = e.fetchOptions) == null || (n = t.meta) == null ? void 0 : n.refetchPage, c = (r = e.fetchOptions) == null || (s = r.meta) == null ? void 0 : s.fetchMore, d = c == null ? void 0 : c.pageParam, f = (c == null ? void 0 : c.direction) === "forward", p = (c == null ? void 0 : c.direction) === "backward", m = ((i = e.state.data) == null ? void 0 : i.pages) || [], g = ((a = e.state.data) == null ? void 0 : a.pageParams) || [];
        let h = g, u = !1;
        const b = (w) => {
          Object.defineProperty(w, "signal", {
            enumerable: !0,
            get: () => {
              var S;
              if ((S = e.signal) != null && S.aborted)
                u = !0;
              else {
                var N;
                (N = e.signal) == null || N.addEventListener("abort", () => {
                  u = !0;
                });
              }
              return e.signal;
            }
          });
        }, R = e.options.queryFn || (() => Promise.reject("Missing queryFn for queryKey '" + e.options.queryHash + "'")), P = (w, S, N, M) => (h = M ? [S, ...h] : [...h, S], M ? [N, ...w] : [...w, N]), T = (w, S, N, M) => {
          if (u)
            return Promise.reject("Cancelled");
          if (typeof N > "u" && !S && w.length)
            return Promise.resolve(w);
          const B = {
            queryKey: e.queryKey,
            pageParam: N,
            meta: e.options.meta
          };
          b(B);
          const W = R(B);
          return Promise.resolve(W).then((j) => P(w, N, j, M));
        };
        let C;
        if (!m.length)
          C = T([]);
        else if (f) {
          const w = typeof d < "u", S = w ? d : Tl(e.options, m);
          C = T(m, w, S);
        } else if (p) {
          const w = typeof d < "u", S = w ? d : mg(e.options, m);
          C = T(m, w, S, !0);
        } else {
          h = [];
          const w = typeof e.options.getNextPageParam > "u";
          C = (l && m[0] ? l(m[0], 0, m) : !0) ? T([], w, g[0]) : Promise.resolve(P([], g[0], m[0]));
          for (let N = 1; N < m.length; N++)
            C = C.then((M) => {
              if (l && m[N] ? l(m[N], N, m) : !0) {
                const W = w ? g[N] : Tl(e.options, M);
                return T(M, w, W);
              }
              return Promise.resolve(P(M, g[N], m[N]));
            });
        }
        return C.then((w) => ({
          pages: w,
          pageParams: h
        }));
      };
    }
  };
}
function Tl(e, t) {
  return e.getNextPageParam == null ? void 0 : e.getNextPageParam(t[t.length - 1], t);
}
function mg(e, t) {
  return e.getPreviousPageParam == null ? void 0 : e.getPreviousPageParam(t[0], t);
}
class yg {
  constructor(t = {}) {
    this.queryCache = t.queryCache || new ug(), this.mutationCache = t.mutationCache || new pg(), this.logger = t.logger || Fi, this.defaultOptions = t.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = [], this.mountCount = 0, process.env.NODE_ENV !== "production" && t.logger && this.logger.error("Passing a custom logger has been deprecated and will be removed in the next major version.");
  }
  mount() {
    this.mountCount++, this.mountCount === 1 && (this.unsubscribeFocus = go.subscribe(() => {
      go.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus());
    }), this.unsubscribeOnline = vo.subscribe(() => {
      vo.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline());
    }));
  }
  unmount() {
    var t, n;
    this.mountCount--, this.mountCount === 0 && ((t = this.unsubscribeFocus) == null || t.call(this), this.unsubscribeFocus = void 0, (n = this.unsubscribeOnline) == null || n.call(this), this.unsubscribeOnline = void 0);
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  isFetching(t, n) {
    const [r] = Jt(t, n);
    return r.fetchStatus = "fetching", this.queryCache.findAll(r).length;
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
  getQueryData(t, n) {
    var r;
    return (r = this.queryCache.find(t, n)) == null ? void 0 : r.state.data;
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  ensureQueryData(t, n, r) {
    const s = fr(t, n, r), i = this.getQueryData(s.queryKey);
    return i ? Promise.resolve(i) : this.fetchQuery(s);
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  getQueriesData(t) {
    return this.getQueryCache().findAll(t).map(({
      queryKey: n,
      state: r
    }) => {
      const s = r.data;
      return [n, s];
    });
  }
  setQueryData(t, n, r) {
    const s = this.queryCache.find(t), i = s == null ? void 0 : s.state.data, a = ng(n, i);
    if (typeof a > "u")
      return;
    const l = fr(t), c = this.defaultQueryOptions(l);
    return this.queryCache.build(this, c).setData(a, {
      ...r,
      manual: !0
    });
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  setQueriesData(t, n, r) {
    return Ye.batch(() => this.getQueryCache().findAll(t).map(({
      queryKey: s
    }) => [s, this.setQueryData(s, n, r)]));
  }
  getQueryState(t, n) {
    var r;
    return (r = this.queryCache.find(t, n)) == null ? void 0 : r.state;
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  removeQueries(t, n) {
    const [r] = Jt(t, n), s = this.queryCache;
    Ye.batch(() => {
      s.findAll(r).forEach((i) => {
        s.remove(i);
      });
    });
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  resetQueries(t, n, r) {
    const [s, i] = Jt(t, n, r), a = this.queryCache, l = {
      type: "active",
      ...s
    };
    return Ye.batch(() => (a.findAll(s).forEach((c) => {
      c.reset();
    }), this.refetchQueries(l, i)));
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  cancelQueries(t, n, r) {
    const [s, i = {}] = Jt(t, n, r);
    typeof i.revert > "u" && (i.revert = !0);
    const a = Ye.batch(() => this.queryCache.findAll(s).map((l) => l.cancel(i)));
    return Promise.all(a).then(Ot).catch(Ot);
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  invalidateQueries(t, n, r) {
    const [s, i] = Jt(t, n, r);
    return Ye.batch(() => {
      var a, l;
      if (this.queryCache.findAll(s).forEach((d) => {
        d.invalidate();
      }), s.refetchType === "none")
        return Promise.resolve();
      const c = {
        ...s,
        type: (a = (l = s.refetchType) != null ? l : s.type) != null ? a : "active"
      };
      return this.refetchQueries(c, i);
    });
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  refetchQueries(t, n, r) {
    const [s, i] = Jt(t, n, r), a = Ye.batch(() => this.queryCache.findAll(s).filter((c) => !c.isDisabled()).map((c) => {
      var d;
      return c.fetch(void 0, {
        ...i,
        cancelRefetch: (d = i == null ? void 0 : i.cancelRefetch) != null ? d : !0,
        meta: {
          refetchPage: s.refetchPage
        }
      });
    }));
    let l = Promise.all(a).then(Ot);
    return i != null && i.throwOnError || (l = l.catch(Ot)), l;
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  fetchQuery(t, n, r) {
    const s = fr(t, n, r), i = this.defaultQueryOptions(s);
    typeof i.retry > "u" && (i.retry = !1);
    const a = this.queryCache.build(this, i);
    return a.isStaleByTime(i.staleTime) ? a.fetch(i) : Promise.resolve(a.state.data);
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  prefetchQuery(t, n, r) {
    return this.fetchQuery(t, n, r).then(Ot).catch(Ot);
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  fetchInfiniteQuery(t, n, r) {
    const s = fr(t, n, r);
    return s.behavior = hg(), this.fetchQuery(s);
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  prefetchInfiniteQuery(t, n, r) {
    return this.fetchInfiniteQuery(t, n, r).then(Ot).catch(Ot);
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
  setQueryDefaults(t, n) {
    const r = this.queryDefaults.find((s) => ln(t) === ln(s.queryKey));
    r ? r.defaultOptions = n : this.queryDefaults.push({
      queryKey: t,
      defaultOptions: n
    });
  }
  getQueryDefaults(t) {
    if (!t)
      return;
    const n = this.queryDefaults.find((r) => Nn(t, r.queryKey));
    return process.env.NODE_ENV !== "production" && this.queryDefaults.filter((s) => Nn(t, s.queryKey)).length > 1 && this.logger.error("[QueryClient] Several query defaults match with key '" + JSON.stringify(t) + "'. The first matching query defaults are used. Please check how query defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetquerydefaults."), n == null ? void 0 : n.defaultOptions;
  }
  setMutationDefaults(t, n) {
    const r = this.mutationDefaults.find((s) => ln(t) === ln(s.mutationKey));
    r ? r.defaultOptions = n : this.mutationDefaults.push({
      mutationKey: t,
      defaultOptions: n
    });
  }
  getMutationDefaults(t) {
    if (!t)
      return;
    const n = this.mutationDefaults.find((r) => Nn(t, r.mutationKey));
    return process.env.NODE_ENV !== "production" && this.mutationDefaults.filter((s) => Nn(t, s.mutationKey)).length > 1 && this.logger.error("[QueryClient] Several mutation defaults match with key '" + JSON.stringify(t) + "'. The first matching mutation defaults are used. Please check how mutation defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetmutationdefaults."), n == null ? void 0 : n.defaultOptions;
  }
  defaultQueryOptions(t) {
    if (t != null && t._defaulted)
      return t;
    const n = {
      ...this.defaultOptions.queries,
      ...this.getQueryDefaults(t == null ? void 0 : t.queryKey),
      ...t,
      _defaulted: !0
    };
    return !n.queryHash && n.queryKey && (n.queryHash = Di(n.queryKey, n)), typeof n.refetchOnReconnect > "u" && (n.refetchOnReconnect = n.networkMode !== "always"), typeof n.useErrorBoundary > "u" && (n.useErrorBoundary = !!n.suspense), n;
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
class bg extends Ar {
  constructor(t, n) {
    super(), this.client = t, this.options = n, this.trackedProps = /* @__PURE__ */ new Set(), this.selectError = null, this.bindMethods(), this.setOptions(n);
  }
  bindMethods() {
    this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (this.currentQuery.addObserver(this), Rl(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Js(this.currentQuery, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return Js(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this);
  }
  setOptions(t, n) {
    const r = this.options, s = this.currentQuery;
    if (this.options = this.client.defaultQueryOptions(t), process.env.NODE_ENV !== "production" && typeof (t == null ? void 0 : t.isDataEqual) < "u" && this.client.getLogger().error("The isDataEqual option has been deprecated and will be removed in the next major version. You can achieve the same functionality by passing a function as the structuralSharing option"), Gs(r, this.options) || this.client.getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: this.currentQuery,
      observer: this
    }), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = r.queryKey), this.updateQuery();
    const i = this.hasListeners();
    i && Ol(this.currentQuery, s, this.options, r) && this.executeFetch(), this.updateResult(n), i && (this.currentQuery !== s || this.options.enabled !== r.enabled || this.options.staleTime !== r.staleTime) && this.updateStaleTimeout();
    const a = this.computeRefetchInterval();
    i && (this.currentQuery !== s || this.options.enabled !== r.enabled || a !== this.currentRefetchInterval) && this.updateRefetchInterval(a);
  }
  getOptimisticResult(t) {
    const n = this.client.getQueryCache().build(this.client, t), r = this.createResult(n, t);
    return vg(this, r, t) && (this.currentResult = r, this.currentResultOptions = this.options, this.currentResultState = this.currentQuery.state), r;
  }
  getCurrentResult() {
    return this.currentResult;
  }
  trackResult(t) {
    const n = {};
    return Object.keys(t).forEach((r) => {
      Object.defineProperty(n, r, {
        configurable: !1,
        enumerable: !0,
        get: () => (this.trackedProps.add(r), t[r])
      });
    }), n;
  }
  getCurrentQuery() {
    return this.currentQuery;
  }
  remove() {
    this.client.getQueryCache().remove(this.currentQuery);
  }
  refetch({
    refetchPage: t,
    ...n
  } = {}) {
    return this.fetch({
      ...n,
      meta: {
        refetchPage: t
      }
    });
  }
  fetchOptimistic(t) {
    const n = this.client.defaultQueryOptions(t), r = this.client.getQueryCache().build(this.client, n);
    return r.isFetchingOptimistic = !0, r.fetch().then(() => this.createResult(r, n));
  }
  fetch(t) {
    var n;
    return this.executeFetch({
      ...t,
      cancelRefetch: (n = t.cancelRefetch) != null ? n : !0
    }).then(() => (this.updateResult(), this.currentResult));
  }
  executeFetch(t) {
    this.updateQuery();
    let n = this.currentQuery.fetch(this.options, t);
    return t != null && t.throwOnError || (n = n.catch(Ot)), n;
  }
  updateStaleTimeout() {
    if (this.clearStaleTimeout(), Or || this.currentResult.isStale || !Ys(this.options.staleTime))
      return;
    const n = Wu(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
    this.staleTimeoutId = setTimeout(() => {
      this.currentResult.isStale || this.updateResult();
    }, n);
  }
  computeRefetchInterval() {
    var t;
    return typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : (t = this.options.refetchInterval) != null ? t : !1;
  }
  updateRefetchInterval(t) {
    this.clearRefetchInterval(), this.currentRefetchInterval = t, !(Or || this.options.enabled === !1 || !Ys(this.currentRefetchInterval) || this.currentRefetchInterval === 0) && (this.refetchIntervalId = setInterval(() => {
      (this.options.refetchIntervalInBackground || go.isFocused()) && this.executeFetch();
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
  createResult(t, n) {
    const r = this.currentQuery, s = this.options, i = this.currentResult, a = this.currentResultState, l = this.currentResultOptions, c = t !== r, d = c ? t.state : this.currentQueryInitialState, f = c ? this.currentResult : this.previousQueryResult, {
      state: p
    } = t;
    let {
      dataUpdatedAt: m,
      error: g,
      errorUpdatedAt: h,
      fetchStatus: u,
      status: b
    } = p, R = !1, P = !1, T;
    if (n._optimisticResults) {
      const N = this.hasListeners(), M = !N && Rl(t, n), B = N && Ol(t, r, n, s);
      (M || B) && (u = Wo(t.options.networkMode) ? "fetching" : "paused", m || (b = "loading")), n._optimisticResults === "isRestoring" && (u = "idle");
    }
    if (n.keepPreviousData && !p.dataUpdatedAt && f != null && f.isSuccess && b !== "error")
      T = f.data, m = f.dataUpdatedAt, b = f.status, R = !0;
    else if (n.select && typeof p.data < "u")
      if (i && p.data === (a == null ? void 0 : a.data) && n.select === this.selectFn)
        T = this.selectResult;
      else
        try {
          this.selectFn = n.select, T = n.select(p.data), T = Xs(i == null ? void 0 : i.data, T, n), this.selectResult = T, this.selectError = null;
        } catch (N) {
          process.env.NODE_ENV !== "production" && this.client.getLogger().error(N), this.selectError = N;
        }
    else
      T = p.data;
    if (typeof n.placeholderData < "u" && typeof T > "u" && b === "loading") {
      let N;
      if (i != null && i.isPlaceholderData && n.placeholderData === (l == null ? void 0 : l.placeholderData))
        N = i.data;
      else if (N = typeof n.placeholderData == "function" ? n.placeholderData() : n.placeholderData, n.select && typeof N < "u")
        try {
          N = n.select(N), this.selectError = null;
        } catch (M) {
          process.env.NODE_ENV !== "production" && this.client.getLogger().error(M), this.selectError = M;
        }
      typeof N < "u" && (b = "success", T = Xs(i == null ? void 0 : i.data, N, n), P = !0);
    }
    this.selectError && (g = this.selectError, T = this.selectResult, h = Date.now(), b = "error");
    const C = u === "fetching", E = b === "loading", w = b === "error";
    return {
      status: b,
      fetchStatus: u,
      isLoading: E,
      isSuccess: b === "success",
      isError: w,
      isInitialLoading: E && C,
      data: T,
      dataUpdatedAt: m,
      error: g,
      errorUpdatedAt: h,
      failureCount: p.fetchFailureCount,
      failureReason: p.fetchFailureReason,
      errorUpdateCount: p.errorUpdateCount,
      isFetched: p.dataUpdateCount > 0 || p.errorUpdateCount > 0,
      isFetchedAfterMount: p.dataUpdateCount > d.dataUpdateCount || p.errorUpdateCount > d.errorUpdateCount,
      isFetching: C,
      isRefetching: C && !E,
      isLoadingError: w && p.dataUpdatedAt === 0,
      isPaused: u === "paused",
      isPlaceholderData: P,
      isPreviousData: R,
      isRefetchError: w && p.dataUpdatedAt !== 0,
      isStale: Li(t, n),
      refetch: this.refetch,
      remove: this.remove
    };
  }
  updateResult(t) {
    const n = this.currentResult, r = this.createResult(this.currentQuery, this.options);
    if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, Gs(r, n))
      return;
    this.currentResult = r;
    const s = {
      cache: !0
    }, i = () => {
      if (!n)
        return !0;
      const {
        notifyOnChangeProps: a
      } = this.options, l = typeof a == "function" ? a() : a;
      if (l === "all" || !l && !this.trackedProps.size)
        return !0;
      const c = new Set(l ?? this.trackedProps);
      return this.options.useErrorBoundary && c.add("error"), Object.keys(this.currentResult).some((d) => {
        const f = d;
        return this.currentResult[f] !== n[f] && c.has(f);
      });
    };
    (t == null ? void 0 : t.listeners) !== !1 && i() && (s.listeners = !0), this.notify({
      ...s,
      ...t
    });
  }
  updateQuery() {
    const t = this.client.getQueryCache().build(this.client, this.options);
    if (t === this.currentQuery)
      return;
    const n = this.currentQuery;
    this.currentQuery = t, this.currentQueryInitialState = t.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (n == null || n.removeObserver(this), t.addObserver(this));
  }
  onQueryUpdate(t) {
    const n = {};
    t.type === "success" ? n.onSuccess = !t.manual : t.type === "error" && !no(t.error) && (n.onError = !0), this.updateResult(n), this.hasListeners() && this.updateTimers();
  }
  notify(t) {
    Ye.batch(() => {
      if (t.onSuccess) {
        var n, r, s, i;
        (n = (r = this.options).onSuccess) == null || n.call(r, this.currentResult.data), (s = (i = this.options).onSettled) == null || s.call(i, this.currentResult.data, null);
      } else if (t.onError) {
        var a, l, c, d;
        (a = (l = this.options).onError) == null || a.call(l, this.currentResult.error), (c = (d = this.options).onSettled) == null || c.call(d, void 0, this.currentResult.error);
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
function gg(e, t) {
  return t.enabled !== !1 && !e.state.dataUpdatedAt && !(e.state.status === "error" && t.retryOnMount === !1);
}
function Rl(e, t) {
  return gg(e, t) || e.state.dataUpdatedAt > 0 && Js(e, t, t.refetchOnMount);
}
function Js(e, t, n) {
  if (t.enabled !== !1) {
    const r = typeof n == "function" ? n(e) : n;
    return r === "always" || r !== !1 && Li(e, t);
  }
  return !1;
}
function Ol(e, t, n, r) {
  return n.enabled !== !1 && (e !== t || r.enabled === !1) && (!n.suspense || e.state.status !== "error") && Li(e, n);
}
function Li(e, t) {
  return e.isStaleByTime(t.staleTime);
}
function vg(e, t, n) {
  return n.keepPreviousData ? !1 : n.placeholderData !== void 0 ? t.isPlaceholderData : !Gs(e.getCurrentResult(), t);
}
var Zs = { exports: {} }, Ss = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sl;
function xg() {
  if (Sl)
    return Ss;
  Sl = 1;
  var e = ut;
  function t(p, m) {
    return p === m && (p !== 0 || 1 / p === 1 / m) || p !== p && m !== m;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, s = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function l(p, m) {
    var g = m(), h = r({ inst: { value: g, getSnapshot: m } }), u = h[0].inst, b = h[1];
    return i(
      function() {
        u.value = g, u.getSnapshot = m, c(u) && b({ inst: u });
      },
      [p, g, m]
    ), s(
      function() {
        return c(u) && b({ inst: u }), p(function() {
          c(u) && b({ inst: u });
        });
      },
      [p]
    ), a(g), g;
  }
  function c(p) {
    var m = p.getSnapshot;
    p = p.value;
    try {
      var g = m();
      return !n(p, g);
    } catch {
      return !0;
    }
  }
  function d(p, m) {
    return m();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? d : l;
  return Ss.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, Ss;
}
var ws = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wl;
function Eg() {
  return wl || (wl = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
      f || s.startTransition === void 0 || (f = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var u = h();
      if (!p) {
        var b = h();
        i(u, b) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), p = !0);
      }
      b = a({
        inst: { value: u, getSnapshot: h }
      });
      var R = b[0].inst, P = b[1];
      return c(
        function() {
          R.value = u, R.getSnapshot = h, n(R) && P({ inst: R });
        },
        [g, u, h]
      ), l(
        function() {
          return n(R) && P({ inst: R }), g(function() {
            n(R) && P({ inst: R });
          });
        },
        [g]
      ), d(u), u;
    }
    function n(g) {
      var h = g.getSnapshot;
      g = g.value;
      try {
        var u = h();
        return !i(g, u);
      } catch {
        return !0;
      }
    }
    function r(g, h) {
      return h();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var s = ut, i = typeof Object.is == "function" ? Object.is : e, a = s.useState, l = s.useEffect, c = s.useLayoutEffect, d = s.useDebugValue, f = !1, p = !1, m = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? r : t;
    ws.useSyncExternalStore = s.useSyncExternalStore !== void 0 ? s.useSyncExternalStore : m, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), ws;
}
process.env.NODE_ENV === "production" ? Zs.exports = xg() : Zs.exports = Eg();
var Cg = Zs.exports;
const Tg = Cg.useSyncExternalStore, Pl = /* @__PURE__ */ v.createContext(void 0), Ju = /* @__PURE__ */ v.createContext(!1);
function Zu(e, t) {
  return e || (t && typeof window < "u" ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = Pl), window.ReactQueryClientContext) : Pl);
}
const Rg = ({
  context: e
} = {}) => {
  const t = v.useContext(Zu(e, v.useContext(Ju)));
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, ed = ({
  client: e,
  children: t,
  context: n,
  contextSharing: r = !1
}) => {
  v.useEffect(() => (e.mount(), () => {
    e.unmount();
  }), [e]), process.env.NODE_ENV !== "production" && r && e.getLogger().error("The contextSharing option has been deprecated and will be removed in the next major version");
  const s = Zu(n, r);
  return /* @__PURE__ */ v.createElement(Ju.Provider, {
    value: !n && r
  }, /* @__PURE__ */ v.createElement(s.Provider, {
    value: e
  }, t));
}, td = /* @__PURE__ */ v.createContext(!1), Og = () => v.useContext(td);
td.Provider;
function Sg() {
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
const wg = /* @__PURE__ */ v.createContext(Sg()), Pg = () => v.useContext(wg);
function $g(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
const _g = (e, t) => {
  (e.suspense || e.useErrorBoundary) && (t.isReset() || (e.retryOnMount = !1));
}, Ng = (e) => {
  v.useEffect(() => {
    e.clearReset();
  }, [e]);
}, Ig = ({
  result: e,
  errorResetBoundary: t,
  useErrorBoundary: n,
  query: r
}) => e.isError && !t.isReset() && !e.isFetching && $g(n, [e.error, r]), kg = (e) => {
  e.suspense && (typeof e.staleTime != "number" && (e.staleTime = 1e3), typeof e.cacheTime == "number" && (e.cacheTime = Math.max(e.cacheTime, 1e3)));
}, jg = (e, t) => e.isLoading && e.isFetching && !t, Ag = (e, t, n) => (e == null ? void 0 : e.suspense) && jg(t, n), Mg = (e, t, n) => t.fetchOptimistic(e).then(({
  data: r
}) => {
  e.onSuccess == null || e.onSuccess(r), e.onSettled == null || e.onSettled(r, null);
}).catch((r) => {
  n.clearReset(), e.onError == null || e.onError(r), e.onSettled == null || e.onSettled(void 0, r);
});
function Dg(e, t) {
  const n = Rg({
    context: e.context
  }), r = Og(), s = Pg(), i = n.defaultQueryOptions(e);
  i._optimisticResults = r ? "isRestoring" : "optimistic", i.onError && (i.onError = Ye.batchCalls(i.onError)), i.onSuccess && (i.onSuccess = Ye.batchCalls(i.onSuccess)), i.onSettled && (i.onSettled = Ye.batchCalls(i.onSettled)), kg(i), _g(i, s), Ng(s);
  const [a] = v.useState(() => new t(n, i)), l = a.getOptimisticResult(i);
  if (Tg(v.useCallback((c) => {
    const d = r ? () => {
    } : a.subscribe(Ye.batchCalls(c));
    return a.updateResult(), d;
  }, [a, r]), () => a.getCurrentResult(), () => a.getCurrentResult()), v.useEffect(() => {
    a.setOptions(i, {
      listeners: !1
    });
  }, [i, a]), Ag(i, l, r))
    throw Mg(i, a, s);
  if (Ig({
    result: l,
    errorResetBoundary: s,
    useErrorBoundary: i.useErrorBoundary,
    query: a.getCurrentQuery()
  }))
    throw l.error;
  return i.notifyOnChangeProps ? l : a.trackResult(l);
}
function ei(e, t, n) {
  const r = fr(e, t, n);
  return Dg(r, bg);
}
const Bi = Vo({
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
Vo({
  ...Bi,
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
function Fg(e) {
  return pe("MuiSvgIcon", e);
}
he("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Lg = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], Bg = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, s = {
    root: ["root", t !== "inherit" && `color${V(t)}`, `fontSize${V(n)}`]
  };
  return be(s, Fg, r);
}, zg = Y("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${V(n.color)}`], t[`fontSize${V(n.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r, s, i, a, l, c, d, f, p, m, g, h;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // for example heroicons uses fill="none" and stroke="currentColor"
    fill: t.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (n = e.transitions) == null || (r = n.create) == null ? void 0 : r.call(n, "fill", {
      duration: (s = e.transitions) == null || (s = s.duration) == null ? void 0 : s.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((i = e.typography) == null || (a = i.pxToRem) == null ? void 0 : a.call(i, 20)) || "1.25rem",
      medium: ((l = e.typography) == null || (c = l.pxToRem) == null ? void 0 : c.call(l, 24)) || "1.5rem",
      large: ((d = e.typography) == null || (f = d.pxToRem) == null ? void 0 : f.call(d, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (p = (m = (e.vars || e).palette) == null || (m = m[t.color]) == null ? void 0 : m.main) != null ? p : {
      action: (g = (e.vars || e).palette) == null || (g = g.action) == null ? void 0 : g.active,
      disabled: (h = (e.vars || e).palette) == null || (h = h.action) == null ? void 0 : h.disabled,
      inherit: void 0
    }[t.color]
  };
}), zi = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: s,
    className: i,
    color: a = "inherit",
    component: l = "svg",
    fontSize: c = "medium",
    htmlColor: d,
    inheritViewBox: f = !1,
    titleAccess: p,
    viewBox: m = "0 0 24 24"
  } = r, g = Z(r, Lg), h = /* @__PURE__ */ v.isValidElement(s) && s.type === "svg", u = x({}, r, {
    color: a,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: f,
    viewBox: m,
    hasSvgAsChild: h
  }), b = {};
  f || (b.viewBox = m);
  const R = Bg(u);
  return /* @__PURE__ */ y.jsxs(zg, x({
    as: l,
    className: te(R.root, i),
    focusable: "false",
    color: d,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: n
  }, b, g, h && s.props, {
    ownerState: u,
    children: [h ? s.props.children : s, p ? /* @__PURE__ */ y.jsx("title", {
      children: p
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (zi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: o.oneOfType([o.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: o.oneOfType([o.oneOf(["inherit", "large", "medium", "small"]), o.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: o.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: o.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: o.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: o.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: o.string
});
zi.muiName = "SvgIcon";
const $l = zi;
function Ze(e, t) {
  function n(r, s) {
    return /* @__PURE__ */ y.jsx($l, x({
      "data-testid": `${t}Icon`,
      ref: s
    }, r, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = $l.muiName, /* @__PURE__ */ v.memo(/* @__PURE__ */ v.forwardRef(n));
}
var ti = { exports: {} }, je = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _l;
function Ug() {
  if (_l)
    return je;
  _l = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.view_transition"), g = Symbol.for("react.client.reference");
  function h(u) {
    if (typeof u == "object" && u !== null) {
      var b = u.$$typeof;
      switch (b) {
        case e:
          switch (u = u.type, u) {
            case n:
            case s:
            case r:
            case c:
            case d:
            case m:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case a:
                case l:
                case p:
                case f:
                  return u;
                case i:
                  return u;
                default:
                  return b;
              }
          }
        case t:
          return b;
      }
    }
  }
  return je.ContextConsumer = i, je.ContextProvider = a, je.Element = e, je.ForwardRef = l, je.Fragment = n, je.Lazy = p, je.Memo = f, je.Portal = t, je.Profiler = s, je.StrictMode = r, je.Suspense = c, je.SuspenseList = d, je.isContextConsumer = function(u) {
    return h(u) === i;
  }, je.isContextProvider = function(u) {
    return h(u) === a;
  }, je.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === e;
  }, je.isForwardRef = function(u) {
    return h(u) === l;
  }, je.isFragment = function(u) {
    return h(u) === n;
  }, je.isLazy = function(u) {
    return h(u) === p;
  }, je.isMemo = function(u) {
    return h(u) === f;
  }, je.isPortal = function(u) {
    return h(u) === t;
  }, je.isProfiler = function(u) {
    return h(u) === s;
  }, je.isStrictMode = function(u) {
    return h(u) === r;
  }, je.isSuspense = function(u) {
    return h(u) === c;
  }, je.isSuspenseList = function(u) {
    return h(u) === d;
  }, je.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === n || u === s || u === r || u === c || u === d || typeof u == "object" && u !== null && (u.$$typeof === p || u.$$typeof === f || u.$$typeof === a || u.$$typeof === i || u.$$typeof === l || u.$$typeof === g || u.getModuleId !== void 0);
  }, je.typeOf = h, je;
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
var Nl;
function Vg() {
  return Nl || (Nl = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u) {
      if (typeof u == "object" && u !== null) {
        var b = u.$$typeof;
        switch (b) {
          case t:
            switch (u = u.type, u) {
              case r:
              case i:
              case s:
              case d:
              case f:
              case g:
                return u;
              default:
                switch (u = u && u.$$typeof, u) {
                  case l:
                  case c:
                  case m:
                  case p:
                    return u;
                  case a:
                    return u;
                  default:
                    return b;
                }
            }
          case n:
            return b;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.view_transition"), h = Symbol.for("react.client.reference");
    Ae.ContextConsumer = a, Ae.ContextProvider = l, Ae.Element = t, Ae.ForwardRef = c, Ae.Fragment = r, Ae.Lazy = m, Ae.Memo = p, Ae.Portal = n, Ae.Profiler = i, Ae.StrictMode = s, Ae.Suspense = d, Ae.SuspenseList = f, Ae.isContextConsumer = function(u) {
      return e(u) === a;
    }, Ae.isContextProvider = function(u) {
      return e(u) === l;
    }, Ae.isElement = function(u) {
      return typeof u == "object" && u !== null && u.$$typeof === t;
    }, Ae.isForwardRef = function(u) {
      return e(u) === c;
    }, Ae.isFragment = function(u) {
      return e(u) === r;
    }, Ae.isLazy = function(u) {
      return e(u) === m;
    }, Ae.isMemo = function(u) {
      return e(u) === p;
    }, Ae.isPortal = function(u) {
      return e(u) === n;
    }, Ae.isProfiler = function(u) {
      return e(u) === i;
    }, Ae.isStrictMode = function(u) {
      return e(u) === s;
    }, Ae.isSuspense = function(u) {
      return e(u) === d;
    }, Ae.isSuspenseList = function(u) {
      return e(u) === f;
    }, Ae.isValidElementType = function(u) {
      return typeof u == "string" || typeof u == "function" || u === r || u === i || u === s || u === d || u === f || typeof u == "object" && u !== null && (u.$$typeof === m || u.$$typeof === p || u.$$typeof === l || u.$$typeof === a || u.$$typeof === c || u.$$typeof === h || u.getModuleId !== void 0);
    }, Ae.typeOf = e;
  }()), Ae;
}
process.env.NODE_ENV === "production" ? ti.exports = Ug() : ti.exports = Vg();
var Ho = ti.exports;
function ni(e, t) {
  return ni = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, ni(e, t);
}
function nd(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ni(e, t);
}
const Il = {
  disabled: !1
};
var qg = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.shape({
  enter: o.number,
  exit: o.number,
  appear: o.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && o.oneOfType([o.string, o.shape({
  enter: o.string,
  exit: o.string,
  active: o.string
}), o.shape({
  enter: o.string,
  enterDone: o.string,
  enterActive: o.string,
  exit: o.string,
  exitDone: o.string,
  exitActive: o.string
})]);
const xo = ut.createContext(null);
var Wg = function(t) {
  return t.scrollTop;
}, pr = "unmounted", on = "exited", sn = "entering", Pn = "entered", ri = "exiting", Ht = /* @__PURE__ */ function(e) {
  nd(t, e);
  function t(r, s) {
    var i;
    i = e.call(this, r, s) || this;
    var a = s, l = a && !a.isMounting ? r.enter : r.appear, c;
    return i.appearStatus = null, r.in ? l ? (c = on, i.appearStatus = sn) : c = Pn : r.unmountOnExit || r.mountOnEnter ? c = pr : c = on, i.state = {
      status: c
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(s, i) {
    var a = s.in;
    return a && i.status === pr ? {
      status: on
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(s) {
    var i = null;
    if (s !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== sn && a !== Pn && (i = sn) : (a === sn || a === Pn) && (i = ri);
    }
    this.updateStatus(!1, i);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var s = this.props.timeout, i, a, l;
    return i = a = l = s, s != null && typeof s != "number" && (i = s.exit, a = s.enter, l = s.appear !== void 0 ? s.appear : a), {
      exit: i,
      enter: a,
      appear: l
    };
  }, n.updateStatus = function(s, i) {
    if (s === void 0 && (s = !1), i !== null)
      if (this.cancelNextCallback(), i === sn) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : dr.findDOMNode(this);
          a && Wg(a);
        }
        this.performEnter(s);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === on && this.setState({
        status: pr
      });
  }, n.performEnter = function(s) {
    var i = this, a = this.props.enter, l = this.context ? this.context.isMounting : s, c = this.props.nodeRef ? [l] : [dr.findDOMNode(this), l], d = c[0], f = c[1], p = this.getTimeouts(), m = l ? p.appear : p.enter;
    if (!s && !a || Il.disabled) {
      this.safeSetState({
        status: Pn
      }, function() {
        i.props.onEntered(d);
      });
      return;
    }
    this.props.onEnter(d, f), this.safeSetState({
      status: sn
    }, function() {
      i.props.onEntering(d, f), i.onTransitionEnd(m, function() {
        i.safeSetState({
          status: Pn
        }, function() {
          i.props.onEntered(d, f);
        });
      });
    });
  }, n.performExit = function() {
    var s = this, i = this.props.exit, a = this.getTimeouts(), l = this.props.nodeRef ? void 0 : dr.findDOMNode(this);
    if (!i || Il.disabled) {
      this.safeSetState({
        status: on
      }, function() {
        s.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: ri
    }, function() {
      s.props.onExiting(l), s.onTransitionEnd(a.exit, function() {
        s.safeSetState({
          status: on
        }, function() {
          s.props.onExited(l);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(s, i) {
    i = this.setNextCallback(i), this.setState(s, i);
  }, n.setNextCallback = function(s) {
    var i = this, a = !0;
    return this.nextCallback = function(l) {
      a && (a = !1, i.nextCallback = null, s(l));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(s, i) {
    this.setNextCallback(i);
    var a = this.props.nodeRef ? this.props.nodeRef.current : dr.findDOMNode(this), l = s == null && !this.props.addEndListener;
    if (!a || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], d = c[0], f = c[1];
      this.props.addEndListener(d, f);
    }
    s != null && setTimeout(this.nextCallback, s);
  }, n.render = function() {
    var s = this.state.status;
    if (s === pr)
      return null;
    var i = this.props, a = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var l = Z(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ ut.createElement(xo.Provider, {
        value: null
      }, typeof a == "function" ? a(s, l) : ut.cloneElement(ut.Children.only(a), l))
    );
  }, t;
}(ut.Component);
Ht.contextType = xo;
Ht.propTypes = process.env.NODE_ENV !== "production" ? {
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
  nodeRef: o.shape({
    current: typeof Element > "u" ? o.any : function(e, t, n, r, s, i) {
      var a = e[t];
      return o.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(e, t, n, r, s, i);
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
  children: o.oneOfType([o.func.isRequired, o.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: o.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: o.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: o.bool,
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
  appear: o.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: o.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: o.bool,
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
    var n = qg;
    t.addEndListener || (n = n.isRequired);
    for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      s[i - 1] = arguments[i];
    return n.apply(void 0, [t].concat(s));
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
  addEndListener: o.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: o.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: o.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: o.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: o.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: o.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: o.func
} : {};
function Sn() {
}
Ht.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Sn,
  onEntering: Sn,
  onEntered: Sn,
  onExit: Sn,
  onExiting: Sn,
  onExited: Sn
};
Ht.UNMOUNTED = pr;
Ht.EXITED = on;
Ht.ENTERING = sn;
Ht.ENTERED = Pn;
Ht.EXITING = ri;
const Ui = Ht;
function Hg(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Vi(e, t) {
  var n = function(i) {
    return t && Gr(i) ? t(i) : i;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && tp.map(e, function(s) {
    return s;
  }).forEach(function(s) {
    r[s.key] = n(s);
  }), r;
}
function Kg(e, t) {
  e = e || {}, t = t || {};
  function n(f) {
    return f in t ? t[f] : e[f];
  }
  var r = /* @__PURE__ */ Object.create(null), s = [];
  for (var i in e)
    i in t ? s.length && (r[i] = s, s = []) : s.push(i);
  var a, l = {};
  for (var c in t) {
    if (r[c])
      for (a = 0; a < r[c].length; a++) {
        var d = r[c][a];
        l[r[c][a]] = n(d);
      }
    l[c] = n(c);
  }
  for (a = 0; a < s.length; a++)
    l[s[a]] = n(s[a]);
  return l;
}
function cn(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function Yg(e, t) {
  return Vi(e.children, function(n) {
    return Qr(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: cn(n, "appear", e),
      enter: cn(n, "enter", e),
      exit: cn(n, "exit", e)
    });
  });
}
function Gg(e, t, n) {
  var r = Vi(e.children), s = Kg(t, r);
  return Object.keys(s).forEach(function(i) {
    var a = s[i];
    if (Gr(a)) {
      var l = i in t, c = i in r, d = t[i], f = Gr(d) && !d.props.in;
      c && (!l || f) ? s[i] = Qr(a, {
        onExited: n.bind(null, a),
        in: !0,
        exit: cn(a, "exit", e),
        enter: cn(a, "enter", e)
      }) : !c && l && !f ? s[i] = Qr(a, {
        in: !1
      }) : c && l && Gr(d) && (s[i] = Qr(a, {
        onExited: n.bind(null, a),
        in: d.props.in,
        exit: cn(a, "exit", e),
        enter: cn(a, "enter", e)
      }));
    }
  }), s;
}
var Qg = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Xg = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, qi = /* @__PURE__ */ function(e) {
  nd(t, e);
  function t(r, s) {
    var i;
    i = e.call(this, r, s) || this;
    var a = i.handleExited.bind(Hg(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, i;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, n.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(s, i) {
    var a = i.children, l = i.handleExited, c = i.firstRender;
    return {
      children: c ? Yg(s, l) : Gg(s, a, l),
      firstRender: !1
    };
  }, n.handleExited = function(s, i) {
    var a = Vi(this.props.children);
    s.key in a || (s.props.onExited && s.props.onExited(i), this.mounted && this.setState(function(l) {
      var c = x({}, l.children);
      return delete c[s.key], {
        children: c
      };
    }));
  }, n.render = function() {
    var s = this.props, i = s.component, a = s.childFactory, l = Z(s, ["component", "childFactory"]), c = this.state.contextValue, d = Qg(this.state.children).map(a);
    return delete l.appear, delete l.enter, delete l.exit, i === null ? /* @__PURE__ */ ut.createElement(xo.Provider, {
      value: c
    }, d) : /* @__PURE__ */ ut.createElement(xo.Provider, {
      value: c
    }, /* @__PURE__ */ ut.createElement(i, l, d));
  }, t;
}(ut.Component);
qi.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: o.any,
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
  children: o.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: o.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: o.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: o.bool,
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
  childFactory: o.func
} : {};
qi.defaultProps = Xg;
const Jg = qi, Wi = (e) => e.scrollTop;
function Vn(e, t) {
  var n, r;
  const {
    timeout: s,
    easing: i,
    style: a = {}
  } = e;
  return {
    duration: (n = a.transitionDuration) != null ? n : typeof s == "number" ? s : s[t.mode] || 0,
    easing: (r = a.transitionTimingFunction) != null ? r : typeof i == "object" ? i[t.mode] : i,
    delay: a.transitionDelay
  };
}
function Zg(e) {
  return pe("MuiPaper", e);
}
he("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const ev = ["className", "component", "elevation", "square", "variant"], tv = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: s
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return be(i, Zg, s);
}, nv = Y("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n;
  return x({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: e.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, t.variant === "elevation" && x({
    boxShadow: (e.vars || e).shadows[t.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${De("#fff", yl(t.elevation))}, ${De("#fff", yl(t.elevation))})`
  }, e.vars && {
    backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation]
  }));
}), rd = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiPaper"
  }), {
    className: s,
    component: i = "div",
    elevation: a = 1,
    square: l = !1,
    variant: c = "elevation"
  } = r, d = Z(r, ev), f = x({}, r, {
    component: i,
    elevation: a,
    square: l,
    variant: c
  }), p = tv(f);
  return process.env.NODE_ENV !== "production" && bn().shadows[a] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${a}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${a}]\` is defined.`].join(`
`)), /* @__PURE__ */ y.jsx(nv, x({
    as: i,
    ownerState: f,
    className: te(p.root, s),
    ref: n
  }, d));
});
process.env.NODE_ENV !== "production" && (rd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: Lt(Mn, (e) => {
    const {
      elevation: t,
      variant: n
    } = e;
    return t > 0 && n === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${n}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: o.oneOfType([o.oneOf(["elevation", "outlined"]), o.string])
});
const Ko = rd;
function od(e) {
  const {
    className: t,
    classes: n,
    pulsate: r = !1,
    rippleX: s,
    rippleY: i,
    rippleSize: a,
    in: l,
    onExited: c,
    timeout: d
  } = e, [f, p] = v.useState(!1), m = te(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), g = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + s
  }, h = te(n.child, f && n.childLeaving, r && n.childPulsate);
  return !l && !f && p(!0), v.useEffect(() => {
    if (!l && c != null) {
      const u = setTimeout(c, d);
      return () => {
        clearTimeout(u);
      };
    }
  }, [c, l, d]), /* @__PURE__ */ y.jsx("span", {
    className: m,
    style: g,
    children: /* @__PURE__ */ y.jsx("span", {
      className: h
    })
  });
}
process.env.NODE_ENV !== "production" && (od.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object.isRequired,
  className: o.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: o.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: o.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: o.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: o.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: o.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: o.number,
  /**
   * exit delay
   */
  timeout: o.number.isRequired
});
const rv = he("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), St = rv, ov = ["center", "classes", "className"];
let Yo = (e) => e, kl, jl, Al, Ml;
const oi = 550, sv = 80, iv = qt(kl || (kl = Yo`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), av = qt(jl || (jl = Yo`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), lv = qt(Al || (Al = Yo`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), cv = Y("span", {
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
}), uv = Y(od, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(Ml || (Ml = Yo`
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
`), St.rippleVisible, iv, oi, ({
  theme: e
}) => e.transitions.easing.easeInOut, St.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, St.child, St.childLeaving, av, oi, ({
  theme: e
}) => e.transitions.easing.easeInOut, St.childPulsate, lv, ({
  theme: e
}) => e.transitions.easing.easeInOut), sd = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: s = !1,
    classes: i = {},
    className: a
  } = r, l = Z(r, ov), [c, d] = v.useState([]), f = v.useRef(0), p = v.useRef(null);
  v.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [c]);
  const m = v.useRef(!1), g = xu(), h = v.useRef(null), u = v.useRef(null), b = v.useCallback((C) => {
    const {
      pulsate: E,
      rippleX: w,
      rippleY: S,
      rippleSize: N,
      cb: M
    } = C;
    d((B) => [...B, /* @__PURE__ */ y.jsx(uv, {
      classes: {
        ripple: te(i.ripple, St.ripple),
        rippleVisible: te(i.rippleVisible, St.rippleVisible),
        ripplePulsate: te(i.ripplePulsate, St.ripplePulsate),
        child: te(i.child, St.child),
        childLeaving: te(i.childLeaving, St.childLeaving),
        childPulsate: te(i.childPulsate, St.childPulsate)
      },
      timeout: oi,
      pulsate: E,
      rippleX: w,
      rippleY: S,
      rippleSize: N
    }, f.current)]), f.current += 1, p.current = M;
  }, [i]), R = v.useCallback((C = {}, E = {}, w = () => {
  }) => {
    const {
      pulsate: S = !1,
      center: N = s || E.pulsate,
      fakeElement: M = !1
      // For test purposes
    } = E;
    if ((C == null ? void 0 : C.type) === "mousedown" && m.current) {
      m.current = !1;
      return;
    }
    (C == null ? void 0 : C.type) === "touchstart" && (m.current = !0);
    const B = M ? null : u.current, W = B ? B.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let z, j, A;
    if (N || C === void 0 || C.clientX === 0 && C.clientY === 0 || !C.clientX && !C.touches)
      z = Math.round(W.width / 2), j = Math.round(W.height / 2);
    else {
      const {
        clientX: U,
        clientY: F
      } = C.touches && C.touches.length > 0 ? C.touches[0] : C;
      z = Math.round(U - W.left), j = Math.round(F - W.top);
    }
    if (N)
      A = Math.sqrt((2 * W.width ** 2 + W.height ** 2) / 3), A % 2 === 0 && (A += 1);
    else {
      const U = Math.max(Math.abs((B ? B.clientWidth : 0) - z), z) * 2 + 2, F = Math.max(Math.abs((B ? B.clientHeight : 0) - j), j) * 2 + 2;
      A = Math.sqrt(U ** 2 + F ** 2);
    }
    C != null && C.touches ? h.current === null && (h.current = () => {
      b({
        pulsate: S,
        rippleX: z,
        rippleY: j,
        rippleSize: A,
        cb: w
      });
    }, g.start(sv, () => {
      h.current && (h.current(), h.current = null);
    })) : b({
      pulsate: S,
      rippleX: z,
      rippleY: j,
      rippleSize: A,
      cb: w
    });
  }, [s, b, g]), P = v.useCallback(() => {
    R({}, {
      pulsate: !0
    });
  }, [R]), T = v.useCallback((C, E) => {
    if (g.clear(), (C == null ? void 0 : C.type) === "touchend" && h.current) {
      h.current(), h.current = null, g.start(0, () => {
        T(C, E);
      });
      return;
    }
    h.current = null, d((w) => w.length > 0 ? w.slice(1) : w), p.current = E;
  }, [g]);
  return v.useImperativeHandle(n, () => ({
    pulsate: P,
    start: R,
    stop: T
  }), [P, R, T]), /* @__PURE__ */ y.jsx(cv, x({
    className: te(St.root, i.root, a),
    ref: u
  }, l, {
    children: /* @__PURE__ */ y.jsx(Jg, {
      component: null,
      exit: !0,
      children: c
    })
  }));
});
process.env.NODE_ENV !== "production" && (sd.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string
});
const dv = sd;
function fv(e) {
  return pe("MuiButtonBase", e);
}
const pv = he("MuiButtonBase", ["root", "disabled", "focusVisible"]), hv = pv, mv = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], yv = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: s
  } = e, a = be({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, fv, s);
  return n && r && (a.root += ` ${r}`), a;
}, bv = Y("button", {
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
  [`&.${hv.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), id = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: s,
    centerRipple: i = !1,
    children: a,
    className: l,
    component: c = "button",
    disabled: d = !1,
    disableRipple: f = !1,
    disableTouchRipple: p = !1,
    focusRipple: m = !1,
    LinkComponent: g = "a",
    onBlur: h,
    onClick: u,
    onContextMenu: b,
    onDragLeave: R,
    onFocus: P,
    onFocusVisible: T,
    onKeyDown: C,
    onKeyUp: E,
    onMouseDown: w,
    onMouseLeave: S,
    onMouseUp: N,
    onTouchEnd: M,
    onTouchMove: B,
    onTouchStart: W,
    tabIndex: z = 0,
    TouchRippleProps: j,
    touchRippleRef: A,
    type: U
  } = r, F = Z(r, mv), H = v.useRef(null), I = v.useRef(null), K = Je(I, A), {
    isFocusVisibleRef: k,
    onFocus: D,
    onBlur: Q,
    ref: X
  } = Eu(), [q, ee] = v.useState(!1);
  d && q && ee(!1), v.useImperativeHandle(s, () => ({
    focusVisible: () => {
      ee(!0), H.current.focus();
    }
  }), []);
  const [J, ne] = v.useState(!1);
  v.useEffect(() => {
    ne(!0);
  }, []);
  const re = J && !f && !d;
  v.useEffect(() => {
    q && m && !f && J && I.current.pulsate();
  }, [f, m, q, J]);
  function oe(ce, yt, Bt = p) {
    return an((Kt) => (yt && yt(Kt), !Bt && I.current && I.current[ce](Kt), !0));
  }
  const se = oe("start", w), le = oe("stop", b), $ = oe("stop", R), ie = oe("stop", N), de = oe("stop", (ce) => {
    q && ce.preventDefault(), S && S(ce);
  }), ge = oe("start", W), Qe = oe("stop", M), it = oe("stop", B), at = oe("stop", (ce) => {
    Q(ce), k.current === !1 && ee(!1), h && h(ce);
  }, !1), tt = an((ce) => {
    H.current || (H.current = ce.currentTarget), D(ce), k.current === !0 && (ee(!0), T && T(ce)), P && P(ce);
  }), dt = () => {
    const ce = H.current;
    return c && c !== "button" && !(ce.tagName === "A" && ce.href);
  }, Le = v.useRef(!1), nt = an((ce) => {
    m && !Le.current && q && I.current && ce.key === " " && (Le.current = !0, I.current.stop(ce, () => {
      I.current.start(ce);
    })), ce.target === ce.currentTarget && dt() && ce.key === " " && ce.preventDefault(), C && C(ce), ce.target === ce.currentTarget && dt() && ce.key === "Enter" && !d && (ce.preventDefault(), u && u(ce));
  }), rt = an((ce) => {
    m && ce.key === " " && I.current && q && !ce.defaultPrevented && (Le.current = !1, I.current.stop(ce, () => {
      I.current.pulsate(ce);
    })), E && E(ce), u && ce.target === ce.currentTarget && dt() && ce.key === " " && !ce.defaultPrevented && u(ce);
  });
  let Fe = c;
  Fe === "button" && (F.href || F.to) && (Fe = g);
  const lt = {};
  Fe === "button" ? (lt.type = U === void 0 ? "button" : U, lt.disabled = d) : (!F.href && !F.to && (lt.role = "button"), d && (lt["aria-disabled"] = d));
  const jt = Je(n, X, H);
  process.env.NODE_ENV !== "production" && v.useEffect(() => {
    re && !I.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [re]);
  const ft = x({}, r, {
    centerRipple: i,
    component: c,
    disabled: d,
    disableRipple: f,
    disableTouchRipple: p,
    focusRipple: m,
    tabIndex: z,
    focusVisible: q
  }), Te = yv(ft);
  return /* @__PURE__ */ y.jsxs(bv, x({
    as: Fe,
    className: te(Te.root, l),
    ownerState: ft,
    onBlur: at,
    onClick: u,
    onContextMenu: le,
    onFocus: tt,
    onKeyDown: nt,
    onKeyUp: rt,
    onMouseDown: se,
    onMouseLeave: de,
    onMouseUp: ie,
    onDragLeave: $,
    onTouchEnd: Qe,
    onTouchMove: it,
    onTouchStart: ge,
    ref: jt,
    tabIndex: d ? -1 : z,
    type: U
  }, lt, F, {
    children: [a, re ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ y.jsx(dv, x({
        ref: K,
        center: i
      }, j))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (id.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Wt,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: o.bool,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: kr,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: o.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: o.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: o.string,
  /**
   * @ignore
   */
  href: o.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: o.elementType,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * @ignore
   */
  onClick: o.func,
  /**
   * @ignore
   */
  onContextMenu: o.func,
  /**
   * @ignore
   */
  onDragLeave: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: o.func,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * @ignore
   */
  onKeyUp: o.func,
  /**
   * @ignore
   */
  onMouseDown: o.func,
  /**
   * @ignore
   */
  onMouseLeave: o.func,
  /**
   * @ignore
   */
  onMouseUp: o.func,
  /**
   * @ignore
   */
  onTouchEnd: o.func,
  /**
   * @ignore
   */
  onTouchMove: o.func,
  /**
   * @ignore
   */
  onTouchStart: o.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * @default 0
   */
  tabIndex: o.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: o.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: o.oneOfType([o.func, o.shape({
    current: o.shape({
      pulsate: o.func.isRequired,
      start: o.func.isRequired,
      stop: o.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: o.oneOfType([o.oneOf(["button", "reset", "submit"]), o.string])
});
const hn = id;
function gv(e) {
  return pe("MuiIconButton", e);
}
const vv = he("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), xv = vv, Ev = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], Cv = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: s,
    size: i
  } = e, a = {
    root: ["root", n && "disabled", r !== "default" && `color${V(r)}`, s && `edge${V(s)}`, `size${V(i)}`]
  };
  return be(a, gv, t);
}, Tv = Y(hn, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "default" && t[`color${V(n.color)}`], n.edge && t[`edge${V(n.edge)}`], t[`size${V(n.size)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => x({
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
  var n;
  const r = (n = (e.vars || e).palette) == null ? void 0 : n[t.color];
  return x({}, t.color === "inherit" && {
    color: "inherit"
  }, t.color !== "inherit" && t.color !== "default" && x({
    color: r == null ? void 0 : r.main
  }, !t.disableRipple && {
    "&:hover": x({}, r && {
      backgroundColor: e.vars ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : De(r.main, e.palette.action.hoverOpacity)
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
    [`&.${xv.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), ad = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: s = !1,
    children: i,
    className: a,
    color: l = "default",
    disabled: c = !1,
    disableFocusRipple: d = !1,
    size: f = "medium"
  } = r, p = Z(r, Ev), m = x({}, r, {
    edge: s,
    color: l,
    disabled: c,
    disableFocusRipple: d,
    size: f
  }), g = Cv(m);
  return /* @__PURE__ */ y.jsx(Tv, x({
    className: te(g.root, a),
    centerRipple: !0,
    focusRipple: !d,
    disabled: c,
    ref: n
  }, p, {
    ownerState: m,
    children: i
  }));
});
process.env.NODE_ENV !== "production" && (ad.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: Lt(o.node, (e) => v.Children.toArray(e.children).some((n) => /* @__PURE__ */ v.isValidElement(n) && n.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: o.oneOfType([o.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: o.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["small", "medium", "large"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const Dl = ad;
function Rv(e) {
  return pe("MuiTypography", e);
}
he("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const Ov = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], Sv = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    paragraph: s,
    variant: i,
    classes: a
  } = e, l = {
    root: ["root", i, e.align !== "inherit" && `align${V(t)}`, n && "gutterBottom", r && "noWrap", s && "paragraph"]
  };
  return be(l, Rv, a);
}, wv = Y("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${V(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
  }
})(({
  theme: e,
  ownerState: t
}) => x({
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
})), Fl = {
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
}, Pv = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, $v = (e) => Pv[e] || e, ld = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiTypography"
  }), s = $v(r.color), i = Lo(x({}, r, {
    color: s
  })), {
    align: a = "inherit",
    className: l,
    component: c,
    gutterBottom: d = !1,
    noWrap: f = !1,
    paragraph: p = !1,
    variant: m = "body1",
    variantMapping: g = Fl
  } = i, h = Z(i, Ov), u = x({}, i, {
    align: a,
    color: s,
    className: l,
    component: c,
    gutterBottom: d,
    noWrap: f,
    paragraph: p,
    variant: m,
    variantMapping: g
  }), b = c || (p ? "p" : g[m] || Fl[m]) || "span", R = Sv(u);
  return /* @__PURE__ */ y.jsx(wv, x({
    as: b,
    ref: n,
    ownerState: u,
    className: te(R.root, l)
  }, h));
});
process.env.NODE_ENV !== "production" && (ld.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: o.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: o.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: o.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: o.oneOfType([o.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), o.string]),
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
  variantMapping: o.object
});
const me = ld;
function _v(e) {
  return pe("MuiAppBar", e);
}
he("MuiAppBar", ["root", "positionFixed", "positionAbsolute", "positionSticky", "positionStatic", "positionRelative", "colorDefault", "colorPrimary", "colorSecondary", "colorInherit", "colorTransparent", "colorError", "colorInfo", "colorSuccess", "colorWarning"]);
const Nv = ["className", "color", "enableColorOnDark", "position"], Iv = (e) => {
  const {
    color: t,
    position: n,
    classes: r
  } = e, s = {
    root: ["root", `color${V(t)}`, `position${V(n)}`]
  };
  return be(s, _v, r);
}, Vr = (e, t) => e ? `${e == null ? void 0 : e.replace(")", "")}, ${t})` : t, kv = Y(Ko, {
  name: "MuiAppBar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`position${V(n.position)}`], t[`color${V(n.color)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light" ? e.palette.grey[100] : e.palette.grey[900];
  return x({
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
  }, !e.vars && x({}, t.color === "default" && {
    backgroundColor: n,
    color: e.palette.getContrastText(n)
  }, t.color && t.color !== "default" && t.color !== "inherit" && t.color !== "transparent" && {
    backgroundColor: e.palette[t.color].main,
    color: e.palette[t.color].contrastText
  }, t.color === "inherit" && {
    color: "inherit"
  }, e.palette.mode === "dark" && !t.enableColorOnDark && {
    backgroundColor: null,
    color: null
  }, t.color === "transparent" && x({
    backgroundColor: "transparent",
    color: "inherit"
  }, e.palette.mode === "dark" && {
    backgroundImage: "none"
  })), e.vars && x({}, t.color === "default" && {
    "--AppBar-background": t.enableColorOnDark ? e.vars.palette.AppBar.defaultBg : Vr(e.vars.palette.AppBar.darkBg, e.vars.palette.AppBar.defaultBg),
    "--AppBar-color": t.enableColorOnDark ? e.vars.palette.text.primary : Vr(e.vars.palette.AppBar.darkColor, e.vars.palette.text.primary)
  }, t.color && !t.color.match(/^(default|inherit|transparent)$/) && {
    "--AppBar-background": t.enableColorOnDark ? e.vars.palette[t.color].main : Vr(e.vars.palette.AppBar.darkBg, e.vars.palette[t.color].main),
    "--AppBar-color": t.enableColorOnDark ? e.vars.palette[t.color].contrastText : Vr(e.vars.palette.AppBar.darkColor, e.vars.palette[t.color].contrastText)
  }, !["inherit", "transparent"].includes(t.color) && {
    backgroundColor: "var(--AppBar-background)"
  }, {
    color: t.color === "inherit" ? "inherit" : "var(--AppBar-color)"
  }, t.color === "transparent" && {
    backgroundImage: "none",
    backgroundColor: "transparent",
    color: "inherit"
  }));
}), cd = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiAppBar"
  }), {
    className: s,
    color: i = "primary",
    enableColorOnDark: a = !1,
    position: l = "fixed"
  } = r, c = Z(r, Nv), d = x({}, r, {
    color: i,
    position: l,
    enableColorOnDark: a
  }), f = Iv(d);
  return /* @__PURE__ */ y.jsx(kv, x({
    square: !0,
    component: "header",
    ownerState: d,
    elevation: 4,
    className: te(f.root, s, l === "fixed" && "mui-fixed"),
    ref: n
  }, c));
});
process.env.NODE_ENV !== "production" && (cd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["default", "inherit", "primary", "secondary", "transparent", "error", "info", "success", "warning"]), o.string]),
  /**
   * If true, the `color` prop is applied in dark mode.
   * @default false
   */
  enableColorOnDark: o.bool,
  /**
   * The positioning type. The behavior of the different options is described
   * [in the MDN web docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning).
   * Note: `sticky` is not universally supported and will fall back to `static` when unavailable.
   * @default 'fixed'
   */
  position: o.oneOf(["absolute", "fixed", "relative", "static", "sticky"]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const jv = cd;
function Av(e) {
  return typeof e == "function" ? e() : e;
}
const Eo = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const {
    children: r,
    container: s,
    disablePortal: i = !1
  } = t, [a, l] = v.useState(null), c = Je(/* @__PURE__ */ v.isValidElement(r) ? Yn(r) : null, n);
  if (It(() => {
    i || l(Av(s) || document.body);
  }, [s, i]), It(() => {
    if (a && !i)
      return qs(n, a), () => {
        qs(n, null);
      };
  }, [n, a, i]), i) {
    if (/* @__PURE__ */ v.isValidElement(r)) {
      const d = {
        ref: c
      };
      return /* @__PURE__ */ v.cloneElement(r, d);
    }
    return /* @__PURE__ */ y.jsx(v.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ y.jsx(v.Fragment, {
    children: a && /* @__PURE__ */ op.createPortal(r, a)
  });
});
process.env.NODE_ENV !== "production" && (Eo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: o.node,
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
  container: o.oneOfType([zn, o.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool
});
process.env.NODE_ENV !== "production" && (Eo["propTypes"] = Bo(Eo.propTypes));
const Mv = Eo, Dv = Ze(/* @__PURE__ */ y.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function Fv(e) {
  return pe("MuiChip", e);
}
const Lv = he("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), Re = Lv, Bv = ["avatar", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant", "tabIndex", "skipFocusWhenDisabled"], zv = (e) => {
  const {
    classes: t,
    disabled: n,
    size: r,
    color: s,
    iconColor: i,
    onDelete: a,
    clickable: l,
    variant: c
  } = e, d = {
    root: ["root", c, n && "disabled", `size${V(r)}`, `color${V(s)}`, l && "clickable", l && `clickableColor${V(s)}`, a && "deletable", a && `deletableColor${V(s)}`, `${c}${V(s)}`],
    label: ["label", `label${V(r)}`],
    avatar: ["avatar", `avatar${V(r)}`, `avatarColor${V(s)}`],
    icon: ["icon", `icon${V(r)}`, `iconColor${V(i)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${V(r)}`, `deleteIconColor${V(s)}`, `deleteIcon${V(c)}Color${V(s)}`]
  };
  return be(d, Fv, t);
}, Uv = Y("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      color: r,
      iconColor: s,
      clickable: i,
      onDelete: a,
      size: l,
      variant: c
    } = n;
    return [{
      [`& .${Re.avatar}`]: t.avatar
    }, {
      [`& .${Re.avatar}`]: t[`avatar${V(l)}`]
    }, {
      [`& .${Re.avatar}`]: t[`avatarColor${V(r)}`]
    }, {
      [`& .${Re.icon}`]: t.icon
    }, {
      [`& .${Re.icon}`]: t[`icon${V(l)}`]
    }, {
      [`& .${Re.icon}`]: t[`iconColor${V(s)}`]
    }, {
      [`& .${Re.deleteIcon}`]: t.deleteIcon
    }, {
      [`& .${Re.deleteIcon}`]: t[`deleteIcon${V(l)}`]
    }, {
      [`& .${Re.deleteIcon}`]: t[`deleteIconColor${V(r)}`]
    }, {
      [`& .${Re.deleteIcon}`]: t[`deleteIcon${V(c)}Color${V(r)}`]
    }, t.root, t[`size${V(l)}`], t[`color${V(r)}`], i && t.clickable, i && r !== "default" && t[`clickableColor${V(r)})`], a && t.deletable, a && r !== "default" && t[`deletableColor${V(r)}`], t[c], t[`${c}${V(r)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
  return x({
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
    [`&.${Re.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${Re.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : n,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${Re.avatarColorPrimary}`]: {
      color: (e.vars || e).palette.primary.contrastText,
      backgroundColor: (e.vars || e).palette.primary.dark
    },
    [`& .${Re.avatarColorSecondary}`]: {
      color: (e.vars || e).palette.secondary.contrastText,
      backgroundColor: (e.vars || e).palette.secondary.dark
    },
    [`& .${Re.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: e.typography.pxToRem(10)
    },
    [`& .${Re.icon}`]: x({
      marginLeft: 5,
      marginRight: -6
    }, t.size === "small" && {
      fontSize: 18,
      marginLeft: 4,
      marginRight: -4
    }, t.iconColor === t.color && x({
      color: e.vars ? e.vars.palette.Chip.defaultIconColor : n
    }, t.color !== "default" && {
      color: "inherit"
    })),
    [`& .${Re.deleteIcon}`]: x({
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
    [`&.${Re.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : De(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  }, t.onDelete && t.color !== "default" && {
    [`&.${Re.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette[t.color].dark
    }
  });
}, ({
  theme: e,
  ownerState: t
}) => x({}, t.clickable && {
  userSelect: "none",
  WebkitTapHighlightColor: "transparent",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : De(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
  },
  [`&.${Re.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : De(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
  },
  "&:active": {
    boxShadow: (e.vars || e).shadows[1]
  }
}, t.clickable && t.color !== "default" && {
  [`&:hover, &.${Re.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette[t.color].dark
  }
}), ({
  theme: e,
  ownerState: t
}) => x({}, t.variant === "outlined" && {
  backgroundColor: "transparent",
  border: e.vars ? `1px solid ${e.vars.palette.Chip.defaultBorder}` : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
  [`&.${Re.clickable}:hover`]: {
    backgroundColor: (e.vars || e).palette.action.hover
  },
  [`&.${Re.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`& .${Re.avatar}`]: {
    marginLeft: 4
  },
  [`& .${Re.avatarSmall}`]: {
    marginLeft: 2
  },
  [`& .${Re.icon}`]: {
    marginLeft: 4
  },
  [`& .${Re.iconSmall}`]: {
    marginLeft: 2
  },
  [`& .${Re.deleteIcon}`]: {
    marginRight: 5
  },
  [`& .${Re.deleteIconSmall}`]: {
    marginRight: 3
  }
}, t.variant === "outlined" && t.color !== "default" && {
  color: (e.vars || e).palette[t.color].main,
  border: `1px solid ${e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : De(e.palette[t.color].main, 0.7)}`,
  [`&.${Re.clickable}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : De(e.palette[t.color].main, e.palette.action.hoverOpacity)
  },
  [`&.${Re.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.focusOpacity})` : De(e.palette[t.color].main, e.palette.action.focusOpacity)
  },
  [`& .${Re.deleteIcon}`]: {
    color: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : De(e.palette[t.color].main, 0.7),
    "&:hover, &:active": {
      color: (e.vars || e).palette[t.color].main
    }
  }
})), Vv = Y("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      size: r
    } = n;
    return [t.label, t[`label${V(r)}`]];
  }
})(({
  ownerState: e
}) => x({
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
function Ll(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const ud = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiChip"
  }), {
    avatar: s,
    className: i,
    clickable: a,
    color: l = "default",
    component: c,
    deleteIcon: d,
    disabled: f = !1,
    icon: p,
    label: m,
    onClick: g,
    onDelete: h,
    onKeyDown: u,
    onKeyUp: b,
    size: R = "medium",
    variant: P = "filled",
    tabIndex: T,
    skipFocusWhenDisabled: C = !1
    // TODO v6: Rename to `focusableWhenDisabled`.
  } = r, E = Z(r, Bv), w = v.useRef(null), S = Je(w, n), N = (K) => {
    K.stopPropagation(), h && h(K);
  }, M = (K) => {
    K.currentTarget === K.target && Ll(K) && K.preventDefault(), u && u(K);
  }, B = (K) => {
    K.currentTarget === K.target && (h && Ll(K) ? h(K) : K.key === "Escape" && w.current && w.current.blur()), b && b(K);
  }, W = a !== !1 && g ? !0 : a, z = W || h ? hn : c || "div", j = x({}, r, {
    component: z,
    disabled: f,
    size: R,
    color: l,
    iconColor: /* @__PURE__ */ v.isValidElement(p) && p.props.color || l,
    onDelete: !!h,
    clickable: W,
    variant: P
  }), A = zv(j), U = z === hn ? x({
    component: c || "div",
    focusVisibleClassName: A.focusVisible
  }, h && {
    disableRipple: !0
  }) : {};
  let F = null;
  h && (F = d && /* @__PURE__ */ v.isValidElement(d) ? /* @__PURE__ */ v.cloneElement(d, {
    className: te(d.props.className, A.deleteIcon),
    onClick: N
  }) : /* @__PURE__ */ y.jsx(Dv, {
    className: te(A.deleteIcon),
    onClick: N
  }));
  let H = null;
  s && /* @__PURE__ */ v.isValidElement(s) && (H = /* @__PURE__ */ v.cloneElement(s, {
    className: te(A.avatar, s.props.className)
  }));
  let I = null;
  return p && /* @__PURE__ */ v.isValidElement(p) && (I = /* @__PURE__ */ v.cloneElement(p, {
    className: te(A.icon, p.props.className)
  })), process.env.NODE_ENV !== "production" && H && I && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ y.jsxs(Uv, x({
    as: z,
    className: te(A.root, i),
    disabled: W && f ? !0 : void 0,
    onClick: g,
    onKeyDown: M,
    onKeyUp: B,
    ref: S,
    tabIndex: C && f ? -1 : T,
    ownerState: j
  }, U, E, {
    children: [H || I, /* @__PURE__ */ y.jsx(Vv, {
      className: te(A.label),
      ownerState: j,
      children: m
    }), F]
  }));
});
process.env.NODE_ENV !== "production" && (ud.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The Avatar element to display.
   */
  avatar: o.element,
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: cy,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, the chip will appear clickable, and will raise when pressed,
   * even if the onClick prop is not defined.
   * If `false`, the chip will not appear clickable, even if onClick prop is defined.
   * This can be used, for example,
   * along with the component prop to indicate an anchor Chip is clickable.
   * Note: this controls the UI and does not affect the onClick event.
   */
  clickable: o.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: o.oneOfType([o.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: o.element,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * Icon element.
   */
  icon: o.element,
  /**
   * The content of the component.
   */
  label: o.node,
  /**
   * @ignore
   */
  onClick: o.func,
  /**
   * Callback fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: o.func,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * @ignore
   */
  onKeyUp: o.func,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * If `true`, allows the disabled chip to escape focus.
   * If `false`, allows the disabled chip to receive focus.
   * @default false
   */
  skipFocusWhenDisabled: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * @ignore
   */
  tabIndex: o.number,
  /**
   * The variant to use.
   * @default 'filled'
   */
  variant: o.oneOfType([o.oneOf(["filled", "outlined"]), o.string])
});
const dd = ud, qv = ["onChange", "maxRows", "minRows", "style", "value"];
function qr(e) {
  return parseInt(e, 10) || 0;
}
const Wv = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function Hv(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Bl(e) {
  return Hv(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const fd = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: s,
    minRows: i = 1,
    style: a,
    value: l
  } = t, c = Z(t, qv), {
    current: d
  } = v.useRef(l != null), f = v.useRef(null), p = Je(n, f), m = v.useRef(null), g = v.useRef(null), h = v.useCallback(() => {
    const T = f.current, C = g.current;
    if (!T || !C)
      return;
    const w = Vt(T).getComputedStyle(T);
    if (w.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    C.style.width = w.width, C.value = T.value || t.placeholder || "x", C.value.slice(-1) === `
` && (C.value += " ");
    const S = w.boxSizing, N = qr(w.paddingBottom) + qr(w.paddingTop), M = qr(w.borderBottomWidth) + qr(w.borderTopWidth), B = C.scrollHeight;
    C.value = "x";
    const W = C.scrollHeight;
    let z = B;
    i && (z = Math.max(Number(i) * W, z)), s && (z = Math.min(Number(s) * W, z)), z = Math.max(z, W);
    const j = z + (S === "border-box" ? N + M : 0), A = Math.abs(z - B) <= 1;
    return {
      outerHeightStyle: j,
      overflowing: A
    };
  }, [s, i, t.placeholder]), u = an(() => {
    const T = f.current, C = h();
    if (!T || !C || Bl(C))
      return !1;
    const E = C.outerHeightStyle;
    return m.current != null && m.current !== E;
  }), b = v.useCallback(() => {
    const T = f.current, C = h();
    if (!T || !C || Bl(C))
      return;
    const E = C.outerHeightStyle;
    m.current !== E && (m.current = E, T.style.height = `${E}px`), T.style.overflow = C.overflowing ? "hidden" : "";
  }, [h]), R = v.useRef(-1);
  It(() => {
    const T = wi(b), C = f == null ? void 0 : f.current;
    if (!C)
      return;
    const E = Vt(C);
    E.addEventListener("resize", T);
    let w;
    return typeof ResizeObserver < "u" && (w = new ResizeObserver(() => {
      u() && (w.unobserve(C), cancelAnimationFrame(R.current), b(), R.current = requestAnimationFrame(() => {
        w.observe(C);
      }));
    }), w.observe(C)), () => {
      T.clear(), cancelAnimationFrame(R.current), E.removeEventListener("resize", T), w && w.disconnect();
    };
  }, [h, b, u]), It(() => {
    b();
  });
  const P = (T) => {
    d || b(), r && r(T);
  };
  return /* @__PURE__ */ y.jsxs(v.Fragment, {
    children: [/* @__PURE__ */ y.jsx("textarea", x({
      value: l,
      onChange: P,
      ref: p,
      rows: i,
      style: a
    }, c)), /* @__PURE__ */ y.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: g,
      tabIndex: -1,
      style: x({}, Wv.shadow, a, {
        paddingTop: 0,
        paddingBottom: 0
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (fd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  className: o.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * @ignore
   */
  onChange: o.func,
  /**
   * @ignore
   */
  placeholder: o.string,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * @ignore
   */
  value: o.oneOfType([o.arrayOf(o.string), o.number, o.string])
});
const Kv = fd;
function Xn({
  props: e,
  states: t,
  muiFormControl: n
}) {
  return t.reduce((r, s) => (r[s] = e[s], n && typeof e[s] > "u" && (r[s] = n[s]), r), {});
}
const pd = /* @__PURE__ */ v.createContext(void 0);
process.env.NODE_ENV !== "production" && (pd.displayName = "FormControlContext");
const Go = pd;
function gn() {
  return v.useContext(Go);
}
function zl(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Co(e, t = !1) {
  return e && (zl(e.value) && e.value !== "" || t && zl(e.defaultValue) && e.defaultValue !== "");
}
function Yv(e) {
  return e.startAdornment;
}
function Gv(e) {
  return pe("MuiInputBase", e);
}
const Qv = he("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), qn = Qv, Xv = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"], Qo = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${V(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, Xo = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.size === "small" && t.inputSizeSmall, n.multiline && t.inputMultiline, n.type === "search" && t.inputTypeSearch, n.startAdornment && t.inputAdornedStart, n.endAdornment && t.inputAdornedEnd, n.hiddenLabel && t.inputHiddenLabel];
}, Jv = (e) => {
  const {
    classes: t,
    color: n,
    disabled: r,
    error: s,
    endAdornment: i,
    focused: a,
    formControl: l,
    fullWidth: c,
    hiddenLabel: d,
    multiline: f,
    readOnly: p,
    size: m,
    startAdornment: g,
    type: h
  } = e, u = {
    root: ["root", `color${V(n)}`, r && "disabled", s && "error", c && "fullWidth", a && "focused", l && "formControl", m && m !== "medium" && `size${V(m)}`, f && "multiline", g && "adornedStart", i && "adornedEnd", d && "hiddenLabel", p && "readOnly"],
    input: ["input", r && "disabled", h === "search" && "inputTypeSearch", f && "inputMultiline", m === "small" && "inputSizeSmall", d && "inputHiddenLabel", g && "inputAdornedStart", i && "inputAdornedEnd", p && "readOnly"]
  };
  return be(u, Gv, t);
}, Jo = Y("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Qo
})(({
  theme: e,
  ownerState: t
}) => x({}, e.typography.body1, {
  color: (e.vars || e).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${qn.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  }
}, t.multiline && x({
  padding: "4px 0 5px"
}, t.size === "small" && {
  paddingTop: 1
}), t.fullWidth && {
  width: "100%"
})), Zo = Y("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: Xo
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light", r = x({
    color: "currentColor"
  }, e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: n ? 0.42 : 0.5
  }, {
    transition: e.transitions.create("opacity", {
      duration: e.transitions.duration.shorter
    })
  }), s = {
    opacity: "0 !important"
  }, i = e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: n ? 0.42 : 0.5
  };
  return x({
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    // Fix IE11 width issue
    animationName: "mui-auto-fill-cancel",
    animationDuration: "10ms",
    "&::-webkit-input-placeholder": r,
    "&::-moz-placeholder": r,
    // Firefox 19+
    "&:-ms-input-placeholder": r,
    // IE11
    "&::-ms-input-placeholder": r,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${qn.formControl} &`]: {
      "&::-webkit-input-placeholder": s,
      "&::-moz-placeholder": s,
      // Firefox 19+
      "&:-ms-input-placeholder": s,
      // IE11
      "&::-ms-input-placeholder": s,
      // Edge
      "&:focus::-webkit-input-placeholder": i,
      "&:focus::-moz-placeholder": i,
      // Firefox 19+
      "&:focus:-ms-input-placeholder": i,
      // IE11
      "&:focus::-ms-input-placeholder": i
      // Edge
    },
    [`&.${qn.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (e.vars || e).palette.text.disabled
      // Fix opacity Safari bug
    },
    "&:-webkit-autofill": {
      animationDuration: "5000s",
      animationName: "mui-auto-fill"
    }
  }, t.size === "small" && {
    paddingTop: 1
  }, t.multiline && {
    height: "auto",
    resize: "none",
    padding: 0,
    paddingTop: 0
  }, t.type === "search" && {
    // Improve type search style.
    MozAppearance: "textfield"
  });
}), Zv = /* @__PURE__ */ y.jsx(Ai, {
  styles: {
    "@keyframes mui-auto-fill": {
      from: {
        display: "block"
      }
    },
    "@keyframes mui-auto-fill-cancel": {
      from: {
        display: "block"
      }
    }
  }
}), hd = /* @__PURE__ */ v.forwardRef(function(t, n) {
  var r;
  const s = ye({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": i,
    autoComplete: a,
    autoFocus: l,
    className: c,
    components: d = {},
    componentsProps: f = {},
    defaultValue: p,
    disabled: m,
    disableInjectingGlobalStyles: g,
    endAdornment: h,
    fullWidth: u = !1,
    id: b,
    inputComponent: R = "input",
    inputProps: P = {},
    inputRef: T,
    maxRows: C,
    minRows: E,
    multiline: w = !1,
    name: S,
    onBlur: N,
    onChange: M,
    onClick: B,
    onFocus: W,
    onKeyDown: z,
    onKeyUp: j,
    placeholder: A,
    readOnly: U,
    renderSuffix: F,
    rows: H,
    slotProps: I = {},
    slots: K = {},
    startAdornment: k,
    type: D = "text",
    value: Q
  } = s, X = Z(s, Xv), q = P.value != null ? P.value : Q, {
    current: ee
  } = v.useRef(q != null), J = v.useRef(), ne = v.useCallback((Te) => {
    process.env.NODE_ENV !== "production" && Te && Te.nodeName !== "INPUT" && !Te.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), re = Je(J, T, P.ref, ne), [oe, se] = v.useState(!1), le = gn();
  process.env.NODE_ENV !== "production" && v.useEffect(() => {
    if (le)
      return le.registerEffect();
  }, [le]);
  const $ = Xn({
    props: s,
    muiFormControl: le,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  $.focused = le ? le.focused : oe, v.useEffect(() => {
    !le && m && oe && (se(!1), N && N());
  }, [le, m, oe, N]);
  const ie = le && le.onFilled, de = le && le.onEmpty, ge = v.useCallback((Te) => {
    Co(Te) ? ie && ie() : de && de();
  }, [ie, de]);
  It(() => {
    ee && ge({
      value: q
    });
  }, [q, ge, ee]);
  const Qe = (Te) => {
    if ($.disabled) {
      Te.stopPropagation();
      return;
    }
    W && W(Te), P.onFocus && P.onFocus(Te), le && le.onFocus ? le.onFocus(Te) : se(!0);
  }, it = (Te) => {
    N && N(Te), P.onBlur && P.onBlur(Te), le && le.onBlur ? le.onBlur(Te) : se(!1);
  }, at = (Te, ...ce) => {
    if (!ee) {
      const yt = Te.target || J.current;
      if (yt == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : fn(1));
      ge({
        value: yt.value
      });
    }
    P.onChange && P.onChange(Te, ...ce), M && M(Te, ...ce);
  };
  v.useEffect(() => {
    ge(J.current);
  }, []);
  const tt = (Te) => {
    J.current && Te.currentTarget === Te.target && J.current.focus(), B && B(Te);
  };
  let dt = R, Le = P;
  w && dt === "input" && (H ? (process.env.NODE_ENV !== "production" && (E || C) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), Le = x({
    type: void 0,
    minRows: H,
    maxRows: H
  }, Le)) : Le = x({
    type: void 0,
    maxRows: C,
    minRows: E
  }, Le), dt = Kv);
  const nt = (Te) => {
    ge(Te.animationName === "mui-auto-fill-cancel" ? J.current : {
      value: "x"
    });
  };
  v.useEffect(() => {
    le && le.setAdornedStart(!!k);
  }, [le, k]);
  const rt = x({}, s, {
    color: $.color || "primary",
    disabled: $.disabled,
    endAdornment: h,
    error: $.error,
    focused: $.focused,
    formControl: le,
    fullWidth: u,
    hiddenLabel: $.hiddenLabel,
    multiline: w,
    size: $.size,
    startAdornment: k,
    type: D
  }), Fe = Jv(rt), lt = K.root || d.Root || Jo, jt = I.root || f.root || {}, ft = K.input || d.Input || Zo;
  return Le = x({}, Le, (r = I.input) != null ? r : f.input), /* @__PURE__ */ y.jsxs(v.Fragment, {
    children: [!g && Zv, /* @__PURE__ */ y.jsxs(lt, x({}, jt, !Un(lt) && {
      ownerState: x({}, rt, jt.ownerState)
    }, {
      ref: n,
      onClick: tt
    }, X, {
      className: te(Fe.root, jt.className, c, U && "MuiInputBase-readOnly"),
      children: [k, /* @__PURE__ */ y.jsx(Go.Provider, {
        value: null,
        children: /* @__PURE__ */ y.jsx(ft, x({
          ownerState: rt,
          "aria-invalid": $.error,
          "aria-describedby": i,
          autoComplete: a,
          autoFocus: l,
          defaultValue: p,
          disabled: $.disabled,
          id: b,
          onAnimationStart: nt,
          name: S,
          placeholder: A,
          readOnly: U,
          required: $.required,
          rows: H,
          value: q,
          onKeyDown: z,
          onKeyUp: j,
          type: D
        }, Le, !Un(ft) && {
          as: dt,
          ownerState: x({}, rt, Le.ownerState)
        }, {
          ref: re,
          className: te(Fe.input, Le.className, U && "MuiInputBase-readOnly"),
          onBlur: it,
          onChange: at,
          onFocus: Qe
        }))
      }), h, F ? F(x({}, $, {
        startAdornment: k
      })) : null]
    }))]
  });
});
process.env.NODE_ENV !== "production" && (hd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  "aria-describedby": o.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Input: o.elementType,
    Root: o.elementType
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
  componentsProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: o.bool,
  /**
   * If `true`, GlobalStyles for the auto-fill keyframes will not be injected/removed on mount/unmount. Make sure to inject them at the top of your application.
   * This option is intended to help with boosting the initial rendering performance if you are loading a big amount of Input components at once.
   * @default false
   */
  disableInjectingGlobalStyles: o.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: o.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: o.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: kr,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Wt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: o.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * Callback fired when the `input` is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: o.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * @ignore
   */
  onClick: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * Callback fired when the `input` doesn't satisfy its constraints.
   */
  onInvalid: o.func,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * @ignore
   */
  onKeyUp: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * @ignore
   */
  renderSuffix: o.func,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * The size of the component.
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any
});
const Hi = hd;
function e0(e) {
  return pe("MuiInput", e);
}
const t0 = x({}, qn, he("MuiInput", ["root", "underline", "input"])), ir = t0;
function n0(e) {
  return pe("MuiOutlinedInput", e);
}
const r0 = x({}, qn, he("MuiOutlinedInput", ["root", "notchedOutline", "input"])), Gt = r0;
function o0(e) {
  return pe("MuiFilledInput", e);
}
const s0 = x({}, qn, he("MuiFilledInput", ["root", "underline", "input"])), rn = s0, i0 = Ze(/* @__PURE__ */ y.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), a0 = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], l0 = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, md = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = bn(), s = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: a = !0,
    children: l,
    easing: c,
    in: d,
    onEnter: f,
    onEntered: p,
    onEntering: m,
    onExit: g,
    onExited: h,
    onExiting: u,
    style: b,
    timeout: R = s,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: P = Ui
  } = t, T = Z(t, a0), C = v.useRef(null), E = Je(C, Yn(l), n), w = (A) => (U) => {
    if (A) {
      const F = C.current;
      U === void 0 ? A(F) : A(F, U);
    }
  }, S = w(m), N = w((A, U) => {
    Wi(A);
    const F = Vn({
      style: b,
      timeout: R,
      easing: c
    }, {
      mode: "enter"
    });
    A.style.webkitTransition = r.transitions.create("opacity", F), A.style.transition = r.transitions.create("opacity", F), f && f(A, U);
  }), M = w(p), B = w(u), W = w((A) => {
    const U = Vn({
      style: b,
      timeout: R,
      easing: c
    }, {
      mode: "exit"
    });
    A.style.webkitTransition = r.transitions.create("opacity", U), A.style.transition = r.transitions.create("opacity", U), g && g(A);
  }), z = w(h), j = (A) => {
    i && i(C.current, A);
  };
  return /* @__PURE__ */ y.jsx(P, x({
    appear: a,
    in: d,
    nodeRef: C,
    onEnter: N,
    onEntered: M,
    onEntering: S,
    onExit: W,
    onExited: z,
    onExiting: B,
    addEndListener: j,
    timeout: R
  }, T, {
    children: (A, U) => /* @__PURE__ */ v.cloneElement(l, x({
      style: x({
        opacity: 0,
        visibility: A === "exited" && !d ? "hidden" : void 0
      }, l0[A], b, l.props.style),
      ref: E
    }, U))
  }));
});
process.env.NODE_ENV !== "production" && (md.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: o.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: o.bool,
  /**
   * A single child content element.
   */
  children: Ir.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: o.oneOfType([o.shape({
    enter: o.string,
    exit: o.string
  }), o.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: o.bool,
  /**
   * @ignore
   */
  onEnter: o.func,
  /**
   * @ignore
   */
  onEntered: o.func,
  /**
   * @ignore
   */
  onEntering: o.func,
  /**
   * @ignore
   */
  onExit: o.func,
  /**
   * @ignore
   */
  onExited: o.func,
  /**
   * @ignore
   */
  onExiting: o.func,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: o.oneOfType([o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
const c0 = md;
function u0(e) {
  return pe("MuiBackdrop", e);
}
he("MuiBackdrop", ["root", "invisible"]);
const d0 = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], f0 = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return be({
    root: ["root", n && "invisible"]
  }, u0, t);
}, p0 = Y("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.invisible && t.invisible];
  }
})(({
  ownerState: e
}) => x({
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
})), yd = /* @__PURE__ */ v.forwardRef(function(t, n) {
  var r, s, i;
  const a = ye({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: l,
    className: c,
    component: d = "div",
    components: f = {},
    componentsProps: p = {},
    invisible: m = !1,
    open: g,
    slotProps: h = {},
    slots: u = {},
    TransitionComponent: b = c0,
    transitionDuration: R
  } = a, P = Z(a, d0), T = x({}, a, {
    component: d,
    invisible: m
  }), C = f0(T), E = (r = h.root) != null ? r : p.root;
  return /* @__PURE__ */ y.jsx(b, x({
    in: g,
    timeout: R
  }, P, {
    children: /* @__PURE__ */ y.jsx(p0, x({
      "aria-hidden": !0
    }, E, {
      as: (s = (i = u.root) != null ? i : f.Root) != null ? s : d,
      className: te(C.root, c, E == null ? void 0 : E.className),
      ownerState: x({}, T, E == null ? void 0 : E.ownerState),
      classes: C,
      ref: n,
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (yd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Root: o.elementType
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
  componentsProps: o.shape({
    root: o.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: o.bool,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: o.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: o.oneOfType([o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
const h0 = yd, m0 = he("MuiBox", ["root"]), y0 = m0, b0 = Vo(), bd = Um({
  themeId: Fn,
  defaultTheme: b0,
  defaultClassName: y0.root,
  generateClassName: pu.generate
});
process.env.NODE_ENV !== "production" && (bd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: o.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const xe = bd, g0 = Ze(/* @__PURE__ */ y.jsx("path", {
  d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), "MoreHoriz"), v0 = ["slots", "slotProps"], x0 = Y(hn, {
  name: "MuiBreadcrumbCollapsed"
})(({
  theme: e
}) => x({
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
  "&:hover, &:focus": x({}, e.palette.mode === "light" ? {
    backgroundColor: e.palette.grey[200]
  } : {
    backgroundColor: e.palette.grey[600]
  }),
  "&:active": x({
    boxShadow: e.shadows[0]
  }, e.palette.mode === "light" ? {
    backgroundColor: sl(e.palette.grey[200], 0.12)
  } : {
    backgroundColor: sl(e.palette.grey[600], 0.12)
  })
})), E0 = Y(g0)({
  width: 24,
  height: 16
});
function gd(e) {
  const {
    slots: t = {},
    slotProps: n = {}
  } = e, r = Z(e, v0), s = e;
  return /* @__PURE__ */ y.jsx("li", {
    children: /* @__PURE__ */ y.jsx(x0, x({
      focusRipple: !0
    }, r, {
      ownerState: s,
      children: /* @__PURE__ */ y.jsx(E0, x({
        as: t.CollapsedIcon,
        ownerState: s
      }, n.collapsedIcon))
    }))
  });
}
process.env.NODE_ENV !== "production" && (gd.propTypes = {
  /**
   * The props used for the CollapsedIcon slot.
   * @default {}
   */
  slotProps: o.shape({
    collapsedIcon: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside the BreadcumbCollapsed.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    CollapsedIcon: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.object
});
function C0(e) {
  return pe("MuiBreadcrumbs", e);
}
const T0 = he("MuiBreadcrumbs", ["root", "ol", "li", "separator"]), R0 = T0, O0 = ["children", "className", "component", "slots", "slotProps", "expandText", "itemsAfterCollapse", "itemsBeforeCollapse", "maxItems", "separator"], S0 = (e) => {
  const {
    classes: t
  } = e;
  return be({
    root: ["root"],
    li: ["li"],
    ol: ["ol"],
    separator: ["separator"]
  }, C0, t);
}, w0 = Y(me, {
  name: "MuiBreadcrumbs",
  slot: "Root",
  overridesResolver: (e, t) => [{
    [`& .${R0.li}`]: t.li
  }, t.root]
})({}), P0 = Y("ol", {
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
}), $0 = Y("li", {
  name: "MuiBreadcrumbs",
  slot: "Separator",
  overridesResolver: (e, t) => t.separator
})({
  display: "flex",
  userSelect: "none",
  marginLeft: 8,
  marginRight: 8
});
function _0(e, t, n, r) {
  return e.reduce((s, i, a) => (a < e.length - 1 ? s = s.concat(i, /* @__PURE__ */ y.jsx($0, {
    "aria-hidden": !0,
    className: t,
    ownerState: r,
    children: n
  }, `separator-${a}`)) : s.push(i), s), []);
}
const vd = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiBreadcrumbs"
  }), {
    children: s,
    className: i,
    component: a = "nav",
    slots: l = {},
    slotProps: c = {},
    expandText: d = "Show path",
    itemsAfterCollapse: f = 1,
    itemsBeforeCollapse: p = 1,
    maxItems: m = 8,
    separator: g = "/"
  } = r, h = Z(r, O0), [u, b] = v.useState(!1), R = x({}, r, {
    component: a,
    expanded: u,
    expandText: d,
    itemsAfterCollapse: f,
    itemsBeforeCollapse: p,
    maxItems: m,
    separator: g
  }), P = S0(R), T = pn({
    elementType: l.CollapsedIcon,
    externalSlotProps: c.collapsedIcon,
    ownerState: R
  }), C = v.useRef(null), E = (S) => {
    const N = () => {
      b(!0);
      const M = C.current.querySelector("a[href],button,[tabindex]");
      M && M.focus();
    };
    return p + f >= S.length ? (process.env.NODE_ENV !== "production" && console.error(["MUI: You have provided an invalid combination of props to the Breadcrumbs.", `itemsAfterCollapse={${f}} + itemsBeforeCollapse={${p}} >= maxItems={${m}}`].join(`
`)), S) : [...S.slice(0, p), /* @__PURE__ */ y.jsx(gd, {
      "aria-label": d,
      slots: {
        CollapsedIcon: l.CollapsedIcon
      },
      slotProps: {
        collapsedIcon: T
      },
      onClick: N
    }, "ellipsis"), ...S.slice(S.length - f, S.length)];
  }, w = v.Children.toArray(s).filter((S) => (process.env.NODE_ENV !== "production" && Ho.isFragment(S) && console.error(["MUI: The Breadcrumbs component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), /* @__PURE__ */ v.isValidElement(S))).map((S, N) => /* @__PURE__ */ y.jsx("li", {
    className: P.li,
    children: S
  }, `child-${N}`));
  return /* @__PURE__ */ y.jsx(w0, x({
    ref: n,
    component: a,
    color: "text.secondary",
    className: te(P.root, i),
    ownerState: R
  }, h, {
    children: /* @__PURE__ */ y.jsx(P0, {
      className: P.ol,
      ref: C,
      ownerState: R,
      children: _0(u || m && w.length <= m ? w : E(w), P.separator, g, R)
    })
  }));
});
process.env.NODE_ENV !== "production" && (vd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * Override the default label for the expand button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Show path'
   */
  expandText: o.string,
  /**
   * If max items is exceeded, the number of items to show after the ellipsis.
   * @default 1
   */
  itemsAfterCollapse: Mn,
  /**
   * If max items is exceeded, the number of items to show before the ellipsis.
   * @default 1
   */
  itemsBeforeCollapse: Mn,
  /**
   * Specifies the maximum number of breadcrumbs to display. When there are more
   * than the maximum number, only the first `itemsBeforeCollapse` and last `itemsAfterCollapse`
   * will be shown, with an ellipsis in between.
   * @default 8
   */
  maxItems: Mn,
  /**
   * Custom separator node.
   * @default '/'
   */
  separator: o.node,
  /**
   * The props used for each slot inside the Breadcumb.
   * @default {}
   */
  slotProps: o.shape({
    collapsedIcon: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside the Breadcumb.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    CollapsedIcon: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const N0 = vd;
function I0(e) {
  return pe("MuiButton", e);
}
const k0 = he("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), Wr = k0, xd = /* @__PURE__ */ v.createContext({});
process.env.NODE_ENV !== "production" && (xd.displayName = "ButtonGroupContext");
const j0 = xd, Ed = /* @__PURE__ */ v.createContext(void 0);
process.env.NODE_ENV !== "production" && (Ed.displayName = "ButtonGroupButtonContext");
const A0 = Ed, M0 = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], D0 = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: r,
    size: s,
    variant: i,
    classes: a
  } = e, l = {
    root: ["root", i, `${i}${V(t)}`, `size${V(s)}`, `${i}Size${V(s)}`, `color${V(t)}`, n && "disableElevation", r && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${V(s)}`],
    endIcon: ["icon", "endIcon", `iconSize${V(s)}`]
  }, c = be(l, I0, a);
  return x({}, a, c);
}, Cd = (e) => x({}, e.size === "small" && {
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
}), F0 = Y(hn, {
  shouldForwardProp: (e) => Et(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${V(n.color)}`], t[`size${V(n.size)}`], t[`${n.variant}Size${V(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r;
  const s = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], i = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return x({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": x({
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
      backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedHoverBg : i,
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
    "&:active": x({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[8]
    }),
    [`&.${Wr.focusVisible}`]: x({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${Wr.disabled}`]: x({
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
    ) : (n = (r = e.palette).getContrastText) == null ? void 0 : n.call(r, e.palette.grey[300]),
    backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedBg : s,
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
  [`&.${Wr.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${Wr.disabled}`]: {
    boxShadow: "none"
  }
}), L0 = Y("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.startIcon, t[`iconSize${V(n.size)}`]];
  }
})(({
  ownerState: e
}) => x({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, Cd(e))), B0 = Y("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.endIcon, t[`iconSize${V(n.size)}`]];
  }
})(({
  ownerState: e
}) => x({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, Cd(e))), Td = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = v.useContext(j0), s = v.useContext(A0), i = Tr(r, t), a = ye({
    props: i,
    name: "MuiButton"
  }), {
    children: l,
    color: c = "primary",
    component: d = "button",
    className: f,
    disabled: p = !1,
    disableElevation: m = !1,
    disableFocusRipple: g = !1,
    endIcon: h,
    focusVisibleClassName: u,
    fullWidth: b = !1,
    size: R = "medium",
    startIcon: P,
    type: T,
    variant: C = "text"
  } = a, E = Z(a, M0), w = x({}, a, {
    color: c,
    component: d,
    disabled: p,
    disableElevation: m,
    disableFocusRipple: g,
    fullWidth: b,
    size: R,
    type: T,
    variant: C
  }), S = D0(w), N = P && /* @__PURE__ */ y.jsx(L0, {
    className: S.startIcon,
    ownerState: w,
    children: P
  }), M = h && /* @__PURE__ */ y.jsx(B0, {
    className: S.endIcon,
    ownerState: w,
    children: h
  }), B = s || "";
  return /* @__PURE__ */ y.jsxs(F0, x({
    ownerState: w,
    className: te(r.className, S.root, f, B),
    component: d,
    disabled: p,
    focusRipple: !g,
    focusVisibleClassName: te(S.focusVisible, u),
    ref: n,
    type: T
  }, E, {
    classes: S,
    children: [N, l, M]
  }));
});
process.env.NODE_ENV !== "production" && (Td.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: o.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * Element placed after the children.
   */
  endIcon: o.node,
  /**
   * @ignore
   */
  focusVisibleClassName: o.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: o.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["small", "medium", "large"]), o.string]),
  /**
   * Element placed before the children.
   */
  startIcon: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * @ignore
   */
  type: o.oneOfType([o.oneOf(["button", "reset", "submit"]), o.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: o.oneOfType([o.oneOf(["contained", "outlined", "text"]), o.string])
});
const es = Td;
function z0(e) {
  return pe("MuiCard", e);
}
he("MuiCard", ["root"]);
const U0 = ["className", "raised"], V0 = (e) => {
  const {
    classes: t
  } = e;
  return be({
    root: ["root"]
  }, z0, t);
}, q0 = Y(Ko, {
  name: "MuiCard",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(() => ({
  overflow: "hidden"
})), Rd = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiCard"
  }), {
    className: s,
    raised: i = !1
  } = r, a = Z(r, U0), l = x({}, r, {
    raised: i
  }), c = V0(l);
  return /* @__PURE__ */ y.jsx(q0, x({
    className: te(c.root, s),
    elevation: i ? 8 : void 0,
    ref: n,
    ownerState: l
  }, a));
});
process.env.NODE_ENV !== "production" && (Rd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, the card will use raised styling.
   * @default false
   */
  raised: Lt(o.bool, (e) => e.raised && e.variant === "outlined" ? new Error('MUI: Combining `raised={true}` with `variant="outlined"` has no effect.') : null),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const In = Rd;
function W0(e) {
  return pe("MuiCardContent", e);
}
he("MuiCardContent", ["root"]);
const H0 = ["className", "component"], K0 = (e) => {
  const {
    classes: t
  } = e;
  return be({
    root: ["root"]
  }, W0, t);
}, Y0 = Y("div", {
  name: "MuiCardContent",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(() => ({
  padding: 16,
  "&:last-child": {
    paddingBottom: 24
  }
})), Od = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiCardContent"
  }), {
    className: s,
    component: i = "div"
  } = r, a = Z(r, H0), l = x({}, r, {
    component: i
  }), c = K0(l);
  return /* @__PURE__ */ y.jsx(Y0, x({
    as: i,
    className: te(c.root, s),
    ownerState: l,
    ref: n
  }, a));
});
process.env.NODE_ENV !== "production" && (Od.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const kn = Od;
function G0(e) {
  return pe("MuiCircularProgress", e);
}
he("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const Q0 = ["className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"];
let ts = (e) => e, Ul, Vl, ql, Wl;
const Qt = 44, X0 = qt(Ul || (Ul = ts`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)), J0 = qt(Vl || (Vl = ts`
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
`)), Z0 = (e) => {
  const {
    classes: t,
    variant: n,
    color: r,
    disableShrink: s
  } = e, i = {
    root: ["root", n, `color${V(r)}`],
    svg: ["svg"],
    circle: ["circle", `circle${V(n)}`, s && "circleDisableShrink"]
  };
  return be(i, G0, t);
}, ex = Y("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${V(n.color)}`]];
  }
})(({
  ownerState: e,
  theme: t
}) => x({
  display: "inline-block"
}, e.variant === "determinate" && {
  transition: t.transitions.create("transform")
}, e.color !== "inherit" && {
  color: (t.vars || t).palette[e.color].main
}), ({
  ownerState: e
}) => e.variant === "indeterminate" && yn(ql || (ql = ts`
      animation: ${0} 1.4s linear infinite;
    `), X0)), tx = Y("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (e, t) => t.svg
})({
  display: "block"
  // Keeps the progress centered
}), nx = Y("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.circle, t[`circle${V(n.variant)}`], n.disableShrink && t.circleDisableShrink];
  }
})(({
  ownerState: e,
  theme: t
}) => x({
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
}) => e.variant === "indeterminate" && !e.disableShrink && yn(Wl || (Wl = ts`
      animation: ${0} 1.4s ease-in-out infinite;
    `), J0)), Sd = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: s,
    color: i = "primary",
    disableShrink: a = !1,
    size: l = 40,
    style: c,
    thickness: d = 3.6,
    value: f = 0,
    variant: p = "indeterminate"
  } = r, m = Z(r, Q0), g = x({}, r, {
    color: i,
    disableShrink: a,
    size: l,
    thickness: d,
    value: f,
    variant: p
  }), h = Z0(g), u = {}, b = {}, R = {};
  if (p === "determinate") {
    const P = 2 * Math.PI * ((Qt - d) / 2);
    u.strokeDasharray = P.toFixed(3), R["aria-valuenow"] = Math.round(f), u.strokeDashoffset = `${((100 - f) / 100 * P).toFixed(3)}px`, b.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ y.jsx(ex, x({
    className: te(h.root, s),
    style: x({
      width: l,
      height: l
    }, b, c),
    ownerState: g,
    ref: n,
    role: "progressbar"
  }, R, m, {
    children: /* @__PURE__ */ y.jsx(tx, {
      className: h.svg,
      ownerState: g,
      viewBox: `${Qt / 2} ${Qt / 2} ${Qt} ${Qt}`,
      children: /* @__PURE__ */ y.jsx(nx, {
        className: h.circle,
        style: u,
        ownerState: g,
        cx: Qt,
        cy: Qt,
        r: (Qt - d) / 2,
        fill: "none",
        strokeWidth: d
      })
    })
  }));
});
process.env.NODE_ENV !== "production" && (Sd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: Lt(o.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: o.oneOfType([o.number, o.string]),
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: o.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: o.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: o.oneOf(["determinate", "indeterminate"])
});
const rx = Sd;
function ox(e) {
  const t = xt(e);
  return t.body === e ? Vt(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function yr(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Hl(e) {
  return parseInt(Vt(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function sx(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function Kl(e, t, n, r, s) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (a) => {
    const l = i.indexOf(a) === -1, c = !sx(a);
    l && c && yr(a, s);
  });
}
function Ps(e, t) {
  let n = -1;
  return e.some((r, s) => t(r) ? (n = s, !0) : !1), n;
}
function ix(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (ox(r)) {
      const a = Cu(xt(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${Hl(r) + a}px`;
      const l = xt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        n.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${Hl(c) + a}px`;
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = xt(r).body;
    else {
      const a = r.parentElement, l = Vt(r);
      i = (a == null ? void 0 : a.nodeName) === "HTML" && l.getComputedStyle(a).overflowY === "scroll" ? a : r;
    }
    n.push({
      value: i.style.overflow,
      property: "overflow",
      el: i
    }, {
      value: i.style.overflowX,
      property: "overflow-x",
      el: i
    }, {
      value: i.style.overflowY,
      property: "overflow-y",
      el: i
    }), i.style.overflow = "hidden";
  }
  return () => {
    n.forEach(({
      value: i,
      el: a,
      property: l
    }) => {
      i ? a.style.setProperty(l, i) : a.style.removeProperty(l);
    });
  };
}
function ax(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class lx {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && yr(t.modalRef, !1);
    const s = ax(n);
    Kl(n, t.mount, t.modalRef, s, !0);
    const i = Ps(this.containers, (a) => a.container === n);
    return i !== -1 ? (this.containers[i].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: s
    }), r);
  }
  mount(t, n) {
    const r = Ps(this.containers, (i) => i.modals.indexOf(t) !== -1), s = this.containers[r];
    s.restore || (s.restore = ix(s, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const s = Ps(this.containers, (a) => a.modals.indexOf(t) !== -1), i = this.containers[s];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && yr(t.modalRef, n), Kl(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(s, 1);
    else {
      const a = i.modals[i.modals.length - 1];
      a.modalRef && yr(a.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const cx = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function ux(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function dx(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function fx(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || dx(e));
}
function px(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(cx)).forEach((r, s) => {
    const i = ux(r);
    i === -1 || !fx(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: s,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, s) => r.tabIndex === s.tabIndex ? r.documentOrder - s.documentOrder : r.tabIndex - s.tabIndex).map((r) => r.node).concat(t);
}
function hx() {
  return !0;
}
function To(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: s = !1,
    getTabbable: i = px,
    isEnabled: a = hx,
    open: l
  } = e, c = v.useRef(!1), d = v.useRef(null), f = v.useRef(null), p = v.useRef(null), m = v.useRef(null), g = v.useRef(!1), h = v.useRef(null), u = Je(Yn(t), h), b = v.useRef(null);
  v.useEffect(() => {
    !l || !h.current || (g.current = !n);
  }, [n, l]), v.useEffect(() => {
    if (!l || !h.current)
      return;
    const T = xt(h.current);
    return h.current.contains(T.activeElement) || (h.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), h.current.setAttribute("tabIndex", "-1")), g.current && h.current.focus()), () => {
      s || (p.current && p.current.focus && (c.current = !0, p.current.focus()), p.current = null);
    };
  }, [l]), v.useEffect(() => {
    if (!l || !h.current)
      return;
    const T = xt(h.current), C = (S) => {
      b.current = S, !(r || !a() || S.key !== "Tab") && T.activeElement === h.current && S.shiftKey && (c.current = !0, f.current && f.current.focus());
    }, E = () => {
      const S = h.current;
      if (S === null)
        return;
      if (!T.hasFocus() || !a() || c.current) {
        c.current = !1;
        return;
      }
      if (S.contains(T.activeElement) || r && T.activeElement !== d.current && T.activeElement !== f.current)
        return;
      if (T.activeElement !== m.current)
        m.current = null;
      else if (m.current !== null)
        return;
      if (!g.current)
        return;
      let N = [];
      if ((T.activeElement === d.current || T.activeElement === f.current) && (N = i(h.current)), N.length > 0) {
        var M, B;
        const W = !!((M = b.current) != null && M.shiftKey && ((B = b.current) == null ? void 0 : B.key) === "Tab"), z = N[0], j = N[N.length - 1];
        typeof z != "string" && typeof j != "string" && (W ? j.focus() : z.focus());
      } else
        S.focus();
    };
    T.addEventListener("focusin", E), T.addEventListener("keydown", C, !0);
    const w = setInterval(() => {
      T.activeElement && T.activeElement.tagName === "BODY" && E();
    }, 50);
    return () => {
      clearInterval(w), T.removeEventListener("focusin", E), T.removeEventListener("keydown", C, !0);
    };
  }, [n, r, s, a, l, i]);
  const R = (T) => {
    p.current === null && (p.current = T.relatedTarget), g.current = !0, m.current = T.target;
    const C = t.props.onFocus;
    C && C(T);
  }, P = (T) => {
    p.current === null && (p.current = T.relatedTarget), g.current = !0;
  };
  return /* @__PURE__ */ y.jsxs(v.Fragment, {
    children: [/* @__PURE__ */ y.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: P,
      ref: d,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ v.cloneElement(t, {
      ref: u,
      onFocus: R
    }), /* @__PURE__ */ y.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: P,
      ref: f,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (To.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: Ir,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: o.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: o.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: o.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: o.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: o.func,
  /**
   * If `true`, focus is locked.
   */
  open: o.bool.isRequired
});
process.env.NODE_ENV !== "production" && (To["propTypes"] = Bo(To.propTypes));
function mx(e) {
  return typeof e == "function" ? e() : e;
}
function yx(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const bx = new lx();
function gx(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: r = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: s = bx,
    closeAfterTransition: i = !1,
    onTransitionEnter: a,
    onTransitionExited: l,
    children: c,
    onClose: d,
    open: f,
    rootRef: p
  } = e, m = v.useRef({}), g = v.useRef(null), h = v.useRef(null), u = Je(h, p), [b, R] = v.useState(!f), P = yx(c);
  let T = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (T = !1);
  const C = () => xt(g.current), E = () => (m.current.modalRef = h.current, m.current.mount = g.current, m.current), w = () => {
    s.mount(E(), {
      disableScrollLock: r
    }), h.current && (h.current.scrollTop = 0);
  }, S = an(() => {
    const F = mx(t) || C().body;
    s.add(E(), F), h.current && w();
  }), N = v.useCallback(() => s.isTopModal(E()), [s]), M = an((F) => {
    g.current = F, F && (f && N() ? w() : h.current && yr(h.current, T));
  }), B = v.useCallback(() => {
    s.remove(E(), T);
  }, [T, s]);
  v.useEffect(() => () => {
    B();
  }, [B]), v.useEffect(() => {
    f ? S() : (!P || !i) && B();
  }, [f, B, P, i, S]);
  const W = (F) => (H) => {
    var I;
    (I = F.onKeyDown) == null || I.call(F, H), !(H.key !== "Escape" || H.which === 229 || // Wait until IME is settled.
    !N()) && (n || (H.stopPropagation(), d && d(H, "escapeKeyDown")));
  }, z = (F) => (H) => {
    var I;
    (I = F.onClick) == null || I.call(F, H), H.target === H.currentTarget && d && d(H, "backdropClick");
  };
  return {
    getRootProps: (F = {}) => {
      const H = Ou(e);
      delete H.onTransitionEnter, delete H.onTransitionExited;
      const I = x({}, H, F);
      return x({
        role: "presentation"
      }, I, {
        onKeyDown: W(I),
        ref: u
      });
    },
    getBackdropProps: (F = {}) => {
      const H = F;
      return x({
        "aria-hidden": !0
      }, H, {
        onClick: z(H),
        open: f
      });
    },
    getTransitionProps: () => {
      const F = () => {
        R(!1), a && a();
      }, H = () => {
        R(!0), l && l(), i && B();
      };
      return {
        onEnter: Xa(F, c == null ? void 0 : c.props.onEnter),
        onExited: Xa(H, c == null ? void 0 : c.props.onExited)
      };
    },
    rootRef: u,
    portalRef: M,
    isTopModal: N,
    exited: b,
    hasTransition: P
  };
}
function vx(e) {
  return pe("MuiModal", e);
}
he("MuiModal", ["root", "hidden", "backdrop"]);
const xx = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], Ex = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return be({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, vx, r);
}, Cx = Y("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(({
  theme: e,
  ownerState: t
}) => x({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !t.open && t.exited && {
  visibility: "hidden"
})), Tx = Y(h0, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), wd = /* @__PURE__ */ v.forwardRef(function(t, n) {
  var r, s, i, a, l, c;
  const d = ye({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: f = Tx,
    BackdropProps: p,
    className: m,
    closeAfterTransition: g = !1,
    children: h,
    container: u,
    component: b,
    components: R = {},
    componentsProps: P = {},
    disableAutoFocus: T = !1,
    disableEnforceFocus: C = !1,
    disableEscapeKeyDown: E = !1,
    disablePortal: w = !1,
    disableRestoreFocus: S = !1,
    disableScrollLock: N = !1,
    hideBackdrop: M = !1,
    keepMounted: B = !1,
    onBackdropClick: W,
    open: z,
    slotProps: j,
    slots: A
    // eslint-disable-next-line react/prop-types
  } = d, U = Z(d, xx), F = x({}, d, {
    closeAfterTransition: g,
    disableAutoFocus: T,
    disableEnforceFocus: C,
    disableEscapeKeyDown: E,
    disablePortal: w,
    disableRestoreFocus: S,
    disableScrollLock: N,
    hideBackdrop: M,
    keepMounted: B
  }), {
    getRootProps: H,
    getBackdropProps: I,
    getTransitionProps: K,
    portalRef: k,
    isTopModal: D,
    exited: Q,
    hasTransition: X
  } = gx(x({}, F, {
    rootRef: n
  })), q = x({}, F, {
    exited: Q
  }), ee = Ex(q), J = {};
  if (h.props.tabIndex === void 0 && (J.tabIndex = "-1"), X) {
    const {
      onEnter: ie,
      onExited: de
    } = K();
    J.onEnter = ie, J.onExited = de;
  }
  const ne = (r = (s = A == null ? void 0 : A.root) != null ? s : R.Root) != null ? r : Cx, re = (i = (a = A == null ? void 0 : A.backdrop) != null ? a : R.Backdrop) != null ? i : f, oe = (l = j == null ? void 0 : j.root) != null ? l : P.root, se = (c = j == null ? void 0 : j.backdrop) != null ? c : P.backdrop, le = pn({
    elementType: ne,
    externalSlotProps: oe,
    externalForwardedProps: U,
    getSlotProps: H,
    additionalProps: {
      ref: n,
      as: b
    },
    ownerState: q,
    className: te(m, oe == null ? void 0 : oe.className, ee == null ? void 0 : ee.root, !q.open && q.exited && (ee == null ? void 0 : ee.hidden))
  }), $ = pn({
    elementType: re,
    externalSlotProps: se,
    additionalProps: p,
    getSlotProps: (ie) => I(x({}, ie, {
      onClick: (de) => {
        W && W(de), ie != null && ie.onClick && ie.onClick(de);
      }
    })),
    className: te(se == null ? void 0 : se.className, p == null ? void 0 : p.className, ee == null ? void 0 : ee.backdrop),
    ownerState: q
  });
  return !B && !z && (!X || Q) ? null : /* @__PURE__ */ y.jsx(Mv, {
    ref: k,
    container: u,
    disablePortal: w,
    children: /* @__PURE__ */ y.jsxs(ne, x({}, le, {
      children: [!M && f ? /* @__PURE__ */ y.jsx(re, x({}, $)) : null, /* @__PURE__ */ y.jsx(To, {
        disableEnforceFocus: C,
        disableAutoFocus: T,
        disableRestoreFocus: S,
        isEnabled: D,
        open: z,
        children: /* @__PURE__ */ v.cloneElement(h, J)
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (wd.propTypes = {
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
  BackdropComponent: o.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: o.object,
  /**
   * A single child content element.
   */
  children: Ir.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: o.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Backdrop: o.elementType,
    Root: o.elementType
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
  componentsProps: o.shape({
    backdrop: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
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
  container: o.oneOfType([zn, o.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: o.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: o.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: o.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: o.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: o.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: o.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: o.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: o.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: o.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: o.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: o.shape({
    backdrop: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    backdrop: o.elementType,
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const Pd = wd, Rx = ["addEndListener", "appear", "children", "container", "direction", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function Ox(e, t, n) {
  const r = t.getBoundingClientRect(), s = n && n.getBoundingClientRect(), i = Vt(t);
  let a;
  if (t.fakeTransform)
    a = t.fakeTransform;
  else {
    const d = i.getComputedStyle(t);
    a = d.getPropertyValue("-webkit-transform") || d.getPropertyValue("transform");
  }
  let l = 0, c = 0;
  if (a && a !== "none" && typeof a == "string") {
    const d = a.split("(")[1].split(")")[0].split(",");
    l = parseInt(d[4], 10), c = parseInt(d[5], 10);
  }
  return e === "left" ? s ? `translateX(${s.right + l - r.left}px)` : `translateX(${i.innerWidth + l - r.left}px)` : e === "right" ? s ? `translateX(-${r.right - s.left - l}px)` : `translateX(-${r.left + r.width - l}px)` : e === "up" ? s ? `translateY(${s.bottom + c - r.top}px)` : `translateY(${i.innerHeight + c - r.top}px)` : s ? `translateY(-${r.top - s.top + r.height - c}px)` : `translateY(-${r.top + r.height - c}px)`;
}
function $d(e) {
  return typeof e == "function" ? e() : e;
}
function Hr(e, t, n) {
  const r = $d(n), s = Ox(e, t, r);
  s && (t.style.webkitTransform = s, t.style.transform = s);
}
const _d = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = bn(), s = {
    enter: r.transitions.easing.easeOut,
    exit: r.transitions.easing.sharp
  }, i = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: a,
    appear: l = !0,
    children: c,
    container: d,
    direction: f = "down",
    easing: p = s,
    in: m,
    onEnter: g,
    onEntered: h,
    onEntering: u,
    onExit: b,
    onExited: R,
    onExiting: P,
    style: T,
    timeout: C = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: E = Ui
  } = t, w = Z(t, Rx), S = v.useRef(null), N = Je(Yn(c), S, n), M = (I) => (K) => {
    I && (K === void 0 ? I(S.current) : I(S.current, K));
  }, B = M((I, K) => {
    Hr(f, I, d), Wi(I), g && g(I, K);
  }), W = M((I, K) => {
    const k = Vn({
      timeout: C,
      style: T,
      easing: p
    }, {
      mode: "enter"
    });
    I.style.webkitTransition = r.transitions.create("-webkit-transform", x({}, k)), I.style.transition = r.transitions.create("transform", x({}, k)), I.style.webkitTransform = "none", I.style.transform = "none", u && u(I, K);
  }), z = M(h), j = M(P), A = M((I) => {
    const K = Vn({
      timeout: C,
      style: T,
      easing: p
    }, {
      mode: "exit"
    });
    I.style.webkitTransition = r.transitions.create("-webkit-transform", K), I.style.transition = r.transitions.create("transform", K), Hr(f, I, d), b && b(I);
  }), U = M((I) => {
    I.style.webkitTransition = "", I.style.transition = "", R && R(I);
  }), F = (I) => {
    a && a(S.current, I);
  }, H = v.useCallback(() => {
    S.current && Hr(f, S.current, d);
  }, [f, d]);
  return v.useEffect(() => {
    if (m || f === "down" || f === "right")
      return;
    const I = wi(() => {
      S.current && Hr(f, S.current, d);
    }), K = Vt(S.current);
    return K.addEventListener("resize", I), () => {
      I.clear(), K.removeEventListener("resize", I);
    };
  }, [f, m, d]), v.useEffect(() => {
    m || H();
  }, [m, H]), /* @__PURE__ */ y.jsx(E, x({
    nodeRef: S,
    onEnter: B,
    onEntered: z,
    onEntering: W,
    onExit: A,
    onExited: U,
    onExiting: j,
    addEndListener: F,
    appear: l,
    in: m,
    timeout: C
  }, w, {
    children: (I, K) => /* @__PURE__ */ v.cloneElement(c, x({
      ref: N,
      style: x({
        visibility: I === "exited" && !m ? "hidden" : void 0
      }, T, c.props.style)
    }, K))
  }));
});
process.env.NODE_ENV !== "production" && (_d.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: o.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: o.bool,
  /**
   * A single child content element.
   */
  children: Ir.isRequired,
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the container the Slide is transitioning from.
   */
  container: Lt(o.oneOfType([zn, o.func]), (e) => {
    if (e.open) {
      const t = $d(e.container);
      if (t && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
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
  direction: o.oneOf(["down", "left", "right", "up"]),
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   * @default {
   *   enter: theme.transitions.easing.easeOut,
   *   exit: theme.transitions.easing.sharp,
   * }
   */
  easing: o.oneOfType([o.shape({
    enter: o.string,
    exit: o.string
  }), o.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: o.bool,
  /**
   * @ignore
   */
  onEnter: o.func,
  /**
   * @ignore
   */
  onEntered: o.func,
  /**
   * @ignore
   */
  onEntering: o.func,
  /**
   * @ignore
   */
  onExit: o.func,
  /**
   * @ignore
   */
  onExited: o.func,
  /**
   * @ignore
   */
  onExiting: o.func,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: o.oneOfType([o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
const Sx = _d;
function wx(e) {
  return pe("MuiDrawer", e);
}
he("MuiDrawer", ["root", "docked", "paper", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);
const Px = ["BackdropProps"], $x = ["anchor", "BackdropProps", "children", "className", "elevation", "hideBackdrop", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "TransitionComponent", "transitionDuration", "variant"], Nd = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, (n.variant === "permanent" || n.variant === "persistent") && t.docked, t.modal];
}, _x = (e) => {
  const {
    classes: t,
    anchor: n,
    variant: r
  } = e, s = {
    root: ["root"],
    docked: [(r === "permanent" || r === "persistent") && "docked"],
    modal: ["modal"],
    paper: ["paper", `paperAnchor${V(n)}`, r !== "temporary" && `paperAnchorDocked${V(n)}`]
  };
  return be(s, wx, t);
}, Nx = Y(Pd, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver: Nd
})(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.drawer
})), Yl = Y("div", {
  shouldForwardProp: Et,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: !1,
  overridesResolver: Nd
})({
  flex: "0 0 auto"
}), Ix = Y(Ko, {
  name: "MuiDrawer",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`paperAnchor${V(n.anchor)}`], n.variant !== "temporary" && t[`paperAnchorDocked${V(n.anchor)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => x({
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
})), Id = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function kx(e) {
  return ["left", "right"].indexOf(e) !== -1;
}
function jx({
  direction: e
}, t) {
  return e === "rtl" && kx(t) ? Id[t] : t;
}
const kd = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiDrawer"
  }), s = bn(), i = $i(), a = {
    enter: s.transitions.duration.enteringScreen,
    exit: s.transitions.duration.leavingScreen
  }, {
    anchor: l = "left",
    BackdropProps: c,
    children: d,
    className: f,
    elevation: p = 16,
    hideBackdrop: m = !1,
    ModalProps: {
      BackdropProps: g
    } = {},
    onClose: h,
    open: u = !1,
    PaperProps: b = {},
    SlideProps: R,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: P = Sx,
    transitionDuration: T = a,
    variant: C = "temporary"
  } = r, E = Z(r.ModalProps, Px), w = Z(r, $x), S = v.useRef(!1);
  v.useEffect(() => {
    S.current = !0;
  }, []);
  const N = jx({
    direction: i ? "rtl" : "ltr"
  }, l), B = x({}, r, {
    anchor: l,
    elevation: p,
    open: u,
    variant: C
  }, w), W = _x(B), z = /* @__PURE__ */ y.jsx(Ix, x({
    elevation: C === "temporary" ? p : 0,
    square: !0
  }, b, {
    className: te(W.paper, b.className),
    ownerState: B,
    children: d
  }));
  if (C === "permanent")
    return /* @__PURE__ */ y.jsx(Yl, x({
      className: te(W.root, W.docked, f),
      ownerState: B,
      ref: n
    }, w, {
      children: z
    }));
  const j = /* @__PURE__ */ y.jsx(P, x({
    in: u,
    direction: Id[N],
    timeout: T,
    appear: S.current
  }, R, {
    children: z
  }));
  return C === "persistent" ? /* @__PURE__ */ y.jsx(Yl, x({
    className: te(W.root, W.docked, f),
    ownerState: B,
    ref: n
  }, w, {
    children: j
  })) : /* @__PURE__ */ y.jsx(Nx, x({
    BackdropProps: x({}, c, g, {
      transitionDuration: T
    }),
    className: te(W.root, W.modal, f),
    open: u,
    ownerState: B,
    onClose: h,
    hideBackdrop: m,
    ref: n
  }, w, E, {
    children: j
  }));
});
process.env.NODE_ENV !== "production" && (kd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Side from which the drawer will appear.
   * @default 'left'
   */
  anchor: o.oneOf(["bottom", "left", "right", "top"]),
  /**
   * @ignore
   */
  BackdropProps: o.object,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The elevation of the drawer.
   * @default 16
   */
  elevation: Mn,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: o.bool,
  /**
   * Props applied to the [`Modal`](/material-ui/api/modal/) element.
   * @default {}
   */
  ModalProps: o.object,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: o.func,
  /**
   * If `true`, the component is shown.
   * @default false
   */
  open: o.bool,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   * @default {}
   */
  PaperProps: o.object,
  /**
   * Props applied to the [`Slide`](/material-ui/api/slide/) element.
   */
  SlideProps: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: o.oneOfType([o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })]),
  /**
   * The variant to use.
   * @default 'temporary'
   */
  variant: o.oneOf(["permanent", "persistent", "temporary"])
});
const Gl = kd, Ax = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"], Mx = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, s = be({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, o0, t);
  return x({}, t, s);
}, Dx = Y(Jo, {
  shouldForwardProp: (e) => Et(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Qo(e, t), !n.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n;
  const r = e.palette.mode === "light", s = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", i = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", a = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", l = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return x({
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create("background-color", {
      duration: e.transitions.duration.shorter,
      easing: e.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : a,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i
      }
    },
    [`&.${rn.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i
    },
    [`&.${rn.disabled}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : l
    }
  }, !t.disableUnderline && {
    "&::after": {
      borderBottom: `2px solid ${(n = (e.vars || e).palette[t.color || "primary"]) == null ? void 0 : n.main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: e.transitions.create("transform", {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${rn.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${rn.error}`]: {
      "&::before, &::after": {
        borderBottomColor: (e.vars || e).palette.error.main
      }
    },
    "&::before": {
      borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : s}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: e.transitions.create("border-bottom-color", {
        duration: e.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${rn.disabled}, .${rn.error}):before`]: {
      borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
    },
    [`&.${rn.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  }, t.startAdornment && {
    paddingLeft: 12
  }, t.endAdornment && {
    paddingRight: 12
  }, t.multiline && x({
    padding: "25px 12px 8px"
  }, t.size === "small" && {
    paddingTop: 21,
    paddingBottom: 4
  }, t.hiddenLabel && {
    paddingTop: 16,
    paddingBottom: 17
  }, t.hiddenLabel && t.size === "small" && {
    paddingTop: 8,
    paddingBottom: 9
  }));
}), Fx = Y(Zo, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: Xo
})(({
  theme: e,
  ownerState: t
}) => x({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12
}, !e.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
    caretColor: e.palette.mode === "light" ? null : "#fff",
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  }
}, e.vars && {
  "&:-webkit-autofill": {
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  },
  [e.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, t.size === "small" && {
  paddingTop: 21,
  paddingBottom: 4
}, t.hiddenLabel && {
  paddingTop: 16,
  paddingBottom: 17
}, t.startAdornment && {
  paddingLeft: 0
}, t.endAdornment && {
  paddingRight: 0
}, t.hiddenLabel && t.size === "small" && {
  paddingTop: 8,
  paddingBottom: 9
}, t.multiline && {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0
})), Ki = /* @__PURE__ */ v.forwardRef(function(t, n) {
  var r, s, i, a;
  const l = ye({
    props: t,
    name: "MuiFilledInput"
  }), {
    components: c = {},
    componentsProps: d,
    fullWidth: f = !1,
    // declare here to prevent spreading to DOM
    inputComponent: p = "input",
    multiline: m = !1,
    slotProps: g,
    slots: h = {},
    type: u = "text"
  } = l, b = Z(l, Ax), R = x({}, l, {
    fullWidth: f,
    inputComponent: p,
    multiline: m,
    type: u
  }), P = Mx(l), T = {
    root: {
      ownerState: R
    },
    input: {
      ownerState: R
    }
  }, C = g ?? d ? vt(T, g ?? d) : T, E = (r = (s = h.root) != null ? s : c.Root) != null ? r : Dx, w = (i = (a = h.input) != null ? a : c.Input) != null ? i : Fx;
  return /* @__PURE__ */ y.jsx(Hi, x({
    slots: {
      root: E,
      input: w
    },
    componentsProps: C,
    fullWidth: f,
    inputComponent: p,
    multiline: m,
    ref: n,
    type: u
  }, b, {
    classes: P
  }));
});
process.env.NODE_ENV !== "production" && (Ki.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Input: o.elementType,
    Root: o.elementType
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
  componentsProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: o.bool,
  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: o.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: o.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: o.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: o.bool,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: o.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Wt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: o.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any
});
Ki.muiName = "Input";
const jd = Ki;
function Lx(e) {
  return pe("MuiFormControl", e);
}
he("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const Bx = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"], zx = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, s = {
    root: ["root", n !== "none" && `margin${V(n)}`, r && "fullWidth"]
  };
  return be(s, Lx, t);
}, Ux = Y("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => x({}, t.root, t[`margin${V(e.margin)}`], e.fullWidth && t.fullWidth)
})(({
  ownerState: e
}) => x({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top"
}, e.margin === "normal" && {
  marginTop: 16,
  marginBottom: 8
}, e.margin === "dense" && {
  marginTop: 8,
  marginBottom: 4
}, e.fullWidth && {
  width: "100%"
})), Ad = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiFormControl"
  }), {
    children: s,
    className: i,
    color: a = "primary",
    component: l = "div",
    disabled: c = !1,
    error: d = !1,
    focused: f,
    fullWidth: p = !1,
    hiddenLabel: m = !1,
    margin: g = "none",
    required: h = !1,
    size: u = "medium",
    variant: b = "outlined"
  } = r, R = Z(r, Bx), P = x({}, r, {
    color: a,
    component: l,
    disabled: c,
    error: d,
    fullWidth: p,
    hiddenLabel: m,
    margin: g,
    required: h,
    size: u,
    variant: b
  }), T = zx(P), [C, E] = v.useState(() => {
    let j = !1;
    return s && v.Children.forEach(s, (A) => {
      if (!mr(A, ["Input", "Select"]))
        return;
      const U = mr(A, ["Select"]) ? A.props.input : A;
      U && Yv(U.props) && (j = !0);
    }), j;
  }), [w, S] = v.useState(() => {
    let j = !1;
    return s && v.Children.forEach(s, (A) => {
      mr(A, ["Input", "Select"]) && (Co(A.props, !0) || Co(A.props.inputProps, !0)) && (j = !0);
    }), j;
  }), [N, M] = v.useState(!1);
  c && N && M(!1);
  const B = f !== void 0 && !c ? f : N;
  let W;
  if (process.env.NODE_ENV !== "production") {
    const j = v.useRef(!1);
    W = () => (j.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), j.current = !0, () => {
      j.current = !1;
    });
  }
  const z = v.useMemo(() => ({
    adornedStart: C,
    setAdornedStart: E,
    color: a,
    disabled: c,
    error: d,
    filled: w,
    focused: B,
    fullWidth: p,
    hiddenLabel: m,
    size: u,
    onBlur: () => {
      M(!1);
    },
    onEmpty: () => {
      S(!1);
    },
    onFilled: () => {
      S(!0);
    },
    onFocus: () => {
      M(!0);
    },
    registerEffect: W,
    required: h,
    variant: b
  }), [C, a, c, d, w, B, p, m, W, h, u, b]);
  return /* @__PURE__ */ y.jsx(Go.Provider, {
    value: z,
    children: /* @__PURE__ */ y.jsx(Ux, x({
      as: l,
      ownerState: P,
      className: te(T.root, i),
      ref: n
    }, R, {
      children: s
    }))
  });
});
process.env.NODE_ENV !== "production" && (Ad.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: o.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: o.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: o.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: o.oneOf(["dense", "none", "normal"]),
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: o.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
const Vx = Ad;
function qx(e) {
  return pe("MuiFormHelperText", e);
}
const Wx = he("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]), Ql = Wx;
var Xl;
const Hx = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"], Kx = (e) => {
  const {
    classes: t,
    contained: n,
    size: r,
    disabled: s,
    error: i,
    filled: a,
    focused: l,
    required: c
  } = e, d = {
    root: ["root", s && "disabled", i && "error", r && `size${V(r)}`, n && "contained", l && "focused", a && "filled", c && "required"]
  };
  return be(d, qx, t);
}, Yx = Y("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${V(n.size)}`], n.contained && t.contained, n.filled && t.filled];
  }
})(({
  theme: e,
  ownerState: t
}) => x({
  color: (e.vars || e).palette.text.secondary
}, e.typography.caption, {
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${Ql.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Ql.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}, t.size === "small" && {
  marginTop: 4
}, t.contained && {
  marginLeft: 14,
  marginRight: 14
})), Md = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: s,
    className: i,
    component: a = "p"
  } = r, l = Z(r, Hx), c = gn(), d = Xn({
    props: r,
    muiFormControl: c,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), f = x({}, r, {
    component: a,
    contained: d.variant === "filled" || d.variant === "outlined",
    variant: d.variant,
    size: d.size,
    disabled: d.disabled,
    error: d.error,
    filled: d.filled,
    focused: d.focused,
    required: d.required
  }), p = Kx(f);
  return /* @__PURE__ */ y.jsx(Yx, x({
    as: a,
    ownerState: f,
    className: te(p.root, i),
    ref: n
  }, l, {
    children: s === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      Xl || (Xl = /* @__PURE__ */ y.jsx("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : s
  }));
});
process.env.NODE_ENV !== "production" && (Md.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: o.bool,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: o.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: o.bool,
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: o.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: o.oneOf(["dense"]),
  /**
   * If `true`, the helper text should use required classes key.
   */
  required: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   */
  variant: o.oneOfType([o.oneOf(["filled", "outlined", "standard"]), o.string])
});
const Gx = Md;
function Qx(e) {
  return pe("MuiFormLabel", e);
}
const Xx = he("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), br = Xx, Jx = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"], Zx = (e) => {
  const {
    classes: t,
    color: n,
    focused: r,
    disabled: s,
    error: i,
    filled: a,
    required: l
  } = e, c = {
    root: ["root", `color${V(n)}`, s && "disabled", i && "error", a && "filled", r && "focused", l && "required"],
    asterisk: ["asterisk", i && "error"]
  };
  return be(c, Qx, t);
}, eE = Y("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => x({}, t.root, e.color === "secondary" && t.colorSecondary, e.filled && t.filled)
})(({
  theme: e,
  ownerState: t
}) => x({
  color: (e.vars || e).palette.text.secondary
}, e.typography.body1, {
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  [`&.${br.focused}`]: {
    color: (e.vars || e).palette[t.color].main
  },
  [`&.${br.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${br.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), tE = Y("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(({
  theme: e
}) => ({
  [`&.${br.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), Dd = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: s,
    className: i,
    component: a = "label"
  } = r, l = Z(r, Jx), c = gn(), d = Xn({
    props: r,
    muiFormControl: c,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), f = x({}, r, {
    color: d.color || "primary",
    component: a,
    disabled: d.disabled,
    error: d.error,
    filled: d.filled,
    focused: d.focused,
    required: d.required
  }), p = Zx(f);
  return /* @__PURE__ */ y.jsxs(eE, x({
    as: a,
    ownerState: f,
    className: te(p.root, i),
    ref: n
  }, l, {
    children: [s, d.required && /* @__PURE__ */ y.jsxs(tE, {
      ownerState: f,
      "aria-hidden": !0,
      className: p.asterisk,
      children: [" ", "*"]
    })]
  }));
});
process.env.NODE_ENV !== "production" && (Dd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: o.oneOfType([o.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: o.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: o.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: o.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: o.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const nE = Dd, Fd = /* @__PURE__ */ v.createContext();
process.env.NODE_ENV !== "production" && (Fd.displayName = "GridContext");
const Jl = Fd;
function rE(e) {
  return pe("MuiGrid", e);
}
const oE = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], sE = ["column-reverse", "column", "row-reverse", "row"], iE = ["nowrap", "wrap-reverse", "wrap"], ar = ["auto", !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], aE = he("MuiGrid", [
  "root",
  "container",
  "item",
  "zeroMinWidth",
  // spacings
  ...oE.map((e) => `spacing-xs-${e}`),
  // direction values
  ...sE.map((e) => `direction-xs-${e}`),
  // wrap values
  ...iE.map((e) => `wrap-xs-${e}`),
  // grid sizes for all breakpoints
  ...ar.map((e) => `grid-xs-${e}`),
  ...ar.map((e) => `grid-sm-${e}`),
  ...ar.map((e) => `grid-md-${e}`),
  ...ar.map((e) => `grid-lg-${e}`),
  ...ar.map((e) => `grid-xl-${e}`)
]), Sr = aE, lE = ["className", "columns", "columnSpacing", "component", "container", "direction", "item", "rowSpacing", "spacing", "wrap", "zeroMinWidth"];
function Dn(e) {
  const t = parseFloat(e);
  return `${t}${String(e).replace(String(t), "") || "px"}`;
}
function cE({
  theme: e,
  ownerState: t
}) {
  let n;
  return e.breakpoints.keys.reduce((r, s) => {
    let i = {};
    if (t[s] && (n = t[s]), !n)
      return r;
    if (n === !0)
      i = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: "100%"
      };
    else if (n === "auto")
      i = {
        flexBasis: "auto",
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: "none",
        width: "auto"
      };
    else {
      const a = $o({
        values: t.columns,
        breakpoints: e.breakpoints.values
      }), l = typeof a == "object" ? a[s] : a;
      if (l == null)
        return r;
      const c = `${Math.round(n / l * 1e8) / 1e6}%`;
      let d = {};
      if (t.container && t.item && t.columnSpacing !== 0) {
        const f = e.spacing(t.columnSpacing);
        if (f !== "0px") {
          const p = `calc(${c} + ${Dn(f)})`;
          d = {
            flexBasis: p,
            maxWidth: p
          };
        }
      }
      i = x({
        flexBasis: c,
        flexGrow: 0,
        maxWidth: c
      }, d);
    }
    return e.breakpoints.values[s] === 0 ? Object.assign(r, i) : r[e.breakpoints.up(s)] = i, r;
  }, {});
}
function uE({
  theme: e,
  ownerState: t
}) {
  const n = $o({
    values: t.direction,
    breakpoints: e.breakpoints.values
  });
  return Pt({
    theme: e
  }, n, (r) => {
    const s = {
      flexDirection: r
    };
    return r.indexOf("column") === 0 && (s[`& > .${Sr.item}`] = {
      maxWidth: "none"
    }), s;
  });
}
function Ld({
  breakpoints: e,
  values: t
}) {
  let n = "";
  Object.keys(t).forEach((s) => {
    n === "" && t[s] !== 0 && (n = s);
  });
  const r = Object.keys(e).sort((s, i) => e[s] - e[i]);
  return r.slice(0, r.indexOf(n));
}
function dE({
  theme: e,
  ownerState: t
}) {
  const {
    container: n,
    rowSpacing: r
  } = t;
  let s = {};
  if (n && r !== 0) {
    const i = $o({
      values: r,
      breakpoints: e.breakpoints.values
    });
    let a;
    typeof i == "object" && (a = Ld({
      breakpoints: e.breakpoints.values,
      values: i
    })), s = Pt({
      theme: e
    }, i, (l, c) => {
      var d;
      const f = e.spacing(l);
      return f !== "0px" ? {
        marginTop: `-${Dn(f)}`,
        [`& > .${Sr.item}`]: {
          paddingTop: Dn(f)
        }
      } : (d = a) != null && d.includes(c) ? {} : {
        marginTop: 0,
        [`& > .${Sr.item}`]: {
          paddingTop: 0
        }
      };
    });
  }
  return s;
}
function fE({
  theme: e,
  ownerState: t
}) {
  const {
    container: n,
    columnSpacing: r
  } = t;
  let s = {};
  if (n && r !== 0) {
    const i = $o({
      values: r,
      breakpoints: e.breakpoints.values
    });
    let a;
    typeof i == "object" && (a = Ld({
      breakpoints: e.breakpoints.values,
      values: i
    })), s = Pt({
      theme: e
    }, i, (l, c) => {
      var d;
      const f = e.spacing(l);
      return f !== "0px" ? {
        width: `calc(100% + ${Dn(f)})`,
        marginLeft: `-${Dn(f)}`,
        [`& > .${Sr.item}`]: {
          paddingLeft: Dn(f)
        }
      } : (d = a) != null && d.includes(c) ? {} : {
        width: "100%",
        marginLeft: 0,
        [`& > .${Sr.item}`]: {
          paddingLeft: 0
        }
      };
    });
  }
  return s;
}
function pE(e, t, n = {}) {
  if (!e || e <= 0)
    return [];
  if (typeof e == "string" && !Number.isNaN(Number(e)) || typeof e == "number")
    return [n[`spacing-xs-${String(e)}`]];
  const r = [];
  return t.forEach((s) => {
    const i = e[s];
    Number(i) > 0 && r.push(n[`spacing-${s}-${String(i)}`]);
  }), r;
}
const hE = Y("div", {
  name: "MuiGrid",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      container: r,
      direction: s,
      item: i,
      spacing: a,
      wrap: l,
      zeroMinWidth: c,
      breakpoints: d
    } = n;
    let f = [];
    r && (f = pE(a, d, t));
    const p = [];
    return d.forEach((m) => {
      const g = n[m];
      g && p.push(t[`grid-${m}-${String(g)}`]);
    }), [t.root, r && t.container, i && t.item, c && t.zeroMinWidth, ...f, s !== "row" && t[`direction-xs-${String(s)}`], l !== "wrap" && t[`wrap-xs-${String(l)}`], ...p];
  }
})(({
  ownerState: e
}) => x({
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
}), uE, dE, fE, cE);
function mE(e, t) {
  if (!e || e <= 0)
    return [];
  if (typeof e == "string" && !Number.isNaN(Number(e)) || typeof e == "number")
    return [`spacing-xs-${String(e)}`];
  const n = [];
  return t.forEach((r) => {
    const s = e[r];
    if (Number(s) > 0) {
      const i = `spacing-${r}-${String(s)}`;
      n.push(i);
    }
  }), n;
}
const yE = (e) => {
  const {
    classes: t,
    container: n,
    direction: r,
    item: s,
    spacing: i,
    wrap: a,
    zeroMinWidth: l,
    breakpoints: c
  } = e;
  let d = [];
  n && (d = mE(i, c));
  const f = [];
  c.forEach((m) => {
    const g = e[m];
    g && f.push(`grid-${m}-${String(g)}`);
  });
  const p = {
    root: ["root", n && "container", s && "item", l && "zeroMinWidth", ...d, r !== "row" && `direction-xs-${String(r)}`, a !== "wrap" && `wrap-xs-${String(a)}`, ...f]
  };
  return be(p, rE, t);
}, gr = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiGrid"
  }), {
    breakpoints: s
  } = bn(), i = Lo(r), {
    className: a,
    columns: l,
    columnSpacing: c,
    component: d = "div",
    container: f = !1,
    direction: p = "row",
    item: m = !1,
    rowSpacing: g,
    spacing: h = 0,
    wrap: u = "wrap",
    zeroMinWidth: b = !1
  } = i, R = Z(i, lE), P = g || h, T = c || h, C = v.useContext(Jl), E = f ? l || 12 : C, w = {}, S = x({}, R);
  s.keys.forEach((B) => {
    R[B] != null && (w[B] = R[B], delete S[B]);
  });
  const N = x({}, i, {
    columns: E,
    container: f,
    direction: p,
    item: m,
    rowSpacing: P,
    columnSpacing: T,
    wrap: u,
    zeroMinWidth: b,
    spacing: h
  }, w, {
    breakpoints: s.keys
  }), M = yE(N);
  return /* @__PURE__ */ y.jsx(Jl.Provider, {
    value: E,
    children: /* @__PURE__ */ y.jsx(hE, x({
      ownerState: N,
      className: te(M.root, a),
      as: d,
      ref: n
    }, S))
  });
});
process.env.NODE_ENV !== "production" && (gr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The number of columns.
   * @default 12
   */
  columns: o.oneOfType([o.arrayOf(o.number), o.number, o.object]),
  /**
   * Defines the horizontal space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  columnSpacing: o.oneOfType([o.arrayOf(o.oneOfType([o.number, o.string])), o.number, o.object, o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  container: o.bool,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'row'
   */
  direction: o.oneOfType([o.oneOf(["column-reverse", "column", "row-reverse", "row"]), o.arrayOf(o.oneOf(["column-reverse", "column", "row-reverse", "row"])), o.object]),
  /**
   * If `true`, the component will have the flex *item* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  item: o.bool,
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `lg` breakpoint and wider screens if not overridden.
   * @default false
   */
  lg: o.oneOfType([o.oneOf(["auto"]), o.number, o.bool]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `md` breakpoint and wider screens if not overridden.
   * @default false
   */
  md: o.oneOfType([o.oneOf(["auto"]), o.number, o.bool]),
  /**
   * Defines the vertical space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  rowSpacing: o.oneOfType([o.arrayOf(o.oneOfType([o.number, o.string])), o.number, o.object, o.string]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `sm` breakpoint and wider screens if not overridden.
   * @default false
   */
  sm: o.oneOfType([o.oneOf(["auto"]), o.number, o.bool]),
  /**
   * Defines the space between the type `item` components.
   * It can only be used on a type `container` component.
   * @default 0
   */
  spacing: o.oneOfType([o.arrayOf(o.oneOfType([o.number, o.string])), o.number, o.object, o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   * @default 'wrap'
   */
  wrap: o.oneOf(["nowrap", "wrap-reverse", "wrap"]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `xl` breakpoint and wider screens if not overridden.
   * @default false
   */
  xl: o.oneOfType([o.oneOf(["auto"]), o.number, o.bool]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for all the screen sizes with the lowest priority.
   * @default false
   */
  xs: o.oneOfType([o.oneOf(["auto"]), o.number, o.bool]),
  /**
   * If `true`, it sets `min-width: 0` on the item.
   * Refer to the limitations section of the documentation to better understand the use case.
   * @default false
   */
  zeroMinWidth: o.bool
});
if (process.env.NODE_ENV !== "production") {
  const e = ay("Grid", gr);
  gr["propTypes"] = x({}, gr.propTypes, {
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
const Tt = gr, bE = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function si(e) {
  return `scale(${e}, ${e ** 2})`;
}
const gE = {
  entering: {
    opacity: 1,
    transform: si(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, $s = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Yi = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: s = !0,
    children: i,
    easing: a,
    in: l,
    onEnter: c,
    onEntered: d,
    onEntering: f,
    onExit: p,
    onExited: m,
    onExiting: g,
    style: h,
    timeout: u = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: b = Ui
  } = t, R = Z(t, bE), P = xu(), T = v.useRef(), C = bn(), E = v.useRef(null), w = Je(E, Yn(i), n), S = (U) => (F) => {
    if (U) {
      const H = E.current;
      F === void 0 ? U(H) : U(H, F);
    }
  }, N = S(f), M = S((U, F) => {
    Wi(U);
    const {
      duration: H,
      delay: I,
      easing: K
    } = Vn({
      style: h,
      timeout: u,
      easing: a
    }, {
      mode: "enter"
    });
    let k;
    u === "auto" ? (k = C.transitions.getAutoHeightDuration(U.clientHeight), T.current = k) : k = H, U.style.transition = [C.transitions.create("opacity", {
      duration: k,
      delay: I
    }), C.transitions.create("transform", {
      duration: $s ? k : k * 0.666,
      delay: I,
      easing: K
    })].join(","), c && c(U, F);
  }), B = S(d), W = S(g), z = S((U) => {
    const {
      duration: F,
      delay: H,
      easing: I
    } = Vn({
      style: h,
      timeout: u,
      easing: a
    }, {
      mode: "exit"
    });
    let K;
    u === "auto" ? (K = C.transitions.getAutoHeightDuration(U.clientHeight), T.current = K) : K = F, U.style.transition = [C.transitions.create("opacity", {
      duration: K,
      delay: H
    }), C.transitions.create("transform", {
      duration: $s ? K : K * 0.666,
      delay: $s ? H : H || K * 0.333,
      easing: I
    })].join(","), U.style.opacity = 0, U.style.transform = si(0.75), p && p(U);
  }), j = S(m), A = (U) => {
    u === "auto" && P.start(T.current || 0, U), r && r(E.current, U);
  };
  return /* @__PURE__ */ y.jsx(b, x({
    appear: s,
    in: l,
    nodeRef: E,
    onEnter: M,
    onEntered: B,
    onEntering: N,
    onExit: z,
    onExited: j,
    onExiting: W,
    addEndListener: A,
    timeout: u === "auto" ? null : u
  }, R, {
    children: (U, F) => /* @__PURE__ */ v.cloneElement(i, x({
      style: x({
        opacity: 0,
        transform: si(0.75),
        visibility: U === "exited" && !l ? "hidden" : void 0
      }, gE[U], h, i.props.style),
      ref: w
    }, F))
  }));
});
process.env.NODE_ENV !== "production" && (Yi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: o.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: o.bool,
  /**
   * A single child content element.
   */
  children: Ir.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: o.oneOfType([o.shape({
    enter: o.string,
    exit: o.string
  }), o.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: o.bool,
  /**
   * @ignore
   */
  onEnter: o.func,
  /**
   * @ignore
   */
  onEntered: o.func,
  /**
   * @ignore
   */
  onEntering: o.func,
  /**
   * @ignore
   */
  onExit: o.func,
  /**
   * @ignore
   */
  onExited: o.func,
  /**
   * @ignore
   */
  onExiting: o.func,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: o.oneOfType([o.oneOf(["auto"]), o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
Yi.muiSupportAuto = !0;
const vE = Yi, xE = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"], EE = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, s = be({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, e0, t);
  return x({}, t, s);
}, CE = Y(Jo, {
  shouldForwardProp: (e) => Et(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Qo(e, t), !n.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  let r = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), x({
    position: "relative"
  }, t.formControl && {
    "label + &": {
      marginTop: 16
    }
  }, !t.disableUnderline && {
    "&::after": {
      borderBottom: `2px solid ${(e.vars || e).palette[t.color].main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: e.transitions.create("transform", {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${ir.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${ir.error}`]: {
      "&::before, &::after": {
        borderBottomColor: (e.vars || e).palette.error.main
      }
    },
    "&::before": {
      borderBottom: `1px solid ${r}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: e.transitions.create("border-bottom-color", {
        duration: e.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${ir.disabled}, .${ir.error}):before`]: {
      borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        borderBottom: `1px solid ${r}`
      }
    },
    [`&.${ir.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  });
}), TE = Y(Zo, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: Xo
})({}), Gi = /* @__PURE__ */ v.forwardRef(function(t, n) {
  var r, s, i, a;
  const l = ye({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: c,
    components: d = {},
    componentsProps: f,
    fullWidth: p = !1,
    inputComponent: m = "input",
    multiline: g = !1,
    slotProps: h,
    slots: u = {},
    type: b = "text"
  } = l, R = Z(l, xE), P = EE(l), C = {
    root: {
      ownerState: {
        disableUnderline: c
      }
    }
  }, E = h ?? f ? vt(h ?? f, C) : C, w = (r = (s = u.root) != null ? s : d.Root) != null ? r : CE, S = (i = (a = u.input) != null ? a : d.Input) != null ? i : TE;
  return /* @__PURE__ */ y.jsx(Hi, x({
    slots: {
      root: w,
      input: S
    },
    slotProps: E,
    fullWidth: p,
    inputComponent: m,
    multiline: g,
    ref: n,
    type: b
  }, R, {
    classes: P
  }));
});
process.env.NODE_ENV !== "production" && (Gi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Input: o.elementType,
    Root: o.elementType
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
  componentsProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: o.bool,
  /**
   * If `true`, the `input` will not have an underline.
   */
  disableUnderline: o.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: o.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: o.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: o.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Wt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: o.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any
});
Gi.muiName = "Input";
const Bd = Gi;
function RE(e) {
  return pe("MuiInputAdornment", e);
}
const OE = he("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]), Zl = OE;
var ec;
const SE = ["children", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"], wE = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, t[`position${V(n.position)}`], n.disablePointerEvents === !0 && t.disablePointerEvents, t[n.variant]];
}, PE = (e) => {
  const {
    classes: t,
    disablePointerEvents: n,
    hiddenLabel: r,
    position: s,
    size: i,
    variant: a
  } = e, l = {
    root: ["root", n && "disablePointerEvents", s && `position${V(s)}`, a, r && "hiddenLabel", i && `size${V(i)}`]
  };
  return be(l, RE, t);
}, $E = Y("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver: wE
})(({
  theme: e,
  ownerState: t
}) => x({
  display: "flex",
  height: "0.01em",
  // Fix IE11 flexbox alignment. To remove at some point.
  maxHeight: "2em",
  alignItems: "center",
  whiteSpace: "nowrap",
  color: (e.vars || e).palette.action.active
}, t.variant === "filled" && {
  // Styles applied to the root element if `variant="filled"`.
  [`&.${Zl.positionStart}&:not(.${Zl.hiddenLabel})`]: {
    marginTop: 16
  }
}, t.position === "start" && {
  // Styles applied to the root element if `position="start"`.
  marginRight: 8
}, t.position === "end" && {
  // Styles applied to the root element if `position="end"`.
  marginLeft: 8
}, t.disablePointerEvents === !0 && {
  // Styles applied to the root element if `disablePointerEvents={true}`.
  pointerEvents: "none"
})), zd = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiInputAdornment"
  }), {
    children: s,
    className: i,
    component: a = "div",
    disablePointerEvents: l = !1,
    disableTypography: c = !1,
    position: d,
    variant: f
  } = r, p = Z(r, SE), m = gn() || {};
  let g = f;
  f && m.variant && process.env.NODE_ENV !== "production" && f === m.variant && console.error("MUI: The `InputAdornment` variant infers the variant prop you do not have to provide one."), m && !g && (g = m.variant);
  const h = x({}, r, {
    hiddenLabel: m.hiddenLabel,
    size: m.size,
    disablePointerEvents: l,
    position: d,
    variant: g
  }), u = PE(h);
  return /* @__PURE__ */ y.jsx(Go.Provider, {
    value: null,
    children: /* @__PURE__ */ y.jsx($E, x({
      as: a,
      ownerState: h,
      className: te(u.root, i),
      ref: n
    }, p, {
      children: typeof s == "string" && !c ? /* @__PURE__ */ y.jsx(me, {
        color: "text.secondary",
        children: s
      }) : /* @__PURE__ */ y.jsxs(v.Fragment, {
        children: [d === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          ec || (ec = /* @__PURE__ */ y.jsx("span", {
            className: "notranslate",
            children: "​"
          }))
        ) : null, s]
      })
    }))
  });
});
process.env.NODE_ENV !== "production" && (zd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally an `IconButton` or string.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * Disable pointer events on the root.
   * This allows for the content of the adornment to focus the `input` on click.
   * @default false
   */
  disablePointerEvents: o.bool,
  /**
   * If children is a string then disable wrapping in a Typography component.
   * @default false
   */
  disableTypography: o.bool,
  /**
   * The position this adornment should appear relative to the `Input`.
   */
  position: o.oneOf(["end", "start"]).isRequired,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * Note: If you are using the `TextField` component or the `FormControl` component
   * you do not have to set this manually.
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
const _E = zd;
function NE(e) {
  return pe("MuiInputLabel", e);
}
he("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const IE = ["disableAnimation", "margin", "shrink", "variant", "className"], kE = (e) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: s,
    disableAnimation: i,
    variant: a,
    required: l
  } = e, c = {
    root: ["root", n && "formControl", !i && "animated", s && "shrink", r && r !== "normal" && `size${V(r)}`, a],
    asterisk: [l && "asterisk"]
  }, d = be(c, NE, t);
  return x({}, t, d);
}, jE = Y(nE, {
  shouldForwardProp: (e) => Et(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${br.asterisk}`]: t.asterisk
    }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, n.focused && t.focused, t[n.variant]];
  }
})(({
  theme: e,
  ownerState: t
}) => x({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%"
}, t.formControl && {
  position: "absolute",
  left: 0,
  top: 0,
  // slight alteration to spec spacing to match visual spec result
  transform: "translate(0, 20px) scale(1)"
}, t.size === "small" && {
  // Compensation for the `Input.inputSizeSmall` style.
  transform: "translate(0, 17px) scale(1)"
}, t.shrink && {
  transform: "translate(0, -1.5px) scale(0.75)",
  transformOrigin: "top left",
  maxWidth: "133%"
}, !t.disableAnimation && {
  transition: e.transitions.create(["color", "transform", "max-width"], {
    duration: e.transitions.duration.shorter,
    easing: e.transitions.easing.easeOut
  })
}, t.variant === "filled" && x({
  // Chrome's autofill feature gives the input field a yellow background.
  // Since the input field is behind the label in the HTML tree,
  // the input field is drawn last and hides the label with an opaque background color.
  // zIndex: 1 will raise the label above opaque background-colors of input.
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(12px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, t.size === "small" && {
  transform: "translate(12px, 13px) scale(1)"
}, t.shrink && x({
  userSelect: "none",
  pointerEvents: "auto",
  transform: "translate(12px, 7px) scale(0.75)",
  maxWidth: "calc(133% - 24px)"
}, t.size === "small" && {
  transform: "translate(12px, 4px) scale(0.75)"
})), t.variant === "outlined" && x({
  // see comment above on filled.zIndex
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(14px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, t.size === "small" && {
  transform: "translate(14px, 9px) scale(1)"
}, t.shrink && {
  userSelect: "none",
  pointerEvents: "auto",
  // Theoretically, we should have (8+5)*2/0.75 = 34px
  // but it feels a better when it bleeds a bit on the left, so 32px.
  maxWidth: "calc(133% - 32px)",
  transform: "translate(14px, -9px) scale(0.75)"
}))), Ud = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ye({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: s = !1,
    shrink: i,
    className: a
  } = r, l = Z(r, IE), c = gn();
  let d = i;
  typeof d > "u" && c && (d = c.filled || c.focused || c.adornedStart);
  const f = Xn({
    props: r,
    muiFormControl: c,
    states: ["size", "variant", "required", "focused"]
  }), p = x({}, r, {
    disableAnimation: s,
    formControl: c,
    shrink: d,
    size: f.size,
    variant: f.variant,
    required: f.required,
    focused: f.focused
  }), m = kE(p);
  return /* @__PURE__ */ y.jsx(jE, x({
    "data-shrink": d,
    ownerState: p,
    ref: n,
    className: te(m.root, a)
  }, l, {
    classes: m
  }));
});
process.env.NODE_ENV !== "production" && (Ud.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: o.oneOfType([o.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), o.string]),
  /**
   * If `true`, the transition animation is disabled.
   * @default false
   */
  disableAnimation: o.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: o.bool,
  /**
   * If `true`, the `input` of this label is focused.
   */
  focused: o.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: o.oneOf(["dense"]),
  /**
   * if `true`, the label will indicate that the `input` is required.
   */
  required: o.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: o.bool,
  /**
   * The size of the component.
   * @default 'normal'
   */
  size: o.oneOfType([o.oneOf(["normal", "small"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
const AE = Ud;
function ME(e) {
  return pe("MuiLinearProgress", e);
}
he("MuiLinearProgress", ["root", "colorPrimary", "colorSecondary", "determinate", "indeterminate", "buffer", "query", "dashed", "dashedColorPrimary", "dashedColorSecondary", "bar", "barColorPrimary", "barColorSecondary", "bar1Indeterminate", "bar1Determinate", "bar1Buffer", "bar2Indeterminate", "bar2Buffer"]);
const DE = ["className", "color", "value", "valueBuffer", "variant"];
let Jn = (e) => e, tc, nc, rc, oc, sc, ic;
const ii = 4, FE = qt(tc || (tc = Jn`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)), LE = qt(nc || (nc = Jn`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)), BE = qt(rc || (rc = Jn`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)), zE = (e) => {
  const {
    classes: t,
    variant: n,
    color: r
  } = e, s = {
    root: ["root", `color${V(r)}`, n],
    dashed: ["dashed", `dashedColor${V(r)}`],
    bar1: ["bar", `barColor${V(r)}`, (n === "indeterminate" || n === "query") && "bar1Indeterminate", n === "determinate" && "bar1Determinate", n === "buffer" && "bar1Buffer"],
    bar2: ["bar", n !== "buffer" && `barColor${V(r)}`, n === "buffer" && `color${V(r)}`, (n === "indeterminate" || n === "query") && "bar2Indeterminate", n === "buffer" && "bar2Buffer"]
  };
  return be(s, ME, t);
}, Qi = (e, t) => t === "inherit" ? "currentColor" : e.vars ? e.vars.palette.LinearProgress[`${t}Bg`] : e.palette.mode === "light" ? Du(e.palette[t].main, 0.62) : Mu(e.palette[t].main, 0.5), UE = Y("span", {
  name: "MuiLinearProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`color${V(n.color)}`], t[n.variant]];
  }
})(({
  ownerState: e,
  theme: t
}) => x({
  position: "relative",
  overflow: "hidden",
  display: "block",
  height: 4,
  zIndex: 0,
  // Fix Safari's bug during composition of different paint.
  "@media print": {
    colorAdjust: "exact"
  },
  backgroundColor: Qi(t, e.color)
}, e.color === "inherit" && e.variant !== "buffer" && {
  backgroundColor: "none",
  "&::before": {
    content: '""',
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "currentColor",
    opacity: 0.3
  }
}, e.variant === "buffer" && {
  backgroundColor: "transparent"
}, e.variant === "query" && {
  transform: "rotate(180deg)"
})), VE = Y("span", {
  name: "MuiLinearProgress",
  slot: "Dashed",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.dashed, t[`dashedColor${V(n.color)}`]];
  }
})(({
  ownerState: e,
  theme: t
}) => {
  const n = Qi(t, e.color);
  return x({
    position: "absolute",
    marginTop: 0,
    height: "100%",
    width: "100%"
  }, e.color === "inherit" && {
    opacity: 0.3
  }, {
    backgroundImage: `radial-gradient(${n} 0%, ${n} 16%, transparent 42%)`,
    backgroundSize: "10px 10px",
    backgroundPosition: "0 -23px"
  });
}, yn(oc || (oc = Jn`
    animation: ${0} 3s infinite linear;
  `), BE)), qE = Y("span", {
  name: "MuiLinearProgress",
  slot: "Bar1",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.bar, t[`barColor${V(n.color)}`], (n.variant === "indeterminate" || n.variant === "query") && t.bar1Indeterminate, n.variant === "determinate" && t.bar1Determinate, n.variant === "buffer" && t.bar1Buffer];
  }
})(({
  ownerState: e,
  theme: t
}) => x({
  width: "100%",
  position: "absolute",
  left: 0,
  bottom: 0,
  top: 0,
  transition: "transform 0.2s linear",
  transformOrigin: "left",
  backgroundColor: e.color === "inherit" ? "currentColor" : (t.vars || t).palette[e.color].main
}, e.variant === "determinate" && {
  transition: `transform .${ii}s linear`
}, e.variant === "buffer" && {
  zIndex: 1,
  transition: `transform .${ii}s linear`
}), ({
  ownerState: e
}) => (e.variant === "indeterminate" || e.variant === "query") && yn(sc || (sc = Jn`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `), FE)), WE = Y("span", {
  name: "MuiLinearProgress",
  slot: "Bar2",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.bar, t[`barColor${V(n.color)}`], (n.variant === "indeterminate" || n.variant === "query") && t.bar2Indeterminate, n.variant === "buffer" && t.bar2Buffer];
  }
})(({
  ownerState: e,
  theme: t
}) => x({
  width: "100%",
  position: "absolute",
  left: 0,
  bottom: 0,
  top: 0,
  transition: "transform 0.2s linear",
  transformOrigin: "left"
}, e.variant !== "buffer" && {
  backgroundColor: e.color === "inherit" ? "currentColor" : (t.vars || t).palette[e.color].main
}, e.color === "inherit" && {
  opacity: 0.3
}, e.variant === "buffer" && {
  backgroundColor: Qi(t, e.color),
  transition: `transform .${ii}s linear`
}), ({
  ownerState: e
}) => (e.variant === "indeterminate" || e.variant === "query") && yn(ic || (ic = Jn`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `), LE)), Vd = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiLinearProgress"
  }), {
    className: s,
    color: i = "primary",
    value: a,
    valueBuffer: l,
    variant: c = "indeterminate"
  } = r, d = Z(r, DE), f = x({}, r, {
    color: i,
    variant: c
  }), p = zE(f), m = $i(), g = {}, h = {
    bar1: {},
    bar2: {}
  };
  if (c === "determinate" || c === "buffer")
    if (a !== void 0) {
      g["aria-valuenow"] = Math.round(a), g["aria-valuemin"] = 0, g["aria-valuemax"] = 100;
      let u = a - 100;
      m && (u = -u), h.bar1.transform = `translateX(${u}%)`;
    } else
      process.env.NODE_ENV !== "production" && console.error("MUI: You need to provide a value prop when using the determinate or buffer variant of LinearProgress .");
  if (c === "buffer")
    if (l !== void 0) {
      let u = (l || 0) - 100;
      m && (u = -u), h.bar2.transform = `translateX(${u}%)`;
    } else
      process.env.NODE_ENV !== "production" && console.error("MUI: You need to provide a valueBuffer prop when using the buffer variant of LinearProgress.");
  return /* @__PURE__ */ y.jsxs(UE, x({
    className: te(p.root, s),
    ownerState: f,
    role: "progressbar"
  }, g, {
    ref: n
  }, d, {
    children: [c === "buffer" ? /* @__PURE__ */ y.jsx(VE, {
      className: p.dashed,
      ownerState: f
    }) : null, /* @__PURE__ */ y.jsx(qE, {
      className: p.bar1,
      ownerState: f,
      style: h.bar1
    }), c === "determinate" ? null : /* @__PURE__ */ y.jsx(WE, {
      className: p.bar2,
      ownerState: f,
      style: h.bar2
    })]
  }));
});
process.env.NODE_ENV !== "production" && (Vd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["inherit", "primary", "secondary"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: o.number,
  /**
   * The value for the buffer variant.
   * Value between 0 and 100.
   */
  valueBuffer: o.number,
  /**
   * The variant to use.
   * Use indeterminate or query when there is no progress value.
   * @default 'indeterminate'
   */
  variant: o.oneOf(["buffer", "determinate", "indeterminate", "query"])
});
const Xi = Vd;
function HE(e) {
  return pe("MuiLink", e);
}
const KE = he("MuiLink", ["root", "underlineNone", "underlineHover", "underlineAlways", "button", "focusVisible"]), YE = KE, qd = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, GE = (e) => qd[e] || e, QE = ({
  theme: e,
  ownerState: t
}) => {
  const n = GE(t.color), r = Bn(e, `palette.${n}`, !1) || t.color, s = Bn(e, `palette.${n}Channel`);
  return "vars" in e && s ? `rgba(${s} / 0.4)` : De(r, 0.4);
}, XE = QE, JE = ["className", "color", "component", "onBlur", "onFocus", "TypographyClasses", "underline", "variant", "sx"], ZE = (e) => {
  const {
    classes: t,
    component: n,
    focusVisible: r,
    underline: s
  } = e, i = {
    root: ["root", `underline${V(s)}`, n === "button" && "button", r && "focusVisible"]
  };
  return be(i, HE, t);
}, eC = Y(me, {
  name: "MuiLink",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`underline${V(n.underline)}`], n.component === "button" && t.button];
  }
})(({
  theme: e,
  ownerState: t
}) => x({}, t.underline === "none" && {
  textDecoration: "none"
}, t.underline === "hover" && {
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline"
  }
}, t.underline === "always" && x({
  textDecoration: "underline"
}, t.color !== "inherit" && {
  textDecorationColor: XE({
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
  [`&.${YE.focusVisible}`]: {
    outline: "auto"
  }
})), Wd = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiLink"
  }), {
    className: s,
    color: i = "primary",
    component: a = "a",
    onBlur: l,
    onFocus: c,
    TypographyClasses: d,
    underline: f = "always",
    variant: p = "inherit",
    sx: m
  } = r, g = Z(r, JE), {
    isFocusVisibleRef: h,
    onBlur: u,
    onFocus: b,
    ref: R
  } = Eu(), [P, T] = v.useState(!1), C = Je(n, R), E = (M) => {
    u(M), h.current === !1 && T(!1), l && l(M);
  }, w = (M) => {
    b(M), h.current === !0 && T(!0), c && c(M);
  }, S = x({}, r, {
    color: i,
    component: a,
    focusVisible: P,
    underline: f,
    variant: p
  }), N = ZE(S);
  return /* @__PURE__ */ y.jsx(eC, x({
    color: i,
    className: te(N.root, s),
    classes: d,
    component: a,
    onBlur: E,
    onFocus: w,
    ref: C,
    ownerState: S,
    variant: p,
    sx: [...Object.keys(qd).includes(i) ? [] : [{
      color: i
    }], ...Array.isArray(m) ? m : [m]]
  }, g));
});
process.env.NODE_ENV !== "production" && (Wd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the link.
   * @default 'primary'
   */
  color: o.any,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: kr,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * `classes` prop applied to the [`Typography`](/material-ui/api/typography/) element.
   */
  TypographyClasses: o.object,
  /**
   * Controls when the link should have an underline.
   * @default 'always'
   */
  underline: o.oneOf(["always", "hover", "none"]),
  /**
   * Applies the theme typography styles.
   * @default 'inherit'
   */
  variant: o.oneOfType([o.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), o.string])
});
const tC = Wd, Hd = /* @__PURE__ */ v.createContext({});
process.env.NODE_ENV !== "production" && (Hd.displayName = "ListContext");
const Ut = Hd;
function nC(e) {
  return pe("MuiList", e);
}
he("MuiList", ["root", "padding", "dense", "subheader"]);
const rC = ["children", "className", "component", "dense", "disablePadding", "subheader"], oC = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: s
  } = e;
  return be({
    root: ["root", !n && "padding", r && "dense", s && "subheader"]
  }, nC, t);
}, sC = Y("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disablePadding && t.padding, n.dense && t.dense, n.subheader && t.subheader];
  }
})(({
  ownerState: e
}) => x({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !e.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, e.subheader && {
  paddingTop: 0
})), Kd = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiList"
  }), {
    children: s,
    className: i,
    component: a = "ul",
    dense: l = !1,
    disablePadding: c = !1,
    subheader: d
  } = r, f = Z(r, rC), p = v.useMemo(() => ({
    dense: l
  }), [l]), m = x({}, r, {
    component: a,
    dense: l,
    disablePadding: c
  }), g = oC(m);
  return /* @__PURE__ */ y.jsx(Ut.Provider, {
    value: p,
    children: /* @__PURE__ */ y.jsxs(sC, x({
      as: a,
      className: te(g.root, i),
      ref: n,
      ownerState: m
    }, f, {
      children: [d, s]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Kd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: o.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: o.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const Yd = Kd;
function iC(e) {
  return pe("MuiListItem", e);
}
const aC = he("MuiListItem", ["root", "container", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "padding", "button", "secondaryAction", "selected"]), $n = aC;
function lC(e) {
  return pe("MuiListItemButton", e);
}
const cC = he("MuiListItemButton", ["root", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "selected"]), _n = cC, uC = ["alignItems", "autoFocus", "component", "children", "dense", "disableGutters", "divider", "focusVisibleClassName", "selected", "className"], dC = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.alignItems === "flex-start" && t.alignItemsFlexStart, n.divider && t.divider, !n.disableGutters && t.gutters];
}, fC = (e) => {
  const {
    alignItems: t,
    classes: n,
    dense: r,
    disabled: s,
    disableGutters: i,
    divider: a,
    selected: l
  } = e, d = be({
    root: ["root", r && "dense", !i && "gutters", a && "divider", s && "disabled", t === "flex-start" && "alignItemsFlexStart", l && "selected"]
  }, lC, n);
  return x({}, n, d);
}, pC = Y(hn, {
  shouldForwardProp: (e) => Et(e) || e === "classes",
  name: "MuiListItemButton",
  slot: "Root",
  overridesResolver: dC
})(({
  theme: e,
  ownerState: t
}) => x({
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
  [`&.${_n.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : De(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${_n.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : De(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${_n.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : De(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : De(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${_n.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${_n.disabled}`]: {
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
})), Gd = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiListItemButton"
  }), {
    alignItems: s = "center",
    autoFocus: i = !1,
    component: a = "div",
    children: l,
    dense: c = !1,
    disableGutters: d = !1,
    divider: f = !1,
    focusVisibleClassName: p,
    selected: m = !1,
    className: g
  } = r, h = Z(r, uC), u = v.useContext(Ut), b = v.useMemo(() => ({
    dense: c || u.dense || !1,
    alignItems: s,
    disableGutters: d
  }), [s, u.dense, c, d]), R = v.useRef(null);
  It(() => {
    i && (R.current ? R.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a ListItemButton whose component has not been rendered."));
  }, [i]);
  const P = x({}, r, {
    alignItems: s,
    dense: b.dense,
    disableGutters: d,
    divider: f,
    selected: m
  }), T = fC(P), C = Je(R, n);
  return /* @__PURE__ */ y.jsx(Ut.Provider, {
    value: b,
    children: /* @__PURE__ */ y.jsx(pC, x({
      ref: C,
      href: h.href || h.to,
      component: (h.href || h.to) && a === "div" ? "button" : a,
      focusVisibleClassName: te(T.focusVisible, p),
      ownerState: P,
      className: te(T.root, g)
    }, h, {
      classes: T,
      children: l
    }))
  });
});
process.env.NODE_ENV !== "production" && (Gd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Defines the `align-items` style property.
   * @default 'center'
   */
  alignItems: o.oneOf(["center", "flex-start"]),
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: o.bool,
  /**
   * The content of the component if a `ListItemSecondaryAction` is used it must
   * be the last child.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent List component.
   * @default false
   */
  dense: o.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: o.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   * @default false
   */
  divider: o.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: o.string,
  /**
   * @ignore
   */
  href: o.string,
  /**
   * Use to apply selected styling.
   * @default false
   */
  selected: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const hC = Gd;
function mC(e) {
  return pe("MuiListItemSecondaryAction", e);
}
he("MuiListItemSecondaryAction", ["root", "disableGutters"]);
const yC = ["className"], bC = (e) => {
  const {
    disableGutters: t,
    classes: n
  } = e;
  return be({
    root: ["root", t && "disableGutters"]
  }, mC, n);
}, gC = Y("div", {
  name: "MuiListItemSecondaryAction",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.disableGutters && t.disableGutters];
  }
})(({
  ownerState: e
}) => x({
  position: "absolute",
  right: 16,
  top: "50%",
  transform: "translateY(-50%)"
}, e.disableGutters && {
  right: 0
})), Ji = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiListItemSecondaryAction"
  }), {
    className: s
  } = r, i = Z(r, yC), a = v.useContext(Ut), l = x({}, r, {
    disableGutters: a.disableGutters
  }), c = bC(l);
  return /* @__PURE__ */ y.jsx(gC, x({
    className: te(c.root, s),
    ownerState: l,
    ref: n
  }, i));
});
process.env.NODE_ENV !== "production" && (Ji.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally an `IconButton` or selection control.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
Ji.muiName = "ListItemSecondaryAction";
const vC = Ji, xC = ["className"], EC = ["alignItems", "autoFocus", "button", "children", "className", "component", "components", "componentsProps", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "disablePadding", "divider", "focusVisibleClassName", "secondaryAction", "selected", "slotProps", "slots"], CC = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.alignItems === "flex-start" && t.alignItemsFlexStart, n.divider && t.divider, !n.disableGutters && t.gutters, !n.disablePadding && t.padding, n.button && t.button, n.hasSecondaryAction && t.secondaryAction];
}, TC = (e) => {
  const {
    alignItems: t,
    button: n,
    classes: r,
    dense: s,
    disabled: i,
    disableGutters: a,
    disablePadding: l,
    divider: c,
    hasSecondaryAction: d,
    selected: f
  } = e;
  return be({
    root: ["root", s && "dense", !a && "gutters", !l && "padding", c && "divider", i && "disabled", n && "button", t === "flex-start" && "alignItemsFlexStart", d && "secondaryAction", f && "selected"],
    container: ["container"]
  }, iC, r);
}, RC = Y("div", {
  name: "MuiListItem",
  slot: "Root",
  overridesResolver: CC
})(({
  theme: e,
  ownerState: t
}) => x({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  width: "100%",
  boxSizing: "border-box",
  textAlign: "left"
}, !t.disablePadding && x({
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
  [`& > .${_n.root}`]: {
    paddingRight: 48
  }
}, {
  [`&.${$n.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${$n.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : De(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${$n.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : De(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${$n.disabled}`]: {
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
  [`&.${$n.selected}:hover`]: {
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
})), OC = Y("li", {
  name: "MuiListItem",
  slot: "Container",
  overridesResolver: (e, t) => t.container
})({
  position: "relative"
}), Qd = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiListItem"
  }), {
    alignItems: s = "center",
    autoFocus: i = !1,
    button: a = !1,
    children: l,
    className: c,
    component: d,
    components: f = {},
    componentsProps: p = {},
    ContainerComponent: m = "li",
    ContainerProps: {
      className: g
    } = {},
    dense: h = !1,
    disabled: u = !1,
    disableGutters: b = !1,
    disablePadding: R = !1,
    divider: P = !1,
    focusVisibleClassName: T,
    secondaryAction: C,
    selected: E = !1,
    slotProps: w = {},
    slots: S = {}
  } = r, N = Z(r.ContainerProps, xC), M = Z(r, EC), B = v.useContext(Ut), W = v.useMemo(() => ({
    dense: h || B.dense || !1,
    alignItems: s,
    disableGutters: b
  }), [s, B.dense, h, b]), z = v.useRef(null);
  It(() => {
    i && (z.current ? z.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a ListItem whose component has not been rendered."));
  }, [i]);
  const j = v.Children.toArray(l), A = j.length && mr(j[j.length - 1], ["ListItemSecondaryAction"]), U = x({}, r, {
    alignItems: s,
    autoFocus: i,
    button: a,
    dense: W.dense,
    disabled: u,
    disableGutters: b,
    disablePadding: R,
    divider: P,
    hasSecondaryAction: A,
    selected: E
  }), F = TC(U), H = Je(z, n), I = S.root || f.Root || RC, K = w.root || p.root || {}, k = x({
    className: te(F.root, K.className, c),
    disabled: u
  }, M);
  let D = d || "li";
  return a && (k.component = d || "div", k.focusVisibleClassName = te($n.focusVisible, T), D = hn), A ? (D = !k.component && !d ? "div" : D, m === "li" && (D === "li" ? D = "div" : k.component === "li" && (k.component = "div")), /* @__PURE__ */ y.jsx(Ut.Provider, {
    value: W,
    children: /* @__PURE__ */ y.jsxs(OC, x({
      as: m,
      className: te(F.container, g),
      ref: H,
      ownerState: U
    }, N, {
      children: [/* @__PURE__ */ y.jsx(I, x({}, K, !Un(I) && {
        as: D,
        ownerState: x({}, U, K.ownerState)
      }, k, {
        children: j
      })), j.pop()]
    }))
  })) : /* @__PURE__ */ y.jsx(Ut.Provider, {
    value: W,
    children: /* @__PURE__ */ y.jsxs(I, x({}, K, {
      as: D,
      ref: H
    }, !Un(I) && {
      ownerState: x({}, U, K.ownerState)
    }, k, {
      children: [j, C && /* @__PURE__ */ y.jsx(vC, {
        children: C
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Qd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Defines the `align-items` style property.
   * @default 'center'
   */
  alignItems: o.oneOf(["center", "flex-start"]),
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  autoFocus: o.bool,
  /**
   * If `true`, the list item is a button (using `ButtonBase`). Props intended
   * for `ButtonBase` can then be applied to `ListItem`.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  button: o.bool,
  /**
   * The content of the component if a `ListItemSecondaryAction` is used it must
   * be the last child.
   */
  children: Lt(o.node, (e) => {
    const t = v.Children.toArray(e.children);
    let n = -1;
    for (let r = t.length - 1; r >= 0; r -= 1) {
      const s = t[r];
      if (mr(s, ["ListItemSecondaryAction"])) {
        n = r;
        break;
      }
    }
    return n !== -1 && n !== t.length - 1 ? new Error("MUI: You used an element after ListItemSecondaryAction. For ListItem to detect that it has a secondary action you must pass it as the last child to ListItem.") : null;
  }),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Root: o.elementType
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
  componentsProps: o.shape({
    root: o.object
  }),
  /**
   * The container component used when a `ListItemSecondaryAction` is the last child.
   * @default 'li'
   * @deprecated
   */
  ContainerComponent: kr,
  /**
   * Props applied to the container component if used.
   * @default {}
   * @deprecated
   */
  ContainerProps: o.object,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent List component.
   * @default false
   */
  dense: o.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  disabled: o.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: o.bool,
  /**
   * If `true`, all padding is removed.
   * @default false
   */
  disablePadding: o.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   * @default false
   */
  divider: o.bool,
  /**
   * @ignore
   */
  focusVisibleClassName: o.string,
  /**
   * The element to display at the end of ListItem.
   */
  secondaryAction: o.node,
  /**
   * Use to apply selected styling.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  selected: o.bool,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const SC = Qd;
function wC(e) {
  return pe("MuiListItemIcon", e);
}
he("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
const PC = ["className"], $C = (e) => {
  const {
    alignItems: t,
    classes: n
  } = e;
  return be({
    root: ["root", t === "flex-start" && "alignItemsFlexStart"]
  }, wC, n);
}, _C = Y("div", {
  name: "MuiListItemIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.alignItems === "flex-start" && t.alignItemsFlexStart];
  }
})(({
  theme: e,
  ownerState: t
}) => x({
  minWidth: 56,
  color: (e.vars || e).palette.action.active,
  flexShrink: 0,
  display: "inline-flex"
}, t.alignItems === "flex-start" && {
  marginTop: 8
})), Xd = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiListItemIcon"
  }), {
    className: s
  } = r, i = Z(r, PC), a = v.useContext(Ut), l = x({}, r, {
    alignItems: a.alignItems
  }), c = $C(l);
  return /* @__PURE__ */ y.jsx(_C, x({
    className: te(c.root, s),
    ownerState: l,
    ref: n
  }, i));
});
process.env.NODE_ENV !== "production" && (Xd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally `Icon`, `SvgIcon`,
   * or a `@mui/icons-material` SVG icon element.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const NC = Xd;
function IC(e) {
  return pe("MuiListItemText", e);
}
const kC = he("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), ac = kC, jC = ["children", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"], AC = (e) => {
  const {
    classes: t,
    inset: n,
    primary: r,
    secondary: s,
    dense: i
  } = e;
  return be({
    root: ["root", n && "inset", i && "dense", r && s && "multiline"],
    primary: ["primary"],
    secondary: ["secondary"]
  }, IC, t);
}, MC = Y("div", {
  name: "MuiListItemText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${ac.primary}`]: t.primary
    }, {
      [`& .${ac.secondary}`]: t.secondary
    }, t.root, n.inset && t.inset, n.primary && n.secondary && t.multiline, n.dense && t.dense];
  }
})(({
  ownerState: e
}) => x({
  flex: "1 1 auto",
  minWidth: 0,
  marginTop: 4,
  marginBottom: 4
}, e.primary && e.secondary && {
  marginTop: 6,
  marginBottom: 6
}, e.inset && {
  paddingLeft: 56
})), Jd = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiListItemText"
  }), {
    children: s,
    className: i,
    disableTypography: a = !1,
    inset: l = !1,
    primary: c,
    primaryTypographyProps: d,
    secondary: f,
    secondaryTypographyProps: p
  } = r, m = Z(r, jC), {
    dense: g
  } = v.useContext(Ut);
  let h = c ?? s, u = f;
  const b = x({}, r, {
    disableTypography: a,
    inset: l,
    primary: !!h,
    secondary: !!u,
    dense: g
  }), R = AC(b);
  return h != null && h.type !== me && !a && (h = /* @__PURE__ */ y.jsx(me, x({
    variant: g ? "body2" : "body1",
    className: R.primary,
    component: d != null && d.variant ? void 0 : "span",
    display: "block"
  }, d, {
    children: h
  }))), u != null && u.type !== me && !a && (u = /* @__PURE__ */ y.jsx(me, x({
    variant: "body2",
    className: R.secondary,
    color: "text.secondary",
    display: "block"
  }, p, {
    children: u
  }))), /* @__PURE__ */ y.jsxs(MC, x({
    className: te(R.root, i),
    ownerState: b,
    ref: n
  }, m, {
    children: [h, u]
  }));
});
process.env.NODE_ENV !== "production" && (Jd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Alias for the `primary` prop.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, the children won't be wrapped by a Typography component.
   * This can be useful to render an alternative Typography variant by wrapping
   * the `children` (or `primary`) text, and optional `secondary` text
   * with the Typography component.
   * @default false
   */
  disableTypography: o.bool,
  /**
   * If `true`, the children are indented.
   * This should be used if there is no left avatar or left icon.
   * @default false
   */
  inset: o.bool,
  /**
   * The main content element.
   */
  primary: o.node,
  /**
   * These props will be forwarded to the primary typography component
   * (as long as disableTypography is not `true`).
   */
  primaryTypographyProps: o.object,
  /**
   * The secondary content element.
   */
  secondary: o.node,
  /**
   * These props will be forwarded to the secondary typography component
   * (as long as disableTypography is not `true`).
   */
  secondaryTypographyProps: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const DC = Jd, FC = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function _s(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function lc(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function Zd(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.indexOf(t.keys.join("")) === 0;
}
function lr(e, t, n, r, s, i) {
  let a = !1, l = s(e, t, t ? n : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (a)
        return !1;
      a = !0;
    }
    const c = r ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !Zd(l, i) || c)
      l = s(e, l, n);
    else
      return l.focus(), !0;
  }
  return !1;
}
const ef = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: s = !1,
    autoFocusItem: i = !1,
    children: a,
    className: l,
    disabledItemsFocusable: c = !1,
    disableListWrap: d = !1,
    onKeyDown: f,
    variant: p = "selectedMenu"
  } = t, m = Z(t, FC), g = v.useRef(null), h = v.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  It(() => {
    s && g.current.focus();
  }, [s]), v.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (T, {
      direction: C
    }) => {
      const E = !g.current.style.width;
      if (T.clientHeight < g.current.clientHeight && E) {
        const w = `${Cu(xt(T))}px`;
        g.current.style[C === "rtl" ? "paddingLeft" : "paddingRight"] = w, g.current.style.width = `calc(100% + ${w})`;
      }
      return g.current;
    }
  }), []);
  const u = (T) => {
    const C = g.current, E = T.key, w = xt(C).activeElement;
    if (E === "ArrowDown")
      T.preventDefault(), lr(C, w, d, c, _s);
    else if (E === "ArrowUp")
      T.preventDefault(), lr(C, w, d, c, lc);
    else if (E === "Home")
      T.preventDefault(), lr(C, null, d, c, _s);
    else if (E === "End")
      T.preventDefault(), lr(C, null, d, c, lc);
    else if (E.length === 1) {
      const S = h.current, N = E.toLowerCase(), M = performance.now();
      S.keys.length > 0 && (M - S.lastTime > 500 ? (S.keys = [], S.repeating = !0, S.previousKeyMatched = !0) : S.repeating && N !== S.keys[0] && (S.repeating = !1)), S.lastTime = M, S.keys.push(N);
      const B = w && !S.repeating && Zd(w, S);
      S.previousKeyMatched && (B || lr(C, w, !1, c, _s, S)) ? T.preventDefault() : S.previousKeyMatched = !1;
    }
    f && f(T);
  }, b = Je(g, n);
  let R = -1;
  v.Children.forEach(a, (T, C) => {
    if (!/* @__PURE__ */ v.isValidElement(T)) {
      R === C && (R += 1, R >= a.length && (R = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && Ho.isFragment(T) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), T.props.disabled || (p === "selectedMenu" && T.props.selected || R === -1) && (R = C), R === C && (T.props.disabled || T.props.muiSkipListHighlight || T.type.muiSkipListHighlight) && (R += 1, R >= a.length && (R = -1));
  });
  const P = v.Children.map(a, (T, C) => {
    if (C === R) {
      const E = {};
      return i && (E.autoFocus = !0), T.props.tabIndex === void 0 && p === "selectedMenu" && (E.tabIndex = 0), /* @__PURE__ */ v.cloneElement(T, E);
    }
    return T;
  });
  return /* @__PURE__ */ y.jsx(Yd, x({
    role: "menu",
    ref: b,
    className: l,
    onKeyDown: u,
    tabIndex: s ? 0 : -1
  }, m, {
    children: P
  }));
});
process.env.NODE_ENV !== "production" && (ef.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: o.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: o.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: o.node,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: o.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: o.bool,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: o.oneOf(["menu", "selectedMenu"])
});
const LC = ef;
function BC(e) {
  return pe("MuiPopover", e);
}
he("MuiPopover", ["root", "paper"]);
const zC = ["onEntering"], UC = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps", "disableScrollLock"], VC = ["slotProps"];
function cc(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function uc(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function dc(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function ro(e) {
  return typeof e == "function" ? e() : e;
}
const qC = (e) => {
  const {
    classes: t
  } = e;
  return be({
    root: ["root"],
    paper: ["paper"]
  }, BC, t);
}, WC = Y(Pd, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), tf = Y(Ko, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), nf = /* @__PURE__ */ v.forwardRef(function(t, n) {
  var r, s, i;
  const a = ye({
    props: t,
    name: "MuiPopover"
  }), {
    action: l,
    anchorEl: c,
    anchorOrigin: d = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: f,
    anchorReference: p = "anchorEl",
    children: m,
    className: g,
    container: h,
    elevation: u = 8,
    marginThreshold: b = 16,
    open: R,
    PaperProps: P = {},
    slots: T,
    slotProps: C,
    transformOrigin: E = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: w = vE,
    transitionDuration: S = "auto",
    TransitionProps: {
      onEntering: N
    } = {},
    disableScrollLock: M = !1
  } = a, B = Z(a.TransitionProps, zC), W = Z(a, UC), z = (r = C == null ? void 0 : C.paper) != null ? r : P, j = v.useRef(), A = Je(j, z.ref), U = x({}, a, {
    anchorOrigin: d,
    anchorReference: p,
    elevation: u,
    marginThreshold: b,
    externalPaperSlotProps: z,
    transformOrigin: E,
    TransitionComponent: w,
    transitionDuration: S,
    TransitionProps: B
  }), F = qC(U), H = v.useCallback(() => {
    if (p === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (f || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), f;
    const ie = ro(c), de = ie && ie.nodeType === 1 ? ie : xt(j.current).body, ge = de.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const Qe = de.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && Qe.top === 0 && Qe.left === 0 && Qe.right === 0 && Qe.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: ge.top + cc(ge, d.vertical),
      left: ge.left + uc(ge, d.horizontal)
    };
  }, [c, d.horizontal, d.vertical, f, p]), I = v.useCallback((ie) => ({
    vertical: cc(ie, E.vertical),
    horizontal: uc(ie, E.horizontal)
  }), [E.horizontal, E.vertical]), K = v.useCallback((ie) => {
    const de = {
      width: ie.offsetWidth,
      height: ie.offsetHeight
    }, ge = I(de);
    if (p === "none")
      return {
        top: null,
        left: null,
        transformOrigin: dc(ge)
      };
    const Qe = H();
    let it = Qe.top - ge.vertical, at = Qe.left - ge.horizontal;
    const tt = it + de.height, dt = at + de.width, Le = Vt(ro(c)), nt = Le.innerHeight - b, rt = Le.innerWidth - b;
    if (b !== null && it < b) {
      const Fe = it - b;
      it -= Fe, ge.vertical += Fe;
    } else if (b !== null && tt > nt) {
      const Fe = tt - nt;
      it -= Fe, ge.vertical += Fe;
    }
    if (process.env.NODE_ENV !== "production" && de.height > nt && de.height && nt && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${de.height - nt}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), b !== null && at < b) {
      const Fe = at - b;
      at -= Fe, ge.horizontal += Fe;
    } else if (dt > rt) {
      const Fe = dt - rt;
      at -= Fe, ge.horizontal += Fe;
    }
    return {
      top: `${Math.round(it)}px`,
      left: `${Math.round(at)}px`,
      transformOrigin: dc(ge)
    };
  }, [c, p, H, I, b]), [k, D] = v.useState(R), Q = v.useCallback(() => {
    const ie = j.current;
    if (!ie)
      return;
    const de = K(ie);
    de.top !== null && (ie.style.top = de.top), de.left !== null && (ie.style.left = de.left), ie.style.transformOrigin = de.transformOrigin, D(!0);
  }, [K]);
  v.useEffect(() => (M && window.addEventListener("scroll", Q), () => window.removeEventListener("scroll", Q)), [c, M, Q]);
  const X = (ie, de) => {
    N && N(ie, de), Q();
  }, q = () => {
    D(!1);
  };
  v.useEffect(() => {
    R && Q();
  }), v.useImperativeHandle(l, () => R ? {
    updatePosition: () => {
      Q();
    }
  } : null, [R, Q]), v.useEffect(() => {
    if (!R)
      return;
    const ie = wi(() => {
      Q();
    }), de = Vt(c);
    return de.addEventListener("resize", ie), () => {
      ie.clear(), de.removeEventListener("resize", ie);
    };
  }, [c, R, Q]);
  let ee = S;
  S === "auto" && !w.muiSupportAuto && (ee = void 0);
  const J = h || (c ? xt(ro(c)).body : void 0), ne = (s = T == null ? void 0 : T.root) != null ? s : WC, re = (i = T == null ? void 0 : T.paper) != null ? i : tf, oe = pn({
    elementType: re,
    externalSlotProps: x({}, z, {
      style: k ? z.style : x({}, z.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation: u,
      ref: A
    },
    ownerState: U,
    className: te(F.paper, z == null ? void 0 : z.className)
  }), se = pn({
    elementType: ne,
    externalSlotProps: (C == null ? void 0 : C.root) || {},
    externalForwardedProps: W,
    additionalProps: {
      ref: n,
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: J,
      open: R
    },
    ownerState: U,
    className: te(F.root, g)
  }), {
    slotProps: le
  } = se, $ = Z(se, VC);
  return /* @__PURE__ */ y.jsx(ne, x({}, $, !Un(ne) && {
    slotProps: le,
    disableScrollLock: M
  }, {
    children: /* @__PURE__ */ y.jsx(w, x({
      appear: !0,
      in: R,
      onEntering: X,
      onExited: q,
      timeout: ee
    }, B, {
      children: /* @__PURE__ */ y.jsx(re, x({}, oe, {
        children: m
      }))
    }))
  }));
});
process.env.NODE_ENV !== "production" && (nf.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: Wt,
  /**
   * An HTML element, [PopoverVirtualElement](/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: Lt(o.oneOfType([zn, o.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = ro(e.anchorEl);
      if (t && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", `It should be an Element or PopoverVirtualElement instance but it's \`${t}\` instead.`].join(`
`));
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin: o.shape({
    horizontal: o.oneOfType([o.oneOf(["center", "left", "right"]), o.number]).isRequired,
    vertical: o.oneOfType([o.oneOf(["bottom", "center", "top"]), o.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: o.shape({
    left: o.number.isRequired,
    top: o.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: o.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: o.oneOfType([zn, o.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: o.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: Mn,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: o.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: o.shape({
    component: kr
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: o.shape({
    paper: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: o.shape({
    paper: o.elementType,
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin: o.shape({
    horizontal: o.oneOfType([o.oneOf(["center", "left", "right"]), o.number]).isRequired,
    vertical: o.oneOfType([o.oneOf(["bottom", "center", "top"]), o.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: o.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: o.oneOfType([o.oneOf(["auto"]), o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: o.object
});
const HC = nf;
function KC(e) {
  return pe("MuiMenu", e);
}
he("MuiMenu", ["root", "paper", "list"]);
const YC = ["onEntering"], GC = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"], QC = {
  vertical: "top",
  horizontal: "right"
}, XC = {
  vertical: "top",
  horizontal: "left"
}, JC = (e) => {
  const {
    classes: t
  } = e;
  return be({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, KC, t);
}, ZC = Y(HC, {
  shouldForwardProp: (e) => Et(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), eT = Y(tf, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), tT = Y(LC, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), rf = /* @__PURE__ */ v.forwardRef(function(t, n) {
  var r, s;
  const i = ye({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: a = !0,
    children: l,
    className: c,
    disableAutoFocusItem: d = !1,
    MenuListProps: f = {},
    onClose: p,
    open: m,
    PaperProps: g = {},
    PopoverClasses: h,
    transitionDuration: u = "auto",
    TransitionProps: {
      onEntering: b
    } = {},
    variant: R = "selectedMenu",
    slots: P = {},
    slotProps: T = {}
  } = i, C = Z(i.TransitionProps, YC), E = Z(i, GC), w = $i(), S = x({}, i, {
    autoFocus: a,
    disableAutoFocusItem: d,
    MenuListProps: f,
    onEntering: b,
    PaperProps: g,
    transitionDuration: u,
    TransitionProps: C,
    variant: R
  }), N = JC(S), M = a && !d && m, B = v.useRef(null), W = (I, K) => {
    B.current && B.current.adjustStyleForScrollbar(I, {
      direction: w ? "rtl" : "ltr"
    }), b && b(I, K);
  }, z = (I) => {
    I.key === "Tab" && (I.preventDefault(), p && p(I, "tabKeyDown"));
  };
  let j = -1;
  v.Children.map(l, (I, K) => {
    /* @__PURE__ */ v.isValidElement(I) && (process.env.NODE_ENV !== "production" && Ho.isFragment(I) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), I.props.disabled || (R === "selectedMenu" && I.props.selected || j === -1) && (j = K));
  });
  const A = (r = P.paper) != null ? r : eT, U = (s = T.paper) != null ? s : g, F = pn({
    elementType: P.root,
    externalSlotProps: T.root,
    ownerState: S,
    className: [N.root, c]
  }), H = pn({
    elementType: A,
    externalSlotProps: U,
    ownerState: S,
    className: N.paper
  });
  return /* @__PURE__ */ y.jsx(ZC, x({
    onClose: p,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: w ? "right" : "left"
    },
    transformOrigin: w ? QC : XC,
    slots: {
      paper: A,
      root: P.root
    },
    slotProps: {
      root: F,
      paper: H
    },
    open: m,
    ref: n,
    transitionDuration: u,
    TransitionProps: x({
      onEntering: W
    }, C),
    ownerState: S
  }, E, {
    classes: h,
    children: /* @__PURE__ */ y.jsx(tT, x({
      onKeyDown: z,
      actions: B,
      autoFocus: a && (j === -1 || d),
      autoFocusItem: M,
      variant: R
    }, f, {
      className: te(N.list, f.className),
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (rf.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: o.oneOfType([zn, o.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: o.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: o.bool,
  /**
   * Props applied to the [`MenuList`](/material-ui/api/menu-list/) element.
   * @default {}
   */
  MenuListProps: o.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: o.object,
  /**
   * `classes` prop applied to the [`Popover`](/material-ui/api/popover/) element.
   */
  PopoverClasses: o.object,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: o.shape({
    paper: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: o.shape({
    paper: o.elementType,
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: o.oneOfType([o.oneOf(["auto"]), o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: o.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: o.oneOf(["menu", "selectedMenu"])
});
const nT = rf;
function rT(e) {
  return pe("MuiNativeSelect", e);
}
const oT = he("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), Zi = oT, sT = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"], iT = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: s,
    open: i,
    error: a
  } = e, l = {
    select: ["select", n, r && "disabled", s && "multiple", a && "error"],
    icon: ["icon", `icon${V(n)}`, i && "iconOpen", r && "disabled"]
  };
  return be(l, rT, t);
}, of = ({
  ownerState: e,
  theme: t
}) => x({
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  borderRadius: 0,
  // Reset
  cursor: "pointer",
  "&:focus": x({}, t.vars ? {
    backgroundColor: `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`
  } : {
    backgroundColor: t.palette.mode === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)"
  }, {
    borderRadius: 0
    // Reset Chrome style
  }),
  // Remove IE11 arrow
  "&::-ms-expand": {
    display: "none"
  },
  [`&.${Zi.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (t.vars || t).palette.background.paper
  },
  // Bump specificity to allow extending custom inputs
  "&&&": {
    paddingRight: 24,
    minWidth: 16
    // So it doesn't collapse.
  }
}, e.variant === "filled" && {
  "&&&": {
    paddingRight: 32
  }
}, e.variant === "outlined" && {
  borderRadius: (t.vars || t).shape.borderRadius,
  "&:focus": {
    borderRadius: (t.vars || t).shape.borderRadius
    // Reset the reset for Chrome style
  },
  "&&&": {
    paddingRight: 32
  }
}), aT = Y("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: Et,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${Zi.multiple}`]: t.multiple
    }];
  }
})(of), sf = ({
  ownerState: e,
  theme: t
}) => x({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  top: "calc(50% - .5em)",
  // Center vertically, height is 1em
  pointerEvents: "none",
  // Don't block pointer events on the select under the icon.
  color: (t.vars || t).palette.action.active,
  [`&.${Zi.disabled}`]: {
    color: (t.vars || t).palette.action.disabled
  }
}, e.open && {
  transform: "rotate(180deg)"
}, e.variant === "filled" && {
  right: 7
}, e.variant === "outlined" && {
  right: 7
}), lT = Y("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${V(n.variant)}`], n.open && t.iconOpen];
  }
})(sf), af = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const {
    className: r,
    disabled: s,
    error: i,
    IconComponent: a,
    inputRef: l,
    variant: c = "standard"
  } = t, d = Z(t, sT), f = x({}, t, {
    disabled: s,
    variant: c,
    error: i
  }), p = iT(f);
  return /* @__PURE__ */ y.jsxs(v.Fragment, {
    children: [/* @__PURE__ */ y.jsx(aT, x({
      ownerState: f,
      className: te(p.select, r),
      disabled: s,
      ref: l || n
    }, d)), t.multiple ? null : /* @__PURE__ */ y.jsx(lT, {
      as: a,
      ownerState: f,
      className: p.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (af.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The CSS class name of the select element.
   */
  className: o.string,
  /**
   * If `true`, the select is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: o.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: o.elementType.isRequired,
  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: Wt,
  /**
   * @ignore
   */
  multiple: o.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: o.string,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * The input value.
   */
  value: o.any,
  /**
   * The variant to use.
   */
  variant: o.oneOf(["standard", "outlined", "filled"])
});
const cT = af;
var fc;
const uT = ["children", "classes", "className", "label", "notched"], dT = Y("fieldset", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: Et
})({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
}), fT = Y("legend", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: Et
})(({
  ownerState: e,
  theme: t
}) => x({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden"
}, !e.withLabel && {
  padding: 0,
  lineHeight: "11px",
  // sync with `height` in `legend` styles
  transition: t.transitions.create("width", {
    duration: 150,
    easing: t.transitions.easing.easeOut
  })
}, e.withLabel && x({
  display: "block",
  // Fix conflict with normalize.css and sanitize.css
  padding: 0,
  height: 11,
  // sync with `lineHeight` in `legend` styles
  fontSize: "0.75em",
  visibility: "hidden",
  maxWidth: 0.01,
  transition: t.transitions.create("max-width", {
    duration: 50,
    easing: t.transitions.easing.easeOut
  }),
  whiteSpace: "nowrap",
  "& > span": {
    paddingLeft: 5,
    paddingRight: 5,
    display: "inline-block",
    opacity: 0,
    visibility: "visible"
  }
}, e.notched && {
  maxWidth: "100%",
  transition: t.transitions.create("max-width", {
    duration: 100,
    easing: t.transitions.easing.easeOut,
    delay: 50
  })
})));
function lf(e) {
  const {
    className: t,
    label: n,
    notched: r
  } = e, s = Z(e, uT), i = n != null && n !== "", a = x({}, e, {
    notched: r,
    withLabel: i
  });
  return /* @__PURE__ */ y.jsx(dT, x({
    "aria-hidden": !0,
    className: t,
    ownerState: a
  }, s, {
    children: /* @__PURE__ */ y.jsx(fT, {
      ownerState: a,
      children: i ? /* @__PURE__ */ y.jsx("span", {
        children: n
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        fc || (fc = /* @__PURE__ */ y.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  }));
}
process.env.NODE_ENV !== "production" && (lf.propTypes = {
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The label.
   */
  label: o.node,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: o.bool.isRequired,
  /**
   * @ignore
   */
  style: o.object
});
const pT = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"], hT = (e) => {
  const {
    classes: t
  } = e, r = be({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, n0, t);
  return x({}, t, r);
}, mT = Y(Jo, {
  shouldForwardProp: (e) => Et(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: Qo
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return x({
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${Gt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${Gt.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : n
      }
    },
    [`&.${Gt.focused} .${Gt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette[t.color].main,
      borderWidth: 2
    },
    [`&.${Gt.error} .${Gt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.error.main
    },
    [`&.${Gt.disabled} .${Gt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.action.disabled
    }
  }, t.startAdornment && {
    paddingLeft: 14
  }, t.endAdornment && {
    paddingRight: 14
  }, t.multiline && x({
    padding: "16.5px 14px"
  }, t.size === "small" && {
    padding: "8.5px 14px"
  }));
}), yT = Y(lf, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (e, t) => t.notchedOutline
})(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
  };
}), bT = Y(Zo, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: Xo
})(({
  theme: e,
  ownerState: t
}) => x({
  padding: "16.5px 14px"
}, !e.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
    caretColor: e.palette.mode === "light" ? null : "#fff",
    borderRadius: "inherit"
  }
}, e.vars && {
  "&:-webkit-autofill": {
    borderRadius: "inherit"
  },
  [e.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, t.size === "small" && {
  padding: "8.5px 14px"
}, t.multiline && {
  padding: 0
}, t.startAdornment && {
  paddingLeft: 0
}, t.endAdornment && {
  paddingRight: 0
})), ea = /* @__PURE__ */ v.forwardRef(function(t, n) {
  var r, s, i, a, l;
  const c = ye({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    components: d = {},
    fullWidth: f = !1,
    inputComponent: p = "input",
    label: m,
    multiline: g = !1,
    notched: h,
    slots: u = {},
    type: b = "text"
  } = c, R = Z(c, pT), P = hT(c), T = gn(), C = Xn({
    props: c,
    muiFormControl: T,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), E = x({}, c, {
    color: C.color || "primary",
    disabled: C.disabled,
    error: C.error,
    focused: C.focused,
    formControl: T,
    fullWidth: f,
    hiddenLabel: C.hiddenLabel,
    multiline: g,
    size: C.size,
    type: b
  }), w = (r = (s = u.root) != null ? s : d.Root) != null ? r : mT, S = (i = (a = u.input) != null ? a : d.Input) != null ? i : bT;
  return /* @__PURE__ */ y.jsx(Hi, x({
    slots: {
      root: w,
      input: S
    },
    renderSuffix: (N) => /* @__PURE__ */ y.jsx(yT, {
      ownerState: E,
      className: P.notchedOutline,
      label: m != null && m !== "" && C.required ? l || (l = /* @__PURE__ */ y.jsxs(v.Fragment, {
        children: [m, " ", "*"]
      })) : m,
      notched: typeof h < "u" ? h : !!(N.startAdornment || N.filled || N.focused)
    }),
    fullWidth: f,
    inputComponent: p,
    multiline: g,
    ref: n,
    type: b
  }, R, {
    classes: x({}, P, {
      notchedOutline: null
    })
  }));
});
process.env.NODE_ENV !== "production" && (ea.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Input: o.elementType,
    Root: o.elementType
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: o.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: o.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: o.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: o.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Wt,
  /**
   * The label of the `input`. It is only used for layout. The actual labelling
   * is handled by `InputLabel`.
   */
  label: o.node,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: o.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: o.bool,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any
});
ea.muiName = "Input";
const cf = ea;
function gT(e) {
  return pe("MuiSelect", e);
}
const vT = he("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), cr = vT;
var pc;
const xT = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"], ET = Y("div", {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${cr.select}`]: t.select
      },
      {
        [`&.${cr.select}`]: t[n.variant]
      },
      {
        [`&.${cr.error}`]: t.error
      },
      {
        [`&.${cr.multiple}`]: t.multiple
      }
    ];
  }
})(of, {
  // Win specificity over the input base
  [`&.${cr.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), CT = Y("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${V(n.variant)}`], n.open && t.iconOpen];
  }
})(sf), TT = Y("input", {
  shouldForwardProp: (e) => qu(e) && e !== "classes",
  name: "MuiSelect",
  slot: "NativeInput",
  overridesResolver: (e, t) => t.nativeInput
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function hc(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function RT(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const OT = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: s,
    open: i,
    error: a
  } = e, l = {
    select: ["select", n, r && "disabled", s && "multiple", a && "error"],
    icon: ["icon", `icon${V(n)}`, i && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return be(l, gT, t);
}, uf = /* @__PURE__ */ v.forwardRef(function(t, n) {
  var r;
  const {
    "aria-describedby": s,
    "aria-label": i,
    autoFocus: a,
    autoWidth: l,
    children: c,
    className: d,
    defaultOpen: f,
    defaultValue: p,
    disabled: m,
    displayEmpty: g,
    error: h = !1,
    IconComponent: u,
    inputRef: b,
    labelId: R,
    MenuProps: P = {},
    multiple: T,
    name: C,
    onBlur: E,
    onChange: w,
    onClose: S,
    onFocus: N,
    onOpen: M,
    open: B,
    readOnly: W,
    renderValue: z,
    SelectDisplayProps: j = {},
    tabIndex: A,
    value: U,
    variant: F = "standard"
  } = t, H = Z(t, xT), [I, K] = el({
    controlled: U,
    default: p,
    name: "Select"
  }), [k, D] = el({
    controlled: B,
    default: f,
    name: "Select"
  }), Q = v.useRef(null), X = v.useRef(null), [q, ee] = v.useState(null), {
    current: J
  } = v.useRef(B != null), [ne, re] = v.useState(), oe = Je(n, b), se = v.useCallback((ae) => {
    X.current = ae, ae && ee(ae);
  }, []), le = q == null ? void 0 : q.parentNode;
  v.useImperativeHandle(oe, () => ({
    focus: () => {
      X.current.focus();
    },
    node: Q.current,
    value: I
  }), [I]), v.useEffect(() => {
    f && k && q && !J && (re(l ? null : le.clientWidth), X.current.focus());
  }, [q, l]), v.useEffect(() => {
    a && X.current.focus();
  }, [a]), v.useEffect(() => {
    if (!R)
      return;
    const ae = xt(X.current).getElementById(R);
    if (ae) {
      const Ee = () => {
        getSelection().isCollapsed && X.current.focus();
      };
      return ae.addEventListener("click", Ee), () => {
        ae.removeEventListener("click", Ee);
      };
    }
  }, [R]);
  const $ = (ae, Ee) => {
    ae ? M && M(Ee) : S && S(Ee), J || (re(l ? null : le.clientWidth), D(ae));
  }, ie = (ae) => {
    ae.button === 0 && (ae.preventDefault(), X.current.focus(), $(!0, ae));
  }, de = (ae) => {
    $(!1, ae);
  }, ge = v.Children.toArray(c), Qe = (ae) => {
    const Ee = ge.find((Xe) => Xe.props.value === ae.target.value);
    Ee !== void 0 && (K(Ee.props.value), w && w(ae, Ee));
  }, it = (ae) => (Ee) => {
    let Xe;
    if (Ee.currentTarget.hasAttribute("tabindex")) {
      if (T) {
        Xe = Array.isArray(I) ? I.slice() : [];
        const Yt = I.indexOf(ae.props.value);
        Yt === -1 ? Xe.push(ae.props.value) : Xe.splice(Yt, 1);
      } else
        Xe = ae.props.value;
      if (ae.props.onClick && ae.props.onClick(Ee), I !== Xe && (K(Xe), w)) {
        const Yt = Ee.nativeEvent || Ee, Lr = new Yt.constructor(Yt.type, Yt);
        Object.defineProperty(Lr, "target", {
          writable: !0,
          value: {
            value: Xe,
            name: C
          }
        }), w(Lr, ae);
      }
      T || $(!1, Ee);
    }
  }, at = (ae) => {
    W || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].indexOf(ae.key) !== -1 && (ae.preventDefault(), $(!0, ae));
  }, tt = q !== null && k, dt = (ae) => {
    !tt && E && (Object.defineProperty(ae, "target", {
      writable: !0,
      value: {
        value: I,
        name: C
      }
    }), E(ae));
  };
  delete H["aria-invalid"];
  let Le, nt;
  const rt = [];
  let Fe = !1, lt = !1;
  (Co({
    value: I
  }) || g) && (z ? Le = z(I) : Fe = !0);
  const jt = ge.map((ae) => {
    if (!/* @__PURE__ */ v.isValidElement(ae))
      return null;
    process.env.NODE_ENV !== "production" && Ho.isFragment(ae) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let Ee;
    if (T) {
      if (!Array.isArray(I))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : fn(2));
      Ee = I.some((Xe) => hc(Xe, ae.props.value)), Ee && Fe && rt.push(ae.props.children);
    } else
      Ee = hc(I, ae.props.value), Ee && Fe && (nt = ae.props.children);
    return Ee && (lt = !0), /* @__PURE__ */ v.cloneElement(ae, {
      "aria-selected": Ee ? "true" : "false",
      onClick: it(ae),
      onKeyUp: (Xe) => {
        Xe.key === " " && Xe.preventDefault(), ae.props.onKeyUp && ae.props.onKeyUp(Xe);
      },
      role: "option",
      selected: Ee,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": ae.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  process.env.NODE_ENV !== "production" && v.useEffect(() => {
    if (!lt && !T && I !== "") {
      const ae = ge.map((Ee) => Ee.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${I}\` for the select ${C ? `(name="${C}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${ae.filter((Ee) => Ee != null).map((Ee) => `\`${Ee}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [lt, ge, T, C, I]), Fe && (T ? rt.length === 0 ? Le = null : Le = rt.reduce((ae, Ee, Xe) => (ae.push(Ee), Xe < rt.length - 1 && ae.push(", "), ae), []) : Le = nt);
  let ft = ne;
  !l && J && q && (ft = le.clientWidth);
  let Te;
  typeof A < "u" ? Te = A : Te = m ? null : 0;
  const ce = j.id || (C ? `mui-component-select-${C}` : void 0), yt = x({}, t, {
    variant: F,
    value: I,
    open: tt,
    error: h
  }), Bt = OT(yt), Kt = x({}, P.PaperProps, (r = P.slotProps) == null ? void 0 : r.paper), tr = Pi();
  return /* @__PURE__ */ y.jsxs(v.Fragment, {
    children: [/* @__PURE__ */ y.jsx(ET, x({
      ref: se,
      tabIndex: Te,
      role: "combobox",
      "aria-controls": tr,
      "aria-disabled": m ? "true" : void 0,
      "aria-expanded": tt ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": i,
      "aria-labelledby": [R, ce].filter(Boolean).join(" ") || void 0,
      "aria-describedby": s,
      onKeyDown: at,
      onMouseDown: m || W ? null : ie,
      onBlur: dt,
      onFocus: N
    }, j, {
      ownerState: yt,
      className: te(j.className, Bt.select, d),
      id: ce,
      children: RT(Le) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        pc || (pc = /* @__PURE__ */ y.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : Le
    })), /* @__PURE__ */ y.jsx(TT, x({
      "aria-invalid": h,
      value: Array.isArray(I) ? I.join(",") : I,
      name: C,
      ref: Q,
      "aria-hidden": !0,
      onChange: Qe,
      tabIndex: -1,
      disabled: m,
      className: Bt.nativeInput,
      autoFocus: a,
      ownerState: yt
    }, H)), /* @__PURE__ */ y.jsx(CT, {
      as: u,
      className: Bt.icon,
      ownerState: yt
    }), /* @__PURE__ */ y.jsx(nT, x({
      id: `menu-${C || ""}`,
      anchorEl: le,
      open: tt,
      onClose: de,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      }
    }, P, {
      MenuListProps: x({
        "aria-labelledby": R,
        role: "listbox",
        "aria-multiselectable": T ? "true" : void 0,
        disableListWrap: !0,
        id: tr
      }, P.MenuListProps),
      slotProps: x({}, P.slotProps, {
        paper: x({}, Kt, {
          style: x({
            minWidth: ft
          }, Kt != null ? Kt.style : null)
        })
      }),
      children: jt
    }))]
  });
});
process.env.NODE_ENV !== "production" && (uf.propTypes = {
  /**
   * @ignore
   */
  "aria-describedby": o.string,
  /**
   * @ignore
   */
  "aria-label": o.string,
  /**
   * @ignore
   */
  autoFocus: o.bool,
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: o.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The CSS class name of the select element.
   */
  className: o.string,
  /**
   * If `true`, the component is toggled on mount. Use when the component open state is not controlled.
   * You can only use it when the `native` prop is `false` (default).
   */
  defaultOpen: o.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the select is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: o.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: o.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: o.elementType.isRequired,
  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: Wt,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: o.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: o.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: o.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: o.string,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: o.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool,
  /**
   * @ignore
   */
  readOnly: o.bool,
  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: o.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: o.object,
  /**
   * @ignore
   */
  tabIndex: o.oneOfType([o.number, o.string]),
  /**
   * @ignore
   */
  type: o.any,
  /**
   * The input value.
   */
  value: o.any,
  /**
   * The variant to use.
   */
  variant: o.oneOf(["standard", "outlined", "filled"])
});
const ST = uf, wT = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"], PT = ["root"], $T = (e) => {
  const {
    classes: t
  } = e;
  return t;
}, ta = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => Et(e) && e !== "variant",
  slot: "Root"
}, _T = Y(Bd, ta)(""), NT = Y(cf, ta)(""), IT = Y(jd, ta)(""), na = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ye({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: s = !1,
    children: i,
    classes: a = {},
    className: l,
    defaultOpen: c = !1,
    displayEmpty: d = !1,
    IconComponent: f = i0,
    id: p,
    input: m,
    inputProps: g,
    label: h,
    labelId: u,
    MenuProps: b,
    multiple: R = !1,
    native: P = !1,
    onClose: T,
    onOpen: C,
    open: E,
    renderValue: w,
    SelectDisplayProps: S,
    variant: N = "outlined"
  } = r, M = Z(r, wT), B = P ? cT : ST, W = gn(), z = Xn({
    props: r,
    muiFormControl: W,
    states: ["variant", "error"]
  }), j = z.variant || N, A = x({}, r, {
    variant: j,
    classes: a
  }), U = $T(A), F = Z(U, PT), H = m || {
    standard: /* @__PURE__ */ y.jsx(_T, {
      ownerState: A
    }),
    outlined: /* @__PURE__ */ y.jsx(NT, {
      label: h,
      ownerState: A
    }),
    filled: /* @__PURE__ */ y.jsx(IT, {
      ownerState: A
    })
  }[j], I = Je(n, Yn(H));
  return /* @__PURE__ */ y.jsx(v.Fragment, {
    children: /* @__PURE__ */ v.cloneElement(H, x({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: B,
      inputProps: x({
        children: i,
        error: z.error,
        IconComponent: f,
        variant: j,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: R
      }, P ? {
        id: p
      } : {
        autoWidth: s,
        defaultOpen: c,
        displayEmpty: d,
        labelId: u,
        MenuProps: b,
        onClose: T,
        onOpen: C,
        open: E,
        renderValue: w,
        SelectDisplayProps: x({
          id: p
        }, S)
      }, g, {
        classes: g ? vt(F, g.classes) : F
      }, m ? m.props.inputProps : {})
    }, (R && P || d) && j === "outlined" ? {
      notched: !0
    } : {}, {
      ref: I,
      className: te(H.props.className, l, U.root)
    }, !m && {
      variant: j
    }, M))
  });
});
process.env.NODE_ENV !== "production" && (na.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   * @default false
   */
  autoWidth: o.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   * @default {}
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).
   * You can only use it when the `native` prop is `false` (default).
   * @default false
   */
  defaultOpen: o.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value, a function can be passed to the `renderValue` prop which
   * returns the value to be displayed when no items are selected.
   *
   * ⚠️ When using this prop, make sure the label doesn't overlap with the empty displayed value.
   * The label should either be hidden or forced to a shrunk state.
   * @default false
   */
  displayEmpty: o.bool,
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent: o.elementType,
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: o.string,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: o.element,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: o.object,
  /**
   * See [OutlinedInput#label](/material-ui/api/outlined-input/#props)
   */
  label: o.node,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: o.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: o.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: o.bool,
  /**
   * If `true`, the component uses a native `select` element.
   * @default false
   */
  native: o.bool,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {SelectChangeEvent<Value>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: o.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select collapses).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: o.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select expands).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: o.func,
  /**
   * If `true`, the component is shown.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: o.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: o.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: o.oneOfType([o.oneOf([""]), o.any]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
na.muiName = "Select";
const kT = na;
function jT(e) {
  return pe("MuiToolbar", e);
}
he("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const AT = ["className", "component", "disableGutters", "variant"], MT = (e) => {
  const {
    classes: t,
    disableGutters: n,
    variant: r
  } = e;
  return be({
    root: ["root", !n && "gutters", r]
  }, jT, t);
}, DT = Y("div", {
  name: "MuiToolbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disableGutters && t.gutters, t[n.variant]];
  }
})(({
  theme: e,
  ownerState: t
}) => x({
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
}) => t.variant === "regular" && e.mixins.toolbar), df = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiToolbar"
  }), {
    className: s,
    component: i = "div",
    disableGutters: a = !1,
    variant: l = "regular"
  } = r, c = Z(r, AT), d = x({}, r, {
    component: i,
    disableGutters: a,
    variant: l
  }), f = MT(d);
  return /* @__PURE__ */ y.jsx(DT, x({
    as: i,
    className: te(f.root, s),
    ref: n,
    ownerState: d
  }, c));
});
process.env.NODE_ENV !== "production" && (df.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The Toolbar children, usually a mixture of `IconButton`, `Button` and `Typography`.
   * The Toolbar is a flex container, allowing flex item properties to be used to lay out the children.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, disables gutter padding.
   * @default false
   */
  disableGutters: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * @default 'regular'
   */
  variant: o.oneOfType([o.oneOf(["dense", "regular"]), o.string])
});
const Ns = df;
function FT(e) {
  return pe("MuiTextField", e);
}
he("MuiTextField", ["root"]);
const LT = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"], BT = {
  standard: Bd,
  filled: jd,
  outlined: cf
}, zT = (e) => {
  const {
    classes: t
  } = e;
  return be({
    root: ["root"]
  }, FT, t);
}, UT = Y(Vx, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), ff = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiTextField"
  }), {
    autoComplete: s,
    autoFocus: i = !1,
    children: a,
    className: l,
    color: c = "primary",
    defaultValue: d,
    disabled: f = !1,
    error: p = !1,
    FormHelperTextProps: m,
    fullWidth: g = !1,
    helperText: h,
    id: u,
    InputLabelProps: b,
    inputProps: R,
    InputProps: P,
    inputRef: T,
    label: C,
    maxRows: E,
    minRows: w,
    multiline: S = !1,
    name: N,
    onBlur: M,
    onChange: B,
    onFocus: W,
    placeholder: z,
    required: j = !1,
    rows: A,
    select: U = !1,
    SelectProps: F,
    type: H,
    value: I,
    variant: K = "outlined"
  } = r, k = Z(r, LT), D = x({}, r, {
    autoFocus: i,
    color: c,
    disabled: f,
    error: p,
    fullWidth: g,
    multiline: S,
    required: j,
    select: U,
    variant: K
  }), Q = zT(D);
  process.env.NODE_ENV !== "production" && U && !a && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const X = {};
  K === "outlined" && (b && typeof b.shrink < "u" && (X.notched = b.shrink), X.label = C), U && ((!F || !F.native) && (X.id = void 0), X["aria-describedby"] = void 0);
  const q = Pi(u), ee = h && q ? `${q}-helper-text` : void 0, J = C && q ? `${q}-label` : void 0, ne = BT[K], re = /* @__PURE__ */ y.jsx(ne, x({
    "aria-describedby": ee,
    autoComplete: s,
    autoFocus: i,
    defaultValue: d,
    fullWidth: g,
    multiline: S,
    name: N,
    rows: A,
    maxRows: E,
    minRows: w,
    type: H,
    value: I,
    id: q,
    inputRef: T,
    onBlur: M,
    onChange: B,
    onFocus: W,
    placeholder: z,
    inputProps: R
  }, X, P));
  return /* @__PURE__ */ y.jsxs(UT, x({
    className: te(Q.root, l),
    disabled: f,
    error: p,
    fullWidth: g,
    ref: n,
    required: j,
    color: c,
    variant: K,
    ownerState: D
  }, k, {
    children: [C != null && C !== "" && /* @__PURE__ */ y.jsx(AE, x({
      htmlFor: q,
      id: J
    }, b, {
      children: C
    })), U ? /* @__PURE__ */ y.jsx(kT, x({
      "aria-describedby": ee,
      id: q,
      labelId: J,
      value: I,
      input: re
    }, F, {
      children: a
    })) : re, h && /* @__PURE__ */ y.jsx(Gx, x({
      id: ee
    }, m, {
      children: h
    }))]
  }));
});
process.env.NODE_ENV !== "production" && (ff.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: o.bool,
  /**
   * @ignore
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: o.bool,
  /**
   * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
   */
  FormHelperTextProps: o.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The helper text content.
   */
  helperText: o.node,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: o.string,
  /**
   * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   */
  InputLabelProps: o.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: o.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Wt,
  /**
   * The label content.
   */
  label: o.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: o.oneOf(["dense", "none", "normal"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * Render a [`Select`](/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   * @default false
   */
  select: o.bool,
  /**
   * Props applied to the [`Select`](/material-ui/api/select/) element.
   */
  SelectProps: o.object,
  /**
   * The size of the component.
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
const VT = ff, pf = ({ size: e = 40, message: t, fullScreen: n = !1 }) => {
  const r = y.jsxs(xe, { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2, children: [y.jsx(rx, { size: e }), t && y.jsx(me, { variant: "body2", color: "textSecondary", children: t })] });
  return n ? y.jsx(xe, { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "background.paper", zIndex: 9999, children: r }) : r;
}, qT = Ze(/* @__PURE__ */ y.jsx("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
}), "Add"), hf = Ze(/* @__PURE__ */ y.jsx("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M9 17H7v-5h2zm4 0h-2v-3h2zm0-5h-2v-2h2zm4 5h-2V7h2z"
}), "Analytics"), mc = Ze(/* @__PURE__ */ y.jsx("path", {
  d: "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m2 14H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z"
}), "Assignment"), WT = Ze(/* @__PURE__ */ y.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"
}), "CheckCircle"), HT = Ze(/* @__PURE__ */ y.jsx("path", {
  d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"
}), "ChevronLeft"), KT = Ze(/* @__PURE__ */ y.jsx("path", {
  d: "M3 13h8V3H3zm0 8h8v-6H3zm10 0h8V11h-8zm0-18v6h8V3z"
}), "Dashboard"), oo = Ze(/* @__PURE__ */ y.jsx("path", {
  d: "M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-6 16h-2v-2h2zm2.07-7.75-.9.92C13.45 11.9 13 12.5 13 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25"
}), "LiveHelp"), YT = Ze(/* @__PURE__ */ y.jsx("path", {
  d: "M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
}), "Menu"), GT = Ze(/* @__PURE__ */ y.jsx("path", {
  d: "M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
}), "NavigateNext"), QT = Ze(/* @__PURE__ */ y.jsx("path", {
  d: "M8 5v14l11-7z"
}), "PlayArrow"), XT = Ze([/* @__PURE__ */ y.jsx("path", {
  d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
}, "0"), /* @__PURE__ */ y.jsx("path", {
  d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
}, "1")], "Schedule"), ns = Ze(/* @__PURE__ */ y.jsx("path", {
  d: "M5 13.18v4L12 21l7-3.82v-4L12 17zM12 3 1 9l11 6 9-4.91V17h2V9z"
}), "School"), JT = Ze(/* @__PURE__ */ y.jsx("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
}), "Search"), ZT = Ze(/* @__PURE__ */ y.jsx("path", {
  d: "m16 6 2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"
}), "TrendingUp"), ai = Ze(/* @__PURE__ */ y.jsx("path", {
  d: "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-8 12.5v-9l6 4.5z"
}), "VideoLibrary"), mf = ({ title: e, subtitle: t, breadcrumbs: n, action: r }) => y.jsxs(xe, { mb: 4, children: [n && n.length > 0 && y.jsx(N0, { separator: y.jsx(GT, { fontSize: "small" }), sx: { mb: 2 }, children: n.map((s, i) => y.jsx(tC, { href: s.href, color: i === n.length - 1 ? "textPrimary" : "inherit", underline: i === n.length - 1 ? "none" : "hover", sx: { cursor: s.href ? "pointer" : "default" }, children: s.label }, i)) }), y.jsxs(xe, { display: "flex", justifyContent: "space-between", alignItems: "flex-start", children: [y.jsxs(xe, { children: [y.jsx(me, { variant: "h4", component: "h1", gutterBottom: !0, children: e }), t && y.jsx(me, { variant: "body1", color: "textSecondary", children: t })] }), r && y.jsx(es, { variant: "contained", startIcon: r.icon || y.jsx(qT, {}), onClick: r.onClick, size: "large", children: r.label })] })] }), e1 = ({ icon: e, title: t, description: n, action: r }) => y.jsxs(xe, { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", py: 8, px: 2, children: [e && y.jsx(xe, { sx: { fontSize: 64, color: "text.secondary", mb: 2 }, children: e }), y.jsx(me, { variant: "h6", gutterBottom: !0, color: "textPrimary", children: t }), n && y.jsx(me, { variant: "body1", color: "textSecondary", paragraph: !0, maxWidth: 400, children: n }), r && y.jsx(es, { variant: "contained", onClick: r.onClick, children: r.label })] }), t1 = process.env.REACT_APP_API_URL || "http://localhost:3000/api";
function yf(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: n1 } = Object.prototype, { getPrototypeOf: ra } = Object, { iterator: rs, toStringTag: bf } = Symbol, os = ((e) => (t) => {
  const n = n1.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), kt = (e) => (e = e.toLowerCase(), (t) => os(t) === e), ss = (e) => (t) => typeof t === e, { isArray: Zn } = Array, Wn = ss("undefined");
function Mr(e) {
  return e !== null && !Wn(e) && e.constructor !== null && !Wn(e.constructor) && ht(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const gf = kt("ArrayBuffer");
function r1(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && gf(e.buffer), t;
}
const o1 = ss("string"), ht = ss("function"), vf = ss("number"), Dr = (e) => e !== null && typeof e == "object", s1 = (e) => e === !0 || e === !1, so = (e) => {
  if (os(e) !== "object")
    return !1;
  const t = ra(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(bf in e) && !(rs in e);
}, i1 = (e) => {
  if (!Dr(e) || Mr(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, a1 = kt("Date"), l1 = kt("File"), c1 = kt("Blob"), u1 = kt("FileList"), d1 = (e) => Dr(e) && ht(e.pipe), f1 = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || ht(e.append) && ((t = os(e)) === "formdata" || // detect form-data instance
  t === "object" && ht(e.toString) && e.toString() === "[object FormData]"));
}, p1 = kt("URLSearchParams"), [h1, m1, y1, b1] = ["ReadableStream", "Request", "Response", "Headers"].map(kt), g1 = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Fr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), Zn(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    if (Mr(e))
      return;
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length;
    let l;
    for (r = 0; r < a; r++)
      l = i[r], t.call(null, e[l], l, e);
  }
}
function xf(e, t) {
  if (Mr(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const un = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Ef = (e) => !Wn(e) && e !== un;
function li() {
  const { caseless: e, skipUndefined: t } = Ef(this) && this || {}, n = {}, r = (s, i) => {
    const a = e && xf(n, i) || i;
    so(n[a]) && so(s) ? n[a] = li(n[a], s) : so(s) ? n[a] = li({}, s) : Zn(s) ? n[a] = s.slice() : (!t || !Wn(s)) && (n[a] = s);
  };
  for (let s = 0, i = arguments.length; s < i; s++)
    arguments[s] && Fr(arguments[s], r);
  return n;
}
const v1 = (e, t, n, { allOwnKeys: r } = {}) => (Fr(t, (s, i) => {
  n && ht(s) ? e[i] = yf(s, n) : e[i] = s;
}, { allOwnKeys: r }), e), x1 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), E1 = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, C1 = (e, t, n, r) => {
  let s, i, a;
  const l = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
      a = s[i], (!r || r(a, e, t)) && !l[a] && (t[a] = e[a], l[a] = !0);
    e = n !== !1 && ra(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, T1 = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, R1 = (e) => {
  if (!e)
    return null;
  if (Zn(e))
    return e;
  let t = e.length;
  if (!vf(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, O1 = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ra(Uint8Array)), S1 = (e, t) => {
  const r = (e && e[rs]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const i = s.value;
    t.call(e, i[0], i[1]);
  }
}, w1 = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, P1 = kt("HTMLFormElement"), $1 = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), yc = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), _1 = kt("RegExp"), Cf = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Fr(n, (s, i) => {
    let a;
    (a = t(s, i, e)) !== !1 && (r[i] = a || s);
  }), Object.defineProperties(e, r);
}, N1 = (e) => {
  Cf(e, (t, n) => {
    if (ht(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (ht(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, I1 = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((i) => {
      n[i] = !0;
    });
  };
  return Zn(e) ? r(e) : r(String(e).split(t)), n;
}, k1 = () => {
}, j1 = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function A1(e) {
  return !!(e && ht(e.append) && e[bf] === "FormData" && e[rs]);
}
const M1 = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (Dr(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (Mr(r))
        return r;
      if (!("toJSON" in r)) {
        t[s] = r;
        const i = Zn(r) ? [] : {};
        return Fr(r, (a, l) => {
          const c = n(a, s + 1);
          !Wn(c) && (i[l] = c);
        }), t[s] = void 0, i;
      }
    }
    return r;
  };
  return n(e, 0);
}, D1 = kt("AsyncFunction"), F1 = (e) => e && (Dr(e) || ht(e)) && ht(e.then) && ht(e.catch), Tf = ((e, t) => e ? setImmediate : t ? ((n, r) => (un.addEventListener("message", ({ source: s, data: i }) => {
  s === un && i === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), un.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  ht(un.postMessage)
), L1 = typeof queueMicrotask < "u" ? queueMicrotask.bind(un) : typeof process < "u" && process.nextTick || Tf, B1 = (e) => e != null && ht(e[rs]), _ = {
  isArray: Zn,
  isArrayBuffer: gf,
  isBuffer: Mr,
  isFormData: f1,
  isArrayBufferView: r1,
  isString: o1,
  isNumber: vf,
  isBoolean: s1,
  isObject: Dr,
  isPlainObject: so,
  isEmptyObject: i1,
  isReadableStream: h1,
  isRequest: m1,
  isResponse: y1,
  isHeaders: b1,
  isUndefined: Wn,
  isDate: a1,
  isFile: l1,
  isBlob: c1,
  isRegExp: _1,
  isFunction: ht,
  isStream: d1,
  isURLSearchParams: p1,
  isTypedArray: O1,
  isFileList: u1,
  forEach: Fr,
  merge: li,
  extend: v1,
  trim: g1,
  stripBOM: x1,
  inherits: E1,
  toFlatObject: C1,
  kindOf: os,
  kindOfTest: kt,
  endsWith: T1,
  toArray: R1,
  forEachEntry: S1,
  matchAll: w1,
  isHTMLForm: P1,
  hasOwnProperty: yc,
  hasOwnProp: yc,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Cf,
  freezeMethods: N1,
  toObjectSet: I1,
  toCamelCase: $1,
  noop: k1,
  toFiniteNumber: j1,
  findKey: xf,
  global: un,
  isContextDefined: Ef,
  isSpecCompliantForm: A1,
  toJSONObject: M1,
  isAsyncFn: D1,
  isThenable: F1,
  setImmediate: Tf,
  asap: L1,
  isIterable: B1
};
function fe(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
_.inherits(fe, Error, {
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
      config: _.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Rf = fe.prototype, Of = {};
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
  Of[e] = { value: e };
});
Object.defineProperties(fe, Of);
Object.defineProperty(Rf, "isAxiosError", { value: !0 });
fe.from = (e, t, n, r, s, i) => {
  const a = Object.create(Rf);
  _.toFlatObject(e, a, function(f) {
    return f !== Error.prototype;
  }, (d) => d !== "isAxiosError");
  const l = e && e.message ? e.message : "Error", c = t == null && e ? e.code : t;
  return fe.call(a, l, c, n, r, s), e && a.cause == null && Object.defineProperty(a, "cause", { value: e, configurable: !0 }), a.name = e && e.name || "Error", i && Object.assign(a, i), a;
};
const z1 = null;
function ci(e) {
  return _.isPlainObject(e) || _.isArray(e);
}
function Sf(e) {
  return _.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function bc(e, t, n) {
  return e ? e.concat(t).map(function(s, i) {
    return s = Sf(s), !n && i ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function U1(e) {
  return _.isArray(e) && !e.some(ci);
}
const V1 = _.toFlatObject(_, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function is(e, t, n) {
  if (!_.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = _.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(u, b) {
    return !_.isUndefined(b[u]);
  });
  const r = n.metaTokens, s = n.visitor || f, i = n.dots, a = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && _.isSpecCompliantForm(t);
  if (!_.isFunction(s))
    throw new TypeError("visitor must be a function");
  function d(h) {
    if (h === null)
      return "";
    if (_.isDate(h))
      return h.toISOString();
    if (_.isBoolean(h))
      return h.toString();
    if (!c && _.isBlob(h))
      throw new fe("Blob is not supported. Use a Buffer instead.");
    return _.isArrayBuffer(h) || _.isTypedArray(h) ? c && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function f(h, u, b) {
    let R = h;
    if (h && !b && typeof h == "object") {
      if (_.endsWith(u, "{}"))
        u = r ? u : u.slice(0, -2), h = JSON.stringify(h);
      else if (_.isArray(h) && U1(h) || (_.isFileList(h) || _.endsWith(u, "[]")) && (R = _.toArray(h)))
        return u = Sf(u), R.forEach(function(T, C) {
          !(_.isUndefined(T) || T === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? bc([u], C, i) : a === null ? u : u + "[]",
            d(T)
          );
        }), !1;
    }
    return ci(h) ? !0 : (t.append(bc(b, u, i), d(h)), !1);
  }
  const p = [], m = Object.assign(V1, {
    defaultVisitor: f,
    convertValue: d,
    isVisitable: ci
  });
  function g(h, u) {
    if (!_.isUndefined(h)) {
      if (p.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + u.join("."));
      p.push(h), _.forEach(h, function(R, P) {
        (!(_.isUndefined(R) || R === null) && s.call(
          t,
          R,
          _.isString(P) ? P.trim() : P,
          u,
          m
        )) === !0 && g(R, u ? u.concat(P) : [P]);
      }), p.pop();
    }
  }
  if (!_.isObject(e))
    throw new TypeError("data must be an object");
  return g(e), t;
}
function gc(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function oa(e, t) {
  this._pairs = [], e && is(e, this, t);
}
const wf = oa.prototype;
wf.append = function(t, n) {
  this._pairs.push([t, n]);
};
wf.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, gc);
  } : gc;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function q1(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Pf(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || q1;
  _.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let i;
  if (s ? i = s(t, n) : i = _.isURLSearchParams(t) ? t.toString() : new oa(t, n).toString(r), i) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class W1 {
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
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
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
    _.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const vc = W1, $f = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, H1 = typeof URLSearchParams < "u" ? URLSearchParams : oa, K1 = typeof FormData < "u" ? FormData : null, Y1 = typeof Blob < "u" ? Blob : null, G1 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: H1,
    FormData: K1,
    Blob: Y1
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, sa = typeof window < "u" && typeof document < "u", ui = typeof navigator == "object" && navigator || void 0, Q1 = sa && (!ui || ["ReactNative", "NativeScript", "NS"].indexOf(ui.product) < 0), X1 = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), J1 = sa && window.location.href || "http://localhost", Z1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: sa,
  hasStandardBrowserEnv: Q1,
  hasStandardBrowserWebWorkerEnv: X1,
  navigator: ui,
  origin: J1
}, Symbol.toStringTag, { value: "Module" })), st = {
  ...Z1,
  ...G1
};
function eR(e, t) {
  return is(e, new st.classes.URLSearchParams(), {
    visitor: function(n, r, s, i) {
      return st.isNode && _.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function tR(e) {
  return _.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function nR(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let i;
  for (r = 0; r < s; r++)
    i = n[r], t[i] = e[i];
  return t;
}
function _f(e) {
  function t(n, r, s, i) {
    let a = n[i++];
    if (a === "__proto__")
      return !0;
    const l = Number.isFinite(+a), c = i >= n.length;
    return a = !a && _.isArray(s) ? s.length : a, c ? (_.hasOwnProp(s, a) ? s[a] = [s[a], r] : s[a] = r, !l) : ((!s[a] || !_.isObject(s[a])) && (s[a] = []), t(n, r, s[a], i) && _.isArray(s[a]) && (s[a] = nR(s[a])), !l);
  }
  if (_.isFormData(e) && _.isFunction(e.entries)) {
    const n = {};
    return _.forEachEntry(e, (r, s) => {
      t(tR(r), s, n, 0);
    }), n;
  }
  return null;
}
function rR(e, t, n) {
  if (_.isString(e))
    try {
      return (t || JSON.parse)(e), _.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const ia = {
  transitional: $f,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, i = _.isObject(t);
    if (i && _.isHTMLForm(t) && (t = new FormData(t)), _.isFormData(t))
      return s ? JSON.stringify(_f(t)) : t;
    if (_.isArrayBuffer(t) || _.isBuffer(t) || _.isStream(t) || _.isFile(t) || _.isBlob(t) || _.isReadableStream(t))
      return t;
    if (_.isArrayBufferView(t))
      return t.buffer;
    if (_.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return eR(t, this.formSerializer).toString();
      if ((l = _.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return is(
          l ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || s ? (n.setContentType("application/json", !1), rR(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || ia.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (_.isResponse(t) || _.isReadableStream(t))
      return t;
    if (t && _.isString(t) && (r && !this.responseType || s)) {
      const a = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t, this.parseReviver);
      } catch (l) {
        if (a)
          throw l.name === "SyntaxError" ? fe.from(l, fe.ERR_BAD_RESPONSE, this, null, this.response) : l;
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
    FormData: st.classes.FormData,
    Blob: st.classes.Blob
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
_.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ia.headers[e] = {};
});
const aa = ia, oR = _.toObjectSet([
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
]), sR = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(a) {
    s = a.indexOf(":"), n = a.substring(0, s).trim().toLowerCase(), r = a.substring(s + 1).trim(), !(!n || t[n] && oR[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, xc = Symbol("internals");
function ur(e) {
  return e && String(e).trim().toLowerCase();
}
function io(e) {
  return e === !1 || e == null ? e : _.isArray(e) ? e.map(io) : String(e);
}
function iR(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const aR = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Is(e, t, n, r, s) {
  if (_.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!_.isString(t)) {
    if (_.isString(r))
      return t.indexOf(r) !== -1;
    if (_.isRegExp(r))
      return r.test(t);
  }
}
function lR(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function cR(e, t) {
  const n = _.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, i, a) {
        return this[r].call(this, t, s, i, a);
      },
      configurable: !0
    });
  });
}
class as {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function i(l, c, d) {
      const f = ur(c);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const p = _.findKey(s, f);
      (!p || s[p] === void 0 || d === !0 || d === void 0 && s[p] !== !1) && (s[p || c] = io(l));
    }
    const a = (l, c) => _.forEach(l, (d, f) => i(d, f, c));
    if (_.isPlainObject(t) || t instanceof this.constructor)
      a(t, n);
    else if (_.isString(t) && (t = t.trim()) && !aR(t))
      a(sR(t), n);
    else if (_.isObject(t) && _.isIterable(t)) {
      let l = {}, c, d;
      for (const f of t) {
        if (!_.isArray(f))
          throw TypeError("Object iterator must return a key-value pair");
        l[d = f[0]] = (c = l[d]) ? _.isArray(c) ? [...c, f[1]] : [c, f[1]] : f[1];
      }
      a(l, n);
    } else
      t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = ur(t), t) {
      const r = _.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return iR(s);
        if (_.isFunction(n))
          return n.call(this, s, r);
        if (_.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = ur(t), t) {
      const r = _.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Is(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function i(a) {
      if (a = ur(a), a) {
        const l = _.findKey(r, a);
        l && (!n || Is(r, r[l], l, n)) && (delete r[l], s = !0);
      }
    }
    return _.isArray(t) ? t.forEach(i) : i(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || Is(this, this[i], i, t, !0)) && (delete this[i], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return _.forEach(this, (s, i) => {
      const a = _.findKey(r, i);
      if (a) {
        n[a] = io(s), delete n[i];
        return;
      }
      const l = t ? lR(i) : String(i).trim();
      l !== i && delete n[i], n[l] = io(s), r[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return _.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && _.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
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
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[xc] = this[xc] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function i(a) {
      const l = ur(a);
      r[l] || (cR(s, a), r[l] = !0);
    }
    return _.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
as.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
_.reduceDescriptors(as.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
_.freezeMethods(as);
const Nt = as;
function ks(e, t) {
  const n = this || aa, r = t || n, s = Nt.from(r.headers);
  let i = r.data;
  return _.forEach(e, function(l) {
    i = l.call(n, i, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), i;
}
function Nf(e) {
  return !!(e && e.__CANCEL__);
}
function er(e, t, n) {
  fe.call(this, e ?? "canceled", fe.ERR_CANCELED, t, n), this.name = "CanceledError";
}
_.inherits(er, fe, {
  __CANCEL__: !0
});
function If(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new fe(
    "Request failed with status code " + n.status,
    [fe.ERR_BAD_REQUEST, fe.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function uR(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function dR(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, i = 0, a;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const d = Date.now(), f = r[i];
    a || (a = d), n[s] = c, r[s] = d;
    let p = i, m = 0;
    for (; p !== s; )
      m += n[p++], p = p % e;
    if (s = (s + 1) % e, s === i && (i = (i + 1) % e), d - a < t)
      return;
    const g = f && d - f;
    return g ? Math.round(m * 1e3 / g) : void 0;
  };
}
function fR(e, t) {
  let n = 0, r = 1e3 / t, s, i;
  const a = (d, f = Date.now()) => {
    n = f, s = null, i && (clearTimeout(i), i = null), e(...d);
  };
  return [(...d) => {
    const f = Date.now(), p = f - n;
    p >= r ? a(d, f) : (s = d, i || (i = setTimeout(() => {
      i = null, a(s);
    }, r - p)));
  }, () => s && a(s)];
}
const Ro = (e, t, n = 3) => {
  let r = 0;
  const s = dR(50, 250);
  return fR((i) => {
    const a = i.loaded, l = i.lengthComputable ? i.total : void 0, c = a - r, d = s(c), f = a <= l;
    r = a;
    const p = {
      loaded: a,
      total: l,
      progress: l ? a / l : void 0,
      bytes: c,
      rate: d || void 0,
      estimated: d && l && f ? (l - a) / d : void 0,
      event: i,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(p);
  }, n);
}, Ec = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Cc = (e) => (...t) => _.asap(() => e(...t)), pR = st.hasStandardBrowserEnv ? ((e, t) => (n) => (n = new URL(n, st.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(st.origin),
  st.navigator && /(msie|trident)/i.test(st.navigator.userAgent)
) : () => !0, hR = st.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, i) {
      const a = [e + "=" + encodeURIComponent(t)];
      _.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), _.isString(r) && a.push("path=" + r), _.isString(s) && a.push("domain=" + s), i === !0 && a.push("secure"), document.cookie = a.join("; ");
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
function mR(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function yR(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function kf(e, t, n) {
  let r = !mR(t);
  return e && (r || n == !1) ? yR(e, t) : t;
}
const Tc = (e) => e instanceof Nt ? { ...e } : e;
function mn(e, t) {
  t = t || {};
  const n = {};
  function r(d, f, p, m) {
    return _.isPlainObject(d) && _.isPlainObject(f) ? _.merge.call({ caseless: m }, d, f) : _.isPlainObject(f) ? _.merge({}, f) : _.isArray(f) ? f.slice() : f;
  }
  function s(d, f, p, m) {
    if (_.isUndefined(f)) {
      if (!_.isUndefined(d))
        return r(void 0, d, p, m);
    } else
      return r(d, f, p, m);
  }
  function i(d, f) {
    if (!_.isUndefined(f))
      return r(void 0, f);
  }
  function a(d, f) {
    if (_.isUndefined(f)) {
      if (!_.isUndefined(d))
        return r(void 0, d);
    } else
      return r(void 0, f);
  }
  function l(d, f, p) {
    if (p in t)
      return r(d, f);
    if (p in e)
      return r(void 0, d);
  }
  const c = {
    url: i,
    method: i,
    data: i,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: l,
    headers: (d, f, p) => s(Tc(d), Tc(f), p, !0)
  };
  return _.forEach(Object.keys({ ...e, ...t }), function(f) {
    const p = c[f] || s, m = p(e[f], t[f], f);
    _.isUndefined(m) && p !== l || (n[f] = m);
  }), n;
}
const jf = (e) => {
  const t = mn({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: i, headers: a, auth: l } = t;
  if (t.headers = a = Nt.from(a), t.url = Pf(kf(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), l && a.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  ), _.isFormData(n)) {
    if (st.hasStandardBrowserEnv || st.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if (_.isFunction(n.getHeaders)) {
      const c = n.getHeaders(), d = ["content-type", "content-length"];
      Object.entries(c).forEach(([f, p]) => {
        d.includes(f.toLowerCase()) && a.set(f, p);
      });
    }
  }
  if (st.hasStandardBrowserEnv && (r && _.isFunction(r) && (r = r(t)), r || r !== !1 && pR(t.url))) {
    const c = s && i && hR.read(i);
    c && a.set(s, c);
  }
  return t;
}, bR = typeof XMLHttpRequest < "u", gR = bR && function(e) {
  return new Promise(function(n, r) {
    const s = jf(e);
    let i = s.data;
    const a = Nt.from(s.headers).normalize();
    let { responseType: l, onUploadProgress: c, onDownloadProgress: d } = s, f, p, m, g, h;
    function u() {
      g && g(), h && h(), s.cancelToken && s.cancelToken.unsubscribe(f), s.signal && s.signal.removeEventListener("abort", f);
    }
    let b = new XMLHttpRequest();
    b.open(s.method.toUpperCase(), s.url, !0), b.timeout = s.timeout;
    function R() {
      if (!b)
        return;
      const T = Nt.from(
        "getAllResponseHeaders" in b && b.getAllResponseHeaders()
      ), E = {
        data: !l || l === "text" || l === "json" ? b.responseText : b.response,
        status: b.status,
        statusText: b.statusText,
        headers: T,
        config: e,
        request: b
      };
      If(function(S) {
        n(S), u();
      }, function(S) {
        r(S), u();
      }, E), b = null;
    }
    "onloadend" in b ? b.onloadend = R : b.onreadystatechange = function() {
      !b || b.readyState !== 4 || b.status === 0 && !(b.responseURL && b.responseURL.indexOf("file:") === 0) || setTimeout(R);
    }, b.onabort = function() {
      b && (r(new fe("Request aborted", fe.ECONNABORTED, e, b)), b = null);
    }, b.onerror = function(C) {
      const E = C && C.message ? C.message : "Network Error", w = new fe(E, fe.ERR_NETWORK, e, b);
      w.event = C || null, r(w), b = null;
    }, b.ontimeout = function() {
      let C = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const E = s.transitional || $f;
      s.timeoutErrorMessage && (C = s.timeoutErrorMessage), r(new fe(
        C,
        E.clarifyTimeoutError ? fe.ETIMEDOUT : fe.ECONNABORTED,
        e,
        b
      )), b = null;
    }, i === void 0 && a.setContentType(null), "setRequestHeader" in b && _.forEach(a.toJSON(), function(C, E) {
      b.setRequestHeader(E, C);
    }), _.isUndefined(s.withCredentials) || (b.withCredentials = !!s.withCredentials), l && l !== "json" && (b.responseType = s.responseType), d && ([m, h] = Ro(d, !0), b.addEventListener("progress", m)), c && b.upload && ([p, g] = Ro(c), b.upload.addEventListener("progress", p), b.upload.addEventListener("loadend", g)), (s.cancelToken || s.signal) && (f = (T) => {
      b && (r(!T || T.type ? new er(null, e, b) : T), b.abort(), b = null);
    }, s.cancelToken && s.cancelToken.subscribe(f), s.signal && (s.signal.aborted ? f() : s.signal.addEventListener("abort", f)));
    const P = uR(s.url);
    if (P && st.protocols.indexOf(P) === -1) {
      r(new fe("Unsupported protocol " + P + ":", fe.ERR_BAD_REQUEST, e));
      return;
    }
    b.send(i || null);
  });
}, vR = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const i = function(d) {
      if (!s) {
        s = !0, l();
        const f = d instanceof Error ? d : this.reason;
        r.abort(f instanceof fe ? f : new er(f instanceof Error ? f.message : f));
      }
    };
    let a = t && setTimeout(() => {
      a = null, i(new fe(`timeout ${t} of ms exceeded`, fe.ETIMEDOUT));
    }, t);
    const l = () => {
      e && (a && clearTimeout(a), a = null, e.forEach((d) => {
        d.unsubscribe ? d.unsubscribe(i) : d.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((d) => d.addEventListener("abort", i));
    const { signal: c } = r;
    return c.unsubscribe = () => _.asap(l), c;
  }
}, xR = vR, ER = function* (e, t) {
  let n = e.byteLength;
  if (!t || n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, CR = async function* (e, t) {
  for await (const n of TR(e))
    yield* ER(n, t);
}, TR = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, Rc = (e, t, n, r) => {
  const s = CR(e, t);
  let i = 0, a, l = (c) => {
    a || (a = !0, r && r(c));
  };
  return new ReadableStream({
    async pull(c) {
      try {
        const { done: d, value: f } = await s.next();
        if (d) {
          l(), c.close();
          return;
        }
        let p = f.byteLength;
        if (n) {
          let m = i += p;
          n(m);
        }
        c.enqueue(new Uint8Array(f));
      } catch (d) {
        throw l(d), d;
      }
    },
    cancel(c) {
      return l(c), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, Oc = 64 * 1024, { isFunction: Kr } = _, RR = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(_.global), {
  ReadableStream: Sc,
  TextEncoder: wc
} = _.global, Pc = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, OR = (e) => {
  e = _.merge.call({
    skipUndefined: !0
  }, RR, e);
  const { fetch: t, Request: n, Response: r } = e, s = t ? Kr(t) : typeof fetch == "function", i = Kr(n), a = Kr(r);
  if (!s)
    return !1;
  const l = s && Kr(Sc), c = s && (typeof wc == "function" ? ((h) => (u) => h.encode(u))(new wc()) : async (h) => new Uint8Array(await new n(h).arrayBuffer())), d = i && l && Pc(() => {
    let h = !1;
    const u = new n(st.origin, {
      body: new Sc(),
      method: "POST",
      get duplex() {
        return h = !0, "half";
      }
    }).headers.has("Content-Type");
    return h && !u;
  }), f = a && l && Pc(() => _.isReadableStream(new r("").body)), p = {
    stream: f && ((h) => h.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((h) => {
    !p[h] && (p[h] = (u, b) => {
      let R = u && u[h];
      if (R)
        return R.call(u);
      throw new fe(`Response type '${h}' is not supported`, fe.ERR_NOT_SUPPORT, b);
    });
  });
  const m = async (h) => {
    if (h == null)
      return 0;
    if (_.isBlob(h))
      return h.size;
    if (_.isSpecCompliantForm(h))
      return (await new n(st.origin, {
        method: "POST",
        body: h
      }).arrayBuffer()).byteLength;
    if (_.isArrayBufferView(h) || _.isArrayBuffer(h))
      return h.byteLength;
    if (_.isURLSearchParams(h) && (h = h + ""), _.isString(h))
      return (await c(h)).byteLength;
  }, g = async (h, u) => {
    const b = _.toFiniteNumber(h.getContentLength());
    return b ?? m(u);
  };
  return async (h) => {
    let {
      url: u,
      method: b,
      data: R,
      signal: P,
      cancelToken: T,
      timeout: C,
      onDownloadProgress: E,
      onUploadProgress: w,
      responseType: S,
      headers: N,
      withCredentials: M = "same-origin",
      fetchOptions: B
    } = jf(h), W = t || fetch;
    S = S ? (S + "").toLowerCase() : "text";
    let z = xR([P, T && T.toAbortSignal()], C), j = null;
    const A = z && z.unsubscribe && (() => {
      z.unsubscribe();
    });
    let U;
    try {
      if (w && d && b !== "get" && b !== "head" && (U = await g(N, R)) !== 0) {
        let D = new n(u, {
          method: "POST",
          body: R,
          duplex: "half"
        }), Q;
        if (_.isFormData(R) && (Q = D.headers.get("content-type")) && N.setContentType(Q), D.body) {
          const [X, q] = Ec(
            U,
            Ro(Cc(w))
          );
          R = Rc(D.body, Oc, X, q);
        }
      }
      _.isString(M) || (M = M ? "include" : "omit");
      const F = i && "credentials" in n.prototype, H = {
        ...B,
        signal: z,
        method: b.toUpperCase(),
        headers: N.normalize().toJSON(),
        body: R,
        duplex: "half",
        credentials: F ? M : void 0
      };
      j = i && new n(u, H);
      let I = await (i ? W(j, B) : W(u, H));
      const K = f && (S === "stream" || S === "response");
      if (f && (E || K && A)) {
        const D = {};
        ["status", "statusText", "headers"].forEach((ee) => {
          D[ee] = I[ee];
        });
        const Q = _.toFiniteNumber(I.headers.get("content-length")), [X, q] = E && Ec(
          Q,
          Ro(Cc(E), !0)
        ) || [];
        I = new r(
          Rc(I.body, Oc, X, () => {
            q && q(), A && A();
          }),
          D
        );
      }
      S = S || "text";
      let k = await p[_.findKey(p, S) || "text"](I, h);
      return !K && A && A(), await new Promise((D, Q) => {
        If(D, Q, {
          data: k,
          headers: Nt.from(I.headers),
          status: I.status,
          statusText: I.statusText,
          config: h,
          request: j
        });
      });
    } catch (F) {
      throw A && A(), F && F.name === "TypeError" && /Load failed|fetch/i.test(F.message) ? Object.assign(
        new fe("Network Error", fe.ERR_NETWORK, h, j),
        {
          cause: F.cause || F
        }
      ) : fe.from(F, F && F.code, h, j);
    }
  };
}, SR = /* @__PURE__ */ new Map(), Af = (e) => {
  let t = e ? e.env : {};
  const { fetch: n, Request: r, Response: s } = t, i = [
    r,
    s,
    n
  ];
  let a = i.length, l = a, c, d, f = SR;
  for (; l--; )
    c = i[l], d = f.get(c), d === void 0 && f.set(c, d = l ? /* @__PURE__ */ new Map() : OR(t)), f = d;
  return d;
};
Af();
const di = {
  http: z1,
  xhr: gR,
  fetch: {
    get: Af
  }
};
_.forEach(di, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const $c = (e) => `- ${e}`, wR = (e) => _.isFunction(e) || e === null || e === !1, Mf = {
  getAdapter: (e, t) => {
    e = _.isArray(e) ? e : [e];
    const { length: n } = e;
    let r, s;
    const i = {};
    for (let a = 0; a < n; a++) {
      r = e[a];
      let l;
      if (s = r, !wR(r) && (s = di[(l = String(r)).toLowerCase()], s === void 0))
        throw new fe(`Unknown adapter '${l}'`);
      if (s && (_.isFunction(s) || (s = s.get(t))))
        break;
      i[l || "#" + a] = s;
    }
    if (!s) {
      const a = Object.entries(i).map(
        ([c, d]) => `adapter ${c} ` + (d === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let l = n ? a.length > 1 ? `since :
` + a.map($c).join(`
`) : " " + $c(a[0]) : "as no adapter specified";
      throw new fe(
        "There is no suitable adapter to dispatch the request " + l,
        "ERR_NOT_SUPPORT"
      );
    }
    return s;
  },
  adapters: di
};
function js(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new er(null, e);
}
function _c(e) {
  return js(e), e.headers = Nt.from(e.headers), e.data = ks.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Mf.getAdapter(e.adapter || aa.adapter, e)(e).then(function(r) {
    return js(e), r.data = ks.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Nt.from(r.headers), r;
  }, function(r) {
    return Nf(r) || (js(e), r && r.response && (r.response.data = ks.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Nt.from(r.response.headers))), Promise.reject(r);
  });
}
const Df = "1.12.2", ls = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ls[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Nc = {};
ls.transitional = function(t, n, r) {
  function s(i, a) {
    return "[Axios v" + Df + "] Transitional option '" + i + "'" + a + (r ? ". " + r : "");
  }
  return (i, a, l) => {
    if (t === !1)
      throw new fe(
        s(a, " has been removed" + (n ? " in " + n : "")),
        fe.ERR_DEPRECATED
      );
    return n && !Nc[a] && (Nc[a] = !0, console.warn(
      s(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, a, l) : !0;
  };
};
ls.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function PR(e, t, n) {
  if (typeof e != "object")
    throw new fe("options must be an object", fe.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const i = r[s], a = t[i];
    if (a) {
      const l = e[i], c = l === void 0 || a(l, i, e);
      if (c !== !0)
        throw new fe("option " + i + " must be " + c, fe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new fe("Unknown option " + i, fe.ERR_BAD_OPTION);
  }
}
const ao = {
  assertOptions: PR,
  validators: ls
}, At = ao.validators;
class Oo {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new vc(),
      response: new vc()
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
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const i = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? i && !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + i) : r.stack = i;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = mn(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: i } = n;
    r !== void 0 && ao.assertOptions(r, {
      silentJSONParsing: At.transitional(At.boolean),
      forcedJSONParsing: At.transitional(At.boolean),
      clarifyTimeoutError: At.transitional(At.boolean)
    }, !1), s != null && (_.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : ao.assertOptions(s, {
      encode: At.function,
      serialize: At.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), ao.assertOptions(n, {
      baseUrl: At.spelling("baseURL"),
      withXsrfToken: At.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let a = i && _.merge(
      i.common,
      i[n.method]
    );
    i && _.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete i[h];
      }
    ), n.headers = Nt.concat(a, i);
    const l = [];
    let c = !0;
    this.interceptors.request.forEach(function(u) {
      typeof u.runWhen == "function" && u.runWhen(n) === !1 || (c = c && u.synchronous, l.unshift(u.fulfilled, u.rejected));
    });
    const d = [];
    this.interceptors.response.forEach(function(u) {
      d.push(u.fulfilled, u.rejected);
    });
    let f, p = 0, m;
    if (!c) {
      const h = [_c.bind(this), void 0];
      for (h.unshift(...l), h.push(...d), m = h.length, f = Promise.resolve(n); p < m; )
        f = f.then(h[p++], h[p++]);
      return f;
    }
    m = l.length;
    let g = n;
    for (; p < m; ) {
      const h = l[p++], u = l[p++];
      try {
        g = h(g);
      } catch (b) {
        u.call(this, b);
        break;
      }
    }
    try {
      f = _c.call(this, g);
    } catch (h) {
      return Promise.reject(h);
    }
    for (p = 0, m = d.length; p < m; )
      f = f.then(d[p++], d[p++]);
    return f;
  }
  getUri(t) {
    t = mn(this.defaults, t);
    const n = kf(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Pf(n, t.params, t.paramsSerializer);
  }
}
_.forEach(["delete", "get", "head", "options"], function(t) {
  Oo.prototype[t] = function(n, r) {
    return this.request(mn(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
_.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, a, l) {
      return this.request(mn(l || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: a
      }));
    };
  }
  Oo.prototype[t] = n(), Oo.prototype[t + "Form"] = n(!0);
});
const lo = Oo;
class la {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(i) {
      n = i;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners)
        return;
      let i = r._listeners.length;
      for (; i-- > 0; )
        r._listeners[i](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let i;
      const a = new Promise((l) => {
        r.subscribe(l), i = l;
      }).then(s);
      return a.cancel = function() {
        r.unsubscribe(i);
      }, a;
    }, t(function(i, a, l) {
      r.reason || (r.reason = new er(i, a, l), n(r.reason));
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
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new la(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const $R = la;
function _R(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function NR(e) {
  return _.isObject(e) && e.isAxiosError === !0;
}
const fi = {
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
Object.entries(fi).forEach(([e, t]) => {
  fi[t] = e;
});
const IR = fi;
function Ff(e) {
  const t = new lo(e), n = yf(lo.prototype.request, t);
  return _.extend(n, lo.prototype, t, { allOwnKeys: !0 }), _.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Ff(mn(e, s));
  }, n;
}
const Ge = Ff(aa);
Ge.Axios = lo;
Ge.CanceledError = er;
Ge.CancelToken = $R;
Ge.isCancel = Nf;
Ge.VERSION = Df;
Ge.toFormData = is;
Ge.AxiosError = fe;
Ge.Cancel = Ge.CanceledError;
Ge.all = function(t) {
  return Promise.all(t);
};
Ge.spread = _R;
Ge.isAxiosError = NR;
Ge.mergeConfig = mn;
Ge.AxiosHeaders = Nt;
Ge.formToJSON = (e) => _f(_.isHTMLForm(e) ? new FormData(e) : e);
Ge.getAdapter = Mf.getAdapter;
Ge.HttpStatusCode = IR;
Ge.default = Ge;
const kR = Ge;
class jR {
  constructor() {
    this.client = kR.create({
      baseURL: t1,
      timeout: 1e4,
      headers: {
        "Content-Type": "application/json"
      }
    }), this.setupInterceptors();
  }
  setupInterceptors() {
    this.client.interceptors.request.use((t) => {
      const n = localStorage.getItem("auth_token");
      return n && (t.headers.Authorization = `Bearer ${n}`), t;
    }, (t) => Promise.reject(t)), this.client.interceptors.response.use((t) => t, (t) => {
      var n;
      return ((n = t.response) == null ? void 0 : n.status) === 401 && (localStorage.removeItem("auth_token"), window.location.href = "/login"), Promise.reject(t);
    });
  }
  async get(t, n) {
    return (await this.client.get(t, n)).data;
  }
  async post(t, n, r) {
    return (await this.client.post(t, n, r)).data;
  }
  async put(t, n, r) {
    return (await this.client.put(t, n, r)).data;
  }
  async delete(t, n) {
    return (await this.client.delete(t, n)).data;
  }
  async patch(t, n, r) {
    return (await this.client.patch(t, n, r)).data;
  }
}
const dn = new jR();
class Xt {
  static set(t, n) {
    try {
      const r = JSON.stringify(n);
      localStorage.setItem(t, r);
    } catch (r) {
      console.error(`Error saving to localStorage key "${t}":`, r);
    }
  }
  static get(t, n = null) {
    try {
      const r = localStorage.getItem(t);
      return r === null ? n : JSON.parse(r);
    } catch (r) {
      return console.error(`Error reading from localStorage key "${t}":`, r), n;
    }
  }
  static remove(t) {
    try {
      localStorage.removeItem(t);
    } catch (n) {
      console.error(`Error removing from localStorage key "${t}":`, n);
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
const Lf = np(void 0), Bf = () => {
  const e = kc(Lf);
  if (e === void 0)
    throw new Error("useAuth must be used within an AuthProvider");
  return e;
}, zf = ({ children: e }) => {
  const [t, n] = co(null), [r, s] = co(!0);
  rp(() => {
    (async () => {
      const f = Xt.getAuthToken(), p = Xt.get("user_data");
      if (f && p)
        try {
          const m = await dn.get("/auth/me");
          n(m), Xt.setUser(m);
        } catch {
          Xt.clearAuth();
        }
      s(!1);
    })();
  }, []);
  const c = {
    user: t,
    isLoading: r,
    isAuthenticated: !!t,
    login: async (d, f) => {
      try {
        s(!0);
        const p = await dn.post("/auth/login", {
          email: d,
          password: f
        });
        Xt.setAuthToken(p.access_token), Xt.setUser(p.user), n(p.user);
      } catch {
        throw new Error("Login failed. Please check your credentials.");
      } finally {
        s(!1);
      }
    },
    logout: () => {
      Xt.clearAuth(), n(null), window.location.href = "/login";
    },
    updateUser: (d) => {
      if (t) {
        const f = { ...t, ...d };
        n(f), Xt.setUser(f);
      }
    }
  };
  return y.jsx(Lf.Provider, { value: c, children: e });
}, wn = 240, AR = ({ children: e }) => {
  var f;
  const t = bn(), n = Zm(t.breakpoints.down("md")), [r, s] = co(!1), i = sp(), a = ip(), l = () => {
    s(!r);
  }, c = [
    { text: "Dashboard", icon: /* @__PURE__ */ y.jsx(KT, {}), path: "/" },
    { text: "My Courses", icon: /* @__PURE__ */ y.jsx(ns, {}), path: "/courses" },
    { text: "Learning", icon: /* @__PURE__ */ y.jsx(ai, {}), path: "/learning" },
    { text: "Performance", icon: /* @__PURE__ */ y.jsx(hf, {}), path: "/performance" },
    { text: "Doubts", icon: /* @__PURE__ */ y.jsx(oo, {}), path: "/doubts" }
  ], d = /* @__PURE__ */ y.jsxs(xe, { children: [
    /* @__PURE__ */ y.jsxs(Ns, { sx: { justifyContent: "space-between" }, children: [
      /* @__PURE__ */ y.jsx(me, { variant: "h6", noWrap: !0, component: "div", sx: { fontWeight: 600 }, children: "Student Portal" }),
      n && /* @__PURE__ */ y.jsx(Dl, { onClick: l, children: /* @__PURE__ */ y.jsx(HT, {}) })
    ] }),
    /* @__PURE__ */ y.jsx(Yd, { children: c.map((p) => /* @__PURE__ */ y.jsx(SC, { disablePadding: !0, children: /* @__PURE__ */ y.jsxs(
      hC,
      {
        selected: a.pathname === p.path,
        onClick: () => {
          i(p.path), n && s(!1);
        },
        sx: {
          "&.Mui-selected": {
            backgroundColor: "primary.light",
            color: "primary.contrastText",
            "& .MuiListItemIcon-root": {
              color: "primary.contrastText"
            }
          },
          "&:hover": {
            backgroundColor: "action.hover"
          }
        },
        children: [
          /* @__PURE__ */ y.jsx(NC, { sx: { color: "inherit" }, children: p.icon }),
          /* @__PURE__ */ y.jsx(DC, { primary: p.text })
        ]
      }
    ) }, p.text)) })
  ] });
  return /* @__PURE__ */ y.jsxs(xe, { sx: { display: "flex" }, children: [
    /* @__PURE__ */ y.jsx(
      jv,
      {
        position: "fixed",
        sx: {
          width: { md: `calc(100% - ${wn}px)` },
          ml: { md: `${wn}px` }
        },
        children: /* @__PURE__ */ y.jsxs(Ns, { children: [
          /* @__PURE__ */ y.jsx(
            Dl,
            {
              color: "inherit",
              "aria-label": "open drawer",
              edge: "start",
              onClick: l,
              sx: { mr: 2, display: { md: "none" } },
              children: /* @__PURE__ */ y.jsx(YT, {})
            }
          ),
          /* @__PURE__ */ y.jsx(me, { variant: "h6", noWrap: !0, component: "div", sx: { flexGrow: 1 }, children: ((f = c.find((p) => p.path === a.pathname)) == null ? void 0 : f.text) || "Student Portal" })
        ] })
      }
    ),
    /* @__PURE__ */ y.jsxs(
      xe,
      {
        component: "nav",
        sx: { width: { md: wn }, flexShrink: { md: 0 } },
        children: [
          /* @__PURE__ */ y.jsx(
            Gl,
            {
              variant: "temporary",
              open: r,
              onClose: l,
              ModalProps: { keepMounted: !0 },
              sx: {
                display: { xs: "block", md: "none" },
                "& .MuiDrawer-paper": { boxSizing: "border-box", width: wn }
              },
              children: d
            }
          ),
          /* @__PURE__ */ y.jsx(
            Gl,
            {
              variant: "permanent",
              sx: {
                display: { xs: "none", md: "block" },
                "& .MuiDrawer-paper": { boxSizing: "border-box", width: wn }
              },
              open: !0,
              children: d
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ y.jsxs(
      xe,
      {
        component: "main",
        sx: {
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${wn}px)` },
          minHeight: "100vh",
          backgroundColor: "background.default"
        },
        children: [
          /* @__PURE__ */ y.jsx(Ns, {}),
          e
        ]
      }
    )
  ] });
}, Yr = ({ title: e, value: t, subtitle: n, icon: r, color: s = "primary", progress: i }) => /* @__PURE__ */ y.jsx(In, { sx: { height: "100%", transition: "all 0.3s", "&:hover": { transform: "translateY(-4px)" } }, children: /* @__PURE__ */ y.jsx(kn, { children: /* @__PURE__ */ y.jsxs(xe, { display: "flex", alignItems: "flex-start", justifyContent: "space-between", children: [
  /* @__PURE__ */ y.jsxs(xe, { children: [
    /* @__PURE__ */ y.jsx(me, { color: "textSecondary", gutterBottom: !0, variant: "overline", children: e }),
    /* @__PURE__ */ y.jsx(me, { variant: "h4", component: "div", fontWeight: "bold", children: t }),
    /* @__PURE__ */ y.jsx(me, { variant: "body2", color: "textSecondary", children: n }),
    i !== void 0 && /* @__PURE__ */ y.jsx(xe, { sx: { mt: 2 }, children: /* @__PURE__ */ y.jsx(
      Xi,
      {
        variant: "determinate",
        value: i,
        sx: { height: 8, borderRadius: 4 },
        color: s
      }
    ) })
  ] }),
  /* @__PURE__ */ y.jsx(
    xe,
    {
      sx: {
        p: 1,
        borderRadius: 2,
        bgcolor: `${s}.light`,
        color: `${s}.contrastText`
      },
      children: r
    }
  )
] }) }) }), Ic = () => {
  var d;
  const { user: e } = Bf(), { data: t, isLoading: n } = ei({
    queryKey: ["student-dashboard"],
    queryFn: async () => {
      const [f, p, m] = await Promise.all([
        dn.get("/courses/my-courses"),
        dn.get("/analytics/my-progress"),
        dn.get("/doubts/my-doubts?limit=5")
      ]);
      return { courses: f, progress: p, doubts: m };
    }
  }), { data: r } = ei({
    queryKey: ["recent-activities"],
    queryFn: () => dn.get("/analytics/recent-activities")
  });
  if (n)
    return /* @__PURE__ */ y.jsx(pf, { fullScreen: !0, message: "Loading your dashboard..." });
  const s = (t == null ? void 0 : t.courses) || [], i = (t == null ? void 0 : t.progress) || {}, a = ((d = t == null ? void 0 : t.doubts) == null ? void 0 : d.doubts) || [], l = s.filter((f) => !f.completed), c = s.filter((f) => f.completed);
  return /* @__PURE__ */ y.jsxs(xe, { children: [
    /* @__PURE__ */ y.jsx(
      mf,
      {
        title: `Welcome back, ${(e == null ? void 0 : e.name) || "Student"}!`,
        subtitle: "Continue your learning journey and track your progress"
      }
    ),
    /* @__PURE__ */ y.jsxs(Tt, { container: !0, spacing: 3, children: [
      /* @__PURE__ */ y.jsx(Tt, { item: !0, xs: 12, sm: 6, md: 3, children: /* @__PURE__ */ y.jsx(
        Yr,
        {
          title: "Ongoing Courses",
          value: l.length.toString(),
          subtitle: `${c.length} completed`,
          icon: /* @__PURE__ */ y.jsx(ns, {}),
          color: "primary",
          progress: c.length / s.length * 100
        }
      ) }),
      /* @__PURE__ */ y.jsx(Tt, { item: !0, xs: 12, sm: 6, md: 3, children: /* @__PURE__ */ y.jsx(
        Yr,
        {
          title: "Learning Progress",
          value: `${i.overallProgress || 0}%`,
          subtitle: "Overall completion",
          icon: /* @__PURE__ */ y.jsx(ZT, {}),
          color: "success",
          progress: i.overallProgress || 0
        }
      ) }),
      /* @__PURE__ */ y.jsx(Tt, { item: !0, xs: 12, sm: 6, md: 3, children: /* @__PURE__ */ y.jsx(
        Yr,
        {
          title: "Active Doubts",
          value: a.filter((f) => f.status === "pending").length.toString(),
          subtitle: "Need attention",
          icon: /* @__PURE__ */ y.jsx(oo, {}),
          color: "warning"
        }
      ) }),
      /* @__PURE__ */ y.jsx(Tt, { item: !0, xs: 12, sm: 6, md: 3, children: /* @__PURE__ */ y.jsx(
        Yr,
        {
          title: "Study Time",
          value: `${Math.round((i.totalTimeSpent || 0) / 60)}h`,
          subtitle: "This week",
          icon: /* @__PURE__ */ y.jsx(XT, {}),
          color: "info"
        }
      ) }),
      /* @__PURE__ */ y.jsx(Tt, { item: !0, xs: 12, md: 8, children: /* @__PURE__ */ y.jsx(In, { children: /* @__PURE__ */ y.jsxs(kn, { children: [
        /* @__PURE__ */ y.jsx(me, { variant: "h6", gutterBottom: !0, fontWeight: "bold", children: "Ongoing Courses" }),
        /* @__PURE__ */ y.jsx(xe, { sx: { mt: 2 }, children: l.length === 0 ? /* @__PURE__ */ y.jsx(me, { color: "textSecondary", textAlign: "center", py: 4, children: "No ongoing courses. Enroll in a course to get started!" }) : l.slice(0, 3).map((f) => /* @__PURE__ */ y.jsxs(
          xe,
          {
            sx: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              py: 2,
              borderBottom: "1px solid",
              borderColor: "divider",
              "&:last-child": { borderBottom: "none" }
            },
            children: [
              /* @__PURE__ */ y.jsxs(xe, { children: [
                /* @__PURE__ */ y.jsx(me, { variant: "body1", fontWeight: "medium", children: f.name }),
                /* @__PURE__ */ y.jsx(me, { variant: "body2", color: "textSecondary", children: f.description }),
                /* @__PURE__ */ y.jsxs(xe, { sx: { mt: 1 }, children: [
                  /* @__PURE__ */ y.jsx(
                    Xi,
                    {
                      variant: "determinate",
                      value: f.progress || 0,
                      sx: { width: 200, height: 6, borderRadius: 3 }
                    }
                  ),
                  /* @__PURE__ */ y.jsxs(me, { variant: "body2", color: "textSecondary", sx: { mt: 0.5 }, children: [
                    f.progress || 0,
                    "% complete"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ y.jsx(
                es,
                {
                  variant: "contained",
                  size: "small",
                  onClick: () => window.location.href = `/courses/${f.id}`,
                  children: "Continue"
                }
              )
            ]
          },
          f.id
        )) })
      ] }) }) }),
      /* @__PURE__ */ y.jsx(Tt, { item: !0, xs: 12, md: 4, children: /* @__PURE__ */ y.jsx(In, { children: /* @__PURE__ */ y.jsxs(kn, { children: [
        /* @__PURE__ */ y.jsx(me, { variant: "h6", gutterBottom: !0, fontWeight: "bold", children: "Recent Activities" }),
        /* @__PURE__ */ y.jsx(xe, { sx: { mt: 2 }, children: (r || []).slice(0, 5).map((f, p) => /* @__PURE__ */ y.jsxs(
          xe,
          {
            sx: {
              display: "flex",
              alignItems: "center",
              gap: 2,
              py: 1.5,
              borderBottom: "1px solid",
              borderColor: "divider",
              "&:last-child": { borderBottom: "none" }
            },
            children: [
              /* @__PURE__ */ y.jsxs(
                xe,
                {
                  sx: {
                    p: 1,
                    borderRadius: "50%",
                    bgcolor: "primary.light",
                    color: "primary.contrastText",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 32,
                    height: 32
                  },
                  children: [
                    f.type === "video" && /* @__PURE__ */ y.jsx(ai, { fontSize: "small" }),
                    f.type === "quiz" && /* @__PURE__ */ y.jsx(mc, { fontSize: "small" }),
                    f.type === "doubt" && /* @__PURE__ */ y.jsx(oo, { fontSize: "small" })
                  ]
                }
              ),
              /* @__PURE__ */ y.jsxs(xe, { sx: { flex: 1 }, children: [
                /* @__PURE__ */ y.jsx(me, { variant: "body2", fontWeight: "medium", children: f.title }),
                /* @__PURE__ */ y.jsx(me, { variant: "caption", color: "textSecondary", children: f.time })
              ] }),
              /* @__PURE__ */ y.jsx(
                dd,
                {
                  label: f.type,
                  size: "small",
                  color: f.type === "video" ? "primary" : f.type === "quiz" ? "secondary" : "default",
                  variant: "outlined"
                }
              )
            ]
          },
          p
        )) })
      ] }) }) }),
      /* @__PURE__ */ y.jsx(Tt, { item: !0, xs: 12, children: /* @__PURE__ */ y.jsx(In, { children: /* @__PURE__ */ y.jsxs(kn, { children: [
        /* @__PURE__ */ y.jsx(me, { variant: "h6", gutterBottom: !0, fontWeight: "bold", children: "Quick Actions" }),
        /* @__PURE__ */ y.jsx(Tt, { container: !0, spacing: 2, sx: { mt: 1 }, children: [
          {
            label: "Continue Learning",
            description: "Pick up where you left off",
            icon: /* @__PURE__ */ y.jsx(ai, {}),
            action: () => MR(),
            color: "primary"
          },
          {
            label: "Ask a Doubt",
            description: "Get help from teachers",
            icon: /* @__PURE__ */ y.jsx(oo, {}),
            action: () => window.location.href = "/doubts",
            color: "warning"
          },
          {
            label: "View Progress",
            description: "Check your performance",
            icon: /* @__PURE__ */ y.jsx(hf, {}),
            action: () => window.location.href = "/performance",
            color: "success"
          },
          {
            label: "Upcoming Tests",
            description: "Prepare for assessments",
            icon: /* @__PURE__ */ y.jsx(mc, {}),
            action: () => window.location.href = "/tests",
            color: "info"
          }
        ].map((f, p) => /* @__PURE__ */ y.jsx(Tt, { item: !0, xs: 12, sm: 6, md: 3, children: /* @__PURE__ */ y.jsx(
          In,
          {
            sx: {
              cursor: "pointer",
              transition: "all 0.3s",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: 4
              }
            },
            onClick: f.action,
            children: /* @__PURE__ */ y.jsxs(kn, { sx: { textAlign: "center" }, children: [
              /* @__PURE__ */ y.jsx(
                xe,
                {
                  sx: {
                    p: 2,
                    borderRadius: "50%",
                    bgcolor: `${f.color}.light`,
                    color: `${f.color}.contrastText`,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 64,
                    height: 64,
                    mb: 2
                  },
                  children: f.icon
                }
              ),
              /* @__PURE__ */ y.jsx(me, { variant: "h6", gutterBottom: !0, children: f.label }),
              /* @__PURE__ */ y.jsx(me, { variant: "body2", color: "textSecondary", children: f.description })
            ] })
          }
        ) }, p)) })
      ] }) }) })
    ] })
  ] });
}, MR = () => {
  window.location.href = "/courses";
}, DR = () => {
  const [e, t] = co(""), { data: n, isLoading: r } = ei({
    queryKey: ["student-courses"],
    queryFn: () => dn.get("/courses/my-courses")
  }), s = (n == null ? void 0 : n.filter(
    (i) => i.name.toLowerCase().includes(e.toLowerCase()) || i.description.toLowerCase().includes(e.toLowerCase())
  )) || [];
  return r ? /* @__PURE__ */ y.jsx(pf, { message: "Loading your courses..." }) : /* @__PURE__ */ y.jsxs(xe, { children: [
    /* @__PURE__ */ y.jsx(
      mf,
      {
        title: "My Courses",
        subtitle: "Continue your learning journey across all enrolled courses",
        action: /* @__PURE__ */ y.jsx(
          VT,
          {
            size: "small",
            placeholder: "Search courses...",
            value: e,
            onChange: (i) => t(i.target.value),
            InputProps: {
              startAdornment: /* @__PURE__ */ y.jsx(_E, { position: "start", children: /* @__PURE__ */ y.jsx(JT, {}) })
            },
            sx: { minWidth: 300 }
          }
        )
      }
    ),
    s.length === 0 ? /* @__PURE__ */ y.jsx(
      e1,
      {
        icon: /* @__PURE__ */ y.jsx(ns, { sx: { fontSize: 64 } }),
        title: "No courses found",
        description: e ? "Try adjusting your search terms" : "You haven't enrolled in any courses yet",
        action: e ? {
          label: "Clear Search",
          onClick: () => t("")
        } : {
          label: "Browse Courses",
          onClick: () => window.location.href = "/catalog"
        }
      }
    ) : /* @__PURE__ */ y.jsx(Tt, { container: !0, spacing: 3, children: s.map((i) => /* @__PURE__ */ y.jsx(Tt, { item: !0, xs: 12, md: 6, lg: 4, children: /* @__PURE__ */ y.jsx(FR, { course: i }) }, i.id)) })
  ] });
}, FR = ({ course: e }) => {
  const t = e.progress || 0, n = t === 100;
  return /* @__PURE__ */ y.jsx(
    In,
    {
      sx: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 4
        }
      },
      children: /* @__PURE__ */ y.jsxs(kn, { sx: { flex: 1, display: "flex", flexDirection: "column" }, children: [
        /* @__PURE__ */ y.jsxs(xe, { sx: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", mb: 2 }, children: [
          /* @__PURE__ */ y.jsx(
            xe,
            {
              sx: {
                p: 1,
                borderRadius: 2,
                bgcolor: "primary.light",
                color: "primary.contrastText",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ y.jsx(ns, {})
            }
          ),
          /* @__PURE__ */ y.jsx(
            dd,
            {
              label: n ? "Completed" : "In Progress",
              color: n ? "success" : "primary",
              size: "small",
              variant: n ? "filled" : "outlined"
            }
          )
        ] }),
        /* @__PURE__ */ y.jsx(me, { variant: "h6", gutterBottom: !0, fontWeight: "bold", children: e.name }),
        /* @__PURE__ */ y.jsx(me, { variant: "body2", color: "textSecondary", sx: { mb: 2, flex: 1 }, children: e.description }),
        /* @__PURE__ */ y.jsxs(xe, { sx: { mb: 2 }, children: [
          /* @__PURE__ */ y.jsxs(xe, { sx: { display: "flex", justifyContent: "space-between", mb: 1 }, children: [
            /* @__PURE__ */ y.jsx(me, { variant: "body2", color: "textSecondary", children: "Progress" }),
            /* @__PURE__ */ y.jsxs(me, { variant: "body2", fontWeight: "medium", children: [
              t,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ y.jsx(
            Xi,
            {
              variant: "determinate",
              value: t,
              sx: { height: 8, borderRadius: 4 },
              color: n ? "success" : "primary"
            }
          )
        ] }),
        /* @__PURE__ */ y.jsx(xe, { sx: { display: "flex", gap: 1, mt: "auto" }, children: /* @__PURE__ */ y.jsx(
          es,
          {
            variant: "contained",
            startIcon: n ? /* @__PURE__ */ y.jsx(WT, {}) : /* @__PURE__ */ y.jsx(QT, {}),
            fullWidth: !0,
            onClick: () => window.location.href = `/courses/${e.id}`,
            children: n ? "Review" : "Continue"
          }
        ) })
      ] })
    }
  );
}, LR = () => /* @__PURE__ */ y.jsxs(xe, { p: 3, children: [
  /* @__PURE__ */ y.jsx(me, { variant: "h4", children: "Course Detail" }),
  /* @__PURE__ */ y.jsx(me, { variant: "body1", children: "Course details will appear here." })
] }), BR = () => /* @__PURE__ */ y.jsxs(xe, { p: 3, children: [
  /* @__PURE__ */ y.jsx(me, { variant: "h4", children: "Content Player" }),
  /* @__PURE__ */ y.jsx(me, { variant: "body1", children: "Course content will be played here." })
] }), zR = () => /* @__PURE__ */ y.jsxs(xe, { p: 3, children: [
  /* @__PURE__ */ y.jsx(me, { variant: "h4", children: "Doubts" }),
  /* @__PURE__ */ y.jsx(me, { variant: "body1", children: "Your doubts will appear here." })
] }), UR = () => /* @__PURE__ */ y.jsxs(xe, { p: 3, children: [
  /* @__PURE__ */ y.jsx(me, { variant: "h4", children: "Performance" }),
  /* @__PURE__ */ y.jsx(me, { variant: "body1", children: "Your performance metrics will appear here." })
] }), Uf = () => {
  const { user: e } = Bf();
  return !e || e.role !== "student" ? /* @__PURE__ */ y.jsx(ya, { to: "/login", replace: !0 }) : /* @__PURE__ */ y.jsx(xe, { sx: { display: "flex", minHeight: "100vh" }, children: /* @__PURE__ */ y.jsx(AR, { children: /* @__PURE__ */ y.jsxs(ap, { children: [
    /* @__PURE__ */ y.jsx(zt, { path: "/", element: /* @__PURE__ */ y.jsx(Ic, {}) }),
    /* @__PURE__ */ y.jsx(zt, { path: "/dashboard", element: /* @__PURE__ */ y.jsx(Ic, {}) }),
    /* @__PURE__ */ y.jsx(zt, { path: "/courses", element: /* @__PURE__ */ y.jsx(DR, {}) }),
    /* @__PURE__ */ y.jsx(zt, { path: "/courses/:courseId", element: /* @__PURE__ */ y.jsx(LR, {}) }),
    /* @__PURE__ */ y.jsx(zt, { path: "/courses/:courseId/content/:contentId", element: /* @__PURE__ */ y.jsx(BR, {}) }),
    /* @__PURE__ */ y.jsx(zt, { path: "/doubts", element: /* @__PURE__ */ y.jsx(zR, {}) }),
    /* @__PURE__ */ y.jsx(zt, { path: "/doubts/:doubtId", element: /* @__PURE__ */ y.jsx("div", { children: "Doubt Detail" }) }),
    /* @__PURE__ */ y.jsx(zt, { path: "/performance", element: /* @__PURE__ */ y.jsx(UR, {}) }),
    /* @__PURE__ */ y.jsx(zt, { path: "*", element: /* @__PURE__ */ y.jsx(ya, { to: "/", replace: !0 }) })
  ] }) }) });
}, Vf = new yg({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: !1,
      staleTime: 5 * 60 * 1e3
    }
  }
}), VR = pp({
  React: ut,
  ReactDOM: dr,
  rootComponent: () => /* @__PURE__ */ y.jsxs(ji, { theme: Bi, children: [
    /* @__PURE__ */ y.jsx(Mi, {}),
    /* @__PURE__ */ y.jsx(ed, { client: Vf, children: /* @__PURE__ */ y.jsx(zf, { children: /* @__PURE__ */ y.jsx(jc, { children: /* @__PURE__ */ y.jsx(Uf, {}) }) }) })
  ] }),
  errorBoundary(e, t, n) {
    return console.error("Student App Error:", e, t, n), ut.createElement("div", null, "Error in Student App");
  }
}), { bootstrap: KR, mount: YR, unmount: GR } = VR, QR = () => /* @__PURE__ */ y.jsxs(ji, { theme: Bi, children: [
  /* @__PURE__ */ y.jsx(Mi, {}),
  /* @__PURE__ */ y.jsx(ed, { client: Vf, children: /* @__PURE__ */ y.jsx(zf, { children: /* @__PURE__ */ y.jsx(jc, { children: /* @__PURE__ */ y.jsx(Uf, {}) }) }) })
] });
export {
  KR as bootstrap,
  QR as default,
  YR as mount,
  GR as unmount
};
//# sourceMappingURL=student-app.js.map
