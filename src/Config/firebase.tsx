import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3W-PBqfA_5f6PQytxOhgRvPCyGR0JXME",
  authDomain: "olx-clone-7fadb.firebaseapp.com",
  projectId: "olx-clone-7fadb",
  storageBucket: "olx-clone-7fadb.firebasestorage.app",
  messagingSenderId: "906165234170",
  appId: "1:906165234170:web:56daf638f4e294bb19dc43",
  measurementId: "G-PG81Q5KN89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
