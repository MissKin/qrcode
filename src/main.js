// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store/'
import App from './App'
import axios from 'axios'
import VueResource from 'vue-resource'
import router from './router'
import VueAwesomeSwiper  from 'vue-awesome-swiper'


Vue.prototype.axios = axios

Vue.use(VueResource)

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
/*Vue.start(App,'#app')*/
