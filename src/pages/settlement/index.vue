<template>
<div class="settlementContainer">
  <div class="settlementHeader">
    <div class="settlementHeaderAddress">
      <p class="settlementHeaderAddressD">
        订单配送至:
      </p>
      <p class="settlementHeaderAddressA" @click="setUserOrderAddresTitle">

        {{ setUserOrderAddres.userName===null ? '请选择收货地址>' :  [setUserOrderAddres.userName,setUserOrderAddres.mobile,setUserOrderAddres.address] }}



      </p>
    </div>

  </div>

  <div class="settlementMain">
    <i-cell-group>
      <i-cell :title="commdityShoppingName" ></i-cell>
      <i-cell
        v-for="(item, index) in commdityShopping"
        :key="index"
        :title="item.commodityName"
        :value=" '￥' + (item.commodityMoney) + ' 共' + (item.commoditySum) + '件' "></i-cell>
      <i-cell title="配送费" :value="  commdityRealSumPrice < 10 ? 1 : 0  " ></i-cell>
      <!-- <i-cell title="优惠金额 " :value="randomSum" ></i-cell> -->

    </i-cell-group>
  </div>

  <div class="settlementFooter">
    <div class="settlementFooterL">
      <p class="settlementFooterLM">
        <span class="settlementFooterLMSum">实际支付金额：{{commditySumPriceYH}}元</span>
        <!-- <span class="settlementFooterLMH">|</span>
        <span class="settlementFooterLMYH">已优惠{{randomSum}}元</span> -->
      </p>
    </div>
    <div class="settlementFooterR" @click="pay">
      去支付
    </div>
  </div>
  <pay v-if="payShow" @closePayFull="closePayFull"></pay>

  <div class="tipsMessage" v-if="tipsMessage.status">
    {{tipsMessage.message}}
  </div>

  <div style="height: 100rpx"></div>
</div>
</template>

<script>
  import _ from 'lodash'
  import pay from '@/components/pay'
  import {
    mapState
  } from 'vuex'
export default {
    components: {
      pay
    },
    computed: {
      ...mapState([
        'commdityShoppingName',
        'commdityShopping',
        'commdityOrder',
        'userAddres',
        'userOrderAddres'
      ]),
      // 未加配送费价格
      commdityRealSumPrice () {
        let commdityRealSumPrice = 0
        _.forEach(this.commdityShopping, function (value, key) {
          commdityRealSumPrice += (value.commodityMoney * value.commoditySum)
        })
        console.log(111)
        console.log(commdityRealSumPrice)
        return commdityRealSumPrice
      },
      // 实际价格
      commditySumPrice () {
        let commditySumPrice = 0
        _.forEach(this.commdityShopping, function (value, key) {
          commditySumPrice += (value.commodityMoney * value.commoditySum)
        })
        console.log(111)
        console.log(commditySumPrice)
        if (commditySumPrice < 10) {
          commditySumPrice += 1
        }
        return commditySumPrice
      },

      // 优惠价格
      commditySumPriceYH () {
        // this.randomSum = _.random(1, 10)
        let commditySumPriceYH = this.commditySumPrice
        // if (this.randomSum >= commditySumPriceYH) {
        //   this.randomSum = 0
        // } else {
        //   commditySumPriceYH -= this.randomSum
        // }

        return commditySumPriceYH
      }
    },
    onShow: function (option) {
      this.setUserOrderAddresDetail()
    },
    watch: {
      userAddres () {
        this.setUserOrderAddresDetail()
      },
      userOrderAddres () {
        this.setUserOrderAddresDetail()
      }
    },
    data () {
      return {
        randomSum: 0,
        payShow: false,
        tipsMessage: {
          message: '没有收货地址',
          status: false
        },

        commdityOrders: {
          commdityOrderName: '',
          commdityOrderShopping: [],
          commdityOrderOffer: 0,
          commdityOrderActual: this.commdityRealSumPrice,
          commdityOrderSumPrice: 0,
          commdityOrderUserAddress: {}
        },
        setUserOrderAddres: [],
        commdityOrdersDetails: []
      }
    },
    methods: {
      payClickTest () {
        let _this = this
        console.log(_this.setUserOrderAddres.userName)
        if (_this.setUserOrderAddres.userName === null) {
          this.tipsMessage.status = true
          setTimeout(function () {
            _this.tipsMessage.status = false
          }, 500)
          return false
        }
        this.commdityOrders.commdityOrderName = this.commdityShoppingName
        this.commdityOrders.commdityOrderShopping = this.commdityShopping
        this.commdityOrders.commdityOrderOffer = this.randomSum
        this.commdityOrders.commdityOrderActual = this.commdityRealSumPrice
        this.commdityOrders.commdityOrderSumPrice = this.commditySumPriceYH
        this.commdityOrders.commdityOrderUserAddress = this.setUserOrderAddres
        this.$store.dispatch('setCommdityOrder', this.commdityOrders)
        console.log('name:' + this.commdityOrders.commdityOrderName + 'Offer:' + this.commdityOrders.commdityOrderOffer)
        console.log(this.commdityOrders)
        // console.log(JSON.parse(JSON.stringify(this.commdityOrders)))
        let commdityList = this.commdityOrders.commdityOrderShopping
        _this.commdityOrdersDetails = JSON.parse(JSON.stringify(commdityList))
        _this.commdityOrders = this.commdityOrders
        console.log(_this.commdityOrdersDetails)
        console.log(_this.commdityOrdersDetails[0].foodId)
        console.log(_this.commdityOrders.commdityOrderUserAddress.id)
        // console.log(commdityOrdersDetails.foodId)
        wx.login({
          complete: (res) => {
            wx.request({
              url: 'https://fquano.cn/system/order/addOrderByUserId',
              data: JSON.stringify({
                code: res.code,
                commdityOrders: _this.commdityOrders,
                commdityOrderUserAddress: _this.commdityOrders.commdityOrderUserAddress,
                commdityShopping: _this.commdityOrders.commdityOrderShopping,
                shopInfoId: '' + _this.commdityOrdersDetails[0].shopInfoId
                // code: '' + res.code,
                // foodId: '' + _this.commdityOrdersDetails[0].foodId,
                // shopInfoId: '' + _this.commdityOrdersDetails[0].shopInfoId,
                // commodityMoney: '' + _this.commdityOrdersDetails[0].commodityMoney,
                // commdityOrderSumPrice: '' + _this.commdityOrders.commdityOrderSumPrice,
                // commodityActualMoney: '' + _this.commdityOrders.commdityOrderActual,
                // commoditySum: '' + _this.commdityOrdersDetails[0].commoditySum,
                // commdityOrderUserAddressId: '' + _this.commdityOrders.commdityOrderUserAddress.id
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
        // this.commdityOrders.commdityOrderName = ''
        // this.commdityOrders.commdityOrderShopping = []
        this.payShow = true
        // console.log(this.commdityOrder)
      },
      /* 微信支付 */
      pay () {
        let _this = this
        if (_this.setUserOrderAddres.userName === null) {
          this.tipsMessage.status = true
          setTimeout(function () {
            _this.tipsMessage.status = false
          }, 500)
          return false
        }
        this.commdityOrders.commdityOrderName = this.commdityShoppingName
        this.commdityOrders.commdityOrderShopping = this.commdityShopping
        this.commdityOrders.commdityOrderOffer = this.randomSum
        this.commdityOrders.commdityOrderActual = this.commdityRealSumPrice
        this.commdityOrders.commdityOrderSumPrice = this.commditySumPriceYH
        this.commdityOrders.commdityOrderUserAddress = this.setUserOrderAddres
        this.$store.dispatch('setCommdityOrder', this.commdityOrders)
        console.log('name:' + this.commdityOrders.commdityOrderName + 'Offer:' + this.commdityOrders.commdityOrderOffer)
        console.log(this.commdityOrders)
        // console.log(JSON.parse(JSON.stringify(this.commdityOrders)))
        let commdityList = this.commdityOrders.commdityOrderShopping
        _this.commdityOrdersDetails = JSON.parse(JSON.stringify(commdityList))
        _this.commdityOrders = this.commdityOrders
        console.log(_this.commdityOrdersDetails)
        console.log(_this.commdityOrdersDetails[0].foodId)
        console.log(_this.commdityOrders.commdityOrderUserAddress.id)
        wx.login({
          complete: (res) => {
            if (res.code) {
              console.log('获取到login code:' + res.code)
              _this.getOpenId(res.code)
            } else {
              console.log('获取用户登录信息失败！' + res.errMsg)
            }
          }
        })
      },
      getOpenId: function (code) {
        let _this = this
        wx.request({
          url: 'https://fquano.cn/system/order/addOrderByUserId',
          data: JSON.stringify({
            code: '' + code,
            commdityOrders: _this.commdityOrders,
            commdityOrderUserAddress: _this.commdityOrders.commdityOrderUserAddress,
            commdityShopping: _this.commdityOrders.commdityOrderShopping,
            shopInfoId: '' + _this.commdityOrdersDetails[0].shopInfoId
          }),
          method: 'POST',
          header: {
            'content-type': 'application/json;charset=utf-8'
          },
          success: function (data) {
            console.log(data)
            _this.orderCode = data.data.data.orderCode
            console.log(_this.orderCode)
            _this.unitedPayRequest(data.data.data.openid)
            console.log(_this.createTimeStamp())
          },
          fail: function (res) {
            console.log('获取openId失败:' + res)
          }
        })
      },
      unitedPayRequest: function (openId) {
        let _this = this
        _this.openId = openId
        console.log(_this.openId)
        // let nonceStr = _this.randomString()
        let totalFee = _this.commdityOrders.commdityOrderSumPrice
        console.log(totalFee)
        wx.request({
          url: 'https://fquano.cn/system/pay/ltaPay',
          data: JSON.stringify({
            openId: '' + openId,
            total_fee: '' + totalFee
          }),
          method: 'POST',
          header: {
            'content-type': 'application/json;charset=utf-8'
          },
          success: function (data) {
            console.log(data)
            _this.processPay(data.data.data)
            console.log(data.data.data)
          }
        })
      },
      processPay: function (data) {
        let _this = this
        console.log(_this.orderCode)
        wx.requestPayment({
          nonceStr: data.nonceStr,
          package: data.package,
          signType: data.signType,
          paySign: data.sign,
          timeStamp: data.timeStamp,
          success: function (res) {
            // success
            console.log('wx.requestPayment返回信息:' + res)
            wx.showModal({
              title: '支付成功',
              content: '您将在“微信支付”官方号中收到支付凭证',
              showCancle: false,
              success: function (res) {
                if (res.confirm) {
                  console.log('confirm')
                  wx.request({
                    url: 'https://fquano.cn/system/order/updateOrderByOrderCode',
                    data: JSON.stringify({
                      code: '' + _this.orderCode
                    }),
                    method: 'POST',
                    header: {
                      'content-type': 'application/json;charset=utf-8'
                    },
                    success: function (data) {
                      wx.switchTab({
                        url: '/pages/order/main'
                      })
                    }
                  })
                } else if (res.cancle) {
                  console.log('cancle')
                }
              }
            })
          }
        })
      },
      randomString: function () {
        var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
        var maxPos = chars.length
        var nonceVal = ''
        for (var i = 0; i < 32; i++) {
          nonceVal += chars.charAt(Math.random() * maxPos)
        }
        return nonceVal
      },
      createTimeStamp () {
        return parseInt(new Date().getTime() / 1000) + ''
      },
      closePayFull (status) {
        this.payShow = status
      },
      setUserOrderAddresTitle () {
        let url = '/pages/address/main'
        wx.navigateTo({url})
      },
      setUserOrderAddresDetail () {
        console.log(1714)
        console.log(this.userOrderAddres)
        let _this = this
        wx.request({
          url: 'https://fquano.cn/system/receiver/getUserReceiverAddrById',
          data: JSON.stringify({
            index: this.userOrderAddres
          }),
          method: 'POST',
          header: {
            'content-type': 'application/json;charset=utf-8'
          },
          success: function (data) {
            console.log('data')
            console.log(data)
            let ReceiverAddr = data.data.data
            _this.setUserOrderAddres = ReceiverAddr
            console.log(_this.setUserOrderAddres)
          }
        })
      }
    }
}
</script>

<style lang="less" scoped>
.settlementContainer{
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #f4f4f4;
}
  .settlementHeader{
    width: 100%;
    height: 200rpx;
    background: #0097ff;
    margin-bottom: -50rpx;
  }
  .settlementHeaderAddress{
    width: 726rpx;
    height: 100%;
    margin: 0 auto;
    color: #fff;
    .settlementHeaderAddressD{
      line-height: 60rpx;
      font-size: 14px;
    }
    .settlementHeaderAddressA{
      line-height: 60rpx;
      font-size: 18px;
      font-weight: 500;
      overflow: hidden;
      -ms-text-overflow: ellipsis;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
.settlementMain{
  width: 726rpx;
  height: 100%;
  margin: auto;
  -webkit-border-radius: 3rpx;
  -moz-border-radius: 3rpx;
  border-radius: 3rpx;
  overflow: hidden;
  padding-bottom: 200rpx;
  background: #f4f4f4;
}

  .settlementFooter{
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 96rpx;
    background: #3c3c3c;
    .settlementFooterL{
      height: 100%;
      float: left;
      color: #999;
      .settlementFooterLMSum{
        color: #fff;
        line-height: 96rpx;
        font-size: 18px;
        margin-left: 22rpx;
      }
      .settlementFooterLMH{
        color: #999;
        font-size: 14px;
        line-height: 96rpx;
        margin: 0 10rpx 0 16rpx;
      }
      .settlementFooterLMYH{
        color: #999;
        font-size: 14px;
        line-height: 96rpx;
      }
    }
    .settlementFooterR{
      width: 210rpx;
      height: 100%;
      background: #3190e8;
      float: right;
      color: #fff;
      font-size: 16px;
      text-align: center;
      line-height: 96rpx;
    }
  }
  .tipsMessage{
    position: absolute;
    top: 50%;
    left: 50%;
    background: rgba(0, 0, 0, 0.6);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    padding: 10rpx 16rpx;
    -webkit-border-radius: 6rpx;
    -moz-border-radius: 6rpx;
    border-radius: 6rpx;
    color: #fff;
    font-size: 14px;
  }
</style>
