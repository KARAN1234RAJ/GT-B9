import React, { useState } from "react";
import SimpleForm from "./SimpleForm";
import MultiFieldForm from "./MultiFieldForm";
import ControlledComponent from "./ControlledComponent";
import UncontrolledComponent from "./UncontrolledComponent";
import StateForm from "./StateForm";

const Form = () => {
  const [text, setText] = useState('');

  return (
    <div>
      {/* <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h1>{text}</h1>
      <button type="submit">Submit</button> */}
      {/* <SimpleForm /> */}
      {/* <MultiFieldForm /> */}
      {/* <ControlledComponent/> */}
      {/* <UncontrolledComponent/> */}
      <StateForm/>
    </div>
  );
};

export default Form;
