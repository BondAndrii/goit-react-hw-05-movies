import { useState, useEffect } from 'react';

import { Routes, Route, useSearchParams} from "react-router-dom";

import { Movies } from "./pages/Movies/Movies"

import { Home } from 'pages/Home/Home';

import { MovieDetails } from 'components/MovieDetails/MovieDetails';

import { Cast } from "components/Cast/Cast";

import { Reviews } from "components/Reviews/Reviews";

import { NotFound } from 'components/NotFound/NotFound';

import { Layout } from "./components/Layout/Layout";

import { SearchMovies } from 'components/SearchMovies/SearchMovies';

import { api } from 'services/api';




export const App = () => {

  const [id, setId] = useState(''); 
  const [searchList, setSearchList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filmName = searchParams.get("query") ?? "";

  const handleGetId = (id) => {
    setId(id);    
  }
  const updateQueryString = (query) => {
        const nextParams = query !== "" ? { query } : {};
    setSearchParams(nextParams);
    
  }
  useEffect(() => { 
        // if (searchMovie === '')
        if (filmName === '')
        {
               return
            //    alert('Please, enter films name')
                } else {
               api.fetchMovie(filmName).then(responce => { setSearchList(responce); }).catch(error => console.log("in fetchTop", error));
          
                }    
  }, [filmName]); 
  return (        
      <Routes>
        <Route  path='/' element={<Layout/>}>
          <Route index element={<Home getId={handleGetId}/>} />
          <Route path='movies' element={<Movies importentId={id} getId={handleGetId} />} >
          <Route index element={ <SearchMovies
                // onSubmit={updateQueryString}
                onSubmit={updateQueryString}
                forMaperList={searchList}
                getId={handleGetId}
            /> } />
          <Route path="/movies/:movieId" element={<MovieDetails forDetailsId={id} />} >
              <Route path='cast' element={<Cast castId={id} />} />
              <Route path='reviews' element={<Reviews forReviewsId={id} />} />                
          </Route>   
        </Route>
        <Route path="*" element={<NotFound/>} />
        </Route>          
      </Routes> 
  )
};
