import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBcs8dt61aUU-jrVpZotlrY4Blvj8Tg5xE",
    authDomain: "twitterclone-579b6.firebaseapp.com",
    projectId: "twitterclone-579b6",
    storageBucket: "twitterclone-579b6.appspot.com",
    messagingSenderId: "286726079211",
    appId: "1:286726079211:web:92033170ec169b7ccf34ae",
    measurementId: "G-N3H4RNJLVN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default db