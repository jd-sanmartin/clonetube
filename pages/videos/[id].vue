<template>
  <div class="flex flex-row px-10 pt-5 gap-5">
    <div class="flex flex-col">
      <div class="video-container flex justify-items-center w-100">
        <iframe :src="`https://www.youtube.com/embed/${id}?autoplay=0&mute=1`" title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          style="width: 100%; height: 100%; aspect-ratio: 16/9;" allowfullscreen />
      </div>

      <div class="flex flex-col video__details">
        <div class="video__title">
          <h1 class="text-xl font-semibold">
            {{ title }}
          </h1>
          <div class="flex row">
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
            <Button label="Subscribe" class="ml-2" />
            <Button label="Like" class="ml-2" />
            <Button label="Dislike" class="ml-2" />
            <Button label="Share" class="ml-2" />
            <Button label="Options" class="ml-2" />
          </div>
        </div>
        <div class="video__description text-sm font-light">
          {{ description }}
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-3">
      Video Suggestions
      <VideoSuggestion v-for="video in suggestions" :key="video.id.videoId" :video="video" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { type VideoListResponse } from '../../types/video';

const route = useRoute()
const id = route.params.id

const data: VideoListResponse = await $fetch('/api/videos', { id })
const { items } = data
const { snippet } = items[0]
const { title, description } = snippet

const { items: suggestions} = await $fetch('/api/videos')

</script>


