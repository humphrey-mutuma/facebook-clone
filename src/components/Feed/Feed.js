import React, { useEffect, useState } from "react";
import "./Feed.css";
import FeedReel from "./FeedReel/FeedReel";
import FeedCreateStory from "./FeedCreateStory/FeedCreateStory";
import FeedPost from "./FeedPost/FeedPost";
import FeedCreateRoom from "./FeedCreateRoom/FeedCreateRoom";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { useStateValue } from "../../StateProvider";
import db from "../../firebase";

const Feed = () => {
  // const [{ user }, dispatch] = useStateValue();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);


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
        <FeedCreateStory />
      </div>
      <div className="feed__createRoom">
        <FeedCreateRoom />
      </div>
      <div className="feed__post">
        {posts.map((post) => (
          <FeedPost
            key={post.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            imageUrl={post.data.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
