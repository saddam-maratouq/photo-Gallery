import { useState } from "react"; 

import Progress from "./Progress.jsx";





const UploedForm = () => {
  
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);


  const types = ["image/jpeg", "image/png"];

  const fileHandler = (e) => {
    let selceted = e.target.files[0];

    // console.log(selcted);

    if (selceted && types.includes(selceted.type)) {
      setFile( selceted );
      setError("");
    } 
    
    else {
      setError(" please chouse image file : image/jpeg or image/png ");
      setFile(null);
    }
  };


  
  return ( 
  
      <form>
        <label>
          <input type="file" onChange={fileHandler} />
          <span> + </span>
        </label>

        <div className="output"> 

          {error && <div className="error"> {error} </div>}

          {file && <div className="error"> {file.name} </div>} 

          {file && <Progress file={file} setFile={setFile} />  } 
           
        </div> 

      </form> 
    
   
  );
};

export default UploedForm;
