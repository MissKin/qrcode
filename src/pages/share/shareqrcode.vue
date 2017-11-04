<template>
  <div class="height-all">
    <v-header goBack="true" msg="二维码推广"></v-header>
    <div class="template-out ">
      <div class="template-bg">
        <img class="tpl-bg-img"
             :src="qrcodeInfo.ftpUrl+qrcodeInfo.sitePhotoDO.photoPath+qrcodeInfo.sitePhotoDO.photoName" alt="">
      </div>
      <div class="tpl-content">
        <p class="font-16 lineht2">全国上万人参与的互联网+支付项目</p>
        <p class="mar-top20 lineht2">优秀创业导师：{{qrcodeInfo.merchantName}}  </p>
        <p class="lineht2">	{{qrcodeInfo.siteName}}互联网创业平台</p>
        <div class="qrcode-box">
          <img :src="qrcodeInfo.qrCodePath" v-if="qrcodeInfo.qrCodePath"  alt="">
          <img src="./img/msflogo.png" v-else alt="">
        </div>
        <p class="open-wechat">打开微信 - 扫描二维码 - 快速注册</p>
        <img src="./img/appicons.png" alt="">
      </div>
    </div>

  </div>
</template>
<script >
  import vHeader from '@/components/componentsmore/vheader.vue'
  export default {
    components:{
      vHeader,
    },
    data(){
      return {
        qrcodeInfo:null,//二维码信息
      }
    },
    mounted(){
      this.load().then( (data) =>{
        console.log(data);
        this.init_qrcode(data);
      })
    },
    methods:{
      load(){
        return new Promise( (resolved,reject) =>{
          this.axios({
            method:'GET',
            url:'/qrpay.open/mch/to_modify_phone',
          }).then( res => {
            res = res.data;

            if(res.result !=null){
              console.log(res.result.phone);
              resolved(res.result.phone)
            }else{
              this.$router.push('/login')
            }
          })
        })
      },
      init_qrcode(tel){
        this.axios({
          method:'GET',
          url:'/qrpay.open/site_profile_do/app_promotional_template_view',
          params:{'phone':tel}
        }).then( res =>{
          res= res.data;
          console.log(res);
          this.qrcodeInfo = res.result;
        })
      }
    }
  };
</script>
<style scoped>
  .template-out{
    position: relative;
    width: 100%;
    height: calc( 100% - 45px );
    background: #ffffff;
    display: inline-block;
  }

  .template-bg{
    width: 100%;
    height: 100%;
    overflow: hidden;}
  .template-bg .tpl-bg-img{
    width: 100%;
  }
  .tpl-content{
    position: absolute;
    top: 130px;
    width: 100%;
    text-align: center;
    color: #fff;
  }
  .tpl-content .qrcode-box{
    display: inline-block;
    margin-top: 20px;
    width: 200px;
    height: 200px;
    padding: 15px;
    background: #ffffff;
    border: 1px solid #DEDEDE;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  .qrcode-box >img{
    width: 100%;
  }
  .tpl-content .open-wechat{
    font-size: 13px;
    color: #616161; margin-bottom: 10px;
  }
</style>
