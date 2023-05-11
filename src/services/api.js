import axios from "axios";

const key = '278bf75944205bdb0a6474cdc0be106c'; 

async function fetchTop() {
    let list = [];
    await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`)
        .then(responce => { 
            if (responce.data.results.length > 0) {
                list = responce.data.results;
                return
            } 
                return 
            
            
        }).catch(error => console.log(error))
           
            
              
    return list;    
}
async function fetchMovie(filmName) {
    let list = [];
    await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${filmName}&language=en-US&page=1&per_page=12&include_adult=false`)
        .then(responce => {
            if (responce.data.results.length > 0) {
                list = responce.data.results;
                return
            } 
            return 
        })
    return list;
}

async function fetchDetails() {
    let obj = {};
    await axios.get(`https://api.themoviedb.org/3/movie/2929?api_key=${key}&language=en-US`)
        .then(responce => {
            if (responce.data) {
                obj = responce.data;
                return
            } 
            return 
        })
    return obj;
} 

async function fetchReview() {
    let list = [];
    await axios.get(`https://api.themoviedb.org/3/movie/2929/reviews?api_key=${key}&language=en-US&page=1`)
        .then(responce => {
            if (responce.data.results.length > 0) {
                list = responce.data.results;
                return
            } 
            return 
        })
    return list;
}

async function fetchCast() {
    let list = [];
    await axios.get(`https://api.themoviedb.org/3/movie/2927/credits?api_key=${key}&language=en-US`)
        .then(responce => {
            if (responce.data.cast.length > 0) {
                list = responce.data.cast;
                return
            } 
            return 
        })
    return list;
}
    
export const api = {
    fetchTop,
    fetchMovie,
    fetchDetails,
    fetchCast,
    fetchReview,
}
