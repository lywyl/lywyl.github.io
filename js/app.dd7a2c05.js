(function (t) {
  function e(e) {
    for (
      var n, c, o = e[0], r = e[1], l = e[2], u = 0, p = [];
      u < o.length;
      u++
    )
      (c = o[u]),
        Object.prototype.hasOwnProperty.call(s, c) && s[c] && p.push(s[c][0]),
        (s[c] = 0);
    for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    d && d(e);
    while (p.length) p.shift()();
    return i.push.apply(i, l || []), a();
  }
  function a() {
    for (var t, e = 0; e < i.length; e++) {
      for (var a = i[e], n = !0, o = 1; o < a.length; o++) {
        var r = a[o];
        0 !== s[r] && (n = !1);
      }
      n && (i.splice(e--, 1), (t = c((c.s = a[0]))));
    }
    return t;
  }
  var n = {},
    s = { app: 0 },
    i = [];
  function c(e) {
    if (n[e]) return n[e].exports;
    var a = (n[e] = { i: e, l: !1, exports: {} });
    return t[e].call(a.exports, a, a.exports, c), (a.l = !0), a.exports;
  }
  (c.m = t),
    (c.c = n),
    (c.d = function (t, e, a) {
      c.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a });
    }),
    (c.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (c.t = function (t, e) {
      if ((1 & e && (t = c(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var a = Object.create(null);
      if (
        (c.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var n in t)
          c.d(
            a,
            n,
            function (e) {
              return t[e];
            }.bind(null, n)
          );
      return a;
    }),
    (c.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return c.d(e, "a", e), e;
    }),
    (c.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (c.p = "");
  var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    r = o.push.bind(o);
  (o.push = e), (o = o.slice());
  for (var l = 0; l < o.length; l++) e(o[l]);
  var d = r;
  i.push([0, "chunk-vendors"]), a();
})({
  0: function (t, e, a) {
    t.exports = a("56d7");
  },
  "0006": function (t, e, a) {},
  "01bc": function (t, e, a) {
    t.exports = a.p + "img/compass.40b7d00b.svg";
  },
  "0442": function (t, e, a) {},
  "0a0e": function (t, e, a) {
    t.exports = a.p + "img/scan.8693f657.svg";
  },
  "0cf5": function (t, e, a) {
    t.exports = a.p + "img/wechat.03883c8e.svg";
  },
  "0f62": function (t, e, a) {
    t.exports = a.p + "img/user.4d7104c2.svg";
  },
  1565: function (t, e, a) {},
  "1f4f": function (t, e, a) {
    t.exports = a.p + "img/contact.ffc95ce6.svg";
  },
  "216f": function (t, e, a) {
    "use strict";
    a("0006");
  },
  "25f2": function (t, e, a) {
    "use strict";
    a("8105");
  },
  "2a2a": function (t, e, a) {
    "use strict";
    a("0442");
  },
  "2b69": function (t, e, a) {},
  "31fb": function (t, e, a) {
    t.exports = a.p + "img/album.6e72989e.svg";
  },
  "32a9": function (t, e, a) {
    t.exports = a.p + "img/friendadd-fill.da3ec019.svg";
  },
  "33b7": function (t, e, a) {
    "use strict";
    a("f989");
  },
  4557: function (t, e, a) {
    t.exports = a.p + "img/sqr.c29b4e16.jpg";
  },
  "4c4a": function (t, e, a) {
    t.exports = a.p + "img/banner.7a1fb435.jpg";
  },
  "4d41": function (t, e, a) {
    "use strict";
    a("f3b2");
  },
  "51f2": function (t, e, a) {
    t.exports = a.p + "img/search.8f10dfa0.svg";
  },
  "56d7": function (t, e, a) {
    "use strict";
    a.r(e);
    a("7c32"), a("3d07"), a("44fb"), a("1599");
    var n = a("430a"),
      s = a("ac56"),
      i = a("25e5"),
      c = a.n(i),
      o =
        (a("cd3b"),
        a("cfe9"),
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { attrs: { id: "app" } }, [a("router-view")], 1);
        }),
      r = [],
      l = { name: "App" },
      d = l,
      u = (a("5c0b"), a("cba8")),
      p = Object(u["a"])(d, o, r, !1, null, null, null),
      m = p.exports,
      f = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          [
            n("app-bar", { attrs: { title: "平安成电智慧通行" } }),
            n("div", { class: "homepage " + (t.loading ? "loading" : "") }, [
              n(
                "div",
                {
                  staticClass: "snack-bar",
                  class:
                    t.hiddenLoading && t.showSnack ? "" : "snack-bar-hidden",
                },
                [
                  n(
                    "md-toolbar",
                    { staticClass: "md-elevation-5 snack-content" },
                    [
                      n("div", { staticStyle: { flex: "1" } }, [
                        t._v("授权有效！"),
                      ]),
                      n(
                        "md-button",
                        {
                          staticClass: "md-icon-button md-primary",
                          on: {
                            click: function (e) {
                              t.showSnack = !1;
                            },
                          },
                        },
                        [t._v("关闭")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              t.hiddenLoading
                ? t._e()
                : n(
                    "div",
                    { staticClass: "spinner" },
                    [
                      n("md-progress-spinner", {
                        staticClass: "md-primary",
                        attrs: {
                          "md-stroke": 4,
                          "md-diameter": 50,
                          "md-mode": "indeterminate",
                        },
                      }),
                      n("div", { staticClass: "spinner-text" }, [
                        t._v("正在进行扫码登记"),
                      ]),
                    ],
                    1
                  ),
              t.hiddenLoading
                ? n(
                    "div",
                    { staticClass: "pass-content" },
                    [
                      n("div", { staticClass: "pass-result" }, [
                        t._v(t._s(t.textContent)),
                      ]),
                      n(
                        "md-list",
                        { staticClass: "pass-list" },
                        [
                          n("md-list-item", [
                            n(
                              "svg",
                              {
                                staticClass: "list-icon",
                                attrs: {
                                  focusable: "false",
                                  viewBox: "0 0 24 24",
                                  "aria-hidden": "true",
                                  tabindex: "-1",
                                  title: "Person",
                                  "data-ga-event-category": "material-icons",
                                  "data-ga-event-action": "click",
                                  "data-ga-event-label": "Person",
                                },
                              },
                              [
                                n("path", {
                                  attrs: {
                                    d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
                                  },
                                }),
                              ]
                            ),
                            n(
                              "div",
                              { staticClass: "md-list-item-text list-title" },
                              [t._v("用户姓名")]
                            ),
                            n(
                              "div",
                              {
                                staticClass: "md-list-action list-text",
                                on: { click: t.clickName },
                              },
                              [t._v(t._s(t.name))]
                            ),
                          ]),
                          n("md-list-item", [
                            n(
                              "svg",
                              {
                                staticClass: "list-icon",
                                attrs: {
                                  focusable: "false",
                                  viewBox: "0 0 24 24",
                                  "aria-hidden": "true",
                                  tabindex: "-1",
                                  title: "Group",
                                  "data-ga-event-category": "material-icons",
                                  "data-ga-event-action": "click",
                                  "data-ga-event-label": "Group",
                                },
                              },
                              [
                                n("path", {
                                  attrs: {
                                    d: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
                                  },
                                }),
                              ]
                            ),
                            n(
                              "div",
                              { staticClass: "md-list-item-text list-title" },
                              [t._v("登记类型")]
                            ),
                            n(
                              "div",
                              { staticClass: "md-list-action list-text" },
                              [t._v(t._s(t.personType))]
                            ),
                          ]),
                          n("md-list-item", [
                            n(
                              "svg",
                              {
                                staticClass: "list-icon",
                                attrs: {
                                  focusable: "false",
                                  viewBox: "0 0 24 24",
                                  "aria-hidden": "true",
                                  tabindex: "-1",
                                  title: "Timer",
                                  "data-ga-event-category": "material-icons",
                                  "data-ga-event-action": "click",
                                  "data-ga-event-label": "Timer",
                                },
                              },
                              [
                                n("path", {
                                  attrs: {
                                    d: "M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z",
                                  },
                                }),
                              ]
                            ),
                            n(
                              "div",
                              { staticClass: "md-list-item-text list-title" },
                              [t._v("登记时间")]
                            ),
                            n(
                              "div",
                              {
                                staticClass:
                                  "md-list-action list-text time-text",
                              },
                              [
                                n("div", { staticClass: "line-text" }, [
                                  t._v(t._s(t.timeStr) + " " + t._s(t.timeStr)),
                                ]),
                              ]
                            ),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  )
                : t._e(),
              t.hiddenLoading
                ? n(
                    "div",
                    { staticClass: "pass-button" },
                    [
                      n("md-button", { staticClass: "md-primary md-raised" }, [
                        n(
                          "span",
                          {
                            staticClass: "pass-button-content",
                            on: {
                              click: function (e) {
                                return t.$router.replace("/qr");
                              },
                            },
                          },
                          [t._v("前往个人二维码")]
                        ),
                      ]),
                    ],
                    1
                  )
                : t._e(),
              t.hiddenLoading
                ? n("div", { staticClass: "logo" }, [
                    n("img", {
                      staticClass: "logo-img",
                      attrs: { src: a("cf05"), alt: "" },
                    }),
                  ])
                : t._e(),
            ]),
          ],
          1
        );
      },
      v = [],
      g =
        (a("1baf"),
        a("89e3"),
        a("09a7"),
        a("9885"),
        a("e456"),
        a("8cb5"),
        a("1313"),
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return "true" === t.showAppBar
            ? a(
                "div",
                {
                  staticClass: "app-bar",
                  on: {
                    click: function (e) {
                      return t.document.documentElement.requestFullScreen();
                    },
                  },
                },
                [
                  a(
                    "svg",
                    {
                      staticClass: "close-icon",
                      attrs: {
                        viewBox: "0 0 1024 1024",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        "p-id": "2007",
                        width: "200",
                        height: "200",
                      },
                      on: { click: t.back },
                    },
                    [
                      a("path", {
                        attrs: {
                          d: "M519.02036023 459.47959989L221.8941505 162.35411435a37.07885742 37.07885742 0 1 0-52.45354772 52.40502656l297.12476134 297.15010821L169.44060278 809.05863314a37.07885742 37.07885742 0 1 0 52.42964924 52.42892505l297.15010821-297.12476136 297.15010822 297.12476136a37.07885742 37.07885742 0 1 0 52.42892504-52.40430237l-297.12476135-297.1740067 297.12476135-297.12548553a37.07885742 37.07885742 0 1 0-52.42892504-52.42964924L519.04498291 459.47959989z",
                          fill: "#2c2c2c",
                          "p-id": "2008",
                        },
                      }),
                    ]
                  ),
                  a("div", { staticClass: "title" }, [t._v(t._s(t.title))]),
                  a(
                    "svg",
                    {
                      staticClass: "more-icon",
                      staticStyle: {
                        "vertical-align": "middle",
                        fill: "currentColor",
                        overflow: "hidden",
                      },
                      attrs: {
                        viewBox: "0 0 1024 1024",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        "p-id": "1533",
                      },
                    },
                    [
                      a("path", {
                        attrs: {
                          d: "M96 522.666667m-96 0a96 96 0 1 0 192 0 96 96 0 1 0-192 0Z",
                          fill: "#212121",
                          "p-id": "1534",
                        },
                      }),
                      a("path", {
                        attrs: {
                          d: "M522.666667 522.666667m-96 0a96 96 0 1 0 192 0 96 96 0 1 0-192 0Z",
                          fill: "#212121",
                          "p-id": "1535",
                        },
                      }),
                      a("path", {
                        attrs: {
                          d: "M928 522.666667m-96 0a96 96 0 1 0 192 0 96 96 0 1 0-192 0Z",
                          fill: "#212121",
                          "p-id": "1536",
                        },
                      }),
                    ]
                  ),
                ]
              )
            : t._e();
        }),
      b = [],
      h = {
        props: { title: String },
        data: function () {
          return { showAppBar: localStorage.getItem("showAppBar") };
        },
        methods: {
          back: function () {
            this.$router.go(-1);
          },
          fullscreen: function () {
            console.log("fullscreen");
          },
        },
      },
      C = h,
      _ = (a("25f2"), Object(u["a"])(C, g, b, !1, null, "62854646", null)),
      x = _.exports,
      w = {
        name: "HomePage",
        components: { AppBar: x },
        data: function () {
          return {
            loading: !0,
            hiddenLoading: !1,
            showSnack: !1,
            timeStr: new Date().toLocaleString(),
            name: "试着点我三次",
            personType: localStorage.getItem("personType") || "未设置",
            clickCount: 0,
          };
        },
        computed: {
          textContent: function () {
            var t = this.$route.query.type,
              e =
                t && "out" === t
                  ? localStorage.getItem("leaveText")
                  : localStorage.getItem("enterText");
            return e || "尚未设置，请点击用户姓名进入设置页";
          },
        },
        mounted: function () {
          var t = this;
          (document.title = "平安成电智慧通行"),
            setTimeout(function () {
              (t.loading = !1),
                setTimeout(function () {
                  (t.hiddenLoading = !0),
                    (t.showSnack = !0),
                    setTimeout(function () {
                      t.showSnack = !1;
                    }, 3e3);
                }, 500);
            }, 1e3);
          var e = localStorage.getItem("name");
          e && (this.name = e);
          var a = new Date(),
            n = a.getHours(),
            s = a.getMinutes(),
            i = a.getSeconds(),
            c = [a.getFullYear(), a.getMonth() + 1, a.getDate()]
              .map(function (t) {
                return t.toString().padStart(2, "0");
              })
              .join("-"),
            o = [n, s, i]
              .map(function (t) {
                return t.toString().padStart(2, "0");
              })
              .join(":");
          this.timeStr = "".concat(c, " ").concat(o);
        },
        methods: {
          clickName: function () {
            (this.clickCount += 1),
              this.clickCount > 3 &&
                ((this.clickCount = 0), this.$router.push("/setting"));
          },
        },
      },
      y = w,
      k = (a("33b7"), Object(u["a"])(y, f, v, !1, null, "4d2c5708", null)),
      S = k.exports,
      j = function () {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      T = [
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticClass: "login-page" }, [
            n("div", { staticClass: "progress-bar" }),
            n("img", {
              staticClass: "wechat-icon",
              attrs: { src: a("0cf5"), alt: "" },
            }),
            n("div", { staticClass: "login-tips" }, [
              t._v("近期你已经授权登录过电子科技大学保卫处"),
            ]),
            n("div", { staticClass: "login-tips" }, [t._v("自动登录中")]),
          ]);
        },
      ],
      O = (a("cf33"), a("bab0"), null),
      M = {
        name: "LoginPage",
        props: {},
        data: function () {
          return { amount: 0 };
        },
        mounted: function () {
          var t = this,
            e = this.$route.query.type,
            a = void 0 !== e ? "?type=".concat(e) : "";
          (document.title = ""),
            (O = setInterval(function () {
              t.amount < 100 && (t.amount += parseInt(80 * Math.random())),
                t.amount >= 100 &&
                  (t.$router.replace("/home" + a), O && clearInterval(O));
            }, 300));
        },
      },
      $ = M,
      B = (a("a008"), Object(u["a"])($, j, T, !1, null, "1497f851", null)),
      q = B.exports,
      A = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          [
            n("app-bar", { attrs: { title: "平安成电智慧通行" } }),
            n("div", { staticClass: "qr-page-wrapper" }, [
              n(
                "div",
                { staticClass: "qr-page md-elevation-2" },
                [
                  n("div", { staticClass: "qr-title" }, [t._v("行人二维码")]),
                  n("img", {
                    staticClass: "qr-img",
                    attrs: { src: a("6585"), alt: "" },
                  }),
                  n("div", { staticClass: "qr-text" }, [
                    t._v("二维码剩余有效时间" + t._s(t.time) + "秒"),
                  ]),
                  n("md-button", { staticClass: "md-primary md-raised" }, [
                    n(
                      "span",
                      {
                        staticClass: "qr-button-content",
                        on: {
                          click: function (e) {
                            return t.$router.push("/rule");
                          },
                        },
                      },
                      [t._v("查看通行规则")]
                    ),
                  ]),
                ],
                1
              ),
            ]),
          ],
          1
        );
      },
      E = [],
      P = {
        name: "QRCodePage",
        components: { AppBar: x },
        data: function () {
          return { time: 300 };
        },
        mounted: function () {
          var t = this;
          setInterval(function () {
            t.time -= 2;
          }, 2e3);
        },
      },
      L = P,
      I = (a("5f78"), Object(u["a"])(L, A, E, !1, null, "816a9cba", null)),
      z = I.exports,
      D = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          [
            a("app-bar", { attrs: { title: "平安成电智慧通行" } }),
            a(
              "div",
              { staticClass: "spinner" },
              [
                a("md-progress-spinner", {
                  staticClass: "md-primary",
                  attrs: {
                    "md-stroke": 4,
                    "md-diameter": 50,
                    "md-mode": "indeterminate",
                  },
                }),
              ],
              1
            ),
          ],
          1
        );
      },
      F = [],
      H = { name: "PassRulePage", components: { AppBar: x } },
      N = H,
      V = (a("216f"), Object(u["a"])(N, D, F, !1, null, "93eac55c", null)),
      Z = V.exports,
      R = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", { staticClass: "wechat-page" }, [
          n("div", { staticClass: "wechat-header" }, [
            n("div", { staticClass: "title", on: { click: t.gotoSetting } }, [
              t._v("微信"),
            ]),
            n(
              "div",
              { staticClass: "trailing" },
              [
                n("img", {
                  staticClass: "icon-button",
                  attrs: { src: a("51f2") },
                }),
                n("img", {
                  staticClass: "icon-button",
                  attrs: { src: a("eef4") },
                  on: {
                    click: function (e) {
                      t.showFloatTab = !t.showFloatTab;
                    },
                  },
                }),
                n("transition", { attrs: { name: "float-in" } }, [
                  t.showFloatTab
                    ? n(
                        "div",
                        { staticClass: "float-tab" },
                        [
                          n("div", {
                            staticClass: "float-mask",
                            on: {
                              click: function (e) {
                                t.showFloatTab = !1;
                              },
                            },
                          }),
                          t._l(t.floatTabs, function (e, a) {
                            return n(
                              "div",
                              {
                                key: a,
                                staticClass: "float-tab-item",
                                on: { click: t.scan },
                              },
                              [
                                n("img", {
                                  staticClass: "float-tab-icon",
                                  attrs: { src: e.icon, alt: "" },
                                }),
                                n("div", { staticClass: "float-tab-name" }, [
                                  t._v(t._s(e.name)),
                                ]),
                              ]
                            );
                          }),
                        ],
                        2
                      )
                    : t._e(),
                ]),
              ],
              1
            ),
          ]),
          n(
            "div",
            { staticClass: "wechat-content" },
            t._l(t.messages, function (e, a) {
              return n("div", { key: a, staticClass: "message-item" }, [
                n("div", { staticClass: "avatar", style: e.style }),
                n("div", { staticClass: "message-body" }, [
                  n("div", { staticClass: "header" }, [
                    n("div", { staticClass: "name" }, [t._v(t._s(e.name))]),
                    n("div", { staticClass: "message-time" }, [
                      t._v(t._s(e.time)),
                    ]),
                  ]),
                  n("div", { staticClass: "content" }, [t._v(t._s(e.content))]),
                ]),
              ]);
            }),
            0
          ),
          n(
            "div",
            { staticClass: "wechat-tab" },
            t._l(t.tabs, function (e, a) {
              return n("div", { key: a, staticClass: "tab-item" }, [
                n("img", { staticClass: "tab-icon", attrs: { src: e.icon } }),
                e.selected
                  ? n("div", { staticClass: "tab-name selected" }, [
                      t._v(t._s(e.name)),
                    ])
                  : n("div", { staticClass: "tab-name" }, [t._v(t._s(e.name))]),
              ]);
            }),
            0
          ),
        ]);
      },
      G = [],
      J = a("4ec1"),
      Q =
        (a("8f10"),
        "无敌可爱妮妮酱就🙌,你怎么不守男德\n拼爹爹购物群,陶菊：《巴菲龙》\n妹妹,[转账]朋友已确认收款\n文件传输助手,论文.pdf\n订阅号消息,极市平台:如何用深度学习来做检索...\n站起来,LZY:我明天就位\n中国银行微银行,交易提醒\n2021届硕士通知群,叶老师:@小朱 @10班李广 打卡\n指艺推拿预约专用😄2,希:@A指艺王飞飞 我说话给忘了，后天...\n2020暑假留校群,叶老师:打卡"
          .split("\n")
          .map(function (t, e) {
            var n = t.split(","),
              s = Object(J["a"])(n, 2),
              i = s[0],
              c = s[1],
              o = new Date(
                new Date() - parseInt(3600 * Math.random() * 1e3 * 12)
              ),
              r = o.getHours().toString().padStart(2, "0"),
              l = o.getMinutes().toString().padStart(2, "0"),
              d = [r, l].join(":"),
              u = a("b39a"),
              p = "\n    background: url("
                .concat(u, ") no-repeat 0 ")
                .concat(70 * -e, "px;\n    background-size: 47px 678px;");
            return { avatar: u, name: i, content: c, time: d, style: p };
          })),
      U = {
        name: "WechatPage",
        data: function () {
          return {
            showFloatTab: !1,
            messages: Q,
            tabs: [
              { name: "微信", icon: a("9a7b"), selected: !0 },
              { name: "通讯录", icon: a("1f4f"), selected: !1 },
              { name: "发现", icon: a("01bc"), selected: !1 },
              { name: "我", icon: a("0f62"), selected: !1 },
            ],
            floatTabs: [
              { name: "发起群聊", icon: a("5f66"), selected: !0 },
              { name: "添加朋友", icon: a("32a9"), selected: !1 },
              { name: "扫一扫", icon: a("0a0e"), selected: !1 },
              { name: "收付款", icon: a("755e"), selected: !1 },
              { name: "帮助与反馈", icon: a("eb0a"), selected: !1 },
            ],
          };
        },
        mounted: function () {
          console.log(this.messages);
        },
        methods: {
          scan: function () {
            var t = this;
            (this.showFloatTab = !1),
              setTimeout(function () {
                t.$router.push("./scan");
              }, 200);
          },
          gotoSetting: function () {
            this.$router.push("/setting");
          },
        },
      },
      Y = U,
      W = (a("5e44"), Object(u["a"])(Y, R, G, !1, null, "ae0ec51c", null)),
      K = W.exports,
      X = function () {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      tt = [
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticClass: "scan-page" }, [
            n("div", { staticClass: "content" }, [
              n("div", { staticClass: "video-container" }, [
                n("video", {
                  attrs: {
                    id: "video",
                    width: "480",
                    height: "640",
                    autoplay: "",
                  },
                }),
              ]),
              n("div", { staticClass: "top-content top-icons icon-group" }, [
                n("img", {
                  staticClass: "icon-button",
                  attrs: { src: a("bf37") },
                }),
                n("img", {
                  staticClass: "icon-button",
                  attrs: { src: a("f51c") },
                }),
              ]),
              n("div", { staticClass: "bottom-content" }, [
                n("div", { staticClass: "tip" }, [
                  t._v("扫二维码 / 条码 / 小程序码"),
                ]),
                n("div", { staticClass: "bottom-icons icon-group" }, [
                  n("img", {
                    staticClass: "icon-button",
                    attrs: { src: a("97a0") },
                  }),
                  n("img", {
                    staticClass: "icon-button",
                    attrs: { src: a("31fb") },
                  }),
                ]),
              ]),
            ]),
            n("div", { staticClass: "tab" }, [
              n("div", { staticClass: "tab-name" }, [t._v("扫码")]),
              n("div", { staticClass: "tab-name" }, [t._v("识物")]),
              n("div", { staticClass: "tab-name" }, [t._v("翻译")]),
            ]),
          ]);
        },
      ];
    function et() {
      var t =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : new HTMLVideoElement();
      return new Promise(function (e, a) {
        var n = function () {
          a();
        };
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          var s = {
            facingMode: { ideal: "environment" },
            audio: !1,
            video: { width: { ideal: 480 }, height: { ideal: 640 } },
          };
          navigator.mediaDevices
            .getUserMedia({ video: s })
            .then(function (a) {
              (t.srcObject = a),
                t.play(),
                t.addEventListener("loadedmetadata", function () {
                  e();
                });
            })
            .catch(function (t) {
              return n(t);
            });
        } else n();
      });
    }
    var at = {
        mounted: function () {
          var t = this,
            e = document.getElementById("video");
          et(e)
            .then(function () {
              setTimeout(function () {
                t.$router.replace("./home");
              }, 1e3);
            })
            .catch(function () {
              alert("打开摄像头出错！");
            });
        },
      },
      nt = at,
      st = (a("4d41"), Object(u["a"])(nt, X, tt, !1, null, "112b21a5", null)),
      it = st.exports,
      ct = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          { staticClass: "setting-page" },
          [
            a("app-bar", { attrs: { title: "设置" } }),
            a(
              "div",
              { staticClass: "page-content" },
              [
                a(
                  "md-list",
                  [
                    a("md-subheader", [t._v("登录页信息")]),
                    a(
                      "md-list-item",
                      [
                        a(
                          "md-field",
                          [
                            a("label", [t._v("入校提示信息")]),
                            a("md-input", {
                              model: {
                                value: t.enterText,
                                callback: function (e) {
                                  t.enterText = e;
                                },
                                expression: "enterText",
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    a(
                      "md-list-item",
                      [
                        a(
                          "md-field",
                          [
                            a("label", [t._v("出校校提示信息")]),
                            a("md-input", {
                              model: {
                                value: t.leaveText,
                                callback: function (e) {
                                  t.leaveText = e;
                                },
                                expression: "leaveText",
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    a(
                      "md-list-item",
                      [
                        a(
                          "md-field",
                          [
                            a("label", [t._v("身份类型")]),
                            a("md-input", {
                              model: {
                                value: t.personType,
                                callback: function (e) {
                                  t.personType = e;
                                },
                                expression: "personType",
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    a(
                      "md-list-item",
                      [
                        a(
                          "md-field",
                          [
                            a("label", [t._v("名字")]),
                            a("md-input", {
                              model: {
                                value: t.name,
                                callback: function (e) {
                                  t.name = e;
                                },
                                expression: "name",
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    a("md-divider"),
                    a("md-subheader", [t._v("其他设置")]),
                    a(
                      "md-list-item",
                      [
                        a("div", { staticClass: "md-list-item-text" }, [
                          a("span", [t._v("展示 AppBar")]),
                          a("span", [
                            t._v("如在微信内使用，则无需展示 AppBar"),
                          ]),
                        ]),
                        a("md-switch", {
                          model: {
                            value: t.showAppBar,
                            callback: function (e) {
                              t.showAppBar = e;
                            },
                            expression: "showAppBar",
                          },
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      ot = [],
      rt = a("3300"),
      lt = a("2791"),
      dt =
        (a("a6d8"),
        a("af46"),
        {
          enterText: "研究生用户，入校授权有效！",
          leaveText: "研究生用户，出校登记有效！",
          personType: "研究生（硕士）",
          name: "试着点我三次",
          showAppBar: !0,
        });
    function ut(t) {
      var e = { true: !0, false: !1 };
      return t in e ? e[t] : t;
    }
    var pt = {
        components: { AppBar: x },
        data: function () {
          return Object.keys(dt).reduce(function (t, e) {
            return Object(lt["a"])(
              Object(lt["a"])({}, t),
              {},
              Object(rt["a"])({}, e, "加载中")
            );
          }, {});
        },
        watch: Object.keys(dt).reduce(function (t, e) {
          return Object(lt["a"])(
            Object(lt["a"])({}, t),
            {},
            Object(rt["a"])({}, e, function (t) {
              localStorage.setItem(e, t), console.log("writing", e, t);
            })
          );
        }, {}),
        mounted: function () {
          var t = this;
          Object.keys(dt).forEach(function (e) {
            var a = localStorage.getItem(e);
            console.log("getting", e, a), (t[e] = null !== a ? ut(a) : dt[e]);
          });
        },
      },
      mt = pt,
      ft = Object(u["a"])(mt, ct, ot, !1, null, "118b44a9", null),
      vt = ft.exports,
      gt = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { staticClass: "sqcode-page" },
          [
            n("app-bar", { attrs: { title: "商丘疫情防控码" } }),
            n("img", { attrs: { src: a("4c4a") } }),
            n("div", { staticClass: "page-content" }, [
              n("div", { staticClass: "time" }, [t._v(t._s(t.date))]),
              n("img", { staticClass: "qr-code", attrs: { src: a("4557") } }),
              n("div", { staticClass: "tip" }, [t._v("谢谢配合 请通行!")]),
              n("div", { staticClass: "close-tip" }, [
                t._v("请点击左上方的×退出页面"),
              ]),
            ]),
          ],
          1
        );
      },
      bt = [],
      ht = {
        components: { AppBar: x },
        data: function () {
          var t = new Date(),
            e = (t.getMonth() + 1).toString().padStart(2, "0"),
            a = t.getDate().toString().padStart(2, "0"),
            n = t.getHours().toString().padStart(2, "0"),
            s = t.getMinutes().toString().padStart(2, "0"),
            i = t.getSeconds().toString().padStart(2, "0");
          return {
            date: "2022-"
              .concat(e, "-")
              .concat(a, " ")
              .concat(n, ":")
              .concat(s, ":")
              .concat(i),
          };
        },
        mounted: function () {
          document.title = "商丘疫情防控码";
        },
      },
      Ct = ht,
      _t = (a("2a2a"), Object(u["a"])(Ct, gt, bt, !1, null, "d2e15800", null)),
      xt = _t.exports,
      wt = a("08e7");
    Object(wt["a"])("".concat("", "service-worker.js"), {
      ready: function () {
        console.log(
          "App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"
        );
      },
      registered: function () {
        console.log("Service worker has been registered.");
      },
      cached: function () {
        console.log("Content has been cached for offline use.");
      },
      updatefound: function () {
        console.log("New content is downloading.");
      },
      updated: function () {
        console.log("New content is available; please refresh.");
      },
      offline: function () {
        console.log(
          "No internet connection found. App is running in offline mode."
        );
      },
      error: function (t) {
        console.error("Error during service worker registration:", t);
      },
    }),
      (n["default"].config.productionTip = !1),
      n["default"].use(c.a),
      n["default"].use(s["a"]);
    var yt = new s["a"]({
      mode: "hash",
      base: "Real-Qingshui-Pass",
      routes: [
        { path: "/login", component: q },
        { path: "/home", component: S },
        { path: "/qr", component: z },
        { path: "/rule", component: Z },
        { path: "/", component: K },
        { path: "/scan", component: it },
        { path: "/setting", component: vt },
        { path: "/sq", component: xt },
      ],
    });
    new n["default"]({
      router: yt,
      render: function (t) {
        return t(m);
      },
    }).$mount("#app");
  },
  "5c0b": function (t, e, a) {
    "use strict";
    a("2b69");
  },
  "5e44": function (t, e, a) {
    "use strict";
    a("1565");
  },
  "5f66": function (t, e, a) {
    t.exports = a.p + "img/chat.2c994b3b.svg";
  },
  "5f78": function (t, e, a) {
    "use strict";
    a("e61c");
  },
  6585: function (t, e, a) {
    t.exports = a.p + "img/qr.4c828820.jpg";
  },
  "755e": function (t, e, a) {
    t.exports = a.p + "img/pay.43d89c3f.svg";
  },
  8105: function (t, e, a) {},
  "97a0": function (t, e, a) {
    t.exports = a.p + "img/qr-icon.39629214.svg";
  },
  "9a7b": function (t, e, a) {
    t.exports = a.p + "img/chat-green.48174bc4.svg";
  },
  a008: function (t, e, a) {
    "use strict";
    a("cd4b");
  },
  b39a: function (t, e, a) {
    t.exports = a.p + "img/avatars.64b50ba6.jpg";
  },
  bf37: function (t, e, a) {
    t.exports = a.p + "img/close.091a88e3.svg";
  },
  cd4b: function (t, e, a) {},
  cf05: function (t, e, a) {
    t.exports = a.p + "img/logo.0ed7fb73.png";
  },
  e61c: function (t, e, a) {},
  eb0a: function (t, e, a) {
    t.exports = a.p + "img/mail-fill.e33656e3.svg";
  },
  eef4: function (t, e, a) {
    t.exports = a.p + "img/add.ed66e07e.svg";
  },
  f3b2: function (t, e, a) {},
  f51c: function (t, e, a) {
    t.exports = a.p + "img/more.4ba4c92b.svg";
  },
  f989: function (t, e, a) {},
});
//# sourceMappingURL=app.dd7a2c05.js.map
