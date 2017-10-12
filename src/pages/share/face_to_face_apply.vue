<template>
  <div>
    <v-header :goBack="true" msg="面对面开通"></v-header>
      <div class="content-wrapper">
        <notice-yellow text="替好友开通后，系统默认关联在您的名下"></notice-yellow>
        <form-input title="手机号码" input_type="tel"  v-model="phone" place_str="请输入对方手机号"></form-input>
        <!--验证码的input框-->
        <form-input-timer ref="forminputtimer" title="验证码" place_str="输入验证码" :disableded="disableded" v-on:run="sendCode"></form-input-timer>
        <form-input title="对方密码" input_type="password"  v-model="password" place_str="请设置对方的密码"></form-input>
        <div class="btn btn-bg-green register-btn">注册</div>
      </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import formInput  from '@/components/componentsmore/forminput.vue'
  import vHeader from '@/components/componentsmore/vheader.vue'
  import noticeYellow from '@/components/componentsmore/noticeYellow.vue'
  import formInputTimer from '@/components/componentsmore/formInputTimer.vue'
  import {isPhone} from '@/utils/validate.js'
  export default {
   data(){
     return{
       phone:'15757185394',
       password:'113245'
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
    },
    components:{
      formInput,
      vHeader,
      noticeYellow,
      formInputTimer
    }
  };
</script>
<style scoped>
.content-wrapper{
  position: relative;
  padding: 12px;
}
  .register-btn{
    margin-top: 20px;
  }

</style>
