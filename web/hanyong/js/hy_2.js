const movieCd = 20173403;
const Url = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd="+movieCd;
const title = document.getElementById("title")
const div1 = document.getElementById("div1");

moviesInfo(Url);
function moviesInfo(url){
    fetch(url).then(res => res.json())
        .then(function(data){
            console.log(data.movieInfoResult.movieInfo.openDt);
            const titleT = document.createElement('h1');
            const elhy = document.createElement('div');
            const texthy = document.createElement('p');
            titleT.innerHTML = `${data.movieInfoResult.movieInfo.movieNm}` +'('+ `${data.movieInfoResult.movieInfo.movieNmEn}` +')'
            texthy.innerHTML = '개봉일 : ' + `${data.movieInfoResult.movieInfo.openDt}` +'<br>'
                + '감독 : ' + `${data.movieInfoResult.movieInfo.directors[0].peopleNm}` + ' , ' + `${data.movieInfoResult.movieInfo.directors[1].peopleNm}` +'<br>'
                + '배우 : ' + `${data.movieInfoResult.movieInfo.actors[0].peopleNm}` + ' , ' + `${data.movieInfoResult.movieInfo.actors[1].peopleNm}` + ' , ' + `${data.movieInfoResult.movieInfo.actors[2].peopleNm}` +'<br>'
                + '장르 : ' + `${data.movieInfoResult.movieInfo.genres[0].genreNm}` +'<br>'
                + '상영등급 : ' + `${data.movieInfoResult.movieInfo.audits[0].watchGradeNm}` +'<br>';
            elhy.appendChild(texthy);
            div1.appendChild(elhy);
            title.appendChild(titleT);
        });
}

