import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import "./FeedPost.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import ShareIcon from "@material-ui/icons/Share";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import PostComments from "./PostComments/PostComments";
import { useState } from "react";
import { useStateValue } from "../../../StateProvider";

const FeedPost = ({ username, profilePic, imageUrl, message, timestamp }) => {
  const [{ user }, dispatch] = useStateValue();
  const [likes, setLikes] = useState(0);
  const [shares, setShares] = useState(0);

  const likeHandler = (e) => {
    setLikes(likes + 1);
  };
  const shareHandler = (e) => {
    setShares(shares + 1);
  };

  return (
    <div className="feedPost">
      <header className="feedPost__Header">
        <div>
          <Avatar src={profilePic} alt={username} />
          <h4 className="feedPost__displayName">
            {username}
            <br />
            <span>
              <CheckCircleIcon
                className="feedPost__isApproved"
                color="primary"
              />
            </span>
            <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
          </h4>
        </div>
        <div>
          <IconButton className="feedPost__Header--Icon">
            <MoreHorizIcon />
          </IconButton>
        </div>
      </header>
      {/* text section */}
      <section className="feedPost__text">
        <p>{message}</p>
      </section>
      {/* oprional image part */}
      <section className="feedPost__Image">
        <img src={imageUrl} alt="" />
      </section>
      {/* number of comments and shares */}
      <aside className="feedPost__NumberOfComments">
        <div>
          <span className="feedPost__ThumbUpOutlinedIcon">
            <ThumbUpOutlinedIcon />
          </span>
          {likes && user.displayName + " and " + likes + " others liked."}
        </div>
        <div>
          <p>
            {" "}
            {shares && user.displayName + " and " + shares + " others shared."}
          </p>
        </div>
      </aside>
      {/* post likes */}
      <div className="feedPost__Like">
        <div onClick={likeHandler}>
          <ThumbUpOutlinedIcon /> like
        </div>
        <div>
          <ModeCommentOutlinedIcon /> Comment
        </div>
        <div onClick={shareHandler}>
          <ShareIcon /> Share
        </div>
      </div>

      {/* footer */}
      <footer className="feedPost__comments">
        <div className="feedPost__PostComments">
          <PostComments />
        </div>
      </footer>
    </div>
  );
};

export default FeedPost;
