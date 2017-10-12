<template>
<div class="authent-name">
  <v-header goBack="true" msg="实名认证"></v-header>
  <div class="content-wrapper">
    <notice-yellow text="友情提示：只有通过实名认证才能有效收款使用"></notice-yellow>
    <div class="phone-text">当前账户：{{loginId}}</div>
    <form-input title="推荐人号码" input_type="text" v-model="recommandPhone"  place_str="推荐人手机号码（选填）"></form-input>
    <form-input title="姓名" input_type="text" v-model="realname"  place_str="输入真实姓名"></form-input>
    <form-input title="身份证" input_type="text" v-model="idCardNo"  place_str="输入本人身份证"></form-input>
    <div class="input-box" @click="bankShow=true">
      <span class="title">开户银行</span><p class="text">{{bankName?bankName:'开户银行'}}</p>
    </div>
    <div class="input-box" @click="addChose"><span class="title">开户地点</span>
      <p class="text">{{City ? Province.regionName + City.regionName :'开户地点'}}
    </p> </div>
    <div  class="input-box" @click="netShow = true">
      <span class="title">银行网点</span>
      <p class="text">{{bankNameAbbr ? bankNameAbbr :'选择银行网点'}}</p>
    </div>
    <form-input title="银行卡号" input_type="text" v-model="bankCardNo"   place_str="输入银行卡号"></form-input>
    <form-input title="预留号码" input_type="tel" v-model="phone"  place_str="输入银行预留手机号"></form-input>
    <form-input-timer ref="forminputtimer" title="验证码" v-model="checkCode" place_str="输入验证码" :disableded="disableded" v-on:run="sendCode"></form-input-timer>
    <div class="btn btn-bg-green next-btn"@click="saveSettleBankCard" >下一步</div>
    <show-alert :showAlert="showAlert" :alertText="alertText" :alertSuccess="alertSuccess"></show-alert>
    <!--银行搜索-->
    <transition name="router-slid" mode="out-in" >
      <div class="search-wrapper" v-show="bankShow">
        <v-header goBack="true" search="true" v-model="searchValue" leftmsg="搜索" @leftFun="searchBank"></v-header>
        <div class="notice">迷糊匹配，如“工商、农业、建设”银行等……</div>
        <ul class="search-box" @click="selectBank($event)">
          <li class="result-item" v-for="bank in bankList" :name="bank.bankCode">{{bank.bankName}}</li>
        </ul>
      </div>
    </transition>

    <!--居住地址三级联动选项-->
    <transition name="bottomIn-fade" >
      <section class="showChose" v-show="showChose">
        <select name="" id="Provice" @change="getProvince($event)" v-model="Province">
          <option v-for="v in provinceList" :value="v" >{{ Province =='null' ?'' : v.regionName}}
          </option>
        </select>
        <select name="" id="City" @change="getCity($event)" v-model="City">
          <option v-for="v in cityList" :value="v" >{{ City =='null' ?'' : v.regionName}}</option>
        </select>
      </section>
    </transition>

    <!--银行网点搜索-->
    <transition name="router-slid" mode="out-in" >
      <div class="search-wrapper" v-show="netShow">
        <v-header goBack="true" search="true" v-model="searchValue" leftmsg="搜索" @leftFun="searchBankNet"></v-header>
        <div class="notice">迷糊匹配，如“工商、农业、建设”银行等……</div>
        <ul class="search-box" >
          <li class="result-item" v-for="bank in bankNetList" @click="selectNet($event)">{{bank.bankNameAbbr}}</li>
        </ul>
      </div>
    </transition>

    <!--上传图片-->

    <transition name="router-slid" mode="out-in"  >
      <div class="uploadPhoto-wrapper" >
        <v-header goBack="true" msg="上传照片"></v-header>
      <div class="content-wrapper">
        <div class="photos-wrapper">
          <div class="filebox">
            <div class="file-inner">
              <div class="showImg">
                <img src="" alt="" id="showImg1">
              </div>
              <div class="fileinput">
                <input type="file" id="fileshowImg1" @change="getFileChange($event,'1')">
               <!-- <label for="file1" class="fileLabel" id="hiddenImg1"></label>-->
              </div>
            </div>
            <p>添加身份证正面 </p>

          </div>
          <div class="filebox">
            <div class="file-inner">
              <div class="showImg">
                <img src="" alt="" id="showImg2">
              </div>
              <div class="fileinput">
                <input type="file" id="fileshowImg2" @change="getFileChange($event,'2')">
                <!-- <label for="file1" class="fileLabel" id="hiddenImg1"></label>-->
              </div>
            </div>
            <p>添加身份证反面</p>
          </div>
          <div class="filebox">
            <div class="file-inner">
              <div class="showImg">
                <img src="" alt="" id="showImg3">
              </div>
              <div class="fileinput">
                <input type="file" id="fileshowImg3" @change="getFileChange($event,'3')">
                <!-- <label for="file1" class="fileLabel" id="hiddenImg1"></label>-->
              </div>
            </div>
            <p>收款银行卡照片</p>
          </div>
          <div class="filebox">
            <div class="file-inner">
              <div class="showImg">
                <img src="" alt="" id="showImg4">
              </div>
              <div class="fileinput">
                <input type="file" id="fileshowImg4" @change="getFileChange($event,'4')">
                <!-- <label for="file1" class="fileLabel" id="hiddenImg1"></label>-->
              </div>
            </div>
            <p>手持身份证照片</p>
          </div>
        </div>
        <div class="btn btn-bg-green next-btn" @click="saveIdentify" >提交</div>
        <a class="btn green_emptyBtn next-btn" style="display: block;" href="picExample.html">图片示例</a>
      </div>
        {{fileshowImg1}}
    </div>
    </transition>
  </div>
</div>
</template>
<script>
  import vHeader from '@/components/componentsmore/vheader.vue'
  import noticeYellow from '@/components/componentsmore/noticeYellow.vue'
  import formInput from '@/components/componentsmore/forminput.vue'
  import formInputTimer from '@/components/componentsmore/formInputTimer.vue'
  import showAlert from '@/components/componentsmore/showAlert.vue'
  import {isPhone} from '@/utils/validate.js'
  import {to_identify,get_check_code,save_settle_bank_card,get_bank,get_cnaps_bank} from 'api/getdata.js'
  import {getStore,setStore,removeStore} from 'utils/utils.js'

  export default {
    components:{
      vHeader,
      noticeYellow,
      formInput,
      formInputTimer,
      showAlert,
    },
    beforeRouteEnter(to, from, next){
      next(vm=>{
        console.log('组件路由勾子beforeRouteEnter的next')
        console.log(vm.phone)
      })
    },
    data(){
      return {
        searchValue:'银行',//搜索框中的值
        bankList:[],//搜索出来的银行名称
        bankNetList:[],//搜索出来的银行网点
        phone:'15757185394',//银行预留手机号
        bankCardNo:'',
        loginId:'',//当前账户
        showCity:false,//显示城市
        showDistrict:false,//显示区
        Province:null, //省的值
        City:null,//城市的值
        provinceList:null,//省的所有值
        cityList:null,//城市的所有值
        districtList:null,//区的所有值
        showChose:false,//是否显示省市区的
        recommandPhone:'',//推荐人号码
        realname:'',//姓名
        idCardNo:'',//身份证号
        checkCode:'',//验证码
        alertText:'', //弹窗提示文字
        alertSuccess:false,//弹窗显示成功的图标
        showAlert:false,//是否显示弹窗
        bankShow:false,//搜索银行的弹窗
        bankCode:null,//选择银行卡的编号
        bankName:null,//选择银行的名字
        cityCode:null,//选中城市的编号
        netShow:false,//网点弹窗
        bankNameAbbr:null,//选中银行网点名字
        fileshowImg1:null,
        fileshowImg2:null,//第二张
        fileshowImg3:null,//第三张
        fileshowImg4:null,//第四张
        fileImgList:[],
      }
    },
    created(){
      this.loginId = getStore('loginId');
    },
    watch:{
        showAlert:'hiddenAlert',
    },
    methods:{
      hiddenAlert(){
        setTimeout(()=>{
          this.showAlert = false;
        },2000)
      },
      sendCode(){
        this.$refs.forminputtimer.setDisabled(true);
        if(isPhone(this.phone)){
          get_check_code(this,{params:{phone:this.phone,checkType:5}})
            .then( (response) => {
              response = response.body;
              if(response.result){
                this.$refs.timerbtn.start();//启动倒计时
              }else {
                this.showAlert = true;//显示弹窗
                this.alertText = response.message;
                this.alertSuccess = false; //错误类的弹窗
                this.$refs.timerbtn.stop();//关闭倒计时
              }
            },response => {
              console.log('错误了1222')
            })
        }
        this.$refs.forminputtimer.start()
      },
      jumpPage(page){
        this.$router.push('/NameAuthentication/'+page);
      },
      getProvince($event){
        if(!this.Province){
            return;
        }else{
          var regionId = this.Province.regionId;
        }
        if(regionId){
          this.$http.post('/qrpay.open/mch/get_region?parentId='+ regionId )
            .then( response => {
              response= response.body;
              this.cityList = response.result;
            })
        } else if( regionId == ''){
          this.$http.post('/qrpay.open/mch/get_region?parentId=null')
            .then( response => {
              response= response.body;
              this.cityList = response.result;
            })
        }
        removeStore('bankNameAbbr')
      },
      getCity($event){
        if(!this.City){
          return;
        }else{
          this.cityCode = this.City.cityCode;
          this.showChose = false;
        }
      },
      addChose(){
        this.$http.post('/qrpay.open/mch/get_region',{})
          .then((response) => {
            response = response.body;
            this.showChose = true;
            this.provinceList = response.result;
          })
      },
      searchBank(){
        if(this.searchValue === ''){
          console.log('请输入信息')
          return;
        } else{
          get_bank(this,{bankName:this.searchValue})
            .then( response =>{
              response = response.body;
              var result= response.result;
              for(var i = 0; i<result.length; i++){
                this.bankList.push({bankName:result[i].bankName,bankCode:result[i].bankCode});
              }
            })
        }
      },
      selectBank($event){
        var target = $event.target;
        this.bankCode = $(target).attr('name');
        this.bankName = $(target).text();
        this.bankShow = false;
      },
      searchBankNet(){
        get_cnaps_bank(this,{params:{cityCode:this.cityCode,bankCode:this.bankCode,bankName:this.searchValue}})
          .then(response => {
            response = response.body;
            this.bankNetList =response.result;
          })
      },
      selectNet($event){
        var target =  $event.target;
        this.bankNameAbbr = $(target).text();
        this.netShow = false;
      },
      saveSettleBankCard(){
        if(this.realname !=""&&this.idCardNo!=''&&this.getbankName!=''&&this.City.regionName&&this.Province.regionName&&this.getbankNameAbbr!=''&&this.bankCardNo!=''&&this.phone!=''&&this.checkCode!=''){
          console.log('all');
          this.$http.post('/qrpay.open/mch/save_settle_bank_card',{params:{
            idName:this.realname,
            idCardNo:this.idCardNo,
            bankName:this.getbankName,
            province:this.Province.regionName,
            city:this.City.regionName,
            bankBranchName:this.getbankNameAbbr,
            bankCardNo:this.bankCardNo,
            mobile:this.phone,
            checkCode:this.checkCode,
            checkType:5
          }}).then( (response)=>{
            response = response.body;
            let result = response.result;
            let message = response.message;
            if(result){
              console.log('成功保存')
            }else{
              console.log(result.message)
            }
          },response => {
            console.log('错误了1222')
          })
        }else{
          this.showAlert = true;//显示弹窗
          this.alertText = '请填写完整';
          this.alertSuccess = false; //错误类的弹窗
        }
      },
      getFileChange(e,objId){
        var list = [];
        let files = e.target.files;
        let url;
        var id = objId;
        console.log(id);
        url = window.URL.createObjectURL(files.item(0));
        $('#showImg'+objId).attr('src',url);
        let fileVal = $('#fileshowImg'+ objId).val();
        this.getImgVal('fileshowImg'+objId);

      },
      getImgVal(obj){
        switch (obj){
          case 'fileshowImg1':this.fileshowImg1 =  $('#fileshowImg1').val();break;
          case 'fileshowImg2':this.fileshowImg2 =  $('#fileshowImg2').val();break;
          case 'fileshowImg3':this.fileshowImg3 =  $('#fileshowImg3').val();break;
          case 'fileshowImg4':this.fileshowImg4 =  $('#fileshowImg4').val();break;
        }
      },
      saveIdentify(){
        this.$http.post({
          url:'/qrpay.open/mch/save_identify_photo_h5',
          params:{
            isUpdating:true,
            idCardZImage: this.fileshowImg1,
            idCardFImage:this.fileshowImg2,
            dcPhotoImage:this.fileshowImg3,
            manIdcardPhotoImage:this.fileshowImg4
          }
        }).then( (response) => {
          var response = response.body;
          let result = response.result;
          if(result){
            console.log(123456)
          }else {
            console.log(8888)
          }
        },response => {
          console.log('错误了')
        })
      }
    },
    computed:{
      disableded(){
        return !isPhone(this.phone);
      },

    },
  };
</script>
<style scoped>
  .content-wrapper{
    position: relative;
    padding: 12px;
  }
  .phone-text{
    font-size:15px;
    color:#616161;
    margin-bottom: 12px;
  }
  .input-box{
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
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
   .input-box .title{
     display: inline-block;
     width: 78px;
     padding-right: 5px;
  }
   .input-box .text{
     -webkit-box-flex: 1;
     -ms-flex: 1;
     flex: 1;
     color:#37C32E;
  }
  .next-btn{
    margin-top: 20px;
  }

  .showChose{
    position: fixed;
    bottom: 0;
    height: 50px;
    width: 95%;
    background: #e1e1e1;
    margin: 0 -12px;
    padding: 10px;
    display: flex;
    justify-content: space-around;
  }
  .showChose > select{
    flex: 1;
    height: 20px;
    border: 1px solid #eee;
    border-radius: 8px;
  }
  .search-wrapper{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: #F2F2F2;
  }
  .notice{
    height: 40px;
    background: #F9E9CF;
    border: 1px solid #EECD94;
    font-size: 13px;
    color: #E2A33B;
    line-height: 40px;
    padding-left: 8px;
  }
  .search-box{
    position: absolute;
    overflow-x: hidden;
    padding-left: 14px;
    background: #fff;
    overflow-y: scroll;
    bottom: 0;
    top: 87px;
    width: calc(100% - 14px);
  }
  .search-box .result-item{
    width: 100%;
    height: 40px;
    font-size: 15px;
    color: #616161;
    line-height: 40px;
    border-bottom: 1px solid #DEDEDE;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .search-box .result-item:last-child{
    border-bottom:none;
  }
  .uploadPhoto-wrapper{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: #F2F2F2;
    display: none;
    transition: all 0.5s;
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
    height: 100%;
    top: 0;
    left: 0;
  }
  .fileinput .fileLabel{
    background: url("../../../common/img/addphoto1.png")no-repeat center;
    background-size: contain;
    width: 90%;
    height: 90%;
    display: inline-block;
  }
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
  .bottomIn-fade-enter-active,.bottomIn-fade-leave-active{
    transition: all 0.5s
  }
  .bottomIn-fade-enter,.bottomIn-fade-leave-active{
    opacity: 0;
    transform:translateY(10px)
  }
</style>
