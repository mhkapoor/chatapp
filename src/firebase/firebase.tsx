import { initializeApp } from "firebase/app";
import * as Auth from 'firebase/auth';
import * as fireStore from  'firebase/firestore';
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbZ8npwnNCGoygNKEIw6XbFvzekTpt2Gg",
    authDomain: "educational-5d657.firebaseapp.com",
    projectId: "educational-5d657",
    storageBucket: "educational-5d657.appspot.com",
    messagingSenderId: "431666412885",
    appId: "1:431666412885:web:52901923dfb1f7d56bc3dc",
    measurementId: "G-VX0XL6K6JP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = fireStore.getFirestore(app);

// firebase.firestore().settings({
//     timestampsInSnapshots: true
//   })
  
// export const myFirebase = firebase
export const dbFirestore = fireStore;
export const firebaseAuth = Auth;
export const storage = getStorage(app);

// export const myStorage = firebase.storage()