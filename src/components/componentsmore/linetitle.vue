<template>
  <div class="line-title">
    {{linetitle}}
  </div>
</template>

<script>
export default {

  data () {
    return {
    }
  },
  props:["linetitle"]
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .line-title{
    display: block;
    font-size: 14px;
    padding: 12px 17px 5px;
    color: #616161;
    background: #F1F1F1;
  }
</style>
