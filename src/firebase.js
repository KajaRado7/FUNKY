import firebase from "firebase/app" ;
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";


var firebaseConfig = {
    apiKey: "AIzaSyD4NH_W17xv1ILKn4Jcbesr2vrYg0RS040",
    authDomain: "funky-7760b.firebaseapp.com",
    projectId: "funky-7760b",
    storageBucket: "funky-7760b.appspot.com",
    messagingSenderId: "32108666300",
    appId: "1:32108666300:web:55d753496e1bd0c123dfb9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  let db = firebase.firestore();
  let storage = firebase.storage();

  export { firebase, db, storage };

 