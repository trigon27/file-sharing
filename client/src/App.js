import {useRef, useState, useEffect} from 'react';
import './App.css';
import { uploadfile } from './services/api';

function App() {
  const [file,setFile]=useState('');
  const fileInputRef= useRef();
  const logo='https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg'
  useEffect(()=>{
    const getImage=async ()=>{
      if(file){
        const data=new FormData();
        data.append("name",file.name);
        data.append("file",file);
        let response= await uploadfile(data);
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
        <img src={logo} alt="img" />
        <div className="wrapper">
          <h1>File sharing </h1>
          <p>upload your file here </p>
          <button onClick={()=>onUploadClick()}>upload</button>
          <input type="file" 
          ref={fileInputRef} 
          style={{display:'none'}}
          onChange={(e)=>setFile(e.target.files[0])}
          />
        </div>

      </div>
      
    </div>
  );
}

export default App;
