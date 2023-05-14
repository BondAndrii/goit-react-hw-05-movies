import React from "react";

import { useState, useEffect } from "react";

import { useLocation, useSearchParams} from "react-router-dom";

import SearchMovies from "components/SearchMovies/SearchMovies";

import Maper from "components/Maper/Maper";

import api from "services/api";

const MoviesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const location = useLocation();

  useEffect(() => {
    (async () => {
      try {
        if (query === '') return;
        setIsLoading(true);
        setError(null);

        const data = await api.fetchMovie(query);
        
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
      <SearchMovies onSubmit={updateQueryString} />
      {isLoading && <div>Loading...</div>}
      {error && !isLoading && (<h2 style={{ textAlign: 'center' }}>Try again.</h2>)}
      {!error && !isLoading && films.length > 0 && (<Maper data={films} state={{ from: location }} />)}
    </>
  );
};
export default MoviesPage;


