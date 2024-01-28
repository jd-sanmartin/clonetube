<template>
  <div class="container">
    <div class="thumbnail">
      <div class="thumbnail__duration">
        <span>10:00</span>
      </div>
    </div>
    <div class="thumbnail__details">
      <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
      <div>
        <div class="title">Title</div>
        <div class="subtitle">Subtitle</div>
        <span class="stats">
          100 K Views * 1 week ago
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  /* max-width: 300px; */
  /* Temporal */
}

.thumbnail {
  width: 100%;
  height: 100%;
  background-color: #0c6fc5;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  aspect-ratio: 16/9;
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
  font-size: 1.2rem;
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