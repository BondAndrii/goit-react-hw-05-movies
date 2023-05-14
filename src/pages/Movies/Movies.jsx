import React
// { Suspense, useRef }
    from "react";

import { useState, useEffect } from "react";

import {
    // Link, Outlet,
    useLocation, useSearchParams
} from "react-router-dom";

import SearchMovies from "components/SearchMovies/SearchMovies";

import Maper from "components/Maper/Maper";

import api from "services/api";

// import { Suspense } from "react";

const MoviesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [films, setFilms] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  console.log(query);

  const location = useLocation();
//   const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    (async () => {
      try {
        if (query === '') return;
        setIsLoading(true);
        setError(null);

        const data = await api.fetchMovie(query);
        // console.log(data);
        if (data.total_results === 0) {
          alert(
            `Sorry, there are no images matching your search query '${query}'. Please try again.`
          );
          return '';
        }
        setFilms(data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [query, location.search]);

  const updateQueryString = value => {
    if (value === '') {
      setSearchParams({});
      return;
    }
    setSearchParams({ query: value });
    setFilms([]);
  };

  return (
    <>
      {/* <Link to={backLinkLocationRef.current}  > Go Back </Link> */}
      <SearchMovies onSubmit={updateQueryString} />
      {/* Перевіряємо, чи відбувається завантаження */}
      {isLoading && <div>Loading...</div>}

      {/* Перевіряємо, чи є помилка */}
      {error && !isLoading && (
        <h2 style={{ textAlign: 'center' }}>
          Try again. Something went wrong!
        </h2>
      )}

      {!error && !isLoading && films.length > 0 && (
        <Maper data={films} state={{ from: location }} />
      )}
    </>
  );
};
export default MoviesPage;


// const Movies = () => { 
//    return (
//         <div>            
//             <Suspense fallback={<div>Loading...</div>}>
//                 <Outlet />
//             </Suspense>        
//         </div>
//     )
// }
// export default Movies