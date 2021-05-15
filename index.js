
const title=document.querySelector('#title');
// title.innerHTML="Hi! From JS";
// title.style.color="red";
// document.title="I own you now";

const BASE_COLOR="rgb(52, 73, 94)";
const OTHER_COLOR="#e056fd";

function handleClick(event){
   const currentColor=title.style.color;
   if(currentColor === BASE_COLOR){
       title.style.color=OTHER_COLOR;
   }else{
       title.style.color=BASE_COLOR;
   }
}
function init(){
    title.style.color=BASE_COLOR;
    title.addEventListener("click", handleClick);
}

init();

// title.addEventListener("click",handleResize);
// 함수 뒤에 괄호가 있으면 바로 호출하라는 뜻, 없으면 바로 호출 하지 않는다. 



