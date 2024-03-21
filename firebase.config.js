// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXPsO_Imnai2pq_crqLn011oi8OgkTmgE",
  authDomain: "imposing-ratio-376319.firebaseapp.com",
  projectId: "imposing-ratio-376319",
  storageBucket: "imposing-ratio-376319.appspot.com",
  messagingSenderId: "809365759292",
  appId: "1:809365759292:web:e15188891628cf1b9f2a39",
  measurementId: "G-TMH528PLPT" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);