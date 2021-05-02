import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
    //state hooks for file
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    //File Types
    const types = ['image/png','image/jpeg']
    //event handler
    const uploadHandler = (event)=>{
        //console.log('A file is chosen!');
        let selected = event.target.files[0];
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
        }else{
            setFile(null);
            setError('Please select a valid Image file only. [png,jpeg]');
        };
    }
    //DOM Output
    return ( 
        <React.Fragment>
            <form>
                <label>
                    <input type="file" onChange = {uploadHandler}/>
                    <span>+</span>
                </label>
                <div className="output">
                    {error && <div className= "error" >{error} </div>}
                    {file && <div>{file.name} </div>}
                    {file && <ProgressBar file = {file} setFile = {setFile}/>}
                </div>
            </form>
        </React.Fragment>
     );
}
 
export default UploadForm;