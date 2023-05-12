import React from "react";

import { NavLink } from "react-router-dom";

export const Maper = ({ data, onClick }) => {
    const getId = (event) => {
        const { id } = event.target;
        onClick(id);
        
        
    }
    return (
    <ul>
            {data.map(dataItem => <NavLink to={`/movies/${dataItem.id}`} key={dataItem.id} id={dataItem.id} onClick={getId}>{dataItem.title || dataItem.name} </NavLink>)}
    </ul>
    )
     
}