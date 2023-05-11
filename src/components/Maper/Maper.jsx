import React from "react";

export const Maper = ({ data }) => {
    return (
    <ul>
        {data.map( dataItem => <li key={dataItem.id}>{dataItem.title || dataItem.name} </li>)}
    </ul>
    )
     
}