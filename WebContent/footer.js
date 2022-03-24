const WEATHER_API_KEY = "4e617a5d595b6343318452d4264c3a06";
const COORDS = "coords";
const USERNAME = "username";

const cityText = document.querySelector(".add_city");
const tempText = document.querySelector(".add_temp");
const humidityText = document.querySelector(".add_humidity");
const timeText = document.querySelector(".add_time");

const getWeather = (lat, lon) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
        .then(res => res.json())
        .then(data => {
            const { name, main: { humidity, temp, } } = data;
            cityText.innerText = `위치: ${name}`;
            tempText.innerText = `현재 온도: ${temp}도`;
            humidityText.innerText = `습도: ${humidity}%`;
        });
}

const saveCoords = (coordsObj) => {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

const handleGeoSucces = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude,
    }
    saveCoords(coordsObj);
}

const handleGeoError = () => {
    console.log("Can not access geo location");
}

const askForCoords = () => {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

const loadCoords = () => {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

const getTime = () => {
    const time = new Date();
    const ampm = time.getHours() >= 12 ? "오후" : "오전"
    const hours = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    timeText.innerText = `${ampm} ${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}


function init() {
    loadCoords();
    setInterval(() => { getTime() }, 1000);
}

init();