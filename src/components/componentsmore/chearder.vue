<template>
  <header class="c-header">
    <div class="c-header-text fc61" v-show=" title">{{title}}</div>
    <div class="c-head-right" v-if="rt_msg" @click="leftFun" >
      {{rt_msg}}
    </div>
    <a class="c-back fc61 fs20" onclick="history.go(-1)"><i class="icon-backicon"></i></a>
  </header>
</template>
<script>
 export default{
    data(){
      return{

      }
    },
   props:['title','rt_msg']

 }
</script>
<style scoped>
  .c-header{
    height: 45px;
    line-height: 45px;
    font-size: 14px;
  }
</style>


