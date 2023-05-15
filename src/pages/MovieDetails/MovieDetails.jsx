import React, { useEffect, useRef, useState } from "react";

import {
    Link, Outlet,
    useLocation,
    useParams
} from "react-router-dom";

import  api  from 'services/api';

import styles from "./MovieDetails.module.css"

import NoPoster from "../../assets/NoPoster.png"

import { Suspense } from "react";



const MovieDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movieData, setMovieData] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const errorMessage = "Сорян, проізошол отріцательний поіск. Спробуйте ще раз";

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await api.fetchDetails(movieId);
        setMovieData(data);
      } catch (error) {
        setError(true)
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId]);

    
const Score = Math.round( movieData?.vote_average * 10);
const Genres = movieData?.genres?.map(genre => genre.name).join(', ');

  return (
    <>
       {isLoading && <div>Loading...</div>}
      {error && !isLoading && (
        <h2 style={{ textAlign: 'center' }}>{errorMessage}</h2>)}
      {!error && !isLoading && movieData && (
        <div>
          <Link className={styles.GoBack} to={backLinkLocationRef.current}  > Go Back </Link>
          <div className={styles.StandartInform}>
            <img
               className={styles.Banner}
              src={
                movieData?.poster_path
                  ? `https://image.tmdb.org/t/p/original${movieData?.poster_path}`
                  : NoPoster
              }
              alt={movieData?.title || movieData?.original_title}              
            />
            <div className={styles.Inform}>
            <h2>{movieData?.title || movieData?.original_title}</h2>
            <p>User score: {Score}</p>
            {movieData?.overview?.length > 0 && (
              <>
                <h3>Overview</h3>
                <p>{movieData?.overview}</p>
              </>
            )}
            {movieData?.genres?.length > 0 && (
              <>
                <h4>Genres</h4>
                <p>{Genres}</p>
              </>
            )}
          </div>
          </div>          
        </div>
      )}
      <>
        
        <nav className={styles.Navigation}>       
            <h2>Additional information</h2>
              <Link to="cast" state={{ from: location }}>Cast</Link>         
              <Link to="reviews" state={{ from: location }}>Reviews</Link>           
        </nav>
      </>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;