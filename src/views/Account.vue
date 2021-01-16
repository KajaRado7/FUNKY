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
          style="max-width: 500px; 
                                     text-align: center; 
                                     background-color: #F5B85C; 
                                     border: none; 
                                     border-radius: 15px; 
                                     padding: 16px 150px; 
                                     display: inline-block;
                                     color: black;"
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
        <div class="hr"></div>
        <br />
        <br />
        <br />
        <label>E-mail</label>
        <br />
        <br />
        <br />
        <div class="hr"></div>
        <br />
        <br />
        <br />
        <label>Password</label>
        <br />
        <br />
        <br />
        <div class="hr"></div>
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
												padding: 16px 150px; 
												display: inline-block; 
												color: black"
          >
            Edit Profile
            <small></small>
          </button>
          <button
            type="button"
            class="btn btn-outline-secondary text-uppercase"
            onclick="signOut()"
            style="max-width: 500px; 
										       text-align: center; 
											   background-color: #F5B85C; 
											   border: none; 
											   border-radius: 15px; 
											   padding: 16px 150px; 
											   display: inline-block; 
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

<style scoped>
.hr {
  display: block;
  margin-before: 0.5em;
  margin-after: 0.5em;
  margin-start: auto;
  margin-end: auto;
  overflow: hidden;
  border-style: inset;
  border-width: 1px;
  color: black;
}
</style>
