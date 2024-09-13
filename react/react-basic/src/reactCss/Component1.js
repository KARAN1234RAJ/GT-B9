import React from "react";
import  Styles  from "./style1.module.css";
const Component1 = () => {
  return (
    <div>
      <h1 className={Styles.heading}>Component 1</h1>
      <p className={Styles.para}>I am a paragraph from component-1 </p>
    </div>
  );
};

export default Component1;
