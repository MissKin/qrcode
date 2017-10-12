<template>
 <button class="timerbtn" :class="[disableded ? 'disable':'green']" :disabled="disableded || time > 0" v-on:click.prevent="run">{{
   text}}
 </button>
</template>
`
<script>
export default {
  data () {
    return {
      time:0,
    }
  },
  props:{
    second:{type:Number, default:60},
    disableded:{type:Boolean,default:true}
  },
  methods:{
    run:function () {

      this.$emit('run');
    },
    start(){
      this.time = this.second;
      this.timer();
    },
    stop(){
      this.time=0;
      this.disabled = false;
    },
    timer:function(){
      if(this.time > 0){
        this.time --;
        setTimeout(this.timer,1000)
      }else {
        this.disabled = false;
      }
    },
    setDisabled(val){
      this.disabled = val;
    }
  },
  computed:{
    text:function(){
      return this.time > 0 ? '剩余'+this.time+'s':'获取验证码'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .timerbtn{
   padding: 2px 5px;
   font-size: 13px;
   float: right;
   line-height: 1.5;
   background: #fff;
   outline: none;
   color: #B3B3B3;
   border: 1px solid #B3B3B3;
   border-radius:4px;
 }
 .timerbtn.green{
   color: #37C32E;
   border: 1px solid #37C32E;
   border-radius:4px;
 }
 .timerbtn.disable{
   color: #B3B3B3;
   border: 1px solid #B3B3B3;

 }
</style>
