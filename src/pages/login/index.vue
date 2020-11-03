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
  
      <button class='bottom' type='primary' open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">
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
  methods: {
    getPhoneNumber: function (e) {
      console.log(e)
      console.log(e.target.errMsg)
      console.log(e.target.encryptedData)
      console.log(e.target.iv)
      wx.login({
        success: res => {
          console.log(res.code)
          wx.request({
            url: 'http://localhost:8088/system/admin_user/getUserPhoneBymp',
            data: JSON.stringify({
              'encryptedData': '' + e.target.encryptedData,
              'iv': '' + e.target.iv,
              'code': '' + res.code
            }),
            method: 'POST',
            header: {
              'content-type': 'application/json;charset=utf-8'
            },
            success: function (res) {
              console.log(res)
              if (res.data.msg === 'AjaxSuccess') {
                wx.switchTab({
                  url: '/pages/index/main'
                })
              } else if (res.data.msg === 'AjaxError') {
                console.log('用户未授权！跳转到pages/login/main')
                wx.navigateTo({
                  url: '/pages/login/main'
                })
              }
            }
          })
        }
      })
    },
    bindGetUserInfo (e) {
      // 点击授权按钮后跳转回主页面
      wx.login({
        success: res1 => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          if (res1.code) {
          // 判断用户是否已授权
            wx.getSetting({
              success: function (res2) {
                if (res2.authSetting['scope.userInfo']) {
                // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                  wx.getUserInfo({
                    success: function (res3) {
                      var userNick = res3.userInfo.nickName
                      wx.request({
                        url: 'http://localhost:8088/system/admin_user/getCode',
                        data: JSON.stringify({
                          code: '' + res1.code,
                          userNick: userNick
                        }),
                        method: 'POST',
                        header: {
                          'content-type': 'application/json;charset=utf-8'
                        },
                        success: function (data) {
                          wx.getUserInfo({
                            success: function (res) {
                              console.log(res.userInfo)
                            }
                          })
                        }
                      })
                    }
                  })
                } else {
                  console.log('用户未授权！跳转到pages/login/main')
                  wx.navigateTo({
                    url: '/pages/login/main'
                  })
                }
              }
            })
          } else {
            console.log('Failed to obtain user logon state!' + res1.errMsg)
          }
        }
      })
      wx.navigateBack({
        url: '../index/main'
      })
    }
  }
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