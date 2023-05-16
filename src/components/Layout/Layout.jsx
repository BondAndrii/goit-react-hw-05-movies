import React, {Suspense} from "react";

import { NavLink } from "react-router-dom";

import { Outlet } from "react-router-dom/dist";

import styles from "./Layout.module.css"

import Loader from 'components/Loader/Loader';

const Layout = () => {
    return (
        <div className={styles.Container}> 
            <header className={styles.Header}>
                <nav className={styles.Navigation}>
                    <NavLink className={styles.Link} to="/">Home</NavLink>
                    <NavLink className={styles.Link} to="/movies">Movies</NavLink>
                </nav>
            </header>
            <main>
                <Suspense fallback={<Loader/>}>
                    <Outlet />
                </Suspense>
            </main>
        </div>
    )
}

export default Layout;