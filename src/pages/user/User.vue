<template>
  <div class="user-wrapper">
    <v-header msg="我的账户" leftmsg="账单"></v-header>
    <router-link to="/home/user/personal">
    <div class="header-user gradient-green">
      <div class="user-avatar">
        <img src="../../common/img/photo2.png" alt="">
      </div>
      <div class="user-infor">
        <h2>用户名 <span>普通用户</span></h2>
        <div>
          <p><b class="icon-phone"></b>123456789</p>
          <p><b class="user-img"></b>推荐人: 如果没有这不显示这行</p>
        </div>
        <span class="icon-backicon rotate180 header-arrow"></span>
      </div>

    </div>
    </router-link>
    <div class="main">
      <ul>
        <li @click.stop="jumpPage1('NameAuthentication')"><span class="usericon icon-shiming"></span><b>实名认证
      </b><em></em><span class="listarrow icon-backicon rotate180"></span></li>
        <router-link tag="li" :to="{name:'bankcards'}">
          <span class="usericon icon-kuaijie"></span>
          <b>快捷银行卡管理</b>
          <em>2</em>
          <span class="listarrow icon-backicon rotate180"></span>
        </router-link>
        <li><span class="usericon icon-jiesuanka"></span><b>修改结算卡</b> <em></em><span class="listarrow icon-backicon rotate180"></span></li>
      </ul>
      <ul class="mt12">
        <li><span class="usericon icon-tuijian"></span><b>我的推荐码</b><em></em><span class="listarrow icon-backicon rotate180"></span></li>
        <li><span class="usericon icon-bangzhu"></span><b>帮助</b> <em>用户指南等</em><span class="listarrow icon-backicon rotate180"></span></li>
      </ul>
      <ul class="mt12">
        <li><span class="usericon icon-kefu"></span><b>客服热线</b><em>QQ在线客服</em><span class="listarrow icon-backicon rotate180"></span></li>
      </ul>
      <ul class="mt12 mb17">
        <li><span class="usericon icon-about"></span><b>关于我们</b><em></em><span class="listarrow icon-backicon rotate180"></span></li>
        <router-link tag="li" to="/home/user/changePwd"><span class="usericon icon-shezhi"></span><b>设置</b> <em></em><span
          class="listarrow icon-backicon rotate180"></span>
        </router-link>
      </ul>
    </div>
    <transition name="router-slid" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import vHeader from '@/components/componentsmore/vheader.vue'
  import {to_identify} from 'api/getdata.js'
  import {setStore} from 'utils/utils.js'

  export default {
    components:{
      vHeader,
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods:{
      jumpPage1(page){
        to_identify(this).then( (response) => {
            response = response.body;
            var loginId = response.result.mchOpenDTO.loginId;
             setStore('loginId',loginId);
           this.$router.push('/'+page);
        }, (err) => {
          console.log(err);
        });
      },

    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .user-wrapper{
    margin-bottom: 50px;
  }
  .header-user{
    display: flex;
    justify-content: space-around;
    padding: 0 12px 16px;
    color: #fff;
  }
  .user-avatar{
    width: 80px;
    margin-right: 14px;
  }
  .user-avatar > img{
    width: 100%;
  }
  .user-infor{
    flex: 1;
    position:relative;
  }
  .user-infor>h2{
    padding-top:20px;
    font-size:18px;
  }
  .user-infor>h2>span{
    margin-left:10px;
    color:#37C32E;
    font-size:11px;
    background:#fff;
    display:inline-block;
    padding: 0 5px;
    line-height:18px;
    text-align:center;
    border-radius: 2px;
  }
  .user-infor>div{
    margin-top:12px;
    font-size:12px;
  }
  .user-infor>div b{
    display:inline-block;
    width:15px;
    height:15px;
    position:relative;
    top:3px;
  }
  .user-infor>div b.user-img{
    background:url(../../common/img/miniavatar.png)no-repeat;
  }
  .user-infor img{
    position:absolute;
    top:45px;
    right:14px;
    cursor:pointer;
  }
  .header-arrow{
    position: absolute;
    right: 0;
    top: 34%;
  }
  .main{
    width:100%;
    border-top:1px solid transparent;
    color:#2e2e2e;
    font-size:16px;
    padding-top:12px;
  }

  .main ul{
    border-top:1px solid transparent;
    background: #ffffff;
  }
  .usericon{
    background-image: url("../../common/img/user-icons.png");
    background-repeat: no-repeat;
    width: 28px;
    height: 28px;
    display: inline-block;
    vertical-align: middle;

  }
  .icon-shiming{
    background-position: -17px -210px;;
  }
  .icon-kuaijie{
    background-position: -17px -11px;
  }
  .icon-jiesuanka{
    background-position: -17px -61px;
  }
  .icon-tuijian{
    background-position: -17px -111px;
  }
  .icon-bangzhu{
    background-position: -17px -161px;
  }
  .icon-kefu{
    background-position: -17px -308px;
  }
  .icon-about{
    background-position: -14px -259px;
  }
  .icon-shezhi{
    background-position:-15px -359px;
  }
  .main ul li{
    position:relative;
    height:47px;
    line-height:47px;
    padding: 0 13px 0 0;
    margin-left: 13px;
    border-bottom:1px solid #e3e3e3;
  }
  .main ul li:last-child{
    border-bottom:none;
  }
  .main ul li em{
    font-style:normal;
    float:right;
    margin-right: 25px;
    font-size:15px;
    color:#808080;
  }
  .main ul li .listarrow{
    width:16px;
    height:16px;
    float:right;
    position:absolute;
    top:15px;
    right:16px;
    color: #CACACA;
  }
  .main ul li img{
    position:relative;
    top:7px;
    left:13px;
  }
  .main ul li b{
    margin-left:10px;
  }
  .mt12{margin-top:12px;}
  .mb17{margin-bottom:17px;}


</style>
