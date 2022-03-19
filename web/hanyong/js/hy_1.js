function printMovieInfo(){
    let movieCd = 20173404
    let url = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd="+movieCd;
    $.getJSON(url,function(res){
        let movie = res.movieInfoResult.movieInfo;
        d.append("<hr>");
        d.append("개봉일 : "+movie.openDt+"<br>");
        d.append("감독 : "+movie.directors[0].peopleNm+"<br>");
        d.append("주연 : "+movie.actors[0].peopleNm+", "+movie.actors[1].peopleNm+", "+movie.actors[2].peopleNm);
        d.append("<hr>");
    })
}
printMovieInfo();