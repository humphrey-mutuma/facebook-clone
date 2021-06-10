import { Avatar } from "@material-ui/core";
// import React, { useState } from "react";
import "./FeedCreateRoom.css";
import VideoCallOutlinedIcon from "@material-ui/icons/VideoCallOutlined";

const FeedCreateRoom = () => {
  
  const randomNumber = Math.floor(Math.random() * 10);

  return (
    <div className="feedCreateRoom">
      <span>
        <VideoCallOutlinedIcon fontSize="large" style={{ color: "pink" }} />
        Create Room
      </span>
      <Avatar src={`https://i.pravatar.cc/150?img=${randomNumber}`} />
      <Avatar src="https://i.pravatar.cc/150?img=2" />
      <Avatar src="https://i.pravatar.cc/150?img=3" />
      <Avatar src="https://i.pravatar.cc/150?img=4" />
      <Avatar src="https://i.pravatar.cc/150?img=5" />
      <Avatar src="https://i.pravatar.cc/150?img=6" />
      <Avatar src="https://i.pravatar.cc/150?img=7" />
      <Avatar src="https://i.pravatar.cc/150?img=8" />
      <Avatar src="https://i.pravatar.cc/150?img=9" />
      <Avatar src="https://i.pravatar.cc/150?img=10" />
      <Avatar src="https://i.pravatar.cc/150?img=11" />
      <Avatar src="https://i.pravatar.cc/150?img=12" />
      <Avatar src="https://i.pravatar.cc/150?img=13" />
    </div>
  );
};

export default FeedCreateRoom;
