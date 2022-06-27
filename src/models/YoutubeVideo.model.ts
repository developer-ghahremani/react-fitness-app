interface YoutubeVideo {
  channelId: string;
  channelName: string;
  description: string;
  lengthText: string;
  publishedTimeText: string;
  title: string;
  videoId: string;
  viewCountText: string;
  thumbnails: { height: number; url: string; width: number }[];
}
export default YoutubeVideo;
