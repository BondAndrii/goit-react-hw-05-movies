import {lazy, Suspense} from 'react';

import { Routes, Route } from "react-router-dom";

// import { Circles } from 'react-loader-spinner';

import Loader from 'components/Loader/Loader';

// import styles from "./App.module.css"

import Layout from "./components/Layout/Layout";

const Home = lazy(() => import("./pages/Home/Home"));

const Movies = lazy(() => import("./pages/Movies/Movies"));

const MovieDetails = lazy(() => import("./pages/MovieDetails/MovieDetails"));

const Cast = lazy(() => import("./components/Cast/Cast"));

const Reviews = lazy(() => import("./components/Reviews/Reviews"));

const NotFound = lazy(() => import("./components/NotFound/NotFound"));



export const App = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};