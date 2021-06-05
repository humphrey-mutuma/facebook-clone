import React from "react";
import "./Feed.css";
import FeedReel from "./FeedReel/FeedReel";
import FeedCreateStory from "./FeedCreateStory/FeedCreateStory";
import FeedPost from "./FeedPost/FeedPost";

const Feed = () => {
  return (
    <div className="feed">
      <div className="Feed__Reel">
        <FeedReel
          user
          bgImage="https://cdn.pixabay.com/photo/2018/06/14/21/11/girl-3475649__340.jpg"
        />
        <FeedReel
          src="https://cdn.pixabay.com/photo/2020/09/20/16/27/model-5587623__340.jpg"
          bgImage="https://cdn.pixabay.com/photo/2020/09/20/16/27/model-5587623__340.jpg"
          displayName="Ruth Wesu"
        />
        <FeedReel
          src="https://cdn.pixabay.com/photo/2017/02/04/12/25/man-2037255__340.jpg"
          bgImage="https://cdn.pixabay.com/photo/2017/02/04/12/25/man-2037255__340.jpg"
          displayName="Peter Simon"
        />
        <FeedReel
          src="https://cdn.pixabay.com/photo/2021/05/28/02/27/kid-6289638__340.jpg"
          bgImage="https://cdn.pixabay.com/photo/2021/05/28/02/27/kid-6289638__340.jpg"
          displayName="Mary Magdalene"
        />
        <FeedReel
          src="https://cdn.pixabay.com/photo/2015/01/27/09/58/man-613601__340.jpg"
          bgImage="https://cdn.pixabay.com/photo/2015/01/27/09/58/man-613601__340.jpg"
          displayName="AbdulFatah Moha"
        />
      </div>
      <div className="Feed__feedCreateStory">
        <FeedCreateStory />
      </div>
      <FeedPost />
    </div>
  );
};

export default Feed;
