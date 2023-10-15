// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-052x4JF6vy2mfjgNANTzLtWDDUn34W0",
  authDomain: "coffiee-store.firebaseapp.com",
  projectId: "coffiee-store",
  storageBucket: "coffiee-store.appspot.com",
  messagingSenderId: "314280466996",
  appId: "1:314280466996:web:4f5f70c9219898c735c861"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;