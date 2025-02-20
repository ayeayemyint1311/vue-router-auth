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

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem("auth_token");

  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/login"); // Redirect to login if not authenticated
  } else {
    next();
  }
});

export default router;
