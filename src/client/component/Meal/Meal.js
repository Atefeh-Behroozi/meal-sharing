import React from 'react';
import './Meal.css'; 

const Meal = ({ title, description, price, reviews }) => {
  return (
    
    <div className="meal-card">
      <h3 className="meal-title">{title}</h3>
      <div className="meal-review">
        <span>({reviews} Reviews)</span>
      </div>
      <p className="meal-description"> {description}</p>
      
      <p className="meal-price"> {price} €</p>
     
      
    </div>
  );
};

export default Meal;
