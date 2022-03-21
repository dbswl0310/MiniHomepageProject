let today = new Date();
let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate() - 1;  // 날짜
let d_str = year+month+date
let url_rank = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt="+d_str

moviesRank(url_rank);
function moviesRank(url_rank){
    fetch(url_rank).then(res => res.json())
        .then(function(data){
            console.log(data.boxOfficeResult.boxofficeType);
            let movies = [
                { rank:5,
                    title: `${data.boxOfficeResult.dailyBoxOfficeList[4].movieNm}`,
                    director:'Steven Spielberg',
                    theme:'Fantasy/Mystery/Science fiction',
                    releaseDate:'June 11, 1993'
                },
                { rank:4,
                    title: 'Aliens',
                    director:'James Cameron',
                    theme:' Fantasy/Science fiction/Horror',
                    releaseDate:'July 18, 1986'
                },
                { rank:3,
                    title: 'The Fifth Element',
                    director:'Luc Besson',
                    theme:'Fantasy/Science fiction',
                    releaseDate:'May 9, 1997'
                },
                { rank:2,
                    title: "Howl's Moving Castle",
                    director:'Hayao Miyazaki',
                    theme:'Drama/Fantasy',
                    releaseDate:'June 10, 2005'
                },
                { rank:1,
                    title: 'Equilibrium',
                    director:'Kurt Wimmer',
                    theme:'Thriller/Tech noir',
                    releaseDate:'December 6, 2002'
                },
            ]

            let tableBody = document.querySelector('tbody');

            movies.forEach((e)=>{
                tableBody.insertAdjacentHTML("afterend", "<tr><td class='rank'>"+e.rank+"</td><td>"+e.title+"</td><td>"+e.director+"</td><td>"+e.theme+"</td><td>"+e.releaseDate+"</td></tr>");
            });


        });
}
