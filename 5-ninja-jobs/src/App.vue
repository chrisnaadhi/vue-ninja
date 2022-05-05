<script setup>
import { RouterLink, RouterView, useRouter } from "vue-router";

const router = useRouter();

function redirect() {
  router.push({
    name: "home",
  });
}

function back() {
  router.go(-1);
}

function forward() {
  router.go(1);
}
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink :to="{ name: 'about' }">About</RouterLink>
    <RouterLink :to="{ name: 'jobs' }">Jobs</RouterLink>
  </nav>

  <RouterView />
  <div class="navigation">
    <button @click="redirect">Redirect</button>
    <button @click="back">Go Back</button>
    <button @click="forward">Go Forward</button>
  </div>
</template>

<style>
/* @import "@/assets/base.css"; */

#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  max-width: 768px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 20px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.navigation {
  margin: 20px 0px;
}
</style>
