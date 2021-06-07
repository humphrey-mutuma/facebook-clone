import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./FeedCreateStory.css";
import VideoCallOutlinedIcon from "@material-ui/icons/VideoCallOutlined";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";

const FeedCreateStory = () => {
  const [post, setPost] = useState("");

  const postHandler = (e) => {
    e.preventDefault();
    // check empty submit

    setPost("");
  };
  return (
    <div className="feedCreateStory">
      <header className="feedCreateStory__header">
        <Avatar src="https://cdn.pixabay.com/photo/2015/03/03/20/42/man-657869__340.jpg" />
        <span className="feedCreateStory__headerForm">
          <form onSubmit={postHandler}>
            <input
              onChange={(e) => setPost(e.target.value)}
              value={post}
              type="text"
              placeholder="What's on your mind, Humphrey?"
            />
          </form>
        </span>
      </header>
      <footer className="feedCreateStory__footer">
        <div>
          <VideoCallOutlinedIcon fontSize="large" color="secondary" />
          <h4>Live Video</h4>
        </div>
        <div>
          <PhotoLibraryIcon fontSize="large" style={{ color: "green" }} />
          <h4>Photos/Video</h4>
        </div>
        <div>
          <EmojiEmotionsOutlinedIcon
            fontSize="large"
            style={{ color: "yellow " }}
          />
          <h4>Feeling/Activity</h4>
        </div>
      </footer>
    </div>
  );
};

export default FeedCreateStory;
