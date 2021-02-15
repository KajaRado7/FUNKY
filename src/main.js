import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuelidate from 'vuelidate';
import Router from 'vue-router';
import GSignInButton from 'vue-google-signin-button';
import Croppa from 'vue-croppa';
import 'vue-croppa/dist/vue-croppa.css';

Vue.use(GSignInButton);

Vue.use(Vuelidate);

//FontAwesome---------------------------------------------------------------
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faVuejs } from '@fortawesome/free-brands-svg-icons';

import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';

import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { faDice } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faTheaterMasks } from '@fortawesome/free-solid-svg-icons';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

library.add(faMapMarkerAlt); // <font-awesome-icon icon="map-marker-alt" />
library.add(faUser); // <font-awesome-icon icon="user" />
library.add(faPlusCircle); // <font-awesome-icon icon="plus-circle" />
library.add(faHeart); // <font-awesome-icon icon="heart" />
library.add(faArrowAltCircleLeft); // <font-awesome-icon icon="arrow-alt-circle-left" />
library.add(faFrown); // <font-awesome-icon icon="frown" /> --> tuzan smajl
library.add(faEnvelope); // <font-awesome-icon icon="envelope" />
library.add(faSlidersH); // <font-awesome-icon icon="sliders-h" />

library.add(faMusic); // <font-awesome-icon icon="music" />
library.add(faDice); // <font-awesome-icon icon="dice" />
library.add(faBookOpen); // <font-awesome-icon icon="book-open" />
library.add(faTheaterMasks); // <font-awesome-icon icon="theater-masks" />
library.add(faCloudSun); // <font-awesome-icon icon="cloud-sun" />
library.add(faHome); // <font-awesome-icon icon="home" />
library.add(faGoogle); // <font-awesome-icon :icon="['fab', 'google']" /> -->'fab'= brands,'fas'= solid

Vue.component('font-awesome-icon', FontAwesomeIcon);
//FontAwesome--------------------------------------------------------------------------

Vue.config.productionTip = false;
Vue.use(Croppa);

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
