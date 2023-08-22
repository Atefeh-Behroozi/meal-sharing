import React from 'react';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;

  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={i} className="star">★</span>);
  }
  if (halfStar) {
    stars.push(<span key="half" className="star">½</span>);
  }

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;