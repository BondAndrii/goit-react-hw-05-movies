import axios from 'axios'
const key = '278bf75944205bdb0a6474cdc0be106c'; 

async function getFilm() {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/157336?api_key=${key}`);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

const api = {
    getFilm,
}

export default api;