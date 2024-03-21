import React from 'react'
import Child from './Child'
import  { useState } from 'react'

const Parent = () => {
    const [value,setValue] = useState("Update my State");
  return (
    <div>
        <h1>{value}</h1>
      <Child setValue={setValue}  />
    </div>
  )
}

export default Parent
