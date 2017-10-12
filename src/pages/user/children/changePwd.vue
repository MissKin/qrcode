<template>
	<div class="pwd-wrapper">
    <v-header msg="修改密码" goBack="true"></v-header>
    <form-input title="当前密码" input_type="text" v-model="pwd_now"   place_str="输入当前密码"></form-input>
    <form-input title="新密码" input_type="text" v-model="pwd_new"   place_str="输入新密码"></form-input>
    <form-input title="确认密码" input_type="text" v-model="pwd_re"   place_str="输入确认密码"></form-input>
    <div class="btn btn-bg-green next-btn"@click="" >修改密码</div>

	</div>
</template>
<script>
  import vHeader from '@/components/componentsmore/vheader.vue'
  import formInput from '@/components/componentsmore/forminput.vue'
  export default {
    components:{vHeader,formInput},
	data(){
	  return {
      pwd_now:'123456',
      pwd_new:'234567',
      pwd_re:'234567',
    }
	},
	methods: {}
  };
</script>
<style scoped>
.pwd-wrapper{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: #F2F2F2;
  z-index: 5;
}
</style>
