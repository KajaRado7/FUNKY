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
        </div>
        <router-view />
      </div>
    </div>

    <nav class="nav">
      <a href="#" class="nav__link">
        <img class="regions" src="@/assets/placeholder.png" />
        <span class="nav__text">Regions</span>
      </a>

      <a href="#" class="nav__link">
        <img class="favorites" src="@/assets/like.png" />
        <span class="nav__text">My favorites</span>
      </a>

      <a href="#" class="nav__link">
        <img class="user" src="@/assets/user.png" />
        <span class="nav__text">My Profile</span>
      </a>
    </nav>

    <div class="col-1"></div>
  </div>
</template>

<script>
import store from '@/store';
import {firebase} from '@/firebase';
import router from '@/router';

firebase.auth().onAuthStateChanged((user) => {
     const currentRoute = router.currentRoute;

     console.log("PROVJERA STANJA LOGINA!");
     if (user) {
         // User is signed in.
         console.log('* User', user.email);
         store.currentUser = user.email;
		 
		 if(!currentRoute.meta.needsUser){
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


export default{
    name: 'app',
	data(){
	   return{
	      store,
		  
		};
	},
	methods: {
	   logout(){
	         firebase
			    .auth()
				  .signOut().then(() => {
				     this.$router.push({ name: 'login' });
				});
	   
	   }
	}
}
</script>

<style lang="scss">
// elementi za Bottom Icon-Based Navigation Menu (u doradi)
//-----------------------------------------------------
.favorites {
  display: flex;
  height: 35%;
  width: 21%;
  margin-bottom: 9px;
}
.regions {
  display: flex;
  height: 38%;
  width: 25%;
  margin-bottom: 7px;
  margin-left: 10%;
}
.user {
  display: flex;
  height: 35%;
  width: 21%;
  margin-bottom: 9px;
}

.nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 80px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  overflow-x: auto;
}

.nav__link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  min-width: 50px;
  overflow: hidden;
  white-space: nowrap;
  font-family: sans-serif;
  font-size: 13px;
  color: white;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 0.1s ease-in-out;
}

.nav__icon {
  font-size: 18px;
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
