function addTask(){

let input = document.getElementById("taskInput");
let task = input.value;

if(task === ""){
alert("Enter a task");
return;
}

let li = document.createElement("li");

li.innerHTML = task +
" <button class='delete' onclick='deleteTask(this)'>Delete</button>";

document.getElementById("taskList").appendChild(li);

input.value = "";

}

function deleteTask(btn){

btn.parentElement.remove();

}