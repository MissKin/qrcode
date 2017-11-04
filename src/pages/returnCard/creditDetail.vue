<template>
    <section class="h100">
      <c-header title="信用卡详情"></c-header>
      <div class="cardDetail">
        <div class="card_content">
          <div class="credit_one" :class="banks[bankdetail.result.asloCardListDTO.bankName].cls">
            <div class="credits_bank_name">
              <div class="credits-img"><img :src="require('../../common/img/'+banks[bankdetail.result.asloCardListDTO.bankName].icon)" alt=""></div>
              <div class="credits_bank_info">
                <h3>{{bankdetail.result.asloCardListDTO.bankName}} <span class="small_fs14">(已认证)</span></h3>
                <h4><em></em>{{bankdetail.result.asloCardListDTO.bankCardNo}}</h4>
              </div>
            </div>
            <div class="credits_infos_account">
              <span class="text">账单日：{{bankdetail.result.asloCardListDTO.statementDate}}日</span>
              <span class="text">还款日：{{bankdetail.result.asloCardListDTO.repaymentDate}}日</span>
            </div>
          </div>
          <div v-if="bankdetail.auth">
            <div class="card_plan_rule_box">
              <div class="card_plan_rule">
                <span class="title fs16fc61">2017.10.10-2017.11.11</span>
                <a href="planRule.html" class="detail right icon-arrow-s-right">计划详情</a>
              </div>
              <div class="plan_infos">
                <p class="plan_num fs14fc94">计划编号：X233231 <span class="font-red">付款失败</span></p>
                <span class="fs14fc94">还款金额（元）</span>
                <h2>10000.00</h2>
              </div>
              <div class="plan_config">
                <div>
                  <h4>还款时间</h4>
                  <span>10 <em>天</em></span>
                </div>
                <div>
                  <h4>还款预留比例</h4>
                  <span>12 <em>%</em></span>
                </div>
                <div class="plan_success">
                  <h4>还款成功</h4>
                  <span>12<em>/12</em></span>
                </div>
                <div class="plan_success">
                  <h4>消费成功</h4>
                  <span>10 <em>/12</em></span>
                </div>
              </div>
            </div>
            <div class="card_operation">
              <a href="addChange.html" class="">卡片修改</a>
              <a class=" show-hook" onclick="setPop('show')">卡片解绑</a>
              <a href="historyRecord.html" class="" >历史记录</a>
            </div>
          </div>
          <div class="card_plan_rule_box" v-else>
            <div class="plan_infos">
              <div class="noplan_text">
                认证卡片后开启
              </div>
            </div>
          </div>
          <div class="footerpush"></div>

        <a href="customPlan.html" class="card_btn_bottom" v-if="bankdetail.auth">制定新的还款计划</a>
        <a href="authCard.html" class="card_btn_bottom" style="position: fixed;" v-else>认证卡片</a>
        <!--pop-->
        <section class="popmask displaynone">
          <div class="pop_content">
            <div class="pop_inner">
              <span class="pop_title warm_icon">卡片解绑</span>
              <div class="pop_word">卡片解绑将删除所有数据以及计划,是否确认解绑该卡片？</div>
            </div>
            <div class="pop_btns">
              <a href="" class="pop_btn_red card_btn sure-hook">确认解绑</a>
              <a href="" class="pop_btn_gary card_btn cancel-hook">取消</a>
            </div>
          </div>
        </section>
        </div>
      </div>
    </section>
</template>
<script>
  import cHeader from '@/components/componentsmore/chearder.vue'
  export default {
	components: {cHeader},
	data(){
	  return {
	    bankdetail:null,//银行卡详情
      banks: {
        "上海银行" : {
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
        "工商银行" : {
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
      }
    }
	},
	methods: {
    setPop(type){
    if(type =='show') {
      if ($('.popmask').attr('class').indexOf('displaynone') > -1) {
        $('.popmask').removeClass('displaynone');
        return;
      }
    }
    if(type == 'hide'){
      if($('.popmask').attr('class').indexOf('displaynone')<0){
        $('.popmask').addClass('displaynone');
      }
      return;
    }
  },
    _load(){
      console.log('bandId'+this.$store.state.ccBankCardId);
      this.axios.get('/qrpay.open/aslo/get_ccBankCard',{params:{ccBankCardId : this.$store.state.ccBankCardId}})
        .then( res=> {
          let data = res.data;
          console.log(data);
         /* if (data.result && data.result.asloCardListDTO.startTime) {
            data.result.asloCardListDTO.startTime = moment(
              data.result.asloCardListDTO.startTime).format(
              'YYYY-MM-DD HH:mm:ss');
            ;
          }*/

        /*  if (data.result && data.result.asloCardListDTO.endTime) {
            data.result.asloCardListDTO.endTime = moment(
              data.result.asloCardListDTO.endTime).format(
              'YYYY-MM-DD HH:mm:ss');
            ;
          }*/
          if (data.result.asloCardListDTO.authStatus
            && data.result.asloCardListDTO.authStatus == 1) {
            data.authed = true;
          } else {
            data.authed = false;
          }
          if (data.result.asloCardListDTO.ccRepmtPlanId
            && data.result.asloCardListDTO.ccRepmtPlanId != 0) {
            data.hasPlan = true;
          } else {
            data.hasPlan = false;
          }
          if (data.result.rePlanMap == null) {
            data.showrePlanMap = false;
          } else {
            data.showrePlanMap = true;
          }
         /* localStorage.setItem("planStatus",
            data.result.asloCardListDTO.plStatus);
          data.banks= this.banks;*/
         this.bankdetail = data;
          console.log(this.bankdetail);
        })
    }
  },
    mounted(){
	  this._load();
    }
  };
</script>
<style scoped>

</style>
