import React from 'react'
import {useState} from 'react'
const errMsg = "Please enter valid Age"
const Array = () => {
    const [text,setText] = useState("");
    const [err,setErr] = useState(false)
const handleChange = (e) => {


    setText(e.target.value);
    if(e.target.value < 18){
        setErr(true);
    }else{
      setErr(false);
    }
}
  return (
    <div>
      <input type='text' value = {text} onChange = {handleChange}/>
      <div>{ err ? errMsg : null}</div>
    </div>
  )
}

export default Array
