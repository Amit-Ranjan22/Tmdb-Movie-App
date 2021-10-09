let api_url =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=97b02d3f0196ff4ae8de221437c48834&page=1';

  let img_path = 'https://image.tmdb.org/t/p/w1280';

  let search_api = 'https://api.themoviedb.org/3/search/movie?api_key=97b02d3f0196ff4ae8de221437c48834&query="'

let form = document.getElementById('form')
let search = document.getElementById('search')
let main = document.getElementById('main')



getMovies(api_url)

function getMovies(url){
    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data.results)
        showMovies(data.results)
    })
}

function showMovies(results){
    main.innerHTML = ''
    for (let i = 0; i < results.length; i++){
        let movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `<img src="${img_path}${results[i].poster_path}" alt="${results[i].title}" <div class="movie-info"><h3>${results[i].title}</h3><span class="${getColor(results[i].vote_average)}">${results[i].vote_average}</span></div><div class="overview"><h3>Overview</h3>${results[i].overview}</div>`;
        main.appendChild(movieEl)

    }
}

function getColor(vote) {
    if(vote >= 8){
        return "green"
    }else if(vote >= 5){
        return "orange"
    }else{
        return "red"
    }
}

