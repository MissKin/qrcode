<template>
  <div>
    <v-header :goBack="true" msg="分润余额" leftmsg="账单"></v-header>
    <div class="partner-top-wrapper gradient-green">
      <span class="title font-14">可提现分润：</span>
      <p class="profit">{{balance.withdrawBalanceYuan}}</p>
    </div>
    <section class="profit-wrapper">
        <div class="profit-item">
          <h2 class="profit-title">昨日收益</h2>
          <h2 class="font-green profit">￥{{balance.yesterdayProfitYuan}}</h2>
        </div>
      <div class="profit-item">
        <h2 class="profit-title">今日流水</h2>
        <h2 class="font-blue profit">￥{{balance.todayTradeMoneyYuan}}</h2>
      </div>
      <div class="profit-item">
        <h2 class="profit-title">今日收益</h2>
        <h2 class="font-ora profit">￥{{balance.todayProfitYuan}}</h2>
      </div>
    </section>
    <section class="btn-section">
      <router-link tag="div" :to="{name:'balanceWithdraw'}" class="btn btn-bg-green" >提现</router-link>
     <!-- <div class="btn btn-bg-green" @click = 'jumpPage("/balanceWithdraw")'>提现</div>-->
    </section>

  </div>
</template>
<script>
  import vHeader from '@/components/componentsmore/vheader.vue'
  import {mapState} from 'vuex'
  export default {
    components:{vHeader},
    data(){
      return{
        profit:1200,
        yesterdayprofit:12.00,
        todaystream:123456.00,
        todayprofit:123.50
      }
    },
    mounted(){
      this.$store.dispatch('GET_BALANCE');
    },
    computed:{
      ...mapState(['balance'])
    },
    methods:{
      jumpPage(page){
        this.$router.push(page);
      }
    }
  };
</script>
<style scoped>
  .partner-top-wrapper{
    position: relative;
    padding: 30px 20px;
    height: 95px;
    color: #FFFFFF;
    line-height: 1.5;
  }
  .partner-top-wrapper .profit{
    font-size: 48px;
    color: #FFFFFF;
  }
  .profit-wrapper{
    display: flex;
    justify-content: center;
    padding: 12px 0;
    text-align: center;
    background: #FFFFFF;
  }
  .profit-item{
    flex:1;
    border-right: 1px solid #EBEBEB;
  }
  .profit-item:last-child{border-right:none;}
  .profit-item .profit-title{
    font-size: 13px;
    color: #616161;
  }
  .profit-item .profit{font-size: 17px;line-height: 1.5;    font-weight: bold;}
  .btn-section{
    padding: 30px 25px;
  }
</style>
