<template>
  <div class="register-box">
    <v-header msg="注册" goBack="true"></v-header>
    <div class="userinfo-wrapper">
      <form action="">
        <div class="username input-border-bottom">
          <i class="icon icon-phone"></i>
          <input type="tel" class="inputInfo" name="phone" v-model="user.phone" placeholder="请输入注册手机号" />
        </div>
        <div class="username input-border-bottom">
          <i class="icon icon-lock"></i>
          <input type="password" class="inputInfo" name="password" v-model="user.password" placeholder="请输入密码，长度6-10位"/>
        </div>
        <div class=" input-border-bottom">
          <input type="tel" name="code" v-model="user.code" placeholder="请输入验证码" >
          <timer-btn ref="timerbtn" v-on:run="sendCode" :disableded="disableded" ></timer-btn>
        </div>
        <div class=" input-border-bottom">
          <input type="text" name="checkType" v-model="user.checkType"  placeholder="请输入邀请码（选填） "/>
        </div>
        <div class="btn btn-bg-green btn-login" @click="lastRegister()">注  册</div>
      </form>
    </div>
    <show-alert :showAlert="showAlert" :alertText="alertText" :alertSuccess="alertSuccess"></show-alert>
  </div>
</template>

<script>
  import vHeader from '@/components/componentsmore/vheader.vue'
  import showAlert from '@/components/componentsmore/showAlert.vue'
  import timerBtn from '@/components/componentsmore/timerbtn.vue'
export default {

  data () {
    return {
      showAlert:false,//不显示弹窗
      alertText:"",//弹窗文字
      alertSuccess: false,//弹窗是否显示成功
      computedTime:0,//倒计时
      user:{
        phone:null,//手机号
        password:null,  //密码
        code:null , //验证码
        checkType:1, // 验证类型： 1商户注册
        inviterPhone:1, //邀请者手机号码 1
      }
    }
  },
  components:{
    vHeader,
    showAlert,
    timerBtn
  },
  computed:{
    rightPhoneNumber(){
      return /^1\d{10}$/gi.test(this.user.phone)
    },
    rightNewPwd(){
      return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/gi.test(this.user.password)
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
    sendCode(){
      this.$refs.timerbtn.setDisabled(true);
      if(this.rightPhoneNumber){
        this.$http({
          method:'GET',
          url:'/qrpay.open/mch/get_check_code',
          params:{phone:this.user.phone,checkType:this.user.checkType}
        })
          .then( (response) => {
            response = response.body;
            console.log(response.result);
            if(response.result){
              this.$refs.timerbtn.start();//启动倒计时
            }else {
              this.showAlert = true;//显示弹窗
              this.alertText = response.message;
              this.alertSuccess = false; //错误类的弹窗
              this.$refs.timerbtn.stop();//关闭倒计时
            }
          },response => {
            console.log(response.err)
          })
      }
    },
    lastRegister(){
      var register_result = this.register();
      if(register_result.indexOf(false) > -1){
        this.showAlert = true;//显示弹窗
        this.alertText = '请填写正确的数据格式或填写完整';
        this.alertSuccess = false; //错误类的弹窗
        return;
      } else {
        this.$http({
          method:"GET",
          url:'/qrpay.open/mch/register',
          params:this.user
        }).then( (response) => {
          response = response.body;
          console.log(response.message);
        }).catch((response)=> {
          console.log(response)
        })
      }
    },
    register(){
      var User = this.user;
      var result=[];
      for(var o in User){
        switch (o){
          case 'phone':  result.push(this.validateVal(User[o],/^1\d{10}$/gi));break;
          case 'password':
            result.push(this.validateVal(User[o],/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/gi));break;
          case 'code': result.push(this.validateVal(User[o],/^\d{6}/gi));break;
          case 'inviterPhone':result.push(this.validateVal(User[o]));break;
        }
      }
      return result;
    },
    validateVal(val,reg){
      if(val){
        var reg = reg || '';
        if(reg){
          return  reg.test(val);
        }
        return true;
      }else {
        return false;
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .register-box{
    position: relative;
    height: 100%;
    overflow: hidden;
    background: #ffffff;
  }
  .userinfo-wrapper{
    width: 89%;
    margin: 35px auto 10px;
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
  .new-user{
    margin-top: 14px;
    text-align: center;
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
</style>
