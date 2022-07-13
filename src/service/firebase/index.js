import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBxAdMuFUrdgBUF1vnWhZ65zXc5Wf86SBw",
  authDomain: "marcuscymbalstest.firebaseapp.com",
  projectId: "marcuscymbalstest",
  storageBucket: "marcuscymbalstest.appspot.com",
  messagingSenderId: "103824996303",
  appId: "1:103824996303:web:e94b70da53f1fdef23c4ba"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)