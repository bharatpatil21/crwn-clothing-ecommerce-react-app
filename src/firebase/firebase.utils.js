import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD1pp85WV08Qp4hkh2UFHX3WUu32nnO9gw",
  authDomain: "ecommerce-clothing-react-app.firebaseapp.com",
  databaseURL: "https://ecommerce-clothing-react-app.firebaseio.com",
  projectId: "ecommerce-clothing-react-app",
  storageBucket: "ecommerce-clothing-react-app.appspot.com",
  messagingSenderId: "341311325274",
  appId: "1:341311325274:web:3d6ece513ddfd846cf0463"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;