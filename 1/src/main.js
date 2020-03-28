import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/index.js'

import $ from 'jquery'
Vue.prototype.$ = $;

import Axios from 'axios'
Vue.prototype.$ajax = Axios;


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
