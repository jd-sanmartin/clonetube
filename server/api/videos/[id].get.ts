import { VideoListResponse } from './../../../types/video/index';

/**
 * Event handler for fetching a specific video's details from YouTube API.
 *
 * This function is an event handler that fetches the details of a specific video from the YouTube API. The video ID is obtained from the router parameters.
 * The function returns a promise that resolves to a `VideoListResponse` object which contains the video details.
 *
 * @param {event} Event - The event object. The video ID is extracted from the router parameters in this event.
 * @returns {Promise<VideoListResponse>} A promise that resolves to a `VideoListResponse` object containing the video details.
 */
export default defineEventHandler (async (event): Promise<VideoListResponse> => {
  const config = useRuntimeConfig()
  const id = getRouterParam(event, 'id')

  return await $fetch('/videos', {
    baseURL: config.public.youtubeApiUrl,
    params: {
      key: config.youtubeApiKey,
      id,
      part: 'snippet, statistics',
      type: 'video',
      maxResults: 1,
    },
  });
});
