<template>
  <div>    
    <view>
      <view class='header'>
          <image src='/static/img/wx_login.png'></image>
      </view>
  
      <view class='content'>
          <view>饭圈申请获取以下权限</view>
          <text>获得你的公开信息(昵称，头像等)</text>
      </view>
  
      <button class='bottom' type='primary' lang="zh_CN" open-type="getUserInfo" bindgetuserinfo='login'>
          授权登录
      </button>
    </view>
    <!-- <view>请升级微信版本</view> -->
  </div>
</template>

<script>
export default {

  data () {
    // return {
    //   /* 判断小程序的API，回调，参数，组件等是否在当前版本可用。 */
    //   canIUse: wx.canIUse('button.open-type.getUserInfo')
    // }
  },
  login (e) {
    console.log('000')
  },
  method: {
    getUser () {
      console.log('进入GetUser')
    },
    login (e) {
      console.log('点击bindGetUserInfo')
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
        })
      } else {
      /* 用户按了拒绝按钮 */
        wx.showModal({
          title: '警告',
          content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
          showCancel: false,
          confirmText: '返回授权',
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击了[返回授权]')
            }
          }
        })
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
}
</script>


<style>
.header {
  margin: 90rpx 0 90rpx 50rpx;
  border-bottom: 1px solid #ccc;
  text-align: center;
  width: 650rpx;
  height: 300rpx;
  line-height: 450rpx;
}

.header image {
  width: 200rpx;
  height: 200rpx;
}

.content {
  margin-left: 50rpx;
  margin-bottom: 90rpx;
}

.content text {
  display: block;
  color: #9d9d9d;
  margin-top: 40rpx;
}

.bottom {
  border-radius: 80rpx;
  margin: 70rpx 50rpx;
  font-size: 35rpx;
}
</style>