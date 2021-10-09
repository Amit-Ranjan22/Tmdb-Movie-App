// https://api.themoviedb.org/3/movie/550?api_key=97b02d3f0196ff4ae8de221437c48834
// let apiKey = "97b02d3f0196ff4ae8de221437c48834";
// let apiKey1 = "1cf50e6248dc270629e802686245c2c8";
// let baseUrl = "https://api.themoviedb.org/3";
// let popularMoviesUrl = "/discover/movie?sort_by=popularity.desc&";
// let popularApiUrl = `${baseUrl}${popularMoviesUrl}api_key=${apiKey}`;
// let imageUrl = "https://image.tmdb.org/t/p/w500";
// let main = document.getElementById("main");

const API_KEY = "api_key=97b02d3f0196ff4ae8de221437c48834";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const SEARCH_URL = BASE_URL+"/search/movie?"+API_KEY;
const main = document.getElementById("main");
