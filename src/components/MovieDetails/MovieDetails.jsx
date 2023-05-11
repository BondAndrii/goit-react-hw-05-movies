import React, { useEffect, useState } from "react";
// import { Link, Outlet } from "react-router-dom"
import "./MovieDetails.css"

import { api } from 'services/api';

// import Cast from "components/Cast/Cast";
// import Reviews from "../Reviews/Reviews"



export const MovieDetails = () => {
    const [details, setDetails] = useState({})

    useEffect(() => {
   
        api.fetchDetails().then(responce => { setDetails(responce) }).catch(error => console.log(error))
    }
  , []);

    return (
        <div >
            <p className="goBack">Go back go</p>
            <div className="StandartInform">
                <img
                    src={`https://image.tmdb.org./t/p/w300${details.poster_path}`}
                    // src={details.poster_path}
                    className="Banner"
                    alt={details.tagline} />
                <div className="Inform">
                    <h1>{details.title }</h1>
                    <p>User Score: {details.vote_average }</p>
                    <h2>Overview</h2>
                    <p>{ details.overview}</p>
                    <h2>Genres</h2>
                    <p>
                        {/* {details.genres.map(genr => <p key={genr.id}>{genr.name}</p>)} */}
                    </p>
                </div>
                
            </div>
            
            <h2>Additional information</h2>           
            {/* <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
            <Outlet/> */}
        </div>
    )
}

