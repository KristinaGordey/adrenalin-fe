import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import { useCookies } from "vue3-cookies";
import router from "./router";

import VCalendar from "v-calendar";
import "v-calendar/style.css";

const app = createApp(App);
app.use(useCookies);
app.use(VCalendar, {});

app.use(router);

app.mount("#app");
