import React from 'react';

const reading = "https://smnaji.ir/video/Reading.mp4";
const writing = "https://smnaji.ir/video/Writing.mp4"
const listening = "https://smnaji.ir/video/Listening.mp4";

const videoSources = {
  writing: writing,
  reading: reading,
  listening: listening,
};

const VideoPlayer = ({ id }) => {
  const videoSrc = videoSources[id];

  return (
    <video height="250" width="444" controls style={{ borderRadius: '10px' }}>
      {videoSrc && <source src={videoSrc} type="video/mp4" />}
    </video>
  );
};

export default VideoPlayer;