import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.congig";

const initializeFirebaseAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeFirebaseAuthentication;