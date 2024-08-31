import { useState } from "react";
import React from "react";

const CounterDemo = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          setCount(count + 1);
          setCount(count + 1);
          setCount(count + 1);
        
        }}
      >
        Click
      </button>
    </div>
  );
};

export default CounterDemo;
