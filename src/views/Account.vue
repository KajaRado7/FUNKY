<template>
  <div class="container" style="max-width: 500px;">
    <div id="myAccount">
      <div
        class="container"
        style="max-width: 500px; text-align: left; color: white"
      >
        <br />
        <br />
        <div
          style="max-width: 500px; text-align: center; background-color: #F5B85C; border-radius: 15px; color: black; padding: 16px 32px;"
        >
          <h2>My account</h2>
        </div>
        <br />
        <br />
        <br />
        <label>Full name</label>
        <br />
        <br />
        <br />
        <p>{{ store.displayName }}</p>
        <div class="hr"></div>
        <br />
        <br />
        <br />
        <label>E-mail</label>
        <br />
        <br />
        <br />
        <p>{{ store.currentUser }}</p>
        <div class="hr"></div>
        <br />
        <br />
        <br />
        <label>Password</label>
        <br />
        <br />
        <br />
        <p>{{ store.password }}</p>
        <div class="hr"></div>
        <br />
        <br />
        <br />
        <br />
        <div class="col-lg-12 col-md-12 text-center">
          <button
            type="button"
            class="btn btn-outline-secondary text-uppercase"
            @click="logout()"
            style="max-width: 500px; 
										       text-align: center; 
											   background-color: #F5B85C; 
											   border: none; 
											   border-radius: 15px; 
											   padding: 16px 32px;
											   color: black"
          >
            Logout
            <small></small>
          </button>
        </div>
      </div>
    </div>
    <footer id="footer"></footer>
  </div>
</template>

<script>
import { firebase } from '@/firebase';
import store from '@/store';
import router from '@/router';
import { db } from '@/firebase';

export default {
  data() {
    return {
      store,
      userForm: '',
    };
  },
  created() {
    db.collection('users')
    .where('Name','==', store.displayName, 'Email', '==', store.currentUser, 'Password', '==', store.password)
    .get()
    .then(function(querySnapshot){
      /*let userForm = {};
     /*store.displayName = {};
      store.currentUser = {};
      store.password = {};*/
      querySnapshot.forEach(function(doc) {
        const data = doc.data();
        userForm = {
          email: data.email,
          name: data.name,
          password: data.password
        };
        store.displayName = userForm;
        console.log('Current name: ', store.displayName);
        store.currentUser = userForm;
        console.log('Current email: ', store.currentUser);
        store.password = userForm;
        console.log('Current password', store.password);
      });
    });
    firebase.auth().onAuthStateChanged((userForm) => {
      if (userForm) {
        this.userForm = userForm;
      } else {
        this.userForm = null;
      }
    });
  },


  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
            this.store.currentUser = null
            
            this.$router.push({ name: 'Login' });
          
        });
    }
  }
    };

</script>

<style scoped>
#footer {
  width: 100%;
  height: 55px;
}
.hr {
  display: block;
  overflow: hidden;
  border-style: inset;
  border-width: 1px;
  color: white;
}
</style>
