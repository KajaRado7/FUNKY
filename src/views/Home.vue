<template>
 <div id="vanjskiBox">
  <div id="box">
    <div class="boxElements">
      <router-link to="/Registracija">
        <button class="btn_email">
          <font-awesome-icon class="emailIcon" icon="envelope" size="lg" />
          <b>Create account with email</b>
        </button>
      </router-link>
      <br />
      <br />
      <button class="btn_google" @click="loginWithGoogle()" type="button">
        <font-awesome-icon
          class="googleIcon"
          :icon="['fab', 'google']"
          size="lg"
        />
        <b>Sign in with Google</b>
      </button>
      <br />
      <br />
      <p>Already have an account ?</p>
      <router-link to="/Login" class="login-link"><b>Login</b></router-link>
    </div>
  </div>
 </div>
</template>

<script>
import { firebase } from "@/firebase";
import store from "@/store";
export default {
  name: "Home",
  data() {
    return {
      /**
       * The Auth2 parameters, as seen on
       * https://developers.google.com/identity/sign-in/web/reference#gapiauth2initparams.
       * As the very least, a valid client_id must present.
       * @type {Object}
       */
      googleSignInParams: {
        client_id:
          "336328634543-unbk0scnqr5bkel2ve7pdut8k5to0ul9.apps.googleusercontent.com"
      }
    };
  },
  methods: {
    checkRoute(route) {
      // Background image
      if (this.$route.name == route) return true;
      else return false;
    },
    loginWithGoogle() {
      console.log("Login with google");
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          store.currentUser = result.additionalUserInfo.profile.email;
          this.$router.replace({ name: "Regije" });
          //store.token = result.credential.accessToken; // mozda cu ga kasnije za nesto koristiti. za test neka ostane
        })
        .catch(function(error) {
          // Handle Errors here.
          // var errorCode = error.code;
          this.errorMessage = error.message;
          // // The email of the user's account used.
          // var email = error.email;
          // // The firebase.auth.AuthCredential type that was used.
          // var credential = error.credential;
          // ...
        });
    }
  }
};
</script>

<style scoped>


.googleIcon {
  margin-right: 10px;
}
.emailIcon {
  margin-right: 10px;
}
.account {
  font-size: 23px;
}
.google_ikona {
  float: left;
  height: 10%;
  width: 10%;
}
.email_ikona {
  float: left;
  height: 10%;
  width: 10%;
}
p {
  color: whitesmoke;
}
.login-link {
  color: #f5b85c;
}
.boxElements {
  margin-top: 13px;
}

#box {
  background-image: url("~@/assets/back1.jpg");
  max-width: 350px;  /*350*/  
  
  text-align: center;
  color: white;
  width: fixed;
  height: 290px;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 8px;
  background: rgba(47, 46, 46, 0.77);
  font-size: 16px;
  margin: auto;
}
.btn_email {
  width: fixed;
  background-color: #f5b85c;
  border: none;
  border-radius: 15px;
  color: black;
  padding: 16px 32px;
  text-align: center;
  font-size: 16px;
  display: inline-block;
  text-decoration: none;
}
.btn_google {
  width: fixed;
  background-color: #ccc;
  border: none;
  border-radius: 15px;
  color: black;
  padding: 16px 32px;
  text-align: center;
  font-size: 16px;
  display: inline-block;
  text-decoration: none;
}

</style>
