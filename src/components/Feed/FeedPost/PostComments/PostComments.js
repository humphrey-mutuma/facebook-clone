import { Avatar, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./PostComments.css";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import GifOutlinedIcon from "@material-ui/icons/GifOutlined";
import PermMediaOutlinedIcon from "@material-ui/icons/PermMediaOutlined";
import { useStateValue } from "../../../../StateProvider";
import db from "../../../../firebase";
import Comments from "./Comments/Comments";
import firebase from "firebase";

const PostComments = ({ postId }) => {
  const [{ user }, dispatch] = useStateValue();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]); //comments from firestore

  const commentHandler = (e) => {
    e.preventDefault();
    db.collection("posts")
    .doc(postId)
    .collection("comments")
    .add({
      profilePic: user.photoURL,
      username: user.displayName,
      message: comment,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setComment("");
  };

  useEffect(() => {
    // let unsubscribe;
    if (postId) {
      db.collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setComments(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          );
        });
    }
    return () => {
      // unsubscribe();
    };
  }, [postId]);

  return (
    <div className="postComments">
      <div className="postComments__commentsForm">
        <Avatar src={user.photoURL} />
        <form onSubmit={commentHandler}>
          <div className="postComments__form">
            <span className="postComments__form--input">
              <input
                required
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                placeholder="Write a public comment..."
              />
            </span>
            <span className="postComments__form--icons">
              <IconButton size={"small"}>
                <InsertEmoticonIcon />
              </IconButton>
              <IconButton size={"small"}>
                <CameraAltOutlinedIcon />
              </IconButton>
              <IconButton size={"small"}>
                <GifOutlinedIcon />
              </IconButton>
              <IconButton size={"small"}>
                <PermMediaOutlinedIcon />
              </IconButton>
            </span>
          </div>
        </form>
      </div>
      {/* comments section */}
      <div className="postComments__comments">
        <details className="postComments__details">
          <summary>View more comments</summary>
          {comments.map((comment) => (
            <Comments
              key={comment.id}
              username={comment.data.username}
              profilePic={comment.data.profilePic}
              message={comment.data.message}
            />
          ))}
        </details>
      </div>
    </div>
  );
};

export default PostComments;
