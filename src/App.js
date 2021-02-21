import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div>
    <Router>
      <Switch>
        <Route exact path='/' render={()=> <Redirect to="/home"/>} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
