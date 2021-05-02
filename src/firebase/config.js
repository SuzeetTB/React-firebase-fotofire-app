import firebase from 'firebase/app';
require('firebase/storage') ;//store image/files
require('firebase/firestore');//database

//Firebase Configuration
var firebaseConfig = {
    apiKey: "AIzaSyDhl_u_R7uLik9uzhK712fxtBIrlAhLj1M",
    authDomain: "react-firebase-deeb3.firebaseapp.com",
    projectId: "react-firebase-deeb3",
    storageBucket: "react-firebase-deeb3.appspot.com",
    messagingSenderId: "154759190553",
    appId: "1:154759190553:web:2e234bec1c95c66b7d7288"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//handles to interact with storage and database
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectFirestore, projectStorage, timeStamp};