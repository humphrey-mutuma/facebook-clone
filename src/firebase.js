import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhKmnE7CmSwKZpyx5NJHaE_oge612Vxug",
  authDomain: "facebook-clone-76c6e.firebaseapp.com",
  projectId: "facebook-clone-76c6e",
  storageBucket: "facebook-clone-76c6e.appspot.com",
  messagingSenderId: "385236608979",
  appId: "1:385236608979:web:d816d85b0c41b602023126",
  measurementId: "G-XCZF7H866F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
// google auth provider
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, storage };
export default db;
