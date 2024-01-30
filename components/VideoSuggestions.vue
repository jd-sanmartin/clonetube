<template>
  <div class="flex flex-col gap-3">
    <VideoSuggestionItem v-for="video in suggestions" :key="video.id" :video="video" />
    <div ref="observerElement" class="flex justify-center">
      <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
const suggestions = reactive((await $fetch('/api/videos')).items)

const handleInfiniteScroll = () => {
  suggestions.push(...suggestions);
};

const observerElement = useIntersectionObserver(handleInfiniteScroll);
</script>