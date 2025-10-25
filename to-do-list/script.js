const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Step 1: Load tasks from localStorage when the app starts
document.addEventListener('DOMContentLoaded', loadTasks);

// Step 2: Add a new task
addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  addTaskToList(taskText);
  saveTask(taskText); // Save to localStorage
  taskInput.value = '';
});

// Function to add task to the list
function addTaskToList(taskText, completed = false) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn">❌</button>
  `;

  if (completed) li.classList.add('completed');

  // Toggle completed
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
    updateLocalStorage();
  });

  // Delete button
  li.querySelector('.delete-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    li.remove();
    updateLocalStorage();
  });

  taskList.appendChild(li);
}

// Step 3: Save task to localStorage
function saveTask(taskText) {
  const tasks = getTasks();
  tasks.push({ text: taskText, completed: false });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Step 4: Get tasks from localStorage
function getTasks() {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
}

// Step 5: Load tasks on startup
function loadTasks() {
  const tasks = getTasks();
  tasks.forEach(task => addTaskToList(task.text, task.completed));
}

// Step 6: Update localStorage whenever tasks change
function updateLocalStorage() {
  const tasks = [];
  document.querySelectorAll('li').forEach(li => {
    tasks.push({
      text: li.querySelector('span').innerText,
      completed: li.classList.contains('completed')
    });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}