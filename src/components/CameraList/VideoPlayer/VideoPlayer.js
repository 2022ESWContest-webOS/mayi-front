import VideoPlayerBase from '@enact/sandstone/VideoPlayer';

import './VideoPlayer.css';

// Todo: video type 변경 필요 (type="application/x-mpegURL")
const VideoPlayer = ({ src, isFull }) => {
  return (
    <VideoPlayerBase
      autoPlay
      muted
      noAutoShowMediaControls
      className={`video ${isFull ? 'video-full' : 'video-split'}`}
    >
      <source src={src} type="video/mp4" />
    </VideoPlayerBase>
  );
};

export default VideoPlayer;
