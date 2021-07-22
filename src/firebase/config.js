import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyB7EVf0P16pyH6TMfQo8xDbqmq1ompGSbM",
  authDomain: "gallery-92c04.firebaseapp.com",
  projectId: "gallery-92c04",
  storageBucket: "gallery-92c04.appspot.com",
  messagingSenderId: "506680235152",
  appId: "1:506680235152:web:5f72fb2ff0b41f1b6db415"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };