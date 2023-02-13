import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom/dist";
import "./Layout.css"

 const Layout = () => {
    return (
        <div className="Layuot"> 
            <h2 className="Layuot__element">Home</h2>
            <Link to="/movies" className="Layuot__element">Movies</Link>
            <Outlet/>
        </div>
    )
}

export default Layout;