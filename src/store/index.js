/**
 * @author Auroral on 2017/9/14 0014.
 */
 import Vue from 'vue'
 import Vuex from 'vuex'
 import mutations from './mutations'
 import getters from './getters'
 import actions from './action'

  Vue.use(Vuex)

  const state = {
    user_id:'',//用户ID
    bankcards:[],//银行卡列表
    partners:null,//乐伴列表
    receivalList:null,//账单-收款列表
    profitList:null, //账单-利润列表
    withdrawList:null,//账单-提现列表
    startDate:'',//查询开始时间
    endDate:'',//查询结束时间
    balance:{},//余额
    withdraw:{},//分润余额提现

  }

  export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
  })
