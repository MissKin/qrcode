<template>
  <div class="message-wrapper">
    <v-header msg="消息中心" leftmsg="清空消息"></v-header>
    <div class="message-content">
      <div class="mes-tab gradient-green">
        <router-link to="/home/message/userMsg" class="mes-tab-title " tag="span">用户消息</router-link>
        <router-link to="/home/message/systemMsg" class="mes-tab-title" tag="span">系统消息</router-link>
      </div>
      <div class="mes-tab-box">
        <router-view></router-view>
      </div>
      <!--内容-->
      <div class="mes-tab-box message-box" v-show="true">
        消息
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

  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mes-tab{
    display: flex;
    justify-content: space-between;
    padding: 12px 15px;
  }
  .mes-tab-title{
    flex: 1;
    text-align: center;
    font-size: 16px;
    color: rgba(255,255,255,0.5);
  }
  .mes-tab-title.router-active{
    position: relative;
    color: #ffffff;
  }
  .mes-tab-title.router-active:after{
    position: absolute;
    bottom: -31%;
    height: 2px;
    background: #ffffff;
    width: 45%;
    text-align: center;
    content: "";
    left: 50%;
    transform: translate(-50%);
  }

  .message-box{
    height: 100%;
    background: #2ab8aa;
  }
</style>
