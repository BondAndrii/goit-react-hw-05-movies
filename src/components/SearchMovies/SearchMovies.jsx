import React, { useState, useEffect } from "react";

import axios from "axios";

export const SearchMovies = () => {
    const [searchList, setSearchList] = useState([]);
    const [searchMovie, setSearchMovie] = useState('');

    useEffect(() => {
    //----------------------------request-----------------------------------------//
    async function fetcData() {
      await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=278bf75944205bdb0a6474cdc0be106c&query=${searchMovie}&language=en-US&page=1&per_page=12&include_adult=false`)
          .then(responce => { setSearchList(responce.data.results); console.log(responce.data)}).catch(error => console.log(error))
    }
    //----------------------------request-----------------------------------------//
    //----------------------------home-----------------------------------------//
        if (searchMovie === '') {
        return
        } else {
          fetcData()  
    }
    
  }
  , [searchMovie]);

    const handleChange = (event) => {
        const { value } = event.target;
        setSearchMovie(value);
        console.log("in change", value);
    }
    const handleSubmit = (event) => {
        const { value } = event.target;
        event.preventDefault();
        setSearchMovie(value)
        console.log("in submit", searchMovie);
        reset()
    }
    const reset = () => {
        setSearchMovie('')
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label> 
                <input
                value={searchMovie}
                type='text'
                onChange={handleChange}
                ></input>
                <button type="submit">Submit</button>
            </label>
        </form>
        <ul>
                {searchList.map(searchItem => <li key={searchItem.id}>{searchItem.title || searchItem.name} </li>
            )}    
        </ul>
        </>
        
    )
}

