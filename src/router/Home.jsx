/* eslint-disable max-len */
import { React } from 'react';
import assets from '../db/assets.json';
// import main_video from '../assets/video/main-video.mp4';

function Home() {
  return (
    <div className="page-home page">
      <div className="page-container container">
        <div className="content">
          <h2 className="copy-title">
            Add beauty in your story -
            <span>
              &nbsp;Prism Visual Arts&nbsp;
            </span>
            creates video advertisements adding &ldquo;meaning&rdquo; to your tales. Let us listen to your story in detail. We PRODUCE narrative series & commercials videos. Our contents CHALLENGE the barriers between platforms, and TRAVEL different cultures and territories to BRING BEAUTY to the world.  Producers Prism see the world through creative lens to see beyond the boarders.
          </h2>
        </div>
      </div>
      <div className="overlay" />
      <video
        className="background-video"
        autoPlay
        playsInline
        loop
        muted
        src={`.${assets.video[0].mainVideo}`}
      />
    </div>
  );
}

export default Home;
