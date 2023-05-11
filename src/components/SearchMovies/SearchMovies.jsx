import React, { useState } from "react";

export const SearchMovies = ({onSubmit}) => {
    
    const [searchMovie, setSearchMovie] = useState('');

    const handleChange = (event) => {
        const { value } = event.target;
        setSearchMovie(value);
        
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
    )
}

