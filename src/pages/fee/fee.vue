<template>
  <div>
    <v-header :goBack="true" msg="我的费率"></v-header>
    <section class="content-wrapper">
      <div class="inner-content weixin-content" v-for="item in feeList">
        <div class=" rate-head">
          <div class="pay-img">
            <img :src="item.img" alt="">
          </div>
          {{item.explain}}
        </div>
        <div class="rate-box">
          <div class="rate-item">
            <p class="rate-title">费率</p>
            <p class="rate-content">{{item.rate}}</p>
          </div>
          <div class="rate-item">
            <p class="rate-title">结算</p>
            <p class="rate-content">{{item.number}}/笔</p>
          </div>
          <div class="rate-item">
            <p class="rate-title">额度</p>
            <p class="rate-content">{{item.limit}}元</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script type="text/ecmascript-6">
  import vHeader from '@/components/componentsmore/vheader.vue'
  export default {
    components:{
      vHeader
    },
    data(){
      return {
        feeList:[
          {img:require("./img/weixin.png"),paytype:'weixin',explain:'微信小额D0实时到账（8:00～22:00）',rate:'0.38%',number:'10',limit:'2000'},
          {img:require("./img/yinlian.png"),paytype:'yinlian',explain:'银联小额D0实时到账（8:00～22:00）',rate:'0.38%',number:'10',limit:'2000'},
          {img:require("./img/zhifub.png"),paytype:'zhifub',explain:'支付宝小额D0实时到账（8:00～22:00）',rate:'0.38%',number:'10',limit:'2000'},
          {img:require("./img/qq.png"),paytype:'qq',explain:'QQ小额D0实时到账（8:00～22:00）',rate:'0.38%',number:'10',limit:'2000'},
          {img:require("./img/jingdong.png"),paytype:'jingdong',explain:'京东小额D0实时到账（8:00～22:00）',rate:'0.38%',number:'10',limit:'2000'}
        ]
      }
    }
  };
</script>
<style >
  .content-wrapper{
    background: #F1F1F1;
    padding: 20px;
  }
  .inner-content{
    position: relative;
    background: #FFFFFF;
    border-radius: 8px;
    margin-bottom: 10px;
  }
  .weixin-content .pay-title{
    padding: 14px 17px 14px 50px;
    font-size: 18px;
    color: #616161;
    border-bottom: 1px solid #DEDEDE;
  }
  .rate-head{
    font-size: 14px;
    color: #48A0EA;
    border-bottom: 1px solid #DEDEDE;
  }
  .rate-head .pay-img{
    display: inline-block;
    /* width: 34px;*/
    height: 34px;
    vertical-align: middle;
  }
  .weixin-title{
    background: url("./img/weixin.png") no-repeat;
    background-position: 8px 5px;
  }
  .weixin-user{
    padding:5px 15px 10px;
    font-size: 12px;
    color: #616161;
    line-height: 18px;
  }
  .weixin-qrcode{
    position: relative;
    text-align: center;
    width: 100%;
    padding: 26px;
    background: #37C32E;
    border-radius: 8px;

  }
  .weixin-qrcode .sum{
    font-size: 28px;
    color: #FFFFFF;
    line-height: 1.5;
  }
  .rate-box{
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 14px;
  }
  .rate-item{
    flex: 1;
    text-align: center;
    line-height: 2;
  }
  .rate-item .rate-title{
    font-size: 14px;
    color: #616161;
  }
  .rate-item .rate-content{
    font-size: 16px;
    color: #616161;
  }
  .bank-card-content{
    margin-top: 10px;
    background: #ffffff;
    padding: 0 15px 15px 15px;
  }
  .bank-border-box{
    display: flex;
    justify-content: flex-start;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #D8D8D8;
    font-size: 14px;
  }
  .bank-border-box .bank-title{
    display: inline-block;
    width: 100px;
  }
  .bank-border-box .bank-input{
    flex: 1;
  }
</style>
