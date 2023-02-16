import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAsanbcxqfqcGaCZ2IIUwtDZqyInRetrLA",
  authDomain: "discord-clone-45460.firebaseapp.com",
  projectId: "discord-clone-45460",
  storageBucket: "discord-clone-45460.appspot.com",
  messagingSenderId: "1052131619101",
  appId: "1:1052131619101:web:fe44e1b7dc2a1a847f31f4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
