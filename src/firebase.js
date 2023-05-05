import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOciSAUGNniIJaXSuyxY6gCMvcZI2RaiE",
  authDomain: "hr-intern-project.firebaseapp.com",
  projectId: "hr-intern-project",
  storageBucket: "hr-intern-project.appspot.com",
  messagingSenderId: "552866664186",
  appId: "1:552866664186:web:d48f04bc7e768bf7df4343",
  measurementId: "G-X5SDJXSMDM",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

export { auth, provider, storage, db };
