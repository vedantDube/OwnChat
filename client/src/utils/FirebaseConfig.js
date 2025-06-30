import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUoUBdIDdOUcC_TSvzvA1YTsRzdGtu0Hs",
  authDomain: "ownchat-c471e.firebaseapp.com",
  projectId: "ownchat-c471e",
  storageBucket: "ownchat-c471e.firebasestorage.app",
  messagingSenderId: "264386755761",
  appId: "1:264386755761:web:e9526958ec9abe5c29b690",
  measurementId: "G-WTCNFRJR1P"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);