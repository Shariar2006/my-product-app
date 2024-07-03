// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwb-MwMOMkEZanBpiEMRn1NzHdCU76iJQ",
  authDomain: "my-product-app-m360ict.firebaseapp.com",
  projectId: "my-product-app-m360ict",
  storageBucket: "my-product-app-m360ict.appspot.com",
  messagingSenderId: "49409067741",
  appId: "1:49409067741:web:1c9fe734c2e73e4cea2934"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;