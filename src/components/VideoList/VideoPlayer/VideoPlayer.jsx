import VideoPlayerBase from '@enact/sandstone/VideoPlayer';
import classNames from 'classnames';

import css from './VideoPlayer.module.less';

// Todo: video type 변경 필요 (type="application/x-mpegURL")
const VideoPlayer = ({ src, isFull }) => {
  return (
    <VideoPlayerBase
      autoPlay
      muted
      noAutoShowMediaControls
      className={classNames({
        [css['video']]: true,
        [css['video-full']]: isFull,
        [css['video-split']]: !isFull,
      })}
    >
      <source src={src} type="video/mp4" />
    </VideoPlayerBase>
  );
};

export default VideoPlayer;
