import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyBLfsFNhBD1kNio0wyF0i1eesnf0MV-FE8",
  authDomain: "burgerqueeeeeeen.firebaseapp.com",
  databaseURL: "https://burgerqueeeeeeen.firebaseio.com",
  projectId: "burgerqueeeeeeen",
  storageBucket: "burgerqueeeeeeen.appspot.com",
  messagingSenderId: "650761219478",
  appId: "1:650761219478:web:1c6b2ed2c43b8994d901b7",
  measurementId: "G-VZBBK9865Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()

export { db, auth, firebase }