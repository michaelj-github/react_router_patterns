import React from "react";
import { Link, useParams, Redirect } from "react-router-dom";

const Color = ({colors}) => {
  const { color } = useParams();
  const theColor = colors.find(c => c === color)

  if (!theColor) return <Redirect to="/colors" />

  return (
    <div className="Color" style={{ backgroundColor: color }}>
      <p className="centered">
        <Link to="/">Home</Link>
      </p>
    </div>
  );
}

export default Color;