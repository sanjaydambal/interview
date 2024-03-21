import React from 'react'

const DisableAButton = () => {
    const [value, setValue] = React.useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        setValue('')
        
    }
  return (
    <div>
      <input type="text" value= {value} onChange = {(e) => setValue(e.target.value)} />
      <button disabled={!value} onSubmit={handleSubmit}>Submit</button>
      <h1>{value}</h1>
    </div>
  )
}

export default DisableAButton
