<template>
  <div class="py-8 mx-5">
    <VideoFeed />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})
</script>