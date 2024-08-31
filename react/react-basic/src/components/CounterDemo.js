import React, { useState } from "react";

const CounterDemo = () => {
  var [count, setCount] = useState(0);
  const updateCount = () => {
    //     setCount(count + 1);
    //=========================
    setCount((count) => count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => updateCount()}>update</button>
    </div>
  );
};

export default CounterDemo;
