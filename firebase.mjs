
import firebase from "firebase/app";
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyB2HmytnME3qo80-O-S6-RcBsbnrlNaWKI",
    authDomain: "tegger-162ef.firebaseapp.com",
    projectId: "tegger-162ef",
    storageBucket: "tegger-162ef.appspot.com",
    messagingSenderId: "36962913084",
    appId: "1:36962913084:web:e10bada5f1677757a26c39",
    measurementId: "G-5T66MW7P9V"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();