// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq0jbdWSTUz770H3i4CAM14HiGClERmKY",
  authDomain: "sahyatri-da7dc.firebaseapp.com",
  projectId: "sahyatri-da7dc",
  storageBucket: "sahyatri-da7dc.appspot.com",
  messagingSenderId: "195367734778",
  appId: "1:195367734778:web:8bfdd1c6d719096e5be843",
  measurementId: "G-MCPEC59NTR"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);


export { app };