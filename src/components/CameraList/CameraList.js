import VideoPlayer from './VideoPlayer';
import './CameraList.css';

const CameraList = ({ videos, idx }) => {
  return (
    <div className={'video-list'}>
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

export default CameraList;
