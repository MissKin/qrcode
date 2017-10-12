<template>
  <div class="form-control">
    <span class="title">{{title}}</span>
    <input class="form-input" :type="input_type" v-on:input="$emit('input', $event.target.value)"
           :value="value"
           :placeholder='place_str' />
  </div>
</template>
<script >
  export default {
    props:["title","input_type","place_str","value"],
    data(){
      return {

      }
    },
    methods:{

    }
  };
</script>
<style scoped>
  .form-control{
    position: relative;
    display: flex;
    justify-content: flex-start;
    height: 44px;
    line-height: 44px;
    font-size: 14px;
    background: #FFFFFF;
    border: 1px solid #E4E4E4;
    border-radius: 9px;
    padding: 0 10px;
    margin-bottom: 5px;
  }
  .form-control .title{
    display: inline-block;
    width: 78px;
    padding-right: 5px;
  }
  .form-control .form-input{
    flex: 1;

  }
</style>
