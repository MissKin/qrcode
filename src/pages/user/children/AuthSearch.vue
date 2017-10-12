<template>
<div class="search-wrapper">
  <v-header goBack="true" search="true" v-model="searchValue" leftmsg="搜索" @leftFun="search"></v-header>
  <div class="notice">迷糊匹配，如“工商、农业、建设”银行等……</div>
    <ul class="search-box" @click="selectText($event)">
      <li class="result-item" v-for="bank in bankList" :name="bank.bankCode">{{bank.bankName}}</li>
    </ul>
</div>
</template>
<script>
  import vHeader from '@/components/componentsmore/vheader.vue'
  import {jumpPage} from '@/utils/utils.js'
  import {get_bank} from 'api/getdata.js'
  import {setStore} from 'utils/utils.js'
  export default {
    components:{
      vHeader,
    },
    data(){
      return{
        searchValue:'银行',//搜索框中的值
        bankList:[],//搜索出来的银行名称
      }
    },
    methods:{
      selectText($event){
        var target = $event.target;
        let targetVal= $(target).text();
        let bankCode = $(target).attr('name');
        setStore('bankCode',bankCode);
        setStore('bankName',targetVal);
        console.log('啦啦啦啦')
        console.log(targetVal)
        this.$router.push('/NameAuthentication');
      },
      search(){
        if(this.searchValue === ''){
          console.log('请输入信息')
          return;
        } else{
          get_bank(this,{bankName:this.searchValue})
            .then( response =>{
              response = response.body;
              var result= response.result;
              for(var i = 0; i<result.length; i++){
                this.bankList.push({bankName:result[i].bankName,bankCode:result[i].bankCode});
              }
              console.log(result)
            })
        }

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
