import Dialog from './dialog.vue'

export default{
  /*
  * 每个插件都有 install方法
  * @params {Object} Vue类
  * @params {Object} [pluginOption]插件配置
  * */
  install(Vue, pluginOption={}){
    //创建'子类' 方便挂载
    const VueDialog = Vue.extend(Dialog);
    let dialoging = null;
    /*
    * 初始化 显示提示框
    * @params type {Boolean} true 显示成功的图标, false 显示失败的图标
    * @params text {String} 提示框的文字
    * @return {Promise}
    * */
    function $dialog(type, text){
      return new Promise ( (resolve) => {
      //第一次调用
      if(!dialoging){
        //手动创建'未挂载'的实例
        dialoging = new VueDialog();
        dialoging.$mount();
        //挂载
        document.querySelector(pluginOption.container || 'body').appendChild(dialoging.$el)
      }
      dialoging.show();
      //传递提示框的类型和文字
      dialoging.setText(type,text);
        resolve();
      })
    }
    /*
    * 关闭弹窗
    * @return {Promise}
    * */
    $dialog.end= () => {
      return new Promise( (resolve) => {
        dialoging.hide();
        resolve();
      })
    }
  //  配置到 Vue 的实例上
    Vue.dialog = Vue.prototype.$dialog= $dialog
  }
}
