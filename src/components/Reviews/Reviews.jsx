import React, { useState, useEffect } from "react";

import  ReviewsItem  from "components/ReviewsItem/ReviewsItem";

import api from 'services/api';

import { useParams } from "react-router-dom";
import { Circles } from "react-loader-spinner";

const Reviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const message = "Вибачте! Відбувся отріцатєльний пошук. Спробуйте знову";


  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await api.fetchReviews(movieId);
        setReviews(data);
      } catch (error) {
        setError(true)
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId]);

  return (
    <>
        {isLoading && <Circles height="80" width="80" radius="9" color='green' ariaLabel='three-dots-loading' wrapperStyle wrapperClass />}
        {error && !isLoading && <div>{message }</div>}
        {!error && !isLoading && reviews.length > 0 && (<ReviewsItem reviews={reviews} />)}
        {!error && !isLoading && reviews.length === 0 && (<h2>We don't have any reviews for this movie</h2>)}
      
    </>
  );
};

export default Reviews;