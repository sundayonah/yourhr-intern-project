// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

export { auth, provider, storage, db };
// export default db;

// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);
// const storage = getStorage(app);
// export { db, auth, storage };

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getStorage } from "firebase/storage";

// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import "firebase/compat/storage";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAOciSAUGNniIJaXSuyxY6gCMvcZI2RaiE",
//   authDomain: "hr-intern-project.firebaseapp.com",
//   projectId: "hr-intern-project",
//   storageBucket: "hr-intern-project.appspot.com",
//   messagingSenderId: "552866664186",
//   appId: "1:552866664186:web:d48f04bc7e768bf7df4343",
//   measurementId: "G-X5SDJXSMDM",
// };

// // Initialize Firebase
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebaseApp.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebaseApp.storage();

// export { auth, provider, storage };
// export default db;
