import { Routes, Route } from 'react-router-dom';
// import Film from "./MovieDetails/MovieDetails"
import Layout from "./components/Layout/Layout";
import Movies from "./components/Movies/Movies"


export const App = () => {
  return (
    < >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="movies" element={<Movies/>} ></Route>
        </Route>
      </Routes>
      {/* <Layout/>  
      <Film/> */}
    </>
  );
};
