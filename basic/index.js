
const title=document.querySelector('#title');
// title.innerHTML="Hi! From JS";
// title.style.color="red";
// document.title="I own you now";

const CLICKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener("click", handleClick);
}
        //  mouseenter ->  마우스가 들어갈때 색 변환
init();

// function handleOffline(){
//     console.log('lalalala');
// }

// function handleOnline(){
//     console.log("Welcom BACK");
// }

// window.addEventListener("offline",handleOffline);
// window.addEventListener("online",handleOnline);

// title.addEventListener("click",handleResize);
// 함수 뒤에 괄호가 있으면 바로 호출하라는 뜻, 없으면 바로 호출 하지 않는다. 



