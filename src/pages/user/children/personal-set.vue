<template>
  <div class="personal-wrapper">
    <v-header msg="个人设置" goBack="true"></v-header>
    <div class="main">
      {{showPhoto}} {{value}}
      <div class="head-portrait" @click="showPhoto = !showPhoto"><span class="title">头像</span> <img src="../../../common/img/photo2.png" alt=""><span class="listarrow  icon-backicon rotate180"></span></div>

      <div class="head-portrait" @click.stop="addPic">
        <span class="title">头像</span>
        <img id="avatarImg" src="../../../common/img/photo2.png" alt="">
        <span class="listarrow icon-backicon rotate180"></span>
        <input type="file" accept="image/*" capture="camera" @change="onFileChange(this.files)" style="display: none;">
      </div>

      <div class="head-portrait" @click="jumpPage('modifyPhoneNum')">
        <span class="title">修改手机号</span>
        <span class="listarrow  icon-backicon rotate180"></span>
      </div>
     <!-- <input type="file" accept="image/*" capture="camera"><br>
      <input type="file" accept="image/*"/><br>
      <input type="file" accept="video/*" capture="camcorder"><br>
      <input type="file" accept="audio/*" capture="microphone"><br>-->
    </div>
    <!--头像-->
    <transition name="bottomIn-fade" >
      <div class="photo-wrapper" v-show="showPhoto" @click.prevent="closePhoto($event)">
        <div class="photo-wrapper-footer">
          <ul>
            <li class="photo-footer-item" @click.stop="value += 2">拍照</li>
            <li class="photo-footer-item" @click.stop="value += 2">从手机相册选择</li>
            <li class="photo-footer-item cancel">取消</li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  import vHeader from '@/components/componentsmore/vheader.vue'
  export default {
    components:{
      vHeader,
    },
    data(){
      return {
        showPhoto:false,
        value:'123',
        imgUrls:[]
      }
    },
    methods:{
      addPic(e){
        let vm = this;
        $('input[type="file"]').trigger('click');
        return false;
      },
      onFileChange(file){
        console.log(file)
        var imgObj = $('#avatarImg');
        var files = $(this).files;
        console.log($(this))
        var windowURL = window.URL || window.webkitURl;
        var dataURL = windowURL.createObjectURL(files.files[0]);
        imgObj.attr('src',dataURL);
        console.log(dataURL)
      },
      closePhoto(event){
        var currentCls = event.currentTarget.className;
        if(currentCls === 'photo-wrapper'){
          this.showPhoto= false;
          console.log(event.currentTarget.className)
          console.log('123');
          return;
        }
        console.log(event.currentTarget.className)
        console.log('456');
        return;
      },
      jumpPage(page){
        this.$router.push('/personal/'+page)
      }
  },
  }
</script>
<style scoped>
  .personal-wrapper{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f2f2f2;
    z-index: 150;
    overflow: hidden;
  }
  .photo-wrapper{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.35);
    z-index: 155;
    overflow: hidden;
    transform:translateZ(0)
  }
  .photo-wrapper-footer{
    position: fixed;
    width: 100%;
    bottom: 0;
    background: #ECECEC;

  }
  .photo-footer-item{
    font-size: 18px;
    color: #616161;
    height: 58px;
    line-height: 58px;
    text-align: center;
    border-bottom: 1px solid #ECECEC;
    background: #FFFFFF;
  }
  .photo-footer-item:last-child{
    border-bottom: none;
  }
  .cancel{
    margin-top: 15px;
  }
  .head-portrait{
    font-size:15px;
    color:#616161;
    background:#fff;
    position:relative;
    margin-top:15px;
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .head-portrait img{
    margin-right: 20px;
    vertical-align: middle;
  }
  .listarrow{
    width:16px;
    height:16px;
    float:right;
    position:absolute;
    top:50%;
    right:16px;
    transform: translateY(-50%) rotate(180deg);
  }
  .bottomIn-fade-enter-active,.bottomIn-fade-leave-active{
    transition: all 0.5s
  }
  .bottomIn-fade-enter,.bottomIn-fade-leave-active{
    opacity: 0;
    transform:translateY(10px)
  }


</style>
