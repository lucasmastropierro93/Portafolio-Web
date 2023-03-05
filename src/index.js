import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaCHjY4Ii0Xl9UoIQ8uTE7W4XaEY1UXu8",
  authDomain: "portafolio-web-lucasmastro.firebaseapp.com",
  projectId: "portafolio-web-lucasmastro",
  storageBucket: "portafolio-web-lucasmastro.appspot.com",
  messagingSenderId: "414791591238",
  appId: "1:414791591238:web:d5ca3b6c59fb7bb601b147"
};

// Initialize Firebase
initializeApp(firebaseConfig);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
