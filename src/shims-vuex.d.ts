// vuex-shim.d.ts

import { Store } from "vuex";

declare module "@vue/runtime-core" {
  // Declare your own store states.
  interface State {
    timerSeconds: number;
    showTimer: boolean;
    showWPM: boolean;
    highlightError: boolean;
    simpleWordList: boolean;
    highlightStyle: string;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
