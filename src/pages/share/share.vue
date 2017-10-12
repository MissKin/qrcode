<template>
  <div>
    <v-header :goBack="true" msg="我要分享"></v-header>

  <div class="share-wrapper">
    <div class="share-box">
      <div class="share-item" @click="jumpPage('qrcode')">
        <div class="share-first icon-arrow"></div>
        <div class="share-des">
          <p class="title">分享二维码图片链接</p>
          <p class="small-title">扫二维码轻松分享</p>
        </div>
      </div>
      <div class="share-item" @click="jumpPage('centraloffice')">
        <div class="share-second icon-arrow"></div>
        <div class="share-des">
          <p class="title">朋友圈中央文案库</p>
          <p class="small-title">刷爆你的朋友圈</p>
        </div>
      </div>
      <div class="share-item">
        <div class="share-third icon-arrow"></div>
        <div class="share-des">
          <p class="title">分享注册邀请链接</p>
          <p class="small-title">轻松邀请好友</p>
        </div>
      </div>
      <div class="share-item" @click="jumpPage('faceapply')">
        <div class="share-four icon-arrow"></div>
        <div class="share-des">
          <p class="title">面对面开通账号</p>
          <p class="small-title">邀请0距离</p>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import vHeader from '@/components/componentsmore/vheader.vue'
    export default {
      components:{
        vHeader,
      },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
    methods:{
      jumpPage(page){
        this.$router.push('/'+page);
      }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .share-wrapper{
    position: relative;
    margin-top: 20px;
  }
  .share-box{
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .share-item{
    width: 45%;
    background: #FFFFFF;
    border-radius: 9px;
    margin-bottom: 20px;
  }
  .share-first{
    background: url("./img/fxewmlj.png") no-repeat;
  }
  .share-second{
    background: url("./img/pyqzywak.png") no-repeat;
  }
  .share-third{
    background: url("./img/fxzclj.png") no-repeat;
  }
  .share-four{
    background: url("./img/mdmktzh.png") no-repeat;
  }
  .share-first,.share-second,.share-third,.share-four{
    height: 128px;
    background-size: contain;
  }

  .share-des{
    padding: 18px 10px;
  }
  .share-des .title{
    font-size: 15px;
    color: #616161;
    line-height: 20px;
  }
  .share-des .small-title{
    font-size: 13px;
    color: #B3B3B3;
    line-height: 20px;
  }
</style>
