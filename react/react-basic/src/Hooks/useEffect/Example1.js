import React, { useEffect, useState } from "react";

const Example1 = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  useEffect(() => {
    console.log("UseEffect");
  },[]);
  return (
    <div>
      <p>Count: {count}</p>
      <p>Number: {number}</p>
      <button onClick={() => setCount((count) => count + 1)}>
        IncreaseCount
      </button>
      <button onClick={() => setNumber((number) => number + 1)}>
        IncreaseNumber
      </button>
    </div>
  );
};

export default Example1;
