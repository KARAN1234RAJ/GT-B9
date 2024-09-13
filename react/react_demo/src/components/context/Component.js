import React, { useContext } from "react";
import Component1 from "./Component1";
import { MyContext } from "./AllContext";

const Component = () => {
  const message = useContext(MyContext);
  return (
    <div>
      <h1>Comp: {message}</h1>
      <Component1 />
    </div>
  );
};

export default Component;
