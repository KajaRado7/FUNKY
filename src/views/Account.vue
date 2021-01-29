<template>
  <div
    class="container"
    style="max-width: 500px;text-align: left; color: white"
  >
    <div id="myAccount">
      <div
        style="max-width: 500px; text-align: center; background-color: #F5B85C; border-radius: 15px; color: black; padding: 16px 32px;"
      >
        <h2>My account</h2>
      </div>
      <br />
      <br />

      <label>Full name</label>
      <br />
      <br />

      <p class="userInfo">{{ store.displayName }}</p>
      <div class="hr"></div>
      <br />
      <br />

      <label>E-mail</label>
      <br />
      <br />

      <p class="userInfo">{{ store.currentUser }}</p>
      <div class="hr"></div>
      <br />
      <br />

      <div class="col-lg-12 col-md-12 text-center">
        <button
          type="button"
          class="btn btn-outline-secondary"
          @click="logout()"
          style="max-width: 500px; 
										       text-align: center; 
											   background-color: #F5B85C; 
											   border: none; 
											   border-radius: 15px; 
											   padding: 16px 32px;
											   color: black"
        >
          <b>Logout</b>
          <small></small>
        </button>
      </div>
    </div>
    <footer id="footer"></footer>
  </div>
</template>

<script>
import { firebase } from '@/firebase';
import store from '@/store';

export default {
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
          this.store.displayName = null;
          this.store.currentUser = null;

          this.$router.push({ name: 'Home' });
        });
    },
  },
};
</script>

<style scoped>
.userInfo {
  color: #f5b85c;
}
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
