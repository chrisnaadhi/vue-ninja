<script>
  import Modal from './components/Modal.vue'

  export default {
    name: 'App',
    components: { Modal },
    data() {
      return {
        title: 'My First Vue App :)',
        showModal: false,
        showModalTwo: false,
      }
    },
    methods: {
      toggleModal() {
        this.showModal = !this.showModal;
      },
      toggleModalTwo() {
        this.showModalTwo = !this.showModalTwo;
      }
    }
  }
</script>

<template>
  <h1>{{ title }}</h1>
  <div v-if="showModal">
    <Modal @close="toggleModal">
      <template v-slot:links>
        <a href="#">Sign Up NOW</a>
        <a href="#">More Info</a>
      </template>
      <h1>Ninja Giveaway</h1>
      <p>Grab your ninja swag for FREE</p>
    </Modal>
  </div>

  <div v-if="showModalTwo">
    <Modal theme="sale" @close="toggleModalTwo">
      <h1>Sign UP to the Newsletter</h1>
      <p>For updates and promo codes</p>
    </Modal>
  </div>
  <br>
  <button @click="toggleModal">Open Modal (alt) </button>
  <button @click="toggleModalTwo">Sign UP</button>
</template>

<style>
/* @import './assets/base.css'; */

#app {
  max-width: 1280px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0 auto;
  padding: 0 auto;
  text-align: center;
  font-weight: normal;
}
</style>
