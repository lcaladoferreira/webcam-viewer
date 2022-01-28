

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsesHp0U2MOzoH3F8jFN24z-opmrQvFqo",
  authDomain: "capturar-imagem.firebaseapp.com",
  projectId: "capturar-imagem",
  storageBucket: "capturar-imagem.appspot.com",
  messagingSenderId: "926726215482",
  appId: "1:926726215482:web:e7b3cfa571bc1e35ede203",
  measurementId: "G-LLV7FZB9M8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

