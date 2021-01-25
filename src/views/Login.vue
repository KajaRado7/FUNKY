<template>
  <div
    class="container"
    style="max-width: 500px; text-align: left; color:white"
  >
    <div
      class="alert alert-success"
      role="alert"
      style="max-width: 500px; text-align: center; background-color: #F5B85C; border-radius: 15px; color: black"
    >
      <h2 class="alert-heading">Login</h2>
    </div>

    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          v-model="userForm.email"
          id="email"
          placeholder="e.g. Bobwills@email.com"
          name="email"
          class="form-control"
          :class="{ 'is-invalid': isSubmitted && $v.userForm.email.$error }"
        />
        <div
          v-if="isSubmitted && $v.userForm.email.$error"
          class="invalid-feedback"  >   
         <span v-if="!$v.userForm.email.required">
            Email field is required
          </span>

        </div>
      </div>
      <br />

      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          v-model="userForm.password"
          id="password1"
          placeholder="Password"
          name="password1"
          class="form-control"
          :class="{ 'is-invalid': isSubmitted && $v.userForm.password.$error }"
        />
        <div
          v-if="isSubmitted && $v.userForm.password.$error"
          class="invalid-feedback" >
          <span v-if="!$v.userForm.password.required">
            Password field is required
          </span>
        </div>
      </div>
      <br />
      <br />

      <div class="form_group">
        <button type="button" @click="handleSubmit()" class="btn_login">
          <b>Login</b>
        </button>
        <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      </div>
    </form>
  </div>
</template>

<script>
import {firebase} from '@/firebase';
import router from '@/router';
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators';
import { db } from '@/firebase';
import store from '@/store';

export default {
  name: 'Login',
  data() {
    return {
      userForm: {
        email: '',
        password: '',
      },
      isSubmitted: false,
    };
  },
  validations: {
    userForm: {
      email: {
        required,
        email,
      },
      password: {
        required,
        sameAsPassword:  sameAs('password'),
      },
    },
  },
  methods: {
    handleSubmit() {
      let that=this;
      this.isSubmitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      console.log("login..." + this.userForm.email);
      firebase
      .auth()
      .signInWithEmailAndPassword(this.userForm.email,this.userForm.password)
      .then(function(result) {
        console.log('Uspješna prijava.', result); 
        that.$router.replace({ name: 'Regije'});  
      })
    .catch(function(error) {
     // Handle Errors here.
     var errorCode = error.code;
     var errorMessage = error.message;
     if (errorCode === 'auth/wrong-password') {
     alert('Wrong password.');
    } else {
       alert(errorMessage);
}
console.log(error);
});


    },
  },
};
</script>

<style scoped>
.btn_login {
  background-color: #f5b85c;
  border: none;
  border-radius: 15px;
  color: black;
  padding: 16px 32px;
  text-align: center;
  font-size: 16px;
  display: block;
  margin: auto;
  text-decoration: none;
}
.form_group > label {
  font-weight: 600;
  max-width: 500px;
  text-align: center;
}
</style>
