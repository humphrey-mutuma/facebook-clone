import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./FeedCreateStory.css";
import VideoCallOutlinedIcon from "@material-ui/icons/VideoCallOutlined";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import { useStateValue } from "../../../StateProvider";
import db from "../../../firebase";
import firebase from "firebase";
import ImageUpload from "./ImageUpload/ImageUpload";

const FeedCreateStory = () => {
  const [{ user }, dispatch] = useStateValue();
  const [post, setPost] = useState("");

  const postHandler = (e) => {
    e.preventDefault();
    // check empty submit
    db.collection("posts").add({
      message: post,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      // image**
    });

    setPost("");
  };

  return (
    <div className="feedCreateStory">
      <header className="feedCreateStory__header">
        <Avatar src={user.photoURL} />
        <span className="feedCreateStory__headerForm">
          <form onSubmit={postHandler}>
            <input
              required
              onChange={(e) => setPost(e.target.value)}
              value={post}
              type="text"
              placeholder={`What's on your mind ${user.displayName}?`}
            />
          </form>
        </span>
      </header>
      <footer className="feedCreateStory__footer">
        <div>
          <VideoCallOutlinedIcon fontSize="large" color="secondary" />
          <h4 className="iconTitle"> Live Video</h4>
        </div>
        <section>
          <ImageUpload message={post} />
        </section>
        <div>
          <EmojiEmotionsOutlinedIcon
            fontSize="large"
            style={{ color: "yellow " }}
          />
          <h4 className="iconTitle">Feeling/Activity</h4>
        </div>
      </footer>
    </div>
  );
};

export default FeedCreateStory;
