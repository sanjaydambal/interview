import React from 'react'

const Child = ({setValue}) => {
  return (
    <div>
      <button onClick = {() => setValue('Parent Is Updated')}>Update Parent</button>
    </div>
  )
}

export default Child
