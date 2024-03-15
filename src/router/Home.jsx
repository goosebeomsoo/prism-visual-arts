/* eslint-disable max-len */
import assets from '../db/assets.json';
// import main_video from '../assets/video/main-video.mp4';

function Home() {
  return (
    <div className="page-home page">
      <div className="page-container container">
        <div className="content">
          <h2 className="copy-title">
            Our contents CHALLENGE the barriers between platforms, and TRAVEL
            different cultures and territories to BRING BEAUTY to the world.
            Producers Prism see the world through creative lens to see beyond
            the boarders.
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
        src={process.env.PUBLIC_URL + assets.video[0].mainVideo}
      />
    </div>
  );
}

export default Home;
