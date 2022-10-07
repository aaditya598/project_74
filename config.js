import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBkUU1vvh3FzMi3ys5QaO7UG43RtMB9wpY",
  authDomain: "project-72-2bb96.firebaseapp.com",
  projectId: "project-72-2bb96",
  storageBucket: "project-72-2bb96.appspot.com",
  messagingSenderId: "382868832723",
  appId: "1:382868832723:web:be4694188b44466ff26f26"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
