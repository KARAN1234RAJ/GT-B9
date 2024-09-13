import React, { useContext } from "react";
import Component3 from "./Component3";
import { AgeContext } from "./AllContext";

const Component2 = () => {
  const {age,setAge} = useContext(AgeContext);
  return (
    <div>
     <h1>Component2: {age}</h1>
      <button onClick={() => setAge(age + 1)}>Increase Age</button>
      <Component3 />
    </div>
  );
};

export default Component2;
