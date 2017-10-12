<template>
  <div class="search-wrapper">
    <v-header goBack="true" search="true" v-model="searchValue" leftmsg="搜索" @leftFun="search"></v-header>
    <div class="notice">迷糊匹配，如“工商、农业、建设”银行等……</div>
    <ul class="search-box" >
      <li class="result-item" v-for="bank in bankList" @click="selectText($event)">{{bank.bankNameAbbr}}</li>
    </ul>
  </div>
</template>
<script>
  import vHeader from '@/components/componentsmore/vheader.vue'
  import {get_cnaps_bank} from 'api/getdata.js'
  import {getStore,setStore} from 'utils/utils.js'
  export default {
    components:{
      vHeader,
    },
    data(){
      return{
        searchValue:'',//搜索的关键字
        bankList:null,//银行网点列表
      }
    },
    methods:{
      search(){
        let cityCode = getStore('cityCode');
        let bankCode = getStore('bankCode');
        get_cnaps_bank(this,{params:{cityCode:cityCode,bankCode:bankCode,bankName:this.searchValue}})
          .then(response => {
            response = response.body;
            this.bankList =response.result;
            console.log(response.result)
          })
      },
      selectText($event){
        let target =$event.target
        var bankNameAbbr = $(target).text();
        setStore('bankNameAbbr',bankNameAbbr);
        this.$router.push('/NameAuthentication');

      }
    }
  };
</script>
<style scoped>
  .search-wrapper{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: #F2F2F2;
  }
  .notice{
    height: 40px;
    background: #F9E9CF;
    border: 1px solid #EECD94;
    font-size: 13px;
    color: #E2A33B;
    line-height: 40px;
    padding-left: 8px;
  }
  .search-box{
    position: absolute;
    overflow-x: hidden;
    padding-left: 14px;
    background: #fff;
    overflow-y: scroll;
    bottom: 0;
    top: 87px;
    width: calc(100% - 14px);
  }
  .search-box .result-item{
    width: 100%;
    height: 40px;
    font-size: 15px;
    color: #616161;
    line-height: 40px;
    border-bottom: 1px solid #DEDEDE;
  }
  .search-box .result-item:last-child{
    border-bottom:none;
  }
</style>
