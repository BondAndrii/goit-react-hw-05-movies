import React from "react";
import {Outlet} from "react-router-dom"


const Movies = () => {
    return (
        <div>
            <h1>Компонент Movies</h1>
            <Outlet/>
        </div>
    )
}
export default Movies;