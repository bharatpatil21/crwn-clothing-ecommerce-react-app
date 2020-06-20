import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1pp85WV08Qp4hkh2UFHX3WUu32nnO9gw",
  authDomain: "ecommerce-clothing-react-app.firebaseapp.com",
  databaseURL: "https://ecommerce-clothing-react-app.firebaseio.com",
  projectId: "ecommerce-clothing-react-app",
  storageBucket: "ecommerce-clothing-react-app.appspot.com",
  messagingSenderId: "341311325274",
  appId: "1:341311325274:web:3d6ece513ddfd846cf0463",
};

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
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
