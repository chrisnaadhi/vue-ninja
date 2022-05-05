<script>
import { ref, reactive, computed, watch, watchEffect } from "vue";

export default {
  name: "Composition",
  setup() {
    // Ref & Reactive
    const name = ref("chrisna");
    const age = ref(23);

    const ninjaOne = ref({ name: "mario", age: 30 });
    const ninjaTwo = reactive({ name: "luigi", age: 35 });

    const handleClick = () => {
      name.value = "luigi";
      age.value = 32;
    };

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40;
    };

    const updateNinjaTwo = () => {
      ninjaTwo.age = 45;
    };

    // Computed
    const nameComputed = computed(() => {
      return "shaun";
    });
    const listNameRef = ref([
      "mario",
      "yoshi",
      "luigi",
      "toad",
      "bowser",
      "koopa",
      "peach",
    ]);
    const searchListNameRef = ref("");

    const stopWatch = watch(searchListNameRef, () => {
      console.log("watch function run");
    });

    const stopEffect = watchEffect(() => {
      console.log("watchEffect run", searchListNameRef.value);
    });

    const handleStopWatch = () => {
      stopWatch();
      stopEffect();
    };

    const matchingNames = computed(() => {
      return listNameRef.value.filter((nameVal) =>
        nameVal.includes(searchListNameRef.value)
      );
    });

    return {
      name,
      age,
      handleClick,
      ninjaOne,
      ninjaTwo,
      updateNinjaOne,
      updateNinjaTwo,
      nameComputed,
      listNameRef,
      searchListNameRef,
      matchingNames,
      handleStopWatch,
    };
  },
};
</script>

<template>
  <div class="home">
    <p>Vue Composition API</p>
    <h1>Ref & Computed</h1>
    <p>My Name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
    <p>My Name is {{ ninjaOne.name }} and my age is {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update Ninja One</button>
    <p>My Name is {{ ninjaTwo.name }} and my age is {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update Ninja Two</button>
    <button @click="age++">Add Age</button>
    <br />
    <input type="text" v-model="name" />
    <br />
    <h1>Computed</h1>
    <input type="text" v-model="searchListNameRef" />
    <p>search term - {{ searchListNameRef }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>

    <button @click="handleStopWatch">Stop Watching</button>
  </div>
</template>
