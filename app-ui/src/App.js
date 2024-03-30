
import './App.css';
import { useEffect, useState } from 'react';
import  InputField  from "./Components/InputField";
import axios from "axios";

function App() {

  const [field,setField]=useState([]);
  const [formEvnt, setformEnnt]=useState({});

  const setFormData = (e)=>{
    setformEnnt({...formEvnt,[e.target.name]:e.target.value});
  }

  const valueInput = (data)=>{
    //console.log(data);
    setFormData(data);
  }

  const formSubmit=(e)=>{
    e.preventDefault();
    fetch('http://localhost:3030/postData',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formEvnt)
    }).then(res=>{
      console.log(res)
    }).catch(err=>{ console.log(err)})
  }
  
  useEffect(()=>{
    fetch('http://localhost:3030/getfields').then(res => res.json()).then(data=> setField(data))
  },[])
  return (
    <div className="App">

      <form onSubmit={formSubmit}>
        {
          field.map((field,index)=>(
            <InputField key={index} field={field} setdataFn={valueInput} />
          ))
        }

        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
}

export default App;
