<template>
	<div class="banks-wrapper">
    <v-header goBack="true" msg="添加银行卡"></v-header>
    <div class="contents-wrapper">
      <div class="noticeYellow">请修改用户姓名名下的银行卡信息</div>
      <form-input title="持卡人" input_type="text" v-model="idName" place_str="用户姓名"></form-input>
      <form-input title="身份证号" input_type="text" v-model="idCardNo" place_str="230184198903223312"></form-input>
      <form-input title="银行名称" input_type="text" v-model="bankName" place_str="中国银行"></form-input>
      <form-input title="卡号" input_type="text" v-model="bankCardNo" place_str="请输入银行卡号"></form-input>
      <form-input title="手机号" input_type="tel" v-model="mobile" place_str="请输入银行预留手机号"></form-input>
      <div class="btn btn-bg-green next-btn" @click="bankListAdd" >确认</div>
      {{bankcards}}
    </div>
  </div>
</template>
<script>
  import vHeader from '@/components/componentsmore/vheader.vue'
  import formInput from '@/components/componentsmore/forminput.vue'
  import axios from 'axios'
  export default {
    components:{vHeader,formInput},
	data(){
	  return {
      idName:'马洪亮',// 用户名
      idCardNo:'230184198903223312',//身份证号
      bankCardNo:'6468',//银行卡号
      bankName:'中国银行',//银行名称
      mobile:'1504259655000'
    }
	},
	methods: {
    add_bank_card(){
      axios.post('/qrpay.open/mch/add_bank_card',{
        idName: this.idName,
        idCardNo: this.idCardNo,
        bankCardNo:this.bankCardNo,
        bankName:this.bankName,
        mobile:this.mobile
      }).then( response => {
         response = response.data;
        console.log(response)
      }).catch(err => {
        console.log(err)
      })
    },
    bankListAdd(){
      this.$store.dispatch('asyncBankcards')
    }
  },
    computed:{
      bankcards(){
        return this.$store.state.bankcards;
      }
    }
  };
</script>
<style scoped>
  .banks-wrapper{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: #F2F2F2;
    z-index: 5;
  }
  .contents-wrapper{
    background: #F1F1F1;
    padding: 12px;
  }
  .noticeYellow{
    background: #F9E9CF;
    border: 1px solid #EECD94;
    padding:0 8px ;
    font-size: 12px;
    color: #E2A33B;
    letter-spacing: 0;
    line-height: 22px;
    margin-bottom: 10px;
  }
  .next-btn{
    margin-top: 20px;
  }
</style>
