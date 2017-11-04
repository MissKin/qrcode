<template>
  <div>
    <v-header :goBack="true" msg="提现" leftmsg="用户指南"></v-header>
    <div class="partner-top-wrapper gradient-green">
      <span class="small-font-15-w">提现金额：</span>
      <div class="input-form">
        <input type="tel" class="" v-model="withdraw_money" placeholder="0.00"/>
        <span class="fee-num" >{{withdraw.expenseYuan}}手续费</span>
      </div>
      <span class="small-font-13-w">普通提现：单笔10万、日限额30万</span>
    </div>
    <section class="content-wrapper">
      <div class="balance-wrapper">
        <div class="balance-detail">
          <ul>
            <li class="balance-item">
              <span class="balance-title">可提现金额：</span>
              <p class="bablance-result">{{withdraw.balanceYuan}}元</p>
            </li>
            <li class="balance-item">
              <span class="balance-title">到账银行卡：</span>
              <p class="bablance-result">{{withdraw.bankCard}}</p>
            </li>
            <li class="balance-item">
              <span class="balance-title">T1普通提现：</span>
              <p class="balance-title">下一工作日结算到账（支持24小时提现到账）</p>
            </li>
          </ul>
        </div>
        <router-link to="/bill/receival" tag="div" class="recorder-box ">
            <span class="arrow-right icon-backicon">提现记录</span>
        </router-link>
      </div>
      <div class="btn btn-bg-green" @click="withdrawFn()">提现</div>
    </section>
    <!--输入登录密码-->
    <section class="withdraw-pop-wrapper popmask" v-show="showpop">
      <div class="withdraw-pop-content">
        <span class="btn-cancel" @click="showpop=false">取消</span>
        <img class="lock" src="./img/lock.png" alt=""/>
        <h3 class="withdraw-title">验证登录密码：</h3>
        <div class="input-radius input-pwd">
          <input type="password" placeholder="请输入登录密码"/>
        </div>
        <a  class="input-radius confirm-withdraw">确认提现</a>
      </div>
    </section>
  </div>
</template>
<script type="text/ecmascript-6">
  import vHeader from '@/components/componentsmore/vheader.vue'
  import {mapState} from 'vuex'
  export default {
    components:{vHeader},
    data(){
      return {
        withdraw_money:'',//提现金额
        showpop:false,//输入登录密码弹窗
      }
    },
    methods:{
      withdrawFn(){
        this.showpop = true;
      }
    },
    computed:{
      ...mapState(['withdraw'])
    },
    mounted(){
      this.$store.dispatch('GET_BALANCE_WITHDRAW')
    },

  };
</script>
<style >
  .partner-top-wrapper{
    position: relative;
    padding: 20px 5.5% 30px;
    height: 105px;
    color: #FFFFFF;
    line-height: 1.5;
  }
  .small-font-13-w{
    font-size: 13px;
    color: #FFFFFF;
  }
  .small-font-15-w{
    font-size: 15px;
    color: #FFFFFF;
  }
  .input-form{
    position: relative;
    height: 48px;
    line-height: 48px;
    background: #FFFFFF;
    border-radius: 88px;
    padding: 0 16px;
    font-size: 30px;
    color: #B3B3B3;
  }
  .input-form:before{
    position: absolute;
    display: inline-block;
    left: 16px;
    content: '￥';
  }
  .fee-num{
    position: absolute;
    display: inline-block;
    right: 16px;
    font-size: 13px;
  }
  /*.input-form:after{
    position: absolute;
    display: inline-block;
    right: 16px;
    content:'0手续费';
    font-size: 13px;
  }*/
  .input-form >input{
    padding-left: 30px;
    width: 75%;
    color: #37C32E;
  }
  .content-wrapper{
    margin: -25px auto 0;
    width: 89%;
  }
  .balance-wrapper{
    position: relative;
    width: 100%;
    background: #FFFFFF;
    border-radius: 6px;
    height: 250px;
    margin-bottom: 30px;
  }
  .balance-detail{
    position: relative;
    padding: 20px 17px;
    border-bottom: 1px solid #DEDEDE;
  }
  .balance-detail .balance-item{
    margin-bottom:20px ;
    color: #616161;
  }
  .balance-item .balance-title{
    font-size: 14px;
    line-height: 21px;
  }
  .balance-item .bablance-result{
    font-size: 18px;
  }
  .balance-item:last-child{
    margin-bottom: 0;
  }
  .recorder-box{
    position: relative;
    height: 45px;
    line-height: 45px;
    padding-left:15px ;
    font-size: 14px;
    color: #616161;
  }
  .arrow-right:before{
    position: absolute;
    content: "\e902";
    width: 20px;
    height: 20px;
    color: #CACACA;
    right: 10px;
    transform: rotate(180deg);
    top: 50%;
    margin-top: -10px;
  }
  .withdraw-pop-content{
    position: relative;
    background: #FFFFFF;
    box-shadow: 0 2px 4px 0 rgba(203,203,203,0.50);
    border-radius: 6px;
    width: 80%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 4.5%;
    text-align: center;
    font-size:14px;
  }
  .withdraw-pop-content .btn-cancel{
    position:absolute;
    top: 4.5%;
    right: 4.5%;
    font-size: 15px;
    color: #B3B3B3;
  }
  .lock{
    width: 59px;
    margin-bottom: 15px;
  }
  .withdraw-pop-content .withdraw-title{
    font-size: 15px;
    color: #616161;
    margin-bottom: 15px;
  }
  .input-radius{
    width: 100%;
    margin-bottom: 10px;
    line-height: 48px;
    line-height: 48px;
    border-radius: 62px;
  }
  .input-pwd{
    border: 1px solid #DEDEDE;
  }
  .input-pwd >input{
    width:80%
  }
  .confirm-withdraw{
    display: block;
    border: 1px solid #37C32E;
    font-size: 16px;
    color: #37C32E;
  }
</style>
