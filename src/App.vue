<template>
  <div id="app">
    <nav>
      <router-link to="/">Home_Amr</router-link> |
      <router-link to="/">Home_Amr</router-link> |

      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>
<script>
export default {
  mounted () {
    window.Echo.channel('channel')
    .listen('Hello' , (e) => {
     console.log(e);
    })
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ec0909;

}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
