import React, { useState, useEffect } from "react";

// import CastItem  from "components/CastItem/CastItem";

import  api  from 'services/api';

// import styles from "./Cast.module.css"
import { useParams } from "react-router-dom";
import NoPoster from "assets/SomePerson.png";

const Cast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  // console.log(movieId);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await api.fetchCast(movieId);
        // console.log(data);
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
      {/* Перевіряємо, чи відбувається завантаження */}
        {isLoading && <div>Loading...</div>}
      {error && !isLoading && <div>Try again</div>}
      {!error && !isLoading && cast.length > 0 ? (
        <ul>
          {cast.map(cast => (
            <li key={cast.id}>
              <img
                src={
                  cast?.profile_path
                    ? `https://image.tmdb.org/t/p/original${cast?.profile_path}`
                    : NoPoster
                }
                alt={cast.name || cast.original_name}
                width="200"
              />
              <p>{cast.name || cast.original_name} </p>
              {cast?.character && <p>{cast?.character}</p>}
            </li>
          ))}
        </ul>
      ) : (
        <h2>We don't have any cast for this movie</h2>
      )}
    </>
  );
};

// const Cast = ({castId}) => {
//     const [cast, setCast] = useState([]);
//     // console.log("castId", castId)
//     useEffect(() => {    
//         api.fetchCast(castId).then(cast => {setCast(cast)}).catch(error => console.log(error));  
//   }, [castId]);

//     return (
//         <div className={styles.Cast}>
//             {cast.length > 0 ? <CastItem cast={cast } /> : (<h3>We don't have any casts for this movie </h3>)}                 
//         </div>
//     )
// }

export default Cast;
