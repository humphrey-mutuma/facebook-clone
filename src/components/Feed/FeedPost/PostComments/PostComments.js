import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import "./PostComments.css";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import GifOutlinedIcon from "@material-ui/icons/GifOutlined";
import PermMediaOutlinedIcon from "@material-ui/icons/PermMediaOutlined";

const PostComments = () => {
  return (
    <div className="postComments">
      <Avatar />
      <form>
        <div className="postComments__form">
          <span className="postComments__form--input">
            <input placeholder="Write a public comment..." />
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
