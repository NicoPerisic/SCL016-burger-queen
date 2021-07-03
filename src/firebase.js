import app from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

  const firebaseConfig = {
    apiKey: "AIzaSyDmv39YLYtbUSevnibFzOPWlF-5NFlHCh8",
    authDomain: "miau-coffee.firebaseapp.com",
    projectId: "miau-coffee",
    storageBucket: "miau-coffee.appspot.com",
    messagingSenderId: "263178581011",
    appId: "1:263178581011:web:065bf670091f9b2aa9fbe6",
    measurementId: "G-4LN323VFDX"
  };
  
  // Initialize Firebase
  app.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();

export {db, auth}