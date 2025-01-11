// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiTwuaCgA90il-xYp_Pqt1d04BDA_4L5c",
  authDomain: "sharenotes-4c44e.firebaseapp.com",
  projectId: "sharenotes-4c44e",
  storageBucket: "sharenotes-4c44e.firebasestorage.app",
  messagingSenderId: "228618023860",
  appId: "1:228618023860:web:f822947c4f74808e5938e1",
  measurementId: "G-D930TGQWQ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)