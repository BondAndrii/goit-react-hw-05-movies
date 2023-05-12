import React, { useState, useEffect } from "react"

// import { Link, Outlet } from "react-router-dom";

import { SearchMovies } from "components/SearchMovies/SearchMovies";

import { MovieDetails } from "components/MovieDetails/MovieDetails";

import { Maper } from "components/Maper/Maper";

import { api } from 'services/api';

export const Movies = ({importentId, getId}) => {
    const [searchMovie, setSearchMovie] = useState('');
    const [searchList, setSearchList] = useState([]);
    console.log("in Mov", importentId)

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
            <Maper data={searchList} onClick={getId} />            
            <MovieDetails forDetailsId={importentId} />          
        </div>
    )
}
