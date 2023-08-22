import React, { useState, useEffect } from 'react';
import Meal from '../Meal/Meal'; 
import './MealsList.css';

const MealsList = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/meals') 
      .then(response => response.json())
      .then(data => setMeals(data))
      .catch(error => console.error('Error fetching meals:', error.message));
  }, []);

  return (
    <div className="meals-list">
      <h1>Meal Sharing</h1>
      <div className="meal-grid">
        {meals.map(meal => (
          <Meal key={meal.id} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default MealsList;
