let taskCounter = 0;

function updateTaskCount() {
  const totalTasksElement = document.getElementById('totalTasks');
  totalTasksElement.innerText = taskCounter;
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  if (taskInput.value === '') {
    alert('Please enter the element of the list');
    return;
  }

  const taskItem = document.createElement('li');
  taskItem.innerHTML = `
    <input type="radio">
    <span>${taskInput.value}</span>
    <button onclick="deleteTask(this)">Clear</button>
  `;

  taskList.appendChild(taskItem);
  taskInput.value = '';
  taskCounter++;
  updateTaskCount();
}

function toggleTaskCompletion(radio) {
  const taskItem = radio.parentElement;
  taskItem.classList.toggle('completed');
}

function deleteTask(button) {
  const taskItem = button.parentElement;
  taskItem.remove();
  taskCounter--;
  updateTaskCount();
}
