import React from "react";

const InputField =({field})=>{
    return (
        <div>
            <label >{field.name}</label>
            <input type={field.type} name={field.name} id={field.name} />
        </div>
    )
}

export default InputField;