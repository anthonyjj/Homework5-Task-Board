// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
 

// Todo: create a function to generate a unique task id
function generateTaskId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 7);
}

// Todo: create a function to create a task card
function createTaskCard(task) {

    
    const title = document.getElementById('task-title').value;
    const dueDate = document.getElementById('datepick').value;
    const description = document.getElementById('task-description').value;

  
    const newTask = {
      id: generateTaskId(),
      title: title,
      dueDate: dueDate,
      description: description,
      status: "To Do", 
    };

    taskList.push(newTask);

    localStorage.setItem("tasks", JSON.stringify(taskList));
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    const todoCards = document.getElementById("todo-cards");
    todoCards.innerHTML = ""; 
  
    
    for (const task of taskList) {
      const card = createTaskCard(task);
  
      const laneId = `#${task.status}-cards`;
      const lane = document.querySelector(laneId);
      lane.appendChild(card);
    }
  }


// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
document.getElementById('add-task-button').addEventListener('click', handleAddTask);
  
