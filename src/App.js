import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './global.css';

import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={ Home } />
          {/* <Route path="/tutorial" exact component={ } /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
