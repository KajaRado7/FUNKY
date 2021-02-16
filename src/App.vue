<template>
  <div class="row">
    <div class="FunkyLogo">
      <img class="Funky" src="@/assets/Funky-AI.png" />
    </div>
    <!---TopNavbar----------------------------------------------------------------------->
    <nav class="topNavbar">
      <span class="title mb-0 h4" v-if="checkRoute('Regije')">
        Regions
        <router-link to="/filter" class="topNavItem">
          <font-awesome-icon icon="sliders-h" transform=" right-60" />
        </router-link>
        <router-link to="/addevent" class="topNavItem">
          <font-awesome-icon icon="plus-circle" transform=" right-70" />
        </router-link>
      </span>
      <span class="title mb-0 h4" v-if="checkRoute('Filter')">
        Filter
        <router-link to="/addevent" class="topNavItem">
          <font-awesome-icon icon="plus-circle" transform=" right-70" />
        </router-link>
      </span>

      <span class="title mb-0 h4" v-if="checkRoute('Filtered')">
        <router-link to="/filter" class="topNavItem">
          <font-awesome-icon
            icon="arrow-alt-circle-left"
            transform=" left-70"
          />
        </router-link>
        Filtered
        <router-link to="/addevent" class="topNavItem">
          <font-awesome-icon icon="plus-circle" transform=" right-70" />
        </router-link>
      </span>
      <span class="title mb-0 h4" v-if="checkRoute('Favoriti')">
        My Favorites
        <router-link to="/addevent" class="topNavItem">
          <font-awesome-icon icon="plus-circle" transform=" right-70" />
        </router-link>
      </span>
      <span class="title mb-0 h4" v-if="checkRoute('Informacije')">
        Informations
      </span>
      <span class="title mb-0 h4" v-if="checkRoute('Account')">
        Account
        <router-link to="/addevent" class="topNavItem">
          <font-awesome-icon icon="plus-circle" transform=" right-70" />
        </router-link>
      </span>
      <span class="title mb-0 h4" v-if="checkRoute('AddEvent')">Add Event</span>
      <span class="title mb-0 h4" v-if="checkRoute('Login')">
        <router-link to="/" class="topNavItem">
          <font-awesome-icon
            icon="arrow-alt-circle-left"
            transform=" left-70"
          />
        </router-link>
        Login
      </span>
      <span class="title mb-0 h4" v-if="checkRoute('Registracija')">
        <router-link to="/" class="topNavItem">
          <font-awesome-icon
            icon="arrow-alt-circle-left"
            transform=" left-70"
          />
        </router-link>
        Registration
      </span>
      <span class="title mb-0 h4" v-if="checkRoute('Home') ">
        <!--pozadinska slika(proba)---->
        <div
          :style="{
            'background-image': 'url(@/assets/pozadina2.jpg)',
          }"
          v-if="!store.currentUser"
        ></div>
        <!--pozadinska slika(proba)---->
        Create Account
      </span>
      <span class="title mb-0 h4" v-if="checkRoute('Juzna')">
        Dalmatia
        <router-link to="/filter" class="topNavItem">
          <font-awesome-icon icon="sliders-h" transform=" right-60" />
        </router-link>
        <router-link to="/addevent" class="topNavItem">
          <font-awesome-icon icon="plus-circle" transform=" right-70" />
        </router-link>
      </span>
      <span class="title mb-0 h4" v-if="checkRoute('Istocna')">
        Slavonia
        <router-link to="/filter" class="topNavItem">
          <font-awesome-icon icon="sliders-h" transform=" right-60" />
        </router-link>
        <router-link to="/addevent" class="topNavItem">
          <font-awesome-icon icon="plus-circle" transform=" right-70" />
        </router-link>
      </span>
      <span class="title mb-0 h4" v-if="checkRoute('Gorska')">
        Mountain Croatia
        <router-link to="/filter" class="topNavItem">
          <font-awesome-icon icon="sliders-h" transform=" right-60" />
        </router-link>
        <router-link to="/addevent" class="topNavItem">
          <font-awesome-icon icon="plus-circle" transform=" right-70" />
        </router-link>
      </span>
      <span class="title mb-0 h4" v-if="checkRoute('Sredisnja')">
        Central Croatia
        <router-link to="/filter" class="topNavItem">
          <font-awesome-icon icon="sliders-h" transform=" right-60" />
        </router-link>
        <router-link to="/addevent" class="topNavItem">
          <font-awesome-icon icon="plus-circle" transform=" right-70" />
        </router-link>
      </span>
      <span class="title mb-0 h4" v-if="checkRoute('Zapadna')">
        Istria
        <router-link to="/filter" class="topNavItem">
          <font-awesome-icon icon="sliders-h" transform=" right-60" />
        </router-link>
        <router-link to="/addevent" class="topNavItem">
          <font-awesome-icon icon="plus-circle" transform=" right-70" />
        </router-link>
      </span>
    </nav>

    <!---TopNavbar----------------------------------------------------------------------->
    <div class="col-md-1 col-sm-0"></div>
    <div class="col-md-10 col-sm-12">
      <div id="app">
        <div id="nav">
          <!--<router-link to="/">Home</router-link>
          <router-link to="/Registracija">Registracija</router-link>
          |
          <router-link to="/Login">Log in</router-link>
          |
          <router-link to="/Regije">Regije</router-link>
          |
          <router-link to="/AddEvent">Add event</router-link>
          |
          <router-link to="/Zapadna">Zapadna</router-link>
          |
          <router-link to="/Istocna">Istocna</router-link>
          |
          <router-link to="/Sredisnja">Sredisnja</router-link>
          |
          <router-link to="/Gorska">Gorska</router-link>
          |
          <router-link to="/Juzna">Juzna</router-link>
          |
          <router-link to="/account">My account</router-link>
          |
          <router-link to="/favoriti">My favorites</router-link>
          |
          <router-link to="/Informacije">Informacije</router-link>
          |
          <router-link to="/filter">Filter</router-link>
          |
          <router-link to="/filtered">Filtered</router-link>
          |
          <router-link to="/AddEvent">Add event</router-link>
          |
          <router-link to="/Informacije">Informacije</router-link>-->
        </div>
        <router-view />
      </div>
    </div>

    <!----BottomNavbar--------------------------------------------------->
    <nav
      class="bottomNavbar fixed-bottom navbar-light "
      v-if="store.currentUser"
    >
      <div>
        <router-link to="/regije" class="btmNavItem btmColor ">
          <font-awesome-icon icon="map-marker-alt" size="2x" />
        </router-link>
      </div>
      <div>
        <router-link to="/favoriti" class="btmNavItem btmColor ">
          <font-awesome-icon icon="heart" size="2x" />
        </router-link>
      </div>
      <div>
        <router-link to="/account" class="btmNavItem btmColor ">
          <font-awesome-icon icon="user" size="2x" />
        </router-link>
      </div>
    </nav>
    <!----BottomNavbar--------------------------------------------------->

    <div class="col-md-1 col-sm-0"></div>
  </div>
</template>

<script>
import store from '@/store';
import { firebase } from '@/firebase';
import { db } from '@/firebase';
import router from '@/router';

export default {
  name: 'App',
  data() {
    return {
      store,
    };
  },
  mounted() {
    this.created();
  },
  methods: {
    checkRoute(route) {
      // Background image
      if (this.$route.name == '/'){
         url('~@/assets/pozadina2.jpg');
      return true;}
      else return false;
    },
    checkRoute(route) {
      // Top Navbar -> prikaz el. ovisno na kojoj stranici se nalazimo
      if (this.$route.name == route) return true;
      else return false;
    },
    /*logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: 'Login' });
        });
    },**/

    created() {
      const self = this;
      firebase.auth().onAuthStateChanged((user) => {
        const currentRoute = router.currentRoute;

        console.log('PROVJERA STANJA LOGINA!');
        if (user) {
          self.authenticated = true;
          // User is signed in.
          console.log('*** User', user.email);
          store.currentUser = user.email;

          db.collection('users')
            .doc(self.store.currentUser)
            .get()
            .then((doc) => {
              if (doc.exists) {
                console.log('Document data:', doc.data());

                store.displayName = doc.data().name;
                store.currentUser = doc.data().email;
              } else {
                console.log('No such document!');
              }
            });
        } else {
          /* if (!currentRoute.meta.needsUser) {
    router.push({ name: 'Home' });*/
          // User is not signed in.
          console.log('*** No user');
          store.currentUser = null;

          /* if (currentRoute.meta.needsUser) {
      router.push({ name: 'Login' });
    }*/
        }
      });
    },
  },
};
</script>

<style lang="scss">
.title {
  margin: auto;
}
.Funky {
  max-width: 55%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 8px;
}

//promjena boje router-linkova na Bottom Navbar-u
.btmColor:focus {
  color: #f5b85c;
}

.topNavbar {
  width: 100%;
  height: 50px;
  background-color: #f5b85c;
  padding: 10px;
  justify-content: center;
  text-align: center;
}
.topNavItem {
  color: black;
}
.bottomNavbar {
  justify-content: space-evenly;
  display: flex;

  position: fixed;
  width: 100%;

  background-color: rgba(0, 0, 0, 0.25);
}

.btmNavItem {
  color: white;
  display: flex;
  flex-grow: 1;

  justify-content: center;
  align-items: center;

  font-weight: light;

  padding: 0.75rem;

  font-awesome-icon {
    margin-right: 0.5rem;
  }
}
@media only screen and (max-width: 600px) {
  .btmNavItem {
    flex-direction: column;

    font-awesome-icon {
      margin: 0;
    }
  }
}

//-----------------------------------------------------
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: grey;

    &.router-link-exact-active {
      color: #f5b85c;
    }
  }
}
body {
  background-color: #1a1a1a;
}
//------------------------------------
</style>
