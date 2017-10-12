<template>
  <div>
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
    <div class="nav-wrapper border-top1px">
      <div class="first-nav nav-item">
        <router-link to="/home/wallet" class="nav-a-item">
          <div class="nav-icon wallet-icon"></div>
          <span class="text">钱包</span>
        </router-link></div>
      <div class="second-nav nav-item"><router-link to="/home/share" class="nav-a-item">
        <div class="nav-icon share-icon"></div>
        <span class="text">分享</span>
      </router-link></div>
      <div class="third-nav nav-item"><router-link to="/home/message" class="nav-a-item">
        <div class="nav-icon message-icon"></div>
        <span class="text">消息</span>
      </router-link></div>
      <div class="four-nav nav-item"><router-link to="/home/user" class="nav-a-item">
        <div class="nav-icon user-icon"></div>
        <span class="text">我的</span>
      </router-link></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav-wrapper{
    position: fixed;
    display: flex;
    justify-content: center;
    bottom: 0;
    left:0;
    width: 100%;
    height: 49px;
    background: #fff;
  }
  .nav-wrapper > .nav-item{
    flex: 1;
    font-size: 12px;
    color: #979797;
    text-align: center;
  }
  .nav-item img{height: 30px;}
  .nav-a-item .text {
    display: block;
  }
  .border-top1px{
    border-top: 1px solid #EBEBEB;
  }

  .content-wrapper{
    position: relative;
    bottom: 49px;
    width: 100%;
    top: 0;
    height: calc(100% - 49px);
  }
  .nav-icon{
    display: inline-block;
    height: 30px;
    width: 100%;
    background-repeat: no-repeat;
    background-position-x: center;
  }
  .wallet-icon{
    background-image: url('./img/nav-wallet.png');
  }
  .router-active .wallet-icon{
    background-image: url('./img/active-wallet.png');
  }
  .share-icon{
    background-image: url('./img/nav-share.png');
  }
  .router-active .share-icon{
    background-image: url('./img/active-share.png');
  }
  .message-icon{
    background-image: url('./img/nav-message.png');
  }
  .router-active .message-icon{
    background-image: url('./img/active-message.png');
  }
  .user-icon{
    background-image: url('./img/nav-user.png');
  }
  .router-active .user-icon{
    background-image: url('./img/active-user.png');
  }
  .router-active .text{
    color: #42D95E;
  }
</style>
