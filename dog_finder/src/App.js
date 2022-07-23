import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";
import Routes from "./Routes";

import whiskey from "./whiskey.jpeg";
import toby from "./toby.jpeg";
import duke from "./duke.jpeg";
import perry from "./perry.jpeg";

const App = ({dogs}) => {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogs={dogs} />
        <Routes dogs={dogs} />
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = {
dogs: [
    {
      name: "Whiskey",
      age: 2,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a great guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 5,
      src: duke,
      facts: [
        "Duke is really smart.",
        "Duke likes snow.",
        "Duke enjoys chasing cats."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Toby",
      age: 2,
      src: toby,
      facts: [
        "Toby believes that ball is life.",
        "Toby really likes walks.",
        "Toby will eat your shoes."
      ]
    }
  ]
}

export default App;