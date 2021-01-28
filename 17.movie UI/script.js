const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a0e37bb376436cf45664b1fa59aa993d';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280/'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=a0e37bb376436cf45664b1fa59aa993d&query="';
const main = document.querySelector('.main');
const form = document.getElementById('form');
const search = document.getElementById('search');


getMovies(API_URL);


async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    showMovies(data.results);
}

function showMovies(movies) {

    main.innerHTML = '';
    movies.forEach(movie => {

        const { poster_path, title, overview, vote_average, video, release_date } = movie;

        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');
        movieContainer.innerHTML = `
    <img src="${IMG_PATH + poster_path}"
                alt="">
            <div class="overview">
                <h3 class="title" id="title">${title}</h3>
                <h4 class="${voteColor(vote_average)}">${vote_average}</h4>
                <p>${overview}</p>
                <h5>Date : ${release_date}</h5>
                
            </div>
    `;
        main.appendChild(movieContainer);


    });

}

function voteColor(vote) {
    if (vote >= 8) {
        return 'green'
    } else if (vote > 6) {
        return 'blue'
    } else {
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchValue = search.value;
    if (searchValue.trim() === '') {
        alert('enter name');
        window.location.reload();
    } else {
        getMovies(SEARCH_API + searchValue);
        search.value = '';
    }
})