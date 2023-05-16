import React from "react";

import { useState, useEffect } from "react";

import {useSearchParams} from "react-router-dom";

import SearchMovies from "components/SearchMovies/SearchMovies";

import Maper from "components/Maper/Maper";

import api from "services/api";

import Loader from 'components/Loader/Loader';


const MoviesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const message = "Вибачте! Відбувся отріцатєльний пошук. Спробуйте знову";

  useEffect(() => {
    (async () => {
      try {
        if (query === '') return;

        setIsLoading(true);
        setError(null);
        const data = await api.fetchMovie(query);
        
        if (data.total_results === 0) {
          return;
        }
        setFilms(data.results);
      } catch (error) {
        
        setError(true)
      } finally {
        setIsLoading(false);
      }
    })();
  }, [query]);

  const updateQueryString = value => {
    if (value === '') {
      return;
    }
    setSearchParams({ query: value });
    setFilms([]);
  };

  return (
    <>      
      <SearchMovies onSubmit={updateQueryString} />
      {isLoading && <Loader/>}
      {error && !isLoading && (<h2 style={{ textAlign: 'center' }}>{message}</h2>)}
      {!error && !isLoading && films.length > 0 && (<Maper data={films} />)}
    </>
  );
};
export default MoviesPage;


