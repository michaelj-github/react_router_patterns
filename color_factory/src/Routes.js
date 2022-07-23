import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import useLocalStorageState from './useLocalStorageState';

import ColorNav from "./ColorNav";
import NewColorForm from "./NewColorForm";
import Color from "./Color";

const Routes = () => {

  const INITIAL_COLORS = ["red", "green", 'blue']
  const [colors, setColors] = useLocalStorageState('colors', INITIAL_COLORS);

  const addColor = (newColor) => {
        setColors(colors => [newColor, ...colors]);
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/colors">
          <ColorNav colors={colors} />
        </Route>
        <Route exact path="/colors/new">
          <NewColorForm addColor={addColor} />
        </Route>
        <Route path="/colors/:color">
          <Color colors={colors}/>
        </Route>
        <Redirect to="/colors" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;