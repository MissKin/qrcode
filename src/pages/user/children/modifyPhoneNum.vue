<template>
<div class="modify-phone-wrapper">
  <v-header :goBack="true" msg="修改手机号"></v-header>
  <div class="content-wrapper">
    <div class="hasPhone" v-if="hasPhone">
      <div class="phone-text"><span>原手机号码: </span> <b v-model="phone">18900187652</b></div>
    </div>
    <div v-else>
      <form-input title="新手机号" input_type="tel"  v-model="phone" place_str="请输入新手机号"></form-input>
    </div> <!--验证码的input框-->
    <form-input-timer ref="forminputtimer" title="验证码" place_str="输入验证码" :disableded="disableded" v-on:run="sendCode"></form-input-timer>
    <div class="btn btn-bg-green next-btn">下一步</div>
  </div>
</div>
</template>
<script>
  import vHeader from '@/components/componentsmore/vheader.vue'
  import formInputTimer from '@/components/componentsmore/formInputTimer.vue'
  import formInput from '@/components/componentsmore/forminput.vue'
  import {isPhone} from '@/utils/validate.js'
  export default {
    components:{
      vHeader,
      formInputTimer,
      formInput
    },
    data(){
      return {
        hasPhone:true,
        phone:''
      }
    },
    methods:{
      sendCode(){
        this.$refs.forminputtimer.setDisabled(true);
        this.$refs.forminputtimer.start()
      }
    },
    computed:{
      disableded(){
        return !isPhone(this.phone);
      }
    }
  };
</script>
<style scoped>
  .content-wrapper{
    position: relative;
    padding: 12px;
  }
  .phone-text{
    font-size:15px;
    color:#616161;
    margin-bottom: 12px;
  }
  .next-btn{
    margin-top: 20px;
  }
</style>
