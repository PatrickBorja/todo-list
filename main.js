
window.onload = function() {
  const savedTasks = localStorage.getItem('tasks');
  if (savedTasks) {
      const taskList = document.getElementById('taskList');
      taskList.innerHTML = savedTasks;
  }
}

function saveTasks() {
  const taskList = document.getElementById('taskList').innerHTML;
  localStorage.setItem('tasks', taskList);
}


function addTask() {
    let taskinput = document.getElementById('taskinput');
    let taskList = document.getElementById('taskList');

    if (taskinput.value !== '') {
        let newTask = document.createElement('li');
        newTask.innerHTML = `
        <span>${taskinput.value}</span>
        <button class="edit-btn" onclick="editTask(this)">Edit</button>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        <button class="save-btn" style="display: none;" onclick="saveTask(this)">Save</button>
        `;
        taskList.appendChild(newTask);
        taskinput.value = '';
        saveTasks();
    } 
    
    else {
        alert('Kailangan mo maglagay bes ng gagawin.');
    }
}
  
  // Function to delete a task
function deleteTask(task) {
    let taskList = document.getElementById('taskList');
    taskList.removeChild(task.parentNode);
    saveTasks();
}
  
  // Function to edit a task
function editTask(editButton) {
    let listItem = editButton.parentNode;
    let taskText = listItem.querySelector('span');
    let editBtn = listItem.querySelector('.edit-btn');
    let deleteBtn = listItem.querySelector('.delete-btn');
    let saveBtn = listItem.querySelector('.save-btn');
  
    taskText.contentEditable = true;
    taskText.focus();
    editBtn.style.display = 'none';
    deleteBtn.style.display = 'none';
    saveBtn.style.display = 'inline-block';
    saveTasks();
}
  
  // Function to save edited task
function saveTask(saveButton) {
    let listItem = saveButton.parentNode;
    let taskText = listItem.querySelector('span');
    let editBtn = listItem.querySelector('.edit-btn');
    let deleteBtn = listItem.querySelector('.delete-btn');
    let saveBtn = listItem.querySelector('.save-btn');
  
    taskText.contentEditable = false;
    editBtn.style.display = 'inline-block';
    deleteBtn.style.display = 'inline-block';
    saveBtn.style.display = 'none';
    saveTasks();
}
