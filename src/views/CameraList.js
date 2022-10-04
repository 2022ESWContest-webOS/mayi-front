import CameraList from '../components/CameraList';
import PageLayout from '../components/PageLayout/PageLayout';

// dummy data
const videos = [
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
];

const CameraListPage = () => {
  return (
    <PageLayout>
      <CameraList videos={videos} />
    </PageLayout>
  );
};

export default CameraListPage;
