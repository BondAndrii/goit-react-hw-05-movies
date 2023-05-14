import React from "react";

import SomePerson from "../../assets/SomePerson.png"

import styles from "./CastItem.module.css"

const CastItem = ({ cast }) => {
    const imgUrl = 'https://image.tmdb.org/t/p/w400';
    return (
        <ul className={styles.Gallery}>
            {cast.map(actor => {
                const { id, name, character, profile_path } = actor;
                return (
                    <li className={styles.Item} key={id}>
                    <img
                        className={styles.Portret}
                        src={profile_path ? (imgUrl + profile_path): SomePerson}                        
                        alt={name} />
                    <p >{name}</p>
                    <p>Character: {character}</p>
                    </li>
                )
            }
                )}   
        </ul>
    )
    
}

export default CastItem;