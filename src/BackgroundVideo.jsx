import React from "react";
import BackgroundVid from "./assets/background.mp4";

const BackgroundVideo = () => {
  return (
    <div>
      <video className="videobackground" autoPlay loop muted>
        <source src={BackgroundVid} />
      </video>
    </div>
  );
};

export default BackgroundVideo;
