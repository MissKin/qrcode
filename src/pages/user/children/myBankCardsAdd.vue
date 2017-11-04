<template>
	<div class="banks-wrapper">
    <v-header goBack="true" msg="添加银行卡"></v-header>
    <div class="contents-wrapper">
      <div class="noticeYellow">请修改用户姓名名下的银行卡信息</div>
      <div class="input-box">
        <span class="title">持卡人</span><p class="text">{{bankInfo!=null?bankInfo.certName:''}}</p>
      </div>
      <div class="input-box">
        <span class="title">身份证</span><p class="text">{{bankInfo!=null?bankInfo.certNo:''}}</p>
      </div>
      <form-input title="卡号" input_type="text" v-model="bankCardNo" place_str="请输入卡号"></form-input>
      <div class="input-box" @click="bankShow=true">
        <span class="title">开户银行</span><p class="text">{{bankName?bankName:'开户银行'}}</p>
      </div>
      <form-input title="手机号" input_type="tel" v-model="mobile" place_str="请输入银行预留手机号"></form-input>
      <div class="btn btn-bg-green next-btn" @click="bankListAdd" >确认</div>
    </div>
    <!--银行搜索-->
    <transition name="router-slid" mode="out-in" >
      <div class="search-wrapper" v-show="bankShow">
        <v-header goToBack="true" @backFun="backFun" search="true" v-model="bankSearch" leftmsg="搜索"
                  @leftFun="get_bank"></v-header>
        <div class="notice">迷糊匹配，如“工商、农业、建设”银行等……</div>
        <ul class="search-box" @click="selectBank($event)" >
          <li class="result-item" v-for="bank in bankList" :name="bank.bankCode">{{bank.bankName}}</li>
        </ul>

      </div>
    </transition>
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
      bankCardNo:'',//银行卡号
      bankName:'',//银行名称
      bankCode:'',//银行编号
      mobile:'',
      bankInfo:null,//用户信息
      bankSearch:'银行',//搜索框中的文字
      bankShow:false,//显示搜索div
      bankList:null,//银行搜索
    }
	},
    created(){this.load()},
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
    },
    load(){
        this.axios({
          method:'GET',
          url:'/qrpay.open/mch/to_add_bank_card'
        }).then(res => {
          res = res.data;
          if(res.result == null){
            alert(res.result.message);
          }else{
            this.bankInfo = res.result;
          }
        })

    },
    get_bank(){
      this.axios({
        method:'POST',
        url:'/qrpay.open/mch/get_bank',
        data:{"bankName":this.bankSearch}
      }).then( res => {
        res = res.data;
        this.bankList = res.result;

      })
    },
    //搜索页面的返回按钮,表示隐藏当前页面
    backFun(){
      this.bankShow =false;
    },
    selectBank(e){
      var target = e.target;
      this.bankCode= $(target).attr('name')
      this.bankName = $(target).text();
      this.bankShow = false;
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
  .search-wrapper{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: #F2F2F2;
  }
  .notice{
    height: 40px;
    background: #F9E9CF;
    border: 1px solid #EECD94;
    font-size: 13px;
    color: #E2A33B;
    line-height: 40px;
    padding-left: 8px;
  }
  .search-box{
    position: absolute;
    overflow-x: hidden;
    padding-left: 14px;
    background: #fff;
    overflow-y: scroll;
    bottom: 0;
    top: 87px;
    width: calc(100% - 14px);
  }
  .search-box .result-item{
    width: 100%;
    height: 40px;
    font-size: 15px;
    color: #616161;
    line-height: 40px;
    border-bottom: 1px solid #DEDEDE;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .search-box .result-item:last-child{
    border-bottom:none;
  }
  .input-box{
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    height: 44px;
    line-height: 44px;
    font-size: 14px;
    background: #FFFFFF;
    border: 1px solid #E4E4E4;
    border-radius: 9px;
    padding: 0 10px;
    margin-bottom: 5px;
  }
  .input-box .title{
    display: inline-block;
    width: 78px;
    padding-right: 5px;
  }
  .input-box .text{
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    color: #0f0a0a;
  }
</style>
