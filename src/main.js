// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import Vuesax from 'vuesax'
import 'material-icons/iconfont/material-icons.css'
import 'vuesax/dist/vuesax.css'

Vue.use(Vuesax)
/* eslint-disable no-new */
import '@/assets/styles/app.css'

import MySpinner from './plugins/CustomSpinner'
Vue.use(MySpinner)
// import mySpinner from 'plugins/CustomSpinner.js'
// Vue.use(mySpinner)

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
