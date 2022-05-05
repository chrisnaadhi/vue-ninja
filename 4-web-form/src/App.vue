<script >
import SignupForm from "./components/SignupForm.vue";
  export default {
    name: 'App',
    components: { SignupForm }
  }
</script>

<template>
  <SignupForm></SignupForm>
</template>

<style>
/* @import './assets/base.css'; */

#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0;
  text-align: center;
  font-weight: normal;
  color: #2c3e50;
}

body {
  margin: 0;
  background: #eee;
}
</style>
