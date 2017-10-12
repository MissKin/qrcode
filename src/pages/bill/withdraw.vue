<template>
  <div class="receival-wrapper">
    <div class="record-list">
      <ul>
        <li class="record-item" v-for=" item in withdrawList">
          <div class="description">
            <span class="price" :class="item.tradeMoneyYuan? 'font-ora':'font-gray'">+{{item.tradeMoneyYuan}}</span>
            <span class="result right" :class="item.status? 'font-green':'font-red'">{{item.status}}
            </span>
          </div>
          <div class="detail"><span class="title">订单编号:</span>{{item.tradeNo}}</div>
          <div class="detail"><span class="title">订单时间:</span>{{item.tradeCreateTime}}</div>
        </li>
      </ul>
    </div>
    <no-record :norecord_text="norecordtext" picwidth="114px" :pic="picsrc" v-show="!hasRecordList"></no-record>
  </div>
</template>
<script >
  import noRecord from '@/components/componentsmore/noRecord.vue'
  import {mapState} from 'vuex'
  export default {
    components:{noRecord},
    data(){
      return {
        norecordtext:'还没有记录哦，快去赚钱吧～',
        picsrc:require('./img/pig.png'),
        /*receivalList:null,//数据*/
      }
    },

    computed:{
      hasRecordList(){
        return this.$store.state.withdrawList != '';
      },
      ...mapState(['withdrawList','startDate','endDate'])
    },
    mounted(){
      /*this._init(); //初始化*/
      this.$store.dispatch('GET_WITHDRAW',{startDate: this.startDate, endDate:this.endDate,tradeType : "S", pageSize : 20})
    },
    methods:{
      _init(){
        this.axios.get('/qrpay.open/mch_trade/trade_list',{params:{}})
          .then( response => {
            this.receivalList = response.data.result;
            console.log(response.data.result)
          })
          .catch( err => {
            console.log('出错了说！')
          })
      }
    }
  };
</script>
<style >
  .record-list{
    display: block;
    padding: 0 4.5%;
    width: 91%;
  }
  .record-item{
    display: block;
    line-height: 1.5;
    padding: 12px 0;
    border-bottom: 1px solid #EBEBEB;
    background: #ffffff;
  }
  .description .price{  font-size: 23px;  }
  .description .result{ font-size: 14px;}
  .record-item .detail{
    font-size: 14px;
    color: #616161;
    line-height: 22px;}
  .detail .title{  color: #000000;  }
</style>
