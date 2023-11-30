import {useRef, useState, useEffect} from 'react';
import './App.css';
import { uploadfile } from './services/api';

function App() {
  const [file,setFile]=useState('');
  const [result,setResult]=useState('');
  const fileInputRef= useRef();
  useEffect(()=>{
    const getImage=async ()=>{
      if(file){
        const data=new FormData();
        data.append("name",file.name);
        data.append("file",file);
        let response= await uploadfile(data);
        setResult(response.path);
      }
    }
    getImage()
  },[file])
  const onUploadClick=()=>{
    fileInputRef.current.click();
  }
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <h1>File sharing </h1>
          <p>upload your file here </p>
          <button onClick={()=>onUploadClick()}>upload</button>
          <input type="file" 
          ref={fileInputRef} 
          style={{display:'none'}}
          onChange={(e)=>setFile(e.target.files[0])}
          />
        <a href={result} >{result}</a>
        </div>
      </div>
      
    </div>
  );
}

export default App;
