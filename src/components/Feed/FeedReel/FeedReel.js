import { Avatar } from "@material-ui/core";
import React from "react";
import "./FeedReel.css";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const FeedReel = ({ src, bgImage, displayName, user }) => {
  return (
    <div
      style={{
        backgroundImage: `url( ${bgImage})`,
      }}
      className="feedReel"
    >
      {user && (
        <div>
          <div>
            <br />
          </div>
          <div className="FeedReel__addIconDiv">
            <AddCircleIcon className="FeedReel__addIcon" />
            <span>Create Story</span>
          </div>
        </div>
      )}

      {src && <Avatar className="feedReel__avatar" src={src} />}
      <div className="feedReel__dark">
        <p>{displayName}</p>
      </div>
    </div>
  );
};

export default FeedReel;
