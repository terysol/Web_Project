const title=document.querySelector('#title');
// title.innerHTML="Hi! From JS";
// title.style.color="red";
// document.title="I own you now";

function handleResize(event){
   title.style.color="red";
}

title.addEventListener("click",handleResize);
// 함수 뒤에 괄호가 있으면 바로 호출하라는 뜻, 없으면 바로 호출 하지 않는다. 
