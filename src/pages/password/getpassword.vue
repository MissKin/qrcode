<template>
  <div class="login">
    <v-header msg="找回密码" :goBack="true"></v-header>
    <div class="userinfo-wrapper">
        <div class="username input-border-bottom">
          <input type="tel" name="phone" v-model="phoneNumber" maxlength="11"  placeholder="请输入手机号 "  >
        </div>
        <div class=" input-border-bottom">
          <input type="tel" name="check" v-model="checkNumber" placeholder="请输入验证码" >
          <timer-btn ref="timerbtn" v-on:run="sendCode" :disableded="disableded" ></timer-btn>
        </div>
        <div class=" input-border-bottom">
          <input type="password" name="userphone" v-model="newpassword"  placeholder="请输入新密码 "  >
        </div>
        <div class=" input-border-bottom">
          <input type="password" name="userphone" v-model="comfirmpasword"  placeholder="请再次输入新密码 "  >
        </div>
        <p class="word-explain">密码由6-10位字符组成，包含数字、字母（区分大小写，
          不含空格）</p>
        <div class="btn btn-bg-green btn-login" @click.prevent="forget_password">下一步</div>
    </div>
    <show-alert :showAlert="showAlert" :alertText="alertText" :alertSuccess="alertSuccess"></show-alert>
    <div>
      {{rightPhoneNumber}}
    </div>
  </div>
</template>

<script>
  import vHeader from '@/components/componentsmore/vheader.vue'
  import timerBtn from '@/components/componentsmore/timerbtn.vue'
  import showAlert from '@/components/componentsmore/showAlert.vue'
  import {isPhone,validatePwd} from '@/utils/validate.js'
  import {forget_modify_password , get_check_code} from 'api/getdata.js'
export default {
  name: 'login',
  data () {
    return {
      phoneNumber:null, //手机号码
      computedTime:0,//倒计时
      checkNumber:null, //验证码
      newpassword:null, //新密码
      comfirmpasword:null, //确认密码
      alertText:'', //弹窗提示文字
      alertSuccess:false,//弹窗显示成功的图标
      showAlert:false,//是否显示弹窗
      checkType:2,//验证码验证2 忘记密码
    }
  },
  computed:{
    rightPhoneNumber(){
      return isPhone(this.phoneNumber);
    },
    rightNewPwd(){
      return validatePwd(this.newpassword);
    },
    disableded(){
      return !this.rightPhoneNumber;
    }
  },
  watch:{
    showAlert:'hiddenAlert',
  },
  methods:{
    hiddenAlert(){
      setTimeout(()=>{
        this.showAlert = false;
      },2000)
    },
    forget_password(){
      if( !this.rightPhoneNumber ){
          this.showAlert= true;
          this.alertSuccess= false;
          this.alertText="手机号码格式不正确"
      }else if( !(/^\d{6}/gi.test(this.checkNumber))){
        this.showAlert= true;
        this.alertSuccess= false;
        this.alertText="验证码不对"
      }else if(!this.rightNewPwd){
        this.showAlert= true;
        this.alertSuccess= false;
        this.alertText="密码格式不对"
      } else if( this.newpassword !== this.comfirmpasword){
        this.showAlert= true;
        this.alertSuccess= false;
        this.alertText="两个密码不一致"
      } else {
        this.showAlert= true;
        this.alertSuccess= true;
        this.alertText="成功";
        forget_modify_password(this,{
          params:{phone:this.phoneNumber,password:this.newpassword,rePassword:this.comfirmpasword}
        }).then( response => {
          response = response.body;
            if(response.result){
              alert('密码修改成功');
              this.$router.push('/login');//跳转到 登录页
            }
        }, response => {
          console.log('错误了了')
        })
      }
    },
    sendCode(){
      this.$refs.timerbtn.setDisabled(true);
      if(this.rightPhoneNumber){
        get_check_code(this,{params:{phone:this.phoneNumber,checkType:this.checkType}})
       .then( (response) => {
          response = response.body;
          if(response.result){
            this.$refs.timerbtn.start();//启动倒计时
          }else {
            this.showAlert = true;//显示弹窗
            this.alertText = response.message;
            this.alertSuccess = false; //错误类的弹窗
            this.$refs.timerbtn.stop();//关闭倒计时
          }
        },response => {
          console.log('错误了1222')
        })
        }
    },

  },
  components:{
    vHeader,
    showAlert,
    timerBtn
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login{
    position: relative;
    height: 100%;
    overflow: hidden;
    background: #ffffff;
  }
  .loginheader{
    width: 450px;
    height: 200px;
    border-radius: 80%;
    left: 50%;
    position: relative;
    margin-left: -225px;
    margin-top: -68px;
    background: linear-gradient(90deg, #92E438 0%, #1CCA3A 100%)!important;
  }
  .loginheader > .logoimg{
    position: absolute;
    bottom: -17%;
    width: 90px;
    height: 90px;
    left: 50%;
    margin-left: -45px;
    z-index: 8;
  }
  .userinfo-wrapper{
    width: 89%;
    margin: 25px auto 10px;
  }
  .input-border-bottom{
    font-size: 16px;
    color: #4E4E4E;
    border-bottom: 1px solid #ededed;
    height: 30px;
    line-height: 30px;
    margin-bottom: 14px;
  }
  .input-border-bottom .icon{
    font-size: 22px;
    vertical-align: middle;}
  .btn-login{
    margin-top: 30px;
  }
  .btn-validate{
    padding: 2px 5px;
    font-size: 13px;
    float: right;
    line-height: 1.5;
    background: #fff;
    outline: none;
    color: #B3B3B3;
    border: 1px solid #B3B3B3;
    border-radius:4px;
  }
.btn-validate.green{
  color: #37C32E;
  border: 1px solid #37C32E;
  border-radius:4px;
}
  .btn-validate.disable{
    color: #B3B3B3;
    border: 1px solid #B3B3B3;

  }
  .word-explain{
    font-size: 13px;
    color: #979797;
  }
</style>
