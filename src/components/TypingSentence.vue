<template>
  <h1>{{ sentence.join(" ") }}</h1>
</template>

<script lang="ts">
export default {
  props: ["sentence"],
};
</script>

<style scoped lang="scss"></style>
