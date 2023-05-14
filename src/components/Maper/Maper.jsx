import React from "react";

import { Link, useLocation } from "react-router-dom";

import styles from "./Maper.module.css"

const Maper = ({ data,
// getId
}) => {
    // console.log("searchList in Maper", data)
    
    const location = useLocation();

//    console.log("location in search", location)

    // const getId = (event) => {
    //     const { id } = event.target;
    //     onClick(id);      
    // }
    return (
    <ul className={styles.Maper}>
            {data.map(item => {
                const { id, title, name } = item;
                // console.log("in item", item)
                return (
                    <li key={id}>
                        <Link
                            className={styles.MaperItem}
                            to={`/movies/${id}`}
                            state={{ from: location }}                        
                            // id={id}
                            // onClick={getId}
                        >{title || name}
                            
                        </Link>
                    </li>
                )
               
            })}
    </ul>
    )
     
}

export default Maper;