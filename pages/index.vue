<template>
  <div class="feed__container py-4 mx-5">
    <div class="feed__video-grid pb-3">
      <!-- <VideoItem
        v-for="video in videos"
        :key="video.id.videoId"
        :video="video"
      /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
// const data = await $fetch('/api/videos')
// const videos = data.items

definePageMeta({
  middleware: 'auth',
})
</script>

<style>
.feed__container {
  width: 100%;
}

.feed__video-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}
</style>
