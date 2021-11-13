import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPOy28MRP0a3-u7kMV_hT1TYT7bql4P00",
  authDomain: "statistics-app-c8002.firebaseapp.com",
  projectId: "statistics-app-c8002",
  storageBucket: "statistics-app-c8002.appspot.com",
  messagingSenderId: "664193077056",
  appId: "1:664193077056:web:5d6838da428deae2e1b4a5",
  measurementId: "G-N7SQYPFM61",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
