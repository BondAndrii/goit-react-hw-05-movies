import React, { useEffect, useState } from "react";

import {
    Link, Outlet,
    useLocation
} from "react-router-dom";

import { api } from 'services/api';

import styles from "./MovieDetails.module.css"

import NoPoster from "../../assets/NoPoster.png"


export const MovieDetails = ({forDetailsId}) => {
    const [details, setDetails] = useState({})
    const location = useLocation(); 
    const imgUrl = 'https://image.tmdb.org/t/p/w400';
    
    const backAdress = "/movies";

    const backLinkHref = location.state?.from ?? backAdress;
    console.log("location in Details", location)
    useEffect(() => {
        
        api.fetchDetails(forDetailsId).then(responce => { setDetails(responce) }).catch(error => console.log(error))
    }
  , [forDetailsId]);
    const { poster_path, title, vote_average, overview, genres, tagline } = details;
    const score =Math.round( vote_average * 10);
    return (
        <div >
            <Link className={styles.GoBack} to={backLinkHref}> Go Back </Link>
            {/* <p className={styles.GoBack}>Go back</p> */}
            <div className={styles.StandartInform}>
                <img
                    src={poster_path ? (imgUrl + poster_path): NoPoster}
                    // src={NoPoster}
                    className={styles.Banner}
                    alt={tagline} /> 
                <div className={styles.Inform}>
                    <h1>{title }</h1>
                    <p>User Score: {score }%</p>
                    <h2>Overview</h2>
                    <p>{ overview}</p>
                    <h2>Genres</h2>
                    <ul className={styles.Genres}>
                        {genres?.map(genr => <p className={styles.GenresItem} key={genr.id}>{genr.name}</p>)}
                    </ul>
                </div>
                
               
            </div>           
            <nav className={styles.Navigation} >
                <h2>Additional information</h2>
                <Link to={`/movies/${forDetailsId}/cast`}>Cast</Link>
                <Link to={`/movies/${forDetailsId}/reviews`}>Review</Link>
            </nav>
                <Outlet />        
           
        </div>
    )
}

