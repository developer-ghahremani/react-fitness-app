import React, { useEffect, useState } from "react";

import { YouTubeVideoItem } from "../items";
import YoutubeVideo from "../../models/YoutubeVideo.model";
import { youtubeSearchPhrase } from "./api";

type Props = { searchPhrase: string; title?: JSX.Element };

const RelatedVideo = (props: Props) => {
  const [videos, setVideos] = useState<YoutubeVideo[]>([]);

  useEffect(() => {
    handleSearchPhrase();
  }, []);

  const handleSearchPhrase = async () => {
    try {
      const { data } = await youtubeSearchPhrase(props.searchPhrase);
      setVideos(data.contents.map((item) => item.video));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {props.title}
      <div className="md:grid-cols-3 grid grid-cols-1 gap-4 mt-6">
        {videos.map((item) => (
          <YouTubeVideoItem video={item} key={item.title} />
        ))}
      </div>
    </div>
  );
};

export default RelatedVideo;
