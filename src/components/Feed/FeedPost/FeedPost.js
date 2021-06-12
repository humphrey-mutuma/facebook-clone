import { Avatar, IconButton } from "@material-ui/core";
import "./FeedPost.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import ShareIcon from "@material-ui/icons/Share";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import PostComments from "./PostComments/PostComments";
import { useState } from "react";
import { useStateValue } from "../../../StateProvider";

const FeedPost = ({ postId, username, profilePic, imageUrl, message, timestamp }) => {
  const [{ user }, dispatch] = useStateValue();
  const [likes, setLikes] = useState(112);
  const [shares, setShares] = useState(7);

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
          {likes <= 112
            ? likes + " likes"
            : user.displayName + " and " + likes + " others liked."}
        </div>
        <div>
          <p>
            {shares <= 7
              ? shares + " Shared"
              : user.displayName + " and " + shares + " others shared"}
          </p>
        </div>
      </aside>
      {/* post likes */}
      <div className="feedPost__Like">
        <div onClick={likeHandler}>
          <ThumbUpOutlinedIcon /> <span className="iconTitleHidden">like</span>
        </div>
        <div>
          <ModeCommentOutlinedIcon />{" "}
          <span className="iconTitleHidden">Comment</span>
        </div>
        <div onClick={shareHandler}>
          <ShareIcon /> <span className="iconTitleHidden">Share</span>
        </div>
      </div>

      {/* footer */}
      <footer className="feedPost__comments">
        <div className="feedPost__PostComments">
          <PostComments postId={postId} />
        </div>
      </footer>
    </div>
  );
};

export default FeedPost;
