import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom/dist";
import "./Layout.css"

export const Layout = () => {
    return (
        <div className="Container"> 
            <header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/movies">Movies</NavLink>
                </nav>
           </header>
            <Outlet/>
        </div>
    )
}

 