<style lang="scss">
@import 'variables';
@import '../node_modules/bootstrap/scss/bootstrap.scss';
@import "../node_modules/font-awesome-sass/assets/stylesheets/font-awesome";
@import './assets/styles/custom.scss';
</style>


<template>
<div class="container" id="app">
    <div id="nav">
        <router-link to="/board">Boards</router-link>
    </div>
    <router-view />
</div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
