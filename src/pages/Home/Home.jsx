import React, { useState, useEffect } from "react";

import Maper from "components/Maper/Maper";

import api from "services/api";

import Loader from 'components/Loader/Loader';


const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const errorMessage = "Ууупс! Відбувся отріцатєльний поіск. Спробуйте ще раз";

  useEffect(() => {
    (async () => {
        try {
          setIsLoading(true);
          setError(null);
          const result = await api.fetchTop();         
          setMovies(result)
        } catch (error) {
          setError(true)
          // console.error("error in fetchTrend", error.message);
        }finally{setIsLoading(false);}
    })();
  }, [])


  return (
    <>
      {isLoading && <Loader />}
      {error && !isLoading && <div>{errorMessage}</div>}
      {!error && !isLoading && movies.length > 0 &&  <Maper data={movies} />  }
    </>
  )
}

export default Home;