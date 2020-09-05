<template>
  <!--<div class="container" @click="clickHandle('test click', $event)">-->
  <div class="container">

    <div class="headSearch">
      <!--<div class="headSearchTitle">-->
        <!--小优用户-->
      <!--</div>-->
      <div class="headSearchInput" @click="goCommodity">
        <!--<i-input i-class="headSeachISearch" placeholder="请输入收货人姓名" />-->
        <!-- <input class="headSeachISearch" type="search" placeholder="请输入商品名称"> -->
      </div>
    </div>

    <div class="banner" @click="testCommodity">
      <img src="/static/img/banner1.png" alt="banner">
    </div>

    <!-- <div class="menu">
      <div class="menuContent">
        <div class="menuContentList">
          <img src="/static/img/gssc.png" alt="gssc">
        </div>
        <div class="menuContentList">
          <img src="/static/img/xlqg.png" alt="xlqg">
        </div>
        <div class="menuContentList">
          <img src="/static/img/qbms.png" alt="qbms">
        </div>
      </div>
    </div> -->

    <div class="main">
      <!--<div class="loading" v-show="loadingShow">-->
            <!--<i-spin custom>-->
              <!--<i-icon type="refresh" size="20" i-class="icon-load"></i-icon>-->
              <!--<view>Loading</view>-->
            <!--</i-spin>-->
      <!--</div>-->
      <div class="shop" @click="getCommodityList(item.id, item.logo)" v-for="(item, index) in merchant" :key="index">
        <div class="shopContent">
          <div class="shopContentTitle clearflx">
            <view>
            <div class="sCTImg">
                <img :src="item.logo" :alt="item.logoalt">
            </div>
            <div class="sCTDetail">
              <div class="sCTDetailTitle">
                <div class="sCTDetailTitleicon">店铺</div>
                <p>{{item.title}}</p>
              </div>
              <div class="sCTDetailpj">
                {{item.sales}}
              </div>
              <div class="sCTDetailm">
                {{item.distribution}}
              </div>
            </div>
            </view>
          </div>

          <div class="shopLine"></div>

          <div class="shopActivity clearflx">
            <div class="shopActivityicon clearflx">
              <div class="shopActivityiconJ">减</div>
              <p>{{item.less}}</p>
            </div>

            <div class="shopActivityicon clearflx">
              <div class="shopActivityiconJ">折</div>
              <p>{{item.fold}}</p>
            </div>
          </div>
          <!-- <div class="shopping">
            <div class="shoppingContent" v-for="(itemShoop, itemIndex) in item.shopping" :key="itemIndex">
              <div class="shoppingContentImg">
                <img :src="itemShoop.shoopingImg" :alt="item.shoopimgAlt">
              </div>
              <p class="shoppingContentTitle">{{itemShoop.shoopingTitle}}</p>
              <p class="shoppingContentM"><span class="shoppingContentMA">￥{{itemShoop.shoopingMa}}</span><span>&nbsp;</span><span class="shoppingContentMB">{{itemShoop.shoopingMb}}</span&nbsp;&nbsp;></p>
            </div>
          </div> -->
        </div>
      </div>
      <div>
        <i-load-more tip="暂无数据" :loading="loadingShow" />
      </div>
    </div>
  </div>
</template>

<script>
let Fly = require('flyio/dist/npm/wx')
let fly = new Fly()
// var that = this
export default {
  data () {
    return {
      merchant: []
    }
  },
  created () {
    this.getMerchant()
  },
  methods: {
    getMerchant () {
      console.log('获取店铺列表')
      let _this = this
      fly.get('http://localhost:8088/system/info/getShopList')
        .then(function (response) {
          if (response.status === 200) {
            let merchantArr = response.data.rows
            _this.merchant = merchantArr
          }
        })
        .catch(function (err) {
          _this.loadingShow = true
          console.log(err)
        })
    },
    getCommodityList (index, logo) {
      console.log('根据index进入商品列表')
      console.log(logo)
      let _index = index
      let _logo = logo
      wx.navigateTo({
        url: '/pages/commodity/main?index=' + _index + '&logoUrl=' + _logo
      })
      // let _this = this
      // fly.get('http://localhost:8088/system/food/getFood4ShopList?id=' + index)
      //   .then(function (response) {
      //     if (response.status === 200) {
      //       let shopListArr = response.data.rows
      //       let _index = index
      //       _this.commodityList = shopListArr
      //       wx.navigateTo({
      //         url: '/pages/commodity/main?index=' + _index
      //       })
      //       console.log(response)
      //       console.log('shopListArr:' + shopListArr)
      //     }
      //   })
      //   .catch(function (err) {
      //     _this.loadingShow = true
      //     console.log(err)
      //   })
    },
    toDetail (index) {
      console.log('index ' + index)
      wx.navigateTo({
        url: '/pages/commodity/main'
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .clearflx:after{
    content: '';
    width: 0;
    height: 0;
    clear: both;
    display: block;
  }

  /*headSearch*/
  .headSearch{
    width: 100%;
    background: #0097ff;
    /*padding: 10rpx 0 20rpx 0;*/
    .headSearchTitle {
      color: #fff;
      text-align: center;
      line-height: 2;
      margin-bottom: 10rpx;
      font-size: 16px;
    }
    .headSearchInput{
      width: 690rpx;
      margin: 10px auto 20px;
      background: #fff;
      border-radius: 50rpx;
      font-size: 14px;
      overflow: hidden;
    }
    .headSeachISearch{
      padding: 20rpx 30rpx;
      caret-color: #c2c2c2
    }
  }
  /*headSearch*/

  /*banner*/
  .banner{
    width: 100%;
    height: 320rpx;
    overflow: hidden;
    img{
      width: 100%;
      height: 100%;
    }
  }
  /*banner*/

  /*menu*/
  .menu{
    width: 100%;
    height: 280rpx;
    background: #fff;
    margin: 10rpx 0 20rpx 0;
    .menuContent {
      width: 690rpx;
      height: 216rpx;
      margin: 30rpx auto 0;
      .menuContentList{
        width: 216rpx;
        height: 216rpx;
        float: left;
        overflow: hidden;
      }
      .menuContentList:nth-child(2){
        margin: 0 21rpx;
      }

      .menuContentList img {
        width: 216rpx;
        height: 216rpx;
      }
    }
  }
  /*menu{*/

  /*main*/
  .main{
    width: 100%;
    margin: auto;
  }

  /*.loading{*/
    /*width: 100%;*/
    /*background: #fff;*/
  /*}*/

  .shop{
    width: 100%;
    // height: 650rpx;
    margin: auto;
    border-top: 1rpx solid #eee;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background: #fff;
    .shopContent{
      width: 690rpx;
      height: 100%;
      margin: auto;
      .shopContentTitle{
        width: 680rpx;
        margin-top: 30rpx;
      }
    }
  }

  .shopContentTitle .sCTImg {
    width: 130rpx;
    height: 130rpx;
    overflow: hidden;
    margin-right: 20rpx;
    float: left;
  }
  .shopContentTitle .sCTImg img{
    width: 100%;
    height: 100%;
  }
  .shopContentTitle .sCTDetail {
    width: 530rpx;
    height: 130rpx;
    float: left;
  }


  .shopContentTitle .sCTDetail .sCTDetailTitleicon {
    height: 40rpx;
    padding: 0 6rpx;
    background: #ffe142;
    float: left;
    font-size: 12px;
    color: #52250a;
    text-align: center;
    line-height: 40rpx;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    margin-right: 12rpx;
  }
  .shopContentTitle .sCTDetailTitle p {
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #333;
    font-size: 16px;
    font-weight: bold;
    line-height: 40rpx;
  }

  .shopContentTitle .sCTDetail .sCTDetailpj,
  .shopContentTitle .sCTDetail .sCTDetailm{
    color: #717171;
    font-size: 14px;
    line-height: 40rpx;
  }

  .shopContentTitle .sCTDetail .sCTDetailpj {
    margin-top: 10rpx;
  }

  .shopLine{
    width: 100%;
    height: 1rpx;
    background: #eee;
    margin-top: 12rpx;
  }

  .shopActivity{
    width: 100%;
    margin-top: 20rpx;
    margin-bottom: 20rpx;
    .shopActivityicon{
      margin: 10rpx 0;

      .shopActivityiconJ{
        width: 30rpx;
        height: 30rpx;
        background: #f07373;
        float: left;
        font-size: 12px;
        color: #fff;
        text-align: center;
        line-height: 30rpx;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
      }
    }
    p {
      margin: 0 0 0 14rpx;
      padding: 0;
      font-size: 12px;
      color: #666;
      float: left;
      line-height: 30rpx;
    }
  }


  .shopping{
    width: 100%;
    height: 340rpx;
    margin-top: 20rpx;

    .shoppingContent{
      width: 216rpx;
      height: 340rpx;
      border: 1rpx solid #eee;
      float: left;
    }

    .shoppingContent:nth-child(2){
      margin: 0 15rpx;
    }
  }



  .shoppingContentImg{
    width: 216rpx;
    height: 216rpx;
    background: #a7a7a7;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }


  .shoppingContentTitle{
    color:#333;
    font-size:12px;
    margin:0 0 0 18rpx;
    padding:0;
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .shoppingContentM {
    margin: 0;
    padding: 0;
    .shoppingContentMA{
      color:#ff5339;
      font-size:18px;
      margin:0 0 0 18rpx;
    }
    .shoppingContentMB{
      color:#6b6b6b;
      font-size:12px;
      margin: 0;
      padding: 0;
      text-decoration: line-through;
    }
  }
</style>
