import React from "react";
import "./Feed.css";
import FeedReel from "./FeedReel/FeedReel";
import FeedCreateStory from "./FeedCreateStory/FeedCreateStory";
import FeedPost from "./FeedPost/FeedPost";
import FeedCreateRoom from "./FeedCreateRoom/FeedCreateRoom";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { useStateValue } from "../../StateProvider";

const Feed = () => {
  const [{user}, dispatch] = useStateValue()

  return (
    <div className="feed">
      <div className="Feed__Reel">
        {/* .Create story.. */}

        <div className="feed__Reel--createStory">
          <div className="feed__Reel--userImageDiv">
            <img
              className="feed__reel--userImage"
              src="https://cdn.pixabay.com/photo/2020/09/20/16/27/model-5587623__340.jpg"
              alt="image"
            />
          </div>
          <div className="FeedReel__addIconDiv">
            <AddCircleIcon className="FeedReel__addIcon" />
            <span>Create Story</span>
          </div>
        </div>

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
          src="https://cdn.pixabay.com/photo/2020/09/20/16/27/model-5587623__340.jpg"
          bgImage="https://cdn.pixabay.com/photo/2020/09/20/16/27/model-5587623__340.jpg"
          displayName="Ruth Wesu"
        />
        <FeedReel
          src="https://cdn.pixabay.com/photo/2015/01/27/09/58/man-613601__340.jpg"
          bgImage="https://cdn.pixabay.com/photo/2015/01/27/09/58/man-613601__340.jpg"
          displayName="AbdulFatah Moha"
        />
        <FeedReel
          src="https://cdn.pixabay.com/photo/2020/09/20/16/27/model-5587623__340.jpg"
          bgImage="https://cdn.pixabay.com/photo/2020/09/20/16/27/model-5587623__340.jpg"
          displayName="Alice Ipsum"
        />
        <FeedReel
          src="https://cdn.pixabay.com/photo/2015/01/27/09/58/man-613601__340.jpg"
          bgImage="https://cdn.pixabay.com/photo/2015/01/27/09/58/man-613601__340.jpg"
          displayName="AbdulFatah Moha"
        />
      </div>
      <div className="Feed__feedCreateStory">
        <FeedCreateStory  />
      </div>
      <div className="feed__createRoom">
        <FeedCreateRoom />
      </div>
      <div className="feed__post">
        <FeedPost
          // id={id}
          profilePic={user.photoURL}
          message="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure fugiat
                    quidem minus et "
          timestamp="24hrs"
          username={user.displayName}
          image="https://cdn.pixabay.com/photo/2017/08/23/22/02/rolls-royce-2674490__340.jpg"
        />
        <FeedPost
          // id={id}
          profilePic="https://cdn.pixabay.com/photo/2015/03/26/09/40/suit-690048_960_721.jpg"
          message="sit amet consectetur adipisicing elit. Iure fugiat
                    quidem minusconsectetur adipisicing elit. Iure fugiat
                    quidem minus et Lorem, ipsum dolor  "
          timestamp="20hrs"
          username="Ezra Muthuri"
          image=""
        />
      </div>
    </div>
  );
};

export default Feed;
