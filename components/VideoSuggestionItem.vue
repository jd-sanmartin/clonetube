<template>
  <NuxtLink :to="`/videos/${video.id}`">
    <div class="flex gap-3">
      <div class="w-1/2 relative aspect-video">
        <img :src="thumbnails.medium.url " :alt="title" class="aspect-video">
        <div class="thumbnail__duration">
          <span>{{ formattedDuration }}</span>
        </div>
      </div>

      <div class="w-1/2">
        <div>
          <div class="font-bold">
            {{ formattedTitle }}
          </div>
          <div class="text-sm text-gray-300">
            {{ channelTitle }}
          </div>
          <span class="text-sm text-gray-400">
            {{ formattedViews }} views <span>&#8226;</span> {{ elapsedTimeFromUpload }}
          </span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { type SearchResult } from '@/types/video';

interface Props {
  video: SearchResult
}

const props = defineProps<Props>()
const { video } = toRefs(props)

const { snippet, contentDetails } = video.value;

const { title, channelTitle, publishedAt, thumbnails } = snippet
const formattedDuration = formatYoutubeVideoDuration(contentDetails.duration)

const formattedTitle = title.length > 30 ? `${title.slice(0, 30)}...` : title
const formattedViews = abbreviateNumber(Math.random() * 10000000)
const elapsedTimeFromUpload = getElapsedTimeFromUpload(publishedAt)
</script>

<style scoped>
.thumbnail__duration {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 0.2rem 0.5rem;
  border-top-left-radius: 4px;
  font-size: 0.8rem;
  color: #fff;
}
</style>