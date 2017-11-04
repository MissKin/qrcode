<template>
  <div>
    <v-header :goBack="true" msg="支付详情" leftmsg="用户指南"></v-header>
    <line-title :linetitle="linetitle1"></line-title>
    <div class="paybox">
      <p class="pay-info">交易类型 <span class="pay-type">{{this.$route.query.payType =='KJ'?'快捷支付':'扫码支付'}}</span></p>
      <p class="pay-info">交易金额 <span class="pay-type font-red">{{this.$route.query.amount}}</span></p>
    </div>
    <line-title :linetitle="linetitle2"></line-title>
    <div class="paybox arrow-right icon-backicon" v-for="item in paylist" >
      <a class="a-router" @click = orderCreate(item.pmtChnlType,item.siteChnlId,item.havaSMS)>
        <div class="payimg">
          <img :src="img.imgsrc" v-for="img in imglist" v-if="img.type == item.pmtChnlType">
        </div>
        <div class="pay-text-box" >
          <p class="pay-type">{{item.pmtChnlName}}</p>
          <p class="pay-notice">{{item.rateDesc}}</p>
        </div>
      </a>
    </div>
  </div>
</template>
<script >
  import vHeader from '@/components/componentsmore/vheader.vue'
  import lineTitle from '@/components/componentsmore/linetitle.vue'
  import{site_pmt_chnl_list} from 'api/getdata.js'
  import {mapMutations} from 'vuex'
  export default {
    data(){
      return {
        linetitle1:'交易详情',
        linetitle2:'支付类型',
        paylist:null,
        imglist:[
          {type:'1',imgsrc:require('./img/yinlian.png')},
          {type:'2',imgsrc:require('./img/yinlian.png')},
          {type:'3',imgsrc:require('./img/weixin.png')},
          {type:'4',imgsrc:require('./img/zhifub.png')},
          ],//图片数组
      }
    },
    created(){

    },
    mounted(){
      this.initData();
      this.getImg();

    },
    methods:{
      initData(){
        site_pmt_chnl_list(this,{params:{type:this.$route.query.payType}})
          .then(response => {
            response = response.data;
            if(response.result){
              this.paylist = response.result;
            }else{
              alert(response.message)
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
      },
        orderCreate(type,siteId,hmsm){
          if(type == 1 ||  type == 2){
            this.$store.commit('payInfo',{pmtChnlType:type,siteChnlId:siteId,amount:this.$route.query.amount,havaSMS:hmsm});
            console.log(this.$store.state.payinfo);
            this.$router.push('/bankcards')
          }
        },


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
    font-family: Microsoft YaHei;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    /* display: block; */
    margin: -5px -17px;
    padding: 14px 17px 14px 10px;
  }
  .paybox .payimg{
    float: left;
    width: 35px;
    height: 35px;
    display: inline-block;
  }
  .pay-text-box {
    display: inline-block;
    padding-left: 5px;
  }
  .pay-type {
    font-size: 16px;
    color: #616161;
  }
  .pay-text-box .pay-notice {
    font-size: 14px;
    color: #B3B3B3;
    margin-top: 5px;
    line-height: 1.5;
  }
  .a-router.router-active{
    background: rgba(0,0,0,0.1);
  }
</style>
