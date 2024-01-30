<template>
  <div>
    <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 pb-3">
      <VideoFeedItem v-for="video in videos" :key="video.id.videoId" :video="video" />
    </div>

    <div ref="observerElement" class="flex justify-center">
      <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})

// TODO: Add types
const data = await $fetch('/api/videos')
const videos = reactive(data.items)

const handleInfiniteScroll = () => {
  videos.push(...videos);
};

const observerElement = useIntersectionObserver(handleInfiniteScroll);
</script>