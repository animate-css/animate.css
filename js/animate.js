/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-canvas-cssanimations-csstransforms-csstransforms3d-opacity !*/
!function (e, n, t) { function r(e, n) { return typeof e === n } function s() { var e, n, t, s, o, i, a; for (var f in C) if (C.hasOwnProperty(f)) { if (e = [], n = C[f], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length)) for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase()); for (s = r(n.fn, "function") ? n.fn() : n.fn, o = 0; o < e.length; o++) i = e[o], a = i.split("."), 1 === a.length ? Modernizr[a[0]] = s : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = s), y.push((s ? "" : "no-") + a.join("-")) } } function o(e) { var n = w.className, t = Modernizr._config.classPrefix || ""; if (S && (n = n.baseVal), Modernizr._config.enableJSClass) { var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)"); n = n.replace(r, "$1" + t + "js$2") } Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), S ? w.className.baseVal = n : w.className = n) } function i() { return "function" != typeof n.createElement ? n.createElement(arguments[0]) : S ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments) } function a() { var e = n.body; return e || (e = i(S ? "svg" : "body"), e.fake = !0), e } function f(e, t, r, s) { var o, f, l, u, d = "modernizr", p = i("div"), c = a(); if (parseInt(r, 10)) for (; r--;) l = i("div"), l.id = s ? s[r] : d + (r + 1), p.appendChild(l); return o = i("style"), o.type = "text/css", o.id = "s" + d, (c.fake ? c : p).appendChild(o), c.appendChild(p), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(n.createTextNode(e)), p.id = d, c.fake && (c.style.background = "", c.style.overflow = "hidden", u = w.style.overflow, w.style.overflow = "hidden", w.appendChild(c)), f = t(p, e), c.fake ? (c.parentNode.removeChild(c), w.style.overflow = u, w.offsetHeight) : p.parentNode.removeChild(p), !!f } function l(e, n) { return !!~("" + e).indexOf(n) } function u(e, n) { return function () { return e.apply(n, arguments) } } function d(e, n, t) { var s; for (var o in e) if (e[o] in n) return t === !1 ? e[o] : (s = n[e[o]], r(s, "function") ? u(s, t || n) : s); return !1 } function p(e) { return e.replace(/([a-z])-([a-z])/g, function (e, n, t) { return n + t.toUpperCase() }).replace(/^-/, "") } function c(e) { return e.replace(/([A-Z])/g, function (e, n) { return "-" + n.toLowerCase() }).replace(/^ms-/, "-ms-") } function m(n, r) { var s = n.length; if ("CSS" in e && "supports" in e.CSS) { for (; s--;) if (e.CSS.supports(c(n[s]), r)) return !0; return !1 } if ("CSSSupportsRule" in e) { for (var o = []; s--;) o.push("(" + c(n[s]) + ":" + r + ")"); return o = o.join(" or "), f("@supports (" + o + ") { #modernizr { position: absolute; } }", function (e) { return "absolute" == getComputedStyle(e, null).position }) } return t } function v(e, n, s, o) { function a() { u && (delete j.style, delete j.modElem) } if (o = r(o, "undefined") ? !1 : o, !r(s, "undefined")) { var f = m(e, s); if (!r(f, "undefined")) return f } for (var u, d, c, v, h, g = ["modernizr", "tspan"]; !j.style;) u = !0, j.modElem = i(g.shift()), j.style = j.modElem.style; for (c = e.length, d = 0; c > d; d++) if (v = e[d], h = j.style[v], l(v, "-") && (v = p(v)), j.style[v] !== t) { if (o || r(s, "undefined")) return a(), "pfx" == n ? v : !0; try { j.style[v] = s } catch (y) { } if (j.style[v] != h) return a(), "pfx" == n ? v : !0 } return a(), !1 } function h(e, n, t, s, o) { var i = e.charAt(0).toUpperCase() + e.slice(1), a = (e + " " + E.join(i + " ") + i).split(" "); return r(n, "string") || r(n, "undefined") ? v(a, n, s, o) : (a = (e + " " + N.join(i + " ") + i).split(" "), d(a, n, t)) } function g(e, n, r) { return h(e, t, t, n, r) } var y = [], C = [], x = { _version: "3.2.0", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function (e, n) { var t = this; setTimeout(function () { n(t[e]) }, 0) }, addTest: function (e, n, t) { C.push({ name: e, fn: n, options: t }) }, addAsyncTest: function (e) { C.push({ name: null, fn: e }) } }, Modernizr = function () { }; Modernizr.prototype = x, Modernizr = new Modernizr; var w = n.documentElement, S = "svg" === w.nodeName.toLowerCase(); Modernizr.addTest("canvas", function () { var e = i("canvas"); return !(!e.getContext || !e.getContext("2d")) }); var _ = x._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : []; x._prefixes = _, Modernizr.addTest("opacity", function () { var e = i("a").style; return e.cssText = _.join("opacity:.55;"), /^0.55$/.test(e.opacity) }); var b = "CSS" in e && "supports" in e.CSS, T = "supportsCSS" in e; Modernizr.addTest("supports", b || T); var P = x.testStyles = f, z = "Moz O ms Webkit", E = x._config.usePrefixes ? z.split(" ") : []; x._cssomPrefixes = E; var N = x._config.usePrefixes ? z.toLowerCase().split(" ") : []; x._domPrefixes = N; var k = { elem: i("modernizr") }; Modernizr._q.push(function () { delete k.elem }); var j = { style: k.elem.style }; Modernizr._q.unshift(function () { delete j.style }), x.testAllProps = h, x.testAllProps = g, Modernizr.addTest("cssanimations", g("animationName", "a", !0)), Modernizr.addTest("csstransforms", function () { return -1 === navigator.userAgent.indexOf("Android 2.") && g("transform", "scale(1)", !0) }), Modernizr.addTest("csstransforms3d", function () { var e = !!g("perspective", "1px", !0), n = Modernizr._config.usePrefixes; if (e && (!n || "webkitPerspective" in w.style)) { var t, r = "#modernizr{width:0;height:0}"; Modernizr.supports ? t = "@supports (perspective: 1px)" : (t = "@media (transform-3d)", n && (t += ",(-webkit-transform-3d)")), t += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}", P(r + t, function (n) { e = 7 === n.offsetWidth && 18 === n.offsetHeight }) } return e }), s(), o(y), delete x.addTest, delete x.addAsyncTest; for (var A = 0; A < Modernizr._q.length; A++) Modernizr._q[A](); e.Modernizr = Modernizr }(window, document);

var animateCss = {}
animateCss.useJs = !Modernizr.cssanimations;
animateCss.bgcol = { r: 255, g: 255, b: 255 };

(function ($) {

    $.fn.animateCss = function (animation, usejs) {
        if (usejs == null ? animateCss.useJs : usejs) {
            //console.log("We will now use javascript to show " + animation + " animation.")
            window["animateCss"][animation](this);
        } else {
            //console.log("We will now use css to show " + animation + " animation.")
            this.removeClass().addClass(animation + ' animated')
                .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    $(this).removeClass(animation).removeClass("animated");
                });
        }
    }

}(jQuery));

//helpers
animateCss.transform = function (e, property, from, to, duration, easing, callback) {
    var fs = parseFloat($(e).css("fontSize"));
    var fsUnit = $(e).css("fontSize").replace(/[0-9]/g, '');

    $(e).animate({ tmp: from }, 0)
    .animate({ tmp: to }, {
        step: function (now, fx) {
            if (Modernizr.csstransforms) {
                var str = (property + "(" + now + (property == "rotate" ? "deg) " : ") "));
                animateCss.cssWithVendor(e, "transform", str);
            } else {
                //no transforms.. what to do..?

                //if transform is scale, fall back to font size
                if (property == "scale") {
                    $(e).css("fontSize", (now * fs) + fsUnit)
                } else {
                    console.log("CRY");
                }
            }
        },
        duration: duration,
        easing: easing == null ? "swing" : easing,
        complete: function () {
            var str = (property + "(" + 1 + ") ");
            animateCss.cssWithVendor(e, "transform", str);
            $(e).css("fontSize", fs);
            if (typeof (callback) == "function") {
                callback();
            }
        }
    })
}

animateCss.cssWithVendor = function (e, property, value) {
    $(e).css('-webkit-' + property, value);
    $(e).css('-ms-' + property, value);
    $(e).css(property, value);
}

animateCss.fade = function (e, val, duration, easing, callback) {
    if (Modernizr.opacity) {
        $(e).animate({
            opacity: val
        }, duration, callback)
    } else {

        //immitate opacity
        if (easing == null) {
            easing = "swing"
        }
        var b = animateCss.bgcol;
        var bgcols = animateCss.toRgb($(e).css("backgroundColor"));
        var fgcols = animateCss.toRgb($(e).css("color"));

        var ofc = $(e).css("color");
        var obc = $(e).css("backgroundColor");

        $(e).animate({ asdf: val == 1 ? 0 : 1 }, 0)
            .animate({ asdf: val }, {
                step: function (now, fx) {
                    var fc = animateCss.toHex(parseInt(fgcols.r * now + b.r * (1 - now)),
                        parseInt(fgcols.g * now + b.g * (1 - now)),
                        parseInt(fgcols.b * now + b.b * (1 - now)));
                    var bc = animateCss.toHex(parseInt(bgcols.r * now + b.r * (1 - now)),
                        parseInt(bgcols.g * now + b.g * (1 - now)),
                        parseInt(bgcols.b * now + b.b * (1 - now)));
                    //var fc = "rgb(" + parseInt(fgcols.r * now + b.r * (1 - now)) + "," +
                    //    parseInt(fgcols.g * now + b.g * (1 - now)) + "," +
                    //    parseInt(fgcols.b * now + b.b * (1 - now)) + ")";
                    //var bc = "rgb(" + parseInt(bgcols.r * now + b.r * (1 - now)) + "," +
                    //    parseInt(bgcols.g * now + b.g * (1 - now)) + "," +
                    //    parseInt(bgcols.b * now + b.b * (1 - now)) + ")";
                    $(this).css("color", fc);
                    $(this).css("backgroundColor", bc);
                },
                duration: duration,
                easing: easing,
                complete: function () {
                    $(e).css("color", ofc);
                    $(e).css("backgroundColor", obc);
                    if (typeof callback == "function") {
                        callback();
                    }
                }
            })
    }
}

animateCss.toRgb = function (a) {
    if (a.indexOf("#") > -1) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
        return {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        }
    } else {
        var a = a.replace("rgb(", "").replace("rgba(", "").replace(")", "").split(",")
        return {
            r: parseInt(a[0]),
            g: parseInt(a[1]),
            b: parseInt(a[2])
        }
    }
}
animateCss.toHex = function (r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend(jQuery.easing,
{
    def: 'easeOutQuad',
    swing: function (x, t, b, c, d) {
        //alert(jQuery.easing.default);
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function (x, t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    easeOutQuad: function (x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    easeInCubic: function (x, t, b, c, d) {
        return c * (t /= d) * t * t + b;
    },
    easeOutCubic: function (x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOutCubic: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    easeInQuart: function (x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    },
    easeOutQuart: function (x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOutQuart: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    easeInQuint: function (x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },
    easeOutQuint: function (x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOutQuint: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    easeInSine: function (x, t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function (x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    easeInOutSine: function (x, t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeInExpo: function (x, t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOutExpo: function (x, t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOutExpo: function (x, t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function (x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOutCirc: function (x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOutCirc: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    easeInElastic: function (x, t, b, c, d) {
        var s = 1.70158; var p = 0; var a = c;
        if (t == 0) return b; if ((t /= d) == 1) return b + c; if (!p) p = d * .3;
        if (a < Math.abs(c)) { a = c; var s = p / 4; }
        else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    easeOutElastic: function (x, t, b, c, d) {
        var s = 1.70158; var p = 0; var a = c;
        if (t == 0) return b; if ((t /= d) == 1) return b + c; if (!p) p = d * .3;
        if (a < Math.abs(c)) { a = c; var s = p / 4; }
        else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },
    easeInOutElastic: function (x, t, b, c, d) {
        var s = 1.70158; var p = 0; var a = c;
        if (t == 0) return b; if ((t /= d / 2) == 2) return b + c; if (!p) p = d * (.3 * 1.5);
        if (a < Math.abs(c)) { a = c; var s = p / 4; }
        else var s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    },
    easeInBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    },
    easeInBounce: function (x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
    },
    easeOutBounce: function (x, t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
        } else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
        } else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
        }
    },
    easeInOutBounce: function (x, t, b, c, d) {
        if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */