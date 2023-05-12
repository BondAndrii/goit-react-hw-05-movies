import { useState } from 'react';

import { Routes, Route} from "react-router-dom";

import { Movies } from "./pages/Movies/Movies"

import { Home } from 'pages/Home/Home';

import { MovieDetails } from 'components/MovieDetails/MovieDetails';

import { Cast } from "components/Cast/Cast";

import { Reviews } from "components/Reviews/Reviews";

import { NotFound } from 'components/NotFound/NotFound';

import {Layout} from "./components/Layout/Layout";






export const App = () => {

  const [id, setId] = useState('');  

  const handleGetId = (id) => {
    setId(id);    
  }
  return (        
      <Routes>
        <Route  path='/' element={<Layout/>}>
          <Route index element={<Home getId={handleGetId}/>} />
          <Route path='movies' element={<Movies importentId={id} getId={handleGetId} />} >
          <Route path=":movieId" element={<MovieDetails forDetailsId={id} />} >
            <Route path='cast' element={<Cast castId={id} />} />
            <Route path='reviews' element={<Reviews forReviewsId={id} />} />
          </Route>
        </Route>
        <Route path='*' element={NotFound} />
        </Route>          
      </Routes> 
  )
};
