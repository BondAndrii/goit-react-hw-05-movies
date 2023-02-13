import React from "react";
import {Link, Outlet} from "react-router-dom"


const Movies = () => {
    return (
        <div>
            <h1>Компонент Movies</h1>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
            <Outlet/>
        </div>
    )
}
export default Movies;