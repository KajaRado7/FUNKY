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
    <g-signin-button
    :params="googleSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    Sign in with Google
  </g-signin-button>
    <br />
    <br />
    <p>Already have an account ?</p>
    <router-link to="/Login" class="login-link"><b>Login</b></router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      /**
       * The Auth2 parameters, as seen on
       * https://developers.google.com/identity/sign-in/web/reference#gapiauth2initparams.
       * As the very least, a valid client_id must present.
       * @type {Object} 
       */
      googleSignInParams: {
        client_id: '336328634543-unbk0scnqr5bkel2ve7pdut8k5to0ul9.apps.googleusercontent.com'
      } 

    }
  },
  methods: {
    onSignInSuccess (googleUser) {
      // `googleUser` is the GoogleUser object that represents the just-signed-in user.
      // See https://developers.google.com/identity/sign-in/web/reference#users
      const profile = googleUser.getBasicProfile() // etc etc
    },
    onSignInError (error) {
      // `error` contains any error occurred.
      console.log('OH NOES', error)
    }
  }
}
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
