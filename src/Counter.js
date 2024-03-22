import React from 'react'

const Counter = () => {
    const [count, setCount] = React.useState(0)
    const increment = () => {
        setTimeout(()=>{
            setCount(prevCount => prevCount + 1)
        },1000)
    }
  return (
    <div>
        <h1>Count:{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick = {() => setCount(prevCount => prevCount - 1)}>Decrement </button>
      <button onClick = {() => setCount(0)}>Reset</button>
    </div>
  )
}

export default Counter
