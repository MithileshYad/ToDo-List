function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== '') {
        const newTask = document.createElement("li");
        newTask.innerHTML = `
        <input type="checkbox" class="delete-btn" onclick="delete(this)">
            <span>${taskInput.value}</span>

            

           
        `;
        taskList.appendChild(newTask);
        taskInput.value = "";
    } 
    
    
    else {
        alert("Please enter a task!");
    }
}

function removeTask(task) {
    task.parentNode.remove();
}
