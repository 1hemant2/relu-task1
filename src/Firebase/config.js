import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDEKQygP_aNy3CIasVWD9UwOb2woGawEbA",
    authDomain: "loginsignup-7a48f.firebaseapp.com",
    projectId: "loginsignup-7a48f",
    storageBucket: "loginsignup-7a48f.appspot.com",
    messagingSenderId: "117285118746",
    appId: "1:117285118746:web:3248ec21dc40d11e8d42a3",
    measurementId: "G-HDFYDF4E7M"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }