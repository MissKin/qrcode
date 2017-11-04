// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Loading from './plugin/loading/loading.js'
import Dialog from './plugin/dialog/dialog.js'
import store from './store/'
import App from './App'
import axios from 'axios'
import VueResource from 'vue-resource'
import router from './router'
import VueAwesomeSwiper  from 'vue-awesome-swiper';

Vue.prototype.axios = axios
axios.defaults.withCredentials=true;//设置证书
/*axios.defaults.transformRequest = function(data) {
  const dat = qs.stringify(data)
  return dat;
}
axios.defaults.transformResponse = function(data) {
  const dat = qs.stringify(data)
  return dat;
}*/

Vue.use(VueResource)

Vue.use(VueAwesomeSwiper)
Vue.use(Loading,{container: '#app'})
Vue.use(Dialog, {container:'#app'})
Vue.config.productionTip = false

/*拦截器配置*/
/*axios.interceptors.response.use( res => {
    console.log('拦截器111')
  return res;
},err => {
  console.log('拦截器2222')
  if(err.response){
    if(err.response.status == 401){
      store.commit(type.LOGOUT);
      router.replace({
        path:'/login',
        query:{redirect:router.currentRoute.fullPath}
      })
    }
  }
  return Promise.reject(err)
  }

)*/
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
/*Vue.start(App,'#app')*/
