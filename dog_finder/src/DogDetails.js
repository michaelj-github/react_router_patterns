import React from 'react';
import './DogDetails.css';
import { useParams, Link, Redirect } from 'react-router-dom';
import uuid from "uuid";

const DogDetails = ({dogs}) => {
    const {name} = useParams();
    const theDog = dogs.find(d => d.name.toLowerCase() === name)

    if (!theDog) return <Redirect to="/dogs"/>

    return (
        <div className="DogDetails"> 
          <img src={theDog.src} alt={theDog.name} />
        <div className="DogDetails-name">
          <h1>{theDog.name}</h1>
        </div>
          <p>{theDog.name} is {theDog.age} years old</p>
        <div className="DogDetails-facts">
        <ul>
          {theDog.facts.map((fact) => (
            <li key={uuid()}>{fact}</li>
          ))}
        </ul>
        </div>
          <Link to="/dogs">Home</Link>
        </div>
    )

}

export default DogDetails;    