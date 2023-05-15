import React, {Suspense} from "react";

import { NavLink } from "react-router-dom";

import { Outlet } from "react-router-dom/dist";

import styles from "./Layout.module.css"
import { Circles } from "react-loader-spinner";

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
                <Suspense fallback={<Circles height="80" width="80" radius="9" color = 'green' ariaLabel = 'three-dots-loading' wrapperStyle wrapperClass/>}>
                    <Outlet />
                </Suspense>
            </main>
        </div>
    )
}

export default Layout;