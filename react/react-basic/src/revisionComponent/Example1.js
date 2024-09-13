import React from "react";
const Example1 = (props) => {
  let name = props.data;
  let displayName = name.map((name, index) => {
    return <p key={index}>{name}</p>;
  });
  return (
    <div>
      <h1>This is Example 1</h1>
      <h2>{displayName}</h2>
    </div>
  );
};

export default Example1;
