<template>
 <div class="contactMerchantContainer">
   <i-cell-group>
     <i-cell
       v-for="(item, index) in contactUs"
       :key="index"
       :title="item.shopName"
       :value="item.contactMobile">
       <i-icon
         slot="icon"
         type="group_fill"
         color="#0097ff"
         size="18"/>
     </i-cell>
   </i-cell-group>
 </div>
</template>

<script>
let Fly = require('flyio/dist/npm/wx')
let fly = new Fly()
export default {
  data () {
    return {
      contactUs: []
    }
  },
  onShow: function (option) {
    console.log('onShopLoad...')
    this.getContactShopList()
  },
  methods: {
    getContactShopList () {
      console.log('获取商家列表')
      let _this = this
      fly.get('http://localhost:8088/system/info/getShopListAll')
        .then(function (response) {
          if (response.status === 200) {
            console.log(response)
            let contactShopArr = response.data.rows
            _this.contactUs = contactShopArr
          }
        })
        .catch(function (err) {
          _this.loadingShow = true
          console.log(err)
        })
    }
  }
}
</script>

<style lang="less" scoped>

</style>
