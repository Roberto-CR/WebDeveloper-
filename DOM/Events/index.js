let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let li = document.querySelector("li");
const inputLength = ()=>{
    return input.value.length;
}

const create = ()=>{
    let li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value="";
}
const addListAfterClick=()=>{
    if (inputLength()>0) {
        create();
    }
}

const addListAfterkeypress=(e)=>{
    if (e.code === "Enter" && inputLength() ) {  //checks whether the pressed key is "Enter"
        create();
    }
}



function doneTask(task) {
	if (task.target.tagName === "LI"){
		task.target.classList.toggle("done");
	}
}

function deleteListElement(element) {
	if (element.target.className === "delClass"){
		element.target.parentElement.remove();
	}
}

function handleUlClick (element) {
	doneTask(element);
	deleteListElement(element);
}


ul.addEventListener("click", handleUlClick)
button.addEventListener("click",addListAfterClick);


input.addEventListener("keydown",addListAfterkeypress);