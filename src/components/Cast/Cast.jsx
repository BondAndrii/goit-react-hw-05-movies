import React, { useState, useEffect } from "react";

import CastItem  from "components/CastItem/CastItem";

import { api } from 'services/api';

import styles from "./Cast.module.css"

const Cast = ({castId}) => {
    const [cast, setCast] = useState([]);
    // console.log("castId", castId)
    useEffect(() => {    
        api.fetchCast(castId).then(cast => {setCast(cast)}).catch(error => console.log(error));  
  }, [castId]);

    return (
        <div className={styles.Cast}>
            {cast.length > 0 ? <CastItem cast={cast } /> : (<h3>We don't have any casts for this movie </h3>)}                 
        </div>
    )
}

export default Cast;
