<template>
  <div class="bill-wrapper">
    <v-header :goBack="true" msg="账单"></v-header>
    <div class="bill-top-wrapper">
      <div class="bill-date">
        <input type="text" class="input-calendar" @click="openByDialog" id="starTime" v-model="calendar4.display"
               :value="calendar4.display"
               readonly>
        <div class="btn-query" @click="querySubmit()">查询</div>
      </div>
      <div class="bill-tab">
        <router-link class="tab-title" :to="{name:'receival'}" tag="a" data-type="1" >收款</router-link>
        <router-link class="tab-title" :to="{name:'profit'}" tag="a" data-type="2" >分润</router-link>
        <router-link class="tab-title" :to="{name:'withdraw'}" tag="a" data-type="3" >提现</router-link>
      </div>
    </div>
    <div class="bill-content">
      <transition>
        <keep-alive>
          <router-view ></router-view>
        </keep-alive>
      </transition>
    </div>
    <transition name="fade">
      <div class="calendar-dialog" v-if="calendar4.show">
        <div class="calendar-dialog-mask" @click="closeByDialog"></div>

        <div class="calendar-dialog-body">
          <calendar :range="calendar4.range" :zero="calendar4.zero" :lunar="calendar4.lunar" :value="calendar4.value"  @select="calendar4.select"></calendar>
        </div>

      </div>
    </transition>
  </div>
</template>
<script >
  import vHeader from '@/components/componentsmore/vheader.vue'
  import calendar from '@/components/componentsmore/calendar.vue'
  import {mapState} from 'vuex'
  export default {
    components:{
      vHeader,
      calendar
    },
    data(){
      return {
        calendar4:{
          beginTime:'',
          endTime:'',
          display:"2017-08-16 ~ 2017-09-16",
          show:false,
          range:true,
          zero:true,
          value:[[2017,8,16],[2017,9,16]], //默认日期
          lunar:false, //显示农历
          select:(begin,end)=>{
            console.log(begin,end);
            this.$store.state.startDate = begin.join("-");
            this.$store.state.endDate = end.join("-");

            this.calendar4.show=false;
            this.calendar4.value=[begin,end];
            this.calendar4.beginTime = begin.join("-");
            this.calendar4.endTime = end.join("-");
            this.calendar4.display=begin.join("-")+" ~ "+end.join("-");
          }
        },
        receivalList:null,//传给子路由的数据
      }
    },
    computed:{
      ...mapState(['startDate','endDate']),
    },
    methods:{
      openByDialog(){
        this.calendar4.show=true;
      },
      closeByDialog(){
        this.calendar4.show=false;
      },
      //查询
      querySubmit(){
        console.log('你好');
        this.loadData();
      },
      loadData(){
        var orderType;
        var childs = $('.bill-tab').children();
        for (var i = 0; i < childs.length; i++) {
          var item = childs[i];
          if ($(item).hasClass('router-active')) {
            orderType = $(item).data('type');
            console.log(orderType);
           break;
          }
        }
        if (orderType === 1) {
          console.log(111111111111);
          this.$store.dispatch('GET_RECEVAL');//出发 action中的GET_RECEVAL
        } else if (orderType == 2) {
          console.log(222222222222);
          this.$store.dispatch('GET_PROFIT',{startDate: this.startDate, endDate:this.endDate, pageSize : 20});//触发 action中的GET_PROFIT

        } else if (orderType == 3) {
          console.log(333333333333);
          this.$store.dispatch('GET_WITHDRAW',{startDate: this.startDate, endDate:this.endDate,tradeType : "S", pageSize : 20});
        }
      }

    },

    mounted(){
     /* this.loadData();*/
    },
  };
</script>
<style >
.bill-top-wrapper{
  position: relative;
  background: #ffffff;
  margin-bottom: 15px;
}
  .bill-date{
    padding: 12px 10px;
    border-bottom: 1px solid #EBEBEB;
  }

  .input-date{
    padding: 8px;
    font-size: 14px;
    width: 33%;
    border: 1px solid #ECECEC;
    border-radius: 5px;
  }
.small-line{
  color: #949494;
  margin-right: 2px;
}
  .btn-query{
    display: inline-block;
    margin-left: 5px;
    padding: 0 15px;
    text-align: center;
    height: 34px;
    line-height: 34px;
    background: #4BD339;
    border-radius: 5px;
    font-size: 14px;
    color: #FFFFFF;
  }
  .bill-tab{
    display: flex;
    justify-content: space-around;
    height: 33px;
    padding: 6px 0;
    line-height: 33px;
    margin: 0 9%;
  }
  .bill-tab a{
    width: 30px;
    text-align: center;
    font-size: 15px;
    color: #616161;
  }
  .tab-title.router-active{
    color: #37C32E;
    border-bottom: 2px solid #37C32E;
  }
  .bill-content{
    background: #ffffff;
  }
  .input-calendar{
    padding: 8px;
    font-size: 14px;
    width: 70%;
    border: 1px solid #ECECEC;
    border-radius: 5px;
  }
/*弹出框*/
.calendar-dialog{
  position: absolute;
  left:0;
  top:0;
  right:0;
  bottom:0;
}

.calendar-dialog-mask{
  background:rgba(255,255,255,.5);
  width:100%;
  height:100%;
}

.calendar-dialog-body{
  background: #fff;
  position: absolute;
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);
  padding:20px;
  border: 1px solid #eee;
  border-radius: 2px;
}
</style>
