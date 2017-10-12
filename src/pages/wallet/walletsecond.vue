<template>
  <div class="wallet-wrapper ">
    <div class="wallet-item-wrapper">
      <div class="paymoney-wrapper">
        <p class="text">请输入收款金额：</p>
        <div class="moneyInput">
          <div class="show-money show-active" id="money"></div>
        </div>
      </div>
      <div class="keyboard">
          <ul class="keyboard-ul" @click="getNum($event)">
            <li class="pressed num"  data-value="1">1</li>
            <li class="pressed num" data-value="2">2</li>
            <li class="pressed num" data-value="3">3</li>
            <li class="del pressed" id="go_back" @click="deleteNum()"><span class="icon-delet"></span></li>
            <li class="pressed num" data-value="4">4</li>
            <li class="pressed num" data-value="5">5</li>
            <li class="pressed num" data-value="6">6</li>
            <li class="enter  pLi" :class="{'gradient-green': notzero}" id="surepay" @click="pay">确认支付</li>
            <li class="pressed num" data-value="7">7</li>
            <li class="pressed num" data-value="8">8</li>
            <li class="pressed num" data-value="9">9</li>
            <li class="pressed zero num" data-value="0">0</li>
            <li class="pressed zero num" data-value="00">00</li>
            <li class="pressed dot" @click="addDot()" data-value=".">.</li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'walletsecond',
  data () {
    return {
      notzero:false
    }
  },
  methods:{
    getNum(e){
     if(e.target.className.indexOf('num') > -1){
       var value = $(e.target).data('value');
       var html = $('.show-money').html();
          if(parseInt(html+value) > 9999999){
            return;
          }
       $('#money').html($('#money').html() + String(value));
       if($('.show-money').html().length > 0){
         this.notzero = true;
       }else{
         this.notzero = false;
       }
     }

    },
    deleteNum(){
      var html = $('.show-money').html();
     $('#money').html( html.substr(0,html.length-1));
      if($('.show-money').html().length > 0){
        this.notzero = true;
      }else{
        this.notzero = false;
      }
    },
    addDot(){
      var html = $('.show-money').html();
      if(html== " "){html = '0'+'.'}
      if(html.split('').indexOf('.') > -1){
        var x =html.split('.'),y;
        if(x[1] * 1 >0){
          var k = x[1];
          y = k.substring(0,2);
          $('.show-money').html(x[0]+ '0' + y);
        }
      }
      if(html.split('').indexOf('.') > -1 || html == '' || parseInt(html)>9999999 ) return
      $('.show-money').html(html + '.')
    },
    pay(){
      this.$router.push('/paydetail');
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*@import "../../common/style/base.css";*/
  .wallet-item-wrapper{
    position: relative;
    width: 100%;
    background: #FFFFFF;
    border-radius: 15px;
    margin-bottom: 10px;
  }
  .wallet-item-wrapper:before{
    position: absolute;
    content: "";
    left: 47%;
    top: -21px;
    border: 10px solid transparent;
    border-bottom: 11px solid #ffffff;
  }
  .paymoney-wrapper{
    position: relative;
    width: 91%;
    padding: 2.5% 4.5%;
  }
  .paymoney-wrapper .text{
    font-size: 16px;
    color: #616161;
  }
  .paymoney-wrapper .moneyInput{
    margin-top: 11px;
    background: #FFFFFF;
    border: 1px solid #DEDEDE;
    border-radius: 9px;
    padding: 2.2% 4%;
  }

  .show-money{
    position: relative;
    height: 40px;
    line-height: 40px;
    padding-right: 5px;
    font-size: 44px;
    color: #BFBFBF;
    display: inline-block;
  }
  .show-money:before{
    display: inline-block;
    content: '￥';
    font-size: 44px;
    color: #616161;
    padding-right: 5px;
  }
  .show-money:after{
    content: '';
    position: absolute;
    width: 2px;
    height: 85%;
    background-color: #47D439;
    top: 9%;
    right: 0;
    animation: twinkle 1s infinite;
  }
@keyframes twinkle {
  0%{
    opacity: 0;
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
}
  .show-active{
    color: #37C32E;
  }
  .keyboard{
    display: -webkit-inline-box;
    width: 96%;
    margin: 9.1% 2.0% 2.0% 2.0%;
  }
  .keyboard-ul{
    z-index: 2;
    /*display: flex;
    justify-content: space-around;
    flex-wrap: wrap;*/
  }
  .keyboard-ul > li{
    width: 22%;
    height: 9vh;
    float: left;
    margin-bottom: 2%;
    line-height: 9vh;
    margin: 0 0.5% 1.5%;
    text-align: center;
    vertical-align: baseline;
    background: #F7F7F7;
    border: 1px solid #E2E2E2;
    border-radius: 8px;
    font-size: 29px;
    color: #616161;
  }
  .keyboard-ul .del, .keyboard-ul .enter{
    width: 27%;
    float: right;
  }
  .keyboard-ul .enter{
    background: #E2E2E2;
    height: 29vh;
    line-height: 29vh;
    font-size: 19px;
    color: #FFFFFF
  }
.nopay{
  color:#616161
}
  .pressed:active{
    background: #E2E2E2;
  }

</style>
