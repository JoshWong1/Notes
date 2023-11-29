// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjjN_1WRQW_UTLP2HrkjWwO4UjLzQiWVw",
  authDomain: "react-notes-7754b.firebaseapp.com",
  projectId: "react-notes-7754b",
  storageBucket: "react-notes-7754b.appspot.com",
  messagingSenderId: "1034484409666",
  appId: "1:1034484409666:web:0950b077be1a7c107514db",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
