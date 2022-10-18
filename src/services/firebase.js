// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
/* import { getAnalytics } from "firebase/analytics"; */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXREiLp5dYc60C8ZrkP1hurQBOmRh-O5s",
  authDomain: "crud-libros-bf43c.firebaseapp.com",
  projectId: "crud-libros-bf43c",
  storageBucket: "crud-libros-bf43c.appspot.com",
  messagingSenderId: "557553198933",
  appId: "1:557553198933:web:a65904ea7d45ac715f71dc",
  measurementId: "G-ERK1DNP390"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

/* const analytics = getAnalytics(app); */