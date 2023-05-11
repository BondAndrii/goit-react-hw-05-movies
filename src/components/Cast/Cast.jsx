import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { CastItem } from "components/CastItem/CastItem";
import "./Cast.css"

export const Cast = ({}) => {
    const [cast, setCast] = useState([]);
    useEffect(() => { 
        
        const key = '278bf75944205bdb0a6474cdc0be106c';
        async function fetcData() {
            await axios.get(`https://api.themoviedb.org/3/movie/2927/credits?api_key=${key}&language=en-US`)
                .then(responce => {             
                    setCast(responce.data.cast);
                    // console.log(responce.data.cast)
                }
                ).catch(error => console.log(error));
    }  
        // if (searchMovie === '') {
        // return
        // } else {
          fetcData()  
      
  }, []);

    return (
        <div className="Cast">
            <CastItem cast={cast } />                   
        </div>
    )
}

