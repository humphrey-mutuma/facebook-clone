import React, { useEffect, useState } from "react";
import "./Feed.css";
import FeedReel from "./FeedReel/FeedReel";
import FeedCreateStory from "./FeedCreateStory/FeedCreateStory";
import FeedPost from "./FeedPost/FeedPost";
import FeedCreateRoom from "./FeedCreateRoom/FeedCreateRoom";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import db from "../../firebase";

const Feed = () => {
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
              src={`https://i.pravatar.cc/150?img=${Math.floor(
                Math.random() * 50
              )}`}
              alt="user"
            />
          </div>
          <div className="FeedReel__addIconDiv">
            <AddCircleIcon className="FeedReel__addIcon" />
            <span>Create Story</span>
          </div>
        </div>

        <FeedReel
          src={`https://i.pravatar.cc/150?img=${Math.floor(
            Math.random() * 50
          )}`}
          bgImage={`https://i.pravatar.cc/150?img=${Math.floor(
            Math.random() * 50
          )}`}
          displayName="Peter Simon"
        />
        <FeedReel
          src={`https://i.pravatar.cc/150?img=${Math.floor(
            Math.random() * 50
          )}`}
          bgImage={`https://i.pravatar.cc/150?img=${Math.floor(
            Math.random() * 50
          )}`}
          displayName="Mary Magdalene"
        />
        <FeedReel
          src={`https://i.pravatar.cc/150?img=${Math.floor(
            Math.random() * 50
          )}`}
          bgImage={`https://i.pravatar.cc/150?img=${Math.floor(
            Math.random() * 50
          )}`}
          displayName="Ruth Wesu"
        />
        <FeedReel
          src={`https://i.pravatar.cc/150?img=${Math.floor(
            Math.random() * 50
          )}`}
          bgImage={`https://i.pravatar.cc/150?img=${Math.floor(
            Math.random() * 50
          )}`}
          displayName="AbdulFatah Moha"
        />
        <FeedReel
          src={`https://i.pravatar.cc/150?img=${Math.floor(
            Math.random() * 50
          )}`}
          bgImage={`https://i.pravatar.cc/150?img=${Math.floor(
            Math.random() * 50
          )}`}
          displayName="Alice Ipsum"
        />
        <FeedReel
          src={`https://i.pravatar.cc/150?img=${Math.floor(
            Math.random() * 50
          )}`}
          bgImage={`https://i.pravatar.cc/150?img=${Math.floor(
            Math.random() * 50
          )}`}
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
            postId={post.id}
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
