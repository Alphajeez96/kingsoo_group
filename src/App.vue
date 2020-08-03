<template>
  <div id="app">
    <div id="nav">
   <knav></knav>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
#app {
font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;

}
.v-sidebar-menu .vsm--item{
    margin-top: 10px 
}

input[type="email"]:focus,
input[type="text"]:focus,
input[type="url"]:focus,input[type="date"]:focus {
    border-color: #F9F9F9;
    box-shadow: none;
    outline: 0 none;
    border: 1px solid rgba(0, 0, 0, 0.15);
}


#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding-top: 30px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>

import knav from './components/Partials/navbar'
export default {
  components: {
    knav
  }
}
</script>
