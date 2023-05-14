import axios from "axios";

const key = '278bf75944205bdb0a6474cdc0be106c'; 

async function fetchTop() {
    let list = [];
    await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`)
        .then(responce => { 
            console.log("in fetchTop", responce.data.results)
            if (responce.data.results.length > 0) {
                list = responce.data.results;
                return
            } 
                return 
            
            
        }).catch(error => console.log("in fetchTop", error))
           
            
              
    return list;    
}
async function fetchMovie(filmName) {
    let list = [];
    await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${filmName}&language=en-US&page=1&per_page=12&include_adult=false`)
        .then(responce => {
            console.log("in fetchMovie", responce.data.results)
            if (responce.data.results.length > 0) {
                list = responce.data.results;
                return
            } 
            return 
        })
    return list;
}

async function fetchDetails(id) {
    let obj = {};
    await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`)
        .then(responce => {
            console.log("in fetchDetails", responce.data)
            if (responce.data) {
                obj = responce.data;
                return
            } 
            return 
        })
    return obj;
} 

async function fetchReviews(id) {
    let list = [];
    await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`)
        .then(responce => {
            console.log("in fetchReviews", responce.data.results)
            if (responce.data.results.length > 0) {
                list = responce.data.results;
                return
            } 
            return 
        })
    return list;
}

async function fetchCast(id) {
    let list = [];
    await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`)
        .then(responce => {
            console.log("in fetchTop", responce.data.cast)
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
    fetchReviews,
}
