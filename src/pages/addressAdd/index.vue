<template>
  <div class="addressAddContainer">

    <div class="addressAddContent">

      <div class="addressAddContentList">
        <div class="addressAddContentListTitle">联系人</div>
        <input class="addressAddContentListInput" type="text" v-model="addressUser.userName" autofocus placeholder="名字">
      </div>

      <div class="addressAddContentList">
        <div class="addressAddContentListTitle">联系电话</div>
        <input class="addressAddContentListInput" type="number" v-model="addressUser.mobile" placeholder="请输入手机号">
      </div>

      <div class="addressAddContentList">
        <div class="addressAddContentListTitle">详细地址</div>
        <textarea class="addressAddContentListInput" type="text" v-model="addressUser.address" maxlength="30" placeholder="请输入详细地址(最多50字)"></textarea>
      </div>




    </div>

    <p v-if="messageStatus" class="message">您还没有填完信息哦~</p>


    <div class="addressAddButton" @click="addressAddButton">保存地址</div>

  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
export default {
    computed: {
      ...mapState([
        'userAddres'
      ])
    },
    components: {
    },
    data () {
      return {
        addressUser: {
          userName: '',
          mobile: '',
          address: ''
        },

        messageStatus: false
      }
    },
    onShow: function (option) {
      this.addressClear()
    },
    methods: {
      /**
       * 单击保存 保存信息到全局状态
       */
      addressAddButton () {
        // this.$store.dispatch('setUserAddres', this.addressUser)
        // this.addressClear()
        // 根据用户的OpenId 新增收货地址
        // let _this = this
        wx.login({
          complete: (res) => {
            wx.request({
              url: 'http://localhost:8088/system/receiver/addUserReceiverAddrByOpenId',
              data: JSON.stringify({
                code: '' + res.code,
                userName: '' + this.addressUser.userName,
                mobile: '' + this.addressUser.mobile,
                address: '' + this.addressUser.address
              }),
              method: 'POST',
              header: {
                'content-type': 'application/json;charset=utf-8'
              },
              success: function (data) {
                console.log(data)
              }
            })
          }
        })
        this.addressToPage()
        console.log(this.userAddres)
      },
      /**
       * 清除内容
       */
      addressClear () {
        this.addressUser.userName = ''
        this.addressUser.mobile = ''
        this.addressUser.address = ''
      },
      /**
       * 页面跳转
       */
      addressToPage () {
        let url = '/pages/address/main'
        setTimeout(function () {
          wx.redirectTo({
            url,
            success: function () {
            },
            fail: function () {
              wx.navigateBack()
            }
          })
        }, 1000)
      }
    }
}
</script>

<style lang="less" scoped>
  .addressAddContainer{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #f5f5f5;
  }
  .addressAddContent{
    background: #fff;
  }
.addressAddContentList{
  display:flex;
  height:80rpx;
  line-height:80rpx;
  border-bottom: 1px solid #eee;
  .addressAddContentListTitle{
    color:#495060;
    min-width:130rpx;
    padding-right:20rpx;
    font-size:14px;
    padding-left:20px;

  }
  .addressAddContentListInput{
    flex:1;
    line-height:1.6;
    padding:4px 0;
    min-height:22px;
    height:auto;
    font-size:14px;
    color: #495060;
    caret-color: #495060;
  }
}
.message{
  width: 100%;
  height: 60rpx;
  line-height: 60rpx;
  text-align: center;
  color: #0097ff;
  font-size: 14px;
}

  .addressAddButton{
    width: 690rpx;
    height: 88rpx;
    text-align: center;
    background: #0097ff;
    color: #fff;
    line-height: 88rpx;
    font-size: 16px;
    font-weight: 500;
    border-radius: 3rpx;
    margin-top: 100rpx;
    margin-left: auto;
    margin-right: auto;
  }

</style>
