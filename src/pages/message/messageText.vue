<template>
  <div>
    <v-header :goBack="true" msg="消息内容"></v-header>
    <div class="message-text-wrapper">
      <p class="title text-ellipsis">{{message.announcementTitle}}</p>
      <p class="date">{{message.gmtCreate}}</p>
      <div class="content">
        {{message.announcementContent}}
      </div>
    </div>
  </div>
</template>
<script>
  import vHeader from '@/components/componentsmore/vheader.vue'
  import {dateFormat} from 'common/js/util.js'
  export default {
    components:{
      vHeader,
    },
    data(){
      return {
        message:'',//公告信息
        time:'',//时间
      }
    },
    methods:{
      _init(){
        let t = new Date().getTime();
        this.axios.get('/qrpay.open/cm_announcement_do/select?t='+t)
          .then( res => {
            let result = res.data.result;
            if(result && result.gmtCreate){
              var date = new Date(result.gmtCreate);
              result.gmtCreate = dateFormat(date,'yyyy-MM-dd HH:mm:ss')
            }
            this.message = result;
            })
      }
    },
    mounted(){
      this._init();
    }
  };
</script>
<style scoped>
  .message-text-wrapper{
    position: relative;
    padding: 14px;
    height: 100%;
  }
  .message-text-wrapper .title{
    width: 100%;
    margin-bottom: 8px;
    font-size: 22px;
    color: #616161;
  }
  .message-text-wrapper .date{
    font-size: 15px;
    color: #B3B3B3;
    line-height: 2.0;
  }
  .message-text-wrapper .content{
    font-size: 16px;
    color: #616161;
    line-height: 24px;
  }
</style>
