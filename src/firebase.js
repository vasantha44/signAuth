import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBj_2QGe8-BTBB-NXmmcSXTvfsT-cwAPJg",
    authDomain: "authentication-c4d20.firebaseapp.com",
    projectId: "authentication-c4d20",
    storageBucket: "authentication-c4d20.appspot.com",
    messagingSenderId: "963783397939",
    appId: "1:963783397939:web:2092df6872f1dda2f30946"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;
  