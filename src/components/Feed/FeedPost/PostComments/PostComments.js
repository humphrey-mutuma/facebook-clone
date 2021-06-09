import { Avatar, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import "./PostComments.css";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import GifOutlinedIcon from "@material-ui/icons/GifOutlined";
import PermMediaOutlinedIcon from "@material-ui/icons/PermMediaOutlined";
import { useStateValue } from "../../../../StateProvider";
import db from "../../../../firebase";
import firebase from "firebase";

const PostComments = () => {
  const [{ user }, dispatch] = useStateValue();
  const [comment, setComment] = useState("");

  const commentHandler = (e) => {
    e.preventDefault();
      db.collection("comments").add({
        profilePic: user.photoURL,
        username: user.displayName,
        message: comment,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    setComment("");
  };
  
  return (
    <div className="postComments">
      <Avatar src={user.photoURL} />
      <form onSubmit={commentHandler}>
        <div className="postComments__form">
          <span className="postComments__form--input">
            <input
              required
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              placeholder="Write a public comment..."
            />
          </span>
          <span className="postComments__form--icons">
            <IconButton size={"small"}>
              <InsertEmoticonIcon />
            </IconButton>
            <IconButton size={"small"}>
              <CameraAltOutlinedIcon />
            </IconButton>
            <IconButton size={"small"}>
              <GifOutlinedIcon />
            </IconButton>
            <IconButton size={"small"}>
              <PermMediaOutlinedIcon />
            </IconButton>
          </span>
        </div>
      </form>
    </div>
  );
};

export default PostComments;
