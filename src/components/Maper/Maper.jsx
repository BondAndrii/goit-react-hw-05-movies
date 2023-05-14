import React from "react";

import { Link, useLocation } from "react-router-dom";

import styles from "./Maper.module.css"

const Maper = ({ data}) => {
    
    
    const location = useLocation();

    return (
    <ul className={styles.Maper}>
            {data.map(item => {
                const { id, title, name } = item;
                
                return (
                    <li key={id}>
                        <Link
                            className={styles.MaperItem}
                            to={`/movies/${id}`}
                            state={{ from: location }}                     
                            
                        >{title || name}</Link>
                    </li>
                )
               
            })}
    </ul>
    )
     
}

export default Maper;