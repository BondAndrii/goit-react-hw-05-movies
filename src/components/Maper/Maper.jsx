import React from "react";

import { NavLink } from "react-router-dom";

import styled from "./Maper.module.css"

export const Maper = ({ data, onClick }) => {
    const getId = (event) => {
        const { id } = event.target;
        onClick(id);
        
        
    }
    return (
    <ul className={styled.Maper}>
            {data.map(dataItem => <NavLink className={styled.MaperItem} to={`/movies/${dataItem.id}`} key={dataItem.id} id={dataItem.id} onClick={getId}>{dataItem.title || dataItem.name} </NavLink>)}
    </ul>
    )
     
}