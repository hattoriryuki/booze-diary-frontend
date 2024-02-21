import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDCJr6J0_M3huNLJt4IPaZ6W7eieY6HeMM",
  authDomain: "boozediary-b8016.firebaseapp.com",
  projectId: "boozediary-b8016",
  storageBucket: "boozediary-b8016.appspot.com",
  messagingSenderId: "344588115224",
  appId: "1:344588115224:web:eb22af937329eb5666d26d",
  measurementId: "G-QG1D2T286C",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
