import { VideoListResponse } from './../../../types/video/index';

export default defineEventHandler (async (event): Promise<VideoListResponse> => {
  const config = useRuntimeConfig()
  const id = getRouterParam(event, 'id')

  return await $fetch('/videos', {
    baseURL: config.public.youtubeApiUrl,
    params: {
      key: config.youtubeApiKey,
      id,
      part: 'snippet',
      q: 'surfing',
      type: 'video',
      maxResults: 2,
    },
  });
});
