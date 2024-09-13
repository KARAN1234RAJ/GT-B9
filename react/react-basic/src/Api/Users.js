import React, { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    fetch(url).then((response) =>
      response.json().then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
    );
  }, []);
  console.log(users);
  const postUser = async () => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Karan",
        email: "raj@gmail.com",
        id:101,
      }),
    });
    const result = await response.json();
    setUsers([...users, result]);
    console.log("user added");
  };
  const user = users.map((user) => {
    return (
      <div key={user.id}>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    );
  });
  return (
    <div>
      {isLoading ? (
        <h1>Loading......</h1>
      ) : (
        <>
          {user}
          <button onClick={() => postUser()}>Add User</button>
        </>
      )}
    </div>
  );
};

export default Users;
