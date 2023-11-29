<template>
  <div
    v-if="activationWPM < scoredWPM"
    class="z-50 fixed left-0 top-0 bg-black opacity-90 w-full h-full flex justify-center items-center"
  >
    <div
      class="m-auto w-96 h-80 rounded-lg bg-[#111] opacity-100 only:flex flex-col relative p-4 space-y-5 border-2 border-white"
    >
      <div class="flex flex-row justify-between items-center">
        <p class="text-3xl font-semibold text-center w-full">Congratulations</p>
        <button
          @click="$emit('closeShareView')"
          type="button"
          class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-red-500 transition focus:outline-none focus:ring-2 focus:ring-inset"
        >
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <p class="text-lg">
        Your score has landed in the current top 10. would you like to share
        with the other players ?
      </p>
      <div class="flex flex-row space-x-4">
        <label class="font-bold">Nickname: </label>
        <input
          class="bg-transparent text-center outline-none border-b-2 border-white text-lg font-semibold"
          type="text"
          v-model="input"
        />
      </div>
      <button @click="$emit('shareResults', input)">
        <a href="#_" class="relative inline-block px-4 py-2 font-medium group">
          <span
            class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-green-500 group-hover:-translate-x-0 group-hover:-translate-y-0"
          ></span>
          <span
            class="absolute inset-0 w-full h-full bg-white border-2 border-green-500 group-hover:bg-green-500"
          ></span>
          <span class="relative text-green-500 group-hover:text-white"
            >Share your Results</span
          >
        </a>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: ["activationWPM", "scoredWPM"],
  setup() {
    const input = ref("");
    return { input };
  },
});
</script>
