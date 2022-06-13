// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getFirestore, 
        collection ,
        addDoc,
        getDocs,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDRptiiscxqAVDYEUNA47rNpMd4C1MZYEY",
  authDomain: "analisis-de-algoritmos-cc10a.firebaseapp.com",
  projectId: "analisis-de-algoritmos-cc10a",
  storageBucket: "analisis-de-algoritmos-cc10a.appspot.com",
  messagingSenderId: "671520544494",
  appId: "1:671520544494:web:adf711fb6ad3082b73c5ff",
  measurementId: "G-7K1LTXMBNM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export const guardarRespuesta = (nombre,respuesta1,respuesta2,respuesta3,respuesta4,respuesta5) =>
    addDoc(collection(db,'Encuestas'),{nombre,respuesta1,respuesta2,respuesta3,respuesta4,respuesta5});

export const getRespuestas = () => getDocs(collection(db,'Encuestas'))

