import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./global.css";

import Home from "./pages/Home";
import TutorialPage from "./pages/Tutorial";

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/tutorial' exact component={TutorialPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
