<template>
  <div class="login">
    <!--<div class="loginheader">
      <img src="./img/msflogo2.png" class="logoimg"/>
    </div>-->
    <v-header msg="登录" goBack="true"></v-header>
    <div class="userinfo-wrapper">
      <div class="username input-border-bottom">
          <i class="icon icon-phone"></i>
          <input type="tel" class="inputInfo" name="phone" v-model="phone" placeholder="请输入手机号" >
          <i class="icon-clear" @click="clearInput('phone')" ></i>
        </div>
        <div class="username input-border-bottom">
          <i class="icon icon-lock"></i>
          <input type="password" class="inputInfo" name="password" v-model="password" placeholder="请输入密码">
          <i class="icon-clear" @click="clearInput('password')"></i>
        </div>
        <p class="" >
          <router-link class="small-font-green" to="/getpassword">忘记密码？</router-link>
        </p>
        <div class="btn btn-bg-green btn-login" @click="userLogin()">登录</div>

      <p class="small-font-green new-user">新用户注册</p>
      <p class="small-font-green  kefu">客服热线：400-1234-567</p>
    </div>
  </div>
</template>

<script>
  import vButton from '@/components/componentsmore/button.vue'
  import vHeader from '@/components/componentsmore/vheader.vue'
  import {login} from 'api/getdata.js'
export default {
  name: 'login',
  data () {
    return {
      phone:'15606817110',//手机号注册15606817110,,17682325473
      password: '123456',//密码
      loginIp:null,
      price:5,
    }
  },
  methods:{
    userLogin(){
     this.axios({
       methods:'get',
       url:'/qrpay.open/mch/login',
       params:{phone:this.phone,password:this.password,loginIp:'192.168.2.11'},
       withCredentials:true,
     }).then(response => {
        console.log(response.headers);
        console.log(response.headers['Set-Cookie']);
        console.log(response.headers['transfer-encoding']);

        response = response.data;
        console.log(response);
        // 传给state
        this.$store.commit('user_id',this.phone);
        if(response.message == '手机号码不能为空'){
          alert(response.message); return;
        }
        if(response.message == '登录成功'){
         /* this.$dialog(true,'登录成功');*/
          this.$router.push('/wallet')
        }else {
          this.$loading();
        }
      },function (err) {
        console.log('错误');
      });
     //隐藏弹窗
      setTimeout(function(){
        $loading.end();
      },2000)
    },
    clearInput(obj){
      var val = obj;
      console.dir(val);
      switch (val){
        case 'phone': this.phone = '';break;
        case 'password': this.password = '';break;
        default: break;
      }
    },
    test(){
      this.$store.commit('BANKCARDID',123);
      console.log( this.$store.state.ccBankCardId)
    }

  },
  components:{vHeader}
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
    margin: 45px auto 10px;
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
  .kefu{
    position: absolute;
    bottom: 3%;
    left: 50%;
    margin-left: -82.5px;
  }
  .icon-clear{
    float: right;
    margin-top: 7px;
  }
</style>
