import { useState } from 'react';
import video from '../db/video.json';

import VideoBlock from '../components/VideoBlock';
import VideoOverlay from '../components/VideoOverlay';

function Portfolio() {
  const [current, setCurrent] = useState();
  const setCurrentState = (index) => {
    setCurrent(index);
  };

  const videoList = video.videos.map((list, index) => (
    <VideoBlock
      list={list}
      index={index}
      current={current}
      setCurrentState={setCurrentState}
    />
  ));

  const overlayVideoList = video.videos.map((list, index) => (
    <VideoOverlay
      list={list}
      index={index}
      current={current}
      setCurrent={setCurrent}
    />
  ));

  return (
    <div className="page-portfolio">
      <div className="page-container container">
        <div className="content">{videoList}</div>

        <div className="expanded-overlay-list">{overlayVideoList}</div>
      </div>
    </div>
  );
}

export default Portfolio;
