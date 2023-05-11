import React, { useState, useEffect } from "react"

// import { Link, Outlet } from "react-router-dom";

import { SearchMovies } from "components/SearchMovies/SearchMovies";

import { MovieDetails } from "components/MovieDetails/MovieDetails";

import { Cast } from "components/Cast/Cast";

import { Reviews } from "components/Reviews/Reviews";

import { Maper } from "components/Maper/Maper";

import { api } from 'services/api';

export const Movies = () => {
    const [searchMovie, setSearchMovie] = useState('');
    const [searchList, setSearchList] = useState([]);
    

        useEffect(() => { 
           if (searchMovie === '') {
               return
            //    alert('Please, enter films name')
                } else {
                api.fetchMovie(searchMovie).then(responce => { setSearchList(responce); }).catch(error => console.log(error))
                }    
        }, [searchMovie]);
    
    const findSearchMovie = (word) => {
        setSearchMovie(word);        
    } 
    

    return (
        <div>
            
            <SearchMovies onSubmit={findSearchMovie} />
            <Maper data={searchList} />            
            <MovieDetails />
            <Cast />
            <Reviews/>
        </div>
    )
}
