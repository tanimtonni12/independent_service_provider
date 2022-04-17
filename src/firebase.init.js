// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDyQ71C0D8xAHiwnuJvH2-1NErdvYtwUpM",
    authDomain: "photography-service-provider.firebaseapp.com",
    projectId: "photography-service-provider",
    storageBucket: "photography-service-provider.appspot.com",
    messagingSenderId: "135135783518",
    appId: "1:135135783518:web:4716a34fa5580418c1e2cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;