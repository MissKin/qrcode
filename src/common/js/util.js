/**
 * @author Auroral on 2017/9/29 0029.
 */
export const dateFormat = (date, fmt) => {
  let time = new Date(date);
  let o ={
    'M+': time.getMonth()+1,//月份
    'd+': time.getDay(),//日
    'H+': time.getHours(),//小时
    'm+': time.getMinutes(),//分钟
    's+': time.getSeconds(),//秒
  };
  // 判断年份
  if( /(y+)/.test(fmt)){
    fmt = fmt.replace( RegExp.$1, (time.getFullYear() + '').substr( 4 - RegExp.$1.length));
  }
  for( let k in o){
    if( new RegExp ('('+ k +')').test(fmt)){
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
    }
  }
  return fmt;
}

