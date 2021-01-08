<template>
  <div class="form_group">
    <router-link to="/Registracija">
      <button class="btn_email">
        <img src="@/assets/email.png" class="email_ikona" />
        <b>Create account with email</b>
      </button>
    </router-link>
    <br />
    <br />
    <button class="btn_google">
      <b>Continue with Google</b>
    </button>
    <br />
    <br />
    <p>Already have an account ?</p>
    <router-link to="/Login" class="nav-link"><b>Log in</b></router-link>
  </div>
</template>

<style scoped>
/*.box {
  background: rgba(47, 46, 46, 0.77);
  text-align: center;
  margin: auto;
  color: white;
}*/
.email_ikona {
  float: left;
  height: 10%;
  width: 10%;
}
p {
  color: lightgrey;
}
.nav-link {
  color: #f5b85c;
}
.form_group {
  max-width: 500px;
  text-align: center;
}
.btn_email {
  width: 290px;
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
  width: 290px;
  background-color: lightgrey;
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
