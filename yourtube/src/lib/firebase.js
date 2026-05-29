// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDff22yoAkVI6AzZUbNrFPRPjs2RBRSRJk",
  authDomain: "yourtube-11952.firebaseapp.com",
  projectId: "yourtube-11952",
  storageBucket: "yourtube-11952.firebasestorage.app",
  messagingSenderId: "218851045072",
  appId: "1:218851045072:web:28800ca05f5f44f93938d5",
  measurementId: "G-GK6GPT519F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
