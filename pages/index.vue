<template>
  <div class="feed__container py-4 mx-5">
    <div
      class="feed__video-grid pb-3"
    >
      <VideoItem
        v-for="i in 30"
        :key="i"
      />
    </div>
  </div>
</template>

<style>
.feed__container {
  width: 100%;
}

.feed__video-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}
</style>
