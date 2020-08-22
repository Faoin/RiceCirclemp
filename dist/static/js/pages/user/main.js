global.webpackJsonp([4],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(136);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    // 这儿添加要用的小程序组件
    usingComponents: {
      'i-cell-group': '../../static/dist/cell-group/index',
      'i-cell': '../../static/dist/cell/index',
      'i-icon': '../../static/dist/icon/index'
    }
  }
});

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_30cc2e09_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(139);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(137)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-30cc2e09"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_30cc2e09_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\user\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-30cc2e09", Component.options)
  } else {
    hotAPI.reload("data-v-30cc2e09", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 137:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 138:
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
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {};
  },

  methosds: {
    toOrderPages: function toOrderPages() {}
  }
});

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "userContainer"
  }, [_c('div', {
    staticClass: "user"
  }, [_c('div', {
    staticClass: "userImg"
  }, [_c('open-data', {
    attrs: {
      "type": "userAvatarUrl",
      "mpcomid": '0'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "userD"
  }, [_c('p', {
    staticClass: "userName"
  }, [_c('open-data', {
    attrs: {
      "type": "userNickName",
      "mpcomid": '1'
    }
  })], 1)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "usermenu"
  }, [_c('i-cell-group', {
    attrs: {
      "mpcomid": '12'
    }
  }, [_c('i-cell', {
    attrs: {
      "title": "历史订单",
      "is-link": "true",
      "url": "/pages/order/main",
      "link-type": "switchTab",
      "mpcomid": '3'
    }
  }, [_c('i-icon', {
    attrs: {
      "type": "document_fill",
      "color": "#0097ff",
      "size": "18",
      "mpcomid": '2'
    },
    slot: "icon"
  })], 1), _vm._v(" "), _c('i-cell', {
    attrs: {
      "title": "收货地址",
      "is-link": "true",
      "url": "/pages/address/main",
      "mpcomid": '5'
    }
  }, [_c('i-icon', {
    attrs: {
      "type": "coordinates_fill",
      "color": "#0097ff",
      "size": "18",
      "mpcomid": '4'
    },
    slot: "icon"
  })], 1), _vm._v(" "), _c('i-cell', {
    attrs: {
      "title": "联系我们",
      "is-link": "true",
      "url": "/pages/contactus/main",
      "mpcomid": '7'
    }
  }, [_c('i-icon', {
    attrs: {
      "type": "group_fill",
      "color": "#0097ff",
      "size": "18",
      "mpcomid": '6'
    },
    slot: "icon"
  })], 1), _vm._v(" "), _c('i-cell', {
    attrs: {
      "title": "联系商家",
      "is-link": "true",
      "url": "/pages/contactmerchant/main",
      "mpcomid": '9'
    }
  }, [_c('i-icon', {
    attrs: {
      "type": "homepage_fill",
      "color": "#0097ff",
      "size": "18",
      "mpcomid": '8'
    },
    slot: "icon"
  })], 1), _vm._v(" "), _c('i-cell', {
    attrs: {
      "title": "意见反馈",
      "is-link": "true",
      "url": "/pages/feedback/main",
      "mpcomid": '11'
    }
  }, [_c('i-icon', {
    attrs: {
      "type": "like_fill",
      "color": "#0097ff",
      "size": "18",
      "mpcomid": '10'
    },
    slot: "icon"
  })], 1)], 1)], 1), _vm._v(" "), _vm._m(0)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "userLogIn"
  }, [_c('a', [_vm._v("退出登陆")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-30cc2e09", esExports)
  }
}

/***/ })

},[135]);
//# sourceMappingURL=main.js.map