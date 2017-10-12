<template>
  <div class="norecord" >
    <img :src="pic" alt="" :width="picwidth"/>
    <p class="norecord_text">{{norecord_text}}</p>
  </div>
</template>
<script >
  export default {
    props:['norecord_text','pic','picwidth']
  };
</script>
<style >
  .norecord{
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 15px;
    color: #CACACA;
  }
</style>
