export type SearchResult = {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: Snippet;
}

export type VideoListResponse = {
  kind: string;
  etag: string;
  items: VideoItem[];
}

export type VideoItem = {
  kind: string;
  etag: string;
  id: string;

  // These fields are optional, but for the sake of simplicity, we'll assume they're always present
  snippet: Snippet;
  contentDetails: ContentDetails;
  statistics: Statistics;
}

export type Snippet = {
  title: string;
  channelTitle: string;
  publishedAt: string;
  description: string;
  thumbnails: {
    default: {
      url: string;
    };
    medium: {
      url: string;
    };
    high: {
      url: string;
    };
  };
}

export type ContentDetails = {
  duration: string;
  dimension: string;
  definition: string;
  caption: string;
  licensedContent: boolean;
  contentRating: {};
  projection: string;
}

export type Statistics = {
  viewCount: string;
  likeCount: string;
  favoriteCount: string;
  commentCount: string;
}
