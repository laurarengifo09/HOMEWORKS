import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {

  apiKey: "AIzaSyDqJeTV9SawKB07gNtdmcdHU6JNUITgOvk",
  authDomain: "react-37d0a.firebaseapp.com",
  projectId: "react-37d0a",
  storageBucket: "react-37d0a.appspot.com",
  messagingSenderId: "837862113112",
  appId: "1:837862113112:web:bd7f89c57ef1c2895f6f2d",
  measurementId: "G-9P4EXL87B4"

};



const app = initializeApp(firebaseConfig);
const auth = getAuth();


//  const db= firebase.firestore();
//  const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

 export {app,auth}
  