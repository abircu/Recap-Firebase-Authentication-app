// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNoyvY1mg7_VoLBWwKLe-9L_2zXU50EXA",
  authDomain: "recap-firebase-app.firebaseapp.com",
  projectId: "recap-firebase-app",
  storageBucket: "recap-firebase-app.appspot.com",
  messagingSenderId: "622787919261",
  appId: "1:622787919261:web:4e56440ab886596f6d0374"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;