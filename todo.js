const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList=document.querySelector(".js-toDoList");

const TODOS_LS='toDos';

const toDos=[];

function saveToDos(){     // local storagedp todo를 저장
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));    // JSON.stringify => JS 객체를 string으로 바꿔줌.
}

function paintToDo(text){   // toDo를 화면에 보여주기
    const li =document.createElement("li");
    const delBtn=document.createElement("button");
    const span=document.createElement("span");
    const newId=toDos.length+1;

    delBtn.innerText = "❌";
    span.innerText = text;
    li.appendChild(span);        // father 요소를 넣는다.
    li.appendChild(delBtn);
    li.id=newId;
    toDoList.appendChild(li);
    const toDoObj={
        text:text,
        id:newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(e){
    e.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}


function loadToDos(){
    const loadedToDos=localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos=JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}


function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();
