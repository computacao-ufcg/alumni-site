import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './global.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* <Route path="" exact component={ } />
          <Route path="" exact component={ } /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
