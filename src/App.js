import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import SimpleMap from './pages/SimpleMap';

function App() {
  return (
    <div>
    <Router>
      <Switch>
        <Route exact path='/' render={()=> <Redirect to="/home"/>} />
        <Route exact path='/home' component={SimpleMap}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
