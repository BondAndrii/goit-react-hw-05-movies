import { Routes, Route } from 'react-router-dom';
// import Film from "./MovieDetails/MovieDetails"
import Layout from "./components/Layout/Layout";
import Movies from "./components/Movies/Movies"
import Home from "./components/Home/Home"
import Cast from "./components/Cast/Cast"
import Reviews from 'components/Reviews/Reviews';


export const App = () => {
  return (
    < >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="movies" element={<Movies/>} >
            <Route path="cast" element={<Cast/>}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="home" element={<Home/>}></Route>
        </Route>
      </Routes>
      {/* <Layout/>  
      <Film/> */}
    </>
  );
};
