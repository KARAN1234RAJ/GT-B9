import React, { useEffect, useState } from "react";

const Example3 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect");
    const eventHandler = () => console.log("Hi");
    document.addEventListener("click", eventHandler);
    return () => {
      // cleanup function
      console.log("Hello");

      document.removeEventListener("click", eventHandler);
    };
  });
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default Example3;
