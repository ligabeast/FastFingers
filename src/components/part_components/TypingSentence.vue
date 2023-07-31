<template>
  <h1>
    <template v-for="(word, i1) in sentence" :key="i1">
      <template v-for="(char, i2) in word" :key="i2">
        <span :class="[characterColor(i1, i2), characterStyling(i1, i2)]">{{
          char
        }}</span>
      </template>
      <span :class="characterStyling(i1, sentence[i1].length)">&nbsp;</span>
    </template>
  </h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["sentence", "selected", "location", "success", "row", "col"],
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
    characterStyling(i1: number, i2: number) {
      const mode = this.$store.state.highlightStyle;
      if (i1 != this.row) {
        return {};
      }
      if (mode == "caret") {
        if (i2 == this.col) {
          return {
            "border-l-2 border-l-neutral-700": true,
          };
        }
        if (this.sentence[i1].length - 1 < this.col && i2 == this.col - 1) {
          return {
            "border-r-2 border-r-neutral-700": true,
          };
        }
      } else if (mode == "character") {
        if (i2 == this.col) {
          return {
            "bg-neutral-700 rounded-sm": true,
          };
        }
        if (
          this.sentence[this.row] &&
          i2 == this.sentence[this.row].length &&
          this.col >= this.sentence[this.row].length
        ) {
          return {
            "bg-neutral-700 rounded-sm": true,
          };
        }
      } else if (mode == "word") {
        if (i2 == 0) {
          return {
            "bg-neutral-700 rounded-l-sm": true,
          };
        } else if (i2 == this.sentence[this.row].length - 1) {
          return {
            "bg-neutral-700 rounded-r-sm": true,
          };
        } else if (i2 < this.sentence[this.row].length) {
          return {
            "bg-neutral-700": true,
          };
        }
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
