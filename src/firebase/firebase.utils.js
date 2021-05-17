import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';


const config = {
  apiKey: "AIzaSyBZh85gkYkot5A-PA6QZ_K-DWSjZJR0kS4",
  authDomain: "clothing-store-db-c1f6a.firebaseapp.com",
  projectId: "clothing-store-db-c1f6a",
  storageBucket: "clothing-store-db-c1f6a.appspot.com",
  messagingSenderId: "198710119651",
  appId: "1:198710119651:web:e418982c245044541e09d6",
  measurementId: "G-47CDGQVPSM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;