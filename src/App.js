import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './history';
import Home from "./pages/Home";
import Confirmation from "./pages/Confirmation";




class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div>                  
          <Switch>
            <Route path="/confirmation">
              <Confirmation />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
