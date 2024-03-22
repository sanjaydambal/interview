import React from 'react'

const Sum = () => {
    const [num1, setNum1] = React.useState(0);
    const [num2,setNum2] = React.useState(0);
    const [sum,setSum] = React.useState(0);
  return (
    <div>
      <input type='' value={num1} onChange={(e)=>setNum1(+e.target.value)}/>
      <input type='' value={num2} onChange={(e) => setNum2(+e.target.value)}/>
      <button onClick={()=>setSum(num1+num2)}> Add </button>
      <p>Sum: {sum || ""}</p>
    </div>
  )
}

export default Sum
