<template>
  <div class="flex justify-center my-14 text-4xl">
    <a href="http://127.0.0.1:5500/index.html"
      >Fast<span class="text-blue-500">Finger</span>s</a
    >
  </div>
  <div class="flex flex-col space-y-4 max-w-4xl mx-auto p-10">
    <typing-test @finished="showStats"></typing-test>
    <div class="flex space-x-4 pt-10 items-center">
      <statistic-view :stats="stats"></statistic-view>
      <configuration-view></configuration-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ConfigurationView from "./components/ConfigurationView.vue";
import StatisticView from "./components/StatisticView.vue";
import TypingTest from "./components/TypingTest.vue";

export default defineComponent({
  name: "App",
  components: {
    TypingTest,
    StatisticView,
    ConfigurationView,
  },
  data() {
    return {
      stats: {},
    };
  },
  methods: {
    showStats(stats: {
      correctChar: number;
      incorrectChar: number;
      accuracy: number;
      rawWPM: number;
      wpm: number;
    }) {
      this.stats = stats;
    },
  },
});
</script>
