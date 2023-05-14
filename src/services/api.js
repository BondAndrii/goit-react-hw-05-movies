import axios from "axios";

const key = '278bf75944205bdb0a6474cdc0be106c'; 

async function fetchTrend() {
    try {
        const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`)
        // console.log(data.results);
        return data.results
    } catch (error) {
        throw new Error('Oops, we don`t have any movies');
    }
}

async function fetchMovie(filmName) {
    try {
        const {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${filmName}&language=en-US&page=1&per_page=12&include_adult=false`)
        // console.log(data.results);
        return data;
    } catch (error) {
        throw new Error('Oops, we don`t have any movies');
    }
}

async function fetchDetails(id) {
    try {
        const {data} = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`);
        console.log("fetchDetails", data);
        return data;
    } catch (error) {
        throw new Error('Oops, we don`t have any movies');
    }
}
async function fetchCast (movieId) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}`
    );
    // console.log(data.cast);
    return data.cast;
  } catch (error) {
    throw new Error('Oops, there is no cast movie');
  }
};

async function  fetchReviews(movieId) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${key}`
    );
    // console.log(data.results);
    return data.results;
  } catch (error) {
    throw new Error('Oops, we don`t have any reviews');
  }
};
// async function fetchTop() {

    
//     let list = [];
//     await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`)
//         .then(responce => {
//             // console.log("in fetchTop", responce.data.results)
//             if (responce.data.results.length > 0) {
//                 list = responce.data.results;
//                 return
//             }
//                 return
            
            
//         }).catch(error => console.log("in fetchTop", error))
           
            
              
//     return list;
// }

// export async function getTrendingMovies() {
//   try {
//     const {data} = await axios.get(
//       `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&include_adult=false`
//     );
//     return data;
//   } catch (error) {
//     throw new Error('Oops, we don`t have any movies');
//   }
// }

// async function fetchMovie(filmName) {
//     let list = [];
//     await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${filmName}&language=en-US&page=1&per_page=12&include_adult=false`)
//         .then(responce => {
//             // console.log("in fetchMovie", responce.data.results)
//             if (responce.data.results.length > 0) {
//                 list = responce.data.results;
//                 return
//             }
//             return
//         })
//     return list;
// }

// async function fetchDetails(id) {
//     let obj = {};
//     await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`)
//         .then(responce => {
//             // console.log("in fetchDetails", responce.data)
//             if (responce.data) {
//                 obj = responce.data;
//                 return
//             }
//             return
//         })
//     return obj;
// }

// async function fetchReviews(id) {
//     let list = [];
//     await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`)
//         .then(responce => {
//             // console.log("in fetchReviews", responce.data.results)
//             if (responce.data.results.length > 0) {
//                 list = responce.data.results;
//                 return
//             }
//             return
//         })
//     return list;
// }

// async function fetchCast(id) {
//     let list = [];
//     await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`)
//         .then(responce => {
//             // console.log("in fetchTop", responce.data.cast)
//             if (responce.data.cast.length > 0) {
//                 list = responce.data.cast;
//                 return
//             }
//             return
//         })
//     return list;
// }


    
const api = {
    // fetchTop,
    fetchMovie,
    fetchDetails,
    fetchCast,
    fetchReviews,
    fetchTrend,
}


export default api;