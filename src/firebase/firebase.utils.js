import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDYOAtSQhnUadRvtKAaRYk6XYm-i883Ehg",
  authDomain: "crwn-db-244f7.firebaseapp.com",
  databaseURL: "https://crwn-db-244f7.firebaseio.com",
  projectId: "crwn-db-244f7",
  storageBucket: "crwn-db-244f7.appspot.com",
  messagingSenderId: "1091928382378",
  appId: "1:1091928382378:web:2e6ad5503101799c1e69d3",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
