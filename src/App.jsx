import { Routes, Route } from 'react-router-dom';
// import Film from "./MovieDetails/MovieDetails"
import Layout from "./components/Layout/Layout";
import Movies from "./pages/Movies/Movies"
import Home from "./pages/Home/Home"
import Cast from "./components/Cast/Cast"
import Reviews from 'components/Reviews/Reviews';


export const App = () => {
  return (
    < >
      <h1>Commit</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="home" element={<Home />} ></Route>
          <Route path="movies" element={<Movies/>} >
            <Route path="cast" element={<Cast/>}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          {/* <Route path="home" element={<Home/>}></Route> */}
        </Route>
      </Routes>
      {/* <Layout/>  
      <Film/> */}
    </>
  );
};
