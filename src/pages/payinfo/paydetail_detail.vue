<template>
  <div class="paydetail-wrapper">
    <v-header :goBack="true" msg="扫码支付" leftmsg="用户指南"></v-header>
    <section class="detail-wrapper">
      <div class="inner-content weixin-content">
        <div class="pay-title weixin-title">
          微信小额D0实时到账
        </div>
        <div class="weixin-user">
          商家 <span class="font-red">用户名</span> 正在向您发起一笔金额¥500.00的收款
          请扫描以下二维码进行交易
        </div>
        <div class="weixin-qrcode">
          <p class="sum">￥500.00</p>
          <div class="qrcode-box">
            <img src="./img/qrcode.png" alt="">
          </div>
        </div>
        <div class="weixin-user">
          <p class="font-15">温馨提示</p>
          <p>如果您不认识 <span class="font-red">用户名</span> 请谨慎操作。</p>
        </div>
      </div>
      <section class="inner-content function-box">
        <ul class="function-ul">
          <li>
            <div class="share-img">
              <img src="./img/share.png" alt="">
            </div>
            <div class="share-text">
              分享二维码 <br>
              至微信
            </div>
          </li>
          <li>
            <div class="share-img">
              <img src="./img/download.png" alt="">
            </div>
            <div class="share-text">
              保存二维码 <br>
              至相册
            </div>
          </li>
        </ul>
      </section>
    </section>
  </div>
</template>
<script >
  import vHeader from '@/components/componentsmore/vheader.vue'
  export default {
    data(){
      return{

      }
    },
    components:{
      vHeader
    },
    props:['payType'],
    mounted(){
      console.log(this.$route.params);
    }

  };
</script>
<style scoped>
  .detail-wrapper{
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
    width: 90%;
    padding: 5%;
    background: #37C32E;
    border-radius: 8px;

  }
  .weixin-qrcode .sum{
    font-size: 28px;
    color: #FFFFFF;
    line-height: 1.5;
  }
  .qrcode-box{
    display: inline-block;
    background: #fff;
    padding: 5px;
  }
  .function-box{
    padding: 15px 25px;
  }
  .function-ul{
    display: flex;
    justify-content: center;
  }
  .function-ul li{
    flex: 1;
    border-right: 1px solid #DEDEDE;
    margin-right: 5px;
  }
  .function-ul li:last-child{
    border-right: none;
  }
  .share-img,.share-text{
    display: inline-block;
  }
  .share-text{font-size: 13px;
    color: #616161;}

</style>
