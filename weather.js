const COORDS="coords";
const weather=document.querySelector(".js-weather");

function getWeather(lat, lon){
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place= json.name;
        weather.innerText=`${temperature} @ ${place}`;
    })
}

function saveCoords(coordsObj){     // 위도 경도 , storage에 저장하기
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){    // 위도, 경도 좌표를 가져오는데 성공했을 때 실행
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordObj= {
        latitude,
        longitude
    };
    saveCoords(coordObj);
    getWeather(latitude,longitude);
}

function handleGeoError(){

}
function askForCoords(){
    // 내 위치 읽기
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}

function loadCoords(){
    const loadedCoords=localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        const parsedCoords=JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude,parsedCoords.longitude);
    }
}
function init(){
    loadCoords();
}
init();