<script>
export default {
  data () {
    return {
      openId: []
    }
  },
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    console.log('app created and cache logs by setStorageSync')
  },
  onLaunch () {
    console.log('on launch')
    // 从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    let _this = this
    wx.login({
      success: res => {
        // this.globalData.userInfo = res.code
        // console.log('挂载数据:' + this.globalData.userInfo)
        // this.$store = res.code
        // console.log('CODE:' + this.$store)
        // console.log(res)
        // console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          console.log('后台验证用户')
          console.log(res.code)
          // 判断用户是否已存在系统
          wx.request({
            url: 'http://localhost:8088/system/admin_user/getUserById',
            data: ({
              code: '' + res.code
            }),
            method: 'POST',
            header: {
              'content-type': 'application/json;charset=utf-8'
            },
            success: function (data) {
              let _openId = data.data.msg
              _this.openId = _openId
              // this.globalData.openid = _this.openId
              if (_openId === null) {
                wx.navigateTo({
                  url: '/pages/login/main'
                })
              }
            }
          })
        } else {
          console.log('Failed to obtain user logon state!' + res.errMsg)
        }
      }
    })
  }
}
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  background: #f5f5f5;
}

/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
