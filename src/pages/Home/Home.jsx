import React, { useState, useEffect } from "react";

import Maper from "components/Maper/Maper";

import api from "services/api";
import { Circles } from "react-loader-spinner";

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
      {isLoading && <Circles height="80" width="80" radius="9" color='green' ariaLabel='three-dots-loading' wrapperStyle wrapperClass />}
      {error && !isLoading && <div>{errorMessage}</div>}
      {!error && !isLoading && movies.length > 0 &&  <Maper data={movies} />  }
    </>
  )
}

export default Home;