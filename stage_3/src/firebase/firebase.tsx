import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBAnnT6OuiWj5LDrJm3SQd9TN6vGLcG4vU",
  authDomain: "hng-s3-picture-gallery.firebaseapp.com",
  projectId: "hng-s3-picture-gallery",
  storageBucket: "hng-s3-picture-gallery.appspot.com",
  messagingSenderId: "879744078011",
  appId: "1:879744078011:web:269a63a9546e739b80d99e",
  measurementId: "G-ZTQR3KMXN3"
};

firebase.initializeApp(firebaseConfig); 
export const auth = firebase.auth();
export default firebase;