import {
  // useState, useEffect,
  lazy, Suspense
} from 'react';

import {
  Routes, Route,
  // useSearchParams
} from "react-router-dom";

// const Layout = lazy(() => import("./components/Layout/Layout"));

import Layout from "./components/Layout/Layout";

// const api = lazy(() => import("./services/api"))

// import api  from 'services/api';

const Home = lazy(() => import("./pages/Home/Home"));

// import { Home } from 'pages/Home/Home';

const Movies = lazy(() => import("./pages/Movies/Movies"));

// import { Movies } from "./pages/Movies/Movies"

// const SearchMovies = lazy(() => import("./components/SearchMovies/SearchMovies"));

// import { SearchMovies } from 'components/SearchMovies/SearchMovies';

const MovieDetails = lazy(() => import("./components/MovieDetails/MovieDetails"));

// import { MovieDetails } from 'components/MovieDetails/MovieDetails';

const Cast = lazy(() => import("./components/Cast/Cast"));

// import { Cast } from "components/Cast/Cast";

const Reviews = lazy(() => import("./components/Reviews/Reviews"));

// import { Reviews } from "components/Reviews/Reviews";



const NotFound = lazy(()=> import("./components/NotFound/NotFound"))

// import { NotFound } from 'components/NotFound/NotFound';






export const App = () => {
  // const [top, setTop] = useState([]);
  // const [id, setId] = useState(''); 
  // const [searchList, setSearchList] = useState([]);
  // const [searchParams, setSearchParams] = useSearchParams();

  // const filmName = searchParams.get("query") ?? ""; 
  // console.log("filmName first rander", filmName);
  // console.log("searchList in App", searchList)
  // useEffect(() => {    
  //   api.fetchTop().then(list => {setTop(list)}).catch(error => console.log(error))    
  // }, []);

 
  // const handleGetId = (id) => {
  //   setId(id); 
    
  // }
  
  // const updateQueryString = (query) => {
  // const nextParams = query !== "" ? { query } : {};
  // setSearchParams(nextParams);
    
  // }
  // useEffect(() => { 
  //   // console.log("filmName else rander", filmName); 
  //       if (filmName === '')
  //       {
  //              return
  //           //    alert('Please, enter films name')
  //               } else {
  //              api.fetchMovie(filmName).then(responce => { setSearchList(responce); }).catch(error => console.log("in fetchTop", error));
          
  //               }    
  // }, [filmName]); 
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route  path='/' element={<Layout/>}>          
          {/* <Route index element={<Home list={top } getId={handleGetId}/>} /> */}
          <Route index element={<Home/>} />
          <Route path='movies' element={<Movies />} >
            {/* <Route index element={ <SearchMovies
                  // onSubmit={updateQueryString}
                  onSubmit={updateQueryString}
                  list={searchList}
                  getId={handleGetId}
              /> } /> */}
          <Route path="movies/:movieId" element={<MovieDetails />}>
            {/* <Route path="/movies/:movieId" element={<MovieDetails
              // forDetailsId={id}
            />} > */}
              <Route path='cast' element={<Cast
                // castId={id}
              />} />
              <Route path='reviews' element={<Reviews
                // forReviewsId={id}
              />} />                
            </Route>   
          </Route>
        <Route path="*" element={<NotFound/>} />
        </Route>          
      </Routes> 
    </Suspense>
  )
};

