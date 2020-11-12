import React from "react";
import {   
  BrowserRouter, 
  Switch, 
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Confirmation from "./pages/Confirmation";




class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
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
      </BrowserRouter>
    );
  }
}

export default App;
