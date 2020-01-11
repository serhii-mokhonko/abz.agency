import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
// import VueRouter from 'vue-router'

Vue.use(Vuelidate)
// Vue.use(VueRouter)

import store from './store'
// import router from './router'

Vue.config.productionTip = false;

new Vue({
  // router,
  store,
  render: h => h(App),
}).$mount('#app')