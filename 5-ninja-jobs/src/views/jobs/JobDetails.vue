<script>
export default {
  props: ["id"],
  data() {
    return {
      job: null,
    };
  },
  // Add port 3333 to server-json
  // to serve it run "npx server-json --watch -p 3333 data/db.json"
  mounted() {
    fetch("http://localhost:3333/jobs/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <p>Job ID : {{ id }}</p>
    <p>{{ job.details }}</p>
  </div>
  <div v-else>
    <p>Loading data...</p>
  </div>

  <RouterLink :to="{ name: 'jobs' }">Back to list</RouterLink>
</template>

<style></style>
