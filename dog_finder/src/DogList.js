import React from "react";
import { Link } from "react-router-dom";
import './DogList.css';

const DogList = ({dogs}) => {
  return (
      <div className="DogList">
        {dogs.map(d => (
          <div key={d.name}>
            <img src={d.src} alt={d.name} />
            <h1>
              <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
            </h1>
          </div>
        ))}
      </div>
  );
}

export default DogList;