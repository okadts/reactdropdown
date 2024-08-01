import Ve, { useState as Z, useRef as We, useEffect as pr } from "react";
import hr from "react-dom";
import './assets/main.css';var xe = { exports: {} }, Q = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function _r() {
  if (Ye) return Q;
  Ye = 1;
  var x = Ve, T = Symbol.for("react.element"), F = Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, c = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, P = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(v, d, k) {
    var g, O = {}, C = null, $ = null;
    k !== void 0 && (C = "" + k), d.key !== void 0 && (C = "" + d.key), d.ref !== void 0 && ($ = d.ref);
    for (g in d) _.call(d, g) && !P.hasOwnProperty(g) && (O[g] = d[g]);
    if (v && v.defaultProps) for (g in d = v.defaultProps, d) O[g] === void 0 && (O[g] = d[g]);
    return { $$typeof: T, type: v, key: C, ref: $, props: O, _owner: c.current };
  }
  return Q.Fragment = F, Q.jsx = S, Q.jsxs = S, Q;
}
var ee = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Me;
function gr() {
  return Me || (Me = 1, process.env.NODE_ENV !== "production" && function() {
    var x = Ve, T = Symbol.for("react.element"), F = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), v = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), B = Symbol.iterator, Y = "@@iterator";
    function L(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = B && e[B] || e[Y];
      return typeof r == "function" ? r : null;
    }
    var A = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        N("error", e, t);
      }
    }
    function N(e, r, t) {
      {
        var n = A.ReactDebugCurrentFrame, s = n.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var K = !1, de = !1, D = !1, J = !1, re = !1, te;
    te = Symbol.for("react.module.reference");
    function ne(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === _ || e === P || re || e === c || e === k || e === g || J || e === $ || K || de || D || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === O || e.$$typeof === S || e.$$typeof === v || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === te || e.getModuleId !== void 0));
    }
    function ve(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function q(e) {
      return e.displayName || "Context";
    }
    function R(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case _:
          return "Fragment";
        case F:
          return "Portal";
        case P:
          return "Profiler";
        case c:
          return "StrictMode";
        case k:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            var r = e;
            return q(r) + ".Consumer";
          case S:
            var t = e;
            return q(t._context) + ".Provider";
          case d:
            return ve(e, e.render, "ForwardRef");
          case O:
            var n = e.displayName || null;
            return n !== null ? n : R(e.type) || "Memo";
          case C: {
            var s = e, u = s._payload, o = s._init;
            try {
              return R(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, I = 0, ae, pe, ie, z, a, y, oe;
    function se() {
    }
    se.__reactDisabledLog = !0;
    function M() {
      {
        if (I === 0) {
          ae = console.log, pe = console.info, ie = console.warn, z = console.error, a = console.group, y = console.groupCollapsed, oe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: se,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        I++;
      }
    }
    function G() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, e, {
              value: ae
            }),
            info: j({}, e, {
              value: pe
            }),
            warn: j({}, e, {
              value: ie
            }),
            error: j({}, e, {
              value: z
            }),
            group: j({}, e, {
              value: a
            }),
            groupCollapsed: j({}, e, {
              value: y
            }),
            groupEnd: j({}, e, {
              value: oe
            })
          });
        }
        I < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var he = A.ReactCurrentDispatcher, _e;
    function ue(e, r, t) {
      {
        if (_e === void 0)
          try {
            throw Error();
          } catch (s) {
            var n = s.stack.trim().match(/\n( *(at )?)/);
            _e = n && n[1] || "";
          }
        return `
` + _e + e;
      }
    }
    var ge = !1, ce;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      ce = new Ue();
    }
    function Oe(e, r) {
      if (!e || ge)
        return "";
      {
        var t = ce.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      ge = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = he.current, he.current = null, M();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (m) {
              n = m;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (m) {
              n = m;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (m) {
            n = m;
          }
          e();
        }
      } catch (m) {
        if (m && n && typeof m.stack == "string") {
          for (var i = m.stack.split(`
`), b = n.stack.split(`
`), l = i.length - 1, f = b.length - 1; l >= 1 && f >= 0 && i[l] !== b[f]; )
            f--;
          for (; l >= 1 && f >= 0; l--, f--)
            if (i[l] !== b[f]) {
              if (l !== 1 || f !== 1)
                do
                  if (l--, f--, f < 0 || i[l] !== b[f]) {
                    var w = `
` + i[l].replace(" at new ", " at ");
                    return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && ce.set(e, w), w;
                  }
                while (l >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        ge = !1, he.current = u, G(), Error.prepareStackTrace = s;
      }
      var U = e ? e.displayName || e.name : "", W = U ? ue(U) : "";
      return typeof e == "function" && ce.set(e, W), W;
    }
    function Be(e, r, t) {
      return Oe(e, !1);
    }
    function Ke(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function le(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Oe(e, Ke(e));
      if (typeof e == "string")
        return ue(e);
      switch (e) {
        case k:
          return ue("Suspense");
        case g:
          return ue("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Be(e.render);
          case O:
            return le(e.type, r, t);
          case C: {
            var n = e, s = n._payload, u = n._init;
            try {
              return le(u(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var X = Object.prototype.hasOwnProperty, Te = {}, Ce = A.ReactDebugCurrentFrame;
    function fe(e) {
      if (e) {
        var r = e._owner, t = le(e.type, e._source, r ? r.type : null);
        Ce.setExtraStackFrame(t);
      } else
        Ce.setExtraStackFrame(null);
    }
    function Je(e, r, t, n, s) {
      {
        var u = Function.call.bind(X);
        for (var o in e)
          if (u(e, o)) {
            var i = void 0;
            try {
              if (typeof e[o] != "function") {
                var b = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              i = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (l) {
              i = l;
            }
            i && !(i instanceof Error) && (fe(s), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof i), fe(null)), i instanceof Error && !(i.message in Te) && (Te[i.message] = !0, fe(s), p("Failed %s type: %s", t, i.message), fe(null));
          }
      }
    }
    var qe = Array.isArray;
    function ye(e) {
      return qe(e);
    }
    function ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return Se(e), !1;
      } catch {
        return !0;
      }
    }
    function Se(e) {
      return "" + e;
    }
    function je(e) {
      if (Ge(e))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), Se(e);
    }
    var H = A.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pe, ke, be;
    be = {};
    function He(e) {
      if (X.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (X.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      if (typeof e.ref == "string" && H.current && r && H.current.stateNode !== r) {
        var t = R(H.current.type);
        be[t] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R(H.current.type), e.ref), be[t] = !0);
      }
    }
    function er(e, r) {
      {
        var t = function() {
          Pe || (Pe = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          ke || (ke = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, n, s, u, o) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: T,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function nr(e, r, t, n, s) {
      {
        var u, o = {}, i = null, b = null;
        t !== void 0 && (je(t), i = "" + t), Ze(r) && (je(r.key), i = "" + r.key), He(r) && (b = r.ref, Qe(r, s));
        for (u in r)
          X.call(r, u) && !Xe.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var l = e.defaultProps;
          for (u in l)
            o[u] === void 0 && (o[u] = l[u]);
        }
        if (i || b) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && er(o, f), b && rr(o, f);
        }
        return tr(e, i, b, s, n, H.current, o);
      }
    }
    var me = A.ReactCurrentOwner, Ae = A.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = le(e.type, e._source, r ? r.type : null);
        Ae.setExtraStackFrame(t);
      } else
        Ae.setExtraStackFrame(null);
    }
    var Ee;
    Ee = !1;
    function Re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === T;
    }
    function De() {
      {
        if (me.current) {
          var e = R(me.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      return "";
    }
    var Ie = {};
    function ir(e) {
      {
        var r = De();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Fe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if (Ie[t])
          return;
        Ie[t] = !0;
        var n = "";
        e && e._owner && e._owner !== me.current && (n = " It was passed a child from " + R(e._owner.type) + "."), V(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), V(null);
      }
    }
    function $e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ye(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Re(n) && Fe(n, r);
          }
        else if (Re(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = L(e);
          if (typeof s == "function" && s !== e.entries)
            for (var u = s.call(e), o; !(o = u.next()).done; )
              Re(o.value) && Fe(o.value, r);
        }
      }
    }
    function or(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === O))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = R(r);
          Je(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !Ee) {
          Ee = !0;
          var s = R(r);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            V(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), V(null);
            break;
          }
        }
        e.ref !== null && (V(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), V(null));
      }
    }
    var Le = {};
    function Ne(e, r, t, n, s, u) {
      {
        var o = ne(e);
        if (!o) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var b = ar();
          b ? i += b : i += De();
          var l;
          e === null ? l = "null" : ye(e) ? l = "array" : e !== void 0 && e.$$typeof === T ? (l = "<" + (R(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, i);
        }
        var f = nr(e, r, t, s, u);
        if (f == null)
          return f;
        if (o) {
          var w = r.children;
          if (w !== void 0)
            if (n)
              if (ye(w)) {
                for (var U = 0; U < w.length; U++)
                  $e(w[U], e);
                Object.freeze && Object.freeze(w);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              $e(w, e);
        }
        if (X.call(r, "key")) {
          var W = R(e), m = Object.keys(r).filter(function(vr) {
            return vr !== "key";
          }), we = m.length > 0 ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Le[W + we]) {
            var dr = m.length > 0 ? "{" + m.join(": ..., ") + ": ...}" : "{}";
            p(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, we, W, dr, W), Le[W + we] = !0;
          }
        }
        return e === _ ? sr(f) : or(f), f;
      }
    }
    function ur(e, r, t) {
      return Ne(e, r, t, !0);
    }
    function cr(e, r, t) {
      return Ne(e, r, t, !1);
    }
    var lr = cr, fr = ur;
    ee.Fragment = _, ee.jsx = lr, ee.jsxs = fr;
  }()), ee;
}
process.env.NODE_ENV === "production" ? xe.exports = _r() : xe.exports = gr();
var h = xe.exports;
const yr = (x, T, F = "white", _ = "red") => {
  if (!T) return x;
  const c = new RegExp(`(${T})`, "gi"), P = x.split(c), S = { color: F, backgroundColor: _ };
  return P.map(
    (v, d) => c.test(v) ? /* @__PURE__ */ h.jsx("span", { style: S, children: v }, d) : v
  );
}, br = "_value_imtxw_22", mr = "_divider_imtxw_44", Er = "_caret_imtxw_50", Rr = "_options_imtxw_56", wr = "_show_imtxw_98", xr = "_option_imtxw_56", Or = "_selected_imtxw_107", Tr = "_highlighted_imtxw_111", Cr = "_highlightTextOption_imtxw_144", E = {
  "container-dropdown": "_container-dropdown_imtxw_1",
  "container-selected": "_container-selected_imtxw_5",
  value: br,
  "clear-btn": "_clear-btn_imtxw_29",
  divider: mr,
  caret: Er,
  options: Rr,
  "search-input": "_search-input_imtxw_71",
  show: wr,
  option: xr,
  selected: Or,
  highlighted: Tr,
  "option-badge": "_option-badge_imtxw_116",
  "remove-btn": "_remove-btn_imtxw_134",
  highlightTextOption: Cr
}, Pr = ({
  options: x,
  searchable: T,
  clearable: F,
  multiple: _,
  model: c,
  usePortal: P,
  portalName: S,
  onChange: v,
  zIndex: d = 1e3,
  optionSelectedColor: k = "#CCC",
  optionHighlightedColor: g = "#777",
  optionsComponent: O
}) => {
  let C = null, $ = null, B = Array.isArray(x) ? [...x] : [];
  const [Y, L] = Z(!1), [A, p] = Z(!1), [N, K] = Z(""), [de, D] = Z(!1), J = We(null), re = We(null), [te, ne] = Z(0);
  function ve() {
    _ ? (v([]), D(!0)) : (v(void 0), D(!0));
  }
  function q(a) {
    _ ? Array.isArray(c) && c.includes(a) ? v(c.filter((y) => y !== a)) : Array.isArray(c) ? v([...c, a]) : v([a]) : a !== c && v(a);
  }
  function R(a) {
    return c ? _ ? c.includes(a) : c === a : !1;
  }
  function j(a, y) {
    y && Array.isArray(a) && a.length === 0 ? D(!0) : y && Array.isArray(a) && a.length > 0 ? D(!1) : D(!y && a === void 0);
  }
  !de && F && (C = /* @__PURE__ */ h.jsx(
    "button",
    {
      onClick: (a) => {
        a.stopPropagation(), ve();
      },
      className: E["clear-btn"],
      children: "×"
    }
  )), T && ($ = /* @__PURE__ */ h.jsxs(
    "div",
    {
      className: E["search-input"],
      onClick: (a) => {
        var y;
        a.stopPropagation(), (y = re.current) == null || y.focus(), L(!0);
      },
      children: [
        /* @__PURE__ */ h.jsx("span", { className: E["search-icon"], children: "🔍" }),
        /* @__PURE__ */ h.jsx(
          "input",
          {
            ref: re,
            tabIndex: 0,
            type: "text",
            value: N,
            onChange: (a) => {
              K(a.target.value), p(!0);
            }
          }
        ),
        N.length > 0 && /* @__PURE__ */ h.jsx(
          "button",
          {
            className: E["clear-btn"],
            onClick: (a) => {
              a.stopPropagation(), L(!0), K("");
            },
            children: "×"
          }
        )
      ]
    }
  )), N && (B = Array.isArray(x) ? x.filter((a) => a.label.toString().toLowerCase().includes(N.toLowerCase())) : []);
  function I(a) {
    J.current && !J.current.contains(a.target) && L(!1);
  }
  function ae(a) {
    q(a), L(!1);
  }
  const ie = O || (({ listOptions: a, isSearch: y, searchKeyword: oe, handleClickOptions: se }) => /* @__PURE__ */ h.jsx("ul", { children: a.map((M, G) => /* @__PURE__ */ h.jsx(
    "li",
    {
      onClick: () => {
        se(M);
      },
      onMouseEnter: () => ne(G),
      className: `
              ${E.option} 
              ${R(M) ? E.selected : ""}
              ${G === te ? E.highlighted : ""}
            `,
      style: {
        "--dropdown-option-selected": k,
        "--dropdown-option-highlighted": g
      },
      children: y ? yr(M.label, oe) : M.label
    },
    G
  )) }));
  pr(() => (Y && (ne(0), K("")), j(c, _), document.addEventListener("mousedown", I), () => {
    document.removeEventListener("mousedown", I);
  }), [Y, c, _]);
  function z() {
    return /* @__PURE__ */ h.jsxs(
      "div",
      {
        ref: J,
        className: E["container-dropdown"],
        children: [
          /* @__PURE__ */ h.jsxs(
            "div",
            {
              className: E["container-selected"],
              onClick: () => L(!Y),
              tabIndex: 0,
              children: [
                /* @__PURE__ */ h.jsx("span", { className: E.value, children: _ ? Array.isArray(c) ? c == null ? void 0 : c.map((a, y) => /* @__PURE__ */ h.jsxs(
                  "button",
                  {
                    onClick: () => {
                      q(a);
                    },
                    className: E["option-badge"],
                    children: [
                      a.label,
                      /* @__PURE__ */ h.jsx("span", { className: E["remove-btn"], children: "×" })
                    ]
                  },
                  y
                )) : "" : c == null ? void 0 : c.label }),
                C,
                /* @__PURE__ */ h.jsx("div", { className: E.caret })
              ]
            }
          ),
          Y && /* @__PURE__ */ h.jsxs(
            "div",
            {
              className: E.options,
              style: { "--dropdown-z-index": d },
              children: [
                $,
                /* @__PURE__ */ h.jsx(ie, { listOptions: B, isSearch: A, searchKeyword: N, handleClickOptions: ae })
              ]
            }
          )
        ]
      }
    );
  }
  return P ? hr.createPortal(z(), document.getElementById(S) || document.body) : z();
};
export {
  Pr as DropDown,
  yr as highlightText
};
