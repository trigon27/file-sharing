import {useRef} from 'react';
import './App.css';

function App() {
  const fileInputRef= useRef();
  const logo='https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg'
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
          />
        </div>

      </div>
      
    </div>
  );
}

export default App;
