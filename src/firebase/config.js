import  firebase from  'firebase';
import React from 'react';
const config = {
    apiKey: "AIzaSyDSPBDvzWr2HdoqMzZnpWNsfPpN8GVLzTI",
    authDomain: "test-8e511.firebaseapp.com",
    databaseURL: "https://test-8e511.firebaseio.com",
    projectId: "test-8e511",
    storageBucket: "test-8e511.appspot.com",
    messagingSenderId: "345142912527"
  };

 firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
    class:'Novice',
    lv:26,
    jop:10,
    location:{
        city:'phuket',
        country: 'United State'
    }
}).then( () => {
    console.log("Data is save ");
}).catch( (e) => {
    console.log("This is failed.",e);
});

database.ref('lv').set(27);
database.ref('attributes').set({
    height:73,
    weight:150
}).then( () => {
    console.log("Second set Call");
}).catch( (e) => {
    console.log("Things didnt for the Second");
});
