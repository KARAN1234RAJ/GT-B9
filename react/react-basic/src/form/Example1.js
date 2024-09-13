import React, { useState } from "react";

const Example1 = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  return (
    <div>
      <h1> Multi State</h1>
      <form>
        Name:
        <input
          type="text"
          value={data.name}
          onChange={(e) =>
            setData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <br />
        <br />
        Email:
        <input
          type="email"
          value={data.email}
          onChange={(e) =>
            setData((prev) => ({ ...prev, emil: e.target.value }))
          }
        />
        <br />
        <br />
        Password:
        <input
          type="password"
          value={data.password}
          onChange={(e) =>
            setData((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
        <p>{data.name}</p>
        <p>{data.email}</p>
        <p>{data.name}</p>
      </form>
    </div>
  );
};

export default Example1;
