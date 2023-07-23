<template>
  <h1>
    <template v-for="(word, i1) in sentence" :key="i1">
      <template v-for="(char, i2) in word" :key="i2">
        <span :class="characterColor(i1, i2)">{{ char }}</span>
      </template>
      <span>&nbsp;</span>
    </template>
  </h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["sentence", "selected", "location", "success"],
  methods: {
    characterColor(i1: number, i2: number) {
      if (this.selected) {
        return {
          "text-red-600": this.location[i1][i2] && !this.success[i1][i2],
          "text-green-600": this.location[i1][i2] && this.success[i1][i2],
          "text-white": !this.location[i1][i2],
        };
      }
      return {};
    },
  },
  data() {
    return {};
  },
});
</script>

<style scoped lang="scss"></style>
