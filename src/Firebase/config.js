// To connect our App with backend firebase 


import * as firebase from 'firebase/app'
import  'firebase/firestore'
import 'firebase/storage'

// Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyCDKAPON0iNz_NrZMG98iN7FebS0F1X2bE",
    authDomain: "sq-photo-gallery.firebaseapp.com",
    projectId: "sq-photo-gallery",
    storageBucket: "sq-photo-gallery.appspot.com",
    messagingSenderId: "645585633477",
    appId: "1:645585633477:web:6b9e95b793828b1cccf0ac"
  };

  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   const projectStorge = firebase.storage();
   const projectFirestore = firebase.firestore();


   export { projectStorge, projectFirestore }