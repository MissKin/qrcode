import Vue from 'vue'
import Router from 'vue-router'

const login = r => require.ensure([], () => r(require('../pages/login/login')), 'login')
const getpassword = r => require.ensure([], ()=> r(require('../pages/password/getpassword')),"getpassword")
const setpassword = r => require.ensure([], () => r(require('../pages/password/setpassword')),'setpassword')
const register = r => require.ensure([], () => r(require('../pages/register/register')),'register')
const home = r =>  require.ensure([], () => r(require('../pages/home/home')),'home')
const wallet = r => require.ensure([], () => r(require('../pages/wallet/Wallet')),'wallet')
const message = r => require.ensure([], () => r(require('../pages/message/Message')),'message')
const userMsg = r => require.ensure([], () => r(require('../pages/message/userMsg')),'userMsg')
const systemMsg = r => require.ensure([], () => r(require('../pages/message/systemMsg')),'systemMsg')
const messageText = r => require.ensure([], () => r(require('../pages/message/messageText')),'messagetext')
const share = r => require.ensure([], () => r(require('../pages/share/share')),'share')
const qrcode = r => require.ensure([], () => r(require('../pages/share/shareqrcode')),'qrcode')
const centraloffice =r => require.ensure([], ()=> r(require('../pages/share/centraloffice')),'centraloffice')
const faceapply =r =>require.ensure([], ()=> r(require('pages/share/face_to_face_apply')),'faceapply')
const user = r => require.ensure([], () => r(require('pages/user/User')),'user')
const bankcards = r => require.ensure([], () => r(require ('pages/user/children/myBankCards')), 'myBankCards')
const bankcardsadd = r => require.ensure([], () => r(require('pages/user/children/myBankCardsAdd')),'bankcardsadd')

const personal = r => require.ensure([], () => r(require('pages/user/children/personal-set')),'personal')
const modifyPhoneNum = r => require.ensure([], () => r(require('pages/user/children/modifyPhoneNum')),'modifyPhoneNum')
const NameAuthentication = r => require.ensure([], () => r(require('pages/user/children/NameAuthentication')),'NameAuthentication')
const AuthSearch = r => require.ensure([], () => r(require('pages/user/children/AuthSearch')),'AuthSearch')
const BankPoint = r => require.ensure([], () => r(require('pages/user/children/bankPoint')),'bankPoint')
const UploadPhoto = r => require.ensure([], ()=> r(require('pages/user/children/uploadPhoto')),'uploadPhoto')
const changePwd = r => require.ensure([],() => r(require('pages/user/children/changePwd')),'changePwd')
const walletfirst = r => require.ensure([], ()=> r(require('pages/wallet/walletfirst')),'walletfirst')
const walletsecond = r => require.ensure([], ()=> r(require('pages/wallet/walletsecond')),'walletsecond')
const walletthird = r => require.ensure([], () => r(require('pages/wallet/walletthird')),'walletthird')
const paydetail = r => require.ensure([], () => r(require('pages/payinfo/paydetail')),'paydetail')
const paydetail2 = r => require.ensure([], () => r(require('pages/payinfo/paydetail_detail')),'paydetail_detail')
const partner =r => require.ensure([], () => r(require('pages/partner/partner')), 'partner')
const balance =r => require.ensure([], () => r(require('pages/balance/balance')), 'balance')
const balanceWithdraw =r => require.ensure([], () => r(require('pages/balance/balance_withdraw')), 'balance_withdraw')
const withdrawRecord =r => require.ensure([], () => r(require('pages/balance/withdraw_record')), 'withdraw_record')
const bill =r => require.ensure([], () => r(require('pages/bill/bill')), 'bill')
const receival =r => require.ensure([], () => r(require('pages/bill/receival')), 'receival')
const profit =r => require.ensure([], () => r(require('pages/bill/profit')), 'profit')
const withdraw =r => require.ensure([], () => r(require('pages/bill/withdraw')), 'withdraw')
const fee =r => require.ensure([], () => r(require('pages/fee/fee')), 'fee')


Vue.use(Router)

export default new Router({
  linkActiveClass:'router-active',
  mode:'history',
  routes: [
    {
      path:'/',
      redirect:'/login'
    },
    {
      path:'/login',
      component: login
    },
    {
      path:'/getpassword',
      component:getpassword
    },
    {
      path:'/setpassword',
      component: setpassword
    },
    {
      path:'/register',
      component: register
    },
        {
          // /home/wallet
          path:'/wallet',
          component:wallet,
          children:[
            {
              // /home/wallet
              path:"",
              component: walletfirst
            },
            {// /home/wallet/second
               path:"second",
              component:walletsecond
            },
            {// /home/wallet/third
               path:"third",
              component:walletthird
            }
          ]
        },
        { //  /home/share
          path:'/share',
          component:share,
        },
        {//  /home/user
          path:"/user",
          component:user,
          children:[
            {
              path: 'personal',
              component: personal
            },
            {
              path:'uploadPhoto',
              component:UploadPhoto
            },
            {
              path:'changePwd',
              component:changePwd
            },
            {
              name:'bankcards',
              path:'bankcards',
              component:bankcards,
              meta:{keepAlive: true}
            },{
              name:'bankcardsadd',
              path:'bankcardsadd',
              component:bankcardsadd

            }
          ]
        },
        {//  /home/message
          path:"/message",
          component:message,
          children:[
            {
              path:'userMsg',
              component:userMsg
            },
            {
              path:'systemMsg',
              component:systemMsg
            }
          ]
        },
    {
      path:'/messageText',
      component:messageText
    },
    {
      //  /qrcodePromotion
      path:'/qrcode',
      component:qrcode
    },{
      //  /centraloffice
      path:'/centraloffice',
      component:centraloffice

    },{
      path:'/faceapply',
      component:faceapply
    },
    {
      // /paydetail
      path:"/paydetail",
      component:paydetail
    },
    {
      name:'paydetail',
      path:'/paydetail/:type',
      component:paydetail2
    },
    {
      path:'/partner',
      component:partner
    },
    {
      path:'/balance',
      component:balance
    },
    {
      name:'balanceWithdraw',
      path:'/balanceWithdraw',
      component:balanceWithdraw
    },
    {
      path:'/withdrawRecord',
      component:withdrawRecord
    },
    {
      path:'/bill',
      component: bill,
      children:[
        {
          name:'receival',
          path:'receival',
          component:receival
        },
        {
          name:'profit',
          path:'profit',
          component:profit
        },
        {
          name:'withdraw',
          path:'withdraw',
          component:withdraw
        }
      ]
    },
    {
      path:'/fee',
      component:fee
    },
    {
      path:'/modifyPhoneNum',
      component:modifyPhoneNum
    },
    {
      path:'/NameAuthentication',
      component:NameAuthentication,
    }

  ]
})
