<template>
  <div class="flex flex-col space-y-4 w-96">
    <div class="flex justify-between">
      <span>Test Duration</span>
      <div class="flex text-neutral-500">
        <span
          @click="setTime(10)"
          :class="{ 'bg-neutral-800 text-white': timeClass.time10 }"
          class="px-2 rounded-xl hover:text-white transition cursor-pointer"
          >0:10</span
        >
        <span
          @click="setTime(30)"
          :class="{ 'bg-neutral-800 text-white': timeClass.time30 }"
          class="px-2 rounded-xl hover:text-white transition cursor-pointer"
          >0:30</span
        >
        <span
          @click="setTime(60)"
          :class="{ 'bg-neutral-800 text-white': timeClass.time60 }"
          class="px-2 rounded-xl hover:text-white transition cursor-pointer"
          >1:00</span
        >
        <span
          @click="setTime(120)"
          :class="{ 'bg-neutral-800 text-white': timeClass.time120 }"
          class="px-2 rounded-xl hover:text-white transition cursor-pointer"
          >2:00</span
        >
        <span
          @click="setTime(300)"
          :class="{ 'bg-neutral-800 text-white': timeClass.time300 }"
          class="px-2 rounded-xl hover:text-white transition cursor-pointer"
          >5:00</span
        >
      </div>
    </div>
    <div class="flex justify-between">
      <span>Highlight Style</span>
      <div class="flex">
        <span class="px-2 rounded-xl bg-neutral-800">Character</span>
        <span class="px-2">Word</span>
        <span class="px-2">Caret</span>
      </div>
    </div>
    <div class="flex justify-between">
      <span>Words List</span>
      <div class="flex">
        <span class="px-2 rounded-xl bg-neutral-800">Simple</span>
        <span class="px-2">Advanced</span>
      </div>
    </div>
    <div class="flex justify-between">
      <span>Highlight Input on Error</span>
      <div class="flex">
        <span class="px-2 rounded-xl bg-neutral-800">On</span>
        <span class="px-2">Off</span>
      </div>
    </div>
    <div class="flex justify-between">
      <span>Show Timer</span>
      <div class="flex">
        <span class="px-2 rounded-xl bg-neutral-800">On</span>
        <span class="px-2">Off</span>
      </div>
    </div>
    <div class="flex justify-between">
      <span>Show WPM</span>
      <div class="flex">
        <span class="px-2 rounded-xl bg-neutral-800">On</span>
        <span class="px-2">Off</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      time: 0,
      timeClass: {
        time10: true,
        time30: false,
        time60: false,
        time120: false,
        time300: false,
      },
    };
  },
  methods: {
    setTime(time: number): void {
      for (const key in this.timeClass) {
        this.timeClass[key as keyof typeof this.timeClass] =
          "time" + time == key;
      }
      this.$store.commit("changeTimer", time);
    },
  },
});
</script>

<style></style>
