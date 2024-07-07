const inputText = document.getElementById("input-text");
const listContainer = document.getElementById("list");
const completeTask = document.getElementById("completed-task");
const incompleteTask = document.getElementById("incomplete-task");

function updateTask() {
  const completedTasks = document.querySelectorAll(".completed").length;
  const incompletedTasks = document.querySelectorAll("li:not(.completed)").length;

  completeTask.textContent = completedTasks;
  incompleteTask.textContent = incompletedTasks;
}

function addTask() {
    const task = inputText.value.trim();
    const listOfTask = document.createElement("li") 
    
    if (!task) {
        alert("Write down a task");
        return;
    }

    listOfTask.innerHTML = `
    <label>
      <input type="checkbox">
      <span>${task}</span>
    </label>
    <span class="edit-button">Edit</span>
    <span class="delete-button">Delete</span>
    `;
    
    listContainer.appendChild(listOfTask);
    inputText.value = "";

    const checkbox = listOfTask.querySelector("input");
    const editButton = listOfTask.querySelector(".edit-button");
    const taskSpan = listOfTask.querySelector("label span");
    const deleteButton = listOfTask.querySelector(".delete-button");


    checkbox.addEventListener("click", function () {
      listOfTask.classList.toggle("completed");
      updateTask();
    });

    editButton.addEventListener("click", function () {
      const update = prompt("Edit the following task: ", taskSpan.textContent);
      if (update !== null) {
        taskSpan.textContent = update;
        updateTask();
      }
    });

    deleteButton.addEventListener("click", function () {
      if (confirm("Are you sure you want to delete this task? ")) {
        listOfTask.remove();
        updateTask();
      }
    });
    updateTask();
}
