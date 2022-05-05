<script>
  import Block from "./components/Block.vue"
  import Result from "./components/Result.vue"

  export default {
    name: 'App',
    components: { Block, Result },
    data() {
      return {
        isPlaying: false,
        delay: null,
        score: null,
        showResults: false
      }
    },
    methods: {
      start() {
        this.delay = 2000 + Math.random() * 5000
        this.isPlaying = true;
        this.showResults = false;
      },
      endGame(reactionTime) {
        this.score = reactionTime;
        this.isPlaying = false;
        this.showResults = true;
      }
    }
  }
</script>

<template>
  <h1>Reaction Timer Game</h1>
  <button @click="start" :disabled="isPlaying">Play</button>
  <Block v-if="isPlaying" :delay="delay" @end="endGame" />
  <Result v-if="showResults" :score="score"></Result>
</template>

<style>
/* @import './assets/base.css'; */

#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

button {
  background: #0faf87;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}

button[disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}
</style>
