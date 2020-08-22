import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()
export default {
  config: {
    navigationBarTitleText: '授权登陆'
  },
  data: {
  },
  login (e) {
    console.log('进入bindGetUserInfo')
    // var userinfo = JSON.stringify(e)
    // console.log(userinfo)
  }
}
