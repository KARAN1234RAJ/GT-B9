import React, { useState } from "react";
import Example1 from "./Example1";
import Example3 from "./Example3";

const ReactForm = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  console.log(text);

  return (
    <div>
      <h1>Form handling in react </h1>
      {/* <input
        type="text"
        placeholder="Enter text"
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <h1>InputData: {text}</h1>
      <input
        type="text"
        placeholder="Enter name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <h1>InputName: {name}</h1> */}
      {/* <Example1/>    */}
      <Example3/>
    </div>
  );
};

export default ReactForm;
