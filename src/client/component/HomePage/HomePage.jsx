import React, {useEffect} from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
    const API = "/api/meals";
   

    const fetchMeals = async (url) => {
        try {
          const data = await fetch(url);
          const result = await data.json();
          const featuredMeals = result.slice(0, 2);
          setMeals(featuredMeals);
        } catch (error) {
          console.error(error);
        }
      };

      useEffect(() => {
        fetchMeals(API);
      }, []);
    


  return (
   <div className="main">
      
        <div className="content">
        <h1>Welcome to Meal-Sharing</h1>
          <p className="intro">
            Sitting down and sharing a meal togethers combines two of 
            my favorite loves: <br /> eating great food and talking about greate
            food.
            </p>
       
              <Link to={"/meals"}>
              <button className="to-meals">Take me to meals </button>
                </Link>
    
        </div>
      
      
     
    </div>
     
  );
 
}

export default HomePage;
       