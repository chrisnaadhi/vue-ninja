import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Home from "../views/Home.vue";
import Details from "../views/Details.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/vue-composition-api",
      name: "composition",
      component: HomeView,
    },
    {
      path: "/posts/:id",
      name: "details",
      component: Details,
      props: true,
    },
  ],
});

export default router;
