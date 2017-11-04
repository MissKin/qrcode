<template>
  <div>
    <c-header title="我的还卡"></c-header>
    <div class="box">
      <section class="card_minecard">
        <div class="card_cardinfo">
          <a href="javascript:;" style="width:55%" v-if="dataList.result.isVip">
            <img src="../../common/img/svipcard1.png" alt="" class="card_img">
          </a>
          <a href="./becomeSVIP.html" style="width:55%" v-else>
            <img src="../../common/img/putongcard.png" alt="" class="card_img">
          </a>
          <div class="card_cardtext">
            <span class="fs14fc94 mark_icon">认证抵扣金额</span>
            <p class="card_deduction">{{dataList.result.AuthAccBalance/100}} <em class="fs15">元</em></p>
            <span class="fs14fc94 mark_icon">手续费抵扣金额</span>
            <p class="card_deduction">{{dataList.result.VipAccBalance/100}} <em class="fs15">元</em></p>
          </div>
        </div>
        <div class="credit_card">
          <a href="javascript:;" class="mine_credit mine_credit_icon">我的信用卡</a>
          <a href="addCredits.html" class="add_credit add_credit_icon"> 添加信用卡</a>
        </div>
      </section>
      <!--credits-->
      <section class="credits_box">
        <div class="credits_null" v-if="dataList.result == '' ">
          <img src="../../common/img/pic.png" alt="">
          <br>
          <span class="no_credits">暂无信用卡</span>
          <br>
          <a href="addCredits.html" class="credits_add btn_hollow_yw">添加新卡</a>
        </div>
        <a class="credit_one" :class="dataList.banks[value.bankName]['cls']" v-else  v-for="value in dataList.result.asloCardListDTOs" @click="creditDetail(value.ccBankCardId)">
          <div class="credits_bank_name icon-arrow-right">
            <div
              class="credits-img"><img :src="require('../../common/img/'+dataList.banks[value.bankName]['icon'])" alt=""></div>
            <div class="credits_bank_info">
              <h3 class="bank_name">{{value.bankName}}</h3>
              <h4>**** **** **** *** {{value.bankCardNo}}</h4>
            </div>
          </div>
          <div class="credits_infos">
            <p class="credit_date">
              <span class="title">账单日：</span>{{value.statementDate}}日
              <span class="title">还款日：</span>{{value.repaymentDate}}日
            </p>
            <p class="credit_date">
              <span class="title">还款计划：</span>{{value.repmtNo}}
              <span class="ING_icon right font-green" v-if="value.planStatus == 1">进行中</span>
              <span class="font-red right STOP_icon" v-else-if="value.planStatus == 2">已停止</span>
              <span class="NOPLAN_icon right fc61" v-else="value.planStatus == 3">无计划</span>
            </p>
          </div>
        </a>
      </section>
    </div>
  </div>
</template>
<script>
  import cHeader from '@/components/componentsmore/chearder.vue'
  import {logout} from 'api/getdata.js'
  export default{
    data(){
      return{
        banks : {
          '上海银行' : {
            "cls" : "yellow_bank",
            "icon" : "banklogo_17.png"
          },
          "中信银行" : {
            "cls" : "red_bank",
            "icon" : "banklogo_08.png"
          },
          "中国银行" : {
            "cls" : "red_bank",
            "icon" : "banklogo_03.png"
          },
          "交通银行" : {
            "cls" : "blue_bank",
            "icon" : "banklogo_06.png"
          },
          "光大银行" : {
            "cls" : "yellow_bank",
            "icon" : "banklogo_09.png"
          },
          "兴业银行" : {
            "cls" : "blue_bank",
            "icon" : "banklogo_10.png"
          },
          "农业银行" : {
            "cls" : "green_bank",
            "icon" : "banklogo_02.png"
          },
          "北京银行" : {
            "cls" : "red_bank",
            "icon" : "banklogo_11.png"
          },
          "华夏银行" : {
            "cls" : "red_bank",
            "icon" : "banklogo_13.png"
          },
          '工商银行' : {
            "cls" : "red_bank",
            "icon" : "banklogo_01.png"
          },
          "平安银行" : {
            "cls" : "red_bank",
            "icon" : "banklogo_16.png"
          },
          "广发银行" : {
            "cls" : "red_bank",
            "icon" : "banklogo_12.png"
          },
          "建设银行" : {
            "cls" : "blue_bank",
            "icon" : "banklogo_04.png"
          },
          "招商银行" : {
            "cls" : "red_bank",
            "icon" : "banklogo_05.png"
          },
          "民生银行" : {
            "cls" : "blue_bank",
            "icon" : "banklogo_07.png"
          },
          "浦发银行" : {
            "cls" : "blue_bank",
            "icon" : "banklogo_15.png"
          },
          "邮储银行" : {
            "cls" : "green_bank",
            "icon" : "banklogo_15.png"
          }
        },//所有可支持的银行
        dataList :null, //假设获得的数据
      }
    },
    methods:{
      //银行名字
      load_rate_deductible(){
        console.log('渲染数据')
        this.axios.get('/qrpay.open/aslo/rate_deductible')
          .then( res => {
            res = res.data;
            this.dataList = res;
            console.log(this.dataList)
            if(this.dataList.code =='NO_LOGIN'){
              this.$axios.get('/qrpay.open/mch/logout').then(
               res => {
                  let result = res.data.result;
                  if(result){
                    alert('退出成功');
                    this.$store.state.user_id = null;
                    this.$router.push('/login');
                  }
                }
              )
            }

            console.log("没有手续费抵扣金。")
            console.log(this.dataList)
            this.dataList.banks = this.banks;
          })
      },
      //跳转到详情页
      creditDetail(cardId){
        console.log(cardId);
        this.$store.commit('BANKCARDID',cardId);
        this.$router.push('/creditDetail')
        console.log(this.$store.state.ccBankCardId);
      }

    },
    created(){
      console.log('created')
    },
    mounted(){
      this.load_rate_deductible();
      console.log('mounted')

    },
    components:{
      cHeader
    }
  }
</script>
<style scoped>

</style>
