<template>
  <div
    class="container"
    style="max-width: 500px; text-align: left; color:white"
  >
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <div v-if="errorMessage" class="alert alert-danger" role="alert">
          The email address is already in use by another account.
        </div>
        <label for="name">
          Full name
          <span class="text-danger ml-1">*</span>
        </label>
        <input
          type="text"
          v-model="userForm.name"
          id="name"
          name="name"
          placeholder="e.g. Bob Wills"
          class="form-control"
          :class="{ 'is-invalid': isSubmitted && $v.userForm.name.$error }"
        />
        <div
          v-if="isSubmitted && !$v.userForm.name.required"
          class="invalid-feedback"
        >
          Name field is required.
        </div>
      </div>
      <br />

      <div class="form-group">
        <label for="email">
          Email
          <span class="text-danger ml-1">*</span>
        </label>
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
          class="invalid-feedback"
        >
          <span v-if="!$v.userForm.email.required">
            Email field is required.
          </span>
          <span v-if="!$v.userForm.email.email">
            Please provide valid email.
          </span>
        </div>
      </div>
      <br />

      <div class="form-group">
        <label for="password">
          Password
          <span class="text-danger ml-1">*</span>
        </label>
        <input
          type="password"
          v-model="userForm.password"
          id="password"
          placeholder="Password"
          name="password"
          class="form-control"
          :class="{ 'is-invalid': isSubmitted && $v.userForm.password.$error }"
        />
        <div
          v-if="isSubmitted && $v.userForm.password.$error"
          class="invalid-feedback"
        >
          <span v-if="!$v.userForm.password.required">
            Password field is required.
          </span>
          <span v-if="!$v.userForm.password.minLength">
            Password should be at least 5 characters long.
          </span>
        </div>
      </div>
      <br />

      <div class="form-group">
        <label for="confirmPassword">
          Repeat password
          <span class="text-danger ml-1">*</span>
        </label>
        <input
          type="password"
          v-model="userForm.confirmPassword"
          id="confirmPassword"
          placeholder="Repeat password"
          name="confirmPassword"
          class="form-control"
          :class="{
            'is-invalid': isSubmitted && $v.userForm.confirmPassword.$error,
          }"
        />
        <div
          v-if="isSubmitted && $v.userForm.confirmPassword.$error"
          class="invalid-feedback"
        >
          <span v-if="!$v.userForm.confirmPassword.required">
            Confirm Password field is required.
          </span>
          <span v-else-if="!$v.userForm.confirmPassword.sameAsPassword">
            Passwords should be matched.
          </span>
        </div>
      </div>
      <br />

      <div class="form-group form-check">
        <input
          type="checkbox"
          v-model="userForm.accept"
          @change="$v.userForm.accept.$touch()"
          id="accept"
          class="form-check-input"
        />
        <label
          class="form-check-label"
          :class="{ 'is-invalid': isSubmitted && $v.userForm.accept.$error }"
          for="accept"
        >
          Accept terms &nbsp; conditions!
        </label>

        <div
          v-if="isSubmitted && $v.userForm.accept.$error"
          class="invalid-feedback"
        >
          <span v-if="!$v.userForm.accept.required">
            Accept terms and conditions!
          </span>
        </div>
      </div>
      <br />

      <div class="form_group">
        <button type="button" class="btn_register" @click="handleSubmit()">
          <b>Register</b>
        </button>
      </div>
    </form>
    <footer id="footer"></footer>
  </div>
</template>

<script>
import { firebase } from '@/firebase';
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators';
import { db } from '@/firebase';
import store from '@/store';

export default {
  name: 'Registracija',
  data() {
    return {
      userForm: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        accept: '',
      },
      isSubmitted: false,
      errorMessage: '',
    };
  },
  validations: {
    userForm: {
      name: {
        required,
      },
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(5),
      },
      confirmPassword: {
        required,
        sameAsPassword: sameAs('password'),
      },
      accept: {
        required(val) {
          return val;
        },
      },
    },
  },
  methods: {
    handleSubmit() {
      let id = this.userForm.email;
      let that = this;
      that.isSubmitted = true;
      that.$v.$touch();
      if (that.$v.$invalid) {
        return;
      }

      firebase
        .auth()
        .createUserWithEmailAndPassword(
          that.userForm.email,
          that.userForm.password
        )
        .then(function() {
          db.collection('users')
            .doc(id)
            .set({
              name: that.userForm.name,
              email: that.userForm.email,
              password: that.userForm.password,
            })
            .then((doc) => {
              console.log('Spremljeno', doc.id);
            })
            .catch(function(error) {
              console.error('Došlo je do greške', error);
            });
          store.displayName = that.userForm.name;
          store.currentUser = that.userForm.email;
          store.password = that.userForm.password;

          that.$router.replace({ name: 'Regije' });
        })
        /*.then(() => {
					firebase
						.auth()
						.currentUser.updateProfile({ displayName: this.userForm.name });
				})*/

        .catch((error) => {
          console.error(error);
          this.errorMessage = error.message;
        });
    },
  },
};
</script>

<style scoped>
#name,
#email,
#password,
#confirmPassword {
  margin-bottom: 8px;
  margin-top: 10px;

  border: 2px solid #f5b85c;
  background-color: #1a1a1a;
  color: #d0d0d0;
  outline: none;
  box-shadow: none;
}
#footer {
  width: 100%;
  height: 100px;
}

.btn_register {
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
  max-width: 500px;
  text-align: center;
  font-weight: 600;
}
</style>
