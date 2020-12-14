<template>
 <div class="about">
  <h1>Register</h1>
    <br>
   <div class="container">
   <div class="row">
   <div class="col-sm"></div>
   <div class="col-sm">
 <form>
    <div class="form-group">
     <label for="inputName">Full name</label>
     <input type="name" 
            v-model="inputName" 
            class="form-control" 
            id="inputName"  
            placeholder="e.g. Bob Wills"
            minlength="3" 
            maxlength="30" />
  </div>
  <br>
  <div class="form-group">
   <label for="exampleInputEmail1">Email address</label>
   <input type="email" 
          v-model="email"
          class="form-control" 
          id="email" 
          aria-describedby="emailHelp" 
          placeholder="e.g. Bobwills@email.com" />
  </div>
  <br>
  <div class="form-group">
   <label for="exampleInputPassword1">Password</label>
   <input type="password" 
          v-model="password"
          class="form-control" 
          id="password" 
          placeholder="Password" />
    <div v-if="submitted && $v.password.$error" class="invalid-feedback">
        <span v-if="!$v.password.required">Password is required</span>
        <span v-if="!$v.password.minLength">Password must be at least 6 characters</span>
    </div>
  </div>
  <br>
  <div class="form-group">
   <label for="exampleInputPassword1">Repeat password</label>
   <input type="password" 
          v-model="repeatPassword"
          class="form-control" 
          id="repeatPassword" 
          placeholder="Repeat password" />
    <div v-if="submitted && $v.repeatPassword.$error" class="invalid-feedback">
           <span v-if="!$v.repeatPassword.required">Confirm Password is required</span>
           <span v-else-if="!$v.repeatPassword.sameAsPassword">Passwords must match</span>
     </div>
 </div>
 <br>
 <button type="button" @click="registracija" class="btn btn-primary">Register</button>
 </form>
 </div>
 <div class="col-sm"></div>
 </div>
 </div>
 </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import {firebase} from "@/firebase";

export default {
    name: "registracija",
    data(){
        return{
            inputName: "",
            email:"",
            password:"",
            repeatPassword:"",
         submitted: false 
        };
    },
    validations: {
        user: {
            inputName: {required},
            email: {required, email},
            password: {required, minLength: minLength(6)},
            repeatPassword:{required, sameAsPassword: sameAs('password')},
        }
    },
    methods: {
            registracija(){
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                    function(){
                        console.log("Uspješna registracija!");
                    }).catch(function(error){
                            console.error("Došlo je do greške!", error)
                        });
                console.log("Nastavak");
            },
    },  
    handleSubmit(e) {
                this.submitted = true;
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }

                alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.user));
            }
};
</script>