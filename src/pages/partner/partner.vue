<template>
  <div>
    <v-header :goBack="true" msg="我的乐伴"></v-header>
    <div class="partner-top-wrapper gradient-green">23    </div>
    <section class="content-margin-top partner-content">
        <ul>
          <li class="partner-item" v-for="item in partners.list" v-show="partners.list.length > 0">
            <p class="name">{{ item.idCardName}}</p>
            <div class="icon-phone tel">{{item.phone}}</div>
          </li>
        </ul>
        <p>总共{{partnersCount}}伙伴</p>
    </section>
  </div>
</template>
<script>
  import vHeader from '@/components/componentsmore/vheader.vue'
  import {mapState, mapGetters} from 'vuex'
  export default {
    components:{vHeader},
    data(){
      return{
      /*  partner:[
          {name:'crowdel',tel:'12345687954568'},
          {name:'nerver',tel:'12345687954568'},
          {name:'images',tel:'12345687954568'},
          {name:'amaged',tel:'12345687954568'},
          {name:'haopy',tel:'12345687954568'},
          {name:'thought',tel:'12345687954568'},
        ]*/
      }
    },
    mounted(){
      this.$store.dispatch('GET_PARTNERS')
    },
    computed:{
      ...mapState(['partners']),
      ...mapGetters(['partnersCount'])
    }
  };
</script>
<style >
.partner-top-wrapper{
  position: relative;
  height: 145px;
  text-align: center;
  font-size: 66px;
  color: #FFFFFF;
  line-height: 1.5;
}
.content-margin-top{
  position: relative;
  width: 93.6%;
  margin: -25px auto 0;
}
  .partner-item{
    position: relative;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 15px 25px;
    margin-bottom: 15px;
    line-height: 1.8;
  }
  .partner-item .name{
    font-size: 17px;
    color: #616161;
  }
  .partner-item .tel{
    font-size: 14px;
    color: #949494;
  }
</style>
