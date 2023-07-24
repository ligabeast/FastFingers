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
      <div class="flex text-neutral-500">
        <span
          class="px-2 rounded-xl hover:text-white transition cursor-pointer"
          :class="{
            'bg-neutral-800 text-white': HighlightStyleClass.character,
          }"
          @click="changeHighlightStyle('character')"
          >Character</span
        >
        <span
          class="px-2 rounded-xl hover:text-white transition cursor-pointer"
          :class="{
            'bg-neutral-800 text-white': HighlightStyleClass.word,
          }"
          @click="changeHighlightStyle('word')"
          >Word</span
        >
        <span
          class="px-2 rounded-xl hover:text-white transition cursor-pointer"
          :class="{
            'bg-neutral-800 text-white': HighlightStyleClass.caret,
          }"
          @click="changeHighlightStyle('caret')"
          >Caret</span
        >
      </div>
    </div>
    <div class="flex justify-between">
      <span>Words List</span>
      <div class="flex text-neutral-500">
        <span
          class="px-2 rounded-xl hover:text-white transition cursor-pointer"
          :class="{
            'bg-neutral-800 text-white': simpleWordListClass,
          }"
          @click="changeWordList(true)"
          >Simple</span
        >
        <span
          class="px-2 rounded-xl hover:text-white transition cursor-pointer"
          :class="{
            'bg-neutral-800 text-white': !simpleWordListClass,
          }"
          @click="changeWordList(false)"
          >Advanced</span
        >
      </div>
    </div>
    <div class="flex justify-between">
      <span>Highlight Input on Error</span>
      <div class="flex text-neutral-500">
        <span
          class="px-2 rounded-xl hover:text-white transition cursor-pointer"
          :class="{
            'bg-neutral-800 text-white': visibilityHighlightClass,
          }"
          @click="changeVisibilityHighlight(true)"
          >On</span
        >
        <span
          class="px-2 rounded-xl hover:text-white transition cursor-pointer"
          :class="{
            'bg-neutral-800 text-white': !visibilityHighlightClass,
          }"
          @click="changeVisibilityHighlight(false)"
          >Off</span
        >
      </div>
    </div>
    <div class="flex justify-between">
      <span>Show Timer</span>
      <div class="flex text-neutral-500">
        <span
          class="px-2 rounded-xl hover:text-white transition cursor-pointer"
          :class="{ 'bg-neutral-800 text-white': visibilityTimeClass }"
          @click="changeVisibilityTime(true)"
          >On</span
        >
        <span
          class="px-2 rounded-xl hover:text-white transition cursor-pointer"
          :class="{ 'bg-neutral-800 text-white': !visibilityTimeClass }"
          @click="changeVisibilityTime(false)"
          >Off</span
        >
      </div>
    </div>
    <div class="flex justify-between">
      <span>Show WPM</span>
      <div class="flex text-neutral-500">
        <span
          class="px-2 rounded-xl hover:text-white transition cursor-pointer"
          :class="{ 'bg-neutral-800 text-white': visibilityWMPClass }"
          @click="changeVisibilityWPM(true)"
          >On</span
        >
        <span
          class="px-2 rounded-xl hover:text-white transition cursor-pointer"
          :class="{ 'bg-neutral-800 text-white': !visibilityWMPClass }"
          @click="changeVisibilityWPM(false)"
          >Off</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      timeClass: {
        time10: true,
        time30: false,
        time60: false,
        time120: false,
        time300: false,
      },
      HighlightStyleClass: {
        character: true,
        word: false,
        caret: false,
      },
      visibilityWMPClass: true,
      visibilityTimeClass: true,
      visibilityHighlightClass: true,
      simpleWordListClass: true,
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
    changeVisibilityWPM(value: boolean): void {
      this.visibilityWMPClass = value;
      this.$store.commit("changeVisibilityWPM", value);
    },
    changeVisibilityTime(value: boolean): void {
      this.visibilityTimeClass = value;
      this.$store.commit("changeVisibilityTimer", value);
    },
    changeVisibilityHighlight(value: boolean): void {
      this.visibilityHighlightClass = value;
      this.$store.commit("changeVisibilityHighlight", value);
    },
    changeWordList(value: boolean): void {
      this.simpleWordListClass = value;
      this.$store.commit("changeWordList", value);
    },
    changeHighlightStyle(value: string): void {
      for (const key in this.HighlightStyleClass) {
        this.HighlightStyleClass[key as keyof typeof this.HighlightStyleClass] =
          value == key;
      }
      this.$store.commit("changeHighlightStyle", value);
    },
  },
});
</script>

<style></style>
