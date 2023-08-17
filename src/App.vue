<template>
  <BaseAlert :variant='variant' :text='text' @close='onClose' v-if="showAlert"/>
</template>

<script>
import BaseAlert from "@/components/BaseAlert";
export default {
  name: "App",
  components: {  BaseAlert },
  data() {
    return {
      variant: 'danger',
      text: "Please enter your ",
      showAlert: true,
    };
  },
methods: {
  onClose() {
   this.showAlert = !this.showAlert;
  }
}
};
</script>

<style>
.title {
  font-size: 20px;
  color: blue;
}
.title-home {
  font-size: 40px;
  color: green;
}

.todos-items {
  background-color: #000;
  margin: 0 0 5px 0;
  padding: 3px 6px;
  color: #fff;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
