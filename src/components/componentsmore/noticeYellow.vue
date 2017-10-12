<template>
  <div class="noticeYellow">
    {{text}}
  </div>
</template>
<script>
  export default {
    props:['text']
  };
</script>
<style scoped>
.noticeYellow{
  background: #F9E9CF;
  border: 1px solid #EECD94;
  padding:0 8px ;
  font-size: 12px;
  color: #E2A33B;
  letter-spacing: 0;
  line-height: 22px;
  margin-bottom: 10px;
}
</style>
