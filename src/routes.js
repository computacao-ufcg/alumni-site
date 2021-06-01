import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import SeeMore from "./pages/SeeMore";
import Tutorial from "./pages/Tutorial";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/tutorial' component={Tutorial} />
        <Route path='/statistics' component={SeeMore} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
