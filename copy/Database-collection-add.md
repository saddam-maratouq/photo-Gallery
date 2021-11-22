
// in this step add the time and creat collection and add the url to our fire cloud Database .... 


import { useState, useEffect } from 'react'; 

import { projectStorge , projectFirestore , timestamp} from '../Firebase/config' 



const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references 

    const storageRef = projectStorge.ref(file.name);
    const collectionRef = projectFirestore.collection('images'); // methode .collection
    
    storageRef.put(file).on('state_changed', (snap) => { //snap obj  && put on methode query 

      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100; 
      setProgress(percentage);

    }, (err) => {
      setError(err);
      
    }, async () => {
      const url = await storageRef.getDownloadURL(); // getDowloadURL methode inside firebase aysnc 
      const createdAt = timestamp(); 
      collectionRef.add({ url, createdAt })
      setUrl(url); 
    }); 
    
  }, [file]);
 
  return { progress , url, error };
}

export default useStorage;