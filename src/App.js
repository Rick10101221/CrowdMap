import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Home } from './pages/Home';
import { MainMap } from './pages/MainMap';
import { SecondaryMap } from './pages/SecondaryMap';

function App() {

  const [density, setDensity] = useState("spacious");

  return (
    <Router>
      <Switch>
        <Route exact path='/' render={()=> <Redirect to="/home"/>} />
        <Route exact path='/home' component={Home} />
        {/*<Route exact path='/map' component={MainMap} />*/}
        {/*<Route exact path='/live_map' component={SecondaryMap} />*/}
        <Route exact path='/map' ><MainMap setter={setDensity} density={density}/></Route>
        <Route exact path='/live_map' ><SecondaryMap density={density}/></Route>
      </Switch>
    </Router>
  );
}

export default App;
