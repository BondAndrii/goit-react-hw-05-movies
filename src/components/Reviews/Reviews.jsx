import React, { useState, useEffect } from "react";

import  ReviewsItem  from "components/ReviewsItem/ReviewsItem";

import { api } from 'services/api';

// import styles from "./Reviews.module.css"

const Reviews = ({forReviewsId}) => {
    const [reviews, setReviews] = useState([]); 
    // console.log("in reviews", forReviewsId)
    useEffect(() => {       
        api.fetchReviews(forReviewsId).then(data => {setReviews(data)}).catch(error => console.log(error));    
  }, [forReviewsId]);
    return (
        <div >
            {reviews.length > 0 ? <ReviewsItem reviews={reviews} /> : (<h3>We don't have any reviews for this movie </h3>) }        
        </div>
    )
}

export default Reviews;