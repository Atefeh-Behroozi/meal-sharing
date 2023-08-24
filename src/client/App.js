import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./component/HomePage/HomePage";
import MealsList from "./component/MealsList/MealsList"; 
import Meal from "./component/Meal/Meal"; 
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Review from "./component/Review/Review";
import ReviewForm from "./component/ReviewForm/ReviewForm";
import Reservation from "./component/Reservation/Reservation";

function App() {
  return (
    <Router>
      <Header />
      
      <Switch>
        <Route exact path="/">
        <HomePage />
        </Route>


        <Route exact path="/meals" >
          <MealsList/>
        </Route>
        <Route exact path="/meals/:id" >
          <Meal/>
        </Route>

        <Route exact path="/meals/:id/review">
          <Review />
        </Route>

        <Route exact path="/meals/:id/reviews/add-review">
          <ReviewForm />
        </Route>

        <Route exact path="/meals/:id/reservation">
          <Reservation />
        </Route>
        
      </Switch>
      
     <Footer />
    </Router>
  );
}
export default App;