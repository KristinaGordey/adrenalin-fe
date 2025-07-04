import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Login from "../Authentication/Login.vue";
import Register from "@/views/Register.vue";
import Price from "@/views/Price.vue";
import Schedule from "@/views/Schedule.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/price",
    name: "Price",
    component: Price,
  },
  {
    path: "/schedule",
    name: "Schedule",
    component: Schedule,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
