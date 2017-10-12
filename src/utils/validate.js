/**
 * Created by Administrator on 2017/8/24 0024.
 */

/*手机号码*/
export function isPhone(str) {
  let regtel = /^1\d{10}$/gi;
  return regtel.test(str);
}
/*密码由6-10位字符组成，包含数字、字母（区分大小写，
 不含空格）*/
export function validatePwd(str) {
  let regpwd=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/gi;
  return regpwd.test(str);
}
