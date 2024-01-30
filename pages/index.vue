<template>
  <div class="py-8 mx-5">
    <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 pb-3">
      <VideoItem
        v-for="video in videos"
        :key="video.id.videoId"
        :video="video"
      />
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

const observerElement = ref(null);
let observer;

onMounted(() => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        videos.push(...videos);
      }
    });
  }, options);

  if (observerElement.value) {
    observer.observe(observerElement.value);
  }
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>
