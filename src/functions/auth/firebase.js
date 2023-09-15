// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG2UYn5xUJ7Gxugpkn-iQnIUZ4OO-Dupg",
  authDomain: "ca-site-debc4.firebaseapp.com",
  projectId: "ca-site-debc4",
  storageBucket: "ca-site-debc4.appspot.com",
  messagingSenderId: "205118559461",
  appId: "1:205118559461:web:46a3b04baf5a2d7353300c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export {auth}