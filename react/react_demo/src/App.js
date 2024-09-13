import React, { useState } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Component from "./components/context/Component";
import {
  MyContext,
  NameContext,
  AgeContext,
} from "./components/context/AllContext";
const App = () => {
  const [name, setName] = useState("GrowTech");
  const [age, setAge] = useState(25);
  return (
    <div>
      <h1>Hello World!</h1>
      {/* <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul> */}
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul> */}
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <MyContext.Provider value="I am using Context Api">
        <NameContext.Provider value={{ name, setName }}>
          <AgeContext.Provider value={{ age, setAge }}>
            <Component />
          </AgeContext.Provider>
        </NameContext.Provider>
      </MyContext.Provider>
    </div>
  );
};
export { MyContext, AgeContext, NameContext };
export default App;
