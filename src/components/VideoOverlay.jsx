import { useRef, React } from 'react';
import YouTube from 'react-youtube';

function VideoOverlay({
  list,
  index,
  current,
  setCurrent,
}) {
  const videoRef = useRef();
  return (
    <div className={current === index ? 'show-video-overlay video-overlay' : 'video-overlay'}>
      <div className="video-content">
        <YouTube
          className="expanded-video"
          title={list.title}
          videoId={list.videoLink}
          ref={videoRef}
          opts={{
            width: '100%',
            height: '100%',
            playerVars: {
              autoplay: 0,
              rel: 0,
              modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
            },
          }}
          onEnd={(e) => { e.target.stopVideo(0); }}
        />
        <div
          className="close-btn"
          role="presentation"
          onClick={() => {
            setCurrent();
            videoRef.current.resetPlayer();
          }}
        >
          <p className="copy-sub-heading">
            CLOSE
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoOverlay;
