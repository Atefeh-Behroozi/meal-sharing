import React from 'react';
import StarRating from './StarRating';
import './Meal.css'; 

const Meal = ({ title, description, price, image_url, rating }) => {
  

  return (
    
    <div className="meal-card">
       <div className="info">
      
        <h4>{title}</h4>
      
      <div className="meal-image"><img src={image_url} alt={title} className="meal-image" /></div>
      <div className="meal-description"> {description}</div>
      <StarRating rating={rating} /> 
      <div className="meal-price"> {price} €</div>
  
      </div>
     
     </div>
  );
};
export default Meal;