import { Button, IconButton } from "@material-ui/core";
import { useState } from "react";
import "./ImageUpload.css";
import { storage } from "../../../../firebase";
import db from "../../../../firebase";
import firebase from "firebase";
import { useStateValue } from "../../../../StateProvider";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";

const ImageUpload = ({ message }) => {
  const [image, setImage] = useState(null);
  const [{ user }, dispatch] = useStateValue();
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //progress function
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100 - 1
        );
        setProgress(progress);
      },
      (error) => {
        //error function
        console.log(error);
        alert(error.message);
      },

      () => {
        // complete function
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL() //get the image download url
          .then((url) => {
            //post image inside the db
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              message: message,
              imageUrl: url,
              username: user.displayName,
              profilePic: user.photoURL,
            });

            setImage(null);
            setProgress(0);
            setImage("");
          });
      }
    );
  };

  return (
    <div className="ImageUpload">
      <input
        required
        style={{ display: "none" }}
        accept="image/*"
        id="contained-button-file"
        type="file"
        onChange={handleChange}
      />
      <label htmlFor="contained-button-file">
        <Button className="text__btn" component="span">
          <PhotoLibraryIcon fontSize="large" style={{ color: "green" }} />
          <h4>Image/GIF</h4>
        </Button>
      </label>

      {image && (
        <Button
          onClick={handleUpload}
          variant="contained"
          color="primary"
          component="label"
          className="text__btn"
          size="small"
        >
          <h4>Upload Now</h4>
        </Button>
      )}
    </div>
  );
};

export default ImageUpload;
