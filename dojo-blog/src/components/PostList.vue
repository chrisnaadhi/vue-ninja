<script>
import { onMounted, onUnmounted, onUpdated } from "vue";
import SinglePost from "@/components/SinglePost.vue";
export default {
  props: ["posts"],
  components: { SinglePost },
};
</script>

<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<style></style>
