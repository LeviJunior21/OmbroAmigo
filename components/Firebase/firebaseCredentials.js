import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAwQiQ6VV3bRFjMPZx8juWzIOlSPhL2yRY",
  authDomain: "ombroamigobrasil.firebaseapp.com",
  databaseURL: "https://ombroamigobrasil-default-rtdb.firebaseio.com",
  projectId: "ombroamigobrasil",
  storageBucket: "ombroamigobrasil.appspot.com",
  messagingSenderId: "10918241239",
  appId: "1:10918241239:web:3fb697aea087321dc96192",
  measurementId: "G-J1EYV28WKD"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
