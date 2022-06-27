import React from "react";
import YoutubeVideoModel from "../../../models/YoutubeVideo.model";

type Props = {
  video: YoutubeVideoModel;
};

const YoutubeVideo = (props: Props) => {
  return (
    <div className="flex flex-col">
      <img
        src={props.video.thumbnails[0].url}
        width={props.video.thumbnails[0].width}
        height={props.video.thumbnails[0].height}
        className="rounded-xl"
        alt=""
      />
      <a
        href={`http://youtube.com/watch?v=${props.video.videoId}`}
        target="_blank"
        rel="noopener noreferrer">
        <p className="font-bold">{props.video.title}</p>
      </a>
      <a
        href={`http://youtube.com/channel/${props.video.channelId}`}
        target="_blank"
        rel="noopener noreferrer">
        <p className="text-sm">{props.video.channelName}</p>
      </a>
      <div className="flex items-center text-sm">
        <p>{props.video.viewCountText}</p>
        <p>, </p>
        <p>{props.video.publishedTimeText}</p>
      </div>
    </div>
  );
};

export default YoutubeVideo;
