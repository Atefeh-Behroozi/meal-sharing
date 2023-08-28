import React, { useState, useEffect } from 'react';
import Meal from '../Meal/Meal'; 
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import './MealsList.css';

const MealsList = () => {
  const API = "/api/meals";
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  const fetchMeals = async (url) => {
    try {
        const data = await fetch(url);
        const result = await data.json();
        setMeals(result);
        setIsLoading(false);
    } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
  };
  
  useEffect(() => {
    fetchMeals(API);
  }, []);

  return (
    <div className="container">
      <SearchBar />
      <div className="meals-list">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="meal-grid">
            {meals.map(meal => (
              
              <div key={meal.id}>
                <Link to={`/meals/${meal.id}`}>
                <Meal
                  title={meal.title}
                  image_url={meal.image_url}
                  description={meal.description}
                  price={meal.price} 
                 />
                </Link>
              </div>
            ))}
          </div>
        )}
       
      </div>
      
    </div>
  );
};

export default MealsList;