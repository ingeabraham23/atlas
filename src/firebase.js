import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyClk5iElwaXCodjFeXm8o7gKTlklHraC5w",
  authDomain: "atlas-b6348.firebaseapp.com",
  projectId: "atlas-b6348",
  storageBucket: "atlas-b6348.firebasestorage.app",
  messagingSenderId: "910073377410",
  appId: "1:910073377410:web:cc0efa3fd83a150083fa9b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);