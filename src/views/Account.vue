<template>
  <div class="container" style="max-width: 500px;">
    <div id="myAccount">
      <div
        class="container"
        style="max-width: 500px; text-align: left; color: white"
      >
        <br />
        <br />
        <div
          style="max-width: 500px; text-align: center; background-color: #F5B85C; border-radius: 15px; color: black; padding: 16px 32px;"
        >
          <h2>My account</h2>
        </div>
        <br />
        <br />
        <br />
        <label>Full name</label>
        <br />
        <br />
        <br />
        <div class="hr">
          <span>{{userForm.name}}</span>
        </div>
        <br />
        <br />
        <br />
        <label>E-mail</label>
        <br />
        <br />
        <br />
        <div class="hr">
          <span>{{userForm.email}}</span>
        </div>
        <br />
        <br />
        <br />
        <label>Password</label>
        <br />
        <br />
        <br />
        <div class="hr"></div>
        <span>{{userForm.password}}</span>
        <br />
        <br />
        <br />
        <br />
        <div class="col-lg-12 col-md-12 text-center">
          <button
            type="button"
            class="btn btn-outline-primary btn-block text-uppercase mb-3"
            onclick="showEditProfileForm()"
            style="max-width: 500px; 
										    text-align: center; 
												background-color: #F5B85C; 
												border: none; 
												border-radius: 15px; 
                        padding: 16px 32px;
												color: black"
          >
            Edit Profile
            <small></small>
          </button>
          <br/>
          <button
            type="button"
            class="btn btn-outline-secondary text-uppercase"
            onclick="signOut()"
            style="max-width: 500px; 
										       text-align: center; 
											   background-color: #F5B85C; 
											   border: none; 
											   border-radius: 15px; 
											   padding: 16px 32px;
											   color: black"
          >
            Logout
            <small></small>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {firebase} from '@/firebase';

export default {
  data(){
    return{
      userForm: {
        name: null,
        email: null,
        password: null,
      }
    }
  },
    created(){
      let user = firebase.auth().currentUser;

      this.userForm.name = user.userForm.name;
      this.userForm.email = user.userForm.email;
      this.userForm.password = user.userForm.password;
    }
  };
</script>

<style scoped>
.hr {
  display: block;
  overflow: hidden;
  border-style: inset;
  border-width: 1px;
  color: white;
}
</style>
