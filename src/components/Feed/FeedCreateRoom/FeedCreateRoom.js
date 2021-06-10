import { Avatar } from "@material-ui/core";
// import React, { useState } from "react";
import "./FeedCreateRoom.css";
import VideoCallOutlinedIcon from "@material-ui/icons/VideoCallOutlined";

const FeedCreateRoom = () => {

  return (
    <div className="feedCreateRoom">
      <span>
        <VideoCallOutlinedIcon fontSize="large" style={{ color: "pink" }} />
        Create Room
      </span>
      <Avatar
        src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50)}`}
      />
      <Avatar
        src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50)}`}
      />
      <Avatar
        src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50)}`}
      />
      <Avatar
        src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50)}`}
      />{" "}
      <Avatar
        src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50)}`}
      />
      <Avatar
        src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50)}`}
      />
      <Avatar
        src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50)}`}
      />
      <Avatar
        src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50)}`}
      />{" "}
      <Avatar
        src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50)}`}
      />
      <Avatar
        src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50)}`}
      />
      <Avatar
        src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50)}`}
      />
      <Avatar
        src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50)}`}
      />
    </div>
  );
};

export default FeedCreateRoom;
