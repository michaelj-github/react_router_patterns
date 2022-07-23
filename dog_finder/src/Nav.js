import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"
import uuid from "uuid";

const Nav = ({dogs}) => {
  const theDogs = dogs.map(d => (
    <NavLink key={uuid()} to={`/dogs/${d.name.toLowerCase()}`} >{d.name}</NavLink>
  ));
  return (
    <nav className="NavBar">
      <NavLink exact to="/dogs">Home</NavLink>
      {theDogs}
    </nav>
  );
}

export default Nav;