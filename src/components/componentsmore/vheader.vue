<template>
  <div class="gradient-green c-header">
  <div class="c-back" v-if="goBack" @click="$router.go(-1)"><i class="icon-backicon"></i></div>
  <div class="c-header-text" v-show=" msg">{{msg}}</div>
  <div class="search-box-input" v-show="search">
    <input type="text" v-on:input="$emit('input',$event.target.value)" :value="searchValue" class="search-input"
           placeholder="输入银行名称" />
  </div>
  <div class="c-head-right" v-if="leftmsg" @click="leftFun" >
    {{leftmsg}}
  </div>
</div>
</template>

<script>
export default {

  data () {
    return {
      searchValue:'',
    }
  },
  props:['msg','leftmsg','goBack','search'],
  methods:{
    leftFun(){
      this.$emit('leftFun')
    }
  }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .green-bg{
   background: #4f830c;
   width: 100%;
   height: 44px;
   line-height: 44px;
   text-align: center;
   color: #ffffff;
   font-size: 16px;
 }
 .c-back{
   width: 45px;
   height: 45px;
   display: inline-block;
   text-align: center;
   line-height: 45px;
 }
 .c-head-right{
  float: right;
   height: 45px;
   padding-right: 14px;
   display: inline-block;
   text-align: right;
   line-height: 45px;
 }
  .c-header{
    position: relative;
    width:100%;
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    color: #ffffff;
  }
  .c-header-text{
    position: absolute;
    left: 45px;
    width: 57%;
    padding-left: 20px;
    display: inline-block;
    text-align: center;
  }
  .search-box-input{
    position: absolute;
    width: 66%;
    padding-left: 10px;
    display: inline-block;
    height: 35px;
    line-height: 35px;
    font-size: 14px;
    border-radius: 19px;
    background: #ffffff;
    margin-top: 5px;
    overflow: hidden;
  }
  .search-input{
    width: 100%;
  }
</style>
