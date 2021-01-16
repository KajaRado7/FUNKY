<template>
  <div class="row">
    <div class="col-1"></div>
    <div class="col-10">
      <div id="app">
        <div id="nav">
          <router-link to="/">Home</router-link>
          |
          <router-link to="/Registracija">Registracija</router-link>
          |
          <router-link to="/Login">Log in</router-link>
          |
          <router-link to="/Regije">Regije</router-link>
          |
          <router-link to="/AddEvent">Add event</router-link>
          |
          <router-link to="/West">West</router-link>
          |
          <router-link to="/account">My account</router-link>
          |
          <router-link to="/favoriti">My favorites</router-link>
        </div>
        <router-view />
      </div>
    </div>

    <!----NavigationIconBasedMenu--------------------------------------------------->
    <div class="bottomNav">
      <div>
        <router-link to="/regije" class="navItem">
          <font-awesome-icon icon="map-marker-alt" size="2x" />
          Regions
        </router-link>
      </div>
      <div>
        <router-link to="/favoriti" class="navItem">
          <font-awesome-icon icon="heart" size="2x" />
          My favorites
        </router-link>
      </div>
      <div>
        <router-link to="/account" class="navItem">
          <font-awesome-icon icon="user" size="2x" />
          Account
        </router-link>
      </div>
    </div>
    <!----NavigationIconBasedMenu--------------------------------------------------->

    <div class="col-1"></div>
  </div>
</template>

<script>
import store from '@/store';
import { firebase } from '@/firebase';
import router from '@/router';

firebase.auth().onAuthStateChanged((user) => {
  const currentRoute = router.currentRoute;

  console.log('PROVJERA STANJA LOGINA!');
  if (user) {
    // User is signed in.
    console.log('* User', user.email);
    store.currentUser = user.email;

    if (!currentRoute.meta.needsUser) {
      router.push({ name: 'početna' });
    } else {
      // User is not signed in.
      console.log('* No user');
      store.currentUser = null;

      if (currentRoute.meta.needsUser) {
        router.push({ name: 'login' });
      }
    }
  }
});

export default {
  name: 'app',
  data() {
    return {
      store,
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: 'login' });
        });
    },
  },
};
</script>

<style lang="scss">
.bottomNav {
  justify-content: space-evenly;
  display: flex;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

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
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
