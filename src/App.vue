<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/services">Services</router-link>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    updateCharacters() {
      const newCharacter = {
        firstName: "Arya",
        lastName: "Snow",
        email: "arya@gmail.com",
      };

      this.$store.commit("storeUser", newCharacter);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
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
