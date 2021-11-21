import React, {useEffect} from 'react' 
import useStorage from '../hooks/useStorge';





const  Progress =({file,setFile}) =>  {  

    const  { progress , url } = useStorage(file)  

    // console.log(progress,url);  


    useEffect(() => { // to fix the pink  line showen 
        
      if (url) {  

        setFile(null) 
      }
    }, [url,setFile])  


        
    return ( 

        <div className='progress-bar'   style={{ width : progress  + '%' }}  >  </div> // progress is number 
      
    )
}

export default  Progress  ;