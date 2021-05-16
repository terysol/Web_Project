const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

// querySelecter는 모든 것을 가져온다. 
// local Storage에 내 적어놓은 이름을 저장한다. => 껐다가 다시 켜도 그대로 있게 (브라우저에 저장)
// local storage -> javascript 정보들을 저장하는 공간

const USER_LS="currentUser",
    SHOWING_CN="showing";

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
    event.preventDefault();     // 새로고침 x
    const currentValue=input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}
function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit" ,handleSubmit);
}
function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}
function loadName(){
    const currenetUser=localStorage.getItem(USER_LS);
    if(currenetUser === null){      // she is not
        askForName();
    }else{   //she is
        paintGreeting(currenetUser);
    }
}
function init(){
    loadName();
}

init();