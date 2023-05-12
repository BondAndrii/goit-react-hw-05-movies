import React, { useState, useEffect } from "react"

import {Outlet } from "react-router-dom";



import { SearchMovies } from "components/SearchMovies/SearchMovies";



import { Maper } from "components/Maper/Maper";

import { api } from 'services/api';

export const Movies = ({importentId, getId}) => {
    const [searchMovie, setSearchMovie] = useState('');
    const [searchList, setSearchList] = useState([]);
    // console.log("in Mov", importentId)

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
            <Outlet />
        </div>
    )
}
