document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${taskText}</span>
                <button onclick="toggleCompleted(this)">Done</button>
                <button onclick="removeTask(this)">Remove</button>
            `;
            taskList.appendChild(li);
            taskInput.value = "";
        }
    }

    function toggleCompleted(button) {
        const taskItem = button.parentNode;
        taskItem.classList.toggle("completed");
    }

    function removeTask(button) {
        const taskItem = button.parentNode;
        taskList.removeChild(taskItem);
    }

    window.addTask = addTask;
    window.toggleCompleted = toggleCompleted;
    window.removeTask = removeTask;
});
