<template>
  <transition :name="animateName">
    <div class="loadings" v-show="isShow">
      <div class="loadings_loader">
        <div class="loadings_loader_dot"></div>
        <div class="loadings_loader_dot"></div>
        <div class="loadings_loader_dot"></div>
        <div class="loadings_loader_dot"></div>
        <div class="loadings_loader_dot"></div>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
	components: {},
	data(){
	  return {
	    isShow: false,
      hasAnimate:false
    }
	},
  computed:{
    animateName(){
      return this.hasAnimate ? 'opacity':'';
    }
  },
  methods: {
	  /*
	  * 显示loading
	  */
	  show(){
	    this.isShow = true;
    },
    /*
     * 隐藏loading
     */
    hide(){
	    this.isShow = false;
    },
    /*
    * 开启动画效果
    */
    openAnimate(){
      this.hasAnimate = true;
    },
    /*
    * 除去动画效果
    * @return {Promise} 返回Promise
    */
    removeAnimate(){
      return new Promise( (resolve) => {
        this.hasAnimate = false;
        resolve();
      })
    }
  },
  };
</script>
<style scoped>
  .loadings {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: transparent;
  }
  .loadings_loader {
    position: absolute;
    top: 50%;
    left:50%;
    transform:translate3d(-50%,-50%,0);
  }
  .loadings_loader_dot {
    width:20px;
    height: 20px;
    background :#3ac;
    border-radius: 100%;
    display: inline-block;
    animation :slide 1s infinite;
    margin-right: 6px;}
  .loadings_loader_dot:nth-child(1){
    animation-delay:0.3s;
  }
  .loadings_loader_dot:nth-child(2){
    animation-delay:0.4s;
  }
  .loadings_loader_dot:nth-child(3){
    animation-delay:0.5s;
  }
  .loadings_loader_dot:nth-child(4){
    animation-delay:0.6s;
  }
  .loadings_loader_dot:nth-child(5){
     animation-delay:0.7s;
   }
  .loadings_loader_dot:nth-child(6){
      animation-delay:0.8s;

    }
  @keyframes slide{
   0%{
     transform:scale(1)
   }
    50%{
      opacity: 0.3;
      transform: scale(2);
    }
    100%{
      transform: scale(1);
    }
  }
  .opacity-enter-active,.opacity-leave-active{
    transition: all 0.6s
  }
  .opacity-enter,.opacity-leave-active{
    opacity: 0;
  }


</style>
