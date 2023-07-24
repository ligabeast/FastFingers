import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      timerSeconds: 10,
    };
  },
  mutations: {
    changeTimer(state: any, time: number): void {
      state.timerSeconds = time;
    },
  },
});

const app = createApp(App);

app.use(store);
app.mount("#app");
