import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyBgtOTK77F30ntbDByoNoLYOa9H86ifbM8",
  authDomain: "journal-app-d8e56.firebaseapp.com",
  projectId: "journal-app-d8e56",
  storageBucket: "journal-app-d8e56.appspot.com",
  messagingSenderId: "655374919293",
  appId: "1:655374919293:web:26c17829658716b5ad7314"
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)