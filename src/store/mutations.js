/**
 * @author Auroral on 2017/9/13 0013.
 */
import {BANK_CODE,USER_ID,BANKCARDS,RECEIVALLIST,PROFITLIST,WITHDRAWLIST,
  STARTDATE,
  ENDDATE,
  BALANCE,
  WITHDRAW,
  LOGOUT,
  PAYINFO

} from './mutation-types.js'

export default{
  [BANK_CODE](state,bankcode){
    state.BANK_CODE = bankcode
  },
  [USER_ID](state,user_id){
    state.user_id = user_id;
  },
  Bankcards(state){
    state.bankcards++;
  },
  SET_BANK_CARDS(state, list){
    state.bankcards = list;
  },
  SET_PARTNERS(state, list){
    state.partners = list;
  },
  [RECEIVALLIST](state,list){
    state.receivalList = list.list;
  },
  [PROFITLIST](state,list){
    state.profitList = list.list;
  },
  [WITHDRAWLIST](state,list){
    state.withdrawList = list.list;
  },
  [STARTDATE](state,val){
    state.startDate = val;
  },
  [ENDDATE](state,val){
    state.endDate = val;
  },
  [BALANCE](state,result){
    state.balance = {
      withdrawBalanceYuan:result.w,
      yesterdayProfitYuan:result.y,
      todayTradeMoneyYuan:result.tY,
      todayProfitYuan:result.tP
    }
  },
  [WITHDRAW](state,result){
    state.withdraw = {
      mchAccountId:result.aId,//账户ID
      mchBankCardId: result.bId,//银行卡ID
      bankCard:result.bankCard, //提现卡号
      expenseYuan:result.eY,//提现费用
      balanceYuan:result.bY,//余额
    }
  },
  [LOGOUT](state, result){
    state.user_id = null;
  },
  payInfo(state,result){
    console.log('mutations result'+result)
    state.payinfo = {
      pmtChnlType:result.pmtChnlType,//支付类型
      siteChnlId:result.siteChnlId,//站点ID
      amount:result.amount,//支付金额
      havaSMS:result.havaSMS
    }
    console.log('state.payinfo'+state.payinfo)
  },
  BANKCARDID(state,id){
    state.ccBankCardId = id;
  }

}
