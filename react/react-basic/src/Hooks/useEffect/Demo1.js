import React, { useEffect, useState } from "react";
const Demo1 = () => {
  const [count, sentCount] = useState(0);
  const [number, setNumber] = useState(10);
  useEffect(() => {
    console.log("useEffed No dependency");
  });
  useEffect(() => {
    console.log("useEffed Empty Dependency");
  }, []);
  useEffect(() => {
    console.log("useEffed count Dependency");
  }, [count]);
  useEffect(() => {
    console.log("useEffed number Dependency");
  }, [number]);

  return (
    <div>
      <h1> Count: {count}</h1>
      <h1>Number:{number}</h1>
      <button onClick={() => sentCount((count) => count + 1)}>
        Increase Count
      </button>
      <button onClick={() => setNumber((number) => number + 1)}>
        Increase number
      </button>
    </div>
  );
};

export default Demo1;
