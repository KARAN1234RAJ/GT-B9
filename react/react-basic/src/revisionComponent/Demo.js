import React from "react";
import Example1 from "./Example1";
import Example2 from "./Example2";
import Example3 from "./Example3";
import Example4 from "./Example4";


const Demo = () => {
  const name = ["Karan", "Rohit", "Divya", "Sumit", "Anshu"];
  const users = [
    {
      id: 1,
      name: "Karan",
      age: 25,
    },
    {
      id: 2,
      name: "Rohit",
      age: 23,
    },
    {
      id: 3,
      name: "Divya",
      age: 28,
    },
    {
      id: 4,
      name: "Sumit",
      age: 24,
    },
    {
      id: 5,
      name: "Anshu",
      age: 27,
    },
  ];
  return (
    <div>
      {/* <Example1 data={name} />
      <Example2 data={users} />
      <Example3 name="Karan">
        <Example1 data={name} />
        <h2>Hello World</h2>
        <p>This is a nested component.</p>
        <Example2 data={users} />
      </Example3> */}
      <Example4 data={users}/>
    </div>
  );
};

export default Demo;
