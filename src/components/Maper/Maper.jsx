import React from "react";

import { NavLink, useLocation } from "react-router-dom";

import styles from "./Maper.module.css"

const Maper = ({ data, onClick }) => {
    // console.log("searchList in Maper", data)
    
    const location = useLocation();

//    console.log("location in search", location)

    const getId = (event) => {
        const { id } = event.target;
        onClick(id);      
    }
    return (
    <ul className={styles.Maper}>
            {data.map(item => {
                const { id, title, name } = item;
                console.log("in item", item)
                return (
                    <NavLink
                        className={styles.MaperItem}
                        to={`/movies/${id}`}
                        state={{from:location}}
                        key={id}
                        id={id}
                        onClick={getId}>{title || name}
                    </NavLink>
                )
               
            })}
    </ul>
    )
     
}

export default Maper;