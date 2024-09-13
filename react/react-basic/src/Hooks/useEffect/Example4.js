import React, { useEffect, useState } from "react";

const Example4 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect");
   const CI= setInterval(()=>{
     console.log("Hi");
     
    },1000)
    return () => {
      console.log("Component Unmount");
      clearInterval(CI);
    };
  },[count]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default Example4;
