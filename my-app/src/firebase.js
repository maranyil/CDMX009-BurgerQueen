import firebase from 'firebase/firebase-app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBLfsFNhBD1kNio0wyF0i1eesnf0MV-FE8",
    authDomain: "burgerqueeeeeeen.firebaseapp.com",
    databaseURL: "https://burgerqueeeeeeen.firebaseio.com",
    projectId: "burgerqueeeeeeen",
    storageBucket: "burgerqueeeeeeen.appspot.com",
    messagingSenderId: "650761219478",
    appId: "1:650761219478:web:c8e330d673346f10d901b7",
    measurementId: "G-KJKCLQ1LJ2"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase