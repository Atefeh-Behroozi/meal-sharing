import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ReviewForm.css';

const ReviewForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [stars, setStars] = useState(5);
    const [id, setId] = useState("");
    const { id: mealId} = useParams();

    const [meals, setMeals] = useState([]);

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const reviewInfo = {
            title,
            description,
            meal_id: id,
            stars,
            created_date: formattedDate
        };

        try {
            const config = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(reviewInfo)
            };

            const API = "/api/add-reviews";
            const res = await fetch (API, config);

            if (res.ok) {
                alert("Review added");
            } else {
                alert("Review has not been added");
            }
        } catch (err) {
            console.error(err);
        }

        setTitle(""),
        setDescription("");
        setStars(5);
        setId("");
    };
    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await fetch("/api/meals");
                if (response.ok) {
                    const data = await response.json();
                    setMeals(data);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchMeals();
    }, []);



    
    return (
        <div className="form-review-layout">
            <h3>Please add review</h3>
            <h4>Share your thoughts and help foodies choose!</h4>
            <form className="form-review" onSubmit={handleSubmit}>
            <select
                    className="input"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    required
                >
                    <option value="" disabled>
                        Select a Meal
                    </option>
                    {meals.map((meal) => (
                        <option key={meal.id} value={meal.id}>
                            {meal.title}
                        </option>
                    ))}
                </select>
                <input 
                    placeholder="Title*" 
                    className="input" 
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea 
                    placeholder="Description*" 
                    className="textarea" 
                    type="text" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows="8" 
                    cols="30"
                    required
                />
                <input 
                    placeholder="Stars*" 
                    className="input" 
                    type="number" 
                    value={stars}
                    onChange={(e) => setStars(e.target.value)}
                    required
                />
                <button className="add-review">Send Review</button>
            </form>
        </div>
    );
};

export default ReviewForm;