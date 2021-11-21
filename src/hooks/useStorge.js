import { useState, useEffect } from 'react'; 

import { projectStorge} from '../Firebase/config' 



const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references 

    const storageRef = projectStorge.ref(file.name);
    
    
    storageRef.put(file).on('state_changed', (snap) => { //snap obj 

      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100; 
      setProgress(percentage);

    }, (err) => {
      setError(err);
      
    }, async () => {
      const url = await storageRef.getDownloadURL(); // getDowloadURL methode inside firebase aysnc 
      setUrl(url); 
    }); 
    
  }, [file]);
 
  return { progress , url, error };
}

export default useStorage;