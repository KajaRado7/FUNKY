import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'

import GoogleAuth from '@/config/google.js'
const gauthOption = {
  clientId: 'xxxxxxxxxxx.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GoogleAuth, gauthOption)

Vue.use(Vuelidate);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

function myFunction() {
  var x = document.getElementById("exampleInputPassword1");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
