import React, { useState, useEffect } from "react";

// import  ReviewsItem  from "components/ReviewsItem/ReviewsItem";

import api from 'services/api';
import { useParams } from "react-router-dom";

const Reviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  // console.log(movieId);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await api.fetchReviews(movieId);
        // console.log(data);
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
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <p>{review.author} </p>
              <p>{review.content} </p>
            </li>
          ))}
        </ul>
      ) : (
        <h2>We don't have any reviews for this movie</h2>
      )}
    </>
  );
};

// import styles from "./Reviews.module.css"

// const Reviews = ({forReviewsId}) => {
//     const [reviews, setReviews] = useState([]); 
//     // console.log("in reviews", forReviewsId)
//     useEffect(() => {       
//         api.fetchReviews(forReviewsId).then(data => {setReviews(data)}).catch(error => console.log(error));    
//   }, [forReviewsId]);
//     return (
//         <div >
//             {reviews.length > 0 ? <ReviewsItem reviews={reviews} /> : (<h3>We don't have any reviews for this movie </h3>) }        
//         </div>
//     )
// }

export default Reviews;