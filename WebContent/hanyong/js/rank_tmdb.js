let today = new Date();
let year = today.getFullYear(); // 년도
let month = ('0' + (today.getMonth() + 1)).slice(-2);  // 월
let date = today.getDate() - 1;  // 날짜
let d_str = year + "" + month + "" + date
let name
let url_rank = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt="+d_str
let url_search = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
let url_info = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd="
let postPath = "https://image.tmdb.org/t/p/w1280";
const movieRank = document.getElementById("movieRank");
const table_R = document.getElementById("table_R")
moviesRank(url_rank);
function moviesRank(url_rank){
    //순위정보 json 생성
    fetch(url_rank).then(res => res.json())
        .then(async function(data){
            let movieList = data.boxOfficeResult.dailyBoxOfficeList;
            for (let i = 0; i < 5; i++) {
                //상세정보 json 생성
                await fetch(url_search + movieList[i].movieNm +"&language=ko-KR").then(res_I => res_I.json())
                    .then(function(info){
                        for (let j = 0; j < info.results.length; j++) {
                            if (movieList[i].movieNm === info.results[j].title){
                                let mInfo = info.results[j];
                                const elR = document.createElement('div');
                                elR.classList.add('swiper-slide');
                                const imageR = document.createElement('img');
                                const textR = document.createElement('h2');
                                textR.innerHTML = movieList[i].rank + ". " + mInfo.title
                                imageR.src = postPath + mInfo.poster_path;
                                elR.appendChild(imageR);
                                elR.appendChild(textR);
                                movieRank.appendChild(elR)
                            }
                        }
                    })
            }
        });
}
moviesRank_table(url_rank);
function moviesRank_table(url_rank){
    //순위정보 json 생성
    fetch(url_rank).then(res => res.json())
        .then(async function(data){
            console.log(data.boxOfficeResult.boxofficeType);
            let movieList = data.boxOfficeResult.dailyBoxOfficeList;
            const table_R = document.getElementById("table_R");

            for (let i = 0; i < 5; i++) {
                console.log(i)
                console.log(url_info+movieList[i].movieCd);
                //상세정보 json 생성
                await fetch(url_info+movieList[i].movieCd).then(res_I => res_I.json())
                    .then(function(info){
                        console.log(movieList[i].rank)
                        let mInfo = info.movieInfoResult.movieInfo;
                        table_R.innerHTML += "<tr><td>"+movieList[i].rank + "</td><td>" + movieList[i].movieNm+"</td><td>" + mInfo.directors[0].peopleNm+"</td><td>" + mInfo.genres[0].genreNm+"</td><td>" + mInfo.openDt+"</td></tr>"
                    })
            }
        });
}


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
