function pe(a) {
    a = a.toLowerCase();
    for (var b = !0, c = "", d = 0; d < a.length; d++) {
        var e = a.charAt(d);
        /\.|\!|\?|\n|\r/.test(e) ? b = !0 : "" != e.trim() && 1 == b && (e = e.toUpperCase(), b = !1), c += e
    }
    return "/" == window.location.pathname && (c = c.replace(/\bi\b/g, "I")), c = _(c)
}

function he(a) {
    a = a.toLowerCase();
    for (var b = "", c = 0; c < a.length; c++) {
        var d = a.charAt(c);
        b += c % 2 ? d.toUpperCase() : d
    }
    return b
}

function ve(a) {
    return c = a.toLowerCase(), c = (c + "").replace(/^(\S)|\s+(\S)/g, function(a) {
        return a.toUpperCase()
    }), c = _(c), c = c.replace(/\(([A-Za-z])/g, function(a) {
        return a.toUpperCase()
    }), c
}

function _(c) {
    return c = c.replace(/\"([A-Za-z])/g, function(a) {
        return a.toUpperCase()
    })
}

function he(a) {
    a = a.toLowerCase();
    for (var b = "", c = 0; c < a.length; c++) {
        var d = a.charAt(c);
        b += c % 2 ? d.toUpperCase() : d
    }
    return b
}

function me(a) {
    for (var s = "", i = 0; i < a.length; i++) {
        var n = a.charAt(i);
        s += n == n.toUpperCase() ? n.toLowerCase() : n.toUpperCase()
    }
    return s
}

function ye(a) {
    return a = (a = (a = ve(a)).replace(/\b(A|An|And|As|At|But|By|En|For|If|In|Is|Of|On|Or|The|To|Vs?\\.?|Via)\b/g, function(_) {
        return _.toLowerCase()
    })).replace(/(?:([\.\?!] |\n|^))(a|an|and|as|at|but|by|en|for|if|in|is|of|on|or|the|to|vs?\\.?|via)/g, function(_) {
        return ve(_)
    })
}

function ge(_, $, ee) {
    for (var te = "", c = 0; c < _.length; c++) {
        var ne = _.charAt(c),
            oe = ne;
        if (ee) oe = ne.toLowerCase();
        $[oe] ? te += $[oe] : te += ne
    }
    return te = te.replace(/\n/g, "<br>")
}

function be(_) {
    -1 < window.location.search.indexOf("hyphenate=true") && (_.value = _.value.replace(/ /g, "-"), _.placeholder = _.placeholder.replace(/ /g, "-")), -1 < window.location.search.indexOf("stripdashes=true") && (_.value = _.value.replace(/-/g, " "), _.placeholder = _.placeholder.replace(/-/g, " ")), -1 < window.location.search.indexOf("stripspaces=true") && (_.value = _.value.replace(/ /g, ""), _.placeholder = _.placeholder.replace(/ /g, ""))
}

function Ee(_, $) {
    "undefined" != typeof gtag && gtag("event", $, {
        event_category: _,
        value: parseInt(document.getElementById("word_count").innerHTML)
    })
}

function we(_) {
    document.getElementById("char_count").innerHTML = _.value.length;
    var $ = 0,
        ee = _.value.trim().replace(/\s+/gi, " ");
    0 < ee.length && ($ = ee.split(" ").length), document.getElementById("word_count").innerHTML = $;
    var te = 0;
    0 < _.value.length && (te = _.value.split(/\r*\n/).length), document.getElementById("line_count").innerHTML = te
}
var te;

function ke(_, $) {
    clearTimeout(te);
    var ee = document.querySelector(".messages");
    ee.innerHTML = '<div class="message ' + $ + '">' + _ + "</div>", te = setTimeout(function() {
        ee.innerHTML = ""
    }, 3e3)
}
var t, e, a, b, $ = Date.now();

function Le() {
    $ + 7e3 < Date.now() && ("function" == typeof pbjs.refreshAll && pbjs.refreshBidsAndAds(["div-gpt-ad-1495620748765-0", "div-gpt-ad-1495620748765-1"]), $ = Date.now())
}
t = this, e = function() {
    return function(n) {
        var o = {};

        function r(t) {
            if (o[t]) return o[t].exports;
            var e = o[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return n[t].call(e.exports, e, e.exports, r), e.l = !0, e.exports
        }
        return r.m = n, r.c = o, r.d = function(t, e, n) {
            r.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: n
            })
        }, r.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, r.t = function(e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var o in e) r.d(n, o, function(t) {
                    return e[t]
                }.bind(null, o));
            return n
        }, r.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return r.d(e, "a", e), e
        }, r.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, r.p = "", r(r.s = 0)
    }([function(t, e, n) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
            i = function() {
                function o(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var o = e[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                    }
                }
                return function(t, e, n) {
                    return e && o(t.prototype, e), n && o(t, n), t
                }
            }(),
            a = o(n(1)),
            c = o(n(3)),
            u = o(n(4));

        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var l = function(t) {
            function o(t, e) {
                ! function(t, e) {
                    if (!(t instanceof o)) throw new TypeError("Cannot call a class as a function")
                }(this);
                var n = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this));
                return n.resolveOptions(e), n.listenClick(t), n
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(o, c.default), i(o, [{
                key: "resolveOptions",
                value: function() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === r(t.container) ? t.container : document.body
                }
            }, {
                key: "listenClick",
                value: function(t) {
                    var e = this;
                    this.listener = (0, u.default)(t, "click", function(t) {
                        return e.onClick(t)
                    })
                }
            }, {
                key: "onClick",
                value: function(t) {
                    var e = t.delegateTarget || t.currentTarget;
                    this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new a.default({
                        action: this.action(e),
                        target: this.target(e),
                        text: this.text(e),
                        container: this.container,
                        trigger: e,
                        emitter: this
                    })
                }
            }, {
                key: "defaultAction",
                value: function(t) {
                    return s("action", t)
                }
            }, {
                key: "defaultTarget",
                value: function(t) {
                    var e = s("target", t);
                    if (e) return document.querySelector(e)
                }
            }, {
                key: "defaultText",
                value: function(t) {
                    return s("text", t)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                }
            }], [{
                key: "isSupported",
                value: function() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                        e = "string" == typeof t ? [t] : t,
                        n = !!document.queryCommandSupported;
                    return e.forEach(function(t) {
                        n = n && !!document.queryCommandSupported(t)
                    }), n
                }
            }]), o
        }();

        function s(t, e) {
            var n = "data-clipboard-" + t;
            if (e.hasAttribute(n)) return e.getAttribute(n)
        }
        t.exports = l
    }, function(t, e, n) {
        "use strict";
        var o, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
            i = function() {
                function o(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var o = e[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                    }
                }
                return function(t, e, n) {
                    return e && o(t.prototype, e), n && o(t, n), t
                }
            }(),
            c = (o = n(2)) && o.__esModule ? o : {
                default: o
            },
            u = function() {
                function e(t) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.resolveOptions(t), this.initSelection()
                }
                return i(e, [{
                    key: "resolveOptions",
                    value: function() {
                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                        this.action = t.action, this.container = t.container, this.emitter = t.emitter, this.target = t.target, this.text = t.text, this.trigger = t.trigger, this.selectedText = ""
                    }
                }, {
                    key: "initSelection",
                    value: function() {
                        this.text ? this.selectFake() : this.target && this.selectTarget()
                    }
                }, {
                    key: "selectFake",
                    value: function() {
                        var t = this,
                            e = "rtl" == document.documentElement.getAttribute("dir");
                        this.removeFake(), this.fakeHandlerCallback = function() {
                            return t.removeFake()
                        }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px";
                        var n = window.pageYOffset || document.documentElement.scrollTop;
                        this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, c.default)(this.fakeElem), this.copyText()
                    }
                }, {
                    key: "removeFake",
                    value: function() {
                        this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
                    }
                }, {
                    key: "selectTarget",
                    value: function() {
                        this.selectedText = (0, c.default)(this.target), this.copyText()
                    }
                }, {
                    key: "copyText",
                    value: function() {
                        var e = void 0;
                        try {
                            e = document.execCommand(this.action)
                        } catch (t) {
                            e = !1
                        }
                        this.handleResult(e)
                    }
                }, {
                    key: "handleResult",
                    value: function(t) {
                        this.emitter.emit(t ? "success" : "error", {
                            action: this.action,
                            text: this.selectedText,
                            trigger: this.trigger,
                            clearSelection: this.clearSelection.bind(this)
                        })
                    }
                }, {
                    key: "clearSelection",
                    value: function() {
                        this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.removeFake()
                    }
                }, {
                    key: "action",
                    set: function() {
                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "copy";
                        if (this._action = t, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                    },
                    get: function() {
                        return this._action
                    }
                }, {
                    key: "target",
                    set: function(t) {
                        if (void 0 !== t) {
                            if (!t || "object" !== (void 0 === t ? "undefined" : r(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                            if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                            if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                            this._target = t
                        }
                    },
                    get: function() {
                        return this._target
                    }
                }]), e
            }();
        t.exports = u
    }, function(t, e) {
        t.exports = function(t) {
            var e;
            if ("SELECT" === t.nodeName) t.focus(), e = t.value;
            else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
                var n = t.hasAttribute("readonly");
                n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = t.value
            } else {
                t.hasAttribute("contenteditable") && t.focus();
                var o = window.getSelection(),
                    r = document.createRange();
                r.selectNodeContents(t), o.removeAllRanges(), o.addRange(r), e = o.toString()
            }
            return e
        }
    }, function(t, e) {
        function n() {}
        n.prototype = {
            on: function(t, e, n) {
                var o = this.e || (this.e = {});
                return (o[t] || (o[t] = [])).push({
                    fn: e,
                    ctx: n
                }), this
            },
            once: function(t, e, n) {
                var o = this;

                function r() {
                    o.off(t, r), e.apply(n, arguments)
                }
                return r._ = e, this.on(t, r, n)
            },
            emit: function(t) {
                for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), o = 0, r = n.length; o < r; o++) n[o].fn.apply(n[o].ctx, e);
                return this
            },
            off: function(t, e) {
                var n = this.e || (this.e = {}),
                    o = n[t],
                    r = [];
                if (o && e)
                    for (var i = 0, a = o.length; i < a; i++) o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);
                return r.length ? n[t] = r : delete n[t], this
            }
        }, t.exports = n
    }, function(t, e, n) {
        var d = n(5),
            h = n(6);
        t.exports = function(t, e, n) {
            if (!t && !e && !n) throw new Error("Missing required arguments");
            if (!d.string(e)) throw new TypeError("Second argument must be a String");
            if (!d.fn(n)) throw new TypeError("Third argument must be a Function");
            if (d.node(t)) return s = e, f = n, (l = t).addEventListener(s, f), {
                destroy: function() {
                    l.removeEventListener(s, f)
                }
            };
            if (d.nodeList(t)) return a = t, c = e, u = n, Array.prototype.forEach.call(a, function(t) {
                t.addEventListener(c, u)
            }), {
                destroy: function() {
                    Array.prototype.forEach.call(a, function(t) {
                        t.removeEventListener(c, u)
                    })
                }
            };
            if (d.string(t)) return o = t, r = e, i = n, h(document.body, o, r, i);
            throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
            var o, r, i, a, c, u, l, s, f
        }
    }, function(t, n) {
        n.node = function(t) {
            return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
        }, n.nodeList = function(t) {
            var e = Object.prototype.toString.call(t);
            return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length" in t && (0 === t.length || n.node(t[0]))
        }, n.string = function(t) {
            return "string" == typeof t || t instanceof String
        }, n.fn = function(t) {
            return "[object Function]" === Object.prototype.toString.call(t)
        }
    }, function(t, e, n) {
        var a = n(7);

        function i(t, e, n, o, r) {
            var i = function(e, n, t, o) {
                return function(t) {
                    t.delegateTarget = a(t.target, n), t.delegateTarget && o.call(e, t)
                }
            }.apply(this, arguments);
            return t.addEventListener(n, i, r), {
                destroy: function() {
                    t.removeEventListener(n, i, r)
                }
            }
        }
        t.exports = function(t, e, n, o, r) {
            return "function" == typeof t.addEventListener ? i.apply(null, arguments) : "function" == typeof n ? i.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, function(t) {
                return i(t, e, n, o, r)
            }))
        }
    }, function(t, e) {
        if ("undefined" != typeof Element && !Element.prototype.matches) {
            var n = Element.prototype;
            n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector
        }
        t.exports = function(t, e) {
            for (; t && 9 !== t.nodeType;) {
                if ("function" == typeof t.matches && t.matches(e)) return t;
                t = t.parentNode
            }
        }
    }])
}, "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ClipboardJS = e() : t.ClipboardJS = e(), a = this, b = function() {
    "use strict";

    function c(b, c, d) {
        var e = new XMLHttpRequest;
        e.open("GET", b), e.responseType = "blob", e.onload = function() {
            a(e.response, c, d)
        }, e.onerror = function() {
            console.error("could not download file")
        }, e.send()
    }

    function d(a) {
        var b = new XMLHttpRequest;
        b.open("HEAD", a, !1);
        try {
            b.send()
        } catch (a) {}
        return 200 <= b.status && b.status <= 299
    }

    function e(a) {
        try {
            a.dispatchEvent(new MouseEvent("click"))
        } catch (c) {
            var b = document.createEvent("MouseEvents");
            b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b)
        }
    }
    var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0,
        a = f.saveAs || ("object" != typeof window || window !== f ? function() {} : "download" in HTMLAnchorElement.prototype ? function(b, g, h) {
            var i = f.URL || f.webkitURL,
                j = document.createElement("a");
            g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function() {
                i.revokeObjectURL(j.href)
            }, 4e4), setTimeout(function() {
                e(j)
            }, 0))
        } : "msSaveOrOpenBlob" in navigator ? function(f, g, h) {
            if (g = g || f.name || "download", "string" != typeof f) navigator.msSaveOrOpenBlob(function(a, b) {
                return void 0 === b ? b = {
                    autoBom: !1
                } : "object" != typeof b && (console.warn("Deprecated: Expected third argument to be a object"), b = {
                    autoBom: !b
                }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\ufeff", a], {
                    type: a.type
                }) : a
            }(f, h), g);
            else if (d(f)) c(f, g, h);
            else {
                var i = document.createElement("a");
                i.href = f, i.target = "_blank", setTimeout(function() {
                    e(i)
                })
            }
        } : function(a, b, d, e) {
            if ((e = e || open("", "_blank")) && (e.document.title = e.document.body.innerText = "downloading..."), "string" == typeof a) return c(a, b, d);
            var g = "application/octet-stream" === a.type,
                h = /constructor/i.test(f.HTMLElement) || f.safari,
                i = /CriOS\/[\d]+/.test(navigator.userAgent);
            if ((i || g && h) && "object" == typeof FileReader) {
                var j = new FileReader;
                j.onloadend = function() {
                    var a = j.result;
                    a = i ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), e ? e.location.href = a : location = a, e = null
                }, j.readAsDataURL(a)
            } else {
                var k = f.URL || f.webkitURL,
                    l = k.createObjectURL(a);
                e ? e.location = l : location.href = l, e = null, setTimeout(function() {
                    k.revokeObjectURL(l)
                }, 4e4)
            }
        });
    f.saveAs = a.saveAs = a, "undefined" != typeof module && (module.exports = a)
}, "function" == typeof define && define.amd ? define([], b) : "undefined" != typeof exports ? b() : (b(), a.FileSaver = {}), document.addEventListener("DOMContentLoaded", function() {
    var ee = document.getElementById("content");
    if (null != ee) {
        if (document.getElementById("upper") && document.getElementById("upper").addEventListener("click", function(e) {
                return e.preventDefault(), ee.value = ee.value.toUpperCase(), ee.placeholder = ee.placeholder.toUpperCase(), be(ee), Ee("Convert", "Upper"), Le(), !1
            }), document.getElementById("lower") && document.getElementById("lower").addEventListener("click", function(e) {
                return e.preventDefault(), ee.value = ee.value.toLowerCase(), ee.placeholder = ee.placeholder.toLowerCase(), be(ee), Ee("Convert", "Lower"), Le(), !1
            }), document.getElementById("capitalized") && document.getElementById("capitalized").addEventListener("click", function(e) {
                return e.preventDefault(), ee.value = ve(ee.value.toLowerCase()), ee.placeholder = ve(ee.placeholder.toLowerCase()), be(ee), Ee("Convert", "Capitalized"), Le(), !1
            }), document.getElementById("sentence") && document.getElementById("sentence").addEventListener("click", function(e) {
                return e.preventDefault(), ee.value = pe(ee.value), ee.placeholder = pe(ee.placeholder), be(ee), Ee("Convert", "Sentence"), Le(), !1
            }), document.getElementById("alternating") && document.getElementById("alternating").addEventListener("click", function(e) {
                return e.preventDefault(), ee.value = he(ee.value), ee.placeholder = he(ee.placeholder), be(ee), Ee("Convert", "Alternating"), Le(), !1
            }), document.getElementById("inverse") && document.getElementById("inverse").addEventListener("click", function(e) {
                return e.preventDefault(), ee.value = me(ee.value), ee.placeholder = me(ee.placeholder), be(ee), Ee("Convert", "Inverse"), Le(), !1
            }), document.getElementById("title") && document.getElementById("title").addEventListener("click", function(e) {
                return e.preventDefault(), ee.value = ye(ee.value), ee.placeholder = ye(ee.placeholder), be(ee), Ee("Convert", "Title"), Le(), !1
            }), document.getElementById("clear") && document.getElementById("clear").addEventListener("click", function(e) {
                return e.preventDefault(), ee.value = "", ee.placeholder = pe(ee.placeholder.toLowerCase()), we(ee), Ee("Clear", "Clear"), Le(), !1
            }), document.getElementById("smalltext")) {
            var $ = {
                    0: "â°",
                    1: "Â¹",
                    2: "Â²",
                    3: "Â³",
                    4: "â´",
                    5: "âµ",
                    6: "â¶",
                    7: "â·",
                    8: "â¸",
                    9: "â¹",
                    "+": "âº",
                    "-": "â»",
                    "=": "â¼",
                    "(": "â½",
                    ")": "â¾",
                    a: "áµƒ",
                    b: "áµ‡",
                    c: "á¶œ",
                    d: "áµˆ",
                    e: "áµ‰",
                    f: "á¶ ",
                    g: "áµ",
                    h: "Ê°",
                    i: "â±",
                    j: "Ê²",
                    k: "áµ",
                    l: "Ë¡",
                    m: "áµ",
                    n: "â¿",
                    o: "áµ’",
                    p: "áµ–",
                    q: "áµ ",
                    r: "Ê³",
                    s: "Ë¢",
                    t: "áµ—",
                    u: "áµ˜",
                    v: "áµ›",
                    w: "Ê·",
                    x: "Ë£",
                    y: "Ê¸",
                    z: "á¶»"
                },
                te = {
                    a: "á´€",
                    b: "Ê™",
                    c: "á´„",
                    d: "á´…",
                    e: "á´‡",
                    f: "êœ°",
                    g: "É¢",
                    h: "Êœ",
                    i: "Éª",
                    j: "á´Š",
                    k: "á´‹",
                    l: "ÊŸ",
                    m: "á´",
                    n: "É´",
                    o: "á´",
                    p: "á´˜",
                    r: "Ê€",
                    s: "êœ±",
                    t: "á´›",
                    u: "á´œ",
                    v: "á´ ",
                    w: "á´¡",
                    y: "Ê",
                    z: "á´¢"
                };

            function _() {
                var _ = ee.value;
                "" == _ && (_ = ee.placeholder), document.getElementById("output").innerHTML = "<h3>" + smallcaps + "</h3><p>" + ge(_, te, !1) + "</p>", document.getElementById("output").innerHTML += "<h3>" + superscript + "</h3><p>" + ge(_, $, !0) + "</p>"
            }
            _(), ee.addEventListener("input", function(e) {
                _(), Le()
            }), ee.addEventListener("propertychange", function(e) {
                _(), Le()
            })
        }
        if (document.getElementById("widetext")) {
            var ne = {
                " ": "â€ƒ",
                0: "ï¼",
                1: "ï¼‘",
                2: "ï¼’",
                3: "ï¼“",
                4: "ï¼”",
                5: "ï¼•",
                6: "ï¼–",
                7: "ï¼—",
                8: "ï¼˜",
                9: "ï¼™",
                a: "ï½",
                b: "ï½‚",
                c: "ï½ƒ",
                d: "ï½„",
                e: "ï½…",
                f: "ï½†",
                g: "ï½‡",
                h: "ï½ˆ",
                i: "ï½‰",
                j: "ï½Š",
                k: "ï½‹",
                l: "ï½Œ",
                m: "ï½",
                n: "ï½Ž",
                o: "ï½",
                p: "ï½",
                q: "ï½‘",
                r: "ï½’",
                s: "ï½“",
                t: "ï½”",
                u: "ï½•",
                v: "ï½–",
                w: "ï½—",
                x: "ï½˜",
                y: "ï½™",
                z: "ï½š",
                A: "ï¼¡",
                B: "ï¼¢",
                C: "ï¼£",
                D: "ï¼¤",
                E: "ï¼¥",
                F: "ï¼¦",
                G: "ï¼§",
                H: "ï¼¨",
                I: "ï¼©",
                J: "ï¼ª",
                K: "ï¼«",
                L: "ï¼¬",
                M: "ï¼­",
                N: "ï¼®",
                O: "ï¼¯",
                P: "ï¼°",
                Q: "ï¼±",
                R: "ï¼²",
                S: "ï¼³",
                T: "ï¼´",
                U: "ï¼µ",
                V: "ï¼¶",
                W: "ï¼·",
                X: "ï¼¸",
                Y: "ï¼¹",
                Z: "ï¼º",
                "!": "ï¼",
                '"': "ã‚›",
                "#": "ï¼ƒ",
                $: "ï¼„",
                "%": "ï¼…",
                "&": "ï¼†",
                "(": "ï¼ˆ",
                ")": "ï¼‰",
                "*": "ï¼Š",
                "+": "ï¼‹",
                ",": "ã€",
                "-": "ãƒ¼",
                ".": "ã€‚",
                "/": "ï¼",
                ":": "ï¼š",
                ";": "ï¼›",
                "<": "ã€ˆ",
                "=": "ï¼",
                ">": "ã€‰",
                "?": "ï¼Ÿ",
                "@": "ï¼ ",
                "[": "ï¼»",
                "'": "'",
                "]": "ï¼½",
                "^": "ï¼¾",
                _: "ï¼¿",
                "`": "â€˜",
                "{": "ï½›",
                "|": "ï½œ",
                "}": "ï½",
                "~": "ï½ž"
            };

            function oe() {
                var _ = ee.value;
                "" == _ && (_ = ee.placeholder), document.getElementById("output").innerHTML = "<p>" + ge(_, ne, !1) + "</p>"
            }
            oe(), ee.addEventListener("input", function(e) {
                oe(), Le()
            }), ee.addEventListener("propertychange", function(e) {
                oe(), Le()
            })
        }
        if (document.getElementById("strikethrough")) {
            function re() {
                var _ = ee.value;
                "" == _ && (_ = ee.placeholder), document.getElementById("output").innerHTML = "<p>" + _.split("").reduce(function(_, $) {
                    return _ + $ + "Ì¶"
                }, "").replace(/\n/g, "<br>") + "</p>"
            }
            re(), ee.addEventListener("input", function(e) {
                re(), Le()
            }), ee.addEventListener("propertychange", function(e) {
                re(), Le()
            })
        }
        if (document.getElementById("titlecase")) {
            function ie() {
                var _ = ee.value;
                "" == _ && (_ = ee.placeholder), document.getElementById("output").innerHTML = "<p>" + ye(_).replace(/\n/g, "<br>") + "</p>"
            }
            ie(), ee.addEventListener("input", function(e) {
                ie(), Le()
            }), ee.addEventListener("propertychange", function(e) {
                ie(), Le()
            })
        }
        ee.addEventListener("focus", function() {
            we(ee)
        }), ee.addEventListener("blur", function() {
            we(ee)
        }), ee.addEventListener("input", function() {
            we(ee)
        }), ee.addEventListener("propertychange", function() {
            we(ee)
        }), we(ee);
        var ae = new ClipboardJS("#copy");
        ae.on("success", function(e) {
            ke(copied, "success"), Ee("Copied", "Copied"), Le(), e.clearSelection()
        }), ae.on("error", function(e) {
            ke(manual_copy, "info"), Ee("Copied", "Manual"), Le()
        });
        try {
            new Blob;
            var le = document.getElementById("download");
            le && (le.style.display = "inline-block", le.addEventListener("click", function(e) {
                if (0 == ee.length) ke(no_text, "error");
                else {
                    if ("innerText" === le.getAttribute("data-download-type")) var _ = document.getElementById(le.getAttribute("data-download-target").slice(1)).innerText.replace(/\n/g, "\r\n");
                    else _ = document.getElementById(le.getAttribute("data-download-target").slice(1)).value.replace(/\n/g, "\r\n");
                    var $ = new Blob([_], {
                        type: "text/plain;charset=utf-8"
                    });
                    saveAs($, file_name), ke(downloaded, "success"), Ee("Download", "Download"), Le()
                }
                return !1
            }))
        } catch (e) {}
        for (var ce = document.querySelectorAll(".share"), i = 0; i < ce.length; i++) ce[i].addEventListener("click", function(e) {
            var _, $, ee, te, ne;
            return e.preventDefault(), _ = this.href, $ = 520, ee = 320, te = screen.width / 2 - $ / 2, ne = screen.height / 2 - ee / 2, window.open(_, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + $ + ",height=" + ee + ",top=" + ne + ",left=" + te), !1
        })
    }
    var ue = "ACCEPTCONSENT";
    if ("y" != function(_) {
            for (var $ = _ + "=", ee = document.cookie.split(";"), i = 0; i < ee.length; i++) {
                for (var c = ee[i];
                    " " == c.charAt(0);) c = c.substring(1);
                if (0 == c.indexOf($)) return c.substring($.length, c.length)
            }
            return ""
        }(ue)) {
        var se = document.getElementById("cookiebar");
        se.style.display = "block", document.querySelectorAll("#cookiebar .ok")[0].addEventListener("click", function(e) {
            return se.style.display = "none",
                function(_, $, ee, te) {
                    var d = new Date;
                    d.setTime(d.getTime() + 24 * ee * 60 * 60 * 1e3);
                    var ne = "expires=" + d.toUTCString();
                    document.cookie = _ + "=" + $ + ";" + ne + ";path=" + te
                }(ue, "y", 365, "/"), !1
        })
    }
    var de = document.getElementById("menu-toggle"),
        fe = document.getElementById("menu");
    de.addEventListener("click", function() {
        de.classList.toggle("open"), fe.classList.toggle("open")
    })
}), "serviceWorker" in navigator && navigator.serviceWorker.register("/sw.js");