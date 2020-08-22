global.webpackJsonp([8],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_index__ = __webpack_require__(22);





__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_2__store_index__["a" /* default */];

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/main', 'pages/order/main', 'pages/shopp/main', 'pages/user/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#0097ff',
      navigationBarTitleText: '饭圈',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      color: '#6f6f6f',
      selectedColor: '#18a3ff',
      backgroundColor: '#ffffff',
      borderStyle: 'black',
      list: [{
        pagePath: 'pages/index/main',
        iconPath: 'static/img/wm.png',
        selectedIconPath: 'static/img/wms.png',
        text: '外卖'
      }, {
        pagePath: 'pages/order/main',
        iconPath: 'static/img/dd.png',
        selectedIconPath: 'static/img/dds.png',
        text: '订单'
      },
      // {
      //   pagePath: 'pages/shopp/main',
      //   iconPath: 'static/img/tj1.png',
      //   selectedIconPath: 'static/img/tj1s.png',
      //   text: '推荐'
      // },
      {
        pagePath: 'pages/user/main',
        iconPath: 'static/img/user.png',
        selectedIconPath: 'static/img/users.png',
        text: '我的'
      }]
    }
  }
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(21);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(18)
  __webpack_require__(20)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d18db43e", Component.options)
  } else {
    hotAPI.reload("data-v-d18db43e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */,
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */
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

/* harmony default export */ __webpack_exports__["a"] = ({
  created: function created() {
    // 调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);

    console.log('app created and cache logs by setStorageSync');
  },
  onLaunch: function onLaunch() {
    console.log('on launch');
    // 从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);

    // 登录
    wx.login({
      success: function success(res) {
        console.log(res);
        console.log(res.code);
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          // wx.request({
          //   url: 'http://localhost:8081/wxcn/getOpenId',
          //   data: {
          //     'code': res.code
          //   },
          //   method: 'POST',
          //   header: {
          //     'content-type': 'application/json;charset=utf-8'
          //   },
          //   success: function (data) {
          //     console.log(data)
          //   }
          // })
        } else {
          console.log('Failed to obtain user logon state!' + res.errMsg);
        }
      }
    });
  }
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex_persistedstate__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);


// import vuetron from 'vuetron '



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  plugins: [
  // 保持会话持久
  Object(__WEBPACK_IMPORTED_MODULE_2_vuex_persistedstate__["a" /* default */])({
    storage: {
      getItem: function getItem(key) {
        return wx.getStorageSync(key);
      },
      // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
      setItem: function setItem(key, value) {
        return wx.getStorageSync(key, value);
      },
      removeItem: function removeItem(key) {
        return wx.clearStorageSync(key);
      }
    }
  })],
  state: {
    /**
     * 商家名字
    commdityShoppingName: '',
    /**
     * 商家商品
     */
    commdityShopping: [],
    /**
     * 商家订单
     */
    commdityOrder: [],
    /**
     * 用户地址 后期使用数据库存储
     */
    userAddres: [],
    userOrderAddres: 0,
    // 意见反馈
    feedbackList: []
  },

  mutations: {
    /**
     * 设置商家名称
     * @param state
     * @param commdityShoppingName
     */
    setCommdityShoppingName: function setCommdityShoppingName(state, commdityShoppingName) {
      state.commdityShoppingName = commdityShoppingName;
    },

    /**
     * 设置商家购物车商品
     * @param state
     * @param commdityShopping
     */
    setCommdityShopping: function setCommdityShopping(state, commdityShopping) {
      state.commdityShopping.push(commdityShopping);
    },

    /**
     * 商家购物车商品添加
     * @param state
     * @param commdityShoppingIndex
     */
    setCommdityShoppingAdd: function setCommdityShoppingAdd(state, commdityShoppingIndex) {
      state.commdityShopping[commdityShoppingIndex].commoditySum++;
    },

    /**
     * 商家购物车减少
     * @param state
     * @param commdityShoppingIndex
     */
    setCommdityShoppingLess: function setCommdityShoppingLess(state, commdityShoppingIndex) {
      if (state.commdityShopping[commdityShoppingIndex].commoditySum >= 1) {
        state.commdityShopping[commdityShoppingIndex].commoditySum--;
        if (state.commdityShopping[commdityShoppingIndex].commoditySum === 0) {
          __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.pullAt(state.commdityShopping, commdityShoppingIndex);
        }
      }
    },

    /**
     * 清空商家购物车
     * @param state
     */
    setCommdityShoppingClear: function setCommdityShoppingClear(state) {
      state.commdityShopping = [];
    },

    /**
     * 将购物车的内容变成订单
     * @param state
     * @param commdityOrder
     */
    setCommdityOrder: function setCommdityOrder(state, commdityOrder) {
      var commdityOrderClone = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.clone(commdityOrder);
      state.commdityOrder.push(commdityOrderClone);
    },

    /**
     * 设置用户收货地址
     * @param state
     * @param userAddres
     */
    setUserAddres: function setUserAddres(state, userAddres) {
      var userAddresClone = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.clone(userAddres);
      state.userAddres.push(userAddresClone);
    },

    /**
     * 设置订单收货地址
     * @param state
     * @param userOrderAddres
     */
    setUserOrderAddres: function setUserOrderAddres(state, userOrderAddres) {
      state.userOrderAddres = userOrderAddres;
    },

    /**
     * 更新用户收货地址
     * @param state
     * @param userAddress
     */
    updateUserAddress: function updateUserAddress(state, userAddress) {
      state.userAddres[userAddress.index].addressName = userAddress.addressName;
      state.userAddres[userAddress.index].addressPhone = userAddress.addressPhone;
      state.userAddres[userAddress.index].addressDetail = userAddress.addressDetail;
    },

    /**
     * 删除用户收货地址
     * @param state
     * @param userAddressIndex
     */
    delUserAddress: function delUserAddress(state, userAddressIndex) {
      __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.pullAt(state.userAddres, userAddressIndex);
    },

    /**
     * 删除用户订单
     * @param state
     * @param commdityOrderIndex
     */
    delCommdityOrder: function delCommdityOrder(state, commdityOrderIndex) {
      __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.pullAt(state.commdityOrder, commdityOrderIndex);
    },

    /**
     * 增加意见反馈
     * @param state
     * @param feedbackList
     */
    addFeedbackList: function addFeedbackList(state, feedbackList) {
      var feedbackListClone = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.clone(feedbackList);
      state.feedbackList.push(feedbackListClone);
    }
  },
  /**
   * 下面调用上面的方法
   */
  actions: {
    setCommdityShoppingName: function setCommdityShoppingName(_ref, commdityShoppingName) {
      var commit = _ref.commit;

      commit('setCommdityShoppingName', commdityShoppingName);
    },
    setCommdityShopping: function setCommdityShopping(_ref2, commdityShopping) {
      var commit = _ref2.commit;

      commit('setCommdityShopping', commdityShopping);
    },
    setCommdityShoppingAdd: function setCommdityShoppingAdd(_ref3, commdityShoppingIndex) {
      var commit = _ref3.commit;

      commit('setCommdityShoppingAdd', commdityShoppingIndex);
    },
    setCommdityShoppingLess: function setCommdityShoppingLess(_ref4, commdityShoppingIndex) {
      var commit = _ref4.commit;

      commit('setCommdityShoppingLess', commdityShoppingIndex);
    },
    setCommdityShoppingClear: function setCommdityShoppingClear(_ref5) {
      var commit = _ref5.commit;

      commit('setCommdityShoppingClear');
    },
    setCommdityOrder: function setCommdityOrder(_ref6, commdityOrder) {
      var commit = _ref6.commit;

      commit('setCommdityOrder', commdityOrder);
    },
    setUserAddres: function setUserAddres(_ref7, userAddres) {
      var commit = _ref7.commit;

      commit('setUserAddres', userAddres);
    },
    setUserOrderAddres: function setUserOrderAddres(_ref8, userOrderAddres) {
      var commit = _ref8.commit;

      commit('setUserOrderAddres', userOrderAddres);
    },
    updateUserAddress: function updateUserAddress(_ref9, userAddress) {
      var commit = _ref9.commit;

      commit('updateUserAddress', userAddress);
    },
    delUserAddress: function delUserAddress(_ref10, userAddressIndex) {
      var commit = _ref10.commit;

      commit('delUserAddress', userAddressIndex);
    },
    delCommdityOrder: function delCommdityOrder(_ref11, commdityOrderIndex) {
      var commit = _ref11.commit;

      commit('delCommdityOrder', commdityOrderIndex);
    },
    addFeedbackList: function addFeedbackList(_ref12, _addFeedbackList) {
      var commit = _ref12.commit;

      commit('addFeedbackList', _addFeedbackList);
    }
  }
}));

/***/ })
],[16]);
//# sourceMappingURL=app.js.map