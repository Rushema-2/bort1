const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");


addTaskBtn.addEventListener("click", function(){
    const task = taskInput.value .trim()

    if(task === ""){
        alert("please enter  a task.");
        return;
    }
    const li = document.createElement("li");
    li.textContent = task;

    taskList.appendChild(li);

    taskInput.value = "";
    // taskInput.focus();
})