
import './App.css';
import { useEffect, useState } from 'react';
import  InputField  from "./Components/InputField";

function App() {

  const [field,setField]=useState([]);
  
  useEffect(()=>{
    fetch('http://localhost:3030/getfields').then(res => res.json()).then(data=> setField(data))
  },[])
  return (
    <div className="App">

      <form>
        {
          field.map((field,index)=>(
            <InputField key={index} field={field} />
          ))
        }

        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
}

export default App;
