// // Import the functions you need from the SDKs you need
// import firebase from 'firebase';
// import { initializeApp } from "firebase/app";
// import {getStorage} from "firebase/storage"
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDbA-Q3Zdmf6dj1qmE2Z5P6denw7SscC5Q",
//   authDomain: "whitescholar-66a1d.firebaseapp.com",
//   projectId: "whitescholar-66a1d",
//   storageBucket: "whitescholar-66a1d.appspot.com",
//   messagingSenderId: "613230756887",
//   appId: "1:613230756887:web:a0fe77b08c00dfa0a90852",
//   measurementId: "G-E7NB2GKJVC"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const storage = getStorage(app);

// export default firebase;


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbA-Q3Zdmf6dj1qmE2Z5P6denw7SscC5Q",
  authDomain: "whitescholar-66a1d.firebaseapp.com",
  databaseURL: "https://whitescholar-66a1d-default-rtdb.firebaseio.com",
  projectId: "whitescholar-66a1d",
  storageBucket: "whitescholar-66a1d.appspot.com",
  messagingSenderId: "613230756887",
  appId: "1:613230756887:web:a0fe77b08c00dfa0a90852",
  measurementId: "G-E7NB2GKJVC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);