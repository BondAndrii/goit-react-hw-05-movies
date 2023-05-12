import { useState } from 'react';

import { Movies } from "./pages/Movies/Movies"

import { Home } from 'pages/Home/Home';

import { Routes, Route, NavLink } from "react-router-dom";

// import Layout from "./components/Layout/Layout";






export const App = () => {

  const [id, setId] = useState('');  

  const handleGetId = (id) => {
    setId(id);    
  }
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Home getId={handleGetId} />} />
        <Route path='/movies' element={<Movies importentId={id} getId={handleGetId} /> } />
      </Routes>
      
             
    </>
  )
  
};
