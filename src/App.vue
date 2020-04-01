<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <h1>your name is:{{message}}</h1>
    <input v-model="message" placeholder="nick name">
    <button v-on:click="isHidden = !isHidden">click</button>
    <button v-on:click="greet()">alert</button>
    <button v-on:click="reverseMessage">reverse</button>
    <h1 v-if="!isHidden">Hello {{message}}!</h1>
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      isHidden: true
    }
  },
  methods: {
    reverseMessage: function () {
      return  this.message = this.message.split('').reverse().join('')
    },
    greet: function () {
      return alert('Hello ' + this.message + '!')
    }
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
