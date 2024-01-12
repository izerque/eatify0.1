import firebase from "firebase/compat/app";
import 'firebase/compat/database';


const firebaseConfig = {
    apiKey: "AIzaSyBB48iGK6K1f8lLVrV9SK_gHel2PHHyLZo",
    authDomain: "eatify-d6b85.firebaseapp.com",
    projectId: "eatify-d6b85",
    storageBucket: "eatify-d6b85.appspot.com",
    messagingSenderId: "905021611645",
    appId: "1:905021611645:web:db69ac6a686f07e9f95b14",
    measurementId: "G-W0E13VSR35"
};


firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const usersRef = database.ref('users');

export default firebase;

