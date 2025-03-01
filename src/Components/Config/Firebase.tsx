import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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
const storage = getStorage(app);
const firestore = getFirestore(app);

const fetchFromFirestore = async (): Promise<any[]> => {
  try {
    const productsCollection = collection(firestore, 'products');
    const productSnapshot = await getDocs(productsCollection);
    const productList = productSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("Fetched products from Firestore:", productList);
    return productList;
  } catch (error) {
    console.error("Error fetching products from Firestore:", error);
    return [];
  }
};

const handleSignIn = async () => {
  try {
    await signInWithPopup(auth, provider);
    console.log("User signed in successfully");
  } catch (error) {
    console.error("Error signing in:", error);
    alert(error);
  }
};

export {
  auth,
  provider,
  storage,
  firestore,
  fetchFromFirestore,
  handleSignIn
};
