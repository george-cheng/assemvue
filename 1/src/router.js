import Vue from 'vue'
import Router from 'vue-router'
import Home from "./views/Home";

Vue.use(Router);

import Dialog from '../src/assets/dialog/dialog.vue'

export default new Router({
  mode: 'history',
  base: '/app/',
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/dialog', name: 'dialog', component: Dialog},

  ]
})
