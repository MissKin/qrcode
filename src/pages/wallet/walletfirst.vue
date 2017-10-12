<template>
  <div class="wallet-wrapper">
    <div class="wallet-item-wrapper first-wrapper">
      <div class="item-icon-ul">
        <router-link tag="a" :to="{name:'receival'}" class="item-icon border-right border-bottom" >
          <div class="item-icon-img zdcx"></div>
          <span class="text">账单查询</span>
        </router-link>
        <router-link tag="a" to="/balance" class="item-icon border-right border-bottom" >
          <div class="item-icon-img frye"></div>
          <span class="text">分润余额</span>
        </router-link>
        <router-link tag="a" to="/balance" class="item-icon border-bottom" >
          <div class="item-icon-img sysm"></div>
          <span class="text">使用说明</span>
        </router-link>
      </div>
      <div class="item-icon-ul">
        <router-link tag="a" to="/fee" class="item-icon border-right border-bottom">
          <div class="item-icon-img wdfl"></div>
          <span class="text">我的费率</span>
        </router-link>
        <router-link tag="a" to="/qrcode"  class="item-icon border-right border-bottom" >
          <div class="item-icon-img wdtjm"></div>
          <span class="text">我的推荐码</span>
        </router-link>
        <router-link  tag="a" to="/messageText"  class="item-icon border-bottom" >
          <div class="item-icon-img zdgg"></div>
          <span class="text">站点公告</span>
        </router-link>
      </div>
      <div class="item-icon-ul">
        <router-link tag="a" to="/NameAuthentication" class="item-icon border-right border-bottom" >
          <div class="item-icon-img smrz"></div>
          <span class="text">实名认证</span></router-link>
        <router-link tag="a" :to="{name: 'bankcards'}" class="item-icon border-right border-bottom">
          <div class="item-icon-img xykgl"></div>
          <span class="text">信用卡管理</span>
        </router-link>
        <router-link tag="a" to="/NameAuthentication" class="item-icon border-bottom" >
          <div class="item-icon-img xgjsk"></div>
          <span class="text">修改结算卡</span>
        </router-link>
      </div>
      <div class="item-icon-ul">
        <router-link tag="a" to="/modifyPhoneNum" class="item-icon border-right" >
          <div class="item-icon-img xgsjh"></div>
          <span class="text">修改手机号</span></router-link>
        <router-link tag="a" to="/user/changePwd" class="item-icon border-right" >
          <div class="item-icon-img xgmm"></div>
          <span class="text">修改密码</span>
        </router-link>
        <a   class="item-icon border-bottom" @click="logout()">
          <div class="item-icon-img tcdl"></div>
          <span class="text">退出登录</span>
        </a>
      </div>
    </div>
    <swiper :options="swiperOption"  ref="mySwiper">
      <!-- 这部分放你要渲染的那些内容 -->
      <swiper-slide v-for="item in items" key>
        {{item}}
      </swiper-slide>
      <!-- 这是轮播的小圆点 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="wallet-third-module">
      <div class="wallet-module-item border-right">
        <div class="module-img credit">
        </div>
        <div class="module-detail">
          <p class="title">信用卡申请</p>
          <span class="info">免费办理</span>
          <span class="info">信用卡</span>
        </div>
      </div>
      <div class="wallet-module-item">
        <div class="module-img loan">
        </div>
        <div class="module-detail">
          <p class="title">网贷模块</p>
          <span class="info">额度高</span>
          <span class="info">下载快</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Swiper from 'swiper';
  import vueSwiper from 'vue-swiper';
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {

  name: 'walletfirst',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      swiperOption:{
        //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 30,
        autoplay:2000,
        loop: true,
        onSlideChangeEnd: swiper => {
          //这个位置放swiper的回调方法
          this.page = swiper.realIndex+1;
          this.index = swiper.realIndex;
        }
      },
      items:[
        'page1', 'page2', 'page3'
      ]
    }
  },
  methods:{
    onSlideChangeStart(currentPage){
      console.log('onSlideChangeStart' + currentPage)
    },
    onSlideChangeEnd(currentPage){
      console.log('onSlideChangeEnd', currentPage);
    },
    logout(){
      this.$store.dispatch('LOGOUT')
    }
  },
  created(){
    var mySwiper = new Swiper('.swiper-container',{
      direction: 'horizontal',
      loop: true,
      autoplay:3000,
      pagination : '.swiper-pagination',
    })

  },
  computed:{
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mouted(){
    //这边就可以使用swiper这个对象去使用swiper官网中的那些方法
    this.swiper.slideTo(0, 0, false);
  },
  components:{
    vueSwiper
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wallet-item-wrapper,.wallet-third-module{
    position: relative;
    width: 100%;
    background: #FFFFFF;
    border-radius: 15px;
    margin-bottom: 10px;
  }
  .wallet-item-wrapper:before{
    position: absolute;
    content: "";
    left: 14%;
    top: -21px;
    border: 10px solid transparent;
    border-bottom: 11px solid #ffffff;
  }
  .item-icon-ul{
    display: flex;
    height: 50%;
  }
  .item-icon{
    flex: 1;
    text-align: center;
    padding: 3.6% 0 3%;
  }
  .border-right{border-right: 1px solid #ECECEC;}
  .border-bottom{border-bottom: 1px solid #ECECEC;}
  .smrz{
    background-image: url('./img/smrz@2x.png');
  }
  .xykgl{
    background-image: url('./img/xykgl@2x.png');
  }
  .xgjsk{
    background-image: url('./img/xgjsk@2x.png');
  }
.zhye{
  background-image: url('./img/zhye@2x.png');
}
.frye{
  background-image: url('./img/frye@2x.png');
}
.zdcx{
  background-image: url('./img/zdcx@2x.png');
}
.wdfl{
  background-image: url('./img/wdfl@2x.png');
}
.wdtjm{
  background-image: url('./img/wdtjm@2x.png');
}
.credit{
  background-image: url('./img/kuaijie@2x.png');
}
  .loan{
    background-image: url('./img/daihuan@2x.png');
  }
  .sysm{
    background-image: url('./img/sysm@2x.png');
  }
  .zdgg{
    background-image: url('./img/zdgg@2x.png');
  }
  .xgsjh{
    background-image: url('./img/xgsjh@2x.png');
  }

  .xgmm{
    background-image: url('./img/xgmm@2x.png');
  }

  .tcdl{
    background-image: url('./img/tcdl@2x.png');
  }
@media (-webkit-min-device-pixel-ratio: 3.0),(min-device-pixel-ratio: 3.0) {
  .xgsjh{
    background-image: url('./img/xgsjh@3x.png');
  }

  .xgmm{
    background-image: url('./img/xgmm@3x.png');
  }

  .tcdl{
    background-image: url('./img/tcdl@3x.png');
  }
  .xykgl{
    background-image: url('./img/xykgl@3x.png');
  }
  .xgjsk{
    background-image: url('./img/xgjsk@3x.png');
  }
  .sysm{
    background-image: url('./img/sysm@3x.png');
  }
  .smrz{
    background-image: url('./img/smrz@3x.png');
  }
  .zdgg{
    background-image: url('./img/zdgg@3x.png');
  }
    .zhye{
      background-image: url('./img/zhye@3x.png');
    }
    .frye{
      background-image: url('./img/frye@3x.png');
    }
    .zdcx{
      background-image: url('./img/zdcx@3x.png');
    }
    .wdfl{
      background-image: url('./img/wdfl@3x.png');
    }
    .wdtjm{
      background-image: url('./img/wdtjm@3x.png');
    }
    .credit{
      background-image: url('./img/kuaijie@3x.png');
    }
    .loan{
      background-image: url('./img/daihuan@3x.png');
    }

  }
  .item-icon-img{
    height: 45px;
    width: 45px;
    background-size: contain;
    display: inline-block;
  }
  .item-icon .text{
    display: block;
    font-size: 14px;
    color: #616161;
    margin-top: 4px;
  }
  .last-item-icon{
    padding-top: 20px;
    font-size: 20px;
    color: #DEDEDE;
    line-height: 23px;
  }
  .wallet-banner{
    width: 100%;
    height: 88px;
    background: #2ab8aa;
    margin-bottom: 10px;
  }
  .wallet-third-module{
    position: relative;
    width: 100%;
    display: flex;
  }
  .wallet-third-module .wallet-module-item{
    flex: 1;
    font-size: 0;
    padding: 2.1% 0 2.1% 3.0%;
  }
  .wallet-module-item .module-img{
    display: inline-block;
    background-size: 100%;
    width: 56px;
    height: 56px;
  }
  .module-detail{
    display: inline-block;
    margin-left: 8px;
  }
  .module-detail .title{
    font-size: 15px;
    color: #616161;
    line-height: 17px;
  }
  .module-detail .info{
    display: block;
    font-size: 14px;
    color: #B3B3B3;
    line-height: 17px;
  }
  .swiper-container{
    height: 88px;
    text-align: center;
    background: #0e90d2;
  }
</style>
