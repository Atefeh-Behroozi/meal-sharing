import React from 'react';
import './Meal.css'; 
import StarRating from './StarRating';

const Meal = ({ meal }) => {
  return (
    
    <div className="meal-card">
      <h3 className="meal-title">{meal.title}</h3>
      <div className="meal-review">
        <StarRating rating={meal.stars} />
        <span>({meal.reviews} Reviews)</span>
      </div>
      <p className="meal-description"> {meal.description}</p>
      <p className="text-body"> Location: {meal.location}</p>
      <p className="meal-price"> {meal.price} €</p>
     
      
    </div>
  );
};

export default Meal;
