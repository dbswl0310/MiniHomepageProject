const movieCd1 = 20173403;
const Url1 = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd="+movieCd1;
const title1 = document.getElementById("title")
const div11 = document.getElementById("div1");

moviesInfo(Url1);
function moviesInfo(url1){
    fetch(url1).then(res => res.json())
        .then(function(data){
            const titleT1 = document.createElement('h1');
            const elhy1 = document.createElement('div');
            const texthy1 = document.createElement('p');
            titleT1.innerHTML = `${data.movieInfoResult.movieInfo.movieNm}` +'('+ `${data.movieInfoResult.movieInfo.movieNmEn}` +')'
            texthy1.innerHTML = '개봉일 : ' + `${data.movieInfoResult.movieInfo.openDt}` +'<br>'
            + '감독 : ' + `${data.movieInfoResult.movieInfo.directors[0].peopleNm}` + ' , ' + `${data.movieInfoResult.movieInfo.directors[1].peopleNm}` +'<br>'
            + '배우 : ' + `${data.movieInfoResult.movieInfo.actors[0].peopleNm}` + ' , ' + `${data.movieInfoResult.movieInfo.actors[1].peopleNm}` + ' , ' + `${data.movieInfoResult.movieInfo.actors[2].peopleNm}` +'<br>'
            + '장르 : ' + `${data.movieInfoResult.movieInfo.genres[0].genreNm}` +'<br>'
            + '상영등급 : ' + `${data.movieInfoResult.movieInfo.audits[0].watchGradeNm}` +'<br>';
            elhy1.appendChild(texthy1);
            div11.appendChild(elhy1);
            title1.appendChild(titleT1);
        });
}

