import React, { useState } from "react";

export const SearchMovies = () => {
    const [searchMovies, setSearchMovies] = useState('');

    const handleChange = (event) => {
        const { value } = event.target;
        setSearchMovies(value);
        console.log("in change", value);
    }
    const handleSubmit = (event) => {
        const { value } = event.target;
        event.preventDefault();
        setSearchMovies(value)
        console.log("in submit", searchMovies);
        reset()
    }
    const reset = () => {
        setSearchMovies('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label> 
                <input
                value={searchMovies}
                type='text'
                onChange={handleChange}
                ></input>
                <button type="submit">Submit</button>
            </label>
        </form>
    )
}

