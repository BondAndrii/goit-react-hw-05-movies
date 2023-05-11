import React, { useState, useEffect } from "react";

import { ReviewsItem } from "components/ReviewsItem/ReviewsItem";

import { api } from 'services/api';

import "./Reviews.css"

export const Reviews = () => {
    const [reviews, setReviews] = useState([]);     
    useEffect(() => {       
        api.fetchReview().then(data => {setReviews(data)}).catch(error => console.log(error));    
  }, []);
    return (
        <div className="Reviews">
            <ReviewsItem reviews={reviews} />          
        </div>
    )
}

