// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCi0nPZMALYQCQ4hmWFJcTaaHI_cd0jm7M",
    authDomain: "alamano-1aaaf.firebaseapp.com",
    projectId: "alamano-1aaaf",
    storageBucket: "alamano-1aaaf.appspot.com",
    messagingSenderId: "364166225320",
    appId: "1:364166225320:web:5390c1d36172268351919d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;