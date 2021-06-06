import { Avatar } from "@material-ui/core";
import React from "react";
import "./FeedReel.css";

const FeedReel = ({ src, bgImage, displayName }) => {
  return (
    <div
      style={{
        backgroundImage: `url( ${bgImage})`,
      }}
      className="feedReel"
    >
      {src && <Avatar className="feedReel__avatar" src={src} />}
      <div className="feedReel__dark">
        <p>{displayName}</p>
      </div>
    </div>
  );
};

export default FeedReel;
