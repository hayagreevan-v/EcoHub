// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjToIub_kOd6334ksEabRIUiN_UtPXtTw",
  authDomain: "fir-7d9ee.firebaseapp.com",
  databaseURL: "https://fir-7d9ee-default-rtdb.firebaseio.com",
  projectId: "fir-7d9ee",
  storageBucket: "fir-7d9ee.appspot.com",
  messagingSenderId: "493771331329",
  appId: "1:493771331329:web:bfc2182cd7cc18ef40ed00",
  measurementId: "G-8B04P7MD0P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);