import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import CastItem  from "components/CastItem/CastItem";

import  api  from 'services/api';

const Cast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await api.fetchCast(movieId);
        
        setCast(data);
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
      {!error && !isLoading && cast.length > 0 ? (<CastItem cast={cast} />) : (
        <h2>We don't have any cast for this movie</h2>
      )}
    </>
  );
};

export default Cast;
