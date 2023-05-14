import React
// { useState, useEffect }
    from "react"

import {
    Outlet
    // , useSearchParams
} from "react-router-dom";

// import { SearchMovies } from "components/SearchMovies/SearchMovies";

// import { Maper } from "components/Maper/Maper";

// import { api } from 'services/api';

export const Movies = (
    // { getId }
) => {
    // const [searchMovie, setSearchMovie] = useState('');
    // const [searchList, setSearchList] = useState([]);
    // const [searchParams, setSearchParams] = useSearchParams();
    // const filmName = searchParams.get("query") ?? "";

    // const updateQueryString = (query) => {
    //     const nextParams = query !== "" ? { query } : {};
    //     setSearchParams(nextParams);
    // }


    // useEffect(() => { 
    //     // if (searchMovie === '')
    //     if (filmName === '')
    //     {
    //            return
    //         //    alert('Please, enter films name')
    //             } else {
    //            api.fetchMovie(filmName).then(responce => { setSearchList(responce); }).catch(error => console.log(error));
          
    //             }    
    //     }, [filmName]); 
    // const findSearchMovie = (word) => {
    //     setSearchMovie(word);        
    // } 
  

    return (
        <div>            
            {/* <SearchMovies
                // onSubmit={updateQueryString}
                onSubmit={updateQueryString}
                forMaper={searchList}
            />         */}
            {/* <Maper data={searchList} onClick={getId} /> */}
            <Outlet />
           
        </div>
    )
}
