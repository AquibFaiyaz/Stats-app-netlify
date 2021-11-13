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
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  projectId: "statistics-app-c8002",
  storageBucket: "statistics-app-c8002.appspot.com",
  messagingSenderId: REACT_APP_MESSEGING_SENDER_ID,
  appId: REACT_APP_APP_ID,
  measurementId: REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
