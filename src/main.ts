import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      timerDuration: 1000,
      showTimer: true,
      showWPM: true,
      highlightError: true,
      simpleWordList: true,
      highlightStyle: "character",
    };
  },
  mutations: {
    changeTimer(state: any, time: number): void {
      state.timerDuration = time;
    },
    changeVisibilityTimer(state: any, value: boolean): void {
      state.showTimer = value;
    },
    changeVisibilityWPM(state: any, value: boolean): void {
      state.showWPM = value;
    },
    changeVisibilityHighlight(state: any, value: boolean): void {
      state.highlightError = value;
    },
    changeWordList(state: any, value: boolean): void {
      state.simpleWordList = value;
    },
    changeHighlightStyle(state: any, value: string): void {
      state.highlightStyle = value;
    },
  },
});

const app = createApp(App);

app.use(store);
app.mount("#app");
