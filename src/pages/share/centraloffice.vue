<template>
  <div class="height-all">
    <v-header :goBack="true" msg="中央文案"></v-header>
   <div class="central-wrapper">
     <div class="central-item" v-for="item in centralList">
       <div class="central-date">
         <h3 class="month">01月</h3>
         <h2 class="day">12</h2>
         <h4 class="time">13:00</h4>
       </div>
       <div class="central-des">
         <div class="central-word">{{item.central}}</div>
         <span class="more">更多</span>
         <div class="central-img-box">
           <div class="central-img-item"v-for="imgitem in item.imgs ">
             <img :src="imgitem" alt="" >
           </div>
         </div>
         <div class="buttons">
           <a href="#" class="save-green">保存图片</a>
           <a href="#" class="copy-blue">复制文字</a>
         </div>
       </div>
     </div>
   </div>
  </div>
</template>
<script >
  import vHeader from '@/components/componentsmore/vheader.vue'
  export default {
    components:{
      vHeader,
    },
    data(){
      return {
        centralList:[
          {
            central:'文案文案问啊，',
            imgs:[require('./img/msflogo.png'),require('./img/msflogo.png'),require('./img/msflogo.png'),require('./img/msflogo.png')]
          },
          {
            central:'文案文案问啊，文案文案问啊文案文案问啊。',
            imgs:[require('./img/msflogo.png'),require('./img/msflogo.png'),require('./img/msflogo.png')]
          },
          {
            central:'文案文案问啊，文案文案问啊文案文案问啊。',
            imgs:[require('./img/msflogo.png'),require('./img/msflogo.png'),require('./img/msflogo.png')]
          },
          {
            central:'文案文案问啊，文案文案问啊文案文案问啊。',
            imgs:[require('./img/msflogo.png'),require('./img/msflogo.png'),require('./img/msflogo.png')]
          },
          {
            central:'文案文案问啊，文案文案问啊文案文案问啊。',
            imgs:[require('./img/msflogo.png'),require('./img/msflogo.png'),require('./img/msflogo.png')]
          },
          {
            central:'文案文案问啊，文案文案问啊文案文案问啊。',
            imgs:[require('./img/msflogo.png'),require('./img/msflogo.png'),require('./img/msflogo.png')]
          }
        ]
      }
    }
  };
</script>
<style scoped>
  .central-wrapper{
   margin-top: 16px;
    background: #ffffff;
  }
  .central-item{
    display: flex;
    justify-content: space-around;
    padding: 19px 12px 14px 0;
    margin-left: 12px;
    font-size: 0;
    border-bottom: 1px solid #e1e1e1;
  }
  .central-date,.central-des{
    position: relative;
    width: 40px;
    display: inline-block;
    color: #616161;
  }
  .central-date .month{
    font-size: 15px;
  }
  .central-date .day{
    font-size: 27px;
  }
  .central-date .time{
    font-size: 12px;
    color: #B3B3B3;
  }
  .central-des{
    flex: 1;
  }
  .central-des .central-word{
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 5px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  .central-des .more{
    display: inline-block;
    font-size: 15px;
    color: #48A0EA;
    margin-bottom: 10px;
  }
  .central-img-box{
    margin-bottom: 15px;
  }
  .central-img-item{
    border: 1px solid #e1e1e1;
    margin-right: 3%;
    display: inline-block;
    width: 30%;
    margin-bottom: 5px;
  }
  .central-img-item> img{
    width: 100%;
  }
  .central-img-item:nth-of-type(3n+0){
    margin-right: 0;
  }

  .buttons>a{
    border-radius: 51px;
    margin-right: 5px;
    font-size: 13px;
    padding: 5px 10px;
  }
  .buttons .save-green{
    border: 1px solid #37C32E;
    color: #37C32E;
  }
  .buttons .copy-blue{
    border: 1px solid #48A0EA;
    color: #48A0EA;
  }
</style>
