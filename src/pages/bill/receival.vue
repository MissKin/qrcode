<template>
  <div class="receival-wrapper">
    <div class="record-list">
      <ul>
        <li class="record-item" v-for=" item in receivalList">
          <div class="description">
            <span class="price font-red" >+{{item.tradeMoneyYuan}}</span>
            <span class="result right font-green" >{{item.status }}</span>
          </div>
          <div class="detail"><span class="title">订单编号:</span>{{item.tradeNo}}</div>
          <div class="detail"><span class="title">订单时间:</span>{{item.tradeCreateTime}}</div>
          <div class="detail"><span class="title">支付方式:</span>{{item.pmtChnlName}}</div>
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

      }
    },

    computed:{
      hasRecordList(){
        return this.receivalList != '';
      },
      timeChange(){

      },
      ...mapState(['receivalList','startDate','endDate'])
    },
    methods:{
      _init(){
        this.axios.get('/qrpay.open/mch_trade/trade_list',{params:{}})
          .then( response => {
            this.receivalList = response.data.result;
            console.log('receival'+response.data)
          })
          .catch( err => {
            console.log('出错了说！')
          })
      }
    },
    mounted(){
      this.$store.dispatch('GET_RECEVAL',{startDate: this.startDate, endDate:this.endDate, pageSize : 20});
     /* this._init();*/
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
  .record-item .detail .title{  color: #000000;  }
</style>
