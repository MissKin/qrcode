<template>
  <div>
    <v-header :goBack="true" msg="支付详情" leftmsg="用户指南"></v-header>
    <line-title :linetitle="linetitle1"></line-title>
    <div class="paybox">
      <p class="pay-info">交易类型 <span class="pay-type">银联二维码</span></p>
      <p class="pay-info">交易金额 <span class="pay-type font-red">银联二维码</span></p>
    </div>
    <line-title :linetitle="linetitle2"></line-title>
    <div class="paybox arrow-right icon-backicon" v-for="item in paylist" >
      <router-link class="a-router" :to="{name:'paydetail',params:{type: item.siteChnlId}}">
        <div class="payimg">
          <img :src="img.imgsrc" v-for="img in imglist" v-if="img.type == item.siteChnlId">
        </div>
        <div class="pay-text-box" >
          <p class="pay-type">{{item.pmtChnlName}}</p>
          <p class="pay-notice">{{item.rateDesc}}</p>
        </div>
      </router-link>
    </div>
  </div>


</template>
<script >
  import vHeader from '@/components/componentsmore/vheader.vue'
  import lineTitle from '@/components/componentsmore/linetitle.vue'
  import{site_pmt_chnl_list} from 'api/getdata.js'
  export default {
    data(){
      return {
        linetitle1:'交易详情',
        linetitle2:'支付类型',
        paylist:null,
        imglist:[
          {type:'1',imgsrc:require('./img/yinlian.png')},
          {type:'2',imgsrc:require('./img/weixin.png')},
          {type:'3',imgsrc:require('./img/zhifub.png')},
          ],//图片数组
      }
    },
    created(){
      this.initData()
    },
    mounted(){
      this.getImg()
    },
    methods:{
      initData(){
        site_pmt_chnl_list(this,{params:{type:'KJ'}})
          .then(response => {
            response = response.body;
            if(response.result){
              console.log(response.result)
              this.paylist = response.result;
            }
          },response => {
            console.log('错误了')
          })
      },
      getImg(){
        var imgs = $('.payimg');
        imgs.map(function (i) {
          var _this = $(this);
          console.log(imgs[i]);
          var name = _this.attr(name);

        })
      }
    },
    components:{
      vHeader,
      lineTitle
    }
  };
</script>
<style scoped>
  @import "../../common/style/base.css";
  @import "../../common/style/font.css";
  @import "../../common/style/reset.css";
.paybox{
  position: relative;
  background: #fff;
  padding: 5px 17px;
  margin-bottom: 10px;
}
  .pay-info{
    line-height: 2;
    font-size: 14px;
    color: #B3B3B3;
  }
  .pay-type{
    margin-left: 5px;
    font-size: 16px;
    color: #616161;
  }
  .paybox .payimg{
    display: inline-block;
    vertical-align: baseline;
    margin-right: 5px;
  }
  .pay-text-box{
    display: inline-block;
    line-height: 2;
  }
  .pay-text-box .pay-notice{
    font-size: 14px;
    color: #B3B3B3;
  }
  .arrow-right:before{
    position: absolute;
    content: "\e902";
    width: 20px;
    height: 20px;
    color: #CACACA;
    right: 10px;
    transform: rotate(180deg);
    top: 50%;
    margin-top: -10px;
  }
  .a-router{
    display: block;
    margin: -5px -17px;
    padding: 5px 17px;
  }
  .a-router.router-active{
    background: rgba(0,0,0,0.1);
  }
</style>
