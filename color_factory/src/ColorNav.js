import React from "react";
import { Link } from "react-router-dom";
import uuid from "uuid";

const ColorNav = ({colors}) => {

  return (
    <div>
      <h1>Welcome to the color factory</h1>
      <p><Link to="/colors/new"><button>Add a color</button></Link></p>
      <h2>Pick a color</h2>
      <ul>
        {colors.map(colorName => (
          <li className="ColorLi" key={uuid()}>
            <Link to={`/colors/${colorName}`}>Show me some {colorName}</Link>
          </li>
          ))}
      </ul>
    </div>
  );
}

export default ColorNav;