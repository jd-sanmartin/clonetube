export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  return await $fetch('/videos', {
    baseURL: config.public.youtubeApiUrl,
    params: {
      key: config.youtubeApiKey,
      // TODO: make this attribute configurable
      part: 'snippet, statistics, contentDetails',
      chart: 'mostPopular',
      maxResults: 18,
    },
  });
});
