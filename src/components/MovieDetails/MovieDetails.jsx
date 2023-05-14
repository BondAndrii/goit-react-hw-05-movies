import React, { useEffect, useRef, useState } from "react";

import {
    Link, NavLink, Outlet,
    useLocation,
    useParams
} from "react-router-dom";

import  api  from 'services/api';

// import styles from "./MovieDetails.module.css"

import NoPoster from "../../assets/NoPoster.png"

import { Suspense } from "react";



const MovieDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movieData, setMovieData] = useState([]);
    const { movieId } = useParams();
    console.log(useParams())
  console.log("in movieDetails", movieId);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await api.fetchDetails(movieId);
        console.log(data);
        setMovieData(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId]);

    // const { poster_path, title, vote_average, overview, genres, tagline } = movieData;
const Score =Math.round( movieData?.vote_average * 10);
const Genres = movieData?.genres?.map(genre => genre.name).join(', ');

  return (
    <>
       {isLoading && <div>Loading...</div>}

      {error && !isLoading && (
        <h2 style={{ textAlign: 'center' }}>
          Try again. Something went wrong!
        </h2>
      )}

      {!error && !isLoading && movieData && (
        <div>
            <Link to={backLinkLocationRef.current}  > Go Back </Link>
          <div>
            <img
              src={
                movieData?.poster_path
                  ? `https://image.tmdb.org/t/p/original${movieData?.poster_path}`
                  : NoPoster
              }
              alt={movieData?.title || movieData?.original_title}
              width="200"
            />
          </div>
          <div>
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
      )}
      <>
        <h2>Additional information</h2>
        <nav>       
            
              <NavLink to="cast" state={{ from: location }}>
                Cast
              </NavLink>
            
            
              <NavLink to="reviews" state={{ from: location }}>
                Reviews
              </NavLink>
            
          
        </nav>
      </>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

// const MovieDetails = ({forDetailsId}) => {
//     const [details, setDetails] = useState({})
//     const location = useLocation(); 
//     const imgUrl = 'https://image.tmdb.org/t/p/w400';
    
//     const backAdress = "/movies";

//     const backLinkHref = location.state?.from ?? backAdress;
//     // console.log("location in Details", location)
//     useEffect(() => {
        
//         api.fetchDetails(forDetailsId).then(responce => { setDetails(responce) }).catch(error => console.log(error))
//     }
//   , [forDetailsId]);
//     const { poster_path, title, vote_average, overview, genres, tagline } = details;
//     const score =Math.round( vote_average * 10);
//     return (
//         <div >
//             <Link className={styles.GoBack} to={backLinkHref}> Go Back </Link>
//             {/* <p className={styles.GoBack}>Go back</p> */}
//             <div className={styles.StandartInform}>
//                 <img
//                     src={poster_path ? (imgUrl + poster_path): NoPoster}
//                     // src={NoPoster}
//                     className={styles.Banner}
//                     alt={tagline} /> 
//                 <div className={styles.Inform}>
//                     <h1>{title }</h1>
//                     <p>User Score: {vote_average ? score : 0 }%</p>
//                     <h2>Overview</h2>
//                     <p>{ overview}</p>
//                     <h2>Genres</h2>
//                     <ul className={styles.Genres}>
//                         {genres?.map(genr => <p className={styles.GenresItem} key={genr.id}>{genr.name}</p>)}
//                     </ul>
//                 </div>
                
               
//             </div>           
//             <nav className={styles.Navigation} >
//                 <h2>Additional information</h2>
//                 <Link to={`/movies/${forDetailsId}/cast`}>Cast</Link>
//                 <Link to={`/movies/${forDetailsId}/reviews`}>Review</Link>
//             </nav>
//                 <Suspense fallback={<div>Loading...</div>}>
//                     <Outlet />
//                 </Suspense>     
           
//         </div>
//     )
// }

export default MovieDetails;