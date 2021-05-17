
const COORDS="coords";

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
}

function handleGeoError(){

}
function askForCoords(){
    // 내 위치 읽기
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}

function loadCoords(){
    const loadedCords=localStorage.getItem(COORDS);
    if(loadedCords === null){
        askForCoords();
    }else{

    }
}
function init(){
    loadCoords();
}
init();