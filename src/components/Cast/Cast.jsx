import React, { useState, useEffect } from "react";

import { CastItem } from "components/CastItem/CastItem";

import { api } from 'services/api';

import "./Cast.css"

export const Cast = () => {
    const [cast, setCast] = useState([]);
    useEffect(() => {    
        api.fetchCast().then(cast => {setCast(cast)}).catch(error => console.log(error));  
  }, []);

    return (
        <div className="Cast">
            <CastItem cast={cast } />                   
        </div>
    )
}

