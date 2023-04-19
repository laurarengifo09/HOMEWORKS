import {getAuth} from 'firebase-auth';
import "firebase/firestore";
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDqJeTV9SawKB07gNtdmcdHU6JNUITgOvk",
    authDomain: "react-37d0a.firebaseapp.com",
    projectId: "react-37d0a",
    storageBucket: "react-37d0a.appspot.com",
    messagingSenderId: "837862113112",
    appId: "1:837862113112:web:5dcb13b0435d8a975f6f2d",
    measurementId: "G-HLZJ09EV4J"
  };


 firebase.initializeApp(firebaseConfig);
 const db= firebase.firestore();
 const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

 export {db, GoogleAuthProvider, firebase}
  