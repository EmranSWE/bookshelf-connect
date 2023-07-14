import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDMBym0QgbUGndOR3wv2ljOmRlvXJboxtg",
  authDomain: "bookshelf-connect.firebaseapp.com",
  projectId: "bookshelf-connect",
  storageBucket: "bookshelf-connect.appspot.com",
  messagingSenderId: "844057286566",
  appId: "1:844057286566:web:5cb0c4aecd9c27c20f2167",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
