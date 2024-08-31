import React, { useState } from 'react'
const Counter = () => {
     var [count,setCount]= useState(0) 
     const increment = () => {
          setCount(count+1)
          console.log("GrowTech");
          
     }
  return (
    <div>
     <h1>{count}</h1>
     <button onClick={()=>increment()}>Increase</button>
    </div>
  )
}

export default Counter