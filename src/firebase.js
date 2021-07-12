import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDzri8_6Wfx_Ye4c4zLrU-xeMFSJ8PoCHc",
  authDomain: "slack-clone-yt-468b4.firebaseapp.com",
  projectId: "slack-clone-yt-468b4",
  storageBucket: "slack-clone-yt-468b4.appspot.com",
  messagingSenderId: "390854285951",
  appId: "1:390854285951:web:3b8f043340894081cbfd4a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
