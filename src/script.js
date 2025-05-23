const addButton = document.getElementById("addTask");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

loadTasks();

function addTask(){

    const task = taskInput.value.trim();
    if(task) {
        createTaskElement(task);
        taskInput.value = ""; 
        saveTasks();

    }else {
        alert("Please enter a task.");
    }
}

addButton.addEventListener("click", addTask);

function createTaskElement(task) {
    const taskItem = document.createElement("li");
    taskItem.textContent = task;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    deleteButton.addEventListener("click", function() {
        taskList.removeChild(taskItem);
        saveTasks();
        
    });

}    

function saveTasks() {
    let tasks = [];
    taskList.querySelectorAll("li").forEach(taskItem => {
        tasks.push(taskItem.textContent.replace("Delete", "")); 
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));


}    
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(createTaskElement);
}    




 