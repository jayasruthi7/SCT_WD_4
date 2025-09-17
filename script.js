function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskValue = taskInput.value.trim();
  if (taskValue === "") return;

  const li = document.createElement("li");
  li.classList.add("task-item");

  // Random gradient background for each task
  const gradients = [
    "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
    "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
    "linear-gradient(135deg, #84fab0, #8fd3f4)",
    "linear-gradient(135deg, #ffecd2, #fcb69f)"
  ];
  li.style.background = gradients[Math.floor(Math.random() * gradients.length)];

  // Task text
  const span = document.createElement("span");
  span.textContent = taskValue;

  // Tick button
  const tickBtn = document.createElement("button");
  tickBtn.innerHTML = "✔";
  tickBtn.classList.add("tick-btn");
  tickBtn.onclick = () => {
    li.classList.toggle("completed");
  };

  // Delete button
  const delBtn = document.createElement("button");
  delBtn.innerHTML = "✖";
  delBtn.classList.add("delete-btn");
  delBtn.onclick = () => li.remove();

  li.appendChild(span);
  li.appendChild(tickBtn);
  li.appendChild(delBtn);

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}

function clearAll() {
  document.getElementById("taskList").innerHTML = "";
}

function filterTasks() {
  const filter = document.getElementById("filter").value;
  const tasks = document.querySelectorAll(".task-item");

  tasks.forEach(task => {
    if (filter === "all") {
      task.style.display = "flex";
    } else if (filter === "completed") {
      task.style.display = task.classList.contains("completed") ? "flex" : "none";
    } else if (filter === "pending") {
      task.style.display = !task.classList.contains("completed") ? "flex" : "none";
    }
  });
}
