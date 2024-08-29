import React, { useState } from "react";

const ShowHide = () => {
  const [isDisplay, setIsDisplay] = useState("block");
  const [btnName, setBtnName] = useState("Hide");
  const [bgColor, setBgColor] = useState(true);

  const handleToggle = () => {
    setIsDisplay(isDisplay === "block" ? "none" : "block");
    setBtnName(btnName === "Show" ? "Hide" : "Show");
    setBgColor(!bgColor);
  };
  return (
    <div style={{ background: bgColor ? "pink" : "blue" }}>
      <h1 style={{ display: `${isDisplay}` }}>GrowTech</h1>
      <button onClick={() => handleToggle()}>{btnName}</button>
    </div>
  );
};

export default ShowHide;
