<template>
  <div class="wallet-wrapper">
      <div class="wallet-nav gradient-green">
        <div class="wallet-nav-item">
          <router-link to="/wallet" class="bg-image">
            <div class="bg-image-wallet wallet-nav-img"></div>
            <span class="text">我的钱包</span>
          </router-link>
        </div>
        <div class="wallet-nav-item">
          <router-link to="/wallet/second">
            <div class="bg-image-ylzf wallet-nav-img"></div>
            <span class="text">银联支付</span></router-link>
        </div>
        <div class="wallet-nav-item"> <router-link to="/wallet/third">
          <div class="bg-image-smzf wallet-nav-img"></div>
          <span class="text">扫码支付</span></router-link></div>
      </div>
    <div class="wallet-content">
      <transition name="route-fade" mode="out-in">
        <router-view></router-view>
      </transition>

    </div>
  </div>
</template>

<script>
export default {
  name: 'wallet',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.wallet-nav{
  position: relative;
  width: 76%;
  display: flex;
  justify-content: space-between;
  height: 165px;
  padding: 50px 12% 0;
}
  .wallet-nav-item{
    width: 65px;
    text-align: center;

  }
  .wallet-nav-item .text{
    font-size: 14px;
    color: #FFFFFF;
  }
.bg-image-wallet{
  background-image: url('./img/wdqb@2x.png')
}
.bg-image-ylzf{
  background-image: url('./img/ylewm@2x.png')
}
.bg-image-smzf{
  background-image: url('./img/smzf@2x.png')
}
@media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3){
  .bg-image-wallet{
    background-image: url('./img/wdqb@3x.png')
  }
  .bg-image-ylzf{
    background-image: url('./img/ylewm@3x.png')
  }
  .bg-image-smzf{
    background-image: url('./img/smzf@3x.png')
  }
}
.wallet-nav-img{
  width: 65px;
  height: 65px;
  display: inline-block;
  background-size: contain;
}
.wallet-content{
  position: relative;
  width: 93.6%;
  margin: -15% auto 0;

}
</style>
