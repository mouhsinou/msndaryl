// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBPv4u5CtSD2LJgEMzL-WaXdzWTz2o6VW8",
    authDomain: "msndaryl-b5903.firebaseapp.com",
    projectId: "msndaryl-b5903",
    storageBucket: "msndaryl-b5903.appspot.com",
    messagingSenderId: "625422444635",
    appId: "1:625422444635:web:ad724ad677e86e28e5f77e",
    measurementId: "G-50NL2Z1TE3"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };