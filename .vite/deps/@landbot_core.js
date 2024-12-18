import {
  __commonJS
} from "./chunk-EQCVQC35.js";

// node_modules/@landbot/core/dist/index.js
var require_dist = __commonJS({
  "node_modules/@landbot/core/dist/index.js"(exports, module) {
    !function(t, e) {
      if ("object" == typeof exports && "object" == typeof module) module.exports = e();
      else if ("function" == typeof define && define.amd) define([], e);
      else {
        var n = e();
        for (var r in n) ("object" == typeof exports ? exports : t)[r] = n[r];
      }
    }(self, () => (() => {
      var t = { 187: (t2) => {
        "use strict";
        var e2, n2 = "object" == typeof Reflect ? Reflect : null, r2 = n2 && "function" == typeof n2.apply ? n2.apply : function(t3, e3, n3) {
          return Function.prototype.apply.call(t3, e3, n3);
        };
        e2 = n2 && "function" == typeof n2.ownKeys ? n2.ownKeys : Object.getOwnPropertySymbols ? function(t3) {
          return Object.getOwnPropertyNames(t3).concat(Object.getOwnPropertySymbols(t3));
        } : function(t3) {
          return Object.getOwnPropertyNames(t3);
        };
        var i = Number.isNaN || function(t3) {
          return t3 != t3;
        };
        function s() {
          s.init.call(this);
        }
        t2.exports = s, t2.exports.once = function(t3, e3) {
          return new Promise(function(n3, r3) {
            function i2(n4) {
              t3.removeListener(e3, s2), r3(n4);
            }
            function s2() {
              "function" == typeof t3.removeListener && t3.removeListener("error", i2), n3([].slice.call(arguments));
            }
            g(t3, e3, s2, { once: true }), "error" !== e3 && function(t4, e4, n4) {
              "function" == typeof t4.on && g(t4, "error", e4, { once: true });
            }(t3, i2);
          });
        }, s.EventEmitter = s, s.prototype._events = void 0, s.prototype._eventsCount = 0, s.prototype._maxListeners = void 0;
        var o = 10;
        function a(t3) {
          if ("function" != typeof t3) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t3);
        }
        function c(t3) {
          return void 0 === t3._maxListeners ? s.defaultMaxListeners : t3._maxListeners;
        }
        function u(t3, e3, n3, r3) {
          var i2, s2, o2, u2;
          if (a(n3), void 0 === (s2 = t3._events) ? (s2 = t3._events = /* @__PURE__ */ Object.create(null), t3._eventsCount = 0) : (void 0 !== s2.newListener && (t3.emit("newListener", e3, n3.listener ? n3.listener : n3), s2 = t3._events), o2 = s2[e3]), void 0 === o2) o2 = s2[e3] = n3, ++t3._eventsCount;
          else if ("function" == typeof o2 ? o2 = s2[e3] = r3 ? [n3, o2] : [o2, n3] : r3 ? o2.unshift(n3) : o2.push(n3), (i2 = c(t3)) > 0 && o2.length > i2 && !o2.warned) {
            o2.warned = true;
            var h2 = new Error("Possible EventEmitter memory leak detected. " + o2.length + " " + String(e3) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            h2.name = "MaxListenersExceededWarning", h2.emitter = t3, h2.type = e3, h2.count = o2.length, u2 = h2, console && console.warn && console.warn(u2);
          }
          return t3;
        }
        function h() {
          if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = true, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
        }
        function l(t3, e3, n3) {
          var r3 = { fired: false, wrapFn: void 0, target: t3, type: e3, listener: n3 }, i2 = h.bind(r3);
          return i2.listener = n3, r3.wrapFn = i2, i2;
        }
        function d(t3, e3, n3) {
          var r3 = t3._events;
          if (void 0 === r3) return [];
          var i2 = r3[e3];
          return void 0 === i2 ? [] : "function" == typeof i2 ? n3 ? [i2.listener || i2] : [i2] : n3 ? function(t4) {
            for (var e4 = new Array(t4.length), n4 = 0; n4 < e4.length; ++n4) e4[n4] = t4[n4].listener || t4[n4];
            return e4;
          }(i2) : p(i2, i2.length);
        }
        function f(t3) {
          var e3 = this._events;
          if (void 0 !== e3) {
            var n3 = e3[t3];
            if ("function" == typeof n3) return 1;
            if (void 0 !== n3) return n3.length;
          }
          return 0;
        }
        function p(t3, e3) {
          for (var n3 = new Array(e3), r3 = 0; r3 < e3; ++r3) n3[r3] = t3[r3];
          return n3;
        }
        function g(t3, e3, n3, r3) {
          if ("function" == typeof t3.on) r3.once ? t3.once(e3, n3) : t3.on(e3, n3);
          else {
            if ("function" != typeof t3.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t3);
            t3.addEventListener(e3, function i2(s2) {
              r3.once && t3.removeEventListener(e3, i2), n3(s2);
            });
          }
        }
        Object.defineProperty(s, "defaultMaxListeners", { enumerable: true, get: function() {
          return o;
        }, set: function(t3) {
          if ("number" != typeof t3 || t3 < 0 || i(t3)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t3 + ".");
          o = t3;
        } }), s.init = function() {
          void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
        }, s.prototype.setMaxListeners = function(t3) {
          if ("number" != typeof t3 || t3 < 0 || i(t3)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t3 + ".");
          return this._maxListeners = t3, this;
        }, s.prototype.getMaxListeners = function() {
          return c(this);
        }, s.prototype.emit = function(t3) {
          for (var e3 = [], n3 = 1; n3 < arguments.length; n3++) e3.push(arguments[n3]);
          var i2 = "error" === t3, s2 = this._events;
          if (void 0 !== s2) i2 = i2 && void 0 === s2.error;
          else if (!i2) return false;
          if (i2) {
            var o2;
            if (e3.length > 0 && (o2 = e3[0]), o2 instanceof Error) throw o2;
            var a2 = new Error("Unhandled error." + (o2 ? " (" + o2.message + ")" : ""));
            throw a2.context = o2, a2;
          }
          var c2 = s2[t3];
          if (void 0 === c2) return false;
          if ("function" == typeof c2) r2(c2, this, e3);
          else {
            var u2 = c2.length, h2 = p(c2, u2);
            for (n3 = 0; n3 < u2; ++n3) r2(h2[n3], this, e3);
          }
          return true;
        }, s.prototype.addListener = function(t3, e3) {
          return u(this, t3, e3, false);
        }, s.prototype.on = s.prototype.addListener, s.prototype.prependListener = function(t3, e3) {
          return u(this, t3, e3, true);
        }, s.prototype.once = function(t3, e3) {
          return a(e3), this.on(t3, l(this, t3, e3)), this;
        }, s.prototype.prependOnceListener = function(t3, e3) {
          return a(e3), this.prependListener(t3, l(this, t3, e3)), this;
        }, s.prototype.removeListener = function(t3, e3) {
          var n3, r3, i2, s2, o2;
          if (a(e3), void 0 === (r3 = this._events)) return this;
          if (void 0 === (n3 = r3[t3])) return this;
          if (n3 === e3 || n3.listener === e3) 0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : (delete r3[t3], r3.removeListener && this.emit("removeListener", t3, n3.listener || e3));
          else if ("function" != typeof n3) {
            for (i2 = -1, s2 = n3.length - 1; s2 >= 0; s2--) if (n3[s2] === e3 || n3[s2].listener === e3) {
              o2 = n3[s2].listener, i2 = s2;
              break;
            }
            if (i2 < 0) return this;
            0 === i2 ? n3.shift() : function(t4, e4) {
              for (; e4 + 1 < t4.length; e4++) t4[e4] = t4[e4 + 1];
              t4.pop();
            }(n3, i2), 1 === n3.length && (r3[t3] = n3[0]), void 0 !== r3.removeListener && this.emit("removeListener", t3, o2 || e3);
          }
          return this;
        }, s.prototype.off = s.prototype.removeListener, s.prototype.removeAllListeners = function(t3) {
          var e3, n3, r3;
          if (void 0 === (n3 = this._events)) return this;
          if (void 0 === n3.removeListener) return 0 === arguments.length ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : void 0 !== n3[t3] && (0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : delete n3[t3]), this;
          if (0 === arguments.length) {
            var i2, s2 = Object.keys(n3);
            for (r3 = 0; r3 < s2.length; ++r3) "removeListener" !== (i2 = s2[r3]) && this.removeAllListeners(i2);
            return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
          }
          if ("function" == typeof (e3 = n3[t3])) this.removeListener(t3, e3);
          else if (void 0 !== e3) for (r3 = e3.length - 1; r3 >= 0; r3--) this.removeListener(t3, e3[r3]);
          return this;
        }, s.prototype.listeners = function(t3) {
          return d(this, t3, true);
        }, s.prototype.rawListeners = function(t3) {
          return d(this, t3, false);
        }, s.listenerCount = function(t3, e3) {
          return "function" == typeof t3.listenerCount ? t3.listenerCount(e3) : f.call(t3, e3);
        }, s.prototype.listenerCount = f, s.prototype.eventNames = function() {
          return this._eventsCount > 0 ? e2(this._events) : [];
        };
      }, 208: (t2, e2, n2) => {
        var r2, i = "__lodash_hash_undefined__", s = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, o = /^\w*$/, a = /^\./, c = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, u = /\\(\\)?/g, h = /^\[object .+?Constructor\]$/, l = "object" == typeof n2.g && n2.g && n2.g.Object === Object && n2.g, d = "object" == typeof self && self && self.Object === Object && self, f = l || d || Function("return this")(), p = Array.prototype, g = Function.prototype, m = Object.prototype, y = f["__core-js_shared__"], v = (r2 = /[^.]+$/.exec(y && y.keys && y.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r2 : "", w = g.toString, b = m.hasOwnProperty, _ = m.toString, E = RegExp("^" + w.call(b).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), T = f.Symbol, I = p.splice, S = P(f, "Map"), A = P(Object, "create"), C = T ? T.prototype : void 0, k = C ? C.toString : void 0;
        function N(t3) {
          var e3 = -1, n3 = t3 ? t3.length : 0;
          for (this.clear(); ++e3 < n3; ) {
            var r3 = t3[e3];
            this.set(r3[0], r3[1]);
          }
        }
        function O(t3) {
          var e3 = -1, n3 = t3 ? t3.length : 0;
          for (this.clear(); ++e3 < n3; ) {
            var r3 = t3[e3];
            this.set(r3[0], r3[1]);
          }
        }
        function D(t3) {
          var e3 = -1, n3 = t3 ? t3.length : 0;
          for (this.clear(); ++e3 < n3; ) {
            var r3 = t3[e3];
            this.set(r3[0], r3[1]);
          }
        }
        function R(t3, e3) {
          for (var n3, r3, i2 = t3.length; i2--; ) if ((n3 = t3[i2][0]) === (r3 = e3) || n3 != n3 && r3 != r3) return i2;
          return -1;
        }
        function L(t3, e3) {
          var n3, r3, i2 = t3.__data__;
          return ("string" == (r3 = typeof (n3 = e3)) || "number" == r3 || "symbol" == r3 || "boolean" == r3 ? "__proto__" !== n3 : null === n3) ? i2["string" == typeof e3 ? "string" : "hash"] : i2.map;
        }
        function P(t3, e3) {
          var n3 = function(t4, e4) {
            return null == t4 ? void 0 : t4[e4];
          }(t3, e3);
          return function(t4) {
            if (!V(t4) || v && v in t4) return false;
            var e4 = function(t5) {
              var e5 = V(t5) ? _.call(t5) : "";
              return "[object Function]" == e5 || "[object GeneratorFunction]" == e5;
            }(t4) || function(t5) {
              var e5 = false;
              if (null != t5 && "function" != typeof t5.toString) try {
                e5 = !!(t5 + "");
              } catch (t6) {
              }
              return e5;
            }(t4) ? E : h;
            return e4.test(function(t5) {
              if (null != t5) {
                try {
                  return w.call(t5);
                } catch (t6) {
                }
                try {
                  return t5 + "";
                } catch (t6) {
                }
              }
              return "";
            }(t4));
          }(n3) ? n3 : void 0;
        }
        N.prototype.clear = function() {
          this.__data__ = A ? A(null) : {};
        }, N.prototype.delete = function(t3) {
          return this.has(t3) && delete this.__data__[t3];
        }, N.prototype.get = function(t3) {
          var e3 = this.__data__;
          if (A) {
            var n3 = e3[t3];
            return n3 === i ? void 0 : n3;
          }
          return b.call(e3, t3) ? e3[t3] : void 0;
        }, N.prototype.has = function(t3) {
          var e3 = this.__data__;
          return A ? void 0 !== e3[t3] : b.call(e3, t3);
        }, N.prototype.set = function(t3, e3) {
          return this.__data__[t3] = A && void 0 === e3 ? i : e3, this;
        }, O.prototype.clear = function() {
          this.__data__ = [];
        }, O.prototype.delete = function(t3) {
          var e3 = this.__data__, n3 = R(e3, t3);
          return !(n3 < 0 || (n3 == e3.length - 1 ? e3.pop() : I.call(e3, n3, 1), 0));
        }, O.prototype.get = function(t3) {
          var e3 = this.__data__, n3 = R(e3, t3);
          return n3 < 0 ? void 0 : e3[n3][1];
        }, O.prototype.has = function(t3) {
          return R(this.__data__, t3) > -1;
        }, O.prototype.set = function(t3, e3) {
          var n3 = this.__data__, r3 = R(n3, t3);
          return r3 < 0 ? n3.push([t3, e3]) : n3[r3][1] = e3, this;
        }, D.prototype.clear = function() {
          this.__data__ = { hash: new N(), map: new (S || O)(), string: new N() };
        }, D.prototype.delete = function(t3) {
          return L(this, t3).delete(t3);
        }, D.prototype.get = function(t3) {
          return L(this, t3).get(t3);
        }, D.prototype.has = function(t3) {
          return L(this, t3).has(t3);
        }, D.prototype.set = function(t3, e3) {
          return L(this, t3).set(t3, e3), this;
        };
        var x = U(function(t3) {
          var e3;
          t3 = null == (e3 = t3) ? "" : function(t4) {
            if ("string" == typeof t4) return t4;
            if (j(t4)) return k ? k.call(t4) : "";
            var e4 = t4 + "";
            return "0" == e4 && 1 / t4 == -1 / 0 ? "-0" : e4;
          }(e3);
          var n3 = [];
          return a.test(t3) && n3.push(""), t3.replace(c, function(t4, e4, r3, i2) {
            n3.push(r3 ? i2.replace(u, "$1") : e4 || t4);
          }), n3;
        });
        function M(t3) {
          if ("string" == typeof t3 || j(t3)) return t3;
          var e3 = t3 + "";
          return "0" == e3 && 1 / t3 == -1 / 0 ? "-0" : e3;
        }
        function U(t3, e3) {
          if ("function" != typeof t3 || e3 && "function" != typeof e3) throw new TypeError("Expected a function");
          var n3 = function() {
            var r3 = arguments, i2 = e3 ? e3.apply(this, r3) : r3[0], s2 = n3.cache;
            if (s2.has(i2)) return s2.get(i2);
            var o2 = t3.apply(this, r3);
            return n3.cache = s2.set(i2, o2), o2;
          };
          return n3.cache = new (U.Cache || D)(), n3;
        }
        U.Cache = D;
        var F = Array.isArray;
        function V(t3) {
          var e3 = typeof t3;
          return !!t3 && ("object" == e3 || "function" == e3);
        }
        function j(t3) {
          return "symbol" == typeof t3 || /* @__PURE__ */ function(t4) {
            return !!t4 && "object" == typeof t4;
          }(t3) && "[object Symbol]" == _.call(t3);
        }
        t2.exports = function(t3, e3, n3) {
          var r3 = null == t3 ? void 0 : function(t4, e4) {
            var n4;
            e4 = function(t5, e5) {
              if (F(t5)) return false;
              var n5 = typeof t5;
              return !("number" != n5 && "symbol" != n5 && "boolean" != n5 && null != t5 && !j(t5)) || o.test(t5) || !s.test(t5) || null != e5 && t5 in Object(e5);
            }(e4, t4) ? [e4] : F(n4 = e4) ? n4 : x(n4);
            for (var r4 = 0, i2 = e4.length; null != t4 && r4 < i2; ) t4 = t4[M(e4[r4++])];
            return r4 && r4 == i2 ? t4 : void 0;
          }(t3, e3);
          return void 0 === r3 ? n3 : r3;
        };
      }, 468: (t2, e2, n2) => {
        var r2, i = "__lodash_hash_undefined__", s = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, o = /^\w*$/, a = /^\./, c = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, u = /\\(\\)?/g, h = /^\[object .+?Constructor\]$/, l = /^(?:0|[1-9]\d*)$/, d = "object" == typeof n2.g && n2.g && n2.g.Object === Object && n2.g, f = "object" == typeof self && self && self.Object === Object && self, p = d || f || Function("return this")(), g = Array.prototype, m = Function.prototype, y = Object.prototype, v = p["__core-js_shared__"], w = (r2 = /[^.]+$/.exec(v && v.keys && v.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r2 : "", b = m.toString, _ = y.hasOwnProperty, E = y.toString, T = RegExp("^" + b.call(_).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), I = p.Symbol, S = g.splice, A = M(p, "Map"), C = M(Object, "create"), k = I ? I.prototype : void 0, N = k ? k.toString : void 0;
        function O(t3) {
          var e3 = -1, n3 = t3 ? t3.length : 0;
          for (this.clear(); ++e3 < n3; ) {
            var r3 = t3[e3];
            this.set(r3[0], r3[1]);
          }
        }
        function D(t3) {
          var e3 = -1, n3 = t3 ? t3.length : 0;
          for (this.clear(); ++e3 < n3; ) {
            var r3 = t3[e3];
            this.set(r3[0], r3[1]);
          }
        }
        function R(t3) {
          var e3 = -1, n3 = t3 ? t3.length : 0;
          for (this.clear(); ++e3 < n3; ) {
            var r3 = t3[e3];
            this.set(r3[0], r3[1]);
          }
        }
        function L(t3, e3, n3) {
          var r3 = t3[e3];
          _.call(t3, e3) && q(r3, n3) && (void 0 !== n3 || e3 in t3) || (t3[e3] = n3);
        }
        function P(t3, e3) {
          for (var n3 = t3.length; n3--; ) if (q(t3[n3][0], e3)) return n3;
          return -1;
        }
        function x(t3, e3) {
          var n3, r3, i2 = t3.__data__;
          return ("string" == (r3 = typeof (n3 = e3)) || "number" == r3 || "symbol" == r3 || "boolean" == r3 ? "__proto__" !== n3 : null === n3) ? i2["string" == typeof e3 ? "string" : "hash"] : i2.map;
        }
        function M(t3, e3) {
          var n3 = function(t4, e4) {
            return null == t4 ? void 0 : t4[e4];
          }(t3, e3);
          return function(t4) {
            if (!$(t4) || w && w in t4) return false;
            var e4 = function(t5) {
              var e5 = $(t5) ? E.call(t5) : "";
              return "[object Function]" == e5 || "[object GeneratorFunction]" == e5;
            }(t4) || function(t5) {
              var e5 = false;
              if (null != t5 && "function" != typeof t5.toString) try {
                e5 = !!(t5 + "");
              } catch (t6) {
              }
              return e5;
            }(t4) ? T : h;
            return e4.test(function(t5) {
              if (null != t5) {
                try {
                  return b.call(t5);
                } catch (t6) {
                }
                try {
                  return t5 + "";
                } catch (t6) {
                }
              }
              return "";
            }(t4));
          }(n3) ? n3 : void 0;
        }
        function U(t3, e3) {
          return !!(e3 = null == e3 ? 9007199254740991 : e3) && ("number" == typeof t3 || l.test(t3)) && t3 > -1 && t3 % 1 == 0 && t3 < e3;
        }
        O.prototype.clear = function() {
          this.__data__ = C ? C(null) : {};
        }, O.prototype.delete = function(t3) {
          return this.has(t3) && delete this.__data__[t3];
        }, O.prototype.get = function(t3) {
          var e3 = this.__data__;
          if (C) {
            var n3 = e3[t3];
            return n3 === i ? void 0 : n3;
          }
          return _.call(e3, t3) ? e3[t3] : void 0;
        }, O.prototype.has = function(t3) {
          var e3 = this.__data__;
          return C ? void 0 !== e3[t3] : _.call(e3, t3);
        }, O.prototype.set = function(t3, e3) {
          return this.__data__[t3] = C && void 0 === e3 ? i : e3, this;
        }, D.prototype.clear = function() {
          this.__data__ = [];
        }, D.prototype.delete = function(t3) {
          var e3 = this.__data__, n3 = P(e3, t3);
          return !(n3 < 0 || (n3 == e3.length - 1 ? e3.pop() : S.call(e3, n3, 1), 0));
        }, D.prototype.get = function(t3) {
          var e3 = this.__data__, n3 = P(e3, t3);
          return n3 < 0 ? void 0 : e3[n3][1];
        }, D.prototype.has = function(t3) {
          return P(this.__data__, t3) > -1;
        }, D.prototype.set = function(t3, e3) {
          var n3 = this.__data__, r3 = P(n3, t3);
          return r3 < 0 ? n3.push([t3, e3]) : n3[r3][1] = e3, this;
        }, R.prototype.clear = function() {
          this.__data__ = { hash: new O(), map: new (A || D)(), string: new O() };
        }, R.prototype.delete = function(t3) {
          return x(this, t3).delete(t3);
        }, R.prototype.get = function(t3) {
          return x(this, t3).get(t3);
        }, R.prototype.has = function(t3) {
          return x(this, t3).has(t3);
        }, R.prototype.set = function(t3, e3) {
          return x(this, t3).set(t3, e3), this;
        };
        var F = j(function(t3) {
          var e3;
          t3 = null == (e3 = t3) ? "" : function(t4) {
            if ("string" == typeof t4) return t4;
            if (z(t4)) return N ? N.call(t4) : "";
            var e4 = t4 + "";
            return "0" == e4 && 1 / t4 == -1 / 0 ? "-0" : e4;
          }(e3);
          var n3 = [];
          return a.test(t3) && n3.push(""), t3.replace(c, function(t4, e4, r3, i2) {
            n3.push(r3 ? i2.replace(u, "$1") : e4 || t4);
          }), n3;
        });
        function V(t3) {
          if ("string" == typeof t3 || z(t3)) return t3;
          var e3 = t3 + "";
          return "0" == e3 && 1 / t3 == -1 / 0 ? "-0" : e3;
        }
        function j(t3, e3) {
          if ("function" != typeof t3 || e3 && "function" != typeof e3) throw new TypeError("Expected a function");
          var n3 = function() {
            var r3 = arguments, i2 = e3 ? e3.apply(this, r3) : r3[0], s2 = n3.cache;
            if (s2.has(i2)) return s2.get(i2);
            var o2 = t3.apply(this, r3);
            return n3.cache = s2.set(i2, o2), o2;
          };
          return n3.cache = new (j.Cache || R)(), n3;
        }
        function q(t3, e3) {
          return t3 === e3 || t3 != t3 && e3 != e3;
        }
        j.Cache = R;
        var B = Array.isArray;
        function $(t3) {
          var e3 = typeof t3;
          return !!t3 && ("object" == e3 || "function" == e3);
        }
        function z(t3) {
          return "symbol" == typeof t3 || /* @__PURE__ */ function(t4) {
            return !!t4 && "object" == typeof t4;
          }(t3) && "[object Symbol]" == E.call(t3);
        }
        t2.exports = function(t3, e3, n3) {
          return null == t3 ? t3 : function(t4, e4, n4, r3) {
            if (!$(t4)) return t4;
            e4 = function(t5, e5) {
              if (B(t5)) return false;
              var n5 = typeof t5;
              return !("number" != n5 && "symbol" != n5 && "boolean" != n5 && null != t5 && !z(t5)) || o.test(t5) || !s.test(t5) || null != e5 && t5 in Object(e5);
            }(e4, t4) ? [e4] : function(t5) {
              return B(t5) ? t5 : F(t5);
            }(e4);
            for (var i2 = -1, a2 = e4.length, c2 = a2 - 1, u2 = t4; null != u2 && ++i2 < a2; ) {
              var h2 = V(e4[i2]), l2 = n4;
              if (i2 != c2) {
                var d2 = u2[h2];
                void 0 === (l2 = r3 ? r3(d2, h2, u2) : void 0) && (l2 = $(d2) ? d2 : U(e4[i2 + 1]) ? [] : {});
              }
              L(u2, h2, l2), u2 = u2[h2];
            }
            return t4;
          }(t3, e3, n3);
        };
      }, 633: (t2, e2, n2) => {
        var r2, i = "__lodash_hash_undefined__", s = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, o = /^\w*$/, a = /^\./, c = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, u = /\\(\\)?/g, h = /^\[object .+?Constructor\]$/, l = "object" == typeof n2.g && n2.g && n2.g.Object === Object && n2.g, d = "object" == typeof self && self && self.Object === Object && self, f = l || d || Function("return this")(), p = Array.prototype, g = Function.prototype, m = Object.prototype, y = f["__core-js_shared__"], v = (r2 = /[^.]+$/.exec(y && y.keys && y.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r2 : "", w = g.toString, b = m.hasOwnProperty, _ = m.toString, E = RegExp("^" + w.call(b).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), T = f.Symbol, I = p.splice, S = x(f, "Map"), A = x(Object, "create"), C = T ? T.prototype : void 0, k = C ? C.toString : void 0;
        function N(t3) {
          var e3 = -1, n3 = t3 ? t3.length : 0;
          for (this.clear(); ++e3 < n3; ) {
            var r3 = t3[e3];
            this.set(r3[0], r3[1]);
          }
        }
        function O(t3) {
          var e3 = -1, n3 = t3 ? t3.length : 0;
          for (this.clear(); ++e3 < n3; ) {
            var r3 = t3[e3];
            this.set(r3[0], r3[1]);
          }
        }
        function D(t3) {
          var e3 = -1, n3 = t3 ? t3.length : 0;
          for (this.clear(); ++e3 < n3; ) {
            var r3 = t3[e3];
            this.set(r3[0], r3[1]);
          }
        }
        function R(t3, e3) {
          for (var n3, r3, i2 = t3.length; i2--; ) if ((n3 = t3[i2][0]) === (r3 = e3) || n3 != n3 && r3 != r3) return i2;
          return -1;
        }
        function L(t3) {
          return j(t3) ? t3 : U(t3);
        }
        function P(t3, e3) {
          var n3, r3, i2 = t3.__data__;
          return ("string" == (r3 = typeof (n3 = e3)) || "number" == r3 || "symbol" == r3 || "boolean" == r3 ? "__proto__" !== n3 : null === n3) ? i2["string" == typeof e3 ? "string" : "hash"] : i2.map;
        }
        function x(t3, e3) {
          var n3 = function(t4, e4) {
            return null == t4 ? void 0 : t4[e4];
          }(t3, e3);
          return function(t4) {
            if (!q(t4) || v && v in t4) return false;
            var e4 = function(t5) {
              var e5 = q(t5) ? _.call(t5) : "";
              return "[object Function]" == e5 || "[object GeneratorFunction]" == e5;
            }(t4) || function(t5) {
              var e5 = false;
              if (null != t5 && "function" != typeof t5.toString) try {
                e5 = !!(t5 + "");
              } catch (t6) {
              }
              return e5;
            }(t4) ? E : h;
            return e4.test(function(t5) {
              if (null != t5) {
                try {
                  return w.call(t5);
                } catch (t6) {
                }
                try {
                  return t5 + "";
                } catch (t6) {
                }
              }
              return "";
            }(t4));
          }(n3) ? n3 : void 0;
        }
        function M(t3, e3) {
          if (j(t3)) return false;
          var n3 = typeof t3;
          return !("number" != n3 && "symbol" != n3 && "boolean" != n3 && null != t3 && !B(t3)) || o.test(t3) || !s.test(t3) || null != e3 && t3 in Object(e3);
        }
        N.prototype.clear = function() {
          this.__data__ = A ? A(null) : {};
        }, N.prototype.delete = function(t3) {
          return this.has(t3) && delete this.__data__[t3];
        }, N.prototype.get = function(t3) {
          var e3 = this.__data__;
          if (A) {
            var n3 = e3[t3];
            return n3 === i ? void 0 : n3;
          }
          return b.call(e3, t3) ? e3[t3] : void 0;
        }, N.prototype.has = function(t3) {
          var e3 = this.__data__;
          return A ? void 0 !== e3[t3] : b.call(e3, t3);
        }, N.prototype.set = function(t3, e3) {
          return this.__data__[t3] = A && void 0 === e3 ? i : e3, this;
        }, O.prototype.clear = function() {
          this.__data__ = [];
        }, O.prototype.delete = function(t3) {
          var e3 = this.__data__, n3 = R(e3, t3);
          return !(n3 < 0 || (n3 == e3.length - 1 ? e3.pop() : I.call(e3, n3, 1), 0));
        }, O.prototype.get = function(t3) {
          var e3 = this.__data__, n3 = R(e3, t3);
          return n3 < 0 ? void 0 : e3[n3][1];
        }, O.prototype.has = function(t3) {
          return R(this.__data__, t3) > -1;
        }, O.prototype.set = function(t3, e3) {
          var n3 = this.__data__, r3 = R(n3, t3);
          return r3 < 0 ? n3.push([t3, e3]) : n3[r3][1] = e3, this;
        }, D.prototype.clear = function() {
          this.__data__ = { hash: new N(), map: new (S || O)(), string: new N() };
        }, D.prototype.delete = function(t3) {
          return P(this, t3).delete(t3);
        }, D.prototype.get = function(t3) {
          return P(this, t3).get(t3);
        }, D.prototype.has = function(t3) {
          return P(this, t3).has(t3);
        }, D.prototype.set = function(t3, e3) {
          return P(this, t3).set(t3, e3), this;
        };
        var U = V(function(t3) {
          var e3;
          t3 = null == (e3 = t3) ? "" : function(t4) {
            if ("string" == typeof t4) return t4;
            if (B(t4)) return k ? k.call(t4) : "";
            var e4 = t4 + "";
            return "0" == e4 && 1 / t4 == -1 / 0 ? "-0" : e4;
          }(e3);
          var n3 = [];
          return a.test(t3) && n3.push(""), t3.replace(c, function(t4, e4, r3, i2) {
            n3.push(r3 ? i2.replace(u, "$1") : e4 || t4);
          }), n3;
        });
        function F(t3) {
          if ("string" == typeof t3 || B(t3)) return t3;
          var e3 = t3 + "";
          return "0" == e3 && 1 / t3 == -1 / 0 ? "-0" : e3;
        }
        function V(t3, e3) {
          if ("function" != typeof t3 || e3 && "function" != typeof e3) throw new TypeError("Expected a function");
          var n3 = function() {
            var r3 = arguments, i2 = e3 ? e3.apply(this, r3) : r3[0], s2 = n3.cache;
            if (s2.has(i2)) return s2.get(i2);
            var o2 = t3.apply(this, r3);
            return n3.cache = s2.set(i2, o2), o2;
          };
          return n3.cache = new (V.Cache || D)(), n3;
        }
        V.Cache = D;
        var j = Array.isArray;
        function q(t3) {
          var e3 = typeof t3;
          return !!t3 && ("object" == e3 || "function" == e3);
        }
        function B(t3) {
          return "symbol" == typeof t3 || /* @__PURE__ */ function(t4) {
            return !!t4 && "object" == typeof t4;
          }(t3) && "[object Symbol]" == _.call(t3);
        }
        t2.exports = function(t3, e3) {
          return null == t3 || function(t4, e4) {
            t4 = function(t5, e5) {
              return 1 == e5.length ? t5 : function(t6, e6) {
                for (var n4 = 0, r4 = (e6 = M(e6, t6) ? [e6] : L(e6)).length; null != t6 && n4 < r4; ) t6 = t6[F(e6[n4++])];
                return n4 && n4 == r4 ? t6 : void 0;
              }(t5, function(t6, e6, n4) {
                var r4 = -1, i3 = t6.length;
                e6 < 0 && (e6 = -e6 > i3 ? 0 : i3 + e6), (n4 = n4 > i3 ? i3 : n4) < 0 && (n4 += i3), i3 = e6 > n4 ? 0 : n4 - e6 >>> 0, e6 >>>= 0;
                for (var s2 = Array(i3); ++r4 < i3; ) s2[r4] = t6[r4 + e6];
                return s2;
              }(e5, 0, -1));
            }(t4, e4 = M(e4, t4) ? [e4] : L(e4));
            var n3, r3, i2 = F((r3 = (n3 = e4) ? n3.length : 0) ? n3[r3 - 1] : void 0);
            return !(null != t4 && b.call(t4, i2)) || delete t4[i2];
          }(t3, e3);
        };
      } }, e = {};
      function n(r2) {
        var i = e[r2];
        if (void 0 !== i) return i.exports;
        var s = e[r2] = { exports: {} };
        return t[r2](s, s.exports, n), s.exports;
      }
      n.n = (t2) => {
        var e2 = t2 && t2.__esModule ? () => t2.default : () => t2;
        return n.d(e2, { a: e2 }), e2;
      }, n.d = (t2, e2) => {
        for (var r2 in e2) n.o(e2, r2) && !n.o(t2, r2) && Object.defineProperty(t2, r2, { enumerable: true, get: e2[r2] });
      }, n.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t2) {
          if ("object" == typeof window) return window;
        }
      }(), n.o = (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2), n.r = (t2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
      };
      var r = {};
      return (() => {
        "use strict";
        n.r(r), n.d(r, { ChatsCore: () => eg, Core: () => tg, default: () => ig });
        var t2 = {};
        n.r(t2), n.d(t2, { fetch: () => d });
        var e2 = {};
        n.r(e2), n.d(e2, { getTypingDelay: () => b, isBotMessage: () => m, isSystemMessage: () => y, readingTime: () => v, wordsAmount: () => w });
        var i = {};
        n.r(i), n.d(i, { fixConfigUrl: () => T, getSafeUrl: () => E, randomKey: () => _, storageAvailability: () => I });
        var s = {};
        function o(t3, e3) {
          var n2 = {};
          for (var r2 in t3) Object.prototype.hasOwnProperty.call(t3, r2) && e3.indexOf(r2) < 0 && (n2[r2] = t3[r2]);
          if (null != t3 && "function" == typeof Object.getOwnPropertySymbols) {
            var i2 = 0;
            for (r2 = Object.getOwnPropertySymbols(t3); i2 < r2.length; i2++) e3.indexOf(r2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(t3, r2[i2]) && (n2[r2[i2]] = t3[r2[i2]]);
          }
          return n2;
        }
        function a(t3, e3, n2, r2) {
          return new (n2 || (n2 = Promise))(function(i2, s2) {
            function o2(t4) {
              try {
                c2(r2.next(t4));
              } catch (t5) {
                s2(t5);
              }
            }
            function a2(t4) {
              try {
                c2(r2.throw(t4));
              } catch (t5) {
                s2(t5);
              }
            }
            function c2(t4) {
              var e4;
              t4.done ? i2(t4.value) : (e4 = t4.value, e4 instanceof n2 ? e4 : new n2(function(t5) {
                t5(e4);
              })).then(o2, a2);
            }
            c2((r2 = r2.apply(t3, e3 || [])).next());
          });
        }
        n.r(s), n.d(s, { asyncUtils: () => t2, chatUtils: () => e2, fetch: () => d, fixConfigUrl: () => T, getSafeUrl: () => E, getTypingDelay: () => b, isBotMessage: () => m, isSystemMessage: () => y, randomKey: () => _, readingTime: () => v, storageAvailability: () => I, utils: () => i, wordsAmount: () => w }), Object.create, Object.create;
        const c = ({ serverUrl: t3, channelToken: e3 }) => `${t3}/webchat/auth/${e3}/`, u = ({ serverUrl: t3 }) => `${t3}/webchat/api/send/`, h = ({ serverUrl: t3, channelToken: e3 }) => `${t3}/webchat/files/${e3}/`, l = window.fetch, d = ({ url: t3, method: e3 = "GET", headers: n2 = { Accept: "application/json" }, body: r2 }) => l(t3, { method: e3, headers: n2, body: r2 }).then((t4) => {
          if (t4.status >= 300) throw { code: t4.status };
          return t4;
        }).then((t4) => t4.json());
        var f = n(208), p = n.n(f);
        var g;
        !function(t3) {
          t3.AUTO = "auto", t3.CUSTOM = "custom";
        }(g || (g = {}));
        const m = (t3) => {
          const e3 = Number(t3.samurai);
          return !Number.isNaN(e3) && e3 < 0;
        }, y = (t3) => {
          const e3 = Number(t3.samurai);
          return !Number.isNaN(e3) && 0 === e3;
        }, v = (t3, e3 = {}) => Math.min(6e4 / p()(e3, "delay.average_human_reading_speed", 300) * t3, 1e3 * p()(e3, "delay.max_delay", 2.5)), w = (t3) => "string" == typeof t3 ? t3.trim().split(/\s+/).length : 0, b = (t3, e3 = {}, n2 = {}) => {
          const r2 = p()(e3, "extra.typing", g.AUTO), i2 = p()(e3, "extra.typing_delay", 0);
          if (false === n2.state) return 0;
          if (n2.block_custom && r2 === g.CUSTOM) return 1e3 * i2;
          if (true === p()(n2, "delay.is_constant", false)) return 1e3 * p()(n2, "delay.constant", 0);
          if (0 === e3.seq || !t3) return 0;
          switch (t3.type) {
            case "text":
            case "stripe":
            case "stripe_intent":
              return v(w(t3.message), n2);
            case "dialog":
              return v(w(t3.title || t3.message), n2);
            case "image":
              return 300;
            default:
              return 0;
          }
        }, _ = (t3 = 20) => {
          const e3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          let n2 = "+";
          for (let r2 = 0; r2 < t3; r2++) n2 = n2.concat(e3.charAt(Math.floor(Math.random() * e3.length)));
          return n2;
        }, E = (t3) => t3 ? "/" === t3.slice(-1) ? t3.slice(0, -1) : t3 : null, T = (t3) => "string" == typeof t3 ? t3.replace(".html", ".json") : t3, I = (t3 = "localStorage") => {
          let e3 = null;
          try {
            e3 = window[t3];
            const n2 = "__storage_test__";
            return e3.setItem(n2, n2), e3.removeItem(n2), true;
          } catch (t4) {
            return t4 instanceof DOMException && (22 === t4.code || 1014 === t4.code || "QuotaExceededError" === t4.name || "NS_ERROR_DOM_QUOTA_REACHED" === t4.name) && 0 !== e3.length;
          }
        };
        class S {
          createAuth({ welcomeUrl: t3, channelToken: e3 }) {
            return a(this, void 0, void 0, function* () {
              return d({ url: c({ serverUrl: t3, channelToken: e3 }), method: "POST" }).then((t4) => t4.auth_data);
            });
          }
          retrieveAuth({ serverUrl: t3, channelToken: e3, landbotToken: n2 }) {
            return a(this, void 0, void 0, function* () {
              return d({ url: c({ serverUrl: t3, channelToken: e3 }), headers: { Accept: "application/json", Authorization: `Bearer ${n2}` }, method: "GET" }).then((t4) => t4.auth_data);
            });
          }
          sendMessage({ serverUrl: t3, data: e3, landbotToken: n2 }) {
            return a(this, void 0, void 0, function* () {
              return d({ url: u({ serverUrl: t3 }), headers: { Accept: "application/json", Authorization: n2 ? `Bearer ${n2}` : void 0 }, method: "POST", body: JSON.stringify(e3) });
            });
          }
          uploadFile({ serverUrl: t3, file: e3, landbotToken: n2, channelToken: r2 }) {
            return a(this, void 0, void 0, function* () {
              const i2 = new FormData();
              return i2.append("file", e3), d({ url: h({ serverUrl: t3, channelToken: r2 }), headers: { Accept: "application/json", Authorization: `Bearer ${n2}` }, method: "POST", body: i2 });
            });
          }
        }
        class A {
          constructor(t3) {
            this.data = this._cleanData(t3);
          }
          update(t3) {
            const e3 = Object.assign(Object.assign({}, this.data), t3);
            this.data = this._cleanData(e3);
          }
          _cleanData(t3) {
            return Object.assign(Object.assign({}, t3), { serverUrl: E(t3.serverUrl), welcomeUrl: E(t3.welcomeUrl) });
          }
        }
        const C = "new_message", k = function(t3) {
          const e3 = [];
          let n2 = 0;
          for (let r2 = 0; r2 < t3.length; r2++) {
            let i2 = t3.charCodeAt(r2);
            i2 < 128 ? e3[n2++] = i2 : i2 < 2048 ? (e3[n2++] = i2 >> 6 | 192, e3[n2++] = 63 & i2 | 128) : 55296 == (64512 & i2) && r2 + 1 < t3.length && 56320 == (64512 & t3.charCodeAt(r2 + 1)) ? (i2 = 65536 + ((1023 & i2) << 10) + (1023 & t3.charCodeAt(++r2)), e3[n2++] = i2 >> 18 | 240, e3[n2++] = i2 >> 12 & 63 | 128, e3[n2++] = i2 >> 6 & 63 | 128, e3[n2++] = 63 & i2 | 128) : (e3[n2++] = i2 >> 12 | 224, e3[n2++] = i2 >> 6 & 63 | 128, e3[n2++] = 63 & i2 | 128);
          }
          return e3;
        }, N = { byteToCharMap_: null, charToByteMap_: null, byteToCharMapWebSafe_: null, charToByteMapWebSafe_: null, ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", get ENCODED_VALS() {
          return this.ENCODED_VALS_BASE + "+/=";
        }, get ENCODED_VALS_WEBSAFE() {
          return this.ENCODED_VALS_BASE + "-_.";
        }, HAS_NATIVE_SUPPORT: "function" == typeof atob, encodeByteArray(t3, e3) {
          if (!Array.isArray(t3)) throw Error("encodeByteArray takes an array as a parameter");
          this.init_();
          const n2 = e3 ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, r2 = [];
          for (let e4 = 0; e4 < t3.length; e4 += 3) {
            const i2 = t3[e4], s2 = e4 + 1 < t3.length, o2 = s2 ? t3[e4 + 1] : 0, a2 = e4 + 2 < t3.length, c2 = a2 ? t3[e4 + 2] : 0, u2 = i2 >> 2, h2 = (3 & i2) << 4 | o2 >> 4;
            let l2 = (15 & o2) << 2 | c2 >> 6, d2 = 63 & c2;
            a2 || (d2 = 64, s2 || (l2 = 64)), r2.push(n2[u2], n2[h2], n2[l2], n2[d2]);
          }
          return r2.join("");
        }, encodeString(t3, e3) {
          return this.HAS_NATIVE_SUPPORT && !e3 ? btoa(t3) : this.encodeByteArray(k(t3), e3);
        }, decodeString(t3, e3) {
          return this.HAS_NATIVE_SUPPORT && !e3 ? atob(t3) : function(t4) {
            const e4 = [];
            let n2 = 0, r2 = 0;
            for (; n2 < t4.length; ) {
              const i2 = t4[n2++];
              if (i2 < 128) e4[r2++] = String.fromCharCode(i2);
              else if (i2 > 191 && i2 < 224) {
                const s2 = t4[n2++];
                e4[r2++] = String.fromCharCode((31 & i2) << 6 | 63 & s2);
              } else if (i2 > 239 && i2 < 365) {
                const s2 = ((7 & i2) << 18 | (63 & t4[n2++]) << 12 | (63 & t4[n2++]) << 6 | 63 & t4[n2++]) - 65536;
                e4[r2++] = String.fromCharCode(55296 + (s2 >> 10)), e4[r2++] = String.fromCharCode(56320 + (1023 & s2));
              } else {
                const s2 = t4[n2++], o2 = t4[n2++];
                e4[r2++] = String.fromCharCode((15 & i2) << 12 | (63 & s2) << 6 | 63 & o2);
              }
            }
            return e4.join("");
          }(this.decodeStringToByteArray(t3, e3));
        }, decodeStringToByteArray(t3, e3) {
          this.init_();
          const n2 = e3 ? this.charToByteMapWebSafe_ : this.charToByteMap_, r2 = [];
          for (let e4 = 0; e4 < t3.length; ) {
            const i2 = n2[t3.charAt(e4++)], s2 = e4 < t3.length ? n2[t3.charAt(e4)] : 0;
            ++e4;
            const o2 = e4 < t3.length ? n2[t3.charAt(e4)] : 64;
            ++e4;
            const a2 = e4 < t3.length ? n2[t3.charAt(e4)] : 64;
            if (++e4, null == i2 || null == s2 || null == o2 || null == a2) throw new O();
            const c2 = i2 << 2 | s2 >> 4;
            if (r2.push(c2), 64 !== o2) {
              const t4 = s2 << 4 & 240 | o2 >> 2;
              if (r2.push(t4), 64 !== a2) {
                const t5 = o2 << 6 & 192 | a2;
                r2.push(t5);
              }
            }
          }
          return r2;
        }, init_() {
          if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
            for (let t3 = 0; t3 < this.ENCODED_VALS.length; t3++) this.byteToCharMap_[t3] = this.ENCODED_VALS.charAt(t3), this.charToByteMap_[this.byteToCharMap_[t3]] = t3, this.byteToCharMapWebSafe_[t3] = this.ENCODED_VALS_WEBSAFE.charAt(t3), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t3]] = t3, t3 >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t3)] = t3, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t3)] = t3);
          }
        } };
        class O extends Error {
          constructor() {
            super(...arguments), this.name = "DecodeBase64StringError";
          }
        }
        const D = function(t3) {
          return function(t4) {
            const e3 = k(t4);
            return N.encodeByteArray(e3, true);
          }(t3).replace(/\./g, "");
        }, R = function(t3) {
          try {
            return N.decodeString(t3, true);
          } catch (t4) {
            console.error("base64Decode failed: ", t4);
          }
          return null;
        }, L = () => {
          try {
            return function() {
              if ("undefined" != typeof self) return self;
              if ("undefined" != typeof window) return window;
              if (void 0 !== n.g) return n.g;
              throw new Error("Unable to locate global object.");
            }().__FIREBASE_DEFAULTS__ || (() => {
              if ("undefined" == typeof process || void 0 === process.env) return;
              const t3 = process.env.__FIREBASE_DEFAULTS__;
              return t3 ? JSON.parse(t3) : void 0;
            })() || (() => {
              if ("undefined" == typeof document) return;
              let t3;
              try {
                t3 = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
              } catch (t4) {
                return;
              }
              const e3 = t3 && R(t3[1]);
              return e3 && JSON.parse(e3);
            })();
          } catch (t3) {
            return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t3}`);
          }
        }, P = () => {
          var t3;
          return null === (t3 = L()) || void 0 === t3 ? void 0 : t3.config;
        };
        class x {
          constructor() {
            this.reject = () => {
            }, this.resolve = () => {
            }, this.promise = new Promise((t3, e3) => {
              this.resolve = t3, this.reject = e3;
            });
          }
          wrapCallback(t3) {
            return (e3, n2) => {
              e3 ? this.reject(e3) : this.resolve(n2), "function" == typeof t3 && (this.promise.catch(() => {
              }), 1 === t3.length ? t3(e3) : t3(e3, n2));
            };
          }
        }
        function M() {
          return "undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : "";
        }
        class U extends Error {
          constructor(t3, e3, n2) {
            super(e3), this.code = t3, this.customData = n2, this.name = "FirebaseError", Object.setPrototypeOf(this, U.prototype), Error.captureStackTrace && Error.captureStackTrace(this, F.prototype.create);
          }
        }
        class F {
          constructor(t3, e3, n2) {
            this.service = t3, this.serviceName = e3, this.errors = n2;
          }
          create(t3, ...e3) {
            const n2 = e3[0] || {}, r2 = `${this.service}/${t3}`, i2 = this.errors[t3], s2 = i2 ? function(t4, e4) {
              return t4.replace(V, (t5, n3) => {
                const r3 = e4[n3];
                return null != r3 ? String(r3) : `<${n3}?>`;
              });
            }(i2, n2) : "Error", o2 = `${this.serviceName}: ${s2} (${r2}).`;
            return new U(r2, o2, n2);
          }
        }
        const V = /\{\$([^}]+)}/g;
        function j(t3, e3) {
          if (t3 === e3) return true;
          const n2 = Object.keys(t3), r2 = Object.keys(e3);
          for (const i2 of n2) {
            if (!r2.includes(i2)) return false;
            const n3 = t3[i2], s2 = e3[i2];
            if (q(n3) && q(s2)) {
              if (!j(n3, s2)) return false;
            } else if (n3 !== s2) return false;
          }
          for (const t4 of r2) if (!n2.includes(t4)) return false;
          return true;
        }
        function q(t3) {
          return null !== t3 && "object" == typeof t3;
        }
        function B(t3) {
          const e3 = [];
          for (const [n2, r2] of Object.entries(t3)) Array.isArray(r2) ? r2.forEach((t4) => {
            e3.push(encodeURIComponent(n2) + "=" + encodeURIComponent(t4));
          }) : e3.push(encodeURIComponent(n2) + "=" + encodeURIComponent(r2));
          return e3.length ? "&" + e3.join("&") : "";
        }
        function $(t3) {
          const e3 = {};
          return t3.replace(/^\?/, "").split("&").forEach((t4) => {
            if (t4) {
              const [n2, r2] = t4.split("=");
              e3[decodeURIComponent(n2)] = decodeURIComponent(r2);
            }
          }), e3;
        }
        function z(t3) {
          const e3 = t3.indexOf("?");
          if (!e3) return "";
          const n2 = t3.indexOf("#", e3);
          return t3.substring(e3, n2 > 0 ? n2 : void 0);
        }
        class K {
          constructor(t3, e3) {
            this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = false, this.onNoObservers = e3, this.task.then(() => {
              t3(this);
            }).catch((t4) => {
              this.error(t4);
            });
          }
          next(t3) {
            this.forEachObserver((e3) => {
              e3.next(t3);
            });
          }
          error(t3) {
            this.forEachObserver((e3) => {
              e3.error(t3);
            }), this.close(t3);
          }
          complete() {
            this.forEachObserver((t3) => {
              t3.complete();
            }), this.close();
          }
          subscribe(t3, e3, n2) {
            let r2;
            if (void 0 === t3 && void 0 === e3 && void 0 === n2) throw new Error("Missing Observer.");
            r2 = function(t4, e4) {
              if ("object" != typeof t4 || null === t4) return false;
              for (const e5 of ["next", "error", "complete"]) if (e5 in t4 && "function" == typeof t4[e5]) return true;
              return false;
            }(t3) ? t3 : { next: t3, error: e3, complete: n2 }, void 0 === r2.next && (r2.next = H), void 0 === r2.error && (r2.error = H), void 0 === r2.complete && (r2.complete = H);
            const i2 = this.unsubscribeOne.bind(this, this.observers.length);
            return this.finalized && this.task.then(() => {
              try {
                this.finalError ? r2.error(this.finalError) : r2.complete();
              } catch (t4) {
              }
            }), this.observers.push(r2), i2;
          }
          unsubscribeOne(t3) {
            void 0 !== this.observers && void 0 !== this.observers[t3] && (delete this.observers[t3], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this));
          }
          forEachObserver(t3) {
            if (!this.finalized) for (let e3 = 0; e3 < this.observers.length; e3++) this.sendOne(e3, t3);
          }
          sendOne(t3, e3) {
            this.task.then(() => {
              if (void 0 !== this.observers && void 0 !== this.observers[t3]) try {
                e3(this.observers[t3]);
              } catch (t4) {
                "undefined" != typeof console && console.error && console.error(t4);
              }
            });
          }
          close(t3) {
            this.finalized || (this.finalized = true, void 0 !== t3 && (this.finalError = t3), this.task.then(() => {
              this.observers = void 0, this.onNoObservers = void 0;
            }));
          }
        }
        function H() {
        }
        function G(t3) {
          return t3 && t3._delegate ? t3._delegate : t3;
        }
        class W {
          constructor(t3, e3, n2) {
            this.name = t3, this.instanceFactory = e3, this.type = n2, this.multipleInstances = false, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null;
          }
          setInstantiationMode(t3) {
            return this.instantiationMode = t3, this;
          }
          setMultipleInstances(t3) {
            return this.multipleInstances = t3, this;
          }
          setServiceProps(t3) {
            return this.serviceProps = t3, this;
          }
          setInstanceCreatedCallback(t3) {
            return this.onInstanceCreated = t3, this;
          }
        }
        const Q = "[DEFAULT]";
        class Y {
          constructor(t3, e3) {
            this.name = t3, this.container = e3, this.component = null, this.instances = /* @__PURE__ */ new Map(), this.instancesDeferred = /* @__PURE__ */ new Map(), this.instancesOptions = /* @__PURE__ */ new Map(), this.onInitCallbacks = /* @__PURE__ */ new Map();
          }
          get(t3) {
            const e3 = this.normalizeInstanceIdentifier(t3);
            if (!this.instancesDeferred.has(e3)) {
              const t4 = new x();
              if (this.instancesDeferred.set(e3, t4), this.isInitialized(e3) || this.shouldAutoInitialize()) try {
                const n2 = this.getOrInitializeService({ instanceIdentifier: e3 });
                n2 && t4.resolve(n2);
              } catch (t5) {
              }
            }
            return this.instancesDeferred.get(e3).promise;
          }
          getImmediate(t3) {
            var e3;
            const n2 = this.normalizeInstanceIdentifier(null == t3 ? void 0 : t3.identifier), r2 = null !== (e3 = null == t3 ? void 0 : t3.optional) && void 0 !== e3 && e3;
            if (!this.isInitialized(n2) && !this.shouldAutoInitialize()) {
              if (r2) return null;
              throw Error(`Service ${this.name} is not available`);
            }
            try {
              return this.getOrInitializeService({ instanceIdentifier: n2 });
            } catch (t4) {
              if (r2) return null;
              throw t4;
            }
          }
          getComponent() {
            return this.component;
          }
          setComponent(t3) {
            if (t3.name !== this.name) throw Error(`Mismatching Component ${t3.name} for Provider ${this.name}.`);
            if (this.component) throw Error(`Component for ${this.name} has already been provided`);
            if (this.component = t3, this.shouldAutoInitialize()) {
              if (function(t4) {
                return "EAGER" === t4.instantiationMode;
              }(t3)) try {
                this.getOrInitializeService({ instanceIdentifier: Q });
              } catch (t4) {
              }
              for (const [t4, e3] of this.instancesDeferred.entries()) {
                const n2 = this.normalizeInstanceIdentifier(t4);
                try {
                  const t5 = this.getOrInitializeService({ instanceIdentifier: n2 });
                  e3.resolve(t5);
                } catch (t5) {
                }
              }
            }
          }
          clearInstance(t3 = "[DEFAULT]") {
            this.instancesDeferred.delete(t3), this.instancesOptions.delete(t3), this.instances.delete(t3);
          }
          async delete() {
            const t3 = Array.from(this.instances.values());
            await Promise.all([...t3.filter((t4) => "INTERNAL" in t4).map((t4) => t4.INTERNAL.delete()), ...t3.filter((t4) => "_delete" in t4).map((t4) => t4._delete())]);
          }
          isComponentSet() {
            return null != this.component;
          }
          isInitialized(t3 = "[DEFAULT]") {
            return this.instances.has(t3);
          }
          getOptions(t3 = "[DEFAULT]") {
            return this.instancesOptions.get(t3) || {};
          }
          initialize(t3 = {}) {
            const { options: e3 = {} } = t3, n2 = this.normalizeInstanceIdentifier(t3.instanceIdentifier);
            if (this.isInitialized(n2)) throw Error(`${this.name}(${n2}) has already been initialized`);
            if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
            const r2 = this.getOrInitializeService({ instanceIdentifier: n2, options: e3 });
            for (const [t4, e4] of this.instancesDeferred.entries()) n2 === this.normalizeInstanceIdentifier(t4) && e4.resolve(r2);
            return r2;
          }
          onInit(t3, e3) {
            var n2;
            const r2 = this.normalizeInstanceIdentifier(e3), i2 = null !== (n2 = this.onInitCallbacks.get(r2)) && void 0 !== n2 ? n2 : /* @__PURE__ */ new Set();
            i2.add(t3), this.onInitCallbacks.set(r2, i2);
            const s2 = this.instances.get(r2);
            return s2 && t3(s2, r2), () => {
              i2.delete(t3);
            };
          }
          invokeOnInitCallbacks(t3, e3) {
            const n2 = this.onInitCallbacks.get(e3);
            if (n2) for (const r2 of n2) try {
              r2(t3, e3);
            } catch (t4) {
            }
          }
          getOrInitializeService({ instanceIdentifier: t3, options: e3 = {} }) {
            let n2 = this.instances.get(t3);
            if (!n2 && this.component && (n2 = this.component.instanceFactory(this.container, { instanceIdentifier: (r2 = t3, r2 === Q ? void 0 : r2), options: e3 }), this.instances.set(t3, n2), this.instancesOptions.set(t3, e3), this.invokeOnInitCallbacks(n2, t3), this.component.onInstanceCreated)) try {
              this.component.onInstanceCreated(this.container, t3, n2);
            } catch (t4) {
            }
            var r2;
            return n2 || null;
          }
          normalizeInstanceIdentifier(t3 = "[DEFAULT]") {
            return this.component ? this.component.multipleInstances ? t3 : Q : t3;
          }
          shouldAutoInitialize() {
            return !!this.component && "EXPLICIT" !== this.component.instantiationMode;
          }
        }
        class J {
          constructor(t3) {
            this.name = t3, this.providers = /* @__PURE__ */ new Map();
          }
          addComponent(t3) {
            const e3 = this.getProvider(t3.name);
            if (e3.isComponentSet()) throw new Error(`Component ${t3.name} has already been registered with ${this.name}`);
            e3.setComponent(t3);
          }
          addOrOverwriteComponent(t3) {
            this.getProvider(t3.name).isComponentSet() && this.providers.delete(t3.name), this.addComponent(t3);
          }
          getProvider(t3) {
            if (this.providers.has(t3)) return this.providers.get(t3);
            const e3 = new Y(t3, this);
            return this.providers.set(t3, e3), e3;
          }
          getProviders() {
            return Array.from(this.providers.values());
          }
        }
        const X = [];
        var Z, tt;
        (tt = Z || (Z = {}))[tt.DEBUG = 0] = "DEBUG", tt[tt.VERBOSE = 1] = "VERBOSE", tt[tt.INFO = 2] = "INFO", tt[tt.WARN = 3] = "WARN", tt[tt.ERROR = 4] = "ERROR", tt[tt.SILENT = 5] = "SILENT";
        const et = { debug: Z.DEBUG, verbose: Z.VERBOSE, info: Z.INFO, warn: Z.WARN, error: Z.ERROR, silent: Z.SILENT }, nt = Z.INFO, rt = { [Z.DEBUG]: "log", [Z.VERBOSE]: "log", [Z.INFO]: "info", [Z.WARN]: "warn", [Z.ERROR]: "error" }, it = (t3, e3, ...n2) => {
          if (e3 < t3.logLevel) return;
          const r2 = (/* @__PURE__ */ new Date()).toISOString(), i2 = rt[e3];
          if (!i2) throw new Error(`Attempted to log a message with an invalid logType (value: ${e3})`);
          console[i2](`[${r2}]  ${t3.name}:`, ...n2);
        };
        class st {
          constructor(t3) {
            this.name = t3, this._logLevel = nt, this._logHandler = it, this._userLogHandler = null, X.push(this);
          }
          get logLevel() {
            return this._logLevel;
          }
          set logLevel(t3) {
            if (!(t3 in Z)) throw new TypeError(`Invalid value "${t3}" assigned to \`logLevel\``);
            this._logLevel = t3;
          }
          setLogLevel(t3) {
            this._logLevel = "string" == typeof t3 ? et[t3] : t3;
          }
          get logHandler() {
            return this._logHandler;
          }
          set logHandler(t3) {
            if ("function" != typeof t3) throw new TypeError("Value assigned to `logHandler` must be a function");
            this._logHandler = t3;
          }
          get userLogHandler() {
            return this._userLogHandler;
          }
          set userLogHandler(t3) {
            this._userLogHandler = t3;
          }
          debug(...t3) {
            this._userLogHandler && this._userLogHandler(this, Z.DEBUG, ...t3), this._logHandler(this, Z.DEBUG, ...t3);
          }
          log(...t3) {
            this._userLogHandler && this._userLogHandler(this, Z.VERBOSE, ...t3), this._logHandler(this, Z.VERBOSE, ...t3);
          }
          info(...t3) {
            this._userLogHandler && this._userLogHandler(this, Z.INFO, ...t3), this._logHandler(this, Z.INFO, ...t3);
          }
          warn(...t3) {
            this._userLogHandler && this._userLogHandler(this, Z.WARN, ...t3), this._logHandler(this, Z.WARN, ...t3);
          }
          error(...t3) {
            this._userLogHandler && this._userLogHandler(this, Z.ERROR, ...t3), this._logHandler(this, Z.ERROR, ...t3);
          }
        }
        let ot, at;
        const ct = /* @__PURE__ */ new WeakMap(), ut = /* @__PURE__ */ new WeakMap(), ht = /* @__PURE__ */ new WeakMap(), lt = /* @__PURE__ */ new WeakMap(), dt = /* @__PURE__ */ new WeakMap();
        let ft = { get(t3, e3, n2) {
          if (t3 instanceof IDBTransaction) {
            if ("done" === e3) return ut.get(t3);
            if ("objectStoreNames" === e3) return t3.objectStoreNames || ht.get(t3);
            if ("store" === e3) return n2.objectStoreNames[1] ? void 0 : n2.objectStore(n2.objectStoreNames[0]);
          }
          return gt(t3[e3]);
        }, set: (t3, e3, n2) => (t3[e3] = n2, true), has: (t3, e3) => t3 instanceof IDBTransaction && ("done" === e3 || "store" === e3) || e3 in t3 };
        function pt(t3) {
          return "function" == typeof t3 ? (e3 = t3) !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (at || (at = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(e3) ? function(...t4) {
            return e3.apply(mt(this), t4), gt(ct.get(this));
          } : function(...t4) {
            return gt(e3.apply(mt(this), t4));
          } : function(t4, ...n3) {
            const r2 = e3.call(mt(this), t4, ...n3);
            return ht.set(r2, t4.sort ? t4.sort() : [t4]), gt(r2);
          } : (t3 instanceof IDBTransaction && function(t4) {
            if (ut.has(t4)) return;
            const e4 = new Promise((e5, n3) => {
              const r2 = () => {
                t4.removeEventListener("complete", i2), t4.removeEventListener("error", s2), t4.removeEventListener("abort", s2);
              }, i2 = () => {
                e5(), r2();
              }, s2 = () => {
                n3(t4.error || new DOMException("AbortError", "AbortError")), r2();
              };
              t4.addEventListener("complete", i2), t4.addEventListener("error", s2), t4.addEventListener("abort", s2);
            });
            ut.set(t4, e4);
          }(t3), n2 = t3, (ot || (ot = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((t4) => n2 instanceof t4) ? new Proxy(t3, ft) : t3);
          var e3, n2;
        }
        function gt(t3) {
          if (t3 instanceof IDBRequest) return function(t4) {
            const e4 = new Promise((e5, n2) => {
              const r2 = () => {
                t4.removeEventListener("success", i2), t4.removeEventListener("error", s2);
              }, i2 = () => {
                e5(gt(t4.result)), r2();
              }, s2 = () => {
                n2(t4.error), r2();
              };
              t4.addEventListener("success", i2), t4.addEventListener("error", s2);
            });
            return e4.then((e5) => {
              e5 instanceof IDBCursor && ct.set(e5, t4);
            }).catch(() => {
            }), dt.set(e4, t4), e4;
          }(t3);
          if (lt.has(t3)) return lt.get(t3);
          const e3 = pt(t3);
          return e3 !== t3 && (lt.set(t3, e3), dt.set(e3, t3)), e3;
        }
        const mt = (t3) => dt.get(t3), yt = ["get", "getKey", "getAll", "getAllKeys", "count"], vt = ["put", "add", "delete", "clear"], wt = /* @__PURE__ */ new Map();
        function bt(t3, e3) {
          if (!(t3 instanceof IDBDatabase) || e3 in t3 || "string" != typeof e3) return;
          if (wt.get(e3)) return wt.get(e3);
          const n2 = e3.replace(/FromIndex$/, ""), r2 = e3 !== n2, i2 = vt.includes(n2);
          if (!(n2 in (r2 ? IDBIndex : IDBObjectStore).prototype) || !i2 && !yt.includes(n2)) return;
          const s2 = async function(t4, ...e4) {
            const s3 = this.transaction(t4, i2 ? "readwrite" : "readonly");
            let o2 = s3.store;
            return r2 && (o2 = o2.index(e4.shift())), (await Promise.all([o2[n2](...e4), i2 && s3.done]))[0];
          };
          return wt.set(e3, s2), s2;
        }
        var _t;
        _t = ft, ft = { ..._t, get: (t3, e3, n2) => bt(t3, e3) || _t.get(t3, e3, n2), has: (t3, e3) => !!bt(t3, e3) || _t.has(t3, e3) };
        class Et {
          constructor(t3) {
            this.container = t3;
          }
          getPlatformInfoString() {
            return this.container.getProviders().map((t3) => {
              if (function(t4) {
                const e3 = t4.getComponent();
                return "VERSION" === (null == e3 ? void 0 : e3.type);
              }(t3)) {
                const e3 = t3.getImmediate();
                return `${e3.library}/${e3.version}`;
              }
              return null;
            }).filter((t3) => t3).join(" ");
          }
        }
        const Tt = "@firebase/app", It = "0.9.12", St = new st("@firebase/app"), At = "[DEFAULT]", Ct = { [Tt]: "fire-core", "@firebase/app-compat": "fire-core-compat", "@firebase/analytics": "fire-analytics", "@firebase/analytics-compat": "fire-analytics-compat", "@firebase/app-check": "fire-app-check", "@firebase/app-check-compat": "fire-app-check-compat", "@firebase/auth": "fire-auth", "@firebase/auth-compat": "fire-auth-compat", "@firebase/database": "fire-rtdb", "@firebase/database-compat": "fire-rtdb-compat", "@firebase/functions": "fire-fn", "@firebase/functions-compat": "fire-fn-compat", "@firebase/installations": "fire-iid", "@firebase/installations-compat": "fire-iid-compat", "@firebase/messaging": "fire-fcm", "@firebase/messaging-compat": "fire-fcm-compat", "@firebase/performance": "fire-perf", "@firebase/performance-compat": "fire-perf-compat", "@firebase/remote-config": "fire-rc", "@firebase/remote-config-compat": "fire-rc-compat", "@firebase/storage": "fire-gcs", "@firebase/storage-compat": "fire-gcs-compat", "@firebase/firestore": "fire-fst", "@firebase/firestore-compat": "fire-fst-compat", "fire-js": "fire-js", firebase: "fire-js-all" }, kt = /* @__PURE__ */ new Map(), Nt = /* @__PURE__ */ new Map();
        function Ot(t3, e3) {
          try {
            t3.container.addComponent(e3);
          } catch (n2) {
            St.debug(`Component ${e3.name} failed to register with FirebaseApp ${t3.name}`, n2);
          }
        }
        function Dt(t3) {
          const e3 = t3.name;
          if (Nt.has(e3)) return St.debug(`There were multiple attempts to register component ${e3}.`), false;
          Nt.set(e3, t3);
          for (const e4 of kt.values()) Ot(e4, t3);
          return true;
        }
        function Rt(t3, e3) {
          const n2 = t3.container.getProvider("heartbeat").getImmediate({ optional: true });
          return n2 && n2.triggerHeartbeat(), t3.container.getProvider(e3);
        }
        const Lt = new F("app", "Firebase", { "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first", "bad-app-name": "Illegal App name: '{$appName}", "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config", "app-deleted": "Firebase App named '{$appName}' already deleted", "no-options": "Need to provide options, when not being deployed to hosting via source.", "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.", "invalid-log-argument": "First argument to `onLog` must be null or a function.", "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.", "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.", "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.", "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}." });
        class Pt {
          constructor(t3, e3, n2) {
            this._isDeleted = false, this._options = Object.assign({}, t3), this._config = Object.assign({}, e3), this._name = e3.name, this._automaticDataCollectionEnabled = e3.automaticDataCollectionEnabled, this._container = n2, this.container.addComponent(new W("app", () => this, "PUBLIC"));
          }
          get automaticDataCollectionEnabled() {
            return this.checkDestroyed(), this._automaticDataCollectionEnabled;
          }
          set automaticDataCollectionEnabled(t3) {
            this.checkDestroyed(), this._automaticDataCollectionEnabled = t3;
          }
          get name() {
            return this.checkDestroyed(), this._name;
          }
          get options() {
            return this.checkDestroyed(), this._options;
          }
          get config() {
            return this.checkDestroyed(), this._config;
          }
          get container() {
            return this._container;
          }
          get isDeleted() {
            return this._isDeleted;
          }
          set isDeleted(t3) {
            this._isDeleted = t3;
          }
          checkDestroyed() {
            if (this.isDeleted) throw Lt.create("app-deleted", { appName: this._name });
          }
        }
        function xt(t3, e3 = {}) {
          let n2 = t3;
          "object" != typeof e3 && (e3 = { name: e3 });
          const r2 = Object.assign({ name: At, automaticDataCollectionEnabled: false }, e3), i2 = r2.name;
          if ("string" != typeof i2 || !i2) throw Lt.create("bad-app-name", { appName: String(i2) });
          if (n2 || (n2 = P()), !n2) throw Lt.create("no-options");
          const s2 = kt.get(i2);
          if (s2) {
            if (j(n2, s2.options) && j(r2, s2.config)) return s2;
            throw Lt.create("duplicate-app", { appName: i2 });
          }
          const o2 = new J(i2);
          for (const t4 of Nt.values()) o2.addComponent(t4);
          const a2 = new Pt(n2, r2, o2);
          return kt.set(i2, a2), a2;
        }
        function Mt(t3, e3, n2) {
          var r2;
          let i2 = null !== (r2 = Ct[t3]) && void 0 !== r2 ? r2 : t3;
          n2 && (i2 += `-${n2}`);
          const s2 = i2.match(/\s|\//), o2 = e3.match(/\s|\//);
          if (s2 || o2) {
            const t4 = [`Unable to register library "${i2}" with version "${e3}":`];
            return s2 && t4.push(`library name "${i2}" contains illegal characters (whitespace or "/")`), s2 && o2 && t4.push("and"), o2 && t4.push(`version name "${e3}" contains illegal characters (whitespace or "/")`), void St.warn(t4.join(" "));
          }
          Dt(new W(`${i2}-version`, () => ({ library: i2, version: e3 }), "VERSION"));
        }
        const Ut = "firebase-heartbeat-store";
        let Ft = null;
        function Vt() {
          return Ft || (Ft = function(t3, e3, { blocked: n2, upgrade: r2, blocking: i2, terminated: s2 } = {}) {
            const o2 = indexedDB.open(t3, e3), a2 = gt(o2);
            return r2 && o2.addEventListener("upgradeneeded", (t4) => {
              r2(gt(o2.result), t4.oldVersion, t4.newVersion, gt(o2.transaction), t4);
            }), n2 && o2.addEventListener("blocked", (t4) => n2(t4.oldVersion, t4.newVersion, t4)), a2.then((t4) => {
              s2 && t4.addEventListener("close", () => s2()), i2 && t4.addEventListener("versionchange", (t5) => i2(t5.oldVersion, t5.newVersion, t5));
            }).catch(() => {
            }), a2;
          }("firebase-heartbeat-database", 1, { upgrade: (t3, e3) => {
            0 === e3 && t3.createObjectStore(Ut);
          } }).catch((t3) => {
            throw Lt.create("idb-open", { originalErrorMessage: t3.message });
          })), Ft;
        }
        async function jt(t3, e3) {
          try {
            const n2 = (await Vt()).transaction(Ut, "readwrite"), r2 = n2.objectStore(Ut);
            await r2.put(e3, qt(t3)), await n2.done;
          } catch (t4) {
            if (t4 instanceof U) St.warn(t4.message);
            else {
              const e4 = Lt.create("idb-set", { originalErrorMessage: null == t4 ? void 0 : t4.message });
              St.warn(e4.message);
            }
          }
        }
        function qt(t3) {
          return `${t3.name}!${t3.options.appId}`;
        }
        class Bt {
          constructor(t3) {
            this.container = t3, this._heartbeatsCache = null;
            const e3 = this.container.getProvider("app").getImmediate();
            this._storage = new zt(e3), this._heartbeatsCachePromise = this._storage.read().then((t4) => (this._heartbeatsCache = t4, t4));
          }
          async triggerHeartbeat() {
            const t3 = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(), e3 = $t();
            if (null === this._heartbeatsCache && (this._heartbeatsCache = await this._heartbeatsCachePromise), this._heartbeatsCache.lastSentHeartbeatDate !== e3 && !this._heartbeatsCache.heartbeats.some((t4) => t4.date === e3)) return this._heartbeatsCache.heartbeats.push({ date: e3, agent: t3 }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((t4) => {
              const e4 = new Date(t4.date).valueOf();
              return Date.now() - e4 <= 2592e6;
            }), this._storage.overwrite(this._heartbeatsCache);
          }
          async getHeartbeatsHeader() {
            if (null === this._heartbeatsCache && await this._heartbeatsCachePromise, null === this._heartbeatsCache || 0 === this._heartbeatsCache.heartbeats.length) return "";
            const t3 = $t(), { heartbeatsToSend: e3, unsentEntries: n2 } = function(t4, e4 = 1024) {
              const n3 = [];
              let r3 = t4.slice();
              for (const i2 of t4) {
                const t5 = n3.find((t6) => t6.agent === i2.agent);
                if (t5) {
                  if (t5.dates.push(i2.date), Kt(n3) > e4) {
                    t5.dates.pop();
                    break;
                  }
                } else if (n3.push({ agent: i2.agent, dates: [i2.date] }), Kt(n3) > e4) {
                  n3.pop();
                  break;
                }
                r3 = r3.slice(1);
              }
              return { heartbeatsToSend: n3, unsentEntries: r3 };
            }(this._heartbeatsCache.heartbeats), r2 = D(JSON.stringify({ version: 2, heartbeats: e3 }));
            return this._heartbeatsCache.lastSentHeartbeatDate = t3, n2.length > 0 ? (this._heartbeatsCache.heartbeats = n2, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), r2;
          }
        }
        function $t() {
          return (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
        }
        class zt {
          constructor(t3) {
            this.app = t3, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
          }
          async runIndexedDBEnvironmentCheck() {
            return !!function() {
              try {
                return "object" == typeof indexedDB;
              } catch (t3) {
                return false;
              }
            }() && new Promise((t3, e3) => {
              try {
                let n2 = true;
                const r2 = "validate-browser-context-for-indexeddb-analytics-module", i2 = self.indexedDB.open(r2);
                i2.onsuccess = () => {
                  i2.result.close(), n2 || self.indexedDB.deleteDatabase(r2), t3(true);
                }, i2.onupgradeneeded = () => {
                  n2 = false;
                }, i2.onerror = () => {
                  var t4;
                  e3((null === (t4 = i2.error) || void 0 === t4 ? void 0 : t4.message) || "");
                };
              } catch (t4) {
                e3(t4);
              }
            }).then(() => true).catch(() => false);
          }
          async read() {
            if (await this._canUseIndexedDBPromise) {
              const t3 = await async function(t4) {
                try {
                  const e3 = await Vt();
                  return await e3.transaction(Ut).objectStore(Ut).get(qt(t4));
                } catch (t5) {
                  if (t5 instanceof U) St.warn(t5.message);
                  else {
                    const e3 = Lt.create("idb-get", { originalErrorMessage: null == t5 ? void 0 : t5.message });
                    St.warn(e3.message);
                  }
                }
              }(this.app);
              return t3 || { heartbeats: [] };
            }
            return { heartbeats: [] };
          }
          async overwrite(t3) {
            var e3;
            if (await this._canUseIndexedDBPromise) {
              const n2 = await this.read();
              return jt(this.app, { lastSentHeartbeatDate: null !== (e3 = t3.lastSentHeartbeatDate) && void 0 !== e3 ? e3 : n2.lastSentHeartbeatDate, heartbeats: t3.heartbeats });
            }
          }
          async add(t3) {
            var e3;
            if (await this._canUseIndexedDBPromise) {
              const n2 = await this.read();
              return jt(this.app, { lastSentHeartbeatDate: null !== (e3 = t3.lastSentHeartbeatDate) && void 0 !== e3 ? e3 : n2.lastSentHeartbeatDate, heartbeats: [...n2.heartbeats, ...t3.heartbeats] });
            }
          }
        }
        function Kt(t3) {
          return D(JSON.stringify({ version: 2, heartbeats: t3 })).length;
        }
        Dt(new W("platform-logger", (t3) => new Et(t3), "PRIVATE")), Dt(new W("heartbeat", (t3) => new Bt(t3), "PRIVATE")), Mt(Tt, It, ""), Mt(Tt, It, "esm2017"), Mt("fire-js", ""), Mt("firebase", "9.22.2", "app");
        const Ht = function() {
          return { "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK." };
        }, Gt = new F("auth", "Firebase", { "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK." }), Wt = new st("@firebase/auth");
        function Qt(t3, ...e3) {
          Wt.logLevel <= Z.ERROR && Wt.error(`Auth (9.22.2): ${t3}`, ...e3);
        }
        function Yt(t3, ...e3) {
          throw Xt(t3, ...e3);
        }
        function Jt(t3, ...e3) {
          return Xt(t3, ...e3);
        }
        function Xt(t3, ...e3) {
          if ("string" != typeof t3) {
            const n2 = e3[0], r2 = [...e3.slice(1)];
            return r2[0] && (r2[0].appName = t3.name), t3._errorFactory.create(n2, ...r2);
          }
          return Gt.create(t3, ...e3);
        }
        function Zt(t3, e3, ...n2) {
          if (!t3) throw Xt(e3, ...n2);
        }
        function te(t3) {
          const e3 = "INTERNAL ASSERTION FAILED: " + t3;
          throw Qt(e3), new Error(e3);
        }
        function ee(t3, e3) {
          t3 || te(e3);
        }
        function ne() {
          var t3;
          return "undefined" != typeof self && (null === (t3 = self.location) || void 0 === t3 ? void 0 : t3.protocol) || null;
        }
        function re() {
          return !("undefined" != typeof navigator && navigator && "onLine" in navigator && "boolean" == typeof navigator.onLine && ("http:" === ne() || "https:" === ne() || function() {
            const t3 = "object" == typeof chrome ? chrome.runtime : "object" == typeof browser ? browser.runtime : void 0;
            return "object" == typeof t3 && void 0 !== t3.id;
          }() || "connection" in navigator)) || navigator.onLine;
        }
        class ie {
          constructor(t3, e3) {
            this.shortDelay = t3, this.longDelay = e3, ee(e3 > t3, "Short delay should be less than long delay!"), this.isMobile = "undefined" != typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(M()) || "object" == typeof navigator && "ReactNative" === navigator.product;
          }
          get() {
            return re() ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay);
          }
        }
        class se {
          static initialize(t3, e3, n2) {
            this.fetchImpl = t3, e3 && (this.headersImpl = e3), n2 && (this.responseImpl = n2);
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" != typeof self && "fetch" in self ? self.fetch : void te("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" != typeof self && "Headers" in self ? self.Headers : void te("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" != typeof self && "Response" in self ? self.Response : void te("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
          }
        }
        const oe = { CREDENTIAL_MISMATCH: "custom-token-mismatch", MISSING_CUSTOM_TOKEN: "internal-error", INVALID_IDENTIFIER: "invalid-email", MISSING_CONTINUE_URI: "internal-error", INVALID_PASSWORD: "wrong-password", MISSING_PASSWORD: "missing-password", EMAIL_EXISTS: "email-already-in-use", PASSWORD_LOGIN_DISABLED: "operation-not-allowed", INVALID_IDP_RESPONSE: "invalid-credential", INVALID_PENDING_TOKEN: "invalid-credential", FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use", MISSING_REQ_TYPE: "internal-error", EMAIL_NOT_FOUND: "user-not-found", RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests", EXPIRED_OOB_CODE: "expired-action-code", INVALID_OOB_CODE: "invalid-action-code", MISSING_OOB_CODE: "internal-error", CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login", INVALID_ID_TOKEN: "invalid-user-token", TOKEN_EXPIRED: "user-token-expired", USER_NOT_FOUND: "user-token-expired", TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests", INVALID_CODE: "invalid-verification-code", INVALID_SESSION_INFO: "invalid-verification-id", INVALID_TEMPORARY_PROOF: "invalid-credential", MISSING_SESSION_INFO: "missing-verification-id", SESSION_EXPIRED: "code-expired", MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name", UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri", INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id", ADMIN_ONLY_OPERATION: "admin-restricted-operation", INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session", MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found", MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info", MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session", SECOND_FACTOR_EXISTS: "second-factor-already-in-use", SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded", BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error", RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled", MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token", INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token", INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action", MISSING_CLIENT_TYPE: "missing-client-type", MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version", INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version", INVALID_REQ_TYPE: "invalid-req-type" }, ae = new ie(3e4, 6e4);
        function ce(t3, e3) {
          return t3.tenantId && !e3.tenantId ? Object.assign(Object.assign({}, e3), { tenantId: t3.tenantId }) : e3;
        }
        async function ue(t3, e3, n2, r2, i2 = {}) {
          return he(t3, i2, async () => {
            let i3 = {}, s2 = {};
            r2 && ("GET" === e3 ? s2 = r2 : i3 = { body: JSON.stringify(r2) });
            const o2 = B(Object.assign({ key: t3.config.apiKey }, s2)).slice(1), a2 = await t3._getAdditionalHeaders();
            return a2["Content-Type"] = "application/json", t3.languageCode && (a2["X-Firebase-Locale"] = t3.languageCode), se.fetch()(de(t3, t3.config.apiHost, n2, o2), Object.assign({ method: e3, headers: a2, referrerPolicy: "no-referrer" }, i3));
          });
        }
        async function he(t3, e3, n2) {
          t3._canInitEmulator = false;
          const r2 = Object.assign(Object.assign({}, oe), e3);
          try {
            const e4 = new fe(t3), i2 = await Promise.race([n2(), e4.promise]);
            e4.clearNetworkTimeout();
            const s2 = await i2.json();
            if ("needConfirmation" in s2) throw pe(t3, "account-exists-with-different-credential", s2);
            if (i2.ok && !("errorMessage" in s2)) return s2;
            {
              const e5 = i2.ok ? s2.errorMessage : s2.error.message, [n3, o2] = e5.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === n3) throw pe(t3, "credential-already-in-use", s2);
              if ("EMAIL_EXISTS" === n3) throw pe(t3, "email-already-in-use", s2);
              if ("USER_DISABLED" === n3) throw pe(t3, "user-disabled", s2);
              const a2 = r2[n3] || n3.toLowerCase().replace(/[_\s]+/g, "-");
              if (o2) throw function(t4, e6, n4) {
                const r3 = Object.assign(Object.assign({}, Ht()), { [e6]: n4 });
                return new F("auth", "Firebase", r3).create(e6, { appName: t4.name });
              }(t3, a2, o2);
              Yt(t3, a2);
            }
          } catch (e4) {
            if (e4 instanceof U) throw e4;
            Yt(t3, "network-request-failed", { message: String(e4) });
          }
        }
        async function le(t3, e3, n2, r2, i2 = {}) {
          const s2 = await ue(t3, e3, n2, r2, i2);
          return "mfaPendingCredential" in s2 && Yt(t3, "multi-factor-auth-required", { _serverResponse: s2 }), s2;
        }
        function de(t3, e3, n2, r2) {
          const i2 = `${e3}${n2}?${r2}`;
          return t3.config.emulator ? function(t4, e4) {
            ee(t4.emulator, "Emulator should always be set here");
            const { url: n3 } = t4.emulator;
            return e4 ? `${n3}${e4.startsWith("/") ? e4.slice(1) : e4}` : n3;
          }(t3.config, i2) : `${t3.config.apiScheme}://${i2}`;
        }
        class fe {
          constructor(t3) {
            this.auth = t3, this.timer = null, this.promise = new Promise((t4, e3) => {
              this.timer = setTimeout(() => e3(Jt(this.auth, "network-request-failed")), ae.get());
            });
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer);
          }
        }
        function pe(t3, e3, n2) {
          const r2 = { appName: t3.name };
          n2.email && (r2.email = n2.email), n2.phoneNumber && (r2.phoneNumber = n2.phoneNumber);
          const i2 = Jt(t3, e3, r2);
          return i2.customData._tokenResponse = n2, i2;
        }
        function ge(t3) {
          if (t3) try {
            const e3 = new Date(Number(t3));
            if (!isNaN(e3.getTime())) return e3.toUTCString();
          } catch (t4) {
          }
        }
        function me(t3) {
          return 1e3 * Number(t3);
        }
        function ye(t3) {
          const [e3, n2, r2] = t3.split(".");
          if (void 0 === e3 || void 0 === n2 || void 0 === r2) return Qt("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const t4 = R(n2);
            return t4 ? JSON.parse(t4) : (Qt("Failed to decode base64 JWT payload"), null);
          } catch (t4) {
            return Qt("Caught error parsing JWT payload as JSON", null == t4 ? void 0 : t4.toString()), null;
          }
        }
        async function ve(t3, e3, n2 = false) {
          if (n2) return e3;
          try {
            return await e3;
          } catch (e4) {
            throw e4 instanceof U && function({ code: t4 }) {
              return "auth/user-disabled" === t4 || "auth/user-token-expired" === t4;
            }(e4) && t3.auth.currentUser === t3 && await t3.auth.signOut(), e4;
          }
        }
        class we {
          constructor(t3) {
            this.user = t3, this.isRunning = false, this.timerId = null, this.errorBackoff = 3e4;
          }
          _start() {
            this.isRunning || (this.isRunning = true, this.schedule());
          }
          _stop() {
            this.isRunning && (this.isRunning = false, null !== this.timerId && clearTimeout(this.timerId));
          }
          getInterval(t3) {
            var e3;
            if (t3) {
              const t4 = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), t4;
            }
            {
              this.errorBackoff = 3e4;
              const t4 = (null !== (e3 = this.user.stsTokenManager.expirationTime) && void 0 !== e3 ? e3 : 0) - Date.now() - 3e5;
              return Math.max(0, t4);
            }
          }
          schedule(t3 = false) {
            if (!this.isRunning) return;
            const e3 = this.getInterval(t3);
            this.timerId = setTimeout(async () => {
              await this.iteration();
            }, e3);
          }
          async iteration() {
            try {
              await this.user.getIdToken(true);
            } catch (t3) {
              return void ("auth/network-request-failed" === (null == t3 ? void 0 : t3.code) && this.schedule(true));
            }
            this.schedule();
          }
        }
        class be {
          constructor(t3, e3) {
            this.createdAt = t3, this.lastLoginAt = e3, this._initializeTime();
          }
          _initializeTime() {
            this.lastSignInTime = ge(this.lastLoginAt), this.creationTime = ge(this.createdAt);
          }
          _copy(t3) {
            this.createdAt = t3.createdAt, this.lastLoginAt = t3.lastLoginAt, this._initializeTime();
          }
          toJSON() {
            return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
          }
        }
        async function _e(t3) {
          var e3;
          const n2 = t3.auth, r2 = await t3.getIdToken(), i2 = await ve(t3, async function(t4, e4) {
            return ue(t4, "POST", "/v1/accounts:lookup", e4);
          }(n2, { idToken: r2 }));
          Zt(null == i2 ? void 0 : i2.users.length, n2, "internal-error");
          const s2 = i2.users[0];
          t3._notifyReloadListener(s2);
          const a2 = (null === (e3 = s2.providerUserInfo) || void 0 === e3 ? void 0 : e3.length) ? s2.providerUserInfo.map((t4) => {
            var { providerId: e4 } = t4, n3 = o(t4, ["providerId"]);
            return { providerId: e4, uid: n3.rawId || "", displayName: n3.displayName || null, email: n3.email || null, phoneNumber: n3.phoneNumber || null, photoURL: n3.photoUrl || null };
          }) : [], c2 = (u2 = t3.providerData, h2 = a2, [...u2.filter((t4) => !h2.some((e4) => e4.providerId === t4.providerId)), ...h2]);
          var u2, h2;
          const l2 = t3.isAnonymous, d2 = !(t3.email && s2.passwordHash || (null == c2 ? void 0 : c2.length)), f2 = !!l2 && d2, p2 = { uid: s2.localId, displayName: s2.displayName || null, photoURL: s2.photoUrl || null, email: s2.email || null, emailVerified: s2.emailVerified || false, phoneNumber: s2.phoneNumber || null, tenantId: s2.tenantId || null, providerData: c2, metadata: new be(s2.createdAt, s2.lastLoginAt), isAnonymous: f2 };
          Object.assign(t3, p2);
        }
        class Ee {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null;
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
          }
          updateFromServerResponse(t3) {
            Zt(t3.idToken, "internal-error"), Zt(void 0 !== t3.idToken, "internal-error"), Zt(void 0 !== t3.refreshToken, "internal-error");
            const e3 = "expiresIn" in t3 && void 0 !== t3.expiresIn ? Number(t3.expiresIn) : function(t4) {
              const e4 = ye(t4);
              return Zt(e4, "internal-error"), Zt(void 0 !== e4.exp, "internal-error"), Zt(void 0 !== e4.iat, "internal-error"), Number(e4.exp) - Number(e4.iat);
            }(t3.idToken);
            this.updateTokensAndExpiration(t3.idToken, t3.refreshToken, e3);
          }
          async getToken(t3, e3 = false) {
            return Zt(!this.accessToken || this.refreshToken, t3, "user-token-expired"), e3 || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(t3, this.refreshToken), this.accessToken) : null : this.accessToken;
          }
          clearRefreshToken() {
            this.refreshToken = null;
          }
          async refresh(t3, e3) {
            const { accessToken: n2, refreshToken: r2, expiresIn: i2 } = await async function(t4, e4) {
              const n3 = await he(t4, {}, async () => {
                const n4 = B({ grant_type: "refresh_token", refresh_token: e4 }).slice(1), { tokenApiHost: r3, apiKey: i3 } = t4.config, s2 = de(t4, r3, "/v1/token", `key=${i3}`), o2 = await t4._getAdditionalHeaders();
                return o2["Content-Type"] = "application/x-www-form-urlencoded", se.fetch()(s2, { method: "POST", headers: o2, body: n4 });
              });
              return { accessToken: n3.access_token, expiresIn: n3.expires_in, refreshToken: n3.refresh_token };
            }(t3, e3);
            this.updateTokensAndExpiration(n2, r2, Number(i2));
          }
          updateTokensAndExpiration(t3, e3, n2) {
            this.refreshToken = e3 || null, this.accessToken = t3 || null, this.expirationTime = Date.now() + 1e3 * n2;
          }
          static fromJSON(t3, e3) {
            const { refreshToken: n2, accessToken: r2, expirationTime: i2 } = e3, s2 = new Ee();
            return n2 && (Zt("string" == typeof n2, "internal-error", { appName: t3 }), s2.refreshToken = n2), r2 && (Zt("string" == typeof r2, "internal-error", { appName: t3 }), s2.accessToken = r2), i2 && (Zt("number" == typeof i2, "internal-error", { appName: t3 }), s2.expirationTime = i2), s2;
          }
          toJSON() {
            return { refreshToken: this.refreshToken, accessToken: this.accessToken, expirationTime: this.expirationTime };
          }
          _assign(t3) {
            this.accessToken = t3.accessToken, this.refreshToken = t3.refreshToken, this.expirationTime = t3.expirationTime;
          }
          _clone() {
            return Object.assign(new Ee(), this.toJSON());
          }
          _performRefresh() {
            return te("not implemented");
          }
        }
        function Te(t3, e3) {
          Zt("string" == typeof t3 || void 0 === t3, "internal-error", { appName: e3 });
        }
        class Ie {
          constructor(t3) {
            var { uid: e3, auth: n2, stsTokenManager: r2 } = t3, i2 = o(t3, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new we(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = e3, this.auth = n2, this.stsTokenManager = r2, this.accessToken = r2.accessToken, this.displayName = i2.displayName || null, this.email = i2.email || null, this.emailVerified = i2.emailVerified || false, this.phoneNumber = i2.phoneNumber || null, this.photoURL = i2.photoURL || null, this.isAnonymous = i2.isAnonymous || false, this.tenantId = i2.tenantId || null, this.providerData = i2.providerData ? [...i2.providerData] : [], this.metadata = new be(i2.createdAt || void 0, i2.lastLoginAt || void 0);
          }
          async getIdToken(t3) {
            const e3 = await ve(this, this.stsTokenManager.getToken(this.auth, t3));
            return Zt(e3, this.auth, "internal-error"), this.accessToken !== e3 && (this.accessToken = e3, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), e3;
          }
          getIdTokenResult(t3) {
            return async function(t4, e3 = false) {
              const n2 = G(t4), r2 = await n2.getIdToken(e3), i2 = ye(r2);
              Zt(i2 && i2.exp && i2.auth_time && i2.iat, n2.auth, "internal-error");
              const s2 = "object" == typeof i2.firebase ? i2.firebase : void 0, o2 = null == s2 ? void 0 : s2.sign_in_provider;
              return { claims: i2, token: r2, authTime: ge(me(i2.auth_time)), issuedAtTime: ge(me(i2.iat)), expirationTime: ge(me(i2.exp)), signInProvider: o2 || null, signInSecondFactor: (null == s2 ? void 0 : s2.sign_in_second_factor) || null };
            }(this, t3);
          }
          reload() {
            return async function(t3) {
              const e3 = G(t3);
              await _e(e3), await e3.auth._persistUserIfCurrent(e3), e3.auth._notifyListenersIfCurrent(e3);
            }(this);
          }
          _assign(t3) {
            this !== t3 && (Zt(this.uid === t3.uid, this.auth, "internal-error"), this.displayName = t3.displayName, this.photoURL = t3.photoURL, this.email = t3.email, this.emailVerified = t3.emailVerified, this.phoneNumber = t3.phoneNumber, this.isAnonymous = t3.isAnonymous, this.tenantId = t3.tenantId, this.providerData = t3.providerData.map((t4) => Object.assign({}, t4)), this.metadata._copy(t3.metadata), this.stsTokenManager._assign(t3.stsTokenManager));
          }
          _clone(t3) {
            const e3 = new Ie(Object.assign(Object.assign({}, this), { auth: t3, stsTokenManager: this.stsTokenManager._clone() }));
            return e3.metadata._copy(this.metadata), e3;
          }
          _onReload(t3) {
            Zt(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = t3, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null);
          }
          _notifyReloadListener(t3) {
            this.reloadListener ? this.reloadListener(t3) : this.reloadUserInfo = t3;
          }
          _startProactiveRefresh() {
            this.proactiveRefresh._start();
          }
          _stopProactiveRefresh() {
            this.proactiveRefresh._stop();
          }
          async _updateTokensIfNecessary(t3, e3 = false) {
            let n2 = false;
            t3.idToken && t3.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(t3), n2 = true), e3 && await _e(this), await this.auth._persistUserIfCurrent(this), n2 && this.auth._notifyListenersIfCurrent(this);
          }
          async delete() {
            const t3 = await this.getIdToken();
            return await ve(this, async function(t4, e3) {
              return ue(t4, "POST", "/v1/accounts:delete", e3);
            }(this.auth, { idToken: t3 })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut();
          }
          toJSON() {
            return Object.assign(Object.assign({ uid: this.uid, email: this.email || void 0, emailVerified: this.emailVerified, displayName: this.displayName || void 0, isAnonymous: this.isAnonymous, photoURL: this.photoURL || void 0, phoneNumber: this.phoneNumber || void 0, tenantId: this.tenantId || void 0, providerData: this.providerData.map((t3) => Object.assign({}, t3)), stsTokenManager: this.stsTokenManager.toJSON(), _redirectEventId: this._redirectEventId }, this.metadata.toJSON()), { apiKey: this.auth.config.apiKey, appName: this.auth.name });
          }
          get refreshToken() {
            return this.stsTokenManager.refreshToken || "";
          }
          static _fromJSON(t3, e3) {
            var n2, r2, i2, s2, o2, a2, c2, u2;
            const h2 = null !== (n2 = e3.displayName) && void 0 !== n2 ? n2 : void 0, l2 = null !== (r2 = e3.email) && void 0 !== r2 ? r2 : void 0, d2 = null !== (i2 = e3.phoneNumber) && void 0 !== i2 ? i2 : void 0, f2 = null !== (s2 = e3.photoURL) && void 0 !== s2 ? s2 : void 0, p2 = null !== (o2 = e3.tenantId) && void 0 !== o2 ? o2 : void 0, g2 = null !== (a2 = e3._redirectEventId) && void 0 !== a2 ? a2 : void 0, m2 = null !== (c2 = e3.createdAt) && void 0 !== c2 ? c2 : void 0, y2 = null !== (u2 = e3.lastLoginAt) && void 0 !== u2 ? u2 : void 0, { uid: v2, emailVerified: w2, isAnonymous: b2, providerData: _2, stsTokenManager: E2 } = e3;
            Zt(v2 && E2, t3, "internal-error");
            const T2 = Ee.fromJSON(this.name, E2);
            Zt("string" == typeof v2, t3, "internal-error"), Te(h2, t3.name), Te(l2, t3.name), Zt("boolean" == typeof w2, t3, "internal-error"), Zt("boolean" == typeof b2, t3, "internal-error"), Te(d2, t3.name), Te(f2, t3.name), Te(p2, t3.name), Te(g2, t3.name), Te(m2, t3.name), Te(y2, t3.name);
            const I2 = new Ie({ uid: v2, auth: t3, email: l2, emailVerified: w2, displayName: h2, isAnonymous: b2, photoURL: f2, phoneNumber: d2, tenantId: p2, stsTokenManager: T2, createdAt: m2, lastLoginAt: y2 });
            return _2 && Array.isArray(_2) && (I2.providerData = _2.map((t4) => Object.assign({}, t4))), g2 && (I2._redirectEventId = g2), I2;
          }
          static async _fromIdTokenResponse(t3, e3, n2 = false) {
            const r2 = new Ee();
            r2.updateFromServerResponse(e3);
            const i2 = new Ie({ uid: e3.localId, auth: t3, stsTokenManager: r2, isAnonymous: n2 });
            return await _e(i2), i2;
          }
        }
        const Se = /* @__PURE__ */ new Map();
        function Ae(t3) {
          ee(t3 instanceof Function, "Expected a class definition");
          let e3 = Se.get(t3);
          return e3 ? (ee(e3 instanceof t3, "Instance stored in cache mismatched with class"), e3) : (e3 = new t3(), Se.set(t3, e3), e3);
        }
        class Ce {
          constructor() {
            this.type = "NONE", this.storage = {};
          }
          async _isAvailable() {
            return true;
          }
          async _set(t3, e3) {
            this.storage[t3] = e3;
          }
          async _get(t3) {
            const e3 = this.storage[t3];
            return void 0 === e3 ? null : e3;
          }
          async _remove(t3) {
            delete this.storage[t3];
          }
          _addListener(t3, e3) {
          }
          _removeListener(t3, e3) {
          }
        }
        Ce.type = "NONE";
        const ke = Ce;
        function Ne(t3, e3, n2) {
          return `firebase:${t3}:${e3}:${n2}`;
        }
        class Oe {
          constructor(t3, e3, n2) {
            this.persistence = t3, this.auth = e3, this.userKey = n2;
            const { config: r2, name: i2 } = this.auth;
            this.fullUserKey = Ne(this.userKey, r2.apiKey, i2), this.fullPersistenceKey = Ne("persistence", r2.apiKey, i2), this.boundEventHandler = e3._onStorageEvent.bind(e3), this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
          }
          setCurrentUser(t3) {
            return this.persistence._set(this.fullUserKey, t3.toJSON());
          }
          async getCurrentUser() {
            const t3 = await this.persistence._get(this.fullUserKey);
            return t3 ? Ie._fromJSON(this.auth, t3) : null;
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey);
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type);
          }
          async setPersistence(t3) {
            if (this.persistence === t3) return;
            const e3 = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = t3, e3 ? this.setCurrentUser(e3) : void 0;
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
          }
          static async create(t3, e3, n2 = "authUser") {
            if (!e3.length) return new Oe(Ae(ke), t3, n2);
            const r2 = (await Promise.all(e3.map(async (t4) => {
              if (await t4._isAvailable()) return t4;
            }))).filter((t4) => t4);
            let i2 = r2[0] || Ae(ke);
            const s2 = Ne(n2, t3.config.apiKey, t3.name);
            let o2 = null;
            for (const n3 of e3) try {
              const e4 = await n3._get(s2);
              if (e4) {
                const r3 = Ie._fromJSON(t3, e4);
                n3 !== i2 && (o2 = r3), i2 = n3;
                break;
              }
            } catch (t4) {
            }
            const a2 = r2.filter((t4) => t4._shouldAllowMigration);
            return i2._shouldAllowMigration && a2.length ? (i2 = a2[0], o2 && await i2._set(s2, o2.toJSON()), await Promise.all(e3.map(async (t4) => {
              if (t4 !== i2) try {
                await t4._remove(s2);
              } catch (t5) {
              }
            })), new Oe(i2, t3, n2)) : new Oe(i2, t3, n2);
          }
        }
        function De(t3) {
          const e3 = t3.toLowerCase();
          if (e3.includes("opera/") || e3.includes("opr/") || e3.includes("opios/")) return "Opera";
          if (Le(e3)) return "IEMobile";
          if (e3.includes("msie") || e3.includes("trident/")) return "IE";
          if (e3.includes("edge/")) return "Edge";
          if (function(t4 = M()) {
            return /firefox\//i.test(t4);
          }(e3)) return "Firefox";
          if (e3.includes("silk/")) return "Silk";
          if (xe(e3)) return "Blackberry";
          if (Me(e3)) return "Webos";
          if (Re(e3)) return "Safari";
          if ((e3.includes("chrome/") || function(t4 = M()) {
            return /crios\//i.test(t4);
          }(e3)) && !e3.includes("edge/")) return "Chrome";
          if (Pe(e3)) return "Android";
          {
            const e4 = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/, n2 = t3.match(e4);
            if (2 === (null == n2 ? void 0 : n2.length)) return n2[1];
          }
          return "Other";
        }
        function Re(t3 = M()) {
          const e3 = t3.toLowerCase();
          return e3.includes("safari/") && !e3.includes("chrome/") && !e3.includes("crios/") && !e3.includes("android");
        }
        function Le(t3 = M()) {
          return /iemobile/i.test(t3);
        }
        function Pe(t3 = M()) {
          return /android/i.test(t3);
        }
        function xe(t3 = M()) {
          return /blackberry/i.test(t3);
        }
        function Me(t3 = M()) {
          return /webos/i.test(t3);
        }
        function Ue(t3 = M()) {
          return /iphone|ipad|ipod/i.test(t3) || /macintosh/i.test(t3) && /mobile/i.test(t3);
        }
        function Fe(t3, e3 = []) {
          let n2;
          switch (t3) {
            case "Browser":
              n2 = De(M());
              break;
            case "Worker":
              n2 = `${De(M())}-${t3}`;
              break;
            default:
              n2 = t3;
          }
          return `${n2}/JsCore/9.22.2/${e3.length ? e3.join(",") : "FirebaseCore-web"}`;
        }
        async function Ve(t3, e3) {
          return ue(t3, "GET", "/v2/recaptchaConfig", ce(t3, e3));
        }
        function je(t3) {
          return void 0 !== t3 && void 0 !== t3.enterprise;
        }
        class qe {
          constructor(t3) {
            if (this.siteKey = "", this.emailPasswordEnabled = false, void 0 === t3.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = t3.recaptchaKey.split("/")[3], this.emailPasswordEnabled = t3.recaptchaEnforcementState.some((t4) => "EMAIL_PASSWORD_PROVIDER" === t4.provider && "OFF" !== t4.enforcementState);
          }
        }
        class Be {
          constructor(t3) {
            this.type = "recaptcha-enterprise", this.auth = He(t3);
          }
          async verify(t3 = "verify", e3 = false) {
            function n2(e4, n3, r2) {
              const i2 = window.grecaptcha;
              je(i2) ? i2.enterprise.ready(() => {
                i2.enterprise.execute(e4, { action: t3 }).then((t4) => {
                  n3(t4);
                }).catch(() => {
                  n3("NO_RECAPTCHA");
                });
              }) : r2(Error("No reCAPTCHA enterprise script loaded."));
            }
            return new Promise((t4, r2) => {
              (async function(t5) {
                if (!e3) {
                  if (null == t5.tenantId && null != t5._agentRecaptchaConfig) return t5._agentRecaptchaConfig.siteKey;
                  if (null != t5.tenantId && void 0 !== t5._tenantRecaptchaConfigs[t5.tenantId]) return t5._tenantRecaptchaConfigs[t5.tenantId].siteKey;
                }
                return new Promise(async (e4, n3) => {
                  Ve(t5, { clientType: "CLIENT_TYPE_WEB", version: "RECAPTCHA_ENTERPRISE" }).then((r3) => {
                    if (void 0 !== r3.recaptchaKey) {
                      const n4 = new qe(r3);
                      return null == t5.tenantId ? t5._agentRecaptchaConfig = n4 : t5._tenantRecaptchaConfigs[t5.tenantId] = n4, e4(n4.siteKey);
                    }
                    n3(new Error("recaptcha Enterprise site key undefined"));
                  }).catch((t6) => {
                    n3(t6);
                  });
                });
              })(this.auth).then((i2) => {
                if (!e3 && je(window.grecaptcha)) n2(i2, t4, r2);
                else {
                  if ("undefined" == typeof window) return void r2(new Error("RecaptchaVerifier is only supported in browser"));
                  (s2 = "https://www.google.com/recaptcha/enterprise.js?render=" + i2, new Promise((t5, e4) => {
                    const n3 = document.createElement("script");
                    var r3, i3;
                    n3.setAttribute("src", s2), n3.onload = t5, n3.onerror = (t6) => {
                      const n4 = Jt("internal-error");
                      n4.customData = t6, e4(n4);
                    }, n3.type = "text/javascript", n3.charset = "UTF-8", (null !== (i3 = null === (r3 = document.getElementsByTagName("head")) || void 0 === r3 ? void 0 : r3[0]) && void 0 !== i3 ? i3 : document).appendChild(n3);
                  })).then(() => {
                    n2(i2, t4, r2);
                  }).catch((t5) => {
                    r2(t5);
                  });
                }
                var s2;
              }).catch((t5) => {
                r2(t5);
              });
            });
          }
        }
        async function $e(t3, e3, n2, r2 = false) {
          const i2 = new Be(t3);
          let s2;
          try {
            s2 = await i2.verify(n2);
          } catch (t4) {
            s2 = await i2.verify(n2, true);
          }
          const o2 = Object.assign({}, e3);
          return r2 ? Object.assign(o2, { captchaResp: s2 }) : Object.assign(o2, { captchaResponse: s2 }), Object.assign(o2, { clientType: "CLIENT_TYPE_WEB" }), Object.assign(o2, { recaptchaVersion: "RECAPTCHA_ENTERPRISE" }), o2;
        }
        class ze {
          constructor(t3) {
            this.auth = t3, this.queue = [];
          }
          pushCallback(t3, e3) {
            const n2 = (e4) => new Promise((n3, r3) => {
              try {
                n3(t3(e4));
              } catch (t4) {
                r3(t4);
              }
            });
            n2.onAbort = e3, this.queue.push(n2);
            const r2 = this.queue.length - 1;
            return () => {
              this.queue[r2] = () => Promise.resolve();
            };
          }
          async runMiddleware(t3) {
            if (this.auth.currentUser === t3) return;
            const e3 = [];
            try {
              for (const n2 of this.queue) await n2(t3), n2.onAbort && e3.push(n2.onAbort);
            } catch (t4) {
              e3.reverse();
              for (const t5 of e3) try {
                t5();
              } catch (t6) {
              }
              throw this.auth._errorFactory.create("login-blocked", { originalMessage: null == t4 ? void 0 : t4.message });
            }
          }
        }
        class Ke {
          constructor(t3, e3, n2, r2) {
            this.app = t3, this.heartbeatServiceProvider = e3, this.appCheckServiceProvider = n2, this.config = r2, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new Ge(this), this.idTokenSubscription = new Ge(this), this.beforeStateQueue = new ze(this), this.redirectUser = null, this.isProactiveRefreshEnabled = false, this._canInitEmulator = true, this._isInitialized = false, this._deleted = false, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = Gt, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = { appVerificationDisabledForTesting: false }, this.frameworks = [], this.name = t3.name, this.clientVersion = r2.sdkClientVersion;
          }
          _initializeWithPersistence(t3, e3) {
            return e3 && (this._popupRedirectResolver = Ae(e3)), this._initializationPromise = this.queue(async () => {
              var n2, r2;
              if (!this._deleted && (this.persistenceManager = await Oe.create(this, t3), !this._deleted)) {
                if (null === (n2 = this._popupRedirectResolver) || void 0 === n2 ? void 0 : n2._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this);
                } catch (t4) {
                }
                await this.initializeCurrentUser(e3), this.lastNotifiedUid = (null === (r2 = this.currentUser) || void 0 === r2 ? void 0 : r2.uid) || null, this._deleted || (this._isInitialized = true);
              }
            }), this._initializationPromise;
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const t3 = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || t3 ? this.currentUser && t3 && this.currentUser.uid === t3.uid ? (this._currentUser._assign(t3), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(t3, true) : void 0;
          }
          async initializeCurrentUser(t3) {
            var e3;
            const n2 = await this.assertedPersistence.getCurrentUser();
            let r2 = n2, i2 = false;
            if (t3 && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const n3 = null === (e3 = this.redirectUser) || void 0 === e3 ? void 0 : e3._redirectEventId, s2 = null == r2 ? void 0 : r2._redirectEventId, o2 = await this.tryRedirectSignIn(t3);
              n3 && n3 !== s2 || !(null == o2 ? void 0 : o2.user) || (r2 = o2.user, i2 = true);
            }
            if (!r2) return this.directlySetCurrentUser(null);
            if (!r2._redirectEventId) {
              if (i2) try {
                await this.beforeStateQueue.runMiddleware(r2);
              } catch (t4) {
                r2 = n2, this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(t4));
              }
              return r2 ? this.reloadAndSetCurrentUserOrClear(r2) : this.directlySetCurrentUser(null);
            }
            return Zt(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === r2._redirectEventId ? this.directlySetCurrentUser(r2) : this.reloadAndSetCurrentUserOrClear(r2);
          }
          async tryRedirectSignIn(t3) {
            let e3 = null;
            try {
              e3 = await this._popupRedirectResolver._completeRedirectFn(this, t3, true);
            } catch (t4) {
              await this._setRedirectUser(null);
            }
            return e3;
          }
          async reloadAndSetCurrentUserOrClear(t3) {
            try {
              await _e(t3);
            } catch (t4) {
              if ("auth/network-request-failed" !== (null == t4 ? void 0 : t4.code)) return this.directlySetCurrentUser(null);
            }
            return this.directlySetCurrentUser(t3);
          }
          useDeviceLanguage() {
            this.languageCode = function() {
              if ("undefined" == typeof navigator) return null;
              const t3 = navigator;
              return t3.languages && t3.languages[0] || t3.language || null;
            }();
          }
          async _delete() {
            this._deleted = true;
          }
          async updateCurrentUser(t3) {
            const e3 = t3 ? G(t3) : null;
            return e3 && Zt(e3.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(e3 && e3._clone(this));
          }
          async _updateCurrentUser(t3, e3 = false) {
            if (!this._deleted) return t3 && Zt(this.tenantId === t3.tenantId, this, "tenant-id-mismatch"), e3 || await this.beforeStateQueue.runMiddleware(t3), this.queue(async () => {
              await this.directlySetCurrentUser(t3), this.notifyAuthListeners();
            });
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, true);
          }
          setPersistence(t3) {
            return this.queue(async () => {
              await this.assertedPersistence.setPersistence(Ae(t3));
            });
          }
          async initializeRecaptchaConfig() {
            const t3 = await Ve(this, { clientType: "CLIENT_TYPE_WEB", version: "RECAPTCHA_ENTERPRISE" }), e3 = new qe(t3);
            null == this.tenantId ? this._agentRecaptchaConfig = e3 : this._tenantRecaptchaConfigs[this.tenantId] = e3, e3.emailPasswordEnabled && new Be(this).verify();
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId];
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type;
          }
          _updateErrorMap(t3) {
            this._errorFactory = new F("auth", "Firebase", t3());
          }
          onAuthStateChanged(t3, e3, n2) {
            return this.registerStateListener(this.authStateSubscription, t3, e3, n2);
          }
          beforeAuthStateChanged(t3, e3) {
            return this.beforeStateQueue.pushCallback(t3, e3);
          }
          onIdTokenChanged(t3, e3, n2) {
            return this.registerStateListener(this.idTokenSubscription, t3, e3, n2);
          }
          toJSON() {
            var t3;
            return { apiKey: this.config.apiKey, authDomain: this.config.authDomain, appName: this.name, currentUser: null === (t3 = this._currentUser) || void 0 === t3 ? void 0 : t3.toJSON() };
          }
          async _setRedirectUser(t3, e3) {
            const n2 = await this.getOrInitRedirectPersistenceManager(e3);
            return null === t3 ? n2.removeCurrentUser() : n2.setCurrentUser(t3);
          }
          async getOrInitRedirectPersistenceManager(t3) {
            if (!this.redirectPersistenceManager) {
              const e3 = t3 && Ae(t3) || this._popupRedirectResolver;
              Zt(e3, this, "argument-error"), this.redirectPersistenceManager = await Oe.create(this, [Ae(e3._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser();
            }
            return this.redirectPersistenceManager;
          }
          async _redirectUserForId(t3) {
            var e3, n2;
            return this._isInitialized && await this.queue(async () => {
            }), (null === (e3 = this._currentUser) || void 0 === e3 ? void 0 : e3._redirectEventId) === t3 ? this._currentUser : (null === (n2 = this.redirectUser) || void 0 === n2 ? void 0 : n2._redirectEventId) === t3 ? this.redirectUser : null;
          }
          async _persistUserIfCurrent(t3) {
            if (t3 === this.currentUser) return this.queue(async () => this.directlySetCurrentUser(t3));
          }
          _notifyListenersIfCurrent(t3) {
            t3 === this.currentUser && this.notifyAuthListeners();
          }
          _key() {
            return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
          }
          _startProactiveRefresh() {
            this.isProactiveRefreshEnabled = true, this.currentUser && this._currentUser._startProactiveRefresh();
          }
          _stopProactiveRefresh() {
            this.isProactiveRefreshEnabled = false, this.currentUser && this._currentUser._stopProactiveRefresh();
          }
          get _currentUser() {
            return this.currentUser;
          }
          notifyAuthListeners() {
            var t3, e3;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const n2 = null !== (e3 = null === (t3 = this.currentUser) || void 0 === t3 ? void 0 : t3.uid) && void 0 !== e3 ? e3 : null;
            this.lastNotifiedUid !== n2 && (this.lastNotifiedUid = n2, this.authStateSubscription.next(this.currentUser));
          }
          registerStateListener(t3, e3, n2, r2) {
            if (this._deleted) return () => {
            };
            const i2 = "function" == typeof e3 ? e3 : e3.next.bind(e3), s2 = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return Zt(s2, this, "internal-error"), s2.then(() => i2(this.currentUser)), "function" == typeof e3 ? t3.addObserver(e3, n2, r2) : t3.addObserver(e3);
          }
          async directlySetCurrentUser(t3) {
            this.currentUser && this.currentUser !== t3 && this._currentUser._stopProactiveRefresh(), t3 && this.isProactiveRefreshEnabled && t3._startProactiveRefresh(), this.currentUser = t3, t3 ? await this.assertedPersistence.setCurrentUser(t3) : await this.assertedPersistence.removeCurrentUser();
          }
          queue(t3) {
            return this.operations = this.operations.then(t3, t3), this.operations;
          }
          get assertedPersistence() {
            return Zt(this.persistenceManager, this, "internal-error"), this.persistenceManager;
          }
          _logFramework(t3) {
            t3 && !this.frameworks.includes(t3) && (this.frameworks.push(t3), this.frameworks.sort(), this.clientVersion = Fe(this.config.clientPlatform, this._getFrameworks()));
          }
          _getFrameworks() {
            return this.frameworks;
          }
          async _getAdditionalHeaders() {
            var t3;
            const e3 = { "X-Client-Version": this.clientVersion };
            this.app.options.appId && (e3["X-Firebase-gmpid"] = this.app.options.appId);
            const n2 = await (null === (t3 = this.heartbeatServiceProvider.getImmediate({ optional: true })) || void 0 === t3 ? void 0 : t3.getHeartbeatsHeader());
            n2 && (e3["X-Firebase-Client"] = n2);
            const r2 = await this._getAppCheckToken();
            return r2 && (e3["X-Firebase-AppCheck"] = r2), e3;
          }
          async _getAppCheckToken() {
            var t3;
            const e3 = await (null === (t3 = this.appCheckServiceProvider.getImmediate({ optional: true })) || void 0 === t3 ? void 0 : t3.getToken());
            return (null == e3 ? void 0 : e3.error) && function(t4, ...e4) {
              Wt.logLevel <= Z.WARN && Wt.warn(`Auth (9.22.2): ${t4}`, ...e4);
            }(`Error while retrieving App Check token: ${e3.error}`), null == e3 ? void 0 : e3.token;
          }
        }
        function He(t3) {
          return G(t3);
        }
        class Ge {
          constructor(t3) {
            this.auth = t3, this.observer = null, this.addObserver = function(t4, e3) {
              const n2 = new K(t4, void 0);
              return n2.subscribe.bind(n2);
            }((t4) => this.observer = t4);
          }
          get next() {
            return Zt(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer);
          }
        }
        function We(t3) {
          const e3 = t3.indexOf(":");
          return e3 < 0 ? "" : t3.substr(0, e3 + 1);
        }
        function Qe(t3) {
          if (!t3) return null;
          const e3 = Number(t3);
          return isNaN(e3) ? null : e3;
        }
        class Ye {
          constructor(t3, e3) {
            this.providerId = t3, this.signInMethod = e3;
          }
          toJSON() {
            return te("not implemented");
          }
          _getIdTokenResponse(t3) {
            return te("not implemented");
          }
          _linkToIdToken(t3, e3) {
            return te("not implemented");
          }
          _getReauthenticationResolver(t3) {
            return te("not implemented");
          }
        }
        async function Je(t3, e3) {
          return le(t3, "POST", "/v1/accounts:signInWithPassword", ce(t3, e3));
        }
        class Xe extends Ye {
          constructor(t3, e3, n2, r2 = null) {
            super("password", n2), this._email = t3, this._password = e3, this._tenantId = r2;
          }
          static _fromEmailAndPassword(t3, e3) {
            return new Xe(t3, e3, "password");
          }
          static _fromEmailAndCode(t3, e3, n2 = null) {
            return new Xe(t3, e3, "emailLink", n2);
          }
          toJSON() {
            return { email: this._email, password: this._password, signInMethod: this.signInMethod, tenantId: this._tenantId };
          }
          static fromJSON(t3) {
            const e3 = "string" == typeof t3 ? JSON.parse(t3) : t3;
            if ((null == e3 ? void 0 : e3.email) && (null == e3 ? void 0 : e3.password)) {
              if ("password" === e3.signInMethod) return this._fromEmailAndPassword(e3.email, e3.password);
              if ("emailLink" === e3.signInMethod) return this._fromEmailAndCode(e3.email, e3.password, e3.tenantId);
            }
            return null;
          }
          async _getIdTokenResponse(t3) {
            var e3;
            switch (this.signInMethod) {
              case "password":
                const n2 = { returnSecureToken: true, email: this._email, password: this._password, clientType: "CLIENT_TYPE_WEB" };
                if (null === (e3 = t3._getRecaptchaConfig()) || void 0 === e3 ? void 0 : e3.emailPasswordEnabled) {
                  const e4 = await $e(t3, n2, "signInWithPassword");
                  return Je(t3, e4);
                }
                return Je(t3, n2).catch(async (e4) => {
                  if ("auth/missing-recaptcha-token" === e4.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const e5 = await $e(t3, n2, "signInWithPassword");
                    return Je(t3, e5);
                  }
                  return Promise.reject(e4);
                });
              case "emailLink":
                return async function(t4, e4) {
                  return le(t4, "POST", "/v1/accounts:signInWithEmailLink", ce(t4, e4));
                }(t3, { email: this._email, oobCode: this._password });
              default:
                Yt(t3, "internal-error");
            }
          }
          async _linkToIdToken(t3, e3) {
            switch (this.signInMethod) {
              case "password":
                return async function(t4, e4) {
                  return ue(t4, "POST", "/v1/accounts:update", e4);
                }(t3, { idToken: e3, returnSecureToken: true, email: this._email, password: this._password });
              case "emailLink":
                return async function(t4, e4) {
                  return le(t4, "POST", "/v1/accounts:signInWithEmailLink", ce(t4, e4));
                }(t3, { idToken: e3, email: this._email, oobCode: this._password });
              default:
                Yt(t3, "internal-error");
            }
          }
          _getReauthenticationResolver(t3) {
            return this._getIdTokenResponse(t3);
          }
        }
        async function Ze(t3, e3) {
          return le(t3, "POST", "/v1/accounts:signInWithIdp", ce(t3, e3));
        }
        class tn extends Ye {
          constructor() {
            super(...arguments), this.pendingToken = null;
          }
          static _fromParams(t3) {
            const e3 = new tn(t3.providerId, t3.signInMethod);
            return t3.idToken || t3.accessToken ? (t3.idToken && (e3.idToken = t3.idToken), t3.accessToken && (e3.accessToken = t3.accessToken), t3.nonce && !t3.pendingToken && (e3.nonce = t3.nonce), t3.pendingToken && (e3.pendingToken = t3.pendingToken)) : t3.oauthToken && t3.oauthTokenSecret ? (e3.accessToken = t3.oauthToken, e3.secret = t3.oauthTokenSecret) : Yt("argument-error"), e3;
          }
          toJSON() {
            return { idToken: this.idToken, accessToken: this.accessToken, secret: this.secret, nonce: this.nonce, pendingToken: this.pendingToken, providerId: this.providerId, signInMethod: this.signInMethod };
          }
          static fromJSON(t3) {
            const e3 = "string" == typeof t3 ? JSON.parse(t3) : t3, { providerId: n2, signInMethod: r2 } = e3, i2 = o(e3, ["providerId", "signInMethod"]);
            if (!n2 || !r2) return null;
            const s2 = new tn(n2, r2);
            return s2.idToken = i2.idToken || void 0, s2.accessToken = i2.accessToken || void 0, s2.secret = i2.secret, s2.nonce = i2.nonce, s2.pendingToken = i2.pendingToken || null, s2;
          }
          _getIdTokenResponse(t3) {
            return Ze(t3, this.buildRequest());
          }
          _linkToIdToken(t3, e3) {
            const n2 = this.buildRequest();
            return n2.idToken = e3, Ze(t3, n2);
          }
          _getReauthenticationResolver(t3) {
            const e3 = this.buildRequest();
            return e3.autoCreate = false, Ze(t3, e3);
          }
          buildRequest() {
            const t3 = { requestUri: "http://localhost", returnSecureToken: true };
            if (this.pendingToken) t3.pendingToken = this.pendingToken;
            else {
              const e3 = {};
              this.idToken && (e3.id_token = this.idToken), this.accessToken && (e3.access_token = this.accessToken), this.secret && (e3.oauth_token_secret = this.secret), e3.providerId = this.providerId, this.nonce && !this.pendingToken && (e3.nonce = this.nonce), t3.postBody = B(e3);
            }
            return t3;
          }
        }
        const en = { USER_NOT_FOUND: "user-not-found" };
        class nn extends Ye {
          constructor(t3) {
            super("phone", "phone"), this.params = t3;
          }
          static _fromVerification(t3, e3) {
            return new nn({ verificationId: t3, verificationCode: e3 });
          }
          static _fromTokenResponse(t3, e3) {
            return new nn({ phoneNumber: t3, temporaryProof: e3 });
          }
          _getIdTokenResponse(t3) {
            return async function(t4, e3) {
              return le(t4, "POST", "/v1/accounts:signInWithPhoneNumber", ce(t4, e3));
            }(t3, this._makeVerificationRequest());
          }
          _linkToIdToken(t3, e3) {
            return async function(t4, e4) {
              const n2 = await le(t4, "POST", "/v1/accounts:signInWithPhoneNumber", ce(t4, e4));
              if (n2.temporaryProof) throw pe(t4, "account-exists-with-different-credential", n2);
              return n2;
            }(t3, Object.assign({ idToken: e3 }, this._makeVerificationRequest()));
          }
          _getReauthenticationResolver(t3) {
            return async function(t4, e3) {
              return le(t4, "POST", "/v1/accounts:signInWithPhoneNumber", ce(t4, Object.assign(Object.assign({}, e3), { operation: "REAUTH" })), en);
            }(t3, this._makeVerificationRequest());
          }
          _makeVerificationRequest() {
            const { temporaryProof: t3, phoneNumber: e3, verificationId: n2, verificationCode: r2 } = this.params;
            return t3 && e3 ? { temporaryProof: t3, phoneNumber: e3 } : { sessionInfo: n2, code: r2 };
          }
          toJSON() {
            const t3 = { providerId: this.providerId };
            return this.params.phoneNumber && (t3.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (t3.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (t3.verificationCode = this.params.verificationCode), this.params.verificationId && (t3.verificationId = this.params.verificationId), t3;
          }
          static fromJSON(t3) {
            "string" == typeof t3 && (t3 = JSON.parse(t3));
            const { verificationId: e3, verificationCode: n2, phoneNumber: r2, temporaryProof: i2 } = t3;
            return n2 || e3 || r2 || i2 ? new nn({ verificationId: e3, verificationCode: n2, phoneNumber: r2, temporaryProof: i2 }) : null;
          }
        }
        class rn {
          constructor(t3) {
            var e3, n2, r2, i2, s2, o2;
            const a2 = $(z(t3)), c2 = null !== (e3 = a2.apiKey) && void 0 !== e3 ? e3 : null, u2 = null !== (n2 = a2.oobCode) && void 0 !== n2 ? n2 : null, h2 = function(t4) {
              switch (t4) {
                case "recoverEmail":
                  return "RECOVER_EMAIL";
                case "resetPassword":
                  return "PASSWORD_RESET";
                case "signIn":
                  return "EMAIL_SIGNIN";
                case "verifyEmail":
                  return "VERIFY_EMAIL";
                case "verifyAndChangeEmail":
                  return "VERIFY_AND_CHANGE_EMAIL";
                case "revertSecondFactorAddition":
                  return "REVERT_SECOND_FACTOR_ADDITION";
                default:
                  return null;
              }
            }(null !== (r2 = a2.mode) && void 0 !== r2 ? r2 : null);
            Zt(c2 && u2 && h2, "argument-error"), this.apiKey = c2, this.operation = h2, this.code = u2, this.continueUrl = null !== (i2 = a2.continueUrl) && void 0 !== i2 ? i2 : null, this.languageCode = null !== (s2 = a2.languageCode) && void 0 !== s2 ? s2 : null, this.tenantId = null !== (o2 = a2.tenantId) && void 0 !== o2 ? o2 : null;
          }
          static parseLink(t3) {
            const e3 = function(t4) {
              const e4 = $(z(t4)).link, n2 = e4 ? $(z(e4)).deep_link_id : null, r2 = $(z(t4)).deep_link_id;
              return (r2 ? $(z(r2)).link : null) || r2 || n2 || e4 || t4;
            }(t3);
            try {
              return new rn(e3);
            } catch (t4) {
              return null;
            }
          }
        }
        class sn {
          constructor() {
            this.providerId = sn.PROVIDER_ID;
          }
          static credential(t3, e3) {
            return Xe._fromEmailAndPassword(t3, e3);
          }
          static credentialWithLink(t3, e3) {
            const n2 = rn.parseLink(e3);
            return Zt(n2, "argument-error"), Xe._fromEmailAndCode(t3, n2.code, n2.tenantId);
          }
        }
        sn.PROVIDER_ID = "password", sn.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", sn.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class on extends class {
          constructor(t3) {
            this.providerId = t3, this.defaultLanguageCode = null, this.customParameters = {};
          }
          setDefaultLanguage(t3) {
            this.defaultLanguageCode = t3;
          }
          setCustomParameters(t3) {
            return this.customParameters = t3, this;
          }
          getCustomParameters() {
            return this.customParameters;
          }
        } {
          constructor() {
            super(...arguments), this.scopes = [];
          }
          addScope(t3) {
            return this.scopes.includes(t3) || this.scopes.push(t3), this;
          }
          getScopes() {
            return [...this.scopes];
          }
        }
        class an extends on {
          constructor() {
            super("facebook.com");
          }
          static credential(t3) {
            return tn._fromParams({ providerId: an.PROVIDER_ID, signInMethod: an.FACEBOOK_SIGN_IN_METHOD, accessToken: t3 });
          }
          static credentialFromResult(t3) {
            return an.credentialFromTaggedObject(t3);
          }
          static credentialFromError(t3) {
            return an.credentialFromTaggedObject(t3.customData || {});
          }
          static credentialFromTaggedObject({ _tokenResponse: t3 }) {
            if (!t3 || !("oauthAccessToken" in t3)) return null;
            if (!t3.oauthAccessToken) return null;
            try {
              return an.credential(t3.oauthAccessToken);
            } catch (t4) {
              return null;
            }
          }
        }
        an.FACEBOOK_SIGN_IN_METHOD = "facebook.com", an.PROVIDER_ID = "facebook.com";
        class cn extends on {
          constructor() {
            super("google.com"), this.addScope("profile");
          }
          static credential(t3, e3) {
            return tn._fromParams({ providerId: cn.PROVIDER_ID, signInMethod: cn.GOOGLE_SIGN_IN_METHOD, idToken: t3, accessToken: e3 });
          }
          static credentialFromResult(t3) {
            return cn.credentialFromTaggedObject(t3);
          }
          static credentialFromError(t3) {
            return cn.credentialFromTaggedObject(t3.customData || {});
          }
          static credentialFromTaggedObject({ _tokenResponse: t3 }) {
            if (!t3) return null;
            const { oauthIdToken: e3, oauthAccessToken: n2 } = t3;
            if (!e3 && !n2) return null;
            try {
              return cn.credential(e3, n2);
            } catch (t4) {
              return null;
            }
          }
        }
        cn.GOOGLE_SIGN_IN_METHOD = "google.com", cn.PROVIDER_ID = "google.com";
        class un extends on {
          constructor() {
            super("github.com");
          }
          static credential(t3) {
            return tn._fromParams({ providerId: un.PROVIDER_ID, signInMethod: un.GITHUB_SIGN_IN_METHOD, accessToken: t3 });
          }
          static credentialFromResult(t3) {
            return un.credentialFromTaggedObject(t3);
          }
          static credentialFromError(t3) {
            return un.credentialFromTaggedObject(t3.customData || {});
          }
          static credentialFromTaggedObject({ _tokenResponse: t3 }) {
            if (!t3 || !("oauthAccessToken" in t3)) return null;
            if (!t3.oauthAccessToken) return null;
            try {
              return un.credential(t3.oauthAccessToken);
            } catch (t4) {
              return null;
            }
          }
        }
        un.GITHUB_SIGN_IN_METHOD = "github.com", un.PROVIDER_ID = "github.com";
        class hn extends on {
          constructor() {
            super("twitter.com");
          }
          static credential(t3, e3) {
            return tn._fromParams({ providerId: hn.PROVIDER_ID, signInMethod: hn.TWITTER_SIGN_IN_METHOD, oauthToken: t3, oauthTokenSecret: e3 });
          }
          static credentialFromResult(t3) {
            return hn.credentialFromTaggedObject(t3);
          }
          static credentialFromError(t3) {
            return hn.credentialFromTaggedObject(t3.customData || {});
          }
          static credentialFromTaggedObject({ _tokenResponse: t3 }) {
            if (!t3) return null;
            const { oauthAccessToken: e3, oauthTokenSecret: n2 } = t3;
            if (!e3 || !n2) return null;
            try {
              return hn.credential(e3, n2);
            } catch (t4) {
              return null;
            }
          }
        }
        hn.TWITTER_SIGN_IN_METHOD = "twitter.com", hn.PROVIDER_ID = "twitter.com";
        class ln {
          constructor(t3) {
            this.user = t3.user, this.providerId = t3.providerId, this._tokenResponse = t3._tokenResponse, this.operationType = t3.operationType;
          }
          static async _fromIdTokenResponse(t3, e3, n2, r2 = false) {
            const i2 = await Ie._fromIdTokenResponse(t3, n2, r2), s2 = dn(n2);
            return new ln({ user: i2, providerId: s2, _tokenResponse: n2, operationType: e3 });
          }
          static async _forOperation(t3, e3, n2) {
            await t3._updateTokensIfNecessary(n2, true);
            const r2 = dn(n2);
            return new ln({ user: t3, providerId: r2, _tokenResponse: n2, operationType: e3 });
          }
        }
        function dn(t3) {
          return t3.providerId ? t3.providerId : "phoneNumber" in t3 ? "phone" : null;
        }
        class fn extends U {
          constructor(t3, e3, n2, r2) {
            var i2;
            super(e3.code, e3.message), this.operationType = n2, this.user = r2, Object.setPrototypeOf(this, fn.prototype), this.customData = { appName: t3.name, tenantId: null !== (i2 = t3.tenantId) && void 0 !== i2 ? i2 : void 0, _serverResponse: e3.customData._serverResponse, operationType: n2 };
          }
          static _fromErrorAndOperation(t3, e3, n2, r2) {
            return new fn(t3, e3, n2, r2);
          }
        }
        function pn(t3, e3, n2, r2) {
          return ("reauthenticate" === e3 ? n2._getReauthenticationResolver(t3) : n2._getIdTokenResponse(t3)).catch((n3) => {
            if ("auth/multi-factor-auth-required" === n3.code) throw fn._fromErrorAndOperation(t3, n3, e3, r2);
            throw n3;
          });
        }
        /* @__PURE__ */ new WeakMap();
        const gn = "__sak";
        class mn {
          constructor(t3, e3) {
            this.storageRetriever = t3, this.type = e3;
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(gn, "1"), this.storage.removeItem(gn), Promise.resolve(true)) : Promise.resolve(false);
            } catch (t3) {
              return Promise.resolve(false);
            }
          }
          _set(t3, e3) {
            return this.storage.setItem(t3, JSON.stringify(e3)), Promise.resolve();
          }
          _get(t3) {
            const e3 = this.storage.getItem(t3);
            return Promise.resolve(e3 ? JSON.parse(e3) : null);
          }
          _remove(t3) {
            return this.storage.removeItem(t3), Promise.resolve();
          }
          get storage() {
            return this.storageRetriever();
          }
        }
        (class extends mn {
          constructor() {
            super(() => window.localStorage, "LOCAL"), this.boundEventHandler = (t3, e3) => this.onStorageEvent(t3, e3), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const t3 = M();
              return Re(t3) || Ue(t3);
            }() && function() {
              try {
                return !(!window || window === window.top);
              } catch (t3) {
                return false;
              }
            }(), this.fallbackToPolling = function(t3 = M()) {
              return Ue(t3) || Pe(t3) || Me(t3) || xe(t3) || /windows phone/i.test(t3) || Le(t3);
            }(), this._shouldAllowMigration = true;
          }
          forAllChangedKeys(t3) {
            for (const e3 of Object.keys(this.listeners)) {
              const n2 = this.storage.getItem(e3), r2 = this.localCache[e3];
              n2 !== r2 && t3(e3, r2, n2);
            }
          }
          onStorageEvent(t3, e3 = false) {
            if (!t3.key) return void this.forAllChangedKeys((t4, e4, n3) => {
              this.notifyListeners(t4, n3);
            });
            const n2 = t3.key;
            if (e3 ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const r3 = this.storage.getItem(n2);
              if (t3.newValue !== r3) null !== t3.newValue ? this.storage.setItem(n2, t3.newValue) : this.storage.removeItem(n2);
              else if (this.localCache[n2] === t3.newValue && !e3) return;
            }
            const r2 = () => {
              const t4 = this.storage.getItem(n2);
              (e3 || this.localCache[n2] !== t4) && this.notifyListeners(n2, t4);
            }, i2 = this.storage.getItem(n2);
            !function() {
              const t4 = M();
              return t4.indexOf("MSIE ") >= 0 || t4.indexOf("Trident/") >= 0;
            }() || 10 !== document.documentMode || i2 === t3.newValue || t3.newValue === t3.oldValue ? r2() : setTimeout(r2, 10);
          }
          notifyListeners(t3, e3) {
            this.localCache[t3] = e3;
            const n2 = this.listeners[t3];
            if (n2) for (const t4 of Array.from(n2)) t4(e3 ? JSON.parse(e3) : e3);
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval(() => {
              this.forAllChangedKeys((t3, e3, n2) => {
                this.onStorageEvent(new StorageEvent("storage", { key: t3, oldValue: e3, newValue: n2 }), true);
              });
            }, 1e3);
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null);
          }
          attachListener() {
            window.addEventListener("storage", this.boundEventHandler);
          }
          detachListener() {
            window.removeEventListener("storage", this.boundEventHandler);
          }
          _addListener(t3, e3) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[t3] || (this.listeners[t3] = /* @__PURE__ */ new Set(), this.localCache[t3] = this.storage.getItem(t3)), this.listeners[t3].add(e3);
          }
          _removeListener(t3, e3) {
            this.listeners[t3] && (this.listeners[t3].delete(e3), 0 === this.listeners[t3].size && delete this.listeners[t3]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling());
          }
          async _set(t3, e3) {
            await super._set(t3, e3), this.localCache[t3] = JSON.stringify(e3);
          }
          async _get(t3) {
            const e3 = await super._get(t3);
            return this.localCache[t3] = JSON.stringify(e3), e3;
          }
          async _remove(t3) {
            await super._remove(t3), delete this.localCache[t3];
          }
        }).type = "LOCAL";
        (class extends mn {
          constructor() {
            super(() => window.sessionStorage, "SESSION");
          }
          _addListener(t3, e3) {
          }
          _removeListener(t3, e3) {
          }
        }).type = "SESSION";
        class yn {
          constructor(t3) {
            this.eventTarget = t3, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this);
          }
          static _getInstance(t3) {
            const e3 = this.receivers.find((e4) => e4.isListeningto(t3));
            if (e3) return e3;
            const n2 = new yn(t3);
            return this.receivers.push(n2), n2;
          }
          isListeningto(t3) {
            return this.eventTarget === t3;
          }
          async handleEvent(t3) {
            const e3 = t3, { eventId: n2, eventType: r2, data: i2 } = e3.data, s2 = this.handlersMap[r2];
            if (!(null == s2 ? void 0 : s2.size)) return;
            e3.ports[0].postMessage({ status: "ack", eventId: n2, eventType: r2 });
            const o2 = Array.from(s2).map(async (t4) => t4(e3.origin, i2)), a2 = await function(t4) {
              return Promise.all(t4.map(async (t5) => {
                try {
                  return { fulfilled: true, value: await t5 };
                } catch (t6) {
                  return { fulfilled: false, reason: t6 };
                }
              }));
            }(o2);
            e3.ports[0].postMessage({ status: "done", eventId: n2, eventType: r2, response: a2 });
          }
          _subscribe(t3, e3) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[t3] || (this.handlersMap[t3] = /* @__PURE__ */ new Set()), this.handlersMap[t3].add(e3);
          }
          _unsubscribe(t3, e3) {
            this.handlersMap[t3] && e3 && this.handlersMap[t3].delete(e3), e3 && 0 !== this.handlersMap[t3].size || delete this.handlersMap[t3], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler);
          }
        }
        function vn(t3 = "", e3 = 10) {
          let n2 = "";
          for (let t4 = 0; t4 < e3; t4++) n2 += Math.floor(10 * Math.random());
          return t3 + n2;
        }
        yn.receivers = [];
        Math.floor(1e6 * Math.random()), new ie(3e4, 6e4);
        class wn {
          constructor(t3) {
            this.providerId = wn.PROVIDER_ID, this.auth = He(t3);
          }
          verifyPhoneNumber(t3, e3) {
            return async function(t4, e4, n2) {
              var r2;
              const i2 = await n2.verify();
              try {
                let s2;
                if (Zt("string" == typeof i2, t4, "argument-error"), Zt("recaptcha" === n2.type, t4, "argument-error"), s2 = "string" == typeof e4 ? { phoneNumber: e4 } : e4, "session" in s2) {
                  const e5 = s2.session;
                  if ("phoneNumber" in s2) {
                    Zt("enroll" === e5.type, t4, "internal-error");
                    const n3 = await function(t5, e6) {
                      return ue(t5, "POST", "/v2/accounts/mfaEnrollment:start", ce(t5, e6));
                    }(t4, { idToken: e5.credential, phoneEnrollmentInfo: { phoneNumber: s2.phoneNumber, recaptchaToken: i2 } });
                    return n3.phoneSessionInfo.sessionInfo;
                  }
                  {
                    Zt("signin" === e5.type, t4, "internal-error");
                    const n3 = (null === (r2 = s2.multiFactorHint) || void 0 === r2 ? void 0 : r2.uid) || s2.multiFactorUid;
                    Zt(n3, t4, "missing-multi-factor-info");
                    const o2 = await function(t5, e6) {
                      return ue(t5, "POST", "/v2/accounts/mfaSignIn:start", ce(t5, e6));
                    }(t4, { mfaPendingCredential: e5.credential, mfaEnrollmentId: n3, phoneSignInInfo: { recaptchaToken: i2 } });
                    return o2.phoneResponseInfo.sessionInfo;
                  }
                }
                {
                  const { sessionInfo: e5 } = await async function(t5, e6) {
                    return ue(t5, "POST", "/v1/accounts:sendVerificationCode", ce(t5, e6));
                  }(t4, { phoneNumber: s2.phoneNumber, recaptchaToken: i2 });
                  return e5;
                }
              } finally {
                n2._reset();
              }
            }(this.auth, t3, G(e3));
          }
          static credential(t3, e3) {
            return nn._fromVerification(t3, e3);
          }
          static credentialFromResult(t3) {
            const e3 = t3;
            return wn.credentialFromTaggedObject(e3);
          }
          static credentialFromError(t3) {
            return wn.credentialFromTaggedObject(t3.customData || {});
          }
          static credentialFromTaggedObject({ _tokenResponse: t3 }) {
            if (!t3) return null;
            const { phoneNumber: e3, temporaryProof: n2 } = t3;
            return e3 && n2 ? nn._fromTokenResponse(e3, n2) : null;
          }
        }
        wn.PROVIDER_ID = "phone", wn.PHONE_SIGN_IN_METHOD = "phone";
        class bn extends Ye {
          constructor(t3) {
            super("custom", "custom"), this.params = t3;
          }
          _getIdTokenResponse(t3) {
            return Ze(t3, this._buildIdpRequest());
          }
          _linkToIdToken(t3, e3) {
            return Ze(t3, this._buildIdpRequest(e3));
          }
          _getReauthenticationResolver(t3) {
            return Ze(t3, this._buildIdpRequest());
          }
          _buildIdpRequest(t3) {
            const e3 = { requestUri: this.params.requestUri, sessionId: this.params.sessionId, postBody: this.params.postBody, tenantId: this.params.tenantId, pendingToken: this.params.pendingToken, returnSecureToken: true, returnIdpCredential: true };
            return t3 && (e3.idToken = t3), e3;
          }
        }
        function _n(t3) {
          return async function(t4, e3, n2 = false) {
            const r2 = "signIn", i2 = await pn(t4, r2, e3), s2 = await ln._fromIdTokenResponse(t4, r2, i2);
            return n2 || await t4._updateCurrentUser(s2.user), s2;
          }(t3.auth, new bn(t3), t3.bypassAuthState);
        }
        function En(t3) {
          const { auth: e3, user: n2 } = t3;
          return Zt(n2, e3, "internal-error"), async function(t4, e4, n3 = false) {
            const { auth: r2 } = t4, i2 = "reauthenticate";
            try {
              const s2 = await ve(t4, pn(r2, i2, e4, t4), n3);
              Zt(s2.idToken, r2, "internal-error");
              const o2 = ye(s2.idToken);
              Zt(o2, r2, "internal-error");
              const { sub: a2 } = o2;
              return Zt(t4.uid === a2, r2, "user-mismatch"), ln._forOperation(t4, i2, s2);
            } catch (t5) {
              throw "auth/user-not-found" === (null == t5 ? void 0 : t5.code) && Yt(r2, "user-mismatch"), t5;
            }
          }(n2, new bn(t3), t3.bypassAuthState);
        }
        async function Tn(t3) {
          const { auth: e3, user: n2 } = t3;
          return Zt(n2, e3, "internal-error"), async function(t4, e4, n3 = false) {
            const r2 = await ve(t4, e4._linkToIdToken(t4.auth, await t4.getIdToken()), n3);
            return ln._forOperation(t4, "link", r2);
          }(n2, new bn(t3), t3.bypassAuthState);
        }
        const In = new ie(2e3, 1e4);
        class Sn extends class {
          constructor(t3, e3, n2, r2, i2 = false) {
            this.auth = t3, this.resolver = n2, this.user = r2, this.bypassAuthState = i2, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(e3) ? e3 : [e3];
          }
          execute() {
            return new Promise(async (t3, e3) => {
              this.pendingPromise = { resolve: t3, reject: e3 };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this);
              } catch (t4) {
                this.reject(t4);
              }
            });
          }
          async onAuthEvent(t3) {
            const { urlResponse: e3, sessionId: n2, postBody: r2, tenantId: i2, error: s2, type: o2 } = t3;
            if (s2) return void this.reject(s2);
            const a2 = { auth: this.auth, requestUri: e3, sessionId: n2, tenantId: i2 || void 0, postBody: r2 || void 0, user: this.user, bypassAuthState: this.bypassAuthState };
            try {
              this.resolve(await this.getIdpTask(o2)(a2));
            } catch (t4) {
              this.reject(t4);
            }
          }
          onError(t3) {
            this.reject(t3);
          }
          getIdpTask(t3) {
            switch (t3) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return _n;
              case "linkViaPopup":
              case "linkViaRedirect":
                return Tn;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return En;
              default:
                Yt(this.auth, "internal-error");
            }
          }
          resolve(t3) {
            ee(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(t3), this.unregisterAndCleanUp();
          }
          reject(t3) {
            ee(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(t3), this.unregisterAndCleanUp();
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp();
          }
        } {
          constructor(t3, e3, n2, r2, i2) {
            super(t3, e3, r2, i2), this.provider = n2, this.authWindow = null, this.pollId = null, Sn.currentPopupAction && Sn.currentPopupAction.cancel(), Sn.currentPopupAction = this;
          }
          async executeNotNull() {
            const t3 = await this.execute();
            return Zt(t3, this.auth, "internal-error"), t3;
          }
          async onExecution() {
            ee(1 === this.filter.length, "Popup operations only handle one event");
            const t3 = vn();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], t3), this.authWindow.associatedEvent = t3, this.resolver._originValidation(this.auth).catch((t4) => {
              this.reject(t4);
            }), this.resolver._isIframeWebStorageSupported(this.auth, (t4) => {
              t4 || this.reject(Jt(this.auth, "web-storage-unsupported"));
            }), this.pollUserCancellation();
          }
          get eventId() {
            var t3;
            return (null === (t3 = this.authWindow) || void 0 === t3 ? void 0 : t3.associatedEvent) || null;
          }
          cancel() {
            this.reject(Jt(this.auth, "cancelled-popup-request"));
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, Sn.currentPopupAction = null;
          }
          pollUserCancellation() {
            const t3 = () => {
              var e3, n2;
              (null === (n2 = null === (e3 = this.authWindow) || void 0 === e3 ? void 0 : e3.window) || void 0 === n2 ? void 0 : n2.closed) ? this.pollId = window.setTimeout(() => {
                this.pollId = null, this.reject(Jt(this.auth, "popup-closed-by-user"));
              }, 8e3) : this.pollId = window.setTimeout(t3, In.get());
            };
            t3();
          }
        }
        Sn.currentPopupAction = null, /* @__PURE__ */ new Map(), new ie(3e4, 6e4), new ie(5e3, 15e3), /* @__PURE__ */ new Map([["identitytoolkit.googleapis.com", "p"], ["staging-identitytoolkit.sandbox.googleapis.com", "s"], ["test-identitytoolkit.sandbox.googleapis.com", "t"]]), encodeURIComponent("fac");
        var An, Cn, kn = "@firebase/auth", Nn = "0.23.2";
        class On {
          constructor(t3) {
            this.auth = t3, this.internalListeners = /* @__PURE__ */ new Map();
          }
          getUid() {
            var t3;
            return this.assertAuthConfigured(), (null === (t3 = this.auth.currentUser) || void 0 === t3 ? void 0 : t3.uid) || null;
          }
          async getToken(t3) {
            return this.assertAuthConfigured(), await this.auth._initializationPromise, this.auth.currentUser ? { accessToken: await this.auth.currentUser.getIdToken(t3) } : null;
          }
          addAuthTokenListener(t3) {
            if (this.assertAuthConfigured(), this.internalListeners.has(t3)) return;
            const e3 = this.auth.onIdTokenChanged((e4) => {
              t3((null == e4 ? void 0 : e4.stsTokenManager.accessToken) || null);
            });
            this.internalListeners.set(t3, e3), this.updateProactiveRefresh();
          }
          removeAuthTokenListener(t3) {
            this.assertAuthConfigured();
            const e3 = this.internalListeners.get(t3);
            e3 && (this.internalListeners.delete(t3), e3(), this.updateProactiveRefresh());
          }
          assertAuthConfigured() {
            Zt(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth");
          }
          updateProactiveRefresh() {
            this.internalListeners.size > 0 ? this.auth._startProactiveRefresh() : this.auth._stopProactiveRefresh();
          }
        }
        null === (An = L()) || void 0 === An || An._authIdTokenMaxAge, Cn = "Browser", Dt(new W("auth", (t3, { options: e3 }) => {
          const n2 = t3.getProvider("app").getImmediate(), r2 = t3.getProvider("heartbeat"), i2 = t3.getProvider("app-check-internal"), { apiKey: s2, authDomain: o2 } = n2.options;
          Zt(s2 && !s2.includes(":"), "invalid-api-key", { appName: n2.name });
          const a2 = { apiKey: s2, authDomain: o2, clientPlatform: Cn, apiHost: "identitytoolkit.googleapis.com", tokenApiHost: "securetoken.googleapis.com", apiScheme: "https", sdkClientVersion: Fe(Cn) }, c2 = new Ke(n2, r2, i2, a2);
          return function(t4, e4) {
            const n3 = (null == e4 ? void 0 : e4.persistence) || [], r3 = (Array.isArray(n3) ? n3 : [n3]).map(Ae);
            (null == e4 ? void 0 : e4.errorMap) && t4._updateErrorMap(e4.errorMap), t4._initializeWithPersistence(r3, null == e4 ? void 0 : e4.popupRedirectResolver);
          }(c2, e3), c2;
        }, "PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t3, e3, n2) => {
          t3.getProvider("auth-internal").initialize();
        })), Dt(new W("auth-internal", (t3) => {
          return e3 = He(t3.getProvider("auth").getImmediate()), new On(e3);
          var e3;
        }, "PRIVATE").setInstantiationMode("EXPLICIT")), Mt(kn, Nn, void 0), Mt(kn, Nn, "esm2017");
        var Dn, Rn = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, Ln = {}, Pn = Pn || {}, xn = Rn || self;
        function Mn(t3) {
          var e3 = typeof t3;
          return "array" == (e3 = "object" != e3 ? e3 : t3 ? Array.isArray(t3) ? "array" : e3 : "null") || "object" == e3 && "number" == typeof t3.length;
        }
        function Un(t3) {
          var e3 = typeof t3;
          return "object" == e3 && null != t3 || "function" == e3;
        }
        var Fn = "closure_uid_" + (1e9 * Math.random() >>> 0), Vn = 0;
        function jn(t3, e3, n2) {
          return t3.call.apply(t3.bind, arguments);
        }
        function qn(t3, e3, n2) {
          if (!t3) throw Error();
          if (2 < arguments.length) {
            var r2 = Array.prototype.slice.call(arguments, 2);
            return function() {
              var n3 = Array.prototype.slice.call(arguments);
              return Array.prototype.unshift.apply(n3, r2), t3.apply(e3, n3);
            };
          }
          return function() {
            return t3.apply(e3, arguments);
          };
        }
        function Bn(t3, e3, n2) {
          return (Bn = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? jn : qn).apply(null, arguments);
        }
        function $n(t3, e3) {
          var n2 = Array.prototype.slice.call(arguments, 1);
          return function() {
            var e4 = n2.slice();
            return e4.push.apply(e4, arguments), t3.apply(this, e4);
          };
        }
        function zn(t3, e3) {
          function n2() {
          }
          n2.prototype = e3.prototype, t3.$ = e3.prototype, t3.prototype = new n2(), t3.prototype.constructor = t3, t3.ac = function(t4, n3, r2) {
            for (var i2 = Array(arguments.length - 2), s2 = 2; s2 < arguments.length; s2++) i2[s2 - 2] = arguments[s2];
            return e3.prototype[n3].apply(t4, i2);
          };
        }
        function Kn() {
          this.s = this.s, this.o = this.o;
        }
        Kn.prototype.s = false, Kn.prototype.sa = function() {
          var t3;
          !this.s && (this.s = true, this.N(), 0);
        }, Kn.prototype.N = function() {
          if (this.o) for (; this.o.length; ) this.o.shift()();
        };
        const Hn = Array.prototype.indexOf ? function(t3, e3) {
          return Array.prototype.indexOf.call(t3, e3, void 0);
        } : function(t3, e3) {
          if ("string" == typeof t3) return "string" != typeof e3 || 1 != e3.length ? -1 : t3.indexOf(e3, 0);
          for (let n2 = 0; n2 < t3.length; n2++) if (n2 in t3 && t3[n2] === e3) return n2;
          return -1;
        };
        function Gn(t3) {
          const e3 = t3.length;
          if (0 < e3) {
            const n2 = Array(e3);
            for (let r2 = 0; r2 < e3; r2++) n2[r2] = t3[r2];
            return n2;
          }
          return [];
        }
        function Wn(t3, e3) {
          for (let e4 = 1; e4 < arguments.length; e4++) {
            const n2 = arguments[e4];
            if (Mn(n2)) {
              const e5 = t3.length || 0, r2 = n2.length || 0;
              t3.length = e5 + r2;
              for (let i2 = 0; i2 < r2; i2++) t3[e5 + i2] = n2[i2];
            } else t3.push(n2);
          }
        }
        function Qn(t3, e3) {
          this.type = t3, this.g = this.target = e3, this.defaultPrevented = false;
        }
        Qn.prototype.h = function() {
          this.defaultPrevented = true;
        };
        var Yn = function() {
          if (!xn.addEventListener || !Object.defineProperty) return false;
          var t3 = false, e3 = Object.defineProperty({}, "passive", { get: function() {
            t3 = true;
          } });
          try {
            xn.addEventListener("test", () => {
            }, e3), xn.removeEventListener("test", () => {
            }, e3);
          } catch (t4) {
          }
          return t3;
        }();
        function Jn(t3) {
          return /^[\s\xa0]*$/.test(t3);
        }
        function Xn() {
          var t3 = xn.navigator;
          return t3 && (t3 = t3.userAgent) ? t3 : "";
        }
        function Zn(t3) {
          return -1 != Xn().indexOf(t3);
        }
        function tr(t3) {
          return tr[" "](t3), t3;
        }
        tr[" "] = function() {
        };
        var er, nr, rr, ir = Zn("Opera"), sr = Zn("Trident") || Zn("MSIE"), or = Zn("Edge"), ar = or || sr, cr = Zn("Gecko") && !(-1 != Xn().toLowerCase().indexOf("webkit") && !Zn("Edge")) && !(Zn("Trident") || Zn("MSIE")) && !Zn("Edge"), ur = -1 != Xn().toLowerCase().indexOf("webkit") && !Zn("Edge");
        function hr() {
          var t3 = xn.document;
          return t3 ? t3.documentMode : void 0;
        }
        t: {
          var lr = "", dr = (nr = Xn(), cr ? /rv:([^\);]+)(\)|;)/.exec(nr) : or ? /Edge\/([\d\.]+)/.exec(nr) : sr ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(nr) : ur ? /WebKit\/(\S+)/.exec(nr) : ir ? /(?:Version)[ \/]?(\S+)/.exec(nr) : void 0);
          if (dr && (lr = dr ? dr[1] : ""), sr) {
            var fr = hr();
            if (null != fr && fr > parseFloat(lr)) {
              er = String(fr);
              break t;
            }
          }
          er = lr;
        }
        xn.document && sr ? rr = hr() || parseInt(er, 10) || void 0 : rr = void 0;
        var pr = rr;
        function gr(t3, e3) {
          if (Qn.call(this, t3 ? t3.type : ""), this.relatedTarget = this.g = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = false, this.state = null, this.pointerId = 0, this.pointerType = "", this.i = null, t3) {
            var n2 = this.type = t3.type, r2 = t3.changedTouches && t3.changedTouches.length ? t3.changedTouches[0] : null;
            if (this.target = t3.target || t3.srcElement, this.g = e3, e3 = t3.relatedTarget) {
              if (cr) {
                t: {
                  try {
                    tr(e3.nodeName);
                    var i2 = true;
                    break t;
                  } catch (t4) {
                  }
                  i2 = false;
                }
                i2 || (e3 = null);
              }
            } else "mouseover" == n2 ? e3 = t3.fromElement : "mouseout" == n2 && (e3 = t3.toElement);
            this.relatedTarget = e3, r2 ? (this.clientX = void 0 !== r2.clientX ? r2.clientX : r2.pageX, this.clientY = void 0 !== r2.clientY ? r2.clientY : r2.pageY, this.screenX = r2.screenX || 0, this.screenY = r2.screenY || 0) : (this.clientX = void 0 !== t3.clientX ? t3.clientX : t3.pageX, this.clientY = void 0 !== t3.clientY ? t3.clientY : t3.pageY, this.screenX = t3.screenX || 0, this.screenY = t3.screenY || 0), this.button = t3.button, this.key = t3.key || "", this.ctrlKey = t3.ctrlKey, this.altKey = t3.altKey, this.shiftKey = t3.shiftKey, this.metaKey = t3.metaKey, this.pointerId = t3.pointerId || 0, this.pointerType = "string" == typeof t3.pointerType ? t3.pointerType : mr[t3.pointerType] || "", this.state = t3.state, this.i = t3, t3.defaultPrevented && gr.$.h.call(this);
          }
        }
        zn(gr, Qn);
        var mr = { 2: "touch", 3: "pen", 4: "mouse" };
        gr.prototype.h = function() {
          gr.$.h.call(this);
          var t3 = this.i;
          t3.preventDefault ? t3.preventDefault() : t3.returnValue = false;
        };
        var yr = "closure_listenable_" + (1e6 * Math.random() | 0), vr = 0;
        function wr(t3, e3, n2, r2, i2) {
          this.listener = t3, this.proxy = null, this.src = e3, this.type = n2, this.capture = !!r2, this.la = i2, this.key = ++vr, this.fa = this.ia = false;
        }
        function br(t3) {
          t3.fa = true, t3.listener = null, t3.proxy = null, t3.src = null, t3.la = null;
        }
        function _r(t3, e3, n2) {
          for (const r2 in t3) e3.call(n2, t3[r2], r2, t3);
        }
        function Er(t3) {
          const e3 = {};
          for (const n2 in t3) e3[n2] = t3[n2];
          return e3;
        }
        const Tr = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
        function Ir(t3, e3) {
          let n2, r2;
          for (let e4 = 1; e4 < arguments.length; e4++) {
            for (n2 in r2 = arguments[e4], r2) t3[n2] = r2[n2];
            for (let e5 = 0; e5 < Tr.length; e5++) n2 = Tr[e5], Object.prototype.hasOwnProperty.call(r2, n2) && (t3[n2] = r2[n2]);
          }
        }
        function Sr(t3) {
          this.src = t3, this.g = {}, this.h = 0;
        }
        function Ar(t3, e3) {
          var n2 = e3.type;
          if (n2 in t3.g) {
            var r2, i2 = t3.g[n2], s2 = Hn(i2, e3);
            (r2 = 0 <= s2) && Array.prototype.splice.call(i2, s2, 1), r2 && (br(e3), 0 == t3.g[n2].length && (delete t3.g[n2], t3.h--));
          }
        }
        function Cr(t3, e3, n2, r2) {
          for (var i2 = 0; i2 < t3.length; ++i2) {
            var s2 = t3[i2];
            if (!s2.fa && s2.listener == e3 && s2.capture == !!n2 && s2.la == r2) return i2;
          }
          return -1;
        }
        Sr.prototype.add = function(t3, e3, n2, r2, i2) {
          var s2 = t3.toString();
          (t3 = this.g[s2]) || (t3 = this.g[s2] = [], this.h++);
          var o2 = Cr(t3, e3, r2, i2);
          return -1 < o2 ? (e3 = t3[o2], n2 || (e3.ia = false)) : ((e3 = new wr(e3, this.src, s2, !!r2, i2)).ia = n2, t3.push(e3)), e3;
        };
        var kr = "closure_lm_" + (1e6 * Math.random() | 0), Nr = {};
        function Or(t3, e3, n2, r2, i2) {
          if (r2 && r2.once) return Rr(t3, e3, n2, r2, i2);
          if (Array.isArray(e3)) {
            for (var s2 = 0; s2 < e3.length; s2++) Or(t3, e3[s2], n2, r2, i2);
            return null;
          }
          return n2 = Vr(n2), t3 && t3[yr] ? t3.O(e3, n2, Un(r2) ? !!r2.capture : !!r2, i2) : Dr(t3, e3, n2, false, r2, i2);
        }
        function Dr(t3, e3, n2, r2, i2, s2) {
          if (!e3) throw Error("Invalid event type");
          var o2 = Un(i2) ? !!i2.capture : !!i2, a2 = Ur(t3);
          if (a2 || (t3[kr] = a2 = new Sr(t3)), (n2 = a2.add(e3, n2, r2, o2, s2)).proxy) return n2;
          if (r2 = /* @__PURE__ */ function() {
            const t4 = Mr;
            return function e4(n3) {
              return t4.call(e4.src, e4.listener, n3);
            };
          }(), n2.proxy = r2, r2.src = t3, r2.listener = n2, t3.addEventListener) Yn || (i2 = o2), void 0 === i2 && (i2 = false), t3.addEventListener(e3.toString(), r2, i2);
          else if (t3.attachEvent) t3.attachEvent(xr(e3.toString()), r2);
          else {
            if (!t3.addListener || !t3.removeListener) throw Error("addEventListener and attachEvent are unavailable.");
            t3.addListener(r2);
          }
          return n2;
        }
        function Rr(t3, e3, n2, r2, i2) {
          if (Array.isArray(e3)) {
            for (var s2 = 0; s2 < e3.length; s2++) Rr(t3, e3[s2], n2, r2, i2);
            return null;
          }
          return n2 = Vr(n2), t3 && t3[yr] ? t3.P(e3, n2, Un(r2) ? !!r2.capture : !!r2, i2) : Dr(t3, e3, n2, true, r2, i2);
        }
        function Lr(t3, e3, n2, r2, i2) {
          if (Array.isArray(e3)) for (var s2 = 0; s2 < e3.length; s2++) Lr(t3, e3[s2], n2, r2, i2);
          else r2 = Un(r2) ? !!r2.capture : !!r2, n2 = Vr(n2), t3 && t3[yr] ? (t3 = t3.i, (e3 = String(e3).toString()) in t3.g && -1 < (n2 = Cr(s2 = t3.g[e3], n2, r2, i2)) && (br(s2[n2]), Array.prototype.splice.call(s2, n2, 1), 0 == s2.length && (delete t3.g[e3], t3.h--))) : t3 && (t3 = Ur(t3)) && (e3 = t3.g[e3.toString()], t3 = -1, e3 && (t3 = Cr(e3, n2, r2, i2)), (n2 = -1 < t3 ? e3[t3] : null) && Pr(n2));
        }
        function Pr(t3) {
          if ("number" != typeof t3 && t3 && !t3.fa) {
            var e3 = t3.src;
            if (e3 && e3[yr]) Ar(e3.i, t3);
            else {
              var n2 = t3.type, r2 = t3.proxy;
              e3.removeEventListener ? e3.removeEventListener(n2, r2, t3.capture) : e3.detachEvent ? e3.detachEvent(xr(n2), r2) : e3.addListener && e3.removeListener && e3.removeListener(r2), (n2 = Ur(e3)) ? (Ar(n2, t3), 0 == n2.h && (n2.src = null, e3[kr] = null)) : br(t3);
            }
          }
        }
        function xr(t3) {
          return t3 in Nr ? Nr[t3] : Nr[t3] = "on" + t3;
        }
        function Mr(t3, e3) {
          if (t3.fa) t3 = true;
          else {
            e3 = new gr(e3, this);
            var n2 = t3.listener, r2 = t3.la || t3.src;
            t3.ia && Pr(t3), t3 = n2.call(r2, e3);
          }
          return t3;
        }
        function Ur(t3) {
          return (t3 = t3[kr]) instanceof Sr ? t3 : null;
        }
        var Fr = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
        function Vr(t3) {
          return "function" == typeof t3 ? t3 : (t3[Fr] || (t3[Fr] = function(e3) {
            return t3.handleEvent(e3);
          }), t3[Fr]);
        }
        function jr() {
          Kn.call(this), this.i = new Sr(this), this.S = this, this.J = null;
        }
        function qr(t3, e3) {
          var n2, r2 = t3.J;
          if (r2) for (n2 = []; r2; r2 = r2.J) n2.push(r2);
          if (t3 = t3.S, r2 = e3.type || e3, "string" == typeof e3) e3 = new Qn(e3, t3);
          else if (e3 instanceof Qn) e3.target = e3.target || t3;
          else {
            var i2 = e3;
            Ir(e3 = new Qn(r2, t3), i2);
          }
          if (i2 = true, n2) for (var s2 = n2.length - 1; 0 <= s2; s2--) {
            var o2 = e3.g = n2[s2];
            i2 = Br(o2, r2, true, e3) && i2;
          }
          if (i2 = Br(o2 = e3.g = t3, r2, true, e3) && i2, i2 = Br(o2, r2, false, e3) && i2, n2) for (s2 = 0; s2 < n2.length; s2++) i2 = Br(o2 = e3.g = n2[s2], r2, false, e3) && i2;
        }
        function Br(t3, e3, n2, r2) {
          if (!(e3 = t3.i.g[String(e3)])) return true;
          e3 = e3.concat();
          for (var i2 = true, s2 = 0; s2 < e3.length; ++s2) {
            var o2 = e3[s2];
            if (o2 && !o2.fa && o2.capture == n2) {
              var a2 = o2.listener, c2 = o2.la || o2.src;
              o2.ia && Ar(t3.i, o2), i2 = false !== a2.call(c2, r2) && i2;
            }
          }
          return i2 && !r2.defaultPrevented;
        }
        zn(jr, Kn), jr.prototype[yr] = true, jr.prototype.removeEventListener = function(t3, e3, n2, r2) {
          Lr(this, t3, e3, n2, r2);
        }, jr.prototype.N = function() {
          if (jr.$.N.call(this), this.i) {
            var t3, e3 = this.i;
            for (t3 in e3.g) {
              for (var n2 = e3.g[t3], r2 = 0; r2 < n2.length; r2++) br(n2[r2]);
              delete e3.g[t3], e3.h--;
            }
          }
          this.J = null;
        }, jr.prototype.O = function(t3, e3, n2, r2) {
          return this.i.add(String(t3), e3, false, n2, r2);
        }, jr.prototype.P = function(t3, e3, n2, r2) {
          return this.i.add(String(t3), e3, true, n2, r2);
        };
        var $r = xn.JSON.stringify;
        function zr() {
          var t3 = Jr;
          let e3 = null;
          return t3.g && (e3 = t3.g, t3.g = t3.g.next, t3.g || (t3.h = null), e3.next = null), e3;
        }
        var Kr = new class {
          constructor(t3, e3) {
            this.i = t3, this.j = e3, this.h = 0, this.g = null;
          }
          get() {
            let t3;
            return 0 < this.h ? (this.h--, t3 = this.g, this.g = t3.next, t3.next = null) : t3 = this.i(), t3;
          }
        }(() => new Hr(), (t3) => t3.reset());
        class Hr {
          constructor() {
            this.next = this.g = this.h = null;
          }
          set(t3, e3) {
            this.h = t3, this.g = e3, this.next = null;
          }
          reset() {
            this.next = this.g = this.h = null;
          }
        }
        function Gr(t3) {
          var e3 = 1;
          t3 = t3.split(":");
          const n2 = [];
          for (; 0 < e3 && t3.length; ) n2.push(t3.shift()), e3--;
          return t3.length && n2.push(t3.join(":")), n2;
        }
        function Wr(t3) {
          xn.setTimeout(() => {
            throw t3;
          }, 0);
        }
        let Qr, Yr = false, Jr = new class {
          constructor() {
            this.h = this.g = null;
          }
          add(t3, e3) {
            const n2 = Kr.get();
            n2.set(t3, e3), this.h ? this.h.next = n2 : this.g = n2, this.h = n2;
          }
        }(), Xr = () => {
          const t3 = xn.Promise.resolve(void 0);
          Qr = () => {
            t3.then(Zr);
          };
        };
        var Zr = () => {
          for (var t3; t3 = zr(); ) {
            try {
              t3.h.call(t3.g);
            } catch (t4) {
              Wr(t4);
            }
            var e3 = Kr;
            e3.j(t3), 100 > e3.h && (e3.h++, t3.next = e3.g, e3.g = t3);
          }
          Yr = false;
        };
        function ti(t3, e3) {
          jr.call(this), this.h = t3 || 1, this.g = e3 || xn, this.j = Bn(this.qb, this), this.l = Date.now();
        }
        function ei(t3) {
          t3.ga = false, t3.T && (t3.g.clearTimeout(t3.T), t3.T = null);
        }
        function ni(t3, e3, n2) {
          if ("function" == typeof t3) n2 && (t3 = Bn(t3, n2));
          else {
            if (!t3 || "function" != typeof t3.handleEvent) throw Error("Invalid listener argument");
            t3 = Bn(t3.handleEvent, t3);
          }
          return 2147483647 < Number(e3) ? -1 : xn.setTimeout(t3, e3 || 0);
        }
        function ri(t3) {
          t3.g = ni(() => {
            t3.g = null, t3.i && (t3.i = false, ri(t3));
          }, t3.j);
          const e3 = t3.h;
          t3.h = null, t3.m.apply(null, e3);
        }
        zn(ti, jr), (Dn = ti.prototype).ga = false, Dn.T = null, Dn.qb = function() {
          if (this.ga) {
            var t3 = Date.now() - this.l;
            0 < t3 && t3 < 0.8 * this.h ? this.T = this.g.setTimeout(this.j, this.h - t3) : (this.T && (this.g.clearTimeout(this.T), this.T = null), qr(this, "tick"), this.ga && (ei(this), this.start()));
          }
        }, Dn.start = function() {
          this.ga = true, this.T || (this.T = this.g.setTimeout(this.j, this.h), this.l = Date.now());
        }, Dn.N = function() {
          ti.$.N.call(this), ei(this), delete this.g;
        };
        class ii extends Kn {
          constructor(t3, e3) {
            super(), this.m = t3, this.j = e3, this.h = null, this.i = false, this.g = null;
          }
          l(t3) {
            this.h = arguments, this.g ? this.i = true : ri(this);
          }
          N() {
            super.N(), this.g && (xn.clearTimeout(this.g), this.g = null, this.i = false, this.h = null);
          }
        }
        function si(t3) {
          Kn.call(this), this.h = t3, this.g = {};
        }
        zn(si, Kn);
        var oi = [];
        function ai(t3, e3, n2, r2) {
          Array.isArray(n2) || (n2 && (oi[0] = n2.toString()), n2 = oi);
          for (var i2 = 0; i2 < n2.length; i2++) {
            var s2 = Or(e3, n2[i2], r2 || t3.handleEvent, false, t3.h || t3);
            if (!s2) break;
            t3.g[s2.key] = s2;
          }
        }
        function ci(t3) {
          _r(t3.g, function(t4, e3) {
            this.g.hasOwnProperty(e3) && Pr(t4);
          }, t3), t3.g = {};
        }
        function ui() {
          this.g = true;
        }
        function hi(t3, e3, n2, r2) {
          t3.info(function() {
            return "XMLHTTP TEXT (" + e3 + "): " + function(t4, e4) {
              if (!t4.g) return e4;
              if (!e4) return null;
              try {
                var n3 = JSON.parse(e4);
                if (n3) {
                  for (t4 = 0; t4 < n3.length; t4++) if (Array.isArray(n3[t4])) {
                    var r3 = n3[t4];
                    if (!(2 > r3.length)) {
                      var i2 = r3[1];
                      if (Array.isArray(i2) && !(1 > i2.length)) {
                        var s2 = i2[0];
                        if ("noop" != s2 && "stop" != s2 && "close" != s2) for (var o2 = 1; o2 < i2.length; o2++) i2[o2] = "";
                      }
                    }
                  }
                }
                return $r(n3);
              } catch (t5) {
                return e4;
              }
            }(t3, n2) + (r2 ? " " + r2 : "");
          });
        }
        si.prototype.N = function() {
          si.$.N.call(this), ci(this);
        }, si.prototype.handleEvent = function() {
          throw Error("EventHandler.handleEvent not implemented");
        }, ui.prototype.Ea = function() {
          this.g = false;
        }, ui.prototype.info = function() {
        };
        var li = {}, di = null;
        function fi() {
          return di = di || new jr();
        }
        function pi(t3) {
          Qn.call(this, li.Ta, t3);
        }
        function gi(t3) {
          const e3 = fi();
          qr(e3, new pi(e3));
        }
        function mi(t3, e3) {
          Qn.call(this, li.STAT_EVENT, t3), this.stat = e3;
        }
        function yi(t3) {
          const e3 = fi();
          qr(e3, new mi(e3, t3));
        }
        function vi(t3, e3) {
          Qn.call(this, li.Ua, t3), this.size = e3;
        }
        function wi(t3, e3) {
          if ("function" != typeof t3) throw Error("Fn must not be null and must be a function");
          return xn.setTimeout(function() {
            t3();
          }, e3);
        }
        li.Ta = "serverreachability", zn(pi, Qn), li.STAT_EVENT = "statevent", zn(mi, Qn), li.Ua = "timingevent", zn(vi, Qn);
        var bi = { NO_ERROR: 0, rb: 1, Eb: 2, Db: 3, yb: 4, Cb: 5, Fb: 6, Qa: 7, TIMEOUT: 8, Ib: 9 }, _i = { wb: "complete", Sb: "success", Ra: "error", Qa: "abort", Kb: "ready", Lb: "readystatechange", TIMEOUT: "timeout", Gb: "incrementaldata", Jb: "progress", zb: "downloadprogress", $b: "uploadprogress" };
        function Ei() {
        }
        function Ti(t3) {
          return t3.h || (t3.h = t3.i());
        }
        function Ii() {
        }
        Ei.prototype.h = null;
        var Si, Ai = { OPEN: "a", vb: "b", Ra: "c", Hb: "d" };
        function Ci() {
          Qn.call(this, "d");
        }
        function ki() {
          Qn.call(this, "c");
        }
        function Ni() {
        }
        function Oi(t3, e3, n2, r2) {
          this.l = t3, this.j = e3, this.m = n2, this.W = r2 || 1, this.U = new si(this), this.P = Ri, t3 = ar ? 125 : void 0, this.V = new ti(t3), this.I = null, this.i = false, this.s = this.A = this.v = this.L = this.G = this.Y = this.B = null, this.F = [], this.g = null, this.C = 0, this.o = this.u = null, this.ca = -1, this.J = false, this.O = 0, this.M = null, this.ba = this.K = this.aa = this.S = false, this.h = new Di();
        }
        function Di() {
          this.i = null, this.g = "", this.h = false;
        }
        zn(Ci, Qn), zn(ki, Qn), zn(Ni, Ei), Ni.prototype.g = function() {
          return new XMLHttpRequest();
        }, Ni.prototype.i = function() {
          return {};
        }, Si = new Ni();
        var Ri = 45e3, Li = {}, Pi = {};
        function xi(t3, e3, n2) {
          t3.L = 1, t3.v = ts(Qi(e3)), t3.s = n2, t3.S = true, Mi(t3, null);
        }
        function Mi(t3, e3) {
          t3.G = Date.now(), ji(t3), t3.A = Qi(t3.v);
          var n2 = t3.A, r2 = t3.W;
          Array.isArray(r2) || (r2 = [String(r2)]), fs(n2.i, "t", r2), t3.C = 0, n2 = t3.l.J, t3.h = new Di(), t3.g = lo(t3.l, n2 ? e3 : null, !t3.s), 0 < t3.O && (t3.M = new ii(Bn(t3.Pa, t3, t3.g), t3.O)), ai(t3.U, t3.g, "readystatechange", t3.nb), e3 = t3.I ? Er(t3.I) : {}, t3.s ? (t3.u || (t3.u = "POST"), e3["Content-Type"] = "application/x-www-form-urlencoded", t3.g.ha(t3.A, t3.u, t3.s, e3)) : (t3.u = "GET", t3.g.ha(t3.A, t3.u, null, e3)), gi(), function(t4, e4, n3, r3, i2, s2) {
            t4.info(function() {
              if (t4.g) if (s2) for (var o2 = "", a2 = s2.split("&"), c2 = 0; c2 < a2.length; c2++) {
                var u2 = a2[c2].split("=");
                if (1 < u2.length) {
                  var h2 = u2[0];
                  u2 = u2[1];
                  var l2 = h2.split("_");
                  o2 = 2 <= l2.length && "type" == l2[1] ? o2 + (h2 + "=") + u2 + "&" : o2 + (h2 + "=redacted&");
                }
              }
              else o2 = null;
              else o2 = s2;
              return "XMLHTTP REQ (" + r3 + ") [attempt " + i2 + "]: " + e4 + "\n" + n3 + "\n" + o2;
            });
          }(t3.j, t3.u, t3.A, t3.m, t3.W, t3.s);
        }
        function Ui(t3) {
          return !!t3.g && "GET" == t3.u && 2 != t3.L && t3.l.Ha;
        }
        function Fi(t3, e3, n2) {
          let r2, i2 = true;
          for (; !t3.J && t3.C < n2.length; ) {
            if (r2 = Vi(t3, n2), r2 == Pi) {
              4 == e3 && (t3.o = 4, yi(14), i2 = false), hi(t3.j, t3.m, null, "[Incomplete Response]");
              break;
            }
            if (r2 == Li) {
              t3.o = 4, yi(15), hi(t3.j, t3.m, n2, "[Invalid Chunk]"), i2 = false;
              break;
            }
            hi(t3.j, t3.m, r2, null), Ki(t3, r2);
          }
          Ui(t3) && r2 != Pi && r2 != Li && (t3.h.g = "", t3.C = 0), 4 != e3 || 0 != n2.length || t3.h.h || (t3.o = 1, yi(16), i2 = false), t3.i = t3.i && i2, i2 ? 0 < n2.length && !t3.ba && (t3.ba = true, (e3 = t3.l).g == t3 && e3.ca && !e3.M && (e3.l.info("Great, no buffering proxy detected. Bytes received: " + n2.length), ro(e3), e3.M = true, yi(11))) : (hi(t3.j, t3.m, n2, "[Invalid Chunked Response]"), zi(t3), $i(t3));
        }
        function Vi(t3, e3) {
          var n2 = t3.C, r2 = e3.indexOf("\n", n2);
          return -1 == r2 ? Pi : (n2 = Number(e3.substring(n2, r2)), isNaN(n2) ? Li : (r2 += 1) + n2 > e3.length ? Pi : (e3 = e3.slice(r2, r2 + n2), t3.C = r2 + n2, e3));
        }
        function ji(t3) {
          t3.Y = Date.now() + t3.P, qi(t3, t3.P);
        }
        function qi(t3, e3) {
          if (null != t3.B) throw Error("WatchDog timer not null");
          t3.B = wi(Bn(t3.lb, t3), e3);
        }
        function Bi(t3) {
          t3.B && (xn.clearTimeout(t3.B), t3.B = null);
        }
        function $i(t3) {
          0 == t3.l.H || t3.J || oo(t3.l, t3);
        }
        function zi(t3) {
          Bi(t3);
          var e3 = t3.M;
          e3 && "function" == typeof e3.sa && e3.sa(), t3.M = null, ei(t3.V), ci(t3.U), t3.g && (e3 = t3.g, t3.g = null, e3.abort(), e3.sa());
        }
        function Ki(t3, e3) {
          try {
            var n2 = t3.l;
            if (0 != n2.H && (n2.g == t3 || ws(n2.i, t3))) {
              if (!t3.K && ws(n2.i, t3) && 3 == n2.H) {
                try {
                  var r2 = n2.Ja.g.parse(e3);
                } catch (t4) {
                  r2 = null;
                }
                if (Array.isArray(r2) && 3 == r2.length) {
                  var i2 = r2;
                  if (0 == i2[0]) {
                    t: if (!n2.u) {
                      if (n2.g) {
                        if (!(n2.g.G + 3e3 < t3.G)) break t;
                        so(n2), Qs(n2);
                      }
                      no(n2), yi(18);
                    }
                  } else n2.Fa = i2[1], 0 < n2.Fa - n2.V && 37500 > i2[2] && n2.G && 0 == n2.A && !n2.v && (n2.v = wi(Bn(n2.ib, n2), 6e3));
                  if (1 >= vs(n2.i) && n2.oa) {
                    try {
                      n2.oa();
                    } catch (t4) {
                    }
                    n2.oa = void 0;
                  }
                } else co(n2, 11);
              } else if ((t3.K || n2.g == t3) && so(n2), !Jn(e3)) for (i2 = n2.Ja.g.parse(e3), e3 = 0; e3 < i2.length; e3++) {
                let u2 = i2[e3];
                if (n2.V = u2[0], u2 = u2[1], 2 == n2.H) if ("c" == u2[0]) {
                  n2.K = u2[1], n2.pa = u2[2];
                  const e4 = u2[3];
                  null != e4 && (n2.ra = e4, n2.l.info("VER=" + n2.ra));
                  const i3 = u2[4];
                  null != i3 && (n2.Ga = i3, n2.l.info("SVER=" + n2.Ga));
                  const h2 = u2[5];
                  null != h2 && "number" == typeof h2 && 0 < h2 && (r2 = 1.5 * h2, n2.L = r2, n2.l.info("backChannelRequestTimeoutMs_=" + r2)), r2 = n2;
                  const l2 = t3.g;
                  if (l2) {
                    const t4 = l2.g ? l2.g.getResponseHeader("X-Client-Wire-Protocol") : null;
                    if (t4) {
                      var s2 = r2.i;
                      s2.g || -1 == t4.indexOf("spdy") && -1 == t4.indexOf("quic") && -1 == t4.indexOf("h2") || (s2.j = s2.l, s2.g = /* @__PURE__ */ new Set(), s2.h && (bs(s2, s2.h), s2.h = null));
                    }
                    if (r2.F) {
                      const t5 = l2.g ? l2.g.getResponseHeader("X-HTTP-Session-Id") : null;
                      t5 && (r2.Da = t5, Zi(r2.I, r2.F, t5));
                    }
                  }
                  n2.H = 3, n2.h && n2.h.Ba(), n2.ca && (n2.S = Date.now() - t3.G, n2.l.info("Handshake RTT: " + n2.S + "ms"));
                  var o2 = t3;
                  if ((r2 = n2).wa = ho(r2, r2.J ? r2.pa : null, r2.Y), o2.K) {
                    _s(r2.i, o2);
                    var a2 = o2, c2 = r2.L;
                    c2 && a2.setTimeout(c2), a2.B && (Bi(a2), ji(a2)), r2.g = o2;
                  } else eo(r2);
                  0 < n2.j.length && Js(n2);
                } else "stop" != u2[0] && "close" != u2[0] || co(n2, 7);
                else 3 == n2.H && ("stop" == u2[0] || "close" == u2[0] ? "stop" == u2[0] ? co(n2, 7) : Ws(n2) : "noop" != u2[0] && n2.h && n2.h.Aa(u2), n2.A = 0);
              }
            }
            gi();
          } catch (t4) {
          }
        }
        function Hi(t3, e3) {
          if (t3.forEach && "function" == typeof t3.forEach) t3.forEach(e3, void 0);
          else if (Mn(t3) || "string" == typeof t3) Array.prototype.forEach.call(t3, e3, void 0);
          else for (var n2 = function(t4) {
            if (t4.ta && "function" == typeof t4.ta) return t4.ta();
            if (!t4.Z || "function" != typeof t4.Z) {
              if ("undefined" != typeof Map && t4 instanceof Map) return Array.from(t4.keys());
              if (!("undefined" != typeof Set && t4 instanceof Set)) {
                if (Mn(t4) || "string" == typeof t4) {
                  var e4 = [];
                  t4 = t4.length;
                  for (var n3 = 0; n3 < t4; n3++) e4.push(n3);
                  return e4;
                }
                e4 = [], n3 = 0;
                for (const r3 in t4) e4[n3++] = r3;
                return e4;
              }
            }
          }(t3), r2 = function(t4) {
            if (t4.Z && "function" == typeof t4.Z) return t4.Z();
            if ("undefined" != typeof Map && t4 instanceof Map || "undefined" != typeof Set && t4 instanceof Set) return Array.from(t4.values());
            if ("string" == typeof t4) return t4.split("");
            if (Mn(t4)) {
              for (var e4 = [], n3 = t4.length, r3 = 0; r3 < n3; r3++) e4.push(t4[r3]);
              return e4;
            }
            for (r3 in e4 = [], n3 = 0, t4) e4[n3++] = t4[r3];
            return e4;
          }(t3), i2 = r2.length, s2 = 0; s2 < i2; s2++) e3.call(void 0, r2[s2], n2 && n2[s2], t3);
        }
        (Dn = Oi.prototype).setTimeout = function(t3) {
          this.P = t3;
        }, Dn.nb = function(t3) {
          t3 = t3.target;
          const e3 = this.M;
          e3 && 3 == Bs(t3) ? e3.l() : this.Pa(t3);
        }, Dn.Pa = function(t3) {
          try {
            if (t3 == this.g) t: {
              const h2 = Bs(this.g);
              var e3 = this.g.Ia();
              if (this.g.da(), !(3 > h2) && (3 != h2 || ar || this.g && (this.h.h || this.g.ja() || $s(this.g)))) {
                this.J || 4 != h2 || 7 == e3 || gi(), Bi(this);
                var n2 = this.g.da();
                this.ca = n2;
                e: if (Ui(this)) {
                  var r2 = $s(this.g);
                  t3 = "";
                  var i2 = r2.length, s2 = 4 == Bs(this.g);
                  if (!this.h.i) {
                    if ("undefined" == typeof TextDecoder) {
                      zi(this), $i(this);
                      var o2 = "";
                      break e;
                    }
                    this.h.i = new xn.TextDecoder();
                  }
                  for (e3 = 0; e3 < i2; e3++) this.h.h = true, t3 += this.h.i.decode(r2[e3], { stream: s2 && e3 == i2 - 1 });
                  r2.splice(0, i2), this.h.g += t3, this.C = 0, o2 = this.h.g;
                } else o2 = this.g.ja();
                if (this.i = 200 == n2, function(t4, e4, n3, r3, i3, s3, o3) {
                  t4.info(function() {
                    return "XMLHTTP RESP (" + r3 + ") [ attempt " + i3 + "]: " + e4 + "\n" + n3 + "\n" + s3 + " " + o3;
                  });
                }(this.j, this.u, this.A, this.m, this.W, h2, n2), this.i) {
                  if (this.aa && !this.K) {
                    e: {
                      if (this.g) {
                        var a2, c2 = this.g;
                        if ((a2 = c2.g ? c2.g.getResponseHeader("X-HTTP-Initial-Response") : null) && !Jn(a2)) {
                          var u2 = a2;
                          break e;
                        }
                      }
                      u2 = null;
                    }
                    if (!(n2 = u2)) {
                      this.i = false, this.o = 3, yi(12), zi(this), $i(this);
                      break t;
                    }
                    hi(this.j, this.m, n2, "Initial handshake response via X-HTTP-Initial-Response"), this.K = true, Ki(this, n2);
                  }
                  this.S ? (Fi(this, h2, o2), ar && this.i && 3 == h2 && (ai(this.U, this.V, "tick", this.mb), this.V.start())) : (hi(this.j, this.m, o2, null), Ki(this, o2)), 4 == h2 && zi(this), this.i && !this.J && (4 == h2 ? oo(this.l, this) : (this.i = false, ji(this)));
                } else (function(t4) {
                  const e4 = {};
                  t4 = (t4.g && 2 <= Bs(t4) && t4.g.getAllResponseHeaders() || "").split("\r\n");
                  for (let r3 = 0; r3 < t4.length; r3++) {
                    if (Jn(t4[r3])) continue;
                    var n3 = Gr(t4[r3]);
                    const i3 = n3[0];
                    if ("string" != typeof (n3 = n3[1])) continue;
                    n3 = n3.trim();
                    const s3 = e4[i3] || [];
                    e4[i3] = s3, s3.push(n3);
                  }
                  !function(t5, e5) {
                    for (const n4 in t5) e5.call(void 0, t5[n4], n4, t5);
                  }(e4, function(t5) {
                    return t5.join(", ");
                  });
                })(this.g), 400 == n2 && 0 < o2.indexOf("Unknown SID") ? (this.o = 3, yi(12)) : (this.o = 0, yi(13)), zi(this), $i(this);
              }
            }
          } catch (t4) {
          }
        }, Dn.mb = function() {
          if (this.g) {
            var t3 = Bs(this.g), e3 = this.g.ja();
            this.C < e3.length && (Bi(this), Fi(this, t3, e3), this.i && 4 != t3 && ji(this));
          }
        }, Dn.cancel = function() {
          this.J = true, zi(this);
        }, Dn.lb = function() {
          this.B = null;
          const t3 = Date.now();
          0 <= t3 - this.Y ? (function(t4, e3) {
            t4.info(function() {
              return "TIMEOUT: " + e3;
            });
          }(this.j, this.A), 2 != this.L && (gi(), yi(17)), zi(this), this.o = 2, $i(this)) : qi(this, this.Y - t3);
        };
        var Gi = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
        function Wi(t3) {
          if (this.g = this.s = this.j = "", this.m = null, this.o = this.l = "", this.h = false, t3 instanceof Wi) {
            this.h = t3.h, Yi(this, t3.j), this.s = t3.s, this.g = t3.g, Ji(this, t3.m), this.l = t3.l;
            var e3 = t3.i, n2 = new us();
            n2.i = e3.i, e3.g && (n2.g = new Map(e3.g), n2.h = e3.h), Xi(this, n2), this.o = t3.o;
          } else t3 && (e3 = String(t3).match(Gi)) ? (this.h = false, Yi(this, e3[1] || "", true), this.s = es(e3[2] || ""), this.g = es(e3[3] || "", true), Ji(this, e3[4]), this.l = es(e3[5] || "", true), Xi(this, e3[6] || "", true), this.o = es(e3[7] || "")) : (this.h = false, this.i = new us(null, this.h));
        }
        function Qi(t3) {
          return new Wi(t3);
        }
        function Yi(t3, e3, n2) {
          t3.j = n2 ? es(e3, true) : e3, t3.j && (t3.j = t3.j.replace(/:$/, ""));
        }
        function Ji(t3, e3) {
          if (e3) {
            if (e3 = Number(e3), isNaN(e3) || 0 > e3) throw Error("Bad port number " + e3);
            t3.m = e3;
          } else t3.m = null;
        }
        function Xi(t3, e3, n2) {
          e3 instanceof us ? (t3.i = e3, function(t4, e4) {
            e4 && !t4.j && (hs(t4), t4.i = null, t4.g.forEach(function(t5, e5) {
              var n3 = e5.toLowerCase();
              e5 != n3 && (ls(this, e5), fs(this, n3, t5));
            }, t4)), t4.j = e4;
          }(t3.i, t3.h)) : (n2 || (e3 = ns(e3, as)), t3.i = new us(e3, t3.h));
        }
        function Zi(t3, e3, n2) {
          t3.i.set(e3, n2);
        }
        function ts(t3) {
          return Zi(t3, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)), t3;
        }
        function es(t3, e3) {
          return t3 ? e3 ? decodeURI(t3.replace(/%25/g, "%2525")) : decodeURIComponent(t3) : "";
        }
        function ns(t3, e3, n2) {
          return "string" == typeof t3 ? (t3 = encodeURI(t3).replace(e3, rs), n2 && (t3 = t3.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), t3) : null;
        }
        function rs(t3) {
          return "%" + ((t3 = t3.charCodeAt(0)) >> 4 & 15).toString(16) + (15 & t3).toString(16);
        }
        Wi.prototype.toString = function() {
          var t3 = [], e3 = this.j;
          e3 && t3.push(ns(e3, is, true), ":");
          var n2 = this.g;
          return (n2 || "file" == e3) && (t3.push("//"), (e3 = this.s) && t3.push(ns(e3, is, true), "@"), t3.push(encodeURIComponent(String(n2)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), null != (n2 = this.m) && t3.push(":", String(n2))), (n2 = this.l) && (this.g && "/" != n2.charAt(0) && t3.push("/"), t3.push(ns(n2, "/" == n2.charAt(0) ? os : ss, true))), (n2 = this.i.toString()) && t3.push("?", n2), (n2 = this.o) && t3.push("#", ns(n2, cs)), t3.join("");
        };
        var is = /[#\/\?@]/g, ss = /[#\?:]/g, os = /[#\?]/g, as = /[#\?@]/g, cs = /#/g;
        function us(t3, e3) {
          this.h = this.g = null, this.i = t3 || null, this.j = !!e3;
        }
        function hs(t3) {
          t3.g || (t3.g = /* @__PURE__ */ new Map(), t3.h = 0, t3.i && function(t4, e3) {
            if (t4) {
              t4 = t4.split("&");
              for (var n2 = 0; n2 < t4.length; n2++) {
                var r2 = t4[n2].indexOf("="), i2 = null;
                if (0 <= r2) {
                  var s2 = t4[n2].substring(0, r2);
                  i2 = t4[n2].substring(r2 + 1);
                } else s2 = t4[n2];
                e3(s2, i2 ? decodeURIComponent(i2.replace(/\+/g, " ")) : "");
              }
            }
          }(t3.i, function(e3, n2) {
            t3.add(decodeURIComponent(e3.replace(/\+/g, " ")), n2);
          }));
        }
        function ls(t3, e3) {
          hs(t3), e3 = ps(t3, e3), t3.g.has(e3) && (t3.i = null, t3.h -= t3.g.get(e3).length, t3.g.delete(e3));
        }
        function ds(t3, e3) {
          return hs(t3), e3 = ps(t3, e3), t3.g.has(e3);
        }
        function fs(t3, e3, n2) {
          ls(t3, e3), 0 < n2.length && (t3.i = null, t3.g.set(ps(t3, e3), Gn(n2)), t3.h += n2.length);
        }
        function ps(t3, e3) {
          return e3 = String(e3), t3.j && (e3 = e3.toLowerCase()), e3;
        }
        function gs(t3) {
          this.l = t3 || ms, t3 = xn.PerformanceNavigationTiming ? 0 < (t3 = xn.performance.getEntriesByType("navigation")).length && ("hq" == t3[0].nextHopProtocol || "h2" == t3[0].nextHopProtocol) : !!(xn.g && xn.g.Ka && xn.g.Ka() && xn.g.Ka().ec), this.j = t3 ? this.l : 1, this.g = null, 1 < this.j && (this.g = /* @__PURE__ */ new Set()), this.h = null, this.i = [];
        }
        (Dn = us.prototype).add = function(t3, e3) {
          hs(this), this.i = null, t3 = ps(this, t3);
          var n2 = this.g.get(t3);
          return n2 || this.g.set(t3, n2 = []), n2.push(e3), this.h += 1, this;
        }, Dn.forEach = function(t3, e3) {
          hs(this), this.g.forEach(function(n2, r2) {
            n2.forEach(function(n3) {
              t3.call(e3, n3, r2, this);
            }, this);
          }, this);
        }, Dn.ta = function() {
          hs(this);
          const t3 = Array.from(this.g.values()), e3 = Array.from(this.g.keys()), n2 = [];
          for (let r2 = 0; r2 < e3.length; r2++) {
            const i2 = t3[r2];
            for (let t4 = 0; t4 < i2.length; t4++) n2.push(e3[r2]);
          }
          return n2;
        }, Dn.Z = function(t3) {
          hs(this);
          let e3 = [];
          if ("string" == typeof t3) ds(this, t3) && (e3 = e3.concat(this.g.get(ps(this, t3))));
          else {
            t3 = Array.from(this.g.values());
            for (let n2 = 0; n2 < t3.length; n2++) e3 = e3.concat(t3[n2]);
          }
          return e3;
        }, Dn.set = function(t3, e3) {
          return hs(this), this.i = null, ds(this, t3 = ps(this, t3)) && (this.h -= this.g.get(t3).length), this.g.set(t3, [e3]), this.h += 1, this;
        }, Dn.get = function(t3, e3) {
          return t3 && 0 < (t3 = this.Z(t3)).length ? String(t3[0]) : e3;
        }, Dn.toString = function() {
          if (this.i) return this.i;
          if (!this.g) return "";
          const t3 = [], e3 = Array.from(this.g.keys());
          for (var n2 = 0; n2 < e3.length; n2++) {
            var r2 = e3[n2];
            const s2 = encodeURIComponent(String(r2)), o2 = this.Z(r2);
            for (r2 = 0; r2 < o2.length; r2++) {
              var i2 = s2;
              "" !== o2[r2] && (i2 += "=" + encodeURIComponent(String(o2[r2]))), t3.push(i2);
            }
          }
          return this.i = t3.join("&");
        };
        var ms = 10;
        function ys(t3) {
          return !!t3.h || !!t3.g && t3.g.size >= t3.j;
        }
        function vs(t3) {
          return t3.h ? 1 : t3.g ? t3.g.size : 0;
        }
        function ws(t3, e3) {
          return t3.h ? t3.h == e3 : !!t3.g && t3.g.has(e3);
        }
        function bs(t3, e3) {
          t3.g ? t3.g.add(e3) : t3.h = e3;
        }
        function _s(t3, e3) {
          t3.h && t3.h == e3 ? t3.h = null : t3.g && t3.g.has(e3) && t3.g.delete(e3);
        }
        function Es(t3) {
          if (null != t3.h) return t3.i.concat(t3.h.F);
          if (null != t3.g && 0 !== t3.g.size) {
            let e3 = t3.i;
            for (const n2 of t3.g.values()) e3 = e3.concat(n2.F);
            return e3;
          }
          return Gn(t3.i);
        }
        function Ts() {
          this.g = new class {
            stringify(t3) {
              return xn.JSON.stringify(t3, void 0);
            }
            parse(t3) {
              return xn.JSON.parse(t3, void 0);
            }
          }();
        }
        function Is(t3, e3, n2) {
          const r2 = n2 || "";
          try {
            Hi(t3, function(t4, n3) {
              let i2 = t4;
              Un(t4) && (i2 = $r(t4)), e3.push(r2 + n3 + "=" + encodeURIComponent(i2));
            });
          } catch (t4) {
            throw e3.push(r2 + "type=" + encodeURIComponent("_badmap")), t4;
          }
        }
        function Ss(t3, e3, n2, r2, i2) {
          try {
            e3.onload = null, e3.onerror = null, e3.onabort = null, e3.ontimeout = null, i2(r2);
          } catch (t4) {
          }
        }
        function As(t3) {
          this.l = t3.fc || null, this.j = t3.ob || false;
        }
        function Cs(t3, e3) {
          jr.call(this), this.F = t3, this.u = e3, this.m = void 0, this.readyState = ks, this.status = 0, this.responseType = this.responseText = this.response = this.statusText = "", this.onreadystatechange = null, this.v = new Headers(), this.h = null, this.C = "GET", this.B = "", this.g = false, this.A = this.j = this.l = null;
        }
        gs.prototype.cancel = function() {
          if (this.i = Es(this), this.h) this.h.cancel(), this.h = null;
          else if (this.g && 0 !== this.g.size) {
            for (const t3 of this.g.values()) t3.cancel();
            this.g.clear();
          }
        }, zn(As, Ei), As.prototype.g = function() {
          return new Cs(this.l, this.j);
        }, As.prototype.i = /* @__PURE__ */ function(t3) {
          return function() {
            return t3;
          };
        }({}), zn(Cs, jr);
        var ks = 0;
        function Ns(t3) {
          t3.j.read().then(t3.Xa.bind(t3)).catch(t3.ka.bind(t3));
        }
        function Os(t3) {
          t3.readyState = 4, t3.l = null, t3.j = null, t3.A = null, Ds(t3);
        }
        function Ds(t3) {
          t3.onreadystatechange && t3.onreadystatechange.call(t3);
        }
        (Dn = Cs.prototype).open = function(t3, e3) {
          if (this.readyState != ks) throw this.abort(), Error("Error reopening a connection");
          this.C = t3, this.B = e3, this.readyState = 1, Ds(this);
        }, Dn.send = function(t3) {
          if (1 != this.readyState) throw this.abort(), Error("need to call open() first. ");
          this.g = true;
          const e3 = { headers: this.v, method: this.C, credentials: this.m, cache: void 0 };
          t3 && (e3.body = t3), (this.F || xn).fetch(new Request(this.B, e3)).then(this.$a.bind(this), this.ka.bind(this));
        }, Dn.abort = function() {
          this.response = this.responseText = "", this.v = new Headers(), this.status = 0, this.j && this.j.cancel("Request was aborted.").catch(() => {
          }), 1 <= this.readyState && this.g && 4 != this.readyState && (this.g = false, Os(this)), this.readyState = ks;
        }, Dn.$a = function(t3) {
          if (this.g && (this.l = t3, this.h || (this.status = this.l.status, this.statusText = this.l.statusText, this.h = t3.headers, this.readyState = 2, Ds(this)), this.g && (this.readyState = 3, Ds(this), this.g))) if ("arraybuffer" === this.responseType) t3.arrayBuffer().then(this.Ya.bind(this), this.ka.bind(this));
          else if (void 0 !== xn.ReadableStream && "body" in t3) {
            if (this.j = t3.body.getReader(), this.u) {
              if (this.responseType) throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
              this.response = [];
            } else this.response = this.responseText = "", this.A = new TextDecoder();
            Ns(this);
          } else t3.text().then(this.Za.bind(this), this.ka.bind(this));
        }, Dn.Xa = function(t3) {
          if (this.g) {
            if (this.u && t3.value) this.response.push(t3.value);
            else if (!this.u) {
              var e3 = t3.value ? t3.value : new Uint8Array(0);
              (e3 = this.A.decode(e3, { stream: !t3.done })) && (this.response = this.responseText += e3);
            }
            t3.done ? Os(this) : Ds(this), 3 == this.readyState && Ns(this);
          }
        }, Dn.Za = function(t3) {
          this.g && (this.response = this.responseText = t3, Os(this));
        }, Dn.Ya = function(t3) {
          this.g && (this.response = t3, Os(this));
        }, Dn.ka = function() {
          this.g && Os(this);
        }, Dn.setRequestHeader = function(t3, e3) {
          this.v.append(t3, e3);
        }, Dn.getResponseHeader = function(t3) {
          return this.h && this.h.get(t3.toLowerCase()) || "";
        }, Dn.getAllResponseHeaders = function() {
          if (!this.h) return "";
          const t3 = [], e3 = this.h.entries();
          for (var n2 = e3.next(); !n2.done; ) n2 = n2.value, t3.push(n2[0] + ": " + n2[1]), n2 = e3.next();
          return t3.join("\r\n");
        }, Object.defineProperty(Cs.prototype, "withCredentials", { get: function() {
          return "include" === this.m;
        }, set: function(t3) {
          this.m = t3 ? "include" : "same-origin";
        } });
        var Rs = xn.JSON.parse;
        function Ls(t3) {
          jr.call(this), this.headers = /* @__PURE__ */ new Map(), this.u = t3 || null, this.h = false, this.C = this.g = null, this.I = "", this.m = 0, this.j = "", this.l = this.G = this.v = this.F = false, this.B = 0, this.A = null, this.K = Ps, this.L = this.M = false;
        }
        zn(Ls, jr);
        var Ps = "", xs = /^https?$/i, Ms = ["POST", "PUT"];
        function Us(t3, e3) {
          t3.h = false, t3.g && (t3.l = true, t3.g.abort(), t3.l = false), t3.j = e3, t3.m = 5, Fs(t3), js(t3);
        }
        function Fs(t3) {
          t3.F || (t3.F = true, qr(t3, "complete"), qr(t3, "error"));
        }
        function Vs(t3) {
          if (t3.h && void 0 !== Pn && (!t3.C[1] || 4 != Bs(t3) || 2 != t3.da())) {
            if (t3.v && 4 == Bs(t3)) ni(t3.La, 0, t3);
            else if (qr(t3, "readystatechange"), 4 == Bs(t3)) {
              t3.h = false;
              try {
                const o2 = t3.da();
                t: switch (o2) {
                  case 200:
                  case 201:
                  case 202:
                  case 204:
                  case 206:
                  case 304:
                  case 1223:
                    var e3 = true;
                    break t;
                  default:
                    e3 = false;
                }
                var n2;
                if (!(n2 = e3)) {
                  var r2;
                  if (r2 = 0 === o2) {
                    var i2 = String(t3.I).match(Gi)[1] || null;
                    !i2 && xn.self && xn.self.location && (i2 = xn.self.location.protocol.slice(0, -1)), r2 = !xs.test(i2 ? i2.toLowerCase() : "");
                  }
                  n2 = r2;
                }
                if (n2) qr(t3, "complete"), qr(t3, "success");
                else {
                  t3.m = 6;
                  try {
                    var s2 = 2 < Bs(t3) ? t3.g.statusText : "";
                  } catch (t4) {
                    s2 = "";
                  }
                  t3.j = s2 + " [" + t3.da() + "]", Fs(t3);
                }
              } finally {
                js(t3);
              }
            }
          }
        }
        function js(t3, e3) {
          if (t3.g) {
            qs(t3);
            const n2 = t3.g, r2 = t3.C[0] ? () => {
            } : null;
            t3.g = null, t3.C = null, e3 || qr(t3, "ready");
            try {
              n2.onreadystatechange = r2;
            } catch (t4) {
            }
          }
        }
        function qs(t3) {
          t3.g && t3.L && (t3.g.ontimeout = null), t3.A && (xn.clearTimeout(t3.A), t3.A = null);
        }
        function Bs(t3) {
          return t3.g ? t3.g.readyState : 0;
        }
        function $s(t3) {
          try {
            if (!t3.g) return null;
            if ("response" in t3.g) return t3.g.response;
            switch (t3.K) {
              case Ps:
              case "text":
                return t3.g.responseText;
              case "arraybuffer":
                if ("mozResponseArrayBuffer" in t3.g) return t3.g.mozResponseArrayBuffer;
            }
            return null;
          } catch (t4) {
            return null;
          }
        }
        function zs(t3) {
          let e3 = "";
          return _r(t3, function(t4, n2) {
            e3 += n2, e3 += ":", e3 += t4, e3 += "\r\n";
          }), e3;
        }
        function Ks(t3, e3, n2) {
          t: {
            for (r2 in n2) {
              var r2 = false;
              break t;
            }
            r2 = true;
          }
          r2 || (n2 = zs(n2), "string" == typeof t3 ? null != n2 && encodeURIComponent(String(n2)) : Zi(t3, e3, n2));
        }
        function Hs(t3, e3, n2) {
          return n2 && n2.internalChannelParams && n2.internalChannelParams[t3] || e3;
        }
        function Gs(t3) {
          this.Ga = 0, this.j = [], this.l = new ui(), this.pa = this.wa = this.I = this.Y = this.g = this.Da = this.F = this.na = this.o = this.U = this.s = null, this.fb = this.W = 0, this.cb = Hs("failFast", false, t3), this.G = this.v = this.u = this.m = this.h = null, this.aa = true, this.Fa = this.V = -1, this.ba = this.A = this.C = 0, this.ab = Hs("baseRetryDelayMs", 5e3, t3), this.hb = Hs("retryDelaySeedMs", 1e4, t3), this.eb = Hs("forwardChannelMaxRetries", 2, t3), this.xa = Hs("forwardChannelRequestTimeoutMs", 2e4, t3), this.va = t3 && t3.xmlHttpFactory || void 0, this.Ha = t3 && t3.dc || false, this.L = void 0, this.J = t3 && t3.supportsCrossDomainXhr || false, this.K = "", this.i = new gs(t3 && t3.concurrentRequestLimit), this.Ja = new Ts(), this.P = t3 && t3.fastHandshake || false, this.O = t3 && t3.encodeInitMessageHeaders || false, this.P && this.O && (this.O = false), this.bb = t3 && t3.bc || false, t3 && t3.Ea && this.l.Ea(), t3 && t3.forceLongPolling && (this.aa = false), this.ca = !this.P && this.aa && t3 && t3.detectBufferingProxy || false, this.qa = void 0, t3 && t3.longPollingTimeout && 0 < t3.longPollingTimeout && (this.qa = t3.longPollingTimeout), this.oa = void 0, this.S = 0, this.M = false, this.ma = this.B = null;
        }
        function Ws(t3) {
          if (Ys(t3), 3 == t3.H) {
            var e3 = t3.W++, n2 = Qi(t3.I);
            if (Zi(n2, "SID", t3.K), Zi(n2, "RID", e3), Zi(n2, "TYPE", "terminate"), Zs(t3, n2), (e3 = new Oi(t3, t3.l, e3)).L = 2, e3.v = ts(Qi(n2)), n2 = false, xn.navigator && xn.navigator.sendBeacon) try {
              n2 = xn.navigator.sendBeacon(e3.v.toString(), "");
            } catch (t4) {
            }
            !n2 && xn.Image && (new Image().src = e3.v, n2 = true), n2 || (e3.g = lo(e3.l, null), e3.g.ha(e3.v)), e3.G = Date.now(), ji(e3);
          }
          uo(t3);
        }
        function Qs(t3) {
          t3.g && (ro(t3), t3.g.cancel(), t3.g = null);
        }
        function Ys(t3) {
          Qs(t3), t3.u && (xn.clearTimeout(t3.u), t3.u = null), so(t3), t3.i.cancel(), t3.m && ("number" == typeof t3.m && xn.clearTimeout(t3.m), t3.m = null);
        }
        function Js(t3) {
          if (!ys(t3.i) && !t3.m) {
            t3.m = true;
            var e3 = t3.Na;
            Qr || Xr(), Yr || (Qr(), Yr = true), Jr.add(e3, t3), t3.C = 0;
          }
        }
        function Xs(t3, e3) {
          var n2;
          n2 = e3 ? e3.m : t3.W++;
          const r2 = Qi(t3.I);
          Zi(r2, "SID", t3.K), Zi(r2, "RID", n2), Zi(r2, "AID", t3.V), Zs(t3, r2), t3.o && t3.s && Ks(r2, t3.o, t3.s), n2 = new Oi(t3, t3.l, n2, t3.C + 1), null === t3.o && (n2.I = t3.s), e3 && (t3.j = e3.F.concat(t3.j)), e3 = to(t3, n2, 1e3), n2.setTimeout(Math.round(0.5 * t3.xa) + Math.round(0.5 * t3.xa * Math.random())), bs(t3.i, n2), xi(n2, r2, e3);
        }
        function Zs(t3, e3) {
          t3.na && _r(t3.na, function(t4, n2) {
            Zi(e3, n2, t4);
          }), t3.h && Hi({}, function(t4, n2) {
            Zi(e3, n2, t4);
          });
        }
        function to(t3, e3, n2) {
          n2 = Math.min(t3.j.length, n2);
          var r2 = t3.h ? Bn(t3.h.Va, t3.h, t3) : null;
          t: {
            var i2 = t3.j;
            let e4 = -1;
            for (; ; ) {
              const t4 = ["count=" + n2];
              -1 == e4 ? 0 < n2 ? (e4 = i2[0].g, t4.push("ofs=" + e4)) : e4 = 0 : t4.push("ofs=" + e4);
              let s2 = true;
              for (let o2 = 0; o2 < n2; o2++) {
                let n3 = i2[o2].g;
                const a2 = i2[o2].map;
                if (n3 -= e4, 0 > n3) e4 = Math.max(0, i2[o2].g - 100), s2 = false;
                else try {
                  Is(a2, t4, "req" + n3 + "_");
                } catch (t5) {
                  r2 && r2(a2);
                }
              }
              if (s2) {
                r2 = t4.join("&");
                break t;
              }
            }
          }
          return t3 = t3.j.splice(0, n2), e3.F = t3, r2;
        }
        function eo(t3) {
          if (!t3.g && !t3.u) {
            t3.ba = 1;
            var e3 = t3.Ma;
            Qr || Xr(), Yr || (Qr(), Yr = true), Jr.add(e3, t3), t3.A = 0;
          }
        }
        function no(t3) {
          return !(t3.g || t3.u || 3 <= t3.A || (t3.ba++, t3.u = wi(Bn(t3.Ma, t3), ao(t3, t3.A)), t3.A++, 0));
        }
        function ro(t3) {
          null != t3.B && (xn.clearTimeout(t3.B), t3.B = null);
        }
        function io(t3) {
          t3.g = new Oi(t3, t3.l, "rpc", t3.ba), null === t3.o && (t3.g.I = t3.s), t3.g.O = 0;
          var e3 = Qi(t3.wa);
          Zi(e3, "RID", "rpc"), Zi(e3, "SID", t3.K), Zi(e3, "AID", t3.V), Zi(e3, "CI", t3.G ? "0" : "1"), !t3.G && t3.qa && Zi(e3, "TO", t3.qa), Zi(e3, "TYPE", "xmlhttp"), Zs(t3, e3), t3.o && t3.s && Ks(e3, t3.o, t3.s), t3.L && t3.g.setTimeout(t3.L);
          var n2 = t3.g;
          t3 = t3.pa, n2.L = 1, n2.v = ts(Qi(e3)), n2.s = null, n2.S = true, Mi(n2, t3);
        }
        function so(t3) {
          null != t3.v && (xn.clearTimeout(t3.v), t3.v = null);
        }
        function oo(t3, e3) {
          var n2 = null;
          if (t3.g == e3) {
            so(t3), ro(t3), t3.g = null;
            var r2 = 2;
          } else {
            if (!ws(t3.i, e3)) return;
            n2 = e3.F, _s(t3.i, e3), r2 = 1;
          }
          if (0 != t3.H) {
            if (e3.i) if (1 == r2) {
              n2 = e3.s ? e3.s.length : 0, e3 = Date.now() - e3.G;
              var i2 = t3.C;
              qr(r2 = fi(), new vi(r2, n2)), Js(t3);
            } else eo(t3);
            else if (3 == (i2 = e3.o) || 0 == i2 && 0 < e3.ca || !(1 == r2 && function(t4, e4) {
              return !(vs(t4.i) >= t4.i.j - (t4.m ? 1 : 0) || (t4.m ? (t4.j = e4.F.concat(t4.j), 0) : 1 == t4.H || 2 == t4.H || t4.C >= (t4.cb ? 0 : t4.eb) || (t4.m = wi(Bn(t4.Na, t4, e4), ao(t4, t4.C)), t4.C++, 0)));
            }(t3, e3) || 2 == r2 && no(t3))) switch (n2 && 0 < n2.length && (e3 = t3.i, e3.i = e3.i.concat(n2)), i2) {
              case 1:
                co(t3, 5);
                break;
              case 4:
                co(t3, 10);
                break;
              case 3:
                co(t3, 6);
                break;
              default:
                co(t3, 2);
            }
          }
        }
        function ao(t3, e3) {
          let n2 = t3.ab + Math.floor(Math.random() * t3.hb);
          return t3.isActive() || (n2 *= 2), n2 * e3;
        }
        function co(t3, e3) {
          if (t3.l.info("Error code " + e3), 2 == e3) {
            var n2 = null;
            t3.h && (n2 = null);
            var r2 = Bn(t3.pb, t3);
            n2 || (n2 = new Wi("//www.google.com/images/cleardot.gif"), xn.location && "http" == xn.location.protocol || Yi(n2, "https"), ts(n2)), function(t4, e4) {
              const n3 = new ui();
              if (xn.Image) {
                const r3 = new Image();
                r3.onload = $n(Ss, n3, r3, "TestLoadImage: loaded", true, e4), r3.onerror = $n(Ss, n3, r3, "TestLoadImage: error", false, e4), r3.onabort = $n(Ss, n3, r3, "TestLoadImage: abort", false, e4), r3.ontimeout = $n(Ss, n3, r3, "TestLoadImage: timeout", false, e4), xn.setTimeout(function() {
                  r3.ontimeout && r3.ontimeout();
                }, 1e4), r3.src = t4;
              } else e4(false);
            }(n2.toString(), r2);
          } else yi(2);
          t3.H = 0, t3.h && t3.h.za(e3), uo(t3), Ys(t3);
        }
        function uo(t3) {
          if (t3.H = 0, t3.ma = [], t3.h) {
            const e3 = Es(t3.i);
            0 == e3.length && 0 == t3.j.length || (Wn(t3.ma, e3), Wn(t3.ma, t3.j), t3.i.i.length = 0, Gn(t3.j), t3.j.length = 0), t3.h.ya();
          }
        }
        function ho(t3, e3, n2) {
          var r2 = n2 instanceof Wi ? Qi(n2) : new Wi(n2);
          if ("" != r2.g) e3 && (r2.g = e3 + "." + r2.g), Ji(r2, r2.m);
          else {
            var i2 = xn.location;
            r2 = i2.protocol, e3 = e3 ? e3 + "." + i2.hostname : i2.hostname, i2 = +i2.port;
            var s2 = new Wi(null);
            r2 && Yi(s2, r2), e3 && (s2.g = e3), i2 && Ji(s2, i2), n2 && (s2.l = n2), r2 = s2;
          }
          return n2 = t3.F, e3 = t3.Da, n2 && e3 && Zi(r2, n2, e3), Zi(r2, "VER", t3.ra), Zs(t3, r2), r2;
        }
        function lo(t3, e3, n2) {
          if (e3 && !t3.J) throw Error("Can't create secondary domain capable XhrIo object.");
          return (e3 = n2 && t3.Ha && !t3.va ? new Ls(new As({ ob: true })) : new Ls(t3.va)).Oa(t3.J), e3;
        }
        function fo() {
        }
        function po() {
          if (sr && !(10 <= Number(pr))) throw Error("Environmental error: no available transport.");
        }
        function go(t3, e3) {
          jr.call(this), this.g = new Gs(e3), this.l = t3, this.h = e3 && e3.messageUrlParams || null, t3 = e3 && e3.messageHeaders || null, e3 && e3.clientProtocolHeaderRequired && (t3 ? t3["X-Client-Protocol"] = "webchannel" : t3 = { "X-Client-Protocol": "webchannel" }), this.g.s = t3, t3 = e3 && e3.initMessageHeaders || null, e3 && e3.messageContentType && (t3 ? t3["X-WebChannel-Content-Type"] = e3.messageContentType : t3 = { "X-WebChannel-Content-Type": e3.messageContentType }), e3 && e3.Ca && (t3 ? t3["X-WebChannel-Client-Profile"] = e3.Ca : t3 = { "X-WebChannel-Client-Profile": e3.Ca }), this.g.U = t3, (t3 = e3 && e3.cc) && !Jn(t3) && (this.g.o = t3), this.A = e3 && e3.supportsCrossDomainXhr || false, this.v = e3 && e3.sendRawJson || false, (e3 = e3 && e3.httpSessionIdParam) && !Jn(e3) && (this.g.F = e3, null !== (t3 = this.h) && e3 in t3 && e3 in (t3 = this.h) && delete t3[e3]), this.j = new vo(this);
        }
        function mo(t3) {
          Ci.call(this), t3.__headers__ && (this.headers = t3.__headers__, this.statusCode = t3.__status__, delete t3.__headers__, delete t3.__status__);
          var e3 = t3.__sm__;
          if (e3) {
            t: {
              for (const n2 in e3) {
                t3 = n2;
                break t;
              }
              t3 = void 0;
            }
            (this.i = t3) && (t3 = this.i, e3 = null !== e3 && t3 in e3 ? e3[t3] : void 0), this.data = e3;
          } else this.data = t3;
        }
        function yo() {
          ki.call(this), this.status = 1;
        }
        function vo(t3) {
          this.g = t3;
        }
        function wo() {
          this.blockSize = -1, this.blockSize = 64, this.g = Array(4), this.m = Array(this.blockSize), this.i = this.h = 0, this.reset();
        }
        function bo(t3, e3, n2) {
          n2 || (n2 = 0);
          var r2 = Array(16);
          if ("string" == typeof e3) for (var i2 = 0; 16 > i2; ++i2) r2[i2] = e3.charCodeAt(n2++) | e3.charCodeAt(n2++) << 8 | e3.charCodeAt(n2++) << 16 | e3.charCodeAt(n2++) << 24;
          else for (i2 = 0; 16 > i2; ++i2) r2[i2] = e3[n2++] | e3[n2++] << 8 | e3[n2++] << 16 | e3[n2++] << 24;
          e3 = t3.g[0], n2 = t3.g[1], i2 = t3.g[2];
          var s2 = t3.g[3], o2 = e3 + (s2 ^ n2 & (i2 ^ s2)) + r2[0] + 3614090360 & 4294967295;
          o2 = (n2 = (i2 = (s2 = (e3 = (n2 = (i2 = (s2 = (e3 = (n2 = (i2 = (s2 = (e3 = (n2 = (i2 = (s2 = (e3 = (n2 = (i2 = (s2 = (e3 = (n2 = (i2 = (s2 = (e3 = (n2 = (i2 = (s2 = (e3 = (n2 = (i2 = (s2 = (e3 = (n2 = (i2 = (s2 = (e3 = (n2 = (i2 = (s2 = (e3 = (n2 = (i2 = (s2 = (e3 = (n2 = (i2 = (s2 = (e3 = (n2 = (i2 = (s2 = (e3 = (n2 = (i2 = (s2 = (e3 = (n2 = (i2 = (s2 = (e3 = n2 + (o2 << 7 & 4294967295 | o2 >>> 25)) + ((o2 = s2 + (i2 ^ e3 & (n2 ^ i2)) + r2[1] + 3905402710 & 4294967295) << 12 & 4294967295 | o2 >>> 20)) + ((o2 = i2 + (n2 ^ s2 & (e3 ^ n2)) + r2[2] + 606105819 & 4294967295) << 17 & 4294967295 | o2 >>> 15)) + ((o2 = n2 + (e3 ^ i2 & (s2 ^ e3)) + r2[3] + 3250441966 & 4294967295) << 22 & 4294967295 | o2 >>> 10)) + ((o2 = e3 + (s2 ^ n2 & (i2 ^ s2)) + r2[4] + 4118548399 & 4294967295) << 7 & 4294967295 | o2 >>> 25)) + ((o2 = s2 + (i2 ^ e3 & (n2 ^ i2)) + r2[5] + 1200080426 & 4294967295) << 12 & 4294967295 | o2 >>> 20)) + ((o2 = i2 + (n2 ^ s2 & (e3 ^ n2)) + r2[6] + 2821735955 & 4294967295) << 17 & 4294967295 | o2 >>> 15)) + ((o2 = n2 + (e3 ^ i2 & (s2 ^ e3)) + r2[7] + 4249261313 & 4294967295) << 22 & 4294967295 | o2 >>> 10)) + ((o2 = e3 + (s2 ^ n2 & (i2 ^ s2)) + r2[8] + 1770035416 & 4294967295) << 7 & 4294967295 | o2 >>> 25)) + ((o2 = s2 + (i2 ^ e3 & (n2 ^ i2)) + r2[9] + 2336552879 & 4294967295) << 12 & 4294967295 | o2 >>> 20)) + ((o2 = i2 + (n2 ^ s2 & (e3 ^ n2)) + r2[10] + 4294925233 & 4294967295) << 17 & 4294967295 | o2 >>> 15)) + ((o2 = n2 + (e3 ^ i2 & (s2 ^ e3)) + r2[11] + 2304563134 & 4294967295) << 22 & 4294967295 | o2 >>> 10)) + ((o2 = e3 + (s2 ^ n2 & (i2 ^ s2)) + r2[12] + 1804603682 & 4294967295) << 7 & 4294967295 | o2 >>> 25)) + ((o2 = s2 + (i2 ^ e3 & (n2 ^ i2)) + r2[13] + 4254626195 & 4294967295) << 12 & 4294967295 | o2 >>> 20)) + ((o2 = i2 + (n2 ^ s2 & (e3 ^ n2)) + r2[14] + 2792965006 & 4294967295) << 17 & 4294967295 | o2 >>> 15)) + ((o2 = n2 + (e3 ^ i2 & (s2 ^ e3)) + r2[15] + 1236535329 & 4294967295) << 22 & 4294967295 | o2 >>> 10)) + ((o2 = e3 + (i2 ^ s2 & (n2 ^ i2)) + r2[1] + 4129170786 & 4294967295) << 5 & 4294967295 | o2 >>> 27)) + ((o2 = s2 + (n2 ^ i2 & (e3 ^ n2)) + r2[6] + 3225465664 & 4294967295) << 9 & 4294967295 | o2 >>> 23)) + ((o2 = i2 + (e3 ^ n2 & (s2 ^ e3)) + r2[11] + 643717713 & 4294967295) << 14 & 4294967295 | o2 >>> 18)) + ((o2 = n2 + (s2 ^ e3 & (i2 ^ s2)) + r2[0] + 3921069994 & 4294967295) << 20 & 4294967295 | o2 >>> 12)) + ((o2 = e3 + (i2 ^ s2 & (n2 ^ i2)) + r2[5] + 3593408605 & 4294967295) << 5 & 4294967295 | o2 >>> 27)) + ((o2 = s2 + (n2 ^ i2 & (e3 ^ n2)) + r2[10] + 38016083 & 4294967295) << 9 & 4294967295 | o2 >>> 23)) + ((o2 = i2 + (e3 ^ n2 & (s2 ^ e3)) + r2[15] + 3634488961 & 4294967295) << 14 & 4294967295 | o2 >>> 18)) + ((o2 = n2 + (s2 ^ e3 & (i2 ^ s2)) + r2[4] + 3889429448 & 4294967295) << 20 & 4294967295 | o2 >>> 12)) + ((o2 = e3 + (i2 ^ s2 & (n2 ^ i2)) + r2[9] + 568446438 & 4294967295) << 5 & 4294967295 | o2 >>> 27)) + ((o2 = s2 + (n2 ^ i2 & (e3 ^ n2)) + r2[14] + 3275163606 & 4294967295) << 9 & 4294967295 | o2 >>> 23)) + ((o2 = i2 + (e3 ^ n2 & (s2 ^ e3)) + r2[3] + 4107603335 & 4294967295) << 14 & 4294967295 | o2 >>> 18)) + ((o2 = n2 + (s2 ^ e3 & (i2 ^ s2)) + r2[8] + 1163531501 & 4294967295) << 20 & 4294967295 | o2 >>> 12)) + ((o2 = e3 + (i2 ^ s2 & (n2 ^ i2)) + r2[13] + 2850285829 & 4294967295) << 5 & 4294967295 | o2 >>> 27)) + ((o2 = s2 + (n2 ^ i2 & (e3 ^ n2)) + r2[2] + 4243563512 & 4294967295) << 9 & 4294967295 | o2 >>> 23)) + ((o2 = i2 + (e3 ^ n2 & (s2 ^ e3)) + r2[7] + 1735328473 & 4294967295) << 14 & 4294967295 | o2 >>> 18)) + ((o2 = n2 + (s2 ^ e3 & (i2 ^ s2)) + r2[12] + 2368359562 & 4294967295) << 20 & 4294967295 | o2 >>> 12)) + ((o2 = e3 + (n2 ^ i2 ^ s2) + r2[5] + 4294588738 & 4294967295) << 4 & 4294967295 | o2 >>> 28)) + ((o2 = s2 + (e3 ^ n2 ^ i2) + r2[8] + 2272392833 & 4294967295) << 11 & 4294967295 | o2 >>> 21)) + ((o2 = i2 + (s2 ^ e3 ^ n2) + r2[11] + 1839030562 & 4294967295) << 16 & 4294967295 | o2 >>> 16)) + ((o2 = n2 + (i2 ^ s2 ^ e3) + r2[14] + 4259657740 & 4294967295) << 23 & 4294967295 | o2 >>> 9)) + ((o2 = e3 + (n2 ^ i2 ^ s2) + r2[1] + 2763975236 & 4294967295) << 4 & 4294967295 | o2 >>> 28)) + ((o2 = s2 + (e3 ^ n2 ^ i2) + r2[4] + 1272893353 & 4294967295) << 11 & 4294967295 | o2 >>> 21)) + ((o2 = i2 + (s2 ^ e3 ^ n2) + r2[7] + 4139469664 & 4294967295) << 16 & 4294967295 | o2 >>> 16)) + ((o2 = n2 + (i2 ^ s2 ^ e3) + r2[10] + 3200236656 & 4294967295) << 23 & 4294967295 | o2 >>> 9)) + ((o2 = e3 + (n2 ^ i2 ^ s2) + r2[13] + 681279174 & 4294967295) << 4 & 4294967295 | o2 >>> 28)) + ((o2 = s2 + (e3 ^ n2 ^ i2) + r2[0] + 3936430074 & 4294967295) << 11 & 4294967295 | o2 >>> 21)) + ((o2 = i2 + (s2 ^ e3 ^ n2) + r2[3] + 3572445317 & 4294967295) << 16 & 4294967295 | o2 >>> 16)) + ((o2 = n2 + (i2 ^ s2 ^ e3) + r2[6] + 76029189 & 4294967295) << 23 & 4294967295 | o2 >>> 9)) + ((o2 = e3 + (n2 ^ i2 ^ s2) + r2[9] + 3654602809 & 4294967295) << 4 & 4294967295 | o2 >>> 28)) + ((o2 = s2 + (e3 ^ n2 ^ i2) + r2[12] + 3873151461 & 4294967295) << 11 & 4294967295 | o2 >>> 21)) + ((o2 = i2 + (s2 ^ e3 ^ n2) + r2[15] + 530742520 & 4294967295) << 16 & 4294967295 | o2 >>> 16)) + ((o2 = n2 + (i2 ^ s2 ^ e3) + r2[2] + 3299628645 & 4294967295) << 23 & 4294967295 | o2 >>> 9)) + ((o2 = e3 + (i2 ^ (n2 | ~s2)) + r2[0] + 4096336452 & 4294967295) << 6 & 4294967295 | o2 >>> 26)) + ((o2 = s2 + (n2 ^ (e3 | ~i2)) + r2[7] + 1126891415 & 4294967295) << 10 & 4294967295 | o2 >>> 22)) + ((o2 = i2 + (e3 ^ (s2 | ~n2)) + r2[14] + 2878612391 & 4294967295) << 15 & 4294967295 | o2 >>> 17)) + ((o2 = n2 + (s2 ^ (i2 | ~e3)) + r2[5] + 4237533241 & 4294967295) << 21 & 4294967295 | o2 >>> 11)) + ((o2 = e3 + (i2 ^ (n2 | ~s2)) + r2[12] + 1700485571 & 4294967295) << 6 & 4294967295 | o2 >>> 26)) + ((o2 = s2 + (n2 ^ (e3 | ~i2)) + r2[3] + 2399980690 & 4294967295) << 10 & 4294967295 | o2 >>> 22)) + ((o2 = i2 + (e3 ^ (s2 | ~n2)) + r2[10] + 4293915773 & 4294967295) << 15 & 4294967295 | o2 >>> 17)) + ((o2 = n2 + (s2 ^ (i2 | ~e3)) + r2[1] + 2240044497 & 4294967295) << 21 & 4294967295 | o2 >>> 11)) + ((o2 = e3 + (i2 ^ (n2 | ~s2)) + r2[8] + 1873313359 & 4294967295) << 6 & 4294967295 | o2 >>> 26)) + ((o2 = s2 + (n2 ^ (e3 | ~i2)) + r2[15] + 4264355552 & 4294967295) << 10 & 4294967295 | o2 >>> 22)) + ((o2 = i2 + (e3 ^ (s2 | ~n2)) + r2[6] + 2734768916 & 4294967295) << 15 & 4294967295 | o2 >>> 17)) + ((o2 = n2 + (s2 ^ (i2 | ~e3)) + r2[13] + 1309151649 & 4294967295) << 21 & 4294967295 | o2 >>> 11)) + ((s2 = (e3 = n2 + ((o2 = e3 + (i2 ^ (n2 | ~s2)) + r2[4] + 4149444226 & 4294967295) << 6 & 4294967295 | o2 >>> 26)) + ((o2 = s2 + (n2 ^ (e3 | ~i2)) + r2[11] + 3174756917 & 4294967295) << 10 & 4294967295 | o2 >>> 22)) ^ ((i2 = s2 + ((o2 = i2 + (e3 ^ (s2 | ~n2)) + r2[2] + 718787259 & 4294967295) << 15 & 4294967295 | o2 >>> 17)) | ~e3)) + r2[9] + 3951481745 & 4294967295, t3.g[0] = t3.g[0] + e3 & 4294967295, t3.g[1] = t3.g[1] + (i2 + (o2 << 21 & 4294967295 | o2 >>> 11)) & 4294967295, t3.g[2] = t3.g[2] + i2 & 4294967295, t3.g[3] = t3.g[3] + s2 & 4294967295;
        }
        function _o(t3, e3) {
          this.h = e3;
          for (var n2 = [], r2 = true, i2 = t3.length - 1; 0 <= i2; i2--) {
            var s2 = 0 | t3[i2];
            r2 && s2 == e3 || (n2[i2] = s2, r2 = false);
          }
          this.g = n2;
        }
        (Dn = Ls.prototype).Oa = function(t3) {
          this.M = t3;
        }, Dn.ha = function(t3, e3, n2, r2) {
          if (this.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.I + "; newUri=" + t3);
          e3 = e3 ? e3.toUpperCase() : "GET", this.I = t3, this.j = "", this.m = 0, this.F = false, this.h = true, this.g = this.u ? this.u.g() : Si.g(), this.C = this.u ? Ti(this.u) : Ti(Si), this.g.onreadystatechange = Bn(this.La, this);
          try {
            this.G = true, this.g.open(e3, String(t3), true), this.G = false;
          } catch (t4) {
            return void Us(this, t4);
          }
          if (t3 = n2 || "", n2 = new Map(this.headers), r2) if (Object.getPrototypeOf(r2) === Object.prototype) for (var i2 in r2) n2.set(i2, r2[i2]);
          else {
            if ("function" != typeof r2.keys || "function" != typeof r2.get) throw Error("Unknown input type for opt_headers: " + String(r2));
            for (const t4 of r2.keys()) n2.set(t4, r2.get(t4));
          }
          r2 = Array.from(n2.keys()).find((t4) => "content-type" == t4.toLowerCase()), i2 = xn.FormData && t3 instanceof xn.FormData, !(0 <= Hn(Ms, e3)) || r2 || i2 || n2.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
          for (const [t4, e4] of n2) this.g.setRequestHeader(t4, e4);
          this.K && (this.g.responseType = this.K), "withCredentials" in this.g && this.g.withCredentials !== this.M && (this.g.withCredentials = this.M);
          try {
            qs(this), 0 < this.B && ((this.L = function(t4) {
              return sr && "number" == typeof t4.timeout && void 0 !== t4.ontimeout;
            }(this.g)) ? (this.g.timeout = this.B, this.g.ontimeout = Bn(this.ua, this)) : this.A = ni(this.ua, this.B, this)), this.v = true, this.g.send(t3), this.v = false;
          } catch (t4) {
            Us(this, t4);
          }
        }, Dn.ua = function() {
          void 0 !== Pn && this.g && (this.j = "Timed out after " + this.B + "ms, aborting", this.m = 8, qr(this, "timeout"), this.abort(8));
        }, Dn.abort = function(t3) {
          this.g && this.h && (this.h = false, this.l = true, this.g.abort(), this.l = false, this.m = t3 || 7, qr(this, "complete"), qr(this, "abort"), js(this));
        }, Dn.N = function() {
          this.g && (this.h && (this.h = false, this.l = true, this.g.abort(), this.l = false), js(this, true)), Ls.$.N.call(this);
        }, Dn.La = function() {
          this.s || (this.G || this.v || this.l ? Vs(this) : this.kb());
        }, Dn.kb = function() {
          Vs(this);
        }, Dn.isActive = function() {
          return !!this.g;
        }, Dn.da = function() {
          try {
            return 2 < Bs(this) ? this.g.status : -1;
          } catch (t3) {
            return -1;
          }
        }, Dn.ja = function() {
          try {
            return this.g ? this.g.responseText : "";
          } catch (t3) {
            return "";
          }
        }, Dn.Wa = function(t3) {
          if (this.g) {
            var e3 = this.g.responseText;
            return t3 && 0 == e3.indexOf(t3) && (e3 = e3.substring(t3.length)), Rs(e3);
          }
        }, Dn.Ia = function() {
          return this.m;
        }, Dn.Sa = function() {
          return "string" == typeof this.j ? this.j : String(this.j);
        }, (Dn = Gs.prototype).ra = 8, Dn.H = 1, Dn.Na = function(t3) {
          if (this.m) if (this.m = null, 1 == this.H) {
            if (!t3) {
              this.W = Math.floor(1e5 * Math.random()), t3 = this.W++;
              const i2 = new Oi(this, this.l, t3);
              let s2 = this.s;
              if (this.U && (s2 ? (s2 = Er(s2), Ir(s2, this.U)) : s2 = this.U), null !== this.o || this.O || (i2.I = s2, s2 = null), this.P) t: {
                for (var e3 = 0, n2 = 0; n2 < this.j.length; n2++) {
                  var r2 = this.j[n2];
                  if (void 0 === (r2 = "__data__" in r2.map && "string" == typeof (r2 = r2.map.__data__) ? r2.length : void 0)) break;
                  if (4096 < (e3 += r2)) {
                    e3 = n2;
                    break t;
                  }
                  if (4096 === e3 || n2 === this.j.length - 1) {
                    e3 = n2 + 1;
                    break t;
                  }
                }
                e3 = 1e3;
              }
              else e3 = 1e3;
              e3 = to(this, i2, e3), Zi(n2 = Qi(this.I), "RID", t3), Zi(n2, "CVER", 22), this.F && Zi(n2, "X-HTTP-Session-Id", this.F), Zs(this, n2), s2 && (this.O ? e3 = "headers=" + encodeURIComponent(String(zs(s2))) + "&" + e3 : this.o && Ks(n2, this.o, s2)), bs(this.i, i2), this.bb && Zi(n2, "TYPE", "init"), this.P ? (Zi(n2, "$req", e3), Zi(n2, "SID", "null"), i2.aa = true, xi(i2, n2, null)) : xi(i2, n2, e3), this.H = 2;
            }
          } else 3 == this.H && (t3 ? Xs(this, t3) : 0 == this.j.length || ys(this.i) || Xs(this));
        }, Dn.Ma = function() {
          if (this.u = null, io(this), this.ca && !(this.M || null == this.g || 0 >= this.S)) {
            var t3 = 2 * this.S;
            this.l.info("BP detection timer enabled: " + t3), this.B = wi(Bn(this.jb, this), t3);
          }
        }, Dn.jb = function() {
          this.B && (this.B = null, this.l.info("BP detection timeout reached."), this.l.info("Buffering proxy detected and switch to long-polling!"), this.G = false, this.M = true, yi(10), Qs(this), io(this));
        }, Dn.ib = function() {
          null != this.v && (this.v = null, Qs(this), no(this), yi(19));
        }, Dn.pb = function(t3) {
          t3 ? (this.l.info("Successfully pinged google.com"), yi(2)) : (this.l.info("Failed to ping google.com"), yi(1));
        }, Dn.isActive = function() {
          return !!this.h && this.h.isActive(this);
        }, (Dn = fo.prototype).Ba = function() {
        }, Dn.Aa = function() {
        }, Dn.za = function() {
        }, Dn.ya = function() {
        }, Dn.isActive = function() {
          return true;
        }, Dn.Va = function() {
        }, po.prototype.g = function(t3, e3) {
          return new go(t3, e3);
        }, zn(go, jr), go.prototype.m = function() {
          this.g.h = this.j, this.A && (this.g.J = true);
          var t3 = this.g, e3 = this.l, n2 = this.h || void 0;
          yi(0), t3.Y = e3, t3.na = n2 || {}, t3.G = t3.aa, t3.I = ho(t3, null, t3.Y), Js(t3);
        }, go.prototype.close = function() {
          Ws(this.g);
        }, go.prototype.u = function(t3) {
          var e3 = this.g;
          if ("string" == typeof t3) {
            var n2 = {};
            n2.__data__ = t3, t3 = n2;
          } else this.v && ((n2 = {}).__data__ = $r(t3), t3 = n2);
          e3.j.push(new class {
            constructor(t4, e4) {
              this.g = t4, this.map = e4;
            }
          }(e3.fb++, t3)), 3 == e3.H && Js(e3);
        }, go.prototype.N = function() {
          this.g.h = null, delete this.j, Ws(this.g), delete this.g, go.$.N.call(this);
        }, zn(mo, Ci), zn(yo, ki), zn(vo, fo), vo.prototype.Ba = function() {
          qr(this.g, "a");
        }, vo.prototype.Aa = function(t3) {
          qr(this.g, new mo(t3));
        }, vo.prototype.za = function(t3) {
          qr(this.g, new yo());
        }, vo.prototype.ya = function() {
          qr(this.g, "b");
        }, zn(wo, function() {
          this.blockSize = -1;
        }), wo.prototype.reset = function() {
          this.g[0] = 1732584193, this.g[1] = 4023233417, this.g[2] = 2562383102, this.g[3] = 271733878, this.i = this.h = 0;
        }, wo.prototype.j = function(t3, e3) {
          void 0 === e3 && (e3 = t3.length);
          for (var n2 = e3 - this.blockSize, r2 = this.m, i2 = this.h, s2 = 0; s2 < e3; ) {
            if (0 == i2) for (; s2 <= n2; ) bo(this, t3, s2), s2 += this.blockSize;
            if ("string" == typeof t3) {
              for (; s2 < e3; ) if (r2[i2++] = t3.charCodeAt(s2++), i2 == this.blockSize) {
                bo(this, r2), i2 = 0;
                break;
              }
            } else for (; s2 < e3; ) if (r2[i2++] = t3[s2++], i2 == this.blockSize) {
              bo(this, r2), i2 = 0;
              break;
            }
          }
          this.h = i2, this.i += e3;
        }, wo.prototype.l = function() {
          var t3 = Array((56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h);
          t3[0] = 128;
          for (var e3 = 1; e3 < t3.length - 8; ++e3) t3[e3] = 0;
          var n2 = 8 * this.i;
          for (e3 = t3.length - 8; e3 < t3.length; ++e3) t3[e3] = 255 & n2, n2 /= 256;
          for (this.j(t3), t3 = Array(16), e3 = n2 = 0; 4 > e3; ++e3) for (var r2 = 0; 32 > r2; r2 += 8) t3[n2++] = this.g[e3] >>> r2 & 255;
          return t3;
        };
        var Eo = {};
        function To(t3) {
          return -128 <= t3 && 128 > t3 ? function(t4, e3) {
            var n2 = Eo;
            return Object.prototype.hasOwnProperty.call(n2, t4) ? n2[t4] : n2[t4] = function(t5) {
              return new _o([0 | t5], 0 > t5 ? -1 : 0);
            }(t4);
          }(t3) : new _o([0 | t3], 0 > t3 ? -1 : 0);
        }
        function Io(t3) {
          if (isNaN(t3) || !isFinite(t3)) return Ao;
          if (0 > t3) return Do(Io(-t3));
          for (var e3 = [], n2 = 1, r2 = 0; t3 >= n2; r2++) e3[r2] = t3 / n2 | 0, n2 *= So;
          return new _o(e3, 0);
        }
        var So = 4294967296, Ao = To(0), Co = To(1), ko = To(16777216);
        function No(t3) {
          if (0 != t3.h) return false;
          for (var e3 = 0; e3 < t3.g.length; e3++) if (0 != t3.g[e3]) return false;
          return true;
        }
        function Oo(t3) {
          return -1 == t3.h;
        }
        function Do(t3) {
          for (var e3 = t3.g.length, n2 = [], r2 = 0; r2 < e3; r2++) n2[r2] = ~t3.g[r2];
          return new _o(n2, ~t3.h).add(Co);
        }
        function Ro(t3, e3) {
          return t3.add(Do(e3));
        }
        function Lo(t3, e3) {
          for (; (65535 & t3[e3]) != t3[e3]; ) t3[e3 + 1] += t3[e3] >>> 16, t3[e3] &= 65535, e3++;
        }
        function Po(t3, e3) {
          this.g = t3, this.h = e3;
        }
        function xo(t3, e3) {
          if (No(e3)) throw Error("division by zero");
          if (No(t3)) return new Po(Ao, Ao);
          if (Oo(t3)) return e3 = xo(Do(t3), e3), new Po(Do(e3.g), Do(e3.h));
          if (Oo(e3)) return e3 = xo(t3, Do(e3)), new Po(Do(e3.g), e3.h);
          if (30 < t3.g.length) {
            if (Oo(t3) || Oo(e3)) throw Error("slowDivide_ only works with positive integers.");
            for (var n2 = Co, r2 = e3; 0 >= r2.X(t3); ) n2 = Mo(n2), r2 = Mo(r2);
            var i2 = Uo(n2, 1), s2 = Uo(r2, 1);
            for (r2 = Uo(r2, 2), n2 = Uo(n2, 2); !No(r2); ) {
              var o2 = s2.add(r2);
              0 >= o2.X(t3) && (i2 = i2.add(n2), s2 = o2), r2 = Uo(r2, 1), n2 = Uo(n2, 1);
            }
            return e3 = Ro(t3, i2.R(e3)), new Po(i2, e3);
          }
          for (i2 = Ao; 0 <= t3.X(e3); ) {
            for (n2 = Math.max(1, Math.floor(t3.ea() / e3.ea())), r2 = 48 >= (r2 = Math.ceil(Math.log(n2) / Math.LN2)) ? 1 : Math.pow(2, r2 - 48), o2 = (s2 = Io(n2)).R(e3); Oo(o2) || 0 < o2.X(t3); ) o2 = (s2 = Io(n2 -= r2)).R(e3);
            No(s2) && (s2 = Co), i2 = i2.add(s2), t3 = Ro(t3, o2);
          }
          return new Po(i2, t3);
        }
        function Mo(t3) {
          for (var e3 = t3.g.length + 1, n2 = [], r2 = 0; r2 < e3; r2++) n2[r2] = t3.D(r2) << 1 | t3.D(r2 - 1) >>> 31;
          return new _o(n2, t3.h);
        }
        function Uo(t3, e3) {
          var n2 = e3 >> 5;
          e3 %= 32;
          for (var r2 = t3.g.length - n2, i2 = [], s2 = 0; s2 < r2; s2++) i2[s2] = 0 < e3 ? t3.D(s2 + n2) >>> e3 | t3.D(s2 + n2 + 1) << 32 - e3 : t3.D(s2 + n2);
          return new _o(i2, t3.h);
        }
        (Dn = _o.prototype).ea = function() {
          if (Oo(this)) return -Do(this).ea();
          for (var t3 = 0, e3 = 1, n2 = 0; n2 < this.g.length; n2++) {
            var r2 = this.D(n2);
            t3 += (0 <= r2 ? r2 : So + r2) * e3, e3 *= So;
          }
          return t3;
        }, Dn.toString = function(t3) {
          if (2 > (t3 = t3 || 10) || 36 < t3) throw Error("radix out of range: " + t3);
          if (No(this)) return "0";
          if (Oo(this)) return "-" + Do(this).toString(t3);
          for (var e3 = Io(Math.pow(t3, 6)), n2 = this, r2 = ""; ; ) {
            var i2 = xo(n2, e3).g, s2 = ((0 < (n2 = Ro(n2, i2.R(e3))).g.length ? n2.g[0] : n2.h) >>> 0).toString(t3);
            if (No(n2 = i2)) return s2 + r2;
            for (; 6 > s2.length; ) s2 = "0" + s2;
            r2 = s2 + r2;
          }
        }, Dn.D = function(t3) {
          return 0 > t3 ? 0 : t3 < this.g.length ? this.g[t3] : this.h;
        }, Dn.X = function(t3) {
          return Oo(t3 = Ro(this, t3)) ? -1 : No(t3) ? 0 : 1;
        }, Dn.abs = function() {
          return Oo(this) ? Do(this) : this;
        }, Dn.add = function(t3) {
          for (var e3 = Math.max(this.g.length, t3.g.length), n2 = [], r2 = 0, i2 = 0; i2 <= e3; i2++) {
            var s2 = r2 + (65535 & this.D(i2)) + (65535 & t3.D(i2)), o2 = (s2 >>> 16) + (this.D(i2) >>> 16) + (t3.D(i2) >>> 16);
            r2 = o2 >>> 16, s2 &= 65535, o2 &= 65535, n2[i2] = o2 << 16 | s2;
          }
          return new _o(n2, -2147483648 & n2[n2.length - 1] ? -1 : 0);
        }, Dn.R = function(t3) {
          if (No(this) || No(t3)) return Ao;
          if (Oo(this)) return Oo(t3) ? Do(this).R(Do(t3)) : Do(Do(this).R(t3));
          if (Oo(t3)) return Do(this.R(Do(t3)));
          if (0 > this.X(ko) && 0 > t3.X(ko)) return Io(this.ea() * t3.ea());
          for (var e3 = this.g.length + t3.g.length, n2 = [], r2 = 0; r2 < 2 * e3; r2++) n2[r2] = 0;
          for (r2 = 0; r2 < this.g.length; r2++) for (var i2 = 0; i2 < t3.g.length; i2++) {
            var s2 = this.D(r2) >>> 16, o2 = 65535 & this.D(r2), a2 = t3.D(i2) >>> 16, c2 = 65535 & t3.D(i2);
            n2[2 * r2 + 2 * i2] += o2 * c2, Lo(n2, 2 * r2 + 2 * i2), n2[2 * r2 + 2 * i2 + 1] += s2 * c2, Lo(n2, 2 * r2 + 2 * i2 + 1), n2[2 * r2 + 2 * i2 + 1] += o2 * a2, Lo(n2, 2 * r2 + 2 * i2 + 1), n2[2 * r2 + 2 * i2 + 2] += s2 * a2, Lo(n2, 2 * r2 + 2 * i2 + 2);
          }
          for (r2 = 0; r2 < e3; r2++) n2[r2] = n2[2 * r2 + 1] << 16 | n2[2 * r2];
          for (r2 = e3; r2 < 2 * e3; r2++) n2[r2] = 0;
          return new _o(n2, 0);
        }, Dn.gb = function(t3) {
          return xo(this, t3).h;
        }, Dn.and = function(t3) {
          for (var e3 = Math.max(this.g.length, t3.g.length), n2 = [], r2 = 0; r2 < e3; r2++) n2[r2] = this.D(r2) & t3.D(r2);
          return new _o(n2, this.h & t3.h);
        }, Dn.or = function(t3) {
          for (var e3 = Math.max(this.g.length, t3.g.length), n2 = [], r2 = 0; r2 < e3; r2++) n2[r2] = this.D(r2) | t3.D(r2);
          return new _o(n2, this.h | t3.h);
        }, Dn.xor = function(t3) {
          for (var e3 = Math.max(this.g.length, t3.g.length), n2 = [], r2 = 0; r2 < e3; r2++) n2[r2] = this.D(r2) ^ t3.D(r2);
          return new _o(n2, this.h ^ t3.h);
        }, po.prototype.createWebChannel = po.prototype.g, go.prototype.send = go.prototype.u, go.prototype.open = go.prototype.m, go.prototype.close = go.prototype.close, bi.NO_ERROR = 0, bi.TIMEOUT = 8, bi.HTTP_ERROR = 6, _i.COMPLETE = "complete", Ii.EventType = Ai, Ai.OPEN = "a", Ai.CLOSE = "b", Ai.ERROR = "c", Ai.MESSAGE = "d", jr.prototype.listen = jr.prototype.O, Ls.prototype.listenOnce = Ls.prototype.P, Ls.prototype.getLastError = Ls.prototype.Sa, Ls.prototype.getLastErrorCode = Ls.prototype.Ia, Ls.prototype.getStatus = Ls.prototype.da, Ls.prototype.getResponseJson = Ls.prototype.Wa, Ls.prototype.getResponseText = Ls.prototype.ja, Ls.prototype.send = Ls.prototype.ha, Ls.prototype.setWithCredentials = Ls.prototype.Oa, wo.prototype.digest = wo.prototype.l, wo.prototype.reset = wo.prototype.reset, wo.prototype.update = wo.prototype.j, _o.prototype.add = _o.prototype.add, _o.prototype.multiply = _o.prototype.R, _o.prototype.modulo = _o.prototype.gb, _o.prototype.compare = _o.prototype.X, _o.prototype.toNumber = _o.prototype.ea, _o.prototype.toString = _o.prototype.toString, _o.prototype.getBits = _o.prototype.D, _o.fromNumber = Io, _o.fromString = function t3(e3, n2) {
          if (0 == e3.length) throw Error("number format error: empty string");
          if (2 > (n2 = n2 || 10) || 36 < n2) throw Error("radix out of range: " + n2);
          if ("-" == e3.charAt(0)) return Do(t3(e3.substring(1), n2));
          if (0 <= e3.indexOf("-")) throw Error('number format error: interior "-" character');
          for (var r2 = Io(Math.pow(n2, 8)), i2 = Ao, s2 = 0; s2 < e3.length; s2 += 8) {
            var o2 = Math.min(8, e3.length - s2), a2 = parseInt(e3.substring(s2, s2 + o2), n2);
            8 > o2 ? (o2 = Io(Math.pow(n2, o2)), i2 = i2.R(o2).add(Io(a2))) : i2 = (i2 = i2.R(r2)).add(Io(a2));
          }
          return i2;
        };
        var Fo = Ln.createWebChannelTransport = function() {
          return new po();
        }, Vo = Ln.getStatEventTarget = function() {
          return fi();
        }, jo = Ln.ErrorCode = bi, qo = Ln.EventType = _i, Bo = Ln.Event = li, $o = Ln.Stat = { xb: 0, Ab: 1, Bb: 2, Ub: 3, Zb: 4, Wb: 5, Xb: 6, Vb: 7, Tb: 8, Yb: 9, PROXY: 10, NOPROXY: 11, Rb: 12, Nb: 13, Ob: 14, Mb: 15, Pb: 16, Qb: 17, tb: 18, sb: 19, ub: 20 }, zo = Ln.FetchXmlHttpFactory = As, Ko = Ln.WebChannel = Ii, Ho = Ln.XhrIo = Ls, Go = Ln.Md5 = wo, Wo = Ln.Integer = _o;
        const Qo = "@firebase/firestore";
        class Yo {
          constructor(t3) {
            this.uid = t3;
          }
          isAuthenticated() {
            return null != this.uid;
          }
          toKey() {
            return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
          }
          isEqual(t3) {
            return t3.uid === this.uid;
          }
        }
        Yo.UNAUTHENTICATED = new Yo(null), Yo.GOOGLE_CREDENTIALS = new Yo("google-credentials-uid"), Yo.FIRST_PARTY = new Yo("first-party-uid"), Yo.MOCK_USER = new Yo("mock-user");
        let Jo = "9.22.2";
        const Xo = new st("@firebase/firestore");
        function Zo() {
          return Xo.logLevel;
        }
        function ta(t3, ...e3) {
          if (Xo.logLevel <= Z.DEBUG) {
            const n2 = e3.map(ra);
            Xo.debug(`Firestore (${Jo}): ${t3}`, ...n2);
          }
        }
        function ea(t3, ...e3) {
          if (Xo.logLevel <= Z.ERROR) {
            const n2 = e3.map(ra);
            Xo.error(`Firestore (${Jo}): ${t3}`, ...n2);
          }
        }
        function na(t3, ...e3) {
          if (Xo.logLevel <= Z.WARN) {
            const n2 = e3.map(ra);
            Xo.warn(`Firestore (${Jo}): ${t3}`, ...n2);
          }
        }
        function ra(t3) {
          if ("string" == typeof t3) return t3;
          try {
            return e3 = t3, JSON.stringify(e3);
          } catch (e4) {
            return t3;
          }
          var e3;
        }
        function ia(t3 = "Unexpected state") {
          const e3 = `FIRESTORE (${Jo}) INTERNAL ASSERTION FAILED: ` + t3;
          throw ea(e3), new Error(e3);
        }
        function sa(t3, e3) {
          t3 || ia();
        }
        function oa(t3, e3) {
          return t3;
        }
        const aa = { OK: "ok", CANCELLED: "cancelled", UNKNOWN: "unknown", INVALID_ARGUMENT: "invalid-argument", DEADLINE_EXCEEDED: "deadline-exceeded", NOT_FOUND: "not-found", ALREADY_EXISTS: "already-exists", PERMISSION_DENIED: "permission-denied", UNAUTHENTICATED: "unauthenticated", RESOURCE_EXHAUSTED: "resource-exhausted", FAILED_PRECONDITION: "failed-precondition", ABORTED: "aborted", OUT_OF_RANGE: "out-of-range", UNIMPLEMENTED: "unimplemented", INTERNAL: "internal", UNAVAILABLE: "unavailable", DATA_LOSS: "data-loss" };
        class ca extends U {
          constructor(t3, e3) {
            super(t3, e3), this.code = t3, this.message = e3, this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`;
          }
        }
        class ua {
          constructor() {
            this.promise = new Promise((t3, e3) => {
              this.resolve = t3, this.reject = e3;
            });
          }
        }
        class ha {
          constructor(t3, e3) {
            this.user = e3, this.type = "OAuth", this.headers = /* @__PURE__ */ new Map(), this.headers.set("Authorization", `Bearer ${t3}`);
          }
        }
        class la {
          getToken() {
            return Promise.resolve(null);
          }
          invalidateToken() {
          }
          start(t3, e3) {
            t3.enqueueRetryable(() => e3(Yo.UNAUTHENTICATED));
          }
          shutdown() {
          }
        }
        class da {
          constructor(t3) {
            this.token = t3, this.changeListener = null;
          }
          getToken() {
            return Promise.resolve(this.token);
          }
          invalidateToken() {
          }
          start(t3, e3) {
            this.changeListener = e3, t3.enqueueRetryable(() => e3(this.token.user));
          }
          shutdown() {
            this.changeListener = null;
          }
        }
        class fa {
          constructor(t3) {
            this.t = t3, this.currentUser = Yo.UNAUTHENTICATED, this.i = 0, this.forceRefresh = false, this.auth = null;
          }
          start(t3, e3) {
            let n2 = this.i;
            const r2 = (t4) => this.i !== n2 ? (n2 = this.i, e3(t4)) : Promise.resolve();
            let i2 = new ua();
            this.o = () => {
              this.i++, this.currentUser = this.u(), i2.resolve(), i2 = new ua(), t3.enqueueRetryable(() => r2(this.currentUser));
            };
            const s2 = () => {
              const e4 = i2;
              t3.enqueueRetryable(async () => {
                await e4.promise, await r2(this.currentUser);
              });
            }, o2 = (t4) => {
              ta("FirebaseAuthCredentialsProvider", "Auth detected"), this.auth = t4, this.auth.addAuthTokenListener(this.o), s2();
            };
            this.t.onInit((t4) => o2(t4)), setTimeout(() => {
              if (!this.auth) {
                const t4 = this.t.getImmediate({ optional: true });
                t4 ? o2(t4) : (ta("FirebaseAuthCredentialsProvider", "Auth not yet detected"), i2.resolve(), i2 = new ua());
              }
            }, 0), s2();
          }
          getToken() {
            const t3 = this.i, e3 = this.forceRefresh;
            return this.forceRefresh = false, this.auth ? this.auth.getToken(e3).then((e4) => this.i !== t3 ? (ta("FirebaseAuthCredentialsProvider", "getToken aborted due to token change."), this.getToken()) : e4 ? (sa("string" == typeof e4.accessToken), new ha(e4.accessToken, this.currentUser)) : null) : Promise.resolve(null);
          }
          invalidateToken() {
            this.forceRefresh = true;
          }
          shutdown() {
            this.auth && this.auth.removeAuthTokenListener(this.o);
          }
          u() {
            const t3 = this.auth && this.auth.getUid();
            return sa(null === t3 || "string" == typeof t3), new Yo(t3);
          }
        }
        class pa {
          constructor(t3, e3, n2) {
            this.h = t3, this.l = e3, this.m = n2, this.type = "FirstParty", this.user = Yo.FIRST_PARTY, this.g = /* @__PURE__ */ new Map();
          }
          p() {
            return this.m ? this.m() : null;
          }
          get headers() {
            this.g.set("X-Goog-AuthUser", this.h);
            const t3 = this.p();
            return t3 && this.g.set("Authorization", t3), this.l && this.g.set("X-Goog-Iam-Authorization-Token", this.l), this.g;
          }
        }
        class ga {
          constructor(t3, e3, n2) {
            this.h = t3, this.l = e3, this.m = n2;
          }
          getToken() {
            return Promise.resolve(new pa(this.h, this.l, this.m));
          }
          start(t3, e3) {
            t3.enqueueRetryable(() => e3(Yo.FIRST_PARTY));
          }
          shutdown() {
          }
          invalidateToken() {
          }
        }
        class ma {
          constructor(t3) {
            this.value = t3, this.type = "AppCheck", this.headers = /* @__PURE__ */ new Map(), t3 && t3.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
          }
        }
        class ya {
          constructor(t3) {
            this.I = t3, this.forceRefresh = false, this.appCheck = null, this.T = null;
          }
          start(t3, e3) {
            const n2 = (t4) => {
              null != t4.error && ta("FirebaseAppCheckTokenProvider", `Error getting App Check token; using placeholder token instead. Error: ${t4.error.message}`);
              const n3 = t4.token !== this.T;
              return this.T = t4.token, ta("FirebaseAppCheckTokenProvider", `Received ${n3 ? "new" : "existing"} token.`), n3 ? e3(t4.token) : Promise.resolve();
            };
            this.o = (e4) => {
              t3.enqueueRetryable(() => n2(e4));
            };
            const r2 = (t4) => {
              ta("FirebaseAppCheckTokenProvider", "AppCheck detected"), this.appCheck = t4, this.appCheck.addTokenListener(this.o);
            };
            this.I.onInit((t4) => r2(t4)), setTimeout(() => {
              if (!this.appCheck) {
                const t4 = this.I.getImmediate({ optional: true });
                t4 ? r2(t4) : ta("FirebaseAppCheckTokenProvider", "AppCheck not yet detected");
              }
            }, 0);
          }
          getToken() {
            const t3 = this.forceRefresh;
            return this.forceRefresh = false, this.appCheck ? this.appCheck.getToken(t3).then((t4) => t4 ? (sa("string" == typeof t4.token), this.T = t4.token, new ma(t4.token)) : null) : Promise.resolve(null);
          }
          invalidateToken() {
            this.forceRefresh = true;
          }
          shutdown() {
            this.appCheck && this.appCheck.removeTokenListener(this.o);
          }
        }
        function va(t3) {
          const e3 = "undefined" != typeof self && (self.crypto || self.msCrypto), n2 = new Uint8Array(t3);
          if (e3 && "function" == typeof e3.getRandomValues) e3.getRandomValues(n2);
          else for (let e4 = 0; e4 < t3; e4++) n2[e4] = Math.floor(256 * Math.random());
          return n2;
        }
        function wa(t3, e3) {
          return t3 < e3 ? -1 : t3 > e3 ? 1 : 0;
        }
        function ba(t3, e3, n2) {
          return t3.length === e3.length && t3.every((t4, r2) => n2(t4, e3[r2]));
        }
        class _a {
          constructor(t3, e3) {
            if (this.seconds = t3, this.nanoseconds = e3, e3 < 0) throw new ca(aa.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e3);
            if (e3 >= 1e9) throw new ca(aa.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e3);
            if (t3 < -62135596800) throw new ca(aa.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t3);
            if (t3 >= 253402300800) throw new ca(aa.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t3);
          }
          static now() {
            return _a.fromMillis(Date.now());
          }
          static fromDate(t3) {
            return _a.fromMillis(t3.getTime());
          }
          static fromMillis(t3) {
            const e3 = Math.floor(t3 / 1e3), n2 = Math.floor(1e6 * (t3 - 1e3 * e3));
            return new _a(e3, n2);
          }
          toDate() {
            return new Date(this.toMillis());
          }
          toMillis() {
            return 1e3 * this.seconds + this.nanoseconds / 1e6;
          }
          _compareTo(t3) {
            return this.seconds === t3.seconds ? wa(this.nanoseconds, t3.nanoseconds) : wa(this.seconds, t3.seconds);
          }
          isEqual(t3) {
            return t3.seconds === this.seconds && t3.nanoseconds === this.nanoseconds;
          }
          toString() {
            return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
          }
          toJSON() {
            return { seconds: this.seconds, nanoseconds: this.nanoseconds };
          }
          valueOf() {
            const t3 = this.seconds - -62135596800;
            return String(t3).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
          }
        }
        class Ea {
          constructor(t3) {
            this.timestamp = t3;
          }
          static fromTimestamp(t3) {
            return new Ea(t3);
          }
          static min() {
            return new Ea(new _a(0, 0));
          }
          static max() {
            return new Ea(new _a(253402300799, 999999999));
          }
          compareTo(t3) {
            return this.timestamp._compareTo(t3.timestamp);
          }
          isEqual(t3) {
            return this.timestamp.isEqual(t3.timestamp);
          }
          toMicroseconds() {
            return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
          }
          toString() {
            return "SnapshotVersion(" + this.timestamp.toString() + ")";
          }
          toTimestamp() {
            return this.timestamp;
          }
        }
        class Ta {
          constructor(t3, e3, n2) {
            void 0 === e3 ? e3 = 0 : e3 > t3.length && ia(), void 0 === n2 ? n2 = t3.length - e3 : n2 > t3.length - e3 && ia(), this.segments = t3, this.offset = e3, this.len = n2;
          }
          get length() {
            return this.len;
          }
          isEqual(t3) {
            return 0 === Ta.comparator(this, t3);
          }
          child(t3) {
            const e3 = this.segments.slice(this.offset, this.limit());
            return t3 instanceof Ta ? t3.forEach((t4) => {
              e3.push(t4);
            }) : e3.push(t3), this.construct(e3);
          }
          limit() {
            return this.offset + this.length;
          }
          popFirst(t3) {
            return t3 = void 0 === t3 ? 1 : t3, this.construct(this.segments, this.offset + t3, this.length - t3);
          }
          popLast() {
            return this.construct(this.segments, this.offset, this.length - 1);
          }
          firstSegment() {
            return this.segments[this.offset];
          }
          lastSegment() {
            return this.get(this.length - 1);
          }
          get(t3) {
            return this.segments[this.offset + t3];
          }
          isEmpty() {
            return 0 === this.length;
          }
          isPrefixOf(t3) {
            if (t3.length < this.length) return false;
            for (let e3 = 0; e3 < this.length; e3++) if (this.get(e3) !== t3.get(e3)) return false;
            return true;
          }
          isImmediateParentOf(t3) {
            if (this.length + 1 !== t3.length) return false;
            for (let e3 = 0; e3 < this.length; e3++) if (this.get(e3) !== t3.get(e3)) return false;
            return true;
          }
          forEach(t3) {
            for (let e3 = this.offset, n2 = this.limit(); e3 < n2; e3++) t3(this.segments[e3]);
          }
          toArray() {
            return this.segments.slice(this.offset, this.limit());
          }
          static comparator(t3, e3) {
            const n2 = Math.min(t3.length, e3.length);
            for (let r2 = 0; r2 < n2; r2++) {
              const n3 = t3.get(r2), i2 = e3.get(r2);
              if (n3 < i2) return -1;
              if (n3 > i2) return 1;
            }
            return t3.length < e3.length ? -1 : t3.length > e3.length ? 1 : 0;
          }
        }
        class Ia extends Ta {
          construct(t3, e3, n2) {
            return new Ia(t3, e3, n2);
          }
          canonicalString() {
            return this.toArray().join("/");
          }
          toString() {
            return this.canonicalString();
          }
          static fromString(...t3) {
            const e3 = [];
            for (const n2 of t3) {
              if (n2.indexOf("//") >= 0) throw new ca(aa.INVALID_ARGUMENT, `Invalid segment (${n2}). Paths must not contain // in them.`);
              e3.push(...n2.split("/").filter((t4) => t4.length > 0));
            }
            return new Ia(e3);
          }
          static emptyPath() {
            return new Ia([]);
          }
        }
        const Sa = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
        class Aa extends Ta {
          construct(t3, e3, n2) {
            return new Aa(t3, e3, n2);
          }
          static isValidIdentifier(t3) {
            return Sa.test(t3);
          }
          canonicalString() {
            return this.toArray().map((t3) => (t3 = t3.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), Aa.isValidIdentifier(t3) || (t3 = "`" + t3 + "`"), t3)).join(".");
          }
          toString() {
            return this.canonicalString();
          }
          isKeyField() {
            return 1 === this.length && "__name__" === this.get(0);
          }
          static keyField() {
            return new Aa(["__name__"]);
          }
          static fromServerFormat(t3) {
            const e3 = [];
            let n2 = "", r2 = 0;
            const i2 = () => {
              if (0 === n2.length) throw new ca(aa.INVALID_ARGUMENT, `Invalid field path (${t3}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
              e3.push(n2), n2 = "";
            };
            let s2 = false;
            for (; r2 < t3.length; ) {
              const e4 = t3[r2];
              if ("\\" === e4) {
                if (r2 + 1 === t3.length) throw new ca(aa.INVALID_ARGUMENT, "Path has trailing escape character: " + t3);
                const e5 = t3[r2 + 1];
                if ("\\" !== e5 && "." !== e5 && "`" !== e5) throw new ca(aa.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t3);
                n2 += e5, r2 += 2;
              } else "`" === e4 ? (s2 = !s2, r2++) : "." !== e4 || s2 ? (n2 += e4, r2++) : (i2(), r2++);
            }
            if (i2(), s2) throw new ca(aa.INVALID_ARGUMENT, "Unterminated ` in path: " + t3);
            return new Aa(e3);
          }
          static emptyPath() {
            return new Aa([]);
          }
        }
        class Ca {
          constructor(t3) {
            this.path = t3;
          }
          static fromPath(t3) {
            return new Ca(Ia.fromString(t3));
          }
          static fromName(t3) {
            return new Ca(Ia.fromString(t3).popFirst(5));
          }
          static empty() {
            return new Ca(Ia.emptyPath());
          }
          get collectionGroup() {
            return this.path.popLast().lastSegment();
          }
          hasCollectionId(t3) {
            return this.path.length >= 2 && this.path.get(this.path.length - 2) === t3;
          }
          getCollectionGroup() {
            return this.path.get(this.path.length - 2);
          }
          getCollectionPath() {
            return this.path.popLast();
          }
          isEqual(t3) {
            return null !== t3 && 0 === Ia.comparator(this.path, t3.path);
          }
          toString() {
            return this.path.toString();
          }
          static comparator(t3, e3) {
            return Ia.comparator(t3.path, e3.path);
          }
          static isDocumentKey(t3) {
            return t3.length % 2 == 0;
          }
          static fromSegments(t3) {
            return new Ca(new Ia(t3.slice()));
          }
        }
        function ka(t3) {
          return new Na(t3.readTime, t3.key, -1);
        }
        class Na {
          constructor(t3, e3, n2) {
            this.readTime = t3, this.documentKey = e3, this.largestBatchId = n2;
          }
          static min() {
            return new Na(Ea.min(), Ca.empty(), -1);
          }
          static max() {
            return new Na(Ea.max(), Ca.empty(), -1);
          }
        }
        function Oa(t3, e3) {
          let n2 = t3.readTime.compareTo(e3.readTime);
          return 0 !== n2 ? n2 : (n2 = Ca.comparator(t3.documentKey, e3.documentKey), 0 !== n2 ? n2 : wa(t3.largestBatchId, e3.largestBatchId));
        }
        async function Da(t3) {
          if (t3.code !== aa.FAILED_PRECONDITION || "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab." !== t3.message) throw t3;
          ta("LocalStore", "Unexpectedly lost primary lease");
        }
        class Ra {
          constructor(t3) {
            this.nextCallback = null, this.catchCallback = null, this.result = void 0, this.error = void 0, this.isDone = false, this.callbackAttached = false, t3((t4) => {
              this.isDone = true, this.result = t4, this.nextCallback && this.nextCallback(t4);
            }, (t4) => {
              this.isDone = true, this.error = t4, this.catchCallback && this.catchCallback(t4);
            });
          }
          catch(t3) {
            return this.next(void 0, t3);
          }
          next(t3, e3) {
            return this.callbackAttached && ia(), this.callbackAttached = true, this.isDone ? this.error ? this.wrapFailure(e3, this.error) : this.wrapSuccess(t3, this.result) : new Ra((n2, r2) => {
              this.nextCallback = (e4) => {
                this.wrapSuccess(t3, e4).next(n2, r2);
              }, this.catchCallback = (t4) => {
                this.wrapFailure(e3, t4).next(n2, r2);
              };
            });
          }
          toPromise() {
            return new Promise((t3, e3) => {
              this.next(t3, e3);
            });
          }
          wrapUserFunction(t3) {
            try {
              const e3 = t3();
              return e3 instanceof Ra ? e3 : Ra.resolve(e3);
            } catch (t4) {
              return Ra.reject(t4);
            }
          }
          wrapSuccess(t3, e3) {
            return t3 ? this.wrapUserFunction(() => t3(e3)) : Ra.resolve(e3);
          }
          wrapFailure(t3, e3) {
            return t3 ? this.wrapUserFunction(() => t3(e3)) : Ra.reject(e3);
          }
          static resolve(t3) {
            return new Ra((e3, n2) => {
              e3(t3);
            });
          }
          static reject(t3) {
            return new Ra((e3, n2) => {
              n2(t3);
            });
          }
          static waitFor(t3) {
            return new Ra((e3, n2) => {
              let r2 = 0, i2 = 0, s2 = false;
              t3.forEach((t4) => {
                ++r2, t4.next(() => {
                  ++i2, s2 && i2 === r2 && e3();
                }, (t5) => n2(t5));
              }), s2 = true, i2 === r2 && e3();
            });
          }
          static or(t3) {
            let e3 = Ra.resolve(false);
            for (const n2 of t3) e3 = e3.next((t4) => t4 ? Ra.resolve(t4) : n2());
            return e3;
          }
          static forEach(t3, e3) {
            const n2 = [];
            return t3.forEach((t4, r2) => {
              n2.push(e3.call(this, t4, r2));
            }), this.waitFor(n2);
          }
          static mapArray(t3, e3) {
            return new Ra((n2, r2) => {
              const i2 = t3.length, s2 = new Array(i2);
              let o2 = 0;
              for (let a2 = 0; a2 < i2; a2++) {
                const c2 = a2;
                e3(t3[c2]).next((t4) => {
                  s2[c2] = t4, ++o2, o2 === i2 && n2(s2);
                }, (t4) => r2(t4));
              }
            });
          }
          static doWhile(t3, e3) {
            return new Ra((n2, r2) => {
              const i2 = () => {
                true === t3() ? e3().next(() => {
                  i2();
                }, r2) : n2();
              };
              i2();
            });
          }
        }
        function La(t3) {
          return "IndexedDbTransactionError" === t3.name;
        }
        class Pa {
          constructor(t3, e3) {
            this.previousValue = t3, e3 && (e3.sequenceNumberHandler = (t4) => this.ot(t4), this.ut = (t4) => e3.writeSequenceNumber(t4));
          }
          ot(t3) {
            return this.previousValue = Math.max(t3, this.previousValue), this.previousValue;
          }
          next() {
            const t3 = ++this.previousValue;
            return this.ut && this.ut(t3), t3;
          }
        }
        function xa(t3) {
          return null == t3;
        }
        function Ma(t3) {
          return 0 === t3 && 1 / t3 == -1 / 0;
        }
        Pa.ct = -1;
        function Ua(t3) {
          let e3 = 0;
          for (const n2 in t3) Object.prototype.hasOwnProperty.call(t3, n2) && e3++;
          return e3;
        }
        function Fa(t3, e3) {
          for (const n2 in t3) Object.prototype.hasOwnProperty.call(t3, n2) && e3(n2, t3[n2]);
        }
        function Va(t3) {
          for (const e3 in t3) if (Object.prototype.hasOwnProperty.call(t3, e3)) return false;
          return true;
        }
        class ja {
          constructor(t3, e3) {
            this.comparator = t3, this.root = e3 || Ba.EMPTY;
          }
          insert(t3, e3) {
            return new ja(this.comparator, this.root.insert(t3, e3, this.comparator).copy(null, null, Ba.BLACK, null, null));
          }
          remove(t3) {
            return new ja(this.comparator, this.root.remove(t3, this.comparator).copy(null, null, Ba.BLACK, null, null));
          }
          get(t3) {
            let e3 = this.root;
            for (; !e3.isEmpty(); ) {
              const n2 = this.comparator(t3, e3.key);
              if (0 === n2) return e3.value;
              n2 < 0 ? e3 = e3.left : n2 > 0 && (e3 = e3.right);
            }
            return null;
          }
          indexOf(t3) {
            let e3 = 0, n2 = this.root;
            for (; !n2.isEmpty(); ) {
              const r2 = this.comparator(t3, n2.key);
              if (0 === r2) return e3 + n2.left.size;
              r2 < 0 ? n2 = n2.left : (e3 += n2.left.size + 1, n2 = n2.right);
            }
            return -1;
          }
          isEmpty() {
            return this.root.isEmpty();
          }
          get size() {
            return this.root.size;
          }
          minKey() {
            return this.root.minKey();
          }
          maxKey() {
            return this.root.maxKey();
          }
          inorderTraversal(t3) {
            return this.root.inorderTraversal(t3);
          }
          forEach(t3) {
            this.inorderTraversal((e3, n2) => (t3(e3, n2), false));
          }
          toString() {
            const t3 = [];
            return this.inorderTraversal((e3, n2) => (t3.push(`${e3}:${n2}`), false)), `{${t3.join(", ")}}`;
          }
          reverseTraversal(t3) {
            return this.root.reverseTraversal(t3);
          }
          getIterator() {
            return new qa(this.root, null, this.comparator, false);
          }
          getIteratorFrom(t3) {
            return new qa(this.root, t3, this.comparator, false);
          }
          getReverseIterator() {
            return new qa(this.root, null, this.comparator, true);
          }
          getReverseIteratorFrom(t3) {
            return new qa(this.root, t3, this.comparator, true);
          }
        }
        class qa {
          constructor(t3, e3, n2, r2) {
            this.isReverse = r2, this.nodeStack = [];
            let i2 = 1;
            for (; !t3.isEmpty(); ) if (i2 = e3 ? n2(t3.key, e3) : 1, e3 && r2 && (i2 *= -1), i2 < 0) t3 = this.isReverse ? t3.left : t3.right;
            else {
              if (0 === i2) {
                this.nodeStack.push(t3);
                break;
              }
              this.nodeStack.push(t3), t3 = this.isReverse ? t3.right : t3.left;
            }
          }
          getNext() {
            let t3 = this.nodeStack.pop();
            const e3 = { key: t3.key, value: t3.value };
            if (this.isReverse) for (t3 = t3.left; !t3.isEmpty(); ) this.nodeStack.push(t3), t3 = t3.right;
            else for (t3 = t3.right; !t3.isEmpty(); ) this.nodeStack.push(t3), t3 = t3.left;
            return e3;
          }
          hasNext() {
            return this.nodeStack.length > 0;
          }
          peek() {
            if (0 === this.nodeStack.length) return null;
            const t3 = this.nodeStack[this.nodeStack.length - 1];
            return { key: t3.key, value: t3.value };
          }
        }
        class Ba {
          constructor(t3, e3, n2, r2, i2) {
            this.key = t3, this.value = e3, this.color = null != n2 ? n2 : Ba.RED, this.left = null != r2 ? r2 : Ba.EMPTY, this.right = null != i2 ? i2 : Ba.EMPTY, this.size = this.left.size + 1 + this.right.size;
          }
          copy(t3, e3, n2, r2, i2) {
            return new Ba(null != t3 ? t3 : this.key, null != e3 ? e3 : this.value, null != n2 ? n2 : this.color, null != r2 ? r2 : this.left, null != i2 ? i2 : this.right);
          }
          isEmpty() {
            return false;
          }
          inorderTraversal(t3) {
            return this.left.inorderTraversal(t3) || t3(this.key, this.value) || this.right.inorderTraversal(t3);
          }
          reverseTraversal(t3) {
            return this.right.reverseTraversal(t3) || t3(this.key, this.value) || this.left.reverseTraversal(t3);
          }
          min() {
            return this.left.isEmpty() ? this : this.left.min();
          }
          minKey() {
            return this.min().key;
          }
          maxKey() {
            return this.right.isEmpty() ? this.key : this.right.maxKey();
          }
          insert(t3, e3, n2) {
            let r2 = this;
            const i2 = n2(t3, r2.key);
            return r2 = i2 < 0 ? r2.copy(null, null, null, r2.left.insert(t3, e3, n2), null) : 0 === i2 ? r2.copy(null, e3, null, null, null) : r2.copy(null, null, null, null, r2.right.insert(t3, e3, n2)), r2.fixUp();
          }
          removeMin() {
            if (this.left.isEmpty()) return Ba.EMPTY;
            let t3 = this;
            return t3.left.isRed() || t3.left.left.isRed() || (t3 = t3.moveRedLeft()), t3 = t3.copy(null, null, null, t3.left.removeMin(), null), t3.fixUp();
          }
          remove(t3, e3) {
            let n2, r2 = this;
            if (e3(t3, r2.key) < 0) r2.left.isEmpty() || r2.left.isRed() || r2.left.left.isRed() || (r2 = r2.moveRedLeft()), r2 = r2.copy(null, null, null, r2.left.remove(t3, e3), null);
            else {
              if (r2.left.isRed() && (r2 = r2.rotateRight()), r2.right.isEmpty() || r2.right.isRed() || r2.right.left.isRed() || (r2 = r2.moveRedRight()), 0 === e3(t3, r2.key)) {
                if (r2.right.isEmpty()) return Ba.EMPTY;
                n2 = r2.right.min(), r2 = r2.copy(n2.key, n2.value, null, null, r2.right.removeMin());
              }
              r2 = r2.copy(null, null, null, null, r2.right.remove(t3, e3));
            }
            return r2.fixUp();
          }
          isRed() {
            return this.color;
          }
          fixUp() {
            let t3 = this;
            return t3.right.isRed() && !t3.left.isRed() && (t3 = t3.rotateLeft()), t3.left.isRed() && t3.left.left.isRed() && (t3 = t3.rotateRight()), t3.left.isRed() && t3.right.isRed() && (t3 = t3.colorFlip()), t3;
          }
          moveRedLeft() {
            let t3 = this.colorFlip();
            return t3.right.left.isRed() && (t3 = t3.copy(null, null, null, null, t3.right.rotateRight()), t3 = t3.rotateLeft(), t3 = t3.colorFlip()), t3;
          }
          moveRedRight() {
            let t3 = this.colorFlip();
            return t3.left.left.isRed() && (t3 = t3.rotateRight(), t3 = t3.colorFlip()), t3;
          }
          rotateLeft() {
            const t3 = this.copy(null, null, Ba.RED, null, this.right.left);
            return this.right.copy(null, null, this.color, t3, null);
          }
          rotateRight() {
            const t3 = this.copy(null, null, Ba.RED, this.left.right, null);
            return this.left.copy(null, null, this.color, null, t3);
          }
          colorFlip() {
            const t3 = this.left.copy(null, null, !this.left.color, null, null), e3 = this.right.copy(null, null, !this.right.color, null, null);
            return this.copy(null, null, !this.color, t3, e3);
          }
          checkMaxDepth() {
            const t3 = this.check();
            return Math.pow(2, t3) <= this.size + 1;
          }
          check() {
            if (this.isRed() && this.left.isRed()) throw ia();
            if (this.right.isRed()) throw ia();
            const t3 = this.left.check();
            if (t3 !== this.right.check()) throw ia();
            return t3 + (this.isRed() ? 0 : 1);
          }
        }
        Ba.EMPTY = null, Ba.RED = true, Ba.BLACK = false, Ba.EMPTY = new class {
          constructor() {
            this.size = 0;
          }
          get key() {
            throw ia();
          }
          get value() {
            throw ia();
          }
          get color() {
            throw ia();
          }
          get left() {
            throw ia();
          }
          get right() {
            throw ia();
          }
          copy(t3, e3, n2, r2, i2) {
            return this;
          }
          insert(t3, e3, n2) {
            return new Ba(t3, e3);
          }
          remove(t3, e3) {
            return this;
          }
          isEmpty() {
            return true;
          }
          inorderTraversal(t3) {
            return false;
          }
          reverseTraversal(t3) {
            return false;
          }
          minKey() {
            return null;
          }
          maxKey() {
            return null;
          }
          isRed() {
            return false;
          }
          checkMaxDepth() {
            return true;
          }
          check() {
            return 0;
          }
        }();
        class $a {
          constructor(t3) {
            this.comparator = t3, this.data = new ja(this.comparator);
          }
          has(t3) {
            return null !== this.data.get(t3);
          }
          first() {
            return this.data.minKey();
          }
          last() {
            return this.data.maxKey();
          }
          get size() {
            return this.data.size;
          }
          indexOf(t3) {
            return this.data.indexOf(t3);
          }
          forEach(t3) {
            this.data.inorderTraversal((e3, n2) => (t3(e3), false));
          }
          forEachInRange(t3, e3) {
            const n2 = this.data.getIteratorFrom(t3[0]);
            for (; n2.hasNext(); ) {
              const r2 = n2.getNext();
              if (this.comparator(r2.key, t3[1]) >= 0) return;
              e3(r2.key);
            }
          }
          forEachWhile(t3, e3) {
            let n2;
            for (n2 = void 0 !== e3 ? this.data.getIteratorFrom(e3) : this.data.getIterator(); n2.hasNext(); ) if (!t3(n2.getNext().key)) return;
          }
          firstAfterOrEqual(t3) {
            const e3 = this.data.getIteratorFrom(t3);
            return e3.hasNext() ? e3.getNext().key : null;
          }
          getIterator() {
            return new za(this.data.getIterator());
          }
          getIteratorFrom(t3) {
            return new za(this.data.getIteratorFrom(t3));
          }
          add(t3) {
            return this.copy(this.data.remove(t3).insert(t3, true));
          }
          delete(t3) {
            return this.has(t3) ? this.copy(this.data.remove(t3)) : this;
          }
          isEmpty() {
            return this.data.isEmpty();
          }
          unionWith(t3) {
            let e3 = this;
            return e3.size < t3.size && (e3 = t3, t3 = this), t3.forEach((t4) => {
              e3 = e3.add(t4);
            }), e3;
          }
          isEqual(t3) {
            if (!(t3 instanceof $a)) return false;
            if (this.size !== t3.size) return false;
            const e3 = this.data.getIterator(), n2 = t3.data.getIterator();
            for (; e3.hasNext(); ) {
              const t4 = e3.getNext().key, r2 = n2.getNext().key;
              if (0 !== this.comparator(t4, r2)) return false;
            }
            return true;
          }
          toArray() {
            const t3 = [];
            return this.forEach((e3) => {
              t3.push(e3);
            }), t3;
          }
          toString() {
            const t3 = [];
            return this.forEach((e3) => t3.push(e3)), "SortedSet(" + t3.toString() + ")";
          }
          copy(t3) {
            const e3 = new $a(this.comparator);
            return e3.data = t3, e3;
          }
        }
        class za {
          constructor(t3) {
            this.iter = t3;
          }
          getNext() {
            return this.iter.getNext().key;
          }
          hasNext() {
            return this.iter.hasNext();
          }
        }
        class Ka {
          constructor(t3) {
            this.fields = t3, t3.sort(Aa.comparator);
          }
          static empty() {
            return new Ka([]);
          }
          unionWith(t3) {
            let e3 = new $a(Aa.comparator);
            for (const t4 of this.fields) e3 = e3.add(t4);
            for (const n2 of t3) e3 = e3.add(n2);
            return new Ka(e3.toArray());
          }
          covers(t3) {
            for (const e3 of this.fields) if (e3.isPrefixOf(t3)) return true;
            return false;
          }
          isEqual(t3) {
            return ba(this.fields, t3.fields, (t4, e3) => t4.isEqual(e3));
          }
        }
        class Ha extends Error {
          constructor() {
            super(...arguments), this.name = "Base64DecodeError";
          }
        }
        class Ga {
          constructor(t3) {
            this.binaryString = t3;
          }
          static fromBase64String(t3) {
            const e3 = function(t4) {
              try {
                return atob(t4);
              } catch (t5) {
                throw "undefined" != typeof DOMException && t5 instanceof DOMException ? new Ha("Invalid base64 string: " + t5) : t5;
              }
            }(t3);
            return new Ga(e3);
          }
          static fromUint8Array(t3) {
            const e3 = function(t4) {
              let e4 = "";
              for (let n2 = 0; n2 < t4.length; ++n2) e4 += String.fromCharCode(t4[n2]);
              return e4;
            }(t3);
            return new Ga(e3);
          }
          [Symbol.iterator]() {
            let t3 = 0;
            return { next: () => t3 < this.binaryString.length ? { value: this.binaryString.charCodeAt(t3++), done: false } : { value: void 0, done: true } };
          }
          toBase64() {
            return t3 = this.binaryString, btoa(t3);
            var t3;
          }
          toUint8Array() {
            return function(t3) {
              const e3 = new Uint8Array(t3.length);
              for (let n2 = 0; n2 < t3.length; n2++) e3[n2] = t3.charCodeAt(n2);
              return e3;
            }(this.binaryString);
          }
          approximateByteSize() {
            return 2 * this.binaryString.length;
          }
          compareTo(t3) {
            return wa(this.binaryString, t3.binaryString);
          }
          isEqual(t3) {
            return this.binaryString === t3.binaryString;
          }
        }
        Ga.EMPTY_BYTE_STRING = new Ga("");
        const Wa = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
        function Qa(t3) {
          if (sa(!!t3), "string" == typeof t3) {
            let e3 = 0;
            const n2 = Wa.exec(t3);
            if (sa(!!n2), n2[1]) {
              let t4 = n2[1];
              t4 = (t4 + "000000000").substr(0, 9), e3 = Number(t4);
            }
            const r2 = new Date(t3);
            return { seconds: Math.floor(r2.getTime() / 1e3), nanos: e3 };
          }
          return { seconds: Ya(t3.seconds), nanos: Ya(t3.nanos) };
        }
        function Ya(t3) {
          return "number" == typeof t3 ? t3 : "string" == typeof t3 ? Number(t3) : 0;
        }
        function Ja(t3) {
          return "string" == typeof t3 ? Ga.fromBase64String(t3) : Ga.fromUint8Array(t3);
        }
        function Xa(t3) {
          var e3, n2;
          return "server_timestamp" === (null === (n2 = ((null === (e3 = null == t3 ? void 0 : t3.mapValue) || void 0 === e3 ? void 0 : e3.fields) || {}).__type__) || void 0 === n2 ? void 0 : n2.stringValue);
        }
        function Za(t3) {
          const e3 = t3.mapValue.fields.__previous_value__;
          return Xa(e3) ? Za(e3) : e3;
        }
        function tc(t3) {
          const e3 = Qa(t3.mapValue.fields.__local_write_time__.timestampValue);
          return new _a(e3.seconds, e3.nanos);
        }
        class ec {
          constructor(t3, e3, n2, r2, i2, s2, o2, a2, c2) {
            this.databaseId = t3, this.appId = e3, this.persistenceKey = n2, this.host = r2, this.ssl = i2, this.forceLongPolling = s2, this.autoDetectLongPolling = o2, this.longPollingOptions = a2, this.useFetchStreams = c2;
          }
        }
        class nc {
          constructor(t3, e3) {
            this.projectId = t3, this.database = e3 || "(default)";
          }
          static empty() {
            return new nc("", "");
          }
          get isDefaultDatabase() {
            return "(default)" === this.database;
          }
          isEqual(t3) {
            return t3 instanceof nc && t3.projectId === this.projectId && t3.database === this.database;
          }
        }
        const rc = { fields: { __type__: { stringValue: "__max__" } } };
        function ic(t3) {
          return "nullValue" in t3 ? 0 : "booleanValue" in t3 ? 1 : "integerValue" in t3 || "doubleValue" in t3 ? 2 : "timestampValue" in t3 ? 3 : "stringValue" in t3 ? 5 : "bytesValue" in t3 ? 6 : "referenceValue" in t3 ? 7 : "geoPointValue" in t3 ? 8 : "arrayValue" in t3 ? 9 : "mapValue" in t3 ? Xa(t3) ? 4 : vc(t3) ? 9007199254740991 : 10 : ia();
        }
        function sc(t3, e3) {
          if (t3 === e3) return true;
          const n2 = ic(t3);
          if (n2 !== ic(e3)) return false;
          switch (n2) {
            case 0:
            case 9007199254740991:
              return true;
            case 1:
              return t3.booleanValue === e3.booleanValue;
            case 4:
              return tc(t3).isEqual(tc(e3));
            case 3:
              return function(t4, e4) {
                if ("string" == typeof t4.timestampValue && "string" == typeof e4.timestampValue && t4.timestampValue.length === e4.timestampValue.length) return t4.timestampValue === e4.timestampValue;
                const n3 = Qa(t4.timestampValue), r2 = Qa(e4.timestampValue);
                return n3.seconds === r2.seconds && n3.nanos === r2.nanos;
              }(t3, e3);
            case 5:
              return t3.stringValue === e3.stringValue;
            case 6:
              return function(t4, e4) {
                return Ja(t4.bytesValue).isEqual(Ja(e4.bytesValue));
              }(t3, e3);
            case 7:
              return t3.referenceValue === e3.referenceValue;
            case 8:
              return function(t4, e4) {
                return Ya(t4.geoPointValue.latitude) === Ya(e4.geoPointValue.latitude) && Ya(t4.geoPointValue.longitude) === Ya(e4.geoPointValue.longitude);
              }(t3, e3);
            case 2:
              return function(t4, e4) {
                if ("integerValue" in t4 && "integerValue" in e4) return Ya(t4.integerValue) === Ya(e4.integerValue);
                if ("doubleValue" in t4 && "doubleValue" in e4) {
                  const n3 = Ya(t4.doubleValue), r2 = Ya(e4.doubleValue);
                  return n3 === r2 ? Ma(n3) === Ma(r2) : isNaN(n3) && isNaN(r2);
                }
                return false;
              }(t3, e3);
            case 9:
              return ba(t3.arrayValue.values || [], e3.arrayValue.values || [], sc);
            case 10:
              return function(t4, e4) {
                const n3 = t4.mapValue.fields || {}, r2 = e4.mapValue.fields || {};
                if (Ua(n3) !== Ua(r2)) return false;
                for (const t5 in n3) if (n3.hasOwnProperty(t5) && (void 0 === r2[t5] || !sc(n3[t5], r2[t5]))) return false;
                return true;
              }(t3, e3);
            default:
              return ia();
          }
        }
        function oc(t3, e3) {
          return void 0 !== (t3.values || []).find((t4) => sc(t4, e3));
        }
        function ac(t3, e3) {
          if (t3 === e3) return 0;
          const n2 = ic(t3), r2 = ic(e3);
          if (n2 !== r2) return wa(n2, r2);
          switch (n2) {
            case 0:
            case 9007199254740991:
              return 0;
            case 1:
              return wa(t3.booleanValue, e3.booleanValue);
            case 2:
              return function(t4, e4) {
                const n3 = Ya(t4.integerValue || t4.doubleValue), r3 = Ya(e4.integerValue || e4.doubleValue);
                return n3 < r3 ? -1 : n3 > r3 ? 1 : n3 === r3 ? 0 : isNaN(n3) ? isNaN(r3) ? 0 : -1 : 1;
              }(t3, e3);
            case 3:
              return cc(t3.timestampValue, e3.timestampValue);
            case 4:
              return cc(tc(t3), tc(e3));
            case 5:
              return wa(t3.stringValue, e3.stringValue);
            case 6:
              return function(t4, e4) {
                const n3 = Ja(t4), r3 = Ja(e4);
                return n3.compareTo(r3);
              }(t3.bytesValue, e3.bytesValue);
            case 7:
              return function(t4, e4) {
                const n3 = t4.split("/"), r3 = e4.split("/");
                for (let t5 = 0; t5 < n3.length && t5 < r3.length; t5++) {
                  const e5 = wa(n3[t5], r3[t5]);
                  if (0 !== e5) return e5;
                }
                return wa(n3.length, r3.length);
              }(t3.referenceValue, e3.referenceValue);
            case 8:
              return function(t4, e4) {
                const n3 = wa(Ya(t4.latitude), Ya(e4.latitude));
                return 0 !== n3 ? n3 : wa(Ya(t4.longitude), Ya(e4.longitude));
              }(t3.geoPointValue, e3.geoPointValue);
            case 9:
              return function(t4, e4) {
                const n3 = t4.values || [], r3 = e4.values || [];
                for (let t5 = 0; t5 < n3.length && t5 < r3.length; ++t5) {
                  const e5 = ac(n3[t5], r3[t5]);
                  if (e5) return e5;
                }
                return wa(n3.length, r3.length);
              }(t3.arrayValue, e3.arrayValue);
            case 10:
              return function(t4, e4) {
                if (t4 === rc && e4 === rc) return 0;
                if (t4 === rc) return 1;
                if (e4 === rc) return -1;
                const n3 = t4.fields || {}, r3 = Object.keys(n3), i2 = e4.fields || {}, s2 = Object.keys(i2);
                r3.sort(), s2.sort();
                for (let t5 = 0; t5 < r3.length && t5 < s2.length; ++t5) {
                  const e5 = wa(r3[t5], s2[t5]);
                  if (0 !== e5) return e5;
                  const o2 = ac(n3[r3[t5]], i2[s2[t5]]);
                  if (0 !== o2) return o2;
                }
                return wa(r3.length, s2.length);
              }(t3.mapValue, e3.mapValue);
            default:
              throw ia();
          }
        }
        function cc(t3, e3) {
          if ("string" == typeof t3 && "string" == typeof e3 && t3.length === e3.length) return wa(t3, e3);
          const n2 = Qa(t3), r2 = Qa(e3), i2 = wa(n2.seconds, r2.seconds);
          return 0 !== i2 ? i2 : wa(n2.nanos, r2.nanos);
        }
        function uc(t3) {
          return hc(t3);
        }
        function hc(t3) {
          return "nullValue" in t3 ? "null" : "booleanValue" in t3 ? "" + t3.booleanValue : "integerValue" in t3 ? "" + t3.integerValue : "doubleValue" in t3 ? "" + t3.doubleValue : "timestampValue" in t3 ? function(t4) {
            const e4 = Qa(t4);
            return `time(${e4.seconds},${e4.nanos})`;
          }(t3.timestampValue) : "stringValue" in t3 ? t3.stringValue : "bytesValue" in t3 ? Ja(t3.bytesValue).toBase64() : "referenceValue" in t3 ? (n2 = t3.referenceValue, Ca.fromName(n2).toString()) : "geoPointValue" in t3 ? `geo(${(e3 = t3.geoPointValue).latitude},${e3.longitude})` : "arrayValue" in t3 ? function(t4) {
            let e4 = "[", n3 = true;
            for (const r2 of t4.values || []) n3 ? n3 = false : e4 += ",", e4 += hc(r2);
            return e4 + "]";
          }(t3.arrayValue) : "mapValue" in t3 ? function(t4) {
            const e4 = Object.keys(t4.fields || {}).sort();
            let n3 = "{", r2 = true;
            for (const i2 of e4) r2 ? r2 = false : n3 += ",", n3 += `${i2}:${hc(t4.fields[i2])}`;
            return n3 + "}";
          }(t3.mapValue) : ia();
          var e3, n2;
        }
        function lc(t3, e3) {
          return { referenceValue: `projects/${t3.projectId}/databases/${t3.database}/documents/${e3.path.canonicalString()}` };
        }
        function dc(t3) {
          return !!t3 && "integerValue" in t3;
        }
        function fc(t3) {
          return !!t3 && "arrayValue" in t3;
        }
        function pc(t3) {
          return !!t3 && "nullValue" in t3;
        }
        function gc(t3) {
          return !!t3 && "doubleValue" in t3 && isNaN(Number(t3.doubleValue));
        }
        function mc(t3) {
          return !!t3 && "mapValue" in t3;
        }
        function yc(t3) {
          if (t3.geoPointValue) return { geoPointValue: Object.assign({}, t3.geoPointValue) };
          if (t3.timestampValue && "object" == typeof t3.timestampValue) return { timestampValue: Object.assign({}, t3.timestampValue) };
          if (t3.mapValue) {
            const e3 = { mapValue: { fields: {} } };
            return Fa(t3.mapValue.fields, (t4, n2) => e3.mapValue.fields[t4] = yc(n2)), e3;
          }
          if (t3.arrayValue) {
            const e3 = { arrayValue: { values: [] } };
            for (let n2 = 0; n2 < (t3.arrayValue.values || []).length; ++n2) e3.arrayValue.values[n2] = yc(t3.arrayValue.values[n2]);
            return e3;
          }
          return Object.assign({}, t3);
        }
        function vc(t3) {
          return "__max__" === (((t3.mapValue || {}).fields || {}).__type__ || {}).stringValue;
        }
        class wc {
          constructor(t3) {
            this.value = t3;
          }
          static empty() {
            return new wc({ mapValue: {} });
          }
          field(t3) {
            if (t3.isEmpty()) return this.value;
            {
              let e3 = this.value;
              for (let n2 = 0; n2 < t3.length - 1; ++n2) if (e3 = (e3.mapValue.fields || {})[t3.get(n2)], !mc(e3)) return null;
              return e3 = (e3.mapValue.fields || {})[t3.lastSegment()], e3 || null;
            }
          }
          set(t3, e3) {
            this.getFieldsMap(t3.popLast())[t3.lastSegment()] = yc(e3);
          }
          setAll(t3) {
            let e3 = Aa.emptyPath(), n2 = {}, r2 = [];
            t3.forEach((t4, i3) => {
              if (!e3.isImmediateParentOf(i3)) {
                const t5 = this.getFieldsMap(e3);
                this.applyChanges(t5, n2, r2), n2 = {}, r2 = [], e3 = i3.popLast();
              }
              t4 ? n2[i3.lastSegment()] = yc(t4) : r2.push(i3.lastSegment());
            });
            const i2 = this.getFieldsMap(e3);
            this.applyChanges(i2, n2, r2);
          }
          delete(t3) {
            const e3 = this.field(t3.popLast());
            mc(e3) && e3.mapValue.fields && delete e3.mapValue.fields[t3.lastSegment()];
          }
          isEqual(t3) {
            return sc(this.value, t3.value);
          }
          getFieldsMap(t3) {
            let e3 = this.value;
            e3.mapValue.fields || (e3.mapValue = { fields: {} });
            for (let n2 = 0; n2 < t3.length; ++n2) {
              let r2 = e3.mapValue.fields[t3.get(n2)];
              mc(r2) && r2.mapValue.fields || (r2 = { mapValue: { fields: {} } }, e3.mapValue.fields[t3.get(n2)] = r2), e3 = r2;
            }
            return e3.mapValue.fields;
          }
          applyChanges(t3, e3, n2) {
            Fa(e3, (e4, n3) => t3[e4] = n3);
            for (const e4 of n2) delete t3[e4];
          }
          clone() {
            return new wc(yc(this.value));
          }
        }
        class bc {
          constructor(t3, e3, n2, r2, i2, s2, o2) {
            this.key = t3, this.documentType = e3, this.version = n2, this.readTime = r2, this.createTime = i2, this.data = s2, this.documentState = o2;
          }
          static newInvalidDocument(t3) {
            return new bc(t3, 0, Ea.min(), Ea.min(), Ea.min(), wc.empty(), 0);
          }
          static newFoundDocument(t3, e3, n2, r2) {
            return new bc(t3, 1, e3, Ea.min(), n2, r2, 0);
          }
          static newNoDocument(t3, e3) {
            return new bc(t3, 2, e3, Ea.min(), Ea.min(), wc.empty(), 0);
          }
          static newUnknownDocument(t3, e3) {
            return new bc(t3, 3, e3, Ea.min(), Ea.min(), wc.empty(), 2);
          }
          convertToFoundDocument(t3, e3) {
            return !this.createTime.isEqual(Ea.min()) || 2 !== this.documentType && 0 !== this.documentType || (this.createTime = t3), this.version = t3, this.documentType = 1, this.data = e3, this.documentState = 0, this;
          }
          convertToNoDocument(t3) {
            return this.version = t3, this.documentType = 2, this.data = wc.empty(), this.documentState = 0, this;
          }
          convertToUnknownDocument(t3) {
            return this.version = t3, this.documentType = 3, this.data = wc.empty(), this.documentState = 2, this;
          }
          setHasCommittedMutations() {
            return this.documentState = 2, this;
          }
          setHasLocalMutations() {
            return this.documentState = 1, this.version = Ea.min(), this;
          }
          setReadTime(t3) {
            return this.readTime = t3, this;
          }
          get hasLocalMutations() {
            return 1 === this.documentState;
          }
          get hasCommittedMutations() {
            return 2 === this.documentState;
          }
          get hasPendingWrites() {
            return this.hasLocalMutations || this.hasCommittedMutations;
          }
          isValidDocument() {
            return 0 !== this.documentType;
          }
          isFoundDocument() {
            return 1 === this.documentType;
          }
          isNoDocument() {
            return 2 === this.documentType;
          }
          isUnknownDocument() {
            return 3 === this.documentType;
          }
          isEqual(t3) {
            return t3 instanceof bc && this.key.isEqual(t3.key) && this.version.isEqual(t3.version) && this.documentType === t3.documentType && this.documentState === t3.documentState && this.data.isEqual(t3.data);
          }
          mutableCopy() {
            return new bc(this.key, this.documentType, this.version, this.readTime, this.createTime, this.data.clone(), this.documentState);
          }
          toString() {
            return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
          }
        }
        class _c {
          constructor(t3, e3) {
            this.position = t3, this.inclusive = e3;
          }
        }
        function Ec(t3, e3, n2) {
          let r2 = 0;
          for (let i2 = 0; i2 < t3.position.length; i2++) {
            const s2 = e3[i2], o2 = t3.position[i2];
            if (r2 = s2.field.isKeyField() ? Ca.comparator(Ca.fromName(o2.referenceValue), n2.key) : ac(o2, n2.data.field(s2.field)), "desc" === s2.dir && (r2 *= -1), 0 !== r2) break;
          }
          return r2;
        }
        function Tc(t3, e3) {
          if (null === t3) return null === e3;
          if (null === e3) return false;
          if (t3.inclusive !== e3.inclusive || t3.position.length !== e3.position.length) return false;
          for (let n2 = 0; n2 < t3.position.length; n2++) if (!sc(t3.position[n2], e3.position[n2])) return false;
          return true;
        }
        class Ic {
          constructor(t3, e3 = "asc") {
            this.field = t3, this.dir = e3;
          }
        }
        function Sc(t3, e3) {
          return t3.dir === e3.dir && t3.field.isEqual(e3.field);
        }
        class Ac {
        }
        class Cc extends Ac {
          constructor(t3, e3, n2) {
            super(), this.field = t3, this.op = e3, this.value = n2;
          }
          static create(t3, e3, n2) {
            return t3.isKeyField() ? "in" === e3 || "not-in" === e3 ? this.createKeyFieldInFilter(t3, e3, n2) : new Pc(t3, e3, n2) : "array-contains" === e3 ? new Fc(t3, n2) : "in" === e3 ? new Vc(t3, n2) : "not-in" === e3 ? new jc(t3, n2) : "array-contains-any" === e3 ? new qc(t3, n2) : new Cc(t3, e3, n2);
          }
          static createKeyFieldInFilter(t3, e3, n2) {
            return "in" === e3 ? new xc(t3, n2) : new Mc(t3, n2);
          }
          matches(t3) {
            const e3 = t3.data.field(this.field);
            return "!=" === this.op ? null !== e3 && this.matchesComparison(ac(e3, this.value)) : null !== e3 && ic(this.value) === ic(e3) && this.matchesComparison(ac(e3, this.value));
          }
          matchesComparison(t3) {
            switch (this.op) {
              case "<":
                return t3 < 0;
              case "<=":
                return t3 <= 0;
              case "==":
                return 0 === t3;
              case "!=":
                return 0 !== t3;
              case ">":
                return t3 > 0;
              case ">=":
                return t3 >= 0;
              default:
                return ia();
            }
          }
          isInequality() {
            return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0;
          }
          getFlattenedFilters() {
            return [this];
          }
          getFilters() {
            return [this];
          }
          getFirstInequalityField() {
            return this.isInequality() ? this.field : null;
          }
        }
        class kc extends Ac {
          constructor(t3, e3) {
            super(), this.filters = t3, this.op = e3, this.lt = null;
          }
          static create(t3, e3) {
            return new kc(t3, e3);
          }
          matches(t3) {
            return Nc(this) ? void 0 === this.filters.find((e3) => !e3.matches(t3)) : void 0 !== this.filters.find((e3) => e3.matches(t3));
          }
          getFlattenedFilters() {
            return null !== this.lt || (this.lt = this.filters.reduce((t3, e3) => t3.concat(e3.getFlattenedFilters()), [])), this.lt;
          }
          getFilters() {
            return Object.assign([], this.filters);
          }
          getFirstInequalityField() {
            const t3 = this.ft((t4) => t4.isInequality());
            return null !== t3 ? t3.field : null;
          }
          ft(t3) {
            for (const e3 of this.getFlattenedFilters()) if (t3(e3)) return e3;
            return null;
          }
        }
        function Nc(t3) {
          return "and" === t3.op;
        }
        function Oc(t3) {
          return function(t4) {
            for (const e3 of t4.filters) if (e3 instanceof kc) return false;
            return true;
          }(t3) && Nc(t3);
        }
        function Dc(t3) {
          if (t3 instanceof Cc) return t3.field.canonicalString() + t3.op.toString() + uc(t3.value);
          if (Oc(t3)) return t3.filters.map((t4) => Dc(t4)).join(",");
          {
            const e3 = t3.filters.map((t4) => Dc(t4)).join(",");
            return `${t3.op}(${e3})`;
          }
        }
        function Rc(t3, e3) {
          return t3 instanceof Cc ? function(t4, e4) {
            return e4 instanceof Cc && t4.op === e4.op && t4.field.isEqual(e4.field) && sc(t4.value, e4.value);
          }(t3, e3) : t3 instanceof kc ? function(t4, e4) {
            return e4 instanceof kc && t4.op === e4.op && t4.filters.length === e4.filters.length && t4.filters.reduce((t5, n2, r2) => t5 && Rc(n2, e4.filters[r2]), true);
          }(t3, e3) : void ia();
        }
        function Lc(t3) {
          return t3 instanceof Cc ? function(t4) {
            return `${t4.field.canonicalString()} ${t4.op} ${uc(t4.value)}`;
          }(t3) : t3 instanceof kc ? function(t4) {
            return t4.op.toString() + " {" + t4.getFilters().map(Lc).join(" ,") + "}";
          }(t3) : "Filter";
        }
        class Pc extends Cc {
          constructor(t3, e3, n2) {
            super(t3, e3, n2), this.key = Ca.fromName(n2.referenceValue);
          }
          matches(t3) {
            const e3 = Ca.comparator(t3.key, this.key);
            return this.matchesComparison(e3);
          }
        }
        class xc extends Cc {
          constructor(t3, e3) {
            super(t3, "in", e3), this.keys = Uc(0, e3);
          }
          matches(t3) {
            return this.keys.some((e3) => e3.isEqual(t3.key));
          }
        }
        class Mc extends Cc {
          constructor(t3, e3) {
            super(t3, "not-in", e3), this.keys = Uc(0, e3);
          }
          matches(t3) {
            return !this.keys.some((e3) => e3.isEqual(t3.key));
          }
        }
        function Uc(t3, e3) {
          var n2;
          return ((null === (n2 = e3.arrayValue) || void 0 === n2 ? void 0 : n2.values) || []).map((t4) => Ca.fromName(t4.referenceValue));
        }
        class Fc extends Cc {
          constructor(t3, e3) {
            super(t3, "array-contains", e3);
          }
          matches(t3) {
            const e3 = t3.data.field(this.field);
            return fc(e3) && oc(e3.arrayValue, this.value);
          }
        }
        class Vc extends Cc {
          constructor(t3, e3) {
            super(t3, "in", e3);
          }
          matches(t3) {
            const e3 = t3.data.field(this.field);
            return null !== e3 && oc(this.value.arrayValue, e3);
          }
        }
        class jc extends Cc {
          constructor(t3, e3) {
            super(t3, "not-in", e3);
          }
          matches(t3) {
            if (oc(this.value.arrayValue, { nullValue: "NULL_VALUE" })) return false;
            const e3 = t3.data.field(this.field);
            return null !== e3 && !oc(this.value.arrayValue, e3);
          }
        }
        class qc extends Cc {
          constructor(t3, e3) {
            super(t3, "array-contains-any", e3);
          }
          matches(t3) {
            const e3 = t3.data.field(this.field);
            return !(!fc(e3) || !e3.arrayValue.values) && e3.arrayValue.values.some((t4) => oc(this.value.arrayValue, t4));
          }
        }
        class Bc {
          constructor(t3, e3 = null, n2 = [], r2 = [], i2 = null, s2 = null, o2 = null) {
            this.path = t3, this.collectionGroup = e3, this.orderBy = n2, this.filters = r2, this.limit = i2, this.startAt = s2, this.endAt = o2, this.dt = null;
          }
        }
        function $c(t3, e3 = null, n2 = [], r2 = [], i2 = null, s2 = null, o2 = null) {
          return new Bc(t3, e3, n2, r2, i2, s2, o2);
        }
        function zc(t3) {
          const e3 = oa(t3);
          if (null === e3.dt) {
            let t4 = e3.path.canonicalString();
            null !== e3.collectionGroup && (t4 += "|cg:" + e3.collectionGroup), t4 += "|f:", t4 += e3.filters.map((t5) => Dc(t5)).join(","), t4 += "|ob:", t4 += e3.orderBy.map((t5) => function(t6) {
              return t6.field.canonicalString() + t6.dir;
            }(t5)).join(","), xa(e3.limit) || (t4 += "|l:", t4 += e3.limit), e3.startAt && (t4 += "|lb:", t4 += e3.startAt.inclusive ? "b:" : "a:", t4 += e3.startAt.position.map((t5) => uc(t5)).join(",")), e3.endAt && (t4 += "|ub:", t4 += e3.endAt.inclusive ? "a:" : "b:", t4 += e3.endAt.position.map((t5) => uc(t5)).join(",")), e3.dt = t4;
          }
          return e3.dt;
        }
        function Kc(t3, e3) {
          if (t3.limit !== e3.limit) return false;
          if (t3.orderBy.length !== e3.orderBy.length) return false;
          for (let n2 = 0; n2 < t3.orderBy.length; n2++) if (!Sc(t3.orderBy[n2], e3.orderBy[n2])) return false;
          if (t3.filters.length !== e3.filters.length) return false;
          for (let n2 = 0; n2 < t3.filters.length; n2++) if (!Rc(t3.filters[n2], e3.filters[n2])) return false;
          return t3.collectionGroup === e3.collectionGroup && !!t3.path.isEqual(e3.path) && !!Tc(t3.startAt, e3.startAt) && Tc(t3.endAt, e3.endAt);
        }
        function Hc(t3) {
          return Ca.isDocumentKey(t3.path) && null === t3.collectionGroup && 0 === t3.filters.length;
        }
        class Gc {
          constructor(t3, e3 = null, n2 = [], r2 = [], i2 = null, s2 = "F", o2 = null, a2 = null) {
            this.path = t3, this.collectionGroup = e3, this.explicitOrderBy = n2, this.filters = r2, this.limit = i2, this.limitType = s2, this.startAt = o2, this.endAt = a2, this.wt = null, this._t = null, this.startAt, this.endAt;
          }
        }
        function Wc(t3) {
          return new Gc(t3);
        }
        function Qc(t3) {
          return 0 === t3.filters.length && null === t3.limit && null == t3.startAt && null == t3.endAt && (0 === t3.explicitOrderBy.length || 1 === t3.explicitOrderBy.length && t3.explicitOrderBy[0].field.isKeyField());
        }
        function Yc(t3) {
          return t3.explicitOrderBy.length > 0 ? t3.explicitOrderBy[0].field : null;
        }
        function Jc(t3) {
          for (const e3 of t3.filters) {
            const t4 = e3.getFirstInequalityField();
            if (null !== t4) return t4;
          }
          return null;
        }
        function Xc(t3) {
          return null !== t3.collectionGroup;
        }
        function Zc(t3) {
          const e3 = oa(t3);
          if (null === e3.wt) {
            e3.wt = [];
            const t4 = Jc(e3), n2 = Yc(e3);
            if (null !== t4 && null === n2) t4.isKeyField() || e3.wt.push(new Ic(t4)), e3.wt.push(new Ic(Aa.keyField(), "asc"));
            else {
              let t5 = false;
              for (const n3 of e3.explicitOrderBy) e3.wt.push(n3), n3.field.isKeyField() && (t5 = true);
              if (!t5) {
                const t6 = e3.explicitOrderBy.length > 0 ? e3.explicitOrderBy[e3.explicitOrderBy.length - 1].dir : "asc";
                e3.wt.push(new Ic(Aa.keyField(), t6));
              }
            }
          }
          return e3.wt;
        }
        function tu(t3) {
          const e3 = oa(t3);
          if (!e3._t) if ("F" === e3.limitType) e3._t = $c(e3.path, e3.collectionGroup, Zc(e3), e3.filters, e3.limit, e3.startAt, e3.endAt);
          else {
            const t4 = [];
            for (const n3 of Zc(e3)) {
              const e4 = "desc" === n3.dir ? "asc" : "desc";
              t4.push(new Ic(n3.field, e4));
            }
            const n2 = e3.endAt ? new _c(e3.endAt.position, e3.endAt.inclusive) : null, r2 = e3.startAt ? new _c(e3.startAt.position, e3.startAt.inclusive) : null;
            e3._t = $c(e3.path, e3.collectionGroup, t4, e3.filters, e3.limit, n2, r2);
          }
          return e3._t;
        }
        function eu(t3, e3) {
          e3.getFirstInequalityField(), Jc(t3);
          const n2 = t3.filters.concat([e3]);
          return new Gc(t3.path, t3.collectionGroup, t3.explicitOrderBy.slice(), n2, t3.limit, t3.limitType, t3.startAt, t3.endAt);
        }
        function nu(t3, e3, n2) {
          return new Gc(t3.path, t3.collectionGroup, t3.explicitOrderBy.slice(), t3.filters.slice(), e3, n2, t3.startAt, t3.endAt);
        }
        function ru(t3, e3) {
          return Kc(tu(t3), tu(e3)) && t3.limitType === e3.limitType;
        }
        function iu(t3) {
          return `${zc(tu(t3))}|lt:${t3.limitType}`;
        }
        function su(t3) {
          return `Query(target=${function(t4) {
            let e3 = t4.path.canonicalString();
            return null !== t4.collectionGroup && (e3 += " collectionGroup=" + t4.collectionGroup), t4.filters.length > 0 && (e3 += `, filters: [${t4.filters.map((t5) => Lc(t5)).join(", ")}]`), xa(t4.limit) || (e3 += ", limit: " + t4.limit), t4.orderBy.length > 0 && (e3 += `, orderBy: [${t4.orderBy.map((t5) => function(t6) {
              return `${t6.field.canonicalString()} (${t6.dir})`;
            }(t5)).join(", ")}]`), t4.startAt && (e3 += ", startAt: ", e3 += t4.startAt.inclusive ? "b:" : "a:", e3 += t4.startAt.position.map((t5) => uc(t5)).join(",")), t4.endAt && (e3 += ", endAt: ", e3 += t4.endAt.inclusive ? "a:" : "b:", e3 += t4.endAt.position.map((t5) => uc(t5)).join(",")), `Target(${e3})`;
          }(tu(t3))}; limitType=${t3.limitType})`;
        }
        function ou(t3, e3) {
          return e3.isFoundDocument() && function(t4, e4) {
            const n2 = e4.key.path;
            return null !== t4.collectionGroup ? e4.key.hasCollectionId(t4.collectionGroup) && t4.path.isPrefixOf(n2) : Ca.isDocumentKey(t4.path) ? t4.path.isEqual(n2) : t4.path.isImmediateParentOf(n2);
          }(t3, e3) && function(t4, e4) {
            for (const n2 of Zc(t4)) if (!n2.field.isKeyField() && null === e4.data.field(n2.field)) return false;
            return true;
          }(t3, e3) && function(t4, e4) {
            for (const n2 of t4.filters) if (!n2.matches(e4)) return false;
            return true;
          }(t3, e3) && function(t4, e4) {
            return !(t4.startAt && !function(t5, e5, n2) {
              const r2 = Ec(t5, e5, n2);
              return t5.inclusive ? r2 <= 0 : r2 < 0;
            }(t4.startAt, Zc(t4), e4) || t4.endAt && !function(t5, e5, n2) {
              const r2 = Ec(t5, e5, n2);
              return t5.inclusive ? r2 >= 0 : r2 > 0;
            }(t4.endAt, Zc(t4), e4));
          }(t3, e3);
        }
        function au(t3) {
          return (e3, n2) => {
            let r2 = false;
            for (const i2 of Zc(t3)) {
              const t4 = cu(i2, e3, n2);
              if (0 !== t4) return t4;
              r2 = r2 || i2.field.isKeyField();
            }
            return 0;
          };
        }
        function cu(t3, e3, n2) {
          const r2 = t3.field.isKeyField() ? Ca.comparator(e3.key, n2.key) : function(t4, e4, n3) {
            const r3 = e4.data.field(t4), i2 = n3.data.field(t4);
            return null !== r3 && null !== i2 ? ac(r3, i2) : ia();
          }(t3.field, e3, n2);
          switch (t3.dir) {
            case "asc":
              return r2;
            case "desc":
              return -1 * r2;
            default:
              return ia();
          }
        }
        class uu {
          constructor(t3, e3) {
            this.mapKeyFn = t3, this.equalsFn = e3, this.inner = {}, this.innerSize = 0;
          }
          get(t3) {
            const e3 = this.mapKeyFn(t3), n2 = this.inner[e3];
            if (void 0 !== n2) {
              for (const [e4, r2] of n2) if (this.equalsFn(e4, t3)) return r2;
            }
          }
          has(t3) {
            return void 0 !== this.get(t3);
          }
          set(t3, e3) {
            const n2 = this.mapKeyFn(t3), r2 = this.inner[n2];
            if (void 0 === r2) return this.inner[n2] = [[t3, e3]], void this.innerSize++;
            for (let n3 = 0; n3 < r2.length; n3++) if (this.equalsFn(r2[n3][0], t3)) return void (r2[n3] = [t3, e3]);
            r2.push([t3, e3]), this.innerSize++;
          }
          delete(t3) {
            const e3 = this.mapKeyFn(t3), n2 = this.inner[e3];
            if (void 0 === n2) return false;
            for (let r2 = 0; r2 < n2.length; r2++) if (this.equalsFn(n2[r2][0], t3)) return 1 === n2.length ? delete this.inner[e3] : n2.splice(r2, 1), this.innerSize--, true;
            return false;
          }
          forEach(t3) {
            Fa(this.inner, (e3, n2) => {
              for (const [e4, r2] of n2) t3(e4, r2);
            });
          }
          isEmpty() {
            return Va(this.inner);
          }
          size() {
            return this.innerSize;
          }
        }
        const hu = new ja(Ca.comparator);
        function lu() {
          return hu;
        }
        const du = new ja(Ca.comparator);
        function fu(...t3) {
          let e3 = du;
          for (const n2 of t3) e3 = e3.insert(n2.key, n2);
          return e3;
        }
        function pu(t3) {
          let e3 = du;
          return t3.forEach((t4, n2) => e3 = e3.insert(t4, n2.overlayedDocument)), e3;
        }
        function gu() {
          return yu();
        }
        function mu() {
          return yu();
        }
        function yu() {
          return new uu((t3) => t3.toString(), (t3, e3) => t3.isEqual(e3));
        }
        new ja(Ca.comparator);
        const vu = new $a(Ca.comparator);
        function wu(...t3) {
          let e3 = vu;
          for (const n2 of t3) e3 = e3.add(n2);
          return e3;
        }
        const bu = new $a(wa);
        function _u(t3, e3) {
          if (t3.useProto3Json) {
            if (isNaN(e3)) return { doubleValue: "NaN" };
            if (e3 === 1 / 0) return { doubleValue: "Infinity" };
            if (e3 === -1 / 0) return { doubleValue: "-Infinity" };
          }
          return { doubleValue: Ma(e3) ? "-0" : e3 };
        }
        function Eu(t3) {
          return { integerValue: "" + t3 };
        }
        function Tu(t3, e3) {
          return function(t4) {
            return "number" == typeof t4 && Number.isInteger(t4) && !Ma(t4) && t4 <= Number.MAX_SAFE_INTEGER && t4 >= Number.MIN_SAFE_INTEGER;
          }(e3) ? Eu(e3) : _u(t3, e3);
        }
        class Iu {
          constructor() {
            this._ = void 0;
          }
        }
        function Su(t3, e3, n2) {
          return t3 instanceof Cu ? function(t4, e4) {
            const n3 = { fields: { __type__: { stringValue: "server_timestamp" }, __local_write_time__: { timestampValue: { seconds: t4.seconds, nanos: t4.nanoseconds } } } };
            return e4 && Xa(e4) && (e4 = Za(e4)), e4 && (n3.fields.__previous_value__ = e4), { mapValue: n3 };
          }(n2, e3) : t3 instanceof ku ? Nu(t3, e3) : t3 instanceof Ou ? Du(t3, e3) : function(t4, e4) {
            const n3 = function(t5, e5) {
              return t5 instanceof Ru ? dc(n4 = e5) || function(t6) {
                return !!t6 && "doubleValue" in t6;
              }(n4) ? e5 : { integerValue: 0 } : null;
              var n4;
            }(t4, e4), r2 = Lu(n3) + Lu(t4.gt);
            return dc(n3) && dc(t4.gt) ? Eu(r2) : _u(t4.serializer, r2);
          }(t3, e3);
        }
        function Au(t3, e3, n2) {
          return t3 instanceof ku ? Nu(t3, e3) : t3 instanceof Ou ? Du(t3, e3) : n2;
        }
        class Cu extends Iu {
        }
        class ku extends Iu {
          constructor(t3) {
            super(), this.elements = t3;
          }
        }
        function Nu(t3, e3) {
          const n2 = Pu(e3);
          for (const e4 of t3.elements) n2.some((t4) => sc(t4, e4)) || n2.push(e4);
          return { arrayValue: { values: n2 } };
        }
        class Ou extends Iu {
          constructor(t3) {
            super(), this.elements = t3;
          }
        }
        function Du(t3, e3) {
          let n2 = Pu(e3);
          for (const e4 of t3.elements) n2 = n2.filter((t4) => !sc(t4, e4));
          return { arrayValue: { values: n2 } };
        }
        class Ru extends Iu {
          constructor(t3, e3) {
            super(), this.serializer = t3, this.gt = e3;
          }
        }
        function Lu(t3) {
          return Ya(t3.integerValue || t3.doubleValue);
        }
        function Pu(t3) {
          return fc(t3) && t3.arrayValue.values ? t3.arrayValue.values.slice() : [];
        }
        class xu {
          constructor(t3, e3) {
            this.updateTime = t3, this.exists = e3;
          }
          static none() {
            return new xu();
          }
          static exists(t3) {
            return new xu(void 0, t3);
          }
          static updateTime(t3) {
            return new xu(t3);
          }
          get isNone() {
            return void 0 === this.updateTime && void 0 === this.exists;
          }
          isEqual(t3) {
            return this.exists === t3.exists && (this.updateTime ? !!t3.updateTime && this.updateTime.isEqual(t3.updateTime) : !t3.updateTime);
          }
        }
        function Mu(t3, e3) {
          return void 0 !== t3.updateTime ? e3.isFoundDocument() && e3.version.isEqual(t3.updateTime) : void 0 === t3.exists || t3.exists === e3.isFoundDocument();
        }
        class Uu {
        }
        function Fu(t3, e3) {
          if (!t3.hasLocalMutations || e3 && 0 === e3.fields.length) return null;
          if (null === e3) return t3.isNoDocument() ? new Gu(t3.key, xu.none()) : new Bu(t3.key, t3.data, xu.none());
          {
            const n2 = t3.data, r2 = wc.empty();
            let i2 = new $a(Aa.comparator);
            for (let t4 of e3.fields) if (!i2.has(t4)) {
              let e4 = n2.field(t4);
              null === e4 && t4.length > 1 && (t4 = t4.popLast(), e4 = n2.field(t4)), null === e4 ? r2.delete(t4) : r2.set(t4, e4), i2 = i2.add(t4);
            }
            return new $u(t3.key, r2, new Ka(i2.toArray()), xu.none());
          }
        }
        function Vu(t3, e3, n2) {
          t3 instanceof Bu ? function(t4, e4, n3) {
            const r2 = t4.value.clone(), i2 = Ku(t4.fieldTransforms, e4, n3.transformResults);
            r2.setAll(i2), e4.convertToFoundDocument(n3.version, r2).setHasCommittedMutations();
          }(t3, e3, n2) : t3 instanceof $u ? function(t4, e4, n3) {
            if (!Mu(t4.precondition, e4)) return void e4.convertToUnknownDocument(n3.version);
            const r2 = Ku(t4.fieldTransforms, e4, n3.transformResults), i2 = e4.data;
            i2.setAll(zu(t4)), i2.setAll(r2), e4.convertToFoundDocument(n3.version, i2).setHasCommittedMutations();
          }(t3, e3, n2) : function(t4, e4, n3) {
            e4.convertToNoDocument(n3.version).setHasCommittedMutations();
          }(0, e3, n2);
        }
        function ju(t3, e3, n2, r2) {
          return t3 instanceof Bu ? function(t4, e4, n3, r3) {
            if (!Mu(t4.precondition, e4)) return n3;
            const i2 = t4.value.clone(), s2 = Hu(t4.fieldTransforms, r3, e4);
            return i2.setAll(s2), e4.convertToFoundDocument(e4.version, i2).setHasLocalMutations(), null;
          }(t3, e3, n2, r2) : t3 instanceof $u ? function(t4, e4, n3, r3) {
            if (!Mu(t4.precondition, e4)) return n3;
            const i2 = Hu(t4.fieldTransforms, r3, e4), s2 = e4.data;
            return s2.setAll(zu(t4)), s2.setAll(i2), e4.convertToFoundDocument(e4.version, s2).setHasLocalMutations(), null === n3 ? null : n3.unionWith(t4.fieldMask.fields).unionWith(t4.fieldTransforms.map((t5) => t5.field));
          }(t3, e3, n2, r2) : function(t4, e4, n3) {
            return Mu(t4.precondition, e4) ? (e4.convertToNoDocument(e4.version).setHasLocalMutations(), null) : n3;
          }(t3, e3, n2);
        }
        function qu(t3, e3) {
          return t3.type === e3.type && !!t3.key.isEqual(e3.key) && !!t3.precondition.isEqual(e3.precondition) && !!function(t4, e4) {
            return void 0 === t4 && void 0 === e4 || !(!t4 || !e4) && ba(t4, e4, (t5, e5) => function(t6, e6) {
              return t6.field.isEqual(e6.field) && function(t7, e7) {
                return t7 instanceof ku && e7 instanceof ku || t7 instanceof Ou && e7 instanceof Ou ? ba(t7.elements, e7.elements, sc) : t7 instanceof Ru && e7 instanceof Ru ? sc(t7.gt, e7.gt) : t7 instanceof Cu && e7 instanceof Cu;
              }(t6.transform, e6.transform);
            }(t5, e5));
          }(t3.fieldTransforms, e3.fieldTransforms) && (0 === t3.type ? t3.value.isEqual(e3.value) : 1 !== t3.type || t3.data.isEqual(e3.data) && t3.fieldMask.isEqual(e3.fieldMask));
        }
        class Bu extends Uu {
          constructor(t3, e3, n2, r2 = []) {
            super(), this.key = t3, this.value = e3, this.precondition = n2, this.fieldTransforms = r2, this.type = 0;
          }
          getFieldMask() {
            return null;
          }
        }
        class $u extends Uu {
          constructor(t3, e3, n2, r2, i2 = []) {
            super(), this.key = t3, this.data = e3, this.fieldMask = n2, this.precondition = r2, this.fieldTransforms = i2, this.type = 1;
          }
          getFieldMask() {
            return this.fieldMask;
          }
        }
        function zu(t3) {
          const e3 = /* @__PURE__ */ new Map();
          return t3.fieldMask.fields.forEach((n2) => {
            if (!n2.isEmpty()) {
              const r2 = t3.data.field(n2);
              e3.set(n2, r2);
            }
          }), e3;
        }
        function Ku(t3, e3, n2) {
          const r2 = /* @__PURE__ */ new Map();
          sa(t3.length === n2.length);
          for (let i2 = 0; i2 < n2.length; i2++) {
            const s2 = t3[i2], o2 = s2.transform, a2 = e3.data.field(s2.field);
            r2.set(s2.field, Au(o2, a2, n2[i2]));
          }
          return r2;
        }
        function Hu(t3, e3, n2) {
          const r2 = /* @__PURE__ */ new Map();
          for (const i2 of t3) {
            const t4 = i2.transform, s2 = n2.data.field(i2.field);
            r2.set(i2.field, Su(t4, s2, e3));
          }
          return r2;
        }
        class Gu extends Uu {
          constructor(t3, e3) {
            super(), this.key = t3, this.precondition = e3, this.type = 2, this.fieldTransforms = [];
          }
          getFieldMask() {
            return null;
          }
        }
        class Wu {
          constructor(t3, e3, n2, r2) {
            this.batchId = t3, this.localWriteTime = e3, this.baseMutations = n2, this.mutations = r2;
          }
          applyToRemoteDocument(t3, e3) {
            const n2 = e3.mutationResults;
            for (let e4 = 0; e4 < this.mutations.length; e4++) {
              const r2 = this.mutations[e4];
              r2.key.isEqual(t3.key) && Vu(r2, t3, n2[e4]);
            }
          }
          applyToLocalView(t3, e3) {
            for (const n2 of this.baseMutations) n2.key.isEqual(t3.key) && (e3 = ju(n2, t3, e3, this.localWriteTime));
            for (const n2 of this.mutations) n2.key.isEqual(t3.key) && (e3 = ju(n2, t3, e3, this.localWriteTime));
            return e3;
          }
          applyToLocalDocumentSet(t3, e3) {
            const n2 = mu();
            return this.mutations.forEach((r2) => {
              const i2 = t3.get(r2.key), s2 = i2.overlayedDocument;
              let o2 = this.applyToLocalView(s2, i2.mutatedFields);
              o2 = e3.has(r2.key) ? null : o2;
              const a2 = Fu(s2, o2);
              null !== a2 && n2.set(r2.key, a2), s2.isValidDocument() || s2.convertToNoDocument(Ea.min());
            }), n2;
          }
          keys() {
            return this.mutations.reduce((t3, e3) => t3.add(e3.key), wu());
          }
          isEqual(t3) {
            return this.batchId === t3.batchId && ba(this.mutations, t3.mutations, (t4, e3) => qu(t4, e3)) && ba(this.baseMutations, t3.baseMutations, (t4, e3) => qu(t4, e3));
          }
        }
        class Qu {
          constructor(t3, e3) {
            this.largestBatchId = t3, this.mutation = e3;
          }
          getKey() {
            return this.mutation.key;
          }
          isEqual(t3) {
            return null !== t3 && this.mutation === t3.mutation;
          }
          toString() {
            return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
          }
        }
        class Yu {
          constructor(t3, e3) {
            this.count = t3, this.unchangedNames = e3;
          }
        }
        var Ju, Xu;
        function Zu(t3) {
          if (void 0 === t3) return ea("GRPC error has no .code"), aa.UNKNOWN;
          switch (t3) {
            case Ju.OK:
              return aa.OK;
            case Ju.CANCELLED:
              return aa.CANCELLED;
            case Ju.UNKNOWN:
              return aa.UNKNOWN;
            case Ju.DEADLINE_EXCEEDED:
              return aa.DEADLINE_EXCEEDED;
            case Ju.RESOURCE_EXHAUSTED:
              return aa.RESOURCE_EXHAUSTED;
            case Ju.INTERNAL:
              return aa.INTERNAL;
            case Ju.UNAVAILABLE:
              return aa.UNAVAILABLE;
            case Ju.UNAUTHENTICATED:
              return aa.UNAUTHENTICATED;
            case Ju.INVALID_ARGUMENT:
              return aa.INVALID_ARGUMENT;
            case Ju.NOT_FOUND:
              return aa.NOT_FOUND;
            case Ju.ALREADY_EXISTS:
              return aa.ALREADY_EXISTS;
            case Ju.PERMISSION_DENIED:
              return aa.PERMISSION_DENIED;
            case Ju.FAILED_PRECONDITION:
              return aa.FAILED_PRECONDITION;
            case Ju.ABORTED:
              return aa.ABORTED;
            case Ju.OUT_OF_RANGE:
              return aa.OUT_OF_RANGE;
            case Ju.UNIMPLEMENTED:
              return aa.UNIMPLEMENTED;
            case Ju.DATA_LOSS:
              return aa.DATA_LOSS;
            default:
              return ia();
          }
        }
        (Xu = Ju || (Ju = {}))[Xu.OK = 0] = "OK", Xu[Xu.CANCELLED = 1] = "CANCELLED", Xu[Xu.UNKNOWN = 2] = "UNKNOWN", Xu[Xu.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", Xu[Xu.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", Xu[Xu.NOT_FOUND = 5] = "NOT_FOUND", Xu[Xu.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", Xu[Xu.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", Xu[Xu.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", Xu[Xu.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", Xu[Xu.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", Xu[Xu.ABORTED = 10] = "ABORTED", Xu[Xu.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", Xu[Xu.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", Xu[Xu.INTERNAL = 13] = "INTERNAL", Xu[Xu.UNAVAILABLE = 14] = "UNAVAILABLE", Xu[Xu.DATA_LOSS = 15] = "DATA_LOSS";
        class th {
          constructor() {
            this.onExistenceFilterMismatchCallbacks = /* @__PURE__ */ new Map();
          }
          static get instance() {
            return eh;
          }
          static getOrCreateInstance() {
            return null === eh && (eh = new th()), eh;
          }
          onExistenceFilterMismatch(t3) {
            const e3 = Symbol();
            return this.onExistenceFilterMismatchCallbacks.set(e3, t3), () => this.onExistenceFilterMismatchCallbacks.delete(e3);
          }
          notifyOnExistenceFilterMismatch(t3) {
            this.onExistenceFilterMismatchCallbacks.forEach((e3) => e3(t3));
          }
        }
        let eh = null;
        const nh = new Wo([4294967295, 4294967295], 0);
        function rh(t3) {
          const e3 = new TextEncoder().encode(t3), n2 = new Go();
          return n2.update(e3), new Uint8Array(n2.digest());
        }
        function ih(t3) {
          const e3 = new DataView(t3.buffer), n2 = e3.getUint32(0, true), r2 = e3.getUint32(4, true), i2 = e3.getUint32(8, true), s2 = e3.getUint32(12, true);
          return [new Wo([n2, r2], 0), new Wo([i2, s2], 0)];
        }
        class sh {
          constructor(t3, e3, n2) {
            if (this.bitmap = t3, this.padding = e3, this.hashCount = n2, e3 < 0 || e3 >= 8) throw new oh(`Invalid padding: ${e3}`);
            if (n2 < 0) throw new oh(`Invalid hash count: ${n2}`);
            if (t3.length > 0 && 0 === this.hashCount) throw new oh(`Invalid hash count: ${n2}`);
            if (0 === t3.length && 0 !== e3) throw new oh(`Invalid padding when bitmap length is 0: ${e3}`);
            this.It = 8 * t3.length - e3, this.Tt = Wo.fromNumber(this.It);
          }
          Et(t3, e3, n2) {
            let r2 = t3.add(e3.multiply(Wo.fromNumber(n2)));
            return 1 === r2.compare(nh) && (r2 = new Wo([r2.getBits(0), r2.getBits(1)], 0)), r2.modulo(this.Tt).toNumber();
          }
          At(t3) {
            return 0 != (this.bitmap[Math.floor(t3 / 8)] & 1 << t3 % 8);
          }
          vt(t3) {
            if (0 === this.It) return false;
            const e3 = rh(t3), [n2, r2] = ih(e3);
            for (let t4 = 0; t4 < this.hashCount; t4++) {
              const e4 = this.Et(n2, r2, t4);
              if (!this.At(e4)) return false;
            }
            return true;
          }
          static create(t3, e3, n2) {
            const r2 = t3 % 8 == 0 ? 0 : 8 - t3 % 8, i2 = new Uint8Array(Math.ceil(t3 / 8)), s2 = new sh(i2, r2, e3);
            return n2.forEach((t4) => s2.insert(t4)), s2;
          }
          insert(t3) {
            if (0 === this.It) return;
            const e3 = rh(t3), [n2, r2] = ih(e3);
            for (let t4 = 0; t4 < this.hashCount; t4++) {
              const e4 = this.Et(n2, r2, t4);
              this.Rt(e4);
            }
          }
          Rt(t3) {
            const e3 = Math.floor(t3 / 8), n2 = t3 % 8;
            this.bitmap[e3] |= 1 << n2;
          }
        }
        class oh extends Error {
          constructor() {
            super(...arguments), this.name = "BloomFilterError";
          }
        }
        class ah {
          constructor(t3, e3, n2, r2, i2) {
            this.snapshotVersion = t3, this.targetChanges = e3, this.targetMismatches = n2, this.documentUpdates = r2, this.resolvedLimboDocuments = i2;
          }
          static createSynthesizedRemoteEventForCurrentChange(t3, e3, n2) {
            const r2 = /* @__PURE__ */ new Map();
            return r2.set(t3, ch.createSynthesizedTargetChangeForCurrentChange(t3, e3, n2)), new ah(Ea.min(), r2, new ja(wa), lu(), wu());
          }
        }
        class ch {
          constructor(t3, e3, n2, r2, i2) {
            this.resumeToken = t3, this.current = e3, this.addedDocuments = n2, this.modifiedDocuments = r2, this.removedDocuments = i2;
          }
          static createSynthesizedTargetChangeForCurrentChange(t3, e3, n2) {
            return new ch(n2, e3, wu(), wu(), wu());
          }
        }
        class uh {
          constructor(t3, e3, n2, r2) {
            this.Pt = t3, this.removedTargetIds = e3, this.key = n2, this.bt = r2;
          }
        }
        class hh {
          constructor(t3, e3) {
            this.targetId = t3, this.Vt = e3;
          }
        }
        class lh {
          constructor(t3, e3, n2 = Ga.EMPTY_BYTE_STRING, r2 = null) {
            this.state = t3, this.targetIds = e3, this.resumeToken = n2, this.cause = r2;
          }
        }
        class dh {
          constructor() {
            this.St = 0, this.Dt = gh(), this.Ct = Ga.EMPTY_BYTE_STRING, this.xt = false, this.Nt = true;
          }
          get current() {
            return this.xt;
          }
          get resumeToken() {
            return this.Ct;
          }
          get kt() {
            return 0 !== this.St;
          }
          get Mt() {
            return this.Nt;
          }
          $t(t3) {
            t3.approximateByteSize() > 0 && (this.Nt = true, this.Ct = t3);
          }
          Ot() {
            let t3 = wu(), e3 = wu(), n2 = wu();
            return this.Dt.forEach((r2, i2) => {
              switch (i2) {
                case 0:
                  t3 = t3.add(r2);
                  break;
                case 2:
                  e3 = e3.add(r2);
                  break;
                case 1:
                  n2 = n2.add(r2);
                  break;
                default:
                  ia();
              }
            }), new ch(this.Ct, this.xt, t3, e3, n2);
          }
          Ft() {
            this.Nt = false, this.Dt = gh();
          }
          Bt(t3, e3) {
            this.Nt = true, this.Dt = this.Dt.insert(t3, e3);
          }
          Lt(t3) {
            this.Nt = true, this.Dt = this.Dt.remove(t3);
          }
          qt() {
            this.St += 1;
          }
          Ut() {
            this.St -= 1;
          }
          Kt() {
            this.Nt = true, this.xt = true;
          }
        }
        class fh {
          constructor(t3) {
            this.Gt = t3, this.Qt = /* @__PURE__ */ new Map(), this.jt = lu(), this.zt = ph(), this.Wt = new ja(wa);
          }
          Ht(t3) {
            for (const e3 of t3.Pt) t3.bt && t3.bt.isFoundDocument() ? this.Jt(e3, t3.bt) : this.Yt(e3, t3.key, t3.bt);
            for (const e3 of t3.removedTargetIds) this.Yt(e3, t3.key, t3.bt);
          }
          Xt(t3) {
            this.forEachTarget(t3, (e3) => {
              const n2 = this.Zt(e3);
              switch (t3.state) {
                case 0:
                  this.te(e3) && n2.$t(t3.resumeToken);
                  break;
                case 1:
                  n2.Ut(), n2.kt || n2.Ft(), n2.$t(t3.resumeToken);
                  break;
                case 2:
                  n2.Ut(), n2.kt || this.removeTarget(e3);
                  break;
                case 3:
                  this.te(e3) && (n2.Kt(), n2.$t(t3.resumeToken));
                  break;
                case 4:
                  this.te(e3) && (this.ee(e3), n2.$t(t3.resumeToken));
                  break;
                default:
                  ia();
              }
            });
          }
          forEachTarget(t3, e3) {
            t3.targetIds.length > 0 ? t3.targetIds.forEach(e3) : this.Qt.forEach((t4, n2) => {
              this.te(n2) && e3(n2);
            });
          }
          ne(t3) {
            var e3;
            const n2 = t3.targetId, r2 = t3.Vt.count, i2 = this.se(n2);
            if (i2) {
              const s2 = i2.target;
              if (Hc(s2)) if (0 === r2) {
                const t4 = new Ca(s2.path);
                this.Yt(n2, t4, bc.newNoDocument(t4, Ea.min()));
              } else sa(1 === r2);
              else {
                const i3 = this.ie(n2);
                if (i3 !== r2) {
                  const r3 = this.re(t3, i3);
                  if (0 !== r3) {
                    this.ee(n2);
                    const t4 = 2 === r3 ? "TargetPurposeExistenceFilterMismatchBloom" : "TargetPurposeExistenceFilterMismatch";
                    this.Wt = this.Wt.insert(n2, t4);
                  }
                  null === (e3 = th.instance) || void 0 === e3 || e3.notifyOnExistenceFilterMismatch(function(t4, e4, n3) {
                    var r4, i4, s3, o2, a2, c2;
                    const u2 = { localCacheCount: e4, existenceFilterCount: n3.count }, h2 = n3.unchangedNames;
                    return h2 && (u2.bloomFilter = { applied: 0 === t4, hashCount: null !== (r4 = null == h2 ? void 0 : h2.hashCount) && void 0 !== r4 ? r4 : 0, bitmapLength: null !== (o2 = null === (s3 = null === (i4 = null == h2 ? void 0 : h2.bits) || void 0 === i4 ? void 0 : i4.bitmap) || void 0 === s3 ? void 0 : s3.length) && void 0 !== o2 ? o2 : 0, padding: null !== (c2 = null === (a2 = null == h2 ? void 0 : h2.bits) || void 0 === a2 ? void 0 : a2.padding) && void 0 !== c2 ? c2 : 0 }), u2;
                  }(r3, i3, t3.Vt));
                }
              }
            }
          }
          re(t3, e3) {
            const { unchangedNames: n2, count: r2 } = t3.Vt;
            if (!n2 || !n2.bits) return 1;
            const { bits: { bitmap: i2 = "", padding: s2 = 0 }, hashCount: o2 = 0 } = n2;
            let a2, c2;
            try {
              a2 = Ja(i2).toUint8Array();
            } catch (t4) {
              if (t4 instanceof Ha) return na("Decoding the base64 bloom filter in existence filter failed (" + t4.message + "); ignoring the bloom filter and falling back to full re-query."), 1;
              throw t4;
            }
            try {
              c2 = new sh(a2, s2, o2);
            } catch (t4) {
              return na(t4 instanceof oh ? "BloomFilter error: " : "Applying bloom filter failed: ", t4), 1;
            }
            return 0 === c2.It ? 1 : r2 !== e3 - this.oe(t3.targetId, c2) ? 2 : 0;
          }
          oe(t3, e3) {
            const n2 = this.Gt.getRemoteKeysForTarget(t3);
            let r2 = 0;
            return n2.forEach((n3) => {
              const i2 = this.Gt.ue(), s2 = `projects/${i2.projectId}/databases/${i2.database}/documents/${n3.path.canonicalString()}`;
              e3.vt(s2) || (this.Yt(t3, n3, null), r2++);
            }), r2;
          }
          ce(t3) {
            const e3 = /* @__PURE__ */ new Map();
            this.Qt.forEach((n3, r3) => {
              const i2 = this.se(r3);
              if (i2) {
                if (n3.current && Hc(i2.target)) {
                  const e4 = new Ca(i2.target.path);
                  null !== this.jt.get(e4) || this.ae(r3, e4) || this.Yt(r3, e4, bc.newNoDocument(e4, t3));
                }
                n3.Mt && (e3.set(r3, n3.Ot()), n3.Ft());
              }
            });
            let n2 = wu();
            this.zt.forEach((t4, e4) => {
              let r3 = true;
              e4.forEachWhile((t5) => {
                const e5 = this.se(t5);
                return !e5 || "TargetPurposeLimboResolution" === e5.purpose || (r3 = false, false);
              }), r3 && (n2 = n2.add(t4));
            }), this.jt.forEach((e4, n3) => n3.setReadTime(t3));
            const r2 = new ah(t3, e3, this.Wt, this.jt, n2);
            return this.jt = lu(), this.zt = ph(), this.Wt = new ja(wa), r2;
          }
          Jt(t3, e3) {
            if (!this.te(t3)) return;
            const n2 = this.ae(t3, e3.key) ? 2 : 0;
            this.Zt(t3).Bt(e3.key, n2), this.jt = this.jt.insert(e3.key, e3), this.zt = this.zt.insert(e3.key, this.he(e3.key).add(t3));
          }
          Yt(t3, e3, n2) {
            if (!this.te(t3)) return;
            const r2 = this.Zt(t3);
            this.ae(t3, e3) ? r2.Bt(e3, 1) : r2.Lt(e3), this.zt = this.zt.insert(e3, this.he(e3).delete(t3)), n2 && (this.jt = this.jt.insert(e3, n2));
          }
          removeTarget(t3) {
            this.Qt.delete(t3);
          }
          ie(t3) {
            const e3 = this.Zt(t3).Ot();
            return this.Gt.getRemoteKeysForTarget(t3).size + e3.addedDocuments.size - e3.removedDocuments.size;
          }
          qt(t3) {
            this.Zt(t3).qt();
          }
          Zt(t3) {
            let e3 = this.Qt.get(t3);
            return e3 || (e3 = new dh(), this.Qt.set(t3, e3)), e3;
          }
          he(t3) {
            let e3 = this.zt.get(t3);
            return e3 || (e3 = new $a(wa), this.zt = this.zt.insert(t3, e3)), e3;
          }
          te(t3) {
            const e3 = null !== this.se(t3);
            return e3 || ta("WatchChangeAggregator", "Detected inactive target", t3), e3;
          }
          se(t3) {
            const e3 = this.Qt.get(t3);
            return e3 && e3.kt ? null : this.Gt.le(t3);
          }
          ee(t3) {
            this.Qt.set(t3, new dh()), this.Gt.getRemoteKeysForTarget(t3).forEach((e3) => {
              this.Yt(t3, e3, null);
            });
          }
          ae(t3, e3) {
            return this.Gt.getRemoteKeysForTarget(t3).has(e3);
          }
        }
        function ph() {
          return new ja(Ca.comparator);
        }
        function gh() {
          return new ja(Ca.comparator);
        }
        const mh = { asc: "ASCENDING", desc: "DESCENDING" }, yh = { "<": "LESS_THAN", "<=": "LESS_THAN_OR_EQUAL", ">": "GREATER_THAN", ">=": "GREATER_THAN_OR_EQUAL", "==": "EQUAL", "!=": "NOT_EQUAL", "array-contains": "ARRAY_CONTAINS", in: "IN", "not-in": "NOT_IN", "array-contains-any": "ARRAY_CONTAINS_ANY" }, vh = { and: "AND", or: "OR" };
        class wh {
          constructor(t3, e3) {
            this.databaseId = t3, this.useProto3Json = e3;
          }
        }
        function bh(t3, e3) {
          return t3.useProto3Json || xa(e3) ? e3 : { value: e3 };
        }
        function _h(t3, e3) {
          return t3.useProto3Json ? `${new Date(1e3 * e3.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + e3.nanoseconds).slice(-9)}Z` : { seconds: "" + e3.seconds, nanos: e3.nanoseconds };
        }
        function Eh(t3, e3) {
          return t3.useProto3Json ? e3.toBase64() : e3.toUint8Array();
        }
        function Th(t3) {
          return sa(!!t3), Ea.fromTimestamp(function(t4) {
            const e3 = Qa(t4);
            return new _a(e3.seconds, e3.nanos);
          }(t3));
        }
        function Ih(t3, e3) {
          return function(t4) {
            return new Ia(["projects", t4.projectId, "databases", t4.database]);
          }(t3).child("documents").child(e3).canonicalString();
        }
        function Sh(t3) {
          const e3 = Ia.fromString(t3);
          return sa(jh(e3)), e3;
        }
        function Ah(t3, e3) {
          const n2 = Sh(e3);
          if (n2.get(1) !== t3.databaseId.projectId) throw new ca(aa.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + n2.get(1) + " vs " + t3.databaseId.projectId);
          if (n2.get(3) !== t3.databaseId.database) throw new ca(aa.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + n2.get(3) + " vs " + t3.databaseId.database);
          return new Ca(Nh(n2));
        }
        function Ch(t3, e3) {
          return Ih(t3.databaseId, e3);
        }
        function kh(t3) {
          return new Ia(["projects", t3.databaseId.projectId, "databases", t3.databaseId.database]).canonicalString();
        }
        function Nh(t3) {
          return sa(t3.length > 4 && "documents" === t3.get(4)), t3.popFirst(5);
        }
        function Oh(t3, e3) {
          return { documents: [Ch(t3, e3.path)] };
        }
        function Dh(t3, e3) {
          const n2 = { structuredQuery: {} }, r2 = e3.path;
          null !== e3.collectionGroup ? (n2.parent = Ch(t3, r2), n2.structuredQuery.from = [{ collectionId: e3.collectionGroup, allDescendants: true }]) : (n2.parent = Ch(t3, r2.popLast()), n2.structuredQuery.from = [{ collectionId: r2.lastSegment() }]);
          const i2 = function(t4) {
            if (0 !== t4.length) return Vh(kc.create(t4, "and"));
          }(e3.filters);
          i2 && (n2.structuredQuery.where = i2);
          const s2 = function(t4) {
            if (0 !== t4.length) return t4.map((t5) => function(t6) {
              return { field: Uh(t6.field), direction: Ph(t6.dir) };
            }(t5));
          }(e3.orderBy);
          s2 && (n2.structuredQuery.orderBy = s2);
          const o2 = bh(t3, e3.limit);
          var a2;
          return null !== o2 && (n2.structuredQuery.limit = o2), e3.startAt && (n2.structuredQuery.startAt = { before: (a2 = e3.startAt).inclusive, values: a2.position }), e3.endAt && (n2.structuredQuery.endAt = function(t4) {
            return { before: !t4.inclusive, values: t4.position };
          }(e3.endAt)), n2;
        }
        function Rh(t3) {
          let e3 = function(t4) {
            const e4 = Sh(t4);
            return 4 === e4.length ? Ia.emptyPath() : Nh(e4);
          }(t3.parent);
          const n2 = t3.structuredQuery, r2 = n2.from ? n2.from.length : 0;
          let i2 = null;
          if (r2 > 0) {
            sa(1 === r2);
            const t4 = n2.from[0];
            t4.allDescendants ? i2 = t4.collectionId : e3 = e3.child(t4.collectionId);
          }
          let s2 = [];
          n2.where && (s2 = function(t4) {
            const e4 = Lh(t4);
            return e4 instanceof kc && Oc(e4) ? e4.getFilters() : [e4];
          }(n2.where));
          let o2 = [];
          n2.orderBy && (o2 = n2.orderBy.map((t4) => function(t5) {
            return new Ic(Fh(t5.field), function(t6) {
              switch (t6) {
                case "ASCENDING":
                  return "asc";
                case "DESCENDING":
                  return "desc";
                default:
                  return;
              }
            }(t5.direction));
          }(t4)));
          let a2 = null;
          n2.limit && (a2 = function(t4) {
            let e4;
            return e4 = "object" == typeof t4 ? t4.value : t4, xa(e4) ? null : e4;
          }(n2.limit));
          let c2 = null;
          n2.startAt && (c2 = function(t4) {
            const e4 = !!t4.before, n3 = t4.values || [];
            return new _c(n3, e4);
          }(n2.startAt));
          let u2 = null;
          return n2.endAt && (u2 = function(t4) {
            const e4 = !t4.before, n3 = t4.values || [];
            return new _c(n3, e4);
          }(n2.endAt)), function(t4, e4, n3, r3, i3, s3, o3, a3) {
            return new Gc(t4, e4, n3, r3, i3, s3, o3, a3);
          }(e3, i2, o2, s2, a2, "F", c2, u2);
        }
        function Lh(t3) {
          return void 0 !== t3.unaryFilter ? function(t4) {
            switch (t4.unaryFilter.op) {
              case "IS_NAN":
                const e3 = Fh(t4.unaryFilter.field);
                return Cc.create(e3, "==", { doubleValue: NaN });
              case "IS_NULL":
                const n2 = Fh(t4.unaryFilter.field);
                return Cc.create(n2, "==", { nullValue: "NULL_VALUE" });
              case "IS_NOT_NAN":
                const r2 = Fh(t4.unaryFilter.field);
                return Cc.create(r2, "!=", { doubleValue: NaN });
              case "IS_NOT_NULL":
                const i2 = Fh(t4.unaryFilter.field);
                return Cc.create(i2, "!=", { nullValue: "NULL_VALUE" });
              default:
                return ia();
            }
          }(t3) : void 0 !== t3.fieldFilter ? function(t4) {
            return Cc.create(Fh(t4.fieldFilter.field), function(t5) {
              switch (t5) {
                case "EQUAL":
                  return "==";
                case "NOT_EQUAL":
                  return "!=";
                case "GREATER_THAN":
                  return ">";
                case "GREATER_THAN_OR_EQUAL":
                  return ">=";
                case "LESS_THAN":
                  return "<";
                case "LESS_THAN_OR_EQUAL":
                  return "<=";
                case "ARRAY_CONTAINS":
                  return "array-contains";
                case "IN":
                  return "in";
                case "NOT_IN":
                  return "not-in";
                case "ARRAY_CONTAINS_ANY":
                  return "array-contains-any";
                default:
                  return ia();
              }
            }(t4.fieldFilter.op), t4.fieldFilter.value);
          }(t3) : void 0 !== t3.compositeFilter ? function(t4) {
            return kc.create(t4.compositeFilter.filters.map((t5) => Lh(t5)), function(t5) {
              switch (t5) {
                case "AND":
                  return "and";
                case "OR":
                  return "or";
                default:
                  return ia();
              }
            }(t4.compositeFilter.op));
          }(t3) : ia();
        }
        function Ph(t3) {
          return mh[t3];
        }
        function xh(t3) {
          return yh[t3];
        }
        function Mh(t3) {
          return vh[t3];
        }
        function Uh(t3) {
          return { fieldPath: t3.canonicalString() };
        }
        function Fh(t3) {
          return Aa.fromServerFormat(t3.fieldPath);
        }
        function Vh(t3) {
          return t3 instanceof Cc ? function(t4) {
            if ("==" === t4.op) {
              if (gc(t4.value)) return { unaryFilter: { field: Uh(t4.field), op: "IS_NAN" } };
              if (pc(t4.value)) return { unaryFilter: { field: Uh(t4.field), op: "IS_NULL" } };
            } else if ("!=" === t4.op) {
              if (gc(t4.value)) return { unaryFilter: { field: Uh(t4.field), op: "IS_NOT_NAN" } };
              if (pc(t4.value)) return { unaryFilter: { field: Uh(t4.field), op: "IS_NOT_NULL" } };
            }
            return { fieldFilter: { field: Uh(t4.field), op: xh(t4.op), value: t4.value } };
          }(t3) : t3 instanceof kc ? function(t4) {
            const e3 = t4.getFilters().map((t5) => Vh(t5));
            return 1 === e3.length ? e3[0] : { compositeFilter: { op: Mh(t4.op), filters: e3 } };
          }(t3) : ia();
        }
        function jh(t3) {
          return t3.length >= 4 && "projects" === t3.get(0) && "databases" === t3.get(2);
        }
        class qh {
          constructor(t3, e3, n2, r2, i2 = Ea.min(), s2 = Ea.min(), o2 = Ga.EMPTY_BYTE_STRING, a2 = null) {
            this.target = t3, this.targetId = e3, this.purpose = n2, this.sequenceNumber = r2, this.snapshotVersion = i2, this.lastLimboFreeSnapshotVersion = s2, this.resumeToken = o2, this.expectedCount = a2;
          }
          withSequenceNumber(t3) {
            return new qh(this.target, this.targetId, this.purpose, t3, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken, this.expectedCount);
          }
          withResumeToken(t3, e3) {
            return new qh(this.target, this.targetId, this.purpose, this.sequenceNumber, e3, this.lastLimboFreeSnapshotVersion, t3, null);
          }
          withExpectedCount(t3) {
            return new qh(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken, t3);
          }
          withLastLimboFreeSnapshotVersion(t3) {
            return new qh(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, t3, this.resumeToken, this.expectedCount);
          }
        }
        class Bh {
          constructor(t3) {
            this.fe = t3;
          }
        }
        function $h(t3) {
          const e3 = Rh({ parent: t3.parent, structuredQuery: t3.structuredQuery });
          return "LAST" === t3.limitType ? nu(e3, e3.limit, "L") : e3;
        }
        class zh {
          constructor() {
          }
          _e(t3, e3) {
            this.me(t3, e3), e3.ge();
          }
          me(t3, e3) {
            if ("nullValue" in t3) this.ye(e3, 5);
            else if ("booleanValue" in t3) this.ye(e3, 10), e3.pe(t3.booleanValue ? 1 : 0);
            else if ("integerValue" in t3) this.ye(e3, 15), e3.pe(Ya(t3.integerValue));
            else if ("doubleValue" in t3) {
              const n2 = Ya(t3.doubleValue);
              isNaN(n2) ? this.ye(e3, 13) : (this.ye(e3, 15), Ma(n2) ? e3.pe(0) : e3.pe(n2));
            } else if ("timestampValue" in t3) {
              const n2 = t3.timestampValue;
              this.ye(e3, 20), "string" == typeof n2 ? e3.Ie(n2) : (e3.Ie(`${n2.seconds || ""}`), e3.pe(n2.nanos || 0));
            } else if ("stringValue" in t3) this.Te(t3.stringValue, e3), this.Ee(e3);
            else if ("bytesValue" in t3) this.ye(e3, 30), e3.Ae(Ja(t3.bytesValue)), this.Ee(e3);
            else if ("referenceValue" in t3) this.ve(t3.referenceValue, e3);
            else if ("geoPointValue" in t3) {
              const n2 = t3.geoPointValue;
              this.ye(e3, 45), e3.pe(n2.latitude || 0), e3.pe(n2.longitude || 0);
            } else "mapValue" in t3 ? vc(t3) ? this.ye(e3, Number.MAX_SAFE_INTEGER) : (this.Re(t3.mapValue, e3), this.Ee(e3)) : "arrayValue" in t3 ? (this.Pe(t3.arrayValue, e3), this.Ee(e3)) : ia();
          }
          Te(t3, e3) {
            this.ye(e3, 25), this.be(t3, e3);
          }
          be(t3, e3) {
            e3.Ie(t3);
          }
          Re(t3, e3) {
            const n2 = t3.fields || {};
            this.ye(e3, 55);
            for (const t4 of Object.keys(n2)) this.Te(t4, e3), this.me(n2[t4], e3);
          }
          Pe(t3, e3) {
            const n2 = t3.values || [];
            this.ye(e3, 50);
            for (const t4 of n2) this.me(t4, e3);
          }
          ve(t3, e3) {
            this.ye(e3, 37), Ca.fromName(t3).path.forEach((t4) => {
              this.ye(e3, 60), this.be(t4, e3);
            });
          }
          ye(t3, e3) {
            t3.pe(e3);
          }
          Ee(t3) {
            t3.pe(2);
          }
        }
        zh.Ve = new zh();
        class Kh {
          constructor() {
            this.rn = new Hh();
          }
          addToCollectionParentIndex(t3, e3) {
            return this.rn.add(e3), Ra.resolve();
          }
          getCollectionParents(t3, e3) {
            return Ra.resolve(this.rn.getEntries(e3));
          }
          addFieldIndex(t3, e3) {
            return Ra.resolve();
          }
          deleteFieldIndex(t3, e3) {
            return Ra.resolve();
          }
          getDocumentsMatchingTarget(t3, e3) {
            return Ra.resolve(null);
          }
          getIndexType(t3, e3) {
            return Ra.resolve(0);
          }
          getFieldIndexes(t3, e3) {
            return Ra.resolve([]);
          }
          getNextCollectionGroupToUpdate(t3) {
            return Ra.resolve(null);
          }
          getMinOffset(t3, e3) {
            return Ra.resolve(Na.min());
          }
          getMinOffsetFromCollectionGroup(t3, e3) {
            return Ra.resolve(Na.min());
          }
          updateCollectionGroup(t3, e3, n2) {
            return Ra.resolve();
          }
          updateIndexEntries(t3, e3) {
            return Ra.resolve();
          }
        }
        class Hh {
          constructor() {
            this.index = {};
          }
          add(t3) {
            const e3 = t3.lastSegment(), n2 = t3.popLast(), r2 = this.index[e3] || new $a(Ia.comparator), i2 = !r2.has(n2);
            return this.index[e3] = r2.add(n2), i2;
          }
          has(t3) {
            const e3 = t3.lastSegment(), n2 = t3.popLast(), r2 = this.index[e3];
            return r2 && r2.has(n2);
          }
          getEntries(t3) {
            return (this.index[t3] || new $a(Ia.comparator)).toArray();
          }
        }
        new Uint8Array(0);
        class Gh {
          constructor(t3, e3, n2) {
            this.cacheSizeCollectionThreshold = t3, this.percentileToCollect = e3, this.maximumSequenceNumbersToCollect = n2;
          }
          static withCacheSize(t3) {
            return new Gh(t3, Gh.DEFAULT_COLLECTION_PERCENTILE, Gh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT);
          }
        }
        Gh.DEFAULT_COLLECTION_PERCENTILE = 10, Gh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3, Gh.DEFAULT = new Gh(41943040, Gh.DEFAULT_COLLECTION_PERCENTILE, Gh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT), Gh.DISABLED = new Gh(-1, 0, 0);
        class Wh {
          constructor(t3) {
            this.Nn = t3;
          }
          next() {
            return this.Nn += 2, this.Nn;
          }
          static kn() {
            return new Wh(0);
          }
          static Mn() {
            return new Wh(-1);
          }
        }
        class Qh {
          constructor(t3, e3) {
            this.overlayedDocument = t3, this.mutatedFields = e3;
          }
        }
        class Yh {
          constructor(t3, e3, n2, r2) {
            this.remoteDocumentCache = t3, this.mutationQueue = e3, this.documentOverlayCache = n2, this.indexManager = r2;
          }
          getDocument(t3, e3) {
            let n2 = null;
            return this.documentOverlayCache.getOverlay(t3, e3).next((r2) => (n2 = r2, this.remoteDocumentCache.getEntry(t3, e3))).next((t4) => (null !== n2 && ju(n2.mutation, t4, Ka.empty(), _a.now()), t4));
          }
          getDocuments(t3, e3) {
            return this.remoteDocumentCache.getEntries(t3, e3).next((e4) => this.getLocalViewOfDocuments(t3, e4, wu()).next(() => e4));
          }
          getLocalViewOfDocuments(t3, e3, n2 = wu()) {
            const r2 = gu();
            return this.populateOverlays(t3, r2, e3).next(() => this.computeViews(t3, e3, r2, n2).next((t4) => {
              let e4 = fu();
              return t4.forEach((t5, n3) => {
                e4 = e4.insert(t5, n3.overlayedDocument);
              }), e4;
            }));
          }
          getOverlayedDocuments(t3, e3) {
            const n2 = gu();
            return this.populateOverlays(t3, n2, e3).next(() => this.computeViews(t3, e3, n2, wu()));
          }
          populateOverlays(t3, e3, n2) {
            const r2 = [];
            return n2.forEach((t4) => {
              e3.has(t4) || r2.push(t4);
            }), this.documentOverlayCache.getOverlays(t3, r2).next((t4) => {
              t4.forEach((t5, n3) => {
                e3.set(t5, n3);
              });
            });
          }
          computeViews(t3, e3, n2, r2) {
            let i2 = lu();
            const s2 = yu(), o2 = yu();
            return e3.forEach((t4, e4) => {
              const o3 = n2.get(e4.key);
              r2.has(e4.key) && (void 0 === o3 || o3.mutation instanceof $u) ? i2 = i2.insert(e4.key, e4) : void 0 !== o3 ? (s2.set(e4.key, o3.mutation.getFieldMask()), ju(o3.mutation, e4, o3.mutation.getFieldMask(), _a.now())) : s2.set(e4.key, Ka.empty());
            }), this.recalculateAndSaveOverlays(t3, i2).next((t4) => (t4.forEach((t5, e4) => s2.set(t5, e4)), e3.forEach((t5, e4) => {
              var n3;
              return o2.set(t5, new Qh(e4, null !== (n3 = s2.get(t5)) && void 0 !== n3 ? n3 : null));
            }), o2));
          }
          recalculateAndSaveOverlays(t3, e3) {
            const n2 = yu();
            let r2 = new ja((t4, e4) => t4 - e4), i2 = wu();
            return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t3, e3).next((t4) => {
              for (const i3 of t4) i3.keys().forEach((t5) => {
                const s2 = e3.get(t5);
                if (null === s2) return;
                let o2 = n2.get(t5) || Ka.empty();
                o2 = i3.applyToLocalView(s2, o2), n2.set(t5, o2);
                const a2 = (r2.get(i3.batchId) || wu()).add(t5);
                r2 = r2.insert(i3.batchId, a2);
              });
            }).next(() => {
              const s2 = [], o2 = r2.getReverseIterator();
              for (; o2.hasNext(); ) {
                const r3 = o2.getNext(), a2 = r3.key, c2 = r3.value, u2 = mu();
                c2.forEach((t4) => {
                  if (!i2.has(t4)) {
                    const r4 = Fu(e3.get(t4), n2.get(t4));
                    null !== r4 && u2.set(t4, r4), i2 = i2.add(t4);
                  }
                }), s2.push(this.documentOverlayCache.saveOverlays(t3, a2, u2));
              }
              return Ra.waitFor(s2);
            }).next(() => n2);
          }
          recalculateAndSaveOverlaysForDocumentKeys(t3, e3) {
            return this.remoteDocumentCache.getEntries(t3, e3).next((e4) => this.recalculateAndSaveOverlays(t3, e4));
          }
          getDocumentsMatchingQuery(t3, e3, n2) {
            return function(t4) {
              return Ca.isDocumentKey(t4.path) && null === t4.collectionGroup && 0 === t4.filters.length;
            }(e3) ? this.getDocumentsMatchingDocumentQuery(t3, e3.path) : Xc(e3) ? this.getDocumentsMatchingCollectionGroupQuery(t3, e3, n2) : this.getDocumentsMatchingCollectionQuery(t3, e3, n2);
          }
          getNextDocuments(t3, e3, n2, r2) {
            return this.remoteDocumentCache.getAllFromCollectionGroup(t3, e3, n2, r2).next((i2) => {
              const s2 = r2 - i2.size > 0 ? this.documentOverlayCache.getOverlaysForCollectionGroup(t3, e3, n2.largestBatchId, r2 - i2.size) : Ra.resolve(gu());
              let o2 = -1, a2 = i2;
              return s2.next((e4) => Ra.forEach(e4, (e5, n3) => (o2 < n3.largestBatchId && (o2 = n3.largestBatchId), i2.get(e5) ? Ra.resolve() : this.remoteDocumentCache.getEntry(t3, e5).next((t4) => {
                a2 = a2.insert(e5, t4);
              }))).next(() => this.populateOverlays(t3, e4, i2)).next(() => this.computeViews(t3, a2, e4, wu())).next((t4) => ({ batchId: o2, changes: pu(t4) })));
            });
          }
          getDocumentsMatchingDocumentQuery(t3, e3) {
            return this.getDocument(t3, new Ca(e3)).next((t4) => {
              let e4 = fu();
              return t4.isFoundDocument() && (e4 = e4.insert(t4.key, t4)), e4;
            });
          }
          getDocumentsMatchingCollectionGroupQuery(t3, e3, n2) {
            const r2 = e3.collectionGroup;
            let i2 = fu();
            return this.indexManager.getCollectionParents(t3, r2).next((s2) => Ra.forEach(s2, (s3) => {
              const o2 = function(t4, e4) {
                return new Gc(e4, null, t4.explicitOrderBy.slice(), t4.filters.slice(), t4.limit, t4.limitType, t4.startAt, t4.endAt);
              }(e3, s3.child(r2));
              return this.getDocumentsMatchingCollectionQuery(t3, o2, n2).next((t4) => {
                t4.forEach((t5, e4) => {
                  i2 = i2.insert(t5, e4);
                });
              });
            }).next(() => i2));
          }
          getDocumentsMatchingCollectionQuery(t3, e3, n2) {
            let r2;
            return this.documentOverlayCache.getOverlaysForCollection(t3, e3.path, n2.largestBatchId).next((i2) => (r2 = i2, this.remoteDocumentCache.getDocumentsMatchingQuery(t3, e3, n2, r2))).next((t4) => {
              r2.forEach((e4, n4) => {
                const r3 = n4.getKey();
                null === t4.get(r3) && (t4 = t4.insert(r3, bc.newInvalidDocument(r3)));
              });
              let n3 = fu();
              return t4.forEach((t5, i2) => {
                const s2 = r2.get(t5);
                void 0 !== s2 && ju(s2.mutation, i2, Ka.empty(), _a.now()), ou(e3, i2) && (n3 = n3.insert(t5, i2));
              }), n3;
            });
          }
        }
        class Jh {
          constructor(t3) {
            this.serializer = t3, this.cs = /* @__PURE__ */ new Map(), this.hs = /* @__PURE__ */ new Map();
          }
          getBundleMetadata(t3, e3) {
            return Ra.resolve(this.cs.get(e3));
          }
          saveBundleMetadata(t3, e3) {
            var n2;
            return this.cs.set(e3.id, { id: (n2 = e3).id, version: n2.version, createTime: Th(n2.createTime) }), Ra.resolve();
          }
          getNamedQuery(t3, e3) {
            return Ra.resolve(this.hs.get(e3));
          }
          saveNamedQuery(t3, e3) {
            return this.hs.set(e3.name, function(t4) {
              return { name: t4.name, query: $h(t4.bundledQuery), readTime: Th(t4.readTime) };
            }(e3)), Ra.resolve();
          }
        }
        class Xh {
          constructor() {
            this.overlays = new ja(Ca.comparator), this.ls = /* @__PURE__ */ new Map();
          }
          getOverlay(t3, e3) {
            return Ra.resolve(this.overlays.get(e3));
          }
          getOverlays(t3, e3) {
            const n2 = gu();
            return Ra.forEach(e3, (e4) => this.getOverlay(t3, e4).next((t4) => {
              null !== t4 && n2.set(e4, t4);
            })).next(() => n2);
          }
          saveOverlays(t3, e3, n2) {
            return n2.forEach((n3, r2) => {
              this.we(t3, e3, r2);
            }), Ra.resolve();
          }
          removeOverlaysForBatchId(t3, e3, n2) {
            const r2 = this.ls.get(n2);
            return void 0 !== r2 && (r2.forEach((t4) => this.overlays = this.overlays.remove(t4)), this.ls.delete(n2)), Ra.resolve();
          }
          getOverlaysForCollection(t3, e3, n2) {
            const r2 = gu(), i2 = e3.length + 1, s2 = new Ca(e3.child("")), o2 = this.overlays.getIteratorFrom(s2);
            for (; o2.hasNext(); ) {
              const t4 = o2.getNext().value, s3 = t4.getKey();
              if (!e3.isPrefixOf(s3.path)) break;
              s3.path.length === i2 && t4.largestBatchId > n2 && r2.set(t4.getKey(), t4);
            }
            return Ra.resolve(r2);
          }
          getOverlaysForCollectionGroup(t3, e3, n2, r2) {
            let i2 = new ja((t4, e4) => t4 - e4);
            const s2 = this.overlays.getIterator();
            for (; s2.hasNext(); ) {
              const t4 = s2.getNext().value;
              if (t4.getKey().getCollectionGroup() === e3 && t4.largestBatchId > n2) {
                let e4 = i2.get(t4.largestBatchId);
                null === e4 && (e4 = gu(), i2 = i2.insert(t4.largestBatchId, e4)), e4.set(t4.getKey(), t4);
              }
            }
            const o2 = gu(), a2 = i2.getIterator();
            for (; a2.hasNext() && (a2.getNext().value.forEach((t4, e4) => o2.set(t4, e4)), !(o2.size() >= r2)); ) ;
            return Ra.resolve(o2);
          }
          we(t3, e3, n2) {
            const r2 = this.overlays.get(n2.key);
            if (null !== r2) {
              const t4 = this.ls.get(r2.largestBatchId).delete(n2.key);
              this.ls.set(r2.largestBatchId, t4);
            }
            this.overlays = this.overlays.insert(n2.key, new Qu(e3, n2));
            let i2 = this.ls.get(e3);
            void 0 === i2 && (i2 = wu(), this.ls.set(e3, i2)), this.ls.set(e3, i2.add(n2.key));
          }
        }
        class Zh {
          constructor() {
            this.fs = new $a(tl.ds), this.ws = new $a(tl._s);
          }
          isEmpty() {
            return this.fs.isEmpty();
          }
          addReference(t3, e3) {
            const n2 = new tl(t3, e3);
            this.fs = this.fs.add(n2), this.ws = this.ws.add(n2);
          }
          gs(t3, e3) {
            t3.forEach((t4) => this.addReference(t4, e3));
          }
          removeReference(t3, e3) {
            this.ys(new tl(t3, e3));
          }
          ps(t3, e3) {
            t3.forEach((t4) => this.removeReference(t4, e3));
          }
          Is(t3) {
            const e3 = new Ca(new Ia([])), n2 = new tl(e3, t3), r2 = new tl(e3, t3 + 1), i2 = [];
            return this.ws.forEachInRange([n2, r2], (t4) => {
              this.ys(t4), i2.push(t4.key);
            }), i2;
          }
          Ts() {
            this.fs.forEach((t3) => this.ys(t3));
          }
          ys(t3) {
            this.fs = this.fs.delete(t3), this.ws = this.ws.delete(t3);
          }
          Es(t3) {
            const e3 = new Ca(new Ia([])), n2 = new tl(e3, t3), r2 = new tl(e3, t3 + 1);
            let i2 = wu();
            return this.ws.forEachInRange([n2, r2], (t4) => {
              i2 = i2.add(t4.key);
            }), i2;
          }
          containsKey(t3) {
            const e3 = new tl(t3, 0), n2 = this.fs.firstAfterOrEqual(e3);
            return null !== n2 && t3.isEqual(n2.key);
          }
        }
        class tl {
          constructor(t3, e3) {
            this.key = t3, this.As = e3;
          }
          static ds(t3, e3) {
            return Ca.comparator(t3.key, e3.key) || wa(t3.As, e3.As);
          }
          static _s(t3, e3) {
            return wa(t3.As, e3.As) || Ca.comparator(t3.key, e3.key);
          }
        }
        class el {
          constructor(t3, e3) {
            this.indexManager = t3, this.referenceDelegate = e3, this.mutationQueue = [], this.vs = 1, this.Rs = new $a(tl.ds);
          }
          checkEmpty(t3) {
            return Ra.resolve(0 === this.mutationQueue.length);
          }
          addMutationBatch(t3, e3, n2, r2) {
            const i2 = this.vs;
            this.vs++, this.mutationQueue.length > 0 && this.mutationQueue[this.mutationQueue.length - 1];
            const s2 = new Wu(i2, e3, n2, r2);
            this.mutationQueue.push(s2);
            for (const e4 of r2) this.Rs = this.Rs.add(new tl(e4.key, i2)), this.indexManager.addToCollectionParentIndex(t3, e4.key.path.popLast());
            return Ra.resolve(s2);
          }
          lookupMutationBatch(t3, e3) {
            return Ra.resolve(this.Ps(e3));
          }
          getNextMutationBatchAfterBatchId(t3, e3) {
            const n2 = e3 + 1, r2 = this.bs(n2), i2 = r2 < 0 ? 0 : r2;
            return Ra.resolve(this.mutationQueue.length > i2 ? this.mutationQueue[i2] : null);
          }
          getHighestUnacknowledgedBatchId() {
            return Ra.resolve(0 === this.mutationQueue.length ? -1 : this.vs - 1);
          }
          getAllMutationBatches(t3) {
            return Ra.resolve(this.mutationQueue.slice());
          }
          getAllMutationBatchesAffectingDocumentKey(t3, e3) {
            const n2 = new tl(e3, 0), r2 = new tl(e3, Number.POSITIVE_INFINITY), i2 = [];
            return this.Rs.forEachInRange([n2, r2], (t4) => {
              const e4 = this.Ps(t4.As);
              i2.push(e4);
            }), Ra.resolve(i2);
          }
          getAllMutationBatchesAffectingDocumentKeys(t3, e3) {
            let n2 = new $a(wa);
            return e3.forEach((t4) => {
              const e4 = new tl(t4, 0), r2 = new tl(t4, Number.POSITIVE_INFINITY);
              this.Rs.forEachInRange([e4, r2], (t5) => {
                n2 = n2.add(t5.As);
              });
            }), Ra.resolve(this.Vs(n2));
          }
          getAllMutationBatchesAffectingQuery(t3, e3) {
            const n2 = e3.path, r2 = n2.length + 1;
            let i2 = n2;
            Ca.isDocumentKey(i2) || (i2 = i2.child(""));
            const s2 = new tl(new Ca(i2), 0);
            let o2 = new $a(wa);
            return this.Rs.forEachWhile((t4) => {
              const e4 = t4.key.path;
              return !!n2.isPrefixOf(e4) && (e4.length === r2 && (o2 = o2.add(t4.As)), true);
            }, s2), Ra.resolve(this.Vs(o2));
          }
          Vs(t3) {
            const e3 = [];
            return t3.forEach((t4) => {
              const n2 = this.Ps(t4);
              null !== n2 && e3.push(n2);
            }), e3;
          }
          removeMutationBatch(t3, e3) {
            sa(0 === this.Ss(e3.batchId, "removed")), this.mutationQueue.shift();
            let n2 = this.Rs;
            return Ra.forEach(e3.mutations, (r2) => {
              const i2 = new tl(r2.key, e3.batchId);
              return n2 = n2.delete(i2), this.referenceDelegate.markPotentiallyOrphaned(t3, r2.key);
            }).next(() => {
              this.Rs = n2;
            });
          }
          Cn(t3) {
          }
          containsKey(t3, e3) {
            const n2 = new tl(e3, 0), r2 = this.Rs.firstAfterOrEqual(n2);
            return Ra.resolve(e3.isEqual(r2 && r2.key));
          }
          performConsistencyCheck(t3) {
            return this.mutationQueue.length, Ra.resolve();
          }
          Ss(t3, e3) {
            return this.bs(t3);
          }
          bs(t3) {
            return 0 === this.mutationQueue.length ? 0 : t3 - this.mutationQueue[0].batchId;
          }
          Ps(t3) {
            const e3 = this.bs(t3);
            return e3 < 0 || e3 >= this.mutationQueue.length ? null : this.mutationQueue[e3];
          }
        }
        class nl {
          constructor(t3) {
            this.Ds = t3, this.docs = new ja(Ca.comparator), this.size = 0;
          }
          setIndexManager(t3) {
            this.indexManager = t3;
          }
          addEntry(t3, e3) {
            const n2 = e3.key, r2 = this.docs.get(n2), i2 = r2 ? r2.size : 0, s2 = this.Ds(e3);
            return this.docs = this.docs.insert(n2, { document: e3.mutableCopy(), size: s2 }), this.size += s2 - i2, this.indexManager.addToCollectionParentIndex(t3, n2.path.popLast());
          }
          removeEntry(t3) {
            const e3 = this.docs.get(t3);
            e3 && (this.docs = this.docs.remove(t3), this.size -= e3.size);
          }
          getEntry(t3, e3) {
            const n2 = this.docs.get(e3);
            return Ra.resolve(n2 ? n2.document.mutableCopy() : bc.newInvalidDocument(e3));
          }
          getEntries(t3, e3) {
            let n2 = lu();
            return e3.forEach((t4) => {
              const e4 = this.docs.get(t4);
              n2 = n2.insert(t4, e4 ? e4.document.mutableCopy() : bc.newInvalidDocument(t4));
            }), Ra.resolve(n2);
          }
          getDocumentsMatchingQuery(t3, e3, n2, r2) {
            let i2 = lu();
            const s2 = e3.path, o2 = new Ca(s2.child("")), a2 = this.docs.getIteratorFrom(o2);
            for (; a2.hasNext(); ) {
              const { key: t4, value: { document: o3 } } = a2.getNext();
              if (!s2.isPrefixOf(t4.path)) break;
              t4.path.length > s2.length + 1 || Oa(ka(o3), n2) <= 0 || (r2.has(o3.key) || ou(e3, o3)) && (i2 = i2.insert(o3.key, o3.mutableCopy()));
            }
            return Ra.resolve(i2);
          }
          getAllFromCollectionGroup(t3, e3, n2, r2) {
            ia();
          }
          Cs(t3, e3) {
            return Ra.forEach(this.docs, (t4) => e3(t4));
          }
          newChangeBuffer(t3) {
            return new rl(this);
          }
          getSize(t3) {
            return Ra.resolve(this.size);
          }
        }
        class rl extends class {
          constructor() {
            this.changes = new uu((t3) => t3.toString(), (t3, e3) => t3.isEqual(e3)), this.changesApplied = false;
          }
          addEntry(t3) {
            this.assertNotApplied(), this.changes.set(t3.key, t3);
          }
          removeEntry(t3, e3) {
            this.assertNotApplied(), this.changes.set(t3, bc.newInvalidDocument(t3).setReadTime(e3));
          }
          getEntry(t3, e3) {
            this.assertNotApplied();
            const n2 = this.changes.get(e3);
            return void 0 !== n2 ? Ra.resolve(n2) : this.getFromCache(t3, e3);
          }
          getEntries(t3, e3) {
            return this.getAllFromCache(t3, e3);
          }
          apply(t3) {
            return this.assertNotApplied(), this.changesApplied = true, this.applyChanges(t3);
          }
          assertNotApplied() {
          }
        } {
          constructor(t3) {
            super(), this.os = t3;
          }
          applyChanges(t3) {
            const e3 = [];
            return this.changes.forEach((n2, r2) => {
              r2.isValidDocument() ? e3.push(this.os.addEntry(t3, r2)) : this.os.removeEntry(n2);
            }), Ra.waitFor(e3);
          }
          getFromCache(t3, e3) {
            return this.os.getEntry(t3, e3);
          }
          getAllFromCache(t3, e3) {
            return this.os.getEntries(t3, e3);
          }
        }
        class il {
          constructor(t3) {
            this.persistence = t3, this.xs = new uu((t4) => zc(t4), Kc), this.lastRemoteSnapshotVersion = Ea.min(), this.highestTargetId = 0, this.Ns = 0, this.ks = new Zh(), this.targetCount = 0, this.Ms = Wh.kn();
          }
          forEachTarget(t3, e3) {
            return this.xs.forEach((t4, n2) => e3(n2)), Ra.resolve();
          }
          getLastRemoteSnapshotVersion(t3) {
            return Ra.resolve(this.lastRemoteSnapshotVersion);
          }
          getHighestSequenceNumber(t3) {
            return Ra.resolve(this.Ns);
          }
          allocateTargetId(t3) {
            return this.highestTargetId = this.Ms.next(), Ra.resolve(this.highestTargetId);
          }
          setTargetsMetadata(t3, e3, n2) {
            return n2 && (this.lastRemoteSnapshotVersion = n2), e3 > this.Ns && (this.Ns = e3), Ra.resolve();
          }
          Fn(t3) {
            this.xs.set(t3.target, t3);
            const e3 = t3.targetId;
            e3 > this.highestTargetId && (this.Ms = new Wh(e3), this.highestTargetId = e3), t3.sequenceNumber > this.Ns && (this.Ns = t3.sequenceNumber);
          }
          addTargetData(t3, e3) {
            return this.Fn(e3), this.targetCount += 1, Ra.resolve();
          }
          updateTargetData(t3, e3) {
            return this.Fn(e3), Ra.resolve();
          }
          removeTargetData(t3, e3) {
            return this.xs.delete(e3.target), this.ks.Is(e3.targetId), this.targetCount -= 1, Ra.resolve();
          }
          removeTargets(t3, e3, n2) {
            let r2 = 0;
            const i2 = [];
            return this.xs.forEach((s2, o2) => {
              o2.sequenceNumber <= e3 && null === n2.get(o2.targetId) && (this.xs.delete(s2), i2.push(this.removeMatchingKeysForTargetId(t3, o2.targetId)), r2++);
            }), Ra.waitFor(i2).next(() => r2);
          }
          getTargetCount(t3) {
            return Ra.resolve(this.targetCount);
          }
          getTargetData(t3, e3) {
            const n2 = this.xs.get(e3) || null;
            return Ra.resolve(n2);
          }
          addMatchingKeys(t3, e3, n2) {
            return this.ks.gs(e3, n2), Ra.resolve();
          }
          removeMatchingKeys(t3, e3, n2) {
            this.ks.ps(e3, n2);
            const r2 = this.persistence.referenceDelegate, i2 = [];
            return r2 && e3.forEach((e4) => {
              i2.push(r2.markPotentiallyOrphaned(t3, e4));
            }), Ra.waitFor(i2);
          }
          removeMatchingKeysForTargetId(t3, e3) {
            return this.ks.Is(e3), Ra.resolve();
          }
          getMatchingKeysForTargetId(t3, e3) {
            const n2 = this.ks.Es(e3);
            return Ra.resolve(n2);
          }
          containsKey(t3, e3) {
            return Ra.resolve(this.ks.containsKey(e3));
          }
        }
        class sl {
          constructor(t3, e3) {
            this.$s = {}, this.overlays = {}, this.Os = new Pa(0), this.Fs = false, this.Fs = true, this.referenceDelegate = t3(this), this.Bs = new il(this), this.indexManager = new Kh(), this.remoteDocumentCache = function(t4) {
              return new nl(t4);
            }((t4) => this.referenceDelegate.Ls(t4)), this.serializer = new Bh(e3), this.qs = new Jh(this.serializer);
          }
          start() {
            return Promise.resolve();
          }
          shutdown() {
            return this.Fs = false, Promise.resolve();
          }
          get started() {
            return this.Fs;
          }
          setDatabaseDeletedListener() {
          }
          setNetworkEnabled() {
          }
          getIndexManager(t3) {
            return this.indexManager;
          }
          getDocumentOverlayCache(t3) {
            let e3 = this.overlays[t3.toKey()];
            return e3 || (e3 = new Xh(), this.overlays[t3.toKey()] = e3), e3;
          }
          getMutationQueue(t3, e3) {
            let n2 = this.$s[t3.toKey()];
            return n2 || (n2 = new el(e3, this.referenceDelegate), this.$s[t3.toKey()] = n2), n2;
          }
          getTargetCache() {
            return this.Bs;
          }
          getRemoteDocumentCache() {
            return this.remoteDocumentCache;
          }
          getBundleCache() {
            return this.qs;
          }
          runTransaction(t3, e3, n2) {
            ta("MemoryPersistence", "Starting transaction:", t3);
            const r2 = new ol(this.Os.next());
            return this.referenceDelegate.Us(), n2(r2).next((t4) => this.referenceDelegate.Ks(r2).next(() => t4)).toPromise().then((t4) => (r2.raiseOnCommittedEvent(), t4));
          }
          Gs(t3, e3) {
            return Ra.or(Object.values(this.$s).map((n2) => () => n2.containsKey(t3, e3)));
          }
        }
        class ol extends class {
          constructor() {
            this.onCommittedListeners = [];
          }
          addOnCommittedListener(t3) {
            this.onCommittedListeners.push(t3);
          }
          raiseOnCommittedEvent() {
            this.onCommittedListeners.forEach((t3) => t3());
          }
        } {
          constructor(t3) {
            super(), this.currentSequenceNumber = t3;
          }
        }
        class al {
          constructor(t3) {
            this.persistence = t3, this.Qs = new Zh(), this.js = null;
          }
          static zs(t3) {
            return new al(t3);
          }
          get Ws() {
            if (this.js) return this.js;
            throw ia();
          }
          addReference(t3, e3, n2) {
            return this.Qs.addReference(n2, e3), this.Ws.delete(n2.toString()), Ra.resolve();
          }
          removeReference(t3, e3, n2) {
            return this.Qs.removeReference(n2, e3), this.Ws.add(n2.toString()), Ra.resolve();
          }
          markPotentiallyOrphaned(t3, e3) {
            return this.Ws.add(e3.toString()), Ra.resolve();
          }
          removeTarget(t3, e3) {
            this.Qs.Is(e3.targetId).forEach((t4) => this.Ws.add(t4.toString()));
            const n2 = this.persistence.getTargetCache();
            return n2.getMatchingKeysForTargetId(t3, e3.targetId).next((t4) => {
              t4.forEach((t5) => this.Ws.add(t5.toString()));
            }).next(() => n2.removeTargetData(t3, e3));
          }
          Us() {
            this.js = /* @__PURE__ */ new Set();
          }
          Ks(t3) {
            const e3 = this.persistence.getRemoteDocumentCache().newChangeBuffer();
            return Ra.forEach(this.Ws, (n2) => {
              const r2 = Ca.fromPath(n2);
              return this.Hs(t3, r2).next((t4) => {
                t4 || e3.removeEntry(r2, Ea.min());
              });
            }).next(() => (this.js = null, e3.apply(t3)));
          }
          updateLimboDocument(t3, e3) {
            return this.Hs(t3, e3).next((t4) => {
              t4 ? this.Ws.delete(e3.toString()) : this.Ws.add(e3.toString());
            });
          }
          Ls(t3) {
            return 0;
          }
          Hs(t3, e3) {
            return Ra.or([() => Ra.resolve(this.Qs.containsKey(e3)), () => this.persistence.getTargetCache().containsKey(t3, e3), () => this.persistence.Gs(t3, e3)]);
          }
        }
        class cl {
          constructor(t3, e3, n2, r2) {
            this.targetId = t3, this.fromCache = e3, this.Fi = n2, this.Bi = r2;
          }
          static Li(t3, e3) {
            let n2 = wu(), r2 = wu();
            for (const t4 of e3.docChanges) switch (t4.type) {
              case 0:
                n2 = n2.add(t4.doc.key);
                break;
              case 1:
                r2 = r2.add(t4.doc.key);
            }
            return new cl(t3, e3.fromCache, n2, r2);
          }
        }
        class ul {
          constructor() {
            this.qi = false;
          }
          initialize(t3, e3) {
            this.Ui = t3, this.indexManager = e3, this.qi = true;
          }
          getDocumentsMatchingQuery(t3, e3, n2, r2) {
            return this.Ki(t3, e3).next((i2) => i2 || this.Gi(t3, e3, r2, n2)).next((n3) => n3 || this.Qi(t3, e3));
          }
          Ki(t3, e3) {
            if (Qc(e3)) return Ra.resolve(null);
            let n2 = tu(e3);
            return this.indexManager.getIndexType(t3, n2).next((r2) => 0 === r2 ? null : (null !== e3.limit && 1 === r2 && (e3 = nu(e3, null, "F"), n2 = tu(e3)), this.indexManager.getDocumentsMatchingTarget(t3, n2).next((r3) => {
              const i2 = wu(...r3);
              return this.Ui.getDocuments(t3, i2).next((r4) => this.indexManager.getMinOffset(t3, n2).next((n3) => {
                const s2 = this.ji(e3, r4);
                return this.zi(e3, s2, i2, n3.readTime) ? this.Ki(t3, nu(e3, null, "F")) : this.Wi(t3, s2, e3, n3);
              }));
            })));
          }
          Gi(t3, e3, n2, r2) {
            return Qc(e3) || r2.isEqual(Ea.min()) ? this.Qi(t3, e3) : this.Ui.getDocuments(t3, n2).next((i2) => {
              const s2 = this.ji(e3, i2);
              return this.zi(e3, s2, n2, r2) ? this.Qi(t3, e3) : (Zo() <= Z.DEBUG && ta("QueryEngine", "Re-using previous result from %s to execute query: %s", r2.toString(), su(e3)), this.Wi(t3, s2, e3, function(t4, e4) {
                const n3 = t4.toTimestamp().seconds, r3 = t4.toTimestamp().nanoseconds + 1, i3 = Ea.fromTimestamp(1e9 === r3 ? new _a(n3 + 1, 0) : new _a(n3, r3));
                return new Na(i3, Ca.empty(), e4);
              }(r2, -1)));
            });
          }
          ji(t3, e3) {
            let n2 = new $a(au(t3));
            return e3.forEach((e4, r2) => {
              ou(t3, r2) && (n2 = n2.add(r2));
            }), n2;
          }
          zi(t3, e3, n2, r2) {
            if (null === t3.limit) return false;
            if (n2.size !== e3.size) return true;
            const i2 = "F" === t3.limitType ? e3.last() : e3.first();
            return !!i2 && (i2.hasPendingWrites || i2.version.compareTo(r2) > 0);
          }
          Qi(t3, e3) {
            return Zo() <= Z.DEBUG && ta("QueryEngine", "Using full collection scan to execute query:", su(e3)), this.Ui.getDocumentsMatchingQuery(t3, e3, Na.min());
          }
          Wi(t3, e3, n2, r2) {
            return this.Ui.getDocumentsMatchingQuery(t3, n2, r2).next((t4) => (e3.forEach((e4) => {
              t4 = t4.insert(e4.key, e4);
            }), t4));
          }
        }
        class hl {
          constructor(t3, e3, n2, r2) {
            this.persistence = t3, this.Hi = e3, this.serializer = r2, this.Ji = new ja(wa), this.Yi = new uu((t4) => zc(t4), Kc), this.Xi = /* @__PURE__ */ new Map(), this.Zi = t3.getRemoteDocumentCache(), this.Bs = t3.getTargetCache(), this.qs = t3.getBundleCache(), this.tr(n2);
          }
          tr(t3) {
            this.documentOverlayCache = this.persistence.getDocumentOverlayCache(t3), this.indexManager = this.persistence.getIndexManager(t3), this.mutationQueue = this.persistence.getMutationQueue(t3, this.indexManager), this.localDocuments = new Yh(this.Zi, this.mutationQueue, this.documentOverlayCache, this.indexManager), this.Zi.setIndexManager(this.indexManager), this.Hi.initialize(this.localDocuments, this.indexManager);
          }
          collectGarbage(t3) {
            return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (e3) => t3.collect(e3, this.Ji));
          }
        }
        async function ll(t3, e3) {
          const n2 = oa(t3);
          return await n2.persistence.runTransaction("Handle user change", "readonly", (t4) => {
            let r2;
            return n2.mutationQueue.getAllMutationBatches(t4).next((i2) => (r2 = i2, n2.tr(e3), n2.mutationQueue.getAllMutationBatches(t4))).next((e4) => {
              const i2 = [], s2 = [];
              let o2 = wu();
              for (const t5 of r2) {
                i2.push(t5.batchId);
                for (const e5 of t5.mutations) o2 = o2.add(e5.key);
              }
              for (const t5 of e4) {
                s2.push(t5.batchId);
                for (const e5 of t5.mutations) o2 = o2.add(e5.key);
              }
              return n2.localDocuments.getDocuments(t4, o2).next((t5) => ({ er: t5, removedBatchIds: i2, addedBatchIds: s2 }));
            });
          });
        }
        function dl(t3) {
          const e3 = oa(t3);
          return e3.persistence.runTransaction("Get last remote snapshot version", "readonly", (t4) => e3.Bs.getLastRemoteSnapshotVersion(t4));
        }
        async function fl(t3, e3, n2) {
          const r2 = oa(t3), i2 = r2.Ji.get(e3), s2 = n2 ? "readwrite" : "readwrite-primary";
          try {
            n2 || await r2.persistence.runTransaction("Release target", s2, (t4) => r2.persistence.referenceDelegate.removeTarget(t4, i2));
          } catch (t4) {
            if (!La(t4)) throw t4;
            ta("LocalStore", `Failed to update sequence numbers for target ${e3}: ${t4}`);
          }
          r2.Ji = r2.Ji.remove(e3), r2.Yi.delete(i2.target);
        }
        function pl(t3, e3, n2) {
          const r2 = oa(t3);
          let i2 = Ea.min(), s2 = wu();
          return r2.persistence.runTransaction("Execute query", "readonly", (t4) => function(t5, e4, n3) {
            const r3 = oa(t5), i3 = r3.Yi.get(n3);
            return void 0 !== i3 ? Ra.resolve(r3.Ji.get(i3)) : r3.Bs.getTargetData(e4, n3);
          }(r2, t4, tu(e3)).next((e4) => {
            if (e4) return i2 = e4.lastLimboFreeSnapshotVersion, r2.Bs.getMatchingKeysForTargetId(t4, e4.targetId).next((t5) => {
              s2 = t5;
            });
          }).next(() => r2.Hi.getDocumentsMatchingQuery(t4, e3, n2 ? i2 : Ea.min(), n2 ? s2 : wu())).next((t5) => (function(t6, e4, n3) {
            let r3 = t6.Xi.get(e4) || Ea.min();
            n3.forEach((t7, e5) => {
              e5.readTime.compareTo(r3) > 0 && (r3 = e5.readTime);
            }), t6.Xi.set(e4, r3);
          }(r2, function(t6) {
            return t6.collectionGroup || (t6.path.length % 2 == 1 ? t6.path.lastSegment() : t6.path.get(t6.path.length - 2));
          }(e3), t5), { documents: t5, ir: s2 })));
        }
        class gl {
          constructor() {
            this.activeTargetIds = bu;
          }
          lr(t3) {
            this.activeTargetIds = this.activeTargetIds.add(t3);
          }
          dr(t3) {
            this.activeTargetIds = this.activeTargetIds.delete(t3);
          }
          hr() {
            const t3 = { activeTargetIds: this.activeTargetIds.toArray(), updateTimeMs: Date.now() };
            return JSON.stringify(t3);
          }
        }
        class ml {
          constructor() {
            this.Hr = new gl(), this.Jr = {}, this.onlineStateHandler = null, this.sequenceNumberHandler = null;
          }
          addPendingMutation(t3) {
          }
          updateMutationState(t3, e3, n2) {
          }
          addLocalQueryTarget(t3) {
            return this.Hr.lr(t3), this.Jr[t3] || "not-current";
          }
          updateQueryState(t3, e3, n2) {
            this.Jr[t3] = e3;
          }
          removeLocalQueryTarget(t3) {
            this.Hr.dr(t3);
          }
          isLocalQueryTarget(t3) {
            return this.Hr.activeTargetIds.has(t3);
          }
          clearQueryState(t3) {
            delete this.Jr[t3];
          }
          getAllActiveQueryTargets() {
            return this.Hr.activeTargetIds;
          }
          isActiveQueryTarget(t3) {
            return this.Hr.activeTargetIds.has(t3);
          }
          start() {
            return this.Hr = new gl(), Promise.resolve();
          }
          handleUserChange(t3, e3, n2) {
          }
          setOnlineState(t3) {
          }
          shutdown() {
          }
          writeSequenceNumber(t3) {
          }
          notifyBundleLoaded(t3) {
          }
        }
        class yl {
          Yr(t3) {
          }
          shutdown() {
          }
        }
        class vl {
          constructor() {
            this.Xr = () => this.Zr(), this.eo = () => this.no(), this.so = [], this.io();
          }
          Yr(t3) {
            this.so.push(t3);
          }
          shutdown() {
            window.removeEventListener("online", this.Xr), window.removeEventListener("offline", this.eo);
          }
          io() {
            window.addEventListener("online", this.Xr), window.addEventListener("offline", this.eo);
          }
          Zr() {
            ta("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
            for (const t3 of this.so) t3(0);
          }
          no() {
            ta("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
            for (const t3 of this.so) t3(1);
          }
          static D() {
            return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
          }
        }
        let wl = null;
        function bl() {
          return null === wl ? wl = 268435456 + Math.round(2147483648 * Math.random()) : wl++, "0x" + wl.toString(16);
        }
        const _l = { BatchGetDocuments: "batchGet", Commit: "commit", RunQuery: "runQuery", RunAggregationQuery: "runAggregationQuery" };
        class El {
          constructor(t3) {
            this.ro = t3.ro, this.oo = t3.oo;
          }
          uo(t3) {
            this.co = t3;
          }
          ao(t3) {
            this.ho = t3;
          }
          onMessage(t3) {
            this.lo = t3;
          }
          close() {
            this.oo();
          }
          send(t3) {
            this.ro(t3);
          }
          fo() {
            this.co();
          }
          wo(t3) {
            this.ho(t3);
          }
          _o(t3) {
            this.lo(t3);
          }
        }
        const Tl = "WebChannelConnection";
        class Il extends class {
          constructor(t3) {
            this.databaseInfo = t3, this.databaseId = t3.databaseId;
            const e3 = t3.ssl ? "https" : "http";
            this.mo = e3 + "://" + t3.host, this.yo = "projects/" + this.databaseId.projectId + "/databases/" + this.databaseId.database + "/documents";
          }
          get po() {
            return false;
          }
          Io(t3, e3, n2, r2, i2) {
            const s2 = bl(), o2 = this.To(t3, e3);
            ta("RestConnection", `Sending RPC '${t3}' ${s2}:`, o2, n2);
            const a2 = {};
            return this.Eo(a2, r2, i2), this.Ao(t3, o2, a2, n2).then((e4) => (ta("RestConnection", `Received RPC '${t3}' ${s2}: `, e4), e4), (e4) => {
              throw na("RestConnection", `RPC '${t3}' ${s2} failed with error: `, e4, "url: ", o2, "request:", n2), e4;
            });
          }
          vo(t3, e3, n2, r2, i2, s2) {
            return this.Io(t3, e3, n2, r2, i2);
          }
          Eo(t3, e3, n2) {
            t3["X-Goog-Api-Client"] = "gl-js/ fire/" + Jo, t3["Content-Type"] = "text/plain", this.databaseInfo.appId && (t3["X-Firebase-GMPID"] = this.databaseInfo.appId), e3 && e3.headers.forEach((e4, n3) => t3[n3] = e4), n2 && n2.headers.forEach((e4, n3) => t3[n3] = e4);
          }
          To(t3, e3) {
            const n2 = _l[t3];
            return `${this.mo}/v1/${e3}:${n2}`;
          }
        } {
          constructor(t3) {
            super(t3), this.forceLongPolling = t3.forceLongPolling, this.autoDetectLongPolling = t3.autoDetectLongPolling, this.useFetchStreams = t3.useFetchStreams, this.longPollingOptions = t3.longPollingOptions;
          }
          Ao(t3, e3, n2, r2) {
            const i2 = bl();
            return new Promise((s2, o2) => {
              const a2 = new Ho();
              a2.setWithCredentials(true), a2.listenOnce(qo.COMPLETE, () => {
                try {
                  switch (a2.getLastErrorCode()) {
                    case jo.NO_ERROR:
                      const e4 = a2.getResponseJson();
                      ta(Tl, `XHR for RPC '${t3}' ${i2} received:`, JSON.stringify(e4)), s2(e4);
                      break;
                    case jo.TIMEOUT:
                      ta(Tl, `RPC '${t3}' ${i2} timed out`), o2(new ca(aa.DEADLINE_EXCEEDED, "Request time out"));
                      break;
                    case jo.HTTP_ERROR:
                      const n3 = a2.getStatus();
                      if (ta(Tl, `RPC '${t3}' ${i2} failed with status:`, n3, "response text:", a2.getResponseText()), n3 > 0) {
                        let t4 = a2.getResponseJson();
                        Array.isArray(t4) && (t4 = t4[0]);
                        const e5 = null == t4 ? void 0 : t4.error;
                        if (e5 && e5.status && e5.message) {
                          const t5 = function(t6) {
                            const e6 = t6.toLowerCase().replace(/_/g, "-");
                            return Object.values(aa).indexOf(e6) >= 0 ? e6 : aa.UNKNOWN;
                          }(e5.status);
                          o2(new ca(t5, e5.message));
                        } else o2(new ca(aa.UNKNOWN, "Server responded with status " + a2.getStatus()));
                      } else o2(new ca(aa.UNAVAILABLE, "Connection failed."));
                      break;
                    default:
                      ia();
                  }
                } finally {
                  ta(Tl, `RPC '${t3}' ${i2} completed.`);
                }
              });
              const c2 = JSON.stringify(r2);
              ta(Tl, `RPC '${t3}' ${i2} sending request:`, r2), a2.send(e3, "POST", c2, n2, 15);
            });
          }
          Ro(t3, e3, n2) {
            const r2 = bl(), i2 = [this.mo, "/", "google.firestore.v1.Firestore", "/", t3, "/channel"], s2 = Fo(), o2 = Vo(), a2 = { httpSessionIdParam: "gsessionid", initMessageHeaders: {}, messageUrlParams: { database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}` }, sendRawJson: true, supportsCrossDomainXhr: true, internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 }, forceLongPolling: this.forceLongPolling, detectBufferingProxy: this.autoDetectLongPolling }, c2 = this.longPollingOptions.timeoutSeconds;
            void 0 !== c2 && (a2.longPollingTimeout = Math.round(1e3 * c2)), this.useFetchStreams && (a2.xmlHttpFactory = new zo({})), this.Eo(a2.initMessageHeaders, e3, n2), a2.encodeInitMessageHeaders = true;
            const u2 = i2.join("");
            ta(Tl, `Creating RPC '${t3}' stream ${r2}: ${u2}`, a2);
            const h2 = s2.createWebChannel(u2, a2);
            let l2 = false, d2 = false;
            const f2 = new El({ ro: (e4) => {
              d2 ? ta(Tl, `Not sending because RPC '${t3}' stream ${r2} is closed:`, e4) : (l2 || (ta(Tl, `Opening RPC '${t3}' stream ${r2} transport.`), h2.open(), l2 = true), ta(Tl, `RPC '${t3}' stream ${r2} sending:`, e4), h2.send(e4));
            }, oo: () => h2.close() }), p2 = (t4, e4, n3) => {
              t4.listen(e4, (t5) => {
                try {
                  n3(t5);
                } catch (t6) {
                  setTimeout(() => {
                    throw t6;
                  }, 0);
                }
              });
            };
            return p2(h2, Ko.EventType.OPEN, () => {
              d2 || ta(Tl, `RPC '${t3}' stream ${r2} transport opened.`);
            }), p2(h2, Ko.EventType.CLOSE, () => {
              d2 || (d2 = true, ta(Tl, `RPC '${t3}' stream ${r2} transport closed`), f2.wo());
            }), p2(h2, Ko.EventType.ERROR, (e4) => {
              d2 || (d2 = true, na(Tl, `RPC '${t3}' stream ${r2} transport errored:`, e4), f2.wo(new ca(aa.UNAVAILABLE, "The operation could not be completed")));
            }), p2(h2, Ko.EventType.MESSAGE, (e4) => {
              var n3;
              if (!d2) {
                const i3 = e4.data[0];
                sa(!!i3);
                const s3 = i3, o3 = s3.error || (null === (n3 = s3[0]) || void 0 === n3 ? void 0 : n3.error);
                if (o3) {
                  ta(Tl, `RPC '${t3}' stream ${r2} received error:`, o3);
                  const e5 = o3.status;
                  let n4 = function(t4) {
                    const e6 = Ju[t4];
                    if (void 0 !== e6) return Zu(e6);
                  }(e5), i4 = o3.message;
                  void 0 === n4 && (n4 = aa.INTERNAL, i4 = "Unknown error status: " + e5 + " with message " + o3.message), d2 = true, f2.wo(new ca(n4, i4)), h2.close();
                } else ta(Tl, `RPC '${t3}' stream ${r2} received:`, i3), f2._o(i3);
              }
            }), p2(o2, Bo.STAT_EVENT, (e4) => {
              e4.stat === $o.PROXY ? ta(Tl, `RPC '${t3}' stream ${r2} detected buffering proxy`) : e4.stat === $o.NOPROXY && ta(Tl, `RPC '${t3}' stream ${r2} detected no buffering proxy`);
            }), setTimeout(() => {
              f2.fo();
            }, 0), f2;
          }
        }
        function Sl() {
          return "undefined" != typeof document ? document : null;
        }
        function Al(t3) {
          return new wh(t3, true);
        }
        class Cl {
          constructor(t3, e3, n2 = 1e3, r2 = 1.5, i2 = 6e4) {
            this.ii = t3, this.timerId = e3, this.Po = n2, this.bo = r2, this.Vo = i2, this.So = 0, this.Do = null, this.Co = Date.now(), this.reset();
          }
          reset() {
            this.So = 0;
          }
          xo() {
            this.So = this.Vo;
          }
          No(t3) {
            this.cancel();
            const e3 = Math.floor(this.So + this.ko()), n2 = Math.max(0, Date.now() - this.Co), r2 = Math.max(0, e3 - n2);
            r2 > 0 && ta("ExponentialBackoff", `Backing off for ${r2} ms (base delay: ${this.So} ms, delay with jitter: ${e3} ms, last attempt: ${n2} ms ago)`), this.Do = this.ii.enqueueAfterDelay(this.timerId, r2, () => (this.Co = Date.now(), t3())), this.So *= this.bo, this.So < this.Po && (this.So = this.Po), this.So > this.Vo && (this.So = this.Vo);
          }
          Mo() {
            null !== this.Do && (this.Do.skipDelay(), this.Do = null);
          }
          cancel() {
            null !== this.Do && (this.Do.cancel(), this.Do = null);
          }
          ko() {
            return (Math.random() - 0.5) * this.So;
          }
        }
        class kl extends class {
          constructor(t3, e3, n2, r2, i2, s2, o2, a2) {
            this.ii = t3, this.$o = n2, this.Oo = r2, this.connection = i2, this.authCredentialsProvider = s2, this.appCheckCredentialsProvider = o2, this.listener = a2, this.state = 0, this.Fo = 0, this.Bo = null, this.Lo = null, this.stream = null, this.qo = new Cl(t3, e3);
          }
          Uo() {
            return 1 === this.state || 5 === this.state || this.Ko();
          }
          Ko() {
            return 2 === this.state || 3 === this.state;
          }
          start() {
            4 !== this.state ? this.auth() : this.Go();
          }
          async stop() {
            this.Uo() && await this.close(0);
          }
          Qo() {
            this.state = 0, this.qo.reset();
          }
          jo() {
            this.Ko() && null === this.Bo && (this.Bo = this.ii.enqueueAfterDelay(this.$o, 6e4, () => this.zo()));
          }
          Wo(t3) {
            this.Ho(), this.stream.send(t3);
          }
          async zo() {
            if (this.Ko()) return this.close(0);
          }
          Ho() {
            this.Bo && (this.Bo.cancel(), this.Bo = null);
          }
          Jo() {
            this.Lo && (this.Lo.cancel(), this.Lo = null);
          }
          async close(t3, e3) {
            this.Ho(), this.Jo(), this.qo.cancel(), this.Fo++, 4 !== t3 ? this.qo.reset() : e3 && e3.code === aa.RESOURCE_EXHAUSTED ? (ea(e3.toString()), ea("Using maximum backoff delay to prevent overloading the backend."), this.qo.xo()) : e3 && e3.code === aa.UNAUTHENTICATED && 3 !== this.state && (this.authCredentialsProvider.invalidateToken(), this.appCheckCredentialsProvider.invalidateToken()), null !== this.stream && (this.Yo(), this.stream.close(), this.stream = null), this.state = t3, await this.listener.ao(e3);
          }
          Yo() {
          }
          auth() {
            this.state = 1;
            const t3 = this.Xo(this.Fo), e3 = this.Fo;
            Promise.all([this.authCredentialsProvider.getToken(), this.appCheckCredentialsProvider.getToken()]).then(([t4, n2]) => {
              this.Fo === e3 && this.Zo(t4, n2);
            }, (e4) => {
              t3(() => {
                const t4 = new ca(aa.UNKNOWN, "Fetching auth token failed: " + e4.message);
                return this.tu(t4);
              });
            });
          }
          Zo(t3, e3) {
            const n2 = this.Xo(this.Fo);
            this.stream = this.eu(t3, e3), this.stream.uo(() => {
              n2(() => (this.state = 2, this.Lo = this.ii.enqueueAfterDelay(this.Oo, 1e4, () => (this.Ko() && (this.state = 3), Promise.resolve())), this.listener.uo()));
            }), this.stream.ao((t4) => {
              n2(() => this.tu(t4));
            }), this.stream.onMessage((t4) => {
              n2(() => this.onMessage(t4));
            });
          }
          Go() {
            this.state = 5, this.qo.No(async () => {
              this.state = 0, this.start();
            });
          }
          tu(t3) {
            return ta("PersistentStream", `close with error: ${t3}`), this.stream = null, this.close(4, t3);
          }
          Xo(t3) {
            return (e3) => {
              this.ii.enqueueAndForget(() => this.Fo === t3 ? e3() : (ta("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve()));
            };
          }
        } {
          constructor(t3, e3, n2, r2, i2, s2) {
            super(t3, "listen_stream_connection_backoff", "listen_stream_idle", "health_check_timeout", e3, n2, r2, s2), this.serializer = i2;
          }
          eu(t3, e3) {
            return this.connection.Ro("Listen", t3, e3);
          }
          onMessage(t3) {
            this.qo.reset();
            const e3 = function(t4, e4) {
              let n3;
              if ("targetChange" in e4) {
                e4.targetChange;
                const r2 = function(t5) {
                  return "NO_CHANGE" === t5 ? 0 : "ADD" === t5 ? 1 : "REMOVE" === t5 ? 2 : "CURRENT" === t5 ? 3 : "RESET" === t5 ? 4 : ia();
                }(e4.targetChange.targetChangeType || "NO_CHANGE"), i2 = e4.targetChange.targetIds || [], s2 = function(t5, e5) {
                  return t5.useProto3Json ? (sa(void 0 === e5 || "string" == typeof e5), Ga.fromBase64String(e5 || "")) : (sa(void 0 === e5 || e5 instanceof Uint8Array), Ga.fromUint8Array(e5 || new Uint8Array()));
                }(t4, e4.targetChange.resumeToken), o2 = e4.targetChange.cause, a2 = o2 && function(t5) {
                  const e5 = void 0 === t5.code ? aa.UNKNOWN : Zu(t5.code);
                  return new ca(e5, t5.message || "");
                }(o2);
                n3 = new lh(r2, i2, s2, a2 || null);
              } else if ("documentChange" in e4) {
                e4.documentChange;
                const r2 = e4.documentChange;
                r2.document, r2.document.name, r2.document.updateTime;
                const i2 = Ah(t4, r2.document.name), s2 = Th(r2.document.updateTime), o2 = r2.document.createTime ? Th(r2.document.createTime) : Ea.min(), a2 = new wc({ mapValue: { fields: r2.document.fields } }), c2 = bc.newFoundDocument(i2, s2, o2, a2), u2 = r2.targetIds || [], h2 = r2.removedTargetIds || [];
                n3 = new uh(u2, h2, c2.key, c2);
              } else if ("documentDelete" in e4) {
                e4.documentDelete;
                const r2 = e4.documentDelete;
                r2.document;
                const i2 = Ah(t4, r2.document), s2 = r2.readTime ? Th(r2.readTime) : Ea.min(), o2 = bc.newNoDocument(i2, s2), a2 = r2.removedTargetIds || [];
                n3 = new uh([], a2, o2.key, o2);
              } else if ("documentRemove" in e4) {
                e4.documentRemove;
                const r2 = e4.documentRemove;
                r2.document;
                const i2 = Ah(t4, r2.document), s2 = r2.removedTargetIds || [];
                n3 = new uh([], s2, i2, null);
              } else {
                if (!("filter" in e4)) return ia();
                {
                  e4.filter;
                  const t5 = e4.filter;
                  t5.targetId;
                  const { count: r2 = 0, unchangedNames: i2 } = t5, s2 = new Yu(r2, i2), o2 = t5.targetId;
                  n3 = new hh(o2, s2);
                }
              }
              return n3;
            }(this.serializer, t3), n2 = function(t4) {
              if (!("targetChange" in t4)) return Ea.min();
              const e4 = t4.targetChange;
              return e4.targetIds && e4.targetIds.length ? Ea.min() : e4.readTime ? Th(e4.readTime) : Ea.min();
            }(t3);
            return this.listener.nu(e3, n2);
          }
          su(t3) {
            const e3 = {};
            e3.database = kh(this.serializer), e3.addTarget = function(t4, e4) {
              let n3;
              const r2 = e4.target;
              if (n3 = Hc(r2) ? { documents: Oh(t4, r2) } : { query: Dh(t4, r2) }, n3.targetId = e4.targetId, e4.resumeToken.approximateByteSize() > 0) {
                n3.resumeToken = Eh(t4, e4.resumeToken);
                const r3 = bh(t4, e4.expectedCount);
                null !== r3 && (n3.expectedCount = r3);
              } else if (e4.snapshotVersion.compareTo(Ea.min()) > 0) {
                n3.readTime = _h(t4, e4.snapshotVersion.toTimestamp());
                const r3 = bh(t4, e4.expectedCount);
                null !== r3 && (n3.expectedCount = r3);
              }
              return n3;
            }(this.serializer, t3);
            const n2 = function(t4, e4) {
              const n3 = function(t5) {
                switch (t5) {
                  case "TargetPurposeListen":
                    return null;
                  case "TargetPurposeExistenceFilterMismatch":
                    return "existence-filter-mismatch";
                  case "TargetPurposeExistenceFilterMismatchBloom":
                    return "existence-filter-mismatch-bloom";
                  case "TargetPurposeLimboResolution":
                    return "limbo-document";
                  default:
                    return ia();
                }
              }(e4.purpose);
              return null == n3 ? null : { "goog-listen-tags": n3 };
            }(this.serializer, t3);
            n2 && (e3.labels = n2), this.Wo(e3);
          }
          iu(t3) {
            const e3 = {};
            e3.database = kh(this.serializer), e3.removeTarget = t3, this.Wo(e3);
          }
        }
        class Nl extends class {
        } {
          constructor(t3, e3, n2, r2) {
            super(), this.authCredentials = t3, this.appCheckCredentials = e3, this.connection = n2, this.serializer = r2, this.lu = false;
          }
          fu() {
            if (this.lu) throw new ca(aa.FAILED_PRECONDITION, "The client has already been terminated.");
          }
          Io(t3, e3, n2) {
            return this.fu(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([r2, i2]) => this.connection.Io(t3, e3, n2, r2, i2)).catch((t4) => {
              throw "FirebaseError" === t4.name ? (t4.code === aa.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), t4) : new ca(aa.UNKNOWN, t4.toString());
            });
          }
          vo(t3, e3, n2, r2) {
            return this.fu(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([i2, s2]) => this.connection.vo(t3, e3, n2, i2, s2, r2)).catch((t4) => {
              throw "FirebaseError" === t4.name ? (t4.code === aa.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), t4) : new ca(aa.UNKNOWN, t4.toString());
            });
          }
          terminate() {
            this.lu = true;
          }
        }
        class Ol {
          constructor(t3, e3) {
            this.asyncQueue = t3, this.onlineStateHandler = e3, this.state = "Unknown", this.wu = 0, this._u = null, this.mu = true;
          }
          gu() {
            0 === this.wu && (this.yu("Unknown"), this._u = this.asyncQueue.enqueueAfterDelay("online_state_timeout", 1e4, () => (this._u = null, this.pu("Backend didn't respond within 10 seconds."), this.yu("Offline"), Promise.resolve())));
          }
          Iu(t3) {
            "Online" === this.state ? this.yu("Unknown") : (this.wu++, this.wu >= 1 && (this.Tu(), this.pu(`Connection failed 1 times. Most recent error: ${t3.toString()}`), this.yu("Offline")));
          }
          set(t3) {
            this.Tu(), this.wu = 0, "Online" === t3 && (this.mu = false), this.yu(t3);
          }
          yu(t3) {
            t3 !== this.state && (this.state = t3, this.onlineStateHandler(t3));
          }
          pu(t3) {
            const e3 = `Could not reach Cloud Firestore backend. ${t3}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
            this.mu ? (ea(e3), this.mu = false) : ta("OnlineStateTracker", e3);
          }
          Tu() {
            null !== this._u && (this._u.cancel(), this._u = null);
          }
        }
        class Dl {
          constructor(t3, e3, n2, r2, i2) {
            this.localStore = t3, this.datastore = e3, this.asyncQueue = n2, this.remoteSyncer = {}, this.Eu = [], this.Au = /* @__PURE__ */ new Map(), this.vu = /* @__PURE__ */ new Set(), this.Ru = [], this.Pu = i2, this.Pu.Yr((t4) => {
              n2.enqueueAndForget(async () => {
                jl(this) && (ta("RemoteStore", "Restarting streams for network reachability change."), await async function(t5) {
                  const e4 = oa(t5);
                  e4.vu.add(4), await Ll(e4), e4.bu.set("Unknown"), e4.vu.delete(4), await Rl(e4);
                }(this));
              });
            }), this.bu = new Ol(n2, r2);
          }
        }
        async function Rl(t3) {
          if (jl(t3)) for (const e3 of t3.Ru) await e3(true);
        }
        async function Ll(t3) {
          for (const e3 of t3.Ru) await e3(false);
        }
        function Pl(t3, e3) {
          const n2 = oa(t3);
          n2.Au.has(e3.targetId) || (n2.Au.set(e3.targetId, e3), Vl(n2) ? Fl(n2) : Gl(n2).Ko() && Ml(n2, e3));
        }
        function xl(t3, e3) {
          const n2 = oa(t3), r2 = Gl(n2);
          n2.Au.delete(e3), r2.Ko() && Ul(n2, e3), 0 === n2.Au.size && (r2.Ko() ? r2.jo() : jl(n2) && n2.bu.set("Unknown"));
        }
        function Ml(t3, e3) {
          if (t3.Vu.qt(e3.targetId), e3.resumeToken.approximateByteSize() > 0 || e3.snapshotVersion.compareTo(Ea.min()) > 0) {
            const n2 = t3.remoteSyncer.getRemoteKeysForTarget(e3.targetId).size;
            e3 = e3.withExpectedCount(n2);
          }
          Gl(t3).su(e3);
        }
        function Ul(t3, e3) {
          t3.Vu.qt(e3), Gl(t3).iu(e3);
        }
        function Fl(t3) {
          t3.Vu = new fh({ getRemoteKeysForTarget: (e3) => t3.remoteSyncer.getRemoteKeysForTarget(e3), le: (e3) => t3.Au.get(e3) || null, ue: () => t3.datastore.serializer.databaseId }), Gl(t3).start(), t3.bu.gu();
        }
        function Vl(t3) {
          return jl(t3) && !Gl(t3).Uo() && t3.Au.size > 0;
        }
        function jl(t3) {
          return 0 === oa(t3).vu.size;
        }
        function ql(t3) {
          t3.Vu = void 0;
        }
        async function Bl(t3) {
          t3.Au.forEach((e3, n2) => {
            Ml(t3, e3);
          });
        }
        async function $l(t3, e3) {
          ql(t3), Vl(t3) ? (t3.bu.Iu(e3), Fl(t3)) : t3.bu.set("Unknown");
        }
        async function zl(t3, e3, n2) {
          if (t3.bu.set("Online"), e3 instanceof lh && 2 === e3.state && e3.cause) try {
            await async function(t4, e4) {
              const n3 = e4.cause;
              for (const r2 of e4.targetIds) t4.Au.has(r2) && (await t4.remoteSyncer.rejectListen(r2, n3), t4.Au.delete(r2), t4.Vu.removeTarget(r2));
            }(t3, e3);
          } catch (n3) {
            ta("RemoteStore", "Failed to remove targets %s: %s ", e3.targetIds.join(","), n3), await Kl(t3, n3);
          }
          else if (e3 instanceof uh ? t3.Vu.Ht(e3) : e3 instanceof hh ? t3.Vu.ne(e3) : t3.Vu.Xt(e3), !n2.isEqual(Ea.min())) try {
            const e4 = await dl(t3.localStore);
            n2.compareTo(e4) >= 0 && await function(t4, e5) {
              const n3 = t4.Vu.ce(e5);
              return n3.targetChanges.forEach((n4, r2) => {
                if (n4.resumeToken.approximateByteSize() > 0) {
                  const i2 = t4.Au.get(r2);
                  i2 && t4.Au.set(r2, i2.withResumeToken(n4.resumeToken, e5));
                }
              }), n3.targetMismatches.forEach((e6, n4) => {
                const r2 = t4.Au.get(e6);
                if (!r2) return;
                t4.Au.set(e6, r2.withResumeToken(Ga.EMPTY_BYTE_STRING, r2.snapshotVersion)), Ul(t4, e6);
                const i2 = new qh(r2.target, e6, n4, r2.sequenceNumber);
                Ml(t4, i2);
              }), t4.remoteSyncer.applyRemoteEvent(n3);
            }(t3, n2);
          } catch (e4) {
            ta("RemoteStore", "Failed to raise snapshot:", e4), await Kl(t3, e4);
          }
        }
        async function Kl(t3, e3, n2) {
          if (!La(e3)) throw e3;
          t3.vu.add(1), await Ll(t3), t3.bu.set("Offline"), n2 || (n2 = () => dl(t3.localStore)), t3.asyncQueue.enqueueRetryable(async () => {
            ta("RemoteStore", "Retrying IndexedDB access"), await n2(), t3.vu.delete(1), await Rl(t3);
          });
        }
        async function Hl(t3, e3) {
          const n2 = oa(t3);
          n2.asyncQueue.verifyOperationInProgress(), ta("RemoteStore", "RemoteStore received new credentials");
          const r2 = jl(n2);
          n2.vu.add(3), await Ll(n2), r2 && n2.bu.set("Unknown"), await n2.remoteSyncer.handleCredentialChange(e3), n2.vu.delete(3), await Rl(n2);
        }
        function Gl(t3) {
          return t3.Su || (t3.Su = function(t4, e3, n2) {
            const r2 = oa(t4);
            return r2.fu(), new kl(e3, r2.connection, r2.authCredentials, r2.appCheckCredentials, r2.serializer, n2);
          }(t3.datastore, t3.asyncQueue, { uo: Bl.bind(null, t3), ao: $l.bind(null, t3), nu: zl.bind(null, t3) }), t3.Ru.push(async (e3) => {
            e3 ? (t3.Su.Qo(), Vl(t3) ? Fl(t3) : t3.bu.set("Unknown")) : (await t3.Su.stop(), ql(t3));
          })), t3.Su;
        }
        class Wl {
          constructor(t3, e3, n2, r2, i2) {
            this.asyncQueue = t3, this.timerId = e3, this.targetTimeMs = n2, this.op = r2, this.removalCallback = i2, this.deferred = new ua(), this.then = this.deferred.promise.then.bind(this.deferred.promise), this.deferred.promise.catch((t4) => {
            });
          }
          static createAndSchedule(t3, e3, n2, r2, i2) {
            const s2 = Date.now() + n2, o2 = new Wl(t3, e3, s2, r2, i2);
            return o2.start(n2), o2;
          }
          start(t3) {
            this.timerHandle = setTimeout(() => this.handleDelayElapsed(), t3);
          }
          skipDelay() {
            return this.handleDelayElapsed();
          }
          cancel(t3) {
            null !== this.timerHandle && (this.clearTimeout(), this.deferred.reject(new ca(aa.CANCELLED, "Operation cancelled" + (t3 ? ": " + t3 : ""))));
          }
          handleDelayElapsed() {
            this.asyncQueue.enqueueAndForget(() => null !== this.timerHandle ? (this.clearTimeout(), this.op().then((t3) => this.deferred.resolve(t3))) : Promise.resolve());
          }
          clearTimeout() {
            null !== this.timerHandle && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null);
          }
        }
        function Ql(t3, e3) {
          if (ea("AsyncQueue", `${e3}: ${t3}`), La(t3)) return new ca(aa.UNAVAILABLE, `${e3}: ${t3}`);
          throw t3;
        }
        class Yl {
          constructor(t3) {
            this.comparator = t3 ? (e3, n2) => t3(e3, n2) || Ca.comparator(e3.key, n2.key) : (t4, e3) => Ca.comparator(t4.key, e3.key), this.keyedMap = fu(), this.sortedSet = new ja(this.comparator);
          }
          static emptySet(t3) {
            return new Yl(t3.comparator);
          }
          has(t3) {
            return null != this.keyedMap.get(t3);
          }
          get(t3) {
            return this.keyedMap.get(t3);
          }
          first() {
            return this.sortedSet.minKey();
          }
          last() {
            return this.sortedSet.maxKey();
          }
          isEmpty() {
            return this.sortedSet.isEmpty();
          }
          indexOf(t3) {
            const e3 = this.keyedMap.get(t3);
            return e3 ? this.sortedSet.indexOf(e3) : -1;
          }
          get size() {
            return this.sortedSet.size;
          }
          forEach(t3) {
            this.sortedSet.inorderTraversal((e3, n2) => (t3(e3), false));
          }
          add(t3) {
            const e3 = this.delete(t3.key);
            return e3.copy(e3.keyedMap.insert(t3.key, t3), e3.sortedSet.insert(t3, null));
          }
          delete(t3) {
            const e3 = this.get(t3);
            return e3 ? this.copy(this.keyedMap.remove(t3), this.sortedSet.remove(e3)) : this;
          }
          isEqual(t3) {
            if (!(t3 instanceof Yl)) return false;
            if (this.size !== t3.size) return false;
            const e3 = this.sortedSet.getIterator(), n2 = t3.sortedSet.getIterator();
            for (; e3.hasNext(); ) {
              const t4 = e3.getNext().key, r2 = n2.getNext().key;
              if (!t4.isEqual(r2)) return false;
            }
            return true;
          }
          toString() {
            const t3 = [];
            return this.forEach((e3) => {
              t3.push(e3.toString());
            }), 0 === t3.length ? "DocumentSet ()" : "DocumentSet (\n  " + t3.join("  \n") + "\n)";
          }
          copy(t3, e3) {
            const n2 = new Yl();
            return n2.comparator = this.comparator, n2.keyedMap = t3, n2.sortedSet = e3, n2;
          }
        }
        class Jl {
          constructor() {
            this.Cu = new ja(Ca.comparator);
          }
          track(t3) {
            const e3 = t3.doc.key, n2 = this.Cu.get(e3);
            n2 ? 0 !== t3.type && 3 === n2.type ? this.Cu = this.Cu.insert(e3, t3) : 3 === t3.type && 1 !== n2.type ? this.Cu = this.Cu.insert(e3, { type: n2.type, doc: t3.doc }) : 2 === t3.type && 2 === n2.type ? this.Cu = this.Cu.insert(e3, { type: 2, doc: t3.doc }) : 2 === t3.type && 0 === n2.type ? this.Cu = this.Cu.insert(e3, { type: 0, doc: t3.doc }) : 1 === t3.type && 0 === n2.type ? this.Cu = this.Cu.remove(e3) : 1 === t3.type && 2 === n2.type ? this.Cu = this.Cu.insert(e3, { type: 1, doc: n2.doc }) : 0 === t3.type && 1 === n2.type ? this.Cu = this.Cu.insert(e3, { type: 2, doc: t3.doc }) : ia() : this.Cu = this.Cu.insert(e3, t3);
          }
          xu() {
            const t3 = [];
            return this.Cu.inorderTraversal((e3, n2) => {
              t3.push(n2);
            }), t3;
          }
        }
        class Xl {
          constructor(t3, e3, n2, r2, i2, s2, o2, a2, c2) {
            this.query = t3, this.docs = e3, this.oldDocs = n2, this.docChanges = r2, this.mutatedKeys = i2, this.fromCache = s2, this.syncStateChanged = o2, this.excludesMetadataChanges = a2, this.hasCachedResults = c2;
          }
          static fromInitialDocuments(t3, e3, n2, r2, i2) {
            const s2 = [];
            return e3.forEach((t4) => {
              s2.push({ type: 0, doc: t4 });
            }), new Xl(t3, e3, Yl.emptySet(e3), s2, n2, r2, true, false, i2);
          }
          get hasPendingWrites() {
            return !this.mutatedKeys.isEmpty();
          }
          isEqual(t3) {
            if (!(this.fromCache === t3.fromCache && this.hasCachedResults === t3.hasCachedResults && this.syncStateChanged === t3.syncStateChanged && this.mutatedKeys.isEqual(t3.mutatedKeys) && ru(this.query, t3.query) && this.docs.isEqual(t3.docs) && this.oldDocs.isEqual(t3.oldDocs))) return false;
            const e3 = this.docChanges, n2 = t3.docChanges;
            if (e3.length !== n2.length) return false;
            for (let t4 = 0; t4 < e3.length; t4++) if (e3[t4].type !== n2[t4].type || !e3[t4].doc.isEqual(n2[t4].doc)) return false;
            return true;
          }
        }
        class Zl {
          constructor() {
            this.Nu = void 0, this.listeners = [];
          }
        }
        class td {
          constructor() {
            this.queries = new uu((t3) => iu(t3), ru), this.onlineState = "Unknown", this.ku = /* @__PURE__ */ new Set();
          }
        }
        async function ed(t3, e3) {
          const n2 = oa(t3), r2 = e3.query;
          let i2 = false, s2 = n2.queries.get(r2);
          if (s2 || (i2 = true, s2 = new Zl()), i2) try {
            s2.Nu = await n2.onListen(r2);
          } catch (t4) {
            const n3 = Ql(t4, `Initialization of query '${su(e3.query)}' failed`);
            return void e3.onError(n3);
          }
          n2.queries.set(r2, s2), s2.listeners.push(e3), e3.Mu(n2.onlineState), s2.Nu && e3.$u(s2.Nu) && sd(n2);
        }
        async function nd(t3, e3) {
          const n2 = oa(t3), r2 = e3.query;
          let i2 = false;
          const s2 = n2.queries.get(r2);
          if (s2) {
            const t4 = s2.listeners.indexOf(e3);
            t4 >= 0 && (s2.listeners.splice(t4, 1), i2 = 0 === s2.listeners.length);
          }
          if (i2) return n2.queries.delete(r2), n2.onUnlisten(r2);
        }
        function rd(t3, e3) {
          const n2 = oa(t3);
          let r2 = false;
          for (const t4 of e3) {
            const e4 = t4.query, i2 = n2.queries.get(e4);
            if (i2) {
              for (const e5 of i2.listeners) e5.$u(t4) && (r2 = true);
              i2.Nu = t4;
            }
          }
          r2 && sd(n2);
        }
        function id(t3, e3, n2) {
          const r2 = oa(t3), i2 = r2.queries.get(e3);
          if (i2) for (const t4 of i2.listeners) t4.onError(n2);
          r2.queries.delete(e3);
        }
        function sd(t3) {
          t3.ku.forEach((t4) => {
            t4.next();
          });
        }
        class od {
          constructor(t3, e3, n2) {
            this.query = t3, this.Ou = e3, this.Fu = false, this.Bu = null, this.onlineState = "Unknown", this.options = n2 || {};
          }
          $u(t3) {
            if (!this.options.includeMetadataChanges) {
              const e4 = [];
              for (const n2 of t3.docChanges) 3 !== n2.type && e4.push(n2);
              t3 = new Xl(t3.query, t3.docs, t3.oldDocs, e4, t3.mutatedKeys, t3.fromCache, t3.syncStateChanged, true, t3.hasCachedResults);
            }
            let e3 = false;
            return this.Fu ? this.Lu(t3) && (this.Ou.next(t3), e3 = true) : this.qu(t3, this.onlineState) && (this.Uu(t3), e3 = true), this.Bu = t3, e3;
          }
          onError(t3) {
            this.Ou.error(t3);
          }
          Mu(t3) {
            this.onlineState = t3;
            let e3 = false;
            return this.Bu && !this.Fu && this.qu(this.Bu, t3) && (this.Uu(this.Bu), e3 = true), e3;
          }
          qu(t3, e3) {
            if (!t3.fromCache) return true;
            const n2 = "Offline" !== e3;
            return (!this.options.Ku || !n2) && (!t3.docs.isEmpty() || t3.hasCachedResults || "Offline" === e3);
          }
          Lu(t3) {
            if (t3.docChanges.length > 0) return true;
            const e3 = this.Bu && this.Bu.hasPendingWrites !== t3.hasPendingWrites;
            return !(!t3.syncStateChanged && !e3) && true === this.options.includeMetadataChanges;
          }
          Uu(t3) {
            t3 = Xl.fromInitialDocuments(t3.query, t3.docs, t3.mutatedKeys, t3.fromCache, t3.hasCachedResults), this.Fu = true, this.Ou.next(t3);
          }
        }
        class ad {
          constructor(t3) {
            this.key = t3;
          }
        }
        class cd {
          constructor(t3) {
            this.key = t3;
          }
        }
        class ud {
          constructor(t3, e3) {
            this.query = t3, this.Yu = e3, this.Xu = null, this.hasCachedResults = false, this.current = false, this.Zu = wu(), this.mutatedKeys = wu(), this.tc = au(t3), this.ec = new Yl(this.tc);
          }
          get nc() {
            return this.Yu;
          }
          sc(t3, e3) {
            const n2 = e3 ? e3.ic : new Jl(), r2 = e3 ? e3.ec : this.ec;
            let i2 = e3 ? e3.mutatedKeys : this.mutatedKeys, s2 = r2, o2 = false;
            const a2 = "F" === this.query.limitType && r2.size === this.query.limit ? r2.last() : null, c2 = "L" === this.query.limitType && r2.size === this.query.limit ? r2.first() : null;
            if (t3.inorderTraversal((t4, e4) => {
              const u2 = r2.get(t4), h2 = ou(this.query, e4) ? e4 : null, l2 = !!u2 && this.mutatedKeys.has(u2.key), d2 = !!h2 && (h2.hasLocalMutations || this.mutatedKeys.has(h2.key) && h2.hasCommittedMutations);
              let f2 = false;
              u2 && h2 ? u2.data.isEqual(h2.data) ? l2 !== d2 && (n2.track({ type: 3, doc: h2 }), f2 = true) : this.rc(u2, h2) || (n2.track({ type: 2, doc: h2 }), f2 = true, (a2 && this.tc(h2, a2) > 0 || c2 && this.tc(h2, c2) < 0) && (o2 = true)) : !u2 && h2 ? (n2.track({ type: 0, doc: h2 }), f2 = true) : u2 && !h2 && (n2.track({ type: 1, doc: u2 }), f2 = true, (a2 || c2) && (o2 = true)), f2 && (h2 ? (s2 = s2.add(h2), i2 = d2 ? i2.add(t4) : i2.delete(t4)) : (s2 = s2.delete(t4), i2 = i2.delete(t4)));
            }), null !== this.query.limit) for (; s2.size > this.query.limit; ) {
              const t4 = "F" === this.query.limitType ? s2.last() : s2.first();
              s2 = s2.delete(t4.key), i2 = i2.delete(t4.key), n2.track({ type: 1, doc: t4 });
            }
            return { ec: s2, ic: n2, zi: o2, mutatedKeys: i2 };
          }
          rc(t3, e3) {
            return t3.hasLocalMutations && e3.hasCommittedMutations && !e3.hasLocalMutations;
          }
          applyChanges(t3, e3, n2) {
            const r2 = this.ec;
            this.ec = t3.ec, this.mutatedKeys = t3.mutatedKeys;
            const i2 = t3.ic.xu();
            i2.sort((t4, e4) => function(t5, e5) {
              const n3 = (t6) => {
                switch (t6) {
                  case 0:
                    return 1;
                  case 2:
                  case 3:
                    return 2;
                  case 1:
                    return 0;
                  default:
                    return ia();
                }
              };
              return n3(t5) - n3(e5);
            }(t4.type, e4.type) || this.tc(t4.doc, e4.doc)), this.oc(n2);
            const s2 = e3 ? this.uc() : [], o2 = 0 === this.Zu.size && this.current ? 1 : 0, a2 = o2 !== this.Xu;
            return this.Xu = o2, 0 !== i2.length || a2 ? { snapshot: new Xl(this.query, t3.ec, r2, i2, t3.mutatedKeys, 0 === o2, a2, false, !!n2 && n2.resumeToken.approximateByteSize() > 0), cc: s2 } : { cc: s2 };
          }
          Mu(t3) {
            return this.current && "Offline" === t3 ? (this.current = false, this.applyChanges({ ec: this.ec, ic: new Jl(), mutatedKeys: this.mutatedKeys, zi: false }, false)) : { cc: [] };
          }
          ac(t3) {
            return !this.Yu.has(t3) && !!this.ec.has(t3) && !this.ec.get(t3).hasLocalMutations;
          }
          oc(t3) {
            t3 && (t3.addedDocuments.forEach((t4) => this.Yu = this.Yu.add(t4)), t3.modifiedDocuments.forEach((t4) => {
            }), t3.removedDocuments.forEach((t4) => this.Yu = this.Yu.delete(t4)), this.current = t3.current);
          }
          uc() {
            if (!this.current) return [];
            const t3 = this.Zu;
            this.Zu = wu(), this.ec.forEach((t4) => {
              this.ac(t4.key) && (this.Zu = this.Zu.add(t4.key));
            });
            const e3 = [];
            return t3.forEach((t4) => {
              this.Zu.has(t4) || e3.push(new cd(t4));
            }), this.Zu.forEach((n2) => {
              t3.has(n2) || e3.push(new ad(n2));
            }), e3;
          }
          hc(t3) {
            this.Yu = t3.ir, this.Zu = wu();
            const e3 = this.sc(t3.documents);
            return this.applyChanges(e3, true);
          }
          lc() {
            return Xl.fromInitialDocuments(this.query, this.ec, this.mutatedKeys, 0 === this.Xu, this.hasCachedResults);
          }
        }
        class hd {
          constructor(t3, e3, n2) {
            this.query = t3, this.targetId = e3, this.view = n2;
          }
        }
        class ld {
          constructor(t3) {
            this.key = t3, this.fc = false;
          }
        }
        class dd {
          constructor(t3, e3, n2, r2, i2, s2) {
            this.localStore = t3, this.remoteStore = e3, this.eventManager = n2, this.sharedClientState = r2, this.currentUser = i2, this.maxConcurrentLimboResolutions = s2, this.dc = {}, this.wc = new uu((t4) => iu(t4), ru), this._c = /* @__PURE__ */ new Map(), this.mc = /* @__PURE__ */ new Set(), this.gc = new ja(Ca.comparator), this.yc = /* @__PURE__ */ new Map(), this.Ic = new Zh(), this.Tc = {}, this.Ec = /* @__PURE__ */ new Map(), this.Ac = Wh.Mn(), this.onlineState = "Unknown", this.vc = void 0;
          }
          get isPrimaryClient() {
            return true === this.vc;
          }
        }
        async function fd(t3, e3) {
          const n2 = function(t4) {
            const e4 = oa(t4);
            return e4.remoteStore.remoteSyncer.applyRemoteEvent = gd.bind(null, e4), e4.remoteStore.remoteSyncer.getRemoteKeysForTarget = Sd.bind(null, e4), e4.remoteStore.remoteSyncer.rejectListen = yd.bind(null, e4), e4.dc.nu = rd.bind(null, e4.eventManager), e4.dc.Pc = id.bind(null, e4.eventManager), e4;
          }(t3);
          let r2, i2;
          const s2 = n2.wc.get(e3);
          if (s2) r2 = s2.targetId, n2.sharedClientState.addLocalQueryTarget(r2), i2 = s2.view.lc();
          else {
            const t4 = await function(t5, e4) {
              const n3 = oa(t5);
              return n3.persistence.runTransaction("Allocate target", "readwrite", (t6) => {
                let r3;
                return n3.Bs.getTargetData(t6, e4).next((i3) => i3 ? (r3 = i3, Ra.resolve(r3)) : n3.Bs.allocateTargetId(t6).next((i4) => (r3 = new qh(e4, i4, "TargetPurposeListen", t6.currentSequenceNumber), n3.Bs.addTargetData(t6, r3).next(() => r3))));
              }).then((t6) => {
                const r3 = n3.Ji.get(t6.targetId);
                return (null === r3 || t6.snapshotVersion.compareTo(r3.snapshotVersion) > 0) && (n3.Ji = n3.Ji.insert(t6.targetId, t6), n3.Yi.set(e4, t6.targetId)), t6;
              });
            }(n2.localStore, tu(e3)), s3 = n2.sharedClientState.addLocalQueryTarget(t4.targetId);
            r2 = t4.targetId, i2 = await async function(t5, e4, n3, r3, i3) {
              t5.Rc = (e5, n4, r4) => async function(t6, e6, n5, r5) {
                let i4 = e6.view.sc(n5);
                i4.zi && (i4 = await pl(t6.localStore, e6.query, false).then(({ documents: t7 }) => e6.view.sc(t7, i4)));
                const s5 = r5 && r5.targetChanges.get(e6.targetId), o3 = e6.view.applyChanges(i4, t6.isPrimaryClient, s5);
                return bd(t6, e6.targetId, o3.cc), o3.snapshot;
              }(t5, e5, n4, r4);
              const s4 = await pl(t5.localStore, e4, true), o2 = new ud(e4, s4.ir), a2 = o2.sc(s4.documents), c2 = ch.createSynthesizedTargetChangeForCurrentChange(n3, r3 && "Offline" !== t5.onlineState, i3), u2 = o2.applyChanges(a2, t5.isPrimaryClient, c2);
              bd(t5, n3, u2.cc);
              const h2 = new hd(e4, n3, o2);
              return t5.wc.set(e4, h2), t5._c.has(n3) ? t5._c.get(n3).push(e4) : t5._c.set(n3, [e4]), u2.snapshot;
            }(n2, e3, r2, "current" === s3, t4.resumeToken), n2.isPrimaryClient && Pl(n2.remoteStore, t4);
          }
          return i2;
        }
        async function pd(t3, e3) {
          const n2 = oa(t3), r2 = n2.wc.get(e3), i2 = n2._c.get(r2.targetId);
          if (i2.length > 1) return n2._c.set(r2.targetId, i2.filter((t4) => !ru(t4, e3))), void n2.wc.delete(e3);
          n2.isPrimaryClient ? (n2.sharedClientState.removeLocalQueryTarget(r2.targetId), n2.sharedClientState.isActiveQueryTarget(r2.targetId) || await fl(n2.localStore, r2.targetId, false).then(() => {
            n2.sharedClientState.clearQueryState(r2.targetId), xl(n2.remoteStore, r2.targetId), vd(n2, r2.targetId);
          }).catch(Da)) : (vd(n2, r2.targetId), await fl(n2.localStore, r2.targetId, true));
        }
        async function gd(t3, e3) {
          const n2 = oa(t3);
          try {
            const t4 = await function(t5, e4) {
              const n3 = oa(t5), r2 = e4.snapshotVersion;
              let i2 = n3.Ji;
              return n3.persistence.runTransaction("Apply remote event", "readwrite-primary", (t6) => {
                const s2 = n3.Zi.newChangeBuffer({ trackRemovals: true });
                i2 = n3.Ji;
                const o2 = [];
                e4.targetChanges.forEach((s3, a3) => {
                  const c3 = i2.get(a3);
                  if (!c3) return;
                  o2.push(n3.Bs.removeMatchingKeys(t6, s3.removedDocuments, a3).next(() => n3.Bs.addMatchingKeys(t6, s3.addedDocuments, a3)));
                  let u2 = c3.withSequenceNumber(t6.currentSequenceNumber);
                  null !== e4.targetMismatches.get(a3) ? u2 = u2.withResumeToken(Ga.EMPTY_BYTE_STRING, Ea.min()).withLastLimboFreeSnapshotVersion(Ea.min()) : s3.resumeToken.approximateByteSize() > 0 && (u2 = u2.withResumeToken(s3.resumeToken, r2)), i2 = i2.insert(a3, u2), function(t7, e5, n4) {
                    return 0 === t7.resumeToken.approximateByteSize() || e5.snapshotVersion.toMicroseconds() - t7.snapshotVersion.toMicroseconds() >= 3e8 || n4.addedDocuments.size + n4.modifiedDocuments.size + n4.removedDocuments.size > 0;
                  }(c3, u2, s3) && o2.push(n3.Bs.updateTargetData(t6, u2));
                });
                let a2 = lu(), c2 = wu();
                if (e4.documentUpdates.forEach((r3) => {
                  e4.resolvedLimboDocuments.has(r3) && o2.push(n3.persistence.referenceDelegate.updateLimboDocument(t6, r3));
                }), o2.push(function(t7, e5, n4) {
                  let r3 = wu(), i3 = wu();
                  return n4.forEach((t8) => r3 = r3.add(t8)), e5.getEntries(t7, r3).next((t8) => {
                    let r4 = lu();
                    return n4.forEach((n5, s3) => {
                      const o3 = t8.get(n5);
                      s3.isFoundDocument() !== o3.isFoundDocument() && (i3 = i3.add(n5)), s3.isNoDocument() && s3.version.isEqual(Ea.min()) ? (e5.removeEntry(n5, s3.readTime), r4 = r4.insert(n5, s3)) : !o3.isValidDocument() || s3.version.compareTo(o3.version) > 0 || 0 === s3.version.compareTo(o3.version) && o3.hasPendingWrites ? (e5.addEntry(s3), r4 = r4.insert(n5, s3)) : ta("LocalStore", "Ignoring outdated watch update for ", n5, ". Current version:", o3.version, " Watch version:", s3.version);
                    }), { nr: r4, sr: i3 };
                  });
                }(t6, s2, e4.documentUpdates).next((t7) => {
                  a2 = t7.nr, c2 = t7.sr;
                })), !r2.isEqual(Ea.min())) {
                  const e5 = n3.Bs.getLastRemoteSnapshotVersion(t6).next((e6) => n3.Bs.setTargetsMetadata(t6, t6.currentSequenceNumber, r2));
                  o2.push(e5);
                }
                return Ra.waitFor(o2).next(() => s2.apply(t6)).next(() => n3.localDocuments.getLocalViewOfDocuments(t6, a2, c2)).next(() => a2);
              }).then((t6) => (n3.Ji = i2, t6));
            }(n2.localStore, e3);
            e3.targetChanges.forEach((t5, e4) => {
              const r2 = n2.yc.get(e4);
              r2 && (sa(t5.addedDocuments.size + t5.modifiedDocuments.size + t5.removedDocuments.size <= 1), t5.addedDocuments.size > 0 ? r2.fc = true : t5.modifiedDocuments.size > 0 ? sa(r2.fc) : t5.removedDocuments.size > 0 && (sa(r2.fc), r2.fc = false));
            }), await Td(n2, t4, e3);
          } catch (t4) {
            await Da(t4);
          }
        }
        function md(t3, e3, n2) {
          const r2 = oa(t3);
          if (r2.isPrimaryClient && 0 === n2 || !r2.isPrimaryClient && 1 === n2) {
            const t4 = [];
            r2.wc.forEach((n3, r3) => {
              const i2 = r3.view.Mu(e3);
              i2.snapshot && t4.push(i2.snapshot);
            }), function(t5, e4) {
              const n3 = oa(t5);
              n3.onlineState = e4;
              let r3 = false;
              n3.queries.forEach((t6, n4) => {
                for (const t7 of n4.listeners) t7.Mu(e4) && (r3 = true);
              }), r3 && sd(n3);
            }(r2.eventManager, e3), t4.length && r2.dc.nu(t4), r2.onlineState = e3, r2.isPrimaryClient && r2.sharedClientState.setOnlineState(e3);
          }
        }
        async function yd(t3, e3, n2) {
          const r2 = oa(t3);
          r2.sharedClientState.updateQueryState(e3, "rejected", n2);
          const i2 = r2.yc.get(e3), s2 = i2 && i2.key;
          if (s2) {
            let t4 = new ja(Ca.comparator);
            t4 = t4.insert(s2, bc.newNoDocument(s2, Ea.min()));
            const n3 = wu().add(s2), i3 = new ah(Ea.min(), /* @__PURE__ */ new Map(), new ja(wa), t4, n3);
            await gd(r2, i3), r2.gc = r2.gc.remove(s2), r2.yc.delete(e3), Ed(r2);
          } else await fl(r2.localStore, e3, false).then(() => vd(r2, e3, n2)).catch(Da);
        }
        function vd(t3, e3, n2 = null) {
          t3.sharedClientState.removeLocalQueryTarget(e3);
          for (const r2 of t3._c.get(e3)) t3.wc.delete(r2), n2 && t3.dc.Pc(r2, n2);
          t3._c.delete(e3), t3.isPrimaryClient && t3.Ic.Is(e3).forEach((e4) => {
            t3.Ic.containsKey(e4) || wd(t3, e4);
          });
        }
        function wd(t3, e3) {
          t3.mc.delete(e3.path.canonicalString());
          const n2 = t3.gc.get(e3);
          null !== n2 && (xl(t3.remoteStore, n2), t3.gc = t3.gc.remove(e3), t3.yc.delete(n2), Ed(t3));
        }
        function bd(t3, e3, n2) {
          for (const r2 of n2) r2 instanceof ad ? (t3.Ic.addReference(r2.key, e3), _d(t3, r2)) : r2 instanceof cd ? (ta("SyncEngine", "Document no longer in limbo: " + r2.key), t3.Ic.removeReference(r2.key, e3), t3.Ic.containsKey(r2.key) || wd(t3, r2.key)) : ia();
        }
        function _d(t3, e3) {
          const n2 = e3.key, r2 = n2.path.canonicalString();
          t3.gc.get(n2) || t3.mc.has(r2) || (ta("SyncEngine", "New document in limbo: " + n2), t3.mc.add(r2), Ed(t3));
        }
        function Ed(t3) {
          for (; t3.mc.size > 0 && t3.gc.size < t3.maxConcurrentLimboResolutions; ) {
            const e3 = t3.mc.values().next().value;
            t3.mc.delete(e3);
            const n2 = new Ca(Ia.fromString(e3)), r2 = t3.Ac.next();
            t3.yc.set(r2, new ld(n2)), t3.gc = t3.gc.insert(n2, r2), Pl(t3.remoteStore, new qh(tu(Wc(n2.path)), r2, "TargetPurposeLimboResolution", Pa.ct));
          }
        }
        async function Td(t3, e3, n2) {
          const r2 = oa(t3), i2 = [], s2 = [], o2 = [];
          r2.wc.isEmpty() || (r2.wc.forEach((t4, a2) => {
            o2.push(r2.Rc(a2, e3, n2).then((t5) => {
              if ((t5 || n2) && r2.isPrimaryClient && r2.sharedClientState.updateQueryState(a2.targetId, (null == t5 ? void 0 : t5.fromCache) ? "not-current" : "current"), t5) {
                i2.push(t5);
                const e4 = cl.Li(a2.targetId, t5);
                s2.push(e4);
              }
            }));
          }), await Promise.all(o2), r2.dc.nu(i2), await async function(t4, e4) {
            const n3 = oa(t4);
            try {
              await n3.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (t5) => Ra.forEach(e4, (e5) => Ra.forEach(e5.Fi, (r3) => n3.persistence.referenceDelegate.addReference(t5, e5.targetId, r3)).next(() => Ra.forEach(e5.Bi, (r3) => n3.persistence.referenceDelegate.removeReference(t5, e5.targetId, r3)))));
            } catch (t5) {
              if (!La(t5)) throw t5;
              ta("LocalStore", "Failed to update sequence numbers: " + t5);
            }
            for (const t5 of e4) {
              const e5 = t5.targetId;
              if (!t5.fromCache) {
                const t6 = n3.Ji.get(e5), r3 = t6.snapshotVersion, i3 = t6.withLastLimboFreeSnapshotVersion(r3);
                n3.Ji = n3.Ji.insert(e5, i3);
              }
            }
          }(r2.localStore, s2));
        }
        async function Id(t3, e3) {
          const n2 = oa(t3);
          if (!n2.currentUser.isEqual(e3)) {
            ta("SyncEngine", "User change. New user:", e3.toKey());
            const t4 = await ll(n2.localStore, e3);
            n2.currentUser = e3, function(t5, e4) {
              t5.Ec.forEach((t6) => {
                t6.forEach((t7) => {
                  t7.reject(new ca(aa.CANCELLED, "'waitForPendingWrites' promise is rejected due to a user change."));
                });
              }), t5.Ec.clear();
            }(n2), n2.sharedClientState.handleUserChange(e3, t4.removedBatchIds, t4.addedBatchIds), await Td(n2, t4.er);
          }
        }
        function Sd(t3, e3) {
          const n2 = oa(t3), r2 = n2.yc.get(e3);
          if (r2 && r2.fc) return wu().add(r2.key);
          {
            let t4 = wu();
            const r3 = n2._c.get(e3);
            if (!r3) return t4;
            for (const e4 of r3) {
              const r4 = n2.wc.get(e4);
              t4 = t4.unionWith(r4.view.nc);
            }
            return t4;
          }
        }
        class Ad {
          constructor() {
            this.synchronizeTabs = false;
          }
          async initialize(t3) {
            this.serializer = Al(t3.databaseInfo.databaseId), this.sharedClientState = this.createSharedClientState(t3), this.persistence = this.createPersistence(t3), await this.persistence.start(), this.localStore = this.createLocalStore(t3), this.gcScheduler = this.createGarbageCollectionScheduler(t3, this.localStore), this.indexBackfillerScheduler = this.createIndexBackfillerScheduler(t3, this.localStore);
          }
          createGarbageCollectionScheduler(t3, e3) {
            return null;
          }
          createIndexBackfillerScheduler(t3, e3) {
            return null;
          }
          createLocalStore(t3) {
            return function(t4, e3, n2, r2) {
              return new hl(t4, e3, n2, r2);
            }(this.persistence, new ul(), t3.initialUser, this.serializer);
          }
          createPersistence(t3) {
            return new sl(al.zs, this.serializer);
          }
          createSharedClientState(t3) {
            return new ml();
          }
          async terminate() {
            this.gcScheduler && this.gcScheduler.stop(), await this.sharedClientState.shutdown(), await this.persistence.shutdown();
          }
        }
        class Cd {
          async initialize(t3, e3) {
            this.localStore || (this.localStore = t3.localStore, this.sharedClientState = t3.sharedClientState, this.datastore = this.createDatastore(e3), this.remoteStore = this.createRemoteStore(e3), this.eventManager = this.createEventManager(e3), this.syncEngine = this.createSyncEngine(e3, !t3.synchronizeTabs), this.sharedClientState.onlineStateHandler = (t4) => md(this.syncEngine, t4, 1), this.remoteStore.remoteSyncer.handleCredentialChange = Id.bind(null, this.syncEngine), await async function(t4, e4) {
              const n2 = oa(t4);
              e4 ? (n2.vu.delete(2), await Rl(n2)) : e4 || (n2.vu.add(2), await Ll(n2), n2.bu.set("Unknown"));
            }(this.remoteStore, this.syncEngine.isPrimaryClient));
          }
          createEventManager(t3) {
            return new td();
          }
          createDatastore(t3) {
            const e3 = Al(t3.databaseInfo.databaseId), n2 = (r2 = t3.databaseInfo, new Il(r2));
            var r2;
            return function(t4, e4, n3, r3) {
              return new Nl(t4, e4, n3, r3);
            }(t3.authCredentials, t3.appCheckCredentials, n2, e3);
          }
          createRemoteStore(t3) {
            return e3 = this.localStore, n2 = this.datastore, r2 = t3.asyncQueue, i2 = (t4) => md(this.syncEngine, t4, 0), s2 = vl.D() ? new vl() : new yl(), new Dl(e3, n2, r2, i2, s2);
            var e3, n2, r2, i2, s2;
          }
          createSyncEngine(t3, e3) {
            return function(t4, e4, n2, r2, i2, s2, o2) {
              const a2 = new dd(t4, e4, n2, r2, i2, s2);
              return o2 && (a2.vc = true), a2;
            }(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, t3.initialUser, t3.maxConcurrentLimboResolutions, e3);
          }
          terminate() {
            return async function(t3) {
              const e3 = oa(t3);
              ta("RemoteStore", "RemoteStore shutting down."), e3.vu.add(5), await Ll(e3), e3.Pu.shutdown(), e3.bu.set("Unknown");
            }(this.remoteStore);
          }
        }
        class kd {
          constructor(t3) {
            this.observer = t3, this.muted = false;
          }
          next(t3) {
            this.observer.next && this.Sc(this.observer.next, t3);
          }
          error(t3) {
            this.observer.error ? this.Sc(this.observer.error, t3) : ea("Uncaught Error in snapshot listener:", t3.toString());
          }
          Dc() {
            this.muted = true;
          }
          Sc(t3, e3) {
            this.muted || setTimeout(() => {
              this.muted || t3(e3);
            }, 0);
          }
        }
        class Nd {
          constructor(t3, e3, n2, r2) {
            this.authCredentials = t3, this.appCheckCredentials = e3, this.asyncQueue = n2, this.databaseInfo = r2, this.user = Yo.UNAUTHENTICATED, this.clientId = (class {
              static A() {
                const t4 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e4 = Math.floor(256 / t4.length) * t4.length;
                let n3 = "";
                for (; n3.length < 20; ) {
                  const r3 = va(40);
                  for (let i2 = 0; i2 < r3.length; ++i2) n3.length < 20 && r3[i2] < e4 && (n3 += t4.charAt(r3[i2] % t4.length));
                }
                return n3;
              }
            }).A(), this.authCredentialListener = () => Promise.resolve(), this.appCheckCredentialListener = () => Promise.resolve(), this.authCredentials.start(n2, async (t4) => {
              ta("FirestoreClient", "Received user=", t4.uid), await this.authCredentialListener(t4), this.user = t4;
            }), this.appCheckCredentials.start(n2, (t4) => (ta("FirestoreClient", "Received new app check token=", t4), this.appCheckCredentialListener(t4, this.user)));
          }
          async getConfiguration() {
            return { asyncQueue: this.asyncQueue, databaseInfo: this.databaseInfo, clientId: this.clientId, authCredentials: this.authCredentials, appCheckCredentials: this.appCheckCredentials, initialUser: this.user, maxConcurrentLimboResolutions: 100 };
          }
          setCredentialChangeListener(t3) {
            this.authCredentialListener = t3;
          }
          setAppCheckTokenChangeListener(t3) {
            this.appCheckCredentialListener = t3;
          }
          verifyNotTerminated() {
            if (this.asyncQueue.isShuttingDown) throw new ca(aa.FAILED_PRECONDITION, "The client has already been terminated.");
          }
          terminate() {
            this.asyncQueue.enterRestrictedMode();
            const t3 = new ua();
            return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
              try {
                this._onlineComponents && await this._onlineComponents.terminate(), this._offlineComponents && await this._offlineComponents.terminate(), this.authCredentials.shutdown(), this.appCheckCredentials.shutdown(), t3.resolve();
              } catch (e3) {
                const n2 = Ql(e3, "Failed to shutdown persistence");
                t3.reject(n2);
              }
            }), t3.promise;
          }
        }
        async function Od(t3, e3) {
          t3.asyncQueue.verifyOperationInProgress(), ta("FirestoreClient", "Initializing OfflineComponentProvider");
          const n2 = await t3.getConfiguration();
          await e3.initialize(n2);
          let r2 = n2.initialUser;
          t3.setCredentialChangeListener(async (t4) => {
            r2.isEqual(t4) || (await ll(e3.localStore, t4), r2 = t4);
          }), e3.persistence.setDatabaseDeletedListener(() => t3.terminate()), t3._offlineComponents = e3;
        }
        async function Dd(t3, e3) {
          t3.asyncQueue.verifyOperationInProgress();
          const n2 = await async function(t4) {
            if (!t4._offlineComponents) if (t4._uninitializedComponentsProvider) {
              ta("FirestoreClient", "Using user provided OfflineComponentProvider");
              try {
                await Od(t4, t4._uninitializedComponentsProvider._offline);
              } catch (e4) {
                const n3 = e4;
                if (!function(t5) {
                  return "FirebaseError" === t5.name ? t5.code === aa.FAILED_PRECONDITION || t5.code === aa.UNIMPLEMENTED : !("undefined" != typeof DOMException && t5 instanceof DOMException) || 22 === t5.code || 20 === t5.code || 11 === t5.code;
                }(n3)) throw n3;
                na("Error using user provided cache. Falling back to memory cache: " + n3), await Od(t4, new Ad());
              }
            } else ta("FirestoreClient", "Using default OfflineComponentProvider"), await Od(t4, new Ad());
            return t4._offlineComponents;
          }(t3);
          ta("FirestoreClient", "Initializing OnlineComponentProvider");
          const r2 = await t3.getConfiguration();
          await e3.initialize(n2, r2), t3.setCredentialChangeListener((t4) => Hl(e3.remoteStore, t4)), t3.setAppCheckTokenChangeListener((t4, n3) => Hl(e3.remoteStore, n3)), t3._onlineComponents = e3;
        }
        async function Rd(t3) {
          const e3 = await async function(t4) {
            return t4._onlineComponents || (t4._uninitializedComponentsProvider ? (ta("FirestoreClient", "Using user provided OnlineComponentProvider"), await Dd(t4, t4._uninitializedComponentsProvider._online)) : (ta("FirestoreClient", "Using default OnlineComponentProvider"), await Dd(t4, new Cd()))), t4._onlineComponents;
          }(t3), n2 = e3.eventManager;
          return n2.onListen = fd.bind(null, e3.syncEngine), n2.onUnlisten = pd.bind(null, e3.syncEngine), n2;
        }
        function Ld(t3) {
          const e3 = {};
          return void 0 !== t3.timeoutSeconds && (e3.timeoutSeconds = t3.timeoutSeconds), e3;
        }
        const Pd = /* @__PURE__ */ new Map();
        function xd(t3) {
          if (Ca.isDocumentKey(t3)) throw new ca(aa.INVALID_ARGUMENT, `Invalid collection reference. Collection references must have an odd number of segments, but ${t3} has ${t3.length}.`);
        }
        function Md(t3) {
          if (void 0 === t3) return "undefined";
          if (null === t3) return "null";
          if ("string" == typeof t3) return t3.length > 20 && (t3 = `${t3.substring(0, 20)}...`), JSON.stringify(t3);
          if ("number" == typeof t3 || "boolean" == typeof t3) return "" + t3;
          if ("object" == typeof t3) {
            if (t3 instanceof Array) return "an array";
            {
              const e3 = function(t4) {
                return t4.constructor ? t4.constructor.name : null;
              }(t3);
              return e3 ? `a custom ${e3} object` : "an object";
            }
          }
          return "function" == typeof t3 ? "a function" : ia();
        }
        function Ud(t3, e3) {
          if ("_delegate" in t3 && (t3 = t3._delegate), !(t3 instanceof e3)) {
            if (e3.name === t3.constructor.name) throw new ca(aa.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
            {
              const n2 = Md(t3);
              throw new ca(aa.INVALID_ARGUMENT, `Expected type '${e3.name}', but it was: ${n2}`);
            }
          }
          return t3;
        }
        class Fd {
          constructor(t3) {
            var e3, n2;
            if (void 0 === t3.host) {
              if (void 0 !== t3.ssl) throw new ca(aa.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
              this.host = "firestore.googleapis.com", this.ssl = true;
            } else this.host = t3.host, this.ssl = null === (e3 = t3.ssl) || void 0 === e3 || e3;
            if (this.credentials = t3.credentials, this.ignoreUndefinedProperties = !!t3.ignoreUndefinedProperties, this.cache = t3.localCache, void 0 === t3.cacheSizeBytes) this.cacheSizeBytes = 41943040;
            else {
              if (-1 !== t3.cacheSizeBytes && t3.cacheSizeBytes < 1048576) throw new ca(aa.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
              this.cacheSizeBytes = t3.cacheSizeBytes;
            }
            (function(t4, e4, n3, r2) {
              if (true === e4 && true === r2) throw new ca(aa.INVALID_ARGUMENT, "experimentalForceLongPolling and experimentalAutoDetectLongPolling cannot be used together.");
            })(0, t3.experimentalForceLongPolling, 0, t3.experimentalAutoDetectLongPolling), this.experimentalForceLongPolling = !!t3.experimentalForceLongPolling, this.experimentalForceLongPolling ? this.experimentalAutoDetectLongPolling = false : void 0 === t3.experimentalAutoDetectLongPolling ? this.experimentalAutoDetectLongPolling = true : this.experimentalAutoDetectLongPolling = !!t3.experimentalAutoDetectLongPolling, this.experimentalLongPollingOptions = Ld(null !== (n2 = t3.experimentalLongPollingOptions) && void 0 !== n2 ? n2 : {}), function(t4) {
              if (void 0 !== t4.timeoutSeconds) {
                if (isNaN(t4.timeoutSeconds)) throw new ca(aa.INVALID_ARGUMENT, `invalid long polling timeout: ${t4.timeoutSeconds} (must not be NaN)`);
                if (t4.timeoutSeconds < 5) throw new ca(aa.INVALID_ARGUMENT, `invalid long polling timeout: ${t4.timeoutSeconds} (minimum allowed value is 5)`);
                if (t4.timeoutSeconds > 30) throw new ca(aa.INVALID_ARGUMENT, `invalid long polling timeout: ${t4.timeoutSeconds} (maximum allowed value is 30)`);
              }
            }(this.experimentalLongPollingOptions), this.useFetchStreams = !!t3.useFetchStreams;
          }
          isEqual(t3) {
            return this.host === t3.host && this.ssl === t3.ssl && this.credentials === t3.credentials && this.cacheSizeBytes === t3.cacheSizeBytes && this.experimentalForceLongPolling === t3.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t3.experimentalAutoDetectLongPolling && (e3 = this.experimentalLongPollingOptions, n2 = t3.experimentalLongPollingOptions, e3.timeoutSeconds === n2.timeoutSeconds) && this.ignoreUndefinedProperties === t3.ignoreUndefinedProperties && this.useFetchStreams === t3.useFetchStreams;
            var e3, n2;
          }
        }
        class Vd {
          constructor(t3, e3, n2, r2) {
            this._authCredentials = t3, this._appCheckCredentials = e3, this._databaseId = n2, this._app = r2, this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new Fd({}), this._settingsFrozen = false;
          }
          get app() {
            if (!this._app) throw new ca(aa.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
            return this._app;
          }
          get _initialized() {
            return this._settingsFrozen;
          }
          get _terminated() {
            return void 0 !== this._terminateTask;
          }
          _setSettings(t3) {
            if (this._settingsFrozen) throw new ca(aa.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
            this._settings = new Fd(t3), void 0 !== t3.credentials && (this._authCredentials = function(t4) {
              if (!t4) return new la();
              switch (t4.type) {
                case "firstParty":
                  return new ga(t4.sessionIndex || "0", t4.iamToken || null, t4.authTokenFactory || null);
                case "provider":
                  return t4.client;
                default:
                  throw new ca(aa.INVALID_ARGUMENT, "makeAuthCredentialsProvider failed due to invalid credential type");
              }
            }(t3.credentials));
          }
          _getSettings() {
            return this._settings;
          }
          _freezeSettings() {
            return this._settingsFrozen = true, this._settings;
          }
          _delete() {
            return this._terminateTask || (this._terminateTask = this._terminate()), this._terminateTask;
          }
          toJSON() {
            return { app: this._app, databaseId: this._databaseId, settings: this._settings };
          }
          _terminate() {
            return function(t3) {
              const e3 = Pd.get(t3);
              e3 && (ta("ComponentProvider", "Removing Datastore"), Pd.delete(t3), e3.terminate());
            }(this), Promise.resolve();
          }
        }
        class jd {
          constructor(t3, e3, n2) {
            this.converter = e3, this._key = n2, this.type = "document", this.firestore = t3;
          }
          get _path() {
            return this._key.path;
          }
          get id() {
            return this._key.path.lastSegment();
          }
          get path() {
            return this._key.path.canonicalString();
          }
          get parent() {
            return new Bd(this.firestore, this.converter, this._key.path.popLast());
          }
          withConverter(t3) {
            return new jd(this.firestore, t3, this._key);
          }
        }
        class qd {
          constructor(t3, e3, n2) {
            this.converter = e3, this._query = n2, this.type = "query", this.firestore = t3;
          }
          withConverter(t3) {
            return new qd(this.firestore, t3, this._query);
          }
        }
        class Bd extends qd {
          constructor(t3, e3, n2) {
            super(t3, e3, Wc(n2)), this._path = n2, this.type = "collection";
          }
          get id() {
            return this._query.path.lastSegment();
          }
          get path() {
            return this._query.path.canonicalString();
          }
          get parent() {
            const t3 = this._path.popLast();
            return t3.isEmpty() ? null : new jd(this.firestore, null, new Ca(t3));
          }
          withConverter(t3) {
            return new Bd(this.firestore, t3, this._path);
          }
        }
        class $d {
          constructor() {
            this.Gc = Promise.resolve(), this.Qc = [], this.jc = false, this.zc = [], this.Wc = null, this.Hc = false, this.Jc = false, this.Yc = [], this.qo = new Cl(this, "async_queue_retry"), this.Xc = () => {
              const t4 = Sl();
              t4 && ta("AsyncQueue", "Visibility state changed to " + t4.visibilityState), this.qo.Mo();
            };
            const t3 = Sl();
            t3 && "function" == typeof t3.addEventListener && t3.addEventListener("visibilitychange", this.Xc);
          }
          get isShuttingDown() {
            return this.jc;
          }
          enqueueAndForget(t3) {
            this.enqueue(t3);
          }
          enqueueAndForgetEvenWhileRestricted(t3) {
            this.Zc(), this.ta(t3);
          }
          enterRestrictedMode(t3) {
            if (!this.jc) {
              this.jc = true, this.Jc = t3 || false;
              const e3 = Sl();
              e3 && "function" == typeof e3.removeEventListener && e3.removeEventListener("visibilitychange", this.Xc);
            }
          }
          enqueue(t3) {
            if (this.Zc(), this.jc) return new Promise(() => {
            });
            const e3 = new ua();
            return this.ta(() => this.jc && this.Jc ? Promise.resolve() : (t3().then(e3.resolve, e3.reject), e3.promise)).then(() => e3.promise);
          }
          enqueueRetryable(t3) {
            this.enqueueAndForget(() => (this.Qc.push(t3), this.ea()));
          }
          async ea() {
            if (0 !== this.Qc.length) {
              try {
                await this.Qc[0](), this.Qc.shift(), this.qo.reset();
              } catch (t3) {
                if (!La(t3)) throw t3;
                ta("AsyncQueue", "Operation failed with retryable error: " + t3);
              }
              this.Qc.length > 0 && this.qo.No(() => this.ea());
            }
          }
          ta(t3) {
            const e3 = this.Gc.then(() => (this.Hc = true, t3().catch((t4) => {
              this.Wc = t4, this.Hc = false;
              const e4 = function(t5) {
                let e5 = t5.message || "";
                return t5.stack && (e5 = t5.stack.includes(t5.message) ? t5.stack : t5.message + "\n" + t5.stack), e5;
              }(t4);
              throw ea("INTERNAL UNHANDLED ERROR: ", e4), t4;
            }).then((t4) => (this.Hc = false, t4))));
            return this.Gc = e3, e3;
          }
          enqueueAfterDelay(t3, e3, n2) {
            this.Zc(), this.Yc.indexOf(t3) > -1 && (e3 = 0);
            const r2 = Wl.createAndSchedule(this, t3, e3, n2, (t4) => this.na(t4));
            return this.zc.push(r2), r2;
          }
          Zc() {
            this.Wc && ia();
          }
          verifyOperationInProgress() {
          }
          async sa() {
            let t3;
            do {
              t3 = this.Gc, await t3;
            } while (t3 !== this.Gc);
          }
          ia(t3) {
            for (const e3 of this.zc) if (e3.timerId === t3) return true;
            return false;
          }
          ra(t3) {
            return this.sa().then(() => {
              this.zc.sort((t4, e3) => t4.targetTimeMs - e3.targetTimeMs);
              for (const e3 of this.zc) if (e3.skipDelay(), "all" !== t3 && e3.timerId === t3) break;
              return this.sa();
            });
          }
          oa(t3) {
            this.Yc.push(t3);
          }
          na(t3) {
            const e3 = this.zc.indexOf(t3);
            this.zc.splice(e3, 1);
          }
        }
        function zd(t3) {
          return function(t4, e3) {
            if ("object" != typeof t4 || null === t4) return false;
            const n2 = t4;
            for (const t5 of ["next", "error", "complete"]) if (t5 in n2 && "function" == typeof n2[t5]) return true;
            return false;
          }(t3);
        }
        class Kd extends Vd {
          constructor(t3, e3, n2, r2) {
            super(t3, e3, n2, r2), this.type = "firestore", this._queue = new $d(), this._persistenceKey = (null == r2 ? void 0 : r2.name) || "[DEFAULT]";
          }
          _terminate() {
            return this._firestoreClient || Gd(this), this._firestoreClient.terminate();
          }
        }
        function Hd(t3) {
          return t3._firestoreClient || Gd(t3), t3._firestoreClient.verifyNotTerminated(), t3._firestoreClient;
        }
        function Gd(t3) {
          var e3, n2, r2;
          const i2 = t3._freezeSettings(), s2 = function(t4, e4, n3, r3) {
            return new ec(t4, e4, n3, r3.host, r3.ssl, r3.experimentalForceLongPolling, r3.experimentalAutoDetectLongPolling, Ld(r3.experimentalLongPollingOptions), r3.useFetchStreams);
          }(t3._databaseId, (null === (e3 = t3._app) || void 0 === e3 ? void 0 : e3.options.appId) || "", t3._persistenceKey, i2);
          t3._firestoreClient = new Nd(t3._authCredentials, t3._appCheckCredentials, t3._queue, s2), (null === (n2 = i2.cache) || void 0 === n2 ? void 0 : n2._offlineComponentProvider) && (null === (r2 = i2.cache) || void 0 === r2 ? void 0 : r2._onlineComponentProvider) && (t3._firestoreClient._uninitializedComponentsProvider = { _offlineKind: i2.cache.kind, _offline: i2.cache._offlineComponentProvider, _online: i2.cache._onlineComponentProvider });
        }
        class Wd {
          constructor(t3) {
            this._byteString = t3;
          }
          static fromBase64String(t3) {
            try {
              return new Wd(Ga.fromBase64String(t3));
            } catch (t4) {
              throw new ca(aa.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + t4);
            }
          }
          static fromUint8Array(t3) {
            return new Wd(Ga.fromUint8Array(t3));
          }
          toBase64() {
            return this._byteString.toBase64();
          }
          toUint8Array() {
            return this._byteString.toUint8Array();
          }
          toString() {
            return "Bytes(base64: " + this.toBase64() + ")";
          }
          isEqual(t3) {
            return this._byteString.isEqual(t3._byteString);
          }
        }
        class Qd {
          constructor(...t3) {
            for (let e3 = 0; e3 < t3.length; ++e3) if (0 === t3[e3].length) throw new ca(aa.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
            this._internalPath = new Aa(t3);
          }
          isEqual(t3) {
            return this._internalPath.isEqual(t3._internalPath);
          }
        }
        class Yd {
          constructor(t3) {
            this._methodName = t3;
          }
        }
        class Jd {
          constructor(t3, e3) {
            if (!isFinite(t3) || t3 < -90 || t3 > 90) throw new ca(aa.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t3);
            if (!isFinite(e3) || e3 < -180 || e3 > 180) throw new ca(aa.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e3);
            this._lat = t3, this._long = e3;
          }
          get latitude() {
            return this._lat;
          }
          get longitude() {
            return this._long;
          }
          isEqual(t3) {
            return this._lat === t3._lat && this._long === t3._long;
          }
          toJSON() {
            return { latitude: this._lat, longitude: this._long };
          }
          _compareTo(t3) {
            return wa(this._lat, t3._lat) || wa(this._long, t3._long);
          }
        }
        const Xd = /^__.*__$/;
        function Zd(t3) {
          switch (t3) {
            case 0:
            case 2:
            case 1:
              return true;
            case 3:
            case 4:
              return false;
            default:
              throw ia();
          }
        }
        class tf {
          constructor(t3, e3, n2, r2, i2, s2) {
            this.settings = t3, this.databaseId = e3, this.serializer = n2, this.ignoreUndefinedProperties = r2, void 0 === i2 && this.ua(), this.fieldTransforms = i2 || [], this.fieldMask = s2 || [];
          }
          get path() {
            return this.settings.path;
          }
          get ca() {
            return this.settings.ca;
          }
          aa(t3) {
            return new tf(Object.assign(Object.assign({}, this.settings), t3), this.databaseId, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask);
          }
          ha(t3) {
            var e3;
            const n2 = null === (e3 = this.path) || void 0 === e3 ? void 0 : e3.child(t3), r2 = this.aa({ path: n2, la: false });
            return r2.fa(t3), r2;
          }
          da(t3) {
            var e3;
            const n2 = null === (e3 = this.path) || void 0 === e3 ? void 0 : e3.child(t3), r2 = this.aa({ path: n2, la: false });
            return r2.ua(), r2;
          }
          wa(t3) {
            return this.aa({ path: void 0, la: true });
          }
          _a(t3) {
            return cf(t3, this.settings.methodName, this.settings.ma || false, this.path, this.settings.ga);
          }
          contains(t3) {
            return void 0 !== this.fieldMask.find((e3) => t3.isPrefixOf(e3)) || void 0 !== this.fieldTransforms.find((e3) => t3.isPrefixOf(e3.field));
          }
          ua() {
            if (this.path) for (let t3 = 0; t3 < this.path.length; t3++) this.fa(this.path.get(t3));
          }
          fa(t3) {
            if (0 === t3.length) throw this._a("Document fields must not be empty");
            if (Zd(this.ca) && Xd.test(t3)) throw this._a('Document fields cannot begin and end with "__"');
          }
        }
        class ef {
          constructor(t3, e3, n2) {
            this.databaseId = t3, this.ignoreUndefinedProperties = e3, this.serializer = n2 || Al(t3);
          }
          ya(t3, e3, n2, r2 = false) {
            return new tf({ ca: t3, methodName: e3, ga: n2, path: Aa.emptyPath(), la: false, ma: r2 }, this.databaseId, this.serializer, this.ignoreUndefinedProperties);
          }
        }
        function nf(t3) {
          const e3 = t3._freezeSettings(), n2 = Al(t3._databaseId);
          return new ef(t3._databaseId, !!e3.ignoreUndefinedProperties, n2);
        }
        function rf(t3, e3, n2, r2 = false) {
          return sf(n2, t3.ya(r2 ? 4 : 3, e3));
        }
        function sf(t3, e3) {
          if (of(t3 = G(t3))) return function(t4, e4, n2) {
            if (!of(n2) || !function(t5) {
              return "object" == typeof t5 && null !== t5 && (Object.getPrototypeOf(t5) === Object.prototype || null === Object.getPrototypeOf(t5));
            }(n2)) {
              const r2 = Md(n2);
              throw "an object" === r2 ? e4._a(t4 + " a custom object") : e4._a(t4 + " " + r2);
            }
          }("Unsupported field value:", e3, t3), function(t4, e4) {
            const n2 = {};
            return Va(t4) ? e4.path && e4.path.length > 0 && e4.fieldMask.push(e4.path) : Fa(t4, (t5, r2) => {
              const i2 = sf(r2, e4.ha(t5));
              null != i2 && (n2[t5] = i2);
            }), { mapValue: { fields: n2 } };
          }(t3, e3);
          if (t3 instanceof Yd) return function(t4, e4) {
            if (!Zd(e4.ca)) throw e4._a(`${t4._methodName}() can only be used with update() and set()`);
            if (!e4.path) throw e4._a(`${t4._methodName}() is not currently supported inside arrays`);
            const n2 = t4._toFieldTransform(e4);
            n2 && e4.fieldTransforms.push(n2);
          }(t3, e3), null;
          if (void 0 === t3 && e3.ignoreUndefinedProperties) return null;
          if (e3.path && e3.fieldMask.push(e3.path), t3 instanceof Array) {
            if (e3.settings.la && 4 !== e3.ca) throw e3._a("Nested arrays are not supported");
            return function(t4, e4) {
              const n2 = [];
              let r2 = 0;
              for (const i2 of t4) {
                let t5 = sf(i2, e4.wa(r2));
                null == t5 && (t5 = { nullValue: "NULL_VALUE" }), n2.push(t5), r2++;
              }
              return { arrayValue: { values: n2 } };
            }(t3, e3);
          }
          return function(t4, e4) {
            if (null === (t4 = G(t4))) return { nullValue: "NULL_VALUE" };
            if ("number" == typeof t4) return Tu(e4.serializer, t4);
            if ("boolean" == typeof t4) return { booleanValue: t4 };
            if ("string" == typeof t4) return { stringValue: t4 };
            if (t4 instanceof Date) {
              const n2 = _a.fromDate(t4);
              return { timestampValue: _h(e4.serializer, n2) };
            }
            if (t4 instanceof _a) {
              const n2 = new _a(t4.seconds, 1e3 * Math.floor(t4.nanoseconds / 1e3));
              return { timestampValue: _h(e4.serializer, n2) };
            }
            if (t4 instanceof Jd) return { geoPointValue: { latitude: t4.latitude, longitude: t4.longitude } };
            if (t4 instanceof Wd) return { bytesValue: Eh(e4.serializer, t4._byteString) };
            if (t4 instanceof jd) {
              const n2 = e4.databaseId, r2 = t4.firestore._databaseId;
              if (!r2.isEqual(n2)) throw e4._a(`Document reference is for database ${r2.projectId}/${r2.database} but should be for database ${n2.projectId}/${n2.database}`);
              return { referenceValue: Ih(t4.firestore._databaseId || e4.databaseId, t4._key.path) };
            }
            throw e4._a(`Unsupported field value: ${Md(t4)}`);
          }(t3, e3);
        }
        function of(t3) {
          return !("object" != typeof t3 || null === t3 || t3 instanceof Array || t3 instanceof Date || t3 instanceof _a || t3 instanceof Jd || t3 instanceof Wd || t3 instanceof jd || t3 instanceof Yd);
        }
        const af = new RegExp("[~\\*/\\[\\]]");
        function cf(t3, e3, n2, r2, i2) {
          const s2 = r2 && !r2.isEmpty(), o2 = void 0 !== i2;
          let a2 = `Function ${e3}() called with invalid data`;
          n2 && (a2 += " (via `toFirestore()`)"), a2 += ". ";
          let c2 = "";
          return (s2 || o2) && (c2 += " (found", s2 && (c2 += ` in field ${r2}`), o2 && (c2 += ` in document ${i2}`), c2 += ")"), new ca(aa.INVALID_ARGUMENT, a2 + t3 + c2);
        }
        class uf {
          constructor(t3, e3, n2, r2, i2) {
            this._firestore = t3, this._userDataWriter = e3, this._key = n2, this._document = r2, this._converter = i2;
          }
          get id() {
            return this._key.path.lastSegment();
          }
          get ref() {
            return new jd(this._firestore, this._converter, this._key);
          }
          exists() {
            return null !== this._document;
          }
          data() {
            if (this._document) {
              if (this._converter) {
                const t3 = new hf(this._firestore, this._userDataWriter, this._key, this._document, null);
                return this._converter.fromFirestore(t3);
              }
              return this._userDataWriter.convertValue(this._document.data.value);
            }
          }
          get(t3) {
            if (this._document) {
              const e3 = this._document.data.field(lf("DocumentSnapshot.get", t3));
              if (null !== e3) return this._userDataWriter.convertValue(e3);
            }
          }
        }
        class hf extends uf {
          data() {
            return super.data();
          }
        }
        function lf(t3, e3) {
          return "string" == typeof e3 ? function(t4, e4, n2) {
            if (e4.search(af) >= 0) throw cf(`Invalid field path (${e4}). Paths must not contain '~', '*', '/', '[', or ']'`, t4, false, void 0, n2);
            try {
              return new Qd(...e4.split("."))._internalPath;
            } catch (r2) {
              throw cf(`Invalid field path (${e4}). Paths must not be empty, begin with '.', end with '.', or contain '..'`, t4, false, void 0, n2);
            }
          }(t3, e3) : e3 instanceof Qd ? e3._internalPath : e3._delegate._internalPath;
        }
        function df(t3) {
          if ("L" === t3.limitType && 0 === t3.explicitOrderBy.length) throw new ca(aa.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
        }
        class ff {
        }
        class pf extends ff {
        }
        function gf(t3, e3, ...n2) {
          let r2 = [];
          e3 instanceof ff && r2.push(e3), r2 = r2.concat(n2), function(t4) {
            const e4 = t4.filter((t5) => t5 instanceof yf).length, n3 = t4.filter((t5) => t5 instanceof mf).length;
            if (e4 > 1 || e4 > 0 && n3 > 0) throw new ca(aa.INVALID_ARGUMENT, "InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.");
          }(r2);
          for (const e4 of r2) t3 = e4._apply(t3);
          return t3;
        }
        class mf extends pf {
          constructor(t3, e3, n2) {
            super(), this._field = t3, this._op = e3, this._value = n2, this.type = "where";
          }
          static _create(t3, e3, n2) {
            return new mf(t3, e3, n2);
          }
          _apply(t3) {
            const e3 = this._parse(t3);
            return Sf(t3._query, e3), new qd(t3.firestore, t3.converter, eu(t3._query, e3));
          }
          _parse(t3) {
            const e3 = nf(t3.firestore), n2 = function(t4, e4, n3, r2, i2, s2, o2) {
              let a2;
              if (i2.isKeyField()) {
                if ("array-contains" === s2 || "array-contains-any" === s2) throw new ca(aa.INVALID_ARGUMENT, `Invalid Query. You can't perform '${s2}' queries on documentId().`);
                if ("in" === s2 || "not-in" === s2) {
                  If(o2, s2);
                  const e5 = [];
                  for (const n4 of o2) e5.push(Tf(r2, t4, n4));
                  a2 = { arrayValue: { values: e5 } };
                } else a2 = Tf(r2, t4, o2);
              } else "in" !== s2 && "not-in" !== s2 && "array-contains-any" !== s2 || If(o2, s2), a2 = rf(n3, "where", o2, "in" === s2 || "not-in" === s2);
              return Cc.create(i2, s2, a2);
            }(t3._query, 0, e3, t3.firestore._databaseId, this._field, this._op, this._value);
            return n2;
          }
        }
        class yf extends ff {
          constructor(t3, e3) {
            super(), this.type = t3, this._queryConstraints = e3;
          }
          static _create(t3, e3) {
            return new yf(t3, e3);
          }
          _parse(t3) {
            const e3 = this._queryConstraints.map((e4) => e4._parse(t3)).filter((t4) => t4.getFilters().length > 0);
            return 1 === e3.length ? e3[0] : kc.create(e3, this._getOperator());
          }
          _apply(t3) {
            const e3 = this._parse(t3);
            return 0 === e3.getFilters().length ? t3 : (function(t4, e4) {
              let n2 = t4;
              const r2 = e4.getFlattenedFilters();
              for (const t5 of r2) Sf(n2, t5), n2 = eu(n2, t5);
            }(t3._query, e3), new qd(t3.firestore, t3.converter, eu(t3._query, e3)));
          }
          _getQueryConstraints() {
            return this._queryConstraints;
          }
          _getOperator() {
            return "and" === this.type ? "and" : "or";
          }
        }
        class vf extends pf {
          constructor(t3, e3) {
            super(), this._field = t3, this._direction = e3, this.type = "orderBy";
          }
          static _create(t3, e3) {
            return new vf(t3, e3);
          }
          _apply(t3) {
            const e3 = function(t4, e4, n2) {
              if (null !== t4.startAt) throw new ca(aa.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
              if (null !== t4.endAt) throw new ca(aa.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
              const r2 = new Ic(e4, n2);
              return function(t5, e5) {
                if (null === Yc(t5)) {
                  const n3 = Jc(t5);
                  null !== n3 && Af(0, n3, e5.field);
                }
              }(t4, r2), r2;
            }(t3._query, this._field, this._direction);
            return new qd(t3.firestore, t3.converter, function(t4, e4) {
              const n2 = t4.explicitOrderBy.concat([e4]);
              return new Gc(t4.path, t4.collectionGroup, n2, t4.filters.slice(), t4.limit, t4.limitType, t4.startAt, t4.endAt);
            }(t3._query, e3));
          }
        }
        function wf(t3, e3 = "asc") {
          const n2 = e3, r2 = lf("orderBy", t3);
          return vf._create(r2, n2);
        }
        class bf extends pf {
          constructor(t3, e3, n2) {
            super(), this.type = t3, this._limit = e3, this._limitType = n2;
          }
          static _create(t3, e3, n2) {
            return new bf(t3, e3, n2);
          }
          _apply(t3) {
            return new qd(t3.firestore, t3.converter, nu(t3._query, this._limit, this._limitType));
          }
        }
        function _f(t3) {
          return function(t4, e3) {
            if (e3 <= 0) throw new ca(aa.INVALID_ARGUMENT, `Function ${t4}() requires a positive number, but it was: ${e3}.`);
          }("limit", t3), bf._create("limit", t3, "F");
        }
        class Ef extends pf {
          constructor(t3, e3, n2) {
            super(), this.type = t3, this._docOrFields = e3, this._inclusive = n2;
          }
          static _create(t3, e3, n2) {
            return new Ef(t3, e3, n2);
          }
          _apply(t3) {
            const e3 = function(t4, e4, n2, r2) {
              if (n2[0] = G(n2[0]), n2[0] instanceof uf) return function(t5, e5, n3, r3, i2) {
                if (!r3) throw new ca(aa.NOT_FOUND, `Can't use a DocumentSnapshot that doesn't exist for ${n3}().`);
                const s2 = [];
                for (const n4 of Zc(t5)) if (n4.field.isKeyField()) s2.push(lc(e5, r3.key));
                else {
                  const t6 = r3.data.field(n4.field);
                  if (Xa(t6)) throw new ca(aa.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + n4.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
                  if (null === t6) {
                    const t7 = n4.field.canonicalString();
                    throw new ca(aa.INVALID_ARGUMENT, `Invalid query. You are trying to start or end a query using a document for which the field '${t7}' (used as the orderBy) does not exist.`);
                  }
                  s2.push(t6);
                }
                return new _c(s2, i2);
              }(t4._query, t4.firestore._databaseId, e4, n2[0]._document, r2);
              {
                const i2 = nf(t4.firestore);
                return function(t5, e5, n3, r3, i3, s2) {
                  const o2 = t5.explicitOrderBy;
                  if (i3.length > o2.length) throw new ca(aa.INVALID_ARGUMENT, `Too many arguments provided to ${r3}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);
                  const a2 = [];
                  for (let s3 = 0; s3 < i3.length; s3++) {
                    const c2 = i3[s3];
                    if (o2[s3].field.isKeyField()) {
                      if ("string" != typeof c2) throw new ca(aa.INVALID_ARGUMENT, `Invalid query. Expected a string for document ID in ${r3}(), but got a ${typeof c2}`);
                      if (!Xc(t5) && -1 !== c2.indexOf("/")) throw new ca(aa.INVALID_ARGUMENT, `Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r3}() must be a plain document ID, but '${c2}' contains a slash.`);
                      const n4 = t5.path.child(Ia.fromString(c2));
                      if (!Ca.isDocumentKey(n4)) throw new ca(aa.INVALID_ARGUMENT, `Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r3}() must result in a valid document path, but '${n4}' is not because it contains an odd number of segments.`);
                      const i4 = new Ca(n4);
                      a2.push(lc(e5, i4));
                    } else {
                      const t6 = rf(n3, r3, c2);
                      a2.push(t6);
                    }
                  }
                  return new _c(a2, s2);
                }(t4._query, t4.firestore._databaseId, i2, e4, n2, r2);
              }
            }(t3, this.type, this._docOrFields, this._inclusive);
            return new qd(t3.firestore, t3.converter, function(t4, e4) {
              return new Gc(t4.path, t4.collectionGroup, t4.explicitOrderBy.slice(), t4.filters.slice(), t4.limit, t4.limitType, e4, t4.endAt);
            }(t3._query, e3));
          }
        }
        function Tf(t3, e3, n2) {
          if ("string" == typeof (n2 = G(n2))) {
            if ("" === n2) throw new ca(aa.INVALID_ARGUMENT, "Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");
            if (!Xc(e3) && -1 !== n2.indexOf("/")) throw new ca(aa.INVALID_ARGUMENT, `Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n2}' contains a '/' character.`);
            const r2 = e3.path.child(Ia.fromString(n2));
            if (!Ca.isDocumentKey(r2)) throw new ca(aa.INVALID_ARGUMENT, `Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r2}' is not because it has an odd number of segments (${r2.length}).`);
            return lc(t3, new Ca(r2));
          }
          if (n2 instanceof jd) return lc(t3, n2._key);
          throw new ca(aa.INVALID_ARGUMENT, `Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Md(n2)}.`);
        }
        function If(t3, e3) {
          if (!Array.isArray(t3) || 0 === t3.length) throw new ca(aa.INVALID_ARGUMENT, `Invalid Query. A non-empty array is required for '${e3.toString()}' filters.`);
        }
        function Sf(t3, e3) {
          if (e3.isInequality()) {
            const n3 = Jc(t3), r2 = e3.field;
            if (null !== n3 && !n3.isEqual(r2)) throw new ca(aa.INVALID_ARGUMENT, `Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n3.toString()}' and '${r2.toString()}'`);
            const i2 = Yc(t3);
            null !== i2 && Af(0, r2, i2);
          }
          const n2 = function(t4, e4) {
            for (const n3 of t4) for (const t5 of n3.getFlattenedFilters()) if (e4.indexOf(t5.op) >= 0) return t5.op;
            return null;
          }(t3.filters, function(t4) {
            switch (t4) {
              case "!=":
                return ["!=", "not-in"];
              case "array-contains-any":
              case "in":
                return ["not-in"];
              case "not-in":
                return ["array-contains-any", "in", "not-in", "!="];
              default:
                return [];
            }
          }(e3.op));
          if (null !== n2) throw n2 === e3.op ? new ca(aa.INVALID_ARGUMENT, `Invalid query. You cannot use more than one '${e3.op.toString()}' filter.`) : new ca(aa.INVALID_ARGUMENT, `Invalid query. You cannot use '${e3.op.toString()}' filters with '${n2.toString()}' filters.`);
        }
        function Af(t3, e3, n2) {
          if (!n2.isEqual(e3)) throw new ca(aa.INVALID_ARGUMENT, `Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e3.toString()}' and so you must also use '${e3.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n2.toString()}' instead.`);
        }
        class Cf {
          constructor(t3, e3) {
            this.hasPendingWrites = t3, this.fromCache = e3;
          }
          isEqual(t3) {
            return this.hasPendingWrites === t3.hasPendingWrites && this.fromCache === t3.fromCache;
          }
        }
        class kf extends uf {
          constructor(t3, e3, n2, r2, i2, s2) {
            super(t3, e3, n2, r2, s2), this._firestore = t3, this._firestoreImpl = t3, this.metadata = i2;
          }
          exists() {
            return super.exists();
          }
          data(t3 = {}) {
            if (this._document) {
              if (this._converter) {
                const e3 = new Nf(this._firestore, this._userDataWriter, this._key, this._document, this.metadata, null);
                return this._converter.fromFirestore(e3, t3);
              }
              return this._userDataWriter.convertValue(this._document.data.value, t3.serverTimestamps);
            }
          }
          get(t3, e3 = {}) {
            if (this._document) {
              const n2 = this._document.data.field(lf("DocumentSnapshot.get", t3));
              if (null !== n2) return this._userDataWriter.convertValue(n2, e3.serverTimestamps);
            }
          }
        }
        class Nf extends kf {
          data(t3 = {}) {
            return super.data(t3);
          }
        }
        class Of {
          constructor(t3, e3, n2, r2) {
            this._firestore = t3, this._userDataWriter = e3, this._snapshot = r2, this.metadata = new Cf(r2.hasPendingWrites, r2.fromCache), this.query = n2;
          }
          get docs() {
            const t3 = [];
            return this.forEach((e3) => t3.push(e3)), t3;
          }
          get size() {
            return this._snapshot.docs.size;
          }
          get empty() {
            return 0 === this.size;
          }
          forEach(t3, e3) {
            this._snapshot.docs.forEach((n2) => {
              t3.call(e3, new Nf(this._firestore, this._userDataWriter, n2.key, n2, new Cf(this._snapshot.mutatedKeys.has(n2.key), this._snapshot.fromCache), this.query.converter));
            });
          }
          docChanges(t3 = {}) {
            const e3 = !!t3.includeMetadataChanges;
            if (e3 && this._snapshot.excludesMetadataChanges) throw new ca(aa.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
            return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === e3 || (this._cachedChanges = function(t4, e4) {
              if (t4._snapshot.oldDocs.isEmpty()) {
                let e5 = 0;
                return t4._snapshot.docChanges.map((n2) => {
                  const r2 = new Nf(t4._firestore, t4._userDataWriter, n2.doc.key, n2.doc, new Cf(t4._snapshot.mutatedKeys.has(n2.doc.key), t4._snapshot.fromCache), t4.query.converter);
                  return n2.doc, { type: "added", doc: r2, oldIndex: -1, newIndex: e5++ };
                });
              }
              {
                let n2 = t4._snapshot.oldDocs;
                return t4._snapshot.docChanges.filter((t5) => e4 || 3 !== t5.type).map((e5) => {
                  const r2 = new Nf(t4._firestore, t4._userDataWriter, e5.doc.key, e5.doc, new Cf(t4._snapshot.mutatedKeys.has(e5.doc.key), t4._snapshot.fromCache), t4.query.converter);
                  let i2 = -1, s2 = -1;
                  return 0 !== e5.type && (i2 = n2.indexOf(e5.doc.key), n2 = n2.delete(e5.doc.key)), 1 !== e5.type && (n2 = n2.add(e5.doc), s2 = n2.indexOf(e5.doc.key)), { type: Df(e5.type), doc: r2, oldIndex: i2, newIndex: s2 };
                });
              }
            }(this, e3), this._cachedChangesIncludeMetadataChanges = e3), this._cachedChanges;
          }
        }
        function Df(t3) {
          switch (t3) {
            case 0:
              return "added";
            case 2:
            case 3:
              return "modified";
            case 1:
              return "removed";
            default:
              return ia();
          }
        }
        class Rf extends class {
          convertValue(t3, e3 = "none") {
            switch (ic(t3)) {
              case 0:
                return null;
              case 1:
                return t3.booleanValue;
              case 2:
                return Ya(t3.integerValue || t3.doubleValue);
              case 3:
                return this.convertTimestamp(t3.timestampValue);
              case 4:
                return this.convertServerTimestamp(t3, e3);
              case 5:
                return t3.stringValue;
              case 6:
                return this.convertBytes(Ja(t3.bytesValue));
              case 7:
                return this.convertReference(t3.referenceValue);
              case 8:
                return this.convertGeoPoint(t3.geoPointValue);
              case 9:
                return this.convertArray(t3.arrayValue, e3);
              case 10:
                return this.convertObject(t3.mapValue, e3);
              default:
                throw ia();
            }
          }
          convertObject(t3, e3) {
            return this.convertObjectMap(t3.fields, e3);
          }
          convertObjectMap(t3, e3 = "none") {
            const n2 = {};
            return Fa(t3, (t4, r2) => {
              n2[t4] = this.convertValue(r2, e3);
            }), n2;
          }
          convertGeoPoint(t3) {
            return new Jd(Ya(t3.latitude), Ya(t3.longitude));
          }
          convertArray(t3, e3) {
            return (t3.values || []).map((t4) => this.convertValue(t4, e3));
          }
          convertServerTimestamp(t3, e3) {
            switch (e3) {
              case "previous":
                const n2 = Za(t3);
                return null == n2 ? null : this.convertValue(n2, e3);
              case "estimate":
                return this.convertTimestamp(tc(t3));
              default:
                return null;
            }
          }
          convertTimestamp(t3) {
            const e3 = Qa(t3);
            return new _a(e3.seconds, e3.nanos);
          }
          convertDocumentKey(t3, e3) {
            const n2 = Ia.fromString(t3);
            sa(jh(n2));
            const r2 = new nc(n2.get(1), n2.get(3)), i2 = new Ca(n2.popFirst(5));
            return r2.isEqual(e3) || ea(`Document ${i2} contains a document reference within a different database (${r2.projectId}/${r2.database}) which is not supported. It will be treated as a reference in the current database (${e3.projectId}/${e3.database}) instead.`), i2;
          }
        } {
          constructor(t3) {
            super(), this.firestore = t3;
          }
          convertBytes(t3) {
            return new Wd(t3);
          }
          convertReference(t3) {
            const e3 = this.convertDocumentKey(t3, this.firestore._databaseId);
            return new jd(this.firestore, null, e3);
          }
        }
        function Lf(t3) {
          t3 = Ud(t3, qd);
          const e3 = Ud(t3.firestore, Kd), n2 = Hd(e3), r2 = new Rf(e3);
          return df(t3._query), function(t4, e4, n3 = {}) {
            const r3 = new ua();
            return t4.asyncQueue.enqueueAndForget(async () => function(t5, e5, n4, r4, i2) {
              const s2 = new kd({ next: (n5) => {
                e5.enqueueAndForget(() => nd(t5, o2)), n5.fromCache && "server" === r4.source ? i2.reject(new ca(aa.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i2.resolve(n5);
              }, error: (t6) => i2.reject(t6) }), o2 = new od(n4, s2, { includeMetadataChanges: true, Ku: true });
              return ed(t5, o2);
            }(await Rd(t4), t4.asyncQueue, e4, n3, r3)), r3.promise;
          }(n2, t3._query).then((n3) => new Of(e3, r2, t3, n3));
        }
        !function(t3, e3 = true) {
          Jo = "9.22.2", Dt(new W("firestore", (t4, { instanceIdentifier: n2, options: r2 }) => {
            const i2 = t4.getProvider("app").getImmediate(), s2 = new Kd(new fa(t4.getProvider("auth-internal")), new ya(t4.getProvider("app-check-internal")), function(t5, e4) {
              if (!Object.prototype.hasOwnProperty.apply(t5.options, ["projectId"])) throw new ca(aa.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
              return new nc(t5.options.projectId, e4);
            }(i2, n2), i2);
            return r2 = Object.assign({ useFetchStreams: e3 }, r2), s2._setSettings(r2), s2;
          }, "PUBLIC").setMultipleInstances(true)), Mt(Qo, "3.12.2", t3), Mt(Qo, "3.12.2", "esm2017");
        }();
        class Pf {
          constructor(t3) {
            this.firstTimestamp = 0, this.isLocal = "local" === t3.firestore.app_id, this.firestoreSettings = t3.firestoreSettings || {};
            const e3 = `landbot-${t3.channelToken}`;
            try {
              this.firestoreApp = function(t4 = "[DEFAULT]") {
                const e4 = kt.get(t4);
                if (!e4 && t4 === At && P()) return xt();
                if (!e4) throw Lt.create("no-app", { appName: t4 });
                return e4;
              }(e3);
            } catch (n2) {
              this.firestoreApp = xt({ apiKey: t3.firestore.api_key, appId: t3.firestore.app_id, projectId: t3.firestore.project_id }, e3);
            }
          }
          auth(t3) {
            const e3 = function(t4, e4) {
              const n2 = Rt(t4, "auth");
              if (n2.isInitialized()) {
                const t5 = n2.getImmediate();
                if (j(n2.getOptions(), null != e4 ? e4 : {})) return t5;
                Yt(t5, "already-initialized");
              }
              return n2.initialize({ options: e4 });
            }(this.firestoreApp, { persistence: ke });
            return this.isLocal && function(t4, e4, n2) {
              const r2 = He(t4);
              Zt(r2._canInitEmulator, r2, "emulator-config-failed"), Zt(/^https?:\/\//.test(e4), r2, "invalid-emulator-scheme");
              const i2 = !!(null == n2 ? void 0 : n2.disableWarnings), s2 = We(e4), { host: o2, port: a2 } = function(t5) {
                const e5 = We(t5), n3 = /(\/\/)?([^?#/]+)/.exec(t5.substr(e5.length));
                if (!n3) return { host: "", port: null };
                const r3 = n3[2].split("@").pop() || "", i3 = /^(\[[^\]]+\])(:|$)/.exec(r3);
                if (i3) {
                  const t6 = i3[1];
                  return { host: t6, port: Qe(r3.substr(t6.length + 1)) };
                }
                {
                  const [t6, e6] = r3.split(":");
                  return { host: t6, port: Qe(e6) };
                }
              }(e4), c2 = null === a2 ? "" : `:${a2}`;
              r2.config.emulator = { url: `${s2}//${o2}${c2}/` }, r2.settings.appVerificationDisabledForTesting = true, r2.emulatorConfig = Object.freeze({ host: o2, port: a2, protocol: s2.replace(":", ""), options: Object.freeze({ disableWarnings: i2 }) }), i2 || function() {
                function t5() {
                  const t6 = document.createElement("p"), e5 = t6.style;
                  t6.innerText = "Running in emulator mode. Do not use with production credentials.", e5.position = "fixed", e5.width = "100%", e5.backgroundColor = "#ffffff", e5.border = ".1em solid #000000", e5.color = "#b50000", e5.bottom = "0px", e5.left = "0px", e5.margin = "0px", e5.zIndex = "10000", e5.textAlign = "center", t6.classList.add("firebase-emulator-warning"), document.body.appendChild(t6);
                }
                "undefined" != typeof console && "function" == typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."), "undefined" != typeof window && "undefined" != typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", t5) : t5());
              }();
            }(e3, "http://localhost:9099"), async function(t4, e4) {
              const n2 = He(t4), r2 = await async function(t5, e5) {
                return le(t5, "POST", "/v1/accounts:signInWithCustomToken", ce(t5, e5));
              }(n2, { token: e4, returnSecureToken: true }), i2 = await ln._fromIdTokenResponse(n2, "signIn", r2);
              return await n2._updateCurrentUser(i2.user), i2;
            }(e3, t3.firestore_token).then(() => t3);
          }
          destroy() {
            try {
              this.newMessageUnsubscribe && (this.newMessageUnsubscribe(), this.newMessageUnsubscribe = null);
            } catch (t3) {
            } finally {
              !async function(t3) {
                const e3 = t3.name;
                kt.has(e3) && (kt.delete(e3), await Promise.all(t3.container.getProviders().map((t4) => t4.delete())), t3.isDeleted = true);
              }(this.firestoreApp);
            }
          }
          setChatReference(t3) {
            const e3 = function(t4, e4, n2) {
              n2 || (n2 = "(default)");
              const r2 = Rt(t4, "firestore");
              if (r2.isInitialized(n2)) {
                const t5 = r2.getImmediate({ identifier: n2 });
                if (j(r2.getOptions(n2), e4)) return t5;
                throw new ca(aa.FAILED_PRECONDITION, "initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.");
              }
              if (void 0 !== e4.cacheSizeBytes && void 0 !== e4.localCache) throw new ca(aa.INVALID_ARGUMENT, "cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");
              if (void 0 !== e4.cacheSizeBytes && -1 !== e4.cacheSizeBytes && e4.cacheSizeBytes < 1048576) throw new ca(aa.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
              return r2.initialize({ options: e4, instanceIdentifier: n2 });
            }(this.firestoreApp, this.firestoreSettings);
            this.isLocal && function(t4, e4, n2, r2 = {}) {
              var i2;
              const s2 = (t4 = Ud(t4, Vd))._getSettings(), o2 = `${e4}:${n2}`;
              if ("firestore.googleapis.com" !== s2.host && s2.host !== o2 && na("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."), t4._setSettings(Object.assign(Object.assign({}, s2), { host: o2, ssl: false })), r2.mockUserToken) {
                let e5, n3;
                if ("string" == typeof r2.mockUserToken) e5 = r2.mockUserToken, n3 = Yo.MOCK_USER;
                else {
                  e5 = function(t5, e6) {
                    if (t5.uid) throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
                    const n4 = e6 || "demo-project", r3 = t5.iat || 0, i3 = t5.sub || t5.user_id;
                    if (!i3) throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
                    const s4 = Object.assign({ iss: `https://securetoken.google.com/${n4}`, aud: n4, iat: r3, exp: r3 + 3600, auth_time: r3, sub: i3, user_id: i3, firebase: { sign_in_provider: "custom", identities: {} } }, t5);
                    return [D(JSON.stringify({ alg: "none", type: "JWT" })), D(JSON.stringify(s4)), ""].join(".");
                  }(r2.mockUserToken, null === (i2 = t4._app) || void 0 === i2 ? void 0 : i2.options.projectId);
                  const s3 = r2.mockUserToken.sub || r2.mockUserToken.user_id;
                  if (!s3) throw new ca(aa.INVALID_ARGUMENT, "mockUserToken must contain 'sub' or 'user_id' field!");
                  n3 = new Yo(s3);
                }
                t4._authCredentials = new da(new ha(e5, n3));
              }
            }(e3, "localhost", 8080), this.chatRef = function(t4, e4, ...n2) {
              if (t4 = G(t4), function(t5, e5, n3) {
                if (!n3) throw new ca(aa.INVALID_ARGUMENT, `Function ${t5}() cannot be called with an empty ${e5}.`);
              }("collection", "path", e4), t4 instanceof Vd) {
                const r2 = Ia.fromString(e4, ...n2);
                return xd(r2), new Bd(t4, null, r2);
              }
              {
                if (!(t4 instanceof jd || t4 instanceof Bd)) throw new ca(aa.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
                const r2 = t4._path.child(Ia.fromString(e4, ...n2));
                return xd(r2), new Bd(t4.firestore, null, r2);
              }
            }(e3, t3);
          }
          _onMessageSnapshot(t3) {
            return (e3) => {
              e3.docChanges().forEach((e4) => {
                if ("added" === e4.type) {
                  const n2 = e4.doc.data(), r2 = 1e3 * n2.timestamp, i2 = Object.assign(Object.assign({}, n2), { id: e4.doc.id, key: e4.doc.id, timestamp: r2 });
                  t3(i2);
                }
              });
            };
          }
          setNewMessageListener(t3, e3) {
            const n2 = e3 ? gf(this.chatRef, function(t4, e4, n3) {
              const r2 = lf("where", "timestamp");
              return mf._create(r2, ">", n3);
            }(0, 0, e3)) : this.chatRef;
            this.newMessageUnsubscribe = function(t4, ...e4) {
              var n3, r2, i2;
              t4 = G(t4);
              let s2 = { includeMetadataChanges: false }, o2 = 0;
              "object" != typeof e4[o2] || zd(e4[o2]) || (s2 = e4[o2], o2++);
              const a2 = { includeMetadataChanges: s2.includeMetadataChanges };
              if (zd(e4[o2])) {
                const t5 = e4[o2];
                e4[o2] = null === (n3 = t5.next) || void 0 === n3 ? void 0 : n3.bind(t5), e4[o2 + 1] = null === (r2 = t5.error) || void 0 === r2 ? void 0 : r2.bind(t5), e4[o2 + 2] = null === (i2 = t5.complete) || void 0 === i2 ? void 0 : i2.bind(t5);
              }
              let c2, u2, h2;
              if (t4 instanceof jd) u2 = Ud(t4.firestore, Kd), h2 = Wc(t4._key.path), c2 = { next: (n4) => {
                e4[o2] && e4[o2](function(t5, e5, n5) {
                  const r3 = n5.docs.get(e5._key), i3 = new Rf(t5);
                  return new kf(t5, i3, e5._key, r3, new Cf(n5.hasPendingWrites, n5.fromCache), e5.converter);
                }(u2, t4, n4));
              }, error: e4[o2 + 1], complete: e4[o2 + 2] };
              else {
                const n4 = Ud(t4, qd);
                u2 = Ud(n4.firestore, Kd), h2 = n4._query;
                const r3 = new Rf(u2);
                c2 = { next: (t5) => {
                  e4[o2] && e4[o2](new Of(u2, r3, n4, t5));
                }, error: e4[o2 + 1], complete: e4[o2 + 2] }, df(t4._query);
              }
              return function(t5, e5, n4, r3) {
                const i3 = new kd(r3), s3 = new od(e5, i3, n4);
                return t5.asyncQueue.enqueueAndForget(async () => ed(await Rd(t5), s3)), () => {
                  i3.Dc(), t5.asyncQueue.enqueueAndForget(async () => nd(await Rd(t5), s3));
                };
              }(Hd(u2), h2, a2, c2);
            }(n2, this._onMessageSnapshot(t3));
          }
          _transformMessages(t3) {
            const e3 = {};
            if (t3.forEach((t4) => {
              const n2 = t4.data(), r2 = 1e3 * n2.timestamp;
              e3[t4.id] = Object.assign(Object.assign({}, n2), { id: t4.id, key: t4.id, timestamp: r2 });
            }), 0 !== Object.keys(e3).length) return e3;
          }
          getLastMessages(t3 = 20) {
            return a(this, void 0, void 0, function* () {
              const e3 = gf(this.chatRef, wf("timestamp", "desc"), _f(t3)), n2 = yield Lf(e3), r2 = this._transformMessages(n2);
              return this._updateFirstTimestamp(r2), r2;
            });
          }
          getMoreMessages(t3 = 20) {
            return a(this, void 0, void 0, function* () {
              const e3 = gf(this.chatRef, wf("timestamp", "desc"), function(...t4) {
                return Ef._create("startAfter", t4, false);
              }(this.firstTimestamp / 1e3), _f(t3)), n2 = yield Lf(e3), r2 = this._transformMessages(n2);
              return this._updateFirstTimestamp(r2), r2;
            });
          }
          _updateFirstTimestamp(t3) {
            if (t3 && Object.keys(t3).length > 0) {
              const e3 = Object.values(t3).sort((t4, e4) => t4.timestamp - e4.timestamp)[0];
              this.firstTimestamp = e3.timestamp - 1e-3;
            }
          }
        }
        var xf = n(187), Mf = n.n(xf), Uf = function(t3, e3) {
          return Uf = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t4, e4) {
            t4.__proto__ = e4;
          } || function(t4, e4) {
            for (var n2 in e4) e4.hasOwnProperty(n2) && (t4[n2] = e4[n2]);
          }, Uf(t3, e3);
        };
        function Ff(t3, e3) {
          function n2() {
            this.constructor = t3;
          }
          Uf(t3, e3), t3.prototype = null === e3 ? Object.create(e3) : (n2.prototype = e3.prototype, new n2());
        }
        function Vf(t3) {
          return "function" == typeof t3;
        }
        var jf = false, qf = { Promise: void 0, set useDeprecatedSynchronousErrorHandling(t3) {
          t3 && new Error().stack, jf = t3;
        }, get useDeprecatedSynchronousErrorHandling() {
          return jf;
        } };
        function Bf(t3) {
          setTimeout(function() {
            throw t3;
          }, 0);
        }
        var $f = { closed: true, next: function(t3) {
        }, error: function(t3) {
          if (qf.useDeprecatedSynchronousErrorHandling) throw t3;
          Bf(t3);
        }, complete: function() {
        } }, zf = function() {
          return Array.isArray || function(t3) {
            return t3 && "number" == typeof t3.length;
          };
        }();
        function Kf(t3) {
          return null !== t3 && "object" == typeof t3;
        }
        var Hf = function() {
          function t3(t4) {
            return Error.call(this), this.message = t4 ? t4.length + " errors occurred during unsubscription:\n" + t4.map(function(t5, e3) {
              return e3 + 1 + ") " + t5.toString();
            }).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t4, this;
          }
          return t3.prototype = Object.create(Error.prototype), t3;
        }(), Gf = function() {
          function t3(t4) {
            this.closed = false, this._parentOrParents = null, this._subscriptions = null, t4 && (this._ctorUnsubscribe = true, this._unsubscribe = t4);
          }
          return t3.prototype.unsubscribe = function() {
            var e3;
            if (!this.closed) {
              var n2 = this, r2 = n2._parentOrParents, i2 = n2._ctorUnsubscribe, s2 = n2._unsubscribe, o2 = n2._subscriptions;
              if (this.closed = true, this._parentOrParents = null, this._subscriptions = null, r2 instanceof t3) r2.remove(this);
              else if (null !== r2) for (var a2 = 0; a2 < r2.length; ++a2) r2[a2].remove(this);
              if (Vf(s2)) {
                i2 && (this._unsubscribe = void 0);
                try {
                  s2.call(this);
                } catch (t4) {
                  e3 = t4 instanceof Hf ? Wf(t4.errors) : [t4];
                }
              }
              if (zf(o2)) {
                a2 = -1;
                for (var c2 = o2.length; ++a2 < c2; ) {
                  var u2 = o2[a2];
                  if (Kf(u2)) try {
                    u2.unsubscribe();
                  } catch (t4) {
                    e3 = e3 || [], t4 instanceof Hf ? e3 = e3.concat(Wf(t4.errors)) : e3.push(t4);
                  }
                }
              }
              if (e3) throw new Hf(e3);
            }
          }, t3.prototype.add = function(e3) {
            var n2 = e3;
            if (!e3) return t3.EMPTY;
            switch (typeof e3) {
              case "function":
                n2 = new t3(e3);
              case "object":
                if (n2 === this || n2.closed || "function" != typeof n2.unsubscribe) return n2;
                if (this.closed) return n2.unsubscribe(), n2;
                if (!(n2 instanceof t3)) {
                  var r2 = n2;
                  (n2 = new t3())._subscriptions = [r2];
                }
                break;
              default:
                throw new Error("unrecognized teardown " + e3 + " added to Subscription.");
            }
            var i2 = n2._parentOrParents;
            if (null === i2) n2._parentOrParents = this;
            else if (i2 instanceof t3) {
              if (i2 === this) return n2;
              n2._parentOrParents = [i2, this];
            } else {
              if (-1 !== i2.indexOf(this)) return n2;
              i2.push(this);
            }
            var s2 = this._subscriptions;
            return null === s2 ? this._subscriptions = [n2] : s2.push(n2), n2;
          }, t3.prototype.remove = function(t4) {
            var e3 = this._subscriptions;
            if (e3) {
              var n2 = e3.indexOf(t4);
              -1 !== n2 && e3.splice(n2, 1);
            }
          }, t3.EMPTY = function(t4) {
            return t4.closed = true, t4;
          }(new t3()), t3;
        }();
        function Wf(t3) {
          return t3.reduce(function(t4, e3) {
            return t4.concat(e3 instanceof Hf ? e3.errors : e3);
          }, []);
        }
        var Qf = function() {
          return "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random();
        }(), Yf = function(t3) {
          function e3(n2, r2, i2) {
            var s2 = t3.call(this) || this;
            switch (s2.syncErrorValue = null, s2.syncErrorThrown = false, s2.syncErrorThrowable = false, s2.isStopped = false, arguments.length) {
              case 0:
                s2.destination = $f;
                break;
              case 1:
                if (!n2) {
                  s2.destination = $f;
                  break;
                }
                if ("object" == typeof n2) {
                  n2 instanceof e3 ? (s2.syncErrorThrowable = n2.syncErrorThrowable, s2.destination = n2, n2.add(s2)) : (s2.syncErrorThrowable = true, s2.destination = new Jf(s2, n2));
                  break;
                }
              default:
                s2.syncErrorThrowable = true, s2.destination = new Jf(s2, n2, r2, i2);
            }
            return s2;
          }
          return Ff(e3, t3), e3.prototype[Qf] = function() {
            return this;
          }, e3.create = function(t4, n2, r2) {
            var i2 = new e3(t4, n2, r2);
            return i2.syncErrorThrowable = false, i2;
          }, e3.prototype.next = function(t4) {
            this.isStopped || this._next(t4);
          }, e3.prototype.error = function(t4) {
            this.isStopped || (this.isStopped = true, this._error(t4));
          }, e3.prototype.complete = function() {
            this.isStopped || (this.isStopped = true, this._complete());
          }, e3.prototype.unsubscribe = function() {
            this.closed || (this.isStopped = true, t3.prototype.unsubscribe.call(this));
          }, e3.prototype._next = function(t4) {
            this.destination.next(t4);
          }, e3.prototype._error = function(t4) {
            this.destination.error(t4), this.unsubscribe();
          }, e3.prototype._complete = function() {
            this.destination.complete(), this.unsubscribe();
          }, e3.prototype._unsubscribeAndRecycle = function() {
            var t4 = this._parentOrParents;
            return this._parentOrParents = null, this.unsubscribe(), this.closed = false, this.isStopped = false, this._parentOrParents = t4, this;
          }, e3;
        }(Gf), Jf = function(t3) {
          function e3(e4, n2, r2, i2) {
            var s2, o2 = t3.call(this) || this;
            o2._parentSubscriber = e4;
            var a2 = o2;
            return Vf(n2) ? s2 = n2 : n2 && (s2 = n2.next, r2 = n2.error, i2 = n2.complete, n2 !== $f && (Vf((a2 = Object.create(n2)).unsubscribe) && o2.add(a2.unsubscribe.bind(a2)), a2.unsubscribe = o2.unsubscribe.bind(o2))), o2._context = a2, o2._next = s2, o2._error = r2, o2._complete = i2, o2;
          }
          return Ff(e3, t3), e3.prototype.next = function(t4) {
            if (!this.isStopped && this._next) {
              var e4 = this._parentSubscriber;
              qf.useDeprecatedSynchronousErrorHandling && e4.syncErrorThrowable ? this.__tryOrSetError(e4, this._next, t4) && this.unsubscribe() : this.__tryOrUnsub(this._next, t4);
            }
          }, e3.prototype.error = function(t4) {
            if (!this.isStopped) {
              var e4 = this._parentSubscriber, n2 = qf.useDeprecatedSynchronousErrorHandling;
              if (this._error) n2 && e4.syncErrorThrowable ? (this.__tryOrSetError(e4, this._error, t4), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t4), this.unsubscribe());
              else if (e4.syncErrorThrowable) n2 ? (e4.syncErrorValue = t4, e4.syncErrorThrown = true) : Bf(t4), this.unsubscribe();
              else {
                if (this.unsubscribe(), n2) throw t4;
                Bf(t4);
              }
            }
          }, e3.prototype.complete = function() {
            var t4 = this;
            if (!this.isStopped) {
              var e4 = this._parentSubscriber;
              if (this._complete) {
                var n2 = function() {
                  return t4._complete.call(t4._context);
                };
                qf.useDeprecatedSynchronousErrorHandling && e4.syncErrorThrowable ? (this.__tryOrSetError(e4, n2), this.unsubscribe()) : (this.__tryOrUnsub(n2), this.unsubscribe());
              } else this.unsubscribe();
            }
          }, e3.prototype.__tryOrUnsub = function(t4, e4) {
            try {
              t4.call(this._context, e4);
            } catch (t5) {
              if (this.unsubscribe(), qf.useDeprecatedSynchronousErrorHandling) throw t5;
              Bf(t5);
            }
          }, e3.prototype.__tryOrSetError = function(t4, e4, n2) {
            if (!qf.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
            try {
              e4.call(this._context, n2);
            } catch (e5) {
              return qf.useDeprecatedSynchronousErrorHandling ? (t4.syncErrorValue = e5, t4.syncErrorThrown = true, true) : (Bf(e5), true);
            }
            return false;
          }, e3.prototype._unsubscribe = function() {
            var t4 = this._parentSubscriber;
            this._context = null, this._parentSubscriber = null, t4.unsubscribe();
          }, e3;
        }(Yf), Xf = function() {
          return "function" == typeof Symbol && Symbol.observable || "@@observable";
        }();
        function Zf(t3) {
          return t3;
        }
        function tp(t3) {
          return 0 === t3.length ? Zf : 1 === t3.length ? t3[0] : function(e3) {
            return t3.reduce(function(t4, e4) {
              return e4(t4);
            }, e3);
          };
        }
        var ep = function() {
          function t3(t4) {
            this._isScalar = false, t4 && (this._subscribe = t4);
          }
          return t3.prototype.lift = function(e3) {
            var n2 = new t3();
            return n2.source = this, n2.operator = e3, n2;
          }, t3.prototype.subscribe = function(t4, e3, n2) {
            var r2 = this.operator, i2 = function(t5, e4, n3) {
              if (t5) {
                if (t5 instanceof Yf) return t5;
                if (t5[Qf]) return t5[Qf]();
              }
              return t5 || e4 || n3 ? new Yf(t5, e4, n3) : new Yf($f);
            }(t4, e3, n2);
            if (r2 ? i2.add(r2.call(i2, this.source)) : i2.add(this.source || qf.useDeprecatedSynchronousErrorHandling && !i2.syncErrorThrowable ? this._subscribe(i2) : this._trySubscribe(i2)), qf.useDeprecatedSynchronousErrorHandling && i2.syncErrorThrowable && (i2.syncErrorThrowable = false, i2.syncErrorThrown)) throw i2.syncErrorValue;
            return i2;
          }, t3.prototype._trySubscribe = function(t4) {
            try {
              return this._subscribe(t4);
            } catch (e3) {
              qf.useDeprecatedSynchronousErrorHandling && (t4.syncErrorThrown = true, t4.syncErrorValue = e3), function(t5) {
                for (; t5; ) {
                  var e4 = t5, n2 = e4.closed, r2 = e4.destination, i2 = e4.isStopped;
                  if (n2 || i2) return false;
                  t5 = r2 && r2 instanceof Yf ? r2 : null;
                }
                return true;
              }(t4) ? t4.error(e3) : console.warn(e3);
            }
          }, t3.prototype.forEach = function(t4, e3) {
            var n2 = this;
            return new (e3 = np(e3))(function(e4, r2) {
              var i2;
              i2 = n2.subscribe(function(e5) {
                try {
                  t4(e5);
                } catch (t5) {
                  r2(t5), i2 && i2.unsubscribe();
                }
              }, r2, e4);
            });
          }, t3.prototype._subscribe = function(t4) {
            var e3 = this.source;
            return e3 && e3.subscribe(t4);
          }, t3.prototype[Xf] = function() {
            return this;
          }, t3.prototype.pipe = function() {
            for (var t4 = [], e3 = 0; e3 < arguments.length; e3++) t4[e3] = arguments[e3];
            return 0 === t4.length ? this : tp(t4)(this);
          }, t3.prototype.toPromise = function(t4) {
            var e3 = this;
            return new (t4 = np(t4))(function(t5, n2) {
              var r2;
              e3.subscribe(function(t6) {
                return r2 = t6;
              }, function(t6) {
                return n2(t6);
              }, function() {
                return t5(r2);
              });
            });
          }, t3.create = function(e3) {
            return new t3(e3);
          }, t3;
        }();
        function np(t3) {
          if (t3 || (t3 = qf.Promise || Promise), !t3) throw new Error("no Promise impl found");
          return t3;
        }
        var rp = function() {
          function t3() {
            return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this;
          }
          return t3.prototype = Object.create(Error.prototype), t3;
        }(), ip = function(t3) {
          function e3(e4, n2) {
            var r2 = t3.call(this) || this;
            return r2.subject = e4, r2.subscriber = n2, r2.closed = false, r2;
          }
          return Ff(e3, t3), e3.prototype.unsubscribe = function() {
            if (!this.closed) {
              this.closed = true;
              var t4 = this.subject, e4 = t4.observers;
              if (this.subject = null, e4 && 0 !== e4.length && !t4.isStopped && !t4.closed) {
                var n2 = e4.indexOf(this.subscriber);
                -1 !== n2 && e4.splice(n2, 1);
              }
            }
          }, e3;
        }(Gf), sp = function(t3) {
          function e3(e4) {
            var n2 = t3.call(this, e4) || this;
            return n2.destination = e4, n2;
          }
          return Ff(e3, t3), e3;
        }(Yf), op = function(t3) {
          function e3() {
            var e4 = t3.call(this) || this;
            return e4.observers = [], e4.closed = false, e4.isStopped = false, e4.hasError = false, e4.thrownError = null, e4;
          }
          return Ff(e3, t3), e3.prototype[Qf] = function() {
            return new sp(this);
          }, e3.prototype.lift = function(t4) {
            var e4 = new ap(this, this);
            return e4.operator = t4, e4;
          }, e3.prototype.next = function(t4) {
            if (this.closed) throw new rp();
            if (!this.isStopped) for (var e4 = this.observers, n2 = e4.length, r2 = e4.slice(), i2 = 0; i2 < n2; i2++) r2[i2].next(t4);
          }, e3.prototype.error = function(t4) {
            if (this.closed) throw new rp();
            this.hasError = true, this.thrownError = t4, this.isStopped = true;
            for (var e4 = this.observers, n2 = e4.length, r2 = e4.slice(), i2 = 0; i2 < n2; i2++) r2[i2].error(t4);
            this.observers.length = 0;
          }, e3.prototype.complete = function() {
            if (this.closed) throw new rp();
            this.isStopped = true;
            for (var t4 = this.observers, e4 = t4.length, n2 = t4.slice(), r2 = 0; r2 < e4; r2++) n2[r2].complete();
            this.observers.length = 0;
          }, e3.prototype.unsubscribe = function() {
            this.isStopped = true, this.closed = true, this.observers = null;
          }, e3.prototype._trySubscribe = function(e4) {
            if (this.closed) throw new rp();
            return t3.prototype._trySubscribe.call(this, e4);
          }, e3.prototype._subscribe = function(t4) {
            if (this.closed) throw new rp();
            return this.hasError ? (t4.error(this.thrownError), Gf.EMPTY) : this.isStopped ? (t4.complete(), Gf.EMPTY) : (this.observers.push(t4), new ip(this, t4));
          }, e3.prototype.asObservable = function() {
            var t4 = new ep();
            return t4.source = this, t4;
          }, e3.create = function(t4, e4) {
            return new ap(t4, e4);
          }, e3;
        }(ep), ap = function(t3) {
          function e3(e4, n2) {
            var r2 = t3.call(this) || this;
            return r2.destination = e4, r2.source = n2, r2;
          }
          return Ff(e3, t3), e3.prototype.next = function(t4) {
            var e4 = this.destination;
            e4 && e4.next && e4.next(t4);
          }, e3.prototype.error = function(t4) {
            var e4 = this.destination;
            e4 && e4.error && this.destination.error(t4);
          }, e3.prototype.complete = function() {
            var t4 = this.destination;
            t4 && t4.complete && this.destination.complete();
          }, e3.prototype._subscribe = function(t4) {
            return this.source ? this.source.subscribe(t4) : Gf.EMPTY;
          }, e3;
        }(op);
        function cp(t3, e3) {
          return function(n2) {
            return n2.lift(new up(t3, e3));
          };
        }
        var up = function() {
          function t3(t4, e3) {
            this.predicate = t4, this.thisArg = e3;
          }
          return t3.prototype.call = function(t4, e3) {
            return e3.subscribe(new hp(t4, this.predicate, this.thisArg));
          }, t3;
        }(), hp = function(t3) {
          function e3(e4, n2, r2) {
            var i2 = t3.call(this, e4) || this;
            return i2.predicate = n2, i2.thisArg = r2, i2.count = 0, i2;
          }
          return Ff(e3, t3), e3.prototype._next = function(t4) {
            var e4;
            try {
              e4 = this.predicate.call(this.thisArg, t4, this.count++);
            } catch (t5) {
              return void this.destination.error(t5);
            }
            e4 && this.destination.next(t4);
          }, e3;
        }(Yf);
        function lp(t3, e3) {
          return function(n2) {
            if ("function" != typeof t3) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
            return n2.lift(new dp(t3, e3));
          };
        }
        var dp = function() {
          function t3(t4, e3) {
            this.project = t4, this.thisArg = e3;
          }
          return t3.prototype.call = function(t4, e3) {
            return e3.subscribe(new fp(t4, this.project, this.thisArg));
          }, t3;
        }(), fp = function(t3) {
          function e3(e4, n2, r2) {
            var i2 = t3.call(this, e4) || this;
            return i2.project = n2, i2.count = 0, i2.thisArg = r2 || i2, i2;
          }
          return Ff(e3, t3), e3.prototype._next = function(t4) {
            var e4;
            try {
              e4 = this.project.call(this.thisArg, t4, this.count++);
            } catch (t5) {
              return void this.destination.error(t5);
            }
            this.destination.next(e4);
          }, e3;
        }(Yf);
        class pp {
          constructor(t3) {
            this.currentSequenceIndex = 0, this.state = [], this.$sequence = t3;
          }
          maybeDispatchSequence() {
            for (let t3 = this.currentSequenceIndex; t3 < this.state.length && this.state[t3]; t3++) this.$sequence.next(this.state[t3]), this.currentSequenceIndex++;
          }
          push(t3) {
            const e3 = t3.seq;
            this.state[e3] = t3, this.maybeDispatchSequence();
          }
          reset() {
            this.currentSequenceIndex = 0, this.state = [];
          }
          repeatedSequence(t3) {
            return void 0 !== t3.seq && null !== t3.seq && this.state.map((t4) => t4.seq).includes(t3.seq);
          }
          repeatedSequenceZero(t3) {
            return Boolean(this.state[0]) && 0 === t3.seq;
          }
        }
        var gp = function(t3) {
          function e3(e4) {
            var n2 = t3.call(this) || this;
            return n2._value = e4, n2;
          }
          return Ff(e3, t3), Object.defineProperty(e3.prototype, "value", { get: function() {
            return this.getValue();
          }, enumerable: true, configurable: true }), e3.prototype._subscribe = function(e4) {
            var n2 = t3.prototype._subscribe.call(this, e4);
            return n2 && !n2.closed && e4.next(this._value), n2;
          }, e3.prototype.getValue = function() {
            if (this.hasError) throw this.thrownError;
            if (this.closed) throw new rp();
            return this._value;
          }, e3.prototype.next = function(e4) {
            t3.prototype.next.call(this, this._value = e4);
          }, e3;
        }(op);
        function mp(t3) {
          return t3 && "function" == typeof t3.schedule;
        }
        var yp = function(t3) {
          return function(e3) {
            for (var n2 = 0, r2 = t3.length; n2 < r2 && !e3.closed; n2++) e3.next(t3[n2]);
            e3.complete();
          };
        };
        function vp(t3, e3) {
          return new ep(function(n2) {
            var r2 = new Gf(), i2 = 0;
            return r2.add(e3.schedule(function() {
              i2 !== t3.length ? (n2.next(t3[i2++]), n2.closed || r2.add(this.schedule())) : n2.complete();
            })), r2;
          });
        }
        function wp(t3, e3) {
          return e3 ? vp(t3, e3) : new ep(yp(t3));
        }
        function bp() {
          for (var t3 = [], e3 = 0; e3 < arguments.length; e3++) t3[e3] = arguments[e3];
          var n2 = t3[t3.length - 1];
          return mp(n2) ? (t3.pop(), vp(t3, n2)) : wp(t3);
        }
        function _p() {
          return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
        }
        var Ep = _p(), Tp = function(t3) {
          return t3 && "number" == typeof t3.length && "function" != typeof t3;
        };
        function Ip(t3) {
          return !!t3 && "function" != typeof t3.subscribe && "function" == typeof t3.then;
        }
        var Sp = function(t3) {
          if (t3 && "function" == typeof t3[Xf]) return r2 = t3, function(t4) {
            var e4 = r2[Xf]();
            if ("function" != typeof e4.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
            return e4.subscribe(t4);
          };
          if (Tp(t3)) return yp(t3);
          if (Ip(t3)) return n2 = t3, function(t4) {
            return n2.then(function(e4) {
              t4.closed || (t4.next(e4), t4.complete());
            }, function(e4) {
              return t4.error(e4);
            }).then(null, Bf), t4;
          };
          if (t3 && "function" == typeof t3[Ep]) return e3 = t3, function(t4) {
            for (var n3 = e3[Ep](); ; ) {
              var r3 = void 0;
              try {
                r3 = n3.next();
              } catch (e4) {
                return t4.error(e4), t4;
              }
              if (r3.done) {
                t4.complete();
                break;
              }
              if (t4.next(r3.value), t4.closed) break;
            }
            return "function" == typeof n3.return && t4.add(function() {
              n3.return && n3.return();
            }), t4;
          };
          var e3, n2, r2, i2 = Kf(t3) ? "an invalid object" : "'" + t3 + "'";
          throw new TypeError("You provided " + i2 + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.");
        };
        var Ap = function(t3) {
          function e3(e4) {
            var n2 = t3.call(this) || this;
            return n2.parent = e4, n2;
          }
          return Ff(e3, t3), e3.prototype._next = function(t4) {
            this.parent.notifyNext(t4);
          }, e3.prototype._error = function(t4) {
            this.parent.notifyError(t4), this.unsubscribe();
          }, e3.prototype._complete = function() {
            this.parent.notifyComplete(), this.unsubscribe();
          }, e3;
        }(Yf), Cp = function(t3) {
          function e3() {
            return null !== t3 && t3.apply(this, arguments) || this;
          }
          return Ff(e3, t3), e3.prototype.notifyNext = function(t4) {
            this.destination.next(t4);
          }, e3.prototype.notifyError = function(t4) {
            this.destination.error(t4);
          }, e3.prototype.notifyComplete = function() {
            this.destination.complete();
          }, e3;
        }(Yf);
        function kp(t3, e3, n2) {
          return void 0 === n2 && (n2 = Number.POSITIVE_INFINITY), "function" == typeof e3 ? function(r2) {
            return r2.pipe(kp(function(n3, r3) {
              return (i2 = t3(n3, r3), i2 instanceof ep ? i2 : new ep(Sp(i2))).pipe(lp(function(t4, i3) {
                return e3(n3, t4, r3, i3);
              }));
              var i2;
            }, n2));
          } : ("number" == typeof e3 && (n2 = e3), function(e4) {
            return e4.lift(new Np(t3, n2));
          });
        }
        var Np = function() {
          function t3(t4, e3) {
            void 0 === e3 && (e3 = Number.POSITIVE_INFINITY), this.project = t4, this.concurrent = e3;
          }
          return t3.prototype.call = function(t4, e3) {
            return e3.subscribe(new Op(t4, this.project, this.concurrent));
          }, t3;
        }(), Op = function(t3) {
          function e3(e4, n2, r2) {
            void 0 === r2 && (r2 = Number.POSITIVE_INFINITY);
            var i2 = t3.call(this, e4) || this;
            return i2.project = n2, i2.concurrent = r2, i2.hasCompleted = false, i2.buffer = [], i2.active = 0, i2.index = 0, i2;
          }
          return Ff(e3, t3), e3.prototype._next = function(t4) {
            this.active < this.concurrent ? this._tryNext(t4) : this.buffer.push(t4);
          }, e3.prototype._tryNext = function(t4) {
            var e4, n2 = this.index++;
            try {
              e4 = this.project(t4, n2);
            } catch (t5) {
              return void this.destination.error(t5);
            }
            this.active++, this._innerSub(e4);
          }, e3.prototype._innerSub = function(t4) {
            var e4 = new Ap(this), n2 = this.destination;
            n2.add(e4);
            var r2 = function(t5, e5) {
              if (!e5.closed) {
                if (t5 instanceof ep) return t5.subscribe(e5);
                var n3;
                try {
                  n3 = Sp(t5)(e5);
                } catch (t6) {
                  e5.error(t6);
                }
                return n3;
              }
            }(t4, e4);
            r2 !== e4 && n2.add(r2);
          }, e3.prototype._complete = function() {
            this.hasCompleted = true, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe();
          }, e3.prototype.notifyNext = function(t4) {
            this.destination.next(t4);
          }, e3.prototype.notifyComplete = function() {
            var t4 = this.buffer;
            this.active--, t4.length > 0 ? this._next(t4.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete();
          }, e3;
        }(Cp);
        function Dp() {
          return void 0 === (t3 = 1) && (t3 = Number.POSITIVE_INFINITY), kp(Zf, t3);
          var t3;
        }
        function Rp() {
          for (var t3 = [], e3 = 0; e3 < arguments.length; e3++) t3[e3] = arguments[e3];
          return Dp()(bp.apply(void 0, t3));
        }
        var Lp, Pp = function() {
          function t3() {
          }
          return t3.prototype.call = function(t4, e3) {
            return e3.subscribe(new xp(t4));
          }, t3;
        }(), xp = function(t3) {
          function e3(e4) {
            var n2 = t3.call(this, e4) || this;
            return n2.hasPrev = false, n2;
          }
          return Ff(e3, t3), e3.prototype._next = function(t4) {
            var e4;
            this.hasPrev ? e4 = [this.prev, t4] : this.hasPrev = true, this.prev = t4, e4 && this.destination.next(e4);
          }, e3;
        }(Yf), Mp = function(t3) {
          function e3(e4, n2) {
            return t3.call(this) || this;
          }
          return Ff(e3, t3), e3.prototype.schedule = function(t4, e4) {
            return void 0 === e4 && (e4 = 0), this;
          }, e3;
        }(Gf), Up = function(t3) {
          function e3(e4, n2) {
            var r2 = t3.call(this, e4, n2) || this;
            return r2.scheduler = e4, r2.work = n2, r2.pending = false, r2;
          }
          return Ff(e3, t3), e3.prototype.schedule = function(t4, e4) {
            if (void 0 === e4 && (e4 = 0), this.closed) return this;
            this.state = t4;
            var n2 = this.id, r2 = this.scheduler;
            return null != n2 && (this.id = this.recycleAsyncId(r2, n2, e4)), this.pending = true, this.delay = e4, this.id = this.id || this.requestAsyncId(r2, this.id, e4), this;
          }, e3.prototype.requestAsyncId = function(t4, e4, n2) {
            return void 0 === n2 && (n2 = 0), setInterval(t4.flush.bind(t4, this), n2);
          }, e3.prototype.recycleAsyncId = function(t4, e4, n2) {
            if (void 0 === n2 && (n2 = 0), null !== n2 && this.delay === n2 && false === this.pending) return e4;
            clearInterval(e4);
          }, e3.prototype.execute = function(t4, e4) {
            if (this.closed) return new Error("executing a cancelled action");
            this.pending = false;
            var n2 = this._execute(t4, e4);
            if (n2) return n2;
            false === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
          }, e3.prototype._execute = function(t4, e4) {
            var n2 = false, r2 = void 0;
            try {
              this.work(t4);
            } catch (t5) {
              n2 = true, r2 = !!t5 && t5 || new Error(t5);
            }
            if (n2) return this.unsubscribe(), r2;
          }, e3.prototype._unsubscribe = function() {
            var t4 = this.id, e4 = this.scheduler, n2 = e4.actions, r2 = n2.indexOf(this);
            this.work = null, this.state = null, this.pending = false, this.scheduler = null, -1 !== r2 && n2.splice(r2, 1), null != t4 && (this.id = this.recycleAsyncId(e4, t4, null)), this.delay = null;
          }, e3;
        }(Mp), Fp = function() {
          function t3(e3, n2) {
            void 0 === n2 && (n2 = t3.now), this.SchedulerAction = e3, this.now = n2;
          }
          return t3.prototype.schedule = function(t4, e3, n2) {
            return void 0 === e3 && (e3 = 0), new this.SchedulerAction(this, t4).schedule(n2, e3);
          }, t3.now = function() {
            return Date.now();
          }, t3;
        }(), Vp = function(t3) {
          function e3(n2, r2) {
            void 0 === r2 && (r2 = Fp.now);
            var i2 = t3.call(this, n2, function() {
              return e3.delegate && e3.delegate !== i2 ? e3.delegate.now() : r2();
            }) || this;
            return i2.actions = [], i2.active = false, i2.scheduled = void 0, i2;
          }
          return Ff(e3, t3), e3.prototype.schedule = function(n2, r2, i2) {
            return void 0 === r2 && (r2 = 0), e3.delegate && e3.delegate !== this ? e3.delegate.schedule(n2, r2, i2) : t3.prototype.schedule.call(this, n2, r2, i2);
          }, e3.prototype.flush = function(t4) {
            var e4 = this.actions;
            if (this.active) e4.push(t4);
            else {
              var n2;
              this.active = true;
              do {
                if (n2 = t4.execute(t4.state, t4.delay)) break;
              } while (t4 = e4.shift());
              if (this.active = false, n2) {
                for (; t4 = e4.shift(); ) t4.unsubscribe();
                throw n2;
              }
            }
          }, e3;
        }(Fp), jp = new Vp(Up), qp = new ep(function(t3) {
          return t3.complete();
        });
        Lp || (Lp = {});
        var Bp = function() {
          function t3(t4, e3, n2) {
            this.kind = t4, this.value = e3, this.error = n2, this.hasValue = "N" === t4;
          }
          return t3.prototype.observe = function(t4) {
            switch (this.kind) {
              case "N":
                return t4.next && t4.next(this.value);
              case "E":
                return t4.error && t4.error(this.error);
              case "C":
                return t4.complete && t4.complete();
            }
          }, t3.prototype.do = function(t4, e3, n2) {
            switch (this.kind) {
              case "N":
                return t4 && t4(this.value);
              case "E":
                return e3 && e3(this.error);
              case "C":
                return n2 && n2();
            }
          }, t3.prototype.accept = function(t4, e3, n2) {
            return t4 && "function" == typeof t4.next ? this.observe(t4) : this.do(t4, e3, n2);
          }, t3.prototype.toObservable = function() {
            var t4;
            switch (this.kind) {
              case "N":
                return bp(this.value);
              case "E":
                return t4 = this.error, new ep(function(e3) {
                  return e3.error(t4);
                });
              case "C":
                return function(t5) {
                  return t5 ? function(t6) {
                    return new ep(function(e3) {
                      return t6.schedule(function() {
                        return e3.complete();
                      });
                    });
                  }(t5) : qp;
                }();
            }
            throw new Error("unexpected notification kind value");
          }, t3.createNext = function(e3) {
            return void 0 !== e3 ? new t3("N", e3) : t3.undefinedValueNotification;
          }, t3.createError = function(e3) {
            return new t3("E", void 0, e3);
          }, t3.createComplete = function() {
            return t3.completeNotification;
          }, t3.completeNotification = new t3("C"), t3.undefinedValueNotification = new t3("N", void 0), t3;
        }();
        var $p = function() {
          function t3(t4, e3) {
            this.delay = t4, this.scheduler = e3;
          }
          return t3.prototype.call = function(t4, e3) {
            return e3.subscribe(new zp(t4, this.delay, this.scheduler));
          }, t3;
        }(), zp = function(t3) {
          function e3(e4, n2, r2) {
            var i2 = t3.call(this, e4) || this;
            return i2.delay = n2, i2.scheduler = r2, i2.queue = [], i2.active = false, i2.errored = false, i2;
          }
          return Ff(e3, t3), e3.dispatch = function(t4) {
            for (var e4 = t4.source, n2 = e4.queue, r2 = t4.scheduler, i2 = t4.destination; n2.length > 0 && n2[0].time - r2.now() <= 0; ) n2.shift().notification.observe(i2);
            if (n2.length > 0) {
              var s2 = Math.max(0, n2[0].time - r2.now());
              this.schedule(t4, s2);
            } else this.unsubscribe(), e4.active = false;
          }, e3.prototype._schedule = function(t4) {
            this.active = true, this.destination.add(t4.schedule(e3.dispatch, this.delay, { source: this, destination: this.destination, scheduler: t4 }));
          }, e3.prototype.scheduleNotification = function(t4) {
            if (true !== this.errored) {
              var e4 = this.scheduler, n2 = new Kp(e4.now() + this.delay, t4);
              this.queue.push(n2), false === this.active && this._schedule(e4);
            }
          }, e3.prototype._next = function(t4) {
            this.scheduleNotification(Bp.createNext(t4));
          }, e3.prototype._error = function(t4) {
            this.errored = true, this.queue = [], this.destination.error(t4), this.unsubscribe();
          }, e3.prototype._complete = function() {
            this.scheduleNotification(Bp.createComplete()), this.unsubscribe();
          }, e3;
        }(Yf), Kp = /* @__PURE__ */ function() {
          return function(t3, e3) {
            this.time = t3, this.notification = e3;
          };
        }();
        const Hp = (t3, e3) => {
          const n2 = e3.$sequence, r2 = new gp(null);
          var i2;
          return n2.pipe(cp((t4) => m(t4) || y(t4)), function() {
            for (var t4 = [], e4 = 0; e4 < arguments.length; e4++) t4[e4] = arguments[e4];
            var n3 = t4[t4.length - 1];
            return mp(n3) ? (t4.pop(), function(e5) {
              return Rp(t4, e5, n3);
            }) : function(e5) {
              return Rp(t4, e5);
            };
          }(null), function(t4) {
            return t4.lift(new Pp());
          }, (i2 = ([e4, n3]) => {
            const i3 = b(e4, n3, t3.config.typing_options);
            return r2.next({ key: n3.key, state: true, delay: i3, message: n3 }), bp(n3).pipe(function(t4, e5) {
              void 0 === e5 && (e5 = jp);
              var n4, r3 = (n4 = t4) instanceof Date && !isNaN(+n4) ? +t4 - e5.now() : Math.abs(t4);
              return function(t5) {
                return t5.lift(new $p(r3, e5));
              };
            }(i3));
          }, kp(i2, void 0, 1))).subscribe((t4) => r2.next({ key: t4.key, state: false, message: t4 })), n2.pipe(cp((t4) => !m(t4) && !y(t4))).subscribe((t4) => r2.next({ key: t4.key, state: false, message: t4 })), r2;
        };
        var Gp = n(468), Wp = n.n(Gp), Qp = n(633), Yp = n.n(Qp);
        const Jp = "@landbot/core/storage";
        class Xp {
          constructor(t3) {
            this.entry = Jp, this.storage = localStorage, this.entry = `${Jp}/${t3.channelToken || ""}`;
          }
          get(t3) {
            const e3 = this._getStore();
            return p()(e3, t3);
          }
          set(t3, e3) {
            const n2 = this._getStore();
            Wp()(n2, t3, e3), this.storage.setItem(this.entry, JSON.stringify(n2));
          }
          remove(t3) {
            const e3 = this._getStore();
            Yp()(e3, t3), this.storage.setItem(this.entry, JSON.stringify(e3));
          }
          _getStore() {
            return JSON.parse(this.storage.getItem(this.entry)) || {};
          }
        }
        class Zp {
          constructor() {
            this.storage = {};
          }
          get(t3) {
            return p()(this.storage, t3);
          }
          set(t3, e3) {
            Wp()(this.storage, t3, e3);
          }
          remove(t3) {
            Yp()(this.storage, t3);
          }
          getStore() {
            return this.storage;
          }
        }
        class tg {
          constructor(t3) {
            this.config = new Proxy(new A(t3), { get: (t4, e3) => {
              if ("function" == typeof t4[e3]) {
                const n2 = t4[e3];
                return function(...e4) {
                  return n2.apply(t4, e4);
                };
              }
              return t4.data[e3];
            }, set: (t4, e3, n2) => (t4.data[e3] = n2, true) }), this.events = (() => {
              const t4 = new (Mf())();
              return t4.setMaxListeners(0), t4;
            })(), this.pipelines = ((t4) => {
              const e3 = {};
              return e3.$sequence = ((t5) => {
                const e4 = new op(), n2 = new op(), r2 = new pp(n2);
                return e4.subscribe((t6) => {
                  t6.hasOwnProperty("seq") && null !== t6.seq ? r2.push(t6) : "assign" === t6.action ? setTimeout(() => n2.next(t6), 1e3) : n2.next(t6);
                }), t5.events.on(C, (t6) => {
                  r2.repeatedSequence(t6) && r2.reset(), e4.next(t6);
                }), n2.reset = r2.reset.bind(r2), n2;
              })(t4), e3.$typingSequence = Hp(t4, e3), e3.$readableSequence = ((t5) => {
                const e4 = t5.$typingSequence, n2 = new op();
                return e4.pipe(cp((t6) => !!t6 && false === t6.state), lp((t6) => t6.message)).subscribe((t6) => n2.next(t6)), n2;
              })(e3), e3;
            })(this), this.storage = this.createStorage(), this.client = new S();
          }
          init() {
            return a(this, void 0, void 0, function* () {
              return this.database = new Pf(this.config), this.landbotToken = this._getLandbotToken(), this._init().then((t3) => (this.events.emit("init"), t3));
            });
          }
          destroy() {
            this._destroy();
          }
          sendMessage(t3) {
            return this._sendMessage(this._getMessageData(t3));
          }
          setConfig(t3) {
            this.config.update(t3), this._resetConfigSensibleModules();
          }
          getInitialMessages() {
            return (this.config.welcome || []).forEach((t3, e3) => {
              this.events.emit(C, Object.assign(Object.assign({}, t3), { key: _(), timestamp: e3 }));
            }), {};
          }
          getLastMessages(t3) {
            return this.database.getLastMessages(t3);
          }
          getMoreMessages(t3) {
            return this.database.getMoreMessages(t3);
          }
          _destroy() {
            this.database && this.database.destroy(), this.events.removeAllListeners();
          }
          _getLandbotToken() {
            return this.config.landbotToken || this.storage.get("landbotToken") || null;
          }
          _getInitializationData({ messages: t3 } = {}) {
            return Promise.resolve({ landbotToken: this.landbotToken, isNewSession: "1" !== this.storage.get("sessionStarted"), messages: t3 || this.getInitialMessages() });
          }
          _getMessageData(t3) {
            return Object.assign(Object.assign({ type: t3.type || "text", message: t3.message || "", payload: t3.payload || "", custom_data: t3.custom_data }, t3), { channel_token: this.config.channelToken, metadata_info: { string: navigator.userAgent }, origin: window.location.href });
          }
          _init() {
            return this.landbotToken ? this._setupClient().then(() => this.getLastMessages()).then((t3) => this._getInitializationData({ messages: t3 })).catch(() => (this.landbotToken = null, this._onNewSession())) : this._onNewSession();
          }
          _onNewMessage(t3) {
            this.events.emit(C, t3);
          }
          _onNewSession() {
            return this.config.welcomeUrl ? this.client.createAuth({ welcomeUrl: this.config.welcomeUrl, channelToken: this.config.channelToken }).then((t3) => (this._storeLandbotToken(t3.landbot_token), this.database.auth(t3))).then((t3) => this._setupDatabaseListeners(t3, false)).catch((t3) => {
              console.error({ message: t3.message, stack: t3.stack });
            }).then(this._getInitializationData.bind(this)) : this._getInitializationData();
          }
          _sendMessage(t3) {
            return this.pipelines.$sequence.reset(), this.client.sendMessage({ data: t3, landbotToken: this.landbotToken, serverUrl: this.config.serverUrl }).then(this._updateLandbotToken.bind(this)).then(() => {
              this.storage.set("sessionStarted", "1");
            });
          }
          _setupClient(t3 = false) {
            return this.setupPromise = this._getAuthWithWelcomeFallback().then((t4) => this.database.auth(t4)).then((e3) => this._setupDatabaseListeners(e3, t3)), this.setupPromise;
          }
          _getAuthWithWelcomeFallback() {
            return this.config.welcomeUrl ? this._getAuthToken({ serverUrl: this.config.welcomeUrl }).catch((t3) => (this.config.update({ welcomeUrl: null }), console.error(t3), this._getAuthToken({ serverUrl: this.config.serverUrl }))) : this._getAuthToken({ serverUrl: this.config.serverUrl });
          }
          _getAuthToken({ serverUrl: t3 }) {
            return this.client.retrieveAuth({ serverUrl: t3, channelToken: this.config.channelToken, landbotToken: this.landbotToken });
          }
          _setupDatabaseListeners(t3, e3) {
            this.database.setChatReference(t3.firestore_path);
            const n2 = e3 ? null : t3.server_timestamp;
            this.database.setNewMessageListener(this._onNewMessage.bind(this), n2);
          }
          _storeLandbotToken(t3) {
            this.landbotToken = t3, this.storage.set("landbotToken", t3);
          }
          _updateLandbotToken({ landbot_token: t3 }) {
            if (t3 && t3 !== this.landbotToken) return this._storeLandbotToken(t3), this._setupClient(true);
          }
          _resetConfigSensibleModules() {
            this.storage = this.createStorage();
          }
          createStorage() {
            return I() && !this.config.storage_off ? new Xp({ channelToken: this.config.channelToken }) : new Zp();
          }
        }
        tg.utils = s;
        class eg {
          constructor(t3) {
            this.config = t3, this.database = new ng(this.config);
          }
          init() {
            return a(this, void 0, void 0, function* () {
              return yield this.database.auth(this.config);
            });
          }
          destroy() {
            return a(this, void 0, void 0, function* () {
              this.database.destroy();
            });
          }
          setChat(t3, e3) {
            return a(this, void 0, void 0, function* () {
              yield this.database.unsetNewMessageListener(), yield this.database.setChatReference(`brands/${this.config.brand_uuid}/users/${t3}/chats/${e3}/messages`);
            });
          }
          onMessage(t3) {
            return a(this, void 0, void 0, function* () {
              yield this.database.setNewMessageListener(t3);
            });
          }
          getLastMessages() {
            return a(this, void 0, void 0, function* () {
              return yield this.database.getLastMessages();
            });
          }
          getMoreMessages() {
            return a(this, void 0, void 0, function* () {
              return yield this.database.getMoreMessages();
            });
          }
        }
        class ng {
          constructor(t3) {
            this.firstTimestamp = 0, this.firebaseApp = t3.firebase.initializeApp({ apiKey: t3.api_key, appId: t3.app_id, projectId: t3.project_id }), void 0 !== t3.experimentalAutoDetectLongPolling && this.firebaseApp.firestore().settings({ experimentalAutoDetectLongPolling: t3.experimentalAutoDetectLongPolling }), void 0 !== t3.useFetchStreams && this.firebaseApp.firestore().settings({ useFetchStreams: t3.useFetchStreams });
          }
          auth(t3) {
            return this.firebaseApp.auth().signInWithCustomToken(t3.brand_token.toString());
          }
          destroy() {
            return this.firebaseApp.delete();
          }
          setChatReference(t3) {
            this.chatRef = this.firebaseApp.firestore().collection(t3);
          }
          setNewMessageListener(t3) {
            return a(this, void 0, void 0, function* () {
              this.newMessageListener = this.chatRef.onSnapshot((e3) => {
                e3.docChanges().forEach((e4) => {
                  if ("added" === e4.type) {
                    const n2 = e4.doc.data(), r2 = Object.assign(Object.assign({}, n2), { id: e4.doc.id, key: e4.doc.id, timestamp: n2.timestamp *= 1e3 });
                    t3(r2);
                  }
                });
              });
            });
          }
          unsetNewMessageListener() {
            return this.chatRef && this.newMessageListener(), Promise.resolve();
          }
          getLastMessages(t3 = 20) {
            return a(this, void 0, void 0, function* () {
              return this.chatRef.orderBy("timestamp", "desc").limit(t3).get().then((t4) => {
                const e3 = {};
                return t4.forEach((t5) => {
                  const n2 = t5.data();
                  e3[t5.id] = Object.assign(Object.assign({}, n2), { id: t5.id, key: t5.id, timestamp: n2.timestamp *= 1e3 });
                }), this._updateFirstTimestamp(e3), e3;
              });
            });
          }
          getMoreMessages(t3 = 20) {
            return this.chatRef.orderBy("timestamp", "desc").startAfter(this.firstTimestamp / 1e3).limit(t3).get().then((t4) => {
              const e3 = {};
              return t4.forEach((t5) => {
                const n2 = t5.data();
                e3[t5.id] = Object.assign(Object.assign({}, n2), { id: t5.id, key: t5.id, timestamp: n2.timestamp *= 1e3 });
              }), this._updateFirstTimestamp(e3), e3;
            });
          }
          _updateFirstTimestamp(t3) {
            if (t3) {
              const e3 = Object.values(t3).sort((t4, e4) => t4.timestamp - e4.timestamp)[0];
              e3 && (this.firstTimestamp = e3.timestamp);
            }
          }
        }
        const rg = window.Landbot || {};
        window.Landbot = Object.assign(Object.assign({}, rg), { Core: tg });
        const ig = tg;
      })(), r;
    })());
  }
});
export default require_dist();
/*! Bundled license information:

@landbot/core/dist/index.js:
  (*! For license information please see index.js.LICENSE.txt *)
*/
//# sourceMappingURL=@landbot_core.js.map
