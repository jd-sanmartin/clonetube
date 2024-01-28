<template>
  <NuxtLink :to="`/videos/${video.id.videoId}`">
    <div class="flex flex-row gap-3">
      <div class="thumbnail">
        <img :src=" thumbnails.medium.url " :alt=" title " class="thumbnail__image max-w-30">
        <div class="thumbnail__duration">
          <span>10:00</span>
        </div>
      </div>
      <div class="thumbnail__details">
        <div>
          <div class="title">
            {{ formattedTitle }}
          </div>
          <div class="subtitle">
            {{ channelTitle }}
          </div>
          <span class="stats">
            {{ formattedViews }} {{ $t('views') }} <span>&#8226;</span> {{ elapsedTimeFromUpload }}
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
const { snippet } = video.value;

const { title, channelTitle, publishedAt, thumbnails } = snippet

const formattedTitle = title.length > 40 ? `${title.slice(0, 40)}...` : title
const formattedViews = abbreviateNumber(Math.random() * 10000000)
const elapsedTimeFromUpload = getElapsedTimeFromUpload(publishedAt)
</script>

<style scoped>

.thumbnail {
  position: relative;
  aspect-ratio: 16/9;
}

.thumbnail__image {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  aspect-ratio: 16/9;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.thumbnail__duration {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.2rem 0.5rem;
  border-top-left-radius: 4px;
  font-size: 0.8rem;
  color: #fff;
}

.thumbnail__details {
  display: flex;
  flex-direction: row;
  justify-items: flex-start;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.title {
  font-size: 1rem;
  font-weight: bold;
}

.subtitle {
  font-size: 0.8rem;
  color: #aaa;
}

.stats {
  font-size: 0.8rem;
  color: #aaa;
}
</style>