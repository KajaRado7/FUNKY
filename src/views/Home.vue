<template>
  <div class="box">
    <p class="account">Create your account</p>
    <router-link to="/Registracija">
      <button class="btn_email">
        <img src="@/assets/email.png" class="email_ikona" />
        <b>Create account with email</b>
      </button>
    </router-link>
    <br />
    <br />
    <button @click= "loginWithGoogle()" type= "button">
      Sign in with Google
    </button>
    <br />
    <br />
    <p>Already have an account ?</p>
    <router-link to="/Login" class="login-link"><b>Login</b></router-link>
 
  </div>
</template>

<script>
import {firebase} from "@/firebase";
import store from "@/store";
export default {
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
    loginWithGoogle() {
      console.log("Login with google");
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          store.currentUser = result.additionalUserInfo.profile.email;
          //this.$router.replace({ name: "Home" });
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
    },
  },
};
</script>

<style scoped>
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
.box {
  max-width: 500px;
  text-align: center;
  color: white;
  width: fixed;
  height: 340px;
  padding: 20px 20px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: rgba(47, 46, 46, 0.77);
  font-size: 16px;
  margin: auto;
  margin-top: 15%;
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
.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
}
</style>
