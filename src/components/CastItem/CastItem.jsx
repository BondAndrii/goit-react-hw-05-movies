import React from "react";

import PropTypes from "prop-types";

import SomePerson from "assets/SomePerson.png";

import styles from "./CastItem.module.css"

const CastItem = ({ cast }) => {
    // const imgUrl = 'https://image.tmdb.org/t/p/w400';
    return (
        <ul className={styles.Gallery}>
            {cast.map(actor => {
                
                return(
                <li className={styles.Item} key={actor.id}>
                    <img
                        className={styles.Portret}
                        src={
                        actor?.profile_path
                            ? `https://image.tmdb.org/t/p/original${actor?.profile_path}`
                            : SomePerson}
                        alt={actor.name || actor.original_name}
                />
                <p>{actor.name || actor.original_name} </p>
                {actor?.character && <p>{actor?.character}</p>} 
                </li>
                )}
            )
        }
        </ul>
    )
}

export default CastItem;

CastItem.propTypes = {
    cast: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.number.isRequired,
            profile_path: PropTypes.string,
            name: PropTypes.string,
            original_name: PropTypes.string,
            character: PropTypes.string,
        }
    ))
}