import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLSvxV5DuIsJSbup-76ZBrpvDulzigeIo",
  authDomain: "papelera-san-gerardo.firebaseapp.com",
  projectId: "papelera-san-gerardo",
  storageBucket: "papelera-san-gerardo.appspot.com",
  messagingSenderId: "1095775250382",
  appId: "1:1095775250382:web:9d41e33333a4a2d056ad9f"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
