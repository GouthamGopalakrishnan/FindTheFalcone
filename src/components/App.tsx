import React from 'react';
import {
  HashRouter,
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import IntroPage from './IntroPage';
import Selection from './Selection';
import FinishPage from './FinishPage';

function App() {
  return (
    <HashRouter basename="/">
      <div className="App-main">

        <Switch>
          <Route path="/" exact>
            <IntroPage />
          </Route>
          <Route path="/FindFalcone" exact>
            <Selection />
          </Route>
          <Route path="/FindFalcon/result">
            <FinishPage />
          </Route>
        </Switch>
      </div>
    </HashRouter>

  );
}
export default App;
