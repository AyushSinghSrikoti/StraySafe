// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup , signOut } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore , collection } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYrXaJfn1mYZRHofGGpNn_Sv9X_86aTzI",
  authDomain: "straysafe-f07ad.firebaseapp.com",
  projectId: "straysafe-f07ad",
  storageBucket: "straysafe-f07ad.appspot.com",
  messagingSenderId: "978645028289",
  appId: "1:978645028289:web:fbd3e67bb1993a48c7b340",
  measurementId: "G-3BZ5D645G6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
const db = getFirestore(app);


const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
      // Handle the user data here
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      console.log('User signed out');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };  

  export { auth, signInWithGoogle , logOut , storage , db };  