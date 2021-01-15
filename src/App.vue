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

    <!----NAVIGATION ICON BASED MENU--------------------------------------------------->
    <div class="bottomNav">
      <div>
        <router-link to="/regije" class="nav-link">
          <img class="regions" src="@/assets/placeholder.png" />
          Regions
        </router-link>
      </div>
      <div>
        <router-link to="/favoriti" class="nav-link">
          <img class="favorites" src="@/assets/like.png" />
          My favorites
        </router-link>
      </div>
      <div>
        <router-link to="/account" class="nav-link">
          <img class="user" src="@/assets/user.png" />
          My account
        </router-link>
      </div>
    </div>
    <!----NAVIGATION ICON BASED MENU--------------------------------------------------->

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
// elementi za Bottom Icon-Based Navigation Menu (u doradi)
//-----------------------------------------------------
.favorites {
  display: flex;
  height: 48%;
  width: 38%;
}
.regions {
  display: flex;
  height: 50%;
  width: 54%;
}
.user {
  display: flex;
  height: 50%;
  width: 50%;
}
.bottomNav {
  justify-content: space-evenly;
  display: flex;

  position: fixed;
  bottom: 0;
  width: 100%;
  height: 65px;

  background-color: rgba(0, 0, 0, 0.25);
}
* {
  box-sizing: border-box;
}

.nav-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex-grow: 1;
  min-width: 50px;
  white-space: nowrap;
  font-size: 10px;
  color: white;
  text-decoration: none;
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
