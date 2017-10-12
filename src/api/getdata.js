/**
 * Created by Administrator on 2017/8/24 0024.
 */

const LOGIN='/qrpay.open/mch/login'; //登录
const CHECK_PHONE ='/qrpay.open/mch/check_phone';   //检测手机号是否注册
const GET_CHECK_CODE='/qrpay.open/mch/get_check_code';//获取验证码
const REGISTER = '/qrpay.open/mch/register'; //商户注册
const LOGOUT = '/qrpay.open/mch/logout';    //退出
const FORGET_MODIFY_PASSWORD='/qrpay.open/mch/forget_modify_password'; // 找回密码
const TO_IDENTIFY = '/qrpay.open/mch/to_identify'; // 跳转至实名认证
const GET_BANK = '/qrpay.open/mch/get_bank'; //获取银行信息
const GET_CNAPS_BANK = '/qrpay.open/mch/get_cnaps_bank';//获取支行信息
const SAVE_SETTLE_BANK_CARD = '/qrpay.open/mch/save_settle_bank_card';//保存结算卡（新增，修改）
const SITE_PMT_CHNL_LIST='/qrpay.open/site_pmt_chnl/site_pmt_chnl_list';//获取通道列表
export function login(context,data) {
  return context.$http.get(LOGIN,data);
}

export function check_phone(context,data){
  return context.$http.get(CHECK_PHONE,data);
}

export function get_check_code(context,data){
  return context.$http.get(GET_CHECK_CODE, data);
}

export function register(context,data) {
  return context.$http.get(REGISTER, data);
}

export  function logout(context) {
  return context.$http.post(LOGOUT)
}

export function forget_modify_password(context,data) {
  return context.$http.post(FORGET_MODIFY_PASSWORD,data);
}

export function to_identify(context) {
  return context.$http.post(TO_IDENTIFY)
}

export function get_bank(context,data) {
  return context.$http.post(GET_BANK,data)
}

export function get_cnaps_bank(context, data){
  return context.$http.get(GET_CNAPS_BANK,data);
}

export function save_settle_bank_card(context, data){
  return context.$http.POST(SAVE_SETTLE_BANK_CARD,data);
}

export function site_pmt_chnl_list(context, data) {
  return context.$http.get(SITE_PMT_CHNL_LIST, data)
}

