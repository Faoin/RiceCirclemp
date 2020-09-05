<template>
 <div class="contactusContainer">
   <i-cell-group>
     <i-cell
       v-for="(item, index) in contactUs"
       :key="index"
       :title="item.name"
       :value="item.mobile">
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
    console.log('onload...')
    this.getContactUsList()
  },
  methods: {
    getContactUsList () {
      console.log('获取客服列表')
      let _this = this
      fly.get('http://localhost:8088/system/contact/getContactList')
        .then(function (response) {
          if (response.status === 200) {
            console.log(response)
            let contactUsArr = response.data.rows
            _this.contactUs = contactUsArr
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
