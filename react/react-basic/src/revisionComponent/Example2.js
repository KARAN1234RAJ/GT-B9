import React from "react";

const Example2 = (props) => {
  let user = props.data.map((user) => {
    return (
      <div key={user.id}>
        <h2 >{user.age}</h2>
      </div>
    );
  });
  return <div>{user}</div>;
};

export default Example2;
