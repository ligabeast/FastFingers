<template>
  <div class="flex justify-center my-14 text-4xl">
    <a href="./">Fast<span class="text-blue-500">Finger</span>s</a>
  </div>
  <div class="flex flex-col space-y-6 justify-center items-center p-10">
    <div class="max-w-6xl flex flex-col space-y-5">
      <typing-test @finished="showStats" />
    </div>
    <div class="flex space-x-4 pt-10 items-center">
      <statistic-view :stats="stats" />
      <configuration-view />
    </div>
    <div class="w-[80%] max-w-7xl">
      <statistic-chart v-bind="statsChart" />
    </div>
    <leader-board />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ConfigurationView from "./components/ConfigurationView.vue";
import StatisticView from "./components/StatisticView.vue";
import TypingTest from "./components/TypingTest.vue";
import StatisticChart from "./components/StatisticChart.vue";
import LeaderBoard from "./components/LeaderBoard.vue";
import ShareResults from "./components/ShareResults.vue";

export default defineComponent({
  name: "App",
  components: {
    TypingTest,
    StatisticView,
    ConfigurationView,
    StatisticChart,
    LeaderBoard,
  },
  data() {
    return {
      stats: {},
      statsChart: {},
    };
  },
  methods: {
    showStats(
      stats: {
        correctChar: number;
        incorrectChar: number;
        accuracy: number;
        rawWPM: number;
        wpm: number;
      },
      statsChart: {
        words: string[];
        incorrectCharacters: number[];
        sectionWPM: number[];
        continuousWPM: number[];
      }
    ) {
      this.stats = stats;
      this.statsChart = statsChart;
    },
  },
});
</script>
