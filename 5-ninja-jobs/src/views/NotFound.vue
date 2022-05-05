<script></script>

<template>
  <h2>404 : Page not Found</h2>
  <p>The page you acces is not found in the web. Please report any issue</p>
  <RouterLink :to="{ name: 'home' }">Back</RouterLink>
</template>

<style>
h2,
p {
  text-align: center;
}
</style>
