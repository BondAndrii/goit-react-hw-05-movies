import { useEffect, useState } from 'react';

import { Maper } from 'components/Maper/Maper';

import { Movies } from "./pages/Movies/Movies"

import { api } from 'services/api';

// import { Routes, Route } from 'react-router-dom';
// // import Film from "./MovieDetails/MovieDetails"
// import Layout from "./components/Layout/Layout";

// import Home from "./pages/Home/Home"
// import Cast from "./components/Cast/Cast"
// import Reviews from 'components/Reviews/Reviews';
// import axios from "axios";



export const App = () => {
  const [top, setTop] = useState([]);

  
  useEffect(() => {
    api.fetchTop().then(list => {setTop(list)}).catch(error => console.log(error))    
  }, []);

  return (
    <>
      <Maper data={top} />    
      <Movies/>        
    </>
  )
  
};
