import { React } from 'react';

function VideoBlock({
  list,
  index,
  setCurrentState,
}) {
  return (
    <div
      className="video-block"
      onClick={() => {
        setCurrentState(index);
      }}
      role="presentation"
    >
      <div className="desc-layer">
        <h3 className="copy-heading">
          {list.title}
        </h3>
        <p className="copy-sub-heading">
          {list.desc}
        </p>
      </div>
      <img
        className="thumb-image"
        src={list.thumb}
        alt={list.title}
      />
    </div>
  );
}

export default VideoBlock;
