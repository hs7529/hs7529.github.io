
const API_KEY = "24db3be2b702e7654819ae0ac14ac9ff"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
        });

}
function onGeoError(){
    alert("Can't Find You. No Weather For You");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

