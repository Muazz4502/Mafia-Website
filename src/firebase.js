import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, push, onValue, onDisconnect, remove, update, off } from "firebase/database";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOvq0uk8BAFLAMdxkxS9c4HT_auQskIgo",
  authDomain: "mafia-game-76a11.firebaseapp.com",
  databaseURL: "https://mafia-game-76a11-default-rtdb.firebaseio.com",
  projectId: "mafia-game-76a11",
  storageBucket: "mafia-game-76a11.firebasestorage.app",
  messagingSenderId: "54653436715",
  appId: "1:54653436715:web:96c73590c206420b927b6e",
  measurementId: "G-BG79FEC1V5"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export { db, auth, ref, set, get, push, onValue, onDisconnect, remove, update, off, signInAnonymously };
