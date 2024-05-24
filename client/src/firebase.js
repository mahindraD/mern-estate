// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-64fd4.firebaseapp.com",
  projectId: "mern-estate-64fd4",
  storageBucket: "mern-estate-64fd4.appspot.com",
  messagingSenderId: "663486362969",
  appId: "1:663486362969:web:4a6817cbb0db691f22c848"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);