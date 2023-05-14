import React, { useState, useEffect } from "react";

import  ReviewsItem  from "components/ReviewsItem/ReviewsItem";

import api from 'services/api';

import { useParams } from "react-router-dom";

const Reviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();


  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await api.fetchReviews(movieId);
        setReviews(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId]);

  return (
    <>
        {isLoading && <div>Loading...</div>}
        {error && !isLoading && <div>Try again</div>}
      {!error && !isLoading && reviews.length > 0 ? (
      <ReviewsItem reviews={reviews}/>) : (<h2>We don't have any reviews for this movie</h2>)}
    </>
  );
};

export default Reviews;