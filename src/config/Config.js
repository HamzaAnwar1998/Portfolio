import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCMjXK07Oh5JO9bhsTzE5gV-5t3IDPVTHs",
    authDomain: "portfolio-2c007.firebaseapp.com",
    databaseURL: "https://portfolio-2c007.firebaseio.com",
    projectId: "portfolio-2c007",
    storageBucket: "portfolio-2c007.appspot.com",
    messagingSenderId: "489726991833",
    appId: "1:489726991833:web:82ff6d9b1febdd126f4dc8",
    measurementId: "G-YJHZN7B4VM"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();

export { db, storage, auth }