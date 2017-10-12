<template>
  <div class="user-wrapper">
    <div class="norecord" v-show="msgList == ''">
      <img src="../../common/img/norecord.png" alt="">
      <p>还没有消息噢～</p>
    </div>
    <!--消息展示-->
    <div class="msg-item" v-for="item in msgList" @click="jumpFn('123456')">
      <p class="title text-ellipsis"><span class="unread" v-show="!item.read"></span>{{item.title}}</p>
      <p class="date">{{item.date}}</p>
      <div class="content">{{item.content}}</div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        msgList:[
          {read:false,title:'这里是消息标题这里是消息标题消息标题.',date:'2017-07-07 15:32',content:'这里是消息提要，这里是消息提要，这里是消示，这里是消息提要，这里是消息息提要，这里是是是是'},
          {read:true,title:'这里是消息标题这里是消息标题消息标题.',date:'2017-07-07 15:32',content:'这里是消息提要，这里是消息提要，这里是消示，这里是消息提要，这里是消息息提要，这里是是是是'},
          {read:true,title:'这里是消息标题这里是消息标题消息标题.',date:'2017-07-07 15:32',content:'这里是消息提要，这里是消息提要，这里是消示，这里是消息提要，这里是消息息提要，这里是是是是'}
        ]
      }
    },
    methods:{
      jumpFn(page){
        this.$router.push('/messagetext/'+page)
      }
    }
  };
</script>
<style scoped>
  .user-wrapper{
    padding: 14px;
  }
  .norecord{
    display: inline-block;
    width: 100%;
    margin-top: 25%;
    text-align: center;
    font-size: 15px;
    color: #CACACA;
    line-height: 2;
  }
  .msg-item{
    background: #FFFFFF;
    border: 1px solid #E4E4E4;
    margin-bottom: 14px;
    padding: 10px;
  }
  .msg-item .title{
    font-size: 16px;
    color: #616161;
    width: 100%;
  }
  .unread{
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #EC2222;
    margin-right: 5px;
  }
  .msg-item .date{
    font-size: 13px;
    color: #CACACA;
    line-height: 2.0;
  }
  .msg-item .content{
    display: -webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    overflow: hidden;
    font-size: 13px;
    color: #B3B3B3;
    letter-spacing: 0;
    line-height: 19px;
  }
</style>
