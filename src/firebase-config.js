import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAu7AmhxWAW4oHgl-3Db4S7c6_M9t2qejQ",
    authDomain: "to-do-5c0fd.firebaseapp.com",
    projectId: "to-do-5c0fd",
    storageBucket: "to-do-5c0fd.appspot.com",
    messagingSenderId: "112621796246",
    appId: "1:112621796246:web:befad8ca25e021a4087bb7",
    measurementId: "G-7KVXK5W0NV"
  };
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);