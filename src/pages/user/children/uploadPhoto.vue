<template>
  <div class="photowrapper">
    <v-header goBack = 'true' msg="上传照片"></v-header>
    <div class="contents-wrapper">
      <div class="photos-wrapper">
        {{dc_photo_z}}
        <div class="filebox" @click.stop.prevent="addPic">
          <div class="file-inner" >
            <div class="showImg">
              <img :src="dc_photo_z" alt="" >
            </div>
            <div class="fileinput">
              <input type="file" id="file1" accept="image/*" capture="camera" @change="onFileChange"style="display:none;">
             <!-- <label for="file1" class="fileLabel" id="hiddenImg1"></label>-->
            </div>
          </div>
          <p>添加身份证正面</p>
        </div>
      </div>
    </div>
    <div class="btn btn-bg-green next-btn" >提交</div>
  </div>
</template>
<script>
  import vHeader from '@/components/componentsmore/vheader.vue'
  import lrz from 'lrz'
  export default {
    components:{
      vHeader
    },
    data(){
      return{
        imgUrls: [],
        dc_photo_z:'',//添加身份证正面
        id_card_z:'',
        urlArr: [],
        isPhoto: true,
        btnTitle: '',
        isModify: false,
        previewImg:'',
        isPreview: false
      }
    },

    methods:{
      toggleAddPic: function() {
        let vm = this;
        if(vm.imgUrls.length >= 1) {
          vm.isPhoto = false;
        } else {
          vm.isPhoto = true;
        }
      },
      addPic(){
        console.log('1111');
        let vm = this;
        $('#file1').trigger('change');
        return false;
      },
      onFileChange(e){
        console.log('555')
        var files = e.target.files || e.dataTransfer.files;
        if(!files.length) return;
        console.log('22222');
        this.createImage(files,e);
      },
      createImage(file,e){
        console.log('33333');
        let vm = this;
        lrz(file[0],{width:120}).then(function (rst) {
          vm.dc_photo_z = (rst.base64);
          return rst;
        }).always(function () {
          //清空值
          e.target.value= null;
        })
      }
    }
  };
</script>
<style scoped>
  .photowrapper{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: #F2F2F2;
    z-index: 5;
    transition: all 0.5s;
  }
  .contents-wrapper{
    background: #F1F1F1;
    padding: 12px;
  }
  .photos-wrapper{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .filebox{
    position: relative;
    width: 48%;
    height: 120px;
    text-align: center;
    line-height: 2.0;
    font-size: 12px;
    color: #616161;
    margin-bottom: 10px;
  }
  .fileinput{
    position: absolute;
    width: 100%;
    height: 88%;
    top: 0;
    left: 0;
    background: url("../../../common/img/addphoto1.png")no-repeat center;
    background-size: contain;
    display: inline-block;
  }
/*  .fileinput .fileLabel{
    background: url("../../../common/img/addphoto1.png")no-repeat center;
    background-size: contain;
    width: 90%;
    height: 90%;
    display: inline-block;
  }*/
  .showImg{
    width: 100%;
    height: 100%;
  }
  .file-inner{
    background: #FFFFFF;
    border: 1px solid #E4E4E4;
    border-radius: 9px;
    height: 100px;
    overflow: hidden;
  }
</style>
