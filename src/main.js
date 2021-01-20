import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuelidate from 'vuelidate';
import Router from 'vue-router';
import GSignInButton from 'vue-google-signin-button';
Vue.use(GSignInButton)

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

import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { faDice } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

library.add(faMapMarkerAlt); // <font-awesome-icon icon="map-marker-alt" />
library.add(faUser); // <font-awesome-icon icon="user" />
library.add(faPlusCircle); // <font-awesome-icon icon="plus-circle" />
library.add(faHeart); // <font-awesome-icon icon="heart" />
library.add(faArrowLeft); // <font-awesome-icon icon="arrow-left" />
library.add(faFrown); // <font-awesome-icon icon="frown" /> --> tuzan smajl

library.add(faMusic); // <font-awesome-icon icon="music" />
library.add(faDice); // <font-awesome-icon icon="dice" />
library.add(faBookOpen); // <font-awesome-icon icon="book-open" />
library.add(faTasks); // <font-awesome-icon icon="tasks" />
library.add(faCloudSun); // <font-awesome-icon icon="cloud-sun" />
library.add(faHome); // <font-awesome-icon icon="home" />

Vue.component('font-awesome-icon', FontAwesomeIcon);
//FontAwesome--------------------------------------------------------------------------

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
