const apiUrl_main = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const main = document.getElementById("main");
showMovies(apiUrl_main);
function showMovies(url){
    fetch(url).then(res => res.json())
        .then(function(data){
            console.log(data.results);
            data.results.forEach(element => {
                const el_main = document.createElement('div');
                const image_main = document.createElement('img');
                const text_main = document.createElement('h2');

                text_main.innerHTML = `${element.title}`;
                image_main.src = IMGPATH + element.poster_path;
                el_main.appendChild(image_main);
                el_main.appendChild(text_main);
                main.appendChild(el_main);
            });
        });
}