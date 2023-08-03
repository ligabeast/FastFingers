<template>
  <div class="flex flex-col space-y-4 max-w-4xl w-full">
    <div class="flex flex-row justify-between font-semibold">
      <p>Daily Leaderboard</p>
      <p class="text-neutral-500">Resets in 2 hours</p>
    </div>
    <div class="font-semibold">
      <div class="flex flex-row px-4 py-2 rounded-md bg-neutral-900">
        <p class="w-[20%]">Rank</p>
        <p class="w-[70%]">User</p>
        <p class="w-[10%]">WPM</p>
      </div>
      <template v-for="(user, index) in leaderboard" :key="index">
        <div
          class="flex flex-row px-4 py-2 rounded-md"
          :class="{ 'bg-neutral-900': index % 2 == 1 }"
        >
          <p class="w-[20%]">{{ index + 1 }}</p>
          <p class="w-[70%]">{{ user.name }}</p>
          <p class="w-[10%]">{{ user.wpm }}</p>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { useFirestore } from "vuefire";
import { useCollection } from "vuefire";
import { collection } from "firebase/firestore";
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const db = useFirestore();
    const leaderboard = ref({});
    const { promise } = useCollection(collection(db, "leaderboard"));
    promise.value.then((place) => {
      const data = place[0].allTime as { wpm: number; name: string }[];
      data.sort((a, b) => b.wpm - a.wpm);
      leaderboard.value = data;
    });
    return { leaderboard };
  },
});
</script>
