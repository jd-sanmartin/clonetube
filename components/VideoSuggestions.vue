<template>
  <div class="flex flex-col gap-3">
    <VideoSuggestionItem v-for="video in suggestions" :key="video.id" :video="video" />
    <div ref="infiniteScrollObserver" class="flex justify-center">
      <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
const suggestions = reactive((await $fetch('/api/videos')).items)

const handleInfiniteScroll = () => {
  // We would fetch more videos here, but it's mocked instead in order not to hit the API quota limit
  suggestions.push(...suggestions);
};

const infiniteScrollObserver = useInfiniteScrollObserver(handleInfiniteScroll);
</script>