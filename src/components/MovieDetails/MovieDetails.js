import React from "react";
import "./MovieDetails.css"
// import Cast from "components/Cast/Cast";
// import Reviews from "../Reviews/Reviews"



const MovieDetails = () => {
    return (
        <div >
            <p className="goBack">Go back</p>
            <div className="StandartInform">
                <img className="Banner" alt="film name" />
                <div className="Inform">
                    <h1>Film name</h1>
                    <p>User Score:</p>
                    <h2>Overview</h2>
                    <p>loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem</p>
                    <h2>Genres</h2>
                    <p>Adventure</p>
                </div>
                
            </div>
            
            <h2>Additional information</h2>           
            <div>
                <Cast />
                <Reviews/>
            </div>
        </div>
    )
}

export default MovieDetails;