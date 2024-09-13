import React, { useState } from "react";

const Example3 = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        UserName:
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, username: e.target.value }));
          }}
        />
        <br />
        <br />
        UserEmail:{" "}
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, email: e.target.value }));
          }}
        />
        <br />
        <br />
        Mobile:{" "}
        <input
          type="tel"
          placeholder="Mobile"
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, mobile: e.target.value }));
          }}
        />
        <br />
        <br />
        Password:{" "}
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, password: e.target.value }));
          }}
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
        <br />
        <br />
        <h3>Name:{formData.username}</h3>
        <h3>Email:{formData.email}</h3>
        <h3>Mobile:{formData.mobile}</h3>
        <h3>Password:{formData.password}</h3>
      </form>
    </div>
  );
};

export default Example3;
