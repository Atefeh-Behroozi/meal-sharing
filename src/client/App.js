import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MealsList from "./component/MealsList/MealsList"; 

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <MealsList />
            
          </Route>
          <Route exact path="/lol">
            <p>lol</p>
          
          </Route>
        </Switch>
       
      </div>
    </Router>
  );
}

export default App;
