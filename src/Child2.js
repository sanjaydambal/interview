import React, { useState } from "react";


function Child2(){
    const [counter,setCounter] = useState(0)
    
    return(
        <div>
<p>Count:{counter}</p>
<button onClick={()=>setCounter(prevCount=>prevCount+1)}>Increment</button>
        </div>
    )

}
export default Child2;

