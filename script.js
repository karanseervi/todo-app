// Load tasks on page load
window.onload = function () {
    showTasks();
  };
  
  function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();
  
    if (task) {
      let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks.push({ name: task, completed: false });
      localStorage.setItem("tasks", JSON.stringify(tasks));
      input.value = "";
      showTasks();
  }
  
  function toggleTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showTasks();
  }
  
  function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showTasks();
  }
  
  function showTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
  
    tasks.forEach((task, index) => {
      let li = document.createElement("li");
      li.textContent = task.name;
      li.className = task.completed ? "completed" : "";
  
      li.onclick = () => toggleTask(index);
  
      let delBtn = document.createElement("button");
      delBtn.textContent = "❌";
      delBtn.style.float = "right";
      delBtn.onclick = (e) => {
        e.stopPropagation(); // Prevent triggering toggle
        deleteTask(index);
      };
  
      li.appendChild(delBtn);
      taskList.appendChild(li);
    });
  }
  }