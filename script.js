const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", addTask);

function addTask(event) {
    event.preventDefault();

    const taskTitle = document.getElementById("task-title").value;
    const taskDescription = document.getElementById("task-description").value;

    const task = document.createElement("div");
    task.className = "task";
    task.innerHTML = `<h3>${taskTitle}</h3><p>${taskDescription}</p><button class="delete">Delete</button><button class="complete">Complete</button>`;

    taskList.appendChild(task);

    document.getElementById("task-title").value = "";
    document.getElementById("task-description").value = "";

    task.querySelector(".delete").addEventListener("click", deleteTask);
    task.querySelector(".complete").addEventListener("click", completeTask);
}

function deleteTask() {
    this.parentElement.remove();
}

function completeTask() {
    this.parentElement.classList.toggle("completed");
}
