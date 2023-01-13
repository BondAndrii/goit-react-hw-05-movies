import { Routes, Route } from 'react-router-dom';
// import Film from "./MovieDetails/MovieDetails"
import Layout from "./Layout/Layout";


export const App = () => {
  return (
    < >
      <Routes>
        <Route path="/" element={<Layout/>}></Route>
      </Routes>
      {/* <Layout/>  
      <Film/> */}
    </>
  );
};
