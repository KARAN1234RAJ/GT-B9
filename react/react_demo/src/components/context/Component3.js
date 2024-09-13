import React, { useContext } from "react";
// import { MyContext } from "./Component1";
// import { LastName } from "./Component1";
import { NameContext } from "./AllContext";
const Component3 = () => {
  // const message = useContext(MyContext);
  // const lName = useContext(LastName)
  const { name, setName } = useContext(NameContext);

  return (
    <div>
      <h1>Component3:{name}</h1>
      <button onClick={() => setName("GrowTech Indore")}>ChangeName</button>
    </div>
  );
};

export default Component3;
