import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./global.css";

import Home from "./pages/Home";
import TutorialPage from "./pages/Tutorial";
import SeeMorePage from "./pages/SeeMore";

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/tutorial' exact component={TutorialPage} />
          <Route path='/statistics' exact component={SeeMorePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
