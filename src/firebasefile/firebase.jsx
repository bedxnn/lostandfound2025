import { 
  getAuth, 
  GoogleAuthProvider, 
  OAuthProvider 
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFSXFFxno1ONnpPlR50F7-HOZG7G7mVvg",
  authDomain: "lostandfound-390f4.firebaseapp.com",
  projectId: "lostandfound-390f4",
  storageBucket: "lostandfound-390f4.firebasestorage.app",
  messagingSenderId: "674486860650",
  appId: "1:674486860650:web:d8548294661f4150554313",
  measurementId: "G-VZTD4GTV0M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const microsoftProvider = new OAuthProvider("microsoft.com");