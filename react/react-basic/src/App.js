import React from "react";

import "./app.css";
import Counter from "./components/Counter";
import CounterDemo from "./components/CounterDemo";
import Movie from "./components/Movie";
import MainComponent from "./conditionalRandering/MainComponent";
import Display from "./displayList/Display";
import Users from "./Api/Users";
import Component from "./reactCss/Component";
import ChildrenProps from "./childrenProps/ChildrenProps";

import Demo from "./revisionComponent/Demo";
import ReactForm from "./form/ReactForm";
import Hooks from "./Hooks/Hooks";
import FetchApi from "./Api/FetchApi";
import ClassComp from "./classComponent/ClassComp";
import { Route, Routes } from "react-router-dom";
import Home from "./reactRouter/Home";
import Courses from "./reactRouter/Courses";
import About from "./reactRouter/About";
import Contact from "./reactRouter/Contact";
import DataScience from "./reactRouter/DataScience";
import MERN from "./reactRouter/MERN";
import MainHome from "./reactRouter/MainHome";

const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      {/* <CounterDemo/> */}
      {/* <Movie/> */}
      {/* <MainComponent/> */}
      {/* <Display /> */}
      {/* <Users/> */}
      {/* <Component/> */}
      {/* <ChildrenProps /> */}
      {/* <Form/> */}
      {/* <Demo/> */}
      {/* <ReactForm /> */}
      {/* <Hooks/> */}
      {/* <FetchApi/> */}
      {/* <ClassComp/> */}
      <h1>ReactRouting </h1>
      <Routes>
        <Route path="/" element={<MainHome />}>
          <Route index element={<Home />} />
          <Route path="/course" element={<Courses />}>
            <Route path="ds" element={<DataScience />} />
            <Route path="fsd" element={<MERN />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
