import React, { useState } from "react";

const Example4 = (props) => {
  const [name, setName] = useState("Growtech");
  const [users, setUsers] = useState([]);
  console.log(props.data);

  const updateUser = () => {
    setName("Growtech Indore");
    const UserData=props.data;
    setUsers(UserData)
  };
console.log(users);

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => updateUser()}>updateName</button>
      <div>{users.map((user)=>{
        return<div key={user.id}>
          <h1>{user.id}</h1>
          <h1>{user.name}</h1>
        </div>
      })}</div>
    </div>
  );
};

export default Example4;
