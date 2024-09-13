import React from "react";

const DisplayList = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const item = arr.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  return (
    <div>
      <h2>List of Numbers</h2>
      <ul>{item}</ul>
    </div>
  );
};

export default DisplayList;
