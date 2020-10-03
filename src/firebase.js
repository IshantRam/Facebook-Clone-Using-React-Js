// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDrn52wzr-4XlqBt6QZlIiRq0UezPaL0tQ",
  authDomain: "facebook-clone-518b5.firebaseapp.com",
  databaseURL: "https://facebook-clone-518b5.firebaseio.com",
  projectId: "facebook-clone-518b5",
  storageBucket: "facebook-clone-518b5.appspot.com",
  messagingSenderId: "329826106130",
  appId: "1:329826106130:web:c84360f98fdf54796c91cb",
  measurementId: "G-CTD8TNGWP7",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
