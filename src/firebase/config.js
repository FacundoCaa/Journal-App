// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDC5id1_Ff49pIHFRfEbB-aQOjqdg9xP8k",
  authDomain: "journal-app-5538d.firebaseapp.com",
  projectId: "journal-app-5538d",
  storageBucket: "journal-app-5538d.appspot.com",
  messagingSenderId: "609629371890",
  appId: "1:609629371890:web:a006557bc0e488f9cdff6b"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );