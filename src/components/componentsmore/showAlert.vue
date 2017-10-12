<template>
  <div class="alertBox" v-if="showAlert">
    <div class="icon icon-success" v-if="alertSuccess"></div>
    <div class="icon icon-fail" v-else></div>
    <p class="alert-text">{{alertText}}</p>
  </div>
</template>

<script>
export default {

  data () {
    return {
    }
  },
  props:["showAlert","alertSuccess","alertText"],

  methods:{

  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .alertBox{
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0,0,0,0.5);
    border-radius: 9px;
    color: #ffffff;
    padding: 10px;
    min-width: 80px;
    text-align: center;
    z-index: 555;
  }
  .alertBox .icon{
    font-size: 50px;
  }
  .alert-text{line-height: 2}
</style>
