import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import store from './vuex/store'

Vue.config.productionTip = false
require('./assets/js/rem')
require('./assets/css/reset.css')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
