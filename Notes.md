// before start the project we connect firebase with App like this : 

1- first of all copy the script tag from firebase web site 

2- npm i fire base then creat a config file inside fire base folder 

3- paste the script inside config file then write this line to catch the services  from firebase 

import * as firebase from 'firebase/app' //before  **important** in new vervison of firebase this rule of 3 line changed ....
   
    // before version 9 

import firebase from 'firebase/app' 

import  'firebase/firestore'

import 'firebase/storage'   


// After version 9 

import firebase from 'firebase/compat/app';  

import 'firebase/compat/firestore'; 

import 'firebase/compat/storage' 


---

 firebase.initializeApp(firebaseConfig);

   const projectStorge = firebase.storage();
   const projectFirestore = firebase.firestore();

   export { projectStorge, projectFirestore } 


--- 

  // when use input type file this way to can acces the file either image or video or mp3 ( *important* )

 // let selcted = e.target.files[0]  



// Uploed form in line 8/18 
we use include methode to check string than string and its back true or false 

*includes() returns true if a string contains a specified string.*  (*very usefull and important*)

**Exampel**  in this app 

const types =["image/jpeg","image/png"]

   if (selcted && types.includes(selcted.type))   true && ?? 

.type inside the file type from selcted 

if the same string includes back true anything else back false  




