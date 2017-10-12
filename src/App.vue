<template>
  <div id="app">
    <transition name="route-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>

    <transition name="route-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'app',
  }
</script>
<style scoped>
  @import './common/style/base.css';
  @import './common/style/font.css';
  #app { height: 100%; }
  .route-fade-enter-active,.route-fade-leave-active{
    transition: opacity 0.3s
  }
  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }
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
    background-image: url('./assets/nav-wallet.png');
  }
  .router-link-active .wallet-icon{
    background-image: url('./assets/active-wallet.png');
  }
  .share-icon{
    background-image: url('./assets/nav-share.png');
  }
  .router-link-active .share-icon{
    background-image: url('./assets/active-share.png');
  }
  .message-icon{
    background-image: url('./assets/nav-message.png');
  }
  .router-link-active .message-icon{
    background-image: url('./assets/active-message.png');
  }
  .user-icon{
    background-image: url('./assets/nav-user.png');
  }
  .router-link-active .user-icon{
    background-image: url('./assets/active-user.png');
  }
  .router-link-active .text{
    color: #42D95E;
  }
</style>
