import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./component/HomePage/HomePage";
import MealsList from "./component/MealsList/MealsList"; 
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Review from "./component/Review/Review";
import ReviewForm from "./component/ReviewForm/ReviewForm";
import MealInformation from "./component/MealInformation/MealInformation";
import Meal from "./component/Meal/Meal";


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

        <Route exact path="/:id" >
          <Meal/>
        </Route>

        <Route exact path="/meals/:id" >
          <MealInformation />
        </Route>

        

        <Route exact path="/meals/:id/reviews/add-reviews">
          <Review />
        </Route>

        <Route exact path="/meals/:id/reviews">
          <ReviewForm />
        </Route>

        </Switch>
      
     <Footer />
    </Router>
  );
}
export default App;