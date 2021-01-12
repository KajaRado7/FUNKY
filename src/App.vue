<template>
  <div class="row">
    <div class="col-1"></div>
    <div class="col-10">
      <div id="app">
        <div id="nav">
          <router-link to="/">Home</router-link>
          |
          <router-link to="/Registracija">Registracija</router-link>
          |
          <router-link to="/Login">Log in</router-link>
          |
          <router-link to="/Početna">Početna</router-link>
          |
          <router-link to="/AddEvent">Add event</router-link>
        </div>
        <router-view />
      </div>
    </div>
    <div class="col-1"></div>
  </div>

</template>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
<style>
 body {
   background-color:#1A1A1A;
}
</style>
