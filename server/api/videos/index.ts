export default defineEventHandler(async () => {
  const config = useRuntimeConfig()


  // https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=US&key=[YOUR_API_KEY]
  return await $fetch('/videos', {
    baseURL: config.public.youtubeApiUrl,
    params: {
      key: config.youtubeApiKey,
      // TODO: make this attribute configurable
      part: 'snippet, statistics, contentDetails',
      chart: 'mostPopular',
      maxResults: 10,
    },
  });
});
