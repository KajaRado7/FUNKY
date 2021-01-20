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
        <p>{{ userForm.name }}</p>
        <div class="hr"></div>
        <br />
        <br />
        <br />
        <label>E-mail</label>
        <br />
        <br />
        <br />
        <p>{{ userForm.email }}</p>
        <div class="hr"></div>
        <br />
        <br />
        <br />
        <label>Password</label>
        <br />
        <br />
        <br />
        <p>{{ userForm.password }}</p>
        <div class="hr"></div>
        <br />
        <br />
        <br />
        <br />
        <div class="col-lg-12 col-md-12 text-center">
          <button
            type="button"
            class="btn btn-outline-primary btn-block text-uppercase mb-3"
            onclick="showEditProfileForm()"
            style="max-width: 500px; 
										    text-align: center; 
												background-color: #F5B85C; 
												border: none; 
												border-radius: 15px; 
                        padding: 16px 32px;
												color: black"
          >
            Edit Profile
            <small></small>
          </button>

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

export default {
  data() {
    return {
      store,
      userForm: {
        name: null,
        email: null,
        password: null,
      },
    };
  },
  created() {
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
          userForm: null;
        });
    },
    created() {
      firebase.auth().onAuthStateChanged((userForm) => {
        if (userForm) {
          this.userForm = userForm;
          this.userForm.name = userForm.name;
        } else {
          this.userForm = null;
        }
      });
    },
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          firebase.auth().onAuthStateChanged(() => {
            this.$router.push({ name: 'Login' });
          });
        });
    },
  },
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
