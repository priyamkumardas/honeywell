import React, { useState } from "react";

const InputField =({field, setdataFn})=>{
    const [input,setInput]=useState("");

    const setValue=(e)=>{
        //console.log(e)
        setdataFn(e)
    }
    return (
        <div>
            <label >{field.name}</label>
            <input type={field.type} name={field.name} id={field.name} onChange={setValue} />
        </div>
    )
}

export default InputField;