/**
 * @author Auroral on 2017/9/13 0013.
 */
import {RECEIVALLIST,PROFITLIST,WITHDRAWLIST,BALANCE,WITHDRAW,LOGOUT} from './mutation-types'
import axios from 'axios'
export default {
  asyncBankcards(context){
    /*setInterval(() => {*/
      context.commit('Bankcards')
   /* },2000)*/
  },
  LOAD_BANK_CARDS(context){
    axios.get('/qrpay.open/mch/show_bank_card')
      .then( response => {
        context.commit('SET_BANK_CARDS',{list: response.data.result})
      }).catch(err => {
        console.log(err)
    })
  },
  GET_PARTNERS(context,params){
    axios.get('/qrpay.open/mch/show_partner',{params:{currentPage:params}})
      .then( response => {
        console.log(response.data.result);
        context.commit('SET_PARTNERS',{list:response.data.result})
      }).catch(err => {
        console.log(err)
    })
  },
  //账单-收款列表
  GET_RECEVAL(context,params){
    axios.get('/qrpay.open/mch_trade/trade_list',{params:{params}})
      .then( res => {
        let list = res.data.result;
        context.commit(RECEIVALLIST,{list})
      }).catch( err => {
        console.log(err)
    })
  },
  //账单-利润列表
  GET_PROFIT(context,params){
    axios.get('/qrpay.open/mch_trade_profit/profit_list',{params:{params}})
      .then( res => {
        let list = res.data.result;
        console.log('action '+ list);
        context.commit(PROFITLIST,{list})
      }).catch( err => {
      console.log(err)
    })
  },
  //账单-提现列表
  GET_WITHDRAW(context,params){
    axios.get('/qrpay.open/mch_trade/trade_list',{params:{params}})
      .then( res => {
        let list = res.data.result;
        console.log('action '+ list);
        context.commit(WITHDRAWLIST,{list})
      }).catch( err => {
      console.log(err)
    })
  },
  //余额
  GET_BALANCE(context){
    axios.get('/qrpay.open/mch_account/profit_balance')
      .then( res => {
        let result = res.data.result;

        if( res.data.status == 1){
          let withdrawYuan = result.withdrawBalanceYuan,
            yesterdayYuan = result.yesterdayProfitYuan,
            todayYuan = result.todayTradeMoneyYuan,
            tProfitYuan = result.todayProfitYuan;
          console.log(withdrawYuan);
          context.commit(BALANCE, {w:withdrawYuan,y:yesterdayYuan,tY:todayYuan,tP:tProfitYuan})
        }else {
          console.log(res.data.message);
        }
      }).catch( err => {
        console.log(err);
    })
  },
  //分润余额提现页面
  GET_BALANCE_WITHDRAW(context){
    axios.get('/qrpay.open/mch_account/profit_withdraw_show')
      .then( res => {
        let result = res.data.result;
        let status = res.data.status;
        if(status == 1){
            context.commit(WITHDRAW,{aId:result.mchAccountId,bId:result.mchBankCardId,bankCard:result.bankCard,eY:result.expenseYuan,bY:result.balanceYuan})
        } else {
          console.log(res.data.message)
        }

      })
  },
  //退出页面
  LOGOUT(context){
    axios.get('/qrpay.open/mch/logout')
      .then( res => {
        let result = res.data.result;
        if(result){
          alert('退出成功');
          context.commit(LOGOUT)
          this.$router.push('/login');
        }
      })
  }
}
