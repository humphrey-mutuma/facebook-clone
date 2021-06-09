import { Avatar } from "@material-ui/core";
import React from "react";
import "./Comments.css";

const Comments = ({ profilePic, username, message }) => {
  return (
    <div className="comments">
      <Avatar src={profilePic} className="comments__avatar" />
      <div className="comments__text">
        <h4>{username}</h4>
        <p>{message} </p>
      </div>
    </div>
  );
};

export default Comments;
