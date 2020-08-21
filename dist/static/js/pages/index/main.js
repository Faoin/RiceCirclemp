global.webpackJsonp([8],{

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(96);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

// 添加 config json
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    // 这儿添加要用的小程序组件
    usingComponents: {
      'i-row': '../../static/dist/row/index',
      'i-col': '../../static/dist/col/index',
      'i-button': '../../static/dist/button/index',
      'i-input': '../../static/dist/input/index',
      'i-tab-bar': '../../static/dist/tab-bar/index',
      'i-tab-bar-item': '../../static/dist/tab-bar-item/index',
      'i-divider': '../../static/dist/divider/index',
      'i-card': '../../static/dist/card/index',
      'i-grid': '../../static/dist/grid/index',
      'i-grid-item': '../../static/dist/grid-item/index',
      'i-grid-icon': '../../static/dist/grid-icon/index',
      'i-grid-label': '../../static/dist/grid-label/index',
      'i-spin': '../../static/dist/spin/index',
      'i-icon': '../../static/dist/icon/index',
      'i-load-more': '../../static/dist/load-more/index'
    }
  }
});

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_29881e2c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(99);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(97)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-29881e2c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_29881e2c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-29881e2c", Component.options)
  } else {
    hotAPI.reload("data-v-29881e2c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 97:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 98:
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

// let Fly = require('flyio/dist/npm/wx')
// let fly = new Fly()

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      loadingShow: true,
      merchant: [{
        logo: '/static/img/logo001.jpg',
        logoalt: '',
        title: '第一食堂',
        sales: '月销99单',
        distribution: '10元起送|免配送费',
        less: '满20-2，满40-8，满60-12',
        fold: '8.8折',
        shopping: [{
          shoopingImg: '/static/img/qjcr.jpg',
          shoopimgAlt: '',
          shoopingTitle: '青椒炒肉饭',
          shoopingMa: '5',
          shoopingMb: '10'
        }, {
          shoopingImg: '/static/img/ytf.jpg',
          shoopimgAlt: '',
          shoopingTitle: '鸭腿饭',
          shoopingMa: '8',
          shoopingMb: '12'
        }, {
          shoopingImg: '/static/img/dhs.jpg',
          shoopimgAlt: '',
          shoopingTitle: '蛋黄酥',
          shoopingMa: '10',
          shoopingMb: '15'
        }]
      }, {
        logo: '/static/img/youtube.jpg',
        logoalt: '',
        title: '小柚私厨',
        sales: '月销9999单',
        distribution: '10元起送|免配送费',
        less: '满20-2，满40-8，满60-12',
        fold: '8.8折',
        shopping: [{
          shoopingImg: '/static/img/szsx2.jpg',
          shoopimgAlt: '',
          shoopingTitle: '水煮三鲜',
          shoopingMa: '50',
          shoopingMb: '100'
        }, {
          shoopingImg: '/static/img/ymdx2.jpg',
          shoopimgAlt: '',
          shoopingTitle: '油闷大虾',
          shoopingMa: '20',
          shoopingMb: '50'
        }, {
          shoopingImg: '/static/img/dhs.jpg',
          shoopimgAlt: '',
          shoopingTitle: '蛋黄酥',
          shoopingMa: '10',
          shoopingMb: '15'
        }]
      }]
    };
  }

  // created () {
  //   this.getMerchant()
  // },
  // methods: {
  //   getMerchant () {
  //     let _this = this
  //     fly.get('https://easy-mock.com/mock/5b69315d99b4c7086b576bf0/merchant')
  //       .then(function (response) {
  //         if (response.status === 200) {
  //           let merchant = response.data
  //           console.log(merchant.data)
  //           _this.loadingShow = false
  //           _this.merchant = merchant.data
  //         }
  //       })
  //       .catch(function (err) {
  //         _this.loadingShow = true
  //         console.log(err)
  //       })
  //   },
  //   testCommodity () {
  //     wx.navigateTo({
  //       url: '/pages/address/main'
  //     })
  //   }
  // }

});

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "headSearch"
  }, [_c('div', {
    staticClass: "headSearchInput",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.goCommodity
    }
  }, [_c('input', {
    staticClass: "headSeachISearch",
    attrs: {
      "type": "search",
      "placeholder": "请输入商品名称"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "banner",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.testCommodity
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/img/banner1.png",
      "alt": "banner"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "main"
  }, [_vm._l((_vm.merchant), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "shop"
    }, [_c('div', {
      staticClass: "shopContent"
    }, [_c('div', {
      staticClass: "shopContentTitle clearflx"
    }, [_c('a', {
      attrs: {
        "href": "/pages/commodity/main"
      }
    }, [_c('div', {
      staticClass: "sCTImg"
    }, [_c('img', {
      attrs: {
        "src": item.logo,
        "alt": item.logoalt
      }
    })])]), _vm._v(" "), _c('div', {
      staticClass: "sCTDetail"
    }, [_c('div', {
      staticClass: "sCTDetailTitle"
    }, [_c('div', {
      staticClass: "sCTDetailTitleicon"
    }, [_vm._v("店铺")]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.title))])], 1), _vm._v(" "), _c('div', {
      staticClass: "sCTDetailpj"
    }, [_vm._v("\n              " + _vm._s(item.sales) + "\n            ")]), _vm._v(" "), _c('div', {
      staticClass: "sCTDetailm"
    }, [_vm._v("\n              " + _vm._s(item.distribution) + "\n            ")])])]), _vm._v(" "), _c('div', {
      staticClass: "shopLine"
    }), _vm._v(" "), _c('div', {
      staticClass: "shopActivity clearflx"
    }, [_c('div', {
      staticClass: "shopActivityicon clearflx"
    }, [_c('div', {
      staticClass: "shopActivityiconJ"
    }, [_vm._v("减")]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.less))])], 1), _vm._v(" "), _c('div', {
      staticClass: "shopActivityicon clearflx"
    }, [_c('div', {
      staticClass: "shopActivityiconJ"
    }, [_vm._v("折")]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.fold))])], 1)])])])
  }), _vm._v(" "), _c('div', [_c('i-load-more', {
    attrs: {
      "tip": "暂无数据",
      "loading": _vm.loadingShow,
      "mpcomid": '0'
    }
  })], 1)], 2)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-29881e2c", esExports)
  }
}

/***/ })

},[95]);
//# sourceMappingURL=main.js.map