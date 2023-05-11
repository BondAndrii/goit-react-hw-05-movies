import axios from 'axios';
import { useEffect, useState } from 'react';
import { SearchMovies } from 'components/SearchMovies/SearchMovies';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';
// import { Routes, Route } from 'react-router-dom';
// // import Film from "./MovieDetails/MovieDetails"
// import Layout from "./components/Layout/Layout";
// import Movies from "./pages/Movies/Movies"
// import Home from "./pages/Home/Home"
// import Cast from "./components/Cast/Cast"
// import Reviews from 'components/Reviews/Reviews';


export const App = () => {
  const [top, setTop] = useState([]);
  // const [searchMovies, setSearchMovies] = useState('')
  
  useEffect(() => {
    //----------------------------request-----------------------------------------//
    const key = '278bf75944205bdb0a6474cdc0be106c'; 
    async function fetchData() {
      await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`)
      .then(responce => setTop(responce.data.results)).catch(error => console.log(error))
    }
    //----------------------------request-----------------------------------------//
    //----------------------------home-----------------------------------------//
    fetchData()
  }
  , []);
    //----------------------------home-----------------------------------------//
  // const handleSearchSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("search", searchMovies)
  
  // }
  return (
    <>
      <ul>
        {top.map(topItem => <li key={topItem.id}>{topItem.title || topItem.name} </li>)}
      </ul>
      <SearchMovies />
      <MovieDetails />
      <Cast />
      <Reviews/>
    </>
  )
  
};
