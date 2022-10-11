// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbNPWhrJhslvJetGDw816j5INSEvQEopI",
  authDomain: "preparcial-crud.firebaseapp.com",
  projectId: "preparcial-crud",
  storageBucket: "preparcial-crud.appspot.com",
  messagingSenderId: "192078008381",
  appId: "1:192078008381:web:82f0024f61e79a43ec1a54",
  measurementId: "G-J3NY4CZC21"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

