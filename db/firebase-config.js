import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyVaDolJmiFo84vCKABxKJ4-xFiLR1sM8",
  authDomain: "cornalia-2023.firebaseapp.com",
  projectId: "cornalia-2023",
  storageBucket: "cornalia-2023.appspot.com",
  messagingSenderId: "998143672631",
  appId: "1:998143672631:web:9f69eb74da007491eb9ab2"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore (app);
export default db;