import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
Vue.config.productionTip = false
require('./assets/js/rem')
require('./assets/css/reset.css')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
