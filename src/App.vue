<template>
  <div class="row">
    <div class="FunkyLogo">
      <img class="Funky" src="@/assets/Funky-AI.png" />
    </div>
    <div class="backImage"></div>
    <!---TopNavbar----------------------------------------------------------------------->
    <nav class="topNavbar">
      <span class="row mb-0 h4">
        <div class="col-4 d-flex justify-content-center">
          <router-link to="/" class="topColor" v-if="showBackArrow">
            <font-awesome-icon icon="arrow-alt-circle-left" />
          </router-link>
        </div>
        <!--CurrentPageName----->
        <h4 class="col-4 d-flex justify-content-center">{{ $route.name }}</h4>
        <!--CurrentPageName----->
        <div class="col-4 d-flex justify-content-center">
          <router-link to="/filter" class="col-4 topColor" v-if="showFilter">
            <font-awesome-icon icon="sliders-h" />
          </router-link>

          <router-link to="/addevent" class="topColor" v-if="showAddButton">
            <font-awesome-icon icon="plus-circle" />
          </router-link>
        </div>
      </span>

      <span class="title mb-0 h4" v-if="checkRoute('Regije')"> </span>

      <span class="title mb-0 h4" v-if="checkRoute('Filter')"> </span>

      <span class="title mb-0 h4" v-if="checkRoute('Filtered')"> </span>

      <span class="title mb-0 h4" v-if="checkRoute('Favoriti')"></span>

      <span class="title mb-0 h4" v-if="checkRoute('Informacije')"></span>

      <span class="title mb-0 h4" v-if="checkRoute('Account')"></span>

      <span class="title mb-0 h4" v-if="checkRoute('AddEvent')"></span>

      <span class="title mb-0 h4" v-if="checkRoute('Login')"> </span>

      <span class="title mb-0 h4" v-if="checkRoute('Registracija')"> </span>

      <span class="title mb-0 h4" v-if="checkRoute('Home')"> </span>

      <span class="title mb-0 h4" v-if="checkRoute('Juzna')"></span>

      <span class="title mb-0 h4" v-if="checkRoute('Istocna')"></span>

      <span class="title mb-0 h4" v-if="checkRoute('Gorska')"></span>

      <span class="title mb-0 h4" v-if="checkRoute('Sredisnja')"></span>

      <span class="title mb-0 h4" v-if="checkRoute('Zapadna')"></span>
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
          <router-link to="/Account">My account</router-link>
          |
          <router-link to="/Favoriti">My favorites</router-link>
          |
          <router-link to="/Informacije">Informacije</router-link>
          |
          <router-link to="/Filter">Filter</router-link>
          |
          <router-link to="/Filtered">Filtered</router-link>
          |-->
          <router-link to="/Filtered">Filtered</router-link>
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
import store from "@/store";
import { firebase } from "@/firebase";
import { db } from "@/firebase";
import router from "@/router";

export default {
  name: "App",
  data() {
    return {
      store
    };
  },
  // TopNav prikaz elemenata
  computed: {
    showAddButton() {
      // prikaz ikone za dodavanje događaja
      let curRoute = this.$route.name;
      let routes = ["Regije", "Filter", "Favoriti", "Filtered", "Account"];
      let result = routes.filter(route => route == curRoute);

      if (result.length > 0) return true;
      else return false;
    },
    showFilter() {
      // prikaz ikone za filtriranje
      let curRoute = this.$route.name;
      let routes = [
        "Istocna",
        "Gorska",
        "Sredisnja",
        "Zapadna",
        "Juzna",
        "Regije",
        "Filtered"
      ];
      let result = routes.filter(route => route == curRoute);

      if (result.length > 0) return true;
      else return false;
    },
    showBackArrow() {
      // prikaz ikone za povratak na Home
      let curRoute = this.$route.name;
      let routes = ["Registracija", "Login"];

      let result = routes.filter(route => route == curRoute);

      if (result.length > 0) return true;
      else return false;
    }
  },
  mounted() {
    this.created();
  },
  methods: {
    checkRoute(route) {
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
      firebase.auth().onAuthStateChanged(user => {
        const currentRoute = router.currentRoute;

        console.log("PROVJERA STANJA LOGINA!");
        if (user) {
          self.authenticated = true;
          // User is signed in.
          console.log("*** User", user.email);
          store.currentUser = user.email;

          db.collection("users")
            .doc(self.store.currentUser)
            .get()
            .then(doc => {
              if (doc.exists) {
                console.log("Document data:", doc.data());

                store.displayName = doc.data().name;
                store.currentUser = doc.data().email;
              } else {
                console.log("No such document!");
              }
            });
        } else {
          /* if (!currentRoute.meta.needsUser) {
    router.push({ name: 'Home' });*/
          // User is not signed in.
          console.log("*** No user");
          store.currentUser = null;

          /* if (currentRoute.meta.needsUser) {
      router.push({ name: 'Login' });
    }*/
        }
      });
    }
  }
};
</script>

<style lang="scss">
/*pozadinska slika -> Home.vue*/
.backImage {
  background-image: url("~@/assets/pozadina2.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
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

//promjena boje router-linkova na Top i Bottom Navbaru
.topColor {
  color: black;
}
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
