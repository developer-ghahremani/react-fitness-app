import YoutubeVideo from "../../models/YoutubeVideo.model";
import axios from "axios";

const api = axios.create({
  baseURL: "https://youtube-search-and-download.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "5a11ebc2a9msh6f0f18ae817945dp1c6124jsn07e22b390982",
  },
});

export const youtubeSearchPhrase = (query: string) =>
  api.get<{
    contents: {
      video: YoutubeVideo;
    }[];
  }>("/search", {
    params: {
      type: "v",
      // sort: "v",
      query,
    },
  });

export default api;
