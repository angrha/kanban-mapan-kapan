import './firebase'
import Vue from 'vue'
import App from './App'
import VueFire from 'vuefire'
import router from './router'

Vue.use(VueFire)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
