import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import "./FeedPost.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import ShareIcon from "@material-ui/icons/Share";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import PostComments from "./PostComments/PostComments";

const FeedPost = () => {
  return (
    <div className="feedPost">
      <header className="feedPost__Header">
        <div>
          <Avatar />
          <h4 className="feedPost__displayName">
            Humphrey Mutuma
            <br />
            <span>
              <CheckCircleIcon
                className="feedPost__isApproved"
                color="primary"
              />
            </span>
            <span>22hrs</span>
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
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure fugiat
          quidem minus et necessitatibus magnam tenetur dicta, alias
          reprehenderit autem hic excepturi sequi voluptate tempore, nam magni
          non consequuntur est.
        </p>
      </section>
      {/* oprional image part */}
      <section className="feedPost__Image">
        <img
          src="https://cdn.pixabay.com/photo/2017/08/23/22/02/rolls-royce-2674490__340.jpg"
          alt=""
        />
      </section>
      {/* number of comments and shares */}
      <aside className="feedPost__NumberOfComments">
        <div>
          <span className="feedPost__ThumbUpOutlinedIcon">
            <ThumbUpOutlinedIcon />
          </span>
          878
        </div>
        <div>
          <p>524 comments</p>
        </div>
      </aside>
      {/* post likes */}
      <div className="feedPost__Like">
        <div>
          <ThumbUpOutlinedIcon /> like
        </div>
        <div>
          <ModeCommentOutlinedIcon /> Comment
        </div>
        <div>
          <ShareIcon /> Share
        </div>
      </div>

      {/* footer */}
      <footer className="feedPost__comments">
        <div>
          <p>View 9 more comments</p>
          {/* <iframe src="" frameborder="0">
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
          </iframe> */}
        </div>
        <div className="feedPost__PostComments">
          <PostComments />
        </div>
      </footer>
    </div>
  );
};

export default FeedPost;
