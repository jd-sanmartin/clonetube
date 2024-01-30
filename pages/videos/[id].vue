<template>
  <div class="flex flex-col md:flex-row flex-grow md:px-5 pt-5 gap-5">
    <!-- VIDEO AND DETAILS -->
    <div class="flex flex-col w-full md:w-2/3">
      <iframe
        :src="`https://www.youtube.com/embed/${id}?autoplay=1&mute=1`"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        style="width: 100%; aspect-ratio: 16/9;"
        allowfullscreen
      />

      <div class="flex flex-col mt-2 px-2 sm:px-0">
        <div class="text-lg font-semibold">
          {{ title }}
        </div>
        <div class="text-sm font-light">
          {{ formattedViews }} views &#8226; {{ elapsedTimeFromUpload }}
        </div>

        <div class="flex row flex-wrap justify-between my-3">
          <!-- CHANNEL INFO -->
          <div class="flex flex-row flex-wrap">
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
            <div class="flex flex-col mx-2">
              <span class="text-sm font-semibold">
                {{ channelTitle }}
              </span>
              <span class="text-sm font-light">
                {{ formattedSubscribers }} subscribers
              </span>
            </div>
            <Button label="Subscribe" class="ml-2 mr-5 bg-green-500 px-3" />
  
            <!-- ACTIONS -->
            <span class="p-buttonset">
              <Button icon="pi pi-thumbs-up" :label="formattedLikes" class="border border-green-400 p-3" />
              <Button icon="pi pi-thumbs-down" class="border border-gray-600 p-3" />
            </span>
          </div>


          <div>
            <Button icon="pi pi-share-alt" class="py-3" />
            <Button icon="pi pi-ellipsis-h" class="py-3" />
          </div>
        </div>
      </div>
    </div>

    <!-- DESCRIPTION COMMENTS AND SUGGESTIONS -->
    <div class="flex w-full md:w-1/3" style="max-width: 100vw">
      <div class="flex w-full overflow-y-auto">
        <TabView class="w-full">
          <TabPanel header="Description">
            <div class="text-sm font-light">
              {{ description }}
            </div>
          </TabPanel>
          <TabPanel header="Comments">
            <div class="text-sm font-light">
              Comments
            </div>
          </TabPanel>
          <TabPanel header="Suggestions">
            <VideoSuggestions />
          </TabPanel>
        </TabView>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type VideoListResponse } from '../../types/video';

const route = useRoute()
const id = route.params.id

const data: VideoListResponse = await $fetch(`/api/videos/${id}`)

const { items } = data
const { snippet, statistics } = items[0]

const { title, description, channelTitle, publishedAt } = snippet

const formattedLikes = abbreviateNumber(+statistics.likeCount)
const formattedViews = abbreviateNumber(+statistics.viewCount)

const elapsedTimeFromUpload = getElapsedTimeFromUpload(publishedAt)
const formattedSubscribers = abbreviateNumber(Math.random() * 10000000)
</script>
