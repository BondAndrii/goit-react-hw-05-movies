import axios from "axios";

const key = '278bf75944205bdb0a6474cdc0be106c'; 

async function fetchTop() {
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
    
const api = {
    fetchTop,
    fetchMovie,
    fetchDetails,
    fetchCast,
    fetchReviews,    
}


export default api;