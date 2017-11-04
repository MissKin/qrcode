<template>
  <transition name="opacity">
    <div class="alertBox" v-show="isShow">
      <div class="icon icon-success" v-if="typeSuccess"></div>
      <div class="icon icon-fail" v-else></div>
      <p class="alert-text">{{text}}</p>
    </div>
  </transition>
</template>

<script>
export default {

  data () {
    return {
      isShow:false,
      typeSuccess: true,
      text:'提示文字'
    }
  },

  methods:{
    show(){
      this.isShow = true;
    },
    hide(){
      this.isShow = false;
    },
    setText(type,str){
      this.typeSuccess = type;
      this.text = str;
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .alertBox{
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0,0,0,0.5);
    border-radius: 9px;
    color: #ffffff;
    padding: 10px;
    min-width: 80px;
    text-align: center;
    z-index: 555;
  }
  .alertBox .icon{
    font-size: 50px;
  }
  .alert-text{line-height: 2}
  .opacity-enter-active, .opacity-leave-active{
    transition: opacity 2s;
  }
  .opacity-enter, .opacity-leave-active{
    opacity: 0;
  }
</style>
