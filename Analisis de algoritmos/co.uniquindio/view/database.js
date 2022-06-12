// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getFirestore, 
        collection ,
        addDoc,
        getDocs,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVHR9Nb629kloFS4W2u8ARfx3wsciPQK4",
  authDomain: "analisis-de-algoritmos.firebaseapp.com",
  projectId: "analisis-de-algoritmos",
  storageBucket: "analisis-de-algoritmos.appspot.com",
  messagingSenderId: "964461888731",
  appId: "1:964461888731:web:16fdb5ed178324430838fe",
  measurementId: "G-1YNT7HQ2RS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export const guardarRespuesta = (nombre,respuesta1,respuesta2) =>
    addDoc(collection(db,'Encuestas'),{nombre,respuesta1,respuesta2});

export const getRespuestas = () => getDocs(collection(db,'Encuestas'))

