import React, { useState, useEffect } from "react";

import Maper from "components/Maper/Maper";

import { useLocation } from "react-router-dom";

import api from "services/api";

// const Home = ({ list, getId }) => {
//   return (
//         <Maper data={list} onClick={getId} />
//     )
// }

// export default Home;
const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    (async () => {
        try {
          setIsLoading(true);
          setError(null);
          const result = await api.fetchTrend()
          // console.log("in result", result)
          setMovies(result)
        } catch (error) {
          console.error("error in fetchTrend", error.message);
        }finally{setIsLoading(false);}
    })();
  }, [])


  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && !isLoading && <div>Try again</div>}
      {!error && !isLoading && movies.length > 0 &&  <Maper data={movies} state={{from: location}} />  }
    </>
  )
}

export default Home;