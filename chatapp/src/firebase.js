import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDXfyO55tIB-ZjmBal6g752z2KmQnb_548",
    authDomain: "chat-ui-d2db7.firebaseapp.com",
    projectId: "chat-ui-d2db7",
    storageBucket: "chat-ui-d2db7.appspot.com",
    messagingSenderId: "177510260547",
    appId: "1:177510260547:web:8dff7a7d69efeadc61d9f6"
  };
 
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()