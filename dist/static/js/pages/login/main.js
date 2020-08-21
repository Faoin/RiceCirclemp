global.webpackJsonp([7],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(101);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '授权登陆'
  },
  data: {},
  login: function login(e) {
    console.log('进入bindGetUserInfo');
    // var userinfo = JSON.stringify(e)
    // console.log(userinfo)
  }
});

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_17e6b27e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(104);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(102)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_17e6b27e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\login\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-17e6b27e", Component.options)
  } else {
    hotAPI.reload("data-v-17e6b27e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 102:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    // return {
    //   /* 判断小程序的API，回调，参数，组件等是否在当前版本可用。 */
    //   canIUse: wx.canIUse('button.open-type.getUserInfo')
    // }
  },
  login: function login(e) {
    console.log('000');
  },

  method: {
    getUser: function getUser() {
      console.log('进入GetUser');
    },
    login: function login(e) {
      console.log('点击bindGetUserInfo');
      if (e.detail.userInfo) {
        /* 用户按了允许授权按钮 */
        // var that = this
        /* 插入登录的用户的相关信息到数据库 */
        // wx.request({
        //   url: getApp().globalData.urlPath + 'hstc_interface/insert_user',
        //   data: {
        //     openid: getApp().globalData.openid,
        //     nickName: e.detail.userInfo.nickName,
        //     avatarUrl: e.detail.userInfo.avatarUrl,
        //     province: e.detail.userInfo.province,
        //     city: e.detail.userInfo.city
        //   },
        //   header: {
        //     'content-type': 'application/json'
        //   },
        //   success: function (res) {
        //     /* 从数据库获取用户信息 */
        //     that.queryUsreInfo()
        //     console.log('插入小程序登录用户信息成功！')
        //   }
        // })
        /* 授权成功后，跳转进入小程序首页 */
        wx.navigateTo({
          url: '../index/index'
        });
      } else {
        /* 用户按了拒绝按钮 */
        wx.showModal({
          title: '警告',
          content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
          showCancel: false,
          confirmText: '返回授权',
          success: function success(res) {
            if (res.confirm) {
              console.log('用户点击了[返回授权]');
            }
          }
        });
      }
    }
  }
  // onLoad () {
  //   // var that = this
  //   /*  查看是否授权 */
  //   wx.getSetting({
  //     success: function (res) {
  //       if (res.authSetting['scope.userInfo']) {
  //         wx.getUserInfo({
  //           success: function (res) {
  //             console.log('1111')
  //             console.log(getApp().globalData.openid)
  //             /* 从数据库获取用户信息 */
  //             // that.queryUsreInfo()
  //             // wx.request({
  //             //   url: getApp().globalData.urlPath + 'hstc_interface/queryByOpenid',
  //             //   data: {
  //             //     openid: getApp().globalData.openid
  //             //   },
  //             //   header: {
  //             //     'content-type': 'application/json'
  //             //   },
  //             //   success: function (res) {
  //             //     console.log(res.data)
  //             //     getApp().globalData.userInfo = res.data
  //             //   }
  //             // })
  //             /* 用户已经授权过 */
  //             wx.switchTab({
  //               url: '../index/main'
  //             })
  //           }
  //         })
  //       }
  //     }
  //   })
  // },
  // queryUsreInfo: function () {
  //   /*  获取用户信息接口 */
  //   wx.request({
  //     url: getApp().globalData.urlPath + 'hstc_interface/queryByOpenid',
  //     data: {
  //       openid: getApp().globalData.openid
  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     },
  //     success: function (res) {
  //       console.log(res.data)
  //       getApp().globalData.userInfo = res.data
  //     }
  //   })
  // },
});

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('view', [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('button', {
    staticClass: "bottom",
    attrs: {
      "type": "primary",
      "lang": "zh_CN",
      "open-type": "getUserInfo",
      "bindgetuserinfo": "login"
    }
  }, [_vm._v("\n        授权登录\n    ")])], 1)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "header"
  }, [_c('image', {
    attrs: {
      "src": "/static/img/wx_login.png"
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "content"
  }, [_c('view', [_vm._v("饭圈申请获取以下权限")]), _vm._v(" "), _c('text', [_vm._v("获得你的公开信息(昵称，头像等)")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-17e6b27e", esExports)
  }
}

/***/ })

},[100]);
//# sourceMappingURL=main.js.map