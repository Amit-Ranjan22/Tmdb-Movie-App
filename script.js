let api_url =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=97b02d3f0196ff4ae8de221437c48834&page=1';

  let img_path = 'https://image.tmdb.org/t/p/w1280';

  let search_api = 'https://api.themoviedb.org/3/search/movie?api_key=97b02d3f0196ff4ae8de221437c48834&query="'

let form = document.getElementById('form')
let search = document.getElementById('search')
let main = document.getElementById('main')
let tagsEl = document.getElementById("tags")

let genres = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]

let selectedGenre = []

setGenre()

function setGenre(){
    tagsEl.innerHTML = ''

    for(let i = 0; i < genres.length; i++){
        let tagDivEl = document.createElement('div');
        tagDivEl.classList.add('tag');
        tagDivEl.id = genres[i].id;
        tagDivEl.innerText = genres[i].name;
        
        tagDivEl.addEventListener('click', function(){
            if(selectedGenre.length == 0){
                selectedGenre.push(genres[i].id)
            }else{
                if(selectedGenre.includes(genres[i].id)){
                    for(let z = 0; z < selectedGenre.length; z++){
                        if(selectedGenre[z] == genres[i].id){
                            let idx = selectedGenre.indexOf(selectedGenre[z])
                            selectedGenre.splice(idx, 1);
                        }    
                    }
                }else{
                    selectedGenre.push(genres[i].id)
                }
            }
            console.log(selectedGenre)
            getMovies(`${api_url}&with_genres=${selectedGenre.join(',')}`)

            highlightSelectedGenre();
        })
        tagsEl.appendChild(tagDivEl);
    }
}

function clearButton(){
    let clearbutton = document.getElementById('clear')
    if(clearbutton){
        clearbutton.classList.add('highlight');
    }else{
        let clrBtn = document.createElement('div')
    clrBtn.classList.add('tag', 'highlight')
    clrBtn.id = 'clear';
    clrBtn.innerText = 'Clear-Genre'
    clrBtn.addEventListener('click', function(){
        selectedGenre = [];
        setGenre();
        getMovies(api_url);
    })
    tagsEl.appendChild(clrBtn);
    }  
}

getMovies(api_url)

function highlightSelectedGenre(){
    let tags = document.querySelectorAll(".tag")

    for (let z = 0; z < tags.length; z++){
        tags[z].classList.remove("highlight")
    }
    clearButton()
    if(selectedGenre.length !== 0){
        for(let i = 0; i < selectedGenre.length; i++){
            let highlightedTag = document.getElementById(selectedGenre[i])
            highlightedTag.classList.add('highlight')
        }
    }
}

function getMovies(url){
    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data.results)

        if(data.results.length !== 0){
            showMovies(data.results)
        }else {
            main.innerHTML = `<h1 class='noResults'>No Results Found</h1>`
        }
        
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

form.addEventListener('submit', function(event){
    event.preventDefault();
    let searchTerm = search.value

    selectedGenre = [];
    setGenre();

    if(searchTerm && searchTerm !== ''){
        getMovies(search_api + searchTerm)
        search.value = ''
    }else {
        window.location.reload()
    }
})