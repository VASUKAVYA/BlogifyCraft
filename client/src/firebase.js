// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mvasu-blog.firebaseapp.com",
  projectId: "mvasu-blog",
  storageBucket: "mvasu-blog.appspot.com",
  messagingSenderId: "75062416280",
  appId: "1:75062416280:web:9ce8352ac3408eca6611ed"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);