<template>
  <div class="flex flex-col w-80 justify-center text-lg">
    <div class="h-20 flex justify-center items-center">
      <p class="text-4xl">
        {{ wpm > 0 ? wpm : "-" }}<span class="text-xl mx-2">WPM</span>
      </p>
    </div>
    <div class="flex justify-between bg-neutral-900 rounded-sm px-4 py-2">
      <p>Raw WMP</p>
      <p>{{ rawWPM > 0 ? rawWPM : "-" }}</p>
    </div>
    <div class="flex justify-between rounded-sm px-4 py-2">
      <p>Accuracy</p>
      <div class="flex">
        <p>{{ accuracy > 0 ? accuracy : "-" }}</p>
        <span v-if="accuracy > 0">%</span>
      </div>
    </div>
    <div class="flex justify-between bg-neutral-900 rounded-sm px-4 py-2">
      <p>Correct Characters</p>
      <p>{{ correctChar > 0 ? correctChar : "-" }}</p>
    </div>
    <div class="flex justify-between rounded-sm px-4 py-2">
      <p>Incorrect Characters</p>
      <p>{{ incorrectChar > 0 ? incorrectChar : "-" }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["stats"],
  data() {
    return {
      accuracy: 0,
      rawWPM: 0,
      wpm: 0,
      correctChar: 0,
      incorrectChar: 0,
    };
  },
  watch: {
    stats(newValue: {
      correctChar: number;
      incorrectChar: number;
      accuracy: number;
      rawWPM: number;
      wpm: number;
    }) {
      this.wpm = newValue.wpm;
      this.accuracy = newValue.accuracy;
      this.rawWPM = newValue.rawWPM;
      this.correctChar = newValue.correctChar;
      this.incorrectChar = newValue.incorrectChar;
    },
  },
});
</script>

<style></style>
