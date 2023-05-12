import React from "react";

export const Maper = ({ data, onClick }) => {
    const getId = (event) => {
        const { id } = event.target;
        onClick(id);
        
        
    }
    return (
    <ul>
            {data.map(dataItem => <li key={dataItem.id} id={dataItem.id} onClick={getId}>{dataItem.title || dataItem.name} </li>)}
    </ul>
    )
     
}