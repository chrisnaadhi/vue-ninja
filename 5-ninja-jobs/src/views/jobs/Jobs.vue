<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },

  // Add port 3333 to server-json
  // to serve it run "npx server-json --watch -p 3333 data/db.json"
  mounted() {
    fetch("http://localhost:3333/jobs")
      .then((res) => res.json())
      .then((data) => (this.jobs = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<template>
  <h1>Jobs</h1>
  <div v-if="jobs.length">
    <div v-for="job in jobs" :key="job.id" class="job">
      <RouterLink :to="{ name: 'JobDetails', params: { id: job.id } }">
        <h2>{{ job.title }}</h2>
      </RouterLink>
    </div>
  </div>
  <div v-else>
    <p>Loading Jobs data...</p>
  </div>
</template>

<style>
.job h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}

.job h2:hover {
  background: #ddd;
}

.job a {
  text-decoration: none;
}
</style>
