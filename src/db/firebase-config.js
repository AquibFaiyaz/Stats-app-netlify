import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const {
  REACT_APP_API_KEY,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_PROJECT_ID,
  REACT_APP_STORAGE_BUCKET,
  REACT_APP_MESSEGING_SENDER_ID,
  REACT_APP_APP_ID,
  REACT_APP_MEASUREMENT_ID,
} = process.env;

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
