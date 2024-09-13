import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Courses = () => {
  return (
    <div>
      <h1>Courses</h1>
      <p>niwhsdbkgc ; goudg;sjflgjfoGuakfsikhjg.gnhd bdkVG</p>
      {/* <NavBar /> */}
      <ul>
        <li>
          <NavLink to="ds">DataScience</NavLink>
        </li>
        <li>
          <NavLink to="fsd">FSD</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Courses;
