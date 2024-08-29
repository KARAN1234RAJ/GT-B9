import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => increaseCount()}>Increase</button>
      <button onClick={() => resetCount()}>Reset</button>
      <button onClick={() => decreaseCount()}>Decrease</button>
    </>
  );
}

export default Counter;
