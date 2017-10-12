<template>
  <div class="login">
    <v-header :goBack="true" :msg="title" ></v-header>
    <div class="userinfo-wrapper">
      <form action="">
      <div class="username input-border-bottom">
          <input type="tel" name="userphone" v-model="user.newpwd" pattern="^(\w){6,20}"  placeholder="请输入新密码" required >
        </div>
        <div class="username input-border-bottom">
          <input type="tel" name="uservalidate" v-model="user.renewpwd" pattern="^(\w){6,20}" @change="samepwd()"
                 placeholder="请再次输入新密码" required>
        </div>
        <p class="word-explain">密码由6-10位字符组成，包含数字、字母（区分大小写，
          不含空格）</p>
        <div class="btn btn-bg-green btn-login" @click="submit()">下一步</div>
      </form>
    </div>
  </div>
</template>

<script>
  import vHeader from '@/components/componentsmore/vheader.vue'
  import timerBtn from '@/components/componentsmore/timerbtn.vue'
export default {
  name: 'login',
  data () {
    return {
      user:{
        newpwd:'',
        renewpwd:''
      },
      title:'修改密码',
      disabled: false
    }
  },
  methods:{
    samepwd(){
      if(this.user.newpwd != this.user.renewpwd){
        alert('两次密码不一致');
        return;
      }
      alert('新密码设置成功')
    }

  },
  components:{
    vHeader,
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
