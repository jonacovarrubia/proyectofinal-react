import { initializeApp } from 'firebase/app';
import { getFirestore as firestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBnm-IK4_K_fjjpeExxBPXaCJ1rTh7VpSg",
  authDomain: "proyectofinal-react-6558a.firebaseapp.com",
  projectId: "proyectofinal-react-6558a",
  storageBucket: "proyectofinal-react-6558a.appspot.com",
  messagingSenderId: "157076925573",
  appId: "1:157076925573:web:443a5c13b9c2965a5d4dec"
};


const app = initializeApp(firebaseConfig);

export { firestore };

