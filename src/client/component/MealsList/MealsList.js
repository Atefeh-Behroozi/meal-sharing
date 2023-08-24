import React, { useState, useEffect } from 'react';
import Meal from '../Meal/Meal'; 
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
    <div className="meals-list">
        {isLoading ? (
        <p>Loading...</p>
      ) : (
      <div className="meal-grid">
        {meals.map(meal => (
          <Meal key={meal.id} meal={meal} />
        ))}
      </div>
       )}
    </div>
    
  );
};

export default MealsList;
