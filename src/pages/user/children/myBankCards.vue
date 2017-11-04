<template>
	<div class="banks-wrapper">
    <v-header goBack="true" msg="快捷银行卡"></v-header>
    <div class="contents-wrapper scroll-wrapper">
      <div class="my-back-card" v-for="bank in bankcards.list" v-show="bankcards.list.length > 0">
        <div class="card-left">
          <img :src="bank.iconPath" alt="">
        </div>
        <div class="card-right">
          <h3>{{bank.bankName}}</h3>
          <p>银行卡名称</p>
          <h4>**** **** **** *** {{bank.bankCardNo}}</h4>
        </div>
        <div class="bank-del" @click="deleteBank(bank.mchBankCardId)" >删除</div>
      </div>
      {{payinfo}}
      <router-link :to="{name: 'bankcardsadd'}"  tag="a" class="next-add" href="bankCardAdd.html">+ 添加银行卡</router-link>
    </div>
    <transition name="router-slid" mode="out-in" >
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
	</div>
</template>
<script>
  import vHeader from '@/components/componentsmore/vheader.vue'
  import formInput from '@/components/componentsmore/forminput.vue'
  import {mapState} from 'vuex'
  export default {
    components:{vHeader,formInput},
    data(){
      return {
        bankList: null,//银行卡列表
      }
    },
    methods: {
      deleteBank(objId){
        let conf = confirm('确定删除');
        if(conf){
          this.axios.get('/qrpay.open/mch/del_bank_card',{params:{mchBankCardId:objId}})
            .then( response => {
              response = response.data;
              console.log(response.result)
              console.log(objId);
            })
        }
      },
    },
    computed:{
        ...mapState(['bankcards']),
      payinfo(){
          this.$store.state.payinfo;
      }
    },
    mounted(){
        this.$store.dispatch('LOAD_BANK_CARDS');
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
  .scroll-wrapper{
    position: absolute;
    top: 55px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    overflow-y: scroll;
  }
  div.my-back-card{
    width:100%;
    height:104px;
    background-image: linear-gradient(135deg, #FFBB51 0%, #FF6622 100%);
    border-radius: 10px;
    margin-bottom: 15px;
  }
  div.my-back-card .card-left{
    float:left;
    width:48px;
    height:48px;
    background: #FFFFFF;
    box-shadow: 0 2px 3px 0 #FF8623;
    border-radius:50%;
    margin:15px 0 0 15px;
    overflow: hidden;
  }
  .card-left > img{
    width: 100%;
  }
  div.my-back-card .card-right{
    float:left;
    color: #FFFFFF;
    margin-left:14px;
  }
  .my-back-card .bank-del{
    float: right;
    margin-right: 15px;
    margin-top: 15px;
    font-size: 12px;
    color: #FFFFFF;
    opacity: 0.6;
    border: 1px solid #FFFFFF;
    border-radius: 11px;
    padding: 4px 8px;
    letter-spacing: 1.1px;
  }
  div.my-back-card .card-right h3{
    font-size: 17px;
    margin-top:17px;
  }
  div.my-back-card .card-right p{
    font-size: 11px;
    margin-top:5px;
  }
  .my-back-card .card-right h4{
    font-size: 16px;
    margin-top:15px;
  }
  .next-add{
    width: 100%;
    display: inline-block;
    height: 44px;
    line-height: 44px;
    text-align: center;
    border: 1px dashed #37C32E;
    border-radius: 6px;
    cursor: pointer;
    color: #37C32E;
    font-size: 16px;
    background: #f2f2f2;
  }
</style>
