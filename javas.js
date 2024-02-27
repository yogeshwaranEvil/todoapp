function addTask(){


var task = document.getElementById('task-input').value;
if(task.trim()!=''){
console.log(task);

var taskItem = document.createElement('li');
taskItem.className ="rounded-lg border border-black p-3 shadow-lg flex flex-row items-center justify-between";

taskItem.textContent = task;

document.getElementById('task-list').appendChild(taskItem);

var deleteButton = document.createElement("button");
deleteButton.textContent= 'delete';
deleteButton.className="bg-red-500 text-white px-4 py-2 rounded-full";

deleteButton.addEventListener("click",function(){
    taskItem.remove()
    var count = document.getElementById("task-list").childElementCount
tasktotal.textContent=count;
} );
taskItem.appendChild(deleteButton);
    
var tasktotal = document.getElementById("total-task");
var count = document.getElementById("task-list").childElementCount
tasktotal.textContent= count;
document.getElementById('text-input').value = '';




}

}
function deleteall(){
    document.getElementById("task-list").innerHTML="";
    var tasktotal = document.getElementById("total-task");
    tasktotal.textContent = 0;


}