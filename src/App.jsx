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
  const [top, setTop] = useState([]);
  const [id, setId] = useState(''); 
  const [searchList, setSearchList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const filmName = searchParams.get("query") ?? ""; 
  // console.log("filmName first rander", filmName);
  // console.log("searchList in App", searchList)
  useEffect(() => {    
    api.fetchTop().then(list => {setTop(list)}).catch(error => console.log(error))    
  }, []);

 
  const handleGetId = (id) => {
    setId(id); 
    
  }
  
  const updateQueryString = (query) => {
  const nextParams = query !== "" ? { query } : {};
  setSearchParams(nextParams);
    
  }
  useEffect(() => { 
    // console.log("filmName else rander", filmName); 
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
        <Route index element={<Home list={top } getId={handleGetId}/>} />
          <Route path='movies' element={<Movies />} >
            <Route index element={ <SearchMovies
                  // onSubmit={updateQueryString}
                  onSubmit={updateQueryString}
                  list={searchList}
                  getId={handleGetId}
              /> } />
            <Route path=":movieId" element={<MovieDetails forDetailsId={id} />} >
                <Route path='cast' element={<Cast castId={id} />} />
                <Route path='reviews' element={<Reviews forReviewsId={id} />} />                
            </Route>   
        </Route>
        <Route path="*" element={<NotFound/>} />
        </Route>          
      </Routes> 
  )
};
