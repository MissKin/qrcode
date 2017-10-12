<template>
<div class="withdrawRecord-wrapper">
  <v-header :goBack="true" msg="提现记录"></v-header>
  <div class="record-list">
    <ul>
      <li class="record-item" v-for="item in recordlist">
        <div class="left_des description">
          <span class="line_top">{{item.time}}</span><br>
          <span class="line_bottom">提现单号：{{item.odd}}</span>
        </div>
        <div class="right_des description">
          <span class="line_top">￥{{item.price}}</span><br>
          <span class="line_bottom" :class="item.status ? 'font-green':'font-red'">{{item.status ? '成功':'失败'}}</span>
        </div>
      </li>
    </ul>
    <no-record :norecord_text="norecordtext" picwidth="150px" :pic="picsrc" v-show="recordlist == ''"></no-record>
  </div>
</div>
</template>
<script >
  import vHeader from '@/components/componentsmore/vheader.vue'
  import noRecord from '@/components/componentsmore/noRecord.vue'
  export default {
    components:{vHeader,noRecord},
    data(){
      return {
        norecordtext:'还没有记录噢～',//没记录的提示语
        picsrc:require('./img/norecord.png'),//没有记录的图片
        recordlist:[
          {time:'2017/08/01 15:21:32',price:'100.0',odd:'L12343210089482123',status:true},
          {time:'2017/08/01 15:21:32',price:'100.0',odd:'L12343210089482123',status:false},
          {time:'2017/08/01 15:21:32',price:'100.0',odd:'L12343210089482123',status:true},
          {time:'2017/08/01 15:21:32',price:'100.0',odd:'L12343210089482123',status:true}
        ],
      }

    }
  };
</script>
<style scoped>
  .withdrawRecord-wrapper{
    height: 100%;
    background: #ffffff;
  }
  .record-list{
    display: block;
    padding: 0 4.5%;
    width: 91%;
  }
.record-item{
  display: flex;
  justify-content: space-around;
  line-height: 1.5;
  padding: 12px 0;
  border-bottom: 1px solid #EBEBEB;
  background: #ffffff;
}
.description .line_top{
  font-size: 17px;
  color: #616161;
}
.description .line_bottom{
  font-size: 14px;
  color: #B3B3B3;
}
  .left_des{
    width: 230px;
    display: inline-block;
  }
  .right_des{
    display: inline-block;
    flex: 1;
    text-align: right;
  }

</style>
