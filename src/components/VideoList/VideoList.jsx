import VideoPlayer from './VideoPlayer';
import css from './VideoList.module.less';

const VideoList = ({ videos, idx }) => {
  return (
    <div className={css['video-list']}>
      {videos.map((video, idx) => (
        <VideoPlayer
          src={video}
          isFull={videos.length === 1}
          key={video + idx}
        />
      ))}
    </div>
  );
};

export default VideoList;
