const movieCd2 = 20111009;
const Url2 = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd="+movieCd2;
const title2 = document.getElementById("title")
const div12 = document.getElementById("div1");

moviesInfo(Url2);
function moviesInfo(url2){
    fetch(url2).then(res => res.json())
        .then(function(data){
            const titleT2 = document.createElement('h1');
            const elhy2 = document.createElement('div');
            const texthy2 = document.createElement('p');
            titleT2.innerHTML = `${data.movieInfoResult.movieInfo.movieNm}` +'<br>('+ `${data.movieInfoResult.movieInfo.movieNmEn}` +')'
            texthy2.innerHTML = '개봉일 : ' + `${data.movieInfoResult.movieInfo.openDt}` +'<br>'
                + '감독 : ' + `${data.movieInfoResult.movieInfo.directors[0].peopleNm}` +'<br>'
                + '배우 : ' + `${data.movieInfoResult.movieInfo.actors[0].peopleNm}` + ' , ' + `${data.movieInfoResult.movieInfo.actors[1].peopleNm}` + ' , ' + `${data.movieInfoResult.movieInfo.actors[2].peopleNm}` +'<br>'
                + '장르 : ' + `${data.movieInfoResult.movieInfo.genres[0].genreNm}` +'<br>'
                + '상영등급 : ' + `${data.movieInfoResult.movieInfo.audits[0].watchGradeNm}` +'<br>';
            elhy2.appendChild(texthy2);
            div12.appendChild(elhy2);
            title2.appendChild(titleT2);

        });
}

