// Import the functions you need from the SDKs you need
// import { initializeApp, firestore, auth } from "firebase/app";
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFXUqVMYvDgWJdYaXlgExf3wzKgNmB4A0",
  authDomain: "clone-11a1a.firebaseapp.com",
  projectId: "clone-11a1a",
  storageBucket: "clone-11a1a.appspot.com",
  messagingSenderId: "239823975894",
  appId: "1:239823975894:web:5466c265d292caa0bb6077"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
const authfb = getAuth();
const provider = new GoogleAuthProvider();

export { db, authfb, provider };