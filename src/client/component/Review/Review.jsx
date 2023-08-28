import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Review.css';

const Review = () => {
    const { id } = useParams();

    const [meal, setMeal] = useState("");
    const [reviews, setReview] = useState([]);
    const [error, setError] = useState(null);

    const getReview = async (id) => { 
        try {
            const API = `/api/reviews/${id}/meal-reviews`;
            const data = await fetch(API);
            const result = await data.json();
            setMeal(result.meal);
            setReview(result.reviews);
            setError(result.error);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getReview(id);
    }, [])

    return (
        <div className="meal-review-layout">
            { error ?
            <div className="error">{error}</div>
            : <div className="content"> <h3> {meal} </h3>
            {reviews ? 
            reviews.length > 0 && 
            reviews.map(review => 
                <div key={review.posted} className="review-card">
                    <div className="review-title">{review.title}</div>
                    <div>{review.description}</div>
                    <div>Score: {review.stars} / 5</div>
                </div>
            )
             : "Meal has no reviews"}
            </div>
            }
        </div>
    );
};

export default Review;