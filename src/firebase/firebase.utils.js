import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDxl9elqCbSe_WBaSgqCDW2NpZzxN4V3fM",
  authDomain: "react-store-ecaa9.firebaseapp.com",
  databaseURL: "https://react-store-ecaa9.firebaseio.com",
  storageBucket: "react-store-ecaa9.appspot.com",
  messagingSenderId: "348897907585",
  appId: "1:348897907585:web:22e10be7c4e9c1d4fd0e80",
  measurementId: "G-8HN1MPWD7Y",
  projectId: "react-store-ecaa9",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
