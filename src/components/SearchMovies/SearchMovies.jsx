import React, { useState } from "react";

import Maper  from "components/Maper/Maper";

import styles from "./SearchMovies.module.css"

const SearchMovies = ({onSubmit, list, getId}) => {
    
    const [searchMovie, setSearchMovie] = useState('');    

    const handleChange = (event) => {
        const { value } = event.target;
        setSearchMovie(value);
        // onChange(value);
        
    }
    const handleSubmit = (event) => {        
        event.preventDefault();
        onSubmit(searchMovie)        
        reset()
    }

    const reset = () => {
        setSearchMovie('')
    }

    return (
    <>
        <form className={styles.Form} onSubmit={handleSubmit}>
            <label> 
                <input
                value={searchMovie}
                type='text'
                placeholder="enter film`s name"
                onChange={handleChange}
                ></input>
                <button type="submit">Submit</button>
            </label>
            </form>
            <Maper data={list} onClick={getId} />            
    </>     
    )
}

export default SearchMovies;

