import React from 'react'

const TwoWayDataBinding = () => {
    const [value,setValue] = React.useState('')
  return (
    <div>
      <input type = "text" placeholder='Enter your name' value = {value} onChange = {(e) =>setValue(e.target.value)} />
      <h1>{value}</h1>
    </div>
  )
}

export default TwoWayDataBinding
