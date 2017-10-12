<template>
  <div class="form-control">
    <span class="title">{{title}}</span>
    <input class="form-input" :type="input_type" v-on:input="$emit('input',$event.target.value)" :value="checkCode"
           :placeholder='place_str' />
    <button class="timerbtn" :class="[disableded ? 'disable':'green']" :disabled="disableded || time > 0" v-on:click.prevent="run">{{
      timetext}}
    </button>
  </div>
</template>
<script >
  export default {
    props:{
      title:{type:String},
      input_type:{type:String,default:'text'},
      place_str:{type:String,default:'请输入'},
      second:{type:Number, default:60},
      disableded:{type:Boolean,default:true}
  },
    data(){
      return {
        time:0,
        checkCode:'',//验证码
      }
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
      timetext:function(){
        return this.time > 0 ? '剩余'+this.time+'s':'获取验证码'
      }
    }
  };
</script>
<style scoped>
  .form-control{
    position: relative;
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
    width: 88px;
  }
  .timerbtn{
    float: right;
    margin-top: 12px;
    padding: 2px 5px;
    font-size: 13px;
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
