// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAUdWnApggfSPXmdydHk11VH5J5G0qGHmc",
//   authDomain: "fg-900.firebaseapp.com",
//   projectId: "fg-900",
//   storageBucket: "fg-900.appspot.com",
//   messagingSenderId: "638705337573",
//   appId: "1:638705337573:web:c7b5b97eb62a76705b400c"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);



import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAUdWnApggfSPXmdydHk11VH5J5G0qGHmc",
    authDomain: "fg-900.firebaseapp.com",
    projectId: "fg-900",
    storageBucket: "fg-900.appspot.com",
    messagingSenderId: "638705337573",
    appId: "1:638705337573:web:c7b5b97eb62a76705b400c"
  };
  

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
  export const firebase = {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
  };