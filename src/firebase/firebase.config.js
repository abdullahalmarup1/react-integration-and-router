// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA8iXPxgMgWfEJoVkFENQ6UVlAbYvk7scQ",
    authDomain: "react-integration-and-router.firebaseapp.com",
    projectId: "react-integration-and-router",
    storageBucket: "react-integration-and-router.appspot.com",
    messagingSenderId: "297149107878",
    appId: "1:297149107878:web:703e485f6f5732d7f5ae67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;