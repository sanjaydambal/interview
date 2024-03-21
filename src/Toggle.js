import React from 'react'
import { useState } from'react'
const Toggle = () => {
    const [isHidden,setIsHidden] = useState(true);
    const [color,setColor] = useState('red');
    const handleToggle = () => {
        setIsHidden(!isHidden)
    }
    const toggleColor = () => {
        setColor(color ==='red'? 'blue' :'red')
    }
  return (
    <>
      <button onClick = {handleToggle}> Toggle Element</button>
      {!isHidden && <div>Toggling element</div>}
      <button onClick = {toggleColor}> Change Color</button>
      <h1 style={{color:color}}>Hi my name is sanjay</h1>
    </>
  )
}

export default Toggle
