

var firebase = require("firebase/app");
require("firebase/firestore");

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

const db = firebase.firestore();
var token = 0
const getData = async () => {
  const uidThing = db.collection('interactionHistory').doc('ccaad09f-b2b7-4e37-9a24-5266aebd608');

  const doc = await uidThing.get();
  if (!doc.exists) {
    console.log('No such document!');
  } else {
    // console.log(doc.data().body.interaction[0].token);
    token = JSON.parse(doc.data().body.interaction[0].token)
    // console.log(token)
  }
}

getData().then(() => {
    console.log("finished");
})

const axios = require("axios");
const BASE_URL = "https://api.coincap.io/v2/assets"

var bitcoinUSD = 0
var ethereumUSD = 0

async function makeGetRequest() {

  let res = await axios.get(BASE_URL);

  let data = res.data.data;

  for (let i = 0; i < data.length; i++) { 
    if (data[i].id == 'bitcoin'){
      bitcoinUSD = data[i].priceUsd
    }
    if (data[i].id == 'ethereum'){
      ethereumUSD = data[i].priceUsd
    }
  }
  console.log(data[0].id);
  console.log(bitcoinUSD, ethereumUSD);
  console.log(token);
}

makeGetRequest();

const leftPad = require('left-pad')
const output = leftPad('Hello, World!', 15)
console.log(output)