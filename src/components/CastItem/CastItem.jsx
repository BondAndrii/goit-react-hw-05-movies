import React from "react";

export const CastItem = ({cast}) => {
    return (
        <ul>
             {cast.map(actor => <li key={actor.id}>
                <img
                    src={`https://image.tmdb.org./t/p/w300${actor.profile_path}`}
                    // src={actor.profile_path}
                    alt={actor.name} />
                <p>{actor.name}</p>
                <p>Character: {actor.character}</p>
            </li>)}   
        </ul>
    )
    
}