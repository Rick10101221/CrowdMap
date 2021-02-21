import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Home } from './pages/Home';
import { MainMap } from './pages/MainMap';
import SimpleMap from './pages/SimpleMap';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' render={()=> <Redirect to="/home"/>} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/map' component={MainMap} />
        <Route exact path='/heatmap' component={SimpleMap}/>
      </Switch>
    </Router>
  );
}

export default App;
