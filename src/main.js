import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuelidate from 'vuelidate';
import Router from 'vue-router';
import GoogleSignInButton from 'vue-google-signin-button-directive'

Vue.use(Vuelidate);

//FontAwesome---------------------------------------------------------------
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faFrown } from '@fortawesome/free-solid-svg-icons';

library.add(faMapMarkerAlt); // <font-awesome-icon icon="map-marker-alt" />
library.add(faUser); // <font-awesome-icon icon="user" />
library.add(faPlusCircle); // <font-awesome-icon icon="plus-circle" />
library.add(faHeart); // <font-awesome-icon icon="heart" />
library.add(faArrowLeft); // <font-awesome-icon icon="arrow-left" />
library.add(faFrown); // <font-awesome-icon icon="frown" /> --> tuzan smajl

Vue.component('font-awesome-icon', FontAwesomeIcon);
//--------------------------------------------------------------------------

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

function myFunction() {
  var x = document.getElementById('exampleInputPassword1');
  if (x.type === 'password') {
    x.type = 'text';
  } else {
    x.type = 'password';
  }
}
