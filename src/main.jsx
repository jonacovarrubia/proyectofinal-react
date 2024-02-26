import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnm-IK4_K_fjjpeExxBPXaCJ1rTh7VpSg",
  authDomain: "proyectofinal-react-6558a.firebaseapp.com",
  projectId: "proyectofinal-react-6558a",
  storageBucket: "proyectofinal-react-6558a.appspot.com",
  messagingSenderId: "157076925573",
  appId: "1:157076925573:web:443a5c13b9c2965a5d4dec"
};

initializeApp(firebaseConfig); 


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
