import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp, getAnalytics } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBB48iGK6K1f8lLVrV9SK_gHel2PHHyLZo",
    authDomain: "eatify-d6b85.firebaseapp.com",
    projectId: "eatify-d6b85",
    storageBucket: "eatify-d6b85.appspot.com",
    messagingSenderId: "905021611645",
    appId: "1:905021611645:web:db69ac6a686f07e9f95b14",
    measurementId: "G-W0E13VSR35"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase;