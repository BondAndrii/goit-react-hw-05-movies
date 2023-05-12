import React, { useState, useEffect } from "react";

import { ReviewsItem } from "components/ReviewsItem/ReviewsItem";

import { api } from 'services/api';

import "./Reviews.css"

export const Reviews = ({forReviewsId}) => {
    const [reviews, setReviews] = useState([]); 
    console.log("in reviews", forReviewsId)
    useEffect(() => {       
        api.fetchReviews(forReviewsId).then(data => {setReviews(data)}).catch(error => console.log(error));    
  }, [forReviewsId]);
    return (
        <div className="Reviews">
            <ReviewsItem reviews={reviews} />          
        </div>
    )
}

