import kind from '@enact/core/kind';
import { Panel, Header } from '@enact/sandstone/Panels';

import VideoList from '../components/VideoList';
import SignIn from '../components/SignIn';

// dummy data
const videos = [
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
];

const MainPanel = kind({
  name: 'MainPanel',

  render: (props) => (
    <Panel {...props}>
      <SignIn />
      <VideoList videos={videos} />
    </Panel>
  ),
});

export default MainPanel;
