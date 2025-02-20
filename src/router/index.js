import { createWebHistory, createRouter } from "vue-router";

import Login from "@/components/Login.vue";
import Dashboard from "@/components/Dashboard.vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  if (to.meta.requiresAuth) {
    return {
      path: "/login",
      query: { redirect: to.dashboard },
    };
  }
});

export default router;
