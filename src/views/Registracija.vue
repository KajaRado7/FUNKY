<template>
  <div class="container" style="max-width: 500px; text-align: left">
    <div
      class="alert alert-success"
      role="alert"
      style="max-width: 500px; text-align: center; background-color: #F5B85C; border-radius: 15px"
    >
      <h2 class="alert-heading">Registration</h2>
    </div>

    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Full name</label>
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
          Name field is required
        </div>
      </div>
      <br />

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

      <div class="form-group">
        <label for="confirmPassword">Repeat password</label>
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
            Confirm Password field is required
          </span>
          <span v-else-if="!$v.userForm.confirmPassword.sameAsPassword">
            Passwords should be matched
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
        <button class="btn_register">
          <b>Register</b>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators';

export default {
  name: "signup()",
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
.btn_register {
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
  max-width: 500px;
  text-align: center;
  font-weight: 600;
}
</style>