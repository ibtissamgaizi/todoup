const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", addTask);

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => createTask(task));
}
function addTask() {
  if (taskInput.value === "") return;

  createTask(taskInput.value);
  saveTask(taskInput.value);
  taskInput.value = "";
}

function createTask(text) {
  const li = document.createElement("li");
  li.innerHTML = `${text} <span onclick=\"removeTask(this)\">✖</span>`;
  taskList.appendChild(li);
}

function saveTask(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTask(element) {
  const text = element.parentElement.textContent.replace("✖", "").trim();
  element.parentElement.remove();

  let tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks = tasks.filter(t => t !== text);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

loadTasks();