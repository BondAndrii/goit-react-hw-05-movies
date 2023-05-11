import React, { useState, useEffect } from "react";

import axios from "axios";

import { ReviewsItem } from "components/ReviewsItem/ReviewsItem";

import "./Reviews.css"

export const Reviews = () => {
    const [reviews, setReviews] = useState([]);     
    useEffect(() => {         
        const key = '278bf75944205bdb0a6474cdc0be106c';
        async function fetcData() {
            await axios.get(`https://api.themoviedb.org/3/movie/2929/reviews?api_key=${key}&language=en-US&page=1`)
                .then(responce => {             
                    setReviews(responce.data.results);
                    console.log(responce.data.results)
                }
                ).catch(error => console.log(error));
    }  
        // if (reviews.length === 0 ) {
        //     return <p>Sorry, no information</p>
        // } else {
            fetcData()
        // }
      
  }, []);
    return (
        <div className="Reviews">
            <ReviewsItem reviews={reviews} />          
        </div>
    )
}

