<template>
  <div class="container" style="max-width: 500px; text-align: left">
    <div
      class="alert alert-success"
      role="alert"
      style="max-width: 500px; text-align: center; background-color: #F5B85C"
    >
      <h2 class="alert-heading">Log in</h2>
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
          class="invalid-feedback"
        >
          <span v-if="!$v.userForm.email.required">
            Email field is required
          </span>
          <span v-if="!$v.userForm.email.email">
            Please provide valid email
          </span>
        </div>
      </div>
      <br />

      <div class="form-group">
        <label for="password">Password</label>
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
            Password field is required
          </span>
          <span v-if="!$v.userForm.password.minLength">
            Password should be at least 5 characters long
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
          Accept terms &nbsp; conditions
        </label>

        <div
          v-if="isSubmitted && $v.userForm.accept.$error"
          class="invalid-feedback"
        >
          <span v-if="!$v.userForm.accept.required">
            Accept terms and conditions
          </span>
        </div>
      </div>
      <br />

      <div class="form_group">
        <button @click="login()" class="btn_login">
          <b>Log in</b>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      userForm: {
        email: '',
        password: '',
        accept: '',
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
        minLength: minLength(5),
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
      this.isSubmitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      alert('SUCCESS!' + JSON.stringify(this.userForm));
    },
  },
};
</script>

<style scoped>
.btn_login {
  position: fixed;
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
.form_group > label {
  font-weight: 600;
  max-width: 500px;
  text-align: center;
}
</style>