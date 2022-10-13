import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAO0vKAyUgGrHYrq7LLsXjmTfhXX86hU40",
  authDomain: "lcnsm-b48f7.firebaseapp.com",
  projectId: "lcnsm-b48f7",
  storageBucket: "lcnsm-b48f7.appspot.com",
  messagingSenderId: "344439256635",
  appId: "1:344439256635:web:d1d99cc17c1bcabc50ce1e",
  measurementId: "G-JYHZ9CW3QE",
};

initializeApp(firebaseConfig);
export const analytics = getAnalytics();
