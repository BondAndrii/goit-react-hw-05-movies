import React from "react";

import { Link, useLocation } from "react-router-dom";

import PropTypes from "prop-types";

import styles from "./Maper.module.css"

const Maper = ({data}) => {   
    
    const location = useLocation();
    // console.log(data);
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

Maper.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string,
        name: PropTypes.string,
    }))
}