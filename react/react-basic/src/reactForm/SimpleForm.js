import React, { useState } from "react";

const SimpleForm = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Form submitted! Name: ${name}`);
  };
  console.log(name);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {name}
    </div>
  );
};

export default SimpleForm;
