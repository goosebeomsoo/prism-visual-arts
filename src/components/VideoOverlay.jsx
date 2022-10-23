import { React } from 'react';

function VideoOverlay({
  list,
  index,
  current,
  setCurrent,
}) {
  document.cookie = 'crossCookie=bar; SameSite=None; Secure';

  return (
    <div className={current === index ? 'show-video-overlay video-overlay' : 'video-overlay'}>
      <div className="video-content">
        <h3 className="copy-title">
          {list.title}
        </h3>
        <p className="copy-sub-heading">
          {list.desc}
        </p>
        <iframe
          className="expanded-video"
          src={`https://www.youtube.com/embed/${list.videoLink}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div
          className="close-btn"
          role="presentation"
          onClick={() => {
            setCurrent();
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
