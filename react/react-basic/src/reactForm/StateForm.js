import React, { useState } from "react";

const StateForm = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
  };
  return (
    <div>
      <form>
        Name:
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={(event) =>
            setValue((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <br />
        <br />
        email:
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={(event) =>
            setValue((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <br />
        <br />
        password:
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={(event) =>
            setValue((prev) => ({ ...prev, password: event.target.value }))
          }
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
        <h1>{value.name}</h1>
        <h1>{value.email}</h1>
        <h1>{value.password}</h1>
      </form>
    </div>
  );
};

export default StateForm;
