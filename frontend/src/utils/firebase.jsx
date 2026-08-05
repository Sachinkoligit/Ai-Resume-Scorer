// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3SbD-HInNhffsNh4eaxN1YXOw2QW0l0o",
  authDomain: "mernai-c4af2.firebaseapp.com",
  projectId: "mernai-c4af2",
  storageBucket: "mernai-c4af2.firebasestorage.app",
  messagingSenderId: "609953863897",
  appId: "1:609953863897:web:a8c710ab2da0eb57d546c8",
  measurementId: "G-6RNYL35548"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export { auth, provider };