import React, { useState } from 'react'

const UploedForm = () => {

const [file,setFile] = useState(null) 
const [error,setError] = useState(null)

const types =["image/jpeg","image/png"]



const fileHandler = (e) => {

    let selceted = e.target.files[0]
   
    // console.log(selcted); 
  
    if (selceted && types.includes(selceted.type)) {
       
        setFile(selceted) 
        setError('') 
    }  

    else {
        setError(' please chouse image file : image/jpeg or image/png ')
        setFile(null)
    }

}



    return (
        
         <form >

         <input type="file"  placeholder='chouse the image file' onChange={fileHandler}  />  
         <div className='output'>   
          { error &&  <div className='error'> {error} </div> }      
          { file &&  <div className='error'> {file.name} </div> }      
              
         </div>

         </form> 
    
    )
}

export default UploedForm ;
