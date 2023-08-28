import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Meal from '../Meal/Meal';
import ReservationForm from '../ReservationForm/ReservationForm';
import "./MealInformation.css";

const MealInformation = () => {
    const { id } = useParams();

    const [meal, setMeal] = useState([]);
    const [error, setError] = useState("");
    const [avaliableReservation, setAvaliableReservation] = useState("");

    const fetchMealById = async (id) => {
        try {
            const API = `/api/meals/${id}`;
            const data = await fetch(API);
            const result = await data.json();
            if (data.status === 200) {
                setMeal(...result);
            } else if (data.status === 404) {
                setError(result.error);
            }
        } catch (error) {
            console.error();
        }
    };

    const fetchAvaliableReservation = async (id) => {
        try {
            const API = `/api/meals/reservations/${id}`;
            const data = await fetch(API);
            const result = await data.json();
            const { max_reservations, reservated } = result;
            const countAvaliable = max_reservations - reservated;
            setAvaliableReservation(countAvaliable);
        } catch (error) {
            console.error();
        }
    }

    useEffect(() => {
        fetchAvaliableReservation(id);
        fetchMealById(id);
    }, [id]);

    return (
        <div className="meal-info">
            
                    <div className="meal-discription">
                        <Meal 
                            title={ meal.title}
                            img= {meal.img}
                            description={meal.description}
                            price={meal.price}
                        />
                        
                    </div>


                        <ReservationForm id={id}/> 
                
        </div>
    );
};

export default MealInformation;