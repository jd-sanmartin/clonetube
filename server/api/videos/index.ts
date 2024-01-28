export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  return await $fetch('/search', {
    baseURL: config.public.youtubeApiUrl,
    params: {
      key: config.youtubeApiKey,
      part: 'snippet',
      q: 'surfing',
      type: 'video',
      maxResults: 2,
    },
  });
});
