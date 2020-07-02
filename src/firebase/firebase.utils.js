import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCRlBp8pxXFpzaLucUqYPgDXpRgmz_TAL8",
  authDomain: "beauty-salon-8a9d4.firebaseapp.com",
  databaseURL: "https://beauty-salon-8a9d4.firebaseio.com",
  projectId: "beauty-salon-8a9d4",
  storageBucket: "beauty-salon-8a9d4.appspot.com",
  messagingSenderId: "25668693204",
  appId: "1:25668693204:web:7788b4489b66b225d95f41",
  measurementId: "G-M6PNVXY7J6",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;