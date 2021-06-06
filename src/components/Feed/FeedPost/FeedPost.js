import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import "./FeedPost.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import RateReviewIcon from "@material-ui/icons/RateReview";

const FeedPost = () => {
  return (
    <div className="feedPost">
      <header className="feedPost__Header">
        <div>
          <Avatar />
          <h4 className="feedPost__displayName">
            Humphrey Mutuma <br /> <span>22hrs</span>
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
          alt="my image"
        />
      </section>
      {/* post likes */}
      <div className="feedPost__Like">
        <div>
          <ThumbUpIcon /> like
        </div>
        <div>
          <RateReviewIcon /> Comment
        </div>
      </div>

      {/* footer */}
      <footer className="feedPost__comments"></footer>
    </div>
  );
};

export default FeedPost;
