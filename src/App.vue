<template>
  <div class="row">
    <div class="FunkyLogo">
      <img class="Funky" src="@/assets/Funky-AI.png" />
    </div>
    <nav class="navbar1 ">
      <span class="title mb-0 h4"></span>
    </nav>
    <div class="col-1"></div>
    <div class="col-10">
      <div id="app">
        <div id="nav">
          <!--  <router-link to="/">Home</router-link>
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
          <router-link to="/informacije">Informacije</router-link>
          |
          <router-link to="/filter">Filter</router-link>
          |
          <router-link to="/filtered">Filtered</router-link>
          |
          <router-link to="/AddEvent">Add event</router-link>--->
          
        </div>
        <router-view />
      </div>
    </div>

    <!----NavigationIconBasedBottomMenu--------------------------------------------------->
    <nav class="navbar2 fixed-bottom navbar-light ">
      <div>
        <router-link to="/regije" class="navItem color ">
          <font-awesome-icon icon="map-marker-alt" size="2x" />
        </router-link>
      </div>
      <div>
        <router-link to="/favoriti" class="navItem color ">
          <font-awesome-icon icon="heart" size="2x" />
        </router-link>
      </div>
      <div>
        <router-link to="/account" class="navItem color ">
          <font-awesome-icon icon="user" size="2x" />
        </router-link>
      </div>
    </nav>
    <!----NavigationIconBasedBottomMenu--------------------------------------------------->

    <div class="col-1"></div>
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
  mounted(){
    this.created();
  },

  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: 'Login' });
        });
    },

created(){
firebase.auth().onAuthStateChanged((user) => {
  const currentRoute = router.currentRoute;

  console.log('PROVJERA STANJA LOGINA!');
  if (user) {
    self.authenticated = true;
    // User is signed in.
    console.log('*** User', user.email);
    store.currentUser = user.email;

     db.collection('users')
      .where(
        'Name',
        '==',
        store.displayName,
        'Email',
        '==',
        store.currentUser
      )
      .get()
      .then(function(querySnapshot) {
         let korisnik = {};
        querySnapshot.forEach(function(doc) {
          const data = doc.data();
          korisnik = {
            email: data.email,
            name: data.name,
          };
          store.displayName = korisnik;
          console.log('Current name: ', store.displayName);
          store.currentUser = korisnik;
          console.log('Current email: ', store.currentUser);
        });
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
})
}
  }
};
</script>

<style lang="scss">
.Funky {
  max-width: 55%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
}

//promjena boje router-linkova
.color:focus {
  color: #f5b85c;
}
.navbar1 {
  width: 100%;
  height: 50px;
  background-color: #f5b85c;

  justify-content: center;
  text-align: center;
}
.navbar2 {
  justify-content: space-evenly;
  display: flex;

  position: fixed;
  width: 100%;

  background-color: rgba(0, 0, 0, 0.25);
}

.navItem {
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
  .navItem {
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
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
body {
  background-color: #1a1a1a;
}
</style>
