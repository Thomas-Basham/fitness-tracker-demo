// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fitness-tracker-b00d6.firebaseapp.com",
  projectId: "fitness-tracker-b00d6",
  storageBucket: "fitness-tracker-b00d6.appspot.com",
  messagingSenderId: "788031240857",
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: "G-ZKWHYS63YD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Auth
export const auth = getAuth(app);

export default db;
