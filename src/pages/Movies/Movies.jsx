import React, { useState, useEffect } from "react"

import {Outlet } from "react-router-dom";



import { SearchMovies } from "components/SearchMovies/SearchMovies";



import { Maper } from "components/Maper/Maper";

import { api } from 'services/api';

export const Movies = ({getId}) => {
    const [searchMovie, setSearchMovie] = useState('');
    const [searchList, setSearchList] = useState([]);
    const [showList, setShowList] = useState(true);
    // console.log("in Mov", importentId)

    useEffect(() => { 
           if (searchMovie === '') {
               return
            //    alert('Please, enter films name')
                } else {
               api.fetchMovie(searchMovie).then(responce => { setSearchList(responce); }).catch(error => console.log(error));
               setShowList(true);
                }    
        }, [searchMovie]); 
    const findSearchMovie = (word) => {
        setSearchMovie(word);        
    } 
    const toggleList = (id) => {
        setShowList(false);
        getId(id)
    }

    return (
        <div>            
            <SearchMovies onSubmit={findSearchMovie} />
            {showList && <Maper data={searchList} onClick={toggleList} /> }           
            {!showList && <Outlet />}
        </div>
    )
}
