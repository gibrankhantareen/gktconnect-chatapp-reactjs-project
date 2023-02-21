// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8LGJbUEf5aYvuevMlS-sMTXSlIpXgGRQ",
  authDomain: "gktconnect-react-chat.firebaseapp.com",
  projectId: "gktconnect-react-chat",
  storageBucket: "gktconnect-react-chat.appspot.com",
  messagingSenderId: "318715542469",
  appId: "1:318715542469:web:eddb85dd3662d117f229ac",
  measurementId: "G-TCER1GZCS6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);